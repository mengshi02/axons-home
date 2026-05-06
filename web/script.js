// ==================== i18n Translation Configuration ====================
const translations = {
    en: {
        // Page meta info
        'page.title': 'Axons AI | Code Intelligence Engine',
        'page.description': 'Code graph analysis, intelligent refactoring, and private deployment for complex engineering. Runs fully offline, your code never leaves your machine.',

        // Navigation
        'nav.home': 'Home',
        'nav.features': 'Core Capabilities',
        'nav.pricing': 'Pricing',
        'nav.download': 'Download',
        'nav.contact': 'Contact',

        // Hero section
        'hero.title': 'Axons AI',
        'hero.positioning': 'Code Intelligence Engine',
        'hero.subtitle': 'Code Graph Analysis · Intelligent Refactoring · Private Deployment for Complex Engineering',
        'hero.declaration': 'Runs fully offline, your code never leaves your machine',
        'hero.description': 'Most AI coding tools are limited to line-by-line completion and snippet generation, unable to understand the full picture of large projects, untangle complex dependencies, or handle legacy system transformation. Axons is built on a self-developed code graph engine + multi-agent collaborative architecture, constructing an engineering knowledge network from the source code foundation, precisely parsing cross-language, million-line complex projects. Focused on solving enterprise-level pain points: architectural chaos, technical debt accumulation, legacy system iteration difficulties, and uncontrollable code refactoring risks.',
        'hero.sp1': '🔒 Private & Offline, Code Never Leaves Your Machine',
        'hero.sp2': '🕸️ Self-built Code Knowledge Graph, Cross-language Architecture Understanding',
        'hero.sp3': '⚡ Incremental Graph Updates, Sub-second Refresh for Large Projects',
        'hero.download': 'Download Now',
        'hero.demo': 'Watch Demo',

        // Language support
        'languages.title': 'Supported Languages',

        // Floating cards
        'floating.archgraph': 'Architecture Graph',
        'floating.incremental': 'Incremental Update',
        'floating.refactor': 'Smart Refactor',
        'floating.private': 'Private Deploy',

        // Features
        'features.title': 'Core Capabilities',
        'features.subtitle': 'Understand Architecture → Unravel Dependencies → Controlled Modification → Safe Rollback',

        // Core capabilities
        'cf.graph.title': 'Full-Scope Code Architecture Graph',
        'cf.graph.desc': 'Automatically reverse-engineer project layering, module dependencies, call chains, and package structure relationships. Visualize the real engineering architecture, eliminate manual梳理 costs.',
        'cf.lang.title': 'Cross-Language Deep Source Code Understanding',
        'cf.lang.desc': 'Native support for Go / Java / TypeScript / C# / Python / C/C++ / Rust. Unified semantic analysis framework, compatible with new and old mixed tech stack complex projects.',
        'cf.refactor.title': 'Minimally Invasive Intelligent Refactoring',
        'cf.refactor.desc': 'Follows original coding conventions and architectural constraints. Precise local modifications, rejecting large-scale destructive rewrites. Built-in change snapshots, one-click version rollback, avoiding production incidents.',
        'cf.private.title': 'Offline Private Secure Deployment',
        'cf.private.desc': 'Fully local computation, business code never uploaded or leaked. Adapts to intranet-isolated environments, meeting data security requirements for government, finance, and classified projects.',

        // Incremental graph
        'cf.incremental.badge': 'Core Performance Barrier',
        'cf.incremental.title': 'Incremental Graph Dynamic Update',
        'cf.incremental.desc': 'Only detects changed files, functions, and dependencies. Only recalculates the changed parts, without touching the entire engineering graph.',
        'cf.incremental.b1': '⚡ Sub-second architecture graph refresh',
        'cf.incremental.b2': '💾 Large projects run background without resource drain',
        'cf.incremental.b3': '🔄 Three-tier detection: Journal → mtime → content hash',
        'cf.incremental.old.label': 'Traditional Tools',
        'cf.incremental.old.desc': 'Change one line → full project re-analysis → slow, laggy, memory-hungry',
        'cf.incremental.new.label': 'Axons',
        'cf.incremental.new.desc': 'Change one line → only recalculate changes → sub-second refresh',

        // Comparison
        'compare.title': 'Product Differentiation',
        'compare.subtitle': 'Lightweight + Architectural + Domestic + Private',
        'compare.ai.title': 'General AI Code Assistants',
        'compare.ai.desc': 'Focused on code generation and conversational writing, no architectural awareness, no engineering global capability, only suitable for scattered daily development.',
        'compare.ai.tag': 'Cursor / Copilot / Claude Code',
        'compare.audit.title': 'Foreign Code Audit Tools',
        'compare.audit.desc': 'Biased towards security vulnerability scanning, heavy and closed, poor localization, unsuitable for domestic legacy system iteration.',
        'compare.audit.tag': 'SonarQube / CodeQL',
        'compare.axons.title': 'Axons',
        'compare.axons.desc': 'Designed for domestic SME R&D teams, traditional software companies, and legacy engineering projects. Balancing development efficiency, architecture governance, and data security.',
        'compare.axons.tag': 'Architectural · Domestic · Private',

        // Use cases
        'scenarios.title': 'Use Cases',
        'scenarios.s1.title': 'Large Legacy System Architecture Analysis',
        'scenarios.s1.desc': 'Technical debt governance, automatic reverse architecture restoration',
        'scenarios.s2.title': 'Multi-language Mixed Project Refactoring',
        'scenarios.s2.desc': 'Code standardization, unified semantic analysis for mixed tech stacks',
        'scenarios.s3.title': 'Intranet-Isolated Development',
        'scenarios.s3.desc': 'Security compliance scenarios where code cannot be transmitted externally',
        'scenarios.s4.title': 'Onboarding Unfamiliar Legacy Projects',
        'scenarios.s4.desc': 'Quickly understand overall architecture, reduce onboarding costs',
        'scenarios.s5.title': 'Long-term Enterprise Engineering Iteration',
        'scenarios.s5.desc': 'Reduce refactoring risks and maintenance costs',

        // Demo
        'demo.title': 'Product Demo',
        'demo.subtitle': 'See How Axons Boosts Your Development Efficiency',

        // Pricing
        'pricing.title': 'Choose Your Plan',
        'pricing.subtitle': 'From individual developers to enterprise private deployment',
        'pricing.free.tier': 'Free Community Edition',
        'pricing.free.price': 'Free',
        'pricing.free.f1': 'Basic code generation',
        'pricing.free.f2': 'Small project syntax analysis',
        'pricing.free.f3': 'Free for personal non-commercial use forever',
        'pricing.free.cta': 'Free Download',
        'pricing.pro.badge': 'Recommended',
        'pricing.pro.tier': 'Professional Developer Edition',
        'pricing.pro.price': '¥29/month',
        'pricing.pro.annual': 'Annual discount',
        'pricing.pro.f1': 'Full architecture graph',
        'pricing.pro.f2': 'All-language analysis',
        'pricing.pro.f3': 'Medium-large project refactoring',
        'pricing.pro.f4': 'Advanced Agent collaboration',
        'pricing.pro.f5': 'Incremental graph updates',
        'pricing.pro.cta': 'Subscribe Now',
        'pricing.enterprise.tier': 'Enterprise Private Edition',
        'pricing.enterprise.price': 'Custom Quote',
        'pricing.enterprise.f1': 'Intranet offline deployment',
        'pricing.enterprise.f2': 'Custom feature adaptation',
        'pricing.enterprise.f3': 'Dedicated technical support',
        'pricing.enterprise.f4': 'Commercial license',
        'pricing.enterprise.cta': 'Contact Us',

        // FAQ
        'faq.title': 'FAQ',
        'faq.q1': 'Will my code be uploaded to the cloud?',
        'faq.a1': 'All computation runs locally offline. Source code stays on your machine only, no cloud collection, ensuring code asset security.',
        'faq.q2': 'What project scale is supported?',
        'faq.a2': 'Natively supports 100K to million-line mid-to-large engineering projects, compatible with complex monolithic and microservice hybrid architectures.',
        'faq.q3': 'Is IDE integration supported?',
        'faq.a3': 'VSCode / IDEA native plugins are in continuous development. MCP protocol integration is already supported for seamless AI assistant connection.',
        'faq.q4': 'Any open source plans?',
        'faq.a4': 'The core engine is self-developed and closed-source. Basic framework components will be progressively open-sourced to build the developer ecosystem.',

        // Download
        'download.title': 'Download Now',
        'download.subtitle': 'Choose the version for your platform',
        'download.version': 'Version 1.0.0',
        'download.recommended': 'Recommended',
        'download.online': 'Online Experience',
        'download.dmg': 'Download .dmg',
        'download.zip': 'Download .zip',
        'download.visit': 'Visit Online',
        'download.noDownload': 'No download needed',
        'download.mac.silicon': 'Apple Silicon (M1/M2/M3)',
        'download.mac.intel': 'Intel Chip',
        'download.mac.native': 'Native Experience',
        'download.windows.support': 'Windows 10/11 Support',
        'download.windows.bit': '64-bit Application',
        'download.windows.portable': 'Portable, No Install',
        'download.linux.desktop': 'Desktop Application',
        'download.linux.deb': 'DEB / RPM Packages',
        'download.linux.appimage': 'AppImage Portable',
        'download.appimage': 'Download AppImage',
        'download.web.browser': 'Browser-Based',
        'download.web.server': 'Local Server',
        'download.web.portable': 'Portable Version',

        // System requirements
        'requirements.title': 'System Requirements',
        'requirements.mac': 'macOS 10.15 (Catalina) or later',
        'requirements.windows': 'Windows 10 or later (64-bit)',
        'requirements.linux': 'Modern Linux distribution (glibc 2.31+)',

        // Contact
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Join the Community, Grow Together',
        'contact.tech.title': 'Tech Community',
        'contact.tech.desc': 'Exchange technical insights with developers',
        'contact.tech.join': 'Join Group',
        'contact.business.title': 'Business Partnership',
        'contact.business.desc': 'Enterprise customization and technical support',
        'contact.business.reach': 'Contact Us',
        'contact.opensource.title': 'Open Source',
        'contact.opensource.desc': 'Participate in project development',
        'contact.opensource.repo': 'Visit Repository',

        // Footer
        'footer.tagline': 'Making complex software engineering intelligently understandable',
        'footer.mission': 'Axons AI focuses on enterprise-grade code intelligence infrastructure',
        'footer.visitors': 'Visitors',
        'footer.visitors.pv': 'Page Views',
        'footer.visitors.uv': 'Unique Visitors',
        'footer.visitors.device': 'Your Device',
        'footer.product': 'Product',
        'footer.features': 'Core Capabilities',
        'footer.download': 'Download',
        'footer.changelog': 'Changelog',
        'footer.resources': 'Resources',
        'footer.docs': 'Documentation',
        'footer.api': 'API Reference',
        'footer.community': 'Community',
        'footer.issues': 'Issue Tracker',
        'footer.discussions': 'Discussions',
        'footer.contributing': 'Contributing'
    },
    zh: {
        // Page meta info
        'page.title': 'Axons AI | 代码智能引擎',
        'page.description': '面向复杂工程的代码图谱分析·智能重构·私有化部署。纯本地运行，代码不上云。',

        // Navigation
        'nav.home': '首页',
        'nav.features': '核心能力',
        'nav.pricing': '版本',
        'nav.download': '下载',
        'nav.contact': '联系',

        // Hero section
        'hero.title': 'Axons AI',
        'hero.positioning': '代码智能引擎',
        'hero.subtitle': '面向复杂工程的代码图谱分析 · 智能重构 · 私有化部署',
        'hero.declaration': '纯本地私有化运行，代码不上云，架构自主可控',
        'hero.description': '当下AI编程工具，大多局限于单行补全、片段生成，无法理解大型项目全貌、梳理复杂依赖、承接存量遗留系统改造。Axons 基于自研代码图谱引擎 + 多Agent协同架构，从源码底层构建工程知识网络，精准解析跨语言、百万行级复杂项目。专注解决：架构混乱、技术债堆积、遗留系统迭代困难、代码重构风险不可控等企业级核心痛点。',
        'hero.sp1': '🔒 本地私有化，代码不上云',
        'hero.sp2': '🕸️ 自研代码知识图谱，跨语言架构全局理解',
        'hero.sp3': '⚡ 增量图谱动态更新，超大项目秒级无感刷新',
        'hero.download': '立即下载',
        'hero.demo': '观看演示',

        // Language support
        'languages.title': '支持的编程语言',

        // Floating cards
        'floating.archgraph': '架构图谱',
        'floating.incremental': '增量更新',
        'floating.refactor': '智能重构',
        'floating.private': '私有化部署',

        // Features
        'features.title': '核心能力',
        'features.subtitle': '读懂架构 → 梳理依赖 → 可控修改 → 安全回滚',

        // Core capabilities
        'cf.graph.title': '全域代码架构图谱',
        'cf.graph.desc': '自动逆向还原项目分层、模块依赖、调用链路、包结构关系。可视化呈现真实工程架构，告别人工梳理成本。',
        'cf.lang.title': '跨语言深度源码理解',
        'cf.lang.desc': '原生支持 Go / Java / TypeScript / C# / Python / C/C++ / Rust。统一语义分析框架，兼容新旧混合技术栈复杂项目。',
        'cf.refactor.title': '最小侵入智能重构',
        'cf.refactor.desc': '遵循原有编码规范与架构约束。精准局部修改，拒绝大范围破坏性改写。自带变更快照，一键版本回滚，规避线上事故。',
        'cf.private.title': '离线私有化安全部署',
        'cf.private.desc': '全程本地运算，业务代码不上传、不外泄。适配内网隔离环境，满足政企、金融、涉密项目数据安全要求。',

        // Incremental graph
        'cf.incremental.badge': '核心性能壁垒',
        'cf.incremental.title': '增量图谱动态更新',
        'cf.incremental.desc': '只检测改动的文件、函数、依赖，只重新计算变化部分，不动整个工程图谱。',
        'cf.incremental.b1': '⚡ 秒级刷新架构图',
        'cf.incremental.b2': '💾 大项目常驻后台不耗资源',
        'cf.incremental.b3': '🔄 三层检测机制：Journal → mtime → content hash',
        'cf.incremental.old.label': '普通工具',
        'cf.incremental.old.desc': '改一行 → 全量重分析整个项目 → 卡、慢、耗内存',
        'cf.incremental.new.label': 'Axons',
        'cf.incremental.new.desc': '改一行 → 只重算变化部分 → 秒级刷新',

        // Comparison
        'compare.title': '产品差异化',
        'compare.subtitle': '轻量化 + 架构化 + 国产化 + 私有化',
        'compare.ai.title': '通用AI代码助手',
        'compare.ai.desc': '侧重代码生成、对话仿写，无架构认知、无工程全局能力，仅适用于零散日常开发。',
        'compare.ai.tag': 'Cursor / Copilot / Claude Code',
        'compare.audit.title': '国外代码审计工具',
        'compare.audit.desc': '偏重安全漏洞扫描，笨重封闭、本地化适配差、不适合国内遗留系统迭代。',
        'compare.audit.tag': 'SonarQube / CodeQL',
        'compare.axons.title': 'Axons',
        'compare.axons.desc': '专为国内中小研发团队、传统软件企业、存量老旧工程项目设计。兼顾开发效率、架构治理、数据安全三者平衡。',
        'compare.axons.tag': '架构化 · 国产化 · 私有化',

        // Use cases
        'scenarios.title': '适用场景',
        'scenarios.s1.title': '大型遗留系统架构梳理',
        'scenarios.s1.desc': '技术债治理，自动逆向还原架构全貌',
        'scenarios.s2.title': '多语言混合项目重构',
        'scenarios.s2.desc': '代码规范化，统一语义分析新旧混合技术栈',
        'scenarios.s3.title': '内网隔离环境研发',
        'scenarios.s3.desc': '禁止代码对外传输的安全合规场景',
        'scenarios.s4.title': '接手陌生老项目',
        'scenarios.s4.desc': '快速熟悉整体架构，降低上手成本',
        'scenarios.s5.title': '企业长期工程迭代',
        'scenarios.s5.desc': '降低重构风险与维护成本',

        // Demo
        'demo.title': '产品演示',
        'demo.subtitle': '看看 Axons 如何守护代码安全',

        // Pricing
        'pricing.title': '选择版本',
        'pricing.subtitle': '从个人开发到企业私有化，按需选择',
        'pricing.free.tier': '免费社区版',
        'pricing.free.price': '免费',
        'pricing.free.f1': '基础代码生成',
        'pricing.free.f2': '小型项目语法分析',
        'pricing.free.f3': '个人非商用永久免费',
        'pricing.free.cta': '免费下载',
        'pricing.pro.badge': '推荐',
        'pricing.pro.tier': '专业开发者版',
        'pricing.pro.price': '¥29/月',
        'pricing.pro.annual': '年付特惠',
        'pricing.pro.f1': '完整架构图谱',
        'pricing.pro.f2': '全语言分析',
        'pricing.pro.f3': '中大项目重构',
        'pricing.pro.f4': '高级Agent协作',
        'pricing.pro.f5': '增量图谱更新',
        'pricing.pro.cta': '立即订阅',
        'pricing.enterprise.tier': '企业私有化版',
        'pricing.enterprise.price': '定制报价',
        'pricing.enterprise.f1': '内网离线部署',
        'pricing.enterprise.f2': '定制化功能适配',
        'pricing.enterprise.f3': '专属技术支持',
        'pricing.enterprise.f4': '商业授权',
        'pricing.enterprise.cta': '联系我们',

        // FAQ
        'faq.title': '常见问题',
        'faq.q1': '代码是否会上传外网？',
        'faq.a1': '全部本地离线计算，源码仅留存本机，无云端收集，保障代码资产安全。',
        'faq.q2': '支持多大规模项目？',
        'faq.a2': '原生支持十万～百万行级别中大型工程，适配复杂单体、微服务混合架构。',
        'faq.q3': '是否支持IDE集成？',
        'faq.a3': '后续持续迭代 VSCode / IDEA 原生插件，无缝融入现有开发工作流。当前已支持 MCP 协议接入。',
        'faq.q4': '有无开源计划？',
        'faq.a4': '核心底层引擎自研闭源，基础框架部分逐步开源，共建开发者生态。',

        // Download
        'download.title': '立即下载',
        'download.subtitle': '选择适合您平台的版本',
        'download.version': '版本 1.0.0',
        'download.recommended': '推荐',
        'download.online': '在线体验',
        'download.dmg': '下载 .dmg',
        'download.zip': '下载 .zip',
        'download.visit': '在线访问',
        'download.noDownload': '无需下载',
        'download.mac.silicon': 'Apple Silicon (M1/M2/M3)',
        'download.mac.intel': 'Intel 芯片',
        'download.mac.native': '原生体验',
        'download.windows.support': '支持 Windows 10/11',
        'download.windows.bit': '64位应用程序',
        'download.windows.portable': '免安装绿色版',
        'download.linux.desktop': '桌面端应用',
        'download.linux.deb': 'DEB / RPM 安装包',
        'download.linux.appimage': 'AppImage 便携版',
        'download.appimage': '下载 AppImage',
        'download.web.browser': '基于浏览器',
        'download.web.server': '本地服务器',
        'download.web.portable': '便携版本',

        // System requirements
        'requirements.title': '系统要求',
        'requirements.mac': 'macOS 10.15 (Catalina) 或更高版本',
        'requirements.windows': 'Windows 10 或更高版本 (64位)',
        'requirements.linux': '现代 Linux 发行版 (glibc 2.31+)',

        // Contact
        'contact.title': '联系我们',
        'contact.subtitle': '加入社区，共同成长',
        'contact.tech.title': '技术交流群',
        'contact.tech.desc': '与开发者交流技术心得',
        'contact.tech.join': '加入群聊',
        'contact.business.title': '商业合作',
        'contact.business.desc': '企业定制与技术支持',
        'contact.business.reach': '联系我们',
        'contact.opensource.title': '开源社区',
        'contact.opensource.desc': '参与项目开发与贡献',
        'contact.opensource.repo': '访问仓库',

        // Footer
        'footer.tagline': '让复杂软件工程，拥有可被理解的智能架构',
        'footer.mission': 'Axons AI 专注企业级代码智能底层基建',
        'footer.visitors': '访客数',
        'footer.visitors.pv': '总访问',
        'footer.visitors.uv': '独立访客',
        'footer.visitors.device': '当前设备',
        'footer.product': '产品',
        'footer.features': '核心能力',
        'footer.download': '下载',
        'footer.changelog': '更新日志',
        'footer.resources': '资源',
        'footer.docs': '文档',
        'footer.api': 'API 参考',
        'footer.community': '社区',
        'footer.issues': '问题反馈',
        'footer.discussions': '讨论区',
        'footer.contributing': '贡献指南'
    }
};

