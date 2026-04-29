// ==================== 国际化翻译配置 ====================
const translations = {
    en: {
        // 导航
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.download': 'Download',
        'nav.contact': 'Contact',

        // Hero区域
        'hero.badge': 'Secure Native Code Analysis & Generation Agent',
        'hero.description': 'Fusing four core capabilities — Graph Visualization, Intelligent Analysis, Security Detection, and AI Reasoning — to build an intelligent defense line for code security. Cross-platform, ready to use.',
        'hero.download': 'Download Now',
        'hero.demo': 'Watch Demo',

        // 四大要素
        'pillar.graph': 'Graph',
        'pillar.analysis': 'Analysis',
        'pillar.security': 'Security',
        'pillar.intelligence': 'Intelligence',

        // 语言支持
        'languages.title': 'Supported Languages',

        // 浮动卡片
        'floating.graph': 'Code Graph',
        'floating.analysis': 'Deep Analysis',
        'floating.security': 'Security Shield',
        'floating.intelligence': 'AI Reasoning',

        // 特性
        'features.title': 'Four Core Capabilities',
        'features.subtitle': 'Graph · Analysis · Security · Intelligence',
        'features.graph.title': 'Code Graph',
        'features.graph.desc': 'Build code dependency graphs and call chain visualization, precisely mapping module relationships. Support multi-level graph drill-down and interactive exploration.',
        'features.analysis.title': 'Deep Analysis',
        'features.analysis.desc': 'Combining static analysis with dynamic tracing to accurately identify code defects, performance bottlenecks, and architecture smells. Multi-language, multi-dimensional scanning.',
        'features.security.title': 'Security Shield',
        'features.security.desc': 'Native security detection engine covering OWASP Top 10, sensitive data leaks, and supply chain risks. Runs locally, zero cloud upload.',
        'features.intelligence.title': 'AI Reasoning',
        'features.intelligence.desc': 'AI-powered code understanding and reasoning engine, auto-generating fix suggestions, security patches, and refactoring plans. Continuous learning, ever more precise.',
        'features.visual.title': 'Visual Reports',
        'features.visual.desc': 'Generate intuitive graph reports and security scores, making code risks, dependencies, and improvement directions clear at a glance.',
        'features.fast.title': 'Lightning Engine',
        'features.fast.desc': 'Optimized analysis engine with second-level scanning for large projects. Incremental analysis focuses only on changes, guarding continuously without slowing development.',

        // 演示
        'demo.title': 'Product Demo',
        'demo.subtitle': 'See How Axons Guards Your Code Security',

        // 下载
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
        'download.web.browser': 'Browser-Based',
        'download.web.server': 'Local Server',
        'download.web.portable': 'Portable Version',

        // 系统要求
        'requirements.title': 'System Requirements',
        'requirements.mac': 'macOS 10.15 (Catalina) or later',
        'requirements.windows': 'Windows 10 or later (64-bit)',
        'requirements.linux': 'Modern Linux distribution (glibc 2.31+)',

        // 联系
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
        'footer.tagline': 'Graph-Driven · Intelligent Analysis · Security-Native',
        'footer.product': 'Product',
        'footer.features': 'Capabilities',
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
        // 导航
        'nav.home': '首页',
        'nav.features': '特性',
        'nav.download': '下载',
        'nav.contact': '联系',

        // Hero区域
        'hero.badge': '安全原生代码分析与生成智能体',
        'hero.description': '融合图谱可视化、智能分析引擎、安全检测与AI推理四大核心能力，构建代码安全的智能防线。跨平台支持，开箱即用。',
        'hero.download': '立即下载',
        'hero.demo': '观看演示',

        // 四大要素
        'pillar.graph': '图谱',
        'pillar.analysis': '分析',
        'pillar.security': '安全',
        'pillar.intelligence': '智能',

        // 语言支持
        'languages.title': '支持的编程语言',

        // 浮动卡片
        'floating.graph': '代码图谱',
        'floating.analysis': '深度分析',
        'floating.security': '安全防护',
        'floating.intelligence': '智能推理',

        // 特性
        'features.title': '四大核心能力',
        'features.subtitle': '图谱 · 分析 · 安全 · 智能',
        'features.graph.title': '代码图谱',
        'features.graph.desc': '构建代码依赖图谱与调用链可视化，精准映射模块关系，让代码架构一目了然。支持多层级图谱钻取与交互式探索。',
        'features.analysis.title': '深度分析',
        'features.analysis.desc': '静态分析与动态追踪相结合，精准识别代码缺陷、性能瓶颈和架构异味。支持多语言、多维度全面扫描。',
        'features.security.title': '安全防护',
        'features.security.desc': '原生安全检测引擎，覆盖OWASP Top 10漏洞模式、敏感数据泄露、供应链风险。本地运行，代码零上云。',
        'features.intelligence.title': '智能推理',
        'features.intelligence.desc': 'AI驱动的代码理解与推理引擎，自动生成修复建议、安全补丁和重构方案。持续学习，越用越精准。',
        'features.visual.title': '可视化报告',
        'features.visual.desc': '生成直观的图谱报告和安全评分，让代码风险、依赖关系和改进方向一目了然。',
        'features.fast.title': '极速引擎',
        'features.fast.desc': '优化分析引擎，大型项目秒级扫描。增量分析只关注变更，持续守护不影响开发节奏。',

        // 演示
        'demo.title': '产品演示',
        'demo.subtitle': '看看 Axons 如何守护代码安全',

        // 下载
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
        'download.web.browser': '基于浏览器',
        'download.web.server': '本地服务器',
        'download.web.portable': '便携版本',

        // 系统要求
        'requirements.title': '系统要求',
        'requirements.mac': 'macOS 10.15 (Catalina) 或更高版本',
        'requirements.windows': 'Windows 10 或更高版本 (64位)',
        'requirements.linux': '现代 Linux 发行版 (glibc 2.31+)',

        // 联系
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
        'footer.tagline': '图谱驱动 · 智能分析 · 安全原生',
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

// 当前语言
let currentLang = 'en';

// ==================== 语言切换功能 ====================
function initLanguageSwitch() {
    const langBtns = document.querySelectorAll('.lang-btn');

    // 从本地存储读取语言偏好
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

                // 更新 HTML lang 属性
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

    // 更新推荐标签文字
    const recommendBadge = document.querySelector('.os-recommend');
    if (recommendBadge) {
        const recommendText = lang === 'zh' ? '为您推荐' : 'Recommended for You';
        recommendBadge.innerHTML = `<i class="fas fa-magic"></i> ${recommendText}`;
    }
}

function updateActiveButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}




// ==================== 粒子背景效果 ====================
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 30; // 减少粒子数量，更适合浅色主题

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
        // 浅色主题使用橙色半透明粒子
        particle.style.background = `rgba(249, 115, 22, ${0.15 + Math.random() * 0.25})`;
        container.appendChild(particle);
    }
}

