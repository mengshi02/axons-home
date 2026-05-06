package store

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"time"

	_ "modernc.org/sqlite"

	"github.com/mengshi02/axons-home/internal/model"
)

// Store 封装 SQLite 数据库操作
type Store struct {
	db *sql.DB
}

// New 创建并初始化 Store，自动建表
func New(dbPath string) (*Store, error) {
	// 确保目录存在
	dir := filepath.Dir(dbPath)
	if err := os.MkdirAll(dir, 0755); err != nil {
		return nil, fmt.Errorf("create db dir: %w", err)
	}

	db, err := sql.Open("sqlite", dbPath+"?_journal_mode=WAL&_busy_timeout=5000")
	if err != nil {
		return nil, fmt.Errorf("open db: %w", err)
	}

	// 优化连接池
	db.SetMaxOpenConns(1) // SQLite 单写
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
	`)
	return err
}

// Close 关闭数据库连接
func (s *Store) Close() error {
	return s.db.Close()
}

// RecordVisit 记录一次访问
func (s *Store) RecordVisit(v *model.Visit) error {
	_, err := s.db.Exec(`
		INSERT INTO visits (ip, ua, path, referer, device, os, browser, country, visited_at)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		v.IP, v.UA, v.Path, v.Referer, v.Device, v.OS, v.Browser, v.Country, v.VisitedAt,
	)
	return err
}

// GetStats 获取站点统计摘要
func (s *Store) GetStats() (*model.StatsSummary, error) {
	stats := &model.StatsSummary{
		DeviceStats:  make(map[string]int64),
		OSStats:      make(map[string]int64),
		BrowserStats: make(map[string]int64),
	}

	// 总 PV
	if err := s.db.QueryRow(`SELECT COUNT(*) FROM visits`).Scan(&stats.PV); err != nil {
		return nil, err
	}

	// 总 UV
	if err := s.db.QueryRow(`SELECT COUNT(DISTINCT ip) FROM visits`).Scan(&stats.UV); err != nil {
		return nil, err
	}

	// 今日 PV/UV
	today := time.Now().Format("2006-01-02")
	if err := s.db.QueryRow(`SELECT COUNT(*) FROM visits WHERE date(visited_at) = ?`, today).Scan(&stats.TodayPV); err != nil {
		return nil, err
	}
	if err := s.db.QueryRow(`SELECT COUNT(DISTINCT ip) FROM visits WHERE date(visited_at) = ?`, today).Scan(&stats.TodayUV); err != nil {
		return nil, err
	}

	// 设备分布
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

	// OS 分布
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

	// 浏览器分布
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