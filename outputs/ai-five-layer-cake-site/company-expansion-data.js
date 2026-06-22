const companySourceThemes = {
  energy: ["iea-energy-ai"],
  nuclear: ["iea-energy-ai", "google-kairos", "amazon-x-energy", "constellation-microsoft-ppa"],
  chip: ["nvidia-rubin-2026", "tsmc-2025-annual", "asml-2025-annual"],
  hbm: ["micron-hbm4-vera-rubin", "samsung-hbm4"],
  infra: ["nvidia-gb200-nvl72", "openai-stargate", "meta-llama-24k"],
  inference: ["nvidia-dynamo", "openai-o3-o4-mini"],
  model: ["openai-o3-o4-mini", "google-gemini-25", "anthropic-claude-37"],
  agent: ["openai-codex", "salesforce-agentforce-3", "google-agentspace"],
  robotics: ["google-gemini-robotics", "nvidia-gr00t-n1"],
  safety: ["nist-ai-rmf", "openai-preparedness"]
};

const companyOverrides = {
  NVIDIA: {
    aiExposure: "极高",
    riskRating: "中高",
    themes: ["机柜级 AI 平台", "CUDA 锁定", "NVLink/NVSwitch", "推理 runtime"],
    sourceIds: ["nvidia-rubin-2026", "nvidia-gb200-nvl72", "nvidia-dynamo"]
  },
  TSMC: {
    aiExposure: "极高",
    riskRating: "中高",
    themes: ["先进制程", "CoWoS 供给阀门", "3D 封装"],
    sourceIds: ["tsmc-2025-annual"]
  },
  "SK hynix": {
    aiExposure: "极高",
    riskRating: "中高",
    themes: ["HBM3E/4", "TSV 堆叠", "客户认证"],
    sourceIds: ["micron-hbm4-vera-rubin", "samsung-hbm4"]
  },
  Micron: {
    aiExposure: "高",
    riskRating: "中高",
    themes: ["HBM4 第二来源", "北美内存链", "推理显存带宽"],
    sourceIds: ["micron-hbm4-vera-rubin"]
  },
  "Samsung Electronics": {
    aiExposure: "高",
    riskRating: "中高",
    themes: ["HBM4 追赶", "Foundry+Memory", "逻辑 die 协同"],
    sourceIds: ["samsung-hbm4"]
  },
  ASML: {
    aiExposure: "高",
    riskRating: "中",
    themes: ["EUV 垄断", "High-NA", "先进逻辑/DRAM 节点"],
    sourceIds: ["asml-2025-annual"]
  },
  "Constellation Energy": {
    aiExposure: "高",
    riskRating: "中",
    themes: ["核电 PPA", "24/7 清洁基荷", "AI 电力稀缺"],
    sourceIds: ["constellation-microsoft-ppa", "iea-energy-ai"]
  },
  Microsoft: {
    aiExposure: "极高",
    riskRating: "中",
    themes: ["Azure AI", "Copilot/Agent 分发", "企业身份权限", "AI 电力采购"],
    sourceIds: ["constellation-microsoft-ppa", "openai-stargate", "github-copilot-coding-agent"]
  },
  "Alphabet / Google": {
    aiExposure: "极高",
    riskRating: "中",
    themes: ["TPU 垂直整合", "Gemini", "AI 搜索重构", "先进核能 PPA"],
    sourceIds: ["google-gemini-25", "google-agentspace", "google-kairos", "google-gemini-robotics"]
  },
  OpenAI: {
    aiExposure: "极高",
    riskRating: "高",
    themes: ["Reasoning Model", "ChatGPT 分发", "Agent 平台", "Stargate CAPEX"],
    sourceIds: ["openai-o3-o4-mini", "openai-codex", "openai-stargate", "openai-preparedness"]
  },
  Anthropic: {
    aiExposure: "极高",
    riskRating: "高",
    themes: ["长上下文", "Extended Thinking", "企业安全", "MCP 生态"],
    sourceIds: ["anthropic-claude-37", "nist-ai-rmf"]
  },
  Salesforce: {
    aiExposure: "高",
    riskRating: "中",
    themes: ["Agentforce", "CRM 系统记录", "企业工作流"],
    sourceIds: ["salesforce-agentforce-3"]
  },
  "Figure AI": {
    aiExposure: "高",
    riskRating: "高",
    themes: ["人形机器人", "具身模型", "制造/物流试点"],
    sourceIds: ["nvidia-gr00t-n1", "google-gemini-robotics"]
  },
  "Agility Robotics": {
    aiExposure: "中高",
    riskRating: "高",
    themes: ["仓储机器人", "RaaS", "本体可靠性"],
    sourceIds: ["google-gemini-robotics", "nvidia-gr00t-n1"]
  }
};

function inferCompanyMeta(company) {
  const tags = [...company.layers, ...company.chains, ...(company.products || [])].join(" ");
  const themes = [];
  let sourceIds = [];

  if (tags.includes("能源层")) {
    themes.push("电力约束", "PPA/并网", "AI 数据中心负载");
    sourceIds = sourceIds.concat(companySourceThemes.energy);
  }
  if (tags.includes("核") || tags.includes("SMR")) {
    themes.push("核能基荷", "SMR 可选权");
    sourceIds = sourceIds.concat(companySourceThemes.nuclear);
  }
  if (tags.includes("芯片层") || tags.includes("芯片供应链") || tags.includes("ASIC") || tags.includes("EUV")) {
    themes.push("先进半导体", "供应链卡点");
    sourceIds = sourceIds.concat(companySourceThemes.chip);
  }
  if (tags.includes("HBM") || tags.includes("DRAM")) {
    themes.push("显存带宽", "HBM 代际升级");
    sourceIds = sourceIds.concat(companySourceThemes.hbm);
  }
  if (tags.includes("基础设施层") || tags.includes("数据中心链")) {
    themes.push("AI Factory", "高密机柜", "集群可靠性");
    sourceIds = sourceIds.concat(companySourceThemes.infra);
  }
  if (tags.includes("推理链")) {
    themes.push("推理成本", "TTFT/P99", "KV Cache");
    sourceIds = sourceIds.concat(companySourceThemes.inference);
  }
  if (tags.includes("模型层")) {
    themes.push("前沿模型", "后训练", "长上下文");
    sourceIds = sourceIds.concat(companySourceThemes.model);
  }
  if (tags.includes("Agent") || tags.includes("企业落地链")) {
    themes.push("Agent 工作流", "企业系统入口", "工具调用");
    sourceIds = sourceIds.concat(companySourceThemes.agent);
  }
  if (tags.includes("机器人链") || tags.includes("机器人")) {
    themes.push("具身智能", "Sim-to-Real", "端侧推理");
    sourceIds = sourceIds.concat(companySourceThemes.robotics);
  }
  if (tags.includes("安全评测链")) {
    themes.push("AI 治理", "评测红队", "合规护栏");
    sourceIds = sourceIds.concat(companySourceThemes.safety);
  }

  const aiExposure = company.layers.includes("芯片层") || company.layers.includes("模型层") || company.chains.includes("训练链")
    ? "极高"
    : company.layers.includes("基础设施层") || company.chains.includes("推理链") || company.chains.includes("数据中心链")
      ? "高"
      : "中高";

  const riskRating = company.status === "Private" || company.chains.includes("机器人链")
    ? "高"
    : company.layers.includes("能源层") && !company.layers.includes("应用层")
      ? "中"
      : "中高";

  return {
    aiExposure,
    riskRating,
    themes: [...new Set(themes)].slice(0, 6),
    sourceIds: [...new Set(sourceIds)].slice(0, 4)
  };
}