// ==================== 导航栏滚动效果 ====================
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

// ==================== 移动端菜单切换 ====================
function handleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击菜单项关闭菜单
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==================== 平滑滚动 ====================
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

// ==================== 视频播放控制 ====================
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

    // 点击视频暂停/播放
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            overlay.classList.add('hidden');
        } else {
            video.pause();
        }
    });
}

// ==================== 下载统计 ====================
function trackDownloads() {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const platform = btn.closest('.download-card').getAttribute('data-platform');
            console.log(`Download clicked: ${platform}`);

            // 这里可以添加统计代码，比如发送到分析平台
            // gtag('event', 'download', { 'platform': platform });

            // 显示下载提示
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

    // 添加样式
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

    // 3秒后移除
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 添加动画样式
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

// ==================== 架构选择器 ====================
function handleArchSelector() {
    // macOS 架构切换
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
                e.stopPropagation(); // 阻止事件冒泡
                archBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const arch = btn.getAttribute('data-arch');
                downloadBtn.href = macUrls[arch];
            });
        });
    }

    // Web 平台自定义下拉选择器
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

        // 点击触发器切换下拉菜单
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            trigger.classList.toggle('active');
            options.classList.toggle('active');
        });

        // 允许在下拉菜单内滚动
        options.addEventListener('wheel', (e) => {
            e.stopPropagation();
        });

        options.addEventListener('scroll', (e) => {
            e.stopPropagation();
        });

        // 点击选项
        optionItems.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();

                // 移除所有选中状态
                optionItems.forEach(opt => opt.classList.remove('selected'));

                // 添加当前选中状态
                option.classList.add('selected');

                // 更新显示文本
                const text = option.querySelector('span').textContent;
                selectText.textContent = text;

                // 更新隐藏的 select 值
                const value = option.getAttribute('data-value');
                hiddenSelect.value = value;

                // 更新下载链接
                downloadBtn.href = webUrls[value];

                // 关闭下拉菜单
                trigger.classList.remove('active');
                options.classList.remove('active');
            });
        });

        // 点击外部关闭下拉菜单
        document.addEventListener('click', (e) => {
            if (!webCard.contains(e.target)) {
                trigger.classList.remove('active');
                options.classList.remove('active');
            }
        });

        // 键盘导航支持
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

// ==================== 卡片悬停效果 ====================
function handleCardHover() {
    const cards = document.querySelectorAll('.feature-card, .download-card, .contact-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // 如果目标是交互元素，不触发悬停效果
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

// ==================== 滚动显示动画 ====================
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

// ==================== 自动检测操作系统 ====================
function detectOS() {
    const userAgent = window.navigator.userAgent;
    const platform = navigator.platform;

    let detectedOS = 'web';

    if (platform.toLowerCase().includes('mac')) {
        detectedOS = 'mac';
    } else if (platform.toLowerCase().includes('win')) {
        detectedOS = 'windows';
    }

    // 高亮对应的下载卡片
    const targetCard = document.querySelector(`.download-card[data-platform="${detectedOS}"]`);
    if (targetCard && detectedOS !== 'web') {
        targetCard.classList.add('recommended');

        // 添加推荐标签
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

// ==================== 懒加载图片 ====================
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

// ==================== 键盘导航支持 ====================
function handleKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC 关闭移动端菜单
        if (e.key === 'Escape') {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ==================== 性能优化：节流 ====================
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

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {


    // 创建粒子背景
    createParticles();

    // 导航相关
    handleNavScroll();
    handleMobileMenu();
    handleSmoothScroll();

    // 动画效果
    handleScrollAnimation();
    handleCardHover();

    // 视频播放
    handleVideoPlayer();

    // 下载功能
    trackDownloads();
    detectOS();
    handleArchSelector();

    // 其他功能
    lazyLoadImages();
    handleKeyboardNavigation();

    // 语言切换
    initLanguageSwitch();

    console.log('✨ Axons 官网已加载完成！');
});

// ==================== 页面加载完成动画 ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});