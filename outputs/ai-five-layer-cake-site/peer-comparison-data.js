const peerComparisonTables = [
  {
    key: "ai-safety-eval-observability",
    title: "AI 安全、评测与可观测同业对照",
    description: "围绕 AI 从实验走向生产后的安全、治理、评测、数据标注、可观测和合规需求，比较模型安全、数据/评测服务、生产可观测、安全运营、企业权限数据层和高风险垂直应用。",
    thesis: "AI 应用上线后，真正的预算不只在模型调用，还在防止幻觉、越权、泄密、漂移、成本失控和工具误操作。安全评测链的价值捕获点是可信数据、红队评测、LLM 可观测、权限治理、SOC Agent 和可审计工作流。",
    filters: ["全部", "模型治理/安全框架", "数据标注/评测", "LLM 可观测/网关", "安全运营/SOC", "企业权限/RAG", "高风险垂直场景"],
    rows: [
      {
        companyName: "Anthropic",
        segment: "模型治理/安全框架",
        valueNode: "长上下文、Constitutional AI、企业安全模型",
        kpis: ["Claude 企业使用", "上下文长度", "安全评测", "API 收入"],
        moat: "安全定位、长上下文和 MCP 生态，使其在企业可信 Agent 场景中有差异化。",
        risks: ["算力成本", "模型竞争", "渠道依赖", "商业化"],
        catalysts: ["Claude 迭代", "MCP 工具生态", "企业安全部署"],
        sourceIds: ["anthropic-claude-37", "nist-ai-rmf"]
      },
      {
        companyName: "OpenAI",
        segment: "模型治理/安全框架",
        valueNode: "前沿推理模型、Preparedness、Agent 平台",
        kpis: ["企业客户", "API 调用", "安全事件", "reasoning 成本"],
        moat: "前沿模型、产品分发和安全治理框架共同决定企业采用门槛。",
        risks: ["监管", "算力成本", "模型安全", "竞争"],
        catalysts: ["o3/o4 类模型", "Codex/Agent", "Preparedness 安全框架"],
        sourceIds: ["openai-o3-o4-mini", "openai-preparedness", "openai-codex"]
      },
      {
        companyName: "Mistral AI",
        segment: "模型治理/安全框架",
        valueNode: "欧洲主权 AI、开放模型、企业部署",
        kpis: ["企业客户", "模型下载/调用", "私有部署", "推理成本"],
        moat: "欧洲主权 AI 和高效模型定位，适合政府、金融和受监管行业的可控部署。",
        risks: ["前沿模型差距", "算力成本", "商业化", "美国平台竞争"],
        catalysts: ["欧洲主权 AI", "企业私有部署", "高效模型迭代"],
        sourceIds: ["mistral-ai-official", "nist-ai-rmf"]
      },
      {
        companyName: "Cohere",
        segment: "模型治理/安全框架",
        valueNode: "企业 NLP、Embed/Rerank、私有部署",
        kpis: ["企业客户", "Rerank 使用", "私有部署", "多语言能力"],
        moat: "企业检索增强和私有部署能力，贴近金融、政府和数据边界敏感客户。",
        risks: ["模型竞争", "分发", "算力成本", "销售周期"],
        catalysts: ["企业 RAG", "Rerank/Embed 需求", "私有模型部署"],
        sourceIds: ["cohere-official", "google-agentspace", "nist-ai-rmf"]
      },
      {
        companyName: "Hugging Face",
        segment: "模型治理/安全框架",
        valueNode: "开源模型生态、模型分发、评测/数据集",
        kpis: ["模型下载", "企业客户", "数据集使用", "社区活跃"],
        moat: "开源模型和数据集社区，是企业模型选型、部署、评测和协作入口。",
        risks: ["商业化", "云厂商复制", "版权合规", "社区治理"],
        catalysts: ["开源模型扩张", "企业协作", "评测和数据集需求"],
        sourceIds: ["huggingface-official", "nist-ai-rmf"]
      },
      {
        companyName: "Adobe",
        segment: "模型治理/安全框架",
        valueNode: "版权安全生成式媒体、创意工作流",
        kpis: ["Firefly 使用", "企业客户", "生成式积分", "版权安全采纳"],
        moat: "版权友好数据和专业创意工作流，适合企业内容生成的合规需求。",
        risks: ["生成式 AI 竞争", "版权诉讼", "价格压力", "创作者反弹"],
        catalysts: ["Firefly 商业化", "企业内容生成", "版权安全需求"],
        sourceIds: ["adobe-firefly-official", "nist-ai-rmf"]
      },
      {
        companyName: "Scale AI",
        segment: "数据标注/评测",
        valueNode: "数据标注、RLHF、评测数据、红队数据",
        kpis: ["数据项目", "评测收入", "政府客户", "数据质量"],
        moat: "高质量人类偏好数据、专业评测集和政府/企业客户，是前沿模型后训练核心输入。",
        risks: ["客户集中", "平台内化", "劳动力成本", "质量控制"],
        catalysts: ["RLHF/评测需求", "红队数据", "政府 AI"],
        sourceIds: ["scale-ai-official", "openai-preparedness", "nist-ai-rmf"]
      },
      {
        companyName: "Surge AI",
        segment: "数据标注/评测",
        valueNode: "高质量标注、偏好数据、模型评测",
        kpis: ["标注质量", "专家数据", "客户集中度", "交付速度"],
        moat: "高质量文本/偏好数据和专家任务标注，适配 reasoning 与 Agent 复杂轨迹数据。",
        risks: ["客户集中", "平台内化", "质量控制", "劳动力成本"],
        catalysts: ["Reasoning 数据需求", "Agent 轨迹评测", "RLHF 扩张"],
        sourceIds: ["surge-ai-official", "openai-preparedness"]
      },
      {
        companyName: "Snorkel AI",
        segment: "数据标注/评测",
        valueNode: "数据编程、弱监督、企业数据治理",
        kpis: ["企业客户", "数据集构建效率", "模型质量", "治理项目"],
        moat: "把企业内部数据转化为可训练、可评测、可治理资产，适合私有数据场景。",
        risks: ["平台竞争", "销售周期", "客户数据成熟度", "ROI 验证"],
        catalysts: ["数据中心 AI", "企业数据治理", "弱监督标注"],
        sourceIds: ["snorkel-ai-official", "nist-ai-rmf"]
      },
      {
        companyName: "Databricks",
        segment: "数据标注/评测",
        valueNode: "Lakehouse、Mosaic AI、Unity Catalog、模型治理",
        kpis: ["ARR", "数据治理客户", "Mosaic AI 使用", "模型训练/评测项目"],
        moat: "企业数据湖、治理、ML/AI 平台和客户数据驻留优势，靠近 AI 预算源头。",
        risks: ["Snowflake 竞争", "云厂商竞争", "销售周期", "AI ROI"],
        catalysts: ["企业私有模型", "数据治理/RAG", "后训练工作流"],
        sourceIds: ["databricks-ai-official", "nist-ai-rmf"]
      },
      {
        companyName: "LangChain",
        segment: "LLM 可观测/网关",
        valueNode: "LangSmith、Agent 回放、评测、调试",
        kpis: ["开发者采用", "企业客户", "trace 数量", "Agent 成功率"],
        moat: "Agent 编排开发者心智和 LangSmith 观测评测工具，卡在 demo 到生产的接口。",
        risks: ["平台内置", "开源竞争", "商业化速度", "大客户渗透"],
        catalysts: ["Agent 生产化", "LangGraph durable execution", "可观测/评测需求"],
        sourceIds: ["langchain-langsmith-official", "openai-codex"]
      },
      {
        companyName: "Datadog",
        segment: "LLM 可观测/网关",
        valueNode: "LLM 可观测、P99、成本监控、生产运维",
        kpis: ["LLM observability 使用", "日志/APM 消费", "客户扩张", "告警质量"],
        moat: "生产运维和可观测数据平台，企业上线 AI 后需要监控成本、延迟、错误和漂移。",
        risks: ["云平台竞争", "消费优化", "预算周期", "数据量成本"],
        catalysts: ["LLM 可观测", "Agent 运行监控", "推理成本治理"],
        sourceIds: ["datadog-llm-observability-official", "nvidia-dynamo"]
      },
      {
        companyName: "Cloudflare",
        segment: "LLM 可观测/网关",
        valueNode: "AI Gateway、Workers AI、边缘安全控制",
        kpis: ["AI Gateway 使用", "Workers AI 请求", "安全收入", "边缘请求"],
        moat: "全球网络、安全网关和开发者平台，适合模型路由、调用治理、内容安全和边缘推理。",
        risks: ["推理成本", "云竞争", "开发者 monetization", "安全责任"],
        catalysts: ["AI Gateway", "边缘 AI", "内容安全/调用治理"],
        sourceIds: ["cloudflare-ai-official", "nvidia-dynamo"]
      },
      {
        companyName: "Elastic",
        segment: "LLM 可观测/网关",
        valueNode: "搜索、日志、安全和可观测数据平台",
        kpis: ["搜索收入", "云收入", "RAG 使用", "安全/可观测客户"],
        moat: "搜索、日志、安全和可观测数据统一，适合企业 RAG 与 AI 运维。",
        risks: ["云竞争", "开源替代", "销售执行", "预算周期"],
        catalysts: ["混合检索/RAG", "安全数据平台", "AI 可观测"],
        sourceIds: ["elastic-ai-official", "nist-ai-rmf"]
      },
      {
        companyName: "CrowdStrike",
        segment: "安全运营/SOC",
        valueNode: "SOC Agent、端点遥测、自动化响应",
        kpis: ["Falcon 客户", "Charlotte AI 使用", "ARR", "安全事件响应"],
        moat: "端点遥测和威胁情报数据，安全 Agent 需要高质量实时上下文。",
        risks: ["平台事故", "预算周期", "竞争", "责任风险"],
        catalysts: ["SOC Agent", "AI 安全运营", "自动化响应"],
        sourceIds: ["crowdstrike-charlotte-official", "nist-ai-rmf"]
      },
      {
        companyName: "360 Security Technology",
        segment: "安全运营/SOC",
        valueNode: "AI 安全、企业知识库、安全 Agent",
        kpis: ["安全客户", "AI 产品付费", "知识库项目", "续费"],
        moat: "中国企业安全客户和安全运营入口，可从传统安全迁移到 AI 安全与 Agent。",
        risks: ["商业化", "模型差异化", "竞争", "主业压力"],
        catalysts: ["AI 安全合规", "企业知识库", "安全 Agent"],
        sourceIds: ["qihoo-360-ai-official", "nist-ai-rmf"]
      },
      {
        companyName: "Palantir",
        segment: "企业权限/RAG",
        valueNode: "Ontology、AIP、政府/工业可审计工作流",
        kpis: ["AIP 客户", "商业收入增长", "政府合同", "净留存"],
        moat: "Ontology 语义层和高接触部署能力，把 AI 嵌入真实业务权限和操作流程。",
        risks: ["估值", "项目制交付", "客户集中", "竞争"],
        catalysts: ["AIP Bootcamp", "政府/工业 AI", "生产级 Agent"],
        sourceIds: ["palantir-aip-official", "nist-ai-rmf"]
      },
      {
        companyName: "Snowflake",
        segment: "企业权限/RAG",
        valueNode: "Data Cloud、Cortex AI、数据治理/RAG",
        kpis: ["消费收入", "Cortex 使用", "数据治理客户", "净留存"],
        moat: "企业数据驻留、治理、共享和安全控制，是 RAG/Agent 的数据面。",
        risks: ["Databricks 竞争", "消费增速", "云厂商竞争", "AI 产品 ROI"],
        catalysts: ["Cortex AI", "企业数据治理", "RAG 数据底座"],
        sourceIds: ["snowflake-cortex-official", "nist-ai-rmf"]
      },
      {
        companyName: "Glean",
        segment: "企业权限/RAG",
        valueNode: "企业搜索、权限连接器、知识图谱",
        kpis: ["企业客户", "连接器数量", "搜索/Agent 使用", "续费"],
        moat: "权限连接器和企业知识图谱是安全 Agent 的前置数据层。",
        risks: ["微软/谷歌竞争", "连接器维护", "预算周期", "数据权限复杂度"],
        catalysts: ["企业搜索升级", "Agent 工作流", "权限感知 RAG"],
        sourceIds: ["glean-official", "google-agentspace"]
      },
      {
        companyName: "MongoDB",
        segment: "企业权限/RAG",
        valueNode: "AI 应用数据层、文档数据库、向量搜索",
        kpis: ["Atlas 增长", "Vector Search 使用", "开发者采用", "净留存"],
        moat: "灵活 schema、开发者心智和 Atlas 云服务连接 AI 应用数据层。",
        risks: ["云数据库竞争", "消费增速", "向量数据库替代", "开源替代"],
        catalysts: ["AI 应用构建", "Vector Search", "Agent 数据层"],
        sourceIds: ["mongodb-vector-search-official", "google-agentspace"]
      },
      {
        companyName: "Confluent",
        segment: "企业权限/RAG",
        valueNode: "实时数据流、事件驱动 Agent、数据管道",
        kpis: ["Cloud 收入", "Kafka 连接器", "消费增长", "客户扩张"],
        moat: "Kafka 生态和实时数据契约，Agent 行动需要事件流和业务系统触发。",
        risks: ["开源替代", "云厂商竞争", "消费增速", "销售执行"],
        catalysts: ["事件驱动 Agent", "实时数据管道", "企业系统集成"],
        sourceIds: ["google-agentspace", "nist-ai-rmf"]
      },
      {
        companyName: "Harvey",
        segment: "高风险垂直场景",
        valueNode: "法律 AI、专业 Agent、高价值工作流",
        kpis: ["律所客户", "使用时长", "文档工作流", "准确率"],
        moat: "法律场景高价值、强工作流和专业数据闭环，但对幻觉和责任边界极敏感。",
        risks: ["幻觉责任", "数据授权", "客户集中", "平台竞争"],
        catalysts: ["法律研究/审阅", "专业 Agent", "高价值知识工作自动化"],
        sourceIds: ["openai-o3-o4-mini", "nist-ai-rmf"]
      },
      {
        companyName: "Abridge",
        segment: "高风险垂直场景",
        valueNode: "医疗文书、Ambient AI、EHR 集成",
        kpis: ["医疗机构客户", "文书节省时间", "EHR 集成", "准确率"],
        moat: "医疗文书高频刚需和 EHR 集成壁垒，ROI 易量化但合规与准确率要求极高。",
        risks: ["医疗合规", "责任", "集成周期", "竞争"],
        catalysts: ["Ambient AI", "医生效率", "医疗系统集成"],
        sourceIds: ["nist-ai-rmf", "openai-o3-o4-mini"]
      },
      {
        companyName: "Intuit",
        segment: "高风险垂直场景",
        valueNode: "财税 Agent、SMB 工作流、信任数据",
        kpis: ["TurboTax/QuickBooks AI", "SMB 留存", "ARPU", "数据质量"],
        moat: "财税和小企业数据闭环，AI 可以直接影响报税、记账和现金流建议。",
        risks: ["监管", "客户信任", "软件替代", "数据隐私"],
        catalysts: ["Intuit Assist", "财税 Agent", "SMB 自动化"],
        sourceIds: ["salesforce-agentforce-3", "nist-ai-rmf"]
      },
      {
        companyName: "Sierra",
        segment: "高风险垂直场景",
        valueNode: "客服 Agent、品牌交互、HITL",
        kpis: ["客户数量", "自动化率", "升级率", "客户 ROI"],
        moat: "客服是 Agent 最直接规模化入口，安全价值体现在行动边界、升级和品牌一致性。",
        risks: ["幻觉", "集成成本", "CRM 平台竞争", "客户 ROI"],
        catalysts: ["客服 Agent", "企业系统集成", "HITL 运营"],
        sourceIds: ["salesforce-agentforce-3", "nist-ai-rmf"]
      },
      {
        companyName: "Perplexity",
        segment: "高风险垂直场景",
        valueNode: "AI 搜索、引用答案、浏览 Agent",
        kpis: ["用户增长", "订阅收入", "查询成本", "引用质量"],
        moat: "引用式答案体验和消费分发，价值取决于检索、来源可信度和实时信息质量。",
        risks: ["版权", "搜索巨头反击", "货币化", "推理成本"],
        catalysts: ["答案引擎", "浏览 Agent", "引用式搜索"],
        sourceIds: ["perplexity-official", "google-gemini-25"]
      }
    ]
  },
  {
    key: "semicap-materials",
    title: "半导体设备、封测与材料同业对照",
    description: "把 AI 芯片供应链上游拆成 EDA/IP、前道工艺设备、检测/测试/后道设备、先进封装/OSAT、基板/封装材料、硅片/电子材料六类节点，比较公司在 HBM、CoWoS、Chiplet 和国产替代中的价值位置。",
    thesis: "AI 芯片竞争表面看 GPU 与 HBM，底层其实由 EDA 设计产能、EUV/沉积/刻蚀/检测设备、Known Good Die 测试、hybrid bonding、ABF 基板和高纯材料共同决定良率、交期和资本开支效率。",
    filters: ["全部", "EDA/IP", "前道工艺设备", "检测/测试/后道设备", "先进封装/OSAT", "基板/封装材料", "硅片/电子材料"],
    rows: [
      {
        companyName: "Synopsys",
        segment: "EDA/IP",
        valueNode: "AI ASIC 设计、验证、IP、3D-IC 工具链",
        kpis: ["EDA 续费", "IP 收入", "AI 设计项目", "验证复杂度"],
        moat: "EDA/IP 稀缺性、设计流程锁定和高切换成本，把芯片复杂度转化为软件订阅价值。",
        risks: ["并购监管", "客户预算", "出口限制", "估值"],
        catalysts: ["AI ASIC 项目增长", "3D-IC 设计复杂度", "验证需求上升"],
        sourceIds: ["synopsys-official", "tsmc-2025-annual"]
      },
      {
        companyName: "Cadence",
        segment: "EDA/IP",
        valueNode: "封装协同设计、系统仿真、多物理场验证",
        kpis: ["EDA 收入", "系统设计收入", "3D-IC 项目", "客户续约"],
        moat: "硅片、封装、电源完整性和热仿真协同能力，卡住 Chiplet 系统级设计。",
        risks: ["估值", "客户预算", "Synopsys 竞争", "出口限制"],
        catalysts: ["Chiplet/3D-IC 普及", "封装协同设计", "AI ASIC 项目扩张"],
        sourceIds: ["cadence-official", "tsmc-2025-annual"]
      },
      {
        companyName: "ASML",
        segment: "前道工艺设备",
        valueNode: "EUV/High-NA 光刻、先进节点闸门",
        kpis: ["EUV 出货", "High-NA 进展", "积压订单", "服务收入"],
        moat: "EUV 垄断和先进逻辑/DRAM 节点不可替代性，决定最先进算力芯片制程边界。",
        risks: ["出口限制", "客户 capex", "High-NA 节奏", "地缘"],
        catalysts: ["先进节点扩产", "HBM 相关 DRAM 节点", "High-NA 导入"],
        sourceIds: ["asml-2025-annual"]
      },
      {
        companyName: "Applied Materials",
        segment: "前道工艺设备",
        valueNode: "沉积、材料工程、先进制程设备",
        kpis: ["设备收入", "服务收入", "DRAM/HBM capex", "毛利率"],
        moat: "材料工程和沉积平台覆盖广，受益 GAA、HBM、背面供电和先进封装步骤膨胀。",
        risks: ["出口限制", "设备周期", "客户 capex", "中国收入波动"],
        catalysts: ["HBM/DRAM capex", "GAA/先进逻辑", "先进封装材料步骤增加"],
        sourceIds: ["applied-materials-official"]
      },
      {
        companyName: "Tokyo Electron",
        segment: "前道工艺设备",
        valueNode: "涂胶显影、刻蚀、沉积、清洗",
        kpis: ["先进节点设备收入", "中国收入", "毛利率", "订单"],
        moat: "多工艺设备组合和先进节点客户认证，横跨光刻配套和关键制程步骤。",
        risks: ["出口管制", "设备周期", "客户 capex", "竞争"],
        catalysts: ["先进逻辑扩产", "HBM 工艺步骤", "日本设备链稀缺性"],
        sourceIds: ["tokyo-electron-official"]
      },
      {
        companyName: "Lam Research",
        segment: "前道工艺设备",
        valueNode: "刻蚀/沉积/清洗与 DRAM/HBM 工艺",
        kpis: ["DRAM 设备收入", "刻蚀/沉积需求", "服务收入", "毛利率"],
        moat: "高深宽比刻蚀和沉积工艺深度，随 3D 结构和 HBM 步骤膨胀受益。",
        risks: ["存储周期", "出口限制", "客户集中", "capex 波动"],
        catalysts: ["HBM/DRAM 投资", "先进封装步骤增加", "存储周期复苏"],
        sourceIds: ["lam-research-official"]
      },
      {
        companyName: "ASM International",
        segment: "前道工艺设备",
        valueNode: "ALD、外延、GAA 材料工程",
        kpis: ["ALD 收入", "先进逻辑客户", "毛利率", "订单"],
        moat: "原子层沉积和外延能力，受益 GAA、背面供电和先进 DRAM 结构升级。",
        risks: ["设备周期", "客户 capex", "竞争", "出口限制"],
        catalysts: ["GAA 节点", "先进 DRAM", "材料步骤增加"],
        sourceIds: ["asm-international-official"]
      },
      {
        companyName: "NAURA Technology",
        segment: "前道工艺设备",
        valueNode: "国产刻蚀、沉积、清洗、热处理平台",
        kpis: ["设备订单", "客户验证", "毛利率", "国产替代份额"],
        moat: "中国半导体设备平台型标的，覆盖多工艺环节，受益本土晶圆厂设备国产化。",
        risks: ["高端工艺差距", "客户验收", "竞争", "周期"],
        catalysts: ["国产替代加速", "本土晶圆厂 capex", "先进封装/存储设备需求"],
        sourceIds: ["naura-official", "asml-2025-annual"]
      },
      {
        companyName: "AMEC",
        segment: "前道工艺设备",
        valueNode: "国产刻蚀设备、MOCVD",
        kpis: ["刻蚀设备订单", "客户验证", "毛利率", "高端工艺进展"],
        moat: "国产刻蚀设备核心供应商，刻蚀步骤越复杂，客户验证价值越高。",
        risks: ["技术验证", "客户集中", "竞争", "出口限制"],
        catalysts: ["本土晶圆厂扩产", "先进刻蚀验证", "国产替代"],
        sourceIds: ["amec-official", "asml-2025-annual"]
      },
      {
        companyName: "Piotech",
        segment: "前道工艺设备",
        valueNode: "国产 PECVD/ALD/CVD 薄膜沉积",
        kpis: ["沉积设备订单", "客户验证", "毛利率", "高端工艺进展"],
        moat: "国产沉积设备能力，逻辑、存储和先进封装扩产都会拉动薄膜步骤需求。",
        risks: ["技术验证", "客户集中", "竞争", "周期"],
        catalysts: ["本土晶圆厂 capex", "沉积设备国产替代", "先进封装/存储需求"],
        sourceIds: ["piotech-official", "asml-2025-annual"]
      },
      {
        companyName: "KLA",
        segment: "检测/测试/后道设备",
        valueNode: "检测量测、良率控制、缺陷经济学",
        kpis: ["检测量测收入", "服务收入", "先进封装检测", "毛利率"],
        moat: "缺陷检测和量测在先进节点/封装良率经济学中不可替代。",
        risks: ["设备周期", "出口限制", "客户 capex", "估值"],
        catalysts: ["先进封装检测", "EUV 节点缺陷控制", "HBM 良率爬坡"],
        sourceIds: ["kla-official"]
      },
      {
        companyName: "Lasertec",
        segment: "检测/测试/后道设备",
        valueNode: "EUV 掩模检测、先进节点良率学习",
        kpis: ["EUV 检测订单", "先进节点客户", "毛利率", "交付周期"],
        moat: "EUV 掩模检测稀缺性，缺陷代价越高，检测设备价值越硬。",
        risks: ["客户 capex", "出口限制", "订单波动", "估值"],
        catalysts: ["先进节点扩产", "High-NA/EUV 复杂度", "良率控制需求"],
        sourceIds: ["lasertec-official", "asml-2025-annual"]
      },
      {
        companyName: "Advantest",
        segment: "检测/测试/后道设备",
        valueNode: "AI 芯片测试、HBM 测试、Known Good Die",
        kpis: ["SoC 测试收入", "Memory 测试收入", "HBM 测试需求", "订单"],
        moat: "AI 芯片和 HBM 测试平台，受益封装前 Known Good Die 筛选和测试时间上升。",
        risks: ["测试设备周期", "客户集中", "订单波动", "估值"],
        catalysts: ["AI 加速器测试时间上升", "HBM 测试需求", "系统级测试复杂度"],
        sourceIds: ["advantest-official"]
      },
      {
        companyName: "Teradyne",
        segment: "检测/测试/后道设备",
        valueNode: "SoC 测试、系统级测试、协作机器人",
        kpis: ["半导体测试收入", "系统级测试", "订单", "机器人业务"],
        moat: "测试平台和系统级测试能力，AI 芯片复杂度上升会拉长测试时间并提高设备价值。",
        risks: ["测试周期", "客户集中", "机器人竞争", "订单波动"],
        catalysts: ["AI 芯片测试", "系统级测试复杂度", "协作机器人复苏"],
        sourceIds: ["teradyne-official", "google-gemini-robotics"]
      },
      {
        companyName: "Disco",
        segment: "检测/测试/后道设备",
        valueNode: "晶圆减薄、切割、研磨",
        kpis: ["后道设备收入", "HBM 相关需求", "毛利率", "订单"],
        moat: "晶圆减薄和切割设备能力，是 HBM 堆叠和先进封装后道关键环节。",
        risks: ["设备周期", "客户 capex", "产能交付", "竞争"],
        catalysts: ["HBM 堆叠需求", "先进封装后道扩产", "薄晶圆工艺升级"],
        sourceIds: ["disco-official"]
      },
      {
        companyName: "BE Semiconductor",
        segment: "先进封装/OSAT",
        valueNode: "Hybrid Bonding、die attach、3D 封装设备",
        kpis: ["Hybrid bonding 订单", "先进封装客户", "毛利率", "交付"],
        moat: "Hybrid bonding 和 die attach 设备卡位 3D 封装/Chiplet 演进。",
        risks: ["技术导入节奏", "设备周期", "客户集中", "估值"],
        catalysts: ["3D 封装", "Chiplet 普及", "先进封装良率升级"],
        sourceIds: ["besi-official", "tsmc-2025-annual"]
      },
      {
        companyName: "Han's Laser",
        segment: "先进封装/OSAT",
        valueNode: "激光加工、PCB/半导体后道设备、精密自动化",
        kpis: ["半导体设备收入", "PCB 设备", "订单", "毛利率"],
        moat: "精密激光加工和自动化能力，连接 PCB、光通信制造和半导体后道升级。",
        risks: ["制造业周期", "设备竞争", "客户 capex", "新业务验证"],
        catalysts: ["先进封装后道", "高速 PCB 制造", "光模块制造设备"],
        sourceIds: ["hanslaser-official"]
      },
      {
        companyName: "ASE Technology",
        segment: "先进封装/OSAT",
        valueNode: "OSAT、SiP、封装测试",
        kpis: ["先进封装收入", "测试收入", "产能利用率", "毛利率"],
        moat: "全球 OSAT 龙头，封装测试客户广度和规模交付能力。",
        risks: ["周期波动", "价格竞争", "客户 capex", "先进封装自建"],
        catalysts: ["AI 后道需求", "先进封装外包", "SiP/系统级封装"],
        sourceIds: ["ase-official"]
      },
      {
        companyName: "Amkor",
        segment: "先进封装/OSAT",
        valueNode: "封装测试与区域多元化后道产能",
        kpis: ["先进封装收入", "汽车/通信收入", "产能利用率", "毛利率"],
        moat: "全球封测产能和区域多元化，服务非台系后道供应链需求。",
        risks: ["周期波动", "客户集中", "价格竞争", "资本开支"],
        catalysts: ["AI 后道外包", "供应链区域化", "先进封装需求"],
        sourceIds: ["amkor-official"]
      },
      {
        companyName: "JCET Group",
        segment: "先进封装/OSAT",
        valueNode: "中国 OSAT 与先进封装",
        kpis: ["先进封装收入", "高端客户", "毛利率", "产能利用率"],
        moat: "中国封测龙头，受益国产 AI 芯片后道和先进封装国产替代。",
        risks: ["客户结构", "高端良率", "价格竞争", "周期"],
        catalysts: ["国产 AI 芯片需求", "先进封装国产化", "高端客户导入"],
        sourceIds: ["jcet-official"]
      },
      {
        companyName: "Tongfu Microelectronics",
        segment: "先进封装/OSAT",
        valueNode: "Chiplet 封装和封装测试",
        kpis: ["先进封装收入", "Chiplet 项目", "毛利率", "客户结构"],
        moat: "Chiplet 封装经验和国产封测客户基础，是国产高性能芯片后道关键平台。",
        risks: ["客户集中", "良率", "价格竞争", "周期"],
        catalysts: ["国产 Chiplet 需求", "AI 芯片后道", "先进封装扩产"],
        sourceIds: ["tongfu-official"]
      },
      {
        companyName: "Ibiden",
        segment: "基板/封装材料",
        valueNode: "ABF 基板与 AI 加速器封装面积扩张",
        kpis: ["ABF 产能", "高端客户认证", "毛利率", "产能利用率"],
        moat: "高端 ABF 基板能力，是大尺寸 AI 加速器封装的隐形闸门。",
        risks: ["载板周期", "客户集中", "扩产回报", "价格压力"],
        catalysts: ["AI 加速器封装面积增加", "CoWoS 扩产", "高端基板紧缺"],
        sourceIds: ["ibiden-official", "tsmc-2025-annual"]
      },
      {
        companyName: "Unimicron",
        segment: "基板/封装材料",
        valueNode: "IC 载板、ABF、AI 服务器 PCB",
        kpis: ["ABF/载板收入", "AI 服务器 PCB", "毛利率", "产能利用率"],
        moat: "载板与高端 PCB 制造能力，横跨芯片封装和整机板级价值。",
        risks: ["载板周期", "价格压力", "产能利用率", "客户集中"],
        catalysts: ["AI 加速器封装需求", "服务器平台升级", "高端板材紧缺"],
        sourceIds: ["tsmc-2025-annual", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Shinko Electric",
        segment: "基板/封装材料",
        valueNode: "封装基板、lead frame、高端封装材料",
        kpis: ["封装基板收入", "高端客户认证", "良率", "产能利用率"],
        moat: "日本高端封装基板能力，受益 AI 加速器封装复杂度上升。",
        risks: ["封装周期", "客户集中", "母公司交易", "产能爬坡"],
        catalysts: ["AI 加速器封装需求", "先进封装扩产", "高端基板紧缺"],
        sourceIds: ["tsmc-2025-annual"]
      },
      {
        companyName: "Ajinomoto",
        segment: "基板/封装材料",
        valueNode: "ABF build-up film、高端 IC 载板材料",
        kpis: ["ABF 需求", "载板客户", "材料认证", "价格"],
        moat: "ABF 材料在高端 IC 载板中具有强客户认证和工艺黏性，是 AI 加速器封装面积扩张的材料闸门。",
        risks: ["替代材料", "载板周期", "客户集中", "价格压力"],
        catalysts: ["AI 加速器封装面积增长", "ABF 供需紧张", "高端载板扩产"],
        sourceIds: ["ajinomoto-abf-official", "tsmc-2025-annual"]
      },
      {
        companyName: "Resonac",
        segment: "基板/封装材料",
        valueNode: "封装材料、后道材料、电子材料",
        kpis: ["封装材料收入", "先进封装客户", "毛利率", "产品组合"],
        moat: "日本封装材料和电子材料组合，受益 Chiplet、HBM 和先进后道材料复杂度上升。",
        risks: ["材料周期", "客户验证", "价格压力", "竞争"],
        catalysts: ["先进封装放量", "HBM 后道材料", "日本材料链重估"],
        sourceIds: ["resonac-official", "tsmc-2025-annual"]
      },
      {
        companyName: "Shin-Etsu Chemical",
        segment: "硅片/电子材料",
        valueNode: "硅片、光刻胶、封装与电子材料",
        kpis: ["硅片出货", "材料毛利率", "客户库存", "先进节点认证"],
        moat: "硅片和高纯材料能力决定晶圆制造初始品质，客户认证周期长、切换成本高。",
        risks: ["硅片周期", "客户库存", "材料认证", "日元成本"],
        catalysts: ["先进节点扩产", "DRAM/HBM capex", "材料价格修复"],
        sourceIds: ["shin-etsu-official"]
      },
      {
        companyName: "SUMCO",
        segment: "硅片/电子材料",
        valueNode: "300mm 硅片、外延片、先进节点晶圆材料",
        kpis: ["300mm 出货", "产能利用率", "价格", "长期协议"],
        moat: "半导体级硅片品质和客户认证，承接先进逻辑、DRAM 和成熟制程需求。",
        risks: ["硅片价格周期", "客户 capex", "库存", "产能利用率"],
        catalysts: ["晶圆厂扩产", "存储复苏", "长期协议改善"],
        sourceIds: ["sumco-official"]
      },
      {
        companyName: "GlobalWafers",
        segment: "硅片/电子材料",
        valueNode: "硅片、特色晶圆材料、区域化供应",
        kpis: ["硅片收入", "区域产能", "产能利用率", "长期协议"],
        moat: "全球硅片产能和区域供应链布局，受益供应链韧性与本地制造需求。",
        risks: ["硅片周期", "扩产回报", "客户库存", "价格竞争"],
        catalysts: ["区域晶圆厂建设", "成熟制程复苏", "本地化供应链"],
        sourceIds: ["globalwafers-official"]
      },
      {
        companyName: "Entegris",
        segment: "硅片/电子材料",
        valueNode: "高纯材料、过滤、污染控制",
        kpis: ["先进节点材料", "过滤产品", "毛利率", "客户库存"],
        moat: "先进制程污染控制和材料纯度要求持续提高，过滤和高纯材料具备高认证壁垒。",
        risks: ["晶圆厂周期", "客户库存", "整合执行", "估值"],
        catalysts: ["先进节点扩产", "HBM/DRAM capex", "污染控制要求提升"],
        sourceIds: ["entegris-official"]
      },
      {
        companyName: "Merck KGaA",
        segment: "硅片/电子材料",
        valueNode: "半导体化学品、电子材料、特种材料",
        kpis: ["电子材料收入", "先进节点客户", "毛利率", "新材料认证"],
        moat: "化学品和特种材料组合，服务前道制程、显示和先进材料工程。",
        risks: ["欧洲成本", "材料认证周期", "客户周期", "汇率"],
        catalysts: ["先进材料需求", "前驱体/清洗材料升级", "客户去库存结束"],
        sourceIds: ["merck-kgaa-electronics-official"]
      }
    ]
  },
  {
    key: "optical-pcb",
    title: "光互联与高速 PCB 同业对照",
    description: "把 AI 网络硬件链拆成光模块、光芯片/器件、网络连接芯片、PCB/CCL/背板、光纤光缆/布线、设备配套六个价值节点，用同一套字段比较公司护城河、KPI、风险和催化剂。",
    thesis: "AI 集群从单机算力竞争转向网络 fabric 竞争后，价值池沿 800G/1.6T 光模块、SerDes/DSP、CPO/LPO、低损耗 PCB/CCL、连接器和园区光纤布线扩散。真正要比较的是谁卡住速率迁移、客户认证、良率和规模交付。",
    filters: ["全部", "光模块", "光芯片/器件", "网络连接芯片", "PCB/CCL/背板", "光纤光缆/布线", "设备配套"],
    rows: [
      {
        companyName: "Zhongji Innolight",
        segment: "光模块",
        valueNode: "800G/1.6T 数据中心光模块",
        kpis: ["高速模块收入占比", "海外云客户拉货", "毛利率", "产能良率"],
        moat: "高速光模块规模制造、海外云客户认证和速率迁移执行力。",
        risks: ["客户集中", "价格竞争", "海外监管", "代际切换"],
        catalysts: ["1.6T 量产", "AI 后端网络扩容", "新客户认证"],
        sourceIds: ["innolight-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Eoptolink",
        segment: "光模块",
        valueNode: "高速数据中心光模块",
        kpis: ["800G/1.6T 认证", "高速产品占比", "毛利率", "汇率影响"],
        moat: "高速光模块产品弹性和海外客户导入能力。",
        risks: ["客户集中", "价格竞争", "良率", "需求节奏"],
        catalysts: ["AI 网络拉货", "海外客户扩张", "1.6T 量产"],
        sourceIds: ["eoptolink-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Cambridge Industries Group",
        segment: "光模块",
        valueNode: "光模块 + 通信设备",
        kpis: ["光模块收入", "客户认证", "毛利率", "库存"],
        moat: "高速模块与通信设备制造基础，弹性来自海外客户和速率升级。",
        risks: ["客户集中", "价格竞争", "速率切换", "需求波动"],
        catalysts: ["800G/1.6T 拉货", "新客户导入", "AI 后端网络扩容"],
        sourceIds: ["cigtech-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Coherent",
        segment: "光模块",
        valueNode: "光模块、激光器与相干光学",
        kpis: ["Datacom 收入", "800G/1.6T 产品", "激光器供应", "毛利率"],
        moat: "光器件、激光器、光模块和材料平台的垂直整合能力。",
        risks: ["产品组合周期", "客户集中", "资本开支波动", "整合执行"],
        catalysts: ["1.6T 模块放量", "硅光/CPO 前置需求", "云厂商 AI fabric 扩容"],
        sourceIds: ["coherent-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Lumentum",
        segment: "光模块",
        valueNode: "激光器 + 高速光互联",
        kpis: ["Datacom 激光器收入", "高速产品导入", "客户认证", "库存周期"],
        moat: "高端激光器和光子器件能力，是光模块 BOM 中的关键上游。",
        risks: ["客户集中", "库存调整", "价格压力", "代际替代"],
        catalysts: ["AI 光互联需求", "800G/1.6T 激光器升级", "新平台认证"],
        sourceIds: ["lumentum-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Applied Optoelectronics",
        segment: "光模块",
        valueNode: "数据中心光模块与激光器",
        kpis: ["数据中心收入", "客户集中度", "毛利率", "库存"],
        moat: "光模块和激光器垂直整合，AI 拉货周期中 beta 较高。",
        risks: ["客户集中", "价格竞争", "良率", "产品代际切换"],
        catalysts: ["AI 光模块订单", "新客户认证", "高速产品放量"],
        sourceIds: ["aaois-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Fabrinet",
        segment: "光模块",
        valueNode: "光模块代工和精密装配",
        kpis: ["数据中心收入", "前几大客户集中度", "毛利率", "产能利用率"],
        moat: "高良率精密光学装配、测试和规模交付能力。",
        risks: ["客户集中", "价格压力", "良率爬坡", "代工议价"],
        catalysts: ["1.6T 模块量产", "云厂商扩容", "新客户认证"],
        sourceIds: ["fabrinet-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Accelink Technologies",
        segment: "光芯片/器件",
        valueNode: "光芯片、光器件、模块",
        kpis: ["高端光器件收入", "数据中心客户", "毛利率", "研发进展"],
        moat: "光芯片与器件底座，战略价值在高端器件国产替代。",
        risks: ["电信周期", "高端良率", "数据中心突破", "价格竞争"],
        catalysts: ["国产光芯片升级", "AI 光模块需求", "800G/1.6T 器件放量"],
        sourceIds: ["accelink-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "TFC Communication",
        segment: "光芯片/器件",
        valueNode: "光器件与光引擎精密部件",
        kpis: ["高速产品占比", "毛利率", "海外客户", "产能扩张"],
        moat: "光引擎部件和精密光器件卡位，受益速率迁移带来的 BOM 价值提升。",
        risks: ["客户集中", "良率", "价格压力", "速率迁移"],
        catalysts: ["1.6T 光模块放量", "CPO/硅光封装演进", "海外客户扩张"],
        sourceIds: ["tfci-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Broadex Technologies",
        segment: "光芯片/器件",
        valueNode: "光器件到光模块交界",
        kpis: ["数据中心产品收入", "毛利率", "客户认证", "产能利用率"],
        moat: "光器件和模块产品线，关键看高速数据中心认证突破。",
        risks: ["电信周期", "价格竞争", "高速模块认证", "客户集中"],
        catalysts: ["AI 光模块需求", "新客户导入", "光器件升级"],
        sourceIds: ["broadex-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Yuanjie Semiconductor",
        segment: "光芯片/器件",
        valueNode: "激光器芯片和国产高速光芯片",
        kpis: ["高端芯片收入", "良率", "客户认证", "研发投入"],
        moat: "国产光芯片弹性，能否进入 AI 数据中心光模块 BOM 是关键。",
        risks: ["高端良率", "价格竞争", "认证周期", "需求波动"],
        catalysts: ["800G/1.6T 光芯片需求", "国产化验证", "新客户量产"],
        sourceIds: ["yuanjie-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Sanan Optoelectronics",
        segment: "光芯片/器件",
        valueNode: "化合物半导体与光电器件",
        kpis: ["高端器件收入", "毛利率", "客户认证", "资本开支回报"],
        moat: "化合物半导体平台和光电器件能力，受益高端光芯片国产化。",
        risks: ["LED 周期", "高端光芯片良率", "价格竞争", "需求波动"],
        catalysts: ["国产光芯片需求", "AI 光模块放量", "化合物半导体升级"],
        sourceIds: ["sanan-official", "broadcom-cpo-official"]
      },
      {
        companyName: "AXT",
        segment: "光芯片/器件",
        valueNode: "InP/GaAs 化合物半导体衬底",
        kpis: ["InP/GaAs 收入", "客户认证", "毛利率", "材料良率"],
        moat: "InP/GaAs 衬底材料质量影响激光器、探测器和高端光器件良率。",
        risks: ["材料周期", "客户集中", "价格", "良率"],
        catalysts: ["光芯片需求", "InP/GaAs 材料升级", "高速光模块放量"],
        sourceIds: ["axt-official", "broadcom-cpo-official"]
      },
      {
        companyName: "Broadcom",
        segment: "网络连接芯片",
        valueNode: "交换芯片、SerDes、CPO 生态",
        kpis: ["交换芯片代际", "SerDes lane rate", "CPO 进展", "AI 网络收入"],
        moat: "交换芯片、网络 ASIC、软件和云客户生态绑定。",
        risks: ["客户自研", "监管", "供应链周期", "估值"],
        catalysts: ["AI 交换机升级", "CPO 商用推进", "云厂商网络 CAPEX"],
        sourceIds: ["broadcom-cpo-official"]
      },
      {
        companyName: "Marvell",
        segment: "网络连接芯片",
        valueNode: "定制 ASIC、DSP、SerDes",
        kpis: ["AI ASIC 收入", "DSP/SerDes 代际", "客户项目", "毛利率"],
        moat: "高速 SerDes、DSP 和定制 ASIC 连接能力，是 AI 网络和加速器的接口层。",
        risks: ["项目周期", "客户集中", "Broadcom 竞争", "代际切换"],
        catalysts: ["定制 ASIC 放量", "800G/1.6T DSP", "AI 网络升级"],
        sourceIds: ["marvell-official"]
      },
      {
        companyName: "Credo Technology",
        segment: "网络连接芯片",
        valueNode: "AEC、DSP、高速 SerDes",
        kpis: ["AEC 客户导入", "数据中心收入", "毛利率", "客户集中度"],
        moat: "低功耗连接芯片和 AEC 方案，卡在铜缆、光模块和 CPO 之间的工程折中。",
        risks: ["客户集中", "代际切换", "Broadcom/Marvell 竞争", "估值波动"],
        catalysts: ["800G/1.6T 网络升级", "rack 内短距连接放量", "CPO 前过渡方案需求"],
        sourceIds: ["credo-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Astera Labs",
        segment: "网络连接芯片",
        valueNode: "PCIe/CXL 连接与信号完整性",
        kpis: ["PCIe/CXL 产品收入", "云客户导入", "高速 retimer", "毛利率"],
        moat: "AI 服务器内部高速连接和信号完整性芯片平台。",
        risks: ["估值", "客户集中", "竞争", "平台代际"],
        catalysts: ["AI 服务器平台升级", "CXL/PCIe 迁移", "高密机柜连接复杂度上升"],
        sourceIds: ["astera-official"]
      },
      {
        companyName: "WUS Printed Circuit",
        segment: "PCB/CCL/背板",
        valueNode: "AI 服务器 PCB、交换机板、背板",
        kpis: ["AI/通信 PCB 收入", "毛利率", "高多层板占比", "客户集中度"],
        moat: "高多层板、低损耗材料适配、背钻精度和客户认证。",
        risks: ["材料成本", "价格竞争", "良率", "客户认证"],
        catalysts: ["800G/1.6T 交换机放量", "AI 服务器平台升级", "高端 PCB 产能紧张"],
        sourceIds: ["wus-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Shengyi Technology",
        segment: "PCB/CCL/背板",
        valueNode: "低损耗 CCL 和高速 PCB 材料",
        kpis: ["高端 CCL 收入", "客户认证", "毛利率", "材料良率"],
        moat: "低损耗 CCL 材料认证和国产替代能力。",
        risks: ["材料认证周期", "价格竞争", "PCB 周期", "高端材料替代"],
        catalysts: ["1.6T 交换机板升级", "AI 服务器高多层板", "高速材料国产替代"],
        sourceIds: ["shengyi-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Shennan Circuits",
        segment: "PCB/CCL/背板",
        valueNode: "高速通信 PCB + 封装基板",
        kpis: ["PCB 收入结构", "封装基板爬坡", "毛利率", "通信客户需求"],
        moat: "通信 PCB、封装基板和电子装联的组合能力。",
        risks: ["通信周期", "基板良率", "价格竞争", "客户认证"],
        catalysts: ["交换机/服务器升级", "封装基板国产替代", "AI 网络设备需求"],
        sourceIds: ["shennan-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Dongshan Precision",
        segment: "PCB/CCL/背板",
        valueNode: "PCB/FPC/光通信结构件",
        kpis: ["PCB 收入结构", "高端客户认证", "毛利率", "库存周转"],
        moat: "精密制造和 PCB 配套能力，AI 网络硬件弹性来自产品结构升级。",
        risks: ["消费电子周期", "客户集中", "价格竞争", "高端良率"],
        catalysts: ["AI 服务器 PCB 升级", "光模块制造扩产", "海外客户验证"],
        sourceIds: ["dsbj-official", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Unimicron",
        segment: "PCB/CCL/背板",
        valueNode: "IC 载板 + AI 服务器 PCB",
        kpis: ["ABF/载板收入", "AI 服务器 PCB", "毛利率", "产能利用率"],
        moat: "ABF 载板和高端 PCB 制造能力，连接 AI 加速器封装和整机板级需求。",
        risks: ["载板周期", "客户集中", "产能利用率", "价格压力"],
        catalysts: ["AI 加速器封装需求", "服务器平台升级", "高端板材紧缺"],
        sourceIds: ["nvidia-spectrum-x-official"]
      },
      {
        companyName: "Shinko Electric",
        segment: "PCB/CCL/背板",
        valueNode: "封装基板和 AI 加速器配套",
        kpis: ["封装基板收入", "高端客户认证", "良率", "产能利用率"],
        moat: "日本高端封装基板能力，受益 AI 加速器封装复杂度上升。",
        risks: ["封装周期", "客户集中", "日元/成本", "产能爬坡"],
        catalysts: ["AI 加速器封装需求", "先进封装扩产", "高端基板紧缺"],
        sourceIds: ["nvidia-spectrum-x-official"]
      },
      {
        companyName: "YOFC",
        segment: "光纤光缆/布线",
        valueNode: "光纤光缆、预制棒、园区互联",
        kpis: ["光纤价格", "海外收入", "数据中心客户", "产能利用率"],
        moat: "光纤预制棒和光纤光缆规模能力，偏长期基础设施属性。",
        risks: ["电信 capex 周期", "价格竞争", "项目节奏", "需求弹性较弱"],
        catalysts: ["园区互联建设", "数据中心布线升级", "海外通信项目"],
        sourceIds: ["yofc-official"]
      },
      {
        companyName: "Hengtong Optic-Electric",
        segment: "光纤光缆/布线",
        valueNode: "光缆 + 电力连接 + 园区基础设施",
        kpis: ["通信业务收入", "海缆/电力订单", "毛利率", "海外项目"],
        moat: "通信光缆和电力连接双暴露，适合看 AI 数据中心园区建设。",
        risks: ["电信周期", "原材料", "项目执行", "海外政策"],
        catalysts: ["数据中心园区建设", "能源互联投资", "海外通信项目"],
        sourceIds: ["hengtong-official", "iea-energy-ai"]
      },
      {
        companyName: "Corning",
        segment: "光纤光缆/布线",
        valueNode: "光纤、布线、连接材料",
        kpis: ["光通信收入", "数据中心项目", "毛利率", "电信周期"],
        moat: "光纤、连接系统和玻璃材料平台，服务长期园区网络建设。",
        risks: ["显示玻璃周期", "电信 capex", "价格竞争", "项目节奏"],
        catalysts: ["AI 园区布线", "多数据中心互联", "高速连接系统升级"],
        sourceIds: ["corning-official"]
      },
      {
        companyName: "Amphenol",
        segment: "光纤光缆/布线",
        valueNode: "连接器、高速铜缆、整柜连接 BOM",
        kpis: ["数据中心收入", "高速连接产品", "毛利率", "客户结构"],
        moat: "连接器、线缆和高速互联产品组合，卡住整柜和网络硬件 BOM。",
        risks: ["估值", "客户 capex", "竞争", "库存周期"],
        catalysts: ["高密机柜连接复杂度", "AEC/铜缆需求", "AI 服务器平台升级"],
        sourceIds: ["nvidia-spectrum-x-official"]
      },
      {
        companyName: "Han's Laser",
        segment: "设备配套",
        valueNode: "PCB/半导体/光通信制造设备",
        kpis: ["设备订单", "新业务收入", "毛利率", "客户资本开支"],
        moat: "精密激光加工和自动化设备，是高速 PCB、光模块封装和后道升级的制造杠杆。",
        risks: ["制造业周期", "设备竞争", "客户验收", "研发转化"],
        catalysts: ["高速 PCB 扩产", "光通信封装升级", "半导体后道设备需求"],
        sourceIds: ["hanslaser-official"]
      },
      {
        companyName: "HGTECH",
        segment: "设备配套",
        valueNode: "光通信器件 + 激光制造设备",
        kpis: ["光通信业务增长", "设备订单", "毛利率", "客户结构"],
        moat: "同时连接光通信器件和激光设备，是器件配套与制造升级的交叉标的。",
        risks: ["制造业周期", "光通信客户突破", "产品结构", "价格竞争"],
        catalysts: ["AI 光模块扩产", "高速器件升级", "智能制造需求"],
        sourceIds: ["hgtech-official", "nvidia-spectrum-x-official"]
      }
    ]
  },
  {
    key: "hbm-packaging",
    title: "HBM 与先进封装同业对照",
    description: "围绕 AI 加速器的供给闸门，比较 HBM、CoWoS/3D 封装、EDA/IP、ABF/封装基板、设备/测试、OSAT/国产替代等关键节点。",
    thesis: "AI 芯片的瓶颈已从单颗 die 设计扩展到 HBM 带宽、先进封装产能、基板面积、设备良率和测试吞吐。HBM4、CoWoS-L/R、Hybrid Bonding 和 Known Good Die 会决定下一轮 AI 加速器供给弹性。",
    filters: ["全部", "HBM/内存", "Foundry/先进封装", "EDA/IP", "ABF/封装基板", "设备/测试", "OSAT/国产替代"],
    rows: [
      {
        companyName: "SK hynix",
        segment: "HBM/内存",
        valueNode: "HBM3E/HBM4、TSV 堆叠、云厂商认证",
        kpis: ["HBM 出货", "客户认证", "ASP/毛利率", "TSV 良率"],
        moat: "HBM 代际领先、AI GPU 客户认证和高良率 TSV 堆叠能力。",
        risks: ["客户集中", "HBM4 代际切换", "价格周期", "产能扩张节奏"],
        catalysts: ["HBM4 放量", "Rubin 平台需求", "AI 显存供给紧张"],
        sourceIds: ["skhynix-official", "nvidia-rubin-2026"]
      },
      {
        companyName: "Micron",
        segment: "HBM/内存",
        valueNode: "HBM4 第二来源与北美内存链",
        kpis: ["HBM4 量产", "客户导入", "DRAM 毛利率", "产能分配"],
        moat: "北美内存供应链、HBM4 导入和先进 DRAM 制程能力。",
        risks: ["HBM 份额", "DRAM 周期", "客户认证", "资本开支回报"],
        catalysts: ["HBM4 for Vera Rubin", "AI 显存第二来源", "DRAM 景气回升"],
        sourceIds: ["micron-hbm4-vera-rubin", "nvidia-rubin-2026"]
      },
      {
        companyName: "Samsung Electronics",
        segment: "HBM/内存",
        valueNode: "HBM4 追赶、Memory + Foundry 协同",
        kpis: ["HBM4 认证", "良率", "Foundry 协同", "内存毛利率"],
        moat: "存储、晶圆代工和先进封装一体化能力，理论上具备 logic die 协同空间。",
        risks: ["HBM 客户认证", "良率爬坡", "竞争追赶", "资本开支压力"],
        catalysts: ["HBM4 商用出货", "AI 客户认证改善", "Foundry/Memory 协同"],
        sourceIds: ["samsung-hbm4", "nvidia-rubin-2026"]
      },
      {
        companyName: "TSMC",
        segment: "Foundry/先进封装",
        valueNode: "先进制程 + CoWoS/SoIC/3D 封装",
        kpis: ["CoWoS 产能", "先进节点份额", "先进封装收入", "客户排队"],
        moat: "先进制程、CoWoS 生态、良率和头部 AI 客户绑定。",
        risks: ["地缘集中", "资本开支强度", "客户集中", "先进封装瓶颈"],
        catalysts: ["Rubin/Blackwell 后续平台", "CoWoS-L/R 扩产", "AI ASIC 需求"],
        sourceIds: ["tsmc-2025-annual", "nvidia-rubin-2026"]
      },
      {
        companyName: "Intel",
        segment: "Foundry/先进封装",
        valueNode: "美国本土制造 + Foveros/EMIB",
        kpis: ["Foundry 客户", "先进封装产能", "制程节点", "亏损收窄"],
        moat: "美国本土制造、先进封装资产和 CPU/平台客户基础。",
        risks: ["执行风险", "制程追赶", "资本开支", "客户导入"],
        catalysts: ["本土供应链政策", "先进封装外部客户", "企业推理平台需求"],
        sourceIds: ["nvidia-rubin-2026"]
      },
      {
        companyName: "SMIC",
        segment: "Foundry/先进封装",
        valueNode: "国产成熟/准先进节点与供应链安全",
        kpis: ["成熟节点利用率", "准先进进展", "客户结构", "资本开支"],
        moat: "中国晶圆代工底座和国产替代需求。",
        risks: ["设备限制", "先进节点良率", "地缘监管", "价格竞争"],
        catalysts: ["国产 AI 芯片需求", "成熟节点复苏", "本土供应链安全"],
        sourceIds: ["cambricon-official", "hygon-official"]
      },
      {
        companyName: "Synopsys",
        segment: "EDA/IP",
        valueNode: "AI ASIC 设计、验证、IP",
        kpis: ["EDA 续费", "IP 收入", "AI 设计项目", "验证复杂度"],
        moat: "EDA/IP 稀缺性、设计流程锁定和高切换成本。",
        risks: ["监管审批", "客户预算", "出口限制", "估值"],
        catalysts: ["AI ASIC 项目增长", "3D-IC 设计复杂度", "验证需求上升"],
        sourceIds: ["synopsys-official"]
      },
      {
        companyName: "Cadence",
        segment: "EDA/IP",
        valueNode: "3D-IC/封装协同设计与仿真",
        kpis: ["EDA 收入", "系统设计收入", "3D-IC 项目", "客户续约"],
        moat: "多物理场仿真、封装协同和系统级设计工具链。",
        risks: ["估值", "客户预算", "竞争", "出口限制"],
        catalysts: ["Chiplet/3D-IC 普及", "封装协同设计", "AI ASIC 项目扩张"],
        sourceIds: ["cadence-official"]
      },
      {
        companyName: "Ibiden",
        segment: "ABF/封装基板",
        valueNode: "ABF 基板与 AI 加速器封装面积扩张",
        kpis: ["ABF 产能", "高端客户认证", "毛利率", "产能利用率"],
        moat: "高端 ABF 基板能力，是大尺寸 AI 加速器封装的隐形闸门。",
        risks: ["载板周期", "客户集中", "扩产回报", "价格压力"],
        catalysts: ["AI 加速器封装面积增加", "CoWoS 扩产", "高端基板紧缺"],
        sourceIds: ["ibiden-official", "tsmc-2025-annual"]
      },
      {
        companyName: "Unimicron",
        segment: "ABF/封装基板",
        valueNode: "IC 载板 + AI 服务器 PCB",
        kpis: ["ABF/载板收入", "AI 服务器 PCB", "毛利率", "产能利用率"],
        moat: "载板与高端 PCB 制造能力，横跨芯片封装和整机板级价值。",
        risks: ["载板周期", "价格压力", "产能利用率", "客户集中"],
        catalysts: ["AI 加速器封装需求", "服务器平台升级", "高端板材紧缺"],
        sourceIds: ["tsmc-2025-annual", "nvidia-spectrum-x-official"]
      },
      {
        companyName: "Shinko Electric",
        segment: "ABF/封装基板",
        valueNode: "封装基板与 AI 加速器配套",
        kpis: ["封装基板收入", "高端客户认证", "良率", "产能利用率"],
        moat: "日本高端封装基板能力，受益 AI 加速器封装复杂度上升。",
        risks: ["封装周期", "客户集中", "日元/成本", "产能爬坡"],
        catalysts: ["AI 加速器封装需求", "先进封装扩产", "高端基板紧缺"],
        sourceIds: ["tsmc-2025-annual"]
      },
      {
        companyName: "ASML",
        segment: "设备/测试",
        valueNode: "EUV/High-NA 光刻",
        kpis: ["EUV 出货", "High-NA 进展", "积压订单", "服务收入"],
        moat: "EUV 垄断和先进逻辑/DRAM 节点不可替代性。",
        risks: ["出口限制", "客户 capex", "High-NA 节奏", "地缘"],
        catalysts: ["先进节点扩产", "HBM 相关 DRAM 节点", "High-NA 导入"],
        sourceIds: ["asml-2025-annual"]
      },
      {
        companyName: "Applied Materials",
        segment: "设备/测试",
        valueNode: "沉积、材料工程、先进制程设备",
        kpis: ["ICAPS/先进设备收入", "服务收入", "DRAM/HBM capex", "毛利率"],
        moat: "材料工程和沉积设备平台，受益工艺步骤膨胀。",
        risks: ["出口限制", "设备周期", "客户 capex", "中国收入波动"],
        catalysts: ["HBM/DRAM capex", "GAA/先进逻辑", "先进封装材料步骤增加"],
        sourceIds: ["applied-materials-official"]
      },
      {
        companyName: "Tokyo Electron",
        segment: "设备/测试",
        valueNode: "涂胶显影、刻蚀、沉积、清洗",
        kpis: ["先进节点设备收入", "中国收入", "毛利率", "订单"],
        moat: "多工艺设备组合和先进节点客户认证。",
        risks: ["出口管制", "设备周期", "客户 capex", "竞争"],
        catalysts: ["先进逻辑扩产", "HBM 工艺步骤", "日本设备链稀缺性"],
        sourceIds: ["tokyo-electron-official"]
      },
      {
        companyName: "Lam Research",
        segment: "设备/测试",
        valueNode: "刻蚀/沉积/清洗与 DRAM/HBM 工艺",
        kpis: ["DRAM 设备收入", "刻蚀/沉积需求", "服务收入", "毛利率"],
        moat: "刻蚀和沉积工艺深度，随 3D 结构和 HBM 步骤膨胀受益。",
        risks: ["存储周期", "出口限制", "客户集中", "capex 波动"],
        catalysts: ["HBM/DRAM 投资", "先进封装步骤增加", "存储周期复苏"],
        sourceIds: ["lam-research-official"]
      },
      {
        companyName: "KLA",
        segment: "设备/测试",
        valueNode: "检测量测和良率控制",
        kpis: ["检测量测收入", "服务收入", "先进封装检测", "毛利率"],
        moat: "缺陷检测和量测在先进节点/封装良率经济学中不可替代。",
        risks: ["设备周期", "出口限制", "客户 capex", "估值"],
        catalysts: ["先进封装检测", "EUV 节点缺陷控制", "HBM 良率爬坡"],
        sourceIds: ["kla-official"]
      },
      {
        companyName: "Advantest",
        segment: "设备/测试",
        valueNode: "AI 芯片测试、HBM 测试、Known Good Die",
        kpis: ["SoC 测试收入", "Memory 测试收入", "HBM 测试需求", "订单"],
        moat: "AI 芯片和 HBM 测试平台，受益封装前 Known Good Die 筛选。",
        risks: ["测试设备周期", "客户集中", "订单波动", "估值"],
        catalysts: ["AI 加速器测试时间上升", "HBM 测试需求", "系统级测试复杂度"],
        sourceIds: ["advantest-official"]
      },
      {
        companyName: "Disco",
        segment: "设备/测试",
        valueNode: "晶圆减薄、切割、研磨",
        kpis: ["后道设备收入", "HBM 相关需求", "毛利率", "订单"],
        moat: "晶圆减薄和切割设备能力，是 HBM 堆叠和先进封装后道关键环节。",
        risks: ["设备周期", "客户 capex", "产能交付", "竞争"],
        catalysts: ["HBM 堆叠需求", "先进封装后道扩产", "薄晶圆工艺升级"],
        sourceIds: ["disco-official"]
      },
      {
        companyName: "Lasertec",
        segment: "设备/测试",
        valueNode: "EUV 掩模检测",
        kpis: ["EUV 检测订单", "先进节点客户", "毛利率", "交付周期"],
        moat: "EUV 掩模检测稀缺性，是先进节点良率和缺陷控制关键设备。",
        risks: ["客户 capex", "出口限制", "订单波动", "估值"],
        catalysts: ["先进节点扩产", "High-NA/EUV 复杂度", "良率控制需求"],
        sourceIds: ["lasertec-official", "asml-2025-annual"]
      },
      {
        companyName: "ASM International",
        segment: "设备/测试",
        valueNode: "ALD、GAA、材料工程",
        kpis: ["ALD 收入", "先进逻辑客户", "毛利率", "订单"],
        moat: "ALD 和先进材料工程能力，受益 GAA、先进逻辑和存储结构升级。",
        risks: ["设备周期", "客户 capex", "竞争", "出口限制"],
        catalysts: ["GAA 节点", "先进 DRAM", "材料步骤增加"],
        sourceIds: ["asm-international-official"]
      },
      {
        companyName: "BE Semiconductor",
        segment: "设备/测试",
        valueNode: "Hybrid Bonding、3D 封装设备",
        kpis: ["Hybrid bonding 订单", "先进封装客户", "毛利率", "交付"],
        moat: "Hybrid bonding 和 die attach 设备卡位 3D 封装/Chiplet 演进。",
        risks: ["技术导入节奏", "设备周期", "客户集中", "估值"],
        catalysts: ["3D 封装", "Chiplet 普及", "先进封装良率升级"],
        sourceIds: ["besi-official", "tsmc-2025-annual"]
      },
      {
        companyName: "ASE Technology",
        segment: "OSAT/国产替代",
        valueNode: "OSAT、SiP、封装测试",
        kpis: ["先进封装收入", "测试收入", "产能利用率", "毛利率"],
        moat: "全球 OSAT 龙头，封装测试客户广度和规模交付能力。",
        risks: ["周期波动", "价格竞争", "客户 capex", "先进封装自建"],
        catalysts: ["AI 后道需求", "先进封装外包", "SiP/系统级封装"],
        sourceIds: ["ase-official"]
      },
      {
        companyName: "Amkor",
        segment: "OSAT/国产替代",
        valueNode: "封装测试与区域多元化后道产能",
        kpis: ["先进封装收入", "汽车/通信收入", "产能利用率", "毛利率"],
        moat: "全球封测产能和区域多元化，服务非台系后道供应链需求。",
        risks: ["周期波动", "客户集中", "价格竞争", "资本开支"],
        catalysts: ["AI 后道外包", "供应链区域化", "先进封装需求"],
        sourceIds: ["amkor-official"]
      },
      {
        companyName: "JCET Group",
        segment: "OSAT/国产替代",
        valueNode: "中国 OSAT 与先进封装",
        kpis: ["先进封装收入", "高端客户", "毛利率", "产能利用率"],
        moat: "中国封测龙头，受益国产 AI 芯片后道和先进封装国产替代。",
        risks: ["客户结构", "高端良率", "价格竞争", "周期"],
        catalysts: ["国产 AI 芯片需求", "先进封装国产化", "高端客户导入"],
        sourceIds: ["jcet-official"]
      },
      {
        companyName: "Tongfu Microelectronics",
        segment: "OSAT/国产替代",
        valueNode: "Chiplet 封装和封装测试",
        kpis: ["先进封装收入", "Chiplet 项目", "毛利率", "客户结构"],
        moat: "Chiplet 封装经验和国产封测客户基础。",
        risks: ["客户集中", "良率", "价格竞争", "周期"],
        catalysts: ["国产 Chiplet 需求", "AI 芯片后道", "先进封装扩产"],
        sourceIds: ["tongfu-official"]
      },
      {
        companyName: "NAURA Technology",
        segment: "OSAT/国产替代",
        valueNode: "国产工艺设备平台",
        kpis: ["设备订单", "先进工艺导入", "毛利率", "国产替代份额"],
        moat: "国产半导体设备平台，覆盖刻蚀、薄膜、清洗等多环节。",
        risks: ["客户验收", "高端工艺差距", "竞争", "周期"],
        catalysts: ["国产替代加速", "本土晶圆厂 capex", "先进封装/存储设备需求"],
        sourceIds: ["naura-official"]
      },
      {
        companyName: "AMEC",
        segment: "OSAT/国产替代",
        valueNode: "国产刻蚀设备",
        kpis: ["刻蚀设备订单", "客户验证", "毛利率", "高端工艺进展"],
        moat: "国产刻蚀设备核心供应商，受益本土晶圆厂和先进工艺验证。",
        risks: ["技术验证", "客户集中", "竞争", "出口限制"],
        catalysts: ["本土晶圆厂扩产", "先进刻蚀验证", "国产替代"],
        sourceIds: ["amec-official"]
      },
      {
        companyName: "Piotech",
        segment: "OSAT/国产替代",
        valueNode: "国产沉积设备",
        kpis: ["沉积设备订单", "客户验证", "毛利率", "高端工艺进展"],
        moat: "国产薄膜沉积设备能力，受益本土工艺设备替代。",
        risks: ["技术验证", "客户集中", "竞争", "周期"],
        catalysts: ["本土晶圆厂 capex", "沉积设备国产替代", "先进封装/存储需求"],
        sourceIds: ["piotech-official"]
      }
    ]
  },
  {
    key: "datacenter-power",
    title: "AI 电力、数据中心与液冷同业对照",
    description: "围绕 AI Factory 的物理底座，比较电力/配电、数据中心资产、AI 服务器/ODM、液冷/热管理、训练存储五类 CAPEX 节点。",
    thesis: "AI 数据中心的核心矛盾从“买 GPU”变成“能否拿到电、能否高密散热、能否按整柜交付、能否把训练数据喂满 GPU”。电力、液冷、服务器制造、IDC 容量和训练存储共同决定 AI Factory 的真实投产速度。",
    filters: ["全部", "电力/配电", "数据中心资产", "AI 服务器/ODM", "液冷/热管理", "训练存储"],
    rows: [
      {
        companyName: "Vertiv",
        segment: "电力/配电",
        valueNode: "UPS、配电、热管理、液冷基础设施",
        kpis: ["订单 backlog", "数据中心收入", "液冷产品", "交付周期"],
        moat: "数据中心电力与热管理全栈能力，卡住高密 AI 机柜从设计到交付的工程接口。",
        risks: ["估值", "供应链交付", "客户 capex", "竞争"],
        catalysts: ["GB200/Rubin 高密机柜", "液冷改造", "数据中心电力扩容"],
        sourceIds: ["vertiv-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "Schneider Electric",
        segment: "电力/配电",
        valueNode: "中低压配电、能源管理、微电网",
        kpis: ["数据中心订单", "能源管理收入", "毛利率", "项目交付"],
        moat: "配电、能效管理和自动化软件结合，适合 AI 园区电力系统级改造。",
        risks: ["项目周期", "欧洲宏观", "估值", "竞争"],
        catalysts: ["数据中心配电升级", "微电网/PPA 配套", "AI 园区能效管理"],
        sourceIds: ["schneider-official", "iea-energy-ai"]
      },
      {
        companyName: "Eaton",
        segment: "电力/配电",
        valueNode: "UPS、断路器、配电和电气化",
        kpis: ["Electrical backlog", "数据中心订单", "UPS 需求", "毛利率"],
        moat: "电气化和配电设备平台，受益大型负载接入和数据中心供电冗余。",
        risks: ["估值", "供应链", "客户 capex", "工业周期"],
        catalysts: ["并网扩容", "AI 数据中心 UPS", "高密机房配电升级"],
        sourceIds: ["eaton-official", "iea-energy-ai"]
      },
      {
        companyName: "Delta Electronics",
        segment: "电力/配电",
        valueNode: "服务器电源、热管理、电源转换",
        kpis: ["电源业务收入", "热管理收入", "数据中心客户", "毛利率"],
        moat: "电源转换和热管理能力横跨服务器、电力电子和工业自动化。",
        risks: ["客户集中", "台系供应链周期", "价格竞争", "汇率"],
        catalysts: ["AI PSU 升级", "高密机柜热管理", "服务器平台迁移"],
        sourceIds: ["delta-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "Lite-On",
        segment: "电力/配电",
        valueNode: "服务器电源、AI PSU、光电元件",
        kpis: ["AI PSU 收入", "客户认证", "毛利率", "产能利用率"],
        moat: "服务器电源和光电组件制造能力，受益 AI 服务器功耗上升。",
        risks: ["价格竞争", "客户集中", "认证周期", "电源代际切换"],
        catalysts: ["AI PSU 升级", "整柜功耗提升", "云客户拉货"],
        sourceIds: ["liteon-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "NextEra Energy",
        segment: "电力/配电",
        valueNode: "可再生 PPA、储能、并网资源",
        kpis: ["PPA 签约", "储能项目", "并网队列", "电价"],
        moat: "可再生能源开发和储能规模，能为 AI 数据中心提供长期电力合约。",
        risks: ["利率", "并网等待", "电价", "政策"],
        catalysts: ["云厂商 PPA", "储能配套", "数据中心负载增长"],
        sourceIds: ["nextera-official", "iea-energy-ai"]
      },
      {
        companyName: "Vistra",
        segment: "电力/配电",
        valueNode: "可调度电源、核电资产、AI 负载",
        kpis: ["发电利润率", "核电资产利用率", "长期电力合约", "电价"],
        moat: "可调度电源和核电资产在 AI 基荷需求下具备稀缺性。",
        risks: ["电价波动", "监管", "燃料成本", "政策"],
        catalysts: ["AI 基荷电力重估", "核电 PPA", "容量市场改善"],
        sourceIds: ["vistra-official", "constellation-microsoft-ppa"]
      },
      {
        companyName: "Constellation Energy",
        segment: "电力/配电",
        valueNode: "核电 PPA、24/7 清洁基荷",
        kpis: ["核电 PPA", "机组利用率", "电价", "合同期限"],
        moat: "美国核电基荷资产和长约 PPA 能力，直接受益 AI 电力稀缺。",
        risks: ["监管", "核电运维", "政治风险", "电价"],
        catalysts: ["Microsoft PPA", "核电重启", "24/7 清洁电力需求"],
        sourceIds: ["constellation-microsoft-ppa", "iea-energy-ai"]
      },
      {
        companyName: "GE Vernova",
        segment: "电力/配电",
        valueNode: "燃机调峰、电网设备、电气化",
        kpis: ["燃机订单", "Grid 订单", "服务收入", "毛利率"],
        moat: "燃机和电网设备组合，服务 AI 数据中心用电增长和调峰需求。",
        risks: ["项目执行", "供应链", "政策", "估值"],
        catalysts: ["燃气电站需求", "电网扩容", "数据中心并网"],
        sourceIds: ["ge-vernova-official", "iea-energy-ai"]
      },
      {
        companyName: "Siemens Energy",
        segment: "电力/配电",
        valueNode: "高压设备、输电、电网扩容",
        kpis: ["Grid Technologies 订单", "燃机服务", "交付周期", "利润率"],
        moat: "高压输电和电网设备能力，受益数据中心大负载接入。",
        risks: ["项目执行", "风电历史包袱", "供应链", "欧洲政策"],
        catalysts: ["输电扩容", "变压器紧缺", "AI 园区接电"],
        sourceIds: ["siemens-energy-official", "iea-energy-ai"]
      },
      {
        companyName: "Equinix",
        segment: "数据中心资产",
        valueNode: "托管数据中心、互联生态、边缘推理",
        kpis: ["租用率", "MW 增量", "互联收入", "PUE"],
        moat: "全球互联生态和托管数据中心客户粘性，适合承接企业 AI 和边缘推理。",
        risks: ["电力获取", "高密改造成本", "利率", "客户 capex"],
        catalysts: ["AI-ready capacity", "企业混合云", "互联生态扩张"],
        sourceIds: ["equinix-official", "iea-energy-ai"]
      },
      {
        companyName: "Digital Realty",
        segment: "数据中心资产",
        valueNode: "批发数据中心、电力获取、高密改造",
        kpis: ["租用率", "新签 MW", "租金", "开发管线"],
        moat: "批发数据中心规模、电力和土地资源，受益云厂商 AI 负载扩张。",
        risks: ["利率", "电力获取", "高密改造", "客户集中"],
        catalysts: ["AI 大客户签约", "高密园区建设", "电力资源重估"],
        sourceIds: ["digital-realty-official", "iea-energy-ai"]
      },
      {
        companyName: "GDS Holdings",
        segment: "数据中心资产",
        valueNode: "中国/亚洲 AI-ready 数据中心容量",
        kpis: ["可用 MW", "租用率", "客户结构", "电力容量"],
        moat: "中国和亚洲高等级数据中心资源，AI 机房改造带来容量价值重估。",
        risks: ["杠杆", "客户 capex", "电力审批", "价格竞争"],
        catalysts: ["AI 机房需求", "海外平台扩张", "电力容量释放"],
        sourceIds: ["gds-official", "iea-energy-ai"]
      },
      {
        companyName: "VNET",
        segment: "数据中心资产",
        valueNode: "IDC、企业云、区域数据中心",
        kpis: ["IDC 收入", "机柜利用率", "电力容量", "客户续约"],
        moat: "中国 IDC 和企业云连接资源，适合看中低密度向 AI-ready 改造。",
        risks: ["价格竞争", "债务", "客户需求", "电力审批"],
        catalysts: ["AI 机柜改造", "企业云需求", "区域数据中心复苏"],
        sourceIds: ["vnet-official", "iea-energy-ai"]
      },
      {
        companyName: "Supermicro",
        segment: "AI 服务器/ODM",
        valueNode: "AI 服务器、液冷整柜、快速交付",
        kpis: ["AI 服务器收入", "毛利率", "液冷整柜", "库存周转"],
        moat: "快速产品化和高密服务器集成能力，直接暴露于 GPU 平台迁移。",
        risks: ["治理/财务争议", "毛利率", "客户集中", "竞争"],
        catalysts: ["Blackwell/Rubin 整柜", "液冷机柜放量", "云/企业 AI 服务器需求"],
        sourceIds: ["supermicro-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "Dell Technologies",
        segment: "AI 服务器/ODM",
        valueNode: "企业 AI 工厂、服务器+存储集成",
        kpis: ["AI server backlog", "服务器收入", "存储 attach", "毛利率"],
        moat: "企业客户渠道、服务器与存储集成和私有 AI 工厂交付能力。",
        risks: ["毛利率稀释", "客户 capex", "竞争", "供应链"],
        catalysts: ["企业私有推理", "AI Factory 订单", "存储/服务 attach"],
        sourceIds: ["dell-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "HPE",
        segment: "AI 服务器/ODM",
        valueNode: "HPC+AI、企业私有云、集群运维",
        kpis: ["HPC/AI 订单", "GreenLake", "集群交付", "服务收入"],
        moat: "HPC 集群经验和企业私有云客户，适合承接科研/企业 AI 集群。",
        risks: ["订单波动", "整合执行", "毛利率", "竞争"],
        catalysts: ["企业 AI 集群", "HPC+AI 融合", "私有云推理"],
        sourceIds: ["hpe-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "Lenovo",
        segment: "AI 服务器/ODM",
        valueNode: "企业服务器、边缘 AI、AI PC",
        kpis: ["ISG 收入", "AI 服务器订单", "边缘 AI", "毛利率"],
        moat: "全球企业渠道、服务器和终端入口，受益企业 AI 与边缘部署。",
        risks: ["PC 周期", "服务器毛利率", "竞争", "地缘"],
        catalysts: ["AI PC 更新", "企业 AI 服务器", "边缘推理"],
        sourceIds: ["lenovo-official"]
      },
      {
        companyName: "Quanta Computer",
        segment: "AI 服务器/ODM",
        valueNode: "AI ODM、整柜制造、云客户",
        kpis: ["AI server 占比", "云客户订单", "毛利率", "产能"],
        moat: "云服务器 ODM 和整柜制造能力，直接承接 hyperscaler AI CAPEX。",
        risks: ["客户集中", "毛利率", "供应链", "平台切换"],
        catalysts: ["GB200/Rubin 整柜", "云客户拉货", "AI ODM 份额提升"],
        sourceIds: ["quanta-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "Wiwynn",
        segment: "AI 服务器/ODM",
        valueNode: "云服务器 ODM、高密机柜、OCP",
        kpis: ["云客户收入", "AI 服务器占比", "毛利率", "库存"],
        moat: "OCP 云服务器和高密机柜制造能力，受益大型云厂商 AI 采购。",
        risks: ["客户集中", "平台切换", "毛利率", "库存"],
        catalysts: ["AI 服务器订单", "高密整柜", "云 CAPEX"],
        sourceIds: ["wiwynn-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "Wistron",
        segment: "AI 服务器/ODM",
        valueNode: "AI 服务器制造、整机测试、供应链弹性",
        kpis: ["AI server 收入", "客户认证", "毛利率", "产能利用率"],
        moat: "服务器制造和整机测试能力，受益 AI 服务器供应链外溢。",
        risks: ["客户集中", "价格竞争", "平台切换", "汇率"],
        catalysts: ["AI 服务器制造需求", "新客户导入", "整机测试复杂度提升"],
        sourceIds: ["wistron-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "Foxconn",
        segment: "AI 服务器/ODM",
        valueNode: "AI 制造、服务器组装、机器人量产",
        kpis: ["AI server 收入", "云客户订单", "产能布局", "毛利率"],
        moat: "全球制造规模和服务器组装能力，受益 AI 服务器和机器人量产双线需求。",
        risks: ["客户集中", "毛利率", "地缘", "周期"],
        catalysts: ["AI 服务器组装", "云客户扩产", "机器人制造"],
        sourceIds: ["foxconn-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "Envicool",
        segment: "液冷/热管理",
        valueNode: "液冷、温控、高密机柜",
        kpis: ["液冷收入", "数据中心客户", "毛利率", "订单"],
        moat: "数据中心温控和液冷解决方案，受益中国高密机柜改造。",
        risks: ["价格竞争", "客户认证", "项目节奏", "毛利率"],
        catalysts: ["液冷渗透率提升", "AI 机柜高密化", "储能温控"],
        sourceIds: ["envicool-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "CoolIT Systems",
        segment: "液冷/热管理",
        valueNode: "冷板液冷、CDU、高密机柜",
        kpis: ["液冷项目", "客户认证", "交付能力", "可靠性"],
        moat: "冷板和 CDU 工程经验，卡住机柜级 AI 系统热设计落地。",
        risks: ["私有公司透明度", "客户集中", "漏液可靠性", "竞争"],
        catalysts: ["GB200/Rubin 液冷", "高密 rack 部署", "云客户液冷标准化"],
        sourceIds: ["coolit-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "Modine",
        segment: "液冷/热管理",
        valueNode: "热交换、液冷配套、数据中心冷却",
        kpis: ["数据中心冷却收入", "订单", "毛利率", "产能"],
        moat: "热交换和冷却系统能力，受益传统 HVAC 向高密液冷配套升级。",
        risks: ["项目周期", "竞争", "执行", "估值"],
        catalysts: ["数据中心冷却需求", "液冷配套", "高密机柜改造"],
        sourceIds: ["modine-official", "iea-energy-ai"]
      },
      {
        companyName: "Sanhua Intelligent Controls",
        segment: "液冷/热管理",
        valueNode: "热管理阀件、液冷配套、机电部件",
        kpis: ["热管理收入", "数据中心客户", "毛利率", "机器人部件"],
        moat: "阀件和热管理部件平台，可同时暴露数据中心液冷与机器人执行部件。",
        risks: ["客户认证", "汽车周期", "价格竞争", "汇率"],
        catalysts: ["液冷配套", "机器人部件", "高密机柜热管理"],
        sourceIds: ["sanhua-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "CATL",
        segment: "液冷/热管理",
        valueNode: "储能、备用电源、园区电池系统",
        kpis: ["储能出货", "系统毛利率", "海外项目", "安全性"],
        moat: "电池和储能系统规模能力，服务 AI 园区峰谷调节和备用电源。",
        risks: ["价格竞争", "海外政策", "安全事故", "周期"],
        catalysts: ["数据中心储能", "微电网", "PPA 配套"],
        sourceIds: ["catl-official", "iea-energy-ai"]
      },
      {
        companyName: "Sungrow",
        segment: "液冷/热管理",
        valueNode: "储能系统、电力电子、PPA 配套",
        kpis: ["储能收入", "逆变器毛利", "海外项目", "订单"],
        moat: "储能和电力电子能力，服务数据中心微电网和新能源 PPA 配套。",
        risks: ["价格竞争", "海外政策", "项目执行", "电池成本"],
        catalysts: ["AI 数据中心储能", "微电网", "可再生 PPA 配套"],
        sourceIds: ["sungrow-official", "iea-energy-ai"]
      },
      {
        companyName: "WEKA",
        segment: "训练存储",
        valueNode: "训练存储、Checkpoint、GPU 数据管道",
        kpis: ["吞吐性能", "checkpoint 时间", "GPU 利用率", "企业客户"],
        moat: "高吞吐文件系统和训练数据管道能力，目标是减少 GPU 等数据的 idle time。",
        risks: ["私有公司透明度", "云厂商自研", "竞争", "商业化"],
        catalysts: ["大模型训练集群", "checkpoint 频率上升", "GPU 利用率优化"],
        sourceIds: ["weka-official", "meta-llama-24k"]
      },
      {
        companyName: "VAST Data",
        segment: "训练存储",
        valueNode: "AI 数据底座、非结构化数据、训练 I/O",
        kpis: ["客户增长", "非结构化数据规模", "吞吐", "平台 attach"],
        moat: "统一数据平台和高性能存储架构，服务 AI 训练和企业数据底座。",
        risks: ["私有公司透明度", "竞争", "估值", "云厂商自研"],
        catalysts: ["AI 数据湖扩张", "训练/推理数据复用", "企业 AI 数据底座"],
        sourceIds: ["vast-data-official", "meta-llama-24k"]
      },
      {
        companyName: "DDN",
        segment: "训练存储",
        valueNode: "HPC/AI 存储、并行文件系统、checkpoint",
        kpis: ["AI/HPC 客户", "checkpoint 性能", "吞吐", "系统订单"],
        moat: "HPC 并行文件系统和 AI 存储经验，直接服务大规模训练集群。",
        risks: ["私有公司透明度", "客户项目制", "竞争", "云自研"],
        catalysts: ["训练集群扩容", "checkpoint 需求", "GPU 数据管道优化"],
        sourceIds: ["ddn-official", "meta-llama-24k"]
      }
    ]
  },
  {
    key: "ai-cloud-apps",
    title: "AI 云、模型与企业应用同业对照",
    description: "围绕 AI 从模型能力到企业 ROI 的价值传导，比较云/模型平台、企业数据/RAG、Agent 应用、安全评测、中国模型与办公应用五类软件节点。",
    thesis: "软件层的核心不是谁有聊天框，而是谁能把模型嵌入企业数据、权限、工作流和审计闭环。云平台捕获算力与模型调用，数据平台控制上下文，Agent 应用争夺业务入口，安全评测决定企业能否规模化上线。",
    filters: ["全部", "云/模型平台", "企业数据/RAG", "Agent 应用", "安全评测", "中国模型/办公"],
    rows: [
      {
        companyName: "Microsoft",
        segment: "云/模型平台",
        valueNode: "Azure AI、Copilot、企业身份权限",
        kpis: ["Azure AI 收入", "Copilot seat", "企业续费", "AI capex 回报"],
        moat: "企业身份、Office、GitHub、Azure 和 OpenAI 合作形成分发闭环。",
        risks: ["AI capex 回报", "Copilot ROI", "监管", "模型依赖"],
        catalysts: ["Copilot 渗透", "Azure AI 消费", "企业 Agent 工作流"],
        sourceIds: ["openai-stargate", "github-copilot-coding-agent"]
      },
      {
        companyName: "Alphabet / Google",
        segment: "云/模型平台",
        valueNode: "Gemini、TPU、搜索重构、Agentspace",
        kpis: ["Google Cloud AI 收入", "TPU 采用", "搜索 AI monetization", "Gemini 使用量"],
        moat: "TPU、搜索数据、Android/Workspace 分发和 DeepMind 模型能力。",
        risks: ["搜索广告重构", "云竞争", "监管", "模型成本"],
        catalysts: ["Gemini 2.5", "Agentspace 企业落地", "AI 搜索体验升级"],
        sourceIds: ["google-gemini-25", "google-agentspace"]
      },
      {
        companyName: "Amazon",
        segment: "云/模型平台",
        valueNode: "AWS Bedrock、Trainium/Inferentia、企业云分发",
        kpis: ["AWS AI 收入", "Trainium 采用", "Bedrock 调用", "云客户扩张"],
        moat: "AWS 客户基础、自研芯片、云服务深度和能源采购能力。",
        risks: ["微软/谷歌竞争", "自研芯片采用", "capex", "模型差异化"],
        catalysts: ["Bedrock 增长", "Trainium 集群", "企业 Agent 部署"],
        sourceIds: ["amazon-x-energy", "nvidia-dynamo"]
      },
      {
        companyName: "Oracle",
        segment: "云/模型平台",
        valueNode: "OCI GPU 云、企业数据库、训练集群",
        kpis: ["OCI 订单", "GPU capacity", "数据库 attach", "客户集中度"],
        moat: "企业数据库客户和 OCI 高性能网络，适合大规模训练云合同。",
        risks: ["客户集中", "capex 压力", "交付能力", "云份额"],
        catalysts: ["OCI GPU 集群", "数据库 AI", "企业训练/推理合同"],
        sourceIds: ["openai-stargate", "meta-llama-24k"]
      },
      {
        companyName: "Meta Platforms",
        segment: "云/模型平台",
        valueNode: "Llama 开源模型、广告 AI、自研基础设施",
        kpis: ["Llama 生态", "广告 AI ROI", "capex 强度", "推理成本"],
        moat: "社交分发、广告现金流、开源模型生态和训练基础设施。",
        risks: ["监管", "capex 回报", "开源商业化", "广告周期"],
        catalysts: ["Llama 迭代", "广告 AI 效率", "消费 AI 入口"],
        sourceIds: ["meta-llama-24k", "openai-o3-o4-mini"]
      },
      {
        companyName: "OpenAI",
        segment: "云/模型平台",
        valueNode: "Reasoning Model、ChatGPT、Agent 平台",
        kpis: ["ChatGPT 使用量", "API 调用", "reasoning 成本", "企业客户"],
        moat: "前沿模型、产品分发、开发者生态和 Agent 平台心智。",
        risks: ["算力成本", "竞争", "安全监管", "商业化压力"],
        catalysts: ["o3/o4 类推理模型", "Codex/Agent", "Stargate 算力扩张"],
        sourceIds: ["openai-o3-o4-mini", "openai-codex", "openai-stargate"]
      },
      {
        companyName: "Anthropic",
        segment: "云/模型平台",
        valueNode: "长上下文、Extended Thinking、企业安全",
        kpis: ["Claude 企业使用", "上下文长度", "API 收入", "云渠道"],
        moat: "安全定位、长上下文、MCP 生态和企业可信部署叙事。",
        risks: ["算力成本", "模型竞争", "渠道依赖", "商业化"],
        catalysts: ["Claude 3.7+", "企业安全部署", "MCP 工具生态"],
        sourceIds: ["anthropic-claude-37", "nist-ai-rmf"]
      },
      {
        companyName: "Databricks",
        segment: "企业数据/RAG",
        valueNode: "Lakehouse、Mosaic AI、后训练平台",
        kpis: ["ARR", "数据平台客户", "Mosaic AI 使用", "模型训练/微调项目"],
        moat: "企业数据湖、Spark 生态、Mosaic AI 和治理能力靠近 AI 预算源头。",
        risks: ["Snowflake 竞争", "云厂商竞争", "私有公司透明度", "销售周期"],
        catalysts: ["企业私有模型", "数据治理/RAG", "后训练工作流"],
        sourceIds: ["databricks-ai-official", "nist-ai-rmf"]
      },
      {
        companyName: "Snowflake",
        segment: "企业数据/RAG",
        valueNode: "Data Cloud、Cortex AI、治理/RAG",
        kpis: ["消费收入", "Cortex 使用", "数据治理客户", "净留存"],
        moat: "企业数据驻留、治理、共享和安全控制，是 RAG/Agent 的数据面。",
        risks: ["Databricks 竞争", "消费增速", "云厂商竞争", "AI 产品 ROI"],
        catalysts: ["Cortex AI", "企业数据治理", "RAG 数据底座"],
        sourceIds: ["snowflake-cortex-official", "nist-ai-rmf"]
      },
      {
        companyName: "Palantir",
        segment: "企业数据/RAG",
        valueNode: "Ontology、AIP、政府/工业工作流",
        kpis: ["AIP 客户", "商业收入增长", "政府合同", "净留存"],
        moat: "Ontology 语义层和高接触部署能力，把 AI 嵌入真实业务流程。",
        risks: ["估值", "项目制交付", "客户集中", "竞争"],
        catalysts: ["AIP Bootcamp", "政府/工业 AI", "生产级 Agent"],
        sourceIds: ["palantir-aip-official", "nist-ai-rmf"]
      },
      {
        companyName: "MongoDB",
        segment: "企业数据/RAG",
        valueNode: "AI 应用数据层、文档数据库、向量搜索",
        kpis: ["Atlas 增长", "Vector Search 使用", "开发者采用", "净留存"],
        moat: "灵活 schema、开发者心智和 Atlas 云服务连接 AI 应用数据层。",
        risks: ["云数据库竞争", "消费增速", "向量数据库替代", "开源替代"],
        catalysts: ["AI 应用构建", "Vector Search", "Agent 数据层"],
        sourceIds: ["mongodb-vector-search-official", "google-agentspace"]
      },
      {
        companyName: "Elastic",
        segment: "企业数据/RAG",
        valueNode: "混合检索、RAG、可观测/安全数据",
        kpis: ["搜索收入", "云收入", "RAG 使用", "安全/可观测客户"],
        moat: "搜索、日志、安全和可观测数据统一，适合企业 RAG 与 AI 运维。",
        risks: ["云竞争", "开源替代", "销售执行", "预算周期"],
        catalysts: ["混合检索/RAG", "安全数据平台", "AI 可观测"],
        sourceIds: ["elastic-ai-official", "nist-ai-rmf"]
      },
      {
        companyName: "Confluent",
        segment: "企业数据/RAG",
        valueNode: "实时数据流、事件驱动 Agent、数据管道",
        kpis: ["Cloud 收入", "Kafka 连接器", "消费增长", "客户扩张"],
        moat: "Kafka 生态和实时数据契约，Agent 行动需要事件流和业务系统触发。",
        risks: ["开源替代", "云厂商竞争", "消费增速", "销售执行"],
        catalysts: ["事件驱动 Agent", "实时数据管道", "企业系统集成"],
        sourceIds: ["google-agentspace", "nist-ai-rmf"]
      },
      {
        companyName: "Glean",
        segment: "企业数据/RAG",
        valueNode: "企业搜索、权限连接器、知识图谱",
        kpis: ["企业客户", "连接器数量", "搜索/Agent 使用", "续费"],
        moat: "权限连接器和企业知识图谱是安全 Agent 的前置数据层。",
        risks: ["微软/谷歌竞争", "连接器维护", "预算周期", "数据权限复杂度"],
        catalysts: ["企业搜索升级", "Agent 工作流", "权限感知 RAG"],
        sourceIds: ["glean-official", "google-agentspace"]
      },
      {
        companyName: "Salesforce",
        segment: "Agent 应用",
        valueNode: "Agentforce、CRM 系统记录、企业工作流",
        kpis: ["Agentforce 付费", "CRM 续费", "Data Cloud attach", "客户 ROI"],
        moat: "CRM 系统记录和销售/客服工作流入口，天然承接客户 Agent。",
        risks: ["Agent ROI", "集成复杂度", "微软竞争", "席位增长"],
        catalysts: ["Agentforce 3", "Data Cloud", "客服/销售 Agent"],
        sourceIds: ["salesforce-agentforce-3"]
      },
      {
        companyName: "ServiceNow",
        segment: "Agent 应用",
        valueNode: "ITSM/CSM 工作流、企业 Agent 入口",
        kpis: ["Pro Plus/AI attach", "工作流使用", "续费", "大客户扩张"],
        moat: "ITSM/CSM/HR 工作流和审批系统，适合把 Agent 接入企业执行闭环。",
        risks: ["AI attach 速度", "估值", "微软/Salesforce 竞争", "项目周期"],
        catalysts: ["AI Agent 工作流", "IT 自动化", "企业系统入口升级"],
        sourceIds: ["servicenow-ai-official", "salesforce-agentforce-3"]
      },
      {
        companyName: "Adobe",
        segment: "Agent 应用",
        valueNode: "生成式媒体、版权安全、创意工作流",
        kpis: ["Firefly 使用", "Creative Cloud 续费", "生成式积分", "企业客户"],
        moat: "创意软件入口、版权安全数据和专业工作流。",
        risks: ["生成式 AI 替代", "价格/付费模式", "版权诉讼", "竞争"],
        catalysts: ["Firefly 商业化", "创意 Agent", "企业内容生成"],
        sourceIds: ["adobe-firefly-official", "nist-ai-rmf"]
      },
      {
        companyName: "Atlassian",
        segment: "Agent 应用",
        valueNode: "研发工作流、Jira/Confluence、协作 Agent",
        kpis: ["Cloud 迁移", "Rovo 使用", "席位增长", "企业续费"],
        moat: "研发 issue、文档和协作数据入口，是软件团队 Agent 的工作台。",
        risks: ["微软竞争", "AI 付费", "迁移执行", "SMB 周期"],
        catalysts: ["Rovo", "研发 Agent", "知识工作流自动化"],
        sourceIds: ["atlassian-rovo-official", "github-copilot-coding-agent"]
      },
      {
        companyName: "Intuit",
        segment: "Agent 应用",
        valueNode: "财税 Agent、SMB 工作流、信任数据",
        kpis: ["TurboTax/QuickBooks AI", "SMB 留存", "ARPU", "数据质量"],
        moat: "财税和小企业数据闭环，AI 可以直接影响报税、记账和现金流建议。",
        risks: ["监管", "客户信任", "软件替代", "数据隐私"],
        catalysts: ["Intuit Assist", "财税 Agent", "SMB 自动化"],
        sourceIds: ["salesforce-agentforce-3", "nist-ai-rmf"]
      },
      {
        companyName: "Anysphere",
        segment: "Agent 应用",
        valueNode: "Cursor、AI 编程 IDE、Repo 上下文",
        kpis: ["开发者留存", "企业席位", "模型成本", "任务完成率"],
        moat: "IDE 入口和代码上下文工程，编程是 Agent 最清晰的高频付费场景。",
        risks: ["平台复制", "模型成本", "企业安全", "开发者留存"],
        catalysts: ["Cursor 企业化", "Repo Agent", "AI 编程工作流"],
        sourceIds: ["cursor-official", "openai-codex"]
      },
      {
        companyName: "Cognition",
        segment: "Agent 应用",
        valueNode: "异步软件工程 Agent、任务执行",
        kpis: ["任务成功率", "企业客户", "代码质量", "交付周期"],
        moat: "从补全到 issue 级交付的执行闭环，押注软件外包和内部研发流程重构。",
        risks: ["稳定性", "可解释性", "测试环境", "竞争"],
        catalysts: ["异步编码 Agent", "软件工程自动化", "企业研发 ROI"],
        sourceIds: ["openai-codex", "github-copilot-coding-agent"]
      },
      {
        companyName: "Replit",
        segment: "Agent 应用",
        valueNode: "在线 IDE、Vibe Coding、一键部署",
        kpis: ["Agent 使用", "部署数", "开发者留存", "云成本"],
        moat: "在线 IDE、部署环境和开发者社区降低应用生成门槛。",
        risks: ["云成本", "平台竞争", "留存", "企业安全"],
        catalysts: ["Vibe Coding", "长尾应用生成", "Agent 部署闭环"],
        sourceIds: ["replit-agent-official", "openai-codex"]
      },
      {
        companyName: "Sierra",
        segment: "Agent 应用",
        valueNode: "客服 Agent、企业系统集成、HITL",
        kpis: ["客户数量", "自动化率", "升级率", "客户 ROI"],
        moat: "客服是 Agent 最直接规模化入口，关键在品牌一致性、行动边界和人类在环。",
        risks: ["幻觉", "集成成本", "CRM 平台竞争", "客户 ROI"],
        catalysts: ["客服 Agent", "企业系统集成", "HITL 运营"],
        sourceIds: ["salesforce-agentforce-3", "nist-ai-rmf"]
      },
      {
        companyName: "Harvey",
        segment: "Agent 应用",
        valueNode: "法律 AI、专业 Agent、高价值工作流",
        kpis: ["律所客户", "使用时长", "文档工作流", "准确率"],
        moat: "法律场景高价值、强工作流和专业数据闭环。",
        risks: ["幻觉责任", "数据授权", "客户集中", "平台竞争"],
        catalysts: ["法律研究/审阅", "专业 Agent", "高价值知识工作自动化"],
        sourceIds: ["openai-o3-o4-mini", "nist-ai-rmf"]
      },
      {
        companyName: "Abridge",
        segment: "Agent 应用",
        valueNode: "医疗文书、Ambient AI、EHR 集成",
        kpis: ["医疗机构客户", "文书节省时间", "EHR 集成", "准确率"],
        moat: "医疗文书高频刚需和 EHR 集成壁垒，ROI 更易量化。",
        risks: ["医疗合规", "责任", "集成周期", "竞争"],
        catalysts: ["Ambient AI", "医生效率", "医疗系统集成"],
        sourceIds: ["nist-ai-rmf", "openai-o3-o4-mini"]
      },
      {
        companyName: "CrowdStrike",
        segment: "安全评测",
        valueNode: "SOC Agent、端点遥测、自动化响应",
        kpis: ["Falcon 客户", "Charlotte AI 使用", "ARR", "安全事件响应"],
        moat: "端点遥测和威胁情报数据，安全 Agent 需要高质量实时上下文。",
        risks: ["平台事故", "预算周期", "竞争", "责任风险"],
        catalysts: ["SOC Agent", "AI 安全运营", "自动化响应"],
        sourceIds: ["crowdstrike-charlotte-official", "nist-ai-rmf"]
      },
      {
        companyName: "Datadog",
        segment: "安全评测",
        valueNode: "LLM 可观测、P99、成本监控、生产运维",
        kpis: ["LLM observability 使用", "客户扩张", "日志/APM 消费", "告警质量"],
        moat: "生产运维和可观测数据平台，企业上线 AI 后需要监控成本、延迟和质量。",
        risks: ["云平台竞争", "消费优化", "预算周期", "数据量成本"],
        catalysts: ["LLM 可观测", "Agent 运行监控", "推理成本治理"],
        sourceIds: ["datadog-llm-observability-official", "nvidia-dynamo"]
      },
      {
        companyName: "Cloudflare",
        segment: "安全评测",
        valueNode: "边缘推理、安全网关、Workers AI",
        kpis: ["Workers AI 使用", "安全收入", "开发者采用", "边缘请求"],
        moat: "全球网络、安全网关和开发者平台，适合低延迟推理和 AI 安全控制。",
        risks: ["推理成本", "云竞争", "开发者 monetization", "安全责任"],
        catalysts: ["边缘 AI", "AI 安全网关", "Workers AI"],
        sourceIds: ["cloudflare-ai-official", "nvidia-dynamo"]
      },
      {
        companyName: "Hugging Face",
        segment: "安全评测",
        valueNode: "开源模型生态、模型分发、评测/数据集",
        kpis: ["模型下载", "企业客户", "评测/数据集使用", "社区活跃"],
        moat: "开源模型和数据集社区，是企业模型选型、部署和评测入口。",
        risks: ["商业化", "云厂商复制", "版权合规", "社区治理"],
        catalysts: ["开源模型扩张", "企业协作", "评测和数据集需求"],
        sourceIds: ["huggingface-official", "nist-ai-rmf"]
      },
      {
        companyName: "Scale AI",
        segment: "安全评测",
        valueNode: "数据标注、RLHF、评测数据、政府 AI",
        kpis: ["数据项目", "评测收入", "政府客户", "数据质量"],
        moat: "高质量数据、偏好标注和评测集是模型能力与安全的关键输入。",
        risks: ["客户集中", "平台内化", "劳动力成本", "质量控制"],
        catalysts: ["RLHF/评测需求", "红队数据", "政府 AI"],
        sourceIds: ["scale-ai-official", "openai-preparedness"]
      },
      {
        companyName: "Perplexity",
        segment: "安全评测",
        valueNode: "AI 搜索、引用答案、浏览 Agent",
        kpis: ["用户增长", "订阅收入", "查询成本", "引用质量"],
        moat: "引用式答案体验和消费分发，押注搜索从关键词到答案引擎迁移。",
        risks: ["版权", "搜索巨头反击", "货币化", "推理成本"],
        catalysts: ["AI 搜索", "浏览 Agent", "企业搜索变体"],
        sourceIds: ["perplexity-official", "google-gemini-25"]
      },
      {
        companyName: "Alibaba Group",
        segment: "中国模型/办公",
        valueNode: "通义/Qwen、阿里云、企业 Agent",
        kpis: ["阿里云 AI 收入", "Qwen 下载/调用", "企业客户", "推理成本"],
        moat: "云、开源模型、电商/企业客户和中国生态分发。",
        risks: ["云竞争", "模型成本", "监管", "商业化"],
        catalysts: ["Qwen 开源生态", "企业 Agent", "云 AI 增长"],
        sourceIds: ["qwen3-2025"]
      },
      {
        companyName: "Tencent",
        segment: "中国模型/办公",
        valueNode: "混元、企业微信、内容与游戏入口",
        kpis: ["混元使用", "企业微信 AI", "内容生成", "广告/游戏 AI"],
        moat: "超级应用入口、企业协同、内容生态和腾讯云客户。",
        risks: ["模型份额", "云竞争", "监管", "商业化节奏"],
        catalysts: ["混元模型", "企业微信 Agent", "内容生成"],
        sourceIds: ["tencent-hunyuan-official"]
      },
      {
        companyName: "Baidu",
        segment: "中国模型/办公",
        valueNode: "文心、千帆、搜索重构、Apollo",
        kpis: ["文心调用", "千帆客户", "搜索 AI monetization", "云收入"],
        moat: "搜索、知识图谱、百度智能云和自动驾驶真实世界数据。",
        risks: ["搜索广告重构", "云竞争", "模型份额", "自动驾驶节奏"],
        catalysts: ["ERNIE 4.5", "千帆企业 AI", "搜索 AI 重构"],
        sourceIds: ["baidu-ernie-45"]
      },
      {
        companyName: "DeepSeek",
        segment: "中国模型/办公",
        valueNode: "Reasoning Model、开源模型、低成本训练",
        kpis: ["模型能力", "开源采用", "推理成本", "社区生态"],
        moat: "低成本 reasoning 叙事和开源扩散速度，影响全球模型价格体系。",
        risks: ["算力约束", "商业化", "模型迭代", "监管"],
        catalysts: ["R1 后续模型", "开源生态", "低成本推理"],
        sourceIds: ["deepseek-r1", "openai-o3-o4-mini"]
      },
      {
        companyName: "Zhipu AI",
        segment: "中国模型/办公",
        valueNode: "GLM、MaaS、政企私有化",
        kpis: ["政企客户", "MaaS 调用", "私有化项目", "模型能力"],
        moat: "中文企业模型和私有化部署能力，贴近政企客户。",
        risks: ["模型竞争", "销售周期", "算力成本", "商业化"],
        catalysts: ["政企 AI", "私有化模型", "Agent 工作流"],
        sourceIds: ["zhipu-ai-official", "nist-ai-rmf"]
      },
      {
        companyName: "Moonshot AI",
        segment: "中国模型/办公",
        valueNode: "Kimi、长上下文、AI 搜索/消费 AI",
        kpis: ["用户增长", "长上下文使用", "订阅/商业化", "推理成本"],
        moat: "长上下文产品心智和消费入口，适合搜索/阅读/知识工作。",
        risks: ["消费留存", "模型成本", "竞争", "商业化"],
        catalysts: ["Kimi 迭代", "AI 搜索", "长文档工作流"],
        sourceIds: ["kimi-official", "openai-o3-o4-mini"]
      },
      {
        companyName: "iFlytek",
        segment: "中国模型/办公",
        valueNode: "中文语音、教育 AI、政企应用",
        kpis: ["星火使用", "教育 AI 收入", "政企项目", "语音能力"],
        moat: "中文语音和教育/政企客户基础，适合垂直应用落地。",
        risks: ["项目制", "模型竞争", "盈利能力", "监管"],
        catalysts: ["讯飞星火", "教育 AI", "语音 Agent"],
        sourceIds: ["iflytek-spark-official"]
      },
      {
        companyName: "Kingsoft Office",
        segment: "中国模型/办公",
        valueNode: "WPS AI、文档 Agent、国产办公入口",
        kpis: ["WPS AI 付费", "个人/企业订阅", "文档生成", "留存"],
        moat: "国产办公文档入口和高频工作流，AI 可直接提升订阅 ARPU。",
        risks: ["微软竞争", "AI 付费意愿", "模型成本", "企业预算"],
        catalysts: ["WPS AI", "文档 Agent", "国产办公替代"],
        sourceIds: ["wps-ai-official"]
      },
      {
        companyName: "360 Security Technology",
        segment: "中国模型/办公",
        valueNode: "AI 安全、企业知识库、安全 Agent",
        kpis: ["安全客户", "AI 产品付费", "知识库项目", "续费"],
        moat: "企业安全客户和安全运营入口，适合从传统安全转向 AI 安全与 Agent。",
        risks: ["商业化", "模型差异化", "竞争", "主业压力"],
        catalysts: ["AI 安全合规", "企业知识库", "安全 Agent"],
        sourceIds: ["qihoo-360-ai-official", "nist-ai-rmf"]
      }
    ]
  },
  {
    key: "embodied-robotics",
    title: "机器人与具身智能同业对照",
    description: "把具身智能链拆成本体/人形机器人、执行器/减速器、传感器/自动驾驶、工业自动化、端侧/边缘芯片五类节点，用同一套字段比较公司护城河、KPI、风险和催化剂。",
    thesis: "具身智能的约束不只在模型，而在可靠本体、低成本执行器、传感器、端侧推理和真实场景数据闭环。短期看工业、仓储、自动驾驶场景 ROI，长期看人形机器人量产和数据飞轮。",
    filters: ["全部", "本体/人形机器人", "执行器/减速器", "传感器/自动驾驶", "工业自动化", "端侧/边缘芯片"],
    rows: [
      {
        companyName: "Figure AI",
        segment: "本体/人形机器人",
        valueNode: "人形机器人本体、制造/物流试点、具身模型闭环",
        kpis: ["试点客户", "单机成本", "任务成功率", "遥操作数据"],
        moat: "人形机器人本体、端到端 AI 叙事、制造/物流试点和资本支持。",
        risks: ["量产良率", "安全认证", "单位经济性", "私有公司透明度"],
        catalysts: ["工厂试点扩容", "本体迭代", "真实任务数据积累"],
        sourceIds: ["figure-ai-official", "nvidia-gr00t-n1"]
      },
      {
        companyName: "Agility Robotics",
        segment: "本体/人形机器人",
        valueNode: "仓储搬运机器人、RaaS、真实部署运维",
        kpis: ["RaaS 部署", "MTBF", "任务吞吐", "客户续约"],
        moat: "Digit 仓储场景部署经验和 RaaS 运营闭环，离真实 ROI 更近。",
        risks: ["场景窄化", "本体维护", "客户预算", "竞争加速"],
        catalysts: ["仓储客户扩点", "RaaS 单位经济性改善", "运维数据积累"],
        sourceIds: ["agility-robotics-official", "google-gemini-robotics"]
      },
      {
        companyName: "Apptronik",
        segment: "本体/人形机器人",
        valueNode: "通用人形机器人、制造场景、产业合作",
        kpis: ["合作客户", "原型到量产周期", "BOM 成本", "任务覆盖"],
        moat: "Apollo 人形机器人和产业合作定位，目标承接制造与物流重复任务。",
        risks: ["商业化节奏", "成本控制", "可靠性", "融资依赖"],
        catalysts: ["制造试点", "模型/本体协同", "供应链定点"],
        sourceIds: ["apptronik-official", "nvidia-gr00t-n1"]
      },
      {
        companyName: "Boston Dynamics",
        segment: "本体/人形机器人",
        valueNode: "动态控制、移动机器人、工业巡检/仓储",
        kpis: ["Spot/Stretch 部署", "续航", "安全事故率", "商业订单"],
        moat: "运动控制、本体工程和品牌技术壁垒，是具身模型落地的高可靠硬件承接层。",
        risks: ["商业化速度", "成本", "母公司战略", "场景扩张"],
        catalysts: ["工业巡检扩容", "Atlas 迭代", "AI 控制栈融合"],
        sourceIds: ["boston-dynamics-official", "google-gemini-robotics"]
      },
      {
        companyName: "Unitree",
        segment: "本体/人形机器人",
        valueNode: "低成本四足/人形机器人、开发者生态、中国供应链",
        kpis: ["出货量", "单机价格", "开发者数量", "海外销售"],
        moat: "低成本本体和中国供应链效率，有利于扩大数据采集、教育科研和轻工业部署。",
        risks: ["安全可靠性", "海外合规", "价格竞争", "商用场景不足"],
        catalysts: ["人形机器人放量", "开发者生态扩张", "轻工业试点"],
        sourceIds: ["unitree-official", "nvidia-gr00t-n1"]
      },
      {
        companyName: "UBTECH",
        segment: "本体/人形机器人",
        valueNode: "人形机器人、服务机器人、教育/工业场景",
        kpis: ["Walker 订单", "交付数量", "毛利率", "场景复购"],
        moat: "中国本地渠道、服务机器人经验和人形机器人产品化能力。",
        risks: ["盈利能力", "规模化", "产品可靠性", "竞争"],
        catalysts: ["工厂试点", "服务场景扩容", "国产机器人采购"],
        sourceIds: ["ubtech-official", "google-gemini-robotics"]
      },
      {
        companyName: "Harmonic Drive Systems",
        segment: "执行器/减速器",
        valueNode: "谐波减速器、机器人关节、精密传动",
        kpis: ["机器人订单", "产能利用率", "良率", "价格趋势"],
        moat: "谐波减速器精密制造和客户认证，是轻量化机器人关节的核心瓶颈之一。",
        risks: ["国产替代", "价格竞争", "机器人需求节奏", "产能周期"],
        catalysts: ["人形机器人 BOM 定点", "关节模组需求", "产能扩张"],
        sourceIds: ["harmonic-drive-official", "google-gemini-robotics"]
      },
      {
        companyName: "Nabtesco",
        segment: "执行器/减速器",
        valueNode: "RV 减速器、工业机器人传动、高负载关节",
        kpis: ["RV 减速器订单", "工业机器人景气", "毛利率", "份额"],
        moat: "RV 减速器和高负载精密传动能力，卡住工业机器人与高负载机器人关节。",
        risks: ["工业周期", "中国替代", "价格压力", "需求波动"],
        catalysts: ["工业机器人更新", "高负载本体需求", "制造自动化复苏"],
        sourceIds: ["nabtesco-official", "google-gemini-robotics"]
      },
      {
        companyName: "Sanhua Intelligent Controls",
        segment: "执行器/减速器",
        valueNode: "热管理阀件、机电控制、机器人执行部件",
        kpis: ["机器人客户", "热管理订单", "毛利率", "海外客户"],
        moat: "高可靠机电控制和热管理部件平台，同时暴露液冷和机器人执行器 BOM。",
        risks: ["客户认证", "汽车周期", "路线变化", "价格竞争"],
        catalysts: ["人形机器人部件定点", "液冷配套", "海外客户导入"],
        sourceIds: ["sanhua-official", "google-gemini-robotics"]
      },
      {
        companyName: "Inovance",
        segment: "执行器/减速器",
        valueNode: "伺服系统、PLC、运动控制、工业自动化",
        kpis: ["伺服份额", "工业自动化收入", "机器人客户", "毛利率"],
        moat: "运动控制、伺服驱动和工业客户闭环，是机器人关节和 AI 工厂的控制底座。",
        risks: ["工业周期", "价格竞争", "海外拓展", "机器人放量节奏"],
        catalysts: ["制造业自动化复苏", "机器人关节需求", "AI 工厂改造"],
        sourceIds: ["inovance-official", "google-gemini-robotics"]
      },
      {
        companyName: "Estun Automation",
        segment: "执行器/减速器",
        valueNode: "工业机器人、运动控制、伺服系统",
        kpis: ["机器人出货", "伺服收入", "毛利率", "国产替代份额"],
        moat: "工业机器人和运动控制产品组合，是国产制造业机器人化的直接受益者。",
        risks: ["盈利能力", "竞争", "工业周期", "下游需求"],
        catalysts: ["国产替代", "工厂自动化", "机器人订单改善"],
        sourceIds: ["estun-official", "google-gemini-robotics"]
      },
      {
        companyName: "Horizon Robotics",
        segment: "传感器/自动驾驶",
        valueNode: "智能驾驶芯片、车端 AI 计算、自动驾驶平台",
        kpis: ["量产车型", "芯片出货", "ASP", "客户集中度"],
        moat: "车端 AI 芯片和中国车企客户基础，自动驾驶与机器人共享低功耗感知/规划能力。",
        risks: ["汽车周期", "价格竞争", "客户集中", "监管"],
        catalysts: ["高阶智驾渗透", "端侧推理升级", "车企平台导入"],
        sourceIds: ["horizon-robotics-official", "google-gemini-robotics"]
      },
      {
        companyName: "Hesai",
        segment: "传感器/自动驾驶",
        valueNode: "车载/机器人 LiDAR、Robotaxi 感知硬件",
        kpis: ["LiDAR 出货", "车载客户", "毛利率", "ASP"],
        moat: "激光雷达规模制造和客户认证，是自动驾驶与机器人感知的核心硬件入口。",
        risks: ["价格竞争", "技术路线", "客户集中", "地缘监管"],
        catalysts: ["高阶 ADAS 放量", "Robotaxi 扩城", "机器人传感需求"],
        sourceIds: ["hesai-official", "google-gemini-robotics"]
      },
      {
        companyName: "RoboSense",
        segment: "传感器/自动驾驶",
        valueNode: "LiDAR、感知方案、ADAS/机器人客户",
        kpis: ["车载定点", "LiDAR 出货", "毛利率", "新产品良率"],
        moat: "激光雷达和感知方案能力，受益端侧感知硬件规模化。",
        risks: ["毛利率", "客户认证", "价格竞争", "替代路线"],
        catalysts: ["ADAS 定点转量产", "机器人感知", "新平台认证"],
        sourceIds: ["robosense-official", "google-gemini-robotics"]
      },
      {
        companyName: "Pony AI",
        segment: "传感器/自动驾驶",
        valueNode: "Robotaxi 技术栈、自动驾驶运营、真实世界数据",
        kpis: ["运营城市", "车队规模", "安全里程", "单位经济性"],
        moat: "自动驾驶运营和中美场景数据，Robotaxi 是具身智能最清晰的商业化路径之一。",
        risks: ["监管", "安全事故", "车队成本", "融资/现金流"],
        catalysts: ["Robotaxi 商业化", "城市扩张", "自动驾驶政策"],
        sourceIds: ["pony-ai-official", "google-gemini-robotics"]
      },
      {
        companyName: "SenseTime",
        segment: "传感器/自动驾驶",
        valueNode: "视觉 AI、多模态模型、城市/工业场景",
        kpis: ["日日新调用", "行业项目", "视觉模型能力", "现金流"],
        moat: "计算机视觉、行业客户和大装置算力，可承接城市、工业和机器人视觉任务。",
        risks: ["项目制", "盈利能力", "模型竞争", "监管"],
        catalysts: ["多模态视觉", "工业检测", "城市/机器人项目"],
        sourceIds: ["sensetime-official", "google-gemini-robotics"]
      },
      {
        companyName: "ABB",
        segment: "工业自动化",
        valueNode: "电气化、机器人、运动控制、工厂自动化",
        kpis: ["Robotics 订单", "Motion 收入", "电气化订单", "服务收入"],
        moat: "全球工厂客户、电气化和自动化组合，连接 grid-to-factory-to-robot。",
        risks: ["工业周期", "项目执行", "竞争", "汇率"],
        catalysts: ["AI 工厂改造", "机器人更新", "电气化投资"],
        sourceIds: ["iea-energy-ai", "google-gemini-robotics"]
      },
      {
        companyName: "Yaskawa",
        segment: "工业自动化",
        valueNode: "工业机器人、伺服驱动、运动控制",
        kpis: ["机器人订单", "伺服收入", "中国需求", "毛利率"],
        moat: "Motoman 工业机器人和伺服运动控制，是工厂机器人化的核心供应商。",
        risks: ["工业周期", "中国竞争", "价格压力", "软件生态"],
        catalysts: ["制造自动化复苏", "机器人换代", "AI 视觉/规划融合"],
        sourceIds: ["yaskawa-official", "google-gemini-robotics"]
      },
      {
        companyName: "Fanuc",
        segment: "工业自动化",
        valueNode: "CNC、工业机器人、伺服系统",
        kpis: ["机器人订单", "CNC 需求", "服务收入", "毛利率"],
        moat: "CNC、伺服和工业机器人客户基础，AI 柔性制造仍需高可靠硬件底座。",
        risks: ["汽车/电子周期", "中国竞争", "软件转型", "需求波动"],
        catalysts: ["柔性制造", "工业机器人更新", "CNC 周期改善"],
        sourceIds: ["fanuc-official", "google-gemini-robotics"]
      },
      {
        companyName: "Keyence",
        segment: "工业自动化",
        valueNode: "机器视觉、传感器、测量系统",
        kpis: ["传感器收入", "机器视觉需求", "毛利率", "直销效率"],
        moat: "机器视觉和高毛利直销能力，机器人与工业 AI 的眼睛离不开传感和检测。",
        risks: ["估值", "制造周期", "竞争", "客户预算"],
        catalysts: ["视觉检测自动化", "AI 工厂", "机器人感知"],
        sourceIds: ["keyence-official", "google-gemini-robotics"]
      },
      {
        companyName: "Omron",
        segment: "工业自动化",
        valueNode: "工厂自动化、传感器、控制器、机器人",
        kpis: ["FA 收入", "传感器订单", "控制器份额", "利润率"],
        moat: "传感器、PLC、控制器和机器人组合，适合把 AI 工厂闭环接入既有产线。",
        risks: ["工业周期", "竞争", "利润率", "地区需求"],
        catalysts: ["产线智能化", "传感控制升级", "机器人集成"],
        sourceIds: ["omron-official", "google-gemini-robotics"]
      },
      {
        companyName: "Foxconn Industrial Internet",
        segment: "工业自动化",
        valueNode: "工业互联网、AI 服务器制造、智能工厂",
        kpis: ["AI server 收入", "工业互联网收入", "毛利率", "客户集中度"],
        moat: "服务器制造、工业互联网和富士康智能制造场景，是 AI 服务器和机器人量产的交叉节点。",
        risks: ["客户集中", "制造毛利率", "周期", "地缘"],
        catalysts: ["AI 服务器订单", "智能工厂改造", "机器人制造"],
        sourceIds: ["fii-official", "nvidia-gb200-nvl72"]
      },
      {
        companyName: "Arm",
        segment: "端侧/边缘芯片",
        valueNode: "低功耗 CPU IP、端侧 AI、机器人控制面",
        kpis: ["授权收入", "Neoverse 渗透", "端侧 AI 设计", "版税率"],
        moat: "低功耗 IP 和移动/边缘生态，机器人需要能效型控制与推理架构。",
        risks: ["RISC-V 替代", "客户自研", "授权模式压力", "估值"],
        catalysts: ["端侧 AI", "云 Arm CPU", "机器人控制芯片"],
        sourceIds: ["arm-ai-official", "nvidia-gr00t-n1"]
      },
      {
        companyName: "Qualcomm",
        segment: "端侧/边缘芯片",
        valueNode: "Snapdragon/NPU、汽车与机器人边缘推理",
        kpis: ["AI PC/手机出货", "汽车 pipeline", "NPU 性能", "边缘客户"],
        moat: "低功耗异构计算、连接能力和移动生态，可从手机扩展到 PC、汽车和机器人。",
        risks: ["手机周期", "苹果/客户自研", "汽车落地节奏", "竞争"],
        catalysts: ["AI PC/手机升级", "汽车 AI", "机器人边缘推理"],
        sourceIds: ["qualcomm-ai-official", "google-gemini-robotics"]
      },
      {
        companyName: "MediaTek",
        segment: "端侧/边缘芯片",
        valueNode: "消费/边缘 SoC、NPU、连接芯片",
        kpis: ["端侧 AI SoC", "手机份额", "边缘客户", "毛利率"],
        moat: "消费 SoC 和连接能力，适合承接低成本端侧 AI 与轻量机器人控制场景。",
        risks: ["消费电子周期", "价格竞争", "高端份额", "客户集中"],
        catalysts: ["端侧 AI 换机", "边缘设备升级", "轻量机器人平台"],
        sourceIds: ["mediatek-official", "google-gemini-robotics"]
      },
      {
        companyName: "GigaDevice",
        segment: "端侧/边缘芯片",
        valueNode: "Nor Flash、MCU、嵌入式控制",
        kpis: ["MCU 收入", "Nor Flash 价格", "工业客户", "毛利率"],
        moat: "存储和 MCU 产品组合，机器人与工业控制需要低功耗控制、存储和外围芯片。",
        risks: ["周期", "价格竞争", "库存", "高端突破"],
        catalysts: ["工业控制复苏", "端侧设备升级", "机器人外围需求"],
        sourceIds: ["gigadevice-official", "google-gemini-robotics"]
      },
      {
        companyName: "GlobalFoundries",
        segment: "端侧/边缘芯片",
        valueNode: "成熟制程、RF/模拟、边缘 AI 芯片代工",
        kpis: ["产能利用率", "长期协议", "汽车/工业收入", "毛利率"],
        moat: "成熟制程、RF/模拟和嵌入式能力，服务机器人传感、连接和控制芯片。",
        risks: ["成熟制程周期", "客户库存", "价格压力", "资本开支"],
        catalysts: ["汽车/工业复苏", "边缘芯片需求", "长期供货协议"],
        sourceIds: ["globalfoundries-official", "google-gemini-robotics"]
      },
      {
        companyName: "TE Connectivity",
        segment: "端侧/边缘芯片",
        valueNode: "工业连接器、传感器、机器人/汽车电气连接",
        kpis: ["工业订单", "汽车连接器", "毛利率", "客户认证"],
        moat: "高可靠连接器和传感部件，机器人从样机到量产需要稳定的电气连接和工业认证。",
        risks: ["工业周期", "汽车周期", "价格竞争", "客户预算"],
        catalysts: ["机器人线束/连接需求", "汽车电子升级", "工业自动化"],
        sourceIds: ["te-connectivity-official", "google-gemini-robotics"]
      }
    ]
  }
];

window.peerComparisonTables = peerComparisonTables;
