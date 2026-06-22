const valuationSensitivityThemes = [
  {
    key: "hbm-cowos",
    title: "HBM / CoWoS 供给敏感性",
    category: "芯片供应链",
    maturity: "P2.2 v1 · 可用于跟踪",
    primaryQuestion: "先进封装和高带宽内存扩产速度，能否追上 Blackwell / Rubin 级集群需求？",
    thesis: "这一组变量决定训练侧 GPU 出货天花板，也决定 HBM、封装、基板、测试和设备环节的利润弹性。核心不是单点技术突破，而是良率、交期、客户锁单和资本开支节奏的组合。",
    playbook: [
      "先看台积电先进封装资本开支和客户排队，再看 SK hynix / Samsung / Micron 的 HBM 产品代际切换。",
      "若 CoWoS 紧缺缓解但 HBM4 逻辑底层复杂度提升，价值会从单纯封装容量转向设计协同、测试和高端基板。",
      "A 股和港股映射重点看先进封装、测试设备、封装材料、PCB / ABF 相关能力是否进入真实客户验证。"
    ],
    variables: [
      {
        name: "CoWoS-L/R 产能爬坡",
        metric: "月产能、良率、客户锁单、交期",
        direction: "产能上行利好训练链扩容，良率下行会放大 GPU 交付不确定性",
        whyItMatters: "CoWoS 是 GPU 与 HBM 组成高端加速器的关键集成口，产能瓶颈会直接压住 NVIDIA、AMD、Broadcom 等高端 AI 芯片实际可交付量。",
        upsideRead: "若扩产快于预期，GPU 服务器、交换机和数据中心建设节奏会同步上修，封装设备、载板和测试环节订单能见度提高。",
        downsideRead: "若良率或交期恶化，云厂商 CAPEX 兑现会后移，二线加速卡和替代互联方案获得窗口。",
        positiveCompanies: ["TSMC", "NVIDIA", "AMD", "Broadcom", "ASE Technology", "Amkor", "JCET Group", "Tongfu Microelectronics", "Ibiden", "Unimicron"],
        watchKpis: ["CoWoS 月产能", "先进封装收入占比", "HBM 绑定订单", "封装良率", "AI GPU 交期"],
        sourceIds: ["tsmc-2025-annual", "nvidia-rubin-2026", "nvidia-rubin-2026", "broadcom-cpo-official"]
      },
      {
        name: "HBM3E → HBM4 代际切换",
        metric: "带宽、堆叠高度、功耗、客户认证节奏",
        direction: "带宽和容量提升利好大模型训练与长上下文推理，认证延迟会放大供应错配",
        whyItMatters: "HBM4 开始把逻辑底层、封装协同和客户定制拉到同一张设计图上，内存厂、代工厂和 GPU 厂的话语权会重新分配。",
        upsideRead: "领先厂商能用认证窗口锁定溢价和长单，测试、探针卡、先进封装材料和主控生态同步受益。",
        downsideRead: "若 HBM4 良率或功耗不达标，短期会延长 HBM3E 生命周期，模型侧会更依赖并行、压缩和显存优化。",
        positiveCompanies: ["SK hynix", "Samsung Electronics", "Micron", "TSMC", "NVIDIA", "Advantest", "Teradyne", "FormFactor"],
        watchKpis: ["HBM bit supply", "HBM ASP", "客户认证节点", "堆叠良率", "每瓦带宽"],
        sourceIds: ["skhynix-official", "samsung-hbm4", "micron-hbm4-vera-rubin", "nvidia-rubin-2026"]
      },
      {
        name: "ABF / 高端基板与测试吞吐",
        metric: "ABF 供需、测试时间、探针卡复杂度",
        direction: "基板和测试吞吐不足会把先进封装扩产转化为新的瓶颈",
        whyItMatters: "AI 加速器面积、I/O 和封装层数持续上升，后段测试时间和基板一致性会成为交付能力的真实约束。",
        upsideRead: "高端基板、测试机、探针卡和封装材料公司享受更高订单黏性。",
        downsideRead: "若终端 CAPEX 放缓，基板和测试的周期弹性会先被市场重新定价。",
        positiveCompanies: ["Ibiden", "Unimicron", "Shinko Electric", "Advantest", "Teradyne", "FormFactor", "JCET Group", "Tongfu Microelectronics"],
        watchKpis: ["ABF 稼动率", "测试机交付周期", "probe card 复杂度", "封测毛利率"],
        sourceIds: ["advantest-official", "teradyne-official", "tsmc-2025-annual"]
      }
    ]
  },
  {
    key: "power-liquidcooling",
    title: "电力 / 液冷 CAPEX 敏感性",
    category: "数据中心建设",
    maturity: "P2.2 v1 · 可用于跟踪",
    primaryQuestion: "AI 数据中心从 MW 走向 GW 后，谁真正控制并网、供电、散热和机柜交付节奏？",
    thesis: "AI 数据中心的估值变量正在从传统出租率迁移到可用电力、PUE / WUE、高密机柜、CDU、冷板、配电和长期购电协议。算力租赁的毛利，最终会被电价、冷却和运维可靠性重新切分。",
    playbook: [
      "先看项目是否拿到电网接入和长期电力合同，再看机柜功率密度和冷却路线。",
      "液冷链条要区分冷板、CDU、快接头、泵阀、管路、漏液检测和运维服务，不能只看概念。",
      "中国标的重点跟踪液冷服务器、温控设备、高压配电、光伏储能和 IDC 改造订单是否进入实际交付。"
    ],
    variables: [
      {
        name: "并网队列与 PPA 价格",
        metric: "MW/GW 可用容量、接入周期、电价曲线",
        direction: "并网越快、基荷越稳定，AI 工厂越可能提前释放收入",
        whyItMatters: "电力可得性已成为训练集群和推理集群扩张的前置审批，数据中心选址从网络优先转向电力优先。",
        upsideRead: "掌握土地、电网接入、PPA 和天然气/核能资源的开发商、云厂商与公用事业具备稀缺性。",
        downsideRead: "并网延迟会把服务器订单、光模块订单和云收入兑现全部后移。",
        positiveCompanies: ["Constellation Energy", "Vistra", "GE Vernova", "NextEra Energy", "Eaton", "Vertiv", "Schneider Electric", "Delta Electronics"],
        watchKpis: ["PPA 电价", "interconnection queue 周期", "可用 MW", "电网升级 CAPEX", "备用电源成本"],
        sourceIds: ["iea-energy-ai", "constellation-microsoft-ppa", "google-kairos"]
      },
      {
        name: "风冷 → 冷板液冷 → 浸没式",
        metric: "机柜功率密度、PUE、WUE、漏液事故率",
        direction: "功率密度上行会抬升液冷、配电和运维单机柜价值量",
        whyItMatters: "Blackwell / Rubin 级机柜把散热从机房工程问题变成整机系统问题，风冷改造空间有限。",
        upsideRead: "CDU、冷板、快接头、液冷服务器、温控设备和高密配电供应商受益。",
        downsideRead: "若客户延迟从风冷切到液冷，相关供应链短期订单弹性会被拉平。",
        positiveCompanies: ["Vertiv", "Schneider Electric", "Eaton", "Delta Electronics", "Foxconn", "Quanta Computer", "Wiwynn", "浪潮信息", "中科曙光", "英维克"],
        watchKpis: ["单柜 kW", "CDU 出货", "PUE/WUE", "漏液 RMA", "液冷服务器占比"],
        sourceIds: ["vertiv-official", "schneider-official", "nvidia-gb200-nvl72"]
      },
      {
        name: "高压配电与 UPS 容量",
        metric: "配电模块价值量、UPS 冗余等级、故障切换时间",
        direction: "高密机柜提升配电与电能质量环节价值量",
        whyItMatters: "AI 集群对稳定性极敏感，单点供电故障会造成训练中断、checkpoint 损失和集群利用率下降。",
        upsideRead: "电气设备、UPS、变压器、母线槽和电源管理厂商的订单周期变长。",
        downsideRead: "若数据中心建设周期拉长，电气设备收入确认会明显后移。",
        positiveCompanies: ["Eaton", "Schneider Electric", "ABB", "Siemens", "Vertiv", "台达电子", "特变电工", "许继电气"],
        watchKpis: ["UPS backlog", "变压器交期", "母线槽价值量", "MTBF", "电力可用性 SLA"],
        sourceIds: ["eaton-official", "schneider-official", "iea-energy-ai"]
      }
    ]
  },
  {
    key: "optical-network",
    title: "AI 网络 / 光互联敏感性",
    category: "基础设施网络",
    maturity: "P2.2 v1 · 可用于跟踪",
    primaryQuestion: "800G / 1.6T 光模块、硅光、CPO 和高速 PCB，谁会吃到训练与推理网络升级的增量？",
    thesis: "AI 集群扩容后，瓶颈从单卡算力转向多机多卡通信、东西向流量、交换芯片、光模块、DSP、光芯片和 PCB 信号完整性。网络链条的价值捕获取决于速率迁移、客户认证和良率。",
    playbook: [
      "先确认客户结构：云厂商直供、交换机 OEM、还是传统电信链条，估值弹性完全不同。",
      "区分光模块封装组装、光芯片、DSP、硅光平台、光纤光缆和高速 PCB，不把产业链混成一个概念。",
      "跟踪 800G 放量、1.6T 认证、224G SerDes、LPO / CPO 路线分歧和 NVIDIA / Broadcom / Marvell 平台节奏。"
    ],
    variables: [
      {
        name: "800G → 1.6T 速率迁移",
        metric: "客户认证、出货结构、单 bit 成本、功耗",
        direction: "训练集群规模上行会放大高速光模块和交换芯片需求",
        whyItMatters: "大规模训练和推理后端网络需要更高 radix、更低延迟和更低每 bit 功耗，光模块速率迁移直接决定网络 CAPEX。",
        upsideRead: "高速光模块、DSP、交换芯片、光芯片和光器件公司受益。",
        downsideRead: "若云厂商推迟 1.6T 或转向 LPO / CPO，传统可插拔光模块利润结构会被压缩。",
        positiveCompanies: ["Coherent", "Lumentum", "AAOI", "Marvell", "Broadcom", "中际旭创", "新易盛", "天孚通信", "剑桥科技", "长飞光纤光缆", "亨通光电", "源杰科技"],
        watchKpis: ["800G 出货占比", "1.6T 客户认证", "DSP ASP", "每 bit 功耗", "光模块毛利率"],
        sourceIds: ["broadcom-cpo-official", "marvell-official", "coherent-official", "lumentum-official"]
      },
      {
        name: "硅光 / CPO 路线分歧",
        metric: "封装方式、光电转换效率、热管理、可维护性",
        direction: "CPO 成熟会改变交换机、光模块和芯片封装的价值边界",
        whyItMatters: "当交换芯片功耗和 SerDes 速率继续提升，传统可插拔模块面临功耗和密度压力，硅光与共封装光学成为下一代互联候选。",
        upsideRead: "拥有硅光平台、激光器、光芯片、封装和测试能力的公司获得重新定价机会。",
        downsideRead: "CPO 若维护和标准化推进缓慢，可插拔 1.6T / 3.2T 方案会延长生命周期。",
        positiveCompanies: ["Coherent", "Lumentum", "Broadcom", "Marvell", "Intel", "源杰科技", "三安光电", "长芯博创", "天孚通信", "AXT"],
        watchKpis: ["CPO 样机节点", "硅光良率", "激光器供应", "交换机功耗", "标准化进展"],
        sourceIds: ["broadcom-cpo-official", "marvell-official", "coherent-official"]
      },
      {
        name: "高速 PCB / CCL / 玻璃光纤材料",
        metric: "112G/224G SerDes、低损耗材料、高多层板良率",
        direction: "速率提升会抬升 PCB、CCL、背板和材料环节技术门槛",
        whyItMatters: "AI 交换机和加速卡对信号完整性要求极高，高速板材和加工良率决定整机稳定性。",
        upsideRead: "具备高多层板、低损耗材料、精密加工和玻璃/光纤材料能力的公司受益。",
        downsideRead: "若网络架构转向更短互联或 CPO 集成，部分传统 PCB 价值量可能被重新分配。",
        positiveCompanies: ["沪电股份", "深南电路", "东山精密", "生益科技", "台光电子", "欣兴电子", "Corning"],
        watchKpis: ["AI 交换机板订单", "224G SerDes 认证", "低损耗 CCL ASP", "多层板良率"],
        sourceIds: ["broadcom-cpo-official", "marvell-official", "corning-official"]
      }
    ]
  },
  {
    key: "inference-cost",
    title: "推理成本 / 延迟敏感性",
    category: "模型与推理",
    maturity: "P2.2 v1 · 可用于跟踪",
    primaryQuestion: "Reasoning Model 带来的 token 爆炸，能否被路由、缓存、编译和专用芯片消化？",
    thesis: "推理侧的估值变量不是模型参数规模，而是 TTFT、P99、每百万 token 成本、KV Cache 命中率和硬件利用率。复杂推理模型越强，单位任务 token 成本越可能成为商业化天花板。",
    playbook: [
      "先看应用是否能把推理成本转嫁给用户，再看模型服务商是否有路由、缓存和自研芯片能力。",
      "推理优化要拆成模型层、系统层、芯片层三类，避免把所有效率提升都归因于单一模型。",
      "企业级场景重点看 P99 稳定性和权限审计，消费级场景重点看 TTFT 和单位会话毛利。"
    ],
    variables: [
      {
        name: "TTFT / P99 延迟",
        metric: "首字延迟、尾延迟、并发吞吐",
        direction: "延迟下降提升转化率和留存，但可能增加冗余算力成本",
        whyItMatters: "用户体验和企业 SLA 都看尾延迟，推理服务商需要在响应速度、吞吐和成本之间做动态调度。",
        upsideRead: "推理云、编译器、推理引擎、负载均衡和边缘推理厂商受益。",
        downsideRead: "若延迟优化依赖过度冗余硬件，毛利会被显存和电力成本吞噬。",
        positiveCompanies: ["NVIDIA", "AMD", "Alphabet / Google", "Amazon", "Microsoft", "Cloudflare", "CoreWeave", "Groq", "Cerebras", "SambaNova"],
        watchKpis: ["TTFT", "P99 latency", "tokens/s", "GPU 利用率", "单位 token 成本"],
        sourceIds: ["nvidia-dynamo", "google-gemini-25", "nvidia-rubin-2026"]
      },
      {
        name: "KV Cache 与 Prefill/Decode 分离",
        metric: "KV 命中率、显存占用、prefill/decode 吞吐",
        direction: "缓存效率提升会显著降低长上下文和多轮 Agent 成本",
        whyItMatters: "长上下文和 Agent 会话把显存从参数存储变成状态存储，KV Cache 管理能力决定推理集群真实容量。",
        upsideRead: "具备推理调度、缓存管理、模型路由和显存优化能力的平台获得毛利优势。",
        downsideRead: "若上下文继续膨胀，软件优化可能被显存带宽和容量再次压住。",
        positiveCompanies: ["NVIDIA", "Microsoft", "Alphabet / Google", "Amazon", "Databricks", "Snowflake", "CoreWeave", "Together AI", "Fireworks AI"],
        watchKpis: ["KV cache hit rate", "prefill/decode utilization", "显存占用", "batching 效率"],
        sourceIds: ["nvidia-dynamo", "databricks-ai-official", "snowflake-cortex-official"]
      },
      {
        name: "Speculative Decoding / 模型路由",
        metric: "接受率、草稿模型成本、路由准确率",
        direction: "小模型辅助大模型会降低 token 成本，但路由错误会伤害质量",
        whyItMatters: "推理服务商需要把简单任务路由到低成本模型，把复杂任务留给 reasoning model，才能守住毛利。",
        upsideRead: "多模型平台、推理编排、评测和模型监控厂商受益。",
        downsideRead: "若质量监控不足，降本策略会造成答案退化和企业客户流失。",
        positiveCompanies: ["OpenAI", "Anthropic", "Alphabet / Google", "Microsoft", "Databricks", "Snowflake", "Palantir", "ServiceNow"],
        watchKpis: ["draft accept rate", "route accuracy", "hallucination rate", "任务成功率", "gross margin per token"],
        sourceIds: ["openai-o3-o4-mini", "anthropic-claude-37", "google-gemini-25"]
      }
    ]
  },
  {
    key: "enterprise-agent-roi",
    title: "企业 Agent ROI 敏感性",
    category: "应用落地",
    maturity: "P2.2 v1 · 可用于跟踪",
    primaryQuestion: "Agent 能否从演示走向可审计、可计费、可复用的业务流程？",
    thesis: "企业 AI 的价值捕获不在单次问答，而在数据治理、权限隔离、流程编排、人类在环和系统集成。估值变量是可替代工时、错误成本、上线周期和续费扩张率。",
    playbook: [
      "先看是否嵌入真实业务系统，再看是否有权限、审计和回滚机制。",
      "ROI 要按流程测算，不按 token 测算：节省工时、缩短周期、减少错误、增加收入分别建模。",
      "软件公司核心看现有分发入口和数据上下文，纯 Agent 创业公司核心看是否拥有可复制工作流。"
    ],
    variables: [
      {
        name: "Agent Success Rate",
        metric: "任务完成率、人工接管率、回滚率",
        direction: "成功率提升会提高企业续费和席位扩张",
        whyItMatters: "企业客户愿意为完成任务付费，而不是为对话付费；Agent 成功率是从 Copilot 到数字员工的分水岭。",
        upsideRead: "拥有工作流入口、数据连接器和审计能力的软件平台受益。",
        downsideRead: "若人工接管率过高，Agent 会退回辅助工具，难以获得高 ARPU。",
        positiveCompanies: ["Microsoft", "ServiceNow", "Salesforce", "Palantir", "SAP", "Oracle", "Atlassian", "UiPath", "金山办公", "用友网络"],
        watchKpis: ["Agent success rate", "HITL ratio", "rollback rate", "workflow completion time", "seat expansion"],
        sourceIds: ["github-copilot-coding-agent", "servicenow-ai-official", "salesforce-agentforce-3"]
      },
      {
        name: "数据治理 / 权限隔离",
        metric: "数据接入周期、权限粒度、审计覆盖率",
        direction: "治理能力越强，企业落地 TCO 越低",
        whyItMatters: "企业 AI 失败往往不是模型不够强，而是数据脏、权限乱、接口旧、责任边界不清。",
        upsideRead: "数据云、湖仓、IAM、安全和合规平台受益。",
        downsideRead: "若治理成本超过业务收益，早期项目会停留在 PoC。",
        positiveCompanies: ["Snowflake", "Databricks", "Microsoft", "Amazon", "Alphabet / Google", "Cloudflare", "CrowdStrike", "Palo Alto Networks", "Elastic", "MongoDB"],
        watchKpis: ["time-to-data", "permission error rate", "audit coverage", "PoC-to-production conversion"],
        sourceIds: ["snowflake-cortex-official", "databricks-ai-official", "crowdstrike-charlotte-official"]
      },
      {
        name: "系统集成 TCO",
        metric: "实施周期、定制开发成本、维护人天",
        direction: "TCO 下降会扩大中型企业渗透率",
        whyItMatters: "Agent 落地依赖 ERP、CRM、客服、财务、人力等系统连接，集成复杂度决定 ROI 起点。",
        upsideRead: "具备行业模板、连接器生态和低代码编排的平台受益。",
        downsideRead: "若集成高度项目制，软件毛利和复制速度都会下降。",
        positiveCompanies: ["ServiceNow", "Salesforce", "Microsoft", "Palantir", "SAP", "Oracle", "UiPath", "金蝶国际", "用友网络", "明源云"],
        watchKpis: ["implementation cycle", "gross retention", "net retention", "integration cost", "template reuse rate"],
        sourceIds: ["servicenow-ai-official", "salesforce-agentforce-3", "palantir-aip-official"]
      }
    ]
  },
  {
    key: "robotics-bom",
    title: "具身智能 BOM / 量产敏感性",
    category: "机器人",
    maturity: "P2.2 v1 · 可用于跟踪",
    primaryQuestion: "机器人从 demo 到量产，成本曲线、可靠性和真实世界数据闭环能否同时成立？",
    thesis: "具身智能的资本市场变量不是单个模型视频，而是 BOM、执行器寿命、端侧推理延迟、Sim-to-Real 数据闭环和售后维护成本。量产速度决定硬件供应链估值弹性。",
    playbook: [
      "先看客户场景是否封闭、重复、可计费，再看本体成本和可靠性。",
      "拆分感知、计算、执行器、减速器、电机、传感器和电池，不把机器人链条只看成模型链条。",
      "中国供应链重点看执行器、无框力矩电机、减速器、丝杠、传感器和整机代工。"
    ],
    variables: [
      {
        name: "执行器 / 减速器 / 电机成本",
        metric: "BOM 占比、寿命、故障率、量产良率",
        direction: "核心零部件降本会打开整机量产空间",
        whyItMatters: "人形机器人和工业移动机器人对关节模组、无框力矩电机、减速器和传感器依赖极高，成本曲线决定商业化速度。",
        upsideRead: "执行器、减速器、电机、丝杠和精密制造公司受益。",
        downsideRead: "若可靠性不足，售后和停机成本会吞噬硬件毛利。",
        positiveCompanies: ["Tesla", "NVIDIA", "ABB", "Fanuc", "Yaskawa", "Harmonic Drive Systems", "绿的谐波", "鸣志电器", "拓普集团", "三花智控", "汇川技术"],
        watchKpis: ["actuator ASP", "MTBF", "BOM cost", "量产良率", "售后成本率"],
        sourceIds: ["google-gemini-robotics", "nvidia-gr00t-n1", "google-gemini-robotics"]
      },
      {
        name: "端侧推理延迟与功耗",
        metric: "端到端延迟、W/token、电池续航",
        direction: "低延迟和低功耗同时改善，才可能进入移动场景",
        whyItMatters: "机器人需要实时感知、规划和控制，云端大模型能力不能直接替代端侧确定性。",
        upsideRead: "端侧 SoC、传感器融合、实时控制和边缘 AI 平台受益。",
        downsideRead: "若端侧能力不足，机器人会被限制在低动态、强约束场景。",
        positiveCompanies: ["NVIDIA", "Qualcomm", "Apple", "Tesla", "Horizon Robotics", "地平线机器人", "瑞芯微", "Ambarella"],
        watchKpis: ["control loop latency", "edge TOPS/W", "battery life", "thermal throttling", "任务成功率"],
        sourceIds: ["nvidia-gr00t-n1", "qualcomm-ai-official"]
      },
      {
        name: "Sim-to-Real 数据闭环",
        metric: "仿真覆盖率、真实数据回流、失败样本学习速度",
        direction: "数据闭环越快，模型泛化越可能形成规模壁垒",
        whyItMatters: "真实世界长尾场景昂贵且危险，仿真平台和合成数据决定训练速度，但最终必须被现实反馈校准。",
        upsideRead: "仿真平台、数字孪生、数据采集和机器人基础模型平台受益。",
        downsideRead: "若仿真偏差过大，模型在真实场景会出现不可预测失败。",
        positiveCompanies: ["NVIDIA", "Tesla", "Microsoft", "Alphabet / Google", "Amazon", "Unity", "Dassault Systemes", "Siemens"],
        watchKpis: ["sim coverage", "real-world intervention rate", "failure replay speed", "policy update cycle"],
        sourceIds: ["nvidia-gr00t-n1", "google-gemini-robotics"]
      }
    ]
  }
];

window.valuationSensitivityThemes = valuationSensitivityThemes;
