# AI 双维矩阵产业链知识体系网站 - 接力记录

## 项目定位

构建一个面向投资研究与创业战略分析的 AI 产业知识库网站，用“五层蛋糕纵向结构”与“横向产业链”构成双维矩阵。

当前网站初稿位置：

```text
/Users/michaeldong/Code/New project/outputs/ai-five-layer-cake-site/index.html
```

详细工作记录：

```text
/Users/michaeldong/Code/New project/outputs/ai-five-layer-cake-site/WORK_RECORD.md
```

## 当前状态

已完成 v0.1 静态网站骨架：

- 首页总览
- 五层蛋糕框架
- 方案可行性评估
- 双维矩阵，5 层 x 8 链，共 40 个研究交点
- 五层主框架卡片
- 八条横向产业链
- 层间联系
- 前沿话题雷达
- 网站演进路线

2026-05-21 已开始填充【能源层 Power】：

- 在网站新增能源层深度看板。
- 已覆盖：核心判断、已核验事实、基础知识、2026 前沿路线、黑话词典、瓶颈、玩家图谱、商业护城河、来源链接。
- 已核验来源包括 IEA、Google-Kairos、Amazon/X-energy、Constellation/Microsoft。
- 关键结论：AI 能源层的核心不是“总发电量够不够”，而是能否在数据中心所在节点交付连续、低碳、低延迟扩容的电力容量。

2026-05-21 已把“小 button / 胶囊标签”接入知识卡：

- 五层卡片标签、横向链条节点、双维矩阵交点、前沿雷达卡片均可点击。
- 点击后打开统一详情弹窗。
- 能源层重点术语已有较完整内容：PPA、Interconnection Queue、SMR、PUE/WUE、Behind-the-Meter、长期 PPA、电力-冷却一体化等。
- 未深挖层级暂时使用通用知识卡兜底，不再是无响应空壳。

2026-05-21 已调整网站内容边界：

- 用户要求网站前台不要出现建站计划和工作记录，只保留 AI 五层蛋糕相关内容。
- 已从首页删除可行性评估、网站演进路线、建议填充顺序等内部内容。
- 每层蛋糕卡片新增“当前行业现状”。
- 新增五个独立层级页：`power.html`、`silicon.html`、`infra.html`、`model.html`、`app.html`。
- 能源层详细内容已迁移到 `pages/power.html`，首页重内容标签跳转到该页对应锚点。

2026-05-21 已填充【芯片层 Silicon】：

- `pages/silicon.html` 已升级为完整深度页。
- 已覆盖当前行业现状、已核验事实、基础知识、2026 前沿路线、黑话词典、瓶颈、玩家图谱和来源。
- 首页重标签跳转到芯片页锚点：Rubin/Vera Rubin、HBM4、CoWoS-L/R、CPO、推理 ASIC 与硅光互联。
- 关键结论：芯片层竞争单位已从单卡性能升级为 rack-scale AI supercomputer，真正瓶颈集中在 HBM4、先进封装、互联、基板、电源、液冷和软件生态。

2026-05-21 已接入全站术语小弹窗系统：

- 用户要求用“重要名词小弹窗”替代“核心名词黑话词典”。
- 新增 `glossary.js` 和 `page-glossary.js`。
- 首页、能源层页、芯片层页已接入术语弹窗。
- 已删除能源层页和芯片层页独立 Glossary 区块。
- 当前术语库约 40+ 个名词，能源页约 17 个正文术语按钮，芯片页约 53 个正文术语按钮。

2026-05-21 已填充【基础设施层 Infra】：

- `pages/infra.html` 已升级为完整深度页。
- 已覆盖当前行业现状、已核验事实、基础知识、2026 前沿路线、瓶颈、玩家图谱和来源。
- 已接入正文术语小弹窗，无独立黑话词典模块。
- 新增术语：GB200 NVL72、Dynamo、Prefill/Decode、KV Cache、MFU/MBU、MTBF、TTFT、P99 延迟、Spectrum-XGS、InfiniBand、Ultra Ethernet、AllReduce 等。
- 首页基础设施层重标签已跳转到 Infra 页锚点。
- 关键结论：基础设施层已经从传统云计算升级为 AI Factory，真正竞争点是可持续训练吞吐、推理吞吐、故障恢复、液冷、电力、网络和可售 token 产能。

2026-05-21 已填充【模型层 Model】：

- `pages/model.html` 已升级为完整深度页。
- 已覆盖当前行业现状、已核验事实、基础知识、2026 前沿路线、瓶颈、玩家图谱和来源。
- 已接入正文术语小弹窗，无独立黑话词典模块。
- 新增术语：Reasoning Token、Test-Time Compute、Extended Thinking、Transformer、Pretraining、SFT、RLHF/RLAIF、Synthetic Data、World Model、VLA、Hallucination、Model Router、Tool Use 等。
- 首页模型层重标签已跳转到 Model 页锚点。
- 关键结论：模型层竞争从 pretrain scaling 转向 inference-time compute、tool use、long context、multimodal grounding 和单位 token 经济性。

2026-05-21 已填充【应用层 App】：

- `pages/app.html` 已升级为完整深度页。
- 已覆盖当前行业现状、已核验事实、基础知识、2026 前沿应用路线、瓶颈、玩家图谱和来源。
- 已接入正文术语小弹窗，无独立黑话词典模块。
- 新增术语：Agentic Workflow、Codex、Copilot Coding Agent、Agentforce、Agentspace、HITL、ROI、TCO、Action Permissioning、Data Flywheel、ERP/CRM。
- 首页应用层重标签已跳转到 App 页锚点。
- 关键结论：应用层护城河不是“接入大模型”，而是工作流嵌入深度、私有数据反馈、权限审计、结果责任和分发入口。

2026-05-21 已复核并补强知识卡弹窗内容：

- 用户指出弹窗内容不能是兜底模板，必须言之有物。
- 已补齐模型层、基础设施层、芯片层共 33 个高频按钮的正式知识卡。
- 截图中的“推理模型”已改为正式知识卡，包含定义、产业影响、代表路线和投资/创业观察。
- 通用兜底模板已改写为更具体的“产业位置 / 为什么重要 / 研究时看什么 / 后续补强”结构，不再出现空泛模板句。

2026-05-21 已开始填充【横向产业链：大模型训练链 Training Chain】：

- 新增 `pages/training-chain.html` 独立页面。
- 已覆盖当前行业现状、已核验事实、经典拓扑流向、接口摩擦、CAPEX 与价值捕获、玩家图谱、来源链接。
- 首页横向产业链库中【大模型训练链】已新增“进入深度页”入口。
- 首页训练链节点已跳转到训练链页锚点：数据、HBM/GPU、AI 服务器、高速网络、数据中心、分布式训练、基础模型。
- 首页双维矩阵 5 个“训练链”交点已跳转到训练链页对应位置。
- 新增训练链术语小弹窗：Data Curation、Data Mixture、Data Parallelism、Tensor Parallelism、Pipeline Parallelism、ZeRO、Gradient Checkpointing、Checkpoint I/O、NCCL、AllGather、ReduceScatter、RoCE、Dataset Deduplication、Tokenization。
- 主要来源：Meta GenAI Infrastructure、Meta Prometheus、NVIDIA GB200 NVL72、OpenAI Stargate、xAI Colossus、Meta AI hardware reliability。
- 关键结论：训练链的核心不再是“买到多少 GPU”，而是有效训练吞吐；电力、HBM、CoWoS、网络、存储、调度、MTBF、数据配比和评测闭环共同决定前沿模型能力。

2026-05-28 已继续填充【横向产业链：AI 推理服务链 Inference Chain】：

- 新增 `pages/inference-chain.html` 独立页面。
- 已覆盖当前行业现状、已核验事实、经典拓扑流向、接口摩擦、CAPEX 与价值捕获、玩家图谱、来源链接。
- 首页横向产业链库中【AI 推理服务链】已新增“进入深度页”入口。
- 首页推理链节点已跳转到推理链页锚点：用户请求、应用、模型路由、推理引擎、GPU/ASIC、推理云、响应。
- 首页双维矩阵 5 个“推理链”交点已跳转到推理链页对应位置。
- 新增推理链术语小弹窗：Disaggregated Inference、Prompt Caching、Prefix Cache、PagedAttention、Continuous Batching、Prefill、Decode、Reasoning Effort、ITL、TPS/QPS、Batch Size、Autoscaling、Speculative Decoding。
- 主要来源：NVIDIA Dynamo、NVIDIA Dynamo Docs、NVIDIA Newsroom、Google Ironwood TPU、Google Cloud Ironwood、OpenAI Prompt Caching、Anthropic thinking/context docs。
- 关键结论：推理链是 AI 商业化毛利和用户体验的主战场；核心瓶颈是 TTFT、P99、reasoning token 爆炸、KV Cache 显存占用、prefill/decode 资源错配、batching 与 SLA 冲突。

2026-05-28 已继续填充【横向产业链：企业 AI 落地链 Enterprise AI Chain】：

- 新增 `pages/enterprise-chain.html` 独立页面。
- 已覆盖当前行业现状、已核验事实、经典拓扑流向、接口摩擦、CAPEX 与价值捕获、玩家图谱、来源链接。
- 首页横向产业链库中【企业 AI 落地链】已新增“进入深度页”入口。
- 首页企业落地链节点已跳转到企业落地链页锚点：企业数据、数据治理、RAG、权限系统、行业模型、Agent、业务系统。
- 首页双维矩阵 5 个“企业落地链”交点已跳转到企业落地链页对应位置。
- 新增企业落地链术语小弹窗：Data Governance、Data Lineage、Data Residency、ETL/ELT、Embedding、RAG、GraphRAG、RBAC/ABAC、PII、Multi-Tenant Isolation、System of Record、Agent Orchestrator、LLMOps。
- 主要来源：Salesforce AgentExchange、Salesforce Agentforce 3、ServiceNow AI Platform、ServiceNow Yokohama release、Microsoft GraphRAG、Databricks Agent Bricks。
- 关键结论：企业 AI 的瓶颈不是“能不能调模型”，而是能不能穿过数据治理、权限继承、系统集成、审计合规、责任边界和 ROI 审核。

2026-05-28 已继续填充【横向产业链：AI 数据中心建设链 Data Center Chain】：

- 新增 `pages/datacenter-chain.html` 独立页面。
- 已覆盖当前行业现状、已核验事实、经典拓扑流向、接口摩擦、CAPEX 与价值捕获、玩家图谱、来源链接。
- 首页横向产业链库中【AI 数据中心链】已新增“进入深度页”入口。
- 首页数据中心链节点已跳转到数据中心链页锚点：土地、电力、建筑、机柜、液冷、服务器、网络、运维。
- 首页双维矩阵 5 个“数据中心链”交点已跳转到数据中心链页对应位置。
- 新增数据中心链术语小弹窗：Substation、Power Transformer、Switchgear、Busway、UPS、EPC、Rack Density、Liquid Cooling、Direct-to-Chip Cooling、Cold Plate、MTTR、SLA。
- 主要来源：IEA 数据中心用电、Uptime AI cooling、Vertiv/NVIDIA GB200 NVL72 reference architecture、Schneider Electric GB300 NVL72 reference design、Eaton grid-to-chip、NVIDIA OCP/GB200。
- 关键结论：AI 数据中心建设链的核心不是“机房面积”，而是可交付 MW、并网周期、高密液冷、机柜级系统交付和长期运维可靠性。

2026-05-28 已继续填充【横向产业链：AI 芯片供应链 Semiconductor Chain】：

- 新增 `pages/semiconductor-chain.html` 独立页面。
- 已覆盖当前行业现状、已核验事实、经典拓扑流向、接口摩擦、CAPEX 与价值捕获、玩家图谱、来源链接。
- 首页横向产业链库中【AI 芯片供应链】已新增“进入深度页”入口。
- 首页芯片供应链节点已跳转到芯片供应链页锚点：EDA/IP、芯片设计、晶圆制造、先进封装、HBM、板卡、服务器。
- 首页双维矩阵 5 个“芯片供应链”交点已跳转到芯片供应链页对应位置。
- 新增芯片供应链术语小弹窗：EDA、IP、PDK、Tape-out、DFT、NoC、Interposer、RDL、Known Good Die、OSAT。
- 主要来源：TSMC 2025 Annual Report、Synopsys/TSMC EDA flows、Cadence/TSMC AI flows、Micron/Samsung/SK hynix HBM4、Applied Materials、ASML。
- 关键结论：AI 芯片供应链的核心瓶颈不是单点晶体管，而是 EDA/IP、先进制程、先进封装、HBM、基板、测试和系统集成的复合产能。

2026-05-29 已继续填充【横向产业链：具身智能与机器人链 Embodied AI Chain】：