// Current language
let currentLang = 'en';

// ==================== Language Switch Function ====================
function initLanguageSwitch() {
    const langBtns = document.querySelectorAll('.lang-btn');

    // Read language preference from local storage
    const savedLang = localStorage.getItem('axons-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    updateLanguage(currentLang);
    updateActiveButton(currentLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                updateLanguage(lang);
                updateActiveButton(lang);
                localStorage.setItem('axons-lang', lang);

                // Update HTML lang attribute
                document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
            }
        });
    });
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update recommend badge text
    const recommendBadge = document.querySelector('.os-recommend');
    if (recommendBadge) {
        const recommendText = lang === 'zh' ? '为您推荐' : 'Recommended';
        recommendBadge.innerHTML = `<i class="fas fa-magic"></i> ${recommendText}`;
    }

    // Switch QR code/link based on language for tech community
    const qrZh = document.getElementById('tech-qr-zh');
    const qrEn = document.getElementById('tech-qr-en');
    if (qrZh && qrEn) {
        qrZh.style.display = lang === 'zh' ? 'block' : 'none';
        qrEn.style.display = lang === 'en' ? 'block' : 'none';
    }

    // Sync device label language
    if (typeof renderDeviceLabel === 'function') {
        renderDeviceLabel();
    }

    // Update page title
    if (translations[lang] && translations[lang]['page.title']) {
        document.title = translations[lang]['page.title'];
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang] && translations[lang]['page.description']) {
        metaDesc.setAttribute('content', translations[lang]['page.description']);
    }
}

function updateActiveButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}




// ==================== Particle Background Effect ====================
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 30; // Reduced particle count, better for light theme

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        const size = 2 + Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        // Light theme uses semi-transparent orange particles
        particle.style.background = `rgba(249, 115, 22, ${0.15 + Math.random() * 0.25})`;
        container.appendChild(particle);
    }
}

// ==================== Navbar Scroll Effect ====================
function handleNavScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==================== Mobile Menu Toggle ====================
function handleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a menu item
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==================== Smooth Scrolling ====================
function handleSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== Video Player Control ====================
function handleVideoPlayer() {
    const video = document.getElementById('demo-video');
    const playBtn = document.getElementById('play-btn');
    const overlay = document.querySelector('.video-overlay');

    if (!video || !playBtn) return;

    playBtn.addEventListener('click', () => {
        video.play();
        overlay.classList.add('hidden');
    });

    video.addEventListener('pause', () => {
        overlay.classList.remove('hidden');
    });

    video.addEventListener('ended', () => {
        overlay.classList.remove('hidden');
    });

    // Click video to pause/play
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            overlay.classList.add('hidden');
        } else {
            video.pause();
        }
    });
}

// ==================== Download Tracking ====================
function trackDownloads() {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const platform = btn.closest('.download-card').getAttribute('data-platform');
            console.log(`Download clicked: ${platform}`);

            // Analytics code can be added here, e.g., send to analytics platform
            // gtag('event', 'download', { 'platform': platform });

            // Show download notification
            showDownloadNotification(platform);
        });
    });
}

