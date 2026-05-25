// ==================== Docs Page Script ====================

// ==================== i18n Configuration ====================
const docsTranslations = {
    en: {
        'nav.home': 'Home',
        'nav.features': 'Product',
        'nav.compare': 'Scenarios',
        'nav.docs': 'Docs',
        'nav.download': 'Download',
        'docs.sidebar.title': 'DOCS NAV',
        'docs.nav.getting-started': 'GETTING STARTED',
        'docs.nav.reference': 'REFERENCE',
        'docs.nav.operations': 'OPERATIONS',
        'docs.nav.extensions': 'EXTENSIONS',
        'docs.nav.architecture': 'Architecture Overview',
        'docs.nav.manual': 'User Manual',
        'docs.nav.configuration': 'Configuration Guide',
        'docs.nav.api': 'API Reference',
        'docs.nav.deployment': 'Deployment Guide',
        'docs.nav.plugin-developer-guide': 'Plugin Development',
        'docs.nav.edit-on-github': 'Edit on GitHub',
        'docs.breadcrumb.home': 'Home',
        'docs.breadcrumb.docs': 'Docs',
        'docs.loading': 'Loading...',
        'docs.error': 'Failed to load document. Please try again later.',
        'docs.retry': 'Retry',
        'docs.pagination.prev': 'Previous',
        'docs.pagination.next': 'Next',
        'footer.indie': 'Built with ❤ by an indie developer, sustained by your Stars.',
        'page.title': 'Axons Docs | Documentation',
        'docs.toc.title': 'ON THIS PAGE'
    },
    zh: {
        'nav.home': '首页',
        'nav.features': '产品',
        'nav.compare': '场景',
        'nav.docs': '文档',
        'nav.download': '下载',
        'docs.sidebar.title': '文档导航',
        'docs.nav.getting-started': '入门',
        'docs.nav.reference': '参考',
        'docs.nav.operations': '运维',
        'docs.nav.extensions': '扩展',
        'docs.nav.architecture': '架构概览',
        'docs.nav.manual': '使用手册',
        'docs.nav.configuration': '配置指南',
        'docs.nav.api': 'API 参考',
        'docs.nav.deployment': '部署指南',
        'docs.nav.plugin-developer-guide': '插件开发',
        'docs.nav.edit-on-github': '在 GitHub 上编辑',
        'docs.breadcrumb.home': '首页',
        'docs.breadcrumb.docs': '文档',
        'docs.loading': '加载中...',
        'docs.error': '文档加载失败，请稍后重试',
        'docs.retry': '重试',
        'docs.pagination.prev': '上一篇',
        'docs.pagination.next': '下一篇',
        'footer.indie': '由独立开发者维护的开源项目 · 靠你的 Star 持续运转',
        'page.title': 'Axons 文档中心',
        'docs.toc.title': '本页目录'
    }
};

// ==================== Document Configuration ====================
const DOCS_EDIT_URL = 'https://github.com/mengshi02/axons/edit/main/docs';

const DOC_ORDER = ['architecture', 'manual', 'configuration', 'api', 'deployment', 'plugin-developer-guide'];

const DOC_CONFIG = {
    architecture: { file: 'architecture.md', i18nKey: 'docs.nav.architecture' },
    manual: { file: 'manual.md', i18nKey: 'docs.nav.manual' },
    configuration: { file: 'configuration.md', i18nKey: 'docs.nav.configuration' },
    api: { file: 'api.md', i18nKey: 'docs.nav.api' },
    deployment: { file: 'deployment.md', i18nKey: 'docs.nav.deployment' },
    'plugin-developer-guide': { file: 'plugin-developer-guide.md', i18nKey: 'docs.nav.plugin-developer-guide' }
};

// ==================== State ====================
let currentLang = localStorage.getItem('axons-lang') || 'zh';
let currentDoc = 'architecture';
let docCache = {};

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavbar();
    initSidebar();
    initSidebarToggle();
    initRetryButton();
    loadDocFromHash();
    window.addEventListener('hashchange', loadDocFromHash);
});

// ==================== Language ====================
function initLanguage() {
    applyTranslations();

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('axons-lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    applyTranslations();
    const t = docsTranslations[lang];
    if (t) document.title = t['page.title'];
    updateBreadcrumb();
    // Re-render pagination with new language
    updatePagination(currentDoc);
    // Reload current document with new language
    loadDoc(currentDoc);
}

function t(key) {
    return (docsTranslations[currentLang] || docsTranslations.zh)[key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (val !== key) el.textContent = val;
    });
}

// ==================== Navbar ====================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    fetchGitHubStars();
}

async function fetchGitHubStars() {
    try {
        const res = await fetch('https://api.github.com/repos/axons-ai/axons');
        if (res.ok) {
            const data = await res.json();
            const el = document.getElementById('nav-github-stars');
            if (el) el.textContent = '★ ' + data.stargazers_count;
        }
    } catch (e) { /* ignore */ }
}