- 新增 `pages/embodied-chain.html` 独立页面。
- 已覆盖当前行业现状、已核验事实、经典拓扑流向、接口摩擦、CAPEX 与价值捕获、玩家图谱、来源链接。
- 首页横向产业链库中【具身智能链】已新增“进入深度页”入口。
- 首页具身智能链节点已跳转到具身智能页锚点：传感器、执行器、机器人本体、具身模型、仿真训练、场景部署。
- 首页双维矩阵 5 个“机器人链”交点已跳转到具身智能链页对应位置。
- 新增具身智能链术语小弹窗：Sim-to-Real、Actuator、Harmonic Drive、Motion Planning、Torque Control、Isaac Sim、Domain Randomization、Teleoperation、ROS、SLAM。
- 主要来源：NVIDIA GR00T N1、Google Gemini Robotics、Figure Helix、Physical Intelligence π0/π0.7、Agility Digit、Boston Dynamics Atlas、Mercedes-Benz/Apptronik Apollo。
- 关键结论：具身智能的核心瓶颈不是“模型是否会聊天”，而是多模态策略能否跨过 Sim-to-Real、端侧低延迟、硬件功耗、本体成本、可靠维护和真实场景数据闭环。

2026-05-29 已继续填充【横向产业链：AI Agent 智能体协同链 Agentic Workflow Chain】：

- 新增 `pages/agent-chain.html` 独立页面。
- 已覆盖当前行业现状、已核验事实、经典拓扑流向、接口摩擦、CAPEX 与价值捕获、玩家图谱、来源链接。
- 首页横向产业链库中【Agent 智能体协同链】已新增“进入深度页”入口。
- 首页 Agent 链节点已跳转到 Agent 链页锚点：基础模型、Planning、Memory、Tools/MCP、Sandbox、HITL、Audit。
- 首页双维矩阵 5 个“Agent链”交点已跳转到 Agent 链页对应位置。
- 新增 Agent 链术语小弹窗：Agent Runtime、Planning、Memory、Sandbox、Tracing。
- 主要来源：OpenAI Responses/Agents SDK、Anthropic MCP、MCP tools docs、LangGraph durable execution。
- 关键结论：Agent 链的价值来自“能行动”，核心风险也来自“能行动”；生产级 Agent 必须把 Planning、Memory、Tools/MCP、Sandbox、HITL 和 Audit 组织成可控执行系统。

2026-05-29 已完成【横向产业链：AI 安全与评测链 Safety & Evaluation Chain】：

- 新增 `pages/safety-chain.html` 独立页面。
- 已覆盖当前行业现状、已核验事实、经典拓扑流向、接口摩擦、CAPEX 与价值捕获、玩家图谱、来源链接。
- 首页横向产业链库中【AI 安全与评测链】已新增“进入深度页”入口。
- 首页安全评测链节点已跳转到安全评测链页锚点：数据合规、Guardrails、RLHF/RLAIF、Red Teaming、Benchmark、Runtime 审查。
- 首页双维矩阵 5 个“安全评测链”交点已跳转到安全评测链页对应位置。
- 新增安全评测链术语小弹窗：Data Provenance、Eval Harness、Guardrails、Jailbreak、Prompt Injection、Red Teaming、Benchmark Contamination、Runtime Monitoring、Watermarking。
- 主要来源：OpenAI Preparedness / Evaluations Hub、Anthropic RSP、NIST AI RMF / GenAI Profile、Google DeepMind Frontier Safety Framework、MLCommons AILuminate、METR、Stanford HELM。
- 关键结论：安全评测链的核心不是“让模型更保守”，而是把数据合规、guardrails、对齐、红队、动态 benchmark、运行时监控和事故响应组成发布门槛。
- 横向 8 条产业链已完成第一轮实心内容填充，均有独立页面、首页入口、矩阵交点跳转和术语弹窗。

## 下一步

建议二选一：

1. 横向 8 条链已经完成第一轮，可开始做第二轮增强：每条链增加公司卡、量化指标、投资标的、时间线和中美供应链对比。
2. 也可以开始做网站体验升级：搜索、全局术语索引、图谱路径高亮、侧栏目录、引用管理。

后续逐层填充时，需要联网核验 2025-2026 最新资料，并把来源、日期、置信度记录到内容中。

## 2026-05-29 更新：Phase 2 投资研究终端 Epic 1-2

用户要求把静态知识库升级为专业投资研究终端，并分 6 个 Epic 顺序执行。本轮按要求只完成 Epic 1 与 Epic 2，后续等待用户说 Continue 后继续 Epic 3。

已完成：

- 新增 `outputs/ai-five-layer-cake-site/investment-data.js`，把投资研究数据从页面逻辑中拆出，便于后续持续追加。
- Epic 1【系统化公司卡片】：
  - 首页新增 `#companies` 公司卡片终端。
  - 已录入 24 家公司/平台，覆盖能源、芯片、基础设施、模型、应用与八条横向链。
  - 每张卡包含：公司名、ticker/私有状态、目标层级与链条、核心护城河、受益逻辑、关键风险、代表产品。
  - 支持按五层蛋糕与横向产业链筛选。
- Epic 2【量化 KPI 表】：
  - 首页新增 `#kpis` KPI 终端。
  - 已录入硬件/基础设施与软件/模型两组 KPI。
  - 指标覆盖 PUE、WUE、Rack Density、HBM Bandwidth、CoWoS Capacity、MTBF/MTTR、TTFT、P99 Latency、MFU、Agent Success Rate、Hallucination Rate。
  - 每项包含方向、2026 观察口径、接口摩擦和投资读法。
- 新增 CSS 组件：
  - 终端筛选条
  - 公司卡片网格
  - 公司字段结构
  - KPI 密集表格
  - 指标/产品小标签
- 验证：
  - `node --check script.js` 通过。
  - `node --check investment-data.js` 通过。
  - 静态检查确认首页存在公司/KPI 挂载点、渲染函数、数据脚本；前端未混入 WORK_RECORD。

下一步：

- Epic 3：标准化五个纵向层级页，在能源、芯片、基础设施、模型、应用页中显式注入 `Interface Friction` 与 `CAPEX/Value Capture` 模块，并对齐横向链页面结构。

## 2026-05-29 更新：Phase 2 投资研究终端 Epic 3

用户说“继续”，本轮完成 Epic 3【标准化 Vertical 5-Layer Pages】。

已完成：

- 五个纵向层级页均新增统一导航锚点：
  - `#friction`：接口摩擦
  - `#capex`：CAPEX / Value Capture
- 已更新页面：
  - `outputs/ai-five-layer-cake-site/pages/power.html`
  - `outputs/ai-five-layer-cake-site/pages/silicon.html`
  - `outputs/ai-five-layer-cake-site/pages/infra.html`
  - `outputs/ai-five-layer-cake-site/pages/model.html`
  - `outputs/ai-five-layer-cake-site/pages/app.html`
- 每个层级页现在结构统一为：
  - 行业现状
  - 经典基础知识
  - 2026 前沿路线
  - 卡脖子瓶颈
  - Interface Friction
  - CAPEX / Value Capture
  - 玩家图谱
  - 来源与持续核验
- 内容重点：
  - 能源层：并网排队、低碳 24/7 基荷、电力-液冷责任边界、可交付 MW、核电/PPA/电气设备价值捕获。
  - 芯片层：模型需求与硬件周期错配、HBM/CoWoS/基板/测试联动瓶颈、CUDA 迁移成本、HBM/封装/互联/EDA/IP 价值捕获。
  - 基础设施层：电力交付与 GPU 到货错配、训练/推理网络差异、GPU 利用率与企业 SLA 冲突、推理 runtime 和运维自动化价值捕获。
  - 模型层：能力提升与推理成本冲突、通用模型与企业私有数据接口、benchmark 与真实任务差异、训练/后训练/推理/评测复合投入。
  - 应用层：模型输出与真实任务结果差距、业务系统与 Agent 行动权限、模型成本与产品定价、分发入口/垂直工作流/数据闭环价值捕获。
- 验证：
  - 五个纵向页面均存在 `id="friction"` 与 `id="capex"`。
  - 五个纵向页面导航均存在 `href="#friction"` 与 `href="#capex"`。
  - 纵向页面引用的 79 个 `data-term` 术语全部在 `glossary.js` 中有定义。
  - `node --check glossary.js` 与 `node --check page-glossary.js` 通过。

下一步：

- Epic 4：构建 40 个矩阵交点 Deep-Dive Cards，把当前 Level 1 交点描述升级为可点击、可行动的交点研究卡。

## 2026-05-29 更新：Phase 2 投资研究终端 Epic 4

用户说“继续”，本轮完成 Epic 4【40 Matrix Deep-Dive Cards】。

已完成：

- 新增 `outputs/ai-five-layer-cake-site/matrix-deepdives.js`，独立承载 5 层 × 8 链的 40 张矩阵交点研究卡。
- 首页 `index.html` 已加载 `matrix-deepdives.js`。
- `script.js` 的 `getKnowledgeCard()` 已调整为优先读取 `window.matrixDeepDiveCards`，因此点击矩阵交点会优先打开 Deep-Dive 弹窗，而不是旧版一句话跳转。
- 每张 Deep-Dive Card 统一包含：
  - 交点判断
  - 技术与产业动态
  - 接口摩擦
  - CAPEX / 价值捕获
  - 跟踪指标
  - 深度页入口
- 40 张卡均覆盖具体交点主题，例如：
  - 能源层 × 数据中心链：并网排队、变电站交付、水资源许可。
  - 芯片层 × 推理链：显存、带宽、ASIC、KV cache 与每瓦 token 产出。
  - 基础设施层 × 训练链：MFU、MTBF、checkpoint 恢复时间。
  - 模型层 × Agent链：planning、memory、tool calling、loop rate 与任务完成率。
  - 应用层 × 企业落地链：ROI、系统集成深度、续费扩张。
- 每张卡均带有对应横向链深度页与纵向层级页入口。

验证：

- `node --check matrix-deepdives.js` 通过。
- `node --check script.js` 通过。
- 静态检查确认：
  - Deep-Dive Card 数量为 40。
  - 5×8 预期交点无缺失。
  - 每张卡都有 summary 与至少 6 个结构化 section。
  - 首页已加载 `matrix-deepdives.js`。
  - `script.js` 已接入优先读取逻辑。
  - 80 个深度页链接均指向现有页面，无缺失文件。

下一步：

- Epic 5：建设 2024-2027E Timeline & Tech Roadmap，覆盖 Blackwell -> Rubin、HBM3E -> HBM4、Copilot -> Agent、Air Cooling -> Liquid Cooling -> Immersion 等演进。

## 2026-05-29 更新：Phase 2 投资研究终端 Epic 5

用户说“继续”，本轮完成 Epic 5【Timeline & Tech Roadmap 2024-2027E】。

已完成：

- 新增 `outputs/ai-five-layer-cake-site/roadmap-data.js`，独立承载 2024-2027E 技术路线图数据。
- 首页新增 `#roadmap` 技术路线图区块。
- 首页导航新增“路线图”入口。
- `script.js` 新增：
  - `renderRoadmapFilters()`
  - `renderRoadmapTerminal()`
  - `bindRoadmapFilters()`
- `styles.css` 新增路线图终端样式：
  - 轨道卡片
  - 横向年份 lane
  - 事件卡片
  - 状态/年份/跟踪指标标签
  - 移动端自适应布局
- 路线图覆盖 6 条主线、24 个事件：
  - 芯片平台：Blackwell -> Blackwell 爬坡 -> Rubin/Vera Rubin -> rack-scale 标准化。
  - HBM / 封装：HBM3E -> CoWoS 扩产 -> HBM4 -> HBM4E/3D 集成。
  - 数据中心 / 冷却：风冷极限 -> 冷板液冷 -> 100K 卡 AI Factory -> 浸没式/热复用。
  - 模型 / 推理：长上下文多模态 -> reasoning 模型 -> 推理解耦 -> 任务级智能。
  - 应用 / Agent：Copilot 扩散 -> Agent 产品化 -> Agent 原生架构 -> 数字员工预算化。
  - 能源 / 电力：抢电 -> PPA/核能合作 -> Grid-to-Chip -> AI 电力金融化。
- 每个事件包含：
  - 年份
  - 阶段
  - 标题
  - 状态（已发生 / 进行中 / 预测）
  - 正文判断
  - 产业影响
  - 跟踪指标
  - 可选官方来源链接

验证：

- `node --check roadmap-data.js` 通过。
- `node --check script.js` 通过。
- 静态检查确认：
  - 路线图轨道数为 6。
  - 路线图事件数为 24。
  - 所有轨道与事件必填字段完整。
  - 首页存在 `#roadmap` 与 `#roadmapTerminal`。
  - 首页已加载 `roadmap-data.js`。
  - `script.js` 已接入路线图渲染与筛选函数。

关键官方来源：

- NVIDIA Rubin / Vera Rubin press release。
- Micron HBM4 for NVIDIA Vera Rubin。
- OpenAI Codex。
- Salesforce Agentforce 3。

下一步：

- Epic 6：建设 Global Search & Glossary Index，包括独立可浏览词典页升级、全局搜索栏和标签过滤。

## 2026-05-29 更新：Phase 2 投资研究终端 Epic 6

用户说“继续”，本轮完成 Epic 6【Global Search & Glossary Index】。

已完成：

- 首页新增 `#search` 全局搜索区块。
- 首页导航新增：
  - 搜索
  - 词典
- 新增独立词典页：
  - `outputs/ai-five-layer-cake-site/pages/glossary.html`