function showDownloadNotification(platform) {
    const platformNames = currentLang === 'zh' ? {
        'mac': 'macOS',
        'windows': 'Windows',
        'web': 'Web版'
    } : {
        'mac': 'macOS',
        'windows': 'Windows',
        'web': 'Web'
    };

    const message = currentLang === 'zh'
        ? `正在下载 ${platformNames[platform]} 版本...`
        : `Downloading ${platformNames[platform]} version...`;

    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #F97316 0%, #FB923C 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.875rem;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(249, 115, 22, 0.5);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== Architecture Selector ====================
function handleArchSelector() {
    // macOS architecture switch
    const macCard = document.querySelector('[data-platform="mac"]');
    if (macCard) {
        const archBtns = macCard.querySelectorAll('.arch-btn');
        const downloadBtn = macCard.querySelector('.download-btn');

        const macUrls = {
            arm64: 'https://github.com/mengshi02/axons/releases/download/v1.0.0/axons-macos-arm64.dmg',
            amd64: 'https://github.com/mengshi02/axons/releases/download/v1.0.0/axons-macos-amd64.dmg'
        };

        archBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling
                archBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const arch = btn.getAttribute('data-arch');
                downloadBtn.href = macUrls[arch];
            });
        });
    }

    // Web platform custom dropdown selector
    const webCard = document.querySelector('[data-platform="web"]');
    if (webCard) {
        const trigger = webCard.querySelector('.custom-select-trigger');
        const options = webCard.querySelector('.custom-options');
        const optionItems = webCard.querySelectorAll('.custom-option');
        const hiddenSelect = webCard.querySelector('.arch-select-hidden');
        const downloadBtn = webCard.querySelector('.download-btn');
        const selectText = trigger.querySelector('.select-text');

        const webUrls = {
            'linux-amd64': 'https://github.com/mengshi02/axons/releases/download/v1.0.0/axons-web-linux-amd64.zip',
            'linux-arm64': 'https://github.com/mengshi02/axons/releases/download/v1.0.0/axons-web-linux-arm64.zip',
            'darwin-amd64': 'https://github.com/mengshi02/axons/releases/download/v1.0.0/axons-web-darwin-amd64.zip',
            'darwin-arm64': 'https://github.com/mengshi02/axons/releases/download/v1.0.0/axons-web-darwin-arm64.zip',
            'windows-amd64': 'https://github.com/mengshi02/axons/releases/download/v1.0.0/axons-web-windows-amd64.zip',
            'windows-arm64': 'https://github.com/mengshi02/axons/releases/download/v1.0.0/axons-web-windows-arm64.zip'
        };

        // Click trigger to toggle dropdown
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            trigger.classList.toggle('active');
            options.classList.toggle('active');
        });

        // Allow scrolling inside dropdown
        options.addEventListener('wheel', (e) => {
            e.stopPropagation();
        });

        options.addEventListener('scroll', (e) => {
            e.stopPropagation();
        });

        // Click option
        optionItems.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();

                // Remove all selected states
                optionItems.forEach(opt => opt.classList.remove('selected'));

                // Add current selected state
                option.classList.add('selected');

                // Update display text
                const text = option.querySelector('span').textContent;
                selectText.textContent = text;

                // Update hidden select value
                const value = option.getAttribute('data-value');
                hiddenSelect.value = value;

                // Update download link
                downloadBtn.href = webUrls[value];

                // Close dropdown
                trigger.classList.remove('active');
                options.classList.remove('active');
            });
        });

        // Click outside to close dropdown
        document.addEventListener('click', (e) => {
            if (!webCard.contains(e.target)) {
                trigger.classList.remove('active');
                options.classList.remove('active');
            }
        });

        // Keyboard navigation support
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                trigger.classList.toggle('active');
                options.classList.toggle('active');
            } else if (e.key === 'Escape') {
                trigger.classList.remove('active');
                options.classList.remove('active');
            }
        });
    }
}

