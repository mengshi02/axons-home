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
	// Command line flags
	port := flag.Int("port", 8080, "HTTP server port")
	dbPath := flag.String("db", "data/stats.db", "SQLite database path")
	flag.Parse()

	// Initialize storage layer
	store, err := store.New(*dbPath)
	if err != nil {
		log.Fatalf("Failed to init store: %v", err)
	}
	defer store.Close()

	// Initialize handler
	statsHandler := handler.New(store)

	// Static file system
	webContent, err := fs.Sub(webFS, "web")
	if err != nil {
		log.Fatalf("Failed to create sub FS: %v", err)
	}
	fileServer := http.FileServer(http.FS(webContent))

	// Routing: use custom handler to dispatch API and static files
	rootHandler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path

		// API routes
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

		// Static file serving
		if path == "/" {
			// Read index.html directly to avoid FileServer's 301 redirect
			data, err := fs.ReadFile(webContent, "index.html")
			if err != nil {
				http.Error(w, "index.html not found", http.StatusInternalServerError)
				return
			}
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			w.Write(data)
			return
		} else {
			// If file not found, fall back to index.html (SPA compatibility)
			f, err := webContent.Open(strings.TrimPrefix(path, "/"))
			if err != nil {
				r.URL.Path = "/index.html"
			} else {
				f.Close()
			}
		}
		fileServer.ServeHTTP(w, r)
	})

	// Middleware
	finalHandler := withMiddleware(rootHandler)

	// Start HTTP server
	addr := fmt.Sprintf(":%d", *port)
	server := &http.Server{
		Addr:    addr,
		Handler: finalHandler,
	}

	// Graceful shutdown
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

// withMiddleware adds common middleware
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

		// Cache strategy: no cache for API, long cache for static assets
		if strings.HasPrefix(r.URL.Path, "/api/") {
			w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
		} else {
			w.Header().Set("Cache-Control", "public, max-age=3600")
		}

		next.ServeHTTP(w, r)
	})
}