- `page-glossary.js` 从简单初始化升级为完整词典索引渲染器：
  - 自动读取 `glossary.js` 中的 `termDefinitions`。
  - 自动给术语打标签：能源层、芯片层、基础设施层、模型层、应用层、机器人链、安全评测链、通用。
  - 支持搜索。
  - 支持分类筛选。
  - 支持点击术语卡打开详情弹窗。
- `script.js` 新增全局搜索：
  - `buildGlobalSearchIndex()`
  - `renderSearchFilters()`
  - `renderGlobalSearchResults()`
  - `initGlobalSearch()`
- 全局搜索索引覆盖：
  - 5 个纵向层级
  - 8 条横向产业链
  - 40 张矩阵 Deep-Dive Cards
  - 24 张公司/平台卡
  - 11 个 KPI
  - 24 个路线图事件
  - 177 个术语词典条目
- `styles.css` 新增：
  - 搜索输入组件
  - 搜索结果卡片
  - 词典索引卡片
  - 词典统计摘要
  - 移动端自适应布局

验证：

- `node --check script.js` 通过。
- `node --check page-glossary.js` 通过。
- `node --check glossary.js` 通过。
- 静态检查确认：
  - 首页存在 `#search`、`#globalSearchInput`、`#searchResults`。
  - 首页导航已链接 `pages/glossary.html`。
  - `pages/glossary.html` 存在。
  - 词典页存在 `#glossarySearchInput` 与 `#glossaryIndexGrid`。
  - 全局搜索函数与词典函数均已接入。
  - 当前术语数量为 177。
  - 首页与词典页所有相对链接/脚本引用均存在。
  - 前端未混入 WORK_RECORD。

Phase 2 状态：

- Epic 1 系统化公司卡片：完成。
- Epic 2 量化 KPI 表：完成。
- Epic 3 标准化五层页：完成。
- Epic 4 40 个矩阵交点 Deep-Dive Cards：完成。
- Epic 5 2024-2027E 技术路线图：完成。
- Epic 6 全局搜索与词典索引：完成。

## 2026-05-29 更新：Phase 2 后验收与补强

用户继续推进，本轮做 Phase 2 完成后的终端级验收与轻补强。

已完成：

- 清理前端残留“待补充”兜底文案，将矩阵兜底说明替换为正式研究表述。
- 尝试启动本地静态预览服务：
  - `python3 -m http.server 4173 --bind 127.0.0.1`
  - 结果：当前环境仍因 `PermissionError: [Errno 1] Operation not permitted` 阻止绑定端口。
  - 因此本轮无法完成真实浏览器点击/视觉验收，改用严格静态验收。

静态验收结果：

- 脚本语法：
  - `script.js` 通过。
  - `glossary.js` 通过。
  - `page-glossary.js` 通过。
  - `investment-data.js` 通过。
  - `matrix-deepdives.js` 通过。
  - `roadmap-data.js` 通过。
- 页面与链接：
  - HTML 页面总数：15（首页 + 14 个页面）。
  - 5 个纵向层级页存在。
  - 8 个横向产业链页存在。
  - 词典页存在。
  - 所有相对链接和脚本引用无缺失。
- 数据完整性：
  - 公司卡：24，必填字段无缺失。
  - KPI：11。
  - 矩阵 Deep-Dive Cards：40。
  - 路线图轨道：6。
  - 路线图事件：24。
  - 术语词典：177。
- 术语覆盖：
  - 页面中直接引用的 `data-term` 术语：148。
  - 缺失定义：0。
- 内容卫生：
  - 前端未混入 WORK_RECORD 或工作记录文本。
  - 前端已无 `待补充`、`TODO`、`空壳` 等占位表达。

仍未完成 / 受限项：

- 真实浏览器视觉验收与点击验收仍未完成，原因是当前环境不允许启动本地服务，且本轮没有可用的浏览器自动化运行时。
- 后续如要继续，可优先做：
  - 真实浏览器验收。
  - 部署到 Vercel/Netlify。
  - 公司卡扩容到 100+。
  - KPI 绑定来源、日期、数值区间与置信度。

## 2026-05-29 更新：P0/P1 启动 - 浏览器验收与 Source Registry

用户同意优先级方案，本轮开始 P0 + P1。

P0 浏览器验收：

- 读取并尝试使用 in-app browser 技能。
- 尝试通过 `file://` 打开本地首页：
  - 路径：`file:///Users/michaeldong/Code/New%20project/outputs/ai-five-layer-cake-site/index.html`
  - 结果：Browser 安全策略阻止访问本地 file URL，并明确禁止用绕过方式达成同一结果。
- 结论：
  - 当前环境下真实浏览器点击/视觉验收仍受限。
  - 保留前一轮严格静态验收作为当前可执行验收方案。

P1 Source Registry：

- 新增 `outputs/ai-five-layer-cake-site/sources-data.js`，建立统一来源库。
- 新增 `outputs/ai-five-layer-cake-site/pages/sources.html`，建立独立来源库页面。
- 新增 `outputs/ai-five-layer-cake-site/page-sources.js`，支持来源搜索和筛选。
- 首页导航新增“来源”入口。
- 首页全局搜索已纳入来源库对象。
- 来源库当前包含 25 条来源，覆盖：
  - NVIDIA Rubin / GB200 / Dynamo / GR00T
  - Micron HBM4
  - Samsung HBM4
  - TSMC 2025 Annual Report
  - ASML 2025 Annual Report
  - IEA Energy and AI
  - Google-Kairos / Amazon-X-energy / Constellation-Microsoft PPA
  - OpenAI Stargate / o3-o4-mini / Codex / Preparedness
  - Meta 24K GPU clusters
  - xAI Colossus
  - Google Gemini 2.5 / Gemini Robotics / Agentspace
  - Anthropic Claude 3.7
  - GitHub Copilot Coding Agent
  - Salesforce Agentforce 3
  - NIST AI RMF
- 每条来源包含：
  - id
  - title
  - publisher
  - date
  - type
  - url
  - confidence
  - usedFor
  - note

验证：

- `node --check sources-data.js` 通过。
- `node --check page-sources.js` 通过。
- `node --check script.js` 通过。
- 来源库 25 条来源必填字段无缺失。
- 首页已加载 `sources-data.js`。
- 首页导航已链接 `pages/sources.html`。
- 来源页已加载 `../sources-data.js` 与 `../page-sources.js`。
- 全局搜索已包含 `type: "来源"`。
- 16 个 HTML 页面所有相对链接/脚本引用无缺失。

下一步建议：

- P1.2：把关键页面中的事实卡和来源库做显式绑定，例如在能源层、芯片层、模型层、路线图事件中显示来源 ID / 来源标签。
- P2：KPI 数据化，给指标补数值区间、来源、更新时间、置信度和适用口径。

## 2026-05-29 更新：P1.2 Source Registry 显式绑定

用户继续推进，本轮完成 P1.2：把关键事实卡与来源库显式绑定。

已完成：

- 新增 `outputs/ai-five-layer-cake-site/source-badges.js`，提供可复用来源标签组件。
- `page-sources.js` 中每条来源卡增加 `id="${source.id}"`，支持从来源标签跳转到具体来源。
- 五个纵向层级页的“已核验事实”卡均新增来源标签：
  - `pages/power.html`：绑定 IEA、Google-Kairos、Amazon-X-energy、Constellation-Microsoft PPA。
  - `pages/silicon.html`：绑定 NVIDIA Rubin、Micron HBM4、Samsung HBM4、TSMC 年报、ASML 年报。
  - `pages/infra.html`：绑定 NVIDIA GB200、NVIDIA Dynamo、Meta 24K GPU、xAI Colossus、OpenAI Stargate。
  - `pages/model.html`：绑定 OpenAI o3/o4-mini、Google Gemini 2.5、Anthropic Claude 3.7、NVIDIA Dynamo、Gemini Robotics、GR00T N1。
  - `pages/app.html`：绑定 OpenAI Codex、GitHub Copilot coding agent、Salesforce Agentforce 3、Google Agentspace。
- 五个纵向页均加载：
  - `../sources-data.js`
  - `../source-badges.js`
- 首页路线图关键事件新增 `sourceIds`，并在路线图事件卡显示来源标签。
- `script.js` 新增 `renderInlineSourceBadges()`，用于动态渲染路线图来源标签和详情弹窗 source registry 链接。
- `styles.css` 新增 `.source-badges` 与 `.source-badge` 样式。

验证：

- `node --check source-badges.js` 通过。
- `node --check page-sources.js` 通过。
- `node --check roadmap-data.js` 通过。
- `node --check script.js` 通过。
- 5 个纵向页均包含来源标签容器、来源库数据脚本和来源标签脚本。
- HTML 页面中绑定的 Source ID：23 个。
- 路线图事件绑定的 Source ID：15 个。
- 去重后总绑定 Source ID：23 个。
- 缺失 Source ID：0。
- 16 个 HTML 页面所有相对链接/脚本引用无缺失。

下一步建议：

- P2：KPI 数据化。给 KPI 增加数值区间、单位、来源 ID、更新时间、置信度、适用场景和投资解读等级。

## 2026-05-31 更新：P2 KPI 数据化

用户在 2026-05-31 继续推进，本轮完成 P2：把 KPI 表从研究框架升级为可追溯指标表。

已完成：

- `outputs/ai-five-layer-cake-site/investment-data.js` 中 11 个 KPI 全部新增数据化字段：
  - `unit`：单位。
  - `range`：数值/观察区间。
  - `confidence`：置信度。
  - `updated`：更新时间。
  - `sourceIds`：绑定 Source Registry。
  - `applicability`：适用口径。
  - `readLevel`：投资解读等级。
- 已覆盖 KPI：
  - PUE
  - WUE
  - Rack Density
  - HBM Bandwidth
  - CoWoS Capacity
  - MTBF / MTTR
  - TTFT
  - P99 Latency
  - MFU
  - Agent Success Rate
  - Hallucination Rate
- `script.js` 中 KPI 表格渲染升级：
  - 新增“量化口径”列。
  - 新增“来源”列。
  - 每行显示单位、区间、方向、更新时间、置信度。
  - 每行显示 Source Registry 来源标签。
  - KPI 详情弹窗显示量化口径、适用场景、接口摩擦、投资读法、Source Registry 链接。
- 全局搜索索引升级：
  - KPI 搜索现在包含单位、区间、适用口径、置信度和 Source ID。
- `styles.css` 新增 KPI 数据化样式：
  - `.kpi-confidence`
  - KPI 单元格内的单位、说明、更新时间样式。

来源绑定：

- KPI 绑定 Source ID 共 13 个，全部存在于来源库，无缺失。
- 绑定来源覆盖：
  - IEA Energy and AI
  - NVIDIA GB200
  - Micron HBM4
  - Samsung HBM4
  - TSMC 2025 Annual Report
  - Meta 24K GPU clusters
  - NVIDIA Dynamo
  - OpenAI o3/o4-mini
  - OpenAI Codex
  - Salesforce Agentforce 3
  - GitHub Copilot Coding Agent
  - NIST AI RMF
  - OpenAI Preparedness

验证：

- `node --check investment-data.js` 通过。
- `node --check script.js` 通过。
- KPI 表数量：2。
- KPI 行数：11。
- KPI 必填字段缺失：0。
- KPI 绑定 Source ID：13。
- 缺失 Source ID：0。
- 首页 KPI 表已包含“量化口径”和“来源”列。
- KPI 表已调用 `renderInlineSourceBadges(row.sourceIds)`。
- 16 个 HTML 页面所有相对链接/脚本引用无缺失。
- 前端未混入 WORK_RECORD 或工作记录文本。
- 前端无 `待补充`、`TODO`、`空壳` 等占位表达。

下一步建议：

- P3：公司卡扩容到 100+，并为公司卡增加来源 ID、AI 暴露度、风险评级与投资主题标签。

## 2026-05-31 更新：P3 公司卡扩容与投资字段升级

用户继续推进投资研究终端，本轮完成 P3：把公司卡从示例图谱升级为可筛选、可检索、带投资字段的产业覆盖池。

已完成：

- 新增 `outputs/ai-five-layer-cake-site/company-expansion-data.js`，作为公司卡扩展数据层：
  - 保留原有 24 家核心公司。
  - 新增 109 家公司/平台。
  - 当前公司卡总数达到 133 家。
- 所有公司卡统一补齐投资研究字段：
  - `aiExposure`：AI 暴露度。
  - `riskRating`：风险等级。
  - `themes`：投资主题标签。
  - `sourceIds`：Source Registry 来源锚点。
- 133 家公司覆盖五层：
  - 芯片层：49 家。
  - 基础设施层：57 家。
  - 模型层：17 家。
  - 能源层：29 家。
  - 应用层：51 家。
- 133 家公司覆盖八条链：
  - 训练链：24 家。
  - 推理链：33 家。
  - 数据中心链：51 家。
  - 芯片供应链：41 家。
  - Agent 链：24 家。
  - 企业落地链：39 家。
  - 安全评测链：20 家。
  - 机器人链：21 家。
- `script.js` 公司卡渲染升级：
  - 新增 AI 暴露度与风险等级 scoreline。
  - 新增投资主题胶囊标签。
  - 新增来源锚点展示。
  - 产品按钮弹窗由泛化占位说明改为正式研究口径，显示产业位置、价值捕获、风险约束和来源锚点。