// ==================== Card Hover Effect ====================
function handleCardHover() {
    const cards = document.querySelectorAll('.feature-card, .download-card, .contact-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Skip hover effect for interactive elements
            if (e.target.tagName === 'SELECT' ||
                e.target.tagName === 'BUTTON' ||
                e.target.tagName === 'A' ||
                e.target.tagName === 'INPUT') {
                return;
            }

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ==================== Scroll Reveal Animation ====================
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.feature-card, .download-card, .contact-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==================== Auto OS Detection ====================
function detectOS() {
    const userAgent = window.navigator.userAgent;
    const platform = navigator.platform;

    let detectedOS = 'web';

    if (platform.toLowerCase().includes('mac')) {
        detectedOS = 'mac';
    } else if (platform.toLowerCase().includes('win')) {
        detectedOS = 'windows';
    } else if (platform.toLowerCase().includes('linux')) {
        detectedOS = 'linux';
    }

    // Highlight the corresponding download card
    const targetCard = document.querySelector(`.download-card[data-platform="${detectedOS}"]`);
    if (targetCard && detectedOS !== 'web') {
        targetCard.classList.add('recommended');

        // Add recommend badge
        if (!targetCard.querySelector('.os-recommend')) {
            const badge = document.createElement('div');
            badge.className = 'os-recommend';
            const recommendText = currentLang === 'zh' ? '为您推荐' : 'Recommended';
            badge.innerHTML = `<i class="fas fa-magic"></i> ${recommendText}`;
            badge.style.cssText = `
                position: absolute;
                top: 1rem;
                left: 1rem;
                background: linear-gradient(135deg, #10b981 0%, #0ea5e9 100%);
                color: white;
                padding: 0.25rem 0.75rem;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 0.25rem;
                z-index: 10;
            `;
            targetCard.appendChild(badge);
        }
    }
}

// ==================== Lazy Load Images ====================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ==================== Keyboard Navigation ====================
function handleKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC closes mobile menu
        if (e.key === 'Escape') {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ==================== Performance: Throttle ====================
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==================== Visitor Counter + Device Detection ====================
// PV/UV is tracked by a self-hosted backend via /api/stats.
// This module: 1) Detects and displays the current visitor's device type  2) Shows placeholder when API is unavailable
function detectDevice() {
    const ua = (navigator.userAgent || '').toLowerCase();
    const uaData = navigator.userAgentData;

    // Prefer modern UA-CH
    if (uaData && uaData.platform) {
        const p = uaData.platform.toLowerCase();
        if (uaData.mobile) {
            if (p.includes('android')) return { key: 'android', icon: 'fa-android', brand: 'fab' };
            if (p.includes('ios') || p.includes('iphone') || p.includes('ipad')) return { key: 'ios', icon: 'fa-apple', brand: 'fab' };
            return { key: 'mobile', icon: 'fa-mobile-alt', brand: 'fas' };
        }
        if (p.includes('mac')) return { key: 'mac', icon: 'fa-apple', brand: 'fab' };
        if (p.includes('windows')) return { key: 'windows', icon: 'fa-windows', brand: 'fab' };
        if (p.includes('linux') || p.includes('chrome os')) return { key: 'linux', icon: 'fa-linux', brand: 'fab' };
    }

    // Fallback to UA string
    if (/iphone|ipad|ipod/.test(ua)) return { key: 'ios', icon: 'fa-apple', brand: 'fab' };
    if (/android/.test(ua)) return { key: 'android', icon: 'fa-android', brand: 'fab' };
    if (/mac os x|macintosh/.test(ua)) return { key: 'mac', icon: 'fa-apple', brand: 'fab' };
    if (/windows nt|win64|win32/.test(ua)) return { key: 'windows', icon: 'fa-windows', brand: 'fab' };
    if (/linux|x11|cros/.test(ua)) return { key: 'linux', icon: 'fa-linux', brand: 'fab' };
    if (/mobile|tablet/.test(ua)) return { key: 'mobile', icon: 'fa-mobile-alt', brand: 'fas' };
    return { key: 'unknown', icon: 'fa-question-circle', brand: 'fas' };
}

const DEVICE_LABEL = {
    en: { mac: 'macOS', windows: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', mobile: 'Mobile', unknown: 'Unknown' },
    zh: { mac: 'macOS', windows: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', mobile: '移动端', unknown: '未知' }
};

let currentDevice = null;

function renderDeviceLabel() {
    if (!currentDevice) return;
    const nameEl = document.getElementById('device-name');
    if (nameEl) {
        const labels = DEVICE_LABEL[currentLang] || DEVICE_LABEL.en;
        nameEl.textContent = labels[currentDevice.key] || labels.unknown;
    }
}

function initVisitorCounter() {
    // Render current visitor's device type
    currentDevice = detectDevice();
    const iconEl = document.getElementById('device-icon');
    if (iconEl) {
        iconEl.classList.remove('fas', 'fab');
        iconEl.classList.add(currentDevice.brand);
        iconEl.classList.add(currentDevice.icon);
    }
    renderDeviceLabel();

    // Report this visit to self-hosted backend
    fetch('/api/stats/visit?path=' + encodeURIComponent(window.location.pathname), {
        method: 'POST'
    }).catch(() => { });

    // Fetch PV/UV statistics
    fetchVisitorStats();
}

function fetchVisitorStats() {
    fetch('/api/stats')
        .then(res => res.json())
        .then(data => {
            const pvEl = document.getElementById('site-pv');
            const uvEl = document.getElementById('site-uv');
            if (pvEl && data.pv !== undefined) pvEl.textContent = data.pv.toLocaleString();
            if (uvEl && data.uv !== undefined) uvEl.textContent = data.uv.toLocaleString();
        })
        .catch(() => {
            // Show placeholder when API unavailable
            const pvEl = document.getElementById('site-pv');
            const uvEl = document.getElementById('site-uv');
            if (pvEl) {
                pvEl.textContent = '—';
                pvEl.title = currentLang === 'zh' ? '统计服务暂不可用' : 'Counter service unavailable';
            }
            if (uvEl) {
                uvEl.textContent = '—';
                uvEl.title = currentLang === 'zh' ? '统计服务暂不可用' : 'Counter service unavailable';
            }
        });
}

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {


    // Create particle background
    createParticles();

    // Navigation
    handleNavScroll();
    handleMobileMenu();
    handleSmoothScroll();

    // Animation effects
    handleScrollAnimation();
    handleCardHover();

    // Video player
    handleVideoPlayer();

    // Download features
    trackDownloads();
    detectOS();
    handleArchSelector();

    // Other features
    lazyLoadImages();
    handleKeyboardNavigation();

    // Visitor counter
    initVisitorCounter();

    // Language switch
    initLanguageSwitch();

    console.log('✨ Axons website loaded successfully!');
});

// ==================== Page Load Complete Animation ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});