package store

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"time"

	"golang.org/x/crypto/bcrypt"
	_ "modernc.org/sqlite"

	"github.com/mengshi02/axons-home/internal/model"
)

// Store wraps SQLite database operations
type Store struct {
	db *sql.DB
}

// New creates and initializes a Store, auto-creates tables
func New(dbPath string) (*Store, error) {
	// Ensure directory exists
	dir := filepath.Dir(dbPath)
	if err := os.MkdirAll(dir, 0755); err != nil {
		return nil, fmt.Errorf("create db dir: %w", err)
	}

	db, err := sql.Open("sqlite", dbPath+"?_journal_mode=WAL&_busy_timeout=5000")
	if err != nil {
		return nil, fmt.Errorf("open db: %w", err)
	}

	// Optimize connection pool
	db.SetMaxOpenConns(1) // SQLite single writer
	db.SetMaxIdleConns(1)

	s := &Store{db: db}
	if err := s.migrate(); err != nil {
		return nil, fmt.Errorf("migrate: %w", err)
	}
	return s, nil
}

func (s *Store) migrate() error {
	_, err := s.db.Exec(`
		CREATE TABLE IF NOT EXISTS visits (
			id          INTEGER PRIMARY KEY AUTOINCREMENT,
			ip          TEXT    NOT NULL,
			ua          TEXT    DEFAULT '',
			path        TEXT    DEFAULT '/',
			referer     TEXT    DEFAULT '',
			device      TEXT    DEFAULT 'desktop',
			os          TEXT    DEFAULT 'unknown',
			browser     TEXT    DEFAULT 'other',
			country     TEXT    DEFAULT '',
			visited_at  DATETIME DEFAULT CURRENT_TIMESTAMP
		);
		CREATE INDEX IF NOT EXISTS idx_visits_ip   ON visits(ip);
		CREATE INDEX IF NOT EXISTS idx_visits_at   ON visits(visited_at);
		CREATE INDEX IF NOT EXISTS idx_visits_os   ON visits(os);
		CREATE INDEX IF NOT EXISTS idx_visits_date ON visits(date(visited_at));

		CREATE TABLE IF NOT EXISTS config (
			key   TEXT PRIMARY KEY,
			value TEXT NOT NULL
		);

		CREATE TABLE IF NOT EXISTS admins (
			id              INTEGER PRIMARY KEY AUTOINCREMENT,
			username        TEXT    NOT NULL UNIQUE,
			password_hash   TEXT    NOT NULL,
			must_change_pwd INTEGER DEFAULT 1,
			created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
			updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP
		);

		CREATE TABLE IF NOT EXISTS plugins (
			id              TEXT PRIMARY KEY,
			name            TEXT    NOT NULL,
			description     TEXT    DEFAULT '',
			description_zh  TEXT    DEFAULT '',
			description_en  TEXT    DEFAULT '',
			category        TEXT    DEFAULT '',
			icon_url        TEXT    DEFAULT '',
			screenshots     TEXT    DEFAULT '[]',
			tags            TEXT    DEFAULT '[]',
			status          TEXT    DEFAULT 'draft',
			featured        INTEGER DEFAULT 0,
			created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
			updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP
		);

		CREATE TABLE IF NOT EXISTS plugin_versions (
			id                INTEGER PRIMARY KEY AUTOINCREMENT,
			plugin_id         TEXT    NOT NULL REFERENCES plugins(id),
			version           TEXT    NOT NULL,
			min_axons_version TEXT    DEFAULT '',
			download_url      TEXT    NOT NULL,
			sha256            TEXT    DEFAULT '',
			changelog         TEXT    DEFAULT '',
			file_size         INTEGER DEFAULT 0,
			published_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
			UNIQUE(plugin_id, version)
		);

		CREATE TABLE IF NOT EXISTS plugin_downloads (
			id            INTEGER PRIMARY KEY AUTOINCREMENT,
			plugin_id     TEXT    NOT NULL REFERENCES plugins(id),
			version       TEXT    NOT NULL,
			ip            TEXT    DEFAULT '',
			downloaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
		);

		CREATE INDEX IF NOT EXISTS idx_plugin_versions_pid ON plugin_versions(plugin_id);
		CREATE INDEX IF NOT EXISTS idx_plugin_downloads_pid ON plugin_downloads(plugin_id);
	`)
	if err != nil {
		return err
	}

	// Seed default admin account if not exists
	return s.seedAdmin()
}

// seedAdmin creates the default admin account on first run
func (s *Store) seedAdmin() error {
	var count int
	err := s.db.QueryRow(`SELECT COUNT(*) FROM admins`).Scan(&count)
	if err != nil {
		return err
	}
	if count > 0 {
		return nil
	}
	hash, err := bcrypt.GenerateFromPassword([]byte("admin123"), bcrypt.DefaultCost)
	if err != nil {
		return fmt.Errorf("hash default password: %w", err)
	}
	_, err = s.db.Exec(`
		INSERT INTO admins (username, password_hash, must_change_pwd)
		VALUES ('admin', ?, 1)
	`, string(hash))
	if err != nil {
		return err
	}
	// Seed latest_version default
	_, err = s.db.Exec(`INSERT OR IGNORE INTO config (key, value) VALUES ('latest_version', '1.0.0')`)
	return err
}