- 全局搜索索引升级：
  - 公司搜索现在纳入 AI 暴露度、风险等级、投资主题和 Source ID。
- `styles.css` 新增公司卡 scoreline 样式。
- `index.html` 新增 `company-expansion-data.js` 加载。

验证：

- `node --check company-expansion-data.js` 通过。
- `node --check investment-data.js` 通过。
- `node --check script.js` 通过。
- 公司卡总数：133。
- 公司名称重复：0。
- 必填字段缺失：0。
- 缺失 Source ID：0。
- 前端未混入 WORK_RECORD 或工作记录文本。
- 前端无 `待补充`、`TODO`、`空壳` 等占位表达。
- 浏览器本地文件打开验证被 Codex Browser 安全策略拦截，未绕过；本轮采用静态完整性验证作为替代。

下一步建议：

- P4：建立“标的看板/行业篮子”视图。按层级、链条、投资主题和风险等级做组合式筛选，并增加公司数量分布、主题热度和风险暴露摘要。

## 2026-05-31 更新：首页分类切换式布局优化

用户指出首页所有内容堆叠在同一个长页面中，信息密度过高、滚动负担重，需要改为分类切换式浏览。

已完成：

- 首页改为“分类切换式工作台”：
  - 新增顶部分类切换区 `category-shell`。
  - 新增分类 tabs 容器 `categoryTabs`。
  - 新增当前面板提示 `activeCategoryLabel`。
- 将原本顺序堆叠的模块拆为 10 个独立面板：
  - 总览
  - 双维矩阵
  - 五层框架
  - 横向产业链
  - 公司卡
  - KPI
  - 路线图
  - 搜索
  - 层间联系
  - 前沿雷达
- 默认只展示“总览”面板，其余 9 个面板使用 `hidden` 隐藏。
- 新增 `contentCategories` 数据结构：
  - 每个 category 包含 `key`、`name`、`description`、`panelId`。
- 新增独立前端交互函数：
  - `renderCategoryTabs()`
  - `activateCategory()`
  - `bindCategoryNavigation()`
- 顶部导航和 Hero 按钮改为面板切换入口：
  - 点击不刷新页面。
  - 不再跳到一长串展开内容。
  - 当前分类有明显高亮。
- 样式升级：
  - 新增 `.category-shell`、`.category-intro`、`.category-tabs`、`.category-tab`、`.category-panel`。
  - 桌面端使用横向密集 tab。
  - 移动端 tab 横向滚动。
  - 保留原有公司卡、KPI、搜索、路线图、矩阵等功能和数据渲染。

验证：

- `node --check script.js` 通过。
- `node --check company-expansion-data.js` 通过。
- `node --check investment-data.js` 通过。
- 分类面板数量：10。
- 默认隐藏面板数量：9。
- 分类数据数量：10。
- 16 个 HTML 页面所有相对链接/脚本引用无缺失。
- 前端未混入 WORK_RECORD 或工作记录文本。
- 前端无 `待补充`、`TODO`、`空壳` 等占位表达。
- 本地 HTTP 服务启动仍被系统权限拦截：`PermissionError: [Errno 1] Operation not permitted`，无法进行浏览器可视化验收；未绕过权限限制。

下一步建议：

- P4：继续做“标的看板/行业篮子”视图，作为公司卡面板内的第二级切换：总览统计、层级篮子、链条篮子、主题篮子、风险篮子。

## 2026-06-01 更新：移除中部分类工作台，改用右上角导航切换

用户反馈中部“分类切换式工作台”不需要，滚动时不应固定，也不应额外占据页面空间；分类切换用右上角导航即可。

已完成：

- 从首页移除中部 `category-shell` 工作台区块：
  - 移除“分类切换式工作台”标题。
  - 移除当前面板提示卡。
  - 移除中部分类 tabs。
- 右上角导航成为唯一分类切换入口：
  - 总览、矩阵、五层、产业链、公司卡、KPI、路线图、搜索、层间联系、前沿雷达均可直接切换对应面板。
  - 点击后仍然是前端切换，不刷新页面。
  - 当前选中导航项保持高亮。
- Hero 按钮改为直接切换并滚动到目标面板：
  - “进入双维矩阵”切换到矩阵面板。
  - “查看五层框架”切换到五层面板。
- 清理交互代码：
  - 移除 `renderCategoryTabs()`。
  - 移除 `#categoryTabs` 点击绑定。
  - `activateCategory()` 改为滚动到实际内容面板，不再滚动到已删除的工作台。
- 清理样式：
  - 移除 `.category-shell`、`.category-intro`、`.category-hint`、`.category-tabs`、`.category-tab` 相关样式。
  - 保留 `.category-panel` 作为内容面板显示/隐藏基础结构，并加入 `scroll-margin-top` 避免被顶部导航遮挡。

验证：

- `node --check script.js` 通过。
- 分类面板数量：10。
- 右上角分类入口数量：10。
- 默认隐藏面板数量：9。
- 已确认前端无 `category-shell`、`categoryTabs`、`分类切换式工作台` 残留。
- 16 个 HTML 页面所有相对链接/脚本引用无缺失。
- 前端未混入 WORK_RECORD 或工作记录文本。
- 前端无 `待补充`、`TODO`、`空壳` 等占位表达。

下一步建议：

- 若继续优化浏览体验，可进一步把右上角导航在宽屏下做成更紧凑的 segmented control，并在小屏下保持横向滚动。

## 2026-06-01 更新：P4 标的看板 / 行业篮子初版

用户确认继续推进后，本轮完成 P4 初版：把 133 家公司卡从“卡片池”升级为公司面板内的“标的看板”。

已完成：

- 在“公司卡”面板顶部新增 `portfolioDashboard` 标的看板。
- 新增四个总览指标：
  - 公司池总数。
  - AI 暴露度为“极高”的公司数量。
  - 风险等级为“高”的公司数量。
  - 投资主题数量。
- 新增 6 个行业篮子入口，并与下方公司卡筛选联动：
  - AI 电力与数据中心。
  - HBM/先进封装。
  - 推理成本优化。
  - 企业 Agent 落地。
  - 具身智能。
  - AI 安全与评测。
- 新增三组看板分析：
  - 层级分布。
  - 链条分布。
  - 主题热度云。
- 点击层级/链条分布条可联动筛选公司卡。
- 点击主题热度标签可展示对应主题下的公司卡。
- 抽取 `renderCompanyCardsGrid()`，复用公司卡渲染逻辑，降低重复代码。
- 新增 `setCompanyFilter()`，统一公司卡筛选状态与渲染。
- 新增样式：
  - `.portfolio-dashboard`
  - `.portfolio-summary`
  - `.portfolio-baskets`
  - `.portfolio-basket`
  - `.portfolio-analytics`
  - `.portfolio-bar`
  - `.portfolio-theme-cloud`
- 响应式布局已纳入原有移动端断点，窄屏下看板卡片改为单列。

验证：

- `node --check script.js` 通过。
- `node --check company-expansion-data.js` 通过。
- `node --check investment-data.js` 通过。
- 公司池数量：133。
- 行业篮子均能匹配公司：
  - 能源层：29。
  - 芯片供应链：41。
  - 推理链：33。
  - 企业落地链：39。
  - 机器人链：21。
  - 安全评测链：20。
- 投资主题数量：372。
- 16 个 HTML 页面所有相对链接/脚本引用无缺失。
- 前端未混入 WORK_RECORD 或工作记录文本。
- 前端无 `待补充`、`TODO`、`空壳` 等占位表达。
- 本地 HTTP 服务启动仍被系统权限拦截：`PermissionError: [Errno 1] Operation not permitted`，无法进行浏览器可视化验收；未绕过权限限制。

下一步建议：

- P7.1：前沿雷达来源化与状态校准。将 12 个待核验雷达话题逐个绑定来源、代表公司、关键 KPI，并升级状态。

## 2026-06-01 更新：P4.1 中国 AI 标的池扩容

用户指出当前标的池中中国企业偏少。本轮完成 P4.1：中国 AI 链条扩容，将大陆、港股、中概和中国未上市 AI 公司纳入公司池与标的看板。

已完成：

- 新增“中国AI链”作为正式投资主题与筛选入口。
- 公司卡筛选栏新增“中国AI链”按钮。
- 标的看板新增“中国 AI 全栈”行业篮子。
- 公司卡筛选逻辑升级：
  - 原先只按 `layers` / `chains` 筛选。
  - 现在同时支持按 `themes` 筛选，因此“中国AI链”可直接联动公司卡。
- 新增中国 AI 链标的 39 家，覆盖：
  - 模型/应用平台：Alibaba、Tencent、Baidu、ByteDance、Huawei、iFlytek、Kingsoft Office、SenseTime、Kunlun Tech、360、DeepSeek、Zhipu AI、Moonshot AI、MiniMax、Baichuan AI。
  - 国产算力/服务器/芯片链：Cambricon、Hygon、Sugon、Inspur、Foxconn Industrial Internet、Montage、GigaDevice、JCET、Tongfu Micro、NAURA、AMEC、Piotech。
  - 数据中心/液冷/能源：GDS、VNET、Envicool、Sanhua、CATL、Sungrow。
  - 机器人/自动驾驶/感知：Inovance、Estun、Horizon Robotics、Hesai、RoboSense、Pony AI。
- Source Registry 新增中国链条来源锚点：
  - `qwen3-2025`
  - `deepseek-r1`
  - `baidu-ernie-45`
  - `china-ai-industry-watch`

验证：

- `node --check sources-data.js` 通过。
- `node --check company-expansion-data.js` 通过。
- `node --check script.js` 通过。
- 公司池总数：172。
- 中国 AI 链公司数：39。
- 公司名称重复：0。
- 必填字段缺失：0。
- 缺失 Source ID：0。
- 中国 AI 链五层覆盖：
  - 模型层：14。
  - 应用层：23。
  - 基础设施层：14。
  - 芯片层：14。
  - 能源层：5。
- 中国 AI 链八链覆盖：
  - 推理链：14。
  - 企业落地链：16。
  - Agent 链：10。
  - 安全评测链：5。
  - 芯片供应链：10。
  - 训练链：4。
  - 机器人链：11。
  - 数据中心链：11。
- 16 个 HTML 页面所有相对链接/脚本引用无缺失。
- 前端未混入 WORK_RECORD 或工作记录文本。
- 前端无 `待补充`、`TODO`、`空壳` 等占位表达。

注意：

- `china-ai-industry-watch` 是临时研究索引来源，用于承接中国标的池扩容；后续仍应逐家公司补充更精确的年报、招股书、交易所公告或官方技术资料。

下一步建议：

- P7.1：继续做前沿雷达来源化。
- P7.2：中国标的来源精细化。逐步把 39 家中国标的从临时研究索引升级为公司级官方来源绑定。

## 2026-06-01 更新：P7.2 中国标的来源正规化

用户要求不要用临时研究索引糊过去，直接把中国标的正常补上正式来源。本轮完成中国 AI 链公司来源正规化初版。

已完成：

- Source Registry 新增公司/产品级官方来源 35 个，覆盖：
  - 模型与应用：腾讯混元、豆包、华为昇腾、讯飞星火、WPS AI、商汤、天工、360 AI、智谱、Kimi、MiniMax、百川。
  - 国产算力与芯片链：寒武纪、海光、中科曙光、浪潮、工业富联、澜起、兆易创新、长电、通富、北方华创、中微、拓荆。
  - 数据中心/液冷/能源：万国数据、世纪互联、英维克、三花、宁德时代、阳光电源。
  - 机器人/自动驾驶：汇川、埃斯顿、地平线、禾赛、速腾聚创、小马智行。
- `company-expansion-data.js` 新增 `chinaOfficialSourcesByCompany` 映射。
- 中国 AI 链 39 家公司加载时会自动将 `china-ai-industry-watch` 替换为公司/产品级正式来源。
- 保留 `china-ai-industry-watch` 仅作为来源库中的研究索引说明，不再作为中国标的运行时主来源。

验证：

- `node --check sources-data.js` 通过。
- `node --check company-expansion-data.js` 通过。
- `node --check script.js` 通过。
- Source Registry 来源数量：65。
- 公司池总数：172。
- 中国 AI 链公司数：39。
- 中国公司仅使用临时来源数量：0。
- 中国公司运行时继续使用临时来源数量：0。
- 缺失 Source ID：0。

下一步建议：

- P7.1：前沿雷达来源化与状态校准。
- P5：公司卡深度化时，可继续把公司官网来源升级为更强的年报、招股书、交易所公告和官方技术白皮书来源。

## 2026-06-01 更新：中国企业并入统一标的池

用户要求中国企业不要作为单独分类展示，而是“和其他企业放一起”。本轮完成公司池整合。

已完成：

- 删除独立的“中国 AI 全栈”组合篮子。
- 删除公司筛选器中的“中国AI链”独立筛选入口。
- 从公司原始主题标签中清理“中国AI链”，中国企业改按正常五层、八链和主题标签归类。
- 从 Source Registry 中移除临时 `china-ai-industry-watch` 研究索引来源。
- 保留中国企业的公司/产品级正式来源映射。

