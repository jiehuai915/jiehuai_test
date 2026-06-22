const layerMatrixProfiles = {
  "能源层": {
    lens: "约束可交付算力的物理底座。",
    signal: "看可交付 MW、并网排队、PPA 质量、PUE/WUE、水资源和备用电源。",
    friction: "软件需求按周增长，电力接入、变电站、变压器和许可按年交付。",
    capex: "价值捕获在核电/低碳基荷、PPA、变压器/开关柜/UPS、液冷和有电力入口的数据中心。",
    metrics: ["可交付 MW", "电价 / PPA 年限", "Interconnection Queue", "PUE/WUE", "备用电源成本"]
  },
  "芯片层": {
    lens: "把算法需求转化为可制造、可部署、可扩展的计算系统。",
    signal: "看 HBM 带宽/容量、CoWoS 产能、NVLink/以太网互联、ASIC 经济性和软件生态迁移成本。",
    friction: "模型架构变化快，芯片 tape-out、HBM 客户认证、先进封装扩产和整机验证周期长。",
    capex: "价值捕获在 GPU/ASIC、HBM、先进封装、基板、光模块、网络芯片、EDA/IP 和整机柜系统。",
    metrics: ["HBM Bandwidth", "CoWoS Capacity", "每瓦 token", "互联带宽", "软件迁移成本"]
  },
  "基础设施层": {
    lens: "把芯片、电力、网络、存储和调度组织成可售卖的 AI 工厂。",
    signal: "看 MFU、GPU 利用率、MTBF/MTTR、P99、TTFT、液冷交付和多租户隔离。",
    friction: "纸面 GPU 数量不等于可用产能；真实瓶颈在电力、网络拥塞、液冷、调度碎片和故障恢复。",
    capex: "价值捕获在云平台、GPU 云、AI 服务器、交换机/光模块、存储、液冷、调度 runtime 和运维自动化。",
    metrics: ["MFU", "GPU 利用率", "MTBF/MTTR", "P99 延迟", "Rack Density"]
  },
  "模型层": {
    lens: "把数据和算力压缩成可调用的智能能力。",
    signal: "看 reasoning 深度、上下文效率、多模态 grounding、模型路由、幻觉率和评测可复现性。",
    friction: "更强能力通常意味着更高推理成本、更长延迟、更复杂安全边界和更难复现的评测。",
    capex: "价值捕获在前沿模型 API、后训练数据、推理优化、小模型/路由、模型评测和专有数据飞轮。",
    metrics: ["能力评测", "TTFT", "Reasoning Token", "Hallucination Rate", "Agent Success Rate"]
  },
  "应用层": {
    lens: "把智能能力转化为现金流、数据闭环和业务结果。",
    signal: "看任务完成率、留存、ROI、系统集成深度、权限审计和结果责任。",
    friction: "Demo 到生产之间隔着权限、数据治理、业务流程、审计、人类审批和组织采纳。",
    capex: "价值捕获在系统记录入口、垂直工作流、Agent 平台、数据闭环、连接器和应用分发。",
    metrics: ["任务完成率", "ROI", "TCO", "留存", "人工介入率"]
  }
};

