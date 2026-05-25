// ==================== i18n Translation Configuration ====================
const translations = {
    en: {
        // Page meta info
        'page.title': 'Axons — AI-First Code Workbench',
        'page.description': 'Ultra-lightweight AI-First code workbench. Instant startup, native AI intelligence, goodbye bloated IDEs. Open source, free forever for commercial use.',

        // Navigation
        'nav.features': 'Product',
        'nav.compare': 'Scenarios',
        'nav.download': 'Download',
        'nav.docs': 'Docs',
        'nav.demo': 'Demo',

        // Hero section
        'hero.title': 'Axons AI',
        'hero.positioning': '🔓 Open Source · MIT License · Free Forever for Commercial Use',
        'hero.subtitle': 'The Ultra-Lightweight AI-First Code Workbench',
        'hero.declaration': 'Lightweight by design, extensible by nature — Instant startup, native AI intelligence, goodbye bloated IDEs',
        'hero.description': 'Ditch bloated traditional IDEs. Self-built four-dimensional intelligent engine core, AI capabilities natively embedded — not bolted on. 5 AI expert agents ready out-of-the-box, covering architecture governance, tech debt cleanup, and legacy system iteration. Your code never leaves your machine, fully private end-to-end.',
        'hero.sp1': '⚡ Ultra-Lightweight — Instant startup, minimal memory',
        'hero.sp2': '🧠 AI Native — Self-built intelligent engine, not an IDE wrapper',
        'hero.sp3': '🔌 Open Extension — Plugins / MCP / Skills assembled on demand',
        'hero.sp4': '🔓 Free Forever — MIT open source, commercial-friendly, customizable',
        'hero.download': 'Free Download',
        'hero.star': 'Star on GitHub',
        'hero.demo': 'Watch Demo',

        // Language support
        'languages.title': 'Supported Languages',

        // Floating cards
        'floating.lightweight': 'Instant Startup',
        'floating.ai-native': 'AI Native',
        'floating.extensible': 'Extensible',
        'floating.private': 'Private Deploy',

        // Why Axons
        'why.title': 'Why Axons?',
        'why.subtitle': 'You\'ve probably encountered these pain points too',
        'why.p1.q': 'IDE takes half a minute to start?',
        'why.p1.a': 'Axons starts instantly, goodbye bloat and lag',
        'why.p2.q': 'Change one line, unsure of the impact?',
        'why.p2.a': 'Code graph precisely locates, change impact at a glance',
        'why.p3.q': 'AI is just a completion tool?',
        'why.p3.a': '5 AI experts collaborate, full-flow empowerment from architecture to coding',
        'why.p4.q': 'Code must go to the cloud for AI?',
        'why.p4.a': 'Full-stack local privatization, code never leaves your machine',
        'why.p5.q': 'IDE eats 4GB+ of memory?',
        'why.p5.a': 'Ultra-lightweight, even low-spec devices run smoothly',

        // Features
        'features.title': 'Six Core Values',
        'features.subtitle': 'Lightweight by design, extensible by nature — Natively built from kernel to experience',

        // Core values
        'cf.lightweight.title': 'Ultra-Lightweight & Efficient',
        'cf.lightweight.desc': 'Ditch bloated traditional IDE features. Instant startup, minimal memory footprint, zero lag. Even low-spec devices run smoothly through the entire development cycle.',
        'cf.engine.title': 'Self-Built 4D Intelligent Engine',
        'cf.engine.desc': 'Graph Computing Engine (GCE), Analysis Engine (ACE), Cognitive Context Engine (CCE), and LLM — four engines deeply fused into a native AI code intelligence foundation, delivering full-dimension code perception and precise context understanding.',
        'cf.aiagent.title': 'Native Expert-Level AI Coding',
        'cf.aiagent.desc': '5 vertical-domain AI expert agents built-in, ready out-of-the-box with zero configuration. Covering code writing, bug fixing, architecture optimization, tech debt cleanup, and documentation generation. AI capabilities natively empowered, not simple plugin adaptations.',
        'cf.ecosystem.title': 'Open Extension Ecosystem',
        'cf.ecosystem.desc': 'Plugin system covering development languages, frameworks, tools, MCP protocol, custom Skills, and enterprise components. Highly customizable for individuals and teams. Assemble on demand, scale flexibly — zero resource usage when not enabled.',
        'cf.remote.title': 'Full-Scenario Remote Development',
        'cf.remote.desc': 'Native compatibility with Docker, WSL, and SSH remote development. Remote environment feels identical to local. The local side stays ultra-lightweight, perfectly adapting to cloud-native, distributed, and remote collaboration scenarios.',
        'cf.opensource.title': 'Open Source Without Limits',
        'cf.opensource.desc': 'MIT license, fully open source, no paywalls, no feature cuts, no commercial restrictions. Supports secondary development, custom modifications, and internal enterprise deployment. Break free from commercial tool restrictions.',

        // Incremental graph
        'cf.incremental.badge': 'Performance Highlight',
        'cf.incremental.title': 'Change one line, recalculate only that line — sub-second refresh',
        'cf.incremental.desc': 'Only detects changed files and dependencies, only recalculates the changed part — no full project re-analysis needed.',
        'cf.incremental.b1': '⚡ Sub-second architecture graph refresh, million-line projects update seamlessly',
        'cf.incremental.b2': '💾 Background resident memory footprint ultra-low, virtually imperceptible',
        'cf.incremental.b3': '🔄 Intelligent cascade detection: millisecond change感知 → second validation → accurate fallback',
        'cf.incremental.b4': '🗄️ Multi-project isolated storage, cache auto-reuse',
        'cf.incremental.old.label': 'Traditional Tools',
        'cf.incremental.old.desc': 'Change one line → full project re-analysis → slow, laggy, memory-hungry',
        'cf.incremental.new.label': 'Axons',
        'cf.incremental.new.desc': 'Change one line → only recalculate changes → sub-second refresh',

        // Product Forms
        'forms.title': 'One Workbench, Multiple Access Methods',
        'forms.subtitle': 'Freely combine by team and scenario, sharing the same intelligent engine',
        'forms.desktop.title': 'Desktop Client',
        'forms.desktop.desc': 'Ultra-lightweight native desktop experience. Instant startup, zero performance overhead, cross-platform ready.',
        'forms.desktop.tag': 'macOS · Windows · Linux',
        'forms.web.title': 'Web UI',
        'forms.web.desc': 'Browser-based, ready-to-use. High-performance graph visualization, team collaboration tool.',
        'forms.web.tag': 'Browser-based, ready-to-use',
        'forms.cli.title': 'Command-Line CLI',
        'forms.cli.desc': 'Commands directly connected to the engine. CI/CD friendly, seamless script automation integration.',
        'forms.cli.tag': 'build · audit · watch · diff-impact …',
        'forms.mcp.title': 'MCP Capability Output',
        'forms.mcp.desc': '30+ tools empowering mainstream AI coding clients as the upstream code knowledge provider.',
        'forms.mcp.tag': 'Claude Desktop · Cursor · Cline · Continue · Zed',

        // AI Agents
        'agents.title': '5 AI Experts, Ready Out-of-the-Box',
        'agents.subtitle': 'AI Orchestrator coordinates → Experts analyze in parallel → Results fused output',
        'agents.orch.title': 'AI Orchestrator',
        'agents.orch.desc': 'Intelligent task decomposition and delegation, multi-expert coordination to ensure efficient goal achievement.',
        'agents.arch.title': 'Architect',
        'agents.arch.desc': 'Identifies module boundaries, analyzes dependencies, checks architecture compliance — keeping code structure clear and controllable.',
        'agents.quality.title': 'Quality Analyst',
        'agents.quality.desc': 'Detects code smells, dead code, hotspot functions, and excessive coupling — delivers actionable optimization suggestions.',
        'agents.impact.title': 'Impact Analyst',
        'agents.impact.desc': 'Evaluates change impact scope and blast radius, aiding Code Review decisions, reducing refactoring risks.',
        'agents.engineer.title': 'Code Engineer',
        'agents.engineer.desc': 'Read/write files, execute commands, end-to-end coding tasks, integrated native terminal.',
        'agents.custom.title': 'Custom Agent',
        'agents.custom.desc': 'Create domain-specific agents with one click. Persistent memory, build your personalized AI assistant.',
        'agents.note': 'Multi-model support · Persistent conversation memory · Custom extensible',

        // Provider (MCP / CLI / Skills) — keep unchanged
        'mcp.title': 'Three Access Forms — Upstream of AI Coding',
        'mcp.subtitle': 'MCP Server · CLI · Agent Skills — 30+ tools built once, reused everywhere',
        'mcp.form.mcp.title': 'MCP Server',
        'mcp.form.mcp.desc': 'JSON-RPC 2.0 over HTTP, directly integrated by Claude Desktop / Cursor / Cline and other mainstream AI clients',
        'mcp.form.cli.title': 'CLI',
        'mcp.form.cli.desc': 'The axons command line covers graph building, query, analysis and auditing — easily embedded in CI/CD and scripts',
        'mcp.form.skills.title': 'Agent Skills',
        'mcp.form.skills.desc': 'code-graph-analyzer · dependency-tracker · code-search-assistant built on top of the CLI, compliant with the Agent Skills specification',
        'mcp.cat.search.title': 'Search',
        'mcp.cat.search.desc': 'keyword_search · semantic_search · hybrid_search · rerank_results · search_symbols',
        'mcp.cat.graph.title': 'Graph',
        'mcp.cat.graph.desc': 'get_symbol · find_callers · find_callees · path · find_call_chain · get_node_by_file',
        'mcp.cat.analysis.title': 'Analysis',
        'mcp.cat.analysis.desc': 'get_complexity · find_hotspots · find_dead_code · get_cochanges · get_pagerank · list_communities',
        'mcp.cat.arch.title': 'Architecture',
        'mcp.cat.arch.desc': 'arch_check · get_modules · find_impact · list_processes · get_process',
        'mcp.cat.exec.title': 'Execution',
        'mcp.cat.exec.desc': 'read_file · write_file · run_command · get_source_code · list_files',
        'mcp.cat.cce.title': 'Cognitive Context',
        'mcp.cat.cce.desc': 'get_context · list_context_templates (bimodal embedding + 5 scenario templates)',
        'mcp.clients.title': 'Verified MCP clients:',
        'mcp.protocol.note': 'JSON-RPC 2.0 over HTTP · Complies with Model Context Protocol specification',

        // Comparison (new table)
        'compare.title': 'AI-First Native Workbench vs IDE Wrapper Products',
        'compare.subtitle': 'Not an AI shell on top of an IDE — natively built from the kernel',
        'compare.col.dimension': 'Comparison Dimension',
        'compare.col.shell': 'IDE AI Wrapper',
        'compare.row.kernel': 'Core Architecture',
        'compare.row.kernel.shell': 'Based on VS Code re-packaging, AI is an add-on feature',
        'compare.row.kernel.axons': 'Self-built intelligent engine independent kernel, AI natively embedded',
        'compare.row.logic': 'Product Logic',
        'compare.row.logic.shell': 'Traditional IDE as main body, simple AI dialogue/completion overlay',
        'compare.row.logic.axons': 'AI capability as core, tools built around the AI engine',
        'compare.row.perf': 'Performance Experience',
        'compare.row.perf.shell': 'Slow startup, high memory, frequent lag',
        'compare.row.perf.axons': 'Instant startup, minimal memory, zero lag',
        'compare.row.tech': 'Technical Autonomy',
        'compare.row.tech.shell': 'Fully dependent on parent IDE, no deep customization possible',
        'compare.row.tech.axons': 'Core engines all self-built, technology closed-loop, independently iteratable',
        'compare.row.scene': 'Scenario Focus',
        'compare.row.scene.shell': 'Only supports basic completion and simple Q&A',
        'compare.row.scene.axons': 'Focused on architecture governance, tech debt cleanup, change risk assessment',
        'compare.row.license': 'Open Source License',
        'compare.row.license.shell': 'Mostly closed-source commercial, paid unlock, no secondary development',
        'compare.row.license.axons': 'MIT open source, free forever for commercial use, supports private deployment',
        'compare.row.extend': 'Extension Logic',
        'compare.row.extend.shell': 'All features bundled and pre-installed, forced resource occupation',
        'compare.row.extend.axons': 'Minimal kernel, load on demand, zero occupation when not enabled',
        'compare.summary': 'Axons is a <strong>natively built</strong> AI-first code workbench from kernel to experience — intelligent by nature, lightweight core, open source, focused on enterprise-grade complex R&D scenarios; ordinary IDE wrappers are just traditional tools with an AI coat, fundamentally different in technical essence and product value.',

        // Target Users
        'users.title': 'Who Uses Axons?',
        'users.subtitle': 'From students to enterprises, all types of developers',
        'users.u1.title': 'Professional Full-Stack Developers',
        'users.u1.desc': 'Break free from bloated IDEs, efficiently complete business development and architecture design',
        'users.u2.title': 'Students',
        'users.u2.desc': 'Zero barrier to entry, completely free with no payment pressure',
        'users.u3.title': 'R&D Teams / Enterprises',
        'users.u3.desc': 'Tech debt cleanup, architecture governance, change risk management',
        'users.u4.title': 'DevOps / Cloud-Native Engineers',
        'users.u4.desc': 'Docker/K8s/remote development all-in-one',
        'users.u5.title': 'Security & Compliance Teams',
        'users.u5.desc': 'Intranet isolated environments, code never leaves the machine',

        // Demo
        'demo.title': 'Product Demo',
        'demo.subtitle': 'See How Axons Boosts Your Development Efficiency',

        // Pricing
        'pricing.title': 'Open Source + Commercial Dual License',
        'pricing.subtitle': 'Core engine open-source and free, enterprise value-added features by subscription',
        'pricing.free.tier': 'Community Edition',
        'pricing.free.price': 'Free',
        'pricing.free.license': 'Apache 2.0 Open Source',
        'pricing.free.f1': 'Full three engines: GCE / ACE / CCE',
        'pricing.free.f2': '5 built-in AI expert agents',
        'pricing.free.f3': 'All 30+ MCP tools',
        'pricing.free.f4': 'Full support for 9 languages',
        'pricing.free.f5': 'Desktop / Web / CLI / MCP four forms',
        'pricing.free.f6': 'Open-source and commercial-friendly, community support',
        'pricing.free.f7': 'Incremental graph updates',
        'pricing.free.cta': 'Get on GitHub',
        'pricing.pro.badge': 'Team Recommended',
        'pricing.pro.tier': 'Professional Edition',
        'pricing.pro.price': '¥99/month/seat',
        'pricing.pro.annual': '20% off annual',
        'pricing.pro.f1': 'All Community Edition features',
        'pricing.pro.f2': 'Team collaboration: shared graph & agents',
        'pricing.pro.f3': 'Pluggable view panel integration',
        'pricing.pro.f4': 'Advanced terminal',
        'pricing.pro.f5': 'High-precision graph navigation',
        'pricing.pro.f6': 'Knowledge base incremental continuous updates',
        'pricing.pro.f7': 'Work journal',
        'pricing.pro.cta': 'Subscribe Now',
        'pricing.enterprise.tier': 'Enterprise Private Edition',
        'pricing.enterprise.price': 'Custom Quote',
        'pricing.enterprise.f1': 'All Professional Edition features',
        'pricing.enterprise.f2': 'Intranet offline one-click installer',
        'pricing.enterprise.f3': 'Tool platform integration (SSO, DevOps, knowledge platform, etc.)',
        'pricing.enterprise.f4': 'Audit logs and compliance reports',
        'pricing.enterprise.f5': 'Code intelligence cluster',
        'pricing.enterprise.f6': 'SLA guarantee + custom development',
        'pricing.enterprise.cta': 'Contact Sales',
        'pricing.note': '💡 Community Edition covers 95% of use cases. Professional and Enterprise editions provide closed-source value-added features like SSO, audit, and private deployment. See <a href="https://github.com/mengshi02/axons/blob/main/LICENSE" target="_blank">LICENSE</a>.',

        // FAQ
        'faq.title': 'FAQ',
        'faq.q1': 'Will my code be uploaded to the cloud?',
        'faq.a1': 'No. Code, graphs, vectors, and conversation memory all persist locally. Combined with local LLMs like 本地推理引擎, fully offline operation is achievable.',
        'faq.q2': 'What project scale is supported?',
        'faq.a2': 'Tested on projects from 100K to million-line scale. Incremental graph mechanism (Tier 0 Journal → Tier 1 mtime → Tier 2 content hash) ensures sub-second refresh. Daemon resident memory < 200MB.',
        'faq.q3': 'Is online LLM access mandatory?',
        'faq.a3': 'No. Supports OpenAI / Anthropic / 本地推理引擎 (local) / custom OpenAI-compatible endpoints. Recommended offline deployment with Qwen2.5-Coder, DeepSeek-Coder local models for truly end-to-end privatization.',
        'faq.q4': 'Replace or complement Cursor / Claude Desktop?',
        'faq.a4': 'Complementary. Axons exposes 30+ code graph / architecture analysis / semantic search tools via MCP, serving as a "code knowledge brain" for these AI clients — they handle conversation and generation, Axons understands engineering.',
        'faq.q5': 'Is IDE integration supported?',
        'faq.a5': 'Integrated with any MCP-compatible client (Claude Desktop / Cursor / Cline / Continue / Zed, etc.). Native VSCode / JetBrains plugins are on the roadmap.',
        'faq.q6': 'What deployment options are available?',
        'faq.a6': 'Binary (macOS / Windows / Linux, dual architecture), Docker, Kubernetes, Systemd services, enterprise intranet offline installers. See deployment docs.',
        'faq.q7': 'Open source license and commercial authorization?',
        'faq.a7': 'Community Edition uses Apache 2.0, open-source and commercial-friendly. Professional and Enterprise editions offer closed-source value-added features (SSO, audit, team collaboration, private ops) via subscription or authorization, no conflict.',
        'faq.q8': 'How to add new languages or custom agents?',
        'faq.a8': 'Add new languages by implementing the Tree-sitter Extractor interface (see internal/extractors/). Custom agents via system prompt + tool whitelist in the UI, persisted, no recompilation needed.',

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
        'requirements.mac': 'macOS 13.0 (Ventura) or later',
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
        'footer.tagline': 'The Ultra-Lightweight AI-First Code Workbench',
        'footer.mission': 'Axons — Lightweight by design, extensible by nature',
        'footer.visitors': 'Visitors',
        'footer.visitors.pv': 'Page Views',
        'footer.visitors.uv': 'Unique Visitors',
        'footer.visitors.device': 'Your Device',
        'footer.product': 'Product',
        'footer.features': 'Capabilities',
        'footer.agents': 'AI Experts',
        'footer.mcp': 'Provider',
        'footer.download': 'Download',
        'footer.changelog': 'Changelog',
        'footer.resources': 'Resources',
        'footer.architecture': 'Architecture',
        'footer.docs': 'Documentation',
        'footer.api': 'API Reference',
        'footer.deployment': 'Deployment Guide',
        'footer.community': 'Community',
        'footer.issues': 'Issue Tracker',
        'footer.discussions': 'Discussions',
        'footer.contributing': 'Contributing',
        'footer.security': 'Security Policy',
        'footer.demo': 'Demo',
        'footer.opensource': 'Open Source',
        'footer.indie': 'Built with ❤ by an indie developer, sustained by your Stars.',
        'os.title': '🔓 Open Source · Free · Forever Free',
        'os.subtitle': 'All features open-sourced under MIT license, commercial use allowed',
        'os.stat.repo': 'GitHub Repo',
        'os.stat.stars': 'Stars',
        'os.stat.forks': 'Forks',
        'os.stat.issues': 'Open Issues',
        'os.star': 'Star on GitHub',
        'os.fork': 'Fork',
        'os.clone': 'Clone',
        'os.license': 'Licensed under <a href="https://github.com/mengshi02/axons/blob/main/LICENSE" target="_blank">MIT</a> · Commercial-friendly · Modifiable · Redistributable',
        'os.enterprise.divider': 'Enterprise Inquiry',
        'os.enterprise.desc': 'Need private deployment, custom development, training, or SLA? Drop an email — case by case, custom quote.',
        'bn.title': 'A Note from the Builder',
        'bn.p1': 'Hi, I\u2019m the creator of Axons.',
        'bn.p2': 'This is an open-source project maintained by a single indie developer. No funding, no marketing budget — it lives on your Stars and feedback. If it helps you, please give it a Star or drop me an email. I personally read every message.',
        'bn.sig': '— Mengshi · 2026',
        'bn.email': 'Email Me',
        'bn.star': 'Star on GitHub',
        'bn.follow': 'Follow Developer',
        'faq.q9': 'Is Axons maintained by an indie developer? How stable is it?',
        'faq.a9': 'Yes, Axons is currently maintained by a single indie developer under Apache 2.0 license, with all code public on GitHub. The core engine is battle-tested on real projects ranging from 100K to million lines. Every commit runs the full CI test suite; all AI edits are atomically tracked with line-level rollback. Issues get a personal reply from the author.'
    },
    zh: {
        // Page meta info
        'page.title': 'Axons — 极致轻量的 AI-First 代码工作台',
        'page.description': '轻量为基，扩展为魂。AI-First原生代码工作台，秒级启动，原生AI智能，告别臃肿IDE。开源免费，永久免费商用。',

        // Navigation
        'nav.features': '产品',
        'nav.compare': '场景',
        'nav.download': '下载',
        'nav.docs': '文档',
        'nav.demo': '演示',

        // Hero section
        'hero.title': 'Axons AI',
        'hero.positioning': '🔓 开源免费 · MIT 协议 · 永久免费商用',
        'hero.subtitle': '极致轻量的 AI-First 代码工作台',
        'hero.declaration': '轻量为基，扩展为魂 — 秒级启动，原生AI智能，告别臃肿IDE',
        'hero.description': '摒弃传统IDE臃肿冗余，自研四维智能引擎内核，AI能力原生内嵌而非外接嫁接。5位AI专家开箱即用，覆盖架构治理、技术债清理、遗留系统迭代全流程。代码不出机器，数据全链路私有化。',
        'hero.sp1': '⚡ 极致轻量 — 秒级启动，超低内存，低配也流畅',
        'hero.sp2': '� AI 原生 — 自研智能引擎，绝非IDE套壳',
        'hero.sp3': '🔌 开放扩展 — 插件 / MCP / Skill 按需组装',
        'hero.sp4': '� 永久免费 — MIT开源，可商用可定制',
        'hero.download': '免费下载',
        'hero.star': 'Star on GitHub',
        'hero.demo': '观看演示',

        // Language support
        'languages.title': '支持的编程语言',

        // Floating cards
        'floating.lightweight': '秒级启动',
        'floating.ai-native': 'AI原生',
        'floating.extensible': '按需扩展',
        'floating.private': '私有化部署',

        // Why Axons
        'why.title': '为什么需要 Axons？',
        'why.subtitle': '你一定也遇到过这些痛点',
        'why.p1.q': 'IDE启动要等半分钟？',
        'why.p1.a': 'Axons 秒级启动，告别臃肿卡顿',
        'why.p2.q': '改一行代码，不知道影响范围？',
        'why.p2.a': '代码图谱精准定位，变更影响一目了然',
        'why.p3.q': 'AI只是个补全工具？',
        'why.p3.a': '5位AI专家协同，从架构到编码全流程赋能',
        'why.p4.q': '代码必须上云才智能？',
        'why.p4.a': '全链路本地私有化，代码不出机器',
        'why.p5.q': 'IDE动辄占4GB+内存？',
        'why.p5.a': '极致轻量，低配设备也能流畅运行',

        // Features
        'features.title': '六大核心价值',
        'features.subtitle': '轻量为基，扩展为魂 — 从内核到体验，原生打造',

        // Core values
        'cf.lightweight.title': '极致轻量高效',
        'cf.lightweight.desc': '摒弃传统IDE臃肿冗余功能，秒级启动、超低内存占用、无卡顿运行。低配设备也能流畅完成全流程开发任务，轻量化体验贯穿整个开发周期。',
        'cf.engine.title': '自研四维智能引擎',
        'cf.engine.desc': '图计算引擎GCE、分析引擎ACE、感知上下文引擎CCE、大模型LLM四大引擎深度融合，构建原生AI代码智能底座，实现全维度代码感知与精准上下文理解。',
        'cf.aiagent.title': '原生专家级AI编码',
        'cf.aiagent.desc': '内置5位垂直领域AI专家Agent，开箱即用无需额外配置。覆盖代码编写、缺陷修复、架构优化、技术债清理、文档生成全流程，AI能力原生赋能，而非外接插件式简易适配。',
        'cf.ecosystem.title': '开放式扩展生态',
        'cf.ecosystem.desc': '插件体系囊括开发语言、技术框架、效率工具、MCP协议、自定义Skill、企业级组件。支持个人与团队高度定制化搭建，按需组装、灵活扩容，不启用则零资源占用。',
        'cf.remote.title': '全场景远程开发',
        'cf.remote.desc': '原生兼容容器、WSL、SSH多模式远程开发，远程环境与本地操作体验完全一致。本地端保持极致轻量化，轻松适配云原生、分布式、远程协作研发场景。',
        'cf.opensource.title': '开源开放无限制',
        'cf.opensource.desc': 'MIT开源许可，源码完全开放，无付费壁垒、无功能阉割、无商用授权限制。支持二次开发、定制修改、企业内部部署，彻底打破商业化工具的权限枷锁。',

        // Incremental graph
        'cf.incremental.badge': '性能亮点',
        'cf.incremental.title': '改一行只算一行，秒级刷新',
        'cf.incremental.desc': '只检测改动的文件与依赖，只重新计算变化部分，不用重算整个工程图谱。',
        'cf.incremental.b1': '⚡ 秒级刷新架构图，百万行项目无感更新',
        'cf.incremental.b2': '💾 后台常驻内存占用极低，轻量到无感知',
        'cf.incremental.b3': '🔄 智能级联检测：毫秒感知变更 → 秒级验证 → 兜底准确',
        'cf.incremental.b4': '🗄️ 多项目隔离存储，缓存自动复用',
        'cf.incremental.old.label': '传统工具',
        'cf.incremental.old.desc': '改一行 → 全量重分析整个项目 → 卡、慢、耗内存',
        'cf.incremental.new.label': 'Axons',
        'cf.incremental.new.desc': '改一行 → 只重算变化部分 → 秒级刷新',

        // Product Forms
        'forms.title': '一个工作台，多种接入方式',
        'forms.subtitle': '按团队与场景自由组合，共享同一份智能引擎',
        'forms.desktop.title': '桌面客户端',
        'forms.desktop.desc': '极致轻量的原生桌面体验，秒级启动，性能无损耗，全平台适配无门槛。',
        'forms.desktop.tag': 'macOS · Windows · Linux',
        'forms.web.title': 'Web 端',
        'forms.web.desc': '浏览器即开即用，高性能图谱可视化，团队协作共享利器。',
        'forms.web.tag': '浏览器即开即用',
        'forms.cli.title': '命令行 CLI',
        'forms.cli.desc': '命令直连引擎，CI/CD 天然友好，脚本自动化无缝集成。',
        'forms.cli.tag': 'build · audit · watch · diff-impact …',
        'forms.mcp.title': 'MCP 能力输出',
        'forms.mcp.desc': '30+工具反向赋能主流AI编程客户端，做代码知识的上游提供方。',
        'forms.mcp.tag': 'Claude Desktop · Cursor · Cline · Continue · Zed',

        // AI Agents
        'agents.title': '5 位 AI 专家，开箱即用',
        'agents.subtitle': 'AI总控统筹 → 专家并行分析 → 结果融合输出',
        'agents.orch.title': 'AI 总控',
        'agents.orch.desc': '任务智能拆解与委派，多专家协同编排，确保高效达成目标。',
        'agents.arch.title': '架构师',
        'agents.arch.desc': '识别模块边界、分析依赖关系、检查架构合规，让工程结构清晰可控。',
        'agents.quality.title': '质量分析师',
        'agents.quality.desc': '发现代码异味、死代码、热点函数与过度耦合，输出可操作的优化建议。',
        'agents.impact.title': '影响分析师',
        'agents.impact.desc': '评估变更影响范围与爆炸半径，辅助 Code Review 决策，降低重构风险。',
        'agents.engineer.title': '代码工程师',
        'agents.engineer.desc': '读写文件、执行命令、端到端完成编码任务，集成原生终端。',
        'agents.custom.title': '自定义 Agent',
        'agents.custom.desc': '一键创建领域专属Agent，记忆持久化，打造你的专属AI助手。',
        'agents.note': '支持多种大模型接入 · 对话记忆持久化 · 可自定义扩展',

        // 能力输出（MCP / CLI / Skills）
        'mcp.title': '三种接入形态，做 AI 编程的上游能力源',
        'mcp.subtitle': 'MCP Server · CLI · Agent Skills —— 30+ 工具一次构建，多端复用',
        'mcp.form.mcp.title': 'MCP Server',
        'mcp.form.mcp.desc': 'JSON-RPC 2.0 over HTTP，被 Claude Desktop / Cursor / Cline 等主流 AI 客户端直接接入',
        'mcp.form.cli.title': 'CLI',
        'mcp.form.cli.desc': 'axons 命令行覆盖图谱构建、查询、分析、审计全流程，可嵌入 CI/CD 与脚本',
        'mcp.form.skills.title': 'Agent Skills',
        'mcp.form.skills.desc': '基于 CLI 封装的 code-graph-analyzer · dependency-tracker · code-search-assistant，符合 Agent Skills 规范',
        'mcp.cat.search.title': '搜索',
        'mcp.cat.search.desc': 'keyword_search · semantic_search · hybrid_search · rerank_results · search_symbols',
        'mcp.cat.graph.title': '图谱',
        'mcp.cat.graph.desc': 'get_symbol · find_callers · find_callees · path · find_call_chain · get_node_by_file',
        'mcp.cat.analysis.title': '分析',
        'mcp.cat.analysis.desc': 'get_complexity · find_hotspots · find_dead_code · get_cochanges · get_pagerank · list_communities',
        'mcp.cat.arch.title': '架构',
        'mcp.cat.arch.desc': 'arch_check · get_modules · find_impact · list_processes · get_process',
        'mcp.cat.exec.title': '执行',
        'mcp.cat.exec.desc': 'read_file · write_file · run_command · get_source_code · list_files',
        'mcp.cat.cce.title': '感知上下文',
        'mcp.cat.cce.desc': 'get_context · list_context_templates（双模态向量 + 5 套场景模板）',
        'mcp.clients.title': '已验证对接的主流 MCP 客户端：',
        'mcp.protocol.note': 'JSON-RPC 2.0 over HTTP · 符合 Model Context Protocol 标准规范',

        // Comparison (new table)
        'compare.title': 'AI-First 原生工作台 vs IDE 套壳产品',
        'compare.subtitle': '不是在IDE上套AI壳，而是从内核原生打造',
        'compare.col.dimension': '对比维度',
        'compare.col.shell': '智能体IDE套壳',
        'compare.row.kernel': '内核架构',
        'compare.row.kernel.shell': '基于VS Code等二次包装，AI属于附加功能',
        'compare.row.kernel.axons': '自研智能引擎独立内核，AI原生内嵌',
        'compare.row.logic': '产品逻辑',
        'compare.row.logic.shell': '传统IDE为主体，简单叠加AI对话/补全',
        'compare.row.logic.axons': 'AI能力为核心，工具围绕AI引擎搭建',
        'compare.row.perf': '性能体验',
        'compare.row.perf.shell': '启动慢、内存高、卡顿频发',
        'compare.row.perf.axons': '秒级启动、超低内存、无卡顿运行',
        'compare.row.tech': '技术自主性',
        'compare.row.tech.shell': '完全依托母版IDE，无法深度定制',
        'compare.row.tech.axons': '核心引擎全部自研，技术闭环可独立迭代',
        'compare.row.scene': '场景专攻',
        'compare.row.scene.shell': '仅支持基础补全与简单问答',
        'compare.row.scene.axons': '聚焦架构治理、技术债清理、变更风险评估',
        'compare.row.license': '开源权限',
        'compare.row.license.shell': '大多闭源商用，付费解锁，禁止二次开发',
        'compare.row.license.axons': 'MIT开源，永久免费商用，支持私有化部署',
        'compare.row.extend': '扩展逻辑',
        'compare.row.extend.shell': '全功能捆绑预装，强制占用资源',
        'compare.row.extend.axons': '内核极简，按需加载，不启用零占用',
        'compare.summary': 'Axons 是从内核到体验<strong>原生打造</strong>的AI优先代码工作台——智能为本、轻量核心、开源开放、聚焦企业级复杂研发场景；普通智能体IDE只是传统开发工具的AI外衣包装，二者在技术本质与产品价值上有着<strong>根本性差异</strong>。',

        // Target Users
        'users.title': '谁在用 Axons？',
        'users.subtitle': '从学生到企业，全品类研发人群',
        'users.u1.title': '专业全栈开发者',
        'users.u1.desc': '摆脱臃肿IDE，高效完成业务开发与架构设计',
        'users.u2.title': '在校学生',
        'users.u2.desc': '零门槛入门，完全免费无付费压力',
        'users.u3.title': '研发团队 / 企业',
        'users.u3.desc': '技术债清理、架构治理、变更风险管控',
        'users.u4.title': 'DevOps / 云原生工程师',
        'users.u4.desc': 'Docker/K8s/远程开发一体化',
        'users.u5.title': '安全合规团队',
        'users.u5.desc': '内网隔离环境，代码不出机器',

        // Demo
        'demo.title': '产品演示',
        'demo.subtitle': '看看 Axons 如何提升你的开发效率',

        // Pricing (Dual License)
        'pricing.title': '开源 + 商业双授权',
        'pricing.subtitle': '核心引擎开源免费，企业增值功能按需订阅',
        'pricing.free.tier': '社区版',
        'pricing.free.price': '免费',
        'pricing.free.license': 'Apache 2.0 开源',
        'pricing.free.f1': '完整三引擎：GCE / ACE / CCE',
        'pricing.free.f2': '5 位内建 AI 专家 Agent',
        'pricing.free.f3': '30+ MCP 工具全量',
        'pricing.free.f4': '9 种语言全量支持',
        'pricing.free.f5': 'Desktop / Web / CLI / MCP 四形态',
        'pricing.free.f6': '开源可商用，社区支持',
        'pricing.free.f7': '图谱增量更新',
        'pricing.free.cta': 'GitHub 下载',
        'pricing.pro.badge': '团队推荐',
        'pricing.pro.tier': '专业版',
        'pricing.pro.price': '¥99/月/席位',
        'pricing.pro.annual': '年付 8 折',
        'pricing.pro.f1': '包含社区版全部能力',
        'pricing.pro.f2': '团队协作：多人共享图谱与 Agent',
        'pricing.pro.f3': '插件化视图面板集成',
        'pricing.pro.f4': '高级终端',
        'pricing.pro.f5': '高精尖图谱导航',
        'pricing.pro.f6': '知识库增量持续更新',
        'pricing.pro.f7': '工作日志',
        'pricing.pro.cta': '立即订阅',
        'pricing.enterprise.tier': '企业私有化版',
        'pricing.enterprise.price': '定制报价',
        'pricing.enterprise.f1': '包含专业版全部能力',
        'pricing.enterprise.f2': '内网离线一键安装包',
        'pricing.enterprise.f3': '工具平台集成（SSO，DevOps，知识平台等）',
        'pricing.enterprise.f4': '操作审计与合规报表',
        'pricing.enterprise.f5': '代码智能集群',
        'pricing.enterprise.f6': 'SLA 保障 + 定制开发',
        'pricing.enterprise.cta': '联系销售',
        'pricing.note': '💡 社区版足够 95% 场景使用；专业版与企业版提供 SSO、审计、私有化部署等闭源增值功能。详见 <a href="https://github.com/mengshi02/axons/blob/main/LICENSE" target="_blank">开源协议</a>。',

        // FAQ
        'faq.title': '常见问题',
        'faq.q1': '代码是否会上传外网？',
        'faq.a1': '不会。代码、图谱、向量、对话记忆全部本地落盘。配合 本地推理引擎 等本地 LLM，可实现完全离线运行。',
        'faq.q2': '支持多大规模项目？',
        'faq.a2': '十万～百万行级别工程实测可用。增量图谱机制（Tier 0 Journal → Tier 1 mtime → Tier 2 内容哈希）保证大项目秒级刷新，daemon 后台常驻内存占用 < 200MB。',
        'faq.q3': '必须联网调用 LLM 吗？',
        'faq.a3': '不必须。支持 OpenAI / Anthropic / 本地推理引擎（本地）/ 自定义 OpenAI 兼容端点。推荐离线部署搭配 Qwen2.5-Coder、DeepSeek-Coder 等本地模型，实现真正全链路私有化。',
        'faq.q4': '与 Cursor / Claude Desktop 是替代还是配合？',
        'faq.a4': '协同关系。Axons 通过 MCP 协议对外提供 30+ 代码图谱 / 架构分析 / 语义搜索工具，可作为这些 AI 客户端的"代码知识大脑"——它们负责对话与生成，Axons 负责理解工程。',
        'faq.q5': '是否支持 IDE 集成？',
        'faq.a5': '已通过 MCP 协议接入任何兼容客户端（Claude Desktop / Cursor / Cline / Continue / Zed 等）。原生 VSCode / JetBrains 插件在路线图中。',
        'faq.q6': '支持哪些部署方式？',
        'faq.a6': '二进制（macOS / Windows / Linux 三平台双架构）、Docker、Kubernetes、Systemd 服务、企业内网离线安装包。详见部署文档。',
        'faq.q7': '开源协议与商业授权？',
        'faq.a7': '社区版采用 Apache 2.0，开源可商用。专业版与企业版的闭源增值功能（SSO、审计、团队协作、私有化运维等）需订阅或采购授权，互不干扰。',
        'faq.q8': '如何添加新语言或自定义 Agent？',
        'faq.a8': '新语言通过实现 Tree-sitter Extractor 接口扩展（参考 internal/extractors/）；自定义 Agent 通过系统提示词 + 工具白名单在 UI 即可创建并持久化，无需重新编译。',

        // Download
        'download.title': '立即下载',
        'download.subtitle': '选择适合您平台的版本', 'download.version': '版本 1.0.0',
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
        'requirements.mac': 'macOS 13.0 (Ventura) 或更高版本',
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
        'footer.tagline': '极致轻量的 AI-First 代码工作台',
        'footer.mission': 'Axons — 轻量为基，扩展为魂',
        'footer.visitors': '访客数',
        'footer.visitors.pv': '总访问',
        'footer.visitors.uv': '独立访客',
        'footer.visitors.device': '当前设备',
        'footer.product': '产品',
        'footer.features': '核心能力',
        'footer.agents': 'AI 专家',
        'footer.mcp': '能力输出',
        'footer.download': '下载',
        'footer.changelog': '更新日志',
        'footer.resources': '资源',
        'footer.architecture': '架构文档',
        'footer.docs': '文档',
        'footer.api': 'API 参考',
        'footer.deployment': '部署指南',
        'footer.community': '社区',
        'footer.issues': '问题反馈',
        'footer.discussions': '讨论区',
        'footer.contributing': '贡献指南',
        'footer.security': '安全策略',
        'footer.demo': '演示',
        'footer.opensource': '开源',
        'footer.indie': 'Built with ❤ by an indie developer, sustained by your Stars.',
        'os.title': '🔓 开源 · 免费 · 永远免费',
        'os.subtitle': 'MIT 协议，所有功能开源可商用',
        'os.stat.repo': 'GitHub 仓库',
        'os.stat.stars': 'Stars',
        'os.stat.forks': 'Forks',
        'os.stat.issues': '待解 Issues',
        'os.star': 'Star on GitHub',
        'os.fork': 'Fork',
        'os.clone': 'Clone',
        'os.license': '采用 <a href="https://github.com/mengshi02/axons/blob/main/LICENSE" target="_blank">MIT</a> 协议 · 可商用 · 可修改 · 可分发',
        'os.enterprise.divider': '商业咨询',
        'os.enterprise.desc': '需要私有化部署、定制开发、培训或 SLA 保障？欢迎邮件咨询，一事一议，按需报价。',
        'bn.title': '开发者手记',
        'bn.p1': '嗨，我是 Axons 的作者。',
        'bn.p2': '这是一个独立开发者维护的开源项目，没有融资、没有市场预算，靠用户的 Star 和反馈活着。如果它帮到了你，请点个 Star，或者写一封邮件告诉我。你的每一条反馈我都会亲自看。',
        'bn.sig': '— Mengshi · 2026',
        'bn.email': '发邮件给我',
        'bn.star': 'Star on GitHub',
        'bn.follow': '关注开发者',
        'faq.q9': 'axons 是独立开发者维护的吗？稳定性怎么样？',
        'faq.a9': '是的，axons 目前由一名独立开发者维护。采用 Apache 2.0 开源协议，所有代码公开在 GitHub。核心引擎经过十万到百万行真实项目验证，每次提交都跑完整 CI 测试集；所有 AI 编辑操作均有行级原子回滚记录。遇到问题可在 GitHub Issues 提交，作者会亲自回复。'
    }
};