验证：

- `node --check company-expansion-data.js` 通过。
- `node --check script.js` 通过。
- `node --check sources-data.js` 通过。
- 公司池总数：172。
- Source Registry 来源数量：64。
- 缺失 Source ID：0。
- 运行时“中国AI链”主题数量：0。
- 运行时临时来源 `china-ai-industry-watch` 使用数量：0。
- 代码中已无 `中国AI链`、`中国 AI 链`、`China AI Industry Watchlist`、`china-ai-industry-watch` 残留。

## 2026-06-02 更新：P5.1 公司卡深度化第一批

本轮将公司卡从基础名单升级为可比较的投资研究卡，先覆盖 30 家核心公司。

已完成：

- 新增 `company-deepdives.js`，作为独立公司深度研究数据层。
- 深度字段覆盖：
  - `rank`：公司在 AI 五层蛋糕中的投资定位。
  - `capexNode`：公司主要捕获的 CAPEX/价值节点。
  - `investmentLens`：一句话投资研究视角。
  - `valueDrivers`：价值驱动因素。
  - `watchKpis`：需要持续跟踪的核心 KPI。
  - `frictionPoints`：接口摩擦/瓶颈/风险约束。
  - `catalysts`：潜在催化剂。
  - `peers`：同业对照。
- 第一批覆盖 30 家：
  - NVIDIA、TSMC、SK hynix、Broadcom、ASML。
  - Microsoft、Amazon、Alphabet / Google、Meta Platforms、OpenAI、Anthropic、Oracle。
  - Supermicro、Vertiv、Schneider Electric、GE Vernova、Constellation Energy。
  - Alibaba Group、Tencent、Baidu、ByteDance、Huawei、DeepSeek、Cambricon、Inspur Information。
  - GDS Holdings、CATL、Horizon Robotics、Pony AI、Kingsoft Office。
- 公司卡 UI 新增“深度研究”模块，展示定位、CAPEX 节点、价值驱动、关键 KPI、接口摩擦、催化剂和同业对照。
- 有深度资料的公司卡自动高亮，但不影响其余 142 家公司的基础卡展示。
- 同业对照按钮新增前端切换逻辑，可在公司区域内快速切到对应标的。
- 全局搜索索引纳入深度研究字段。

验证：

- `node --check company-deepdives.js` 通过。
- `node --check company-expansion-data.js` 通过。
- `node --check script.js` 通过。
- `node --check sources-data.js` 通过。
- 公司池总数：172。
- 深度研究定义数：30。
- 已挂载深度卡：30。
- 缺失挂载：0。
- 缺失 Source ID：0。
- `index.html` 新增脚本引用无缺失，脚本加载顺序正确。

注意：

- 本轮属于 P5.1 第一批结构化深度化，重点是建立字段体系和核心样板。
- 后续 P5.1 第二批可继续扩展到半导体设备、封测、光模块、IDC、软件 Agent、安全评测和机器人部件的中腰部标的。

## 2026-06-02 更新：P5.1 公司卡深度化第二批

本轮继续扩展中腰部关键环节公司卡，把深度研究卡从 64 张扩展到 95 张。

新增深度卡 31 家：

- 芯片与半导体供应链：Intel、Unimicron、Shinko Electric、Teradyne、Disco、Lasertec、ASM International、Amkor、SMIC、Qualcomm、Apple。
- 服务器/ODM/基础设施：Dell Technologies、HPE、Quanta Computer、Wiwynn、Delta Electronics。
- 液冷、电源和训练数据管道：CoolIT Systems、WEKA、VAST Data、DDN。
- 能源与电网：NextEra Energy、Vistra、Siemens Energy。
- 中国封测/设备/液冷/机器人部件/安全：JCET Group、NAURA Technology、AMEC、Envicool、Sanhua Intelligent Controls、Inovance、Hesai、360 Security Technology。

本轮强化的研究视角：

- 把 AI 价值捕获从头部 GPU/模型平台继续下沉到 ABF/IC 载板、测试、EUV 掩模检测、ALD、晶圆减薄、OSAT、成熟/准先进节点、端侧推理、AI ODM、服务器电源、冷板液冷、训练存储、电网和中国设备链。
- 每家公司继续保持统一字段：投资定位、CAPEX/价值节点、投资研究视角、价值驱动、关键 KPI、接口摩擦、催化剂、同业对照。

验证：

- `node --check company-deepdives.js` 通过。
- `node --check company-expansion-data.js` 通过。
- `node --check script.js` 通过。
- 公司池总数：172。
- 深度研究定义数：95。
- 已挂载深度卡：95。
- 缺失挂载：0。
- 缺失 Source ID：0。
- 必填深度字段缺失：0。
- `index.html` 脚本/样式引用无缺失。
- 前端无 `TODO`、`待补充`、`空壳` 占位表达。

下一步建议：

- P5.1 第三批：补齐剩余企业软件、Agent、安全评测、具身机器人本体/执行器、能源储能与中国模型应用标的。
- P5.2：开始做同业对照页/比较表，把同一价值节点下的公司放到可横向比较的表格里。

## 2026-06-02 更新：AI 基础设施补强 - 光互联 / 光模块 / 光芯片 / PCB

用户指出 AI 基础设施中缺少光模块、光通信、光芯片、PCB 等研究。本轮将其补成独立研究块，并接入公司池、深度卡、KPI、术语弹窗、前沿雷达和基础设施深度页。

已完成：

- 基础设施层框架新增：
  - `光互联`
  - `PCB/背板`
  - 指标新增 `光模块速率`、`PCB 信号完整性`
  - 前沿方向新增 `800G/1.6T 光模块与 CPO`、`高速 PCB/背板`
- 前沿雷达新增：
  - `800G/1.6T 光模块与 CPO`
  - `高速 PCB / CCL / 背板`
- 新增 Source Registry 来源 10 个：
  - NVIDIA Spectrum-X、Broadcom CPO、Credo、Fabrinet、中际旭创、新易盛、光迅科技、生益科技、沪电股份、深南电路。
- 公司池新增 8 家：
  - Credo Technology、Fabrinet、Zhongji Innolight、Eoptolink、Accelink Technologies、Shengyi Technology、WUS Printed Circuit、Shennan Circuits。
- 新增深度研究卡 8 张，对应上述新增公司。
- 新增组合筛选入口：
  - `光互联与高速 PCB`
  - 统一主题标签：`AI 网络硬件`
  - 组合内当前 14 家：Marvell、Coherent、Lumentum、Credo、Fabrinet、中际旭创、新易盛、光迅、Amphenol、Unimicron、生益、沪电、深南、Shinko。
- KPI 表新增 3 项：
  - `Optical Module Speed`
  - `SerDes Lane Rate`
  - `PCB Signal Integrity`
- 术语词典新增：
  - 光互联、光通信、光芯片、光模块、硅光、CPO、LPO、VCSEL、EML、InP、DSP、AEC、PCB、CCL、MFU/MBU。
- `pages/infra.html` 新增 `光互联、光模块、光芯片与高速 PCB` 专题区块，覆盖：
  - 800G/1.6T 光模块。
  - CPO/硅光。
  - AEC/高速铜缆。
  - PCB/CCL/背板。

验证：

- `node --check sources-data.js` 通过。
- `node --check company-expansion-data.js` 通过。
- `node --check company-deepdives.js` 通过。
- `node --check investment-data.js` 通过。
- `node --check script.js` 通过。
- `node --check glossary.js` 通过。
- `node --check page-glossary.js` 通过。
- 公司池总数：180。
- Source Registry 来源数量：74。
- 深度研究定义数：103。
- 缺失 Source ID：0。
- 新增 8 家公司均已挂载。
- 新增 8 张深度卡均已挂载。
- 光互联与高速 PCB 组合筛选命中 14 家。
- 新增 KPI 3 项均已挂载。
- 前端无 `TODO`、`待补充`、`空壳` 占位表达。

## 2026-06-02 更新：光通信/PCB 用户指定标的补齐

用户点名要求补入并与其他企业放在同一公司池中：东山精密、长电科技、大族激光、三安光电、剑桥科技、化工科技、长飞光电、亨通光电、天孚通信、长芯博创、澜起科技、源杰科技、Coherent、Lumentum、AAOI、MRVL、GLW、AXTI。

处理口径：

- `化工科技` 按光通信语境处理为 `华工科技 / HGTECH`，并保留 `化工科技` 作为搜索别名。
- `长芯博创` 按 A 股光器件/光模块语境处理为 `博创科技 / Broadex Technologies`，并保留 `长芯博创` 作为搜索别名。
- 已存在公司不重复建卡，而是补别名与检索入口：
  - `JCET Group`：长电科技、长电、600584.SS。
  - `Montage Technology`：澜起科技、澜起、688008.SS。
  - `Marvell`：MRVL。
  - `Coherent`：COHR。
  - `Lumentum`：LITE。

新增公司池标的 13 家：

- Dongshan Precision / 东山精密。
- Han's Laser / 大族激光。
- Sanan Optoelectronics / 三安光电。
- Cambridge Industries Group / 剑桥科技。
- HGTECH / 华工科技 / 化工科技。
- YOFC / 长飞光电。
- Hengtong Optic-Electric / 亨通光电。
- TFC Communication / 天孚通信。
- Broadex Technologies / 博创科技 / 长芯博创。
- Yuanjie Semiconductor / 源杰科技。
- Applied Optoelectronics / AAOI。
- Corning / GLW。
- AXT / AXTI。

新增 Source Registry 来源 13 个：

- Dongshan Precision、Han's Laser、Sanan Optoelectronics、Cambridge Industries Group、HGTECH、YOFC、Hengtong、TFC Communication、Broadex Technologies、Yuanjie Semiconductor、Applied Optoelectronics、Corning Optical Communications、AXT。

新增深度研究卡 13 张，覆盖：

- PCB/精密制造配套。
- PCB/半导体/光通信制造设备。
- 化合物半导体与光芯片。
- 高速光模块与通信设备。
- 光器件/光引擎部件。
- 光纤光缆与园区布线。
- InP/GaAs 化合物半导体衬底。

交互更新：

- 公司卡标题下新增别名展示，便于中文名、英文名和 ticker 同屏识别。
- 全局搜索纳入 `aliases` 字段，用户可直接搜索中文简称、A/H/美股代码或英文 ticker。

验证：

- `node --check sources-data.js` 通过。
- `node --check investment-data.js` 通过。
- `node --check company-deepdives.js` 通过。
- `node --check company-expansion-data.js` 通过。
- `node --check script.js` 通过。
- `node --check glossary.js` 通过。
- `node --check page-glossary.js` 通过。
- 公司池总数：193。
- Source Registry 来源数量：87。
- 深度研究定义数：116。
- 光互联与高速 PCB / AI 网络硬件组合命中：27 家。
- 缺失 Source ID：0。
- 新增 13 家公司深度卡缺失：0。
- 用户点名的 20 个搜索词均可命中对应公司卡。

## 2026-06-02 更新：A 股 / 港股标的中文展示口径

用户要求：A 股标的、港股标的都用中文名展示。

已完成：

- 新增前端展示逻辑：
  - ticker 含 `.SS`、`.SZ` 或港股代码 `.HK` 的公司，优先使用中文别名作为公司卡标题。
  - 英文名、股票代码和其他别名保留在公司卡标题下方，不影响搜索和识别。
  - 深度研究卡标题、知识弹窗标题、同业对照按钮、全局搜索结果标题同步使用中文展示名。
- 补齐 A/H 标的中文别名 30 个，包括：
  - 中芯国际、联想集团、优必选、阿里巴巴、腾讯控股、百度集团、科大讯飞、金山办公、商汤科技、昆仑万维、三六零。
  - 寒武纪、海光信息、中科曙光、浪潮信息、工业富联、兆易创新、通富微电、北方华创、中微公司、拓荆科技。
  - 万国数据、英维克、三花智控、宁德时代、阳光电源、汇川技术、埃斯顿、地平线机器人、速腾聚创。
- 保持底层英文 company key 不变，避免深度卡、同业跳转、来源锚点断链。

验证：

- `node --check company-expansion-data.js` 通过。
- `node --check script.js` 通过。
- 公司池总数：193。
- A/H 标的数量：48。
- A/H 标的缺失中文别名：0。

## 2026-06-03 更新：P1 同业对照表 v1 - 光互联与高速 PCB

本轮目标：把公司卡知识库升级为可横向比较的投资研究终端，第一张表聚焦 `光互联与高速 PCB`，覆盖光模块、光芯片/器件、网络连接芯片、PCB/CCL/背板、光纤光缆/布线、设备配套六个价值节点。

已完成：

- 新增数据文件：`peer-comparison-data.js`。
- 首页新增导航入口：`对比表`。
- 首页新增独立面板：`peer-comparison`。
- 新增渲染组件：
  - 同业对照摘要卡。
  - 价值节点 Tabs。
  - 市场筛选：全部 / A股 / 港股 / 美股 / 亚洲其他 / 其他。
  - AI 暴露度筛选：全部 / 极高 / 高 / 中高 / 中。
  - 搜索框：支持公司中文名、英文名、ticker、别名、价值节点和技术词。
  - 高密度对比表。
  - 行内展开详情。
  - 详情弹窗。