const chainMatrixProfiles = {
  "训练链": {
    flow: "数据/标注 -> GPU/HBM/CoWoS -> AI 服务器 -> 高速网络 -> 分布式训练 -> 基础模型。",
    dynamic: "训练链是前沿能力的资本开支主战场，所有瓶颈最终都反映为训练吞吐、失败重跑和模型质量。",
    friction: "集体通信、checkpoint I/O、数据质量、MTBF 和电力/液冷交付共同决定 GPU 是否真正产出有效训练步。",
    capex: "GPU/HBM/CoWoS、网络、存储、数据工程、训练平台和电力合同是主要资本开支。",
    metrics: ["MFU", "MBU", "Checkpoint I/O", "MTBF", "训练 token 质量"],
    page: "pages/training-chain.html"
  },
  "推理链": {
    flow: "用户请求 -> 模型路由 -> 推理引擎 -> KV Cache -> GPU/ASIC -> 响应。",
    dynamic: "推理链决定 AI 商业化毛利；reasoning 和长上下文让 token 成本、TTFT 与 P99 变成硬约束。",
    friction: "Prefill/decode 资源错配、KV cache 显存占用、batching 与 SLA 冲突、模型路由错误会吞噬毛利。",
    capex: "推理芯片、推理云、runtime、cache、模型路由、边缘节点和观测计费系统捕获价值。",
    metrics: ["TTFT", "P99", "每 token 成本", "KV Cache 命中率", "QPS/TPS"],
    page: "pages/inference-chain.html"
  },
  "企业落地链": {
    flow: "企业数据 -> 数据治理 -> RAG/GraphRAG -> 权限系统 -> 行业模型 -> Agent -> 业务系统。",
    dynamic: "企业落地链把 AI 从试点带入生产，核心是可信数据、权限继承、审计和可衡量 ROI。",
    friction: "遗留系统、数据质量、权限映射、多租户隔离、幻觉和系统集成 TCO 会拖慢落地。",
    capex: "数据平台、连接器、RAG/GraphRAG、行业评测、Agent 编排、安全审计和咨询实施捕获价值。",
    metrics: ["Hallucination Rate", "ROI", "TCO", "数据覆盖率", "权限命中率"],
    page: "pages/enterprise-chain.html"
  },
  "数据中心链": {
    flow: "土地/选址 -> 变电站/PPA -> 机房 -> 配电/UPS -> CDU/液冷 -> 服务器机柜 -> 运维。",
    dynamic: "数据中心链把能源、芯片和基础设施合并成可交付算力，瓶颈从机房面积转为可交付 MW 和高密运维。",
    friction: "并网排队、长周期电气设备、液冷漏液风险、风冷改造和 IT/Facility 边界是关键摩擦。",
    capex: "土地电力、EPC、变压器/开关柜/UPS、液冷、AI 机柜、服务器和长期运维捕获价值。",
    metrics: ["Rack Density", "PUE/WUE", "可交付 MW", "交付周期", "MTTR"],
    page: "pages/datacenter-chain.html"
  },
  "芯片供应链": {
    flow: "EDA/IP -> 芯片设计 -> 晶圆制造 -> 先进封装 -> HBM -> 基板/测试 -> 板卡/服务器。",
    dynamic: "芯片供应链决定 AI 硬件真实供给，先进封装和 HBM 已成为比逻辑 die 更紧的产能阀门。",
    friction: "PDK/EDA 认证、known good die、CoWoS/HBM 配套、基板翘曲和测试时间共同限制交付。",
    capex: "EDA/IP、先进代工、HBM、半导体设备、基板、OSAT/ATE 和整机集成捕获价值。",
    metrics: ["CoWoS Capacity", "HBM 良率", "Tape-out 周期", "测试时间", "基板供给"],
    page: "pages/semiconductor-chain.html"
  },
  "机器人链": {
    flow: "传感器 -> 执行器 -> 机器人本体 -> 具身模型 -> 仿真训练 -> 场景部署。",
    dynamic: "机器人链把 AI 从数字世界带入物理世界，价值来自真实场景数据、本体可靠性和可复制部署。",
    friction: "Sim-to-real、端侧低延迟、功耗、硬件成本、维护可靠性和安全认证共同限制规模化。",
    capex: "执行器、减速器、传感器、端侧算力、仿真平台、遥操作数据和 RaaS 运维捕获价值。",
    metrics: ["端侧延迟", "单机 BOM", "故障率", "任务成功率", "维护成本"],
    page: "pages/embodied-chain.html"
  },
  "Agent链": {
    flow: "基础模型 -> Planning -> Memory -> Tools/MCP -> Sandbox -> HITL -> Audit。",
    dynamic: "Agent 链把模型从回答系统升级为行动系统，价值来自跨系统执行和可审计自动化。",
    friction: "长上下文衰减、工具误选、looping、权限越界、状态恢复和 MCP 供应链安全是主要摩擦。",
    capex: "Agent runtime、工具网关、记忆层、sandbox、评测观测、权限审计和垂直 Agent 应用捕获价值。",
    metrics: ["Agent Success Rate", "人工介入率", "Loop Rate", "工具调用成功率", "审计覆盖率"],
    page: "pages/agent-chain.html"
  },
  "安全评测链": {
    flow: "数据合规 -> Guardrails -> RLHF/RLAIF -> Red Teaming -> Benchmark -> Runtime 审查。",
    dynamic: "安全评测链把模型能力转化为可上线边界，监管、企业采购和事故风险都会提高其战略地位。",
    friction: "隐藏 CoT 攻击、prompt injection、合成数据退化、benchmark 污染和责任归属难以一次性解决。",
    capex: "安全评测平台、红队服务、运行时护栏、数据溯源、Agent 行动审计和第三方认证捕获价值。",
    metrics: ["Jailbreak 通过率", "评测覆盖率", "事故率", "Guardrail 误杀率", "审计留痕率"],
    page: "pages/safety-chain.html"
  }
};

