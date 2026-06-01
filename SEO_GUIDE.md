# Axons SEO 实施指南

本指南详细说明如何让 Axons 项目被国内外搜索引擎快速收录和检索。

---

## 📋 已完成的工作

### 1. 文件创建清单

| 文件 | 路径 | 说明 |
|-----|------|------|
| `sitemap.xml` | `web/sitemap.xml` | 网站结构地图，帮助搜索引擎爬取 |
| `robots.txt` | `web/robots.txt` | 爬虫访问规则 |
| `google-site-verification.html` | `web/google-site-verification.html` | Google 搜索控制台验证 |
| `BingSiteAuth.xml` | `web/BingSiteAuth.xml` | Bing 网站验证 |
| `index.html` | `web/index.html` | 首页（已合并 SEO 标签） |
| `README.md` | `README.md` | 已更新 SEO 相关内容 |

### 2. 优化内容

- ✅ 完整的 meta 标签（title, description, keywords）
- ✅ Open Graph 标签（社交媒体分享优化）
- ✅ Twitter Card 标签
- ✅ 结构化数据（Schema.org JSON-LD）
- ✅ 语言 alternate 标签
- ✅ 图片 alt 属性优化
- ✅ 语义化 HTML 结构
- ✅ 无障碍访问支持（ARIA 标签）

---

## 🚀 搜索引擎提交步骤

### 第一步：部署文件

确保以下文件可以通过公网访问：

```
https://axons.chat/sitemap.xml
https://axons.chat/robots.txt
https://axons.chat/google-site-verification.html
https://axons.chat/BingSiteAuth.xml
```

### 第二步：Google 搜索提交

1. **访问 Google Search Console**
   - 网址：https://search.google.com/search-console

2. **添加并验证网站**
   - 选择 "HTML 标签" 验证方式
   - 将 `google-site-verification.html` 中的验证码替换为实际代码
   - 例如：`<meta name="google-site-verification" content="你的验证码" />`

3. **提交 Sitemap**
   - 在左侧菜单选择 "Sitemaps"
   - 输入 `sitemap.xml` 并提交

4. **请求索引**
   - 使用 URL 检查工具
   - 输入首页 URL 并请求索引

### 第三步：Bing 搜索提交

1. **访问 Bing Webmaster Tools**
   - 网址：https://www.bing.com/webmasters

2. **添加网站**
   - 可以使用 "导入自 Google Search Console" 功能
   - 或手动添加网站

3. **验证所有权**
   - 上传 `BingSiteAuth.xml` 文件到网站根目录
   - 或在 DNS 中添加 TXT 记录

4. **提交 Sitemap**
   - 提交 `https://axons.chat/sitemap.xml`

### 第四步：百度搜索提交（中文）

1. **访问百度站长平台**
   - 网址：https://ziyuan.baidu.com/site

2. **添加并验证网站**
   - 添加站点并验证所有权

3. **提交 Sitemap**
   - 在 "数据提交" -> "sitemap" 中提交
   - 提交地址：`https://axons.chat/sitemap.xml`

4. **使用 API 提交（可选，更快速）**
   ```bash
   curl -H 'Token:你的 token' \
        -X POST \
        -d 'url1,url2,url3' \
        'http://data.zz.baidu.com/urls?site=axons.chat&token=你的 token'
   ```

### 第五步：其他搜索引擎

#### Yandex（俄罗斯）
- 网址：https://webmaster.yandex.com
- 添加网站并提交 sitemap

#### DuckDuckGo
- 自动抓取，无需手动提交
- 确保 Google 已收录

---

## 📊 加速收录技巧

### 1. 建立反向链接

从以下渠道建立反向链接：

- **GitHub**: 在 axons 主仓库 README 中链接到官网
- **技术社区**: 
  - V2EX
  - 掘金
  - CSDN
  - 知乎
  - Hacker News
- **社交媒体**:
  - Twitter
  - LinkedIn
  - 微信公众号
  - 微博

### 2. 内容更新策略

- 定期更新 sitemap 中的 `lastmod` 日期
- 保持网站内容定期更新
- 添加博客或新闻板块

### 3. 性能优化

- 确保页面加载时间 < 3 秒
- 使用 Google PageSpeed Insights 检测
- 启用 Gzip 压缩
- 使用 CDN 加速

### 4. 社交媒体信号

- 分享网站到 Twitter、LinkedIn
- 在 GitHub Discussions 中讨论
- 参与相关技术社区

---

## 🔍 检查收录状态

### Google 收录检查

```bash
# 在 Google 搜索中使用
site:axons.chat
```

### Bing 收录检查

```bash
# 在 Bing 搜索中使用
site:axons.chat
```

### 百度收录检查

```bash
# 在百度搜索中使用
site:axons.chat
```

---

## 📈 监控与分析

### Google Analytics（可选）

添加 Google Analytics 跟踪代码到 `<head>`：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 监控指标

- 搜索排名关键词
- 自然搜索流量
- 收录页面数量
- 点击率（CTR）

---

## 🛠️ 文件修改说明

### 修改 `main.go` 确保静态文件服务正确

需要在路由中添加 sitemap 和 robots.txt 的访问：

```go
// 确保以下路径可以被访问
// /sitemap.xml
// /robots.txt
// /google-site-verification.html
// /BingSiteAuth.xml
```

### 更新 `index.html`

`index.html` 的 `<head>` 部分已包含完整的 SEO 标签：

1. 完整的 meta 标签（title, description, keywords, robots）
2. Open Graph 标签（社交媒体分享优化）
3. Twitter Card 标签
4. 结构化数据（Schema.org JSON-LD：SoftwareApplication, Organization, FAQPage）
5. Canonical URL 和 hreflang 语言alternate标签
6. 主题色（theme-color）
7. 所有图片有 alt 属性

---

## ⏱️ 预计时间线

| 搜索引擎 | 首次收录 | 完全收录 |
|---------|---------|---------|
| Google | 1-7 天 | 2-4 周 |
| Bing | 1-7 天 | 2-4 周 |
| 百度 | 3-14 天 | 4-8 周 |
| Yandex | 1-7 天 | 2-4 周 |

---

## 📝 待办事项

- [x] 将 SEO 标签合并到 `index.html` 的 head 部分
- [x] 删除 `index-optimized.html`（已合并到 index.html）
- [ ] 修改 `main.go` 确保静态文件正确服务
- [ ] 获取 Google Search Console 验证码并更新文件
- [ ] 获取 Bing 验证码并更新文件
- [ ] 部署所有文件到生产环境
- [ ] 提交到 Google Search Console
- [ ] 提交到 Bing Webmaster Tools
- [ ] 提交到百度站长平台
- [ ] 建立反向链接
- [ ] 监控收录进度

---

## 📞 需要帮助？

如有问题，请查阅：

- Google Search Console 帮助：https://support.google.com/webmasters
- Bing Webmaster 帮助：https://www.bing.com/webmasters/help
- 百度站长平台帮助：https://ziyuan.baidu.com/help
