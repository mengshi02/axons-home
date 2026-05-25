# Axons 发布管理规范

本文档定义 Axons 桌面安装包和插件包的命名规范、发布流程和分发机制。

---

## 一、桌面安装包

### 1.1 产物命名规范

**基础 URL 模板：**

```
https://github.com/mengshi02/axons/releases/download/v{version}/axons-{product}-{os}-{arch}.{ext}
```

**字段定义：**

| 字段 | 取值 | 说明 |
|---|---|---|
| `version` | `X.Y.Z`（语义化版本） | 不含 `v` 前缀，URL 中加 `v` |
| `product` | `desktop` / `web` | desktop=原生桌面，web=浏览器+本地服务 |
| `os` | `darwin` / `windows` / `linux` | 采用 Go 标准命名（GOOS） |
| `arch` | `arm64` / `amd64` | 采用 Go 标准命名（GOARCH） |
| `ext` | `.dmg` / `.zip` / `.AppImage` | 按平台区分 |

**命名与 Go 交叉编译对应关系：**

| 产物文件名 | GOOS | GOARCH | CI 构建命令 |
|---|---|---|---|
| `axons-desktop-darwin-arm64.dmg` | darwin | arm64 | `GOOS=darwin GOARCH=arm64 go build` |
| `axons-desktop-darwin-amd64.dmg` | darwin | amd64 | `GOOS=darwin GOARCH=amd64 go build` |
| `axons-desktop-windows-amd64.zip` | windows | amd64 | `GOOS=windows GOARCH=amd64 go build` |
| `axons-desktop-linux-amd64.AppImage` | linux | amd64 | `GOOS=linux GOARCH=amd64 go build` |
| `axons-desktop-linux-arm64.AppImage` | linux | arm64 | `GOOS=linux GOARCH=arm64 go build` |
| `axons-web-linux-amd64.zip` | linux | amd64 | `GOOS=linux GOARCH=amd64 go build` |
| `axons-web-linux-arm64.zip` | linux | arm64 | `GOOS=linux GOARCH=arm64 go build` |
| `axons-web-darwin-amd64.zip` | darwin | amd64 | `GOOS=darwin GOARCH=amd64 go build` |
| `axons-web-darwin-arm64.zip` | darwin | arm64 | `GOOS=darwin GOARCH=arm64 go build` |
| `axons-web-windows-amd64.zip` | windows | amd64 | `GOOS=windows GOARCH=amd64 go build` |
| `axons-web-windows-arm64.zip` | windows | arm64 | `GOOS=windows GOARCH=arm64 go build` |

**完整示例（v1.2.0）：**

```
https://github.com/mengshi02/axons/releases/download/v1.2.0/axons-desktop-darwin-arm64.dmg
https://github.com/mengshi02/axons/releases/download/v1.2.0/axons-desktop-darwin-amd64.dmg
https://github.com/mengshi02/axons/releases/download/v1.2.0/axons-desktop-windows-amd64.zip
https://github.com/mengshi02/axons/releases/download/v1.2.0/axons-desktop-linux-amd64.AppImage
https://github.com/mengshi02/axons/releases/download/v1.2.0/axons-desktop-linux-arm64.AppImage
https://github.com/mengshi02/axons/releases/download/v1.2.0/axons-web-linux-amd64.zip
https://github.com/mengshi02/axons/releases/download/v1.2.0/axons-web-darwin-arm64.zip
https://github.com/mengshi02/axons/releases/download/v1.2.0/axons-web-windows-amd64.zip
```

### 1.2 版本号分发机制

**原则：不代理 GitHub API，无限流风险。**

axons-home 仅存储和返回最新版本号，前端/桌面 App 按规则拼接下载 URL，用户直连 GitHub CDN 下载。

**数据存储：** SQLite `config` 表

```sql
CREATE TABLE IF NOT EXISTS config (
    key   TEXT PRIMARY KEY,
    value TEXT NOT NULL
);

-- 初始化
INSERT INTO config (key, value) VALUES ('latest_version', '1.0.0');
```

**API：**

```
GET /api/releases/latest

Response:
{
    "version": "1.2.0"
}
```

**前端下载 URL 拼接逻辑（伪代码）：**

```javascript
const BASE = 'https://github.com/mengshi02/axons/releases/download';

function getDownloadUrl(version, product, os, arch) {
    const ext = os === 'darwin' ? 'dmg' : os === 'linux' && product === 'desktop' ? 'AppImage' : 'zip';
    return `${BASE}/v${version}/axons-${product}-${os}-${arch}.${ext}`;
}

// 示例
getDownloadUrl('1.2.0', 'desktop', 'darwin', 'arm64')
// → https://github.com/mengshi02/axons/releases/download/v1.2.0/axons-desktop-darwin-arm64.dmg
```