const matrixLayerCompanies = {
  "能源层": ["Constellation Energy", "NextEra Energy", "Vistra", "Vertiv", "Amazon"],
  "芯片层": ["NVIDIA", "TSMC", "SK hynix", "Broadcom", "Marvell"],
  "基础设施层": ["CoreWeave", "Amazon", "Microsoft", "Vertiv", "Marvell"],
  "模型层": ["OpenAI", "Anthropic", "Alphabet / Google", "Meta Platforms", "DeepSeek"],
  "应用层": ["Microsoft", "Salesforce", "ServiceNow", "Tesla", "Alibaba Group"]
};

const matrixChainCompanies = {
  "训练链": ["NVIDIA", "TSMC", "SK hynix", "Broadcom", "CoreWeave"],
  "推理链": ["NVIDIA", "Groq", "Cerebras", "Together AI", "Fireworks AI"],
  "企业落地链": ["Microsoft", "ServiceNow", "Salesforce", "Palantir", "Snowflake"],
  "数据中心链": ["Vertiv", "Amazon", "Microsoft", "Equinix", "Digital Realty"],
  "芯片供应链": ["NVIDIA", "TSMC", "SK hynix", "ASML", "Applied Materials"],
  "机器人链": ["Tesla", "Unitree", "UBTECH", "Figure AI", "Harmonic Drive Systems"],
  "Agent链": ["OpenAI", "Anthropic", "Microsoft", "ServiceNow", "Salesforce"],
  "安全评测链": ["Anthropic", "OpenAI", "Datadog", "Cloudflare", "CrowdStrike"]
};

const matrixLayerSources = {
  "能源层": ["iea-energy-ai", "google-kairos", "amazon-x-energy", "constellation-microsoft-ppa"],
  "芯片层": ["nvidia-rubin-2026", "micron-hbm4-vera-rubin", "tsmc-2025-annual", "broadcom-cpo-official"],
  "基础设施层": ["openai-stargate", "xai-colossus", "meta-llama-24k", "nvidia-gb200-nvl72"],
  "模型层": ["openai-o3-o4-mini", "google-gemini-25", "anthropic-claude-37", "deepseek-r1"],
  "应用层": ["openai-codex", "github-copilot-coding-agent", "salesforce-agentforce-3", "servicenow-ai-official"]
};

const matrixChainSources = {
  "训练链": ["meta-llama-24k", "nvidia-rubin-2026", "skhynix-official", "broadcom-cpo-official"],
  "推理链": ["nvidia-dynamo", "openai-o3-o4-mini", "cloudflare-ai-official"],
  "企业落地链": ["salesforce-agentforce-3", "servicenow-ai-official", "palantir-aip-official", "snowflake-cortex-official"],
  "数据中心链": ["iea-energy-ai", "nvidia-gb200-nvl72", "openai-stargate", "vertiv-official"],
  "芯片供应链": ["tsmc-2025-annual", "micron-hbm4-vera-rubin", "skhynix-official", "applied-materials-official"],
  "机器人链": ["google-gemini-robotics", "nvidia-gr00t-n1", "figure-ai-official", "unitree-official"],
  "Agent链": ["openai-codex", "salesforce-agentforce-3", "langchain-langsmith-official", "servicenow-ai-official"],
  "安全评测链": ["nist-ai-rmf", "openai-preparedness", "crowdstrike-charlotte-official", "datadog-llm-observability-official"]
};

