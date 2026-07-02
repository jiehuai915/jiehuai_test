const layers = [
  {
    name: "应用层",
    number: "Layer 05",
    thesis: "承接真实用户任务，是现金流、数据反馈和商业模式发生的地方。",
    status: "当前行业现状：AI 应用从聊天框进入工作流执行，企业端最关心权限、审计、ROI 和系统集成；个人端由搜索、编程、办公、内容生产率先成熟。",
    bottleneck: "从“能演示”到“能稳定替人完成业务动作”的鸿沟：权限、审计、集成成本、责任边界和真实 ROI 是最大摩擦。",
    representativeCompanies: ["Microsoft", "Salesforce", "ServiceNow", "Tesla", "Alibaba Group"],
    keyChains: ["企业 AI 落地链", "Agent 智能体协同链", "具身智能链"],
    sourceIds: ["openai-codex", "github-copilot-coding-agent", "salesforce-agentforce-3", "servicenow-ai-official"],
    foundation: "软件工程、组织流程、权限审计、用户体验、任务经济学。",
    segments: ["AI Agent", "办公", "编程", "医疗", "金融", "工业", "机器人", "自动驾驶"],
    metrics: ["任务完成率", "留存", "ROI", "数据闭环", "集成深度"],
    frontier: ["Agent 原生工作流", "AI 编程工作台", "垂直行业 Autopilot", "具身智能应用"],
    glossary: ["MCP", "HITL", "Eval Harness", "Action Permissioning"],
    detailUrl: "pages/app.html"
  },
  {
    name: "模型层",
    number: "Layer 04",
    thesis: "把数据和算力压缩成可调用的智能能力，决定应用能力边界。",
    status: "当前行业现状：前沿模型进入 reasoning、多模态和工具使用阶段，竞争焦点从参数规模转向推理深度、单位 token 成本、上下文工程和 Agent 可控性。",
    bottleneck: "能力提升正在被推理成本、长上下文衰减、评测失真、数据版权和 Agent 可控性共同约束。",
    representativeCompanies: ["OpenAI", "Anthropic", "Alphabet / Google", "Meta Platforms", "DeepSeek"],
    keyChains: ["大模型训练链", "AI 推理服务链", "AI 安全与评测链"],
    sourceIds: ["openai-o3-o4-mini", "google-gemini-25", "anthropic-claude-37", "deepseek-r1"],
    foundation: "概率论、优化理论、Transformer、注意力机制、对齐和推理搜索。",
    segments: ["基础模型", "多模态", "小模型", "行业模型", "推理模型", "具身智能模型"],
    metrics: ["能力评测", "推理成本", "延迟", "上下文长度", "安全性"],
    frontier: ["o1/o3 类 Reasoning Model", "Prefill/Decode 分离", "KV Cache 优化", "多模态与世界模型"],
    glossary: ["Test-Time Compute", "KV Cache", "Speculative Decoding", "Context Wall"],
    detailUrl: "pages/model.html"
  },
  {
    name: "基础设施层",
    number: "Layer 03",
    thesis: "把芯片组织成可训练、可推理、可运维、可售卖的 AI 工厂。",
    status: "当前行业现状：云厂商和 GPU 云正在建设 AI Factory，行业瓶颈从单卡性能转向集群网络、液冷、高可用调度、推理服务成本和 GPU 利用率。",
    bottleneck: "集群可用性和单位 token 成本成为核心矛盾：网络拥塞、液冷运维、调度效率、存储 checkpoint 和 MTBF 都会吞掉账面算力。",
    representativeCompanies: ["CoreWeave", "Amazon", "Microsoft", "Vertiv", "Marvell"],
    keyChains: ["AI 数据中心链", "AI 推理服务链", "大模型训练链"],
    sourceIds: ["openai-stargate", "xai-colossus", "meta-llama-24k", "nvidia-gb200-nvl72"],
    foundation: "分布式系统、网络拓扑、并行计算、排队论、容错和热设计。",
    segments: ["数据中心", "云平台", "AI 工厂", "网络", "光互联", "PCB/背板", "存储", "液冷", "调度", "运维"],
    metrics: ["GPU 利用率", "PUE", "交付周期", "网络延迟", "光模块速率", "PCB 信号完整性", "可用性"],
    frontier: ["100K 卡级 AI Factory", "Scale-up/Scale-out 双网络", "800G/1.6T 光模块与 CPO", "高速 PCB/背板", "全液冷高密机柜", "推理云调度"],
    glossary: ["MFU/MBU", "MTBF", "Collective Communication", "CDU", "光模块", "CPO", "PCB"],
    detailUrl: "pages/infra.html"
  },
  {
    name: "芯片层",
    number: "Layer 02",
    thesis: "把电力变成计算，把算法需求变成硬件系统工程。",
    status: "当前行业现状：NVIDIA 仍掌握 GPU、网络、软件生态和机柜级系统主导权，真正的供给约束集中在 HBM、先进封装、基板、光互联和功耗散热。",
    bottleneck: "最硬瓶颈不是单一 GPU，而是 HBM、CoWoS、ABF 基板、光互联、供电散热和 CUDA 生态共同形成的系统级锁定。",
    representativeCompanies: ["NVIDIA", "TSMC", "SK hynix", "Broadcom", "Marvell"],
    keyChains: ["AI 芯片供应链", "大模型训练链", "AI 推理服务链"],
    sourceIds: ["nvidia-rubin-2026", "micron-hbm4-vera-rubin", "tsmc-2025-annual", "broadcom-cpo-official"],
    foundation: "半导体物理、CMOS、摩尔定律、存储墙、光刻、封装和良率工程。",
    segments: ["GPU", "CPU", "ASIC", "HBM", "网络芯片", "光模块", "服务器", "半导体设备"],
    metrics: ["性能功耗比", "HBM 带宽", "先进封装产能", "互联带宽", "软件生态"],
    frontier: ["Rubin/Vera Rubin", "HBM4", "CoWoS-L/R", "推理 ASIC 与硅光互联"],
    glossary: ["CoWoS-L", "HBM4", "NVLink 6", "CPO"],
    detailUrl: "pages/silicon.html"
  },
  {
    name: "能源层",
    number: "Layer 01",
    thesis: "AI 最底层的稀缺资源，决定数据中心选址、规模和长期成本。",
    status: "当前行业现状：电力已成为 AI 扩张的第一物理瓶颈，云厂商开始通过长期 PPA、核能合作、表后供电和高密液冷来锁定未来算力产能。",
    bottleneck: "可交付电力容量比名义发电量更稀缺：并网队列、变电站设备、PPA 价格、低碳约束、水资源和选址周期共同决定 AI 数据中心上线速度。",
    representativeCompanies: ["Constellation Energy", "NextEra Energy", "Vistra", "Vertiv", "Amazon"],
    keyChains: ["AI 数据中心链", "大模型训练链", "AI 推理服务链"],
    sourceIds: ["iea-energy-ai", "google-kairos", "amazon-x-energy", "constellation-microsoft-ppa"],
    foundation: "交流输电、三相平衡、频率稳定、热力学效率、基荷/峰荷调度。",
    segments: ["电力", "电网", "储能", "天然气", "核能", "可再生能源", "土地", "水资源"],
    metrics: ["电价", "接电周期", "电网容量", "绿电比例", "水资源"],
    frontier: ["SMR 核能直连", "Behind-the-Meter", "长期 PPA", "电力-冷却一体化"],
    glossary: ["PPA", "Interconnection Queue", "SMR", "PUE/WUE"],
    detailUrl: "pages/power.html"
  }
];

const chains = [
  {
    title: "大模型训练链",
    desc: "从数据与算力供给到基础模型产出，适合分析训练集群、模型能力和资本开支。",
    path: ["数据", "HBM/GPU", "AI 服务器", "高速网络", "数据中心", "分布式训练", "基础模型"],
    friction: "核心摩擦是多机多卡通信、checkpoint、数据管线和故障恢复。账面 GPU 数量不等于有效训练吞吐，MFU/MBU 与 MTBF 决定真实产出。",
    valueCapture: "价值主要被 GPU/HBM/先进封装、高速网络、AI 服务器、GPU 云和基础模型平台捕获。",
    representativeCompanies: ["NVIDIA", "TSMC", "SK hynix", "Broadcom", "CoreWeave"],
    companyFilter: "训练链",
    sourceIds: ["meta-llama-24k", "nvidia-rubin-2026", "skhynix-official", "broadcom-cpo-official"],
    detailUrl: "pages/training-chain.html",
    nodeUrls: {
      "数据": "pages/training-chain.html#data",
      "HBM/GPU": "pages/training-chain.html#silicon",
      "AI 服务器": "pages/training-chain.html#servers",
      "高速网络": "pages/training-chain.html#network",
      "数据中心": "pages/training-chain.html#datacenter",
      "分布式训练": "pages/training-chain.html#distributed-training",
      "基础模型": "pages/training-chain.html#foundation-model"
    }
  },
  {
    title: "AI 推理服务链",
    desc: "从用户请求到模型响应，适合分析推理成本、延迟、并发和模型部署效率。",
    path: ["用户请求", "应用", "模型路由", "推理引擎", "GPU/ASIC", "推理云", "响应"],
    friction: "核心摩擦是 TTFT、P99 延迟、KV Cache 占用、Prefill/Decode 分离和长思考模型带来的 token 膨胀。",
    valueCapture: "价值主要被推理芯片、推理 runtime、模型路由、GPU 云、缓存调度和高频应用入口捕获。",
    representativeCompanies: ["NVIDIA", "Groq", "Cerebras", "Together AI", "Fireworks AI"],
    companyFilter: "推理链",
    sourceIds: ["nvidia-dynamo", "openai-o3-o4-mini", "cloudflare-ai-official"],
    detailUrl: "pages/inference-chain.html",
    nodeUrls: {
      "用户请求": "pages/inference-chain.html#request",
      "应用": "pages/inference-chain.html#application",
      "模型路由": "pages/inference-chain.html#router",
      "推理引擎": "pages/inference-chain.html#engine",
      "GPU/ASIC": "pages/inference-chain.html#silicon",
      "推理云": "pages/inference-chain.html#cloud",
      "响应": "pages/inference-chain.html#response"
    }
  },
  {
    title: "AI 数据中心链",
    desc: "从土地、电力到机柜、液冷和运维，适合分析 AI 工厂建设和电力瓶颈。",
    path: ["土地", "电力", "建筑", "机柜", "液冷", "服务器", "网络", "运维"],
    friction: "核心摩擦是并网排队、PPA、电力设备交付、100kW+ 机柜配电、液冷改造、漏液风险和长期运维能力。",
    valueCapture: "价值主要被电力资源、数据中心资产、液冷/配电、AI 服务器 ODM、网络设备和运维平台捕获。",
    representativeCompanies: ["Vertiv", "Amazon", "Microsoft", "Equinix", "Digital Realty"],
    companyFilter: "数据中心链",
    sourceIds: ["iea-energy-ai", "nvidia-gb200-nvl72", "openai-stargate", "vertiv-official"],
    detailUrl: "pages/datacenter-chain.html",
    nodeUrls: {
      "土地": "pages/datacenter-chain.html#site-selection",
      "电力": "pages/datacenter-chain.html#grid-ppa",
      "建筑": "pages/datacenter-chain.html#building",
      "机柜": "pages/datacenter-chain.html#rack-power",
      "液冷": "pages/datacenter-chain.html#liquid-cooling",
      "服务器": "pages/datacenter-chain.html#servers",
      "网络": "pages/datacenter-chain.html#network",
      "运维": "pages/datacenter-chain.html#operations"
    }
  },
  {
    title: "AI 芯片供应链",
    desc: "从设计工具到封装、HBM、板卡和整机，适合分析硬件瓶颈和国产替代。",
    path: ["EDA/IP", "芯片设计", "晶圆制造", "先进封装", "HBM", "板卡", "服务器"],
    friction: "核心摩擦是先进制程、CoWoS/SoIC、HBM 供给、ABF 基板、测试时间、良率和软件生态迁移。",
    valueCapture: "价值主要被 EDA/IP、晶圆代工、HBM、先进封装、封装设备、基板材料和整机系统捕获。",
    representativeCompanies: ["NVIDIA", "TSMC", "SK hynix", "ASML", "Applied Materials"],
    companyFilter: "芯片供应链",
    sourceIds: ["tsmc-2025-annual", "micron-hbm4-vera-rubin", "skhynix-official", "applied-materials-official"],
    detailUrl: "pages/semiconductor-chain.html",
    nodeUrls: {
      "EDA/IP": "pages/semiconductor-chain.html#eda-ip",
      "芯片设计": "pages/semiconductor-chain.html#design",
      "晶圆制造": "pages/semiconductor-chain.html#foundry",
      "先进封装": "pages/semiconductor-chain.html#packaging",
      "HBM": "pages/semiconductor-chain.html#hbm",
      "板卡": "pages/semiconductor-chain.html#board",
      "服务器": "pages/semiconductor-chain.html#server"
    }
  },
  {
    title: "企业 AI 落地链",
    desc: "从企业数据到 Agent 执行业务任务，适合分析行业应用、权限、安全和 ROI。",
    path: ["企业数据", "数据治理", "RAG", "权限系统", "行业模型", "Agent", "业务系统"],
    friction: "核心摩擦是遗留数据质量、权限隔离、幻觉率、系统集成 TCO、流程改造阻力和早期 ROI 不确定。",
    valueCapture: "价值主要被企业软件入口、数据平台、RAG/搜索、工作流编排、安全权限和行业解决方案捕获。",
    representativeCompanies: ["Microsoft", "ServiceNow", "Salesforce", "Palantir", "Snowflake"],
    companyFilter: "企业落地链",
    sourceIds: ["salesforce-agentforce-3", "servicenow-ai-official", "palantir-aip-official", "snowflake-cortex-official"],
    detailUrl: "pages/enterprise-chain.html",
    nodeUrls: {
      "企业数据": "pages/enterprise-chain.html#legacy-data",
      "数据治理": "pages/enterprise-chain.html#governance",
      "RAG": "pages/enterprise-chain.html#rag",
      "权限系统": "pages/enterprise-chain.html#permissions",
      "行业模型": "pages/enterprise-chain.html#vertical-model",
      "Agent": "pages/enterprise-chain.html#agent",
      "业务系统": "pages/enterprise-chain.html#business-system"
    }
  },
  {
    title: "具身智能链",
    desc: "从传感器和本体到模型、仿真和真实部署，适合分析机器人和自动驾驶。",
    path: ["传感器", "执行器", "机器人本体", "具身模型", "仿真训练", "场景部署"],
    friction: "核心摩擦是 Sim-to-Real 数据鸿沟、端侧低延迟推理、执行器成本、可靠性、量产良率和真实场景安全。",
    valueCapture: "价值主要被本体平台、执行器/减速器、传感器、端侧芯片、仿真软件和高频落地场景捕获。",
    representativeCompanies: ["Tesla", "Unitree", "UBTECH", "Figure AI", "Harmonic Drive Systems"],
    companyFilter: "机器人链",
    sourceIds: ["google-gemini-robotics", "nvidia-gr00t-n1", "figure-ai-official", "unitree-official"],
    detailUrl: "pages/embodied-chain.html",
    nodeUrls: {
      "传感器": "pages/embodied-chain.html#sensors",
      "执行器": "pages/embodied-chain.html#actuators",
      "机器人本体": "pages/embodied-chain.html#body",
      "具身模型": "pages/embodied-chain.html#model",
      "仿真训练": "pages/embodied-chain.html#simulation",
      "场景部署": "pages/embodied-chain.html#deployment"
    }
  },
  {
    title: "Agent 智能体协同链",
    desc: "从基础模型到工具调用、记忆、权限和人类在环，适合分析企业 Agent 的可控执行。",
    path: ["基础模型", "Planning", "Memory", "Tools/MCP", "Sandbox", "HITL", "Audit"],
    friction: "核心摩擦是长上下文衰减、工具调用不确定、循环失控、权限边界、可观测性和人类审批成本。",
    valueCapture: "价值主要被基础模型、Agent runtime、企业系统连接器、权限审计、沙箱和工作流入口捕获。",
    representativeCompanies: ["OpenAI", "Anthropic", "Microsoft", "ServiceNow", "Salesforce"],
    companyFilter: "Agent链",
    sourceIds: ["openai-codex", "salesforce-agentforce-3", "langchain-langsmith-official", "servicenow-ai-official"],
    detailUrl: "pages/agent-chain.html",
    nodeUrls: {
      "基础模型": "pages/agent-chain.html#foundation-model",
      "Planning": "pages/agent-chain.html#planning",
      "Memory": "pages/agent-chain.html#memory",
      "Tools/MCP": "pages/agent-chain.html#tools",
      "Sandbox": "pages/agent-chain.html#sandbox",
      "HITL": "pages/agent-chain.html#hitl",
      "Audit": "pages/agent-chain.html#audit"
    }
  },
  {
    title: "AI 安全与评测链",
    desc: "从数据合规到红队、动态评测和运行时护栏，适合分析 AI 上线风险和监管。",
    path: ["数据合规", "Guardrails", "RLHF/RLAIF", "Red Teaming", "Benchmark", "Runtime 审查"],
    friction: "核心摩擦是推理阶段隐藏攻击、Prompt Injection、评测集污染、合成数据偏差、运行时审计和合规责任边界。",
    valueCapture: "价值主要被安全框架、红队评测、LLM 可观测、运行时网关、权限治理和合规模型平台捕获。",
    representativeCompanies: ["Anthropic", "OpenAI", "Datadog", "Cloudflare", "CrowdStrike"],
    companyFilter: "安全评测链",
    sourceIds: ["nist-ai-rmf", "openai-preparedness", "crowdstrike-charlotte-official", "datadog-llm-observability-official"],
    detailUrl: "pages/safety-chain.html",
    nodeUrls: {
      "数据合规": "pages/safety-chain.html#data-compliance",
      "Guardrails": "pages/safety-chain.html#guardrails",
      "RLHF/RLAIF": "pages/safety-chain.html#alignment",
      "Red Teaming": "pages/safety-chain.html#red-team",
      "Benchmark": "pages/safety-chain.html#benchmark",
      "Runtime 审查": "pages/safety-chain.html#runtime"
    }
  }
];

const matrixRows = ["能源层", "芯片层", "基础设施层", "模型层", "应用层"];
const matrixCols = [
  "训练链",
  "推理链",
  "企业落地链",
  "数据中心链",
  "芯片供应链",
  "机器人链",
  "Agent链",
  "安全评测链"
];

const contentCategories = [
  {
    key: "overview",
    name: "总览",
    description: "五层与八链的核心逻辑",
    panelId: "logic"
  },
  {
    key: "matrix",
    name: "双维矩阵",
    description: "40 个横纵交点",
    panelId: "matrix"
  },
  {
    key: "layers",
    name: "五层框架",
    description: "能源到应用",
    panelId: "layers"
  },
  {
    key: "chains",
    name: "横向产业链",
    description: "八条价值流",
    panelId: "chains"
  },
  {
    key: "companies",
    name: "公司卡",
    description: "224 家标的池",
    panelId: "companies"
  },
  {
    key: "comparison",
    name: "对比表",
    description: "同业横向比较",
    panelId: "peer-comparison"
  },
  {
    key: "kpis",
    name: "KPI",
    description: "CAPEX 与效率指标",
    panelId: "kpis"
  },
  {
    key: "sensitivity",
    name: "敏感性",
    description: "估值与 CAPEX 变量",
    panelId: "sensitivity"
  },
  {
    key: "search",
    name: "搜索",
    description: "跨模块检索",
    panelId: "search"
  },
  {
    key: "links",
    name: "层间联系",
    description: "价值传导关系",
    panelId: "links"
  }
];