**桌面 App 更新检查同理：** 调用 `/api/releases/latest` 获取版本号，与本地版本比较，按规则拼接下载 URL。

### 1.3 桌面安装包发布流程

```
1. 修改版本号（代码中、配置文件中）
2. 交叉编译所有平台产物，按命名规范输出文件
3. 在 GitHub 上创建 Release：
   - Tag: v1.2.0
   - Title: v1.2.0
   - 上传所有产物文件
4. 在 axons-home 后台更新版本号：
   UPDATE config SET value = '1.2.0' WHERE key = 'latest_version';
5. 验证：访问 /api/releases/latest 确认返回新版本号
```

---

## 二、插件包

### 2.1 产物命名规范

**文件名模板：**

```
{plugin-id}-{version}.axons-plugin.tar.gz
```

**字段定义：**

| 字段 | 格式 | 示例 |
|---|---|---|
| `plugin-id` | 反域名格式 | `chat.axons.huggingface` |
| `version` | 语义化版本 | `1.0.0` |

**示例：**

```
chat.axons.huggingface-1.0.0.axons-plugin.tar.gz
chat.axons.locale-zh-cn-1.0.0.axons-plugin.tar.gz
```

### 2.2 插件包存储

插件包存储于 **axons-extension-packages 仓库的 GitHub Releases**：

```
https://github.com/mengshi02/axons-extension-packages/releases/download/{plugin-id}/v{version}/{plugin-id}-{version}.axons-plugin.tar.gz
```

**示例：**

```
https://github.com/mengshi02/axons-extension-packages/releases/download/chat.axons.huggingface/v1.0.0/chat.axons.huggingface-1.0.0.axons-plugin.tar.gz
```

### 2.3 插件元数据

`manifest.json` 包含插件基础信息，但插件市场所需的展示信息远超其范围。额外元数据由 **axons-home 后台** 管理。

**manifest.json 提供（自动同步）：**

| 字段 | 说明 |
|---|---|
| `id` | 插件唯一标识 |
| `name` | 插件名 |
| `version` | 版本号 |
| `description` | 简短描述 |
| `category` | 分类 |
| `icon` | 图标路径 |
| `minAxonsVersion` | 最低兼容 Axons 版本 |
| `permissions` | 所需权限 |

**后台补充编辑：**

| 字段 | 说明 |
|---|---|
| `description_zh` | 中文详细描述（富文本） |
| `description_en` | 英文详细描述（富文本） |
| `screenshots` | 截图/预览图（多张，需上传） |
| `changelog` | 版本更新日志 |
| `tags` | 多标签（如 `llm`, `local-model`, `chinese`） |
| `status` | 上架状态：`published` / `unlisted` / `draft` |
| `featured` | 是否推荐 |

### 2.4 插件市场数据库

axons-home SQLite 新增表：

