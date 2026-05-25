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
	"path/filepath"
	"strings"
	"syscall"

	"github.com/mengshi02/axons-home/internal/handler"
	"github.com/mengshi02/axons-home/internal/store"
)

// TLS certificate paths
const (
	defaultCertFile = "crt/www.axons.chat.pem"
	defaultKeyFile  = "crt/www.axons.chat.key"
)

//go:embed web
var webFS embed.FS

// DocsDir is the path to the axons docs directory
var docsDir string

func main() {
	// Command line flags
	port := flag.Int("port", 8080, "HTTP server port")
	dbPath := flag.String("db", "data/stats.db", "SQLite database path")
	tls := flag.Bool("tls", false, "Enable HTTPS (TLS) mode")
	certFile := flag.String("cert", defaultCertFile, "TLS certificate file path")
	keyFile := flag.String("key", defaultKeyFile, "TLS private key file path")
	flag.StringVar(&docsDir, "docs-dir", "", "Path to axons docs directory")
	flag.Parse()

	// Auto-detect docs directory if not specified
	if docsDir == "" {
		candidates := []string{
			filepath.Join("..", "axons", "docs"),
			filepath.Join(os.Getenv("GOPATH"), "src", "github.com", "mengshi02", "axons", "docs"),
			"/opt/axons/docs",
		}
		homeDir, _ := os.UserHomeDir()
		if homeDir != "" {
			candidates = append(candidates,
				filepath.Join(homeDir, "go", "src", "github.com", "mengshi02", "axons", "docs"),
			)
		}
		for _, dir := range candidates {
			if _, err := os.Stat(dir); err == nil {
				docsDir = dir
				break
			}
		}
	}

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
			case strings.HasPrefix(path, "/api/docs/") && (r.Method == http.MethodGet || r.Method == http.MethodHead):
				handleDocsAPI(w, r)
			default:
				http.NotFound(w, r)
			}
			return
		}

		// Docs page route
		if path == "/docs" || path == "/docs/" {
			data, err := fs.ReadFile(webContent, "docs.html")
			if err != nil {
				http.Error(w, "docs.html not found", http.StatusInternalServerError)
				return
			}
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			w.Write(data)
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

	// Start server
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

	// Determine protocol scheme
	scheme := "http"
	if *tls {
		scheme = "https"
	}

	log.Printf("Axons Home server starting on %s://localhost%s", scheme, addr)
	log.Printf("Database: %s", *dbPath)
	if *tls {
		log.Printf("TLS: enabled (cert: %s, key: %s)", *certFile, *keyFile)
	} else {
		log.Printf("TLS: disabled (use -tls to enable)")
	}
	if docsDir != "" {
		log.Printf("Docs directory: %s", docsDir)
	} else {
		log.Printf("Docs directory: not found (docs API will return 404)")
	}

	// Start server with HTTP or HTTPS
	if *tls {
		if err := server.ListenAndServeTLS(*certFile, *keyFile); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Server error: %v", err)
		}
	} else {
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Server error: %v", err)
		}
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

// handleDocsAPI serves markdown documentation files from the local docs directory
func handleDocsAPI(w http.ResponseWriter, r *http.Request) {
	if docsDir == "" {
		http.Error(w, "Docs directory not configured", http.StatusNotFound)
		return
	}

	// Extract doc name from path: /api/docs/{name}
	docName := strings.TrimPrefix(r.URL.Path, "/api/docs/")
	if docName == "" {
		http.Error(w, "Doc name required", http.StatusBadRequest)
		return
	}

	// Only allow known doc names to prevent directory traversal
	allowedDocs := map[string]bool{
		"architecture":            true,
		"manual":                  true,
		"configuration":           true,
		"api":                     true,
		"deployment":              true,
		"plugin-developer-guide":  true,
	}

	if !allowedDocs[docName] {
		http.Error(w, "Unknown document", http.StatusNotFound)
		return
	}

	// Get language preference from query parameter or Accept-Language header
	lang := r.URL.Query().Get("lang")
	if lang == "" {
		lang = "zh" // default to Chinese
	}

	// Determine file path based on language
	var filePath string
	if lang == "en" {
		filePath = filepath.Join(docsDir, docName+".md")
	} else {
		// For Chinese, look in zh subdirectory
		filePath = filepath.Join(docsDir, "zh", docName+".md")
	}

	data, err := os.ReadFile(filePath)
	if err != nil {
		// Fallback to English if Chinese file doesn't exist
		if lang != "en" {
			filePath = filepath.Join(docsDir, docName+".md")
			data, err = os.ReadFile(filePath)
		}
		if err != nil {
			http.Error(w, "Document not found", http.StatusNotFound)
			return
		}
	}

	w.Header().Set("Content-Type", "text/markdown; charset=utf-8")
	w.Write(data)
}