const matrixCells = {
  "能源层|训练链": "训练集群的电力容量、基荷与冷却约束。",
  "能源层|推理链": "推理负载持续化，电价直接影响 token 毛利。",
  "能源层|企业落地链": "私有化部署与边缘机房的能耗和合规。",
  "能源层|数据中心链": "PPA、并网、变电站、液冷水资源。",
  "能源层|芯片供应链": "晶圆厂、封装厂与 HBM 厂的高耗能制造。",
  "能源层|机器人链": "端侧功耗、充电基础设施和工业场景电力。",
  "能源层|Agent链": "大规模自动化调用带来的持续推理电力需求。",
  "能源层|安全评测链": "红队和评测集群的算力与数据驻留要求。",
  "芯片层|训练链": "GPU、HBM、NVLink、CoWoS 决定训练上限。",
  "芯片层|推理链": "显存带宽、KV Cache、ASIC 决定单位 token 成本。",
  "芯片层|企业落地链": "私有部署硬件、端侧芯片、数据隔离。",
  "芯片层|数据中心链": "服务器、网卡、光模块、电源与热设计。",
  "芯片层|芯片供应链": "EDA、先进制程、HBM4、先进封装。",
  "芯片层|机器人链": "端侧 SoC、传感器、执行器控制芯片。",
  "芯片层|Agent链": "高并发工具调用推理芯片与网络 IO。",
  "芯片层|安全评测链": "安全沙箱、隔离推理和可信硬件。",
  "基础设施层|训练链": "万卡调度、网络拥塞、checkpoint 与 MTBF。",
  "基础设施层|推理链": "Prefill/Decode 分离、缓存、路由、P99 延迟。",
  "基础设施层|企业落地链": "混合云、权限、连接器和运维可靠性。",
  "基础设施层|数据中心链": "AI Factory 的工程总包和长期运维。",
  "基础设施层|芯片供应链": "整机、机柜、网络与液冷集成。",
  "基础设施层|机器人链": "仿真平台、数据采集、边缘云协同。",
  "基础设施层|Agent链": "Agent runtime、状态管理、可观测性。",
  "基础设施层|安全评测链": "评测平台、日志、审计、隔离环境。",
  "模型层|训练链": "预训练、后训练、合成数据与评测闭环。",
  "模型层|推理链": "Reasoning token、模型路由和解码优化。",
  "模型层|企业落地链": "RAG、GraphRAG、行业微调与幻觉控制。",
  "模型层|数据中心链": "模型负载形态决定训练/推理集群设计。",
  "模型层|芯片供应链": "模型结构反向定义显存、带宽和互联需求。",
  "模型层|机器人链": "VLA、世界模型、Sim-to-Real。",
  "模型层|Agent链": "Planning、Memory、Tool Calling、长期任务。",
  "模型层|安全评测链": "对齐、红队、隐藏 CoT 攻击。",
  "应用层|训练链": "应用反馈数据回流，形成下一轮训练资产。",
  "应用层|推理链": "用户体验、响应时间、并发与成本控制。",
  "应用层|企业落地链": "真实业务系统、ROI、组织变革。",
  "应用层|数据中心链": "爆款应用拉动推理算力扩容。",
  "应用层|芯片供应链": "应用负载定义端侧/云端芯片需求。",
  "应用层|机器人链": "制造、仓储、巡检、自动驾驶落地。",
  "应用层|Agent链": "数字员工、工作流自动化、动作权限。",
  "应用层|安全评测链": "合规、责任边界、审计和上线门槛。"
};

const links = [
  ["能源 → 基础设施", "电力资源影响数据中心选址、建设周期、PUE 和长期运营成本。"],
  ["芯片 → 基础设施", "GPU、ASIC、HBM、网络和服务器组合成可交付的 AI 集群。"],
  ["基础设施 → 模型", "算力规模、训练稳定性和推理成本限制模型能力与商业化速度。"],
  ["模型 → 应用", "模型通过 API、私有部署、RAG、工具调用和 Agent 编排进入业务场景。"],
  ["应用 → 模型", "用户行为和任务反馈形成专有数据，反过来改进模型与产品壁垒。"],
  ["应用 → 基础设施", "应用使用量变成 token 需求，长期拉动推理算力和边缘部署。"]
];

const energyDeepDive = {
  thesis: "AI 能源层的核心不是“总发电量够不够”，而是能否在数据中心所在节点交付连续、低碳、低延迟扩容的电力容量。",
  facts: [
    "IEA 2026 报告：2025 年全球数据中心用电增长 17%，其中 AI 专用数据中心用电增长 33%；数据中心在全球电力需求中的占比约 1.5%。",
    "Google 与 Kairos Power 签署协议，计划到 2035 年部署 500MW 先进核能，用于支持 AI 和数据中心负载。",
    "Amazon 宣布投资 X-energy，并表示相关合作目标是在美国部署超过 5GW 新核能项目。",
    "Microsoft 与 Constellation 签署 20 年购电协议，推动 Three Mile Island 1 号机组重启，为数据中心供电。"
  ],
  fundamentals: [
    {
      title: "电力实时平衡",
      body: "电网频率必须在发电与负载之间实时平衡。AI 数据中心是高连续性、高功率密度负载，不能像普通互联网流量那样只靠弹性调度解决。"
    },
    {
      title: "交流输电与三相系统",
      body: "大规模电力通过高压交流或直流输送，落地到数据中心时要经过变电站、变压器、开关柜、UPS 和母线系统。瓶颈常常卡在接入容量和设备交付周期。"
    },
    {
      title: "热力学与冷却",
      body: "GPU 消耗的电最终几乎全部变成热。机柜功率密度越高，风冷越难支撑，液冷、CDU、水资源和热回收就成为基础设施约束。"
    },
    {
      title: "基荷与峰荷",
      body: "训练负载偏阶段性高峰，推理负载偏持续在线。AI 越进入应用层，能源需求越从周期性 capex 变成持续性 opex。"
    }
  ],
  frontiers: [
    {
      title: "SMR / 先进核能直连",
      body: "云厂商提前锁定 2030 年后的清洁基荷电力。Google-Kairos、Amazon-X-energy、Microsoft-Constellation 说明核能从 ESG 叙事变成 AI 基础设施期权。"
    },
    {
      title: "Behind-the-Meter 自备电厂",
      body: "数据中心与燃气轮机、储能、微电网或核能共址，绕开公共电网扩容排队。核心收益是交付速度和供电确定性。"
    },
    {
      title: "长期 PPA 与电力金融化",
      body: "AI 公司用长期购电协议锁定电价、容量和低碳属性。电力从成本项变成战略资产，PPA 质量会影响云厂商长期毛利。"
    },
    {
      title: "电力-冷却一体化工程",
      body: "高密机柜推动变电站、UPS、母线槽、CDU、冷板液冷、水路监控一起设计。能源层与基础设施层正在合并成一门系统工程。"
    }
  ],
  glossary: [
    ["PPA", "Power Purchase Agreement，长期购电协议；决定数据中心未来十年的电价曲线、低碳属性和容量确定性。"],
    ["Interconnection Queue", "并网排队；很多项目不是缺资本，而是等不到电网接入容量。"],
    ["Behind-the-Meter", "表后供电；发电资产直接服务数据中心，绕过部分公共电网瓶颈。"],
    ["SMR", "Small Modular Reactor，小型模块化反应堆；AI 基荷电力的远期技术期权。"],
    ["PUE / WUE", "电力使用效率与水资源效率；液冷时代仍是监管、选址和运营成本的关键指标。"],
    ["Load Factor", "负载率；推理负载常态化后，数据中心电力需求更接近工业基荷。"]
  ],
  bottlenecks: [
    "可交付电力容量，而不是抽象发电量。",
    "变压器、高压开关柜、输电线路和变电站交付周期。",
    "Interconnection Queue 导致数据中心项目排队。",
    "100kW+ 机柜密度下的液冷可靠性、漏液风险和运维标准。",
    "水资源、环境许可、社区阻力和低碳承诺之间的冲突。"
  ],
  players: {
    giants: [
      ["NextEra Energy", "可再生能源、输配电与长期电力资产开发能力。"],
      ["Constellation Energy", "美国核电资产与大型 PPA 能力，Microsoft 协议使其成为 AI 电力核心标的之一。"],
      ["Vistra", "调峰、燃气、核能与电力市场暴露度。"],
      ["GE Vernova", "燃气轮机、电网设备与电力工程。"],
      ["Schneider Electric / Eaton / Siemens / ABB", "配电、开关柜、UPS、自动化和电气系统集成。"]
    ],
    champions: [
      ["Kairos Power", "先进核能与 Google 500MW 合作路线。"],
      ["X-energy", "Amazon 投资支持的 SMR 路线，目标部署超过 5GW 新核能项目。"],
      ["Oklo / NuScale", "小型核反应堆商业化路线，仍需监管和项目验证。"],
      ["Vertiv", "UPS、热管理、液冷与数据中心电力基础设施。"],
      ["Fluence / Tesla Energy", "电池储能与电网侧灵活性。"],
      ["Bloom Energy", "燃料电池与表后供电方案。"]
    ]
  },
  moat: [
    "电力接入权、土地、并网许可和水资源是最强准入壁垒。",
    "长期 PPA 和大型云客户合同带来现金流可见性。",
    "高压配电、UPS、液冷、运维标准形成工程经验曲线。",
    "AI 数据中心会把能源公司、IDC、云厂商和设备商的边界重新打散。"
  ],
  sources: [
    ["IEA - Energy and AI executive summary", "https://www.iea.org/reports/energy-and-ai/executive-summary"],
    ["Google - Kairos Power nuclear agreement", "https://blog.google/outreach-initiatives/sustainability/google-kairos-power-nuclear-energy-agreement/"],
    ["Amazon - Nuclear energy projects and X-energy", "https://www.aboutamazon.com/news/sustainability/amazon-nuclear-small-modular-reactor-net-carbon-zero"],
    ["Constellation - Crane Clean Energy Center / Microsoft PPA", "https://www.constellationenergy.com/newsroom/2024/Constellation-launches-Crane-Clean-Energy-Center-restoring-jobs-and-carbon-free-power-to-The-Grid.html"]
  ]
};