```sql
-- 插件主表
CREATE TABLE IF NOT EXISTS plugins (
    id            TEXT PRIMARY KEY,           -- 插件 ID，如 chat.axons.huggingface
    name          TEXT NOT NULL,              -- 显示名
    description   TEXT DEFAULT '',            -- 简短描述（来自 manifest）
    description_zh TEXT DEFAULT '',           -- 中文详细描述（后台编辑）
    description_en TEXT DEFAULT '',           -- 英文详细描述（后台编辑）
    category      TEXT DEFAULT '',            -- 分类
    icon_url      TEXT DEFAULT '',            -- 图标 URL
    screenshots   TEXT DEFAULT '[]',          -- 截图 JSON 数组
    tags          TEXT DEFAULT '[]',          -- 标签 JSON 数组
    status        TEXT DEFAULT 'draft',       -- published / unlisted / draft
    featured      INTEGER DEFAULT 0,          -- 是否推荐
    created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 插件版本表
CREATE TABLE IF NOT EXISTS plugin_versions (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    plugin_id       TEXT NOT NULL REFERENCES plugins(id),
    version         TEXT NOT NULL,             -- 语义化版本
    min_axons_version TEXT DEFAULT '',         -- 最低兼容 Axons 版本
    download_url    TEXT NOT NULL,             -- 下载地址
    sha256          TEXT DEFAULT '',           -- 校验和
    changelog       TEXT DEFAULT '',           -- 版本更新日志
    file_size       INTEGER DEFAULT 0,         -- 文件大小（字节）
    published_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(plugin_id, version)
);

-- 插件下载统计
CREATE TABLE IF NOT EXISTS plugin_downloads (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    plugin_id     TEXT NOT NULL REFERENCES plugins(id),
    version       TEXT NOT NULL,
    ip            TEXT DEFAULT '',
    downloaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 2.5 插件市场公开 API

```
GET /api/plugins                     # 插件列表（支持 ?category=&tag=&search= 筛选）
GET /api/plugins/:id                 # 插件详情（含截图、描述、版本列表）
GET /api/plugins/:id/versions        # 版本列表
GET /api/plugins/:id/download/:ver   # 下载（记录统计后 302 重定向到实际 URL）
```

**列表接口示例响应：**

```json
{
    "plugins": [
        {
            "id": "chat.axons.huggingface",
            "name": "HuggingFace",
            "description": "浏览 HuggingFace GGUF 模型，下载、启停、管理本地 LLM 模型",
            "category": "productivity",
            "icon_url": "/api/plugins/chat.axons.huggingface/icon",
            "tags": ["llm", "local-model"],
            "latest_version": "1.0.0",
            "downloads": 128,
            "featured": true
        }
    ]
}
```

**详情接口示例响应：**

```json
{
    "id": "chat.axons.huggingface",
    "name": "HuggingFace",
    "description": "浏览 HuggingFace GGUF 模型，下载、启停、管理本地 LLM 模型",
    "description_zh": "<p>通过 HuggingFace 插件，你可以...</p>",
    "description_en": "<p>With the HuggingFace plugin, you can...</p>",
    "category": "productivity",
    "icon_url": "/api/plugins/chat.axons.huggingface/icon",
    "screenshots": [
        "/api/plugins/chat.axons.huggingface/screenshots/1.png",
        "/api/plugins/chat.axons.huggingface/screenshots/2.png"
    ],
    "tags": ["llm", "local-model"],
    "featured": true,
    "versions": [
        {
            "version": "1.0.0",
            "min_axons_version": "0.8.0",
            "changelog": "初始发布",
            "published_at": "2026-01-15T10:00:00Z"
        }
    ]
}
```

**下载接口行为：**

1. 记录下载统计（`plugin_downloads` 表插入一行）
2. 返回 `302` 重定向到实际文件 URL（GitHub Release URL 或自有存储）

### 2.6 插件发布流程

```
1. 在 axons-extension-packages 仓库开发插件
2. 运行构建和打包：
   bash build.sh <plugin-id>
   bash pack.sh  <plugin-id>
   # 产物: dist/<id>-<version>.axons-plugin.tar.gz
3. 在 GitHub 上创建 Release：
   - Tag: <plugin-id>/v<version>（如 chat.axons.huggingface/v1.0.0）
   - 上传 tar.gz 产物
4. 在 axons-home 后台管理页面：
   a. 新建或更新插件记录（名称、描述、截图、标签等）
   b. 添加版本记录：
      - 版本号
      - 下载 URL（GitHub Release 地址）
      - SHA-256 校验和（pack.sh 输出提供）
      - 最低兼容 Axons 版本
      - 更新日志
   c. 设置上架状态为 published
5. 验证：通过 API 确认插件可见、下载链接有效
```

---

## 三、axons-home 整体路由

```
axons.chat
├── /                            # 官网首页（动态获取最新版本号显示）
├── /docs                        # 文档页面（已有）
├── /admin                       # 后台管理页面（需登录）
│
├── /api/releases/latest         # 桌面安装包最新版本号（读本地配置，无限流）
├── /api/plugins                 # 插件市场列表
├── /api/plugins/:id             # 插件详情
├── /api/plugins/:id/versions    # 插件版本列表
├── /api/plugins/:id/download/:ver  # 插件下载（302 重定向）
├── /api/plugins/:id/icon        # 插件图标
├── /api/plugins/:id/screenshots/:n # 插件截图
│
├── /api/stats/visit             # 访问统计（已有）
└── /api/stats/health            # 健康检查（已有）
```

---

## 四、版本号更新操作

| 场景 | 操作 |
|---|---|
| 桌面新版本发布 | `UPDATE config SET value = '1.3.0' WHERE key = 'latest_version';` |
| 插件新版本发布 | 后台 Admin 页面添加 `plugin_versions` 记录 |
| 插件上架/下架 | 后台 Admin 页面修改 `plugins.status` |
| 插件编辑描述/截图 | 后台 Admin 页面修改 `plugins` 对应字段 |

---

## 五、校验和安全

| 措施 | 说明 |
|---|---|
| SHA-256 校验 | 插件版本记录中保存 `sha256`，桌面 App 安装时校验文件完整性 |
| minAxonsVersion | 插件版本记录中保存最低兼容版本，桌面 App 安装前校验兼容性 |
| 上架状态管控 | 只有 `published` 状态的插件对公开 API 可见 |
| 下载统计 | 所有下载经 `/api/plugins/:id/download/:ver` 记录后重定向 |