// Current language
let currentLang = 'zh';

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
    // Sync html lang attribute so CSS [lang] selectors work
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML when the element opts in via data-i18n-html, otherwise textContent for safety
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
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

// ==================== GitHub Stats (Added by redesign) ====================
(function () {
    'use strict';
    const CACHE_KEY = 'axons_gh_stats_v1';
    const TTL_MS = 5 * 60 * 1000; // 5 minutes
    const REPO_API = 'https://api.github.com/repos/axons-ai/axons';

    function formatNumber(n) {
        if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
        return String(n);
    }

    function renderStats(data) {
        const starNav = document.getElementById('nav-github-stars');
        const starOs = document.getElementById('os-star-count');
        const forkOs = document.getElementById('os-fork-count');
        const issueOs = document.getElementById('os-issue-count');
        if (starNav) starNav.textContent = '★ ' + formatNumber(data.stargazers_count || 0);
        if (starOs) starOs.textContent = formatNumber(data.stargazers_count || 0);
        if (forkOs) forkOs.textContent = formatNumber(data.forks_count || 0);
        if (issueOs) issueOs.textContent = formatNumber(data.open_issues_count || 0);
    }

    async function fetchStats() {
        try {
            const cachedRaw = localStorage.getItem(CACHE_KEY);
            if (cachedRaw) {
                const cached = JSON.parse(cachedRaw);
                if (cached && Date.now() - cached.t < TTL_MS) {
                    renderStats(cached.data);
                    return;
                }
            }
            const res = await fetch(REPO_API, { headers: { 'Accept': 'application/vnd.github.v3+json' } });
            if (!res.ok) throw new Error('GitHub API ' + res.status);
            const data = await res.json();
            localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data: data }));
            renderStats(data);
        } catch (e) {
            // Fallback: show a friendly placeholder
            const starNav = document.getElementById('nav-github-stars');
            if (starNav) starNav.textContent = '★ GitHub';
            console.warn('GitHub stats fetch failed:', e && e.message);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fetchStats);
    } else {
        fetchStats();
    }
})();