- 对比表已接入全局搜索，搜索结果类型新增 `同业对照`。
- A/H 公司继续优先显示中文名，英文名和 ticker 保留为别名。
- 来源锚点复用 Source Registry。

首张表覆盖 29 家公司：

- 光模块：中际旭创、新易盛、剑桥科技、Coherent、Lumentum、AAOI、Fabrinet。
- 光芯片/器件：光迅科技、天孚通信、博创科技、源杰科技、三安光电、AXT。
- 网络连接芯片：Broadcom、Marvell、Credo Technology、Astera Labs。
- PCB/CCL/背板：沪电股份、生益科技、深南电路、东山精密、Unimicron、Shinko Electric。
- 光纤光缆/布线：长飞光电、亨通光电、Corning、Amphenol。
- 设备配套：大族激光、华工科技。

新增 Source Registry 来源 4 个：

- Coherent official。
- Lumentum official。
- Marvell official。
- Astera Labs official。

验证：

- `node --check sources-data.js` 通过。
- `node --check peer-comparison-data.js` 通过。
- `node --check script.js` 通过。
- `node --check glossary.js` 通过。
- `node --check page-glossary.js` 通过。
- 公司池总数：193。
- Source Registry 来源数量：91。
- 同业对照表数量：1。
- 同业对照表行数：29。
- 价值节点分布：
  - 光模块：7。
  - 光芯片/器件：6。
  - 网络连接芯片：4。
  - PCB/CCL/背板：6。
  - 光纤光缆/布线：4。
  - 设备配套：2。
- 缺失公司匹配：0。
- 缺失 Source ID：0。
- A/H 中文名缺失：0。

浏览器验证状态：

- 尝试使用 Playwright 进行 `file://` 静态页面渲染检查，但本机缺少 Playwright Chromium 浏览器二进制，提示需运行 `npx playwright install`。
- 当前未擅自安装依赖；本轮以静态语法检查和数据一致性校验为准。

## 2026-06-03 更新：P1 同业对照表 v2 - HBM 与先进封装

本轮目标：复用 P1 同业对照组件，新增第二张表 `HBM 与先进封装同业对照`，把 AI 加速器供给闸门从 HBM、CoWoS/3D 封装、EDA/IP、ABF/封装基板、设备/测试、OSAT/国产替代六个节点展开。

已完成：

- `peer-comparison-data.js` 新增第二张专题表：`hbm-packaging`。
- 对比表控制栏新增 `专题表` 下拉，可在：
  - 光互联与高速 PCB 同业对照。
  - HBM 与先进封装同业对照。
  之间切换。
- 切换专题表时会自动重置价值节点、市场、AI 暴露度、搜索词和展开行。
- 对比表全局搜索继续自动接入新增 rows。
- A/H 公司继续优先显示中文名。

第二张表覆盖 28 家公司：

- HBM/内存：SK hynix、Micron、Samsung Electronics。
- Foundry/先进封装：TSMC、Intel、SMIC。
- EDA/IP：Synopsys、Cadence。
- ABF/封装基板：Ibiden、Unimicron、Shinko Electric。
- 设备/测试：ASML、Applied Materials、Tokyo Electron、Lam Research、KLA、Advantest、Disco、Lasertec、ASM International、BE Semiconductor。
- OSAT/国产替代：ASE Technology、Amkor、JCET Group、Tongfu Microelectronics、NAURA Technology、AMEC、Piotech。

新增 Source Registry 官方来源 15 个：

- SK hynix、Applied Materials、Synopsys、Cadence、Ibiden、Tokyo Electron、Lam Research、KLA、Advantest、Disco、Lasertec、ASM International、BE Semiconductor、ASE Technology、Amkor。

验证：

- `node --check sources-data.js` 通过。
- `node --check peer-comparison-data.js` 通过。
- `node --check script.js` 通过。
- `node --check glossary.js` 通过。
- `node --check page-glossary.js` 通过。
- 公司池总数：193。
- Source Registry 来源数量：106。
- 同业对照表数量：2。
- 同业对照表总行数：57。
- 第一张表 `optical-pcb`：29 行。
- 第二张表 `hbm-packaging`：28 行。
- 缺失公司匹配：0。
- 缺失 Source ID：0。
- A/H 中文名缺失：0。

## 2026-06-03 更新：P1 同业对照表 v3 - AI 电力、数据中心与液冷

本轮目标：新增第三张表 `AI 电力、数据中心与液冷同业对照`，把 AI Factory 的物理底座拆成电力/配电、数据中心资产、AI 服务器/ODM、液冷/热管理、训练存储五类 CAPEX 节点。

已完成：

- `peer-comparison-data.js` 新增第三张专题表：`datacenter-power`。
- 对比表专题下拉新增：
  - `AI 电力、数据中心与液冷同业对照`。
- 新表自动复用现有筛选、搜索、行内展开、详情弹窗、来源锚点和全局搜索接入。

第三张表覆盖 31 家公司：

- 电力/配电：Vertiv、Schneider Electric、Eaton、Delta Electronics、Lite-On、NextEra Energy、Vistra、Constellation Energy、GE Vernova、Siemens Energy。
- 数据中心资产：Equinix、Digital Realty、GDS Holdings、VNET。
- AI 服务器/ODM：Supermicro、Dell Technologies、HPE、Lenovo、Quanta Computer、Wiwynn、Wistron、Foxconn。
- 液冷/热管理：Envicool、CoolIT Systems、Modine、Sanhua Intelligent Controls、CATL、Sungrow。
- 训练存储：WEKA、VAST Data、DDN。

新增 Source Registry 官方来源 24 个：

- Vertiv、Schneider Electric、Eaton、NextEra Energy、Vistra、GE Vernova、Siemens Energy、Equinix、Digital Realty、Supermicro、Dell Technologies、Quanta、Wiwynn、Delta Electronics、CoolIT、Modine、WEKA、DDN、HPE、Lenovo、Wistron、Foxconn、Lite-On、VAST Data。

验证：

- `node --check sources-data.js` 通过。
- `node --check peer-comparison-data.js` 通过。
- `node --check script.js` 通过。
- 公司池总数：193。
- Source Registry 来源数量：130。
- 同业对照表数量：3。
- 同业对照表总行数：88。
- 第三张表 `datacenter-power`：31 行。
- 缺失公司匹配：0。
- 缺失 Source ID：0。
- A/H 中文名缺失：0。

## 2026-06-03 更新：P1 同业对照表 v4 - AI 云、模型与企业应用

本轮目标：新增第四张表 `AI 云、模型与企业应用同业对照`，把 AI 从模型能力到企业 ROI 的价值传导拆成云/模型平台、企业数据/RAG、Agent 应用、安全评测、中国模型/办公五类软件节点。

已完成：

- `peer-comparison-data.js` 新增第四张专题表：`ai-cloud-apps`。
- 对比表专题下拉新增：
  - `AI 云、模型与企业应用同业对照`。
- 新表自动复用现有筛选、搜索、行内展开、详情弹窗、来源锚点和全局搜索接入。

第四张表覆盖 40 家公司：

- 云/模型平台：Microsoft、Alphabet / Google、Amazon、Oracle、Meta Platforms、OpenAI、Anthropic。
- 企业数据/RAG：Databricks、Snowflake、Palantir、MongoDB、Elastic、Confluent、Glean。
- Agent 应用：Salesforce、ServiceNow、Adobe、Atlassian、Intuit、Anysphere、Cognition、Replit、Sierra、Harvey、Abridge。
- 安全评测：CrowdStrike、Datadog、Cloudflare、Hugging Face、Scale AI、Perplexity。
- 中国模型/办公：Alibaba Group、Tencent、Baidu、DeepSeek、Zhipu AI、Moonshot AI、iFlytek、Kingsoft Office、360 Security Technology。

新增 Source Registry 官方来源 17 个：

- ServiceNow AI、Databricks Mosaic AI、Snowflake Cortex AI、Palantir AIP、MongoDB Atlas Vector Search、Elastic AI Search、Atlassian Rovo、Adobe Firefly、CrowdStrike Charlotte AI、Datadog LLM Observability、Cloudflare AI、Hugging Face、Scale AI、Glean、Cursor、Replit Agent、Perplexity。

验证：

- `node --check sources-data.js` 通过。
- `node --check peer-comparison-data.js` 通过。
- `node --check script.js` 通过。
- 公司池总数：193。
- Source Registry 来源数量：147。
- 同业对照表数量：4。
- 同业对照表总行数：128。
- 第四张表 `ai-cloud-apps`：40 行。
- 缺失公司匹配：0。
- 缺失 Source ID：0。
- A/H 中文名缺失：0。
## 2026-06-03 更新：P1 同业对照表 v5 - 机器人与具身智能

本轮继续 P1「同业对照表」建设，新增第 5 张主题表【机器人与具身智能同业对照】。

新增覆盖：
- 本体/人形机器人：Figure AI、Agility Robotics、Apptronik、Boston Dynamics、Unitree、UBTECH。
- 执行器/减速器：Harmonic Drive Systems、Nabtesco、Sanhua Intelligent Controls、Inovance、Estun Automation。
- 传感器/自动驾驶：Horizon Robotics、Hesai、RoboSense、Pony AI、SenseTime。
- 工业自动化：ABB、Yaskawa、Fanuc、Keyence、Omron、Foxconn Industrial Internet。
- 端侧/边缘芯片：Arm、Qualcomm、MediaTek、GigaDevice、GlobalFoundries、TE Connectivity。

数据结构：
- `peer-comparison-data.js` 新增 `embodied-robotics` 表。
- 表字段延续已有同业对照组件：`companyName`、`segment`、`valueNode`、`kpis`、`moat`、`risks`、`catalysts`、`sourceIds`。
- `sources-data.js` 新增 17 条机器人/端侧 AI 相关来源。

当前统计：
- Source Registry：164 条。
- 同业对照表：5 张。
- 同业对照行数：156 行。
- 公司池：193 家。

校验结果：
- `sources-data.js`、`peer-comparison-data.js` JS 语法校验通过。
- 同业对照表所有公司均能匹配公司池。
- 同业对照表所有 `sourceIds` 均能匹配 Source Registry。
## 2026-06-03 更新：P1 同业对照表 v6 - 半导体设备、封测与材料

本轮继续 P1「同业对照表」建设，新增第 6 张主题表【半导体设备、封测与材料同业对照】。

新增表覆盖：
- EDA/IP：Synopsys、Cadence。
- 前道工艺设备：ASML、Applied Materials、Tokyo Electron、Lam Research、ASM International、NAURA Technology、AMEC、Piotech。
- 检测/测试/后道设备：KLA、Lasertec、Advantest、Teradyne、Disco。
- 先进封装/OSAT：BE Semiconductor、Han's Laser、ASE Technology、Amkor、JCET Group、Tongfu Microelectronics。
- 基板/封装材料：Ibiden、Unimicron、Shinko Electric、Ajinomoto、Resonac。
- 硅片/电子材料：Shin-Etsu Chemical、SUMCO、GlobalWafers、Entegris、Merck KGaA。

新增公司池标的：
- Shin-Etsu Chemical、SUMCO、GlobalWafers、Entegris、Merck KGaA、Ajinomoto、Resonac。

新增来源：
- Teradyne、Shin-Etsu Chemical、SUMCO、GlobalWafers、Entegris、Merck KGaA Electronics、Ajinomoto ABF、Resonac。

当前统计：
- 公司池：200 家。
- Source Registry：172 条。
- 同业对照表：6 张。
- 同业对照行数：187 行。

校验结果：
- `sources-data.js`、`company-expansion-data.js`、`peer-comparison-data.js`、`script.js` JS 语法校验通过。
- 同业对照表所有公司均能匹配公司池。
- 同业对照表所有 `sourceIds` 均能匹配 Source Registry。
## 2026-06-03 更新：P1 同业对照表 v7 - AI 安全、评测与可观测

本轮继续 P1「同业对照表」建设，新增第 7 张主题表【AI 安全、评测与可观测同业对照】。

新增表覆盖：
- 模型治理/安全框架：Anthropic、OpenAI、Mistral AI、Cohere、Hugging Face、Adobe。
- 数据标注/评测：Scale AI、Surge AI、Snorkel AI、Databricks。
- LLM 可观测/网关：LangChain、Datadog、Cloudflare、Elastic。
- 安全运营/SOC：CrowdStrike、360 Security Technology。
- 企业权限/RAG：Palantir、Snowflake、Glean、MongoDB、Confluent。
- 高风险垂直场景：Harvey、Abridge、Intuit、Sierra、Perplexity。

新增来源：
- Mistral AI、Cohere、Snorkel AI、Surge AI、LangSmith。

当前统计：
- 公司池：200 家。
- Source Registry：177 条。
- 同业对照表：7 张。
- 同业对照行数：213 行。

校验结果：
- `sources-data.js`、`peer-comparison-data.js`、`script.js` JS 语法校验通过。
- 同业对照表所有公司均能匹配公司池。
- 同业对照表所有 `sourceIds` 均能匹配 Source Registry。
## 2026-06-03 更新：P1 阶段收尾审计