const companyExpansionRows = [
  ["AMD", "AMD", "Public", ["芯片层"], ["训练链", "推理链", "芯片供应链"], "GPU/CPU/Xilinx FPGA 组合、开放 ROCm 生态和云厂商第二来源价值。", "AI 客户需要降低单一 GPU 平台依赖，MI 系列和 EPYC 在训练、推理与服务器 BOM 中共享预算。", "软件生态弱于 CUDA、HBM 供给、客户认证节奏和毛利率波动。", ["Instinct MI300/MI350", "EPYC", "ROCm", "Pensando"], "极高", "中高", ["GPU 第二来源", "CPU+GPU 平台", "开放软件栈"], ["nvidia-rubin-2026", "micron-hbm4-vera-rubin"]],
  ["Intel", "INTC", "Public", ["芯片层", "基础设施层"], ["推理链", "芯片供应链", "数据中心链"], "x86 数据中心存量、先进封装、Foundry 转型和 Gaudi/NPU 产品线。", "AI PC、企业推理和美国本土代工安全溢价给转型留出战略窗口。", "制程追赶、Foundry 客户获取、资本开支压力和执行风险。", ["Xeon", "Gaudi", "Intel Foundry", "Foveros"], "高", "高", ["美国本土制造", "先进封装", "企业推理"], ["tsmc-2025-annual", "nvidia-dynamo"]],
  ["Marvell", "MRVL", "Public", ["芯片层", "基础设施层"], ["推理链", "数据中心链", "芯片供应链"], "高速 SerDes、DSP、定制 ASIC 和数据中心互联芯片能力。", "云厂商自研 ASIC 与光互联升级拉动定制硅和高速连接价值量。", "客户集中、ASIC 项目节奏、Broadcom 竞争和网络代际切换。", ["Custom ASIC", "PAM4 DSP", "DPU", "Switching"], "高", "中高", ["定制 ASIC", "高速 SerDes", "AI 互联"], ["nvidia-gb200-nvl72", "nvidia-dynamo"]],
  ["Synopsys", "SNPS", "Public", ["芯片层"], ["芯片供应链"], "EDA 全流程、IP 库、验证工具和先进节点客户嵌入。", "AI ASIC、chiplet、HBM 控制器与先进封装复杂度提高，EDA 从工具变成设计产能。", "客户内制工具、监管并购审查和半导体设计周期。", ["Design Compiler", "VCS", "HAPS", "IP"], "高", "中", ["EDA 稀缺", "AI ASIC 设计", "验证瓶颈"], ["tsmc-2025-annual", "asml-2025-annual"]],
  ["Cadence", "CDNS", "Public", ["芯片层"], ["芯片供应链"], "数字/模拟混合 EDA、系统仿真、封装协同设计和 IP 组合。", "Chiplet 与 3D 封装要求硅片、封装、热和电源完整性协同优化。", "估值、客户集中和设计活动周期。", ["Virtuoso", "Innovus", "Allegro", "Palladium"], "高", "中", ["3D-IC 设计", "封装协同", "验证仿真"], ["tsmc-2025-annual"]],
  ["Arm", "ARM", "Public", ["芯片层"], ["推理链", "芯片供应链", "机器人链"], "低功耗 CPU IP、移动/边缘生态和云 CPU 渗透。", "AI 推理从数据中心下沉到端侧和机器人，能效型 CPU/NPU 控制面价值上升。", "RISC-V 替代、授权模式压力和客户自研。", ["Neoverse", "Cortex", "Ethos", "Arm CSS"], "高", "中高", ["低功耗 IP", "边缘推理", "云 CPU"], ["nvidia-gr00t-n1", "nvidia-dynamo"]],
  ["Astera Labs", "ALAB", "Public", ["芯片层", "基础设施层"], ["数据中心链", "芯片供应链"], "PCIe/CXL retimer、内存互联和云客户验证。", "GPU 集群 I/O 拓扑复杂化，retimer 与 CXL 连接件成为高密服务器稳定性卡点。", "客户集中、竞争进入、代际迭代快和估值波动。", ["Aries", "Taurus", "Scorpio", "CXL Connectivity"], "高", "高", ["PCIe/CXL", "AI 服务器连接", "信号完整性"], ["nvidia-gb200-nvl72"]],
  ["Coherent", "COHR", "Public", ["芯片层", "基础设施层"], ["训练链", "数据中心链", "芯片供应链"], "光通信材料、激光器、收发器和 VCSEL/SiC 工艺组合。", "AI 集群带宽升级推动 800G/1.6T 光模块与硅光子上量。", "价格竞争、客户认证、产能利用率和产品良率。", ["800G/1.6T Optics", "Lasers", "VCSEL", "InP"], "高", "中高", ["高速光模块", "硅光子前置", "数据中心互联"], ["meta-llama-24k", "nvidia-gb200-nvl72"]],
  ["Lumentum", "LITE", "Public", ["芯片层", "基础设施层"], ["数据中心链", "芯片供应链"], "光器件、激光芯片和云数据中心光连接客户基础。", "AI Fabric 拉高短距/中距光连接密度，激光器和光器件价值占比提高。", "电信周期拖累、客户集中和模块价格下行。", ["Datacom Lasers", "VCSEL", "Coherent Components"], "中高", "中高", ["激光器", "800G/1.6T", "AI 光互联"], ["nvidia-gb200-nvl72"]],
  ["Credo Technology", "CRDO", "Public", ["芯片层", "基础设施层"], ["数据中心链", "芯片供应链", "推理链"], "高速 SerDes、AEC、有源铜缆、DSP 和低功耗互联芯片能力。", "AI 集群短距互联需要在铜缆、光模块和 CPO 之间做功耗/成本/距离权衡，Credo 卡在高速连接控制面。", "客户集中、代际切换、Broadcom/Marvell 竞争和估值波动。", ["HiWire AEC", "Optical DSP", "SerDes IP", "PCIe/CXL Connectivity"], "高", "高", ["AEC", "DSP", "高速 SerDes", "AI 互联"], ["credo-official", "nvidia-spectrum-x-official"]],
  ["Fabrinet", "FN", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "光通信精密制造、光模块代工、激光/光器件装配和全球客户验证。", "800G/1.6T 光模块放量时，制造良率、交付节拍和客户认证会成为真实供给约束。", "客户集中、价格压力、产品代际切换和良率爬坡。", ["Optical Manufacturing", "Datacom Modules", "Laser/Photonics Assembly"], "高", "中高", ["光模块代工", "精密制造", "AI 光互联"], ["fabrinet-official", "nvidia-spectrum-x-official"]],
  ["Zhongji Innolight", "300308.SZ", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "高速光模块、数据中心客户认证、800G/1.6T 产品路线和中国光通信供应链位置。", "AI 集群后端网络升级会拉动 800G/1.6T 光模块需求，头部模块厂受益于速率迁移和客户集中。", "客户集中、价格竞争、良率、海外监管和速率代际切换。", ["800G Optical Transceiver", "1.6T Optics", "Datacenter Interconnect"], "高", "中高", ["高速光模块", "800G/1.6T", "中国光通信"], ["innolight-official", "nvidia-spectrum-x-official"]],
  ["Eoptolink", "300502.SZ", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "高速光模块、数据中心互联产品和海外云客户导入能力。", "云厂商 AI Fabric 扩容提高光模块速率和数量，新易盛受益于高速模块放量。", "客户集中、价格竞争、认证节奏、汇率和良率。", ["800G Optical Modules", "Datacenter Transceivers", "Coherent Optics"], "高", "中高", ["高速光模块", "数据中心互联", "光通信"], ["eoptolink-official", "nvidia-spectrum-x-official"]],
  ["Accelink Technologies", "002281.SZ", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "光器件、光芯片、光模块和通信设备客户基础。", "光芯片和光器件是高速模块成本与良率底座，AI 网络升级提升高端光器件战略价值。", "电信周期、数据中心客户突破、价格竞争和高端光芯片良率。", ["Optical Chips", "Optical Devices", "Transceivers"], "中高", "中高", ["光芯片", "光器件", "光模块"], ["accelink-official", "nvidia-spectrum-x-official"]],
  ["Amphenol", "APH", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "高速连接器、线缆、背板和全球制造能力。", "高密 AI 服务器的铜缆、连接器、电源与信号完整性需求显著提升。", "周期性订单、价格竞争和客户库存调整。", ["High-speed Connectors", "Cables", "Backplane", "Power Interconnect"], "高", "中", ["高速连接", "铜缆互联", "整柜 BOM"], ["nvidia-gb200-nvl72"]],
  ["TE Connectivity", "TEL", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链", "机器人链"], "连接器、传感器、线束和工业/汽车客户深度。", "AI 数据中心和机器人都在提高连接可靠性、耐热与高电流设计要求。", "工业周期、库存去化和竞争。", ["Connectors", "Sensors", "Cable Assemblies"], "中高", "中", ["连接可靠性", "机器人线束", "高密配电"], ["nvidia-gb200-nvl72", "google-gemini-robotics"]],
  ["Ibiden", "4062.T", "Public", ["芯片层"], ["芯片供应链"], "高端 IC 载板、ABF 基板工艺和头部客户认证。", "GPU/ASIC 封装面积变大，ABF 基板成为先进封装之外的隐性供给卡点。", "客户集中、扩产周期、良率和价格回落。", ["ABF Substrate", "High-end IC Package Substrate"], "高", "中高", ["ABF 基板", "封装面积扩张", "隐形卡点"], ["tsmc-2025-annual"]],
  ["Unimicron", "3037.TW", "Public", ["芯片层"], ["芯片供应链"], "IC 载板、PCB 和高端封装基板产能。", "AI 加速器和网络芯片推动高层数、高良率基板需求。", "周期波动、价格竞争、客户认证和产能错配。", ["IC Substrate", "HDI PCB", "ABF"], "中高", "中高", ["IC 载板", "AI 服务器 PCB", "封装配套"], ["tsmc-2025-annual"]],
  ["Shengyi Technology", "600183.SS", "Public", ["芯片层", "基础设施层"], ["芯片供应链", "数据中心链"], "覆铜板、低损耗高速材料、封装材料和 PCB 基础材料客户。", "AI 服务器、交换机和高速背板需要低介电损耗 CCL，材料性能直接影响高速信号完整性。", "材料认证周期、价格竞争、下游 PCB 周期和高端材料良率。", ["Copper Clad Laminate", "Low-loss CCL", "PCB Materials"], "中高", "中", ["CCL", "高速 PCB 材料", "信号完整性"], ["shengyi-official", "nvidia-spectrum-x-official"]],
  ["WUS Printed Circuit", "002463.SZ", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "高速 PCB、服务器/交换机板、汽车板和高多层制造能力。", "AI 服务器和交换机背板速率提升后，高多层 PCB、低损耗材料和加工良率成为重要瓶颈。", "客户集中、周期波动、材料成本和高端良率。", ["High-speed PCB", "AI Server PCB", "Switch PCB", "Backplane"], "高", "中高", ["AI 服务器 PCB", "交换机 PCB", "高多层板"], ["wus-official", "nvidia-spectrum-x-official"]],
  ["Shennan Circuits", "002916.SZ", "Public", ["芯片层", "基础设施层"], ["芯片供应链", "数据中心链"], "PCB、封装基板、电子装联和通信/数据中心客户基础。", "AI 网络设备、服务器和高速通信板卡升级提高 PCB 层数、材料等级和制程难度。", "通信周期、价格竞争、封装基板爬坡和客户认证。", ["PCB", "Package Substrate", "High-speed Communication Board"], "中高", "中高", ["PCB", "封装基板", "通信板卡"], ["shennan-official", "nvidia-spectrum-x-official"]],
  ["Dongshan Precision", "002384.SZ", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "PCB/FPC、精密制造、光电显示和通信电子客户基础。", "AI 服务器、交换机和光通信设备升级会拉动高多层板、精密结构件和连接相关制造需求。", "消费电子周期、客户集中、高端 PCB 良率和价格竞争。", ["PCB", "FPC", "Precision Components", "Optoelectronics"], "中高", "中高", ["AI 服务器 PCB", "精密制造", "光通信配套"], ["dsbj-official", "nvidia-spectrum-x-official"]],
  ["Han's Laser", "002008.SZ", "Public", ["芯片层", "基础设施层"], ["芯片供应链", "数据中心链"], "激光加工设备、PCB/半导体/光通信制造设备和精密自动化能力。", "高速 PCB、光模块和半导体后道制造升级提高精密激光加工、切割、焊接和检测设备需求。", "制造业周期、设备竞争、客户资本开支和新业务验证。", ["Laser Processing", "PCB Equipment", "Semiconductor Equipment", "Automation"], "中", "中高", ["激光设备", "PCB 制造设备", "光通信制造"], ["hanslaser-official"]],
  ["Sanan Optoelectronics", "600703.SS", "Public", ["芯片层"], ["芯片供应链", "数据中心链"], "LED、化合物半导体、光电器件和衬底/外延制造经验。", "光芯片和化合物半导体能力是高速光通信、激光器和部分硅光路线的底层材料与器件基础。", "LED 周期、高端光芯片认证、价格竞争和资本开支回报。", ["LED", "Compound Semiconductor", "Optoelectronics", "Laser/PD Devices"], "中高", "中高", ["光芯片", "化合物半导体", "光电器件"], ["sanan-official", "broadcom-cpo-official"]],
  ["Cambridge Industries Group", "603083.SS", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "光模块、宽带接入设备、无线网络设备和通信客户基础。", "AI 数据中心光模块需求外溢到更多模块供应商，剑桥科技受益于高速模块和海外客户验证。", "客户集中、价格竞争、速率迁移、库存和毛利率波动。", ["Optical Modules", "Broadband Access", "Wireless Network Equipment"], "高", "中高", ["光模块", "通信设备", "数据中心互联"], ["cigtech-official", "nvidia-spectrum-x-official"]],
  ["HGTECH", "000988.SZ", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "激光设备、光通信器件、传感与智能制造能力。", "光通信器件和激光装备同时连接光模块供应链与制造设备升级，是 AI 网络硬件的配套标的。", "制造业周期、光通信客户突破、毛利率和产品结构。", ["Laser Equipment", "Optical Communication Devices", "Sensors", "Smart Manufacturing"], "中高", "中高", ["光通信器件", "激光设备", "智能制造"], ["hgtech-official", "nvidia-spectrum-x-official"]],
  ["YOFC", "6869.HK", "Public", ["基础设施层"], ["数据中心链"], "光纤预制棒、光纤光缆、通信网络和海外项目交付。", "AI 数据中心和园区互联增加光纤布线、园区网络和长距离互联需求，光纤光缆是底层连接资源。", "电信资本开支周期、价格竞争、海外项目和数据中心客户渗透。", ["Optical Fibre", "Optical Cable", "Preform", "Network Solutions"], "中", "中", ["光纤光缆", "数据中心布线", "园区互联"], ["yofc-official"]],
  ["Hengtong Optic-Electric", "600487.SS", "Public", ["基础设施层", "能源层"], ["数据中心链"], "光纤光缆、海缆、电力电缆、通信网络和能源互联能力。", "AI 数据中心园区建设同时需要通信光缆、电力连接和能源互联，亨通处在光电基础设施交叉位置。", "电信周期、海缆项目、原材料、海外政策和价格竞争。", ["Optical Fibre Cable", "Submarine Cable", "Power Cable", "Network Solutions"], "中", "中", ["光纤光缆", "能源互联", "数据中心连接"], ["hengtong-official", "iea-energy-ai"]],
  ["TFC Communication", "300394.SZ", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "光器件、光引擎部件、精密封装和高速光模块配套能力。", "800G/1.6T 模块升级会提高光器件、陶瓷/金属件、封装和耦合组件价值量。", "客户集中、良率、价格竞争、速率迁移和海外客户验证。", ["Optical Components", "Optical Engine Components", "Precision Packaging"], "高", "中高", ["光器件", "光引擎", "高速光模块配套"], ["tfci-official", "nvidia-spectrum-x-official"]],
  ["Broadex Technologies", "300548.SZ", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "PLC 分路器、光器件、光模块和光通信客户基础。", "AI 光互联升级带来高速模块和光器件配套需求，博创科技处在器件与模块交界位置。", "客户突破、价格竞争、电信周期、高速模块认证和毛利率。", ["PLC Splitter", "Optical Components", "Optical Modules"], "中高", "中高", ["光器件", "光模块", "长芯博创"], ["broadex-official", "nvidia-spectrum-x-official"]],
  ["Yuanjie Semiconductor", "688498.SS", "Public", ["芯片层"], ["芯片供应链", "数据中心链"], "光芯片、激光器芯片和高速光通信器件研发制造。", "光模块竞争的上游卡点在激光器和光芯片，源杰科技代表国产光芯片的高弹性环节。", "高端良率、客户认证、价格竞争、研发投入和需求波动。", ["Laser Chips", "Optical Chips", "Datacom Lasers"], "高", "高", ["光芯片", "激光器", "国产替代"], ["yuanjie-official", "nvidia-spectrum-x-official"]],
  ["Applied Optoelectronics", "AAOI", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "数据中心光模块、激光器、光器件和垂直整合制造能力。", "AI 数据中心光模块拉货会放大 AAOI 的收入弹性，但客户集中和毛利波动也更明显。", "客户集中、价格竞争、库存周期、良率和产品代际切换。", ["Datacenter Optical Modules", "Lasers", "Optical Components"], "高", "高", ["光模块", "激光器", "AAOI"], ["aaois-official", "nvidia-spectrum-x-official"]],
  ["Corning", "GLW", "Public", ["基础设施层"], ["数据中心链"], "光纤、数据中心布线、玻璃材料和全球光通信客户基础。", "AI 数据中心园区互联和高密布线提升光纤、连接、布线系统和低损耗材料需求。", "显示玻璃周期、电信资本开支、价格竞争和项目节奏。", ["Optical Fiber", "Data Center Cabling", "Connectivity", "Glass Materials"], "中高", "中", ["光纤", "数据中心布线", "GLW"], ["corning-official"]],
  ["AXT", "AXTI", "Public", ["芯片层"], ["芯片供应链"], "InP、GaAs 等化合物半导体衬底材料供应。", "高速光芯片、激光器和探测器需要高质量 InP/GaAs 衬底，AXT 是光芯片材料端的小盘高弹性标的。", "材料周期、客户集中、价格、良率和中国供应链风险。", ["InP Substrate", "GaAs Substrate", "Compound Semiconductor Materials"], "中高", "高", ["InP 衬底", "光芯片材料", "AXTI"], ["axt-official", "broadcom-cpo-official"]],
  ["Shinko Electric", "6967.T", "Public", ["芯片层"], ["芯片供应链"], "封装基板、lead frame 和高端封装材料经验。", "高端 GPU/ASIC 出货增加带动封装基板、测试与组装配套价值。", "客户集中、母公司交易变化和周期性。", ["Package Substrate", "Lead Frame", "Assembly Materials"], "中高", "中高", ["封装基板", "AI 加速器配套", "日本材料链"], ["tsmc-2025-annual"]],
  ["Tokyo Electron", "8035.T", "Public", ["芯片层"], ["芯片供应链"], "涂胶显影、沉积、刻蚀和清洗设备全覆盖。", "先进逻辑、HBM 与先进封装提高设备步骤数和材料工程复杂度。", "出口管制、客户扩产周期和设备交期。", ["Coater/Developer", "Etch", "Deposition", "Cleaning"], "高", "中", ["半导体设备", "先进节点", "HBM 工艺"], ["asml-2025-annual", "tsmc-2025-annual"]],
  ["Lam Research", "LRCX", "Public", ["芯片层"], ["芯片供应链"], "刻蚀/沉积设备、3D NAND 与 DRAM 高深宽比工艺优势。", "HBM、GAA 和先进封装提升刻蚀沉积步骤密度。", "存储周期、出口限制和客户 capex 波动。", ["Etch", "Deposition", "SABRE", "Cryo Etch"], "高", "中", ["刻蚀沉积", "HBM/DRAM", "工艺步骤膨胀"], ["asml-2025-annual"]],
  ["KLA", "KLAC", "Public", ["芯片层"], ["芯片供应链"], "过程控制、缺陷检测、量测和良率学习曲线。", "先进封装和高价值 die 提高缺陷检测价值，known-good-die 成为经济性核心。", "客户 capex 周期、出口管制和估值。", ["Inspection", "Metrology", "Process Control"], "高", "中", ["良率控制", "先进封装检测", "缺陷经济学"], ["tsmc-2025-annual"]],
  ["Advantest", "6857.T", "Public", ["芯片层"], ["芯片供应链"], "SoC/内存测试机、AI 芯片测试客户覆盖和软件能力。", "GPU/ASIC/HBM 价值量上升，测试时间、并行测试和已知良品筛选更关键。", "半导体周期、客户集中和测试平台替代。", ["V93000", "Memory Test", "SoC Test"], "高", "中高", ["AI 芯片测试", "HBM 测试", "Known Good Die"], ["micron-hbm4-vera-rubin", "tsmc-2025-annual"]],
  ["Teradyne", "TER", "Public", ["芯片层"], ["芯片供应链", "机器人链"], "半导体测试、系统级测试和协作机器人业务。", "AI 芯片复杂度提升测试价值，机器人业务提供具身智能制造侧可选权。", "测试周期、机器人竞争和客户集中。", ["UltraFLEX", "J750", "Universal Robots", "MiR"], "中高", "中", ["芯片测试", "协作机器人", "系统级测试"], ["tsmc-2025-annual", "google-gemini-robotics"]],
  ["Disco", "6146.T", "Public", ["芯片层"], ["芯片供应链"], "晶圆切割、研磨、减薄和高精度加工设备。", "HBM/3D 封装需要更薄晶圆和更高良率的后道加工。", "设备交付、客户扩产节奏和日元/供应链。", ["Dicing Saw", "Grinder", "Polisher"], "高", "中", ["晶圆减薄", "HBM 后道", "先进封装设备"], ["micron-hbm4-vera-rubin", "tsmc-2025-annual"]],
  ["Lasertec", "6920.T", "Public", ["芯片层"], ["芯片供应链"], "EUV 掩模检测设备稀缺供给。", "EUV 图形化缺陷代价极高，掩模检测决定先进节点良率学习速度。", "客户集中、EUV 节点周期和估值波动。", ["EUV Mask Inspection", "Actinic Inspection"], "高", "中高", ["EUV 掩模检测", "先进节点良率", "日本设备稀缺"], ["asml-2025-annual"]],
  ["ASM International", "ASM.AS", "Public", ["芯片层"], ["芯片供应链"], "ALD/外延沉积和先进节点材料工程。", "GAA、背面供电、HBM 和 3D 结构增加原子级沉积价值。", "半导体周期、客户集中和竞争。", ["ALD", "Epitaxy", "PEALD"], "高", "中", ["ALD", "GAA 工艺", "材料工程"], ["asml-2025-annual", "tsmc-2025-annual"]],
  ["BE Semiconductor", "BESI.AS", "Public", ["芯片层"], ["芯片供应链"], "die bonding、hybrid bonding 和先进封装设备。", "Chiplet 与 3D 堆叠提升键合精度要求，先进封装设备弹性高。", "订单周期、技术路线切换和客户扩产节奏。", ["Hybrid Bonding", "Die Attach", "Advanced Packaging"], "高", "中高", ["Hybrid Bonding", "3D 封装", "Chiplet"], ["tsmc-2025-annual"]],
  ["ASE Technology", "ASX / 3711.TW", "Public", ["芯片层"], ["芯片供应链"], "全球 OSAT 规模、封装测试产能和客户覆盖。", "AI 芯片后道复杂度提升，OSAT 在测试、模组和先进封装配套中分得更多价值。", "台积电内封装、价格竞争、周期和毛利率。", ["OSAT", "SiP", "Advanced Packaging", "Test"], "中高", "中", ["OSAT", "封装测试", "SiP"], ["tsmc-2025-annual"]],
  ["Amkor", "AMKR", "Public", ["芯片层"], ["芯片供应链"], "封装测试全球基地、汽车/高性能封装客户和区域多元化。", "美国与亚洲先进封装布局受益于供应链韧性和 AI 芯片后道需求。", "客户集中、毛利率、资本开支和先进封装竞争。", ["Advanced Packaging", "Test", "Wafer Services"], "中高", "中", ["封装测试", "区域多元化", "AI 后道"], ["tsmc-2025-annual"]],
  ["Shin-Etsu Chemical", "4063.T", "Public", ["芯片层"], ["芯片供应链"], "半导体硅片、光刻胶、封装材料和高纯电子材料。", "先进逻辑、DRAM/HBM 和特色工艺扩产都离不开高质量硅片与材料纯度。", "硅片周期、客户库存、材料认证周期和日元成本。", ["Silicon Wafers", "Photoresist", "Electronic Materials"], "中高", "中", ["硅片", "光刻胶", "电子材料"], ["shin-etsu-official"]],
  ["SUMCO", "3436.T", "Public", ["芯片层"], ["芯片供应链"], "半导体级硅片、先进节点晶圆材料和全球晶圆厂客户。", "AI 芯片和 HBM 上游仍由硅片供给与晶圆品质决定初始良率。", "硅片价格周期、客户 capex、库存和产能利用率。", ["Silicon Wafers", "300mm Wafers", "Epitaxial Wafers"], "中高", "中", ["硅片", "晶圆材料", "先进节点"], ["sumco-official"]],
  ["GlobalWafers", "6488.TW", "Public", ["芯片层"], ["芯片供应链"], "硅片产能、区域化供应链和成熟/先进节点晶圆材料。", "地缘分散和本地化晶圆材料供给在 AI 芯片供应链韧性中价值上升。", "硅片周期、扩产回报、客户库存和价格竞争。", ["Silicon Wafers", "Specialty Wafers", "Regional Supply"], "中", "中", ["硅片", "区域供应链", "晶圆材料"], ["globalwafers-official"]],
  ["Entegris", "ENTG", "Public", ["芯片层"], ["芯片供应链"], "高纯材料、过滤、化学品处理和污染控制。", "先进节点线宽缩小和先进封装良率爬坡提高污染控制与材料纯度价值。", "设备/晶圆厂周期、客户库存、整合执行和估值。", ["Filtration", "Specialty Chemicals", "Materials Handling"], "中高", "中", ["高纯材料", "过滤", "污染控制"], ["entegris-official"]],
  ["Merck KGaA", "MRK.DE", "Public", ["芯片层"], ["芯片供应链"], "半导体电子材料、显示材料、化学品和特种材料。", "先进制程需要更复杂的前驱体、介电材料、光刻和清洗材料组合。", "欧洲能源/成本、材料认证、客户周期和汇率。", ["Semiconductor Materials", "Electronic Chemicals", "Display Materials"], "中", "中", ["电子材料", "半导体化学品", "材料工程"], ["merck-kgaa-electronics-official"]],
  ["Ajinomoto", "2802.T", "Public", ["芯片层"], ["芯片供应链"], "ABF 封装材料和高端 IC 载板关键材料。", "AI 加速器封装面积扩张放大 ABF 材料价值，载板供给和良率依赖材料体系。", "载板周期、客户集中、替代材料和扩产节奏。", ["Ajinomoto Build-up Film", "ABF", "Packaging Materials"], "高", "中", ["ABF", "封装材料", "AI 加速器基板"], ["ajinomoto-abf-official"]],
  ["Resonac", "4004.T", "Public", ["芯片层"], ["芯片供应链"], "半导体封装材料、电子材料和后道材料组合。", "先进封装、Chiplet 和 HBM 后道材料复杂度上升，提升日本材料链价值。", "材料周期、客户验证、价格压力和产品组合。", ["Packaging Materials", "Electronic Materials", "Backend Materials"], "中", "中", ["封装材料", "后道材料", "日本材料链"], ["resonac-official"]],
  ["GlobalFoundries", "GFS", "Public", ["芯片层"], ["芯片供应链", "机器人链"], "特色工艺、RF、嵌入式存储和区域供应链安全。", "AI 不只需要最先进节点，电源管理、连接、传感与边缘芯片依赖成熟特色工艺。", "先进节点缺位、价格周期和客户转单。", ["RF SOI", "FDX", "Embedded Memory"], "中", "中", ["成熟特色工艺", "边缘 AI", "供应链安全"], ["google-gemini-robotics"]],
  ["UMC", "UMC", "Public", ["芯片层"], ["芯片供应链"], "成熟制程产能、功率/显示/连接芯片客户和成本纪律。", "AI 服务器外围芯片、PMIC、控制器和工业边缘设备仍依赖成熟节点。", "成熟制程价格竞争、产能利用率和地缘风险。", ["28nm/22nm", "Specialty Process", "Foundry"], "中", "中", ["成熟节点", "AI 外围芯片", "PMIC/控制器"], ["nvidia-gb200-nvl72"]],
  ["SMIC", "0981.HK", "Public", ["芯片层"], ["芯片供应链"], "中国大陆晶圆代工规模、成熟制程客户和本土供应链位置。", "国产 AI 芯片与工业控制链需要本土代工承接成熟/部分先进节点需求。", "出口管制、先进节点设备受限、良率和毛利率。", ["Foundry", "Mature Nodes", "Specialty Process"], "中高", "高", ["国产替代", "成熟/准先进节点", "地缘供应链"], ["asml-2025-annual"]],
  ["MediaTek", "2454.TW", "Public", ["芯片层", "应用层"], ["推理链", "机器人链"], "移动 SoC、连接芯片、边缘 AI 和消费电子客户规模。", "端侧 AI、多模态助手和机器人控制器推动低功耗 NPU 与连接芯片升级。", "手机周期、客户集中、旗舰份额和高端 AI 生态。", ["Dimensity", "Genio", "Wi-Fi/BT", "Edge AI"], "中高", "中", ["端侧 AI", "低功耗 NPU", "消费入口"], ["google-gemini-robotics"]],
  ["Qualcomm", "QCOM", "Public", ["芯片层", "应用层"], ["推理链", "机器人链"], "移动 SoC、调制解调器、端侧 AI SDK 和汽车/IoT 扩张。", "AI PC、手机和机器人需要端侧推理，低功耗异构计算成为新入口。", "手机市场饱和、苹果自研、授权监管和 AI PC 竞争。", ["Snapdragon", "Hexagon NPU", "AI Hub", "Automotive"], "高", "中", ["端侧推理", "AI PC", "机器人控制"], ["nvidia-gr00t-n1", "google-gemini-robotics"]],
  ["Apple", "AAPL", "Public", ["芯片层", "应用层"], ["推理链", "Agent链"], "端侧芯片、系统级软硬件闭环、隐私架构和高价值用户入口。", "端云混合 AI 会把模型能力嵌入手机、Mac 和可穿戴主入口。", "AI 功能节奏、监管、硬件周期和模型能力依赖外部合作。", ["Apple Silicon", "Neural Engine", "Apple Intelligence"], "高", "中", ["端侧 AI", "隐私计算", "消费分发"], ["openai-o3-o4-mini"]],
  ["Cerebras", "Private", "Private", ["芯片层", "基础设施层"], ["训练链", "推理链"], "晶圆级引擎、大内存带宽和专用 AI 集群架构。", "非 GPU 路线为大模型训练/推理提供吞吐与简化并行可选项。", "生态、客户规模、制造良率和与 GPU 平台竞争。", ["Wafer Scale Engine", "CS Systems", "Inference Cloud"], "高", "高", ["晶圆级芯片", "非 GPU 路线", "大模型吞吐"], ["nvidia-rubin-2026", "nvidia-dynamo"]],
  ["Groq", "Private", "Private", ["芯片层", "基础设施层"], ["推理链"], "LPU 架构、低延迟推理和编译确定性。", "实时 Agent、语音和高频应用需要极低 TTFT 与稳定尾延迟。", "模型适配、规模经济、客户留存和 GPU/ASIC 竞争。", ["LPU", "GroqCloud", "Inference API"], "高", "高", ["低延迟推理", "实时语音/Agent", "专用推理芯片"], ["nvidia-dynamo"]],
  ["SambaNova", "Private", "Private", ["芯片层", "模型层"], ["推理链", "企业落地链"], "RDU 数据流架构、企业私有模型服务和软硬一体平台。", "企业希望用受控部署降低推理成本并保持数据驻留。", "销售周期、生态、硬件规模和云厂商竞争。", ["RDU", "Samba-1", "Enterprise AI Platform"], "中高", "高", ["数据流芯片", "企业私有 AI", "软硬一体"], ["nvidia-dynamo", "nist-ai-rmf"]],
  ["Etched", "Private", "Private", ["芯片层"], ["推理链", "芯片供应链"], "面向 Transformer 推理的专用 ASIC 设计取舍。", "若模型结构稳定，极专用芯片可能显著压低推理单 token 成本。", "模型架构变化、流片风险、客户采用和软件生态。", ["Sohu ASIC", "Transformer Inference"], "高", "高", ["专用推理 ASIC", "Token 成本", "架构押注"], ["nvidia-dynamo", "openai-o3-o4-mini"]],
  ["Tenstorrent", "Private", "Private", ["芯片层"], ["推理链", "芯片供应链"], "RISC-V、AI 加速器 IP 和可授权架构。", "客户寻找可控、可定制的 AI 加速器路线，降低专有生态绑定。", "商业化、软件生态、制造资源和头部客户获取。", ["Wormhole", "Blackhole", "RISC-V IP"], "中高", "高", ["RISC-V AI", "开放 IP", "定制加速器"], ["nvidia-dynamo"]],
  ["Equinix", "EQIX", "Public", ["基础设施层", "能源层"], ["数据中心链", "企业落地链"], "全球互联数据中心、企业客户密度、网络中立生态。", "企业 AI 推理、数据互联和低延迟部署需要靠近网络与数据入口。", "电力获取、建设周期、利率和高密改造能力。", ["IBX Data Centers", "Fabric", "Colocation"], "中高", "中", ["托管数据中心", "互联生态", "边缘推理"], ["iea-energy-ai", "nvidia-gb200-nvl72"]],
  ["Digital Realty", "DLR", "Public", ["基础设施层", "能源层"], ["数据中心链"], "全球批发数据中心资产、云客户关系和规模化园区交付。", "AI 训练/推理扩容需要大规模电力、土地和预租能力。", "电力并网、利率、租户集中和高密液冷改造。", ["Data Center Campus", "PlatformDIGITAL", "Colocation"], "中高", "中", ["批发数据中心", "电力获取", "高密改造"], ["iea-energy-ai", "openai-stargate"]],
  ["Supermicro", "SMCI", "Public", ["基础设施层"], ["训练链", "推理链", "数据中心链"], "快速导入 GPU 平台、整机设计、液冷机柜和供应链速度。", "AI 服务器需求从节点转向整柜，快速交付能力直接捕获平台升级红利。", "财务治理、毛利率、客户集中、库存和供应链执行。", ["GPU Servers", "Liquid-cooled Rack", "AI SuperCluster"], "高", "高", ["AI 服务器", "液冷整柜", "快速交付"], ["nvidia-gb200-nvl72"]],
  ["Dell Technologies", "DELL", "Public", ["基础设施层", "应用层"], ["数据中心链", "企业落地链"], "企业渠道、服务器/存储组合、服务能力和混合云客户。", "企业 AI 从试点走向私有/混合部署，服务器、存储和服务一起进入预算。", "服务器毛利、竞争、企业 ROI 和供应链。", ["PowerEdge", "PowerScale", "AI Factory with NVIDIA"], "高", "中", ["企业 AI 工厂", "私有推理", "服务器+存储"], ["nvidia-gb200-nvl72", "nist-ai-rmf"]],
  ["HPE", "HPE", "Public", ["基础设施层"], ["训练链", "数据中心链", "企业落地链"], "HPC、Cray、企业服务器和 GreenLake 服务。", "HPC 与 AI 集群边界收敛，企业需要可托管、可运维的私有 AI 基础设施。", "Juniper 整合、竞争、毛利率和云替代。", ["Cray EX", "GreenLake", "ProLiant", "AI Supercomputing"], "中高", "中", ["HPC+AI", "企业私有云", "集群运维"], ["meta-llama-24k", "nvidia-gb200-nvl72"]],
  ["Lenovo", "0992.HK", "Public", ["基础设施层", "应用层"], ["数据中心链", "企业落地链"], "全球 PC/服务器供应链、企业渠道和边缘设备覆盖。", "AI PC、边缘推理和企业服务器共同受益于端云协同。", "低毛利、竞争、地缘和服务器份额。", ["ThinkSystem", "AI PC", "Edge AI"], "中高", "中", ["AI PC", "企业服务器", "边缘 AI"], ["nvidia-gb200-nvl72"]],
  ["Quanta Computer", "2382.TW", "Public", ["基础设施层"], ["数据中心链", "训练链"], "云服务器 ODM、整柜制造和 hyperscaler 客户关系。", "AI 服务器 BOM 升级把 ODM 从低毛利组装推向高价值整柜交付。", "客户集中、毛利率、供应链交付和平台切换。", ["Cloud Server", "AI Rack", "ODM/JDM"], "高", "中高", ["AI ODM", "整柜制造", "云客户"], ["nvidia-gb200-nvl72"]],
  ["Wiwynn", "6669.TW", "Public", ["基础设施层"], ["数据中心链", "训练链"], "云数据中心服务器、OCP 架构和大型客户交付。", "AI 机柜电力/液冷/网络复杂化，提高 ODM 工程与交付壁垒。", "客户集中、平台依赖和毛利率。", ["AI Server", "OCP Rack", "Cloud Infrastructure"], "高", "中高", ["云服务器 ODM", "高密机柜", "OCP"], ["nvidia-gb200-nvl72"]],
  ["Wistron", "3231.TW", "Public", ["基础设施层"], ["数据中心链"], "服务器制造、系统组装和全球供应链。", "AI 服务器扩产周期中，整机组装、测试与区域交付价值上升。", "价格竞争、客户集中和执行风险。", ["Server ODM", "System Integration", "AI Hardware"], "中高", "中高", ["AI 服务器制造", "供应链弹性", "整机测试"], ["nvidia-gb200-nvl72"]],
  ["Foxconn", "2354.TW", "Public", ["基础设施层", "应用层"], ["数据中心链", "机器人链"], "全球制造、服务器组装、连接件和工业自动化。", "AI 服务器和机器人量产都需要大型制造工程与供应链组织能力。", "低毛利、客户集中、地缘和转型执行。", ["AI Server", "Industrial Automation", "EV/Robotics Manufacturing"], "中高", "中", ["AI 制造", "服务器组装", "机器人量产"], ["nvidia-gb200-nvl72", "google-gemini-robotics"]],
  ["Delta Electronics", "2308.TW", "Public", ["能源层", "基础设施层"], ["数据中心链", "机器人链"], "电源、热管理、风扇、工业自动化和电力电子效率。", "高密 AI 机柜推动电源转换、液冷、风扇与工业控制升级。", "订单周期、竞争、原材料和客户集中。", ["Power Supplies", "Thermal Solutions", "Industrial Automation"], "高", "中", ["电源转换", "热管理", "工业自动化"], ["nvidia-gb200-nvl72", "iea-energy-ai"]],
  ["Lite-On", "2301.TW", "Public", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "电源供应器、光电元件和服务器电源制造。", "AI 服务器功耗提升，PSU、BBU 和电力转换价值随之上升。", "毛利率、竞争、客户集中和库存。", ["Server PSU", "Optoelectronics", "Power Modules"], "中高", "中", ["服务器电源", "AI PSU", "光电元件"], ["nvidia-gb200-nvl72"]],
  ["Johnson Controls", "JCI", "Public", ["基础设施层", "能源层"], ["数据中心链"], "楼宇控制、HVAC、消防安防和全球服务网络。", "AI 数据中心需要更高可靠性的冷却、控制与安全系统集成。", "工程项目周期、剥离重组、竞争和服务执行。", ["HVAC", "Building Controls", "Fire & Security"], "中", "中", ["楼宇控制", "数据中心 HVAC", "安全系统"], ["iea-energy-ai"]],
  ["Carrier", "CARR", "Public", ["基础设施层", "能源层"], ["数据中心链"], "暖通空调、冷水机组和热管理产品组合。", "液冷并不消灭 HVAC，而是重构机房热管理与余热处理架构。", "建筑周期、价格竞争和项目执行。", ["Chillers", "HVAC", "Thermal Management"], "中", "中", ["冷水机组", "热管理", "液冷配套"], ["iea-energy-ai", "nvidia-gb200-nvl72"]],
  ["Trane Technologies", "TT", "Public", ["基础设施层", "能源层"], ["数据中心链"], "高效冷却、楼宇热管理和服务网络。", "AI 数据中心 PUE/WUE 目标提升高效冷却与控制系统价值。", "项目周期、竞争、供应链和区域需求。", ["Chillers", "Thermal Management", "Building Services"], "中", "中", ["高效冷却", "PUE 优化", "数据中心服务"], ["iea-energy-ai"]],
  ["CoolIT Systems", "Private", "Private", ["基础设施层"], ["数据中心链", "训练链"], "冷板液冷、CDU、整柜液冷设计和 GPU 平台配套经验。", "100kW+ 机柜让冷板液冷从升级选项变成主线工程件。", "漏液风险、客户认证、规模制造和价格竞争。", ["Cold Plate", "CDU", "Direct Liquid Cooling"], "高", "高", ["冷板液冷", "CDU", "高密机柜"], ["nvidia-gb200-nvl72"]],
  ["Boyd", "Private", "Private", ["基础设施层", "芯片层"], ["数据中心链", "芯片供应链"], "热界面材料、冷板、密封和工程材料。", "AI 芯片功耗提升，热路径材料和液冷组件成为可靠性核心。", "客户集中、材料验证周期和价格竞争。", ["Thermal Interface Materials", "Cold Plates", "Seals"], "中高", "中高", ["热界面材料", "冷板组件", "可靠性"], ["nvidia-gb200-nvl72"]],
  ["Modine", "MOD", "Public", ["基础设施层", "能源层"], ["数据中心链"], "热交换、冷却系统和数据中心热管理产品。", "AI 高热密度推动冷却系统从传统 HVAC 转向更复杂的液冷/热交换组合。", "项目周期、竞争、工业周期和交付能力。", ["Data Center Cooling", "Heat Exchangers", "Liquid Cooling"], "中高", "中", ["热交换", "液冷配套", "数据中心冷却"], ["iea-energy-ai", "nvidia-gb200-nvl72"]],
  ["WEKA", "Private", "Private", ["基础设施层"], ["训练链", "企业落地链"], "高性能并行文件系统、GPU 数据管道和混合云部署。", "训练吞吐不仅卡 GPU，也卡数据加载、checkpoint 与多租户 I/O。", "云厂商存储、开源替代、企业销售周期和毛利。", ["WekaFS", "AI Data Platform", "Checkpoint Acceleration"], "中高", "高", ["训练存储", "Checkpoint", "GPU 数据管道"], ["meta-llama-24k"]],
  ["VAST Data", "Private", "Private", ["基础设施层"], ["训练链", "企业落地链"], "统一数据平台、高性能对象/文件存储和 AI 数据服务。", "企业 AI 与训练集群需要把非结构化数据、向量和权限治理放在同一数据面。", "大型客户集中、云平台竞争和扩张成本。", ["VAST Data Platform", "AI Data Engine", "Universal Storage"], "中高", "高", ["AI 数据底座", "非结构化数据", "训练 I/O"], ["meta-llama-24k", "nist-ai-rmf"]],
  ["DDN", "Private", "Private", ["基础设施层"], ["训练链", "数据中心链"], "HPC/AI 高性能存储、并行文件系统和超级计算客户。", "万卡训练的 checkpoint、数据加载和容错需要专用高性能存储。", "项目型收入、云替代和竞争。", ["EXAScaler", "AI400X", "Lustre"], "中高", "中高", ["HPC 存储", "训练 checkpoint", "并行文件系统"], ["meta-llama-24k"]],
  ["NextEra Energy", "NEE", "Public", ["能源层"], ["数据中心链"], "可再生能源开发、输电互联、储能和公用事业资产。", "AI 数据中心长期 PPA 需要大规模可再生项目和并网能力。", "利率、并网队列、项目许可和电价。", ["Renewables", "Battery Storage", "Utility Grid"], "中高", "中", ["可再生 PPA", "储能", "并网资源"], ["iea-energy-ai"]],
  ["Vistra", "VST", "Public", ["能源层"], ["数据中心链"], "发电资产、零售电力、核电与天然气调峰组合。", "AI 负载提升可调度电源和基荷资产稀缺性。", "电价波动、监管、燃料成本和电站运行。", ["Generation Fleet", "Nuclear", "Retail Power"], "中高", "中", ["可调度电源", "核电资产", "AI 电力负载"], ["iea-energy-ai"]],
  ["GE Vernova", "GEV", "Public", ["能源层"], ["数据中心链"], "燃气轮机、电网设备、风电和电气化技术组合。", "AI 用电增长推动燃机、变压器、开关设备和电网现代化需求。", "项目执行、风电利润、供应链和周期。", ["Gas Turbines", "Grid Solutions", "Wind", "Electrification"], "中高", "中", ["燃机调峰", "电网设备", "电气化"], ["iea-energy-ai"]],
  ["Siemens Energy", "ENR.DE", "Public", ["能源层"], ["数据中心链"], "燃机、输配电、高压设备和全球能源项目交付。", "数据中心并网和电网扩容提高变压器、高压设备和电力系统服务价值。", "项目执行、风电业务、供应链和区域监管。", ["Grid Technologies", "Gas Services", "HVDC", "Transformers"], "中高", "中", ["电网扩容", "高压设备", "燃机服务"], ["iea-energy-ai"]],
  ["ABB", "ABB", "Public", ["能源层", "基础设施层"], ["数据中心链", "机器人链"], "电气化、自动化、机器人和中低压配电。", "AI 数据中心 grid-to-chip 与智能制造机器人共同拉动电气和自动化需求。", "工业周期、项目执行和竞争。", ["Electrification", "Robotics", "Motion", "Automation"], "中高", "中", ["电气化", "工业机器人", "配电自动化"], ["iea-energy-ai", "google-gemini-robotics"]],
  ["Bloom Energy", "BE", "Public", ["能源层"], ["数据中心链"], "固体氧化物燃料电池和现场供电方案。", "并网排队延长时，数据中心可能采用现场发电作为过渡或韧性电源。", "成本、燃料供应、项目融资、技术可靠性和政策补贴。", ["Energy Server", "SOFC", "On-site Power"], "中", "高", ["现场供电", "燃料电池", "并网替代"], ["iea-energy-ai"]],
  ["Fluence", "FLNC", "Public", ["能源层"], ["数据中心链"], "电网级储能系统、软件和项目交付。", "AI 负载提高峰谷调节、可再生配套和电网韧性需求。", "项目毛利、供应链、价格竞争和客户延期。", ["Grid-scale Storage", "Fluence IQ", "Energy Storage Systems"], "中", "中高", ["储能", "峰谷调节", "电网韧性"], ["iea-energy-ai"]],
  ["NuScale Power", "SMR", "Public", ["能源层"], ["数据中心链"], "SMR 设计认证经验和小型核反应堆商业化可选权。", "AI 数据中心需要 24/7 清洁基荷，SMR 提供远期园区直连叙事。", "项目取消、成本、监管审批、融资和时间表。", ["VOYGR SMR", "Small Modular Reactor"], "中", "高", ["SMR", "核能直连", "远期电力期权"], ["google-kairos", "amazon-x-energy", "iea-energy-ai"]],
  ["Oklo", "OKLO", "Public", ["能源层"], ["数据中心链"], "先进小型反应堆设计、核燃料循环叙事和数据中心用电场景。", "AI 电力稀缺给先进核能开发商带来高风险高弹性期权。", "无商业运行记录、审批、燃料、融资和时间表。", ["Aurora Powerhouse", "Advanced Fission"], "中", "高", ["先进核能", "AI 基荷", "监管期权"], ["google-kairos", "amazon-x-energy", "iea-energy-ai"]],
  ["Cameco", "CCJ", "Public", ["能源层"], ["数据中心链"], "铀矿资源、核燃料供应链和长期合约能力。", "核电重估与 SMR 叙事提升上游燃料战略价值。", "铀价周期、矿山运营、地缘和核能政策。", ["Uranium Mining", "Fuel Services", "Long-term Contracts"], "中", "中高", ["铀资源", "核燃料", "基荷电力链"], ["constellation-microsoft-ppa", "google-kairos"]],
  ["Southern Company", "SO", "Public", ["能源层"], ["数据中心链"], "受监管公用事业、核电经验和美国东南部电力资产。", "数据中心选址向电力充裕区域集中，区域公用事业拥有并网与电价议价位置。", "监管回报、项目成本、燃料和负荷预测。", ["Regulated Utility", "Nuclear", "Grid Infrastructure"], "中", "中", ["区域电网", "核电经验", "并网许可"], ["iea-energy-ai"]],
  ["Dominion Energy", "D", "Public", ["能源层"], ["数据中心链"], "弗吉尼亚电网、受监管资产和数据中心负载暴露。", "北弗吉尼亚数据中心走廊让电网扩容和电价机制成为核心变量。", "监管、输电扩容、利率和负载增长争议。", ["Regulated Utility", "Virginia Grid", "Transmission"], "中高", "中", ["数据中心走廊", "输电扩容", "受监管收益"], ["iea-energy-ai"]],
  ["PG&E", "PCG", "Public", ["能源层"], ["数据中心链"], "加州电网、公用事业特许经营权和电力接入能力。", "AI 负载、电动化和可再生并网共同推动电网投资。", "野火责任、监管、费率政治和电网韧性。", ["Regulated Utility", "Grid Investment", "Transmission"], "中", "中高", ["电网投资", "并网能力", "公用事业特许权"], ["iea-energy-ai"]],
  ["American Electric Power", "AEP", "Public", ["能源层"], ["数据中心链"], "跨州输配电、公用事业资产和大型商业负载接入。", "AI 数据中心落地推动输电、变电站和商业电价谈判。", "监管、燃料、负载预测和资本开支回收。", ["Transmission", "Distribution", "Regulated Utility"], "中", "中", ["输电资产", "大型负载接入", "电网 CAPEX"], ["iea-energy-ai"]],
  ["NRG Energy", "NRG", "Public", ["能源层"], ["数据中心链"], "电力零售、发电资产和商业客户负荷管理。", "AI 负载提高商业电力采购、需求响应和可调度电源价值。", "电价波动、燃料、监管和客户合同。", ["Retail Power", "Generation", "Demand Response"], "中", "中", ["商业电力", "需求响应", "可调度负荷"], ["iea-energy-ai"]],
  ["Meta Platforms", "META", "Public", ["基础设施层", "模型层", "应用层"], ["训练链", "推理链", "Agent链", "安全评测链"], "社交流量入口、广告现金流、开源模型生态和大规模训练基础设施。", "Llama 开源降低模型分发摩擦，广告/内容/设备场景可摊薄推理成本。", "监管、广告周期、capex 强度和开源商业化不确定。", ["Llama", "Meta AI", "MTIA", "Reels/Ads AI"], "极高", "中高", ["开源模型", "广告 AI", "自研芯片"], ["meta-llama-24k", "openai-o3-o4-mini"]],
  ["Amazon", "AMZN", "Public", ["能源层", "芯片层", "基础设施层", "应用层"], ["训练链", "推理链", "数据中心链", "企业落地链"], "AWS、Trainium/Inferentia、自有电力采购和企业云分发。", "云客户需要模型、芯片、数据和部署一体化，AWS 捕获训练/推理/Agent 平台预算。", "AI capex 回报、微软/谷歌竞争、自研芯片采用和能源约束。", ["AWS Bedrock", "Trainium", "Inferentia", "Q", "X-energy SMR"], "极高", "中", ["云 AI", "自研芯片", "SMR PPA"], ["amazon-x-energy", "openai-stargate", "nvidia-dynamo"]],
  ["Oracle", "ORCL", "Public", ["基础设施层", "应用层"], ["训练链", "推理链", "企业落地链"], "OCI GPU 云、数据库客户、企业套件和大客户合同。", "AI 训练云供给紧张时，OCI 以高性能网络和大规模 GPU 集群切入。", "客户集中、capex 压力、云份额和服务交付。", ["OCI", "Exadata", "Database", "AI Infrastructure"], "高", "中高", ["GPU 云", "企业数据库", "训练集群"], ["openai-stargate", "meta-llama-24k"]],
  ["Snowflake", "SNOW", "Public", ["基础设施层", "应用层"], ["企业落地链", "安全评测链"], "云数据仓库、数据共享、治理和企业数据驻留。", "企业 AI 要先解决数据权限、质量和可追溯，数据平台靠近预算源头。", "Databricks/云厂商竞争、消费增速和 AI 产品落地。", ["Data Cloud", "Cortex AI", "Snowpark", "Governance"], "高", "中高", ["企业数据云", "治理", "RAG 数据底座"], ["nist-ai-rmf", "google-agentspace"]],
  ["Palantir", "PLTR", "Public", ["应用层", "基础设施层"], ["企业落地链", "Agent链", "安全评测链"], "Ontology、政府/工业场景、AIP 工作流和高接触部署能力。", "企业需要把 AI 决策嵌入真实业务流程，语义层和权限层是生产化关键。", "估值、项目制交付、竞争和客户集中。", ["AIP", "Foundry", "Gotham", "Ontology"], "高", "中高", ["Ontology", "生产级 AI", "政府/工业"], ["nist-ai-rmf", "salesforce-agentforce-3"]],
  ["MongoDB", "MDB", "Public", ["基础设施层", "应用层"], ["企业落地链", "Agent链"], "文档数据库、开发者心智、Atlas 云服务和向量搜索能力。", "AI 应用需要灵活 schema、语义搜索和事务系统连接。", "云厂商数据库竞争、消费增速和向量数据库替代。", ["Atlas", "Vector Search", "Document Database"], "中高", "中高", ["AI 应用数据层", "向量搜索", "开发者平台"], ["google-agentspace"]],
  ["Elastic", "ESTC", "Public", ["基础设施层", "应用层"], ["企业落地链", "安全评测链"], "搜索、日志、安全可观测和企业检索基础。", "RAG 与企业搜索需要混合检索、权限过滤和可观测能力。", "开源竞争、云厂商、消费周期和产品整合。", ["Elasticsearch", "Search AI", "Observability", "Security"], "中高", "中", ["混合检索", "RAG", "可观测"], ["google-agentspace", "nist-ai-rmf"]],
  ["Atlassian", "TEAM", "Public", ["应用层"], ["企业落地链", "Agent链"], "Jira/Confluence 开发与知识工作流入口、团队协作数据。", "软件研发和项目管理 Agent 需要接入 issue、文档、权限和审批。", "席位增长、微软竞争、AI 功能付费和迁移执行。", ["Jira", "Confluence", "Rovo", "Atlassian Intelligence"], "中高", "中", ["研发工作流", "企业知识", "协作 Agent"], ["github-copilot-coding-agent", "google-agentspace"]],
  ["Adobe", "ADBE", "Public", ["应用层", "模型层"], ["推理链", "企业落地链", "安全评测链"], "创意软件入口、版权友好数据、企业设计流程和生成式媒体模型。", "生成式图片/视频进入设计生产流，模型版权和商业可用性成为付费关键。", "模型竞争、价格压力、版权诉讼和创作者反弹。", ["Firefly", "Creative Cloud", "Express", "GenStudio"], "高", "中", ["生成式媒体", "版权安全", "创意工作流"], ["nist-ai-rmf"]],
  ["Intuit", "INTU", "Public", ["应用层"], ["企业落地链", "Agent链"], "税务/会计/小企业财务数据、强工作流入口和品牌信任。", "AI Agent 可直接重构报税、记账、现金流建议和客服自动化。", "监管、数据隐私、客户信任和软件替代。", ["TurboTax", "QuickBooks", "Mailchimp", "Intuit Assist"], "中高", "中", ["财税 Agent", "SMB 工作流", "信任数据"], ["salesforce-agentforce-3", "nist-ai-rmf"]],
  ["CrowdStrike", "CRWD", "Public", ["应用层", "基础设施层"], ["安全评测链", "Agent链"], "端点安全遥测、威胁情报、云安全和安全运营入口。", "AI 攻击扩大后，SOC Agent、自动化响应和模型调用安全成为新预算。", "平台事故、竞争、预算周期和安全责任。", ["Falcon", "Charlotte AI", "Cloud Security", "Identity Protection"], "高", "中", ["AI 安全运营", "SOC Agent", "遥测数据"], ["nist-ai-rmf", "openai-preparedness"]],
  ["Datadog", "DDOG", "Public", ["基础设施层", "应用层"], ["推理链", "企业落地链", "Agent链"], "可观测性、日志/APM、云原生客户和 AI 服务监控。", "企业 AI 上线后需要追踪延迟、成本、工具调用、错误和安全事件。", "云成本优化压力、竞争和席位扩张。", ["Observability", "APM", "LLM Observability", "Security"], "高", "中", ["LLM 可观测", "P99/成本监控", "生产运维"], ["nvidia-dynamo", "nist-ai-rmf"]],
  ["Confluent", "CFLT", "Public", ["基础设施层"], ["企业落地链", "Agent链"], "实时数据流、Kafka 生态和企业事件管道。", "Agent 要行动必须接入实时事件流、业务系统和数据契约。", "开源替代、云厂商、消费增速和销售执行。", ["Confluent Cloud", "Kafka", "Stream Processing"], "中高", "中高", ["实时数据", "事件驱动 Agent", "数据管道"], ["google-agentspace"]],
  ["Hugging Face", "Private", "Private", ["模型层", "应用层"], ["企业落地链", "安全评测链"], "模型/数据集社区、开源分发、评测与企业协作平台。", "开源模型生态成为企业选型、微调、部署和评测的默认入口之一。", "商业化、云厂商复制、版权合规和社区治理。", ["Hub", "Transformers", "Datasets", "Spaces"], "高", "中高", ["开源模型生态", "模型分发", "评测/数据集"], ["nist-ai-rmf", "openai-o3-o4-mini"]],
  ["Mistral AI", "Private", "Private", ["模型层", "应用层"], ["推理链", "企业落地链"], "高效开源/商业模型、欧洲主权 AI 定位和企业部署能力。", "企业与政府需要可控、低成本、可本地化的模型选项。", "前沿模型差距、算力成本、商业化和美国平台竞争。", ["Mistral Models", "Le Chat", "La Plateforme"], "高", "高", ["欧洲主权 AI", "高效模型", "企业部署"], ["openai-o3-o4-mini", "nist-ai-rmf"]],
  ["Cohere", "Private", "Private", ["模型层", "应用层"], ["企业落地链", "安全评测链"], "企业 NLP、检索增强、私有部署和多语言模型定位。", "金融、政府和企业客户更重视数据边界、检索质量和可控部署。", "模型竞争、分发、算力成本和销售周期。", ["Command", "Embed", "Rerank", "North"], "中高", "高", ["企业模型", "RAG/Rerank", "私有部署"], ["nist-ai-rmf", "google-agentspace"]],
  ["Perplexity", "Private", "Private", ["应用层", "模型层"], ["推理链", "Agent链", "安全评测链"], "AI 搜索体验、引用式回答、消费者分发和信息检索产品速度。", "搜索从关键词广告向答案引擎迁移，引用和实时检索成为差异化。", "版权、搜索巨头反击、货币化和推理成本。", ["Answer Engine", "Comet", "Enterprise Pro"], "高", "高", ["AI 搜索", "引用答案", "浏览 Agent"], ["openai-o3-o4-mini", "google-gemini-25"]],
  ["Scale AI", "Private", "Private", ["基础设施层", "模型层"], ["训练链", "安全评测链"], "数据标注、RLHF、评测数据和国防/企业客户。", "前沿模型竞争越来越依赖高质量人类偏好数据、红队和专业评测集。", "客户集中、数据质量、平台内化和劳动力成本。", ["Data Engine", "RLHF", "Evaluation", "Government AI"], "高", "中高", ["数据标注", "RLHF", "评测数据"], ["openai-preparedness", "nist-ai-rmf"]],
  ["Surge AI", "Private", "Private", ["基础设施层", "模型层"], ["训练链", "安全评测链"], "高质量数据标注、偏好数据和模型评测服务。", "Reasoning 与 Agent 模型需要更复杂任务轨迹、红队和专家数据。", "客户集中、质量控制和平台内化。", ["Data Labeling", "RLHF", "Model Evaluation"], "中高", "中高", ["专家数据", "偏好标注", "红队评测"], ["openai-preparedness", "nist-ai-rmf"]],
  ["Snorkel AI", "Private", "Private", ["基础设施层", "应用层"], ["企业落地链", "安全评测链"], "数据编程、弱监督、企业数据标注和模型治理。", "企业 AI 的瓶颈是把内部数据转化为可训练、可评测、可治理资产。", "平台竞争、销售周期和客户数据成熟度。", ["Snorkel Flow", "Data-centric AI", "Programmatic Labeling"], "中高", "中高", ["数据中心 AI", "弱监督", "企业治理"], ["nist-ai-rmf"]],
  ["Harvey", "Private", "Private", ["应用层"], ["企业落地链", "Agent链", "安全评测链"], "法律垂直场景、头部律所客户、专业工作流和领域数据闭环。", "高价值知识工作最早能验证 AI ROI 的领域之一是法律研究、审阅和起草。", "幻觉、责任、客户集中、法律数据授权和平台竞争。", ["Legal AI Assistant", "Workflow Automation", "Document Review"], "高", "高", ["法律 AI", "专业 Agent", "高价值工作流"], ["openai-o3-o4-mini", "nist-ai-rmf"]],
  ["Abridge", "Private", "Private", ["应用层"], ["企业落地链", "安全评测链"], "医疗语音记录、临床文档生成和医疗系统集成。", "医生文书负担高，语音到结构化病历是明确 ROI 场景。", "医疗合规、准确率、医院销售周期和 EHR 集成。", ["Clinical Documentation", "Ambient AI", "EHR Integration"], "高", "高", ["医疗文书", "Ambient AI", "EHR 集成"], ["nist-ai-rmf"]],
  ["Sierra", "Private", "Private", ["应用层"], ["企业落地链", "Agent链"], "客服 Agent 平台、品牌交互设计和企业系统集成。", "客服是 Agent 最直接的规模化入口，关键在行动边界、升级和品牌一致性。", "客户 ROI、幻觉、集成成本和大型 CRM 平台竞争。", ["Customer Agent", "Agent OS", "Brand-safe Automation"], "高", "高", ["客服 Agent", "企业系统集成", "HITL"], ["salesforce-agentforce-3", "nist-ai-rmf"]],
  ["Glean", "Private", "Private", ["应用层", "基础设施层"], ["企业落地链", "Agent链"], "企业搜索、权限连接器、知识图谱和工作流入口。", "企业 Agent 首先需要安全找到人、文档、系统和权限边界。", "微软/谷歌竞争、数据连接维护和企业预算。", ["Enterprise Search", "Knowledge Graph", "Agents"], "高", "中高", ["企业搜索", "权限连接器", "知识图谱"], ["google-agentspace", "nist-ai-rmf"]],
  ["Anysphere", "Private", "Private", ["应用层", "模型层"], ["Agent链", "企业落地链"], "AI 编程 IDE、开发者分发、上下文工程和代码工作流体验。", "编程是 Agent 最清晰的高频付费场景，IDE 入口拥有强粘性。", "平台复制、模型成本、企业安全和开发者留存。", ["Cursor", "AI Code Editor", "Repo Context"], "高", "高", ["AI 编程", "IDE 入口", "Repo 上下文"], ["openai-codex", "github-copilot-coding-agent"]],
  ["Cognition", "Private", "Private", ["应用层"], ["Agent链", "企业落地链"], "异步软件工程 Agent、任务规划和代码执行闭环。", "从补全到 issue 级交付的迁移会重构软件外包与内部研发流程。", "稳定性、可解释性、测试环境、竞争和客户信任。", ["Devin", "Software Engineering Agent"], "高", "高", ["异步编码 Agent", "任务执行", "软件外包替代"], ["openai-codex", "github-copilot-coding-agent"]],
  ["Replit", "Private", "Private", ["应用层", "基础设施层"], ["Agent链", "企业落地链"], "在线 IDE、部署环境、开发者社区和 Agent 原生应用创建。", "低门槛应用生成把 AI 编程从专业开发者扩展到长尾创业和内部工具。", "云成本、平台竞争、留存和企业安全。", ["Agent", "Workspace", "Deployments", "Multiplayer IDE"], "中高", "高", ["在线 IDE", "Vibe Coding", "一键部署"], ["openai-codex"]],
  ["Apptronik", "Private", "Private", ["应用层"], ["机器人链"], "通用人形机器人本体、产业合作和制造/物流场景定位。", "人形机器人若能进入重复劳动场景，将形成硬件、数据和模型闭环。", "可靠性、成本、安全认证、量产和客户 ROI。", ["Apollo", "Humanoid Robot", "Warehouse/Manufacturing Pilots"], "中高", "高", ["人形机器人", "制造场景", "本体量产"], ["google-gemini-robotics", "nvidia-gr00t-n1"]],
  ["Boston Dynamics", "Private", "Private", ["应用层"], ["机器人链"], "动态控制、机器人本体工程、移动机器人产品和品牌技术壁垒。", "具身智能模型需要可靠本体承接，优秀运动控制是数据闭环前提。", "商业化速度、成本、母公司战略和场景扩张。", ["Spot", "Stretch", "Atlas"], "中高", "中高", ["运动控制", "移动机器人", "工业巡检/仓储"], ["google-gemini-robotics"]],
  ["Unitree", "Private", "Private", ["应用层"], ["机器人链"], "低成本四足/人形机器人、本体供应链和开发者生态。", "成本下探会扩大机器人数据采集和教育/科研/轻工业部署。", "安全可靠性、海外合规、竞争和商业场景。", ["Go2", "H1/G1", "Quadruped Robot"], "中高", "高", ["低成本本体", "开发者生态", "中国机器人链"], ["google-gemini-robotics", "nvidia-gr00t-n1"]],
  ["UBTECH", "9880.HK", "Public", ["应用层"], ["机器人链"], "教育/服务/人形机器人产品化和中国市场渠道。", "人形机器人进入工厂与服务场景，需要本地供应链和应用工程能力。", "盈利能力、规模化、竞争和场景 ROI。", ["Walker", "Humanoid Robot", "Service Robots"], "中", "高", ["人形机器人", "服务机器人", "中国场景"], ["google-gemini-robotics"]],
  ["Harmonic Drive Systems", "6324.T", "Public", ["应用层", "芯片层"], ["机器人链", "芯片供应链"], "谐波减速器精密制造、机器人关节核心部件和客户认证。", "机器人本体成本与性能高度依赖关节执行器和减速器。", "价格竞争、国产替代、机器人需求节奏和产能。", ["Harmonic Reducer", "Precision Gearing", "Actuator Components"], "中高", "中", ["谐波减速器", "机器人关节", "精密传动"], ["google-gemini-robotics"]],
  ["Nabtesco", "6268.T", "Public", ["应用层"], ["机器人链"], "RV 减速器、工业机器人传动和精密机械。", "工业机器人和高负载人形/移动机器人需要高可靠减速器。", "工业机器人周期、价格竞争和中国替代。", ["RV Reducer", "Precision Reduction Gear"], "中", "中", ["RV 减速器", "工业机器人", "精密传动"], ["google-gemini-robotics"]],
  ["Yaskawa", "6506.T", "Public", ["应用层"], ["机器人链"], "工业机器人、伺服电机、运动控制和全球制造客户。", "具身智能进入工厂需要和现有机器人、PLC 与运动控制体系融合。", "工业周期、中国竞争和软件生态。", ["Motoman", "Servo Drives", "Motion Control"], "中", "中", ["工业机器人", "伺服控制", "工厂自动化"], ["google-gemini-robotics"]],
  ["Fanuc", "6954.T", "Public", ["应用层"], ["机器人链"], "CNC、工业机器人、伺服系统和全球制造客户基础。", "AI 视觉和规划会提升传统工业机器人柔性，但硬件可靠性仍是护城河。", "汽车/电子周期、中国竞争和软件转型。", ["Industrial Robots", "CNC", "Servo Motors"], "中", "中", ["工业机器人", "CNC", "柔性制造"], ["google-gemini-robotics"]],
  ["Keyence", "6861.T", "Public", ["应用层"], ["机器人链", "企业落地链"], "机器视觉、传感器、测量和高毛利直销能力。", "机器人和工业 AI 的眼睛是传感/视觉，产线数字化提高检测自动化价值。", "估值、制造周期和竞争。", ["Machine Vision", "Sensors", "Measurement Systems"], "中高", "中", ["机器视觉", "工业传感", "产线 AI"], ["google-gemini-robotics"]],
  ["Alibaba Group", "BABA / 9988.HK", "Public", ["模型层", "应用层", "基础设施层"], ["推理链", "企业落地链", "Agent链"], "阿里云、通义千问开源模型、企业客户和电商/办公/云生态入口。", "中国企业 AI 落地需要模型、云、数据和应用入口一体化，阿里具备从 Qwen 到钉钉/阿里云的分发链。", "云竞争、模型成本、监管、开源商业化和电商主业周期。", ["Qwen", "Model Studio", "Alibaba Cloud", "DingTalk AI"], "极高", "中高", ["开源模型", "云 AI", "企业 Agent"], ["qwen3-2025"]],
  ["Tencent", "0700.HK", "Public", ["模型层", "应用层", "基础设施层"], ["企业落地链", "Agent链", "推理链"], "微信生态、腾讯云、混元模型、游戏/广告/企业服务场景和流量入口。", "大模型能力可嵌入微信、企微、广告、内容和游戏生产流，拥有中国最强应用分发入口之一。", "监管、广告和游戏周期、云份额、模型差异化和组织协同。", ["Hunyuan", "Tencent Cloud", "WeCom", "Yuanbao"], "极高", "中", ["超级应用入口", "企业协同", "内容生成"], []],
  ["Baidu", "BIDU / 9888.HK", "Public", ["模型层", "应用层", "基础设施层"], ["推理链", "企业落地链", "安全评测链"], "搜索、文心大模型、百度智能云、自动驾驶 Apollo 和知识图谱积累。", "搜索和企业云是文心模型的两条商业化路径，自动驾驶提供具身/真实世界数据可选权。", "搜索广告重构、云竞争、模型份额、Robotaxi 商业化节奏和监管。", ["ERNIE", "Qianfan", "Baidu AI Cloud", "Apollo Go"], "高", "中高", ["搜索重构", "企业 AI", "自动驾驶"], ["baidu-ernie-45"]],
  ["ByteDance", "Private", "Private", ["模型层", "应用层", "基础设施层"], ["推理链", "Agent链", "企业落地链"], "抖音/TikTok 流量、推荐系统工程、火山引擎和豆包模型分发。", "消费端高频入口和内容生产场景可快速验证模型体验与推理成本曲线。", "监管、海外业务不确定、模型成本、云商业化和组织边界。", ["Doubao", "Volcano Engine", "Coze", "CapCut AI"], "极高", "高", ["消费 AI", "内容生成", "Agent 平台"], []],
  ["Huawei", "Private", "Private", ["芯片层", "基础设施层", "模型层", "应用层"], ["芯片供应链", "训练链", "推理链", "企业落地链"], "昇腾算力、鲲鹏 CPU、MindSpore、盘古模型、政企渠道和全栈国产化生态。", "中国 AI 基础设施国产替代的核心锚点，价值在芯片、服务器、云、行业方案和生态绑定。", "先进制程限制、供应链约束、生态迁移成本、出口管制和客户验证。", ["Ascend", "Kunpeng", "MindSpore", "Pangu", "Huawei Cloud"], "极高", "高", ["国产算力", "全栈生态", "政企 AI"], ["tsmc-2025-annual"]],
  ["iFlytek", "002230.SZ", "Public", ["模型层", "应用层"], ["企业落地链", "Agent链", "安全评测链"], "语音识别、教育/政企客户、星火模型和中文场景积累。", "中文语音、教育、办公和政企场景具备明确落地入口。", "政企预算、模型能力差异化、毛利率、数据合规和竞争。", ["SparkDesk", "AI Education", "Speech AI"], "高", "中高", ["中文语音", "教育 AI", "政企应用"], []],
  ["Kingsoft Office", "688111.SS", "Public", ["应用层"], ["企业落地链", "Agent链"], "WPS 办公入口、文档协作、国产办公替代和企业客户基础。", "办公 AI 是企业 Agent 的高频入口，文档、表格、PPT 和知识库天然承接模型能力。", "微软/钉钉/飞书竞争、AI 付费率、企业预算和产品体验。", ["WPS AI", "WPS Office", "Kingsoft Docs"], "高", "中", ["办公 AI", "文档 Agent", "国产软件"], []],
  ["SenseTime", "0020.HK", "Public", ["模型层", "应用层"], ["推理链", "企业落地链", "机器人链"], "计算机视觉、行业客户、大装置算力和日日新模型体系。", "多模态、视觉和城市/工业场景可承接中国企业级 AI 项目需求。", "盈利能力、现金流、客户预算、模型竞争和项目制交付。", ["SenseNova", "SenseCore", "Computer Vision"], "中高", "高", ["视觉 AI", "多模态", "行业项目"], []],
  ["Kunlun Tech", "300418.SZ", "Public", ["模型层", "应用层"], ["推理链", "Agent链"], "天工模型、AI 搜索/内容应用和全球互联网产品经验。", "AI 搜索、音乐、短剧和内容生成提供消费端模型应用试验场。", "应用留存、商业化、模型成本和监管。", ["Tiangong", "AI Search", "Opera/Content Apps"], "中高", "高", ["AI 搜索", "内容生成", "消费应用"], []],
  ["360 Security Technology", "601360.SS", "Public", ["应用层", "基础设施层"], ["安全评测链", "企业落地链", "Agent链"], "安全软件、企业安全客户、搜索入口和大模型安全场景。", "AI 安全、企业知识库和安全 Agent 是其从传统安全向 AI 平台迁移的主要路径。", "商业化、竞争、模型差异化、广告/安全主业压力。", ["360 AI", "Security Brain", "Enterprise Security"], "中", "中高", ["AI 安全", "安全 Agent", "企业知识库"], ["nist-ai-rmf"]],
  ["DeepSeek", "Private", "Private", ["模型层"], ["训练链", "推理链", "安全评测链"], "高效推理模型、强化学习后训练、开源权重影响力和低成本训练叙事。", "R1 路线提升中国模型在 reasoning、蒸馏和低成本推理上的全球能见度。", "商业化、算力供给、模型迭代、开源竞争和政策环境。", ["DeepSeek-R1", "DeepSeek-V3", "Distilled Models"], "极高", "高", ["Reasoning Model", "开源模型", "低成本训练"], ["deepseek-r1"]],
  ["Zhipu AI", "Private", "Private", ["模型层", "应用层"], ["企业落地链", "Agent链", "安全评测链"], "GLM 模型、清华系技术背景、政企客户和 MaaS 平台。", "中国 ToB 模型服务与私有化部署需求增加，GLM 可承接政企和行业模型项目。", "商业化、算力、模型竞争、客户集中和监管。", ["GLM", "ChatGLM", "MaaS Platform"], "高", "高", ["企业模型", "私有化部署", "政企 AI"], []],
  ["Moonshot AI", "Private", "Private", ["模型层", "应用层"], ["推理链", "Agent链"], "长上下文产品心智、Kimi 消费端入口和模型应用迭代速度。", "长文本阅读、搜索和 Agent 场景是中国消费 AI 最早验证的方向之一。", "用户留存、推理成本、模型竞争、商业化和流量获取。", ["Kimi", "Long Context", "AI Assistant"], "高", "高", ["长上下文", "AI 搜索", "消费 AI"], []],
  ["MiniMax", "Private", "Private", ["模型层", "应用层"], ["推理链", "Agent链"], "多模态/语音/角色对话产品、海螺等消费应用和模型 API。", "语音、视频和陪伴类应用推动多模态推理和低延迟体验需求。", "内容合规、商业化、模型成本、竞争和海外监管。", ["MiniMax Models", "Hailuo AI", "Talkie"], "高", "高", ["多模态", "语音 AI", "消费应用"], []],
  ["Baichuan AI", "Private", "Private", ["模型层", "应用层"], ["企业落地链", "推理链"], "通用大模型、行业应用探索和中文语料能力。", "中国模型层仍需要多家基础模型公司服务行业微调、私有化和应用集成。", "融资、算力、模型差异化、商业化和头部平台挤压。", ["Baichuan Models", "Enterprise AI"], "中高", "高", ["中文模型", "行业模型", "私有化"], []],
  ["Cambricon", "688256.SS", "Public", ["芯片层"], ["推理链", "芯片供应链"], "AI 加速器 IP/芯片、国产算力生态和早期客户认证。", "国产 AI 芯片在政企、边缘和部分训练/推理场景中具备替代弹性。", "生态、良率、先进制程、客户规模、供应链和盈利能力。", ["MLU", "AI Accelerator", "Cambricon Software Stack"], "高", "高", ["国产 AI 芯片", "推理芯片", "算力国产化"], ["tsmc-2025-annual"]],
  ["Hygon Information", "688041.SS", "Public", ["芯片层", "基础设施层"], ["数据中心链", "芯片供应链"], "国产 x86 CPU、服务器生态和政企信创客户。", "AI 数据中心除 GPU 外仍需要 CPU、服务器和可信国产基础设施承接控制面。", "授权/技术路线、性能差距、客户预算和竞争。", ["Hygon CPU", "Server Platform", "Trusted Computing"], "中高", "中高", ["国产 CPU", "信创服务器", "数据中心"], []],
  ["Sugon", "603019.SS", "Public", ["基础设施层"], ["训练链", "数据中心链", "企业落地链"], "高性能计算、服务器、液冷数据中心和政企科研客户。", "AI 训练和行业私有云需要国产服务器、HPC 集群和液冷工程能力。", "供应链限制、项目周期、客户集中和竞争。", ["HPC", "AI Server", "Liquid Cooling", "Data Center"], "高", "中高", ["HPC", "AI 服务器", "液冷"], ["nvidia-gb200-nvl72"]],
  ["Inspur Information", "000977.SZ", "Public", ["基础设施层"], ["训练链", "推理链", "数据中心链"], "服务器出货、AI 服务器集成、政企和互联网客户。", "中国 AI 基础设施扩容需要服务器、整柜、网络和运维集成能力。", "供应链、毛利率、客户集中、平台切换和地缘限制。", ["AI Server", "Rack-scale Systems", "Cloud Infrastructure"], "高", "中高", ["AI 服务器", "整柜集成", "数据中心"], ["nvidia-gb200-nvl72"]],
  ["Foxconn Industrial Internet", "601138.SS", "Public", ["基础设施层", "应用层"], ["数据中心链", "机器人链"], "工业互联网、服务器制造、智能制造和富士康供应链。", "AI 服务器和智能制造升级共同提升整机制造、工业数据和自动化价值。", "毛利率、客户集中、制造周期和竞争。", ["AI Server Manufacturing", "Industrial Internet", "Smart Factory"], "中高", "中", ["服务器制造", "工业互联网", "智能制造"], ["nvidia-gb200-nvl72"]],
  ["Montage Technology", "688008.SS", "Public", ["芯片层"], ["芯片供应链", "数据中心链"], "内存接口芯片、PCIe retimer 和服务器内存子系统。", "AI 服务器内存容量和带宽升级会拉动 DDR5、CXL、PCIe 连接和内存缓冲芯片。", "客户认证、代际切换、竞争和服务器周期。", ["DDR5 RCD", "PCIe Retimer", "Memory Interface"], "中高", "中", ["内存接口", "服务器芯片", "CXL/PCIe"], ["micron-hbm4-vera-rubin"]],
  ["GigaDevice", "603986.SS", "Public", ["芯片层"], ["芯片供应链", "机器人链"], "Nor Flash、MCU、存储和嵌入式控制生态。", "端侧 AI、机器人和工业控制需要 MCU、存储和低功耗控制芯片。", "消费/工业周期、价格竞争、国产替代节奏和毛利。", ["Nor Flash", "MCU", "Memory"], "中", "中", ["MCU", "边缘控制", "机器人外围"], ["google-gemini-robotics"]],
  ["JCET Group", "600584.SS", "Public", ["芯片层"], ["芯片供应链"], "封装测试规模、先进封装能力和全球客户。", "AI 芯片国产替代需要 OSAT、测试、SiP 和高端封装配套。", "先进封装能力差距、价格竞争、客户周期和资本开支。", ["OSAT", "Advanced Packaging", "SiP", "Test"], "中高", "中", ["封装测试", "先进封装", "OSAT"], ["tsmc-2025-annual"]],
  ["Tongfu Microelectronics", "002156.SZ", "Public", ["芯片层"], ["芯片供应链"], "封装测试、CPU/GPU 客户协同和先进封装产能。", "Chiplet 和高性能芯片封测需求提升国产 OSAT 的战略位置。", "客户集中、周期、技术爬坡和价格竞争。", ["OSAT", "Advanced Packaging", "Chiplet Packaging"], "中高", "中", ["Chiplet 封装", "封装测试", "国产替代"], ["tsmc-2025-annual"]],
  ["NAURA Technology", "002371.SZ", "Public", ["芯片层"], ["芯片供应链"], "国产半导体设备平台，覆盖刻蚀、沉积、清洗和热处理等环节。", "先进制程受限背景下，国产设备是中国芯片链长期卡点和替代主线。", "先进工艺差距、客户验证、出口限制和周期。", ["Etch", "Deposition", "Cleaning", "Furnace"], "高", "中高", ["半导体设备", "国产替代", "工艺设备"], ["asml-2025-annual"]],
  ["AMEC", "688012.SS", "Public", ["芯片层"], ["芯片供应链"], "刻蚀设备、MOCVD 和先进工艺设备客户验证。", "刻蚀是先进制程和存储制造关键步骤，国产刻蚀设备具备高战略价值。", "先进节点验证、客户集中、出口管制和竞争。", ["Etch Equipment", "MOCVD", "Process Equipment"], "高", "中高", ["刻蚀设备", "半导体设备", "国产替代"], ["asml-2025-annual"]],
  ["Piotech", "688072.SS", "Public", ["芯片层"], ["芯片供应链"], "薄膜沉积设备、PECVD/ALD/CVD 等国产设备路线。", "逻辑、存储和先进封装扩产提升沉积设备国产替代空间。", "技术验证、客户集中、周期和国际竞争。", ["PECVD", "ALD", "CVD", "Deposition Equipment"], "中高", "中高", ["沉积设备", "半导体设备", "国产替代"], ["asml-2025-annual"]],
  ["GDS Holdings", "GDS / 9698.HK", "Public", ["基础设施层", "能源层"], ["数据中心链", "企业落地链"], "中国高等级数据中心、云和互联网客户、园区交付经验。", "中国 AI 推理和训练扩容需要一线及周边区域的数据中心、电力和液冷改造能力。", "负债、利用率、客户集中、电力约束和价格竞争。", ["Data Centers", "Colocation", "AI-ready Capacity"], "中高", "中高", ["数据中心", "AI 机房", "电力容量"], ["iea-energy-ai"]],
  ["VNET", "VNET", "Public", ["基础设施层", "能源层"], ["数据中心链", "企业落地链"], "中国 IDC、云连接和企业数据中心服务。", "中小云、企业私有化和 AI 推理部署会拉动合规数据中心需求。", "负债、竞争、利用率、电力和客户预算。", ["IDC", "Cloud Connect", "Data Center Services"], "中", "中高", ["IDC", "企业云", "数据中心"], ["iea-energy-ai"]],
  ["Envicool", "002837.SZ", "Public", ["基础设施层", "能源层"], ["数据中心链"], "数据中心温控、液冷、储能温控和热管理工程。", "AI 高密机柜推动液冷和温控从传统机房配套升级为核心工程瓶颈。", "项目周期、价格竞争、液冷可靠性和客户集中。", ["Data Center Cooling", "Liquid Cooling", "Thermal Management"], "高", "中", ["液冷", "温控", "高密机柜"], ["nvidia-gb200-nvl72"]],
  ["Sanhua Intelligent Controls", "002050.SZ", "Public", ["基础设施层", "应用层"], ["数据中心链", "机器人链"], "热管理阀件、制冷控制、汽车热管理和机电执行部件。", "AI 数据中心热管理和机器人执行器都需要高可靠机电控制与热管理组件。", "下游周期、价格竞争、客户集中和技术路线变化。", ["Thermal Controls", "Valves", "Actuator Components"], "中高", "中", ["热管理", "机器人部件", "液冷配套"], ["google-gemini-robotics"]],
  ["CATL", "300750.SZ", "Public", ["能源层", "应用层"], ["数据中心链", "机器人链"], "动力/储能电池、供应链规模、BMS 和全球客户。", "AI 数据中心需要储能和备用电源，机器人也需要高能量密度电池系统。", "价格竞争、原材料、海外监管、储能安全和周期。", ["Energy Storage", "Battery", "BMS"], "中高", "中", ["储能", "备用电源", "机器人电池"], ["iea-energy-ai"]],
  ["Sungrow", "300274.SZ", "Public", ["能源层"], ["数据中心链"], "光伏逆变器、储能系统、电力电子和全球项目交付。", "AI 数据中心 PPA 与储能配套提升电力电子和储能系统价值。", "价格竞争、海外政策、项目周期和毛利率。", ["PV Inverter", "Energy Storage System", "Power Electronics"], "中", "中", ["储能", "电力电子", "PPA 配套"], ["iea-energy-ai"]],
  ["Inovance", "300124.SZ", "Public", ["应用层", "芯片层"], ["机器人链", "企业落地链"], "工业自动化、伺服系统、PLC、变频器和新能源车电控。", "机器人和 AI 工厂需要运动控制、伺服驱动和工业控制闭环。", "工业周期、竞争、价格压力和机器人放量节奏。", ["Servo", "PLC", "Motion Control", "Industrial Automation"], "中高", "中", ["伺服控制", "工业自动化", "机器人部件"], ["google-gemini-robotics"]],
  ["Estun Automation", "002747.SZ", "Public", ["应用层"], ["机器人链"], "工业机器人、运动控制、伺服系统和中国制造业客户。", "具身智能落地工厂前，工业机器人和运动控制是最现实的硬件基础。", "工业周期、盈利能力、进口替代竞争和下游需求。", ["Industrial Robots", "Servo", "Motion Control"], "中", "中高", ["工业机器人", "运动控制", "国产替代"], ["google-gemini-robotics"]],
  ["Horizon Robotics", "9660.HK", "Public", ["芯片层", "应用层"], ["机器人链", "推理链"], "智能驾驶芯片、车端 AI 计算平台和中国车企客户。", "端侧推理、自动驾驶和机器人共享低功耗感知/规划芯片需求。", "汽车周期、客户集中、价格竞争、自动驾驶监管和芯片迭代。", ["Journey Chips", "Horizon SuperDrive", "Automotive AI"], "高", "高", ["智能驾驶芯片", "端侧推理", "自动驾驶"], ["google-gemini-robotics"]],
  ["Hesai", "HSAI", "Public", ["应用层", "芯片层"], ["机器人链"], "激光雷达、车载/机器人感知硬件和规模制造。", "机器人和自动驾驶需要高可靠传感器，激光雷达是物理世界感知核心部件之一。", "价格竞争、客户集中、技术路线、地缘监管和汽车周期。", ["LiDAR", "Robotaxi Sensors", "ADAS Sensors"], "中高", "中高", ["激光雷达", "自动驾驶", "机器人感知"], ["google-gemini-robotics"]],
  ["RoboSense", "2498.HK", "Public", ["应用层", "芯片层"], ["机器人链"], "激光雷达、感知方案和汽车/机器人客户。", "端侧感知硬件是具身智能和自动驾驶从模型走向部署的关键接口。", "价格竞争、毛利率、客户认证和技术路线替代。", ["LiDAR", "Perception Solutions", "ADAS"], "中高", "中高", ["激光雷达", "机器人感知", "自动驾驶"], ["google-gemini-robotics"]],
  ["Pony AI", "PONY", "Public", ["应用层", "模型层"], ["机器人链", "企业落地链"], "Robotaxi 技术栈、自动驾驶运营经验和中美场景数据。", "自动驾驶是具身智能最清晰的商业化场景之一，核心在安全、运营和单位经济性。", "监管、商业化进度、车队成本、安全事故和融资。", ["Robotaxi", "Autonomous Driving Stack"], "高", "高", ["Robotaxi", "自动驾驶", "具身智能"], ["google-gemini-robotics"]],
  ["Omron", "6645.T", "Public", ["应用层"], ["机器人链", "企业落地链"], "工业自动化、传感器、控制器和医疗设备组合。", "AI 工厂需要把机器人、传感器、PLC 和数据系统连接为闭环。", "工业周期、竞争和利润率。", ["Factory Automation", "Sensors", "Controllers", "Robotics"], "中", "中", ["工业自动化", "传感控制", "AI 工厂"], ["google-gemini-robotics"]],
  ["FormFactor", "FORM", "Public", ["芯片层"], ["芯片供应链"], "高端探针卡、晶圆测试接口和先进封装测试客户基础。", "HBM、GPU 和 Chiplet 复杂度提升会拉长测试时间，探针卡成为先进封装良率爬坡的关键耗材。", "半导体周期、客户集中、先进封装节奏和价格竞争。", ["Probe Cards", "Wafer Test", "Advanced Packaging Test"], "高", "中", ["测试耗材", "HBM 测试", "先进封装"], ["advantest-official", "teradyne-official"]],
  ["Siemens", "SIE.DE", "Public", ["能源层", "基础设施层", "应用层"], ["数据中心链", "企业落地链", "机器人链"], "工业电气、自动化、数字孪生和全球工程客户。", "AI 数据中心高压配电、工业 Agent 和机器人落地都需要电气自动化与数字孪生底座。", "欧洲工业周期、项目交付、能源价格和软件转型节奏。", ["Electrification", "Factory Automation", "Digital Twin"], "中高", "中", ["高压配电", "工业自动化", "数字孪生"], ["iea-energy-ai"]],
  ["特变电工", "600089.SS", "Public", ["能源层", "基础设施层"], ["数据中心链"], "变压器、输变电设备、新能源和电力工程能力。", "AI 数据中心扩容需要变电站、变压器和电网接入设备，电力设备交期成为 CAPEX 节奏变量。", "电网投资周期、原材料价格、海外项目风险和价格竞争。", ["Transformer", "Power Transmission", "New Energy"], "中", "中", ["变压器", "电网设备", "AI 数据中心供电"], ["iea-energy-ai"]],
  ["许继电气", "000400.SZ", "Public", ["能源层", "基础设施层"], ["数据中心链"], "电力自动化、保护控制、换流和智能电网设备。", "高密 AI 园区需要稳定电能质量、保护控制和配网自动化，智能电网设备价值量提升。", "电网招标节奏、价格压力、项目验收周期和技术迭代。", ["Grid Automation", "Protection Control", "Power Electronics"], "中", "中", ["智能电网", "配电自动化", "供电可靠性"], ["iea-energy-ai"]],
  ["台光电子", "2383.TW", "Public", ["芯片层", "基础设施层"], ["数据中心链", "芯片供应链"], "高频高速 CCL、低损耗材料和服务器/交换机客户基础。", "800G/1.6T 交换机与 AI 服务器需要低损耗板材，材料认证决定高速 PCB 良率。", "电子周期、客户认证、材料价格和竞争。", ["High-speed CCL", "Low-loss Laminate"], "高", "中", ["高速 CCL", "AI 交换机", "低损耗材料"], ["broadcom-cpo-official", "marvell-official"]],
  ["欣兴电子", "3037.TW", "Public", ["芯片层", "基础设施层"], ["芯片供应链", "数据中心链"], "ABF 载板、高阶 PCB 和先进封装基板能力。", "AI 加速器与高速交换机提高 ABF 和高多层板需求，先进基板良率成为交付瓶颈。", "ABF 周期、客户集中、良率和资本开支折旧。", ["ABF Substrate", "HDI PCB", "IC Substrate"], "高", "中高", ["ABF", "高阶 PCB", "先进封装基板"], ["tsmc-2025-annual"]],
  ["CoreWeave", "Private", "Private", ["基础设施层"], ["推理链", "训练链"], "GPU 云、集群运维、模型客户和快速数据中心扩张能力。", "推理与训练需求波动提高专业 GPU 云价值，核心在集群利用率、融资成本和客户锁定。", "客户集中、融资成本、GPU 供给、电力约束和云巨头竞争。", ["GPU Cloud", "Inference Cloud", "AI Cluster"], "极高", "高", ["GPU 云", "推理云", "集群利用率"], ["nvidia-dynamo", "nvidia-gb200-nvl72"]],
  ["Together AI", "Private", "Private", ["模型层", "基础设施层"], ["推理链", "企业落地链"], "开源模型推理、微调平台和开发者客户。", "多模型路由、推理 API 和企业微调需求提升独立推理平台价值。", "云巨头竞争、模型同质化、毛利率和客户留存。", ["Inference API", "Fine-tuning", "Open Model Platform"], "高", "高", ["推理平台", "开源模型", "模型路由"], ["nvidia-dynamo"]],
  ["Fireworks AI", "Private", "Private", ["模型层", "基础设施层"], ["推理链", "Agent链"], "低延迟推理、多模型服务和开发者 API。", "Agent 与应用开发需要低延迟、可观测和低成本推理后端，平台型推理服务具备扩张空间。", "价格竞争、模型质量、基础设施成本和客户集中。", ["Inference API", "Model Serving", "Serverless LLM"], "高", "高", ["低延迟推理", "模型服务", "Agent 后端"], ["nvidia-dynamo"]],
  ["SAP", "SAP", "Public", ["应用层"], ["企业落地链", "Agent链"], "ERP 系统记录、企业流程数据和全球大型客户基础。", "企业 Agent 若要进入财务、供应链和人力流程，ERP 数据上下文和权限系统是关键入口。", "云迁移节奏、实施复杂度、AI 付费率和宏观 IT 预算。", ["SAP Business AI", "S/4HANA", "Joule"], "高", "中", ["ERP AI", "企业流程", "系统记录"], ["servicenow-ai-official", "salesforce-agentforce-3"]],
  ["UiPath", "PATH", "Public", ["应用层"], ["企业落地链", "Agent链"], "RPA 工作流、流程挖掘、企业自动化客户和机器人编排经验。", "Agent 从对话走向动作，需要和 RPA、流程挖掘、审批与审计结合。", "RPA 增长放缓、平台竞争、AI 原生替代和客户预算。", ["RPA", "Process Mining", "Agentic Automation"], "中高", "中高", ["RPA", "Agent 编排", "流程自动化"], ["servicenow-ai-official"]],
  ["Palo Alto Networks", "PANW", "Public", ["基础设施层", "应用层"], ["安全评测链", "企业落地链"], "网络安全平台、云安全、身份与威胁情报客户基础。", "企业 AI 落地需要数据访问控制、提示注入防护、运行时审计和安全运营闭环。", "安全预算、平台整合、AI 安全产品商业化和竞争。", ["Prisma Cloud", "Cortex", "AI Security"], "高", "中", ["AI 安全", "云安全", "企业治理"], ["nist-ai-rmf"]],
  ["用友网络", "600588.SS", "Public", ["应用层"], ["企业落地链", "Agent链"], "中国 ERP、财务、人力和企业服务客户基础。", "中国企业 Agent 落地需要嵌入财务、供应链和组织流程，用友具备系统记录入口。", "云转型、项目制交付、竞争、AI 付费率和客户预算。", ["YonBIP", "ERP", "Enterprise AI"], "中高", "中高", ["国产 ERP", "企业 Agent", "财务 AI"], ["salesforce-agentforce-3"]],
  ["金蝶国际", "0268.HK", "Public", ["应用层"], ["企业落地链", "Agent链"], "云 ERP、财务云和中国企业客户基础。", "中大型企业上云与 AI 助手结合，有机会提升订阅 ARPU 和客户黏性。", "盈利能力、实施成本、竞争、宏观预算和 AI 付费转化。", ["Kingdee Cloud", "ERP", "Finance AI"], "中高", "中高", ["云 ERP", "财务 AI", "企业 Agent"], ["salesforce-agentforce-3"]],
  ["明源云", "0909.HK", "Public", ["应用层"], ["企业落地链"], "房地产数字化、CRM/ERP 和行业客户数据。", "垂直行业 AI 落地需要行业流程、数据模型和系统入口，地产链是典型垂直场景。", "地产周期、客户预算、现金流、AI 付费率和行业集中度。", ["Real Estate ERP", "CRM", "Vertical SaaS"], "中", "高", ["垂直 SaaS", "行业 AI", "地产数字化"], ["salesforce-agentforce-3"]],
  ["Tesla", "TSLA", "Public", ["应用层", "模型层"], ["机器人链", "推理链"], "自动驾驶数据闭环、端到端模型、机器人本体和制造工程能力。", "Optimus 和自动驾驶把真实世界数据、端侧推理、执行器和量产制造连接成具身智能闭环。", "监管、安全事故、量产节奏、估值、制造成本和竞争。", ["FSD", "Optimus", "Dojo"], "极高", "高", ["具身智能", "自动驾驶", "人形机器人"], ["google-gemini-robotics", "nvidia-gr00t-n1"]],
  ["绿的谐波", "688017.SS", "Public", ["应用层"], ["机器人链"], "谐波减速器、精密传动和国产机器人客户。", "人形机器人关节和工业机器人国产化需要高可靠谐波减速器，量产良率决定利润弹性。", "价格竞争、客户认证、量产节奏和技术替代。", ["Harmonic Reducer", "Precision Drive"], "高", "高", ["谐波减速器", "机器人关节", "精密传动"], ["google-gemini-robotics"]],
  ["鸣志电器", "603728.SS", "Public", ["应用层", "芯片层"], ["机器人链"], "步进电机、无刷电机、运动控制和执行系统。", "机器人关节、灵巧手和移动底盘需要高可靠电机与控制组件。", "下游放量、价格竞争、客户认证和海外需求。", ["Stepper Motor", "BLDC", "Motion Control"], "中高", "中高", ["电机", "运动控制", "机器人执行器"], ["google-gemini-robotics"]],
  ["拓普集团", "601689.SS", "Public", ["应用层"], ["机器人链"], "汽车零部件、轻量化、热管理和机器人执行器布局。", "汽车供应链量产工程能力可迁移到机器人本体和执行器制造。", "汽车周期、客户集中、机器人量产不确定和资本开支。", ["Auto Parts", "Actuator Components", "Thermal Management"], "中高", "高", ["机器人部件", "汽车供应链", "执行器"], ["google-gemini-robotics"]],
  ["瑞芯微", "603893.SS", "Public", ["芯片层", "应用层"], ["机器人链", "推理链"], "端侧 SoC、多媒体处理和嵌入式生态。", "端侧 AI、机器人和视觉设备需要低功耗 SoC 承接感知与控制。", "消费电子周期、算力性能、客户分散和价格竞争。", ["Edge SoC", "NPU", "Embedded Processor"], "中", "中高", ["端侧 AI", "嵌入式 SoC", "机器人控制"], ["qualcomm-ai-official"]],
  ["Ambarella", "AMBA", "Public", ["芯片层", "应用层"], ["机器人链", "推理链"], "低功耗视觉 AI SoC、汽车和边缘视频客户。", "机器人和自动驾驶需要低功耗视觉推理芯片，端侧感知是云端模型落地接口。", "汽车认证周期、竞争、客户集中和边缘 AI 放量。", ["CVflow", "Vision AI SoC", "Edge AI"], "中高", "中高", ["视觉 SoC", "端侧推理", "机器人感知"], ["qualcomm-ai-official"]],
  ["Unity", "U", "Public", ["模型层", "应用层"], ["机器人链"], "实时 3D 引擎、仿真环境和开发者生态。", "Sim-to-Real 需要可扩展仿真环境和合成数据，实时 3D 引擎是数据闭环工具之一。", "游戏主业、商业模式调整、竞争和工业客户转化。", ["Unity Engine", "Simulation", "Synthetic Data"], "中", "高", ["仿真", "合成数据", "3D 引擎"], ["google-gemini-robotics"]],
  ["Dassault Systemes", "DSY.PA", "Public", ["应用层", "基础设施层"], ["机器人链", "企业落地链"], "工业软件、PLM、仿真和数字孪生客户基础。", "机器人和 AI 工厂落地需要数字孪生、仿真、设计和制造数据闭环。", "工业周期、客户迁移、云化转型和竞争。", ["CATIA", "SIMULIA", "3DEXPERIENCE"], "中高", "中", ["数字孪生", "工业仿真", "PLM"], ["google-gemini-robotics"]],
  ["JetBrains", "Private", "Private", ["应用层"], ["Agent链", "企业落地链"], "开发者 IDE、Kotlin 生态和企业开发工具入口。", "AI 编程从补全走向工程工作流时，IDE 上下文、代码索引、测试和团队协作入口具备战略价值。", "微软/GitHub、Cursor、开源 IDE 和企业安全要求带来的竞争。", ["IntelliJ IDEA", "PyCharm", "JetBrains AI"], "中高", "中", ["AI 编程", "IDE", "开发者工具"], ["github-copilot-coding-agent"]]
];

const companyExpansionCards = companyExpansionRows.map(([
  name,
  ticker,
  status,
  layers,
  chains,
  moat,
  beneficiary,
  risks,
  products,
  aiExposure,
  riskRating,
  themes,
  sourceIds
]) => ({
  name,
  ticker,
  status,
  layers,
  chains,
  moat,
  beneficiary,
  risks,
  products,
  aiExposure,
  riskRating,
  themes,
  sourceIds
}));

const chinaOfficialSourcesByCompany = {
  "Alibaba Group": ["qwen3-2025"],
  Tencent: ["tencent-hunyuan-official"],
  Baidu: ["baidu-ernie-45"],
  ByteDance: ["bytedance-doubao-official"],
  Huawei: ["huawei-ascend-official"],
  iFlytek: ["iflytek-spark-official"],
  "Kingsoft Office": ["wps-ai-official"],
  SenseTime: ["sensetime-official"],
  "Kunlun Tech": ["tiangong-official"],
  "360 Security Technology": ["qihoo-360-ai-official", "nist-ai-rmf"],
  DeepSeek: ["deepseek-r1"],
  "Zhipu AI": ["zhipu-ai-official"],
  "Moonshot AI": ["kimi-official"],
  MiniMax: ["minimax-official"],
  "Baichuan AI": ["baichuan-ai-official"],
  Cambricon: ["cambricon-official"],
  "Hygon Information": ["hygon-official"],
  Sugon: ["sugon-official"],
  "Inspur Information": ["inspur-official"],
  "Foxconn Industrial Internet": ["fii-official"],
  "Montage Technology": ["montage-official"],
  GigaDevice: ["gigadevice-official"],
  "JCET Group": ["jcet-official"],
  "Tongfu Microelectronics": ["tongfu-official"],
  "NAURA Technology": ["naura-official"],
  AMEC: ["amec-official"],
  Piotech: ["piotech-official"],
  "GDS Holdings": ["gds-official"],
  VNET: ["vnet-official"],
  Envicool: ["envicool-official"],
  "Sanhua Intelligent Controls": ["sanhua-official"],
  CATL: ["catl-official"],
  Sungrow: ["sungrow-official"],
  Inovance: ["inovance-official"],
  "Estun Automation": ["estun-official"],
  "Horizon Robotics": ["horizon-robotics-official"],
  Hesai: ["hesai-official"],
  RoboSense: ["robosense-official"],
  "Pony AI": ["pony-ai-official"]
};

const opticalPcbCompanyNames = new Set([
  "Marvell",
  "Coherent",
  "Lumentum",
  "Credo Technology",
  "Fabrinet",
  "Zhongji Innolight",
  "Eoptolink",
  "Accelink Technologies",
  "Amphenol",
  "Unimicron",
  "Shinko Electric",
  "Shengyi Technology",
  "WUS Printed Circuit",
  "Shennan Circuits",
  "Dongshan Precision",
  "Han's Laser",
  "Sanan Optoelectronics",
  "Cambridge Industries Group",
  "HGTECH",
  "YOFC",
  "Hengtong Optic-Electric",
  "TFC Communication",
  "Broadex Technologies",
  "Yuanjie Semiconductor",
  "Applied Optoelectronics",
  "Corning",
  "AXT"
]);

const companyAliasesByName = {
  SMIC: ["中芯国际", "0981.HK"],
  Lenovo: ["联想集团", "0992.HK"],
  UBTECH: ["优必选", "优必选-W", "9880.HK"],
  "Alibaba Group": ["阿里巴巴", "阿里巴巴-W", "9988.HK"],
  Tencent: ["腾讯控股", "腾讯", "0700.HK"],
  Baidu: ["百度集团", "百度", "9888.HK"],
  iFlytek: ["科大讯飞", "002230.SZ"],
  "Kingsoft Office": ["金山办公", "688111.SS"],
  SenseTime: ["商汤科技", "商汤", "0020.HK"],
  "Kunlun Tech": ["昆仑万维", "300418.SZ"],
  "360 Security Technology": ["三六零", "360", "601360.SS"],
  Cambricon: ["寒武纪", "688256.SS"],
  "Hygon Information": ["海光信息", "688041.SS"],
  Sugon: ["中科曙光", "603019.SS"],
  "Inspur Information": ["浪潮信息", "000977.SZ"],
  "Foxconn Industrial Internet": ["工业富联", "601138.SS"],
  GigaDevice: ["兆易创新", "603986.SS"],
  "Tongfu Microelectronics": ["通富微电", "002156.SZ"],
  "NAURA Technology": ["北方华创", "002371.SZ"],
  AMEC: ["中微公司", "688012.SS"],
  Piotech: ["拓荆科技", "688072.SS"],
  "GDS Holdings": ["万国数据", "9698.HK"],
  Envicool: ["英维克", "002837.SZ"],
  "Sanhua Intelligent Controls": ["三花智控", "002050.SZ"],
  CATL: ["宁德时代", "300750.SZ"],
  Sungrow: ["阳光电源", "300274.SZ"],
  Inovance: ["汇川技术", "300124.SZ"],
  "Estun Automation": ["埃斯顿", "002747.SZ"],
  "Horizon Robotics": ["地平线机器人", "地平线机器人-W", "9660.HK"],
  RoboSense: ["速腾聚创", "2498.HK"],
  Marvell: ["MRVL"],
  Coherent: ["COHR"],
  Lumentum: ["LITE"],
  "JCET Group": ["长电科技", "长电", "600584.SS"],
  "Montage Technology": ["澜起科技", "澜起", "688008.SS"],
  "Dongshan Precision": ["东山精密", "002384.SZ"],
  "Han's Laser": ["大族激光", "002008.SZ"],
  "Sanan Optoelectronics": ["三安光电", "600703.SS"],
  "Cambridge Industries Group": ["剑桥科技", "603083.SS"],
  HGTECH: ["华工科技", "化工科技", "000988.SZ"],
  YOFC: ["长飞光电", "长飞光纤", "长飞光纤光缆", "6869.HK"],
  "Hengtong Optic-Electric": ["亨通光电", "600487.SS"],
  "TFC Communication": ["天孚通信", "300394.SZ"],
  "Broadex Technologies": ["博创科技", "长芯博创", "300548.SZ"],
  "Yuanjie Semiconductor": ["源杰科技", "688498.SS"],
  "Applied Optoelectronics": ["AAOI"],
  Corning: ["GLW"],
  AXT: ["AXTI"],
  "Zhongji Innolight": ["中际旭创", "300308.SZ"],
  Eoptolink: ["新易盛", "300502.SZ"],
  "Accelink Technologies": ["光迅科技", "002281.SZ"],
  "Shengyi Technology": ["生益科技", "600183.SS"],
  "WUS Printed Circuit": ["沪电股份", "002463.SZ"],
  "Shennan Circuits": ["深南电路", "002916.SZ"],
  "Credo Technology": ["CRDO"],
  Fabrinet: ["FN"],
  "Delta Electronics": ["台达电子", "2308.TW"],
  Unimicron: ["欣兴电子", "3037.TW"],
  Siemens: ["西门子"],
  FormFactor: ["FORM"],
  "CoreWeave": ["CoreWeave GPU 云"],
  "Together AI": ["Together"],
  "Fireworks AI": ["Fireworks"],
  SAP: ["SAP"],
  UiPath: ["PATH"],
  "Palo Alto Networks": ["PANW"],
  "Dassault Systemes": ["达索系统"],
  Unity: ["Unity Software", "U"],
  Tesla: ["特斯拉", "TSLA"],
  Ambarella: ["AMBA"]
};

function applyCompanyAliases(company) {
  const aliases = companyAliasesByName[company.name];
  return aliases ? { ...company, aliases: [...new Set([...(company.aliases || []), ...aliases])] } : company;
}

companyExpansionCards.forEach((company) => {
  if (opticalPcbCompanyNames.has(company.name)) {
    company.themes = [...new Set([...(company.themes || []), "AI 网络硬件"])];
  }
  Object.assign(company, applyCompanyAliases(company));
  const officialSources = chinaOfficialSourcesByCompany[company.name];
  if (!officialSources) return;
  company.sourceIds = [...new Set([...officialSources, ...(company.sourceIds || [])])];
});

const existingCompanyCards = window.companyCards || [];
const enrichedExistingCompanyCards = existingCompanyCards.map((company) => ({
  ...company,
  ...inferCompanyMeta(company),
  ...(companyOverrides[company.name] || {})
})).map((company) => ({
  ...company,
  themes: opticalPcbCompanyNames.has(company.name) ? [...new Set([...(company.themes || []), "AI 网络硬件"])] : company.themes
})).map((company) => applyCompanyAliases(company)).map((company) => ({
  ...company,
  sourceIds: chinaOfficialSourcesByCompany[company.name]
    ? [...new Set([...chinaOfficialSourcesByCompany[company.name], ...(company.sourceIds || [])])]
    : company.sourceIds
})).map((company) => window.enrichCompanyDeepDive ? window.enrichCompanyDeepDive(company) : company);

window.companyCards = [...enrichedExistingCompanyCards, ...companyExpansionCards.map((company) => (
  window.enrichCompanyDeepDive ? window.enrichCompanyDeepDive(company) : company
))];