// ==================== Sidebar ====================
function initSidebar() {
    document.querySelectorAll('.docs-nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const docName = item.getAttribute('data-doc');
            if (docName) window.location.hash = docName;
        });
    });
}

function updateSidebarActive(docName) {
    document.querySelectorAll('.docs-nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-doc') === docName);
    });
}

// ==================== Sidebar Toggle (Mobile) ====================
function initSidebarToggle() {
    const toggleBtn = document.getElementById('docs-sidebar-toggle');
    const sidebar = document.getElementById('docs-sidebar');

    let overlay = document.querySelector('.docs-sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'docs-sidebar-overlay';
        document.body.appendChild(overlay);
    }

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        });
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
}

// ==================== Retry Button ====================
function initRetryButton() {
    const retryBtn = document.getElementById('docs-retry-btn');
    if (retryBtn) retryBtn.addEventListener('click', () => loadDoc(currentDoc));
}

// ==================== Load Document ====================
function loadDocFromHash() {
    const hash = window.location.hash.replace('#', '') || 'architecture';
    loadDoc(DOC_CONFIG[hash] ? hash : 'architecture');
}

async function loadDoc(docName) {
    currentDoc = docName;
    const config = DOC_CONFIG[docName];
    if (!config) return;

    updateSidebarActive(docName);
    updateBreadcrumb();
    updateEditLink(docName);
    showLoading();

    // Check cache with language-specific key
    const cacheKey = docName + '-' + currentLang;
    if (docCache[cacheKey]) {
        renderMarkdown(docCache[cacheKey]);
        updatePagination(docName);
        return;
    }

    // Fetch from local API with language parameter
    try {
        const res = await fetch('/api/docs/' + docName + '?lang=' + currentLang);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const markdown = await res.text();
        docCache[cacheKey] = markdown;
        renderMarkdown(markdown);
        updatePagination(docName);
    } catch (err) {
        console.error('Failed to load doc:', err);
        showError();
    }
}

// ==================== Render Markdown ====================
function renderMarkdown(markdown) {
    const article = document.getElementById('docs-article');
    if (!article) return;

    hideLoading();
    hideError();

    if (typeof marked !== 'undefined') {
        marked.setOptions({ gfm: true, breaks: false });
        article.innerHTML = marked.parse(markdown);
    } else {
        const pre = document.createElement('pre');
        pre.style.whiteSpace = 'pre-wrap';
        pre.style.wordBreak = 'break-word';
        pre.textContent = markdown;
        article.innerHTML = '';
        article.appendChild(pre);
    }

    processHeadings();
    removeInlineTOC();
    processImages();
    processLinks();
    generateTOC();
    scrollToTop();
}

// ==================== Post-processing ====================
function processHeadings() {
    const article = document.getElementById('docs-article');
    if (!article) return;
    // Add IDs to headings for anchor linking
    const headings = article.querySelectorAll('h1, h2, h3, h4');
    headings.forEach((h, i) => {
        if (!h.id) {
            h.id = 'doc-h-' + i;
        }
    });
}

// Remove inline TOC (## 目录 section) since right-side TOC already exists
function removeInlineTOC() {
    const article = document.getElementById('docs-article');
    if (!article) return;

    // Find h2 that contains "目录" or "Table of Contents"
    const h2s = article.querySelectorAll('h2');
    for (const h2 of h2s) {
        const text = h2.textContent.trim();
        if (text === '目录' || text === 'Table of Contents' || text === 'Contents') {
            // Collect all elements to remove: the hr before, the h2, and everything after until next h2/hr
            const toRemove = [];

            // Remove preceding hr if exists
            const prev = h2.previousElementSibling;
            if (prev && prev.tagName === 'HR') {
                toRemove.push(prev);
            }

            // Remove h2 itself
            toRemove.push(h2);

            // Remove all following siblings until next h2 or hr
            let el = h2.nextElementSibling;
            while (el) {
                if (el.tagName === 'H2' || el.tagName === 'HR') break;
                toRemove.push(el);
                el = el.nextElementSibling;
            }

            // Remove collected elements
            toRemove.forEach(el => el.remove());
            break;
        }
    }
}

function processImages() {
    const article = document.getElementById('docs-article');
    if (!article) return;
    article.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('data:') && !src.startsWith('/')) {
            // Rewrite relative screenshot paths to local copied assets
            if (src.startsWith('screenshot/')) {
                img.src = '/public/docs-screenshot/' + src.substring('screenshot/'.length);
            } else {
                img.src = '/public/docs-screenshot/' + src;
            }
        }
        img.loading = 'lazy';
        img.style.maxWidth = '100%';
    });
}