const knowledgeCards = {
  "大模型训练链": {
    kicker: "横向产业链 · Training Chain",
    title: "大模型训练链",
    summary: "训练链把数据、电力、GPU/HBM、网络、存储、调度和算法压缩成基础模型能力，是前沿模型竞争的资本开支主战场。",
    url: "pages/training-chain.html#status",
    sections: [
      ["拓扑流向", ["数据/标注 → HBM/先进封装 → 高密 AI 服务器 → 高速交换机/光模块 → 超大集群调度 → 基础模型。"]],
      ["2026 核心痛点", ["集体通信开销、MFU/MBU、MTBF、Checkpoint I/O、HBM/CoWoS 产能、电力与液冷交付。"]],
      ["价值捕获", ["GPU/HBM/CoWoS、网络与光模块、AI 数据中心、GPU 云、数据工程和训练软件。"]]
    ]
  },
  "能源层 × 训练链": {
    kicker: "矩阵交点 · 训练链",
    title: "能源层 × 训练链",
    summary: "训练集群的规模上限首先受可交付电力容量、并网周期、PPA、冷却和土地约束。",
    url: "pages/training-chain.html#datacenter"
  },
  "芯片层 × 训练链": {
    kicker: "矩阵交点 · 训练链",
    title: "芯片层 × 训练链",
    summary: "GPU、HBM、CoWoS、NVLink、网络芯片和光模块共同决定训练吞吐上限。",
    url: "pages/training-chain.html#silicon"
  },
  "基础设施层 × 训练链": {
    kicker: "矩阵交点 · 训练链",
    title: "基础设施层 × 训练链",
    summary: "AI Factory 的网络、存储、液冷、调度和运维决定万卡/十万卡训练是否稳定运行。",
    url: "pages/training-chain.html#distributed-training"
  },
  "模型层 × 训练链": {
    kicker: "矩阵交点 · 训练链",
    title: "模型层 × 训练链",
    summary: "预训练、后训练、数据配比、合成数据和评测闭环决定训练资本开支能否转化为真实模型能力。",
    url: "pages/training-chain.html#foundation-model"
  },
  "应用层 × 训练链": {
    kicker: "矩阵交点 · 训练链",
    title: "应用层 × 训练链",
    summary: "应用层产生的用户行为、任务反馈和行业数据会反哺下一轮训练，形成数据飞轮。",
    url: "pages/training-chain.html#data"
  },
  "AI 推理服务链": {
    kicker: "横向产业链 · Inference Chain",
    title: "AI 推理服务链",
    summary: "推理链把模型能力包装成低延迟、可计费、可扩展的 token 服务，是 AI 商业化毛利和用户体验的主战场。",
    url: "pages/inference-chain.html#status",
    sections: [
      ["拓扑流向", ["用户请求 → 应用入口 → 模型路由 → 推理引擎 → GPU/ASIC → 推理云 → 响应。"]],
      ["2026 核心痛点", ["TTFT、P99、reasoning token 爆炸、KV Cache 显存占用、prefill/decode 资源错配、batching 与 SLA 冲突。"]],
      ["价值捕获", ["推理芯片、推理运行时、模型路由、推理云、缓存与上下文基础设施、评测治理。"]]
    ]
  },
  "能源层 × 推理链": {
    kicker: "矩阵交点 · 推理链",
    title: "能源层 × 推理链",
    summary: "推理负载持续在线，电价、PUE、负载率和区域电力容量会直接进入每 token 毛利。",
    url: "pages/inference-chain.html#capex"
  },
  "芯片层 × 推理链": {
    kicker: "矩阵交点 · 推理链",
    title: "芯片层 × 推理链",
    summary: "显存容量、HBM 带宽、ASIC/TPU 架构和每瓦 token 产出决定推理服务成本下限。",
    url: "pages/inference-chain.html#silicon"
  },
  "基础设施层 × 推理链": {
    kicker: "矩阵交点 · 推理链",
    title: "基础设施层 × 推理链",
    summary: "模型路由、KV Cache、batch 调度、prefill/decode 解耦和多租户隔离决定 P99 与 GPU 利用率。",
    url: "pages/inference-chain.html#engine"
  },
  "模型层 × 推理链": {
    kicker: "矩阵交点 · 推理链",
    title: "模型层 × 推理链",
    summary: "Reasoning model、上下文长度、工具调用和模型大小共同决定推理 token 消耗与任务质量。",
    url: "pages/inference-chain.html#router"
  },
  "应用层 × 推理链": {
    kicker: "矩阵交点 · 推理链",
    title: "应用层 × 推理链",
    summary: "应用层的响应时间、任务完成率、并发峰值和成本上限会反向定义推理架构。",
    url: "pages/inference-chain.html#application"
  },
  "企业 AI 落地链": {
    kicker: "横向产业链 · Enterprise AI Chain",
    title: "企业 AI 落地链",
    summary: "企业落地链把遗留数据、权限、RAG、行业模型、Agent 和业务系统接成可审计、可回写、可衡量 ROI 的生产工作流。",
    url: "pages/enterprise-chain.html#status",
    sections: [
      ["拓扑流向", ["企业数据 → 数据治理/向量化 → RAG/GraphRAG → 权限系统 → 行业模型 → Agent → ERP/CRM/ITSM。"]],
      ["2026 核心痛点", ["幻觉率、权限继承、多租户隔离、数据驻留、系统集成 TCO、早期 ROI 和组织采纳。"]],
      ["价值捕获", ["系统入口、数据平台、连接器、Agent 编排、行业工作流、安全审计与咨询集成。"]]
    ]
  },
  "能源层 × 企业落地链": {
    kicker: "矩阵交点 · 企业落地链",
    title: "能源层 × 企业落地链",
    summary: "企业私有部署、边缘机房和混合云会把能耗、机房合规和推理成本带入项目 TCO。",
    url: "pages/enterprise-chain.html#capex"
  },
  "芯片层 × 企业落地链": {
    kicker: "矩阵交点 · 企业落地链",
    title: "芯片层 × 企业落地链",
    summary: "企业部署会在云端 GPU、私有推理服务器、端侧 SoC 和安全隔离硬件之间权衡。",
    url: "pages/enterprise-chain.html#vertical-model"
  },
  "基础设施层 × 企业落地链": {
    kicker: "矩阵交点 · 企业落地链",
    title: "基础设施层 × 企业落地链",
    summary: "混合云、连接器、权限同步、日志审计、RAG 索引和多租户隔离决定企业 AI 是否能进生产。",
    url: "pages/enterprise-chain.html#governance"
  },
  "模型层 × 企业落地链": {
    kicker: "矩阵交点 · 企业落地链",
    title: "模型层 × 企业落地链",
    summary: "RAG、GraphRAG、行业微调、模型路由和幻觉控制决定企业应用质量和责任边界。",
    url: "pages/enterprise-chain.html#rag"
  },
  "应用层 × 企业落地链": {
    kicker: "矩阵交点 · 企业落地链",
    title: "应用层 × 企业落地链",
    summary: "企业 AI 的价值最终在 CRM、ERP、ITSM、财务、客服和 HR 等真实流程中兑现。",
    url: "pages/enterprise-chain.html#business-system"
  },
  "AI 数据中心链": {
    kicker: "横向产业链 · AI Data Center Chain",
    title: "AI 数据中心链",
    summary: "数据中心链把土地、电网、PPA、机房、配电、UPS、液冷、机柜级系统和运维组织成可交付算力。",
    url: "pages/datacenter-chain.html#status",
    sections: [
      ["拓扑流向", ["土地/选址 → 变电站接入/PPA → 机房建筑 → 高压配电/UPS → CDU/液冷 → 服务器机柜 → 网络 → 运维。"]],
      ["2026 核心痛点", ["并网排队、长周期电气设备、100kW+ 机柜、液冷漏液风险、风冷机房改造、IT/Facility 责任边界。"]],
      ["价值捕获", ["电力接入、土地卡位、高压配电、UPS、液冷、AI 机柜、数据中心开发、运维软件。"]]
    ]
  },
  "能源层 × 数据中心链": {
    kicker: "矩阵交点 · 数据中心链",
    title: "能源层 × 数据中心链",
    summary: "PPA、并网、变电站、备用电源、储能、水资源和土地许可决定 AI 数据中心能否按期投产。",
    url: "pages/datacenter-chain.html#grid-ppa"
  },
  "芯片层 × 数据中心链": {
    kicker: "矩阵交点 · 数据中心链",
    title: "芯片层 × 数据中心链",
    summary: "GB200/Rubin 类机柜级系统反向定义电源、液冷、网卡、背板、光模块和机柜工程。",
    url: "pages/datacenter-chain.html#servers"
  },
  "基础设施层 × 数据中心链": {
    kicker: "矩阵交点 · 数据中心链",
    title: "基础设施层 × 数据中心链",
    summary: "AI Factory 的机房、电力、液冷、网络、存储和运维能力决定可售算力交付速度。",
    url: "pages/datacenter-chain.html#operations"
  },
  "模型层 × 数据中心链": {
    kicker: "矩阵交点 · 数据中心链",
    title: "模型层 × 数据中心链",
    summary: "训练、推理、长上下文和 reasoning 负载形态会反向决定机柜密度、网络拓扑和冷却方案。",
    url: "pages/datacenter-chain.html#network"
  },
  "应用层 × 数据中心链": {
    kicker: "矩阵交点 · 数据中心链",
    title: "应用层 × 数据中心链",
    summary: "爆款应用和企业 SLA 会把 token 需求变成区域推理数据中心、边缘部署和多云容灾需求。",
    url: "pages/datacenter-chain.html#capex"
  },
  "AI 芯片供应链": {
    kicker: "横向产业链 · Semiconductor Chain",
    title: "AI 芯片供应链",
    summary: "芯片供应链把 EDA/IP、先进制程、先进封装、HBM、基板、测试、板卡和服务器整合成可交付 AI 加速器。",
    url: "pages/semiconductor-chain.html#status",
    sections: [
      ["拓扑流向", ["EDA/IP → 芯片设计 → 晶圆制造 → 先进封装 → HBM → 基板/测试 → 板卡/服务器。"]],
      ["2026 核心痛点", ["CoWoS/HBM 配套、5.5x reticle interposer、PDK/EDA 认证、known good die、先进封装良率、基板和测试时间。"]],
      ["价值捕获", ["EDA/IP、先进代工、HBM、半导体设备、基板/OSAT/ATE、整机系统集成。"]]
    ]
  },
  "能源层 × 芯片供应链": {
    kicker: "矩阵交点 · 芯片供应链",
    title: "能源层 × 芯片供应链",
    summary: "晶圆厂、HBM 厂、封装厂和测试厂都是高耗能资产，电力、水资源和区域政策会影响扩产。",
    url: "pages/semiconductor-chain.html#foundry"
  },
  "芯片层 × 芯片供应链": {
    kicker: "矩阵交点 · 芯片供应链",
    title: "芯片层 × 芯片供应链",
    summary: "EDA/IP、先进制程、CoWoS、HBM4、基板和测试共同决定 AI 芯片最终供给。",
    url: "pages/semiconductor-chain.html#topology"
  },
  "基础设施层 × 芯片供应链": {
    kicker: "矩阵交点 · 芯片供应链",
    title: "基础设施层 × 芯片供应链",
    summary: "AI 服务器、机柜、液冷、电源和网络把芯片供应链延伸到可部署 AI Factory。",
    url: "pages/semiconductor-chain.html#server"
  },
  "模型层 × 芯片供应链": {
    kicker: "矩阵交点 · 芯片供应链",
    title: "模型层 × 芯片供应链",
    summary: "模型结构、显存需求、互联需求和推理负载反向定义 HBM 容量、带宽、芯片架构和封装路线。",
    url: "pages/semiconductor-chain.html#hbm"
  },
  "应用层 × 芯片供应链": {
    kicker: "矩阵交点 · 芯片供应链",
    title: "应用层 × 芯片供应链",
    summary: "应用负载决定云端 GPU、推理 ASIC、端侧 SoC 和定制芯片需求结构。",
    url: "pages/semiconductor-chain.html#capex"
  },
  "具身智能链": {
    kicker: "横向产业链 · Embodied AI Chain",
    title: "具身智能与机器人链",
    summary: "具身智能链把多模态感知、端侧具身模型、实时规划控制、执行器/减速器、本体和真实世界反馈接成闭环。",
    url: "pages/embodied-chain.html#status",
    sections: [
      ["拓扑流向", ["多模态感知 → 执行器/电机/减速器 → 机器人本体 → VLA/世界模型 → 仿真训练 → 场景部署。"]],
      ["2026 核心痛点", ["Sim-to-Real、20ms 级低延迟、长时任务稳定性、本体成本、维护可靠性、真实数据闭环。"]],
      ["价值捕获", ["机器人基础模型、仿真平台、执行器和核心零部件、端侧计算、RaaS、真实数据飞轮。"]]
    ]
  },
  "能源层 × 机器人链": {
    kicker: "矩阵交点 · 机器人链",
    title: "能源层 × 机器人链",
    summary: "机器人端侧功耗、电池能量密度、充电基础设施和工业场景电力决定部署半径和运营成本。",
    url: "pages/embodied-chain.html#actuators"
  },
  "芯片层 × 机器人链": {
    kicker: "矩阵交点 · 机器人链",
    title: "芯片层 × 机器人链",
    summary: "端侧 SoC、传感器、MCU、实时控制芯片和电机驱动决定机器人低延迟感知与控制能力。",
    url: "pages/embodied-chain.html#model"
  },
  "基础设施层 × 机器人链": {
    kicker: "矩阵交点 · 机器人链",
    title: "基础设施层 × 机器人链",
    summary: "仿真平台、数据采集、遥操作、边缘云和部署运维系统决定机器人能否持续迭代。",
    url: "pages/embodied-chain.html#simulation"
  },
  "模型层 × 机器人链": {
    kicker: "矩阵交点 · 机器人链",
    title: "模型层 × 机器人链",
    summary: "VLA、世界模型、运动规划、模仿学习和强化学习决定机器人从看懂任务到执行动作的能力边界。",
    url: "pages/embodied-chain.html#model"
  },
  "应用层 × 机器人链": {
    kicker: "矩阵交点 · 机器人链",
    title: "应用层 × 机器人链",
    summary: "仓储、制造、巡检、护理和自动驾驶场景定义机器人 ROI、数据闭环和安全认证要求。",
    url: "pages/embodied-chain.html#deployment"
  },
  "Agent 智能体协同链": {
    kicker: "横向产业链 · Agentic Workflow Chain",
    title: "AI Agent 智能体协同链",
    summary: "Agent 链把基础模型、Planning、Memory、Tools/MCP、Sandbox、HITL 和 Audit 编排成可控执行系统。",
    url: "pages/agent-chain.html#status",
    sections: [
      ["拓扑流向", ["基础模型 → 目标拆解与规划 → 长短期记忆 → 工具调用/API → Sandbox → 多 Agent/HITL → Trace/Audit。"]],
      ["2026 核心痛点", ["长上下文衰减、工具选择错误、looping、非确定性、权限边界、MCP 供应链风险、状态恢复和审计。"]],
      ["价值捕获", ["Agent runtime、工具协议、记忆层、安全权限、评测观测、垂直 Agent 应用。"]]
    ]
  },
  "能源层 × Agent链": {
    kicker: "矩阵交点 · Agent链",
    title: "能源层 × Agent链",
    summary: "Agent 会增加持续推理和工具调用负载，长期拉动推理电力、缓存和区域部署需求。",
    url: "pages/agent-chain.html#capex"
  },
  "芯片层 × Agent链": {
    kicker: "矩阵交点 · Agent链",
    title: "芯片层 × Agent链",
    summary: "Agent 高并发、长上下文和工具调用会反向要求更高显存、KV Cache 承载和低延迟推理芯片。",
    url: "pages/agent-chain.html#foundation-model"
  },
  "基础设施层 × Agent链": {
    kicker: "矩阵交点 · Agent链",
    title: "基础设施层 × Agent链",
    summary: "Agent runtime、状态存储、sandbox、工具网关、trace 和可观测性决定 Agent 能否生产化。",
    url: "pages/agent-chain.html#sandbox"
  },
  "模型层 × Agent链": {
    kicker: "矩阵交点 · Agent链",
    title: "模型层 × Agent链",
    summary: "Reasoning、planning、memory、tool calling 和长上下文决定 Agent 的任务完成率和错误边界。",
    url: "pages/agent-chain.html#planning"
  },
  "应用层 × Agent链": {
    kicker: "矩阵交点 · Agent链",
    title: "应用层 × Agent链",
    summary: "数字员工、代码 agent、销售/客服/IT agent 最终在权限、审批、审计和 ROI 中兑现价值。",
    url: "pages/agent-chain.html#hitl"
  },
  "AI 安全与评测链": {
    kicker: "横向产业链 · Safety & Evaluation Chain",
    title: "AI 安全与评测链",
    summary: "安全评测链把数据合规、guardrails、RLHF/RLAIF、红队、benchmark 和运行时审查接成模型上线门槛。",
    url: "pages/safety-chain.html#status",
    sections: [
      ["拓扑流向", ["数据合规/版权清洗 → Guardrails → RLHF/RLAIF → Red Teaming → Dynamic Benchmark → Runtime 审查。"]],
      ["2026 核心痛点", ["隐藏 CoT 攻击、jailbreak、prompt injection、合成数据退化、评测污染、责任归属和跨区域合规。"]],
      ["价值捕获", ["安全评测平台、运行时护栏、数据溯源、Agent 行动审计、第三方认证、事故响应和保险。"]]
    ]
  },
  "能源层 × 安全评测链": {
    kicker: "矩阵交点 · 安全评测链",
    title: "能源层 × 安全评测链",
    summary: "大规模红队、私有评测和合规环境需要算力、电力、数据驻留和隔离基础设施。",
    url: "pages/safety-chain.html#benchmark"
  },
  "芯片层 × 安全评测链": {
    kicker: "矩阵交点 · 安全评测链",
    title: "芯片层 × 安全评测链",
    summary: "可信硬件、隔离推理、TEE、安全加速和模型水印会进入 AI 安全硬件需求。",
    url: "pages/safety-chain.html#runtime"
  },
  "基础设施层 × 安全评测链": {
    kicker: "矩阵交点 · 安全评测链",
    title: "基础设施层 × 安全评测链",
    summary: "评测平台、审计日志、sandbox、trace、DLP 和运行时监控决定安全治理是否可执行。",
    url: "pages/safety-chain.html#runtime"
  },
  "模型层 × 安全评测链": {
    kicker: "矩阵交点 · 安全评测链",
    title: "模型层 × 安全评测链",
    summary: "对齐、红队、能力阈值、隐藏 CoT 攻击和评测污染决定模型发布边界。",
    url: "pages/safety-chain.html#red-team"
  },
  "应用层 × 安全评测链": {
    kicker: "矩阵交点 · 安全评测链",
    title: "应用层 × 安全评测链",
    summary: "合规、责任边界、内容审查、人类审批和事故响应决定 AI 应用能否进入生产。",
    url: "pages/safety-chain.html#guardrails"
  },
  "基础模型": {
    kicker: "模型层 · 层级细分",
    title: "基础模型",
    summary: "基础模型是模型层的底座能力，把大规模数据、算力和算法压缩成可复用的语言、多模态、代码或动作能力。",
    url: "pages/model.html#status",
    sections: [
      ["产业位置", ["上游吃数据、算力、训练框架和评测体系；下游通过 API、私有部署、微调、RAG 和 Agent 工作流进入应用。"]],
      ["2026 变化", ["竞争焦点从单纯 pretraining scaling 转向 reasoning、long context、tool use、多模态 grounding 和单位 token 成本。"]],
      ["价值捕获", ["平台 API、开发者生态、企业私有化、模型路由、数据闭环和推理成本优势。"]]
    ]
  },
  "多模态": {
    kicker: "模型层 · 层级细分",
    title: "多模态",
    summary: "多模态模型统一处理文本、图像、音频、视频、屏幕、空间和动作信息，是模型进入真实世界任务的入口。",
    url: "pages/model.html#multimodal",
    sections: [
      ["为什么重要", ["企业任务不是纯文本：合同、图片、会议、网页、代码、表格、视频和传感器数据会混在一起。"]],
      ["前沿方向", ["原生多模态、视频理解、实时语音、GUI grounding、机器人 VLA、世界模型。"]],
      ["瓶颈", ["跨模态对齐、标注成本、延迟、评测标准和真实世界 grounding。"]]
    ]
  },
  "小模型": {
    kicker: "模型层 · 层级细分",
    title: "小模型",
    summary: "小模型承担高频、低延迟、低成本、本地化和隐私敏感任务，是大模型商业化的成本缓冲层。",
    url: "pages/model.html#small-model",
    sections: [
      ["产业位置", ["大模型做 teacher，小模型通过蒸馏、微调和量化承接特定任务。"]],
      ["典型场景", ["端侧助手、企业私有部署、客服分类、代码补全、检索重排、低成本批处理。"]],
      ["价值捕获", ["成本优势、私有化部署、低延迟体验和行业数据适配。"]]
    ]
  },
  "行业模型": {
    kicker: "模型层 · 层级细分",
    title: "行业模型",
    summary: "行业模型不是简单换提示词，而是把行业数据、术语、规则、权限、评测和工作流一起打包。",
    url: "pages/model.html#players",
    sections: [
      ["关键差异", ["法律、医疗、金融、工业等场景要求准确性、可追溯、合规和责任边界。"]],
      ["落地方式", ["RAG/GraphRAG、行业 SFT、私有数据连接、评测集、人工审核和审计日志。"]],
      ["风险", ["数据合规、幻觉、版权、模型过拟合和客户系统集成成本。"]]
    ]
  },
  "推理模型": {
    kicker: "模型层 · 层级细分",
    title: "推理模型",
    summary: "推理模型通过更多 test-time compute，在回答前进行计划、验证、搜索或工具调用，提升复杂任务正确率。",
    url: "pages/model.html#reasoning",
    sections: [
      ["为什么重要", ["它把模型能力的来源从训练阶段部分转移到推理阶段，让复杂数学、代码、规划和多步任务显著增强。"]],
      ["产业影响", ["能力提升会带来 reasoning token 膨胀，推高 TTFT、P99 延迟、KV Cache 占用和单位任务成本。"]],
      ["代表路线", ["OpenAI o1/o3、Gemini 2.5 Pro thinking、Claude 3.7 Extended Thinking。"]],
      ["投资/创业观察", ["推理优化、模型路由、任务评测、成本可观测性和 Agent 安全控制会随之变得更值钱。"]]
    ]
  },
  "具身智能模型": {
    kicker: "模型层 · 层级细分",
    title: "具身智能模型",
    summary: "具身智能模型把感知、语言、动作和物理反馈连接起来，让模型能在机器人、自动驾驶和工业场景中执行动作。",
    url: "pages/model.html#world-model",
    sections: [
      ["核心能力", ["VLA、世界模型、运动规划、仿真数据、真实世界反馈和安全约束。"]],
      ["瓶颈", ["Sim-to-Real 数据鸿沟、端侧低延迟、硬件成本、长尾场景和安全认证。"]],
      ["代表方向", ["Google Gemini Robotics、NVIDIA GR00T N1、Physical Intelligence、Figure AI。"]]
    ]
  },
  "能力评测": {
    kicker: "模型层 · 关键指标",
    title: "能力评测",
    summary: "能力评测用于判断模型能否完成真实任务，不能只看公开 benchmark 分数。",
    url: "pages/model.html#bottlenecks",
    sections: [
      ["评测层次", ["通用 benchmark、行业专用 eval、任务成功率、工具调用成功率、人工偏好、线上 A/B。"]],
      ["2026 问题", ["benchmark contamination、训练集泄漏、推理模型隐藏 CoT、真实业务任务难以标准化。"]],
      ["研究记录方式", ["模型与应用节点需要记录评测来源、日期、任务类型、样本边界和可复现性。"]]
    ]
  },
  "推理成本": {
    kicker: "模型层 · 关键指标",
    title: "推理成本",
    summary: "推理成本是模型商业化的硬约束，由模型大小、token 数、KV Cache、硬件利用率和延迟目标共同决定。",
    url: "pages/model.html#inference-optimization",
    sections: [
      ["核心变量", ["输入 token、输出 token、reasoning token、batching、cache 命中率、GPU/ASIC 单价、能耗和 P99 延迟。"]],
      ["为什么重要", ["企业 AI 应用的毛利很大程度取决于能否把复杂任务拆给合适模型，并控制每次任务的 token 成本。"]],
      ["相关技术", ["Prefill/Decode 分离、Speculative Decoding、KV Cache 管理、小模型蒸馏、模型路由。"]]
    ]
  },
  "延迟": {
    kicker: "模型层 · 关键指标",
    title: "延迟",
    summary: "延迟决定模型能否进入实时交互、语音、编程、客服、机器人和交易类场景。",
    url: "pages/model.html#inference-optimization",
    sections: [
      ["关键指标", ["TTFT 首字延迟、ITL token 间延迟、P50/P95/P99、端到端任务完成时间。"]],
      ["主要矛盾", ["reasoning 越深，质量越高，但用户等待和推理成本也越高。"]],
      ["优化方向", ["缓存、批处理、模型路由、speculative decoding、边缘推理和小模型分流。"]]
    ]
  },
  "上下文长度": {
    kicker: "模型层 · 关键指标",
    title: "上下文长度",
    summary: "上下文长度是模型一次可读取的信息窗口，但窗口变长不等于理解稳定和成本可控。",
    url: "pages/model.html#bottlenecks",
    sections: [
      ["价值", ["长文档、代码库、会议记录、多轮对话和企业知识库任务都依赖长上下文。"]],
      ["瓶颈", ["Context Wall、注意力退化、KV Cache 显存占用、检索噪声和成本上升。"]],
      ["工程实践", ["RAG、context compression、prefix cache、分层记忆和工具化检索。"]]
    ]
  },
  "安全性": {
    kicker: "模型层 · 关键指标",
    title: "安全性",
    summary: "模型安全性覆盖幻觉、越权、偏见、隐私泄露、提示注入、工具滥用和版权风险。",
    url: "pages/model.html#bottlenecks",
    sections: [
      ["模型侧", ["对齐、红队、内容安全、拒答策略、隐藏 CoT 保护和评测体系。"]],
      ["应用侧", ["权限隔离、审计日志、人类在环、工具调用沙箱和可回滚操作。"]],
      ["商业影响", ["安全性决定模型能否进入金融、医疗、法律、政务和企业核心系统。"]]
    ]
  },
  "数据中心": {
    kicker: "基础设施层 · 层级细分",
    title: "数据中心",
    summary: "AI 数据中心是把电力、土地、冷却、机柜、服务器、网络和运维组织成可用算力的物理平台。",
    url: "pages/infra.html#status",
    sections: [
      ["2026 变化", ["从通用云机房转向高密 AI Factory，单柜功率、液冷、并网和网络拓扑成为核心约束。"]],
      ["价值捕获", ["长期租约、电力接入、液冷改造、GPU 交付、运维可靠性和客户负载绑定。"]],
      ["风险", ["并网排队、变压器交付、PUE/WUE、资本开支过热和区域监管。"]]
    ]
  },
  "云平台": {
    kicker: "基础设施层 · 层级细分",
    title: "云平台",
    summary: "云平台把底层 GPU 集群包装成训练、推理、存储、数据和应用服务，是 AI 产业的算力入口。",
    url: "pages/infra.html#players",
    sections: [
      ["核心能力", ["全球数据中心、GPU 采购、网络、存储、安全、账单、企业客户和模型服务生态。"]],
      ["竞争焦点", ["GPU 可用性、推理成本、模型市场、私有化/混合云、开发者体验。"]],
      ["代表玩家", ["AWS、Microsoft Azure、Google Cloud、Oracle Cloud、CoreWeave。"]]
    ]
  },
  "AI 工厂": {
    kicker: "基础设施层 · 层级细分",
    title: "AI 工厂",
    summary: "AI 工厂不是传统 IDC，而是持续把电力和数据转化为模型能力、token 和自动化任务的工业系统。",
    url: "pages/infra.html#ai-factory",
    sections: [
      ["投入", ["电力、GPU、网络、存储、液冷、调度系统和运维团队。"]],
      ["产出", ["训练吞吐、推理吞吐、可售 token、模型能力和 Agent 执行能力。"]],
      ["核心指标", ["MFU、MTBF、PUE、P99 延迟、GPU 利用率、单位 token 成本。"]]
    ]
  },
  "网络": {
    kicker: "基础设施层 · 层级细分",
    title: "网络",
    summary: "AI 网络决定多机多卡能否高效协同，是训练扩展性和推理尾延迟的核心基础设施。",
    url: "pages/infra.html#scale-network",
    sections: [
      ["训练侧", ["AllReduce、AllGather、ReduceScatter 等集体通信依赖低延迟高带宽网络。"]],
      ["推理侧", ["模型服务、KV cache、跨节点路由和多数据中心调度会把网络变成 P99 延迟来源。"]],
      ["技术路线", ["InfiniBand、Spectrum-X、Ultra Ethernet、光模块、CPO、SerDes/Retimer。"]]
    ]
  },
  "存储": {
    kicker: "基础设施层 · 层级细分",
    title: "存储",
    summary: "AI 存储承载训练数据、checkpoint、向量库、日志和推理缓存，是大模型工程的吞吐底座。",
    url: "pages/infra.html#bottlenecks",
    sections: [
      ["训练侧", ["checkpoint I/O 会在大模型训练中形成周期性冲击，影响恢复速度和集群利用率。"]],
      ["应用侧", ["企业 RAG、向量库、审计日志和多模态数据需要高吞吐与权限隔离。"]],
      ["代表方向", ["并行文件系统、对象存储、NVMe、Weka、VAST Data、DDN。"]]
    ]
  },
  "液冷": {
    kicker: "基础设施层 · 层级细分",
    title: "液冷",
    summary: "液冷通过冷板、冷却液、CDU 和水路系统带走高密 AI 机柜热量，是 GB200/Rubin 级系统落地的基础设施前提。",
    url: "pages/infra.html#liquid-rack",
    sections: [
      ["为什么重要", ["高端 AI 机柜功率密度持续上升，风冷难以支撑 100kW+ 级 rack。"]],
      ["关键环节", ["冷板、CDU、泄漏检测、水处理、维护 SOP、机房改造和供应商质保。"]],
      ["价值捕获", ["Vertiv、Schneider Electric、Eaton、Supermicro、液冷系统集成商和数据中心 EPC。"]]
    ]
  },
  "调度": {
    kicker: "基础设施层 · 层级细分",
    title: "调度",
    summary: "调度系统决定 GPU、显存、网络和存储如何分配给训练、推理和批处理任务。",
    url: "pages/infra.html#disaggregated-inference",
    sections: [
      ["训练调度", ["处理大作业排队、故障恢复、资源碎片、优先级和 checkpoint。"]],
      ["推理调度", ["处理 batching、模型路由、KV cache、prefill/decode 解耦和 P99 延迟。"]],
      ["商业意义", ["调度效率直接影响 GPU 利用率和云服务毛利。"]]
    ]
  },
  "运维": {
    kicker: "基础设施层 · 层级细分",
    title: "运维",
    summary: "AI infra 运维是把硬件故障、液冷、电力、网络、作业和客户 SLA 稳定管理起来的能力。",
    url: "pages/infra.html#bottlenecks",
    sections: [
      ["为什么难", ["万卡规模下故障是常态，不是例外；任何小故障都可能放大成训练中断或推理尾延迟。"]],
      ["核心能力", ["监控、自动隔离、故障恢复、液冷巡检、容量规划、SLA 管理。"]],
      ["价值捕获", ["稳定可用率和故障恢复速度是 GPU 云与自建集群的关键差异。"]]
    ]
  },
  "GPU 利用率": {
    kicker: "基础设施层 · 关键指标",
    title: "GPU 利用率",
    summary: "GPU 利用率衡量昂贵加速器是否真正产出训练步数或 token，是 AI infra 毛利率的核心指标。",
    url: "pages/infra.html#bottlenecks",
    sections: [
      ["低利用率原因", ["数据加载慢、网络通信等待、显存碎片、作业排队、推理 batch 不合理、故障恢复慢。"]],
      ["优化方式", ["调度、缓存、模型路由、并行策略、网络拓扑优化和故障自动化。"]],
      ["商业意义", ["同样 GPU 数量下，利用率差异会直接决定可售算力和投资回收期。"]]
    ]
  },
  "交付周期": {
    kicker: "基础设施层 · 关键指标",
    title: "交付周期",
    summary: "交付周期指从选址、电力、机房、服务器、网络、液冷到上线可用的完整时间。",
    url: "pages/infra.html#status",
    sections: [
      ["主要变量", ["并网、变压器、GPU 交付、光模块、液冷、施工许可、客户验收。"]],
      ["为什么重要", ["AI 需求窗口变化快，交付慢会让资本开支和客户机会错配。"]],
      ["价值捕获", ["能更快交付可用集群的云厂商和集成商能获得溢价。"]]
    ]
  },
  "网络延迟": {
    kicker: "基础设施层 · 关键指标",
    title: "网络延迟",
    summary: "网络延迟影响训练同步效率、推理 P99、跨服务调用和 Agent 工具执行体验。",
    url: "pages/infra.html#scale-network",
    sections: [
      ["训练影响", ["通信延迟会降低多卡扩展效率，使 GPU 等待而不是计算。"]],
      ["推理影响", ["模型路由、KV cache、工具调用和跨区域服务都会放大端到端延迟。"]],
      ["优化方向", ["拓扑设计、RDMA、InfiniBand、Spectrum-X、光互联和本地化部署。"]]
    ]
  },
  "可用性": {
    kicker: "基础设施层 · 关键指标",
    title: "可用性",
    summary: "可用性衡量 AI 基础设施能否稳定对外提供训练和推理服务，是企业客户最关心的指标之一。",
    url: "pages/infra.html#bottlenecks",
    sections: [
      ["关键指标", ["SLA、MTBF、MTTR、P99 延迟、错误率、故障隔离速度。"]],
      ["挑战", ["GPU、网络、存储、电力、液冷和软件调度任一环节出问题都可能影响服务。"]],
      ["护城河", ["稳定运维经验、自动化平台、冗余设计和客户信任。"]]
    ]
  },
  "CPU": {
    kicker: "芯片层 · 层级细分",
    title: "CPU",
    summary: "CPU 在 AI 系统中承担控制、数据预处理、网络协议、调度和与 GPU 协同的角色，不再只是传统服务器主处理器。",
    url: "pages/silicon.html#status",
    sections: [
      ["2026 变化", ["NVIDIA Vera CPU、Grace CPU 等路线说明 CPU 正与 GPU、DPU、NVLink-C2C 组成机柜级系统。"]],
      ["价值位置", ["CPU 影响数据加载、推理服务编排、主机内存、I/O 和系统整体延迟。"]],
      ["玩家", ["NVIDIA、AMD EPYC、Intel Xeon、Arm 生态和云厂商自研 CPU。"]]
    ]
  },
  "网络芯片": {
    kicker: "芯片层 · 层级细分",
    title: "网络芯片",
    summary: "网络芯片负责 AI 集群内部和跨机柜数据交换，是多机多卡训练和推理服务的关键基础。",
    url: "pages/silicon.html#silicon-photonics",
    sections: [
      ["为什么重要", ["训练扩展性依赖低延迟高带宽网络，推理服务也会被跨节点路由和缓存访问拖慢。"]],
      ["关键部件", ["Ethernet switch、InfiniBand switch、DPU、NIC、SerDes、retimer。"]],
      ["玩家", ["NVIDIA Networking、Broadcom、Marvell、Arista 生态。"]]
    ]
  },
  "光模块": {
    kicker: "芯片层 · 层级细分",
    title: "光模块",
    summary: "光模块把电信号转换成光信号，是 AI 集群跨机柜、跨数据中心互联的关键瓶颈之一。",
    url: "pages/silicon.html#silicon-photonics",
    sections: [
      ["产业意义", ["高速网络从 400G/800G 向 1.6T 演进，光模块功耗、良率和供应影响 AI cluster 交付。"]],
      ["相关路线", ["硅光、CPO、LPO、DSP、VCSEL/EML、光电共封装。"]],
      ["玩家", ["Coherent、Lumentum、Marvell、Broadcom、光模块制造商和连接器供应链。"]]
    ]
  },
  "光互联": {
    kicker: "基础设施层 · 层级细分",
    title: "光互联",
    summary: "光互联是 AI 集群 scale-out 网络的带宽底座，负责把 GPU 机柜、交换机和数据中心节点连接成可训练/可推理的整体。",
    url: "pages/infra.html#network",
    sections: [
      ["为什么现在重要", ["AI 集群从单机柜扩到多机柜、多园区后，铜缆距离、功耗和信号完整性开始逼近极限，光互联成为吞吐、延迟和可靠性的共同瓶颈。"]],
      ["关键路线", ["800G/1.6T 光模块、硅光、CPO、LPO、DSP、AEC、有源铜缆、光电共封装。"]],
      ["投资变量", ["速率迁移、客户认证、良率、DSP 功耗、激光器供应、光芯片国产化和模块价格曲线。"]],
      ["代表玩家", ["Coherent、Lumentum、Fabrinet、Credo、Marvell、Broadcom、中际旭创、新易盛、光迅。"]]
    ]
  },
  "光通信": {
    kicker: "基础设施层 · 网络专题",
    title: "AI 光通信链",
    summary: "AI 光通信链不是传统电信周期的简单复苏，而是由 GPU 集群后端网络、交换机升级和推理流量持续化驱动的新一轮高速互联需求。",
    url: "pages/infra.html#network",
    sections: [
      ["链条拆分", ["交换芯片/SerDes → DSP/Driver/TIA → 激光器/光芯片 → 光模块 → 连接器/线缆 → AI 交换机/服务器。"]],
      ["核心摩擦", ["800G/1.6T 升级会把热设计、误码率、良率、客户认证、模块功耗和供应链集中度同时推高。"]],
      ["价值捕获", ["高速模块厂、激光器/光器件、DSP/SerDes 芯片、精密制造和连接器/PCB 材料链。"]]
    ]
  },
  "光芯片": {
    kicker: "芯片层 · 光通信底座",
    title: "光芯片",
    summary: "光芯片包括激光器、探测器、调制器、硅光器件等，是光模块成本、功耗、良率和国产化能力的底层变量。",
    url: "pages/silicon.html#silicon-photonics",
    sections: [
      ["关键器件", ["VCSEL、EML、DFB、InP 激光器、硅光调制器、PD、TIA、Driver。"]],
      ["为什么卡脖子", ["高速模块不是只拼组装，光芯片性能、封装耦合、热稳定性和一致性决定良率与客户认证速度。"]],
      ["代表玩家", ["Coherent、Lumentum、Accelink、Broadcom、Marvell，以及硅光和光器件供应链。"]]
    ]
  },
  "PCB/背板": {
    kicker: "基础设施层 · 高速硬件",
    title: "PCB / 背板 / CCL",
    summary: "AI 服务器和交换机速率提升后，高多层 PCB、低损耗 CCL、背板连接和信号完整性成为网络性能的隐性瓶颈。",
    url: "pages/infra.html#network",
    sections: [
      ["关键指标", ["层数、插入损耗、Dk/Df、阻抗控制、背钻精度、良率、热可靠性。"]],
      ["产业位置", ["PCB/CCL 位于服务器、交换机和光互联之间，承接 SerDes 高速信号，是 AI rack BOM 中容易被低估的环节。"]],
      ["代表玩家", ["生益科技、沪电股份、深南电路、Unimicron、Ibiden、Shinko、Amphenol。"]]
    ]
  },
  "服务器": {
    kicker: "芯片层 · 层级细分",
    title: "服务器",
    summary: "AI 服务器把 GPU、CPU、HBM、网卡、电源、散热和机箱集成成可部署算力单元。",
    url: "pages/silicon.html#players",
    sections: [
      ["2026 变化", ["服务器正从单机形态升级为 rack-scale 系统，GB200 NVL72、Rubin NVL72 代表整机柜交付。"]],
      ["核心瓶颈", ["电源、液冷、背板、连接器、网卡、散热、整机良率和客户认证。"]],
      ["玩家", ["Supermicro、Dell、HPE、Wiwynn、Quanta、Foxconn 工业互联网。"]]
    ]
  },
  "半导体设备": {
    kicker: "芯片层 · 层级细分",
    title: "半导体设备",
    summary: "半导体设备决定先进制程、存储和封装产能，是 AI 芯片供应链最上游的资本开支入口。",
    url: "pages/silicon.html#high-na-euv",
    sections: [
      ["关键设备", ["EUV/DUV 光刻、刻蚀、沉积、离子注入、CMP、量测、测试和先进封装设备。"]],
      ["为什么重要", ["没有设备扩产，先进制程、HBM 和 CoWoS 都无法扩大供给。"]],
      ["玩家", ["ASML、Applied Materials、Lam Research、KLA、Tokyo Electron。"]]
    ]
  },
  "性能功耗比": {
    kicker: "芯片层 · 关键指标",
    title: "性能功耗比",
    summary: "性能功耗比衡量每瓦电力能产生多少有效 AI 计算，是芯片、电力和数据中心共同关心的指标。",
    url: "pages/silicon.html#bottlenecks",
    sections: [
      ["为什么重要", ["AI 数据中心受电力和散热约束，性能提升如果伴随过高功耗，实际可部署密度会下降。"]],
      ["影响因素", ["制程、架构、HBM、互联、软件编译、量化、稀疏性和冷却。"]],
      ["商业意义", ["决定每 token 成本和每 MW 数据中心可承载的模型吞吐。"]]
    ]
  },
  "HBM 带宽": {
    kicker: "芯片层 · 关键指标",
    title: "HBM 带宽",
    summary: "HBM 带宽决定 GPU 能否持续喂饱计算单元，是训练、长上下文和高并发推理的核心指标。",
    url: "pages/silicon.html#hbm4",
    sections: [
      ["为什么重要", ["很多 AI 工作负载受内存带宽限制，而不是纯计算限制。"]],
      ["瓶颈", ["HBM 产能、良率、堆叠层数、封装热管理和客户认证。"]],
      ["玩家", ["SK hynix、Samsung、Micron，以及封装和测试供应链。"]]
    ]
  },
  "先进封装产能": {
    kicker: "芯片层 · 关键指标",
    title: "先进封装产能",
    summary: "先进封装产能决定逻辑芯片和 HBM 能否组合成交付给客户的 AI 加速器。",
    url: "pages/silicon.html#cowos",
    sections: [
      ["为什么重要", ["晶圆做出来不等于 GPU 可以出货，CoWoS/SoIC/基板/测试共同决定最终交付。"]],
      ["核心瓶颈", ["封装设备、interposer、基板、良率、热应力、测试时间。"]],
      ["玩家", ["TSMC、ASE、Amkor、Ibiden、Unimicron、Shinko。"]]
    ]
  },
  "互联带宽": {
    kicker: "芯片层 · 关键指标",
    title: "互联带宽",
    summary: "互联带宽决定 GPU、CPU、DPU、内存和网络之间能否快速交换数据。",
    url: "pages/silicon.html#rubin",
    sections: [
      ["层级", ["芯片内 NoC、封装内互联、NVLink-C2C、机柜内 NVLink、机柜间 Ethernet/InfiniBand。"]],
      ["为什么重要", ["模型越大，多卡协同越重，互联瓶颈越容易吃掉理论 FLOPS。"]],
      ["代表技术", ["NVLink 6、CXL、PCIe、SerDes、CPO、Spectrum-X。"]]
    ]
  },
  "软件生态": {
    kicker: "芯片层 · 关键指标",
    title: "软件生态",
    summary: "软件生态决定硬件是否容易被开发者和企业使用，是芯片替代竞争中最难迁移的壁垒。",
    url: "pages/silicon.html#bottlenecks",
    sections: [
      ["核心内容", ["CUDA、编译器、kernel 库、通信库、推理引擎、调试工具、模型部署框架。"]],
      ["NVIDIA 壁垒", ["硬件、CUDA、TensorRT、NCCL、NIM、Dynamo 和开发者生态形成正反馈。"]],
      ["替代难点", ["模型迁移、性能调优、工程师习惯、第三方库适配和企业风险偏好。"]]
    ]
  },
  "PPA": {
    kicker: "能源层 · 核心名词",
    title: "PPA",
    summary: "Power Purchase Agreement，长期购电协议。AI 数据中心用 PPA 锁定电价、容量、低碳属性和项目融资确定性。",
    url: "pages/power.html#ppa",
    sections: [
      ["为什么重要", ["AI 推理负载持续化后，电价会直接进入每百万 token 成本。", "大型云厂商用 10-20 年 PPA 把能源从短期采购变成战略资产。"]],
      ["产业链位置", ["能源层 → 数据中心建设链 → 推理服务链。", "上游连接发电资产，下游影响云平台毛利和数据中心选址。"]],
      ["代表玩家", ["Constellation / Microsoft：20 年核电 PPA。", "Google / Kairos：先进核能长期容量锁定。", "Amazon / X-energy：核能项目投资与长期电力布局。"]]
    ],
    sources: energyDeepDive.sources
  },
  "Interconnection Queue": {
    kicker: "能源层 · 卡脖子瓶颈",
    title: "Interconnection Queue",
    summary: "并网排队。AI 数据中心项目真正卡住的常常不是融资，而是等不到电网接入容量。",
    url: "pages/power.html#interconnection-queue",
    sections: [
      ["为什么重要", ["数据中心需要在具体节点拿到可交付容量，抽象的全国发电量没有意义。", "排队时间会拖慢项目投产，使 GPU、土地和客户合约形成闲置风险。"]],
      ["关键变量", ["变电站容量、输电线路扩容、变压器交付周期、地方许可、电网潮流约束。"]],
      ["投资观察", ["电网设备、变压器、高压开关柜、UPS、配电自动化会成为 AI 能源链的隐形受益环节。"]]
    ],
    sources: [["IEA - Energy and AI executive summary", "https://www.iea.org/reports/energy-and-ai/executive-summary"]]
  },
  "SMR": {
    kicker: "能源层 · 2026 前沿",
    title: "SMR",
    summary: "Small Modular Reactor，小型模块化核反应堆。它是 AI 基荷电力的远期期权，不是短期救火工具。",
    url: "pages/power.html#smr",
    sections: [
      ["为什么重要", ["AI 数据中心需要 24/7 稳定电力，核能的基荷属性与高密负载匹配。", "SMR 的战略价值在 2030 年后，核心是提前锁定清洁容量与监管路径。"]],
      ["现实约束", ["监管审批、首堆工程风险、融资成本、供应链标准化和建设周期仍是主要不确定性。"]],
      ["代表路线", ["Google / Kairos Power：计划到 2035 年部署 500MW 先进核能。", "Amazon / X-energy：目标部署超过 5GW 新核能项目。"]]
    ],
    sources: [
      ["Google - Kairos Power nuclear agreement", "https://blog.google/outreach-initiatives/sustainability/google-kairos-power-nuclear-energy-agreement/"],
      ["Amazon - Nuclear energy projects and X-energy", "https://www.aboutamazon.com/news/sustainability/amazon-nuclear-small-modular-reactor-net-carbon-zero"]
    ]
  },
  "PUE/WUE": {
    kicker: "能源层 · 运营指标",
    title: "PUE / WUE",
    summary: "PUE 衡量电力使用效率，WUE 衡量水资源效率。高密液冷时代，它们决定数据中心的监管压力和真实运营成本。",
    url: "pages/power.html#pue-wue",
    sections: [
      ["为什么重要", ["GPU 消耗的电几乎都会变成热，冷却效率直接影响可部署机柜密度。", "缺水地区或监管严格地区，WUE 会限制数据中心扩张。"]],
      ["2026 变化", ["从风冷转向冷板液冷、CDU 和水路监控，PUE 变成电力-热管理一体化指标。"]],
      ["相关玩家", ["Vertiv、Schneider Electric、Eaton、Supermicro、数据中心 EPC 与液冷供应链。"]]
    ]
  },
  "Behind-the-Meter": {
    kicker: "能源层 · 前沿结构",
    title: "Behind-the-Meter",
    summary: "表后供电。发电资产直接服务数据中心，核心价值是绕开部分公共电网瓶颈，提升交付确定性。",
    url: "pages/power.html#behind-the-meter",
    sections: [
      ["为什么重要", ["AI 数据中心扩张速度快于电网扩容速度，表后供电能缩短从项目到投产的周期。"]],
      ["典型组合", ["燃气轮机 + 储能 + 微电网。", "核能或先进核能 + 数据中心园区。", "可再生能源 + 储能 + 长期 PPA。"]],
      ["风险", ["燃料价格、排放许可、可靠性、并网冗余、资本开支和社区接受度。"]]
    ]
  },
  "SMR 核能直连": {
    kicker: "能源层 · 前沿路线",
    title: "SMR 核能直连",
    summary: "把先进核能项目与 AI 数据中心长期负载绑定，解决 24/7 清洁基荷电力缺口。",
    url: "pages/power.html#smr",
    sections: [
      ["战略意义", ["云厂商不是等电力市场自然供给，而是在主动开发未来电力。"]],
      ["关键博弈", ["监管批准、首堆落地、项目融资、核燃料供应和数据中心负载承诺。"]],
      ["代表案例", ["Google / Kairos Power；Amazon / X-energy；Microsoft / Constellation。"]]
    ],
    sources: energyDeepDive.sources
  },
  "长期 PPA": {
    kicker: "能源层 · 商业模式",
    title: "长期 PPA",
    summary: "AI 公司通过长期购电协议锁定未来电力容量和价格，把电力变成战略资产。",
    url: "pages/power.html#ppa",
    sections: [
      ["价值捕获", ["电力资产方获得长期现金流，云厂商获得容量确定性和低碳属性。"]],
      ["核心指标", ["合同期限、容量、固定/浮动电价、低碳证书、并网节点、违约条款。"]],
      ["为什么现在重要", ["AI 推理负载持续增长，电力成本会更直接地映射到 AI 服务毛利率。"]]
    ]
  },
  "电力-冷却一体化": {
    kicker: "能源层 · 工程路线",
    title: "电力-冷却一体化",
    summary: "高密 AI 机柜让电气系统和热管理不能分开设计，变电、UPS、母线、CDU、冷板液冷必须一体化规划。",
    url: "pages/power.html#power-cooling",
    sections: [
      ["为什么重要", ["100kW+ 级机柜密度下，风冷难以继续扩展，液冷可靠性成为可用算力的前提。"]],
      ["核心环节", ["变电站、高压配电、UPS、母线槽、CDU、冷板、泄漏检测、水处理。"]],
      ["价值捕获", ["Vertiv、Eaton、Schneider Electric、液冷系统供应商、数据中心 EPC。"]]
    ]
  },
  "电力": {
    kicker: "能源层 · 基础资源",
    title: "电力",
    summary: "AI 最底层的生产资料。训练消耗峰值算力，推理消耗持续电力。",
    url: "pages/power.html#electricity",
    sections: [
      ["产业意义", ["电力容量决定数据中心能建多大、多久投产、长期成本曲线如何。"]],
      ["关键指标", ["电价、接电周期、基荷可靠性、低碳比例、冗余供电、PUE。"]],
      ["传导路径", ["电力 → 数据中心规模 → 可用 GPU 集群 → 模型训练/推理成本 → 应用价格。"]]
    ]
  },
  "电网": {
    kicker: "能源层 · 基础设施",
    title: "电网",
    summary: "电网是 AI 数据中心能否落地的物理接口。约束来自节点容量、潮流、变电站和输电扩容。",
    url: "pages/power.html#grid",
    sections: [
      ["关键瓶颈", ["并网排队、变压器交付周期、输电线路许可、区域负载集中。"]],
      ["AI 变化", ["数据中心从分散云资源变成 GW 级园区，电网规划周期被迫面对软件需求速度。"]],
      ["受益环节", ["电网设备、变压器、高压开关、配电自动化、工程服务。"]]
    ]
  },
  "储能": {
    kicker: "能源层 · 灵活性资产",
    title: "储能",
    summary: "储能不能替代基荷电力，但能提供峰谷调节、备用电源、微电网稳定和电价优化。",
    url: "pages/power.html#storage",
    sections: [
      ["为什么重要", ["AI 负载对稳定性要求高，储能可降低短时波动和电网中断风险。"]],
      ["应用位置", ["UPS 后备、园区级电池储能、可再生能源平滑、表后供电系统。"]],
      ["代表玩家", ["Fluence、Tesla Energy、Powin、宁德时代等储能系统和电池供应链。"]]
    ]
  },
  "天然气": {
    kicker: "能源层 · 过渡基荷",
    title: "天然气",
    summary: "燃气轮机是 AI 数据中心快速获得可调度电力的重要过渡路线，但碳排和燃料价格是约束。",
    url: "pages/power.html#natural-gas",
    sections: [
      ["为什么重要", ["相对核能和输电扩容，燃气电厂建设和调度更快，适合表后供电和调峰。"]],
      ["关键变量", ["燃气价格、排放许可、燃机交付、热电联供、碳捕集可能性。"]],
      ["代表玩家", ["GE Vernova、Siemens Energy、燃气公用事业和独立电力生产商。"]]
    ]
  },
  "核能": {
    kicker: "能源层 · 清洁基荷",
    title: "核能",
    summary: "核能的价值在于高容量因子和低碳基荷，越来越被 AI 数据中心视为长期容量来源。",
    url: "pages/power.html#nuclear",
    sections: [
      ["为什么重要", ["AI 推理负载需要连续供电，核能与 24/7 负载天然匹配。"]],
      ["2026 关注点", ["老核电重启、SMR 商业化、长期 PPA、监管审批。"]],
      ["代表案例", ["Microsoft / Constellation 的 20 年购电协议；Google / Kairos 的先进核能合作。"]]
    ],
    sources: energyDeepDive.sources
  },
  "Rubin/Vera Rubin": {
    kicker: "芯片层 · 2026 前沿",
    title: "Rubin / Vera Rubin",
    summary: "NVIDIA 下一代机柜级 AI 平台，把 Vera CPU、Rubin GPU、NVLink 6、DPU、SuperNIC 和 Spectrum 交换机协同成 AI factory 系统。",
    url: "pages/silicon.html#rubin",
    sections: [
      ["为什么重要", ["竞争单位从单卡转向机柜级 AI supercomputer。", "CPU-GPU-网络-软件一体化让替代难度大幅提高。"]]
    ]
  },
  "HBM4": {
    kicker: "芯片层 · 内存瓶颈",
    title: "HBM4",
    summary: "下一代高带宽内存，是训练吞吐、长上下文、reasoning 推理和高并发服务的关键硬件瓶颈。",
    url: "pages/silicon.html#hbm4",
    sections: [
      ["为什么重要", ["GPU 的 FLOPS 只有喂得上数据才有价值。", "HBM 带宽、容量、良率和客户认证直接决定高端 AI GPU 出货。"]]
    ]
  },
  "CoWoS-L/R": {
    kicker: "芯片层 · 先进封装",
    title: "CoWoS-L/R",
    summary: "台积电先进封装路线，是 GPU chiplet、I/O die 与 HBM 集成的核心产能瓶颈。",
    url: "pages/silicon.html#cowos",
    sections: [
      ["为什么重要", ["先进制程芯片完成后，还必须通过 CoWoS 等封装变成可交付模组。", "封装产能决定 AI 加速器最终供给，而不是单纯晶圆产能。"]]
    ]
  },
  "NVLink 6": {
    kicker: "芯片层 · 互联",
    title: "NVLink 6",
    summary: "NVIDIA 新一代机柜内 GPU 高速互联，决定 rack-scale 系统能否像统一计算域一样工作。",
    url: "pages/silicon.html#rubin"
  },
  "CPO": {
    kicker: "芯片层 · 硅光互联",
    title: "CPO / Silicon Photonics",
    summary: "共封装光学与硅光路线，目标是降低 AI factory 高速网络的功耗、延迟和布线复杂度。",
    url: "pages/silicon.html#silicon-photonics"
  },
  "推理 ASIC 与硅光互联": {
    kicker: "芯片层 · 前沿路线",
    title: "推理 ASIC 与硅光互联",
    summary: "Reasoning 模型带来推理 token 爆炸，专用 ASIC 和低功耗光互联成为降低单位 token 成本的重要路线。",
    url: "pages/silicon.html#inference-asic"
  },
  "GPU": {
    kicker: "芯片层 · 核心器件",
    title: "GPU",
    summary: "AI 训练和通用推理的主力加速器，但 2026 年竞争焦点已从单 GPU 性能转向 HBM、互联、机柜级平台和软件生态。",
    url: "pages/silicon.html#status"
  },
  "100K 卡级 AI Factory": {
    kicker: "基础设施层 · 前沿路线",
    title: "100K 卡级 AI Factory",
    summary: "超大规模 AI 数据中心从资源池变成智能生产工厂，核心指标是可持续训练吞吐、推理吞吐和故障恢复能力。",
    url: "pages/infra.html#ai-factory"
  },
  "AI Factory / Gigawatt Data Center": {
    kicker: "基础设施层 · 前沿观察",
    title: "AI Factory / Gigawatt Data Center",
    summary: "AI 基础设施进入 GW 级园区与工厂化运营阶段，电力、液冷、网络和调度共同决定产能。",
    url: "pages/infra.html#ai-factory"
  },
  "Scale-up/Scale-out 双网络": {
    kicker: "基础设施层 · 网络架构",
    title: "Scale-up / Scale-out 双网络",
    summary: "机柜内通过高速 scale-up 互联组织 GPU，机柜间通过 scale-out 网络扩展到 pod、cluster 和数据中心级。",
    url: "pages/infra.html#scale-network"
  },
  "全液冷高密机柜": {
    kicker: "基础设施层 · 热管理",
    title: "全液冷高密机柜",
    summary: "高端 AI 机柜功耗密度继续上升，液冷成为 GB200/Rubin 级系统的默认路线。",
    url: "pages/infra.html#liquid-rack"
  },
  "推理云调度": {
    kicker: "基础设施层 · 推理服务",
    title: "推理云调度",
    summary: "通过模型路由、prefill/decode 解耦、KV cache 管理和批处理，把推理成本与延迟压到可商业化水平。",
    url: "pages/infra.html#disaggregated-inference"
  },
  "MFU/MBU": {
    kicker: "基础设施层 · 利用率",
    title: "MFU / MBU",
    summary: "MFU 衡量有效 FLOPS 使用率，MBU 衡量内存带宽利用率，二者决定昂贵 GPU 集群是否真正转化成模型能力。",
    url: "pages/infra.html#bottlenecks"
  },
  "MTBF": {
    kicker: "基础设施层 · 可靠性",
    title: "MTBF",
    summary: "平均无故障时间。集群越大，硬件故障越常态化，训练系统必须围绕故障恢复设计。",
    url: "pages/infra.html#bottlenecks"
  },
  "Collective Communication": {
    kicker: "基础设施层 · 训练瓶颈",
    title: "Collective Communication",
    summary: "多 GPU 训练中的集体通信，决定万卡集群能否接近线性扩展。",
    url: "pages/infra.html#bottlenecks"
  },
  "CDU": {
    kicker: "基础设施层 · 液冷",
    title: "CDU",
    summary: "冷却分配单元，是液冷 AI 数据中心把冷却液稳定送到机柜和冷板的关键设备。",
    url: "pages/infra.html#liquid-rack"
  },
  "o1/o3 类 Reasoning Model": {
    kicker: "模型层 · 前沿路线",
    title: "o1/o3 类 Reasoning Model",
    summary: "推理模型通过推理时计算和内部思考过程提升复杂任务表现，但显著增加 token 消耗、延迟和推理成本。",
    url: "pages/model.html#reasoning"
  },
  "Prefill/Decode 分离": {
    kicker: "模型层 · 推理工程",
    title: "Prefill/Decode 分离",
    summary: "把长上下文读入和逐 token 生成拆开优化，是推理服务降本降延迟的关键路线。",
    url: "pages/model.html#inference-optimization"
  },
  "KV Cache 优化": {
    kicker: "模型层 · 推理工程",
    title: "KV Cache 优化",
    summary: "通过缓存、分页、复用和调度降低长上下文与多轮对话的显存压力。",
    url: "pages/model.html#inference-optimization"
  },
  "多模态与世界模型": {
    kicker: "模型层 · 前沿路线",
    title: "多模态与世界模型",
    summary: "文本、图像、语音、视频、空间与动作轨迹合流，模型开始学习可交互的世界表征。",
    url: "pages/model.html#world-model"
  },
  "多模态原生模型": {
    kicker: "模型层 · 前沿观察",
    title: "多模态原生模型",
    summary: "模型从后接视觉/语音模块，转向统一处理文本、图像、视频、音频和动作的原生架构。",
    url: "pages/model.html#multimodal"
  },
  "小模型、蒸馏与端侧模型": {
    kicker: "模型层 · 前沿观察",
    title: "小模型、蒸馏与端侧模型",
    summary: "用大模型生成能力和数据，小模型承担高频、低延迟、低成本和本地隐私任务。",
    url: "pages/model.html#small-model"
  },
  "推理模型与长思考能力": {
    kicker: "模型层 · 前沿观察",
    title: "推理模型与长思考能力",
    summary: "通过更多 test-time compute 提升复杂任务能力，是模型层 2025-2026 的主战场之一。",
    url: "pages/model.html#reasoning"
  },
  "Agent 原生工作流": {
    kicker: "应用层 · 前沿路线",
    title: "Agent 原生工作流",
    summary: "AI 应用从聊天问答转向目标拆解、工具调用、状态记忆、审批和审计的闭环执行系统。",
    url: "pages/app.html#agentic-workflow"
  },
  "AI 编程工作台": {
    kicker: "应用层 · 前沿路线",
    title: "AI 编程工作台",
    summary: "编程工具从补全代码进入 issue 级任务执行、测试、修复和 PR 创建阶段。",
    url: "pages/app.html#coding-agent"
  },
  "垂直行业 Autopilot": {
    kicker: "应用层 · 前沿路线",
    title: "垂直行业 Autopilot",
    summary: "医疗、法律、客服、销售、财务等场景从辅助 Copilot 走向半自动执行和结果计费。",
    url: "pages/app.html#vertical-ai"
  },
  "具身智能应用": {
    kicker: "应用层 · 前沿路线",
    title: "具身智能应用",
    summary: "机器人、自动驾驶、仓储、制造和巡检把 AI 应用从数字任务推向物理世界执行。",
    url: "pages/app.html#embodied-app"
  },
  "企业 Agent 工作流": {
    kicker: "应用层 · 前沿观察",
    title: "企业 Agent 工作流",
    summary: "企业 Agent 的关键是权限、审计、工具连接、状态恢复和业务系统集成。",
    url: "pages/app.html#enterprise-agent"
  },
  "AI 编程与软件生产": {
    kicker: "应用层 · 前沿观察",
    title: "AI 编程与软件生产",
    summary: "软件工程正在从开发者手动编码转向 AI agent 执行修改、测试、提交和代码审查。",
    url: "pages/app.html#coding-agent"
  },
  "机器人与自动驾驶": {
    kicker: "应用层 · 前沿观察",
    title: "机器人与自动驾驶",
    summary: "物理世界应用需要实时推理、安全认证、场景数据、本体成本和可靠执行闭环。",
    url: "pages/app.html#embodied-app"
  }
};

