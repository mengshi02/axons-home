BINARY   := axons-home
VERSION  := $(shell git describe --tags --always --dirty 2>/dev/null || echo "dev")
LDFLAGS  := -ldflags "-s -w -X main.version=$(VERSION)"
DOCS_DIR ?= ""

.PHONY: all dev build build-linux build-darwin clean tidy run docker help prepare-docs

# Help information
help:
	@echo "Usage: make <target>"
	@echo ""
	@echo "Targets:"
	@echo "  all              - Build for current platform (default)"
	@echo "  dev              - Run in development mode (HTTP, go run)"
	@echo "  prod             - Run in production mode (HTTPS, go run)"
	@echo "  build            - Build for current platform"
	@echo "  build-linux      - Build for Linux amd64"
	@echo "  build-linux-arm64- Build for Linux arm64"
	@echo "  build-darwin     - Build for macOS arm64"
	@echo "  build-all        - Build for all platforms"
	@echo "  run              - Build and run locally (HTTP)"
	@echo "  run-tls          - Build and run locally with HTTPS"
	@echo "  docker           - Docker build"
	@echo "  clean            - Clean build artifacts and data"
	@echo "  tidy             - Tidy Go dependencies"
	@echo "  help             - Show this help message"

# Default: build for current platform
all: build

# Run in development mode (HTTP)
dev:
	go run . -port 8080 -db data/stats.db

# Run in production mode (HTTPS)
prod:
	go run . -port 443 -db data/stats.db -tls

# Prepare docs directory for embedding
# Usage: make build DOCS_DIR=/path/to/axons/docs
# If DOCS_DIR is set, copies docs content into the local docs/ directory for embedding.
prepare-docs:
	@if [ -n "$(DOCS_DIR)" ]; then \
		echo "Preparing docs from $(DOCS_DIR)..."; \
		rm -rf docs/zh docs/*.md 2>/dev/null || true; \
		cp -r $(DOCS_DIR)/* docs/; \
		echo "Docs prepared."; \
	else \
		echo "DOCS_DIR not set, using existing docs/ directory."; \
	fi

# Build for current platform
build: prepare-docs
	go build $(LDFLAGS) -o $(BINARY) .

# Build for Linux amd64
build-linux: prepare-docs
	GOOS=linux GOARCH=amd64 go build $(LDFLAGS) -o $(BINARY)-linux-amd64 .

# Build for Linux arm64
build-linux-arm64: prepare-docs
	GOOS=linux GOARCH=arm64 go build $(LDFLAGS) -o $(BINARY)-linux-arm64 .

# Build for macOS arm64
build-darwin: prepare-docs
	GOOS=darwin GOARCH=arm64 go build $(LDFLAGS) -o $(BINARY)-darwin-arm64 .

# Build for all platforms
build-all: build-linux build-linux-arm64 build-darwin

# Run locally (HTTP)
run: build
	./$(BINARY) -port 8080 -db data/stats.db

# Run locally with HTTPS
run-tls: build
	./$(BINARY) -port 443 -db data/stats.db -tls

# Docker build
docker:
	docker build -t $(BINARY):$(VERSION) .

# Clean
clean:
	rm -f $(BINARY) $(BINARY)-linux-amd64 $(BINARY)-linux-arm64 $(BINARY)-darwin-arm64
	rm -rf data/

# Tidy dependencies
tidy:
	go mod tidy