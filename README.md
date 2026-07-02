# AI 五层蛋糕产业知识体系 / AI Five-Layer Cake Learning Map

## 中文版

### 项目定位

这是一个面向个人学习、朋友科普和股票研究的 AI 产业链知识网站。

它把 AI 产业拆成两条主轴：

- 纵向五层：能源层、芯片层、基础设施层、模型层、应用层。
- 横向八链：训练、推理、企业落地、数据中心、半导体供应链、具身智能、Agent 工作流、安全与评测。

核心目标不是做纯技术站，也不是单纯的投资看板，而是做一套“AI 产业链学习笔记 + 科普展示页 + 股票研究资料库”。内容优先回答：这是什么、为什么重要、在产业链哪里、相关公司是谁、炒股时看什么、主要风险是什么、有哪些来源支撑。

三层用途：

- 自己学习：把 AI 产业链从混乱的信息流里拆清楚，理解能源、芯片、基础设施、模型、应用分别是什么，彼此怎么传导，哪些技术词、公司和指标值得理解。
- 分享科普：让朋友打开网站后，不需要懂太多技术，也能看懂 AI 不只是大模型，还包括电力、GPU、HBM、光模块、数据中心、云、Agent、机器人、安全评测等一整套产业链。
- 辅助股票研究：把产业链上的公司放进同一个框架里比较，看它处在哪一层、受益于什么趋势、护城河是什么、风险在哪里、看哪些 KPI、跟哪些同业比较、有哪些来源支撑。

### 当前版本

当前版本定位为“学习 / 科普 / 股票研究版”，已从早期静态知识库升级为可检索、可跳转、可追踪来源的产业链工作台。

阶段状态：

- P0：五层蛋糕与八条产业链主框架完成。
- P1：公司、KPI、来源和搜索等基础数据层完成。
- P2：主界面收紧、公司池补强、同业表、敏感性变量、矩阵交点和来源绑定完成。
- P3：体验一致性、文档收口、公司研究页两轮体验优化、首页/搜索/来源收口已完成，重点赛道深挖已完成 HBM、光互联和 AI 电力三篇专题。

### 核心框架

纵向五层：

- 能源层：电力、电网、储能、天然气、核能、可再生能源、土地、水资源。
- 芯片层：GPU、CPU、ASIC、HBM、网络芯片、光模块、服务器、半导体设备。
- 基础设施层：数据中心、云平台、AI 工厂、网络、光互联、PCB/背板、存储、液冷、调度、运维。
- 模型层：基础模型、多模态模型、小模型、行业模型、推理模型、具身智能模型。
- 应用层：AI Agent、办公、编程、医疗、金融、工业、机器人、自动驾驶。

横向八链：

- 大模型训练链
- AI 推理服务链
- 企业 AI 落地链
- AI 数据中心建设链
- AI 芯片供应链
- 具身智能与机器人链
- AI Agent 智能体协同链
- AI 安全与评测链

### 当前功能

- 双维矩阵地图：5 层 x 8 链，共 40 个横纵交点。
- 纵向层级看板：每层展示行业现状、核心瓶颈、代表公司和关键链条入口。
- 横向产业链看板：每条链展示拓扑流向、接口摩擦、CAPEX/价值捕获和代表公司。
- 公司研究页：支持公司搜索、公司卡、深度研究内容和同业对照，用于辅助股票研究和公司学习。
- KPI 表：覆盖 PUE/WUE、Rack Density、HBM Bandwidth、CoWoS Capacity、MTBF、TTFT、P99 latency、MFU、Agent Success Rate、Hallucination Rate 等。
- 估值 / CAPEX 敏感性面板：覆盖 HBM/CoWoS、电力/液冷、光互联、推理成本、企业 Agent ROI、机器人 BOM。
- 术语弹窗：核心名词在正文内点击解释，不再保留独立词典页。
- 来源页：集中管理官方、监管、公司和行业来源。
- 全局搜索：支持公司、矩阵交点、KPI、来源和产业链内容检索。

### 当前数据规模

截至 2026-06-18，本地校验口径如下：

- 公司池：224 家
- Source Registry：182 条
- 公司深度研究内容：203 组
- 双维矩阵交点：40 个
- 同业对照表：7 张，共 213 行
- 同业对照表涉及唯一公司：166 家，深度研究内容覆盖率 100%
- 估值 / CAPEX 敏感性主题：6 组，18 个关键变量
- 光互联与高速 PCB / AI 网络硬件组合：27 家
- A/H 标的：57 家，均已使用中文名展示
- 缺失 Source ID：0
- HTML 页面：18 个
- 全站 HTML 本地引用缺失：0