const genericKnowledge = {
  "GPU 利用率": "衡量昂贵加速器是否真的在生产 token 或训练模型，是 AI 基础设施毛利率的核心变量。",
  "PUE": "数据中心总用电与 IT 设备用电之比，是能源效率、冷却效率和运营成本的核心指标。",
  "HBM4": "下一代高带宽内存，是长上下文、训练吞吐和高并发推理的关键硬件瓶颈。",
  "CoWoS-L/R": "先进封装路线，决定高端 AI GPU 是否能把计算芯片和 HBM 高效集成。",
  "KV Cache": "推理时缓存注意力键值，用显存换速度，是长上下文和高并发推理的显存黑洞。",
  "MCP": "模型上下文协议，让 Agent 用标准方式连接工具、数据源和业务系统。",
  "HITL": "Human-in-the-loop，人类在环，是 Agent 生产环境中的审批和责任边界。"
};

const companyViewState = {
  filter: "全部",
  query: "",
  sort: "default",
  statusFilter: "全部",
  focus: "",
  showAll: false,
  pageSize: 24
};

const companySortOptions = [
  ["default", "默认排序"],
  ["aiExposure", "AI 暴露度优先"],
  ["risk", "风险从高到低"],
  ["deepDive", "已深挖优先"],
  ["chinaMarket", "A/港股/中概优先"]
];

