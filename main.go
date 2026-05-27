package main

import (
	"context"
	"embed"
	"flag"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"strconv"
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
	adminHandler := handler.NewAdminHandler(store)
	pluginHandler := handler.NewPluginHandler(store, filepath.Dir(*dbPath))

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
			// Public release API (no auth required)
			case path == "/api/releases/latest" && r.Method == http.MethodGet:
				adminHandler.GetLatestVersion(w, r)
			case path == "/api/releases/platforms" && r.Method == http.MethodGet:
				adminHandler.GetPlatformVisibility(w, r)

			// Public plugin APIs (no auth required)
			case path == "/api/plugins" && r.Method == http.MethodGet:
				pluginHandler.ListPlugins(w, r)
			case strings.HasPrefix(path, "/api/plugins/") && pluginPublicRoute(w, r, path, pluginHandler):
				// handled inside helper

			// Admin login (no auth required)
			case path == "/api/admin/login" && r.Method == http.MethodPost:
				adminHandler.Login(w, r)

			// Protected admin routes (auth required)
			case strings.HasPrefix(path, "/api/admin/"):
				// Authenticate via JWT cookie
				cookie, err := r.Cookie("axons_admin_token")
				if err != nil {
					http.Error(w, "unauthorized", http.StatusUnauthorized)
					return
				}
				claims, err := handler.ValidateToken(cookie.Value)
				if err != nil {
					http.Error(w, "unauthorized", http.StatusUnauthorized)
					return
				}
				// Inject claims into context
				ctx := context.WithValue(r.Context(), handler.ClaimsContextKey(), claims)
				r = r.WithContext(ctx)

				// Dispatch protected admin routes
				switch {
				case path == "/api/admin/logout" && r.Method == http.MethodPost:
					adminHandler.Logout(w, r)
				case path == "/api/admin/me" && r.Method == http.MethodGet:
					adminHandler.Me(w, r)
				case path == "/api/admin/change-password" && r.Method == http.MethodPost:
					adminHandler.ChangePassword(w, r)
				case path == "/api/admin/config/version" && r.Method == http.MethodPut:
					adminHandler.UpdateVersion(w, r)
				case path == "/api/admin/config/platforms" && r.Method == http.MethodPut:
					adminHandler.UpdatePlatformVisibility(w, r)
				// Admin plugin management
				case path == "/api/admin/plugins" && r.Method == http.MethodGet:
					pluginHandler.AdminListPlugins(w, r)
				case path == "/api/admin/plugins" && r.Method == http.MethodPost:
					pluginHandler.AdminCreatePlugin(w, r)
				case strings.HasPrefix(path, "/api/admin/plugins/"):
					adminPluginRoute(w, r, path, pluginHandler)
				default:
					http.NotFound(w, r)
				}

			// Stats API (existing)
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

		// Plugin marketplace page route
		if path == "/plugins" || path == "/plugins/" {
			data, err := fs.ReadFile(webContent, "plugins.html")
			if err != nil {
				http.Error(w, "plugins.html not found", http.StatusInternalServerError)
				return
			}
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			w.Write(data)
			return
		}

		// About page route
		if path == "/about" || path == "/about/" {
			data, err := fs.ReadFile(webContent, "about.html")
			if err != nil {
				http.Error(w, "about.html not found", http.StatusInternalServerError)
				return
			}
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			w.Write(data)
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

		// Admin page route
		if path == "/admin" || path == "/admin/" {
			data, err := fs.ReadFile(webContent, "admin.html")
			if err != nil {
				http.Error(w, "admin.html not found", http.StatusInternalServerError)
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
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
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

// pluginPublicRoute handles public plugin API routing
// Returns true if the route was matched
func pluginPublicRoute(w http.ResponseWriter, r *http.Request, path string, h *handler.PluginHandler) bool {
	// /api/plugins/{id}/versions
	// /api/plugins/{id}/download/{ver}
	// /api/plugins/{id}/icon
	// /api/plugins/{id}/screenshots/{n}
	// /api/plugins/{id}

	parts := strings.Split(strings.TrimPrefix(path, "/api/plugins/"), "/")
	if len(parts) == 0 || parts[0] == "" {
		return false
	}
	pluginID := parts[0]

	switch {
	case len(parts) == 1:
		h.GetPluginDetail(w, r, pluginID)
		return true
	case len(parts) == 2 && parts[1] == "versions":
		h.GetPluginVersions(w, r, pluginID)
		return true
	case len(parts) == 2 && parts[1] == "icon":
		h.ServePluginIcon(w, r, pluginID)
		return true
	case len(parts) == 3 && parts[1] == "download":
		h.DownloadPlugin(w, r, pluginID, parts[2])
		return true
	case len(parts) == 3 && parts[1] == "screenshots":
		n, err := strconv.Atoi(parts[2])
		if err != nil {
			http.Error(w, "invalid screenshot index", http.StatusBadRequest)
			return true
		}
		h.ServePluginScreenshot(w, r, pluginID, n)
		return true
	}
	return false
}

// adminPluginRoute handles admin plugin management routing
func adminPluginRoute(w http.ResponseWriter, r *http.Request, path string, h *handler.PluginHandler) {
	// /api/admin/plugins/{id}/versions  (POST)
	// /api/admin/plugins/{id}/versions/{ver} (DELETE)
	// /api/admin/plugins/{id}/icon (POST multipart)
	// /api/admin/plugins/{id} (GET/PUT/DELETE)

	parts := strings.Split(strings.TrimPrefix(path, "/api/admin/plugins/"), "/")
	if len(parts) == 0 || parts[0] == "" {
		http.NotFound(w, r)
		return
	}
	pluginID := parts[0]

	switch {
	case len(parts) == 1:
		switch r.Method {
		case http.MethodGet:
			h.AdminGetPlugin(w, r, pluginID)
		case http.MethodPut:
			h.AdminUpdatePlugin(w, r, pluginID)
		case http.MethodDelete:
			h.AdminDeletePlugin(w, r, pluginID)
		default:
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		}
	case len(parts) == 2 && parts[1] == "versions" && r.Method == http.MethodPost:
		h.AdminCreateVersion(w, r, pluginID)
	case len(parts) == 3 && parts[1] == "versions" && r.Method == http.MethodDelete:
		h.AdminDeleteVersion(w, r, pluginID, parts[2])
	case len(parts) == 2 && parts[1] == "icon" && r.Method == http.MethodPost:
		h.AdminUploadIcon(w, r, pluginID)
	case len(parts) == 2 && parts[1] == "screenshots" && r.Method == http.MethodPost:
		h.AdminUploadScreenshot(w, r, pluginID)
	case len(parts) == 3 && parts[1] == "screenshots" && r.Method == http.MethodDelete:
		index, err := strconv.Atoi(parts[2])
		if err != nil {
			http.Error(w, "invalid index", http.StatusBadRequest)
			return
		}
		h.AdminDeleteScreenshot(w, r, pluginID, index)
	default:
		http.NotFound(w, r)
	}
}