function matrixCompanyList(layer, chain) {
  return [...new Set([...(matrixLayerCompanies[layer] || []), ...(matrixChainCompanies[chain] || [])])].slice(0, 6);
}

function matrixSourceList(layer, chain) {
  return [...new Set([...(matrixLayerSources[layer] || []), ...(matrixChainSources[chain] || [])])].slice(0, 8);
}

const matrixOverrides = {
  "能源层|训练链": {
    thesis: "训练规模首先被可交付电力、冷却和故障恢复限制，电力不是成本项而是模型能力上限。",
    watch: ["训练园区可交付 MW", "PPA 年限与价格", "液冷电力联调周期"]
  },
  "能源层|推理链": {
    thesis: "推理负载从突发训练转为持续基荷，电价、PUE 和区域负载率直接进入每 token 毛利。",
    watch: ["推理区域电价", "负载率", "PUE 与尾延迟的权衡"]
  },
  "能源层|企业落地链": {
    thesis: "企业私有化和边缘部署把能耗、机房合规和数据驻留带入项目 TCO。",
    watch: ["私有部署能耗", "边缘机房容量", "数据驻留要求"]
  },
  "能源层|数据中心链": {
    thesis: "这是能源层最直接的价值出口：土地、电网、PPA、水资源和液冷共同决定 AI 数据中心能否投产。",
    watch: ["Interconnection Queue", "变电站交付", "水资源许可"]
  },
  "能源层|芯片供应链": {
    thesis: "晶圆厂、HBM 厂、封装厂都是高耗能资产，电力和水资源会影响半导体扩产节奏。",
    watch: ["Fab 电力", "超纯水", "区域能源政策"]
  },
  "能源层|机器人链": {
    thesis: "机器人部署半径取决于端侧功耗、电池、充电基础设施和场景电力改造。",
    watch: ["续航", "充电时间", "工业场景电力改造"]
  },
  "能源层|Agent链": {
    thesis: "Agent 会把一次问答变成多轮推理和工具调用，长期拉高持续推理电力需求。",
    watch: ["工具调用次数", "reasoning token", "区域推理电力"]
  },
  "能源层|安全评测链": {
    thesis: "红队、私有评测和合规沙箱需要隔离算力与数据驻留，安全也会消耗真实能源预算。",
    watch: ["评测集群用电", "隔离环境", "数据驻留区域"]
  },
  "芯片层|训练链": {
    thesis: "GPU、HBM、NVLink、CoWoS 和网络芯片共同决定训练上限，单卡峰值只是故事开头。",
    watch: ["HBM4 认证", "CoWoS 产能", "NVLink/以太网路线"]
  },
  "芯片层|推理链": {
    thesis: "推理经济性由显存、带宽、ASIC、KV cache 和每瓦 token 产出共同定义。",
    watch: ["每 token 成本", "HBM 容量", "推理 ASIC TCO"]
  },
  "芯片层|企业落地链": {
    thesis: "企业部署会在云端 GPU、私有推理服务器、端侧 SoC 和安全隔离硬件之间取舍。",
    watch: ["私有推理盒", "端侧 SoC", "安全芯片/TEE"]
  },
  "芯片层|数据中心链": {
    thesis: "机柜级芯片平台反向定义服务器、电源、网卡、光模块和液冷工程。",
    watch: ["整柜功率", "液冷接口", "光模块速率"]
  },
  "芯片层|芯片供应链": {
    thesis: "这是芯片层的生产函数：EDA、制程、封装、HBM、基板、测试缺一不可。",
    watch: ["EDA sign-off", "foundry 排产", "HBM/CoWoS 配套"]
  },
  "芯片层|机器人链": {
    thesis: "机器人需要低功耗、低延迟、强感知和实时控制芯片，端侧 SoC 比云端峰值算力更重要。",
    watch: ["端侧 TOPS/W", "传感器融合", "实时控制芯片"]
  },
  "芯片层|Agent链": {
    thesis: "Agent 的长上下文与高并发工具调用会推高显存、带宽和低延迟推理芯片需求。",
    watch: ["KV cache 显存", "并发工具调用", "低延迟 ASIC"]
  },
  "芯片层|安全评测链": {
    thesis: "安全沙箱、隔离推理、TEE、模型水印和可信硬件会成为 AI 安全硬件需求。",
    watch: ["TEE", "可信执行", "隔离推理成本"]
  },
  "基础设施层|训练链": {
    thesis: "训练链在基础设施层的关键是把万卡集群从可点亮变成高 MFU、低故障、可恢复的生产系统。",
    watch: ["MFU", "MTBF", "checkpoint 恢复时间"]
  },
  "基础设施层|推理链": {
    thesis: "推理链的基础设施胜负在 prefill/decode 解耦、KV cache、路由、batching 与 P99。",
    watch: ["TTFT", "P99", "KV cache 命中率"]
  },
  "基础设施层|企业落地链": {
    thesis: "企业 AI 需要混合云、连接器、权限同步、日志审计和多租户隔离支撑。",
    watch: ["连接器覆盖", "权限同步", "审计日志完整性"]
  },
  "基础设施层|数据中心链": {
    thesis: "AI Factory 的核心不是建筑面积，而是电力、液冷、网络、存储和运维的系统集成能力。",
    watch: ["Rack Density", "交付周期", "MTTR"]
  },
  "基础设施层|芯片供应链": {
    thesis: "芯片只有被整机、机柜、网络、电源和液冷集成后，才变成可部署算力。",
    watch: ["服务器交付", "液冷兼容", "网卡/交换机配套"]
  },
  "基础设施层|机器人链": {
    thesis: "机器人规模化依赖仿真平台、数据采集、遥操作、边缘云和 OTA 运维。",
    watch: ["仿真数据量", "遥操作成本", "边缘延迟"]
  },
  "基础设施层|Agent链": {
    thesis: "Agent 生产化需要 runtime、状态存储、sandbox、工具网关、trace 和可观测性。",
    watch: ["状态恢复", "工具网关", "trace 覆盖率"]
  },
  "基础设施层|安全评测链": {
    thesis: "安全治理必须落到评测平台、审计日志、sandbox、DLP 和运行时监控。",
    watch: ["运行时监控", "DLP", "红队自动化"]
  },
  "模型层|训练链": {
    thesis: "模型层训练链关注数据配比、预训练、后训练、合成数据和评测闭环是否把 capex 变成能力。",
    watch: ["数据质量", "后训练效率", "评测可复现性"]
  },
  "模型层|推理链": {
    thesis: "推理模型、长上下文、模型路由和解码优化决定任务质量与推理成本的平衡。",
    watch: ["Reasoning Token", "模型路由准确率", "TTFT"]
  },
  "模型层|企业落地链": {
    thesis: "RAG、GraphRAG、行业微调和幻觉控制决定模型能否进入企业核心流程。",
    watch: ["幻觉率", "引用命中率", "行业 eval"]
  },
  "模型层|数据中心链": {
    thesis: "模型负载形态反向定义数据中心：训练、推理、长上下文和 reasoning 对集群设计要求不同。",
    watch: ["训练/推理配比", "上下文长度", "batch 形态"]
  },
  "模型层|芯片供应链": {
    thesis: "模型结构反向定义显存容量、带宽、互联和芯片架构需求。",
    watch: ["模型参数/激活", "KV cache", "MoE 通信"]
  },
  "模型层|机器人链": {
    thesis: "VLA、世界模型、运动规划和真实反馈决定机器人是否能跨过 sim-to-real。",
    watch: ["Sim-to-real gap", "VLA 成功率", "物理安全评测"]
  },
  "模型层|Agent链": {
    thesis: "Planning、memory、tool calling 和长上下文决定 Agent 的任务完成率和错误边界。",
    watch: ["Agent Success Rate", "工具调用正确率", "Loop Rate"]
  },
  "模型层|安全评测链": {
    thesis: "对齐、红队、隐藏 CoT 攻击和评测污染决定模型发布边界。",
    watch: ["jailbreak 通过率", "benchmark contamination", "隐藏 CoT 风险"]
  },
  "应用层|训练链": {
    thesis: "应用反馈数据回流训练链，形成下一代模型和垂直产品的专有数据资产。",
    watch: ["反馈数据质量", "用户修正", "任务结果标签"]
  },
  "应用层|推理链": {
    thesis: "应用体验直接受 TTFT、P99、并发峰值和单位任务成本约束。",
    watch: ["P99", "任务成本", "并发峰值"]
  },
  "应用层|企业落地链": {
    thesis: "企业 AI 的价值最终在 CRM、ERP、ITSM、财务、客服和 HR 等真实流程中兑现。",
    watch: ["ROI", "系统集成深度", "续费扩张"]
  },
  "应用层|数据中心链": {
    thesis: "爆款应用和企业 SLA 会把 token 需求转化为区域推理数据中心和边缘部署需求。",
    watch: ["区域 token 需求", "SLA", "边缘部署"]
  },
  "应用层|芯片供应链": {
    thesis: "应用负载决定云端 GPU、推理 ASIC、端侧 SoC 和定制芯片需求结构。",
    watch: ["端云分工", "ASIC 可行性", "端侧隐私需求"]
  },
  "应用层|机器人链": {
    thesis: "仓储、制造、巡检、护理和自动驾驶场景定义机器人 ROI、数据闭环和安全认证。",
    watch: ["场景 ROI", "安全事故率", "部署复制性"]
  },
  "应用层|Agent链": {
    thesis: "数字员工、代码 agent、销售/客服/IT agent 在权限、审批、审计和 ROI 中兑现价值。",
    watch: ["任务完成率", "人工介入率", "动作回滚率"]
  },
  "应用层|安全评测链": {
    thesis: "合规、责任边界、内容审查、人类审批和事故响应决定 AI 应用能否进入生产。",
    watch: ["事故率", "审批覆盖", "合规审计通过率"]
  }
};