function processLinks() {
    const article = document.getElementById('docs-article');
    if (!article) return;
    article.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.startsWith('http') || href.startsWith('//'))) {
            link.target = '_blank';
            link.rel = 'noopener';
        }
    });
}

// ==================== Generate TOC ====================
function generateTOC() {
    const existing = document.querySelector('.docs-toc');
    if (existing) existing.remove();

    const article = document.getElementById('docs-article');
    if (!article) return;

    const headings = article.querySelectorAll('h2, h3');
    if (headings.length === 0) return;

    const toc = document.createElement('div');
    toc.className = 'docs-toc';
    toc.innerHTML = '<div class="docs-toc-title">' + t('docs.toc.title') + '</div>';

    const ul = document.createElement('ul');
    headings.forEach(heading => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        a.className = heading.tagName === 'H3' ? 'toc-h3' : '';
        a.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        li.appendChild(a);
        ul.appendChild(li);
    });

    toc.appendChild(ul);
    const docsMain = document.querySelector('.docs-main');
    if (docsMain) docsMain.appendChild(toc);

    // Scroll spy for TOC
    const tocLinks = toc.querySelectorAll('a');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tocLinks.forEach(l => l.classList.remove('active'));
                const activeLink = toc.querySelector('a[href="#' + entry.target.id + '"]');
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { rootMargin: '-80px 0px -60% 0px' });
    headings.forEach(h => observer.observe(h));
}

// ==================== Breadcrumb ====================
function updateBreadcrumb() {
    const pageEl = document.getElementById('docs-breadcrumb-page');
    if (!pageEl) return;
    const config = DOC_CONFIG[currentDoc];
    if (!config) return;
    pageEl.textContent = t(config.i18nKey);
}

// ==================== Edit Link ====================
function updateEditLink(docName) {
    const config = DOC_CONFIG[docName];
    if (!config) return;

    // Determine the correct path based on language
    let filePath;
    if (currentLang === 'en') {
        filePath = config.file;
    } else {
        // For Chinese, use the zh subdirectory
        filePath = 'zh/' + config.file;
    }

    // Update toolbar edit link
    const toolbarEl = document.getElementById('docs-edit-link');
    if (toolbarEl) {
        toolbarEl.href = DOCS_EDIT_URL + '/' + filePath;
    }

    // Update sidebar edit link
    const sidebarEl = document.getElementById('docs-sidebar-edit-link');
    if (sidebarEl) {
        sidebarEl.href = 'https://github.com/mengshi02/axons/tree/main/docs/' + filePath;
    }
}

// ==================== Pagination ====================
function updatePagination(docName) {
    const el = document.getElementById('docs-pagination');
    if (!el) return;

    const idx = DOC_ORDER.indexOf(docName);
    let html = '';

    if (idx > 0) {
        const prev = DOC_ORDER[idx - 1];
        html += '<a href="#' + prev + '" class="docs-pagination-link docs-pagination-prev" data-doc="' + prev + '">' +
            '<i class="fas fa-arrow-left"></i>' +
            '<div><div class="pagination-label">' + t('docs.pagination.prev') + '</div>' +
            '<div class="pagination-title">' + t(DOC_CONFIG[prev].i18nKey) + '</div></div></a>';
    }

    if (idx < DOC_ORDER.length - 1) {
        const next = DOC_ORDER[idx + 1];
        html += '<a href="#' + next + '" class="docs-pagination-link docs-pagination-next" data-doc="' + next + '">' +
            '<i class="fas fa-arrow-right"></i>' +
            '<div><div class="pagination-label">' + t('docs.pagination.next') + '</div>' +
            '<div class="pagination-title">' + t(DOC_CONFIG[next].i18nKey) + '</div></div></a>';
    }

    el.innerHTML = html;
    el.querySelectorAll('.docs-pagination-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const doc = link.getAttribute('data-doc');
            if (doc) window.location.hash = doc;
        });
    });
}

// ==================== UI State Helpers ====================
function showLoading() {
    const loading = document.getElementById('docs-loading');
    const error = document.getElementById('docs-error');
    const article = document.getElementById('docs-article');
    const pagination = document.getElementById('docs-pagination');
    if (loading) loading.style.display = 'flex';
    if (error) error.style.display = 'none';
    if (article) article.innerHTML = '';
    if (pagination) pagination.innerHTML = '';
}

function hideLoading() {
    const el = document.getElementById('docs-loading');
    if (el) el.style.display = 'none';
}

function showError() {
    const loading = document.getElementById('docs-loading');
    const error = document.getElementById('docs-error');
    const article = document.getElementById('docs-article');
    const pagination = document.getElementById('docs-pagination');
    if (loading) loading.style.display = 'none';
    if (error) error.style.display = 'flex';
    if (article) article.innerHTML = '';
    if (pagination) pagination.innerHTML = '';
}

function hideError() {
    const el = document.getElementById('docs-error');
    if (el) el.style.display = 'none';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}