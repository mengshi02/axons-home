package store

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/mengshi02/axons-home/internal/model"
)

// ==================== Plugin CRUD ====================

// CreatePlugin inserts a new plugin
func (s *Store) CreatePlugin(p *model.Plugin) error {
	_, err := s.db.Exec(`
		INSERT INTO plugins (id, name, description, description_zh, description_en, category, icon_url, screenshots, tags, status, featured)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
	`, p.PluginID, p.Name, p.Description, p.DescriptionZh, p.DescriptionEn,
		p.Category, p.IconURL, p.Screenshots, p.Tags, p.Status, p.Featured)
	return err
}

// UpdatePlugin updates a plugin
func (s *Store) UpdatePlugin(p *model.Plugin) error {
	_, err := s.db.Exec(`
		UPDATE plugins SET name=?, description=?, description_zh=?, description_en=?,
			category=?, icon_url=?, screenshots=?, tags=?, status=?, featured=?, updated_at=CURRENT_TIMESTAMP
		WHERE id=?
	`, p.Name, p.Description, p.DescriptionZh, p.DescriptionEn,
		p.Category, p.IconURL, p.Screenshots, p.Tags, p.Status, p.Featured, p.PluginID)
	return err
}

// DeletePlugin deletes a plugin and its versions
func (s *Store) DeletePlugin(pluginID string) error {
	tx, err := s.db.Begin()
	if err != nil {
		return err
	}
	_, err = tx.Exec(`DELETE FROM plugin_versions WHERE plugin_id=?`, pluginID)
	if err != nil {
		tx.Rollback()
		return err
	}
	_, err = tx.Exec(`DELETE FROM plugin_downloads WHERE plugin_id=?`, pluginID)
	if err != nil {
		tx.Rollback()
		return err
	}
	_, err = tx.Exec(`DELETE FROM plugins WHERE id=?`, pluginID)
	if err != nil {
		tx.Rollback()
		return err
	}
	return tx.Commit()
}

// GetPlugin returns a single plugin by ID
func (s *Store) GetPlugin(pluginID string) (*model.Plugin, error) {
	p := &model.Plugin{}
	err := s.db.QueryRow(`
		SELECT id, name, description, description_zh, description_en, category, icon_url, screenshots, tags, status, featured, created_at, updated_at
		FROM plugins WHERE id=?
	`, pluginID).Scan(&p.PluginID, &p.Name, &p.Description, &p.DescriptionZh, &p.DescriptionEn,
		&p.Category, &p.IconURL, &p.Screenshots, &p.Tags, &p.Status, &p.Featured, &p.CreatedAt, &p.UpdatedAt)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	p.ID = 0 // we use plugin_id as the logical ID
	return p, nil
}