### 已收紧的模块

为降低首页复杂度，当前版本已做体验收紧：

- 独立词典页已下线，保留正文术语弹窗。
- 前沿雷达已转为归档数据，不再作为首页主入口或搜索结果展示。
- 技术路线图已转为归档数据，不再作为首页主入口展示。
- 首页主导航收敛为：总览、五层、产业链、公司研究、搜索、来源。
- 深入内容通过矩阵、层间联系、来源页和独立深度页承接。

### 光互联与 PCB 补强

基础设施层已补入光模块、光通信、光芯片、硅光、CPO、LPO、AEC、SerDes、PCB、CCL、背板等研究内容。

代表标的包括：

- 中国/AH：中际旭创、新易盛、光迅科技、生益科技、沪电股份、深南电路、东山精密、长电科技、大族激光、三安光电、剑桥科技、华工科技、长飞光电、亨通光电、天孚通信、博创科技、澜起科技、源杰科技。
- 美国/全球：Coherent、Lumentum、AAOI、Marvell、Corning、AXT、Credo、Fabrinet、Amphenol、Unimicron、Shinko Electric。

### 目录结构

```text
outputs/ai-five-layer-cake-site/
  index.html                    # 网站入口
  styles.css                    # 全站样式
  script.js                     # 交互逻辑、渲染、搜索、弹窗
  investment-data.js            # 公司、KPI、组合等基础投资数据
  company-expansion-data.js     # 扩展公司池、别名、主题、来源映射
  company-deepdives.js          # 公司深度研究数据
  peer-comparison-data.js       # 同业对照表
  valuation-sensitivity-data.js # 估值 / CAPEX 敏感性数据
  matrix-deepdives.js           # 40 个矩阵交点深度卡
  glossary.js                   # 术语弹窗数据
  sources-data.js               # 来源库
  source-badges.js              # 深度页来源徽章
  page-sources.js               # 来源页交互
  page-glossary.js              # 深度页术语弹窗初始化
  pages/                        # 五层与八链独立深度页面
  WORK_RECORD.md                # 长期工作记录
```

归档但当前 UI 不加载：

```text
outputs/ai-five-layer-cake-site/frontier-radar-data.js
outputs/ai-five-layer-cake-site/roadmap-data.js
```

### 本地预览

这是静态 HTML/CSS/JS 项目，可以直接打开：

```text
outputs/ai-five-layer-cake-site/index.html
```

也可以用任意静态服务器预览：

```bash
cd outputs/ai-five-layer-cake-site
python3 -m http.server 8080
```

然后访问：

```text
http://127.0.0.1:8080
```

### Git 留档

当前建议留档分支：

```text
codex/ai-five-layer-cake-archive
```

只提交网站和工作记录相关文件时，可使用：

```bash
git add README.md \
  OpenClaw_workspace/AI/Research/ai_five_layer_cake_site_work_record.md \
  outputs/ai-five-layer-cake-site \
  scripts/push_ai_five_layer_site.sh

git commit -m "Update AI five-layer learning map"
git push origin codex/ai-five-layer-cake-archive
```

### 后续计划

P3 后续优先级：

- 阶段 2 公司研究页第二轮体验优化：已完成排序、研究状态筛选、重点关注分组和公司卡研究状态标签。
- P3.4 重点赛道深挖：已完成 `HBM / AI 存储瓶颈`、`光互联 / OCS / AI 网络硬件` 与 `AI 电力 / 数据中心能源` 三篇专题，专题入口统一放在产业链页底部。
- P3.5 来源质量分级：已新增统一来源质量模块，来源页、来源徽章、公司卡和专题公司卡统一显示质量层级。
- P3.6 / P3.7：当前不推进，暂不做公司更新时间、催化剂日期、研究优先级或新增导出型简报功能。

中期方向：

- 将静态内容逐步迁移到 Astro/MDX 或 Next.js，实现内容与代码分离。
- 后续优先补来源证据质量与重点赛道内容，不先做投资组合或公司研究管理系统。
- 增加可导出的学习笔记 / 股票研究简报视图。

### 免责声明

本项目仅用于个人学习、产业科普、知识管理和股票研究框架搭建，不构成任何投资建议、证券推荐或交易指令。所有公司、技术和产业判断都应结合最新公告、财报、监管文件和权威来源继续核验。

---

## English Version