本轮按用户要求完成 P1「投资研究终端数据化」阶段性收尾，不新增新的产业主题，重点做结构体检、状态归档和阶段总结准备。

P1 当前完成状态：
- 公司池：200 家。
- Source Registry：177 条。
- 公司深度研究卡：116 张。
- 同业对照表：7 张。
- 同业对照行数：213 行。
- A/H 标的：48 家，均已使用中文名展示。

7 张同业对照表：
- `ai-safety-eval-observability`：AI 安全、评测与可观测，26 行。
- `semicap-materials`：半导体设备、封测与材料，31 行。
- `optical-pcb`：光互联与高速 PCB，29 行。
- `hbm-packaging`：HBM 与先进封装，28 行。
- `datacenter-power`：AI 电力、数据中心与液冷，31 行。
- `ai-cloud-apps`：AI 云、模型与企业应用，40 行。
- `embodied-robotics`：机器人与具身智能，28 行。

收尾校验结果：
- Source Registry 重复 ID：0。
- 同业对照表重复 key：0。
- 同业对照表重复行：0。
- 同业对照表分类不匹配：0。
- 缺失公司匹配：0。
- 缺失 Source ID：0。
- `sources-data.js`、`peer-comparison-data.js`、`script.js` 语法校验通过。

README 更新：
- 增加 P1 阶段状态说明。
- 中英文路线图中移除“继续增加同业对照表”的旧描述，改为估值/CAPEX 敏感性、前沿雷达数据化和公司深度页批量补齐。

阶段判断：
- P1 已达到可作为阶段性版本留档的状态。
- 浏览器视觉审核按用户要求暂时跳过。
## 2026-06-08 更新：P2.1 公司深度研究卡批量补齐

用户确认开始 P2。本轮执行 P2.1「公司深度页/深度研究卡批量补齐」。

执行逻辑：
- 以 7 张同业对照表为优先范围。
- 扫描同业对照表中出现但缺少深度研究卡的公司。
- 对缺口公司补齐统一结构字段：`rank`、`capexNode`、`investmentLens`、`valueDrivers`、`watchKpis`、`frictionPoints`、`catalysts`、`peers`。

本轮新增深度研究卡：
- AI 安全/评测/企业应用：Adobe、MongoDB、Elastic、Glean、Confluent、Hugging Face、Scale AI、Perplexity、Abridge、Harvey、Sierra、Intuit、Mistral AI、Cohere、Snorkel AI、Surge AI、Anysphere、Replit、Atlassian、Cognition。
- 半导体设备/封测/材料：Piotech、Tongfu Microelectronics、Ajinomoto、Entegris、GlobalWafers、Merck KGaA、Resonac、Shin-Etsu Chemical、SUMCO。
- 机器人/工业自动化/端侧芯片：ABB、Keyence、Fanuc、Yaskawa、Apptronik、Boston Dynamics、Estun Automation、GigaDevice、GlobalFoundries、Harmonic Drive Systems、MediaTek、Nabtesco、Omron、RoboSense、SenseTime、TE Connectivity、UBTECH、Unitree。
- 数据中心/电力/服务器链：中国和全球中腰部补齐：Foxconn、Foxconn Industrial Internet、Lenovo、Lite-On、Modine、Sungrow、VNET、Wistron。
- 中国模型/办公：iFlytek、Moonshot AI、Zhipu AI。

当前统计：
- 公司池：200 家。
- Source Registry：177 条。
- 公司深度研究卡：174 张。
- 同业对照表：7 张，213 行。
- 同业对照表涉及唯一公司：166 家。
- 同业表公司深度研究卡覆盖率：100%。

校验结果：
- `company-deepdives.js`、`company-expansion-data.js`、`peer-comparison-data.js`、`script.js` JS 语法校验通过。
- 200 家公司卡均可正常加载。
- 174 张深度研究卡均包含必需字段。
- 7 张同业对照表中的 166 家唯一公司深度卡覆盖缺口为 0。

README 更新：
- 数据日期更新到 2026-06-08。
- 深度研究卡数量从 116 更新为 174。
- 增加 P2.1 阶段状态说明。

## 2026-06-08 更新：P2.2 估值 / CAPEX 敏感性模块 v1

本轮继续 P2，执行 P2.2「估值 / CAPEX 敏感性模块」第一版建设。

新增网站能力：
- 新增顶部分类入口【敏感性】。
- 新增独立面板【估值 / CAPEX 敏感性】，聚焦产业变量、CAPEX 兑现、毛利弹性和价值捕获方向。
- 新增数据文件 `valuation-sensitivity-data.js`。
- 敏感性主题、变量和公司标签已接入知识弹窗。
- 敏感性主题与变量已接入全局搜索。

新增敏感性主题：
- HBM / CoWoS 供给敏感性。
- 电力 / 液冷 CAPEX 敏感性。
- AI 网络 / 光互联敏感性。
- 推理成本 / 延迟敏感性。
- 企业 Agent ROI 敏感性。
- 具身智能 BOM / 量产敏感性。

新增变量规模：
- 6 组主题。
- 18 个关键变量。
- 165 个关联公司名。

新增公司池标的：
- FormFactor、Siemens、特变电工、许继电气、台光电子、欣兴电子、CoreWeave、Together AI、Fireworks AI、SAP、UiPath、Palo Alto Networks、用友网络、金蝶国际、明源云、Tesla、绿的谐波、鸣志电器、拓普集团、瑞芯微、Ambarella、Unity、Dassault Systemes。

当前统计：
- 公司池：223 家。
- Source Registry：177 条。
- 公司深度研究卡：174 张。
- 同业对照表：7 张，213 行。
- 估值 / CAPEX 敏感性主题：6 组，18 个关键变量。

校验结果：
- `company-expansion-data.js`、`valuation-sensitivity-data.js`、`script.js` JS 语法校验通过。
- 敏感性模块所有关联公司均能匹配公司池。
- 敏感性模块所有 `sourceIds` 均能匹配 Source Registry。
- 敏感性模块缺失公司：0。
- 敏感性模块缺失 Source ID：0。

README 更新：
- 数据规模更新到公司池 223 家。
- 增加 P2.2 阶段状态说明。
- 后续路线更新为 P2.3 前沿雷达数据化、P2.4 公司深度页第二轮、P2.5 轻量评分模型。

## 2026-06-08 更新：P2.3 前沿雷达数据化 v1

本轮继续 P2，执行 P2.3「前沿雷达数据化」第一版建设。

新增网站能力：
- 新增数据文件 `frontier-radar-data.js`。
- 将原有四字段雷达话题列表升级为结构化研究卡。
- 前沿雷达面板增加状态统计、风险标签、成熟度、时间窗口、观察 KPI、代表公司和来源。
- 前沿雷达议题已接入知识弹窗。
- 前沿雷达议题已接入全局搜索。

新增雷达议题结构字段：
- `layer`：所属五层。
- `status`：已确认 / 研究中。
- `maturity`：商业化、工程、认证或验证阶段。
- `risk`：中 / 中高 / 高。
- `horizon`：跟踪时间窗口。
- `thesis`：核心研究判断。
- `whyNow`：为什么现在重要。
- `watchKpis`：观察指标。
- `catalysts`：潜在催化剂。
- `companies`：代表公司。
- `sourceIds`：来源映射。

新增覆盖：
- 前沿雷达议题：16 个。
- 雷达关联公司名：120 个。
- 状态分布：已确认 9 个，研究中 7 个。

新增公司池标的：
- JetBrains：用于承接 AI 编程与软件生产议题。

当前统计：
- 公司池：224 家。
- Source Registry：177 条。
- 公司深度研究卡：174 张。
- 同业对照表：7 张，213 行。
- 估值 / CAPEX 敏感性主题：6 组，18 个关键变量。
- 前沿雷达议题：16 个，120 个关联公司名。

校验结果：
- `frontier-radar-data.js`、`company-expansion-data.js`、`script.js` JS 语法校验通过。
- 前沿雷达所有关联公司均能匹配公司池。
- 前沿雷达所有 `sourceIds` 均能匹配 Source Registry。
- 前沿雷达缺失公司：0。
- 前沿雷达缺失 Source ID：0。

README 更新：
- 数据规模更新到公司池 224 家。
- 增加 P2.3 阶段状态说明。
- 后续路线更新为 P2.4 公司深度页第二轮、P2.5 轻量评分模型、P2.6 研究任务队列。

## 2026-06-08 更新：P2.4 公司深度页第二轮 v1

本轮继续 P2，执行 P2.4「公司深度页第二轮」第一批。

执行逻辑：
- 以 P2.2 估值 / CAPEX 敏感性模块和 P2.3 前沿雷达模块中出现的公司为优先范围。
- 扫描优先公司中缺少 `deepDive` 的标的。
- 保持与既有公司深度卡完全相同的字段结构：`rank`、`capexNode`、`investmentLens`、`valueDrivers`、`watchKpis`、`frictionPoints`、`catalysts`、`peers`。

本轮新增深度研究卡 29 张：
- 先进测试/封装：FormFactor。
- 国产服务器/数据中心：Sugon。
- 电力/配电/自动化：Siemens、特变电工、许继电气。
- 高速材料/基板：台光电子、欣兴电子。
- GPU 云/推理平台：CoreWeave、Groq、Cerebras、SambaNova、Together AI、Fireworks AI。
- 企业软件/Agent：SAP、UiPath、用友网络、金蝶国际、明源云、JetBrains。
- AI 安全：Palo Alto Networks。
- 具身智能/机器人/端侧：Tesla、绿的谐波、鸣志电器、拓普集团、瑞芯微、Ambarella、Unity、Dassault Systemes、MiniMax。

当前统计：
- 公司池：224 家。
- Source Registry：177 条。
- 公司深度研究卡：203 张。
- 同业对照表：7 张，213 行。
- 估值 / CAPEX 敏感性主题：6 组，18 个关键变量。
- 前沿雷达议题：16 个，120 个关联公司名。

校验结果：
- `company-deepdives.js`、`company-expansion-data.js`、`script.js` JS 语法校验通过。
- 224 家公司卡均可正常加载。
- 203 张深度研究卡均包含必需字段。
- P2.2/P2.3 优先公司深度卡覆盖缺口为 0。
- 公司 `sourceIds` 缺失映射为 0。

README 更新：
- 深度研究卡数量从 174 更新为 203。
- 增加 P2.4 阶段状态说明。
- 后续路线更新为 P2.5 轻量评分模型、P2.6 研究任务队列、P2.7 研究终端体验优化。

## 2026-06-08 更新：首页导航层级调整

用户指出【对比表 / KPI / 敏感性】不应作为首页一级导航模块。

本轮调整：
- 从顶部主导航移除【对比表】、【KPI】、【敏感性】三个入口。
- 保留对应功能页面和前端切换逻辑，不删除功能。
- 在【公司卡】模块内部新增轻量子导航【投研工具】，包含【同业对照】、【量化 KPI】、【估值敏感性】。
- 子导航增加选中态，进入对应工具面板时可高亮。

验证：
- `script.js` JS 语法校验通过。
- 顶部主导航已不再显示这三个工具型入口。

## 2026-06-08 更新：首页导航继续收紧

用户进一步确认词典和其他工具型入口也不需要占据顶部导航。

本轮调整：
- 顶部主导航压缩为 5 个一级入口：【总览】、【五层】、【产业链】、【公司研究】、【搜索】。
- 从顶部主导航移除【矩阵】、【路线图】、【来源】、【层间联系】、【前沿雷达】。
- 【双维矩阵】继续保留在 hero 主按钮和总览区二级入口。
- 在总览区新增轻量二级入口【深入查看】：双维矩阵、层间联系、路线图、前沿雷达、来源。
- 公司研究区保留轻量二级入口【投研工具】：同业对照、量化 KPI、估值敏感性、前沿雷达。

验证：
- `script.js` JS 语法校验通过。
- 顶部主导航当前只剩 5 个一级入口。

## 2026-06-08 更新：二级面板增加退出路径

用户指出从【深入查看】进入双维矩阵、层间联系、路线图、前沿雷达、来源等模块后，需要有明确退出方式。

本轮调整：
- 给【双维矩阵】、【层间联系】、【路线图】、【前沿雷达】增加【返回总览】按钮。
- 给【同业对照】、【量化 KPI】、【估值敏感性】增加【返回公司研究】按钮。
- 返回按钮复用现有 `data-category-link` 前端切换逻辑，不刷新页面。
- 暗色前沿雷达页使用独立 `back-link dark` 样式。

验证：
- `script.js` JS 语法校验通过。
- 返回按钮均已挂载 `data-category-link`，可触发分类切换。

## 2026-06-08 更新：P2.5A 公司卡摘要化

用户确认暂停新增知识内容，进入体验整理期。本轮执行 P2.5A「公司卡摘要化」。

本轮调整：
- 公司卡默认视图从完整研究卡改为摘要卡。
- 默认仅展示公司名、别名/代码、所属层级/链条、AI 暴露度、风险等级和核心护城河一句话。
- 受益逻辑、关键风险、投资主题、代表产品、来源锚点和深度研究卡改为折叠在【详情】中。
- 公司列表默认只展示前 24 家摘要卡。
- 当结果超过 24 家时，底部提供【显示全部 N 家】/【收起为摘要数量】按钮。
- 筛选切换时自动回到摘要数量，避免页面重新变长。

