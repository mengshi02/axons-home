// ==================== 国际化翻译配置 ====================
const translations = {
    en: {
        // 导航
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.download': 'Download',
        'nav.contact': 'Contact',

        // Hero区域
        'hero.badge': 'Next-Gen Intelligent Code Analysis Platform',
        'hero.subtitle': 'Making Code Analysis Simple and Powerful',
        'hero.description': 'AI-powered code analysis tool that helps developers quickly understand code architecture, detect potential issues, and improve code quality. Cross-platform support, ready to use.',
        'hero.download': 'Download Now',
        'hero.demo': 'Watch Demo',

        // 语言支持
        'languages.title': 'Supported Languages',

        // 浮动卡片
        'floating.analysis': 'Code Analysis',
        'floating.architecture': 'Architecture',
        'floating.detection': 'Issue Detection',
        'floating.optimization': 'Performance',

        // 特性
        'features.title': 'Core Features',
        'features.subtitle': 'Why Choose Axons?',
        'features.ai.title': 'AI-Powered Analysis',
        'features.ai.desc': 'Advanced AI algorithms to intelligently identify code patterns and potential issues, providing deep insights',
        'features.visual.title': 'Visual Reports',
        'features.visual.desc': 'Generate intuitive charts and reports, making complex code relationships clear at a glance',
        'features.fast.title': 'Lightning Fast',
        'features.fast.desc': 'Optimized analysis engine that scans large projects in seconds',
        'features.privacy.title': 'Privacy Protected',
        'features.privacy.desc': 'Runs locally, code never uploaded to cloud, fully protecting your code privacy',
        'features.plugin.title': 'Plugin Ecosystem',
        'features.plugin.desc': 'Rich plugin system supporting custom analysis rules and extended functionality',
        'features.update.title': 'Continuous Updates',
        'features.update.desc': 'Regular new features and optimizations, keeping up with technology trends',

        // 演示
        'demo.title': 'Product Demo',
        'demo.subtitle': 'See How Axons Boosts Your Development Efficiency',

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
        'download.mac.intel': 'Intel & Apple Silicon Support',
        'download.mac.native': 'Native macOS Experience',
        'download.mac.update': 'Auto-update Support',
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
        'requirements.web': 'Modern Browser (Chrome, Firefox, Safari, Edge)',

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
        'footer.tagline': 'Making Code Analysis Simple and Powerful',
        'footer.product': 'Product',
        'footer.features': 'Features',
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
        'hero.badge': '新一代智能代码分析平台',
        'hero.subtitle': '让代码分析变得简单而强大',
        'hero.description': '基于AI驱动的代码分析工具，帮助开发者快速理解代码架构、发现潜在问题、提升代码质量。支持多平台，开箱即用。',
        'hero.download': '立即下载',
        'hero.demo': '观看演示',

        // 语言支持
        'languages.title': '支持的编程语言',

        // 浮动卡片
        'floating.analysis': '代码分析',
        'floating.architecture': '架构图',
        'floating.detection': '问题检测',
        'floating.optimization': '性能优化',

        // 特性
        'features.title': '核心特性',
        'features.subtitle': '为什么选择 Axons？',
        'features.ai.title': 'AI 驱动分析',
        'features.ai.desc': '基于先进的AI算法，智能识别代码模式和潜在问题，提供深度洞察',
        'features.visual.title': '可视化报告',
        'features.visual.desc': '生成直观的图表和报告，让复杂的代码关系一目了然',
        'features.fast.title': '极速分析',
        'features.fast.desc': '优化的分析引擎，大型项目也能在秒级完成扫描',
        'features.privacy.title': '隐私保护',
        'features.privacy.desc': '本地运行，代码不上传云端，完全保护您的代码隐私',
        'features.plugin.title': '插件生态',
        'features.plugin.desc': '丰富的插件系统，支持自定义分析规则和扩展功能',
        'features.update.title': '持续更新',
        'features.update.desc': '定期发布新功能和优化，紧跟技术发展趋势',

        // 演示
        'demo.title': '产品演示',
        'demo.subtitle': '看看 Axons 如何提升您的开发效率',

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
        'download.mac.intel': '支持 Intel 和 Apple Silicon',
        'download.mac.native': '原生 macOS 体验',
        'download.mac.update': '自动更新支持',
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
        'requirements.web': 'Modern Browser (Chrome, Firefox, Safari, Edge)',

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
        'footer.tagline': '让代码分析变得简单而强大',
        'footer.product': '产品',
        'footer.features': '特性',
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
        updateLanguage(currentLang);
        updateActiveButton(currentLang);
    }

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

// ==================== 卡片悬停效果 ====================
function handleCardHover() {
    const cards = document.querySelectorAll('.feature-card, .download-card, .contact-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
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