// Close closes the database connection
func (s *Store) Close() error {
	return s.db.Close()
}

// RecordVisit records a visit
func (s *Store) RecordVisit(v *model.Visit) error {
	_, err := s.db.Exec(`
		INSERT INTO visits (ip, ua, path, referer, device, os, browser, country, visited_at)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		v.IP, v.UA, v.Path, v.Referer, v.Device, v.OS, v.Browser, v.Country, v.VisitedAt,
	)
	return err
}

// GetStats retrieves site statistics summary
func (s *Store) GetStats() (*model.StatsSummary, error) {
	stats := &model.StatsSummary{
		DeviceStats:  make(map[string]int64),
		OSStats:      make(map[string]int64),
		BrowserStats: make(map[string]int64),
	}

	// Total PV
	if err := s.db.QueryRow(`SELECT COUNT(*) FROM visits`).Scan(&stats.PV); err != nil {
		return nil, err
	}

	// Total UV
	if err := s.db.QueryRow(`SELECT COUNT(DISTINCT ip) FROM visits`).Scan(&stats.UV); err != nil {
		return nil, err
	}

	// Today PV/UV
	today := time.Now().Format("2006-01-02")
	if err := s.db.QueryRow(`SELECT COUNT(*) FROM visits WHERE date(visited_at) = ?`, today).Scan(&stats.TodayPV); err != nil {
		return nil, err
	}
	if err := s.db.QueryRow(`SELECT COUNT(DISTINCT ip) FROM visits WHERE date(visited_at) = ?`, today).Scan(&stats.TodayUV); err != nil {
		return nil, err
	}

	// Device distribution
	rows, err := s.db.Query(`SELECT device, COUNT(*) FROM visits GROUP BY device`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var device string
		var count int64
		if err := rows.Scan(&device, &count); err != nil {
			continue
		}
		stats.DeviceStats[device] = count
	}

	// OS distribution
	rows, err = s.db.Query(`SELECT os, COUNT(*) FROM visits GROUP BY os`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var os string
		var count int64
		if err := rows.Scan(&os, &count); err != nil {
			continue
		}
		stats.OSStats[os] = count
	}

	// Browser distribution
	rows, err = s.db.Query(`SELECT browser, COUNT(*) FROM visits GROUP BY browser`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var browser string
		var count int64
		if err := rows.Scan(&browser, &count); err != nil {
			continue
		}
		stats.BrowserStats[browser] = count
	}

	return stats, nil
}

// ==================== Admin Operations ====================

// AuthenticateAdmin verifies username/password and returns the admin record
func (s *Store) AuthenticateAdmin(username, password string) (*model.Admin, error) {
	a := &model.Admin{}
	err := s.db.QueryRow(`
		SELECT id, username, password_hash, must_change_pwd, created_at, updated_at
		FROM admins WHERE username = ?
	`, username).Scan(&a.ID, &a.Username, &a.PasswordHash, &a.MustChangePwd, &a.CreatedAt, &a.UpdatedAt)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	if err := bcrypt.CompareHashAndPassword([]byte(a.PasswordHash), []byte(password)); err != nil {
		return nil, nil
	}
	return a, nil
}

// GetAdminByUsername returns admin by username
func (s *Store) GetAdminByUsername(username string) (*model.Admin, error) {
	a := &model.Admin{}
	err := s.db.QueryRow(`
		SELECT id, username, password_hash, must_change_pwd, created_at, updated_at
		FROM admins WHERE username = ?
	`, username).Scan(&a.ID, &a.Username, &a.PasswordHash, &a.MustChangePwd, &a.CreatedAt, &a.UpdatedAt)
	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return a, nil
}

// ChangeAdminPassword updates admin password and clears must_change_pwd flag
func (s *Store) ChangeAdminPassword(username, newPassword string) error {
	hash, err := bcrypt.GenerateFromPassword([]byte(newPassword), bcrypt.DefaultCost)
	if err != nil {
		return fmt.Errorf("hash password: %w", err)
	}
	_, err = s.db.Exec(`
		UPDATE admins SET password_hash = ?, must_change_pwd = 0, updated_at = CURRENT_TIMESTAMP
		WHERE username = ?
	`, string(hash), username)
	return err
}

// ==================== Config Operations ====================

// GetConfig returns a config value by key
func (s *Store) GetConfig(key string) (string, error) {
	var value string
	err := s.db.QueryRow(`SELECT value FROM config WHERE key = ?`, key).Scan(&value)
	if err == sql.ErrNoRows {
		return "", nil
	}
	return value, err
}

// SetConfig upserts a config key-value pair
func (s *Store) SetConfig(key, value string) error {
	_, err := s.db.Exec(`
		INSERT INTO config (key, value) VALUES (?, ?)
		ON CONFLICT(key) DO UPDATE SET value = ?
	`, key, value, value)
	return err
}