const companyStatusFilters = ["全部", "已深挖", "有来源", "来源待加强", "A/H 股"];

const companyFocusGroups = [
  ["highExposure", "高 AI 暴露度", "先看 AI 业务相关性最强的公司。"],
  ["deepDive", "已深挖", "优先阅读已有深度研究内容的公司。"],
  ["ahShare", "A/H 股", "优先看更贴近沪深港交易研究的标的。"],
  ["highRisk", "风险较高", "适合专门核验估值、周期和技术替代风险。"]
];

function getKnowledgeCard(topic, context = {}) {
  const matrixDeepDive = window.matrixDeepDiveCards && window.matrixDeepDiveCards[topic];
  if (matrixDeepDive) return matrixDeepDive;
  const direct = knowledgeCards[topic];
  if (direct) return direct;
  if (context.sections) {
    return {
      kicker: context.kicker || "研究节点",
      title: topic,
      summary: context.summary || "",
      sections: context.sections
    };
  }
  const genericSummary = context.summary || genericKnowledge[topic] || `${topic} 是 ${context.layer || "AI 产业链"} 中的关键节点，影响上游资源配置、下游产品能力与商业价值捕获。`;
  const layer = context.layer || "未标注层级";
  const chain = context.chain || "未标注链条";
  return {
    kicker: context.kicker || "研究节点",
    title: topic,
    summary: genericSummary,
    sections: [
      ["产业位置", [`所属层级：${layer}`, `关联链条：${chain}`]],
      ["为什么重要", ["它决定该环节的成本、效率、可靠性或能力边界。", "如果它成为瓶颈，会沿着五层蛋糕向上影响模型能力和应用 ROI，向下拉动芯片、基础设施或能源投入。"]],
      ["研究时看什么", ["技术路线是否出现代际切换。", "供应链是否集中在少数玩家。", "是否能形成数据、生态、资本开支或切换成本护城河。"]],
      ["研究扩展", ["优先补充权威来源、代表公司、量化指标、最新事件和投资/创业判断。"]]
    ]
  };
}

function renderTopicButton(topic, context = {}) {
  const payload = encodeURIComponent(JSON.stringify({ topic, ...context }));
  return `<li><button class="knowledge-pill" type="button" data-knowledge="${payload}">${topic}</button></li>`;
}

function enhanceTerms(text) {
  let output = text;
  const terms = Object.keys(termDefinitions || {}).sort((a, b) => b.length - a.length);
  for (const name of terms) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    output = output.replace(new RegExp(`(?<!data-term=")${escaped}`, "g"), term(name));
  }
  return output;
}

function renderChainButton(topic, chain) {
  const nodeUrl = chain.nodeUrls && chain.nodeUrls[topic];
  if (nodeUrl) return `<a class="chain-node" href="${nodeUrl}">${topic}</a>`;
  const payload = encodeURIComponent(JSON.stringify({ topic, chain: chain.title, kicker: "产业链节点" }));
  return `<button class="chain-node" type="button" data-knowledge="${payload}">${topic}</button>`;
}

function renderDetailBody(card) {
  const sections = card.sections || [];
  const sources = card.sources || [];
  return `
    ${sections.map(([title, items]) => `
      <section class="detail-section">
        <h3>${title}</h3>
        <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    `).join("")}
    ${sources.length ? `
      <section class="detail-section">
        <h3>来源</h3>
        <div class="detail-sources">${sources.map(([title, href]) => `
          <a href="${href}" target="_blank" rel="noreferrer">${title}</a>
        `).join("")}</div>
      </section>
    ` : ""}
  `;
}

