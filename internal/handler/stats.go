package handler

import (
	"encoding/json"
	"net/http"
	"strings"
	"time"

	"github.com/mengshi02/axons-home/internal/model"
	"github.com/mengshi02/axons-home/internal/store"
)

// StatsHandler handles statistics API requests
type StatsHandler struct {
	store *store.Store
}

// New creates a new StatsHandler
func New(s *store.Store) *StatsHandler {
	return &StatsHandler{store: s}
}

// RecordVisit handles POST /api/stats/visit
func (h *StatsHandler) RecordVisit(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	ip := realIP(r)
	ua := r.UserAgent()
	path := r.URL.Query().Get("path")
	if path == "" {
		path = "/"
	}
	referer := r.Referer()

	visit := &model.Visit{
		IP:        ip,
		UA:        ua,
		Path:      path,
		Referer:   referer,
		Device:    parseDevice(ua),
		OS:        parseOS(ua),
		Browser:   parseBrowser(ua),
		VisitedAt: time.Now(),
	}

	if err := h.store.RecordVisit(visit); err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

// GetStats handles GET /api/stats
func (h *StatsHandler) GetStats(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	stats, err := h.store.GetStats()
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(stats)
}

// Health check endpoint
func (h *StatsHandler) Health(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

// realIP extracts the real IP from the request
func realIP(r *http.Request) string {
	// Prefer reverse proxy headers
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		ips := strings.Split(xff, ",")
		return strings.TrimSpace(ips[0])
	}
	if xri := r.Header.Get("X-Real-IP"); xri != "" {
		return strings.TrimSpace(xri)
	}
	// Remove port
	addr := r.RemoteAddr
	if idx := strings.LastIndex(addr, ":"); idx != -1 {
		return addr[:idx]
	}
	return addr
}

// parseDevice parses device type from User-Agent
func parseDevice(ua string) string {
	uaLower := strings.ToLower(ua)
	if strings.Contains(uaLower, "mobile") || strings.Contains(uaLower, "android") || strings.Contains(uaLower, "iphone") {
		return "mobile"
	}
	if strings.Contains(uaLower, "tablet") || strings.Contains(uaLower, "ipad") {
		return "tablet"
	}
	return "desktop"
}

// parseOS parses operating system from User-Agent
func parseOS(ua string) string {
	uaLower := strings.ToLower(ua)
	switch {
	case strings.Contains(uaLower, "windows"):
		return "windows"
	case strings.Contains(uaLower, "mac os") || strings.Contains(uaLower, "macintosh"):
		return "mac"
	case strings.Contains(uaLower, "android"):
		return "android"
	case strings.Contains(uaLower, "iphone") || strings.Contains(uaLower, "ipad") || strings.Contains(uaLower, "ios"):
		return "ios"
	case strings.Contains(uaLower, "linux") || strings.Contains(uaLower, "cros"):
		return "linux"
	default:
		return "unknown"
	}
}

// parseBrowser parses browser from User-Agent
func parseBrowser(ua string) string {
	uaLower := strings.ToLower(ua)
	switch {
	case strings.Contains(uaLower, "edg/"):
		return "edge"
	case strings.Contains(uaLower, "chrome/") && !strings.Contains(uaLower, "edg/"):
		return "chrome"
	case strings.Contains(uaLower, "firefox/"):
		return "firefox"
	case strings.Contains(uaLower, "safari/") && !strings.Contains(uaLower, "chrome/"):
		return "safari"
	default:
		return "other"
	}
}