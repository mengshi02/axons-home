package model

import "time"

// Plugin represents a plugin in the marketplace
type Plugin struct {
	ID            int64     `json:"id"`
	PluginID      string    `json:"plugin_id"`       // e.g. chat.axons.huggingface
	Name          string    `json:"name"`
	Description   string    `json:"description"`
	DescriptionZh string    `json:"description_zh"`
	DescriptionEn string    `json:"description_en"`
	Category      string    `json:"category"`
	IconURL       string    `json:"icon_url"`
	Screenshots   string    `json:"screenshots"`     // JSON array string
	Tags          string    `json:"tags"`            // JSON array string
	Status        string    `json:"status"`          // published / unlisted / draft
	Featured      int       `json:"featured"`        // 0 or 1
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}

// PluginVersion represents a version of a plugin
type PluginVersion struct {
	ID             int64     `json:"id"`
	PluginID       string    `json:"plugin_id"`
	Version        string    `json:"version"`
	MinAxonsVersion string   `json:"min_axons_version"`
	DownloadURL    string    `json:"download_url"`
	SHA256         string    `json:"sha256"`
	Changelog      string    `json:"changelog"`
	FileSize       int64     `json:"file_size"`
	PublishedAt    time.Time `json:"published_at"`
}

// PluginDownload represents a download record
type PluginDownload struct {
	ID          int64     `json:"id"`
	PluginID    string    `json:"plugin_id"`
	Version     string    `json:"version"`
	IP          string    `json:"ip"`
	DownloadedAt time.Time `json:"downloaded_at"`
}

// PluginListResponse is the public API response for plugin listing
type PluginListResponse struct {
	Plugins []PluginListItem `json:"plugins"`
}

// PluginListItem is a single plugin in the list response
type PluginListItem struct {
	PluginID      string   `json:"id"`
	Name          string   `json:"name"`
	Description   string   `json:"description"`
	Category      string   `json:"category"`
	IconURL       string   `json:"icon_url"`
	Tags          []string `json:"tags"`
	LatestVersion string   `json:"latest_version"`
	Downloads     int64    `json:"downloads"`
	Featured      bool     `json:"featured"`
}

// PluginDetailResponse is the public API response for plugin detail
type PluginDetailResponse struct {
	PluginID      string          `json:"id"`
	Name          string          `json:"name"`
	Description   string          `json:"description"`
	DescriptionZh string          `json:"description_zh"`
	DescriptionEn string          `json:"description_en"`
	Category      string          `json:"category"`
	IconURL       string          `json:"icon_url"`
	Screenshots   []string        `json:"screenshots"`
	Tags          []string        `json:"tags"`
	Featured      bool            `json:"featured"`
	Versions      []PluginVersion `json:"versions"`
}