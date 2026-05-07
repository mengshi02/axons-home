# Axons Home

The official website backend for [Axons AI](https://github.com/mengshi02/axons) — a code intelligence engine for complex engineering. This service provides static file serving for the landing page and a lightweight visitor statistics API backed by SQLite.

## Features

- **Static File Serving** — Embedded web assets (HTML/CSS/JS/images) served via `go:embed`, zero external file dependencies at runtime
- **Visitor Statistics API** — Track page views (PV), unique visitors (UV), and device/browser/OS breakdowns
- **SPA Fallback** — Unknown paths fall back to `index.html` for client-side routing compatibility
- **CORS & Cache Middleware** — Permissive CORS headers; no-cache for API routes, long-cache for static assets
- **Graceful Shutdown** — Clean server termination on SIGINT/SIGTERM

## Project Structure

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
│   └── snapscreen/          # Demo video and poster
├── scripts/
│   └── axons-home.sh        # Service management script (start/stop/restart/status)
├── Dockerfile               # Multi-stage Docker build
├── Makefile                 # Build automation
└── go.mod                   # Go module definition
```

## API Endpoints

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

## Quick Start

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

## Build Targets

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

## Configuration

| Flag     | Default         | Description              |
|----------|-----------------|--------------------------|
| `-port`  | `8080`          | HTTP server listen port  |
| `-db`    | `data/stats.db` | SQLite database file path|

## License

Proprietary — © 2026 Axons. All rights reserved.