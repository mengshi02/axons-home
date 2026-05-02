// ==================== 国际化翻译配置 ====================
const translations = {
    en: {
        // 导航
        'nav.home': 'Home',
        'nav.features': 'Product',
        'nav.download': 'Download',
        'nav.contact': 'Contact',

        // Hero区域
        'hero.badge': 'AI-Native Code Analysis & Generation Agent',
        'hero.description': 'Three engines driving, multi-agent collaboration, AI-native architecture. From code understanding to intelligent repair, full-chain protection for code security and quality.',
        'hero.download': 'Download Now',
        'hero.demo': 'Watch Demo',

        // 四大要素
        'pillar.graph': 'Graph',
        'pillar.analysis': 'Analysis',
        'pillar.context': 'Context',
        'pillar.intelligence': 'Intelligence',

        // 语言支持
        'languages.title': 'Supported Languages',

        // 浮动卡片
        'floating.graph': 'Graph Engine',
        'floating.analysis': 'Multi-Agent',
        'floating.security': 'Native Terminal',
        'floating.intelligence': 'AI-Native',

        // 特性
        'features.title': 'Product Power',
        'features.subtitle': 'Engine-Driven · Agent Collaboration · AI-Native Architecture',

        // 分类
        'features.category.engine': 'Core Computing Base',
        'features.category.engine.title': 'Three engines, the cornerstone of code understanding',
        'features.category.agent': 'Agent',
        'features.category.agent.title': 'Multi-agent collaboration, continuous evolution',
        'features.category.tool': 'Native Capabilities',
        'features.category.tool.title': 'Native toolchain, seamless integration',
        'features.category.native': 'AI-Native',
        'features.category.native.title': 'AI-native architecture, open capability boundaries',

        // AI编程安全机制
        'features.category.security': 'AI Coding Safety',
        'features.category.security.title': 'Core guarantees for safe AI code editing',
        'features.scope.title': 'Precise Scope Modification',
        'features.scope.desc': 'Reject large-scale brute rewrites. Lock the minimal modification scope based on graph dependencies, preventing AI "hallucinations" from breaking unrelated code.',
        'features.integrity.title': 'Structural Integrity Validation',
        'features.integrity.desc': 'After each AI write, instantly perform syntax and dependency structure validation, ensuring code always stays in a compilable, runnable safe state.',
        'features.rollback.title': 'Operation Rollback',
        'features.rollback.desc': 'Every AI edit is atomically recorded, supporting line-level precise rollback, making AI code changes as safe and controllable as local version control.',

        // 核心引擎
        'features.graph.title': 'Graph Computing Engine (GCE)',
        'features.graph.desc': 'Build code dependency graphs and call chain visualization, precisely mapping module relationships. Multi-level drill-down and interactive exploration for clear architecture insights.',
        'features.analysis.title': 'Analysis Engine (ACE)',
        'features.analysis.desc': 'Deep fusion of static analysis and dynamic tracing, accurately identifying code defects, performance bottlenecks, and architecture smells. Multi-language, multi-dimensional scanning.',
        'features.context.title': 'Conversation Context Engine (CCE)',
        'features.context.desc': 'Intelligently aggregate code context semantics, building cross-file, cross-module deep understanding, providing a precise semantic foundation for analysis and reasoning.',

        // 智能体
        'features.multiagent.title': 'Multi-Agent Collaboration',
        'features.multiagent.desc': 'Multiple specialized agents work in concert — graph construction, security auditing, code repair — each performing its role to collaboratively complete complex analysis tasks.',
        'features.dialogue.title': 'Multi-Turn Dialogue',
        'features.dialogue.desc': 'Context-aware multi-turn dialogue, progressively diving into code issues, precisely locating root causes and delivering targeted recommendations.',
        'features.memory.title': 'Memory Persistence',
        'features.memory.desc': 'Conversation history and analysis results are persistently stored, maintaining context continuity across sessions for seamless deep analysis without repetition.',
        'features.vector.title': 'Dual-Modal Vectorization',
        'features.vector.desc': 'Code text and graph structure dual-modal vector representation for more precise semantic retrieval and more efficient similar code discovery.',

        // 工具
        'features.terminal.title': 'Native Terminal',
        'features.terminal.desc': 'Built-in native terminal environment, agents can directly execute commands, run tests, and operate the file system for a closed loop from analysis to repair.',
        'features.editor.title': 'AI Autonomous Editor',
        'features.editor.desc': 'AI-driven autonomous code editing, agents can independently read, understand, and modify code files for truly automated code repair and refactoring.',

        // AI原生
        'features.cli.title': 'CLI & MCP',
        'features.cli.desc': 'CLI command-line and MCP protocol support for external capabilities, easily integrating into CI/CD pipelines and existing development toolchains.',
        'features.container.title': 'Scratch Containerization',
        'features.container.desc': 'Minimalist containerized deployment based on Scratch images, compact size, second-level startup, secure isolation, cloud-native out of the box.',
        'features.crossplatform.title': 'Cross-Platform',
        'features.crossplatform.desc': 'macOS / Windows / Linux desktop and Web full coverage. Build once, run everywhere, guarding code security anytime, anywhere.',

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
        'download.linux.desktop': 'Desktop Application',
        'download.linux.deb': 'DEB / RPM Packages',
        'download.linux.appimage': 'AppImage Portable',
        'download.appimage': 'Download AppImage',
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
        'footer.tagline': 'Engine-Driven · Agent Collaboration · AI-Native',
        'footer.visitors': 'Visitors',
        'footer.visitors.pv': 'Page Views',
        'footer.visitors.uv': 'Unique Visitors',
        'footer.visitors.device': 'Your Device',
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
        'nav.features': '产品力',
        'nav.download': '下载',
        'nav.contact': '联系',

        // Hero区域
        'hero.badge': 'AI原生代码分析与生成智能体',
        'hero.description': '三大引擎驱动，多智能体协同，AI原生架构。从代码理解到智能修复，全链路守护代码安全与质量。',
        'hero.download': '立即下载',
        'hero.demo': '观看演示',

        // 四大要素
        'pillar.graph': '图谱',
        'pillar.analysis': '分析',
        'pillar.context': '上下文',
        'pillar.intelligence': '智能',

        // 语言支持
        'languages.title': '支持的编程语言',

        // 浮动卡片
        'floating.graph': '图谱引擎',
        'floating.analysis': '多智能体协同',
        'floating.security': '原生终端',
        'floating.intelligence': 'AI原生',

        // 特性
        'features.title': '产品力',
        'features.subtitle': '引擎驱动 · 智能体协同 · AI原生架构',

        // 分类
        'features.category.engine': '核心计算底座',
        'features.category.engine.title': '三大引擎，构筑代码理解基石',
        'features.category.agent': '智能体',
        'features.category.agent.title': '多智能体协同，持续进化',
        'features.category.tool': '原生能力',
        'features.category.tool.title': '原生工具链，无缝集成',
        'features.category.native': 'AI原生',
        'features.category.native.title': 'AI原生架构，开放能力边界',

        // AI编程安全机制
        'features.category.security': 'AI编程安全机制',
        'features.category.security.title': '核心保障，让AI改代码安全可控',
        'features.scope.title': '精准定界修改',
        'features.scope.desc': '拒绝大范围暴力重写，基于图谱依赖锁定最小修改范围，防止AI"幻觉"破坏无关代码。',
        'features.integrity.title': '结构完整性校验',
        'features.integrity.desc': '在AI每次写入后，即时进行语法与依赖结构校验，确保代码始终处于可编译、可运行的安全状态。',
        'features.rollback.title': '操作可回滚',
        'features.rollback.desc': 'AI的每一次编辑均被原子化记录，支持精准到单行级别的操作回滚，让AI改代码如同本地版本控制般安全可控。',

        // 核心引擎
        'features.graph.title': '图谱计算引擎（GCE）',
        'features.graph.desc': '构建代码依赖图谱与调用链可视化，精准映射模块关系，支持多层级钻取与交互式探索，让代码架构一目了然。',
        'features.analysis.title': '分析引擎（ACE）',
        'features.analysis.desc': '静态分析与动态追踪深度融合，精准识别代码缺陷、性能瓶颈与架构异味，支持多语言多维度全面扫描。',
        'features.context.title': '会话上下文引擎（CCE）',
        'features.context.desc': '智能聚合代码上下文语义，构建跨文件、跨模块的深层理解，为分析与推理提供精准的语义基座。',

        // 智能体
        'features.multiagent.title': '多智能体协同',
        'features.multiagent.desc': '多个专业智能体分工协作，图谱构建、安全审计、代码修复各司其职，协同完成复杂分析任务。',
        'features.dialogue.title': '多轮对话',
        'features.dialogue.desc': '支持上下文连续的多轮对话交互，逐步深入代码问题，精准定位根因并给出针对性建议。',
        'features.memory.title': '记忆持久化',
        'features.memory.desc': '对话历史与分析结果持久化存储，跨会话保持上下文连续性，无需重复描述即可延续深度分析。',
        'features.vector.title': '双模态向量化',
        'features.vector.desc': '代码文本与图谱结构双模态向量化表示，语义检索更精准，相似代码发现更高效。',

        // 工具
        'features.terminal.title': '原生终端',
        'features.terminal.desc': '内置原生终端环境，智能体可直接执行命令、运行测试、操作文件系统，实现从分析到修复的全闭环。',
        'features.editor.title': 'AI自主编辑器',
        'features.editor.desc': 'AI驱动的自主代码编辑能力，智能体可自主读取、理解、修改代码文件，实现真正的自动化代码修复与重构。',

        // AI原生
        'features.cli.title': 'CLI & MCP',
        'features.cli.desc': '支持CLI命令行与MCP协议对外提供能力，轻松集成到CI/CD流水线与现有开发工具链中。',
        'features.container.title': 'Scratch级容器化',
        'features.container.desc': '基于Scratch镜像的极简容器化部署，体积小巧、启动秒级、安全隔离，云原生环境开箱即用。',
        'features.crossplatform.title': '全平台发行',
        'features.crossplatform.desc': 'macOS / Windows / Linux 桌面端与Web端全覆盖，一次构建多端运行，随时随地守护代码安全。',

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
        'download.linux.desktop': '桌面端应用',
        'download.linux.deb': 'DEB / RPM 安装包',
        'download.linux.appimage': 'AppImage 便携版',
        'download.appimage': '下载 AppImage',
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
        'footer.tagline': '引擎驱动 · 智能体协同 · AI原生',
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
        const recommendText = lang === 'zh' ? '为您推荐' : 'Recommended';
        recommendBadge.innerHTML = `<i class="fas fa-magic"></i> ${recommendText}`;
    }

    // 根据语言切换技术交流区二维码/链接
    const qrZh = document.getElementById('tech-qr-zh');
    const qrEn = document.getElementById('tech-qr-en');
    if (qrZh && qrEn) {
        qrZh.style.display = lang === 'zh' ? 'block' : 'none';
        qrEn.style.display = lang === 'en' ? 'block' : 'none';
    }

    // 同步设备名称的语言
    if (typeof renderDeviceLabel === 'function') {
        renderDeviceLabel();
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
    } else if (platform.toLowerCase().includes('linux')) {
        detectedOS = 'linux';
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

// ==================== 访客计数 + 设备识别 ====================
// PV/UV 由不蒜子（busuanzi.pure.mini.js）跨设备统计，写入 #busuanzi_value_site_pv / _uv。
// 这里只负责：1) 解析当前访客的设备类型并展示  2) 在不蒜子失败时给出占位
function detectDevice() {
    const ua = (navigator.userAgent || '').toLowerCase();
    const uaData = navigator.userAgentData;

    // 优先使用现代 UA-CH
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

    // 回退到 UA 字符串
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
    // 渲染当前访客的设备类型
    currentDevice = detectDevice();
    const iconEl = document.getElementById('device-icon');
    if (iconEl) {
        // FontAwesome: fab=品牌, fas=实心
        iconEl.classList.remove('fas', 'fab');
        iconEl.classList.add(currentDevice.brand);
        iconEl.classList.add(currentDevice.icon);
    }
    renderDeviceLabel();

    // 不蒜子加载失败兜底：3 秒后若仍是 "--" 则显示提示
    setTimeout(() => {
        ['busuanzi_value_site_pv', 'busuanzi_value_site_uv'].forEach(id => {
            const el = document.getElementById(id);
            if (el && (!el.textContent || el.textContent.trim() === '--')) {
                el.textContent = '—';
                el.title = currentLang === 'zh' ? '统计服务暂不可用' : 'Counter service unavailable';
            }
        });
    }, 3500);
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

    // 访客计数
    initVisitorCounter();

    // 语言切换
    initLanguageSwitch();

    console.log('✨ Axons 官网已加载完成！');
});

// ==================== 页面加载完成动画 ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});