验证：
- `script.js` JS 语法校验通过。
- 公司池仍为 224 家。
- 公司深度研究卡仍为 203 张。

## 2026-06-08 更新：公司研究页增加搜索栏

用户提出公司页需要搜索栏。

本轮调整：
- 在【公司研究】页新增本地公司搜索栏。
- 支持搜索公司名、中文别名、ticker、层级、链条、投资主题、代表产品、护城河、受益逻辑、风险和深度研究字段。
- 搜索与现有层级/链条筛选联动。
- 搜索结果仍保持摘要卡默认展示和 24 家分页限制。
- 无匹配结果时显示轻量空状态提示。
- 从主题看板、同业按钮跳转时会自动清空旧搜索词，避免结果被误过滤。

验证：
- `script.js` JS 语法校验通过。
- 关键词验证：`nvidia`、`中际旭创`、`hbm`、`液冷`、`agent`、`tsla` 均可命中对应公司。

## 2026-06-08 更新：P2.5B 五层与产业链摘要化

本轮继续体验整理期，执行 P2.5B「五层/产业链页面摘要化」。

本轮调整：
- 五层卡默认只展示核心判断、当前现状和 3 个关键节点。
- 基础支点、全部节点、关键指标、前沿方向和核心术语收进【更多】折叠区。
- 五层卡默认高度从 460px 降到 360px，减少首屏压力。
- 产业链卡默认只展示摘要和前 4 个链条节点。
- 完整链条收进【完整链条】折叠区。
- 保留所有深度页入口，不删除原有内容。

验证：
- `script.js` JS 语法校验通过。

## 2026-06-08 更新：P2.5C 工具页默认收紧

本轮继续体验整理期，执行 P2.5C「KPI / 敏感性 / 前沿雷达默认收紧」。

本轮调整：
- KPI 页从宽表格默认展示改为摘要卡网格。
- 每个 KPI 默认只显示指标名、可信度、量化口径摘要、层级/链条和投资读法摘要。
- KPI 完整口径、接口摩擦、投资读法和来源通过点击指标名进入知识弹窗。
- 敏感性页默认只展示主题、核心问题、thesis 和前三个变量标签。
- 敏感性主题的 playbook、完整变量列表、上下行情景、关联公司和来源收进【展开变量与读法】。
- 前沿雷达默认只展示【已确认】主线议题。
- 前沿雷达按层级筛选时显示该层全量议题，避免默认一次铺满 16 个话题。

验证：
- `script.js` JS 语法校验通过。
- KPI 表：2 组，14 个指标。
- 敏感性主题：6 组。
- 前沿雷达：16 个议题，其中默认主线为 9 个已确认议题。

## 2026-06-08 更新：删除前沿雷达与路线图展示模块

用户反馈【前沿雷达】和【路线图】两块仍然较乱，当前阶段不需要保留在网站主体验中。

本轮调整：
- 从总览二级入口中移除【路线图】和【前沿雷达】。
- 从公司研究投研工具入口中移除【前沿雷达】。
- 删除首页中的 `#roadmap` 和 `#radar` 两个独立展示区块。
- 首页不再加载 `roadmap-data.js` 和 `frontier-radar-data.js`。
- `script.js` 不再初始化路线图/雷达渲染与筛选逻辑。
- 全局搜索不再索引路线图事件和前沿雷达议题。
- `roadmap-data.js` 与 `frontier-radar-data.js` 文件暂作为历史数据归档保留，后续若重启该方向可再重新设计。

验证计划：
- `script.js` JS 语法校验。
- 首页入口不再出现路线图/前沿雷达。
- 搜索说明不再包含路线图。

## 2026-06-08 更新：独立词典页下线，保留术语弹窗

用户此前确认【词典】不需要作为独立模块，本轮继续体验收紧。

本轮调整：
- 删除独立词典页 `pages/glossary.html`。
- 保留 `glossary.js`，继续为正文中的重要名词提供小弹窗解释。
- 将 `page-glossary.js` 从完整词典索引渲染器瘦身为深度页术语弹窗启动脚本，避免影响各层/各链深度页现有引用。
- 来源页导航移除【词典】和已下线的【路线图】。
- 全局搜索不再索引术语词典条目。
- 首页搜索说明从“公司卡、KPI 和术语”改为“公司卡、KPI 和来源”。
- 页面文案中的“黑话词典”改为“核心名词”，降低模块感。
- README 同步当前状态：仅保留术语弹窗，不再提供独立词典页。

验证：
- `script.js`、`glossary.js`、`page-glossary.js`、`page-sources.js` JS 语法校验通过。
- 未发现 `pages/glossary.html` 死链。
- 全局搜索索引中已移除 `type: "术语"`。

## 2026-06-08 更新：P2 五层摘要页重构

用户确认跳过 P0/P1，直接进入 P2 主线增强。本轮执行第一步【五层摘要页重构】。

本轮调整：
- 五层卡片从资料型卡片改为摘要型研究入口。
- 每层默认展示四块核心信息：
  - 行业现状。
  - 核心瓶颈。
  - 代表公司。
  - 关键链条入口。
- 基础支点、全部节点、关键指标、前沿方向和核心名词继续折叠在【基础与扩展】中，保留但不抢主阅读路径。
- 每层新增 `bottleneck`、`representativeCompanies`、`keyChains` 数据字段。
- 代表公司按钮可直接跳转到【公司研究】并搜索对应公司。
- 【查看本层公司池】按钮可直接跳转到【公司研究】并筛选该层公司。
- 关键链条入口直接跳转到对应横向产业链深度页。
- 五层页说明文案同步改为“行业现状、核心瓶颈、代表公司和关键链条入口”。
- 五层卡布局从横向五窄列改为两列摘要卡，移动端自动单列。

验证：
- `script.js`、`glossary.js`、`page-glossary.js` JS 语法校验通过。
- 25 个代表公司引用均能匹配公司池，缺失为 0。

## 2026-06-18 更新：P2 八条产业链摘要页重构

本轮继续 P2 主线增强，执行第二步【八条产业链摘要页重构】。

本轮调整：
- 八条产业链卡片从节点列表型卡片改为摘要型研究入口。
- 每条链默认展示四块核心信息：
  - 拓扑流向。
  - 接口摩擦。
  - CAPEX / 价值捕获。
  - 代表公司。
- 每条链新增 `friction`、`valueCapture`、`representativeCompanies`、`companyFilter` 数据字段。
- 代表公司按钮可直接跳转到【公司研究】并搜索对应公司。
- 【查看本链公司池】按钮可直接跳转到【公司研究】并筛选该链公司。
- 完整节点链条继续折叠在【完整链条】中。
- 深度页入口保留，作为完整内容承载页。
- 产业链页说明文案同步改为“拓扑流向、接口摩擦、CAPEX/价值捕获和代表公司入口”。
- 产业链卡布局与五层摘要页保持一致，移动端自动单列。

验证：
- `script.js`、`glossary.js`、`page-glossary.js` JS 语法校验通过。
- 五层与八链合计 65 个代表公司引用均能匹配公司池，缺失为 0。
- 全站 15 个 HTML 文件本地引用检查通过，缺失为 0。
- 本轮尝试重建本地记忆索引两次，均被系统以退出码 137 终止；网站文件和功能校验不受影响。

## 2026-06-18 更新：P2 矩阵交点详情统一

本轮继续 P2 主线增强，执行第三步【矩阵交点详情统一】。

本轮调整：
- 40 个双维矩阵交点统一为同一套研究卡结构。
- 每个交点详情统一展示四块主内容：
  - 核心问题。
  - 接口摩擦。
  - 代表公司。
  - 下一步研究。
- 保留 CAPEX / 价值捕获作为补充内容，但不再让弹窗结构发散。
- 新增矩阵层级代表公司与链条代表公司映射：
  - `matrixLayerCompanies`
  - `matrixChainCompanies`
  - `matrixCompanyList()`
- 矩阵交点代表公司按钮可直接跳转到【公司研究】并搜索对应公司。
- `matrix-deepdives.js` 继续动态生成 40 张卡，避免手工维护重复数据。
- 新增 `.matrix-company-link` 样式，统一弹窗内公司入口视觉。

验证：
- `script.js`、`matrix-deepdives.js` JS 语法校验通过。
- 40 个矩阵交点卡全部生成。
- 40 个交点均包含【核心问题 / 接口摩擦 / 代表公司 / 下一步研究】四个必需栏目。
- 矩阵代表公司引用全部能匹配公司池，缺失为 0。
- 全站 15 个 HTML 文件本地引用检查通过，缺失为 0。

## 2026-06-18 更新：P2 重点事实来源绑定增强

本轮继续 P2 主线增强，执行第四步【重点事实来源绑定增强】。

本轮调整：
- 给五层摘要卡新增 `sourceIds` 字段。
- 给八条产业链摘要卡新增 `sourceIds` 字段。
- 五层卡和产业链卡默认显示来源徽章，直接链接 Source Registry。
- 新增 `.summary-source-row` 样式，让来源锚点以低噪声方式出现在摘要卡底部。
- 给矩阵交点新增来源映射：
  - `matrixLayerSources`
  - `matrixChainSources`
  - `matrixSourceList()`
- 40 个矩阵交点自动合并层级来源与链条来源，并在弹窗中新增【Source Registry】栏目。
- 来源绑定优先使用官方公告、年报、工程博客、监管/机构框架等高可信来源。

验证：
- `script.js`、`matrix-deepdives.js`、`sources-data.js` JS 语法校验通过。
- 静态解析 `script.js` 与 `matrix-deepdives.js` 中 51 个 source 引用，缺失 Source ID 为 0。
- 40 个矩阵交点均带有 `sourceIds` 与【Source Registry】栏目。
- 全站 15 个 HTML 文件本地引用检查通过，缺失为 0。

## 2026-06-18 更新：P3.1 页面一致性收尾检查

本轮进入 P3 体验与一致性收尾，执行第一步【页面一致性检查】。

本轮调整：
- 首页版本标识从早期框架版更新为 `Research Terminal · 2026-06-18`。
- 首页说明文案从“第一版网站初稿”更新为当前研究终端状态。
- 页脚从“基础框架版”更新为“研究终端版”。
- 公司入口计数从 223 家修正为 224 家标的池。
- 复查当前活跃页面入口，确认已删除的独立词典页、前沿雷达、路线图没有继续作为首页主入口暴露。

验证：
- `script.js`、`matrix-deepdives.js`、`sources-data.js`、`page-sources.js`、`page-glossary.js` JS 语法校验通过。
- 活跃首页与页面目录未发现 `glossary.html`、`#roadmap`、`#radar` 等已下线入口残留。
- 全站 15 个 HTML 文件本地引用检查通过，缺失为 0。

## 2026-06-18 更新：P3.2 README 与项目状态文档收口

本轮继续 P3 收尾，执行第二步【README 与项目状态文档收口】。

本轮调整：
- 重写根目录 `README.md`，保留中英双语版本。
- README 从开发流水账改为产品说明书结构：
  - 项目定位。
  - 当前版本。
  - 核心框架。
  - 当前功能。
  - 当前数据规模。
  - 已收紧模块。
  - 光互联与 PCB 补强。
  - 目录结构。
  - 本地预览。
  - Git 留档。
  - 后续计划。
  - 免责声明。
- 移除 README 中 MiMo / 本地模型路由等与 AI 五层蛋糕网站留档无关的展开说明。
- 将 P3 状态更新为“体验一致性与文档收口已完成当前轮”，后续计划从 P3.3 公司研究页体验优化开始。
- 英文版同步更新相同结构和状态。

验证：
- README 已不再出现 `Framework v0.1`、`基础框架版`、`公司池从 200 家扩展到 223` 等旧状态表述。
- README 保留当前关键数字：224 家公司、177 条来源、203 张深度卡、40 个矩阵交点、7 张同业表、213 行、缺失 Source ID 为 0。

## 2026-06-18 更新：P3.2B 对外页面文案清洗

用户指出页面仍存在“第一版网站初稿、后续填充”等不适合大众展示的表达。本轮执行对外页面文案清洗。

本轮调整：
- 首页 hero 文案从“完成后续重点”类表达改为成熟研究终端表述。
- 矩阵说明从“可继续扩写、后续版本”改为“独立研究单元、点击查看关键问题和接口摩擦”。
- 将模型评测记录方式、通用知识卡兜底、同业表展开、敏感性变量公司弹窗中的“后续补强 / 待补充”改为“研究扩展 / 未覆盖 / 需来源核验”等专业表达。
- 术语弹窗兜底说明改为“需结合上下文、来源和关联产业链进一步核验”。
- 来源页说明改为“追踪关键事实的出处、适用范围和核验边界”。
- 深度页中非必要的“后续”措辞改为更中性的事实表达。

验证：
- 活跃用户可见页面和前端脚本中已无 `第一版`、`初稿`、`后续`、`待补`、`待填`、`空壳` 等不成熟占位表达。
- `script.js`、`glossary.js`、`page-sources.js` JS 语法校验通过。
- 全站 15 个 HTML 文件本地引用检查通过，缺失为 0。
