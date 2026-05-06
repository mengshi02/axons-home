BINARY   := axons-home
VERSION  := $(shell git describe --tags --always --dirty 2>/dev/null || echo "dev")
LDFLAGS  := -ldflags "-s -w -X main.version=$(VERSION)"

.PHONY: all dev build build-linux build-darwin clean tidy run docker

# 默认：编译当前平台
all: build

# 开发模式运行
dev:
	go run . -port 8080 -db data/stats.db

# 编译当前平台
build:
	go build $(LDFLAGS) -o $(BINARY) .

# 编译 Linux amd64
build-linux:
	GOOS=linux GOARCH=amd64 go build $(LDFLAGS) -o $(BINARY)-linux-amd64 .

# 编译 Linux arm64
build-linux-arm64:
	GOOS=linux GOARCH=arm64 go build $(LDFLAGS) -o $(BINARY)-linux-arm64 .

# 编译 macOS arm64
build-darwin:
	GOOS=darwin GOARCH=arm64 go build $(LDFLAGS) -o $(BINARY)-darwin-arm64 .

# 编译全部平台
build-all: build-linux build-linux-arm64 build-darwin

# 本地运行
run: build
	./$(BINARY) -port 8080 -db data/stats.db

# Docker 构建
docker:
	docker build -t $(BINARY):$(VERSION) .

# 清理
clean:
	rm -f $(BINARY) $(BINARY)-linux-amd64 $(BINARY)-linux-arm64 $(BINARY)-darwin-arm64
	rm -rf data/

# 整理依赖
tidy:
	go mod tidy