const companyDeepDives = {
  NVIDIA: {
    rank: "核心锚点",
    capexNode: "GPU/网络/整柜/推理 runtime",
    investmentLens: "从单卡供应商升级为 AI Factory 的系统总包，价值捕获横跨芯片、网络、机柜、软件栈和推理调度。",
    valueDrivers: ["Rubin/Vera Rubin 机柜级升级", "CUDA 与推理 runtime 锁定", "NVLink/NVSwitch 集体通信壁垒"],
    watchKpis: ["GB/Rubin 机柜出货节奏", "数据中心毛利率", "NVLink attach rate", "HBM/CoWoS 供给"],
    frictionPoints: ["云厂商 ASIC 替代", "出口管制", "客户 CAPEX 集中度", "毛利率正常化"],
    catalysts: ["Rubin 平台放量", "Dynamo 推理栈商业化", "主权 AI 与企业私有集群扩张"],
    peers: ["AMD", "Broadcom", "Huawei", "Cambricon"]
  },
  TSMC: {
    rank: "供给阀门",
    capexNode: "先进制程 + CoWoS/SoIC/3DFabric",
    investmentLens: "AI 芯片真实瓶颈不只是晶圆，而是先进封装、良率、客户排产和 HBM 近封装协同。",
    valueDrivers: ["N2/A16 先进节点迁移", "CoWoS-L/R 扩产", "HPC 客户长期排产"],
    watchKpis: ["HPC 收入占比", "先进封装产能", "资本开支强度", "N2 良率爬坡"],
    frictionPoints: ["地缘风险", "客户集中", "设备交期", "封装扩产节奏"],
    catalysts: ["CoWoS 供需缓解", "N2/HPC 新平台导入", "SoIC/3D 堆叠渗透"],
    peers: ["Samsung Electronics", "Intel", "SMIC", "GlobalFoundries"]
  },
  "SK hynix": {
    rank: "HBM 龙头",
    capexNode: "HBM3E/HBM4 + TSV 堆叠",
    investmentLens: "显存带宽是训练和推理共同瓶颈，客户认证与良率决定 HBM 超额利润持续时间。",
    valueDrivers: ["HBM4 代际升级", "头部 GPU 平台认证", "12Hi/16Hi 堆叠价值量提升"],
    watchKpis: ["HBM bit 产能", "HBM ASP", "客户认证份额", "DRAM 周期"],
    frictionPoints: ["三星/美光追赶", "良率波动", "先进封装协同", "价格回落"],
    catalysts: ["HBM4 量产节点", "Rubin 平台拉货", "客户第二来源策略变化"],
    peers: ["Micron", "Samsung Electronics"]
  },
  Broadcom: {
    rank: "ASIC/网络双卡位",
    capexNode: "Custom ASIC + Ethernet AI Fabric",
    investmentLens: "当云厂商追求推理 TCO，定制 ASIC 与以太网交换芯片会分享原本属于通用 GPU 的预算。",
    valueDrivers: ["超大客户 ASIC co-design", "Tomahawk/Jericho 交换芯片", "高速 SerDes 与互联 IP"],
    watchKpis: ["AI ASIC 项目数量", "网络芯片订单", "前五大客户集中度", "VMware 现金流"],
    frictionPoints: ["客户集中", "NVIDIA 平台封闭性", "ASIC tape-out 风险", "以太网训练稳定性"],
    catalysts: ["新云厂商 ASIC ramp", "1.6T 网络升级", "推理成本压力上升"],
    peers: ["NVIDIA", "Marvell", "Arista Networks"]
  },
  ASML: {
    rank: "设备垄断",
    capexNode: "EUV/High-NA EUV 图形化",
    investmentLens: "AI 芯片密度提升最终落在光刻能力与工艺窗口，EUV 是先进逻辑和先进 DRAM 的硬约束。",
    valueDrivers: ["High-NA EUV 导入", "先进逻辑节点推进", "先进 DRAM 图形化复杂度提升"],
    watchKpis: ["EUV/High-NA 订单", "backlog", "中国销售占比", "客户 capex 指引"],
    frictionPoints: ["出口管制", "客户推迟扩产", "High-NA 采用节奏", "供应链交付"],
    catalysts: ["N2/A16 扩产", "DRAM EUV 层数增加", "High-NA 客户验证"],
    peers: ["Tokyo Electron", "Applied Materials", "Lam Research", "KLA"]
  },
  Microsoft: {
    rank: "企业 AI 分发入口",
    capexNode: "Azure + Copilot/Agent + 电力采购",
    investmentLens: "微软的价值在于把模型能力塞进企业身份、办公、代码和云预算，AI 毛利取决于推理成本下降速度。",
    valueDrivers: ["Azure AI 消耗", "Microsoft 365 Copilot 渗透", "GitHub Copilot/Agent 工作流", "OpenAI 生态入口"],
    watchKpis: ["Azure 增速", "Copilot ARPU/席位", "AI capex 回报", "电力 PPA 供给"],
    frictionPoints: ["AI 毛利压力", "客户 ROI 审核", "监管", "OpenAI 关系变化"],
    catalysts: ["Agent 原生办公流", "企业私有数据接入", "AI 基础设施扩建"],
    peers: ["Alphabet / Google", "Amazon", "Oracle", "Salesforce"]
  },
  Amazon: {
    rank: "云与电力买方",
    capexNode: "AWS + Trainium/Inferentia + 数据中心电力",
    investmentLens: "AWS 同时是 AI 算力卖方、ASIC 自研方和电力大买方，核心是把 CAPEX 转成长期云消耗。",
    valueDrivers: ["AWS AI 服务增长", "Trainium/Inferentia TCO", "Bedrock 企业采用", "核能/可再生能源 PPA"],
    watchKpis: ["AWS 增速", "AI capex", "自研芯片采用", "数据中心交付周期"],
    frictionPoints: ["云竞争", "芯片生态", "电力并网", "资本开支回报"],
    catalysts: ["企业生成式 AI 迁移", "Anthropic/Bedrock 生态", "SMR/核能项目推进"],
    peers: ["Microsoft", "Alphabet / Google", "Oracle", "Alibaba Group"]
  },
  "Alphabet / Google": {
    rank: "全栈模型平台",
    capexNode: "TPU + Gemini + 搜索/Workspace 分发",
    investmentLens: "Google 的护城河是 TPU、模型研究、分发入口和数据中心工程，但最大变量是 AI 搜索如何重构广告经济。",
    valueDrivers: ["TPU 降低推理 TCO", "Gemini 多模态能力", "Workspace/Android/搜索入口", "先进核能采购"],
    watchKpis: ["搜索广告韧性", "Cloud 增速", "TPU 使用率", "AI Overviews 商业化"],
    frictionPoints: ["搜索 cannibalization", "监管", "模型竞争", "CAPEX 回报周期"],
    catalysts: ["Gemini 代际升级", "Agentspace 企业导入", "TPU 集群扩容"],
    peers: ["Microsoft", "Amazon", "Meta Platforms", "OpenAI"]
  },
  "Meta Platforms": {
    rank: "开源模型与流量池",
    capexNode: "Llama + 推荐系统 + 大规模训练集群",
    investmentLens: "Meta 用开源模型削弱闭源模型定价权，用社交流量和广告系统把 AI 转化为推荐、内容生产和商业效率。",
    valueDrivers: ["Llama 生态", "广告推荐效率", "AI 内容工具", "大规模 GPU 集群经验"],
    watchKpis: ["Family of Apps 广告增速", "Reality Labs 亏损", "CAPEX 指引", "Llama 开发生态"],
    frictionPoints: ["CAPEX 强度", "开源变现", "监管", "内容安全"],
    catalysts: ["新一代 Llama", "AI glasses/assistant", "广告自动化工具升级"],
    peers: ["Alphabet / Google", "ByteDance", "OpenAI", "xAI"]
  },
  OpenAI: {
    rank: "前沿模型入口",
    capexNode: "Reasoning Model + ChatGPT + Stargate",
    investmentLens: "OpenAI 的核心是把前沿模型能力、消费分发和企业 API 变成平台，但单位推理成本是商业化天花板。",
    valueDrivers: ["reasoning model 能力", "ChatGPT 分发", "Agent/API 生态", "Stargate 基础设施"],
    watchKpis: ["付费用户/企业客户", "API 调用增长", "推理成本曲线", "模型领先度"],
    frictionPoints: ["算力成本", "治理结构", "开源竞争", "平台依赖"],
    catalysts: ["新 reasoning 代际", "Agent 产品化", "企业 workflow 深度集成"],
    peers: ["Anthropic", "Google DeepMind", "DeepSeek", "xAI"]
  },
  Anthropic: {
    rank: "企业安全模型",
    capexNode: "Claude + MCP + 长上下文 Agent",
    investmentLens: "Anthropic 的差异化在企业安全、长上下文和工具连接协议，能否成为企业 Agent 控制面是关键。",
    valueDrivers: ["Claude 企业采用", "MCP 生态扩散", "长上下文/代码能力", "安全定位"],
    watchKpis: ["企业合同", "云分发伙伴", "MCP 集成数", "推理毛利"],
    frictionPoints: ["算力依赖", "分发弱于 hyperscaler", "模型同质化", "价格竞争"],
    catalysts: ["Claude 代际升级", "MCP 标准化", "生产级 Agent 案例"],
    peers: ["OpenAI", "Google DeepMind", "Cohere", "Mistral AI"]
  },
  Oracle: {
    rank: "AI 云容量交易",
    capexNode: "OCI GPU 集群 + 数据库客户",
    investmentLens: "Oracle 的 AI 逻辑更像云容量和长期合同交易，核心在交付能力、融资能力和 OCI 客户消耗兑现。",
    valueDrivers: ["OCI GPU 容量", "AI 云长期合同", "数据库客户迁移", "多云互联"],
    watchKpis: ["RPO/剩余履约义务", "OCI 增速", "CAPEX/现金流", "GPU 集群交付"],
    frictionPoints: ["资本开支压力", "客户集中", "云生态弱于三大云", "交付延期"],
    catalysts: ["大客户 AI 集群上线", "数据库上云", "多云合作扩张"],
    peers: ["Microsoft", "Amazon", "Google", "CoreWeave"]
  },
  Supermicro: {
    rank: "AI 服务器弹性",
    capexNode: "GPU 服务器/整柜集成",
    investmentLens: "Supermicro 是 AI 服务器放量的高 beta 环节，订单弹性大，但毛利、治理和客户集中风险同样大。",
    valueDrivers: ["GPU 服务器需求", "液冷整柜交付", "客户快速定制", "供应链周转"],
    watchKpis: ["收入增速", "毛利率", "库存/应收", "液冷订单"],
    frictionPoints: ["治理/审计风险", "低毛利竞争", "客户集中", "供应链波动"],
    catalysts: ["Blackwell/Rubin 服务器换代", "液冷 rack-scale 需求", "新客户扩张"],
    peers: ["Dell", "HPE", "Inspur Information", "Foxconn Industrial Internet"]
  },
  Vertiv: {
    rank: "数据中心物理瓶颈",
    capexNode: "UPS/CDU/液冷/配电",
    investmentLens: "AI 机柜功率密度上升把电源和热管理从配套件变成核心瓶颈，Vertiv 捕获 grid-to-rack 价值。",
    valueDrivers: ["100kW+ 机柜", "冷板液冷", "UPS/配电升级", "全球数据中心交付"],
    watchKpis: ["订单增长", "backlog", "液冷收入", "项目毛利率"],
    frictionPoints: ["交付质量", "价格竞争", "AI capex 降温", "供应链交期"],
    catalysts: ["GB200/Rubin 液冷部署", "存量机房改造", "高密数据中心新建"],
    peers: ["Schneider Electric", "Eaton", "nVent", "Envicool"]
  },
  "Schneider Electric": {
    rank: "电气架构平台",
    capexNode: "中低压配电 + 自动化 + 数据中心参考设计",
    investmentLens: "AI 数据中心需要标准化电气架构和运维系统，施耐德的位置从设备供应商上移到架构和服务。",
    valueDrivers: ["grid-to-chip 电气架构", "EcoStruxure 运维", "液冷参考设计", "全球服务网络"],
    watchKpis: ["数据中心订单", "电气业务增长", "服务收入", "项目交付周期"],
    frictionPoints: ["项目延期", "区域电网审批", "竞争", "设备供给瓶颈"],
    catalysts: ["AI 数据中心扩建", "存量机房升级", "能源管理软件渗透"],
    peers: ["Eaton", "Vertiv", "ABB", "Siemens"]
  },
  "GE Vernova": {
    rank: "电网升级受益者",
    capexNode: "电网设备/燃机/电力系统",
    investmentLens: "AI 负载不是只买数据中心设备，还会迫使电网、变压器、燃气调峰和输配电投资加速。",
    valueDrivers: ["电网现代化", "燃气发电调峰", "电力设备订单", "可再生能源并网"],
    watchKpis: ["Grid 订单", "Gas Power backlog", "服务利润率", "公用事业 capex"],
    frictionPoints: ["项目周期", "供应链交付", "监管", "能源政策波动"],
    catalysts: ["数据中心负载接入", "输配电升级", "燃机订单恢复"],
    peers: ["Siemens Energy", "Eaton", "Schneider Electric", "ABB"]
  },
  "Constellation Energy": {
    rank: "AI 基荷电力",
    capexNode: "核电 PPA/24-7 清洁电力",
    investmentLens: "核电从传统公用事业资产重估为 AI 数据中心的稀缺基荷资源，关键在长约电价和监管执行。",
    valueDrivers: ["长期 PPA", "核电重启/延寿", "清洁基荷稀缺", "数据中心电力需求"],
    watchKpis: ["PPA 电价", "发电可用率", "监管审批", "核电维护成本"],
    frictionPoints: ["政治/监管", "重启工程风险", "电价波动", "核安全舆论"],
    catalysts: ["Crane Clean Energy Center 进展", "更多 hyperscaler PPA", "容量市场价格上行"],
    peers: ["Vistra", "NextEra Energy", "GE Vernova"]
  },
  "Alibaba Group": {
    rank: "中国云+模型入口",
    capexNode: "阿里云 + Qwen + 钉钉/企业客户",
    investmentLens: "阿里是中国少数同时具备模型、云、开源生态和企业分发入口的平台，核心看 Qwen 能否转成云消耗和办公工作流。",
    valueDrivers: ["Qwen 开源心智", "阿里云 AI 消耗", "钉钉企业入口", "电商/客服场景"],
    watchKpis: ["云收入增速", "Qwen 开发者采用", "AI API 调用", "企业客户续费"],
    frictionPoints: ["云竞争", "模型价格战", "组织协同", "电商主业周期"],
    catalysts: ["Qwen 代际升级", "企业 Agent 产品化", "国产算力适配"],
    peers: ["Tencent", "Baidu", "ByteDance", "Huawei"]
  },
  Tencent: {
    rank: "超级入口+企业协同",
    capexNode: "微信/企微 + 混元 + 腾讯云",
    investmentLens: "腾讯的 AI 价值在于超级应用入口和企业协同场景，模型能力需要通过广告、游戏、内容和企微工作流变现。",
    valueDrivers: ["微信生态分发", "混元模型", "企微/腾讯云", "广告与游戏生产流"],
    watchKpis: ["广告增长", "云收入质量", "AI 产品使用率", "游戏内容生产效率"],
    frictionPoints: ["监管", "模型差异化", "云份额", "组织节奏"],
    catalysts: ["元宝/混元升级", "企微 Agent 工作流", "广告 AI 工具放量"],
    peers: ["Alibaba Group", "Baidu", "ByteDance", "Microsoft"]
  },
  Baidu: {
    rank: "搜索+自动驾驶可选权",
    capexNode: "ERNIE/百度云 + 搜索 + Apollo",
    investmentLens: "百度的主线是搜索 AI 重构和企业云，自动驾驶提供真实世界数据与具身智能可选权。",
    valueDrivers: ["文心模型", "搜索体验重构", "千帆企业平台", "Apollo Go 商业化"],
    watchKpis: ["搜索广告恢复", "AI 云收入", "Robotaxi 运营指标", "模型份额"],
    frictionPoints: ["搜索广告 cannibalization", "云竞争", "Robotaxi 监管", "模型口碑"],
    catalysts: ["ERNIE 代际升级", "AI 搜索商业化", "Robotaxi 城市扩展"],
    peers: ["Alibaba Group", "Tencent", "Pony AI", "Google"]
  },
  ByteDance: {
    rank: "消费 AI 流量池",
    capexNode: "豆包/Coze + 抖音/TikTok + 火山引擎",
    investmentLens: "字节的优势是产品迭代、推荐系统和高频消费入口，AI 应用可在内容生产、搜索、剪辑和 Agent 平台中快速试错。",
    valueDrivers: ["豆包用户入口", "Coze Agent 平台", "CapCut/剪映 AI", "火山引擎企业服务"],
    watchKpis: ["豆包活跃度", "AI 内容工具留存", "火山引擎客户", "推理成本"],
    frictionPoints: ["海外监管", "模型成本", "云商业化", "内容合规"],
    catalysts: ["多模态产品升级", "Coze 工作流扩张", "消费端 AI 搜索"],
    peers: ["Tencent", "Alibaba Group", "Meta Platforms", "OpenAI"]
  },
  Huawei: {
    rank: "中国全栈国产化锚点",
    capexNode: "昇腾/鲲鹏 + MindSpore + 华为云/政企",
    investmentLens: "华为不是单一芯片标的，而是中国 AI 基础设施国产替代的全栈生态锚点，价值在生态迁移和政企绑定。",
    valueDrivers: ["昇腾算力集群", "国产软件栈", "政企渠道", "盘古/行业模型"],
    watchKpis: ["昇腾交付", "生态适配数", "政企项目", "集群稳定性"],
    frictionPoints: ["先进制程限制", "软件生态迁移", "供应链约束", "性能/功耗差距"],
    catalysts: ["国产算力招标", "行业模型落地", "大规模集群案例"],
    peers: ["NVIDIA", "Cambricon", "Hygon Information", "Sugon"]
  },
  DeepSeek: {
    rank: "高效模型变量",
    capexNode: "低成本训练/推理 + 开源 reasoning",
    investmentLens: "DeepSeek 的意义在于证明模型效率和后训练路线可以改变成本曲线，对全球闭源模型定价权形成压力。",
    valueDrivers: ["R1 reasoning 影响力", "蒸馏/开源生态", "低成本训练叙事", "中文/代码能力"],
    watchKpis: ["模型榜单表现", "开发者采用", "推理成本", "商业 API 转化"],
    frictionPoints: ["商业化", "算力供给", "开源竞争", "监管"],
    catalysts: ["新模型发布", "企业私有化部署", "生态模型蒸馏"],
    peers: ["OpenAI", "Anthropic", "Alibaba Group", "Zhipu AI"]
  },
  Cambricon: {
    rank: "国产 AI 芯片弹性",
    capexNode: "AI 加速器 + 国产软件栈",
    investmentLens: "寒武纪的价值在国产算力替代弹性，核心不是单芯片参数，而是客户验证、软件栈和规模交付。",
    valueDrivers: ["国产 AI 芯片需求", "政企/行业客户", "软件生态适配", "边缘与推理场景"],
    watchKpis: ["订单/收入增速", "毛利率", "客户集中度", "生态兼容性"],
    frictionPoints: ["先进制程", "软件生态", "良率", "与华为/海外 GPU 竞争"],
    catalysts: ["国产算力采购", "推理场景落地", "新一代产品验证"],
    peers: ["Huawei", "Hygon Information", "NVIDIA", "AMD"]
  },
  "Inspur Information": {
    rank: "AI 服务器集成",
    capexNode: "AI 服务器/整柜/液冷集成",
    investmentLens: "浪潮信息捕获中国 AI 基础设施扩容的集成价值，关键看 GPU/国产算力平台适配和毛利率。",
    valueDrivers: ["AI 服务器需求", "整柜集成", "政企/互联网客户", "液冷改造"],
    watchKpis: ["AI 服务器收入", "毛利率", "库存周转", "客户集中度"],
    frictionPoints: ["供应链限制", "低毛利竞争", "平台切换", "客户 capex 波动"],
    catalysts: ["国产算力集群项目", "液冷机柜部署", "互联网客户扩容"],
    peers: ["Supermicro", "Dell", "Sugon", "Foxconn Industrial Internet"]
  },
  "GDS Holdings": {
    rank: "中国 IDC 容量",
    capexNode: "AI-ready 数据中心 + 电力接入",
    investmentLens: "万国数据的价值在机房、电力、客户和交付经验，AI 需求能否改善利用率与定价是核心。",
    valueDrivers: ["AI-ready 容量", "一线/周边区域资源", "云和互联网客户", "液冷改造"],
    watchKpis: ["利用率", "新增订单", "电力容量", "净负债"],
    frictionPoints: ["负债", "价格竞争", "客户集中", "电网接入"],
    catalysts: ["AI 客户签约", "海外/国内园区交付", "存量机房改造"],
    peers: ["VNET", "Equinix", "Digital Realty"]
  },
  CATL: {
    rank: "储能与机器人电池",
    capexNode: "储能/BMS/备用电源",
    investmentLens: "宁德时代不只是动力电池，AI 数据中心储能、UPS 侧电池和机器人电池都提供新的负载曲线。",
    valueDrivers: ["储能系统", "数据中心备用电源", "BMS 安全", "机器人高能量密度电池"],
    watchKpis: ["储能收入", "电池价格", "海外订单", "安全事故率"],
    frictionPoints: ["价格竞争", "原材料", "海外政策", "储能安全"],
    catalysts: ["数据中心储能项目", "海外储能增长", "机器人电池需求"],
    peers: ["Sungrow", "Tesla", "BYD"]
  },
  "Horizon Robotics": {
    rank: "端侧智能驾驶芯片",
    capexNode: "车端 AI SoC + 自动驾驶计算平台",
    investmentLens: "地平线是端侧推理和自动驾驶的中国芯片变量，核心看车企定点、量产规模和软件栈黏性。",
    valueDrivers: ["Journey 芯片", "车企客户", "端侧推理", "自动驾驶软件平台"],
    watchKpis: ["量产车型数", "ASP", "客户集中度", "软件 attach"],
    frictionPoints: ["汽车周期", "价格竞争", "自动驾驶监管", "芯片代际迭代"],
    catalysts: ["新车型量产", "高阶智驾渗透", "机器人/端侧场景扩展"],
    peers: ["Qualcomm", "NVIDIA", "Mobileye", "Huawei"]
  },
  "Pony AI": {
    rank: "Robotaxi 商业化",
    capexNode: "自动驾驶模型 + 车队运营",
    investmentLens: "小马智行的研究核心是安全、监管、车队成本和单位经济性，属于具身智能里最清晰的商业场景之一。",
    valueDrivers: ["Robotaxi 运营经验", "中美场景数据", "自动驾驶技术栈", "商业化牌照"],
    watchKpis: ["运营城市", "每车收入", "安全接管率", "车队成本"],
    frictionPoints: ["监管", "安全事故", "商业化节奏", "融资/现金流"],
    catalysts: ["新城市开放", "无人化运营扩大", "车企合作"],
    peers: ["Baidu", "Waymo", "Tesla", "WeRide"]
  },
  "Kingsoft Office": {
    rank: "中国办公 AI 入口",
    capexNode: "WPS AI + 文档/表格/协作数据",
    investmentLens: "金山办公卡在企业日常文档入口，AI 价值看付费率、文档 Agent 能力和国产办公替代节奏。",
    valueDrivers: ["WPS AI 付费", "企业文档入口", "国产办公替代", "协作数据"],
    watchKpis: ["订阅收入", "AI 功能付费率", "企业客户数", "ARPU"],
    frictionPoints: ["微软/钉钉/飞书竞争", "AI 功能同质化", "企业预算", "模型成本"],
    catalysts: ["文档 Agent 升级", "政企国产化采购", "AI 会员渗透"],
    peers: ["Microsoft", "Alibaba Group", "Tencent", "Notion"]
  },
  Micron: {
    rank: "HBM 第二来源",
    capexNode: "HBM4/GDDR/DDR5 显存带宽",
    investmentLens: "美光的 AI 弹性来自客户对 HBM 第二/第三来源的需求，研究重点是 HBM 份额爬坡和内存周期同步性。",
    valueDrivers: ["HBM4 客户认证", "北美供应链位置", "推理显存需求", "DRAM 周期回升"],
    watchKpis: ["HBM 收入占比", "毛利率", "库存天数", "客户认证进展"],
    frictionPoints: ["SK hynix 领先", "良率爬坡", "内存价格周期", "先进封装配套"],
    catalysts: ["HBM4 放量", "Rubin/Vera Rubin 平台拉货", "云厂商分散供应商"],
    peers: ["SK hynix", "Samsung Electronics"]
  },
  "Samsung Electronics": {
    rank: "HBM 追赶者",
    capexNode: "HBM4 + Foundry + 先进封装",
    investmentLens: "三星的关键不是有没有 HBM 产品，而是能否通过头部客户认证，并把 Memory、Foundry、封装重新打成协同优势。",
    valueDrivers: ["HBM4 认证", "Foundry+Memory 协同", "逻辑 die/封装整合", "资本开支能力"],
    watchKpis: ["HBM 客户份额", "Foundry 良率", "DRAM ASP", "先进封装订单"],
    frictionPoints: ["认证滞后", "先进制程良率", "组织执行", "价格竞争"],
    catalysts: ["头部客户认证突破", "HBM4 量产", "Foundry HPC 客户改善"],
    peers: ["SK hynix", "Micron", "TSMC"]
  },
  "Applied Materials": {
    rank: "材料工程平台",
    capexNode: "沉积/刻蚀/CMP/HBM 工艺步骤",
    investmentLens: "AI 芯片复杂度提升会增加工艺步骤，应用材料受益于 GAA、背面供电、HBM 和先进封装的材料工程膨胀。",
    valueDrivers: ["HBM 工艺设备", "GAA/背面供电", "先进封装步骤增加", "服务收入"],
    watchKpis: ["半导体系统订单", "服务收入", "中国收入占比", "客户 capex 指引"],
    frictionPoints: ["出口限制", "设备周期", "客户扩产延后", "竞争性工艺替代"],
    catalysts: ["先进节点扩产", "HBM/DRAM capex", "先进封装设备需求"],
    peers: ["Lam Research", "Tokyo Electron", "KLA", "ASML"]
  },
  "Arista Networks": {
    rank: "以太网 AI Fabric",
    capexNode: "AI Spine/Leaf 交换 + EOS 网络软件",
    investmentLens: "AI 集群并非只有 InfiniBand，Arista 押注 hyperscaler 以太网后端网络，核心是低延迟、稳定性和客户集中风险。",
    valueDrivers: ["Ethernet AI Fabric", "云客户网络升级", "EOS 自动化", "前端/后端网络双需求"],
    watchKpis: ["大型云客户收入", "800G/1.6T 迁移", "毛利率", "AI 网络订单"],
    frictionPoints: ["NVIDIA 网络平台", "白盒交换", "客户集中", "AI 训练网络验证"],
    catalysts: ["以太网后端集群规模化", "1.6T 交换升级", "云 capex 上行"],
    peers: ["Broadcom", "NVIDIA", "Cisco", "Marvell"]
  },
  Eaton: {
    rank: "高密配电设备",
    capexNode: "开关柜/UPS/母线/Grid-to-Chip",
    investmentLens: "Eaton 捕获的是 AI 数据中心从电网到机柜的电气设备预算，核心是交期、订单能见度和高密功率改造。",
    valueDrivers: ["开关柜供需紧张", "UPS/母线升级", "数据中心电力接入", "北美电网投资"],
    watchKpis: ["Electrical Americas 订单", "backlog", "交付周期", "数据中心客户占比"],
    frictionPoints: ["供应瓶颈", "项目延期", "订单正常化", "竞争加剧"],
    catalysts: ["AI 园区建设", "高密机柜配电升级", "公用事业 capex"],
    peers: ["Schneider Electric", "Vertiv", "ABB", "Siemens Energy"]
  },
  Databricks: {
    rank: "企业数据治理底座",
    capexNode: "Lakehouse + Unity Catalog + Mosaic AI",
    investmentLens: "企业 AI 的生产瓶颈在数据权限、治理、评测和上线，Databricks 靠近客户数据资产和模型应用落地预算。",
    valueDrivers: ["Unity Catalog 治理", "Mosaic AI/Agent Bricks", "Lakehouse 数据驻留", "企业 AI 平台化"],
    watchKpis: ["ARR", "大客户净留存", "AI 产品 attach", "数据治理使用率"],
    frictionPoints: ["Snowflake 竞争", "云厂商捆绑", "开源替代", "企业 ROI 周期"],
    catalysts: ["Agent Bricks 落地", "数据治理预算提升", "企业私有模型部署"],
    peers: ["Snowflake", "Microsoft", "Palantir", "MongoDB"]
  },
  ServiceNow: {
    rank: "企业工作流控制面",
    capexNode: "ITSM/ITOM + AI Agents",
    investmentLens: "ServiceNow 的价值在系统记录与审批流入口，Agent 真正落地需要进入工单、变更、服务和权限体系。",
    valueDrivers: ["AI Agents", "Workflow Data Fabric", "ITSM/ITOM 存量", "企业流程数据"],
    watchKpis: ["cRPO", "Pro Plus 渗透", "大客户扩张", "AI SKU attach"],
    frictionPoints: ["客户预算", "集成复杂度", "微软/Salesforce 竞争", "AI 功能同质化"],
    catalysts: ["Agentic workflow 上线", "IT/HR/客服流程扩张", "AI SKU 提价"],
    peers: ["Salesforce", "Microsoft", "Atlassian", "Palantir"]
  },
  Salesforce: {
    rank: "CRM Agent 入口",
    capexNode: "Agentforce + Data Cloud + CRM 系统记录",
    investmentLens: "Salesforce 的 AI 关键在于把客户数据、销售服务流程和 Agent 执行动作闭环，证明 ROI 后才会形成新一轮席位扩张。",
    valueDrivers: ["Agentforce 采用", "Data Cloud 数据统一", "Sales/Service 流程入口", "生态伙伴"],
    watchKpis: ["Agentforce 客户数", "Data Cloud attach", "cRPO", "席位增长"],
    frictionPoints: ["企业 ROI 审核", "数据质量", "微软竞争", "复杂实施周期"],
    catalysts: ["Agentforce 生产案例", "客服/销售自动化 ROI", "平台整合提价"],
    peers: ["ServiceNow", "Microsoft", "HubSpot", "Oracle"]
  },
  LangChain: {
    rank: "Agent 编排工具层",
    capexNode: "LangGraph + LangSmith + Agent Runtime",
    investmentLens: "LangChain 站在企业 Agent 从 demo 到生产的接口上，价值在状态管理、回放、评测、可观测和工具调用标准化。",
    valueDrivers: ["LangGraph durable execution", "LangSmith 观测评测", "开发者心智", "多模型/多工具编排"],
    watchKpis: ["企业客户", "生产工作流数量", "开发者活跃度", "评测/观测使用率"],
    frictionPoints: ["开源商业化", "云平台内置替代", "Agent 可靠性", "定价能力"],
    catalysts: ["生产级 Agent 采用", "工具调用标准化", "企业评测预算提升"],
    peers: ["OpenAI", "Anthropic", "Databricks", "ServiceNow"]
  },
  Cloudflare: {
    rank: "边缘 AI 网关",
    capexNode: "Workers AI + AI Gateway + 安全边界",
    investmentLens: "Cloudflare 卡在流量、安全和边缘执行位置，适合承接模型路由、调用治理、内容安全和低延迟推理。",
    valueDrivers: ["AI Gateway", "Workers AI", "Zero Trust/WAF", "全球边缘网络"],
    watchKpis: ["开发者采用", "AI Gateway 调用量", "安全收入", "毛利率"],
    frictionPoints: ["模型平台竞争", "边缘推理成本", "大客户上云路径", "价格压力"],
    catalysts: ["模型路由治理需求", "企业 AI 安全预算", "边缘推理场景扩张"],
    peers: ["Datadog", "Fastly", "Akamai", "CrowdStrike"]
  },
  "Figure AI": {
    rank: "人形机器人本体",
    capexNode: "Humanoid + 具身模型 + 工厂试点",
    investmentLens: "Figure 的价值在于把人形机器人从演示推向制造/物流场景，核心看本体可靠性、任务泛化和单位经济性。",
    valueDrivers: ["人形本体迭代", "Helix/具身模型", "制造/物流试点", "资本与合作伙伴"],
    watchKpis: ["试点客户", "任务成功率", "BOM 成本", "运行时长/故障率"],
    frictionPoints: ["Sim-to-Real", "安全可靠性", "量产成本", "商业 ROI"],
    catalysts: ["工厂部署扩大", "新一代本体", "大客户场景验证"],
    peers: ["Agility Robotics", "Tesla", "Boston Dynamics", "Unitree"]
  },
  "Agility Robotics": {
    rank: "仓储机器人 RaaS",
    capexNode: "Digit + 仓储搬运 + RaaS 运营",
    investmentLens: "Agility 的路径更贴近仓储物流 ROI，核心是重复任务、可靠性、维护成本和 RaaS 合同。",
    valueDrivers: ["Digit 本体可靠性", "仓储场景部署", "RaaS 模式", "客户运营数据"],
    watchKpis: ["部署台数", "每台月收入", "故障率", "客户续约"],
    frictionPoints: ["场景泛化", "维护成本", "安全认证", "人力替代 ROI"],
    catalysts: ["仓储客户扩张", "RaaS 合同", "新版本 Digit"],
    peers: ["Figure AI", "Boston Dynamics", "Amazon", "Symbotic"]
  },
  AMD: {
    rank: "GPU 第二来源",
    capexNode: "Instinct GPU + EPYC + ROCm",
    investmentLens: "AMD 的 AI 机会来自云厂商降低 NVIDIA 依赖，但必须用软件生态、客户认证和平台完整性证明可替代性。",
    valueDrivers: ["MI300/MI350 采用", "EPYC 平台协同", "ROCm 生态改善", "云客户第二来源"],
    watchKpis: ["数据中心 GPU 收入", "ROCm 开发者采用", "毛利率", "HBM 供给"],
    frictionPoints: ["CUDA 壁垒", "软件生态", "客户认证节奏", "产品代际追赶"],
    catalysts: ["新一代 Instinct", "大型云客户部署", "开源模型推理优化"],
    peers: ["NVIDIA", "Intel", "Broadcom", "Marvell"]
  },
  Marvell: {
    rank: "定制硅与互联",
    capexNode: "Custom ASIC + PAM4 DSP + DPU",
    investmentLens: "Marvell 是 AI ASIC 和高速互联的弹性标的，云客户定制项目能否规模化决定成长斜率。",
    valueDrivers: ["Custom ASIC 项目", "高速 SerDes/DSP", "光互联升级", "云客户 co-design"],
    watchKpis: ["定制硅收入", "客户项目数量", "数据中心收入", "毛利率"],
    frictionPoints: ["Broadcom 竞争", "客户集中", "项目 tape-out 风险", "代际切换"],
    catalysts: ["新 ASIC ramp", "800G/1.6T 光模块", "AI 数据中心互联升级"],
    peers: ["Broadcom", "NVIDIA", "Coherent", "Lumentum"]
  },
  Synopsys: {
    rank: "EDA 设计产能",
    capexNode: "EDA/IP/验证工具",
    investmentLens: "AI ASIC 和 chiplet 复杂度让 EDA 从设计工具变成设计产能，Synopsys 捕获先进芯片开发瓶颈。",
    valueDrivers: ["AI ASIC 设计", "IP 授权", "验证仿真", "先进封装协同"],
    watchKpis: ["EDA 订单", "IP 收入", "续约率", "客户设计活动"],
    frictionPoints: ["半导体周期", "客户内制", "监管并购审查", "估值"],
    catalysts: ["AI ASIC 设计潮", "3D-IC 复杂度", "验证需求膨胀"],
    peers: ["Cadence", "Siemens EDA", "Arm"]
  },
  Cadence: {
    rank: "3D-IC 协同设计",
    capexNode: "数字/模拟 EDA + 封装/电热仿真",
    investmentLens: "Cadence 受益于 chiplet、HBM 和先进封装需要硅片、封装、电源完整性和热管理协同优化。",
    valueDrivers: ["3D-IC 设计", "系统级仿真", "Palladium 验证", "封装协同"],
    watchKpis: ["EDA 增长", "验证硬件需求", "续约率", "AI 设计客户"],
    frictionPoints: ["设计周期", "估值", "客户集中", "Synopsys 竞争"],
    catalysts: ["AI ASIC 复杂度提升", "chiplet 封装", "系统仿真预算"],
    peers: ["Synopsys", "Siemens EDA", "Ansys"]
  },
  Arm: {
    rank: "低功耗 IP 底座",
    capexNode: "Neoverse/Cortex/边缘 AI IP",
    investmentLens: "Arm 捕获端侧 AI、云 CPU 和机器人控制面的低功耗 IP 价值，关键是授权模式和自研替代压力。",
    valueDrivers: ["Neoverse 云渗透", "端侧 AI SoC", "汽车/机器人控制", "CSS 平台化"],
    watchKpis: ["royalty rate", "云 CPU 份额", "授权收入", "边缘 AI 设计数"],
    frictionPoints: ["RISC-V 替代", "客户自研", "授权模式争议", "估值"],
    catalysts: ["AI PC/手机升级", "云 Arm CPU 采用", "机器人边缘推理"],
    peers: ["Qualcomm", "MediaTek", "Apple", "Tenstorrent"]
  },
  "Astera Labs": {
    rank: "AI 服务器连接件",
    capexNode: "PCIe/CXL retimer + 内存互联",
    investmentLens: "AI 服务器 I/O 拓扑复杂化，Astera 的价值在信号完整性、CXL 连接和云客户验证。",
    valueDrivers: ["PCIe retimer", "CXL 内存互联", "高密服务器复杂度", "云客户认证"],
    watchKpis: ["产品 attach rate", "客户集中度", "代际升级", "毛利率"],
    frictionPoints: ["竞争进入", "客户集中", "估值波动", "接口标准变化"],
    catalysts: ["PCIe 6/CXL 迁移", "GB/Rubin 服务器上量", "内存扩展需求"],
    peers: ["Broadcom", "Marvell", "Montage Technology"]
  },
  Coherent: {
    rank: "高速光互联材料",
    capexNode: "800G/1.6T 光模块 + 激光器",
    investmentLens: "AI 集群带宽升级推高光模块和激光器需求，Coherent 的核心在材料、良率和客户认证。",
    valueDrivers: ["800G/1.6T 光连接", "InP/VCSEL/激光器", "数据中心客户", "硅光子前置"],
    watchKpis: ["Datacom 收入", "良率", "客户认证", "库存周期"],
    frictionPoints: ["价格竞争", "客户集中", "电信周期拖累", "模块良率"],
    catalysts: ["1.6T 迁移", "AI Fabric 扩容", "硅光子方案升级"],
    peers: ["Lumentum", "Fabrinet", "Broadcom", "Marvell"]
  },
  Lumentum: {
    rank: "AI 激光器",
    capexNode: "Datacom lasers + 光器件",
    investmentLens: "Lumentum 的弹性来自 AI 光互联中激光器价值量提升，但需要穿越电信周期和模块价格压力。",
    valueDrivers: ["800G/1.6T 激光器", "VCSEL/光器件", "云客户拉货", "硅光子配套"],
    watchKpis: ["云数据中心收入", "毛利率", "客户认证", "订单能见度"],
    frictionPoints: ["电信拖累", "价格下行", "客户集中", "技术路线切换"],
    catalysts: ["1.6T 激光器放量", "AI 网络升级", "新客户认证"],
    peers: ["Coherent", "Fabrinet", "Broadcom"]
  },
  Amphenol: {
    rank: "整柜连接隐形件",
    capexNode: "高速连接器/铜缆/背板/电源互联",
    investmentLens: "AI 服务器从单机走向整柜，高速连接、电源连接和线缆可靠性成为 BOM 中被低估的价值环节。",
    valueDrivers: ["高速连接器", "铜缆互联", "电源连接", "全球制造能力"],
    watchKpis: ["数据中心收入", "订单增长", "毛利率", "客户库存"],
    frictionPoints: ["周期性订单", "价格竞争", "客户库存调整", "规格迭代"],
    catalysts: ["整柜 AI 服务器放量", "高速铜缆需求", "电源互联升级"],
    peers: ["TE Connectivity", "Molex", "Luxshare"]
  },
  Ibiden: {
    rank: "ABF 基板卡点",
    capexNode: "高端 IC 载板/ABF",
    investmentLens: "GPU 和 ASIC 封装面积扩大，让 ABF 基板成为先进封装之外的隐性供给卡点。",
    valueDrivers: ["高端 ABF 需求", "头部客户认证", "AI 加速器封装面积", "良率壁垒"],
    watchKpis: ["ABF 产能利用率", "客户结构", "ASP", "扩产进度"],
    frictionPoints: ["客户集中", "扩产周期", "价格回落", "良率"],
    catalysts: ["GPU/ASIC 封装面积提升", "新平台导入", "ABF 供需趋紧"],
    peers: ["Unimicron", "Shinko Electric", "Nan Ya PCB"]
  },
  "Tokyo Electron": {
    rank: "日本设备平台",
    capexNode: "涂胶显影/刻蚀/沉积/清洗",
    investmentLens: "TEL 覆盖多个关键工艺步骤，先进逻辑、HBM 和先进封装都会增加设备步骤密度。",
    valueDrivers: ["先进节点工艺", "HBM/DRAM capex", "清洗/刻蚀步骤", "涂胶显影设备"],
    watchKpis: ["设备订单", "中国收入占比", "先进节点客户 capex", "毛利率"],
    frictionPoints: ["出口管制", "客户扩产周期", "设备交期", "日元波动"],
    catalysts: ["N2/HBM 扩产", "先进封装流程增加", "存储 capex 回暖"],
    peers: ["Applied Materials", "Lam Research", "ASML", "KLA"]
  },
  "Lam Research": {
    rank: "刻蚀沉积核心",
    capexNode: "Etch/Deposition + HBM/DRAM 高深宽比",
    investmentLens: "HBM、GAA 和 3D 结构提高刻蚀沉积难度，Lam 的优势在存储和高深宽比工艺经验。",
    valueDrivers: ["DRAM/HBM 工艺", "GAA 工艺步骤", "先进封装", "存储 capex 回升"],
    watchKpis: ["存储客户订单", "系统收入", "服务收入", "中国敞口"],
    frictionPoints: ["存储周期", "出口限制", "客户 capex", "竞争工艺"],
    catalysts: ["HBM 扩产", "DRAM EUV/先进节点", "GAA 节点推进"],
    peers: ["Applied Materials", "Tokyo Electron", "KLA"]
  },
  KLA: {
    rank: "良率经济学",
    capexNode: "缺陷检测/量测/过程控制",
    investmentLens: "AI 芯片 die 价值极高，缺陷检测和 known-good-die 筛选直接影响先进封装经济性。",
    valueDrivers: ["先进节点良率", "先进封装检测", "HBM/逻辑 die 测量", "过程控制软件"],
    watchKpis: ["订单", "服务收入", "毛利率", "先进客户 capex"],
    frictionPoints: ["客户 capex 周期", "出口管制", "估值", "设备替代"],
    catalysts: ["先进封装检测需求", "N2/HBM 良率爬坡", "known-good-die 重要性提升"],
    peers: ["Applied Materials", "Lam Research", "Advantest"]
  },
  Advantest: {
    rank: "AI 芯片测试机",
    capexNode: "SoC/HBM 测试 + Known Good Die",
    investmentLens: "GPU、ASIC 和 HBM 价值量上升，测试时间、并行测试和已知良品筛选成为后道经济性核心。",
    valueDrivers: ["AI SoC 测试", "HBM 测试", "V93000 平台", "客户覆盖"],
    watchKpis: ["测试机订单", "AI/HPC 占比", "交付周期", "毛利率"],
    frictionPoints: ["半导体周期", "客户集中", "平台替代", "高估值"],
    catalysts: ["HBM4 测试需求", "GPU/ASIC 放量", "先进封装测试复杂度提升"],
    peers: ["Teradyne", "KLA", "Disco"]
  },
  "BE Semiconductor": {
    rank: "Hybrid Bonding 设备",
    capexNode: "Die attach + Hybrid Bonding + 3D 封装",
    investmentLens: "Chiplet 和 3D 堆叠提升键合精度要求，BESI 是先进封装设备链中高弹性环节。",
    valueDrivers: ["Hybrid Bonding", "3D 封装", "Chiplet", "先进封装资本开支"],
    watchKpis: ["订单", "客户导入", "先进封装收入", "毛利率"],
    frictionPoints: ["订单波动", "技术路线切换", "客户扩产节奏", "竞争"],
    catalysts: ["SoIC/3D 堆叠渗透", "HBM/逻辑堆叠", "先进封装扩产"],
    peers: ["ASM International", "Disco", "TSMC"]
  },
  "ASE Technology": {
    rank: "OSAT 规模平台",
    capexNode: "封装测试/SiP/先进封装配套",
    investmentLens: "AI 芯片后道复杂度提升，OSAT 在测试、模组和区域供应链韧性中承接更多价值。",
    valueDrivers: ["封装测试需求", "SiP/模组", "区域多元化", "客户覆盖"],
    watchKpis: ["封测收入", "资本开支", "毛利率", "先进封装占比"],
    frictionPoints: ["TSMC 内部封装", "价格竞争", "周期", "客户集中"],
    catalysts: ["AI 后道外包", "先进封装配套", "区域供应链重构"],
    peers: ["Amkor", "JCET Group", "Tongfu Microelectronics"]
  },
  Equinix: {
    rank: "互联型数据中心",
    capexNode: "IBX 托管 + 云互联 + 边缘推理",
    investmentLens: "Equinix 的 AI 价值不只在机房面积，而在企业、云和网络互联位置，适合承接混合云和边缘推理部署。",
    valueDrivers: ["互联生态", "托管容量", "企业混合云", "边缘推理"],
    watchKpis: ["租用率", "互联收入", "电力容量", "开发项目回报"],
    frictionPoints: ["电力获取", "REIT 利率敏感", "高密改造成本", "区域竞争"],
    catalysts: ["AI-ready 机房升级", "企业混合云", "云直连需求"],
    peers: ["Digital Realty", "GDS Holdings", "VNET"]
  },
  "Digital Realty": {
    rank: "批发数据中心容量",
    capexNode: "Hyperscale campus + 高密改造",
    investmentLens: "Digital Realty 更偏大规模批发容量，研究重点是电力、租约、开发回报和高密 AI 改造能力。",
    valueDrivers: ["批发数据中心", "电力资源", "全球园区", "高密机柜改造"],
    watchKpis: ["签约租金", "开发 yield", "利用率", "净负债"],
    frictionPoints: ["利率", "电力接入", "客户议价", "项目开发周期"],
    catalysts: ["hyperscaler 租约", "AI 高密改造", "电力资源重估"],
    peers: ["Equinix", "GDS Holdings", "CoreWeave"]
  },
  Snowflake: {
    rank: "企业数据云",
    capexNode: "Data Cloud + Cortex AI + 治理",
    investmentLens: "Snowflake 处在企业数据到 AI 应用的入口，关键是把数据仓库消费转成 Cortex、RAG 和治理预算。",
    valueDrivers: ["Cortex AI", "Data Cloud", "治理/权限", "企业数据驻留"],
    watchKpis: ["产品收入增长", "净留存", "Cortex 使用率", "大客户消费"],
    frictionPoints: ["Databricks 竞争", "消费模型波动", "云平台内置", "AI SKU 差异化"],
    catalysts: ["Cortex 采用", "RAG 企业项目", "数据治理需求提升"],
    peers: ["Databricks", "MongoDB", "Elastic", "Microsoft"]
  },
  Palantir: {
    rank: "生产级 AI 操作系统",
    capexNode: "AIP + Ontology + 政府/工业工作流",
    investmentLens: "Palantir 的强项是把 AI 接进复杂组织的权限、数据模型和操作流程，核心看高估值下的商业扩张持续性。",
    valueDrivers: ["AIP bootcamp", "Ontology", "政府/工业客户", "生产工作流"],
    watchKpis: ["美国商业增长", "政府合同", "净留存", "客户数"],
    frictionPoints: ["估值", "实施复杂度", "客户集中", "平台可替代性"],
    catalysts: ["AIP 生产案例", "政府 AI 预算", "工业客户扩张"],
    peers: ["ServiceNow", "Databricks", "Snowflake", "C3.ai"]
  },
  CrowdStrike: {
    rank: "AI 安全运营入口",
    capexNode: "Falcon 遥测 + SOC Agent",
    investmentLens: "AI 安全不仅是模型护栏，企业还需要用 Agent 处理海量安全遥测，CrowdStrike 卡在 SOC 工作流和端点数据。",
    valueDrivers: ["Falcon 数据网络", "Charlotte AI", "云安全/身份", "安全运营自动化"],
    watchKpis: ["ARR", "模块 attach", "净留存", "事件恢复/客户信任"],
    frictionPoints: ["平台事故风险", "安全预算周期", "Microsoft 竞争", "AI 功能可替代"],
    catalysts: ["SOC Agent 落地", "模块扩张", "云/身份安全需求"],
    peers: ["Palo Alto Networks", "Cloudflare", "Datadog", "Zscaler"]
  },
  Datadog: {
    rank: "LLM 可观测层",
    capexNode: "APM + LLM Observability + 成本/P99 监控",
    investmentLens: "AI 应用上线后最缺的是成本、延迟、错误、漂移和用户体验监控，Datadog 可把 AI 运维纳入既有观测平台。",
    valueDrivers: ["LLM Observability", "APM/日志/指标", "安全与运维融合", "云原生客户"],
    watchKpis: ["客户数", "产品 attach", "DBNR", "AI observability 使用率"],
    frictionPoints: ["云厂商内置", "预算收缩", "价格敏感", "竞争"],
    catalysts: ["AI 应用生产化", "P99/成本治理", "安全与可观测融合"],
    peers: ["Elastic", "Cloudflare", "CrowdStrike", "New Relic"]
  },
  Intel: {
    rank: "美国本土制造变量",
    capexNode: "Xeon/Gaudi/Foundry/Foveros",
    investmentLens: "Intel 的 AI 价值不是单看 Gaudi，而是美国本土制造、先进封装、CPU 控制面和企业推理的组合期权。",
    valueDrivers: ["Intel Foundry 客户验证", "Xeon 企业存量", "Foveros 先进封装", "Gaudi/推理平台"],
    watchKpis: ["Foundry 外部客户", "制程里程碑", "数据中心毛利率", "资本开支/现金流"],
    frictionPoints: ["制程追赶", "执行风险", "GPU 生态弱", "资本开支压力"],
    catalysts: ["18A/先进节点验证", "美国制造补贴落地", "企业推理订单"],
    peers: ["TSMC", "AMD", "Samsung Electronics", "GlobalFoundries"]
  },
  Unimicron: {
    rank: "IC 载板供给",
    capexNode: "ABF/HDI/AI 服务器 PCB",
    investmentLens: "AI 加速器封装面积扩大后，IC 载板和高层数 PCB 是先进封装外的隐性供给约束。",
    valueDrivers: ["ABF 基板需求", "AI 服务器 PCB", "高层数良率", "头部客户认证"],
    watchKpis: ["ABF 利用率", "AI 客户收入", "资本开支", "毛利率"],
    frictionPoints: ["周期波动", "价格竞争", "客户认证", "产能错配"],
    catalysts: ["Rubin/ASIC 封装面积扩大", "AI 服务器换代", "载板供需收紧"],
    peers: ["Ibiden", "Shinko Electric", "Nan Ya PCB"]
  },
  "Shinko Electric": {
    rank: "日本封装基板",
    capexNode: "Package substrate + lead frame",
    investmentLens: "Shinko 卡在高端封装基板和后道材料，AI 芯片出货越复杂，基板可靠性和客户认证越重要。",
    valueDrivers: ["高端封装基板", "日本材料链", "AI 加速器后道", "客户认证"],
    watchKpis: ["封装基板订单", "产能利用率", "毛利率", "客户集中度"],
    frictionPoints: ["客户集中", "周期性", "母公司交易变化", "价格回落"],
    catalysts: ["AI GPU/ASIC 出货", "高端基板紧缺", "先进封装扩产"],
    peers: ["Ibiden", "Unimicron", "ASE Technology"]
  },
  Teradyne: {
    rank: "测试+协作机器人",
    capexNode: "SoC/系统级测试 + cobot",
    investmentLens: "AI 芯片价值量上升会放大测试时间和已知良品筛选价值，协作机器人提供具身智能制造侧期权。",
    valueDrivers: ["AI SoC 测试", "系统级测试", "Universal Robots", "半导体复杂度提升"],
    watchKpis: ["测试设备订单", "机器人业务增长", "半导体测试毛利", "客户集中度"],
    frictionPoints: ["测试周期", "机器人竞争", "客户 capex", "产品代际切换"],
    catalysts: ["AI ASIC 测试需求", "HBM/Chiplet 复杂度", "cobot 工业复苏"],
    peers: ["Advantest", "KLA", "Yaskawa", "Fanuc"]
  },
  Disco: {
    rank: "HBM 后道加工",
    capexNode: "晶圆切割/研磨/减薄",
    investmentLens: "HBM 和 3D 封装要求更薄晶圆、更低损伤和更高良率，Disco 是后道机械加工的关键设备商。",
    valueDrivers: ["HBM 晶圆减薄", "先进封装后道", "高精度切割", "客户工艺绑定"],
    watchKpis: ["HBM 相关订单", "设备交期", "毛利率", "日本设备周期"],
    frictionPoints: ["客户扩产节奏", "设备交付", "日元波动", "产能周期"],
    catalysts: ["HBM4/16Hi 升级", "3D 封装量产", "后道良率要求提升"],
    peers: ["Advantest", "Tokyo Electron", "BE Semiconductor"]
  },
  Lasertec: {
    rank: "EUV 掩模检测",
    capexNode: "EUV mask inspection",
    investmentLens: "EUV 掩模缺陷的代价极高，Lasertec 的价值在先进节点良率学习曲线和掩模检测稀缺性。",
    valueDrivers: ["EUV 掩模检测", "先进节点良率", "High-NA 复杂度", "日本设备稀缺"],
    watchKpis: ["EUV 检测订单", "客户 capex", "backlog", "毛利率"],
    frictionPoints: ["客户集中", "节点周期", "估值波动", "设备验收节奏"],
    catalysts: ["N2/High-NA 导入", "EUV 层数增加", "掩模缺陷管控升级"],
    peers: ["ASML", "KLA", "Tokyo Electron"]
  },
  "ASM International": {
    rank: "原子级沉积",
    capexNode: "ALD/Epitaxy/GAA 材料工程",
    investmentLens: "GAA、背面供电、HBM 和 3D 结构让原子层沉积价值上升，ASM 是材料工程复杂化的直接受益者。",
    valueDrivers: ["ALD 渗透", "GAA 工艺", "外延沉积", "先进节点材料工程"],
    watchKpis: ["ALD 订单", "先进逻辑客户", "中国/韩国需求", "毛利率"],
    frictionPoints: ["半导体周期", "客户集中", "设备竞争", "节点推迟"],
    catalysts: ["GAA 扩产", "背面供电", "HBM/DRAM 工艺升级"],
    peers: ["Applied Materials", "Tokyo Electron", "Lam Research"]
  },
  Amkor: {
    rank: "区域封测韧性",
    capexNode: "Advanced packaging/test/wafer services",
    investmentLens: "Amkor 的研究重点是先进封装外包和区域多元化，尤其在美国与亚洲后道供应链重构中有弹性。",
    valueDrivers: ["先进封装", "测试服务", "区域多元化", "汽车/HPC 客户"],
    watchKpis: ["先进封装收入", "资本开支", "产能利用率", "毛利率"],
    frictionPoints: ["客户集中", "资本开支", "价格竞争", "TSMC 内部封装"],
    catalysts: ["AI 后道外包", "美国封测布局", "Chiplet 测试需求"],
    peers: ["ASE Technology", "JCET Group", "Tongfu Microelectronics"]
  },
  SMIC: {
    rank: "中国本土代工锚点",
    capexNode: "成熟/准先进节点 + 本土客户",
    investmentLens: "SMIC 的价值在中国芯片链本土承接能力，重点不是追平最先进节点，而是成熟、特色和部分准先进产能的战略稀缺。",
    valueDrivers: ["国产芯片代工", "成熟节点需求", "本土供应链", "工业/控制芯片"],
    watchKpis: ["产能利用率", "毛利率", "先进节点进展", "资本开支"],
    frictionPoints: ["出口管制", "设备受限", "良率", "价格竞争"],
    catalysts: ["国产替代订单", "成熟节点复苏", "本土设备材料验证"],
    peers: ["TSMC", "UMC", "GlobalFoundries", "Hua Hong"]
  },
  Qualcomm: {
    rank: "端侧 AI 算力入口",
    capexNode: "Snapdragon/NPU/汽车与机器人边缘推理",
    investmentLens: "端侧 AI 如果从手机扩展到 PC、汽车和机器人，Qualcomm 的低功耗异构计算和连接能力会重新定价。",
    valueDrivers: ["AI PC/手机 NPU", "汽车平台", "端侧推理 SDK", "连接芯片"],
    watchKpis: ["手机 SoC 份额", "汽车 backlog", "AI PC 采用", "授权收入"],
    frictionPoints: ["苹果自研", "手机周期", "授权监管", "端侧 AI 变现"],
    catalysts: ["AI PC 换机", "高阶座舱/ADAS", "端侧多模态应用"],
    peers: ["MediaTek", "Apple", "Arm", "Horizon Robotics"]
  },
  Apple: {
    rank: "消费端 AI 分发",
    capexNode: "Apple Silicon + Neural Engine + 隐私端侧 AI",
    investmentLens: "Apple 的 AI 不是模型榜单逻辑，而是把端侧推理、隐私计算和设备生态变成用户体验与换机周期。",
    valueDrivers: ["Apple Silicon", "设备分发", "端侧隐私", "生态入口"],
    watchKpis: ["iPhone 换机", "Services 增长", "端侧 AI 功能使用", "NPU 性能"],
    frictionPoints: ["模型能力落后", "监管", "中国市场", "换机周期"],
    catalysts: ["Apple Intelligence 升级", "端侧 Agent", "新设备形态"],
    peers: ["Qualcomm", "Microsoft", "Google", "Samsung Electronics"]
  },
  "Dell Technologies": {
    rank: "企业 AI 工厂集成",
    capexNode: "PowerEdge/存储/私有 AI 基础设施",
    investmentLens: "Dell 捕获的是企业私有 AI 和边缘推理预算，重点看服务器订单能否转成存储、服务和长期客户关系。",
    valueDrivers: ["AI 服务器", "企业私有推理", "PowerScale 存储", "NVIDIA AI Factory 合作"],
    watchKpis: ["AI server backlog", "ISG 毛利", "存储 attach", "企业订单"],
    frictionPoints: ["低毛利竞争", "GPU 供给", "客户 CAPEX", "Supermicro/HPE 竞争"],
    catalysts: ["Blackwell/Rubin 服务器换代", "企业私有 AI", "边缘推理部署"],
    peers: ["Supermicro", "HPE", "Inspur Information", "Lenovo"]
  },
  HPE: {
    rank: "HPC+企业私有云",
    capexNode: "Cray/GreenLake/AI Supercomputing",
    investmentLens: "HPE 的优势在 HPC、超级计算和企业私有云交付，适合承接科研、政府和大型企业 AI 集群。",
    valueDrivers: ["Cray EX/HPC", "GreenLake", "企业私有云", "集群运维"],
    watchKpis: ["HPC 订单", "ARR", "毛利率", "集群交付"],
    frictionPoints: ["项目周期", "低毛利硬件", "云厂商竞争", "集成复杂度"],
    catalysts: ["主权 AI", "科研/政府集群", "企业私有 AI 项目"],
    peers: ["Dell Technologies", "Supermicro", "Sugon", "Lenovo"]
  },
  "Quanta Computer": {
    rank: "AI ODM 龙头",
    capexNode: "云服务器/AI rack/JDM",
    investmentLens: "Quanta 是 hyperscaler AI 硬件扩张的制造杠杆，核心看整柜设计、液冷制造和云客户排产。",
    valueDrivers: ["AI ODM", "整柜制造", "云客户", "液冷 rack"],
    watchKpis: ["AI 服务器收入", "客户排产", "毛利率", "产能利用率"],
    frictionPoints: ["客户集中", "低毛利", "平台切换", "供应链执行"],
    catalysts: ["GB/Rubin 整柜放量", "hyperscaler capex", "液冷机柜升级"],
    peers: ["Wiwynn", "Foxconn", "Wistron", "Supermicro"]
  },
  Wiwynn: {
    rank: "云服务器高 beta",
    capexNode: "OCP rack + 高密 AI 服务器",
    investmentLens: "Wiwynn 卡在云客户高密服务器供应链，AI 资本开支上行时收入弹性高，但客户集中和毛利波动也高。",
    valueDrivers: ["OCP 云服务器", "高密机柜", "云客户深度", "AI rack 交付"],
    watchKpis: ["客户订单", "AI 服务器占比", "毛利率", "库存周转"],
    frictionPoints: ["客户集中", "平台换代", "价格压力", "供应链交付"],
    catalysts: ["云厂商 AI capex", "液冷 rack ramp", "新平台认证"],
    peers: ["Quanta Computer", "Wistron", "Foxconn", "Supermicro"]
  },
  "Delta Electronics": {
    rank: "电源与热管理平台",
    capexNode: "服务器电源/电力转换/热管理",
    investmentLens: "AI 机柜功率密度上升带来电源转换、热管理和工业自动化需求，台达是 grid-to-rack 的亚洲核心供应商。",
    valueDrivers: ["服务器 PSU", "热管理", "电力电子", "工业自动化"],
    watchKpis: ["电源业务增长", "数据中心订单", "毛利率", "液冷/热管理进展"],
    frictionPoints: ["客户价格压力", "库存周期", "竞争", "产品认证"],
    catalysts: ["AI PSU 升级", "高密机柜放量", "液冷配套需求"],
    peers: ["Lite-On", "Vertiv", "Eaton", "Sanhua Intelligent Controls"]
  },
  "CoolIT Systems": {
    rank: "冷板液冷专家",
    capexNode: "Cold plate/CDU/direct liquid cooling",
    investmentLens: "从风冷到冷板液冷是 AI 机房的硬切换，CoolIT 的价值在高热流密度组件和整机厂认证。",
    valueDrivers: ["冷板液冷", "CDU", "GPU 平台认证", "高密机柜"],
    watchKpis: ["平台认证", "液冷订单", "交付良率", "漏液/可靠性指标"],
    frictionPoints: ["漏液风险", "运维改造", "价格竞争", "客户集中"],
    catalysts: ["GB200/Rubin 液冷部署", "存量机房改造", "100kW+ rack 普及"],
    peers: ["Vertiv", "Envicool", "Boyd", "Modine"]
  },
  WEKA: {
    rank: "训练数据管道",
    capexNode: "WekaFS/checkpoint/GPU I/O",
    investmentLens: "大规模训练不是只缺 GPU，数据管道和 checkpoint 恢复会影响 MFU 与故障恢复，WEKA 卡在训练存储性能层。",
    valueDrivers: ["训练 I/O", "checkpoint 加速", "GPU 数据管道", "高性能文件系统"],
    watchKpis: ["大客户集群数", "吞吐/延迟指标", "续费扩张", "云合作"],
    frictionPoints: ["存储竞争", "客户集中", "开源/云原生替代", "销售周期"],
    catalysts: ["100K 卡训练集群", "企业私有模型训练", "checkpoint 成本显性化"],
    peers: ["VAST Data", "DDN", "Pure Storage", "NetApp"]
  },
  "VAST Data": {
    rank: "AI 数据底座",
    capexNode: "非结构化数据平台 + 训练/推理数据引擎",
    investmentLens: "企业 AI 的长期瓶颈是数据治理和非结构化数据管道，VAST 试图把存储、数据库和 AI 数据引擎合成一层。",
    valueDrivers: ["非结构化数据", "AI Data Engine", "训练 I/O", "企业数据平台"],
    watchKpis: ["大客户 ARR", "平台 attach", "GPU 集群案例", "毛利率"],
    frictionPoints: ["存储平台竞争", "估值", "云厂商内置", "企业销售周期"],
    catalysts: ["企业 AI 数据湖升级", "训练/推理数据一体化", "私有 AI 集群"],
    peers: ["WEKA", "DDN", "Databricks", "Snowflake"]
  },
  DDN: {
    rank: "HPC/AI 并行存储",
    capexNode: "Lustre/EXAScaler/训练 checkpoint",
    investmentLens: "DDN 更贴近超算和大规模训练场景，价值在高吞吐并行文件系统和硬件软件一体化交付。",
    valueDrivers: ["HPC 存储", "并行文件系统", "checkpoint", "AI400X"],
    watchKpis: ["超算/AI 集群订单", "吞吐指标", "服务收入", "客户复购"],
    frictionPoints: ["项目制销售", "云对象存储替代", "硬件周期", "客户集中"],
    catalysts: ["大模型训练集群", "科研/政府主权 AI", "checkpoint 恢复需求"],
    peers: ["WEKA", "VAST Data", "Pure Storage"]
  },
  "NextEra Energy": {
    rank: "可再生 PPA 平台",
    capexNode: "Renewables + battery storage + utility grid",
    investmentLens: "AI 数据中心需要大量低碳电力和储能配套，NextEra 的可再生项目和公用事业资源提供长期 PPA 供给。",
    valueDrivers: ["可再生 PPA", "储能项目", "公用事业资本开支", "并网资源"],
    watchKpis: ["新增项目", "PPA 价格", "储能 attach", "利率/融资成本"],
    frictionPoints: ["并网排队", "利率", "项目许可", "电价波动"],
    catalysts: ["hyperscaler PPA", "储能成本下降", "输电投资"],
    peers: ["Constellation Energy", "Vistra", "Sungrow", "CATL"]
  },
  Vistra: {
    rank: "可调度电力资产",
    capexNode: "核电/燃气/零售电力",
    investmentLens: "AI 负载提高可调度电源价值，Vistra 的研究重点是核电/燃气组合、电价和数据中心负载重估。",
    valueDrivers: ["可调度电源", "核电资产", "容量市场", "零售电力"],
    watchKpis: ["发电毛利", "容量价格", "PPA 签约", "电站可用率"],
    frictionPoints: ["电价波动", "监管", "燃料成本", "资产维护"],
    catalysts: ["数据中心 PPA", "容量市场上行", "核电资产重估"],
    peers: ["Constellation Energy", "NextEra Energy", "GE Vernova"]
  },
  "Siemens Energy": {
    rank: "电网与燃机链",
    capexNode: "Grid technologies/HVDC/transformers/gas services",
    investmentLens: "AI 数据中心电力接入会拉动变压器、高压设备、HVDC 和燃机调峰，Siemens Energy 处在电网扩容链条上。",
    valueDrivers: ["电网设备", "HVDC", "变压器", "燃机服务"],
    watchKpis: ["Grid 订单", "交付周期", "燃机服务利润", "风电业务修复"],
    frictionPoints: ["项目执行", "供应链瓶颈", "风电亏损", "监管"],
    catalysts: ["输配电升级", "数据中心并网", "燃气调峰需求"],
    peers: ["GE Vernova", "ABB", "Eaton", "Schneider Electric"]
  },
  "JCET Group": {
    rank: "中国 OSAT 平台",
    capexNode: "封装测试/SiP/先进封装",
    investmentLens: "长电科技是中国封测规模平台，国产 AI 芯片放量需要本土 OSAT 承接测试、SiP 和高端封装配套。",
    valueDrivers: ["国产封测", "先进封装", "全球客户", "SiP/测试"],
    watchKpis: ["先进封装收入", "产能利用率", "毛利率", "客户结构"],
    frictionPoints: ["价格竞争", "技术差距", "客户周期", "资本开支"],
    catalysts: ["国产 AI 芯片后道", "Chiplet 封装", "海外客户复苏"],
    peers: ["ASE Technology", "Amkor", "Tongfu Microelectronics"]
  },
  "NAURA Technology": {
    rank: "国产设备平台",
    capexNode: "刻蚀/沉积/清洗/热处理",
    investmentLens: "北方华创是中国半导体设备平台型标的，价值在先进制程受限背景下的国产验证和工艺覆盖面。",
    valueDrivers: ["国产设备替代", "刻蚀/沉积覆盖", "客户验证", "成熟与先进节点扩产"],
    watchKpis: ["订单增长", "先进工艺验证", "毛利率", "研发投入"],
    frictionPoints: ["先进工艺差距", "客户认证周期", "出口限制", "周期波动"],
    catalysts: ["国产晶圆厂扩产", "设备验证突破", "先进封装设备需求"],
    peers: ["AMEC", "Piotech", "Applied Materials", "Tokyo Electron"]
  },
  AMEC: {
    rank: "国产刻蚀核心",
    capexNode: "Etch/MOCVD/process equipment",
    investmentLens: "中微公司卡在刻蚀等关键工艺设备，先进制程与存储制造越复杂，刻蚀验证价值越高。",
    valueDrivers: ["刻蚀设备", "客户验证", "MOCVD", "国产替代"],
    watchKpis: ["刻蚀订单", "先进节点验证", "毛利率", "研发进展"],
    frictionPoints: ["国际设备竞争", "先进节点难度", "客户集中", "出口管制"],
    catalysts: ["本土晶圆厂扩产", "先进刻蚀验证", "存储/逻辑工艺升级"],
    peers: ["NAURA Technology", "Lam Research", "Tokyo Electron", "Piotech"]
  },
  Envicool: {
    rank: "中国液冷温控",
    capexNode: "数据中心温控/CDU/储能温控",
    investmentLens: "英维克直接受益于中国 AI 机房从风冷走向液冷，研究重点是液冷项目、可靠性和客户结构。",
    valueDrivers: ["数据中心液冷", "CDU/温控", "储能温控", "高密机柜"],
    watchKpis: ["液冷收入", "订单增长", "毛利率", "漏液/质量指标"],
    frictionPoints: ["价格竞争", "项目周期", "客户集中", "运维可靠性"],
    catalysts: ["国产 AI 集群液冷部署", "存量机房改造", "储能温控增长"],
    peers: ["Vertiv", "CoolIT Systems", "Sanhua Intelligent Controls", "Modine"]
  },
  "Sanhua Intelligent Controls": {
    rank: "热管理与机电部件",
    capexNode: "阀件/热管理/机器人执行部件",
    investmentLens: "三花同时暴露在数据中心热管理和机器人机电控制，核心看高可靠部件能否进入液冷与具身智能 BOM。",
    valueDrivers: ["热管理阀件", "液冷配套", "机器人部件", "汽车热管理"],
    watchKpis: ["热管理订单", "机器人客户", "毛利率", "海外客户占比"],
    frictionPoints: ["下游周期", "客户集中", "价格竞争", "技术路线变化"],
    catalysts: ["液冷机房放量", "人形机器人 BOM 定点", "海外数据中心客户"],
    peers: ["Delta Electronics", "Envicool", "Inovance", "Harmonic Drive Systems"]
  },
  Inovance: {
    rank: "中国运动控制平台",
    capexNode: "伺服/PLC/变频器/工业自动化",
    investmentLens: "汇川是机器人和 AI 工厂的运动控制底座，真正的价值在伺服、控制器和制造业客户闭环。",
    valueDrivers: ["伺服系统", "PLC/运动控制", "工业自动化客户", "新能源车电控"],
    watchKpis: ["伺服份额", "工业自动化收入", "机器人客户", "毛利率"],
    frictionPoints: ["工业周期", "价格竞争", "机器人放量节奏", "海外拓展"],
    catalysts: ["制造业自动化复苏", "机器人关节/控制需求", "AI 工厂改造"],
    peers: ["Yaskawa", "Fanuc", "Estun Automation", "Omron"]
  },
  Hesai: {
    rank: "机器人感知硬件",
    capexNode: "LiDAR/ADAS/Robotaxi sensors",
    investmentLens: "禾赛的价值在自动驾驶和机器人感知硬件规模化，关键看价格下降后毛利和客户渗透是否守得住。",
    valueDrivers: ["车载 LiDAR", "Robotaxi 传感器", "规模制造", "机器人感知"],
    watchKpis: ["出货量", "ASP/毛利率", "客户集中度", "ADAS 渗透"],
    frictionPoints: ["价格竞争", "技术路线替代", "地缘监管", "汽车周期"],
    catalysts: ["高阶 ADAS 放量", "Robotaxi 城市扩展", "机器人传感需求"],
    peers: ["RoboSense", "Luminar", "Pony AI", "Horizon Robotics"]
  },
  "360 Security Technology": {
    rank: "中国 AI 安全入口",
    capexNode: "安全 Agent/企业知识库/AI 安全",
    investmentLens: "360 的 AI 价值更接近安全运营和企业知识库入口，关键在能否把传统安全客户转成 AI 安全与 Agent 预算。",
    valueDrivers: ["安全客户基础", "360 AI", "安全 Agent", "企业知识库"],
    watchKpis: ["企业安全收入", "AI 产品付费", "客户续费", "广告/主业压力"],
    frictionPoints: ["商业化", "模型差异化", "竞争", "客户预算"],
    catalysts: ["AI 安全合规需求", "企业知识库项目", "安全运营 Agent"],
    peers: ["CrowdStrike", "Palo Alto Networks", "Cloudflare", "Zhipu AI"]
  },
  "Credo Technology": {
    rank: "高速连接芯片",
    capexNode: "SerDes/DSP/AEC/PCIe-CXL connectivity",
    investmentLens: "Credo 不是传统光模块公司，而是 AI 集群短距互联的低功耗连接芯片和 AEC 变量，卡在铜缆、光模块和 CPO 之间的工程折中。",
    valueDrivers: ["112G/224G SerDes", "HiWire AEC", "光模块 DSP", "PCIe/CXL 连接"],
    watchKpis: ["AEC 客户导入", "数据中心收入", "毛利率", "客户集中度"],
    frictionPoints: ["客户集中", "代际切换", "Broadcom/Marvell 竞争", "估值波动"],
    catalysts: ["800G/1.6T 网络升级", "AI rack 内短距连接放量", "CPO 前过渡方案需求"],
    peers: ["Marvell", "Broadcom", "Astera Labs", "Amphenol"]
  },
  Fabrinet: {
    rank: "光模块制造杠杆",
    capexNode: "光模块代工/激光与光器件精密装配",
    investmentLens: "Fabrinet 捕获的是光模块和光器件制造良率，AI 网络速率迁移越快，越需要稳定装配、测试和交付能力。",
    valueDrivers: ["800G/1.6T 光模块制造", "客户认证", "精密光学装配", "产能交付"],
    watchKpis: ["数据中心收入", "前几大客户集中度", "毛利率", "产能利用率"],
    frictionPoints: ["客户集中", "价格压力", "良率爬坡", "产品代际切换"],
    catalysts: ["1.6T 模块量产", "云厂商 AI Fabric 扩容", "新客户认证"],
    peers: ["Coherent", "Lumentum", "Zhongji Innolight", "Eoptolink"]
  },
  "Zhongji Innolight": {
    rank: "中国高速光模块龙头",
    capexNode: "800G/1.6T 光模块 + 数据中心互联",
    investmentLens: "中际旭创是中国光模块链最直接的 AI 网络标的之一，核心看海外云客户拉货、速率迁移和良率。",
    valueDrivers: ["800G/1.6T 光模块", "海外云客户", "数据中心网络升级", "制造良率"],
    watchKpis: ["高速模块收入", "毛利率", "客户集中度", "产能扩张"],
    frictionPoints: ["价格竞争", "海外监管", "客户集中", "速率代际切换"],
    catalysts: ["AI 后端网络扩容", "1.6T 产品放量", "新云客户认证"],
    peers: ["Eoptolink", "Coherent", "Fabrinet", "Accelink Technologies"]
  },
  Eoptolink: {
    rank: "高速光模块弹性",
    capexNode: "Datacenter optical transceivers",
    investmentLens: "新易盛的弹性来自高速数据中心光模块，研究重点是 800G/1.6T 认证、客户结构和价格压力。",
    valueDrivers: ["高速光模块", "数据中心客户", "1.6T 迁移", "Coherent optics"],
    watchKpis: ["高速模块占比", "毛利率", "客户认证", "汇率影响"],
    frictionPoints: ["客户集中", "价格竞争", "良率", "需求节奏"],
    catalysts: ["AI 网络拉货", "1.6T 量产", "海外云客户扩张"],
    peers: ["Zhongji Innolight", "Coherent", "Fabrinet", "Accelink Technologies"]
  },
  "Accelink Technologies": {
    rank: "光芯片/光器件底座",
    capexNode: "Optical chips/devices/modules",
    investmentLens: "光迅科技更偏光器件和光芯片底层供给，若高端光芯片国产化提升，会从模块价格战中获得更强战略位置。",
    valueDrivers: ["光芯片", "光器件", "高速模块", "通信与数据中心客户"],
    watchKpis: ["高端光器件收入", "数据中心客户", "毛利率", "研发进展"],
    frictionPoints: ["电信周期", "高端良率", "数据中心突破", "价格竞争"],
    catalysts: ["国产光芯片升级", "AI 光模块需求", "800G/1.6T 器件放量"],
    peers: ["Lumentum", "Coherent", "Zhongji Innolight", "Eoptolink"]
  },
  "Shengyi Technology": {
    rank: "高速 PCB 材料",
    capexNode: "Low-loss CCL/PCB materials",
    investmentLens: "生益科技卡在高速 PCB 的材料端，AI 服务器、交换机和背板速率越高，对低损耗 CCL 的材料等级要求越高。",
    valueDrivers: ["低损耗 CCL", "高速材料认证", "AI 服务器 PCB", "封装/通信材料"],
    watchKpis: ["高端 CCL 收入", "客户认证", "毛利率", "材料良率"],
    frictionPoints: ["材料认证周期", "价格竞争", "PCB 周期", "高端材料替代"],
    catalysts: ["1.6T 交换机板升级", "AI 服务器高多层板", "高速材料国产替代"],
    peers: ["WUS Printed Circuit", "Shennan Circuits", "Unimicron"]
  },
  "WUS Printed Circuit": {
    rank: "AI 服务器 PCB",
    capexNode: "High-speed PCB/switch PCB/backplane",
    investmentLens: "沪电股份捕获 AI 服务器和交换机 PCB 价值，关键在层数、低损耗材料、背钻精度和客户认证。",
    valueDrivers: ["AI 服务器 PCB", "交换机板", "高多层背板", "海外客户"],
    watchKpis: ["AI/通信 PCB 收入", "毛利率", "高多层板占比", "客户集中度"],
    frictionPoints: ["材料成本", "价格竞争", "良率", "客户认证"],
    catalysts: ["800G/1.6T 交换机放量", "AI 服务器平台升级", "高端 PCB 产能紧张"],
    peers: ["Shengyi Technology", "Shennan Circuits", "Unimicron"]
  },
  "Shennan Circuits": {
    rank: "PCB+封装基板",
    capexNode: "高速通信 PCB + package substrate",
    investmentLens: "深南电路同时暴露在通信 PCB 和封装基板，AI 网络设备升级有望提升高端板卡和基板需求。",
    valueDrivers: ["高速通信板", "封装基板", "电子装联", "数据中心客户"],
    watchKpis: ["PCB 收入结构", "封装基板爬坡", "毛利率", "通信客户需求"],
    frictionPoints: ["通信周期", "基板良率", "价格竞争", "客户认证"],
    catalysts: ["交换机/服务器升级", "封装基板国产替代", "AI 网络设备需求"],
    peers: ["WUS Printed Circuit", "Shengyi Technology", "Unimicron", "JCET Group"]
  },
  "Dongshan Precision": {
    rank: "PCB/精密制造配套",
    capexNode: "PCB/FPC/光通信结构件",
    investmentLens: "东山精密更像 AI 网络硬件的制造配套弹性，核心看高端 PCB、光通信结构件和服务器客户能否抬升产品结构。",
    valueDrivers: ["AI 服务器 PCB", "光通信配套", "精密制造", "客户导入"],
    watchKpis: ["PCB 收入结构", "高端客户认证", "毛利率", "库存周转"],
    frictionPoints: ["消费电子周期", "客户集中", "价格竞争", "高端良率"],
    catalysts: ["AI 服务器 PCB 升级", "光模块制造扩产", "海外客户验证"],
    peers: ["WUS Printed Circuit", "Shengyi Technology", "Shennan Circuits"]
  },
  "Han's Laser": {
    rank: "精密激光设备",
    capexNode: "PCB/半导体/光通信制造设备",
    investmentLens: "大族激光不是光模块本体标的，而是制造设备杠杆；高速 PCB、光模块封装和半导体后道升级会带来精密激光加工需求。",
    valueDrivers: ["PCB 激光加工", "半导体设备", "光通信制造", "自动化设备"],
    watchKpis: ["设备订单", "新业务收入", "毛利率", "客户资本开支"],
    frictionPoints: ["制造业周期", "设备竞争", "客户验收", "研发转化"],
    catalysts: ["高速 PCB 扩产", "光通信封装升级", "半导体后道设备需求"],
    peers: ["HGTECH", "Disco", "NAURA Technology", "AMEC"]
  },
  "Sanan Optoelectronics": {
    rank: "化合物半导体/光电器件",
    capexNode: "LED/光芯片/化合物半导体",
    investmentLens: "三安光电的 AI 网络价值在化合物半导体和光电器件能力，若高速光芯片国产化推进，材料和器件平台价值会上移。",
    valueDrivers: ["光电器件", "化合物半导体", "激光/探测器能力", "国产替代"],
    watchKpis: ["高端器件收入", "毛利率", "客户认证", "资本开支回报"],
    frictionPoints: ["LED 周期", "高端光芯片良率", "价格竞争", "需求波动"],
    catalysts: ["国产光芯片需求", "AI 光模块放量", "化合物半导体升级"],
    peers: ["Yuanjie Semiconductor", "AXT", "Accelink Technologies"]
  },
  "Cambridge Industries Group": {
    rank: "光模块/通信设备弹性",
    capexNode: "Optical modules + broadband access",
    investmentLens: "剑桥科技的弹性来自高速光模块和海外客户，但需要持续验证产品速率迁移、客户结构和毛利率稳定性。",
    valueDrivers: ["高速光模块", "数据中心互联", "海外客户", "通信设备"],
    watchKpis: ["光模块收入", "客户认证", "毛利率", "库存"],
    frictionPoints: ["客户集中", "价格竞争", "速率切换", "需求波动"],
    catalysts: ["800G/1.6T 拉货", "新客户导入", "AI 后端网络扩容"],
    peers: ["Zhongji Innolight", "Eoptolink", "Applied Optoelectronics"]
  },
  HGTECH: {
    rank: "光通信+激光制造",
    capexNode: "Optical devices + laser equipment",
    investmentLens: "华工科技同时连接光通信器件和激光设备，既可看作光模块上游配套，也可看作制造升级设备链条。",
    valueDrivers: ["光通信器件", "激光加工设备", "传感器", "智能制造"],
    watchKpis: ["光通信业务增长", "设备订单", "毛利率", "客户结构"],
    frictionPoints: ["制造业周期", "光通信客户突破", "产品结构", "价格竞争"],
    catalysts: ["AI 光模块扩产", "高速器件升级", "智能制造需求"],
    peers: ["Han's Laser", "TFC Communication", "Accelink Technologies"]
  },
  YOFC: {
    rank: "光纤光缆底座",
    capexNode: "Optical fibre/cable/preform",
    investmentLens: "长飞光纤更偏 AI 数据中心园区和区域互联的底层布线资源，弹性不如光模块，但具备网络基础设施属性。",
    valueDrivers: ["光纤预制棒", "光纤光缆", "数据中心布线", "海外项目"],
    watchKpis: ["光纤价格", "海外收入", "数据中心客户", "产能利用率"],
    frictionPoints: ["电信 capex 周期", "价格竞争", "项目节奏", "需求弹性较弱"],
    catalysts: ["园区互联建设", "数据中心布线升级", "海外通信项目"],
    peers: ["Hengtong Optic-Electric", "Corning", "Zhongji Innolight"]
  },
  "Hengtong Optic-Electric": {
    rank: "光电基础设施",
    capexNode: "Optical cable + power cable + energy interconnect",
    investmentLens: "亨通光电横跨通信光缆和电力连接，适合放在 AI 数据中心园区建设、光电连接和能源互联的交叉位置。",
    valueDrivers: ["光纤光缆", "电力电缆", "海缆", "园区连接"],
    watchKpis: ["通信业务收入", "海缆/电力订单", "毛利率", "海外项目"],
    frictionPoints: ["电信周期", "原材料", "项目执行", "海外政策"],
    catalysts: ["数据中心园区建设", "能源互联投资", "海外通信项目"],
    peers: ["YOFC", "Corning", "NextEra Energy"]
  },
  "TFC Communication": {
    rank: "光器件/光引擎部件",
    capexNode: "Optical components + optical engine packaging",
    investmentLens: "天孚通信卡在高速光模块的精密部件和光引擎封装，AI 网络速率迁移会提高上游器件价值量。",
    valueDrivers: ["光器件", "光引擎部件", "高速模块配套", "客户认证"],
    watchKpis: ["高速产品占比", "毛利率", "海外客户", "产能扩张"],
    frictionPoints: ["客户集中", "良率", "价格压力", "速率迁移"],
    catalysts: ["1.6T 光模块放量", "CPO/硅光封装演进", "海外客户扩张"],
    peers: ["Coherent", "Lumentum", "Yuanjie Semiconductor", "Broadex Technologies"]
  },
  "Broadex Technologies": {
    rank: "光器件/模块交界",
    capexNode: "PLC splitter/optical components/modules",
    investmentLens: "博创科技处在光器件到光模块的交界位置，弹性取决于高速数据中心产品认证和客户突破。",
    valueDrivers: ["光器件", "光模块", "PLC 分路器", "高速产品导入"],
    watchKpis: ["数据中心产品收入", "毛利率", "客户认证", "产能利用率"],
    frictionPoints: ["电信周期", "价格竞争", "高速模块认证", "客户集中"],
    catalysts: ["AI 光模块需求", "新客户导入", "光器件升级"],
    peers: ["TFC Communication", "Eoptolink", "Accelink Technologies"]
  },
  "Yuanjie Semiconductor": {
    rank: "国产光芯片弹性",
    capexNode: "Laser chips/datacom optical chips",
    investmentLens: "源杰科技是光芯片国产化弹性标的，核心看高速激光器芯片良率、客户认证和能否进入 AI 数据中心模块 BOM。",
    valueDrivers: ["激光器芯片", "高速光芯片", "国产替代", "数据中心客户"],
    watchKpis: ["高端芯片收入", "良率", "客户认证", "研发投入"],
    frictionPoints: ["高端良率", "价格竞争", "认证周期", "需求波动"],
    catalysts: ["800G/1.6T 光芯片需求", "国产化验证", "新客户量产"],
    peers: ["Lumentum", "Coherent", "Sanan Optoelectronics", "AXT"]
  },
  "Applied Optoelectronics": {
    rank: "美国光模块高弹性",
    capexNode: "Datacenter optical modules/lasers",
    investmentLens: "AAOI 是数据中心光模块高 beta 标的，AI 网络拉货时弹性大，但客户集中、价格和良率风险也高。",
    valueDrivers: ["数据中心光模块", "激光器", "垂直整合", "云客户"],
    watchKpis: ["数据中心收入", "客户集中度", "毛利率", "库存"],
    frictionPoints: ["客户集中", "价格竞争", "良率", "产品代际切换"],
    catalysts: ["AI 光模块订单", "新客户认证", "高速产品放量"],
    peers: ["Coherent", "Lumentum", "Fabrinet", "Zhongji Innolight"]
  },
  Corning: {
    rank: "数据中心光纤布线",
    capexNode: "Optical fiber/cabling/connectivity",
    investmentLens: "Corning 在 AI 基础设施里的位置是光纤、布线和连接材料，弹性低于模块厂，但更接近长期园区网络建设。",
    valueDrivers: ["光纤", "数据中心布线", "连接系统", "玻璃材料"],
    watchKpis: ["光通信收入", "数据中心项目", "毛利率", "电信周期"],
    frictionPoints: ["显示玻璃周期", "电信 capex", "价格竞争", "项目节奏"],
    catalysts: ["AI 园区布线", "多数据中心互联", "高速连接系统升级"],
    peers: ["YOFC", "Hengtong Optic-Electric", "Amphenol"]
  },
  AXT: {
    rank: "化合物半导体材料",
    capexNode: "InP/GaAs substrate",
    investmentLens: "AXT 卡在光芯片材料端，InP/GaAs 衬底质量会影响激光器、探测器和高端光器件良率。",
    valueDrivers: ["InP 衬底", "GaAs 衬底", "光芯片材料", "激光器供应链"],
    watchKpis: ["InP/GaAs 收入", "客户认证", "毛利率", "材料良率"],
    frictionPoints: ["材料周期", "客户集中", "价格", "良率"],
    catalysts: ["光芯片需求", "InP/GaAs 材料升级", "高速光模块放量"],
    peers: ["Sanan Optoelectronics", "Yuanjie Semiconductor", "Coherent"]
  },
  Adobe: {
    rank: "版权安全生成式媒体",
    capexNode: "Firefly + Creative Cloud + enterprise content workflow",
    investmentLens: "Adobe 的 AI 价值不在通用模型领先，而在把版权安全生成式媒体嵌入创意工作流和企业内容供应链。",
    valueDrivers: ["Firefly 使用量", "Creative Cloud 续费", "企业内容生成", "版权安全数据"],
    watchKpis: ["生成式积分消耗", "订阅 ARPU", "企业客户采用", "创意软件留存"],
    frictionPoints: ["生成式 AI 价格压力", "版权诉讼", "创作者反弹", "模型同质化"],
    catalysts: ["Firefly 商业化", "GenStudio 企业内容流", "视频生成/设计 Agent"],
    peers: ["Canva", "OpenAI", "Runway", "Autodesk"]
  },
  MongoDB: {
    rank: "AI 应用数据层",
    capexNode: "Atlas + Vector Search + document database",
    investmentLens: "MongoDB 受益于 AI 应用需要灵活 schema、向量检索和事务数据连接，但必须证明 Atlas 能从开发者心智转成企业 AI 消费。",
    valueDrivers: ["Atlas 增长", "Vector Search", "开发者采用", "应用数据层"],
    watchKpis: ["Atlas 收入占比", "净留存", "向量搜索客户", "企业消费增速"],
    frictionPoints: ["云数据库竞争", "向量数据库替代", "消费优化", "开源替代"],
    catalysts: ["AI 应用构建", "Agent 数据层", "企业 RAG 项目"],
    peers: ["Snowflake", "Databricks", "Elastic", "PostgreSQL ecosystem"]
  },
  Elastic: {
    rank: "搜索+可观测数据平台",
    capexNode: "Hybrid search + RAG + observability/security data",
    investmentLens: "Elastic 的投研重点是搜索、日志和安全数据能否在企业 RAG 与 AI 运维中重新定价。",
    valueDrivers: ["混合检索", "RAG 使用", "Elastic Cloud", "安全/可观测数据"],
    watchKpis: ["Cloud 收入", "搜索业务增长", "安全客户", "RAG 项目数"],
    frictionPoints: ["云厂商竞争", "开源替代", "销售执行", "预算周期"],
    catalysts: ["企业 RAG", "AI 可观测", "安全数据平台整合"],
    peers: ["Datadog", "MongoDB", "Snowflake", "Splunk"]
  },
  Glean: {
    rank: "企业权限感知搜索",
    capexNode: "Enterprise search + connectors + knowledge graph",
    investmentLens: "Glean 卡在企业 Agent 的前置入口：先安全找到人、文档、系统和权限边界，再谈自动执行。",
    valueDrivers: ["权限连接器", "企业搜索", "知识图谱", "Agent 工作流"],
    watchKpis: ["企业客户", "连接器数量", "搜索/Agent 使用", "续费率"],
    frictionPoints: ["微软/谷歌竞争", "连接器维护", "数据权限复杂度", "预算周期"],
    catalysts: ["企业搜索升级", "权限感知 RAG", "Agent 工作流落地"],
    peers: ["Microsoft", "Google", "Snowflake", "Elastic"]
  },
  Confluent: {
    rank: "实时数据流底座",
    capexNode: "Kafka/Confluent Cloud + event-driven agent pipeline",
    investmentLens: "Agent 要进入生产系统，不能只读静态知识库，还要接入实时事件流、数据契约和业务触发器。",
    valueDrivers: ["Confluent Cloud", "Kafka 生态", "连接器", "事件驱动 Agent"],
    watchKpis: ["Cloud 收入", "消费增长", "客户扩张", "连接器采用"],
    frictionPoints: ["开源替代", "云厂商托管 Kafka", "消费增速", "销售执行"],
    catalysts: ["实时数据管道", "Agent 事件触发", "企业系统集成"],
    peers: ["Databricks", "Snowflake", "MongoDB", "AWS"]
  },
  "Hugging Face": {
    rank: "开源模型分发入口",
    capexNode: "Model hub + datasets + evaluation/community",
    investmentLens: "Hugging Face 是开源模型生态的默认入口之一，价值在企业选型、评测、部署协作和社区分发。",
    valueDrivers: ["模型下载", "数据集生态", "企业协作", "评测工具"],
    watchKpis: ["企业客户", "社区活跃", "模型/数据集数量", "Spaces/Inference 使用"],
    frictionPoints: ["商业化", "云厂商复制", "版权合规", "社区治理"],
    catalysts: ["开源模型扩张", "企业模型协作", "评测/数据集需求"],
    peers: ["GitHub", "Databricks", "Scale AI", "OpenAI"]
  },
  "Scale AI": {
    rank: "高质量数据与评测",
    capexNode: "Data labeling + RLHF + evaluation data",
    investmentLens: "Scale AI 的核心是把人类偏好、专家数据和评测集变成模型后训练的稀缺输入，尤其适合政府和前沿模型客户。",
    valueDrivers: ["RLHF 数据", "评测数据", "政府 AI", "专家标注"],
    watchKpis: ["大客户项目", "政府收入", "数据质量", "交付速度"],
    frictionPoints: ["客户集中", "平台内化", "劳动力成本", "质量控制"],
    catalysts: ["reasoning 数据需求", "红队评测", "政府 AI 项目"],
    peers: ["Surge AI", "Snorkel AI", "Hugging Face"]
  },
  Perplexity: {
    rank: "AI 搜索答案引擎",
    capexNode: "Answer engine + cited search + browsing agent",
    investmentLens: "Perplexity 押注搜索从关键词广告迁移到引用式答案，核心是实时检索质量、推理成本和分发。",
    valueDrivers: ["引用式答案", "消费分发", "企业搜索", "浏览 Agent"],
    watchKpis: ["活跃用户", "订阅收入", "查询成本", "引用质量"],
    frictionPoints: ["版权", "搜索巨头反击", "货币化", "推理成本"],
    catalysts: ["答案引擎增长", "浏览 Agent", "企业版搜索"],
    peers: ["Google", "OpenAI", "Microsoft", "Glean"]
  },
  Abridge: {
    rank: "医疗 Ambient AI",
    capexNode: "Clinical documentation + EHR integration",
    investmentLens: "Abridge 的研究重点是医疗文书自动化的明确 ROI，但准确率、合规和 EHR 集成决定放量速度。",
    valueDrivers: ["医生节省时间", "医疗机构客户", "EHR 集成", "临床语音数据"],
    watchKpis: ["医院客户数", "文书节省时间", "准确率", "EHR 覆盖"],
    frictionPoints: ["医疗合规", "责任风险", "销售周期", "集成复杂度"],
    catalysts: ["Ambient AI 采用", "医生效率预算", "医疗系统规模部署"],
    peers: ["Nuance/Microsoft", "Suki", "Nabla", "OpenAI"]
  },
  Harvey: {
    rank: "法律专业 Agent",
    capexNode: "Legal AI assistant + document workflow",
    investmentLens: "Harvey 卡在高价值法律知识工作流，价值来自专业场景深度和头部律所信任，但幻觉责任边界极敏感。",
    valueDrivers: ["律所客户", "法律文档工作流", "专业数据", "审阅/起草效率"],
    watchKpis: ["客户扩张", "使用时长", "文档准确率", "企业合同"],
    frictionPoints: ["幻觉责任", "数据授权", "客户集中", "平台竞争"],
    catalysts: ["法律研究自动化", "专业 Agent", "企业法务采用"],
    peers: ["Thomson Reuters", "LexisNexis", "OpenAI", "Cohere"]
  },
  Sierra: {
    rank: "客服 Agent 平台",
    capexNode: "Customer agent + system integration + HITL",
    investmentLens: "Sierra 处在 Agent 商业化最明确的客服场景，关键是自动化率、升级机制和品牌一致性。",
    valueDrivers: ["客服自动化", "品牌交互设计", "企业系统集成", "HITL 运营"],
    watchKpis: ["客户数量", "自动化率", "升级率", "客户 ROI"],
    frictionPoints: ["幻觉", "集成成本", "CRM 平台竞争", "行动边界"],
    catalysts: ["客服 Agent 放量", "企业系统连接", "自动化率提升"],
    peers: ["Salesforce", "ServiceNow", "Intercom", "Zendesk"]
  },
  Intuit: {
    rank: "财税信任数据入口",
    capexNode: "Tax/accounting agent + SMB workflow",
    investmentLens: "Intuit 的 AI 机会在高信任财税和小企业数据闭环，模型能力如果转成报税、记账和现金流建议，可提升 ARPU。",
    valueDrivers: ["TurboTax AI", "QuickBooks AI", "SMB 数据", "信任品牌"],
    watchKpis: ["ARPU", "SMB 留存", "AI 功能采用", "税季转化"],
    frictionPoints: ["监管", "客户信任", "数据隐私", "软件替代"],
    catalysts: ["Intuit Assist", "财税 Agent", "SMB 自动化"],
    peers: ["H&R Block", "Xero", "Block", "Salesforce"]
  },
  Piotech: {
    rank: "国产沉积设备",
    capexNode: "PECVD/ALD/CVD deposition equipment",
    investmentLens: "拓荆科技受益于中国晶圆厂设备国产化，沉积步骤在逻辑、存储和先进封装中都会增加。",
    valueDrivers: ["沉积设备订单", "客户验证", "国产替代", "先进封装/存储需求"],
    watchKpis: ["设备订单", "客户验收", "毛利率", "高端工艺进展"],
    frictionPoints: ["技术验证", "客户集中", "国际竞争", "半导体周期"],
    catalysts: ["本土晶圆厂 capex", "沉积设备国产替代", "先进封装扩产"],
    peers: ["NAURA Technology", "AMEC", "Applied Materials", "ASM International"]
  },
  "Tongfu Microelectronics": {
    rank: "国产 Chiplet 封测",
    capexNode: "OSAT + Chiplet packaging + high-performance test",
    investmentLens: "通富微电的价值在国产高性能芯片后道承接能力，Chiplet 和 AI 芯片需求会提高先进封测战略位置。",
    valueDrivers: ["Chiplet 封装", "CPU/GPU 客户", "先进封装产能", "国产替代"],
    watchKpis: ["先进封装收入", "客户结构", "毛利率", "产能利用率"],
    frictionPoints: ["客户集中", "良率爬坡", "价格竞争", "周期"],
    catalysts: ["国产 AI 芯片后道", "Chiplet 需求", "先进封装扩产"],
    peers: ["JCET Group", "ASE Technology", "Amkor", "TSMC"]
  },
  "Mistral AI": {
    rank: "欧洲主权 AI",
    capexNode: "Efficient models + enterprise/private deployment",
    investmentLens: "Mistral 的差异化在欧洲主权 AI、高效模型和企业部署选项，适合受监管客户寻找美国平台之外的选择。",
    valueDrivers: ["开放/商业模型", "欧洲政府企业客户", "推理效率", "私有部署"],
    watchKpis: ["企业客户", "API 使用", "模型能力", "融资/算力"],
    frictionPoints: ["前沿模型差距", "算力成本", "美国平台竞争", "商业化"],
    catalysts: ["欧洲主权 AI", "企业私有部署", "高效模型迭代"],
    peers: ["OpenAI", "Anthropic", "Cohere", "DeepSeek"]
  },
  Cohere: {
    rank: "企业检索增强模型",
    capexNode: "Command + Embed + Rerank + private deployment",
    investmentLens: "Cohere 更像企业模型基础设施公司，价值在 RAG/Rerank、私有部署和多语言企业场景。",
    valueDrivers: ["Rerank/Embed", "金融/政府客户", "私有部署", "多语言模型"],
    watchKpis: ["企业合同", "Rerank 使用", "私有部署项目", "模型成本"],
    frictionPoints: ["模型竞争", "分发弱", "销售周期", "算力成本"],
    catalysts: ["企业 RAG", "数据边界需求", "垂直模型部署"],
    peers: ["Mistral AI", "Anthropic", "Databricks", "Snowflake"]
  },
  "Snorkel AI": {
    rank: "企业数据中心 AI",
    capexNode: "Programmatic labeling + data governance",
    investmentLens: "Snorkel 的价值在把企业内部数据变成可训练、可评测、可治理资产，适合私有数据和弱监督场景。",
    valueDrivers: ["数据编程", "弱监督", "企业数据标注", "模型治理"],
    watchKpis: ["企业客户", "数据集构建效率", "模型质量提升", "续费"],
    frictionPoints: ["客户数据成熟度", "平台竞争", "销售周期", "ROI 验证"],
    catalysts: ["企业数据治理", "私有模型训练", "数据中心 AI"],
    peers: ["Scale AI", "Surge AI", "Databricks", "Palantir"]
  },
  "Surge AI": {
    rank: "高质量偏好数据",
    capexNode: "RLHF/data labeling/model evaluation",
    investmentLens: "Surge AI 处在 reasoning 和 Agent 数据需求上升的入口，复杂任务轨迹和偏好数据会提高标注价值。",
    valueDrivers: ["高质量标注", "偏好数据", "专家数据", "模型评测"],
    watchKpis: ["数据质量", "大客户项目", "交付速度", "客户集中度"],
    frictionPoints: ["平台内化", "劳动力成本", "质量控制", "客户集中"],
    catalysts: ["Reasoning 数据需求", "Agent 轨迹评测", "红队数据"],
    peers: ["Scale AI", "Snorkel AI", "Hugging Face"]
  },
  Anysphere: {
    rank: "AI 编程 IDE 入口",
    capexNode: "Cursor + repo context + developer workflow",
    investmentLens: "Cursor 的价值在开发者高频入口和代码上下文工程，能否从个人工具变成企业研发平台是关键。",
    valueDrivers: ["开发者留存", "企业席位", "Repo 上下文", "AI 编程体验"],
    watchKpis: ["活跃开发者", "企业客户", "模型成本", "任务完成率"],
    frictionPoints: ["平台复制", "模型成本", "企业安全", "开发者留存"],
    catalysts: ["Cursor 企业化", "Repo Agent", "AI 编程工作流"],
    peers: ["GitHub Copilot", "Replit", "Cognition", "JetBrains"]
  },
  Replit: {
    rank: "低门槛应用生成",
    capexNode: "Online IDE + Agent + deployment",
    investmentLens: "Replit 把 Vibe Coding、在线 IDE 和部署连在一起，面向长尾创业和内部工具场景。",
    valueDrivers: ["Agent 使用", "在线 IDE", "一键部署", "开发者社区"],
    watchKpis: ["部署数", "Agent 使用", "开发者留存", "云成本"],
    frictionPoints: ["云成本", "平台竞争", "留存", "企业安全"],
    catalysts: ["Vibe Coding 普及", "长尾应用生成", "Agent 部署闭环"],
    peers: ["Anysphere", "GitHub", "Cognition", "Vercel"]
  },
  Atlassian: {
    rank: "研发协作 Agent",
    capexNode: "Jira/Confluence + Rovo + team knowledge",
    investmentLens: "Atlassian 的 AI 机会在 issue、文档和团队知识流，Rovo 能否提升研发协作效率和云订阅价值是关键。",
    valueDrivers: ["Jira/Confluence 数据", "Rovo", "云迁移", "研发工作流"],
    watchKpis: ["Cloud 迁移", "Rovo 使用", "席位增长", "企业续费"],
    frictionPoints: ["微软竞争", "AI 付费意愿", "云迁移执行", "SMB 周期"],
    catalysts: ["研发 Agent", "知识工作流自动化", "企业协作升级"],
    peers: ["Microsoft", "GitHub", "ServiceNow", "Asana"]
  },
  ABB: {
    rank: "电气化+工业机器人",
    capexNode: "Electrification + robotics + motion control",
    investmentLens: "ABB 同时暴露在 AI 数据中心电气化和工业机器人链条，价值来自电气设备、运动控制和自动化项目。",
    valueDrivers: ["电气化订单", "机器人业务", "Motion 控制", "工业自动化服务"],
    watchKpis: ["Electrification 订单", "Robotics 订单", "服务收入", "毛利率"],
    frictionPoints: ["工业周期", "项目执行", "竞争", "区域需求"],
    catalysts: ["AI 数据中心配电", "工厂自动化", "机器人更新周期"],
    peers: ["Schneider Electric", "Siemens", "Yaskawa", "Fanuc"]
  },
  Keyence: {
    rank: "机器视觉和工业传感",
    capexNode: "Machine vision + sensors + factory automation",
    investmentLens: "Keyence 是机器人和工业 AI 的眼睛，价值在高毛利传感/视觉产品和直销能力。",
    valueDrivers: ["机器视觉", "工业传感", "测量系统", "高毛利直销"],
    watchKpis: ["传感器收入", "机器视觉需求", "毛利率", "海外增长"],
    frictionPoints: ["估值", "制造周期", "竞争", "客户预算"],
    catalysts: ["视觉检测自动化", "AI 工厂", "机器人感知需求"],
    peers: ["Omron", "Cognex", "SICK", "Fanuc"]
  },
  Fanuc: {
    rank: "工业机器人/CNC 底座",
    capexNode: "Industrial robots + CNC + servo",
    investmentLens: "Fanuc 的价值在传统工业机器人、CNC 和伺服系统的高可靠硬件底座，AI 视觉和规划会提升柔性制造需求。",
    valueDrivers: ["工业机器人", "CNC", "伺服系统", "服务收入"],
    watchKpis: ["机器人订单", "CNC 需求", "服务收入", "毛利率"],
    frictionPoints: ["汽车/电子周期", "中国竞争", "软件转型", "需求波动"],
    catalysts: ["柔性制造", "工业机器人更新", "CNC 周期改善"],
    peers: ["Yaskawa", "ABB", "Keyence", "Estun Automation"]
  },
  Yaskawa: {
    rank: "伺服与运动控制",
    capexNode: "Motoman robots + servo drives + motion control",
    investmentLens: "Yaskawa 连接工业机器人和运动控制，具身智能进入工厂前，现有伺服/控制系统仍是现实落地底座。",
    valueDrivers: ["Motoman 机器人", "伺服驱动", "运动控制", "工厂自动化"],
    watchKpis: ["机器人订单", "伺服收入", "中国需求", "毛利率"],
    frictionPoints: ["工业周期", "中国竞争", "价格压力", "软件生态"],
    catalysts: ["制造自动化复苏", "机器人换代", "AI 视觉/规划融合"],
    peers: ["Fanuc", "ABB", "Omron", "Inovance"]
  },
  Ajinomoto: {
    rank: "ABF 材料闸门",
    capexNode: "Ajinomoto Build-up Film for IC substrates",
    investmentLens: "Ajinomoto 的 ABF 是高端 IC 载板关键材料，AI 加速器封装面积扩大时，材料认证和供给稳定性会被重新定价。",
    valueDrivers: ["ABF 材料", "高端 IC 载板", "客户认证", "封装面积扩张"],
    watchKpis: ["ABF 需求", "载板客户", "材料认证", "价格趋势"],
    frictionPoints: ["替代材料", "载板周期", "客户集中", "扩产节奏"],
    catalysts: ["AI 加速器封装面积增长", "ABF 供需紧张", "高端载板扩产"],
    peers: ["Ibiden", "Unimicron", "Shinko Electric", "Resonac"]
  },
  Apptronik: {
    rank: "人形机器人本体",
    capexNode: "Apollo humanoid + manufacturing/logistics pilots",
    investmentLens: "Apptronik 的价值在通用人形机器人本体和产业合作，重点看制造/物流试点能否转成可复制部署。",
    valueDrivers: ["Apollo 本体", "产业合作", "制造场景", "供应链定点"],
    watchKpis: ["试点客户", "BOM 成本", "任务覆盖", "量产节奏"],
    frictionPoints: ["可靠性", "成本", "安全认证", "融资依赖"],
    catalysts: ["制造试点", "模型/本体协同", "供应链定点"],
    peers: ["Figure AI", "Agility Robotics", "Boston Dynamics", "Unitree"]
  },
  "Boston Dynamics": {
    rank: "机器人运动控制标杆",
    capexNode: "Atlas/Spot/Stretch + industrial robotics",
    investmentLens: "Boston Dynamics 的壁垒在动态控制和本体工程，商业化关键是从技术展示转向巡检、仓储和工业场景收入。",
    valueDrivers: ["运动控制", "移动机器人", "工业巡检", "仓储自动化"],
    watchKpis: ["Spot/Stretch 部署", "商业订单", "续航", "安全事故率"],
    frictionPoints: ["成本", "商业化速度", "母公司战略", "场景扩张"],
    catalysts: ["工业巡检扩容", "Atlas 迭代", "AI 控制栈融合"],
    peers: ["Figure AI", "Agility Robotics", "Apptronik", "Unitree"]
  },
  Cognition: {
    rank: "异步软件工程 Agent",
    capexNode: "Devin + software engineering task execution",
    investmentLens: "Cognition 押注从代码补全升级到 issue 级异步交付，关键是任务成功率、测试闭环和客户信任。",
    valueDrivers: ["任务规划", "代码执行", "测试闭环", "软件外包替代"],
    watchKpis: ["任务成功率", "企业客户", "代码质量", "交付周期"],
    frictionPoints: ["稳定性", "可解释性", "测试环境", "平台竞争"],
    catalysts: ["异步编码 Agent", "企业研发 ROI", "软件工程自动化"],
    peers: ["Anysphere", "Replit", "GitHub Copilot", "OpenAI"]
  },
  Entegris: {
    rank: "高纯材料与污染控制",
    capexNode: "Filtration + specialty chemicals + materials handling",
    investmentLens: "Entegris 受益于先进节点和先进封装对材料纯度、过滤和污染控制的要求提升。",
    valueDrivers: ["高纯材料", "过滤", "化学品处理", "先进制程污染控制"],
    watchKpis: ["先进节点材料收入", "过滤产品", "客户库存", "毛利率"],
    frictionPoints: ["晶圆厂周期", "客户库存", "整合执行", "估值"],
    catalysts: ["先进节点扩产", "HBM/DRAM capex", "污染控制要求提升"],
    peers: ["Merck KGaA", "Shin-Etsu Chemical", "SUMCO", "Applied Materials"]
  },
  "Estun Automation": {
    rank: "国产工业机器人",
    capexNode: "Industrial robots + servo + motion control",
    investmentLens: "埃斯顿处在国产工业机器人和运动控制链条，具身智能真正落地工厂前，传统工业机器人是最现实硬件基础。",
    valueDrivers: ["工业机器人", "伺服系统", "运动控制", "国产替代"],
    watchKpis: ["机器人出货", "伺服收入", "毛利率", "国产份额"],
    frictionPoints: ["工业周期", "盈利能力", "进口替代竞争", "下游需求"],
    catalysts: ["国产替代", "工厂自动化", "机器人订单改善"],
    peers: ["Inovance", "Fanuc", "Yaskawa", "ABB"]
  },
  Foxconn: {
    rank: "AI 制造总包",
    capexNode: "AI server assembly + robotics manufacturing",
    investmentLens: "Foxconn 的价值在全球制造组织能力，AI 服务器和机器人量产都需要整机组装、测试、供应链和区域交付。",
    valueDrivers: ["AI 服务器组装", "全球制造", "供应链弹性", "机器人量产"],
    watchKpis: ["AI server 收入", "云客户订单", "产能布局", "毛利率"],
    frictionPoints: ["低毛利", "客户集中", "地缘", "平台切换"],
    catalysts: ["AI 服务器扩产", "云客户拉货", "机器人制造"],
    peers: ["Quanta Computer", "Wistron", "Wiwynn", "Foxconn Industrial Internet"]
  },
  "Foxconn Industrial Internet": {
    rank: "AI 服务器+智能制造",
    capexNode: "AI server manufacturing + industrial internet",
    investmentLens: "工业富联是中国 AI 服务器制造和智能工厂代表，价值来自服务器订单、工业数据和自动化制造能力。",
    valueDrivers: ["AI 服务器制造", "工业互联网", "智能工厂", "云客户"],
    watchKpis: ["AI server 收入", "工业互联网收入", "毛利率", "客户集中度"],
    frictionPoints: ["制造毛利率", "客户集中", "周期", "地缘"],
    catalysts: ["AI 服务器订单", "智能工厂改造", "机器人制造"],
    peers: ["Foxconn", "Inspur Information", "Quanta Computer", "Wistron"]
  },
  GigaDevice: {
    rank: "边缘控制芯片",
    capexNode: "Nor Flash + MCU + embedded control",
    investmentLens: "兆易创新连接机器人和工业控制的外围芯片需求，端侧 AI 放量会提高 MCU、存储和控制芯片重要性。",
    valueDrivers: ["MCU", "Nor Flash", "工业控制", "机器人外围"],
    watchKpis: ["MCU 收入", "Nor Flash 价格", "工业客户", "毛利率"],
    frictionPoints: ["消费/工业周期", "价格竞争", "库存", "高端突破"],
    catalysts: ["工业控制复苏", "端侧设备升级", "机器人外围需求"],
    peers: ["MediaTek", "Qualcomm", "GlobalFoundries", "Arm"]
  },
  GlobalFoundries: {
    rank: "成熟特色工艺代工",
    capexNode: "RF/analog/specialty foundry for edge AI",
    investmentLens: "AI 不只需要先进节点，传感、连接、电源管理和边缘控制芯片依赖成熟特色工艺。",
    valueDrivers: ["RF SOI", "模拟/电源", "汽车工业客户", "区域供应链安全"],
    watchKpis: ["产能利用率", "长期协议", "汽车/工业收入", "毛利率"],
    frictionPoints: ["成熟制程周期", "客户库存", "价格压力", "先进节点缺位"],
    catalysts: ["汽车/工业复苏", "边缘芯片需求", "长期供货协议"],
    peers: ["UMC", "SMIC", "TSMC", "GigaDevice"]
  },
  GlobalWafers: {
    rank: "区域化硅片供给",
    capexNode: "Silicon wafers + specialty wafers",
    investmentLens: "GlobalWafers 受益于晶圆材料区域化和长期协议，但硅片行业仍高度受库存与产能周期影响。",
    valueDrivers: ["硅片产能", "区域供应链", "特色晶圆", "长期协议"],
    watchKpis: ["硅片收入", "区域产能", "产能利用率", "价格"],
    frictionPoints: ["硅片周期", "扩产回报", "客户库存", "价格竞争"],
    catalysts: ["区域晶圆厂建设", "成熟制程复苏", "本地化供应链"],
    peers: ["SUMCO", "Shin-Etsu Chemical", "GlobalFoundries"]
  },
  "Harmonic Drive Systems": {
    rank: "谐波减速器瓶颈",
    capexNode: "Harmonic reducer + precision gearing",
    investmentLens: "Harmonic Drive 卡在机器人关节精密传动，轻量化人形机器人放量会放大减速器成本、寿命和良率约束。",
    valueDrivers: ["谐波减速器", "机器人关节", "客户认证", "精密制造"],
    watchKpis: ["机器人订单", "产能利用率", "良率", "价格趋势"],
    frictionPoints: ["国产替代", "价格竞争", "机器人需求节奏", "产能周期"],
    catalysts: ["人形机器人 BOM 定点", "关节模组需求", "产能扩张"],
    peers: ["Nabtesco", "Sanhua Intelligent Controls", "Inovance", "Estun Automation"]
  },
  iFlytek: {
    rank: "中文语音与教育 AI",
    capexNode: "SparkDesk + speech AI + education/government apps",
    investmentLens: "科大讯飞的价值在中文语音、教育和政企场景，模型能力要转化为高频应用和可续费项目。",
    valueDrivers: ["中文语音", "教育 AI", "政企客户", "星火模型"],
    watchKpis: ["星火使用", "教育 AI 收入", "政企项目", "语音能力"],
    frictionPoints: ["项目制", "模型竞争", "盈利能力", "监管"],
    catalysts: ["讯飞星火", "教育 AI", "语音 Agent"],
    peers: ["Baidu", "Zhipu AI", "Kingsoft Office", "SenseTime"]
  },
  Lenovo: {
    rank: "端云硬件入口",
    capexNode: "AI PC + enterprise server + edge AI",
    investmentLens: "联想的 AI 价值在企业服务器、边缘设备和 AI PC 的端云协同，但低毛利硬件属性限制估值弹性。",
    valueDrivers: ["AI PC", "企业服务器", "边缘 AI", "全球渠道"],
    watchKpis: ["ISG 收入", "AI 服务器订单", "AI PC 渗透", "毛利率"],
    frictionPoints: ["PC 周期", "服务器毛利率", "竞争", "地缘"],
    catalysts: ["AI PC 更新", "企业 AI 服务器", "边缘推理"],
    peers: ["Dell Technologies", "HPE", "Inspur Information", "Supermicro"]
  },
  "Lite-On": {
    rank: "AI 服务器电源配套",
    capexNode: "Server PSU + power modules + optoelectronics",
    investmentLens: "Lite-On 处在 AI 服务器功耗提升后的电源供应链，弹性来自 PSU、BBU 和电力转换价值量上升。",
    valueDrivers: ["服务器电源", "AI PSU", "光电元件", "电力转换"],
    watchKpis: ["服务器电源收入", "AI 客户", "毛利率", "库存"],
    frictionPoints: ["竞争", "客户集中", "库存周期", "价格压力"],
    catalysts: ["AI 服务器功耗提升", "BBU/PSU 升级", "整柜电力架构"],
    peers: ["Delta Electronics", "Vertiv", "Eaton", "AcBel"]
  },
  MediaTek: {
    rank: "低功耗端侧 AI",
    capexNode: "Mobile/edge SoC + NPU + connectivity",
    investmentLens: "MediaTek 的 AI 机会在低成本端侧 SoC、连接和边缘计算，适合轻量机器人、手机和 IoT AI 场景。",
    valueDrivers: ["端侧 AI SoC", "NPU", "连接芯片", "消费设备规模"],
    watchKpis: ["手机份额", "端侧 AI SoC", "边缘客户", "毛利率"],
    frictionPoints: ["消费电子周期", "价格竞争", "高端份额", "客户集中"],
    catalysts: ["端侧 AI 换机", "边缘设备升级", "轻量机器人平台"],
    peers: ["Qualcomm", "Apple", "Arm", "GigaDevice"]
  },
  "Merck KGaA": {
    rank: "欧洲电子材料平台",
    capexNode: "Semiconductor chemicals + electronic materials",
    investmentLens: "Merck KGaA 受益于先进制程对前驱体、介电材料、光刻和清洗材料复杂度提升。",
    valueDrivers: ["电子材料", "半导体化学品", "特种材料", "客户认证"],
    watchKpis: ["电子材料收入", "先进节点客户", "毛利率", "新材料认证"],
    frictionPoints: ["欧洲成本", "材料认证周期", "客户周期", "汇率"],
    catalysts: ["先进材料需求", "前驱体/清洗材料升级", "客户去库存结束"],
    peers: ["Entegris", "Shin-Etsu Chemical", "Resonac", "JSR"]
  },
  Modine: {
    rank: "数据中心热交换",
    capexNode: "Heat exchangers + data center cooling",
    investmentLens: "Modine 是 AI 数据中心热管理外溢标的，液冷并不消灭热交换和冷却系统，反而提高系统复杂度。",
    valueDrivers: ["数据中心冷却", "热交换", "液冷配套", "订单增长"],
    watchKpis: ["数据中心冷却收入", "订单", "毛利率", "产能"],
    frictionPoints: ["项目周期", "竞争", "工业周期", "交付能力"],
    catalysts: ["高密机柜改造", "液冷配套", "数据中心冷却需求"],
    peers: ["Vertiv", "CoolIT Systems", "Carrier", "Trane Technologies"]
  },
  "Moonshot AI": {
    rank: "中国长上下文消费 AI",
    capexNode: "Kimi + long context + AI search/assistant",
    investmentLens: "月之暗面的价值在长上下文产品心智和消费入口，关键是用户留存、推理成本和商业化。",
    valueDrivers: ["Kimi", "长上下文", "AI 搜索", "消费 AI"],
    watchKpis: ["用户增长", "长上下文使用", "订阅/商业化", "推理成本"],
    frictionPoints: ["消费留存", "模型成本", "竞争", "商业化"],
    catalysts: ["Kimi 迭代", "AI 搜索", "长文档工作流"],
    peers: ["DeepSeek", "Zhipu AI", "Baidu", "ByteDance"]
  },
  Nabtesco: {
    rank: "RV 减速器核心供应",
    capexNode: "RV reducer + high-load precision gearing",
    investmentLens: "Nabtesco 在工业机器人和高负载关节传动中具备高可靠壁垒，受益机器人更新和高负载本体需求。",
    valueDrivers: ["RV 减速器", "工业机器人", "高负载关节", "精密机械"],
    watchKpis: ["RV 减速器订单", "工业机器人景气", "毛利率", "份额"],
    frictionPoints: ["工业周期", "中国替代", "价格压力", "需求波动"],
    catalysts: ["工业机器人更新", "高负载本体需求", "制造自动化复苏"],
    peers: ["Harmonic Drive Systems", "Yaskawa", "Fanuc", "Estun Automation"]
  },
  Omron: {
    rank: "工厂自动化控制层",
    capexNode: "Factory automation + sensors + controllers",
    investmentLens: "Omron 把传感器、控制器和自动化系统接入产线，AI 工厂需要这类控制层承接模型和业务系统。",
    valueDrivers: ["工厂自动化", "传感器", "控制器", "机器人集成"],
    watchKpis: ["FA 收入", "传感器订单", "控制器份额", "利润率"],
    frictionPoints: ["工业周期", "竞争", "利润率", "地区需求"],
    catalysts: ["产线智能化", "传感控制升级", "机器人集成"],
    peers: ["Keyence", "Yaskawa", "Fanuc", "Inovance"]
  },
  Resonac: {
    rank: "日本后道材料链",
    capexNode: "Packaging materials + backend materials",
    investmentLens: "Resonac 受益于 Chiplet、HBM 和先进封装后道材料复杂度上升，是日本材料链重估的一环。",
    valueDrivers: ["封装材料", "后道材料", "电子材料", "先进封装客户"],
    watchKpis: ["封装材料收入", "先进封装客户", "毛利率", "产品组合"],
    frictionPoints: ["材料周期", "客户验证", "价格压力", "竞争"],
    catalysts: ["先进封装放量", "HBM 后道材料", "日本材料链重估"],
    peers: ["Ajinomoto", "Shin-Etsu Chemical", "Merck KGaA", "Entegris"]
  },
  RoboSense: {
    rank: "机器人/车载 LiDAR",
    capexNode: "LiDAR + perception solutions",
    investmentLens: "速腾聚创处在机器人和智能驾驶感知硬件链，核心看车载定点转量产、毛利率和机器人客户外溢。",
    valueDrivers: ["LiDAR", "感知方案", "ADAS 定点", "机器人感知"],
    watchKpis: ["车载定点", "LiDAR 出货", "毛利率", "新产品良率"],
    frictionPoints: ["价格竞争", "客户认证", "毛利率", "替代路线"],
    catalysts: ["ADAS 定点转量产", "机器人感知", "新平台认证"],
    peers: ["Hesai", "Horizon Robotics", "Pony AI", "SenseTime"]
  },
  SenseTime: {
    rank: "中国视觉 AI 平台",
    capexNode: "Computer vision + SenseNova + industry AI",
    investmentLens: "商汤的价值在视觉 AI、行业项目和多模态模型，但盈利能力和项目制现金流仍是核心约束。",
    valueDrivers: ["视觉 AI", "多模态", "行业客户", "大装置算力"],
    watchKpis: ["日日新调用", "行业项目", "视觉模型能力", "现金流"],
    frictionPoints: ["盈利能力", "客户预算", "模型竞争", "项目制交付"],
    catalysts: ["多模态视觉", "工业检测", "城市/机器人项目"],
    peers: ["Baidu", "iFlytek", "Horizon Robotics", "RoboSense"]
  },
  "Shin-Etsu Chemical": {
    rank: "硅片与电子材料龙头",
    capexNode: "Silicon wafers + photoresist + electronic materials",
    investmentLens: "信越化学在硅片和电子材料上拥有长认证周期壁垒，先进逻辑和 DRAM/HBM 扩产会拉动高品质材料需求。",
    valueDrivers: ["硅片", "光刻胶", "电子材料", "客户认证"],
    watchKpis: ["硅片出货", "材料毛利率", "客户库存", "先进节点认证"],
    frictionPoints: ["硅片周期", "客户库存", "材料认证", "日元成本"],
    catalysts: ["先进节点扩产", "DRAM/HBM capex", "材料价格修复"],
    peers: ["SUMCO", "GlobalWafers", "Entegris", "Merck KGaA"]
  },
  SUMCO: {
    rank: "300mm 硅片供应",
    capexNode: "300mm silicon wafers + epitaxial wafers",
    investmentLens: "SUMCO 是先进节点和存储晶圆材料供给的关键一环，库存周期和长期协议决定利润弹性。",
    valueDrivers: ["300mm 硅片", "外延片", "先进节点客户", "长期协议"],
    watchKpis: ["300mm 出货", "产能利用率", "价格", "长期协议"],
    frictionPoints: ["硅片价格周期", "客户 capex", "库存", "产能利用率"],
    catalysts: ["晶圆厂扩产", "存储复苏", "长期协议改善"],
    peers: ["Shin-Etsu Chemical", "GlobalWafers", "Entegris"]
  },
  Sungrow: {
    rank: "数据中心储能配套",
    capexNode: "Energy storage + power electronics + PPA support",
    investmentLens: "阳光电源的 AI 机会在储能和电力电子，服务数据中心 PPA、微电网和峰谷调节。",
    valueDrivers: ["储能系统", "逆变器", "电力电子", "海外项目"],
    watchKpis: ["储能收入", "逆变器毛利", "海外项目", "订单"],
    frictionPoints: ["价格竞争", "海外政策", "项目执行", "电池成本"],
    catalysts: ["AI 数据中心储能", "微电网", "可再生 PPA 配套"],
    peers: ["CATL", "Fluence", "NextEra Energy", "Bloom Energy"]
  },
  "TE Connectivity": {
    rank: "高可靠连接器",
    capexNode: "Industrial connectors + sensors + robotics wiring",
    investmentLens: "TE Connectivity 在机器人、汽车和数据中心里提供高可靠连接与传感，价值来自认证、耐热和高电流设计要求。",
    valueDrivers: ["连接器", "传感器", "机器人线束", "汽车/工业客户"],
    watchKpis: ["工业订单", "汽车连接器", "毛利率", "客户认证"],
    frictionPoints: ["工业周期", "汽车周期", "价格竞争", "客户预算"],
    catalysts: ["机器人线束需求", "汽车电子升级", "工业自动化"],
    peers: ["Amphenol", "Molex", "ABB", "Foxconn"]
  },
  UBTECH: {
    rank: "中国人形机器人产品化",
    capexNode: "Walker + service/humanoid robots",
    investmentLens: "优必选的价值在中国本地场景和人形机器人产品化，关键看工厂/服务试点能否形成交付和复购。",
    valueDrivers: ["Walker", "服务机器人", "中国渠道", "本地供应链"],
    watchKpis: ["Walker 订单", "交付数量", "毛利率", "场景复购"],
    frictionPoints: ["盈利能力", "规模化", "产品可靠性", "竞争"],
    catalysts: ["工厂试点", "服务场景扩容", "国产机器人采购"],
    peers: ["Unitree", "Figure AI", "Apptronik", "Agility Robotics"]
  },
  Unitree: {
    rank: "低成本机器人本体",
    capexNode: "Quadruped/humanoid robots + developer ecosystem",
    investmentLens: "宇树的价值在低成本本体和开发者生态，成本下探会扩大数据采集、教育科研和轻工业试点。",
    valueDrivers: ["低成本本体", "四足/人形机器人", "开发者生态", "中国供应链"],
    watchKpis: ["出货量", "单机价格", "开发者数量", "海外销售"],
    frictionPoints: ["安全可靠性", "海外合规", "价格竞争", "商用场景不足"],
    catalysts: ["人形机器人放量", "开发者生态扩张", "轻工业试点"],
    peers: ["UBTECH", "Figure AI", "Boston Dynamics", "Apptronik"]
  },
  VNET: {
    rank: "中国 IDC 中腰部",
    capexNode: "IDC + cloud connect + enterprise data center",
    investmentLens: "世纪互联受益于中国企业私有化和推理部署需求，但负债、利用率和价格竞争限制弹性。",
    valueDrivers: ["IDC", "云连接", "企业云", "合规数据中心"],
    watchKpis: ["机柜利用率", "客户结构", "EBITDA", "负债成本"],
    frictionPoints: ["负债", "竞争", "利用率", "电力和客户预算"],
    catalysts: ["企业 AI 推理", "私有云部署", "合规数据中心需求"],
    peers: ["GDS Holdings", "Equinix", "Digital Realty"]
  },
  Wistron: {
    rank: "AI 服务器制造弹性",
    capexNode: "Server ODM + system integration",
    investmentLens: "Wistron 是 AI 服务器扩产外溢标的，受益整机组装和测试复杂度提升，但价格竞争和客户集中需要跟踪。",
    valueDrivers: ["服务器制造", "整机测试", "全球供应链", "AI 硬件"],
    watchKpis: ["AI server 收入", "客户认证", "毛利率", "产能利用率"],
    frictionPoints: ["客户集中", "价格竞争", "平台切换", "汇率"],
    catalysts: ["AI 服务器制造需求", "新客户导入", "整机测试复杂度提升"],
    peers: ["Quanta Computer", "Wiwynn", "Foxconn", "Supermicro"]
  },
  "Zhipu AI": {
    rank: "中国企业模型",
    capexNode: "GLM + MaaS + government/enterprise private deployment",
    investmentLens: "智谱 AI 代表中国 ToB 模型路线，价值在政企私有化、MaaS 和中文行业模型能力。",
    valueDrivers: ["GLM", "MaaS", "政企客户", "私有化部署"],
    watchKpis: ["政企客户", "MaaS 调用", "私有化项目", "模型能力"],
    frictionPoints: ["模型竞争", "销售周期", "算力成本", "商业化"],
    catalysts: ["政企 AI", "私有化模型", "Agent 工作流"],
    peers: ["DeepSeek", "Moonshot AI", "Baidu", "iFlytek"]
  },
  FormFactor: {
    rank: "先进测试耗材卡点",
    capexNode: "Probe cards + wafer test interface",
    investmentLens: "HBM、Chiplet 和大尺寸 AI 加速器提高晶圆测试复杂度，FormFactor 捕获探针卡和测试接口的良率爬坡价值。",
    valueDrivers: ["HBM 测试复杂度", "先进封装晶圆级测试", "高端探针卡更换频率", "AI 芯片客户验证"],
    watchKpis: ["probe card 订单", "先进封装测试收入", "客户集中度", "毛利率"],
    frictionPoints: ["半导体周期", "客户 capex 波动", "测试时间压缩", "竞争和价格压力"],
    catalysts: ["HBM4 认证", "CoWoS/Chiplet 测试放量", "AI 加速器良率爬坡"],
    peers: ["Advantest", "Teradyne", "KLA", "JCET Group"]
  },
  Sugon: {
    rank: "国产 HPC 与液冷服务器",
    capexNode: "HPC/AI server + liquid-cooling cluster",
    investmentLens: "中科曙光承接中国科研、政企和行业私有 AI 集群需求，价值在国产服务器、HPC 调度和液冷工程能力。",
    valueDrivers: ["国产 AI 服务器", "HPC 集群", "液冷数据中心", "政企科研客户"],
    watchKpis: ["AI 服务器订单", "液冷项目", "政企预算", "毛利率"],
    frictionPoints: ["供应链限制", "项目交付周期", "客户集中", "国产算力生态成熟度"],
    catalysts: ["国产算力集群建设", "科研/政企 AI 项目", "液冷机房改造"],
    peers: ["Inspur Information", "Hygon Information", "Huawei", "Lenovo"]
  },
  Siemens: {
    rank: "工业电气与数字孪生平台",
    capexNode: "Electrification + automation + digital twin",
    investmentLens: "Siemens 同时受益 AI 数据中心配电、工业自动化和数字孪生，关键在把电气设备与工业软件绑定成 AI 工厂底座。",
    valueDrivers: ["高压/中低压配电", "工业自动化", "数字孪生", "PLM/仿真客户"],
    watchKpis: ["电气订单", "工业软件收入", "数据中心项目", "服务收入占比"],
    frictionPoints: ["欧洲工业周期", "项目制交付", "能源价格", "软件云化节奏"],
    catalysts: ["AI 数据中心供电项目", "工厂自动化复苏", "数字孪生导入机器人/AI 工厂"],
    peers: ["Schneider Electric", "ABB", "Eaton", "Dassault Systemes"]
  },
  "特变电工": {
    rank: "中国输变电设备",
    capexNode: "Transformers + grid equipment",
    investmentLens: "AI 数据中心并网扩容会拉动变压器、输电和变电站设备需求，特变电工的位置在电力容量建设的前置环节。",
    valueDrivers: ["变压器交期", "电网投资", "新能源并网", "AI 园区供电"],
    watchKpis: ["变压器订单", "电网招标", "海外项目", "原材料成本"],
    frictionPoints: ["电网投资节奏", "铜铝价格", "项目验收周期", "价格竞争"],
    catalysts: ["数据中心园区并网", "主网/配网升级", "新能源基地配套"],
    peers: ["许继电气", "Eaton", "GE Vernova", "Schneider Electric"]
  },
  "许继电气": {
    rank: "智能电网自动化",
    capexNode: "Grid automation + protection control",
    investmentLens: "AI 高密园区需要更强配网自动化、保护控制和电能质量管理，许继电气承接中国智能电网升级。",
    valueDrivers: ["配电自动化", "保护控制", "换流/电力电子", "供电可靠性"],
    watchKpis: ["电网自动化订单", "国网招标份额", "项目交付", "毛利率"],
    frictionPoints: ["招标周期", "价格压力", "项目验收", "技术路线变化"],
    catalysts: ["AI 数据中心接入", "配网升级", "新型电力系统建设"],
    peers: ["特变电工", "国电南瑞", "Eaton", "Siemens"]
  },
  "台光电子": {
    rank: "高速 CCL 材料",
    capexNode: "Low-loss CCL for AI switches/server boards",
    investmentLens: "800G/1.6T 网络和 AI 服务器提高低损耗材料门槛，台光电子受益高速 CCL 客户认证和产品组合升级。",
    valueDrivers: ["高速 CCL", "AI 交换机", "低损耗材料 ASP", "客户认证"],
    watchKpis: ["高速材料收入", "AI 网络订单", "毛利率", "认证节点"],
    frictionPoints: ["电子周期", "客户集中", "材料价格", "高端认证失败"],
    catalysts: ["1.6T 交换机放量", "224G SerDes 板材认证", "高端 CCL ASP 提升"],
    peers: ["Shengyi Technology", "WUS Printed Circuit", "Shennan Circuits", "Unimicron"]
  },
  "欣兴电子": {
    rank: "ABF 与高阶基板",
    capexNode: "ABF substrate + HDI/IC substrate",
    investmentLens: "AI 加速器和高速交换机对 ABF、IC substrate 和高阶 PCB 的良率要求上升，欣兴电子捕获高端基板扩产弹性。",
    valueDrivers: ["ABF 载板", "高阶 PCB", "先进封装基板", "AI 客户认证"],
    watchKpis: ["ABF 稼动率", "基板毛利", "客户认证", "资本开支"],
    frictionPoints: ["ABF 周期", "折旧压力", "良率爬坡", "客户集中"],
    catalysts: ["AI GPU/ASIC 基板需求", "先进封装放量", "高阶 PCB 订单恢复"],
    peers: ["Ibiden", "Unimicron", "Shinko Electric", "台光电子"]
  },
  CoreWeave: {
    rank: "GPU 云高 beta",
    capexNode: "GPU cloud + managed AI clusters",
    investmentLens: "CoreWeave 代表专业 GPU 云路线，核心看能否把高杠杆 CAPEX、GPU 供给和客户长期合同转化为稳定利用率与现金流。",
    valueDrivers: ["GPU 集群交付", "推理/训练客户", "NVIDIA 供给关系", "数据中心扩容"],
    watchKpis: ["GPU 利用率", "客户集中度", "融资成本", "收入/合同 backlog"],
    frictionPoints: ["负债和融资", "云巨头竞争", "电力并网", "GPU 折旧周期"],
    catalysts: ["新数据中心上线", "长期客户合同", "推理云需求扩张"],
    peers: ["Oracle", "Microsoft", "Amazon", "Together AI"]
  },
  Groq: {
    rank: "低延迟推理挑战者",
    capexNode: "LPU inference chip + real-time serving",
    investmentLens: "Groq 的价值在低延迟推理和实时语音/Agent 场景，能否把芯片架构优势转成稳定开发者和企业负载是关键。",
    valueDrivers: ["低延迟 token 生成", "实时语音 Agent", "专用推理芯片", "开发者 API"],
    watchKpis: ["TTFT/P99", "tokens/s/W", "API 调用", "客户留存"],
    frictionPoints: ["模型兼容性", "产能和资金", "GPU 价格下行", "生态弱于 CUDA"],
    catalysts: ["实时语音应用", "企业低延迟 Agent", "推理成本压力上升"],
    peers: ["Cerebras", "SambaNova", "NVIDIA", "Fireworks AI"]
  },
  Cerebras: {
    rank: "晶圆级计算路线",
    capexNode: "Wafer-scale engine + AI systems",
    investmentLens: "Cerebras 用晶圆级芯片挑战传统 GPU 集群瓶颈，投资看点在大模型吞吐、集群简化和非 GPU 客户采用。",
    valueDrivers: ["晶圆级芯片", "大模型吞吐", "专用集群", "政府/企业客户"],
    watchKpis: ["系统出货", "模型训练/推理吞吐", "客户数量", "毛利率"],
    frictionPoints: ["生态兼容", "制造良率", "客户教育", "GPU 供应缓解"],
    catalysts: ["非 GPU 集群订单", "大模型推理服务", "主权 AI 采购"],
    peers: ["Groq", "SambaNova", "NVIDIA", "AMD"]
  },
  SambaNova: {
    rank: "企业软硬一体 AI",
    capexNode: "Dataflow chips + enterprise AI platform",
    investmentLens: "SambaNova 试图用软硬一体平台切入企业私有 AI，核心看行业客户是否愿意为集成式 TCO 付费。",
    valueDrivers: ["数据流芯片", "企业私有 AI", "模型服务平台", "行业方案"],
    watchKpis: ["企业客户", "私有化项目", "平台利用率", "毛利率"],
    frictionPoints: ["GPU 生态挤压", "销售周期", "模型适配", "规模经济不足"],
    catalysts: ["企业私有 AI 预算", "合规推理需求", "行业模型项目"],
    peers: ["Groq", "Cerebras", "NVIDIA", "Together AI"]
  },
  "Together AI": {
    rank: "开源模型推理平台",
    capexNode: "Inference API + fine-tuning + open model serving",
    investmentLens: "Together AI 承接开源模型推理和微调需求，价值在模型路由、成本优化和开发者平台黏性。",
    valueDrivers: ["开源模型生态", "推理 API", "微调平台", "多模型路由"],
    watchKpis: ["API 调用量", "推理毛利", "开发者留存", "模型覆盖数"],
    frictionPoints: ["云巨头降价", "模型同质化", "GPU 成本", "客户迁移成本不高"],
    catalysts: ["开源模型迭代", "企业微调需求", "Agent 后端推理增长"],
    peers: ["Fireworks AI", "CoreWeave", "Databricks", "Hugging Face"]
  },
  "Fireworks AI": {
    rank: "低延迟模型服务层",
    capexNode: "Serverless LLM inference + Agent backend",
    investmentLens: "Fireworks AI 的价值在把多模型、低延迟和可观测推理包装为开发者可用的后端，适合 Agent 和应用快速迭代。",
    valueDrivers: ["低延迟推理", "Serverless LLM", "模型服务", "Agent 后端"],
    watchKpis: ["P99 延迟", "API 调用", "模型覆盖", "推理毛利"],
    frictionPoints: ["价格竞争", "平台差异化", "GPU 供给", "大客户自建"],
    catalysts: ["Agent 应用增长", "多模型路由需求", "推理优化能力验证"],
    peers: ["Together AI", "CoreWeave", "Groq", "Cloudflare"]
  },
  SAP: {
    rank: "企业流程系统记录",
    capexNode: "ERP data + Joule/Business AI",
    investmentLens: "SAP 的 AI 价值来自 ERP 系统记录和业务流程上下文，Agent 若进入财务、供应链和人力流程，SAP 是关键入口。",
    valueDrivers: ["ERP 数据上下文", "Joule/Business AI", "S/4HANA 云迁移", "大型企业客户"],
    watchKpis: ["云收入", "AI attach rate", "S/4HANA 迁移", "净留存"],
    frictionPoints: ["实施复杂度", "客户预算", "AI 付费率", "云迁移周期"],
    catalysts: ["ERP Agent 产品化", "大客户扩席", "流程自动化 ROI 证明"],
    peers: ["Oracle", "Microsoft", "ServiceNow", "Salesforce"]
  },
  UiPath: {
    rank: "RPA 到 Agent 编排",
    capexNode: "RPA + process mining + agentic automation",
    investmentLens: "UiPath 的存量 RPA 客户和流程挖掘资产可成为 Agent 行动层，但必须证明从脚本自动化升级到智能流程编排。",
    valueDrivers: ["RPA 客户基础", "流程挖掘", "Agent 编排", "企业自动化 ROI"],
    watchKpis: ["ARR 增长", "net retention", "Agent attach rate", "流程成功率"],
    frictionPoints: ["RPA 增长放缓", "平台竞争", "AI 原生替代", "客户预算"],
    catalysts: ["Agentic automation 案例", "流程挖掘带动扩席", "企业降本周期"],
    peers: ["ServiceNow", "Microsoft", "Automation Anywhere", "SAP"]
  },
  "用友网络": {
    rank: "中国 ERP AI 入口",
    capexNode: "YonBIP + finance/ERP workflows",
    investmentLens: "用友网络承接中国企业财务、ERP 和组织流程 AI 化，价值在国产系统记录与企业 Agent 的结合。",
    valueDrivers: ["国产 ERP", "财务 AI", "YonBIP", "企业客户基础"],
    watchKpis: ["云收入", "AI 项目转化", "续费率", "实施周期"],
    frictionPoints: ["项目制交付", "盈利压力", "客户预算", "金蝶/钉钉/微软竞争"],
    catalysts: ["央国企 AI 办公/财务", "ERP Agent 模板", "国产软件替代"],
    peers: ["金蝶国际", "SAP", "Oracle", "Kingsoft Office"]
  },
  "Palo Alto Networks": {
    rank: "企业 AI 安全平台",
    capexNode: "Cloud security + runtime governance + SOC",
    investmentLens: "企业 AI 落地扩大提示注入、数据泄露和运行时审计需求，Palo Alto 的平台化安全能力可延伸到 AI governance。",
    valueDrivers: ["云安全", "SOC 自动化", "数据访问控制", "AI 运行时防护"],
    watchKpis: ["平台化订单", "云安全增长", "AI security 客户", "净留存"],
    frictionPoints: ["安全预算", "CrowdStrike/Cloudflare 竞争", "AI 安全产品成熟度", "平台整合风险"],
    catalysts: ["企业 AI 合规要求", "AI 安全产品发布", "云安全平台整合"],
    peers: ["CrowdStrike", "Cloudflare", "Datadog", "Zscaler"]
  },
  "金蝶国际": {
    rank: "中国云 ERP",
    capexNode: "Cloud ERP + finance AI",
    investmentLens: "金蝶国际的 AI 机会在云 ERP 与财务流程自动化，关键看订阅化、AI 增购和实施毛利改善。",
    valueDrivers: ["云 ERP", "财务 AI", "中大型企业客户", "订阅模式"],
    watchKpis: ["云 ARR", "续费率", "AI attach rate", "经营利润率"],
    frictionPoints: ["实施成本", "宏观 IT 预算", "用友/钉钉竞争", "客户迁移周期"],
    catalysts: ["财务 Agent", "中大型企业上云", "国产 ERP 替代"],
    peers: ["用友网络", "SAP", "Oracle", "Microsoft"]
  },
  "明源云": {
    rank: "垂直 SaaS AI 样本",
    capexNode: "Real-estate ERP/CRM + vertical workflow AI",
    investmentLens: "明源云代表垂直行业 SaaS 的 AI 化路径，价值在行业数据和流程模板，但受地产周期约束明显。",
    valueDrivers: ["地产 ERP/CRM", "行业流程", "垂直 AI 模板", "客户数据"],
    watchKpis: ["订阅收入", "客户留存", "AI 模块付费", "地产客户预算"],
    frictionPoints: ["地产周期", "客户现金流", "垂直市场天花板", "项目制交付"],
    catalysts: ["地产企业降本", "行业 AI 模板", "存量客户 AI 增购"],
    peers: ["金蝶国际", "用友网络", "Salesforce", "ServiceNow"]
  },
  Tesla: {
    rank: "具身智能量产期权",
    capexNode: "FSD + Optimus + real-world data loop",
    investmentLens: "Tesla 的 AI 价值在真实世界数据、端侧推理、制造工程和机器人本体闭环，Optimus 是高不确定但高弹性的长期期权。",
    valueDrivers: ["FSD 数据闭环", "Optimus 本体", "端到端模型", "制造规模化"],
    watchKpis: ["FSD 订阅/采用", "Optimus 量产节点", "干预率", "BOM cost"],
    frictionPoints: ["监管安全", "量产不确定", "估值波动", "汽车主业周期"],
    catalysts: ["Optimus 工厂试点", "FSD 区域扩张", "机器人执行器供应链验证"],
    peers: ["NVIDIA", "Horizon Robotics", "Figure AI", "UBTECH"]
  },
  "绿的谐波": {
    rank: "国产谐波减速器",
    capexNode: "Harmonic reducer + robot joints",
    investmentLens: "绿的谐波处在人形和工业机器人关节成本曲线中心，关键看客户认证、量产良率和价格压力。",
    valueDrivers: ["谐波减速器", "机器人关节", "国产替代", "精密传动"],
    watchKpis: ["机器人客户订单", "减速器 ASP", "良率", "毛利率"],
    frictionPoints: ["价格竞争", "客户认证周期", "人形机器人放量不确定", "进口品牌压力"],
    catalysts: ["人形机器人定点", "工业机器人复苏", "国产供应链放量"],
    peers: ["Harmonic Drive Systems", "Nabtesco", "鸣志电器", "拓普集团"]
  },
  "鸣志电器": {
    rank: "机器人电机与运动控制",
    capexNode: "Motors + motion control + actuator components",
    investmentLens: "鸣志电器受益机器人执行器和灵巧手电机需求，核心在产品能否进入高可靠量产供应链。",
    valueDrivers: ["步进/无刷电机", "运动控制", "机器人执行器", "海外客户"],
    watchKpis: ["机器人电机订单", "客户认证", "毛利率", "海外收入"],
    frictionPoints: ["下游放量慢", "价格竞争", "技术路线变化", "客户集中"],
    catalysts: ["人形机器人供应链认证", "灵巧手/关节模组需求", "工业自动化复苏"],
    peers: ["Inovance", "Estun Automation", "绿的谐波", "Sanhua Intelligent Controls"]
  },
  "拓普集团": {
    rank: "汽车供应链外溢机器人",
    capexNode: "Actuator parts + auto manufacturing scale",
    investmentLens: "拓普集团的机器人逻辑来自汽车零部件量产工程和执行器布局，核心看机器人业务能否从期权变订单。",
    valueDrivers: ["执行器部件", "汽车供应链", "热管理/轻量化", "量产工程能力"],
    watchKpis: ["机器人相关订单", "客户认证", "汽车主业增长", "资本开支"],
    frictionPoints: ["汽车周期", "客户集中", "机器人放量不确定", "估值预期过高"],
    catalysts: ["人形机器人定点", "车企机器人供应链迁移", "执行器量产验证"],
    peers: ["Sanhua Intelligent Controls", "绿的谐波", "鸣志电器", "Tesla"]
  },
  "瑞芯微": {
    rank: "端侧 AI SoC",
    capexNode: "Edge SoC + NPU + embedded AI",
    investmentLens: "瑞芯微承接低功耗端侧推理、机器视觉和机器人控制需求，关键是 NPU 性能、软件生态和客户放量。",
    valueDrivers: ["端侧 SoC", "嵌入式 NPU", "机器人控制", "视觉设备"],
    watchKpis: ["AI SoC 出货", "客户设计导入", "毛利率", "端侧算力规格"],
    frictionPoints: ["消费电子周期", "高端算力差距", "价格竞争", "软件生态"],
    catalysts: ["边缘 AI 设备增长", "机器人控制板需求", "国产端侧芯片替代"],
    peers: ["Horizon Robotics", "MediaTek", "Qualcomm", "Ambarella"]
  },
  Ambarella: {
    rank: "低功耗视觉 AI 芯片",
    capexNode: "Vision AI SoC + edge inference",
    investmentLens: "Ambarella 的价值在低功耗视觉推理，机器人、安防和汽车感知升级会提升端侧 AI SoC 需求。",
    valueDrivers: ["视觉 AI SoC", "汽车/机器人感知", "低功耗推理", "CVflow 软件栈"],
    watchKpis: ["汽车项目", "边缘 AI 收入", "设计 win", "毛利率"],
    frictionPoints: ["汽车认证周期", "客户集中", "NVIDIA/Qualcomm 竞争", "边缘 AI 放量慢"],
    catalysts: ["机器人感知需求", "ADAS 定点量产", "端侧多模态推理"],
    peers: ["Qualcomm", "Horizon Robotics", "瑞芯微", "NVIDIA"]
  },
  Unity: {
    rank: "仿真与实时 3D 工具",
    capexNode: "Simulation + synthetic data + 3D developer tools",
    investmentLens: "Unity 在机器人 Sim-to-Real、数字孪生和合成数据中具备工具链可选权，但主业和商业模式修复决定估值底座。",
    valueDrivers: ["实时 3D 引擎", "仿真环境", "合成数据", "开发者生态"],
    watchKpis: ["工业/AI 客户", "订阅留存", "利润率", "仿真用例"],
    frictionPoints: ["游戏主业波动", "商业模式争议", "Unreal/专用仿真竞争", "企业销售周期"],
    catalysts: ["机器人仿真需求", "数字孪生项目", "AI 工具提升开发效率"],
    peers: ["Dassault Systemes", "NVIDIA", "Siemens", "Autodesk"]
  },
  "Dassault Systemes": {
    rank: "工业仿真与 PLM",
    capexNode: "PLM + simulation + digital twin",
    investmentLens: "达索系统处在工业数据和仿真闭环中，AI 工厂、机器人和复杂制造需要 PLM/仿真作为可信工程底座。",
    valueDrivers: ["CATIA/SIMULIA", "3DEXPERIENCE", "数字孪生", "工业客户"],
    watchKpis: ["软件订阅", "工业客户增长", "仿真收入", "云迁移"],
    frictionPoints: ["工业周期", "云化转型", "Siemens/PTC 竞争", "销售周期"],
    catalysts: ["机器人仿真", "AI 工厂数字孪生", "复杂制造 PLM 升级"],
    peers: ["Siemens", "PTC", "Autodesk", "Unity"]
  },
  MiniMax: {
    rank: "中国多模态消费模型",
    capexNode: "Voice/video models + consumer apps + API",
    investmentLens: "MiniMax 代表中国多模态和语音/视频消费 AI 路线，核心看爆款应用留存、推理成本和海外合规。",
    valueDrivers: ["语音/视频模型", "海螺 AI", "角色对话", "模型 API"],
    watchKpis: ["用户留存", "视频生成使用量", "API 调用", "推理成本"],
    frictionPoints: ["内容合规", "商业化", "模型成本", "消费应用竞争"],
    catalysts: ["多模态应用增长", "海外产品扩张", "语音 Agent 需求"],
    peers: ["Moonshot AI", "ByteDance", "OpenAI", "Kuaishou"]
  },
  JetBrains: {
    rank: "IDE 上下文入口",
    capexNode: "Developer IDE + code context + AI coding workflow",
    investmentLens: "JetBrains 拥有高黏性 IDE 和企业开发者入口，AI 编程进入 Agent 化后，代码索引、测试、审查和团队上下文是核心资产。",
    valueDrivers: ["IntelliJ/PyCharm", "JetBrains AI", "Kotlin 生态", "企业开发者客户"],
    watchKpis: ["AI 功能采用", "IDE 订阅续费", "企业席位", "代码 Agent 成功率"],
    frictionPoints: ["GitHub/Cursor 竞争", "AI 功能差异化", "企业安全要求", "开发者工具价格压力"],
    catalysts: ["AI 编程 Agent", "企业代码安全审计", "IDE 原生工作流升级"],
    peers: ["Microsoft", "Anysphere", "Replit", "Atlassian"]
  }
};

function enrichCompanyDeepDive(company) {
  const detail = companyDeepDives[company.name];
  return detail ? { ...company, deepDive: detail } : company;
}

window.companyDeepDives = companyDeepDives;
window.enrichCompanyDeepDive = enrichCompanyDeepDive;
