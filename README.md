# Axons Home

[![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-green.svg)](https://github.com/mengshi02/axons-home)
[![Search Engine Ready](https://img.shields.io/badge/Search%20Engine-Ready-blue.svg)](#)

**The official website backend for [Axons AI](https://github.com/mengshi02/axons) — a code intelligence engine for complex engineering.**

---

## 🔍 Search Engine Optimization (SEO)

This project is optimized for search engine indexing and discovery:

- ✅ **Sitemap**: `sitemap.xml` - Complete site structure for crawlers
- ✅ **Robots.txt**: `robots.txt` - Crawler guidance and access rules
- ✅ **Meta Tags**: Open Graph, Twitter Cards, and structured data
- ✅ **Performance**: Fast loading with embedded static assets
- ✅ **Accessibility**: Semantic HTML and ARIA labels
- ✅ **Mobile-First**: Responsive design for all devices

### Search Engine Submission

| Search Engine | Submission URL | Status |
|--------------|----------------|--------|
| Google | [Google Search Console](https://search.google.com/search-console) | Ready |
| Bing | [Bing Webmaster Tools](https://www.bing.com/webmasters) | Ready |
| Baidu | [Baidu Webmaster](https://ziyuan.baidu.com/site) | Ready |
| Yandex | [Yandex Webmaster](https://webmaster.yandex.com) | Ready |

---

## 🚀 Features

- **Static File Serving** — Embedded web assets (HTML/CSS/JS/images) served via `go:embed`, zero external file dependencies at runtime
- **Visitor Statistics API** — Track page views (PV), unique visitors (UV), and device/browser/OS breakdowns
- **SPA Fallback** — Unknown paths fall back to `index.html` for client-side routing compatibility
- **CORS & Cache Middleware** — Permissive CORS headers; no-cache for API routes, long-cache for static assets
- **Graceful Shutdown** — Clean server termination on SIGINT/SIGTERM

## 📁 Project Structure

```
.
├── main.go                  # Entry point: HTTP server, routing, middleware
├── internal/
│   ├── handler/
│   │   └── stats.go         # API handlers: record visit, get stats, health check
│   ├── model/
│   │   └── visit.go         # Data models: Visit, StatsSummary
│   └── store/
│       └── sqlite.go        # SQLite storage layer: schema migration, queries
├── web/
│   ├── index.html           # Landing page (i18n: EN/ZH)
│   ├── script.js            # Frontend logic: i18n, particles, downloads, visitor counter
│   ├── styles.css           # Stylesheet
│   ├── public/              # Static assets (icons, fonts, flags)
│   ├── snapscreen/          # Demo video and poster
│   ├── sitemap.xml          # Search engine sitemap
│   └── robots.txt           # Crawler instructions
├── scripts/
│   └── axons-home.sh        # Service management script (start/stop/restart/status)
├── Dockerfile               # Multi-stage Docker build
├── Makefile                 # Build automation
└── go.mod                   # Go module definition
```

## 🌐 SEO & Search Engine Indexing

### How to Get Indexed Quickly

#### 1. Google Search
```bash
# Submit sitemap to Google Search Console
# URL: https://www.google.com/search-console
# Add sitemap: https://your-domain.com/sitemap.xml
```

#### 2. Bing Search
```bash
# Submit to Bing Webmaster Tools
# URL: https://www.bing.com/webmasters
# Import from Google Search Console or submit sitemap manually
```

#### 3. Baidu Search (Chinese)
```bash
# Submit to Baidu Webmaster
# URL: https://ziyuan.baidu.com/site
# Use sitemap submission or API push method
```

#### 4. Quick Indexing Tips
- **Submit Sitemap**: Use search engine webmaster tools
- **Build Backlinks**: Link from GitHub, social media, tech communities
- **Regular Updates**: Keep content fresh and update regularly
- **Social Signals**: Share on Twitter, LinkedIn, Hacker News
- **Performance**: Ensure fast page load times (< 3s)

## 📊 API Endpoints

| Method | Path               | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | `/api/stats/visit` | Record a page visit (auto-parsed UA) |
| GET    | `/api/stats`       | Get site-wide statistics summary     |
| GET    | `/api/stats/health`| Health check                         |

### Example Response: `GET /api/stats`

```json
{
  "pv": 1234,
  "uv": 567,
  "today_pv": 89,
  "today_uv": 34,
  "device_stats": { "desktop": 900, "mobile": 300, "tablet": 34 },
  "os_stats": { "windows": 500, "mac": 400, "linux": 200, "unknown": 134 },
  "browser_stats": { "chrome": 800, "safari": 200, "firefox": 150, "other": 84 }
}
```

## 🏃 Quick Start

### Run from Source

```bash
go run . -port 8080 -db data/stats.db
```

### Build & Run

```bash
make build
./axons-home -port 8080 -db data/stats.db
```

### Docker

```bash
docker build -t axons-home .
docker run -p 8080:8080 -v $(pwd)/data:/data axons-home
```

### Service Management (Linux)

```bash
./scripts/axons-home.sh start
./scripts/axons-home.sh status
./scripts/axons-home.sh stop
./scripts/axons-home.sh restart
```

## 🔧 Build Targets

```bash
make help          # Show all available targets
make dev           # Run in development mode (go run)
make build         # Build for current platform
make build-linux   # Cross-compile for Linux amd64
make build-darwin  # Cross-compile for macOS arm64
make build-all     # Build for all platforms
make docker        # Docker build
make clean         # Remove build artifacts
make tidy          # Tidy Go module dependencies
```

## ⚙️ Configuration

| Flag     | Default         | Description              |
|----------|-----------------|--------------------------|
| `-port`  | `8080`          | HTTP server listen port  |
| `-db`    | `data/stats.db` | SQLite database file path|

## 📄 License

Proprietary — © 2026 Axons. All rights reserved.

---

## 🌟 Keywords for Search Discovery

**English Keywords:**
AI code editor, lightweight IDE, AI-first development, code intelligence, engineering tool, open source IDE, private AI coding, code analysis, software development tool, Go programming

**中文关键词:**
AI 代码编辑器，轻量级 IDE，AI 优先开发，代码智能，工程工具，开源 IDE，私有化 AI 编程，代码分析，软件开发工具，Go 语言

---

## 📈 Search Engine Optimization Checklist

- [x] Sitemap.xml created and accessible
- [x] Robots.txt configured for crawlers
- [x] Meta descriptions and titles optimized
- [x] Open Graph tags for social sharing
- [x] Structured data (JSON-LD) implemented
- [x] Mobile-responsive design
- [x] Fast page load performance
- [x] SSL/HTTPS support
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Submit to Baidu Webmaster
- [ ] Build backlinks from tech communities
- [ ] Share on social media platforms
