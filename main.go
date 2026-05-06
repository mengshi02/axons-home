package main

import (
	"embed"
	"flag"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"

	"github.com/mengshi02/axons-home/internal/handler"
	"github.com/mengshi02/axons-home/internal/store"
)

//go:embed web
var webFS embed.FS

func main() {
	// 命令行参数
	port := flag.Int("port", 8080, "HTTP server port")
	dbPath := flag.String("db", "data/stats.db", "SQLite database path")
	flag.Parse()

	// 初始化存储层
	store, err := store.New(*dbPath)
	if err != nil {
		log.Fatalf("Failed to init store: %v", err)
	}
	defer store.Close()

	// 初始化 handler
	statsHandler := handler.New(store)

	// 静态文件系统
	webContent, err := fs.Sub(webFS, "web")
	if err != nil {
		log.Fatalf("Failed to create sub FS: %v", err)
	}
	fileServer := http.FileServer(http.FS(webContent))

	// 路由：用自定义 handler 分发 API 和静态文件
	rootHandler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path

		// API 路由
		if strings.HasPrefix(path, "/api/") {
			switch {
			case path == "/api/stats/visit" && r.Method == http.MethodPost:
				statsHandler.RecordVisit(w, r)
			case path == "/api/stats/health" && r.Method == http.MethodGet:
				statsHandler.Health(w, r)
			case path == "/api/stats" && r.Method == http.MethodGet:
				statsHandler.GetStats(w, r)
			default:
				http.NotFound(w, r)
			}
			return
		}

		// 静态文件服务
		if path == "/" {
			// 直接读取 index.html 避免 FileServer 的 301 重定向
			data, err := fs.ReadFile(webContent, "index.html")
			if err != nil {
				http.Error(w, "index.html not found", http.StatusInternalServerError)
				return
			}
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			w.Write(data)
			return
		} else {
			// 检查文件是否存在，不存在则回退 index.html（SPA 兼容）
			f, err := webContent.Open(strings.TrimPrefix(path, "/"))
			if err != nil {
				r.URL.Path = "/index.html"
			} else {
				f.Close()
			}
		}
		fileServer.ServeHTTP(w, r)
	})

	// 中间件
	finalHandler := withMiddleware(rootHandler)

	// 启动 HTTP 服务器
	addr := fmt.Sprintf(":%d", *port)
	server := &http.Server{
		Addr:    addr,
		Handler: finalHandler,
	}

	// 优雅关闭
	go func() {
		sigCh := make(chan os.Signal, 1)
		signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM)
		<-sigCh
		log.Println("Shutting down server...")
		server.Close()
	}()

	log.Printf("Axons Home server starting on http://localhost%s", addr)
	log.Printf("Database: %s", *dbPath)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatalf("Server error: %v", err)
	}
}

// withMiddleware 添加通用中间件
func withMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// CORS
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		// 缓存策略：API 不缓存，静态资源长缓存
		if strings.HasPrefix(r.URL.Path, "/api/") {
			w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
		} else {
			w.Header().Set("Cache-Control", "public, max-age=3600")
		}

		next.ServeHTTP(w, r)
	})
}