const roadmapTracks = [
  {
    id: "silicon",
    name: "芯片平台",
    thesis: "从单卡性能竞赛走向 rack-scale AI supercomputer，平台价值向 CPU/GPU/NVLink/网络/液冷/软件整柜绑定迁移。",
    color: "chip",
    events: [
      {
        year: "2024",
        phase: "Blackwell 起点",
        title: "Blackwell / GB200 把 GPU 竞争推向机柜级",
        status: "已发生",
        body: "Blackwell 时代的核心变化不是单卡发布，而是 GB200 NVL72 这类液冷 rack-scale 系统，把 GPU、Grace CPU、NVLink、网络和液冷绑定成一个交付单元。",
        impact: "服务器、液冷、网络、光模块和数据中心电力设施开始随 GPU 平台同步升级。",
        watch: ["GB200 NVL72 交付", "整柜功率", "NVLink 域", "液冷配套"],
        sourceIds: ["nvidia-gb200-nvl72"]
      },
      {
        year: "2025",
        phase: "Blackwell 爬坡",
        title: "Blackwell 供给从芯片爬坡转向整柜交付",
        status: "已发生",
        body: "市场关注点从 Blackwell 单芯片良率扩展到 HBM、CoWoS、整机柜系统、数据中心改造和客户验收。",
        impact: "AI capex 更像系统工程订单，非 GPU 价值量上升。",
        watch: ["HBM3E 配套", "CoWoS 交付", "客户验收", "机房改造"]
      },
      {
        year: "2026E",
        phase: "Rubin / Vera Rubin",
        title: "Vera Rubin NVL72 进入下一代 AI 工厂平台",
        status: "进行中",
        body: "NVIDIA 官方发布 Vera Rubin 平台，强调 Vera CPU、Rubin GPU、NVLink 6、SuperNIC、DPU、Spectrum-6 和机柜级系统协同。",
        impact: "芯片竞争单位进一步从 GPU 卡升级为 rack / pod / AI factory blueprint。",
        watch: ["NVLink 6", "Vera CPU", "Rubin GPU", "Spectrum-6", "客户部署"],
        sourceIds: ["nvidia-rubin-2026"],
        sources: [["NVIDIA Rubin", "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Kicks-Off-the-Next-Generation-of-AI-With-Rubin--Six-New-Chips-One-Incredible-AI-Supercomputer/default.aspx"]]
      },
      {
        year: "2027E",
        phase: "Rack-scale 标准化",
        title: "机柜级平台成为云厂商采购的默认单位",
        status: "预测",
        body: "若 Rubin 交付顺利，采购和评估将更少围绕单卡 FLOPS，更多围绕每 rack token、每瓦 token、液冷可维护性和跨数据中心互联。",
        impact: "ODM、液冷、电源、网络和数据中心 EPC 的议价能力继续上升。",
        watch: ["每 rack token", "每瓦 token", "机柜 MTTR", "跨 DC 网络"]
      }
    ]
  },
  {
    id: "memory",
    name: "HBM / 封装",
    thesis: "AI 芯片真实供给的闸门从先进制程扩展到 HBM、CoWoS、基板、known good die 和测试时间。",
    color: "memory",
    events: [
      {
        year: "2024",
        phase: "HBM3E 紧缺",
        title: "HBM3E 成为训练集群供给瓶颈",
        status: "已发生",
        body: "高端 GPU 需求把 HBM 从高性能内存变成 AI 加速器的战略物资，客户认证和良率决定实际供给。",
        impact: "内存厂盈利弹性上升，先进封装排产变成硬约束。",
        watch: ["HBM3E 良率", "客户认证", "12Hi 堆叠", "CoWoS 配套"]
      },
      {
        year: "2025",
        phase: "CoWoS 扩产",
        title: "先进封装成为比晶圆更敏感的供给变量",
        status: "已发生",
        body: "GPU 逻辑 die 做出来以后，还需要 HBM、interposer、基板和测试才能变成可交付加速器。",
        impact: "TSMC、OSAT、基板、封装设备和测试设备价值量同步上升。",
        watch: ["CoWoS-L/R", "基板翘曲", "测试时间", "known good die"]
      },
      {
        year: "2026E",
        phase: "HBM4 放量",
        title: "HBM4 与 Vera Rubin 平台绑定放量",
        status: "进行中",
        body: "Micron 官方称面向 NVIDIA Vera Rubin 的 HBM4 36GB 12H 已进入 high-volume production，带宽超过 2.8TB/s，并强调能效改善。",
        impact: "HBM4 base die、逻辑协同和客户认证将重塑内存厂、代工和封装关系。",
        watch: ["HBM4 认证", "base die", "带宽/功耗", "12H/16H", "封装良率"],
        sourceIds: ["micron-hbm4-vera-rubin"],
        sources: [["Micron HBM4", "https://micron.gcs-web.com/news-releases/news-release-details/micron-high-volume-production-hbm4-designed-nvidia-vera-rubin"]]
      },
      {
        year: "2027E",
        phase: "HBM4E / 3D 集成",
        title: "HBM4E、3D 堆叠和硅光互联进一步靠近计算核心",
        status: "预测",
        body: "长上下文和 reasoning 推理会继续拉高显存容量、带宽和能效要求，封装从后段工艺变成系统架构中心。",
        impact: "内存、封装、EDA/IP 和硅光路线的边界继续模糊。",
        watch: ["HBM4E", "3D 封装", "CPO", "热设计", "封装 EDA"]
      }
    ]
  },
  {
    id: "cooling",
    name: "数据中心 / 冷却",
    thesis: "AI 数据中心从风冷通用机房升级为高密液冷 AI Factory，瓶颈从机房面积变成电力、冷却和运维可靠性。",
    color: "infra",
    events: [
      {
        year: "2024",
        phase: "风冷极限",
        title: "风冷机房开始撞上高密 AI 机柜上限",
        status: "已发生",
        body: "GPU TDP 和机柜密度上升后，传统风冷面对热通量、噪音、空间和能效压力。",
        impact: "液冷从 HPC 小众方案进入 hyperscale AI 机房规划。",
        watch: ["Rack Density", "PUE", "热通量", "改造成本"]
      },
      {
        year: "2025",
        phase: "冷板液冷普及",
        title: "Direct-to-chip 冷板液冷成为 GB200 级系统主路线",
        status: "已发生",
        body: "高密 AI rack 要求 CDU、冷板、水路、漏液检测、机房电力和运维 SOP 一体设计。",
        impact: "Vertiv、Schneider、Eaton、服务器 ODM 和数据中心 EPC 获得新价值量。",
        watch: ["CDU 交付", "漏液检测", "运维 SOP", "水处理"]
      },
      {
        year: "2026E",
        phase: "100K 卡 AI Factory",
        title: "100K 卡级 AI 工厂把液冷和电力变成默认基础设施",
        status: "进行中",
        body: "Colossus、Stargate 等项目叙事推动 AI infra 从云资源转为工业化智能生产系统。",
        impact: "可交付 MW、变电站、液冷和运维能力决定算力上线速度。",
        watch: ["可交付 MW", "Rack Density", "MTBF/MTTR", "交付周期"],
        sourceIds: ["xai-colossus", "openai-stargate"]
      },
      {
        year: "2027E",
        phase: "浸没式 / 热复用",
        title: "浸没式冷却与热回收进入选择性场景",
        status: "预测",
        body: "冷板液冷仍会是主流，高功率密度、特殊地理和能源约束场景可能采用浸没式、热回收和更复杂的闭式水系统。",
        impact: "冷却方案会从单纯降温转向能效、可靠性、水资源和余热商业化的综合优化。",
        watch: ["Immersion", "WUE", "热回收", "维护复杂度"]
      }
    ]
  },
  {
    id: "model",
    name: "模型 / 推理",
    thesis: "模型竞争从 pretrain scaling 转向 test-time compute、长上下文、多模态和单位任务成本。",
    color: "model",
    events: [
      {
        year: "2024",
        phase: "长上下文与多模态",
        title: "模型从聊天能力扩展到文档、代码、图像、语音和屏幕",
        status: "已发生",
        body: "多模态和长上下文提升应用可用性，也把 KV cache、上下文压缩和评测污染推到台前。",
        impact: "推理引擎、RAG、模型路由和评测平台价值上升。",
        watch: ["Context Wall", "KV Cache", "多模态 eval", "RAG 质量"]
      },
      {
        year: "2025",
        phase: "Reasoning 模型",
        title: "o3 / Gemini thinking / Claude extended thinking 把能力转向推理时计算",
        status: "已发生",
        body: "模型在回答前投入更多内部推理，提升复杂数学、代码、规划和工具任务能力。",
        impact: "能力提升转化为 reasoning token、TTFT、P99 和推理成本压力。",
        watch: ["Reasoning Token", "TTFT", "P99", "任务成功率"],
        sourceIds: ["openai-o3-o4-mini", "google-gemini-25", "anthropic-claude-37"]
      },
      {
        year: "2026E",
        phase: "推理解耦",
        title: "Prefill/Decode、KV Cache 和模型路由成为推理云核心",
        status: "进行中",
        body: "推理系统围绕 prefill/decode 分离、prefix cache、speculative decoding、batching 和多模型路由优化毛利。",
        impact: "推理 runtime 从工程细节变成商业护城河。",
        watch: ["KV cache 命中率", "Speculative Decoding", "模型路由", "每 token 成本"],
        sourceIds: ["nvidia-dynamo"]
      },
      {
        year: "2027E",
        phase: "任务级智能",
        title: "模型评估从 benchmark 分数转向端到端任务成功率",
        status: "预测",
        body: "复杂任务、Agent 工作流和具身智能会迫使评测体系从问答正确率转向可执行、可审计、可复现的任务结果。",
        impact: "eval harness、观测、审计和安全评测平台成为模型商业化基础设施。",
        watch: ["Agent Success Rate", "Hallucination Rate", "工具调用成功率", "审计覆盖"]
      }
    ]
  },
  {
    id: "agent",
    name: "应用 / Agent",
    thesis: "应用层从 Copilot 提示词助手走向可授权、可审计、可回滚的 Agent 原生工作流。",
    color: "app",
    events: [
      {
        year: "2024",
        phase: "Copilot 扩散",
        title: "Copilot 成为办公、编程和客服的默认 AI 入口",
        status: "已发生",
        body: "AI 主要以助手形态嵌入已有软件，价值来自效率提升和用户体验改善。",
        impact: "分发入口和系统记录位置开始决定应用层议价权。",
        watch: ["席位渗透率", "使用频次", "留存", "节省时间"]
      },
      {
        year: "2025",
        phase: "Agent 产品化",
        title: "Codex、Agentforce、Copilot coding agent 推动异步任务执行",
        status: "已发生",
        body: "OpenAI Codex 被定位为云端软件工程 agent；Salesforce Agentforce 3 强调扩展 AI agents 所需的 visibility and control。",
        impact: "Agent 不再只是聊天 UI，而是进入代码、销售、客服和企业流程。",
        watch: ["任务完成率", "可见性/控制", "人工介入率", "动作权限"],
        sourceIds: ["openai-codex", "salesforce-agentforce-3", "github-copilot-coding-agent"],
        sources: [["OpenAI Codex", "https://openai.com/index/introducing-codex/"], ["Salesforce Agentforce 3", "https://www.salesforce.com/ap/news/press-releases/2025/06/24/salesforce-launches-agentforce-3-to-solve-the-biggest-blockers-to-scaling-ai-agents-visibility-and-control/"]]
      },
      {
        year: "2026E",
        phase: "Agent 原生架构",
        title: "Agent runtime、MCP、Memory、Sandbox 和 HITL 成为生产标配",
        status: "进行中",
        body: "企业开始把 Agent 当成可治理的软件系统，而不是模型功能：状态、工具、权限、审批、trace 和回滚都要工程化。",
        impact: "Agent 编排、工具网关、审计和垂直工作流平台价值上升。",
        watch: ["MCP", "Sandbox", "Tracing", "HITL", "Loop Rate"]
      },
      {
        year: "2027E",
        phase: "数字员工预算化",
        title: "Agent 从软件功能转为可衡量的数字劳动力预算项",
        status: "预测",
        body: "若任务成功率稳定提升，企业采购会从 seat 费转向任务量、结果、节省成本或 SLA。",
        impact: "应用层估值将更看真实 ROI、数据闭环和系统集成深度。",
        watch: ["ROI", "TCO", "续费扩张", "结果计费"]
      }
    ]
  },
  {
    id: "energy",
    name: "能源 / 电力",
    thesis: "AI 的底层瓶颈从 GPU 稀缺扩展到可交付电力、低碳基荷、PPA、并网和水资源。",
    color: "power",
    events: [
      {
        year: "2024",
        phase: "电力瓶颈显性化",
        title: "AI 数据中心从拿地转向抢电",
        status: "已发生",
        body: "大模型训练和推理负载增长让可交付 MW、并网排队和变压器交付成为项目成败变量。",
        impact: "电力入口比机房面积更稀缺。",
        watch: ["可交付 MW", "变压器交期", "电网容量", "土地许可"]
      },
      {
        year: "2025",
        phase: "PPA 与核能合作",
        title: "云厂商用长期 PPA、核能和表后供电锁定未来算力产能",
        status: "已发生",
        body: "Google-Kairos、Amazon-X-energy、Microsoft-Constellation 等合作说明电力从 ESG 叙事进入 AI 基础设施战略。",
        impact: "核电、燃气、储能、电气设备和数据中心开发商重新定价。",
        watch: ["PPA 年限", "低碳基荷", "表后供电", "SMR 许可"],
        sourceIds: ["google-kairos", "amazon-x-energy", "constellation-microsoft-ppa"]
      },
      {
        year: "2026E",
        phase: "Grid-to-Chip",
        title: "电力、液冷和机柜系统一体化设计",
        status: "进行中",
        body: "高密 AI rack 要求从变电站、UPS、母线、CDU 到服务器整柜联动设计。",
        impact: "电气设备商和热管理公司进入 AI 产业链核心。",
        watch: ["Grid-to-Chip", "PUE/WUE", "UPS", "CDU", "Rack Density"]
      },
      {
        year: "2027E",
        phase: "AI 电力金融化",
        title: "电力接入权和长期清洁基荷成为 AI 资产定价核心",
        status: "预测",
        body: "若推理负载持续增长，电力容量、低碳属性和区域 SLA 会像 GPU 一样成为可金融化、可签长约的算力底座。",
        impact: "能源公司、IDC、云厂商和设备商边界继续融合。",
        watch: ["长期 PPA", "容量合约", "电力负载率", "区域 SLA"]
      }
    ]
  }
];

window.roadmapTracks = roadmapTracks;
