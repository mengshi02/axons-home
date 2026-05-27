package handler

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/mengshi02/axons-home/internal/model"
	"github.com/mengshi02/axons-home/internal/store"
)

// PluginHandler handles plugin marketplace APIs
type PluginHandler struct {
	store   *store.Store
	dataDir string // base directory for plugin file storage
}

// NewPluginHandler creates a new PluginHandler
func NewPluginHandler(s *store.Store, dataDir string) *PluginHandler {
	return &PluginHandler{store: s, dataDir: dataDir}
}

// ==================== Public APIs ====================

// ListPlugins handles GET /api/plugins
func (h *PluginHandler) ListPlugins(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	category := r.URL.Query().Get("category")
	tag := r.URL.Query().Get("tag")
	search := r.URL.Query().Get("search")

	items, err := h.store.ListPublishedPlugins(category, tag, search)
	if err != nil {
		log.Printf("List plugins error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if items == nil {
		items = []model.PluginListItem{}
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(model.PluginListResponse{Plugins: items})
}

// GetPluginDetail handles GET /api/plugins/:id
func (h *PluginHandler) GetPluginDetail(w http.ResponseWriter, r *http.Request, pluginID string) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	detail, err := h.store.GetPluginDetail(pluginID)
	if err != nil {
		log.Printf("Get plugin detail error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if detail == nil {
		http.Error(w, "plugin not found", http.StatusNotFound)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(detail)
}

// GetPluginVersions handles GET /api/plugins/:id/versions
func (h *PluginHandler) GetPluginVersions(w http.ResponseWriter, r *http.Request, pluginID string) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	versions, err := h.store.GetPluginVersions(pluginID)
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if versions == nil {
		versions = []model.PluginVersion{}
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{"versions": versions})
}

// DownloadPlugin handles GET /api/plugins/:id/download/:ver — records then 302 redirect
func (h *PluginHandler) DownloadPlugin(w http.ResponseWriter, r *http.Request, pluginID, version string) {
	ip := realIP(r)
	_ = h.store.RecordDownload(pluginID, version, ip)

	url, err := h.store.GetDownloadURL(pluginID, version)
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if url == "" {
		http.Error(w, "version not found", http.StatusNotFound)
		return
	}
	http.Redirect(w, r, url, http.StatusFound)
}

// ServePluginIcon handles GET /api/plugins/:id/icon
func (h *PluginHandler) ServePluginIcon(w http.ResponseWriter, r *http.Request, pluginID string) {
	iconPath := store.GetPluginIconPath(h.dataDir, pluginID)
	// Try common extensions
	for _, ext := range []string{".png", ".svg", ".jpg", ".webp"} {
		p := iconPath + ext
		if _, err := os.Stat(p); err == nil {
			http.ServeFile(w, r, p)
			return
		}
	}
	http.Error(w, "icon not found", http.StatusNotFound)
}

// ServePluginScreenshot handles GET /api/plugins/:id/screenshots/:n
func (h *PluginHandler) ServePluginScreenshot(w http.ResponseWriter, r *http.Request, pluginID string, index int) {
	ssPath := store.GetPluginScreenshotPath(h.dataDir, pluginID, index)
	for _, ext := range []string{".png", ".jpg", ".webp"} {
		p := ssPath + ext
		if _, err := os.Stat(p); err == nil {
			http.ServeFile(w, r, p)
			return
		}
	}
	http.Error(w, "screenshot not found", http.StatusNotFound)
}

// ==================== Admin APIs ====================

// AdminListPlugins handles GET /api/admin/plugins — all plugins, all statuses
func (h *PluginHandler) AdminListPlugins(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	plugins, err := h.store.ListPlugins()
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if plugins == nil {
		plugins = []model.Plugin{}
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{"plugins": plugins})
}

// AdminGetPlugin handles GET /api/admin/plugins/:id
func (h *PluginHandler) AdminGetPlugin(w http.ResponseWriter, r *http.Request, pluginID string) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	p, err := h.store.GetPlugin(pluginID)
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if p == nil {
		http.Error(w, "plugin not found", http.StatusNotFound)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(p)
}

// AdminCreatePlugin handles POST /api/admin/plugins
func (h *PluginHandler) AdminCreatePlugin(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var p model.Plugin
	if err := json.NewDecoder(r.Body).Decode(&p); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}
	p.PluginID = strings.TrimSpace(p.PluginID)
	p.Name = strings.TrimSpace(p.Name)
	if p.PluginID == "" || p.Name == "" {
		http.Error(w, "plugin_id and name are required", http.StatusBadRequest)
		return
	}
	if p.Status == "" {
		p.Status = "draft"
	}
	if p.Tags == "" {
		p.Tags = "[]"
	}
	if p.Screenshots == "" {
		p.Screenshots = "[]"
	}
	if err := h.store.CreatePlugin(&p); err != nil {
		log.Printf("Create plugin error: %v", err)
		http.Error(w, "create failed (id may already exist)", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok", "id": p.PluginID})
}

// AdminUpdatePlugin handles PUT /api/admin/plugins/:id
func (h *PluginHandler) AdminUpdatePlugin(w http.ResponseWriter, r *http.Request, pluginID string) {
	if r.Method != http.MethodPut {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var p model.Plugin
	if err := json.NewDecoder(r.Body).Decode(&p); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}
	p.PluginID = pluginID
	if err := h.store.UpdatePlugin(&p); err != nil {
		log.Printf("Update plugin error: %v", err)
		http.Error(w, "update failed", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

// AdminDeletePlugin handles DELETE /api/admin/plugins/:id
func (h *PluginHandler) AdminDeletePlugin(w http.ResponseWriter, r *http.Request, pluginID string) {
	if r.Method != http.MethodDelete {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if err := h.store.DeletePlugin(pluginID); err != nil {
		log.Printf("Delete plugin error: %v", err)
		http.Error(w, "delete failed", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

// AdminCreateVersion handles POST /api/admin/plugins/:id/versions
func (h *PluginHandler) AdminCreateVersion(w http.ResponseWriter, r *http.Request, pluginID string) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var v model.PluginVersion
	if err := json.NewDecoder(r.Body).Decode(&v); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}
	v.PluginID = pluginID
	if v.Version == "" || v.DownloadURL == "" {
		http.Error(w, "version and download_url are required", http.StatusBadRequest)
		return
	}
	if err := h.store.CreatePluginVersion(&v); err != nil {
		log.Printf("Create version error: %v", err)
		http.Error(w, "create failed (version may already exist)", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

// AdminDeleteVersion handles DELETE /api/admin/plugins/:id/versions/:ver
func (h *PluginHandler) AdminDeleteVersion(w http.ResponseWriter, r *http.Request, pluginID, version string) {
	if r.Method != http.MethodDelete {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if err := h.store.DeletePluginVersion(pluginID, version); err != nil {
		http.Error(w, "delete failed", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

// AdminUploadIcon handles POST /api/admin/plugins/:id/icon (multipart form)
func (h *PluginHandler) AdminUploadIcon(w http.ResponseWriter, r *http.Request, pluginID string) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	file, header, err := r.FormFile("file")
	if err != nil {
		http.Error(w, "file required", http.StatusBadRequest)
		return
	}
	defer file.Close()

	ext := filepath.Ext(header.Filename)
	if ext == "" {
		ext = ".png"
	}
	dir := filepath.Dir(store.GetPluginIconPath(h.dataDir, pluginID))
	os.MkdirAll(dir, 0755)
	path := store.GetPluginIconPath(h.dataDir, pluginID) + ext

	out, err := os.Create(path)
	if err != nil {
		http.Error(w, "save failed", http.StatusInternalServerError)
		return
	}
	defer out.Close()
	io.Copy(out, file)

	// Update icon_url in DB
	iconURL := "/api/plugins/" + pluginID + "/icon"
	h.store.UpdatePluginIconURL(pluginID, iconURL)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok", "icon_url": iconURL})
}

// AdminUploadScreenshot handles POST /api/admin/plugins/:id/screenshots (multipart form)
func (h *PluginHandler) AdminUploadScreenshot(w http.ResponseWriter, r *http.Request, pluginID string) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	file, header, err := r.FormFile("file")
	if err != nil {
		http.Error(w, "file required", http.StatusBadRequest)
		return
	}
	defer file.Close()

	ext := filepath.Ext(header.Filename)
	if ext == "" {
		ext = ".png"
	}

	// Find next available screenshot index
	index := 1
	for {
		ssPath := store.GetPluginScreenshotPath(h.dataDir, pluginID, index) + ext
		if _, err := os.Stat(ssPath); os.IsNotExist(err) {
			break
		}
		index++
	}

	dir := filepath.Dir(store.GetPluginScreenshotPath(h.dataDir, pluginID, index))
	os.MkdirAll(dir, 0755)
	path := store.GetPluginScreenshotPath(h.dataDir, pluginID, index) + ext

	out, err := os.Create(path)
	if err != nil {
		http.Error(w, "save failed", http.StatusInternalServerError)
		return
	}
	defer out.Close()
	io.Copy(out, file)

	// Update screenshots JSON in DB: append the new URL
	p, err := h.store.GetPlugin(pluginID)
	if err != nil || p == nil {
		http.Error(w, "plugin not found", http.StatusNotFound)
		return
	}
	var screenshots []string
	json.Unmarshal([]byte(p.Screenshots), &screenshots)
	screenshotURL := fmt.Sprintf("/api/plugins/%s/screenshots/%d", pluginID, index)
	screenshots = append(screenshots, screenshotURL)
	ssJSON, _ := json.Marshal(screenshots)
	h.store.UpdatePluginScreenshots(pluginID, string(ssJSON))

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"status":     "ok",
		"index":      index,
		"screenshot": screenshotURL,
	})
}

// AdminDeleteScreenshot handles DELETE /api/admin/plugins/:id/screenshots/:index
func (h *PluginHandler) AdminDeleteScreenshot(w http.ResponseWriter, r *http.Request, pluginID string, index int) {
	if r.Method != http.MethodDelete {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Remove screenshot file
	for _, ext := range []string{".png", ".jpg", ".webp"} {
		p := store.GetPluginScreenshotPath(h.dataDir, pluginID, index) + ext
		os.Remove(p)
	}

	// Update screenshots JSON in DB: remove the entry
	p, err := h.store.GetPlugin(pluginID)
	if err != nil || p == nil {
		http.Error(w, "plugin not found", http.StatusNotFound)
		return
	}
	var screenshots []string
	json.Unmarshal([]byte(p.Screenshots), &screenshots)
	removedURL := fmt.Sprintf("/api/plugins/%s/screenshots/%d", pluginID, index)
	filtered := []string{}
	for _, s := range screenshots {
		if s != removedURL {
			filtered = append(filtered, s)
		}
	}
	if filtered == nil {
		filtered = []string{}
	}
	ssJSON, _ := json.Marshal(filtered)
	h.store.UpdatePluginScreenshots(pluginID, string(ssJSON))

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}