function buildMatrixDeepDiveCards() {
  const cards = {};
  for (const [key, override] of Object.entries(matrixOverrides)) {
    const [layer, chain] = key.split("|");
    const layerProfile = layerMatrixProfiles[layer];
    const chainProfile = chainMatrixProfiles[chain];
    const title = `${layer} × ${chain}`;
    cards[title] = {
      kicker: "矩阵交点研究卡",
      title,
      summary: override.thesis,
      representativeCompanies: matrixCompanyList(layer, chain),
      sourceIds: matrixSourceList(layer, chain),
      nextResearch: [
        `核验 ${override.watch.join(" / ")} 的最新数据和来源。`,
        `补齐 ${layer} 与 ${chain} 交点处的订单、客户验证、供给瓶颈和风险事件。`,
        "将可量化指标绑定到 Source Registry，并标记已确认 / 待确认。"
      ],
      sections: [
        ["核心问题", [
          override.thesis,
          `层级视角：${layerProfile.lens}`,
          `链条流向：${chainProfile.flow}`,
          `观察信号：${layerProfile.signal}`
        ]],
        ["接口摩擦", [
          layerProfile.friction,
          chainProfile.friction,
          `交点摩擦：${chainProfile.dynamic}`
        ]],
        ["代表公司", [
          ...matrixCompanyList(layer, chain).map((name) => `<button class="matrix-company-link" type="button" data-matrix-company-query="${name}">${name}</button>`)
        ]],
        ["下一步研究", [
          `跟踪指标：${[...new Set([...layerProfile.metrics, ...chainProfile.metrics, ...override.watch])].slice(0, 8).join(" / ")}`,
          `深度页：<a href="${chainProfile.page}">进入${chain}</a> / <a href="pages/${layer === "能源层" ? "power" : layer === "芯片层" ? "silicon" : layer === "基础设施层" ? "infra" : layer === "模型层" ? "model" : "app"}.html">进入${layer}</a>`,
          "补齐来源、公司、量化指标和最新事件后，可升级为独立投资研究卡。"
        ]],
        ["Source Registry", [
          ...matrixSourceList(layer, chain).map((id) => `<a href="pages/sources.html#${id}">${id}</a>`)
        ]],
        ["CAPEX / 价值捕获", [
          layerProfile.capex,
          chainProfile.capex,
          "优先看能否把瓶颈变成定价权、长期合同、生态切换成本或数据飞轮。"
        ]]
      ]
    };
  }
  return cards;
}

window.matrixDeepDiveCards = buildMatrixDeepDiveCards();