// ListPlugins returns all plugins (admin view, all statuses)
func (s *Store) ListPlugins() ([]model.Plugin, error) {
	rows, err := s.db.Query(`
		SELECT id, name, description, description_zh, description_en, category, icon_url, screenshots, tags, status, featured, created_at, updated_at
		FROM plugins ORDER BY updated_at DESC
	`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var plugins []model.Plugin
	for rows.Next() {
		var p model.Plugin
		if err := rows.Scan(&p.PluginID, &p.Name, &p.Description, &p.DescriptionZh, &p.DescriptionEn,
			&p.Category, &p.IconURL, &p.Screenshots, &p.Tags, &p.Status, &p.Featured, &p.CreatedAt, &p.UpdatedAt); err != nil {
			continue
		}
		plugins = append(plugins, p)
	}
	return plugins, nil
}

// ListPublishedPlugins returns only published plugins (public view)
func (s *Store) ListPublishedPlugins(category, tag, search string) ([]model.PluginListItem, error) {
	query := `SELECT id, name, description, category, icon_url, tags, featured FROM plugins WHERE status = 'published'`
	args := []interface{}{}
	if category != "" {
		query += ` AND category = ?`
		args = append(args, category)
	}
	if search != "" {
		query += ` AND (name LIKE ? OR description LIKE ? OR id LIKE ?)`
		like := "%" + search + "%"
		args = append(args, like, like, like)
	}
	query += ` ORDER BY featured DESC, updated_at DESC`

	rows, err := s.db.Query(query, args...)
	if err != nil {
		return nil, err
	}

	// Collect row data first (must close rows before making new queries due to MaxOpenConns=1)
	type rowData struct {
		id, name, desc, cat, iconURL, tagsStr string
		featured                              int
	}
	var rowsData []rowData
	for rows.Next() {
		var rd rowData
		if err := rows.Scan(&rd.id, &rd.name, &rd.desc, &rd.cat, &rd.iconURL, &rd.tagsStr, &rd.featured); err != nil {
			continue
		}
		rowsData = append(rowsData, rd)
	}
	rows.Close()

	var items []model.PluginListItem
	for _, rd := range rowsData {
		var tags []string
		json.Unmarshal([]byte(rd.tagsStr), &tags)

		latestVer, _ := s.GetLatestVersion(rd.id)
		dlCount, _ := s.GetDownloadCount(rd.id)

		items = append(items, model.PluginListItem{
			PluginID:      rd.id,
			Name:          rd.name,
			Description:   rd.desc,
			Category:      rd.cat,
			IconURL:       rd.iconURL,
			Tags:          tags,
			LatestVersion: latestVer,
			Downloads:     dlCount,
			Featured:      rd.featured == 1,
		})
	}
	// Tag filter (post-query since tags are in JSON)
	if tag != "" {
		filtered := []model.PluginListItem{}
		for _, item := range items {
			for _, t := range item.Tags {
				if strings.EqualFold(t, tag) {
					filtered = append(filtered, item)
					break
				}
			}
		}
		items = filtered
	}
	return items, nil
}

// ==================== Plugin Version CRUD ====================

// CreatePluginVersion inserts a new version
func (s *Store) CreatePluginVersion(v *model.PluginVersion) error {
	_, err := s.db.Exec(`
		INSERT INTO plugin_versions (plugin_id, version, min_axons_version, download_url, sha256, changelog, file_size)
		VALUES (?, ?, ?, ?, ?, ?, ?)
	`, v.PluginID, v.Version, v.MinAxonsVersion, v.DownloadURL, v.SHA256, v.Changelog, v.FileSize)
	return err
}

// DeletePluginVersion deletes a specific version
func (s *Store) DeletePluginVersion(pluginID, version string) error {
	_, err := s.db.Exec(`DELETE FROM plugin_versions WHERE plugin_id=? AND version=?`, pluginID, version)
	return err
}

// GetPluginVersions returns all versions for a plugin
func (s *Store) GetPluginVersions(pluginID string) ([]model.PluginVersion, error) {
	rows, err := s.db.Query(`
		SELECT id, plugin_id, version, min_axons_version, download_url, sha256, changelog, file_size, published_at
		FROM plugin_versions WHERE plugin_id=? ORDER BY published_at DESC
	`, pluginID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var versions []model.PluginVersion
	for rows.Next() {
		var v model.PluginVersion
		if err := rows.Scan(&v.ID, &v.PluginID, &v.Version, &v.MinAxonsVersion,
			&v.DownloadURL, &v.SHA256, &v.Changelog, &v.FileSize, &v.PublishedAt); err != nil {
			continue
		}
		versions = append(versions, v)
	}
	return versions, nil
}

// GetLatestVersion returns the latest version string for a plugin
func (s *Store) GetLatestVersion(pluginID string) (string, error) {
	var version string
	err := s.db.QueryRow(`
		SELECT version FROM plugin_versions WHERE plugin_id=? ORDER BY published_at DESC LIMIT 1
	`, pluginID).Scan(&version)
	if err == sql.ErrNoRows {
		return "", nil
	}
	return version, err
}

// ==================== Plugin Downloads ====================

// RecordDownload inserts a download record
func (s *Store) RecordDownload(pluginID, version, ip string) error {
	_, err := s.db.Exec(`
		INSERT INTO plugin_downloads (plugin_id, version, ip) VALUES (?, ?, ?)
	`, pluginID, version, ip)
	return err
}

// GetDownloadCount returns total downloads for a plugin
func (s *Store) GetDownloadCount(pluginID string) (int64, error) {
	var count int64
	err := s.db.QueryRow(`SELECT COUNT(*) FROM plugin_downloads WHERE plugin_id=?`, pluginID).Scan(&count)
	if err == sql.ErrNoRows {
		return 0, nil
	}
	return count, err
}

// GetDownloadURL returns the download URL for a specific plugin version
func (s *Store) GetDownloadURL(pluginID, version string) (string, error) {
	var url string
	query := `SELECT download_url FROM plugin_versions WHERE plugin_id=?`
	args := []interface{}{pluginID}
	if version != "" && version != "latest" {
		query += ` AND version=?`
		args = append(args, version)
	} else {
		query += ` ORDER BY published_at DESC`
	}
	query += ` LIMIT 1`
	err := s.db.QueryRow(query, args...).Scan(&url)
	if err == sql.ErrNoRows {
		return "", nil
	}
	return url, err
}

// ==================== Plugin Detail (public) ====================

// GetPluginDetail returns full plugin detail for public API
func (s *Store) GetPluginDetail(pluginID string) (*model.PluginDetailResponse, error) {
	p, err := s.GetPlugin(pluginID)
	if err != nil {
		return nil, err
	}
	if p == nil || p.Status != "published" {
		return nil, nil
	}

	var screenshots []string
	json.Unmarshal([]byte(p.Screenshots), &screenshots)
	var tags []string
	json.Unmarshal([]byte(p.Tags), &tags)

	versions, _ := s.GetPluginVersions(pluginID)

	return &model.PluginDetailResponse{
		PluginID:      p.PluginID,
		Name:          p.Name,
		Description:   p.Description,
		DescriptionZh: p.DescriptionZh,
		DescriptionEn: p.DescriptionEn,
		Category:      p.Category,
		IconURL:       p.IconURL,
		Screenshots:   screenshots,
		Tags:          tags,
		Featured:      p.Featured == 1,
		Versions:      versions,
	}, nil
}

// ==================== Icon/Screenshot file storage ====================

// Plugin icon and screenshot files are stored under data/plugins/{plugin_id}/
// Icon path: data/plugins/{plugin_id}/icon.png
// Screenshot path: data/plugins/{plugin_id}/screenshot_{n}.png

// GetPluginIconPath returns the file path for a plugin icon
func GetPluginIconPath(dataDir, pluginID string) string {
	return fmt.Sprintf("%s/plugins/%s/icon", dataDir, pluginID)
}

// GetPluginScreenshotPath returns the file path for a plugin screenshot
func GetPluginScreenshotPath(dataDir, pluginID string, index int) string {
	return fmt.Sprintf("%s/plugins/%s/screenshot_%d", dataDir, pluginID, index)
}

// UpdatePluginIconURL updates the icon_url field
func (s *Store) UpdatePluginIconURL(pluginID, iconURL string) error {
	_, err := s.db.Exec(`UPDATE plugins SET icon_url = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`, iconURL, pluginID)
	return err
}