### Project Overview

This is an AI industry learning map for personal study, friend-facing explainers, and stock research.

It maps the AI economy through two axes:

- Five vertical layers: power, silicon, infrastructure, model, and application.
- Eight horizontal chains: training, inference, enterprise deployment, data center construction, semiconductor supply chain, embodied AI, agentic workflow, and AI safety/evaluation.

The goal is not to build a purely technical site or a pure investment dashboard. It is designed as an AI supply-chain study notebook, explainer site, and stock-research knowledge base. Content should answer: what it is, why it matters, where it sits in the supply chain, which companies are related, what to watch for stock research, what risks matter, and which sources support the claim.

### Current Version

The current version is a learning / explainer / stock-research checkpoint, upgraded from an early static knowledge base into a searchable, navigable, source-linked industry workspace.

Checkpoint status:

- P0: five-layer cake and eight-chain framework completed.
- P1: core data layer for companies, KPIs, sources, and search completed.
- P2: UI simplification, company pool expansion, peer tables, sensitivity variables, matrix cards, and source binding completed.
- P3: experience consistency, documentation cleanup, two company-research UX passes, phase-1 homepage cleanup, and phase-2 company-research cleanup are complete; focused vertical deep dives and source quality grading come next.

### Core Framework

Vertical five layers:

- Power: electricity, grid, storage, natural gas, nuclear, renewables, land, and water.
- Silicon: GPU, CPU, ASIC, HBM, networking chips, optical modules, servers, and semiconductor equipment.
- Infrastructure: data centers, cloud platforms, AI factories, networking, optical interconnect, PCB/backplanes, storage, liquid cooling, scheduling, and operations.
- Model: foundation models, multimodal models, small models, vertical models, reasoning models, and embodied intelligence models.
- Application: AI agents, office productivity, coding, healthcare, finance, industrial AI, robotics, and autonomous driving.

Horizontal value chains:

- Large-scale model training chain
- AI inference service chain
- Enterprise AI deployment chain
- AI data center construction chain
- AI semiconductor supply chain
- Embodied AI and robotics chain
- Agentic workflow chain
- AI safety and evaluation chain

### Current Features

- Double-dimensional matrix: 5 layers x 8 chains, with 40 intersection cards.
- Vertical layer dashboard: industry status, bottlenecks, representative companies, and chain entry points.
- Horizontal chain dashboard: topology, interface friction, CAPEX/value capture, and representative companies.
- Company research page: company search, cards, deep dives, and peer comparisons for stock research and company learning.
- KPI tables: PUE/WUE, rack density, HBM bandwidth, CoWoS capacity, MTBF, TTFT, P99 latency, MFU, agent success rate, hallucination rate, and more.
- Valuation / CAPEX sensitivity panel covering HBM/CoWoS, power/liquid cooling, optical networking, inference cost, enterprise Agent ROI, and robotics BOM.
- Glossary popups for key terms inside the content, without a standalone glossary page.
- Source registry page for official, regulatory, corporate, and industry references.
- Global search across companies, matrix cards, KPIs, sources, and chains.

### Current Data Scale

As of June 18, 2026, local validation reports:

- Company pool: 224 companies
- Source Registry: 182 sources
- Company deep-dive cards: 203
- Matrix intersection cards: 40
- Peer-comparison tables: 7 tables with 213 rows
- Unique companies in peer-comparison tables: 166, with 100% deep-dive coverage
- Valuation / CAPEX sensitivity themes: 6 themes and 18 key variables
- Optical interconnect / high-speed PCB / AI networking hardware basket: 27 companies
- A-share and Hong Kong listed companies: 57, all displayed with Chinese names
- Missing Source IDs: 0
- HTML pages: 17
- HTML pages: 16
- Missing local HTML references: 0

### Simplified Modules

To reduce homepage complexity, the current UI has been tightened:

- The standalone glossary page has been removed; inline glossary popups remain.
- Frontier radar has been archived as data and is no longer shown as a homepage module or search result source.
- Technology roadmap has been archived as data and is no longer shown as a homepage module.
- The top navigation is reduced to: overview, layers, chains, company research, search, and sources.
- Deeper research is handled through the matrix, inter-layer links, source page, and dedicated deep-dive pages.

### Optical Interconnect and PCB Expansion

The infrastructure layer now includes optical modules, optical communication, optical chips, silicon photonics, CPO, LPO, AEC, SerDes, PCB, CCL, and backplanes.

Representative companies include:

- China / A-share / Hong Kong: Zhongji Innolight, Eoptolink, Accelink, Shengyi Technology, WUS Printed Circuit, Shennan Circuits, Dongshan Precision, JCET Group, Han's Laser, Sanan Optoelectronics, Cambridge Industries Group, HGTECH, YOFC, Hengtong Optic-Electric, TFC Communication, Broadex Technologies, Montage Technology, Yuanjie Semiconductor.
- US / Global: Coherent, Lumentum, AAOI, Marvell, Corning, AXT, Credo, Fabrinet, Amphenol, Unimicron, Shinko Electric.

### Directory Structure

```text
outputs/ai-five-layer-cake-site/
  index.html                    # Site entry
  styles.css                    # Global styles
  script.js                     # Rendering, search, popups, interactions
  investment-data.js            # Core company, KPI, and basket data
  company-expansion-data.js     # Expanded company pool, aliases, themes, source mappings
  company-deepdives.js          # Company deep-dive cards
  peer-comparison-data.js       # Peer-comparison tables
  valuation-sensitivity-data.js # Valuation / CAPEX sensitivity data
  matrix-deepdives.js           # 40 matrix intersection cards
  glossary.js                   # Inline glossary data
  sources-data.js               # Source registry
  source-badges.js              # Source badges for deep pages
  page-sources.js               # Source page interactions
  page-glossary.js              # Inline glossary initialization for deep pages
  pages/                        # Dedicated pages for layers and chains
  WORK_RECORD.md                # Long-term work record
```

Archived but not loaded by the current UI:

```text
outputs/ai-five-layer-cake-site/frontier-radar-data.js
outputs/ai-five-layer-cake-site/roadmap-data.js
```

### Local Preview

This is a static HTML/CSS/JS site. You can open:

```text
outputs/ai-five-layer-cake-site/index.html
```

Or run a local static server:

```bash
cd outputs/ai-five-layer-cake-site
python3 -m http.server 8080
```

Then visit:

```text
http://127.0.0.1:8080
```

### Codex Workflow

Use `README.md` and `outputs/ai-five-layer-cake-site/WORK_RECORD.md` as the two startup documents for future Codex sessions. The old multi-file memory workflow is not active in this repository.

Recommended prompt shape:

```text
Read README.md and outputs/ai-five-layer-cake-site/WORK_RECORD.md first.
Task: [one narrow goal].
Touch only [specific files or area].
Do not change positioning, navigation, data schema, or source data unless needed.
Verify with scripts/check_site.sh and affected-page smoke checks.
Summarize changed files and test results.
```

Common checks:

```bash
scripts/check_site.sh
node --check outputs/ai-five-layer-cake-site/script.js
```

Project hygiene:

- Keep Codex tasks narrow; avoid broad rewrites of `script.js` unless explicitly planned.
- Treat `.codex/environments` as local Codex Desktop configuration, not site content.
- Do not write proxy tokens, subscription URLs, remote-control credentials, or account secrets into project files.
- Use `scripts/push_ai_five_layer_site.sh --check` for safe validation; run `--publish` only when publishing is explicitly requested.

### Git Archive

Recommended archive branch:

```text
codex/ai-five-layer-cake-archive
```

To commit only the website and work-record files:

```bash
git add README.md \
  OpenClaw_workspace/AI/Research/ai_five_layer_cake_site_work_record.md \
  outputs/ai-five-layer-cake-site \
  scripts/push_ai_five_layer_site.sh

git commit -m "Update AI five-layer learning map"
git push origin codex/ai-five-layer-cake-archive
```

### Roadmap

Next P3 priorities:

- Phase 2 company research UX: sorting, research-status filters, focus groups, and company-card research-status tags are complete.
- P3.4 focused deep dives: HBM / AI storage bottleneck and optical interconnect / OCS / AI networking hardware topics are now live; AI power, inference cost, and enterprise Agent topics come next.
- P3.5 source quality grading: classify official filings, annual reports, engineering blogs, regulatory/institutional frameworks, industry media, and items requiring verification.

Medium-term direction:

- Gradually migrate static content to Astro/MDX or Next.js for better separation of content and code.
- Add update dates, catalyst dates, research status, and priority levels to key companies.
- Add exportable study-note / stock-research brief views.

### Disclaimer

This project is for personal learning, industry explainers, knowledge management, and stock-research framework building only. It is not investment advice, a security recommendation, or a trading instruction. All company, technical, and industry claims should be verified against the latest filings, earnings reports, regulatory documents, and authoritative sources.