function openKnowledgeCard(topic, context = {}) {
  const card = getKnowledgeCard(topic, context);
  if (card.url) {
    window.location.href = card.url;
    return;
  }
  const modal = document.querySelector("#detailModal");
  document.querySelector("#detailKicker").textContent = card.kicker || context.kicker || "Knowledge Card";
  document.querySelector("#detailTitle").textContent = card.title || topic;
  document.querySelector("#detailSummary").textContent = card.summary || "";
  document.querySelector("#detailBody").innerHTML = renderDetailBody(card);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeKnowledgeCard() {
  const modal = document.querySelector("#detailModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderLayers() {
  const root = document.querySelector("#layerGrid");
  root.innerHTML = layers.map((layer) => `
    <article class="layer-card">
      <header>
        <span class="layer-number">${layer.number}</span>
        <h3>${layer.name}</h3>
      </header>
      <p class="layer-thesis">${layer.thesis}</p>
      <div class="layer-brief-grid">
        <section class="layer-brief-block">
          <strong>行业现状</strong>
          <p>${enhanceTerms(layer.status.replace("当前行业现状：", ""))}</p>
        </section>
        <section class="layer-brief-block accent">
          <strong>核心瓶颈</strong>
          <p>${enhanceTerms(layer.bottleneck)}</p>
        </section>
      </div>
      <div class="layer-nav-block">
        <div>
          <p class="mini-section-title">代表公司</p>
          <div class="layer-company-list">
            ${layer.representativeCompanies.map((name) => `
              <button class="layer-company-pill" type="button" data-layer-company-query="${name}">${getCompanyLabelByName(name)}</button>
            `).join("")}
          </div>
        </div>
        <div>
          <p class="mini-section-title">关键链条入口</p>
          <div class="layer-chain-list">
            ${layer.keyChains.map((title) => {
              const chain = chains.find((item) => item.title === title);
              return `<a class="layer-chain-pill" href="${chain?.detailUrl || "#chains"}">${title}</a>`;
            }).join("")}
          </div>
        </div>
      </div>
      <button class="layer-company-filter" type="button" data-layer-company-filter="${layer.name}">查看${layer.name}公司池</button>
      <div class="summary-source-row">
        <span>来源</span>
        ${renderInlineSourceBadges(layer.sourceIds || [], true)}
      </div>
      <details class="layer-details">
        <summary>基础与扩展</summary>
        <p><strong>基础支点</strong></p>
        <p>${enhanceTerms(layer.foundation)}</p>
        <p><strong>全部节点</strong></p>
        <ul class="tag-list">${layer.segments.map((item) => renderTopicButton(item, { layer: layer.name, kicker: "层级细分" })).join("")}</ul>
        <p><strong>关键指标</strong></p>
        <ul class="metric-list">${layer.metrics.map((item) => renderTopicButton(item, { layer: layer.name, kicker: "关键指标" })).join("")}</ul>
        <p><strong>前沿方向</strong></p>
        <ul class="metric-list">${layer.frontier.map((item) => renderTopicButton(item, { layer: layer.name, kicker: "前沿方向" })).join("")}</ul>
        <p><strong>核心术语</strong></p>
        <ul class="metric-list">${layer.glossary.map((item) => renderTopicButton(item, { layer: layer.name, kicker: "核心名词" })).join("")}</ul>
      </details>
      <a class="layer-detail-link" href="${layer.detailUrl}">进入${layer.name}深度页</a>
    </article>
  `).join("");
}

function renderMatrix() {
  const root = document.querySelector("#matrixGrid");
  const header = [
    `<div class="matrix-corner">Layer / Chain</div>`,
    ...matrixCols.map((col) => `<div class="matrix-head">${col}</div>`)
  ].join("");
  const rows = matrixRows.map((row) => [
    `<div class="matrix-row-head">${row}</div>`,
    ...matrixCols.map((col) => {
      const text = matrixCells[`${row}|${col}`] || "该交点已纳入矩阵研究，需要继续核验来源、玩家和量化指标。";
      const payload = encodeURIComponent(JSON.stringify({ topic: `${row} × ${col}`, layer: row, chain: col, kicker: "矩阵交点", summary: text }));
      return `<button class="matrix-cell" type="button" data-knowledge="${payload}"><strong>${row.replace("层", "")} × ${col}</strong><span>${text}</span></button>`;
    })
  ].join("")).join("");
  root.innerHTML = header + rows;
}

function renderChains() {
  const root = document.querySelector("#chainBoard");
  root.innerHTML = chains.map((chain) => `
    <article class="chain-card">
      <header class="chain-card-header">
        <h3>${chain.title}</h3>
        <p>${chain.desc}</p>
      </header>
      <div class="chain-brief-grid">
        <section class="chain-brief-block">
          <strong>接口摩擦</strong>
          <p>${enhanceTerms(chain.friction)}</p>
        </section>
        <section class="chain-brief-block accent">
          <strong>CAPEX / 价值捕获</strong>
          <p>${enhanceTerms(chain.valueCapture)}</p>
        </section>
      </div>
      <p class="mini-section-title">拓扑流向</p>
      <div class="chain-path">${chain.path.slice(0, 5).map((node) => renderChainButton(node, chain)).join("")}</div>
      <p class="mini-section-title">代表公司</p>
      <div class="chain-company-list">
        ${chain.representativeCompanies.map((name) => `
          <button class="chain-company-pill" type="button" data-chain-company-query="${name}">${getCompanyLabelByName(name)}</button>
        `).join("")}
      </div>
      <button class="chain-company-filter" type="button" data-chain-company-filter="${chain.companyFilter}">查看${chain.companyFilter}公司池</button>
      <div class="summary-source-row">
        <span>来源</span>
        ${renderInlineSourceBadges(chain.sourceIds || [], true)}
      </div>
      <details class="chain-details">
        <summary>完整链条</summary>
        <div class="chain-path full">${chain.path.map((node) => renderChainButton(node, chain)).join("")}</div>
      </details>
      ${chain.detailUrl ? `<a class="chain-detail-link" href="${chain.detailUrl}">进入${chain.title}深度页</a>` : ""}
    </article>
  `).join("");
}

function renderLinks() {
  const root = document.querySelector("#linkMatrix");
  root.innerHTML = links.map(([title, desc]) => `
    <article class="link-card">
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `).join("");
}

function renderFilterButton(label, filter, active = false) {
  return `<button class="terminal-filter ${active ? "active" : ""}" type="button" data-filter="${filter}">${label}</button>`;
}

function countByList(cards, field) {
  return cards.reduce((acc, company) => {
    (company[field] || []).forEach((item) => {
      acc[item] = (acc[item] || 0) + 1;
    });
    return acc;
  }, {});
}

function countByValue(cards, field) {
  return cards.reduce((acc, company) => {
    const value = company[field] || "未标记";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function topEntries(counts, limit = 8) {
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-Hans-CN"))
    .slice(0, limit);
}

function renderMiniBars(entries, maxValue) {
  return entries.map(([label, count]) => `
    <button class="portfolio-bar" type="button" data-portfolio-filter="${label}">
      <span>${label}</span>
      <strong>${count}</strong>
      <i style="--bar-width: ${Math.max(8, Math.round((count / maxValue) * 100))}%"></i>
    </button>
  `).join("");
}

function renderPortfolioDashboard() {
  const root = document.querySelector("#portfolioDashboard");
  if (!root) return;
  const cards = window.companyCards || [];
  const layerCounts = countByList(cards, "layers");
  const chainCounts = countByList(cards, "chains");
  const riskCounts = countByValue(cards, "riskRating");
  const exposureCounts = countByValue(cards, "aiExposure");
  const themeCounts = cards.reduce((acc, company) => {
    (company.themes || []).forEach((theme) => {
      acc[theme] = (acc[theme] || 0) + 1;
    });
    return acc;
  }, {});
  const baskets = [
    ["AI 电力与数据中心", "能源层", "电力、并网、液冷和高密机柜是 AI 扩张的底层瓶颈。"],
    ["光互联与高速 PCB", "AI 网络硬件", "覆盖光模块、光芯片、SerDes/DSP、AEC、连接器、PCB/CCL 和交换机板。"],
    ["HBM/先进封装", "芯片供应链", "围绕 HBM、CoWoS、ABF、测试和封装设备观察供给闸门。"],
    ["推理成本优化", "推理链", "关注 TTFT、P99、KV Cache、ASIC 和推理 runtime。"],
    ["企业 Agent 落地", "企业落地链", "围绕 CRM、ITSM、数据治理、权限和工作流入口筛选。"],
    ["具身智能", "机器人链", "覆盖本体、执行器、传感器、端侧模型和场景部署。"],
    ["AI 安全与评测", "安全评测链", "关注治理、红队、评测、可观测和合规护栏。"]
  ];
  const maxLayer = Math.max(...Object.values(layerCounts));
  const maxChain = Math.max(...Object.values(chainCounts));

  root.innerHTML = `
    <div class="portfolio-summary">
      <span>标的看板</span>
      <strong>${cards.length}</strong><em>公司池</em>
      <strong>${exposureCounts["极高"] || 0}</strong><em>极高 AI 暴露</em>
      <strong>${riskCounts["高"] || 0}</strong><em>高风险</em>
      <strong>${Object.keys(themeCounts).length}</strong><em>主题</em>
    </div>
    <div class="portfolio-baskets">
      ${baskets.map(([name, filter, desc]) => `
        <button class="portfolio-basket" type="button" data-portfolio-filter="${filter}">
          <strong>${name}</strong>
          <span>${filter}</span>
          <p>${desc}</p>
        </button>
      `).join("")}
    </div>
    <div class="portfolio-analytics">
      <article>
        <h3>层级分布</h3>
        ${renderMiniBars(topEntries(layerCounts, 5), maxLayer)}
      </article>
      <article>
        <h3>链条分布</h3>
        ${renderMiniBars(topEntries(chainCounts, 8), maxChain)}
      </article>
      <article>
        <h3>主题热度</h3>
        <div class="portfolio-theme-cloud">
          ${topEntries(themeCounts, 14).map(([theme, count]) => `<button type="button" data-portfolio-theme="${theme}">${theme}<span>${count}</span></button>`).join("")}
        </div>
      </article>
    </div>
  `;
}

function renderCompanyFilters() {
  const root = document.querySelector("#companyFilters");
  if (!root) return;
  const filters = ["全部", "能源层", "芯片层", "基础设施层", "模型层", "应用层", "训练链", "推理链", "数据中心链", "芯片供应链", "企业落地链", "机器人链", "Agent链", "安全评测链"];
  const cards = window.companyCards || [];
  root.innerHTML = filters.map((filter) => {
    const count = filter === "全部"
      ? cards.length
      : cards.filter((company) => company.layers.includes(filter) || company.chains.includes(filter) || (company.themes || []).includes(filter)).length;
    return renderFilterButton(`${filter} ${count}`, filter, filter === companyViewState.filter);
  }).join("");
}

function renderCompanyResearchControls() {
  const root = document.querySelector("#companyResearchControls");
  if (!root) return;
  const cards = window.companyCards || [];
  const statusCounts = companyStatusFilters.reduce((acc, filter) => {
    acc[filter] = filter === "全部"
      ? cards.length
      : cards.filter((company) => companyMatchesStatusName(company, filter)).length;
    return acc;
  }, {});
  const focusCounts = companyFocusGroups.reduce((acc, [key]) => {
    acc[key] = cards.filter((company) => companyMatchesFocusKey(company, key)).length;
    return acc;
  }, {});

  root.innerHTML = `
    <div class="company-control-row">
      <label class="company-sort-control">
        <span>排序</span>
        <select data-company-sort>
          ${companySortOptions.map(([value, label]) => `<option value="${value}" ${companyViewState.sort === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
      <div class="company-status-filters" aria-label="研究状态筛选">
        <span>研究状态</span>
        <div>
          ${companyStatusFilters.map((filter) => `
            <button class="terminal-filter ${companyViewState.statusFilter === filter ? "active" : ""}" type="button" data-company-status="${filter}">
              ${filter} ${statusCounts[filter] || 0}
            </button>
          `).join("")}
        </div>
      </div>
    </div>
    <div class="company-focus-groups" aria-label="重点关注分组">
      <span>重点关注</span>
      <div>
        ${companyFocusGroups.map(([key, label, desc]) => `
          <button class="company-focus-card ${companyViewState.focus === key ? "active" : ""}" type="button" data-company-focus="${key}">
            <strong>${label}<em>${focusCounts[key] || 0}</em></strong>
            <p>${desc}</p>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function isAhShareCompany(company) {
  return /(\.SS|\.SZ|\d{4}\.HK)/.test(company.ticker || "");
}

function isChinaLinkedCompany(company) {
  if (isAhShareCompany(company)) return true;
  return Boolean(getChineseAlias(company));
}

function getCompanySourceCount(company) {
  return (company.sourceIds || []).filter(Boolean).length;
}

function getCompanyExposureRank(company) {
  return {
    "极高": 4,
    "高": 3,
    "中高": 2,
    "中": 1,
    "低": 0
  }[company.aiExposure || "中"] ?? 1;
}

function getCompanyRiskRank(company) {
  return {
    "高": 4,
    "中高": 3,
    "中": 2,
    "中低": 1,
    "低": 0
  }[company.riskRating || "中"] ?? 2;
}

function getCompanyResearchTags(company) {
  const tags = [];
  if (company.deepDive) tags.push("已深挖");
  if (getCompanySourceCount(company) > 0) tags.push("有来源");
  if (getCompanySourceCount(company) <= 1) tags.push("来源待加强");
  if (isAhShareCompany(company)) tags.push("A/H 股");
  return tags;
}

function companyMatchesStatusName(company, statusName) {
  switch (statusName) {
    case "已深挖":
      return Boolean(company.deepDive);
    case "有来源":
      return getCompanySourceCount(company) > 0;
    case "来源待加强":
      return getCompanySourceCount(company) <= 1;
    case "A/H 股":
      return isAhShareCompany(company);
    default:
      return true;
  }
}

function companyMatchesStatusFilter(company) {
  return companyMatchesStatusName(company, companyViewState.statusFilter);
}

function companyMatchesFocusKey(company, focusKey) {
  switch (focusKey) {
    case "highExposure":
      return ["极高", "高"].includes(company.aiExposure || "中");
    case "deepDive":
      return Boolean(company.deepDive);
    case "ahShare":
      return isAhShareCompany(company);
    case "highRisk":
      return ["高", "中高"].includes(company.riskRating || "中");
    default:
      return true;
  }
}

function companyMatchesFocusGroup(company) {
  return companyMatchesFocusKey(company, companyViewState.focus);
}

function getCompanyFocusLabel(key) {
  const item = companyFocusGroups.find(([value]) => value === key);
  return item ? item[1] : "";
}

function getCompanySortLabel(key) {
  const item = companySortOptions.find(([value]) => value === key);
  return item ? item[1] : "";
}

function sortCompanyCards(cards) {
  return cards
    .map((company, index) => ({ company, index }))
    .sort((a, b) => {
      if (companyViewState.sort === "aiExposure") {
        return getCompanyExposureRank(b.company) - getCompanyExposureRank(a.company) || a.index - b.index;
      }
      if (companyViewState.sort === "risk") {
        return getCompanyRiskRank(b.company) - getCompanyRiskRank(a.company) || a.index - b.index;
      }
      if (companyViewState.sort === "deepDive") {
        return Number(Boolean(b.company.deepDive)) - Number(Boolean(a.company.deepDive)) || a.index - b.index;
      }
      if (companyViewState.sort === "chinaMarket") {
        return Number(isChinaLinkedCompany(b.company)) - Number(isChinaLinkedCompany(a.company)) || a.index - b.index;
      }
      return a.index - b.index;
    })
    .map(({ company }) => company);
}

function getChineseAlias(company) {
  return (company.aliases || []).find((alias) => /[\u3400-\u9fff]/.test(alias) && !/^\d/.test(alias));
}

function getCompanyDisplayName(company) {
  const chineseAlias = getChineseAlias(company);
  return isAhShareCompany(company) && chineseAlias ? chineseAlias : company.name;
}

function getCompanyDisplayAliases(company) {
  const displayName = getCompanyDisplayName(company);
  return [...new Set([company.name, ...(company.aliases || [])])].filter((item) => item && item !== displayName);
}

function getCompanyLabelByName(name) {
  const company = (window.companyCards || []).find((item) => item.name === name);
  return company ? getCompanyDisplayName(company) : name;
}

function renderCompanyDeepDive(company) {
  const deep = company.deepDive;
  if (!deep) return "";
  const displayName = getCompanyDisplayName(company);

  return `
    <section class="company-deep-dive" aria-label="${displayName} 深度研究">
      <div class="deep-dive-head">
        <span>${deep.rank}</span>
        <strong>${deep.capexNode}</strong>
      </div>
      <p>${enhanceTerms(deep.investmentLens)}</p>
      <div class="deep-dive-grid">
        <div>
          <h4>价值驱动</h4>
          <ul>${deep.valueDrivers.map((item) => `<li>${enhanceTerms(item)}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>关键 KPI</h4>
          <ul>${deep.watchKpis.map((item) => `<li>${enhanceTerms(item)}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>接口摩擦</h4>
          <ul>${deep.frictionPoints.map((item) => `<li>${enhanceTerms(item)}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>催化剂</h4>
          <ul>${deep.catalysts.map((item) => `<li>${enhanceTerms(item)}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="peer-row">
        <span>同业对照</span>
        ${deep.peers.map((peer) => `<button class="mini-pill" type="button" data-company-peer="${peer}">${getCompanyLabelByName(peer)}</button>`).join("")}
      </div>
    </section>
  `;
}

function getSourceQuality(source) {
  if (window.getSourceQuality) return window.getSourceQuality(source);
  if (!source) return "待核验";
  return source.quality || source.confidence || "研究参考";
}

function renderCompanySourceQuality(company) {
  const registry = window.sourceRegistry || [];
  const byId = new Map(registry.map((source) => [source.id, source]));
  const sources = (company.sourceIds || []).map((id) => byId.get(id)).filter(Boolean);
  if (!sources.length) return "来源待补强";
  const summary = Array.from(new Set(sources.map(getSourceQuality)));
  return `${summary.join(" / ")} · ${sources.length} 条`;
}

function getCompanySearchTerms() {
  return companyViewState.query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

function companyMatchesQuery(company, terms) {
  if (!terms.length) return true;
  const haystack = getCompanySearchText(company);
  return terms.every((term) => haystack.includes(term));
}

function highlightCompanyMatch(text) {
  const terms = getCompanySearchTerms();
  if (!terms.length || !text) return text || "";
  const pattern = terms
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  return String(text).replace(new RegExp(`(${pattern})`, "gi"), `<mark class="search-hit">$1</mark>`);
}

function renderCompanyCardsGrid(cards) {
  return `
    <div class="company-grid">
      ${cards.map((company) => {
        const displayName = getCompanyDisplayName(company);
        const displayAliases = getCompanyDisplayAliases(company);
        const detailId = `company-detail-${company.name.replace(/[^a-z0-9\u3400-\u9fff]+/gi, "-")}`;
        const researchTags = getCompanyResearchTags(company);
        return `
        <article class="company-card ${company.deepDive ? "company-card-deep" : ""}">
          <header>
            <div>
              <span class="status-chip">${company.status}</span>
              <h3>${highlightCompanyMatch(displayName)}</h3>
              ${displayAliases.length ? `<p class="company-aliases">${displayAliases.map(highlightCompanyMatch).join(" · ")}</p>` : ""}
            </div>
            <strong class="ticker">${highlightCompanyMatch(company.ticker)}</strong>
          </header>
          <div class="company-research-tags" aria-label="${displayName} 研究状态">
            ${researchTags.map((tag) => `<span class="${tag === "来源待加强" ? "needs-source" : ""}">${tag}</span>`).join("")}
          </div>
          <div class="company-meta">
            ${company.layers.map((item) => `<span>${item}</span>`).join("")}
            ${company.chains.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <div class="company-scoreline">
            <span>AI 暴露度：<strong>${company.aiExposure || "中"}</strong></span>
            <span>风险等级：<strong>${company.riskRating || "中"}</strong></span>
          </div>
          <p class="company-moat-summary">${enhanceTerms(highlightCompanyMatch(company.moat))}</p>
          <div class="company-card-actions">
            ${(company.themes || []).slice(0, 2).map((item) => `<span>${highlightCompanyMatch(item)}</span>`).join("")}
          </div>
          <details class="company-details" id="${detailId}">
            <summary>详情</summary>
            <dl class="company-fields">
              <div><dt>受益逻辑</dt><dd>${enhanceTerms(highlightCompanyMatch(company.beneficiary))}</dd></div>
              <div><dt>关键风险</dt><dd>${enhanceTerms(highlightCompanyMatch(company.risks))}</dd></div>
              <div><dt>投资主题</dt><dd>${(company.themes || []).map((item) => `<button class="mini-pill" type="button" data-knowledge="${encodeURIComponent(JSON.stringify({ topic: item, kicker: `投资主题 · ${displayName}`, summary: `${item} 是 ${displayName} 在 AI 五层蛋糕中的主要价值暴露方向，需结合订单、客户验证、CAPEX 周期和竞争格局持续跟踪。`, sections: [["关注变量", [company.beneficiary, company.risks]], ["关联层链", [[...company.layers, ...company.chains].join(" / ")]]] }))}">${item}</button>`).join("")}</dd></div>
              <div><dt>代表产品</dt><dd>${company.products.map((item) => `<button class="mini-pill" type="button" data-knowledge="${encodeURIComponent(JSON.stringify({ topic: item, kicker: `公司产品 · ${displayName}`, summary: `${item} 是 ${displayName} 在 AI 五层蛋糕中的关键产品或能力入口。它的研究价值在于观察该产品如何把公司的护城河转化为订单、客户锁定、成本优势或生态控制权。`, sections: [["产业位置", [[...company.layers, ...company.chains].join(" / ")]], ["价值捕获", [company.beneficiary]], ["风险约束", [company.risks]], ["来源锚点", (company.sourceIds || []).map((id) => `<a href="pages/sources.html#${id}">${id}</a>`)]] }))}">${item}</button>`).join("")}</dd></div>
              <div><dt>来源质量</dt><dd>${renderCompanySourceQuality(company)}</dd></div>
              <div><dt>来源锚点</dt><dd>${renderInlineSourceBadges(company.sourceIds || [], true)}</dd></div>
            </dl>
            ${renderCompanyDeepDive(company)}
          </details>
        </article>
      `; }).join("")}
    </div>
  `;
}

function getCompanySearchText(company) {
  const deep = company.deepDive;
  return [
    company.name,
    company.ticker,
    ...(company.aliases || []),
    ...(company.layers || []),
    ...(company.chains || []),
    ...(company.themes || []),
    ...(company.products || []),
    company.status,
    company.aiExposure,
    company.riskRating,
    company.moat,
    company.beneficiary,
    company.risks,
    ...(company.sourceIds || []),
    deep?.rank,
    deep?.capexNode,
    deep?.investmentLens,
    ...(deep?.valueDrivers || []),
    ...(deep?.watchKpis || []),
    ...(deep?.frictionPoints || []),
    ...(deep?.catalysts || []),
    ...(deep?.peers || [])
  ].filter(Boolean).join(" ").toLowerCase();
}

function renderCompanyTerminal(filter = "全部") {
  const root = document.querySelector("#companyTerminal");
  if (!root) return;
  const cards = window.companyCards || [];
  const normalizedQuery = companyViewState.query.trim().toLowerCase();
  const searchTerms = getCompanySearchTerms();
  const filtered = filter === "全部"
    ? cards
    : cards.filter((company) => company.layers.includes(filter) || company.chains.includes(filter) || (company.themes || []).includes(filter));
  const searched = normalizedQuery
    ? filtered.filter((company) => companyMatchesQuery(company, searchTerms))
    : filtered;
  const statusFiltered = searched.filter(companyMatchesStatusFilter);
  const focusFiltered = statusFiltered.filter(companyMatchesFocusGroup);
  const visible = sortCompanyCards(focusFiltered);
  const shouldLimit = !companyViewState.showAll && visible.length > companyViewState.pageSize;
  const rendered = shouldLimit ? visible.slice(0, companyViewState.pageSize) : visible;
  const activeChips = [
    filter !== "全部" ? ["筛选", filter, "data-company-clear-filter"] : null,
    normalizedQuery ? ["搜索", companyViewState.query, "data-company-clear-query"] : null,
    companyViewState.statusFilter !== "全部" ? ["状态", companyViewState.statusFilter, "data-company-clear-status"] : null,
    companyViewState.focus ? ["重点", getCompanyFocusLabel(companyViewState.focus), "data-company-clear-focus"] : null,
    companyViewState.sort !== "default" ? ["排序", getCompanySortLabel(companyViewState.sort), "data-company-clear-sort"] : null
  ].filter(Boolean);

  root.innerHTML = `
    <div class="terminal-summary">
      <strong>${visible.length}</strong>
      <span>${normalizedQuery ? `条搜索匹配：${companyViewState.query}` : "家公司 / 平台进入当前视图"}。当前展示 ${rendered.length} 家摘要卡，细节可展开。</span>
    </div>
    ${activeChips.length ? `
      <div class="company-active-context" aria-label="当前公司筛选条件">
        ${activeChips.map(([label, value, action]) => `
          <button type="button" ${action}>
            <span>${label}</span>
            <strong>${value}</strong>
            <em>清除</em>
          </button>
        `).join("")}
      </div>
    ` : ""}
    ${visible.length ? renderCompanyCardsGrid(rendered) : `
      <div class="empty-state">
        <strong>没有匹配公司</strong>
        <p>试试公司名、ticker、中文别名、主题、产品、层级或产业链关键词。</p>
      </div>
    `}
    ${visible.length > companyViewState.pageSize ? `
      <div class="company-view-controls">
        <button class="secondary-action compact" type="button" data-company-toggle-all>
          ${companyViewState.showAll ? "收起为摘要数量" : `显示全部 ${visible.length} 家`}
        </button>
      </div>
    ` : ""}
  `;
}

function setCompanyFilter(filter) {
  companyViewState.filter = filter;
  companyViewState.showAll = false;
  document.querySelectorAll("#companyFilters .terminal-filter").forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === filter);
  });
  renderCompanyTerminal(filter);
}

function clearCompanySearch() {
  companyViewState.query = "";
  const input = document.querySelector("#companySearchInput");
  if (input) input.value = "";
}

function renderCompanyView() {
  renderCompanyResearchControls();
  renderCompanyTerminal(companyViewState.filter);
}

function getCompanyByName(name) {
  return (window.companyCards || []).find((company) => company.name === name);
}

function getCompanyMarket(company) {
  if (!company) return "其他";
  const ticker = company.ticker || "";
  if (/\.SS|\.SZ/.test(ticker)) return "A股";
  if (/\d{4}\.HK/.test(ticker)) return "港股";
  if (/^[A-Z.-]+$/.test(ticker)) return "美股";
  if (/\.TW|\.T$/.test(ticker)) return "亚洲其他";
  return "其他";
}

function getComparisonRows(table, state) {
  const query = state.query.trim().toLowerCase();
  return table.rows.map((row) => {
    const company = getCompanyByName(row.companyName);
    return { ...row, company };
  }).filter(({ company, ...row }) => {
    const market = getCompanyMarket(company);
    const exposure = company?.aiExposure || "中";
    const displayName = company ? getCompanyDisplayName(company) : row.companyName;
    const haystack = [
      displayName,
      row.companyName,
      company?.ticker,
      ...(company?.aliases || []),
      row.segment,
      row.valueNode,
      row.moat,
      ...(row.kpis || []),
      ...(row.risks || []),
      ...(row.catalysts || [])
    ].filter(Boolean).join(" ").toLowerCase();

    return (state.segment === "全部" || row.segment === state.segment)
      && (state.market === "全部" || market === state.market)
      && (state.exposure === "全部" || exposure === state.exposure)
      && (!query || haystack.includes(query));
  });
}

function renderComparisonSummary(table, rows) {
  const segmentCounts = countByValue(rows, "segment");
  const marketCounts = rows.reduce((acc, row) => {
    const market = getCompanyMarket(row.company);
    acc[market] = (acc[market] || 0) + 1;
    return acc;
  }, {});
  const exposureCounts = rows.reduce((acc, row) => {
    const exposure = row.company?.aiExposure || "中";
    acc[exposure] = (acc[exposure] || 0) + 1;
    return acc;
  }, {});

  return `
    <div class="comparison-hero">
      <div>
        <p class="eyebrow">${table.key}</p>
        <h3>${table.title}</h3>
        <p>${enhanceTerms(table.thesis)}</p>
      </div>
      <div class="comparison-stats">
        <article><span>当前公司</span><strong>${rows.length}</strong></article>
        <article><span>价值节点</span><strong>${Object.keys(segmentCounts).length}</strong></article>
        <article><span>A/H 标的</span><strong>${(marketCounts["A股"] || 0) + (marketCounts["港股"] || 0)}</strong></article>
        <article><span>高暴露</span><strong>${(exposureCounts["极高"] || 0) + (exposureCounts["高"] || 0)}</strong></article>
      </div>
    </div>
  `;
}

function renderComparisonControls(table, state) {
  const tables = window.peerComparisonTables || [];
  const markets = ["全部", "A股", "港股", "美股", "亚洲其他", "其他"];
  const exposures = ["全部", "极高", "高", "中高", "中"];
  return `
    <div class="comparison-controls">
      <label>
        <span>专题表</span>
        <select data-comparison-table>
          ${tables.map((item) => `<option value="${item.key}" ${state.tableKey === item.key ? "selected" : ""}>${item.title}</option>`).join("")}
        </select>
      </label>
      <div class="comparison-tabs" aria-label="价值节点筛选">
        ${table.filters.map((filter) => `<button class="${state.segment === filter ? "active" : ""}" type="button" data-comparison-segment="${filter}">${filter}</button>`).join("")}
      </div>
      <label>
        <span>市场</span>
        <select data-comparison-market>
          ${markets.map((market) => `<option value="${market}" ${state.market === market ? "selected" : ""}>${market}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>AI 暴露度</span>
        <select data-comparison-exposure>
          ${exposures.map((exposure) => `<option value="${exposure}" ${state.exposure === exposure ? "selected" : ""}>${exposure}</option>`).join("")}
        </select>
      </label>
      <label class="comparison-search">
        <span>搜索</span>
        <input type="search" value="${state.query}" placeholder="公司 / ticker / CPO / PCB..." data-comparison-search />
      </label>
    </div>
  `;
}

function renderTagList(items = [], className = "comparison-tags") {
  return `<div class="${className}">${items.map((item) => `<span>${enhanceTerms(item)}</span>`).join("")}</div>`;
}

function renderComparisonTable(table, rows, expanded) {
  if (!rows.length) {
    return `<div class="terminal-summary"><strong>0</strong><span>没有匹配公司，换一个价值节点或搜索词试试。</span></div>`;
  }

  return `
    <div class="comparison-table-wrap">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>公司</th>
            <th>市场 / 暴露度</th>
            <th>产业位置</th>
            <th>AI 价值节点</th>
            <th>核心护城河</th>
            <th>关键 KPI</th>
            <th>风险 / 催化剂</th>
            <th>来源</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => {
            const company = row.company;
            const displayName = company ? getCompanyDisplayName(company) : row.companyName;
            const aliases = company ? getCompanyDisplayAliases(company).slice(0, 3) : [];
            const deep = company?.deepDive;
            const sourceIds = [...new Set([...(row.sourceIds || []), ...(company?.sourceIds || [])])].slice(0, 5);
            const payload = encodeURIComponent(JSON.stringify({
              topic: `${displayName} · 同业对照`,
              kicker: `Peer Comparison · ${row.segment}`,
              summary: `${displayName} 位于 ${row.valueNode}。${row.moat}`,
              sections: [
                ["市场与暴露", [`${getCompanyMarket(company)} · ${company?.ticker || "N/A"}`, `AI 暴露度：${company?.aiExposure || "中"}`, `风险等级：${company?.riskRating || "中"}`]],
                ["关键 KPI", row.kpis],
                ["主要风险", row.risks],
                ["催化剂", row.catalysts],
                ["深度卡摘要", deep ? [deep.investmentLens] : ["暂无独立深度卡"]],
                ["来源锚点", sourceIds.map((id) => `<a href="pages/sources.html#${id}">${id}</a>`)]
              ]
            }));
            return `
              <tr class="${expanded === row.companyName ? "expanded" : ""}">
                <td>
                  <button class="comparison-company" type="button" data-comparison-expand="${row.companyName}">
                    <strong>${displayName}</strong>
                    <small>${company?.ticker || "N/A"}</small>
                  </button>
                  ${aliases.length ? `<p class="comparison-aliases">${aliases.join(" · ")}</p>` : ""}
                </td>
                <td>
                  <span class="kpi-pill">${getCompanyMarket(company)}</span>
                  <span class="kpi-pill muted">${company?.aiExposure || "中"}</span>
                  <span class="kpi-pill muted">${company?.riskRating || "中"}风险</span>
                </td>
                <td>${row.segment}</td>
                <td>${enhanceTerms(row.valueNode)}</td>
                <td>${enhanceTerms(row.moat)}</td>
                <td>${renderTagList(row.kpis)}</td>
                <td>
                  <div class="comparison-risk-catalyst">
                    <strong>风险</strong>${renderTagList(row.risks)}
                    <strong>催化</strong>${renderTagList(row.catalysts)}
                  </div>
                </td>
                <td>
                  ${renderInlineSourceBadges(sourceIds, true)}
                  <button class="mini-pill" type="button" data-knowledge="${payload}">详情</button>
                </td>
              </tr>
              ${expanded === row.companyName ? `
                <tr class="comparison-detail-row">
                  <td colspan="8">
                    <div class="comparison-detail">
                      <article>
                        <span>受益逻辑</span>
                        <p>${enhanceTerms(company?.beneficiary || row.moat)}</p>
                      </article>
                      <article>
                        <span>深度卡读法</span>
                        <p>${enhanceTerms(deep?.investmentLens || "当前以同业对照字段作为研究视角，独立深度卡状态为未覆盖。")}</p>
                      </article>
                      <article>
                        <span>同业对照</span>
                        <p>${(deep?.peers || []).map(getCompanyLabelByName).join(" · ") || "暂无独立 peer 字段"}</p>
                      </article>
                    </div>
                  </td>
                </tr>
              ` : ""}
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

const comparisonState = {
  tableKey: "optical-pcb",
  segment: "全部",
  market: "全部",
  exposure: "全部",
  query: "",
  expanded: ""
};

function renderPeerComparisonTerminal() {
  const root = document.querySelector("#comparisonTerminal");
  if (!root) return;
  const tables = window.peerComparisonTables || [];
  const table = tables.find((item) => item.key === comparisonState.tableKey) || tables[0];
  if (!table) {
    root.innerHTML = `<div class="terminal-summary"><strong>0</strong><span>暂无同业对照数据。</span></div>`;
    return;
  }
  const rows = getComparisonRows(table, comparisonState);
  root.innerHTML = `
    ${renderComparisonSummary(table, rows)}
    ${renderComparisonControls(table, comparisonState)}
    ${renderComparisonTable(table, rows, comparisonState.expanded)}
  `;
}

function bindPeerComparison() {
  const root = document.querySelector("#comparisonTerminal");
  if (!root) return;
  root.addEventListener("click", (event) => {
    const segmentButton = event.target.closest("[data-comparison-segment]");
    if (segmentButton) {
      comparisonState.segment = segmentButton.dataset.comparisonSegment;
      comparisonState.expanded = "";
      renderPeerComparisonTerminal();
      return;
    }

    const expandButton = event.target.closest("[data-comparison-expand]");
    if (!expandButton) return;
    comparisonState.expanded = comparisonState.expanded === expandButton.dataset.comparisonExpand ? "" : expandButton.dataset.comparisonExpand;
    renderPeerComparisonTerminal();
  });

  root.addEventListener("input", (event) => {
    const search = event.target.closest("[data-comparison-search]");
    if (!search) return;
    comparisonState.query = search.value;
    comparisonState.expanded = "";
    renderPeerComparisonTerminal();
  });

  root.addEventListener("change", (event) => {
    const table = event.target.closest("[data-comparison-table]");
    if (table) {
      comparisonState.tableKey = table.value;
      comparisonState.segment = "全部";
      comparisonState.market = "全部";
      comparisonState.exposure = "全部";
      comparisonState.query = "";
      comparisonState.expanded = "";
      renderPeerComparisonTerminal();
      return;
    }

    const market = event.target.closest("[data-comparison-market]");
    if (market) {
      comparisonState.market = market.value;
      comparisonState.expanded = "";
      renderPeerComparisonTerminal();
      return;
    }

    const exposure = event.target.closest("[data-comparison-exposure]");
    if (!exposure) return;
    comparisonState.exposure = exposure.value;
    comparisonState.expanded = "";
    renderPeerComparisonTerminal();
  });
}

function renderKpiFilters() {
  const root = document.querySelector("#kpiFilters");
  if (!root) return;
  const filters = ["全部", ...((window.kpiTables || []).map((table) => table.category))];
  root.innerHTML = filters.map((filter, index) => renderFilterButton(filter, filter, index === 0)).join("");
}

function renderKpiTerminal(filter = "全部") {
  const root = document.querySelector("#kpiTerminal");
  if (!root) return;
  const tables = window.kpiTables || [];
  const visible = filter === "全部" ? tables : tables.filter((table) => table.category === filter);
  const rowCount = visible.reduce((sum, table) => sum + table.rows.length, 0);

  root.innerHTML = `
    <div class="terminal-summary">
      <strong>${rowCount}</strong>
      <span>个 KPI 指标。默认以摘要卡展示，点击指标名查看完整口径、接口摩擦、投资读法和来源。</span>
    </div>
    ${visible.map((table) => `
    <article class="kpi-block">
      <header>
        <p class="eyebrow">${table.category}</p>
        <h3>${table.title}</h3>
      </header>
      <div class="kpi-card-grid">
        ${table.rows.map((row) => {
          const payload = encodeURIComponent(JSON.stringify({
            topic: row.metric,
            kicker: `量化 KPI · ${table.category}`,
            summary: `${row.metric} 是 ${row.layer} 在 ${row.chain} 中的核心研究指标。${row.investmentRead}`,
            sections: [
              ["量化口径", [`单位：${row.unit}`, `观察区间：${row.range}`, `方向：${row.direction}`, `更新：${row.updated}`]],
              ["适用场景", [row.applicability]],
              ["2026 观察口径", [row.benchmark]],
              ["接口摩擦", [row.friction]],
              ["投资读法", [row.investmentRead]],
              ["Source Registry", (row.sourceIds || []).map((id) => `<a href="pages/sources.html#${id}">${id}</a>`)]
            ]
          }));
          return `
            <article class="kpi-card">
              <button class="kpi-name" type="button" data-knowledge="${payload}">${row.metric}</button>
              <span class="kpi-confidence">${row.readLevel} · ${row.confidence}</span>
              <p>${enhanceTerms(row.range)}</p>
              <div>
                <span class="kpi-pill">${row.layer}</span>
                <span class="kpi-pill muted">${row.chain}</span>
              </div>
              <small>${enhanceTerms(row.investmentRead)}</small>
            </article>
          `;
        }).join("")}
      </div>
    </article>
  `).join("")}
  `;
}

function renderSensitivityFilters() {
  const root = document.querySelector("#sensitivityFilters");
  if (!root) return;
  const filters = ["全部", ...((window.valuationSensitivityThemes || []).map((theme) => theme.category))];
  root.innerHTML = [...new Set(filters)].map((filter, index) => renderFilterButton(filter, filter, index === 0)).join("");
}

function renderSensitivityCompanyPills(companies = []) {
  if (!companies.length) return "";
  return `
    <div class="sensitivity-company-pills">
      ${companies.map((name) => {
        const company = getCompanyByName(name);
        const label = company ? getCompanyDisplayName(company) : getCompanyLabelByName(name);
        const payload = encodeURIComponent(JSON.stringify({
          topic: label,
          kicker: "敏感性变量 · 关联标的",
          summary: company
            ? `${label} 与该敏感性变量相关。${company.beneficiary || company.moat || ""}`
            : `${label} 是该敏感性变量的关联标的，当前处于基础覆盖状态，仍需结合公司公告、财报和产业资料交叉核验。`,
          sections: [
            ["产业位置", company ? [`层级：${company.layers.join(" / ")}`, `链条：${company.chains.join(" / ")}`] : ["公司卡未覆盖"]],
            ["核心壁垒", [company?.moat || "需来源核验"]],
            ["受益逻辑", [company?.beneficiary || "需来源核验"]],
            ["代表产品 / 能力", company ? company.products : ["需来源核验"]]
          ]
        }));
        return `<button class="sensitivity-company-pill" type="button" data-knowledge="${payload}">${label}</button>`;
      }).join("")}
    </div>
  `;
}

function renderSensitivityVariable(theme, variable) {
  const payload = encodeURIComponent(JSON.stringify({
    topic: variable.name,
    kicker: `估值 / CAPEX 敏感性 · ${theme.category}`,
    summary: variable.whyItMatters,
    sections: [
      ["核心指标", [`${variable.metric}`, `方向：${variable.direction}`]],
      ["上行情景", [variable.upsideRead]],
      ["下行情景", [variable.downsideRead]],
      ["观察 KPI", variable.watchKpis],
      ["关联标的", variable.positiveCompanies.map((name) => getCompanyLabelByName(name))],
      ["Source Registry", (variable.sourceIds || []).map((id) => `<a href="pages/sources.html#${id}">${id}</a>`)]
    ]
  }));
  return `
    <article class="sensitivity-variable">
      <header>
        <button class="sensitivity-variable-title" type="button" data-knowledge="${payload}">${enhanceTerms(variable.name)}</button>
        <span>${variable.metric}</span>
      </header>
      <p>${enhanceTerms(variable.whyItMatters)}</p>
      <div class="sensitivity-reads">
        <div>
          <strong>上行情景</strong>
          <p>${enhanceTerms(variable.upsideRead)}</p>
        </div>
        <div>
          <strong>下行情景</strong>
          <p>${enhanceTerms(variable.downsideRead)}</p>
        </div>
      </div>
      <div class="sensitivity-kpis">
        ${(variable.watchKpis || []).map((kpi) => `<span>${enhanceTerms(kpi)}</span>`).join("")}
      </div>
      ${renderSensitivityCompanyPills(variable.positiveCompanies)}
      ${renderInlineSourceBadges(variable.sourceIds, true)}
    </article>
  `;
}

function renderSensitivityTerminal(filter = "全部") {
  const root = document.querySelector("#sensitivityTerminal");
  if (!root) return;
  const themes = window.valuationSensitivityThemes || [];
  const visible = filter === "全部" ? themes : themes.filter((theme) => theme.category === filter);
  const variableCount = visible.reduce((sum, theme) => sum + theme.variables.length, 0);

  root.innerHTML = `
    <div class="terminal-summary">
      <strong>${visible.length}</strong>
      <span>组敏感性主题 / ${variableCount} 个关键变量。用于判断 CAPEX 兑现、毛利弹性和产业链估值重估方向。</span>
    </div>
    <div class="sensitivity-grid">
      ${visible.map((theme) => {
        const payload = encodeURIComponent(JSON.stringify({
          topic: theme.title,
          kicker: `估值 / CAPEX 敏感性 · ${theme.maturity}`,
          summary: theme.thesis,
          sections: [
            ["核心问题", [theme.primaryQuestion]],
            ["研究读法", theme.playbook],
            ["关键变量", theme.variables.map((variable) => `${variable.name}：${variable.metric}`)]
          ]
        }));
        return `
          <article class="sensitivity-theme-card">
            <header>
              <div>
                <p class="eyebrow">${theme.category}</p>
                <button class="sensitivity-theme-title" type="button" data-knowledge="${payload}">${theme.title}</button>
              </div>
              <span>${theme.maturity}</span>
            </header>
            <p class="sensitivity-question">${enhanceTerms(theme.primaryQuestion)}</p>
            <p class="sensitivity-thesis">${enhanceTerms(theme.thesis)}</p>
            <div class="sensitivity-kpis">
              ${theme.variables.slice(0, 3).map((variable) => `<span>${enhanceTerms(variable.name)}</span>`).join("")}
            </div>
            <details class="sensitivity-details">
              <summary>展开变量与读法</summary>
              <div class="sensitivity-playbook">
                ${theme.playbook.map((item) => `<p>${enhanceTerms(item)}</p>`).join("")}
              </div>
              <div class="sensitivity-variable-list">
                ${theme.variables.map((variable) => renderSensitivityVariable(theme, variable)).join("")}
              </div>
            </details>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderInlineSourceBadges(ids = [], linked = true) {
  if (!ids.length) return "";
  const registry = window.sourceRegistry || [];
  const byId = new Map(registry.map((source) => [source.id, source]));
  return `<div class="source-badges">${ids.map((id) => {
    const source = byId.get(id);
    if (!source) return `<span class="source-badge missing">Missing source: ${id}</span>`;
    const quality = getSourceQuality(source);
    const qualityClass = window.getSourceQualityClass ? window.getSourceQualityClass(source) : "";
    return linked
      ? `<a class="source-badge ${qualityClass}" href="pages/sources.html#${source.id}" title="${source.type} · ${source.confidence} · ${source.note}">${source.publisher} · ${quality}</a>`
      : `<span class="source-badge ${qualityClass}" title="${source.type} · ${source.confidence} · ${source.note}">${source.publisher} · ${quality}</span>`;
  }).join("")}</div>`;
}

function bindTerminalFilters() {
  document.querySelector("#layerGrid")?.addEventListener("click", (event) => {
    const companyButton = event.target.closest("[data-layer-company-query]");
    const layerButton = event.target.closest("[data-layer-company-filter]");
    if (!companyButton && !layerButton) return;

    activateCategory("companies", true);
    clearCompanySearch();

    if (companyButton) {
      const query = companyButton.dataset.layerCompanyQuery;
      companyViewState.query = query;
      const input = document.querySelector("#companySearchInput");
      if (input) input.value = query;
      setCompanyFilter("全部");
      return;
    }

    setCompanyFilter(layerButton.dataset.layerCompanyFilter);
  });

  document.querySelector("#chainBoard")?.addEventListener("click", (event) => {
    const companyButton = event.target.closest("[data-chain-company-query]");
    const chainButton = event.target.closest("[data-chain-company-filter]");
    if (!companyButton && !chainButton) return;

    activateCategory("companies", true);
    clearCompanySearch();

    if (companyButton) {
      const query = companyButton.dataset.chainCompanyQuery;
      companyViewState.query = query;
      const input = document.querySelector("#companySearchInput");
      if (input) input.value = query;
      setCompanyFilter("全部");
      return;
    }

    setCompanyFilter(chainButton.dataset.chainCompanyFilter);
  });

  document.querySelector("#companyFilters")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    setCompanyFilter(button.dataset.filter);
  });

  document.querySelector("#companyResearchControls")?.addEventListener("change", (event) => {
    const sort = event.target.closest("[data-company-sort]");
    if (!sort) return;
    companyViewState.sort = sort.value;
    companyViewState.showAll = false;
    renderCompanyView();
  });

  document.querySelector("#companyResearchControls")?.addEventListener("click", (event) => {
    const statusButton = event.target.closest("[data-company-status]");
    if (statusButton) {
      companyViewState.statusFilter = statusButton.dataset.companyStatus;
      companyViewState.showAll = false;
      renderCompanyView();
      return;
    }

    const focusButton = event.target.closest("[data-company-focus]");
    if (!focusButton) return;
    companyViewState.focus = companyViewState.focus === focusButton.dataset.companyFocus ? "" : focusButton.dataset.companyFocus;
    companyViewState.showAll = false;
    renderCompanyView();
    document.querySelector("#companyTerminal")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.querySelector("#companySearchInput")?.addEventListener("input", (event) => {
    companyViewState.query = event.target.value;
    companyViewState.showAll = false;
    renderCompanyTerminal(companyViewState.filter);
  });

  document.querySelector("#companyTerminal")?.addEventListener("click", (event) => {
    const clearFilter = event.target.closest("[data-company-clear-filter]");
    if (clearFilter) {
      setCompanyFilter("全部");
      return;
    }

    const clearQuery = event.target.closest("[data-company-clear-query]");
    if (clearQuery) {
      clearCompanySearch();
      renderCompanyTerminal(companyViewState.filter);
      return;
    }

    const clearStatus = event.target.closest("[data-company-clear-status]");
    if (clearStatus) {
      companyViewState.statusFilter = "全部";
      companyViewState.showAll = false;
      renderCompanyView();
      return;
    }

    const clearFocus = event.target.closest("[data-company-clear-focus]");
    if (clearFocus) {
      companyViewState.focus = "";
      companyViewState.showAll = false;
      renderCompanyView();
      return;
    }

    const clearSort = event.target.closest("[data-company-clear-sort]");
    if (clearSort) {
      companyViewState.sort = "default";
      companyViewState.showAll = false;
      renderCompanyView();
      return;
    }

    const toggleAll = event.target.closest("[data-company-toggle-all]");
    if (toggleAll) {
      companyViewState.showAll = !companyViewState.showAll;
      renderCompanyTerminal(companyViewState.filter);
      document.querySelector("#companyTerminal")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const peerButton = event.target.closest("[data-company-peer]");
    if (!peerButton) return;
    const peer = peerButton.dataset.companyPeer;
    clearCompanySearch();
    const root = document.querySelector("#companyTerminal");
    const visible = (window.companyCards || []).filter((company) => (
      company.name === peer ||
      (company.ticker || "").includes(peer) ||
      (company.themes || []).includes(peer) ||
      (company.products || []).includes(peer)
    ));
    if (root) {
      root.innerHTML = `
        <div class="terminal-summary">
          <strong>${visible.length}</strong>
          <span>家公司 / 平台匹配同业对照：${peer}</span>
        </div>
        ${renderCompanyCardsGrid(visible)}
      `;
    }
    document.querySelectorAll("#companyFilters .terminal-filter").forEach((item) => item.classList.remove("active"));
    root?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.querySelector("#portfolioDashboard")?.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-portfolio-filter]");
    if (filterButton) {
      clearCompanySearch();
      setCompanyFilter(filterButton.dataset.portfolioFilter);
      document.querySelector("#companyFilters")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const themeButton = event.target.closest("[data-portfolio-theme]");
    if (!themeButton) return;
    const theme = themeButton.dataset.portfolioTheme;
    clearCompanySearch();
    const root = document.querySelector("#companyTerminal");
    const visible = (window.companyCards || []).filter((company) => (company.themes || []).includes(theme));
    document.querySelectorAll("#companyFilters .terminal-filter").forEach((item) => item.classList.remove("active"));
    if (root) {
      root.innerHTML = `
        <div class="terminal-summary">
          <strong>${visible.length}</strong>
          <span>家公司 / 平台匹配投资主题：${theme}</span>
        </div>
        ${renderCompanyCardsGrid(visible)}
      `;
    }
    document.querySelector("#companyFilters")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.querySelector("#kpiFilters")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    document.querySelectorAll("#kpiFilters .terminal-filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderKpiTerminal(button.dataset.filter);
  });

  document.querySelector("#sensitivityFilters")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    document.querySelectorAll("#sensitivityFilters .terminal-filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderSensitivityTerminal(button.dataset.filter);
  });
}

function activateCategory(key, shouldScroll = false) {
  const nextCategory = contentCategories.find((category) => category.key === key) || contentCategories[0];
  const overviewHero = document.querySelector("#overview.hero");

  if (overviewHero) {
    overviewHero.hidden = nextCategory.key !== "overview";
  }

  document.querySelectorAll("[data-category-panel]").forEach((panel) => {
    const isActive = panel.dataset.categoryPanel === nextCategory.key;
    panel.hidden = !isActive;
  });

  document.querySelectorAll("[data-category-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.categoryLink === nextCategory.key);
  });

  if (shouldScroll) {
    document.querySelector(`#${nextCategory.panelId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function bindCategoryNavigation() {
  document.querySelectorAll("[data-category-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      activateCategory(link.dataset.categoryLink, true);
    });
  });

  const hashKey = contentCategories.find((category) => `#${category.panelId}` === window.location.hash || `#${category.key}` === window.location.hash)?.key;
  activateCategory(hashKey || contentCategories[0].key, false);
}

function buildGlobalSearchIndex() {
  const entries = [];
  const push = (item) => entries.push({
    title: item.title,
    type: item.type,
    body: item.body || "",
    tags: item.tags || [],
    url: item.url || "",
    topic: item.topic || item.title,
    kicker: item.kicker || item.type
  });

  layers.forEach((layer) => push({
    type: "层级",
    title: layer.name,
    body: `${layer.thesis} ${layer.status} ${layer.foundation} ${layer.segments.join(" ")} ${layer.metrics.join(" ")} ${layer.frontier.join(" ")}`,
    tags: [layer.name, "纵向五层"],
    url: layer.detailUrl
  }));

  chains.forEach((chain) => push({
    type: "产业链",
    title: chain.title,
    body: `${chain.desc} ${chain.path.join(" ")}`,
    tags: ["横向产业链"],
    url: chain.detailUrl
  }));

  Object.entries(window.matrixDeepDiveCards || {}).forEach(([title, card]) => push({
    type: "矩阵交点",
    title,
    body: `${card.summary} ${card.sections.map(([, items]) => items.join(" ")).join(" ")}`,
    tags: ["Deep-Dive", "矩阵"],
    topic: title,
    kicker: card.kicker
  }));

  (window.companyCards || []).forEach((company) => {
    const displayName = getCompanyDisplayName(company);
    push({
      type: "公司",
      title: displayName,
      body: `${company.name} ${company.ticker} ${(company.aliases || []).join(" ")} ${company.status} ${company.aiExposure || ""} ${company.riskRating || ""} ${company.moat} ${company.beneficiary} ${company.risks} ${(company.products || []).join(" ")} ${(company.themes || []).join(" ")} ${(company.sourceIds || []).join(" ")} ${company.deepDive ? `${company.deepDive.rank} ${company.deepDive.capexNode} ${company.deepDive.investmentLens} ${company.deepDive.valueDrivers.join(" ")} ${company.deepDive.watchKpis.join(" ")} ${company.deepDive.frictionPoints.join(" ")} ${company.deepDive.catalysts.join(" ")} ${company.deepDive.peers.join(" ")}` : ""}`,
      tags: [...company.layers, ...company.chains, company.status, company.aiExposure || "", company.riskRating || "", company.name, ...(company.aliases || []), ...(company.themes || []), ...(company.sourceIds || []), ...(company.deepDive ? [company.deepDive.rank, company.deepDive.capexNode, ...company.deepDive.peers] : [])].filter(Boolean),
      topic: displayName,
      kicker: "公司卡"
    });
  });

  (window.kpiTables || []).forEach((table) => {
    table.rows.forEach((row) => push({
      type: "KPI",
      title: row.metric,
      body: `${row.layer} ${row.chain} ${row.unit} ${row.range} ${row.direction} ${row.applicability} ${row.benchmark} ${row.friction} ${row.investmentRead} ${row.confidence} ${row.sourceIds.join(" ")}`,
      tags: [table.category, row.layer, row.chain, row.confidence, row.readLevel, ...row.sourceIds],
      topic: row.metric,
      kicker: "量化 KPI"
    }));
  });

  (window.valuationSensitivityThemes || []).forEach((theme) => {
    push({
      type: "敏感性",
      title: theme.title,
      body: `${theme.category} ${theme.primaryQuestion} ${theme.thesis} ${theme.playbook.join(" ")}`,
      tags: ["估值敏感性", "CAPEX", theme.category, theme.maturity],
      topic: theme.title,
      kicker: "估值 / CAPEX 敏感性"
    });
    theme.variables.forEach((variable) => push({
      type: "敏感性",
      title: `${theme.title} · ${variable.name}`,
      body: `${variable.metric} ${variable.direction} ${variable.whyItMatters} ${variable.upsideRead} ${variable.downsideRead} ${variable.watchKpis.join(" ")} ${variable.positiveCompanies.join(" ")} ${(variable.sourceIds || []).join(" ")}`,
      tags: ["估值敏感性", "CAPEX", theme.category, ...variable.watchKpis, ...variable.positiveCompanies, ...(variable.sourceIds || [])],
      topic: variable.name,
      kicker: `敏感性变量 · ${theme.category}`
    }));
  });

  (window.peerComparisonTables || []).forEach((table) => {
    table.rows.forEach((row) => {
      const company = getCompanyByName(row.companyName);
      const displayName = company ? getCompanyDisplayName(company) : row.companyName;
      push({
        type: "同业对照",
        title: `${displayName} · ${row.segment}`,
        body: `${table.title} ${table.description} ${row.companyName} ${company?.ticker || ""} ${(company?.aliases || []).join(" ")} ${row.segment} ${row.valueNode} ${row.moat} ${(row.kpis || []).join(" ")} ${(row.risks || []).join(" ")} ${(row.catalysts || []).join(" ")} ${(row.sourceIds || []).join(" ")}`,
        tags: ["同业对照", table.title, row.segment, getCompanyMarket(company), company?.aiExposure || "", ...(row.sourceIds || [])].filter(Boolean),
        url: "#peer-comparison",
        topic: `${displayName} · ${row.segment}`,
        kicker: "同业对照表"
      });
    });
  });

  (window.sourceRegistry || []).forEach((source) => push({
    type: "来源",
    title: source.title,
    body: `${source.publisher} ${source.date} ${source.type} ${source.confidence} ${source.note} ${source.usedFor.join(" ")}`,
    tags: [source.publisher, source.type, `可信度：${source.confidence}`, ...source.usedFor],
    url: "pages/sources.html",
    topic: source.title,
    kicker: "来源库"
  }));

  [
    {
      title: "HBM / AI 存储瓶颈",
      url: "pages/hbm-storage.html",
      tags: ["HBM", "DRAM", "NAND", "SSD", "AI 挤出效应", "存储", "芯片供应链"],
      body: "AI 数据中心把 HBM、服务器 DRAM、企业 SSD 和存储系统推到供给瓶颈位置；专题同时跟踪大厂产能转向 AI 后，消费电子、汽车电子、工业存储、小容量 NOR/SLC NAND、模组和控制器由谁补位。"
    },
    {
      title: "光互联 / OCS / AI 网络硬件",
      url: "pages/optical-ocs.html",
      tags: ["光互联", "OCS", "CPO", "LPO", "AEC", "SerDes", "PCB", "CCL", "AI 网络"],
      body: "AI 集群从单卡竞争进入网络 fabric 竞争；专题覆盖 800G/1.6T 光模块、OCS、CPO/LPO、硅光、AEC、SerDes、交换芯片、PCB/CCL 和数据中心网络硬件。"
    },
    {
      title: "AI 电力 / 数据中心能源",
      url: "pages/ai-power.html",
      tags: ["AI 电力", "数据中心能源", "PUE", "WUE", "PPA", "并网", "电网设备", "燃气轮机", "核能", "储能", "液冷"],
      body: "AI 数据中心扩张把电力容量、并网、PUE/WUE、长期 PPA、液冷、储能和数据中心选址推到前台；专题用于跟踪电力和能源基础设施如何约束 AI 工厂落地。"
    }
  ].forEach((topic) => push({
    type: "专题",
    title: topic.title,
    body: topic.body,
    tags: topic.tags,
    url: topic.url,
    topic: topic.title,
    kicker: "重点赛道深挖"
  }));

  return entries;
}

function renderSearchFilters(index) {
  const root = document.querySelector("#searchFilters");
  if (!root) return;
  const types = ["全部", ...Array.from(new Set(index.map((item) => item.type)))];
  root.innerHTML = types.map((type, index) => renderFilterButton(type, type, index === 0)).join("");
}

function renderGlobalSearchResults(index, query = "", filter = "全部") {
  const root = document.querySelector("#searchResults");
  if (!root) return;
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    root.innerHTML = `
      <div class="empty-state">
        <strong>输入关键词后开始搜索。</strong>
      </div>
    `;
    return;
  }

  const visible = index.filter((item) => {
    const matchesFilter = filter === "全部" || item.type === filter;
    const haystack = `${item.title} ${item.body} ${item.tags.join(" ")}`.toLowerCase();
    return matchesFilter && haystack.includes(normalized);
  }).slice(0, 80);

  root.innerHTML = `
    <div class="terminal-summary"><strong>${visible.length}</strong><span>条匹配结果</span></div>
    <div class="search-result-grid">
      ${visible.map((item) => {
        const payload = encodeURIComponent(JSON.stringify({
          topic: item.topic,
          kicker: item.kicker,
          summary: item.body,
          sections: [
            ["分类", [`${item.type} · ${item.tags.join(" / ") || "未标记"}`]],
            ["内容摘要", [item.body]],
            ["跳转", item.url ? [`<a href="${item.url}">打开相关深度页</a>`] : ["点击卡片会打开对应研究弹窗。"]]
          ]
        }));
        return `
          <button class="search-result-card" type="button" data-knowledge="${payload}">
            <span>${item.type}</span>
            <strong>${item.title}</strong>
            <p>${item.body}</p>
            <small>${item.tags.slice(0, 5).join(" / ")}</small>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function initGlobalSearch() {
  const root = document.querySelector("#searchResults");
  if (!root) return;
  const index = buildGlobalSearchIndex();
  let activeFilter = "全部";
  let query = "";
  renderSearchFilters(index);
  renderGlobalSearchResults(index, query, activeFilter);

  document.querySelector("#globalSearchInput")?.addEventListener("input", (event) => {
    query = event.target.value;
    renderGlobalSearchResults(index, query, activeFilter);
  });

  document.querySelector("#searchFilters")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll("#searchFilters .terminal-filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderGlobalSearchResults(index, query, activeFilter);
  });
}

function renderEnergyDeepDive() {
  const root = document.querySelector("#energyDashboard");
  if (!root) return;
  root.innerHTML = `
    <article class="energy-hero-card">
      <span>核心判断</span>
      <h3>${energyDeepDive.thesis}</h3>
    </article>
    <section class="energy-block">
      <h3>已核验事实</h3>
      <ul>${energyDeepDive.facts.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="energy-block">
      <h3>经典基础知识筑基</h3>
      <div class="detail-grid">${energyDeepDive.fundamentals.map((item) => `
        <article class="detail-card"><h4>${item.title}</h4><p>${item.body}</p></article>
      `).join("")}</div>
    </section>
    <section class="energy-block">
      <h3>2026 前沿技术路线</h3>
      <div class="detail-grid">${energyDeepDive.frontiers.map((item) => `
        <article class="detail-card frontier"><h4>${item.title}</h4><p>${item.body}</p></article>
      `).join("")}</div>
    </section>
    <section class="energy-block">
      <h3>核心名词</h3>
      <div class="glossary-grid">${energyDeepDive.glossary.map(([term, desc]) => `
        <button class="glossary-card" type="button" data-knowledge="${encodeURIComponent(JSON.stringify({ topic: term, layer: "能源层", kicker: "能源层 · 核心名词" }))}"><strong>${term}</strong><span>${desc}</span></button>
      `).join("")}</div>
    </section>
    <section class="energy-block split">
      <div>
        <h3>卡脖子瓶颈</h3>
        <ul>${energyDeepDive.bottlenecks.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h3>商业护城河</h3>
        <ul>${energyDeepDive.moat.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </section>
    <section class="energy-block split">
      <div>
        <h3>老牌公认巨头</h3>
        <ul>${energyDeepDive.players.giants.map(([name, desc]) => `<li><strong>${name}</strong>：${desc}</li>`).join("")}</ul>
      </div>
      <div>
        <h3>卡脖子隐形冠军</h3>
        <ul>${energyDeepDive.players.champions.map(([name, desc]) => `<li><strong>${name}</strong>：${desc}</li>`).join("")}</ul>
      </div>
    </section>
    <section class="energy-block">
      <h3>来源与待持续核验</h3>
      <div class="source-list">${energyDeepDive.sources.map(([title, href]) => `
        <a href="${href}" target="_blank" rel="noreferrer">${title}</a>
      `).join("")}</div>
    </section>
  `;
}

function bindKnowledgeCards() {
  document.addEventListener("click", (event) => {
    const matrixCompanyButton = event.target.closest("[data-matrix-company-query]");
    if (matrixCompanyButton) {
      closeKnowledgeCard();
      activateCategory("companies", true);
      clearCompanySearch();
      const query = matrixCompanyButton.dataset.matrixCompanyQuery;
      companyViewState.query = query;
      const input = document.querySelector("#companySearchInput");
      if (input) input.value = query;
      setCompanyFilter("全部");
      return;
    }

    const trigger = event.target.closest("[data-knowledge]");
    if (trigger) {
      const payload = JSON.parse(decodeURIComponent(trigger.dataset.knowledge));
      openKnowledgeCard(payload.topic, payload);
      return;
    }

    if (event.target.closest("[data-close-detail]")) {
      closeKnowledgeCard();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeKnowledgeCard();
  });
}

renderLayers();
renderMatrix();
renderEnergyDeepDive();
renderChains();
renderLinks();
renderPortfolioDashboard();
renderCompanyFilters();
renderCompanyResearchControls();
renderCompanyTerminal();
renderPeerComparisonTerminal();
renderKpiFilters();
renderKpiTerminal();
renderSensitivityFilters();
renderSensitivityTerminal();
initGlobalSearch();
bindCategoryNavigation();
bindTerminalFilters();
bindPeerComparison();
bindKnowledgeCards();
if (window.initTermPopups) window.initTermPopups();
