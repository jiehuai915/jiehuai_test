const termDefinitions = {
  "AI Factory": "AI 工厂，把 GPU、网络、存储、电力、冷却和调度系统组织成可持续生产 token 和模型能力的基础设施。",
  "Action Permissioning": "动作权限控制，定义 Agent 可以做什么、何时需要审批、如何审计和回滚。",
  "Agentforce": "Salesforce 的企业 AI agent 平台，面向销售、服务、营销和商务等业务流程。",
  "Agentic Workflow": "智能体工作流，由目标拆解、工具调用、记忆、审批、执行和审计组成的 AI 应用架构。",
  "Agent Runtime": "Agent 运行时，负责状态、工具、记忆、权限、重试、trace 和部署，是把模型 API 变成生产执行系统的中间层。",
  "Agentspace": "Google 面向企业搜索、数据连接和智能体工作流的产品平台。",
  "ABF 基板": "Ajinomoto Build-up Film 基板，高端封装和 AI 加速器承载大芯片、高布线密度的重要材料。",
  "ASIC": "Application-Specific Integrated Circuit，专用集成电路；AI 推理中常用来换取更低延迟和更低单位 token 成本。",
  "Busway": "母线槽，用于在数据中心内高效分配大电流到机柜或配电单元，高密 AI 机房中重要性上升。",
  "CDU": "Cooling Distribution Unit，冷却分配单元；液冷数据中心里负责把冷却液稳定送到机柜和冷板。",
  "CMOS": "Complementary Metal-Oxide-Semiconductor，现代数字芯片的基础晶体管工艺。",
  "Cold Plate": "冷板，直接贴近 CPU/GPU 等热源，通过液体带走热量，是 direct-to-chip 液冷的核心部件。",
  "Codex": "OpenAI 的云端软件工程 agent，可在隔离环境中执行代码任务、修复 bug、运行测试并提交结果。",
  "CoWoS": "Chip-on-Wafer-on-Substrate，台积电 2.5D 先进封装平台，用于把逻辑芯片与 HBM 高带宽互联。",
  "CoWoS-L/R": "CoWoS 的不同封装路线，是高端 AI GPU 集成 chiplet、I/O die 和 HBM 的核心产能瓶颈。",
  "CPO": "Co-Packaged Optics，共封装光学；把光互联靠近交换芯片，降低高速网络功耗和延迟。",
  "LPO": "Linear-drive Pluggable Optics，线性直驱可插拔光模块；减少 DSP 处理以降低功耗和延迟，但对链路预算、误码率和系统调校要求更高。",
  "光互联": "用光信号连接服务器、交换机、机柜和数据中心节点的高速互联体系，是 AI 集群 scale-out 网络的带宽与功耗瓶颈。",
  "光通信": "通过光纤、光模块、激光器和光芯片传输数据的通信链条；AI 数据中心正在把它从电信周期拉向数据中心 CAPEX 周期。",
  "光芯片": "激光器、探测器、调制器、硅光器件等光电核心器件，决定光模块的带宽、功耗、良率和成本。",
  "光模块": "Optical transceiver，把电信号和光信号互相转换；AI 集群从 400G/800G 走向 1.6T 后成为跨机柜互联关键物料。",
  "硅光": "Silicon Photonics，用硅基工艺制造光波导、调制器等光器件，目标是提升带宽密度并降低光互联功耗。",
  "VCSEL": "Vertical-Cavity Surface-Emitting Laser，垂直腔面发射激光器，常用于短距光通信和部分高速光模块。",
  "EML": "Electro-absorption Modulated Laser，电吸收调制激光器，常用于更高速、更远距离的数据中心光模块。",
  "InP": "Indium Phosphide，磷化铟材料体系，适合高性能激光器、调制器和高速光器件。",
  "DSP": "Digital Signal Processor，数字信号处理芯片；高速光模块中用于补偿信号失真、降低误码，但会增加功耗和成本。",
  "AEC": "Active Electrical Cable，有源电缆；通过芯片增强短距铜缆信号，是 AI rack 内部连接中光模块之外的低成本低功耗路线。",
  "PCB": "Printed Circuit Board，印刷电路板；AI 服务器和交换机高速信号对层数、材料损耗、阻抗控制和加工精度要求更高。",
  "CCL": "Copper Clad Laminate，覆铜板；高速 PCB 的基础材料，Dk/Df 等电性能会影响 112G/224G SerDes 信号完整性。",
  "CUDA": "NVIDIA 的并行计算软件生态，是 GPU 替代者最难跨越的软件迁移壁垒。",
  "Checkpoint I/O": "训练过程中周期性保存模型状态、优化器状态和训练进度的读写负载；大模型时代会冲击存储吞吐和故障恢复时间。",
  "Copilot Coding Agent": "GitHub Copilot 的异步编程代理，可被分配 issue 并创建 pull request。",
  "CRM": "Customer Relationship Management，客户关系管理系统，是销售、服务和营销 AI 的核心业务入口。",
  "Data Flywheel": "数据飞轮，应用通过用户行为、任务结果和反馈持续产生专有数据，反过来提升模型与产品。",
  "Data Curation": "数据策展，指对训练数据做来源筛选、清洗、去重、质量打分、合规和任务配比，是模型能力差异的核心来源。",
  "Data Mixture": "数据配比，训练集中代码、数学、网页、书籍、多模态、对话和行业数据的比例；同样 token 数，不同配比会产生不同能力曲线。",
  "Data Parallelism": "数据并行，把训练样本切给多张 GPU，各自计算梯度后再同步，是大规模训练的基础并行策略。",
  "Data Governance": "数据治理，围绕数据质量、权限、口径、血缘、合规和生命周期建立管理规则，是企业 AI 进入生产的前提。",
  "Data Lineage": "数据血缘，记录数据从来源、转换到使用的链路，用于排查错误、审计合规和解释模型输出依据。",
  "Data Residency": "数据驻留，要求数据存储和处理留在特定国家、区域或云环境内，是金融、医疗、政企客户的重要合规约束。",
  "Dataset Deduplication": "训练数据去重，用于减少重复样本、降低记忆化和 benchmark 污染，提升有效 token 质量。",
  "DFT": "Design for Test，可测试性设计；在芯片设计阶段加入扫描链、BIST 等结构，降低量产测试成本并提升良率可见性。",
  "DPU": "Data Processing Unit，负责网络、存储、安全和虚拟化卸载的数据处理器。",
  "DRAM": "动态随机存取存储器，需要刷新；传统 DRAM 带宽不足推动 HBM 成为 AI 标配。",
  "EUV": "Extreme Ultraviolet Lithography，极紫外光刻，是先进制程图形化的关键设备路线。",
  "Embedding": "嵌入向量，把文本、图片或业务对象转换成向量表示，用于语义检索、相似度匹配和 RAG。",
  "ERP": "Enterprise Resource Planning，企业资源计划软件，承载财务、供应链、库存、人力等核心流程。",
  "ETL/ELT": "数据抽取、转换和加载流程；企业 AI 需要它把分散系统数据清洗、标准化并送入检索或分析层。",
  "EPC": "Engineering, Procurement and Construction，工程总承包；数据中心建设中负责设计、采购、施工和交付。",
  "EDA": "Electronic Design Automation，电子设计自动化工具链，用于芯片设计、验证、布局布线、功耗/时序分析和 sign-off。",
  "GPU": "Graphics Processing Unit，AI 训练与通用推理主力加速器；2026 年竞争焦点已从单卡转向机柜级系统。",
  "GB200 NVL72": "NVIDIA Blackwell 时代的液冷机柜级系统，连接 36 个 Grace CPU 与 72 个 Blackwell GPU。",
  "Gradient Checkpointing": "梯度检查点，通过少存中间激活、反向传播时重算来节省显存，代价是增加计算开销。",
  "HBM": "High Bandwidth Memory，高带宽内存；通过堆叠和宽总线为 GPU 提供高带宽显存。",
  "HBM4": "第四代高带宽内存，面向更高带宽、更大容量和更复杂 base die，是下一代 AI GPU 的关键瓶颈。",
  "HITL": "Human-in-the-loop，人类在环；生产环境中用于审批、纠错和责任边界控制。",
  "High-NA EUV": "0.55 NA 高数值孔径 EUV 光刻，提高先进节点图形化能力，但短期 AI 供给仍受封装与 HBM 强约束。",
  "InFO": "Integrated Fan-Out，台积电先进封装路线之一，用于高性能和高密度系统集成。",
  "Interposer": "中介层，在 2.5D 封装中承载逻辑芯片与 HBM 的高密度互联，是 CoWoS 等先进封装的关键结构。",
  "IP": "半导体 IP，可复用的功能模块或接口设计，如 SerDes、PCIe、HBM PHY、UCIe，用于缩短芯片开发周期。",
  "Interconnection Queue": "并网排队；数据中心、电源和新能源项目等待电网接入容量的队列。",
  "Liquid Cooling": "液冷，通过冷板、浸没或水路系统带走高密 IT 设备热量，是 AI 数据中心从风冷升级的关键路线。",
  "ABAC": "Attribute-Based Access Control，基于属性的访问控制，按用户、资源、环境和动作属性动态判断权限。",
  "Agent Orchestrator": "智能体编排器，负责任务拆解、多 agent 协调、工具调用、审批、状态管理和审计。",
  "Context Wall": "上下文墙，指上下文窗口继续变长时成本、注意力质量、检索质量和模型有效使用能力出现非线性退化。",
  "Autoscaling": "自动扩缩容，根据请求量、队列长度、延迟和 GPU 利用率动态增减推理实例，是推理云控制成本和 SLA 的基础能力。",
  "Batch Size": "批大小，推理服务中一次合并处理的请求数量；更大 batch 提高吞吐，但可能增加等待时间和尾延迟。",
  "Extended Thinking": "扩展思考模式，模型在回答前使用更多内部推理步骤，以换取复杂任务正确率。",
  "Hallucination": "幻觉，模型生成看似合理但事实错误或无来源支持的内容。",
  "Inference Cost": "模型推理成本，通常由 token 数、模型大小、KV cache、硬件利用率和延迟目标共同决定。",
  "Load Factor": "负载率，衡量设施平均负载相对于峰值负载的比例；推理常态化会提高数据中心负载率。",
  "LLM": "Large Language Model，大语言模型，通过大规模数据和参数学习语言与世界知识的统计结构。",
  "LLMOps": "大模型运维，覆盖模型部署、提示词版本、评测、监控、成本、安全和反馈闭环。",
  "Model Router": "模型路由器，根据任务难度、成本、延迟和安全要求选择不同模型或推理路径。",
  "Multi-Tenant Isolation": "多租户隔离，确保不同客户或部门的数据、缓存、日志和权限不会互相泄露。",
  "MoE": "Mixture of Experts，专家混合模型，通过激活部分专家提升模型容量与计算效率。",
  "NoC": "Network-on-Chip，片上网络，用于在芯片内部连接计算阵列、缓存、控制器和 I/O 模块。",
  "NVLink": "NVIDIA 高速互联，用于 GPU-GPU 或 CPU-GPU 之间的高带宽低延迟连接。",
  "NVLink 6": "NVIDIA Vera Rubin 时代的高速互联路线，服务 rack-scale AI 系统。",
  "NVLink-C2C": "CPU-GPU coherent interconnect，使 CPU 与 GPU 在系统内以低延迟共享数据。",
  "PPA": "Power Purchase Agreement，长期购电协议；AI 数据中心用它锁定电价、容量和低碳属性。",
  "PDK": "Process Design Kit，工艺设计套件，包含版图规则、器件模型和验证规则，是芯片设计连接代工厂工艺的接口。",
  "Planning": "规划能力，把用户目标拆解为步骤、依赖、工具调用和验收条件，是 Agent 从问答走向执行的关键能力。",
  "PII": "Personally Identifiable Information，个人可识别信息；企业 AI 中必须脱敏、控制访问并记录处理链路。",
  "Pipeline Parallelism": "流水线并行，把模型不同层切到不同 GPU 或节点，像流水线一样处理 micro-batch，用于训练超大模型。",
  "PagedAttention": "vLLM 提出的 KV cache 分页管理思想，把显存像虚拟内存一样管理，减少碎片并提升高并发推理吞吐。",
  "Pretraining": "预训练，模型在大规模数据上学习通用语言、知识和模式的阶段。",
  "Prefill": "推理阶段读入完整输入上下文并生成首个 token 前 KV cache 的过程，通常并行度高但显存和算力消耗大。",
  "Decode": "推理阶段逐 token 生成输出的过程，通常更偏串行，对低延迟调度和 KV cache 访问非常敏感。",
  "Prefill/Decode": "大模型推理的两个阶段：prefill 读入上下文，decode 逐 token 生成；解耦后可分别优化吞吐和延迟。",
  "Prefix Cache": "前缀缓存，复用相同系统提示词、工具描述、文档前缀或会话历史产生的 KV cache，降低重复 prefill 成本。",
  "Prompt Caching": "提示词缓存，复用近期相同或相近 prompt 前缀的计算结果，以降低长上下文请求的延迟和成本。",
  "PUE": "Power Usage Effectiveness，数据中心总用电与 IT 设备用电之比，衡量能效。",
  "PUE/WUE": "PUE 衡量电力效率，WUE 衡量水资源效率；液冷时代二者共同影响数据中心扩张。",
  "Rack Density": "机柜功率密度，通常以 kW/rack 衡量；AI 机柜从几十 kW 走向 100kW+ 后，电力和液冷成为刚性约束。",
  "RDL": "Redistribution Layer，重布线层，用于在封装中重新分配芯片 I/O，实现高密度连接。",
  "Reasoning Model": "推理模型，通过 test-time compute 和内部思考过程提升复杂任务能力，但会显著增加 token 成本。",
  "Reasoning Effort": "推理努力度，控制 reasoning 模型在回答前投入多少思考计算；越高通常质量更好，但延迟和成本也更高。",
  "Reasoning Token": "推理模型内部思考或推导消耗的 token，提升能力但也推高成本和延迟。",
  "RAG": "Retrieval-Augmented Generation，检索增强生成；先从外部知识库检索相关内容，再交给模型生成答案。",
  "GraphRAG": "图检索增强生成，把知识图谱、实体关系和社区摘要引入 RAG，改善复杂企业知识库上的检索和问答。",
  "RBAC": "Role-Based Access Control，基于角色的访问控制，按岗位或角色授予系统权限。",
  "Retimer": "高速信号重整芯片，用于保证 PCIe、CXL、以太网等高速链路稳定。",
  "ReduceScatter": "集体通信操作，把规约后的数据按分片散发给各 GPU，常与 AllGather 配合用于大规模并行训练。",
  "RoCE": "RDMA over Converged Ethernet，在以太网上实现远程直接内存访问，是 AI 训练集群以太网路线的重要技术。",
  "RLAIF": "Reinforcement Learning from AI Feedback，使用 AI 反馈进行强化学习式对齐。",
  "ROI": "Return on Investment，投资回报率；企业 AI 应用能否续费和扩张的核心指标。",
  "RLHF": "Reinforcement Learning from Human Feedback，使用人类偏好反馈对齐模型输出。",
  "AllReduce": "分布式训练中的集体通信操作，用于聚合多卡梯度，是大规模训练网络瓶颈之一。",
  "AllGather": "集体通信操作，让每个 GPU 收集其他 GPU 持有的数据分片，常见于张量并行和 ZeRO 参数重构。",
  "Collective Communication": "多 GPU/多节点之间的集体通信，包括 AllReduce、AllGather、ReduceScatter 等。",
  "Continuous Batching": "连续批处理，在推理服务中动态把新请求插入正在运行的 batch，以提高吞吐并减少 GPU 空转。",
  "Dynamo": "NVIDIA 开放式分布式推理运行时，用于扩展 reasoning 模型推理服务，重点优化 KV cache、prefill/decode 等环节。",
  "Direct-to-Chip Cooling": "芯片直冷，用冷板和冷却液直接带走芯片热量，适合 100kW+ 高密 AI 机柜。",
  "Disaggregated Inference": "解耦式推理，把 prefill、decode、KV cache、路由和计算资源拆分调度，用不同资源池优化吞吐、延迟和成本。",
  "InfiniBand": "高性能低延迟网络，长期用于 HPC 与 AI 训练集群。",
  "ITL": "Inter-Token Latency，token 间延迟；衡量流式输出过程中相邻 token 之间的等待时间。",
  "KV Cache": "大模型推理时缓存 attention key/value 的显存结构，长上下文和多轮对话会显著放大占用。",
  "MBU": "Model Bandwidth Utilization，模型带宽利用率，用于衡量训练/推理对内存带宽的有效使用。",
  "MFU/MBU": "MFU 衡量模型有效算力利用率，MBU 衡量模型带宽利用率；二者共同判断 GPU 集群是否把理论 FLOPS 和显存带宽转化为真实训练/推理产出。",
  "Memory": "Agent 记忆系统，包括短期上下文、长期偏好、项目状态、检索结果和结构化状态，用于让 Agent 跨步骤持续工作。",
  "MCP": "Model Context Protocol，模型上下文协议，用标准方式让 AI 应用连接工具、数据源和外部系统，是 Agent 工具生态的重要接口。",
  "MFU": "Model FLOPs Utilization，模型有效算力利用率，衡量理论 GPU FLOPS 中有多少真正用于模型计算。",
  "MTBF": "Mean Time Between Failures，平均无故障时间；万卡集群中硬件故障概率会被规模放大。",
  "MTTR": "Mean Time To Repair，平均修复时间；AI 数据中心中衡量故障定位、隔离、维修和恢复速度。",
  "NCCL": "NVIDIA Collective Communications Library，NVIDIA 多 GPU 集体通信库，是训练集群通信效率的重要软件层。",
  "P99 延迟": "99% 请求都能达到的延迟水平，企业服务通常更关注尾延迟而非平均延迟。",
  "Spectrum-X": "NVIDIA 面向 AI 工作负载优化的 Ethernet 网络平台。",
  "Spectrum-XGS": "NVIDIA 用于连接多个数据中心成为 gigascale AI super-factory 的 Ethernet 技术路线。",
  "SFT": "Supervised Fine-Tuning，监督微调，让模型学习特定任务格式、指令风格和回答模式。",
  "SGLang": "面向大模型与视觉语言模型的推理服务框架，关注高吞吐、结构化生成和缓存优化。",
  "Speculative Decoding": "投机解码，用小模型或草稿路径先生成候选 token，再由大模型验证，以提升生成速度并降低延迟。",
  "Synthetic Data": "合成数据，由模型或仿真系统生成的数据，可扩充训练集但可能带来偏差和退化。",
  "Tensor Parallelism": "张量并行，把单层矩阵计算切到多张 GPU 上，降低单卡显存压力并支撑更大模型训练。",
  "Test-Time Compute": "推理时计算，模型在回答阶段投入额外计算以提高复杂任务表现。",
  "Tool Use": "工具使用，模型调用搜索、代码、数据库、API 或业务系统来完成任务。",
  "System of Record": "权威业务系统，保存企业关键事实和交易记录，如 CRM、ERP、HRIS、ITSM；AI 真正落地需要能安全读写这些系统。",
  "Tape-out": "流片前设计定版，把芯片设计数据交给晶圆厂制造；先进节点流片失败代价极高。",
  "Transformer": "基于注意力机制的深度学习架构，是现代大语言模型和多模态模型的基础。",
  "TTFT": "Time To First Token，首字延迟，衡量用户请求到模型输出第一个 token 的等待时间。",
  "TPS": "Tokens Per Second，每秒生成 token 数；推理服务常用吞吐指标，需同时结合延迟和成本判断。",
  "QPS": "Queries Per Second，每秒请求数；高 QPS 不代表高质量推理，还要看请求长度、模型大小和 SLA。",
  "TCO": "Total Cost of Ownership，总拥有成本，包括软件订阅、推理成本、集成、运维、治理和培训。",
  "Ultra Ethernet": "面向 AI/HPC 工作负载优化的开放以太网路线，目标是提高大规模集群网络效率。",
  "SerDes": "Serializer/Deserializer，高速串并转换电路，是 AI 服务器高速互联信号链核心部件。",
  "SLA": "Service Level Agreement，服务等级协议；规定可用性、延迟、故障响应等承诺，是企业客户和数据中心运营的合同核心。",
  "Sandbox": "沙箱，隔离执行代码、浏览器、文件和 API 调用，限制 Agent 动作范围并降低误操作和安全风险。",
  "SMR": "Small Modular Reactor，小型模块化反应堆；AI 基荷电力的长期技术期权。",
  "SoIC": "System on Integrated Chips，台积电 3D 芯片堆叠封装技术。",
  "Substation": "变电站，把输电电压转换为数据中心可用电压等级；AI 项目常卡在变电站容量和扩建周期。",
  "Switchgear": "开关柜，用于电力系统的开断、保护和控制；高密 AI 数据中心需要更高容量和可靠性。",
  "Spectrum-6": "NVIDIA 下一代 Ethernet switch 路线，服务大规模 AI factory 网络。",
  "TSV": "Through-Silicon Via，硅通孔，用于 HBM 等 3D 堆叠芯片的垂直互联。",
  "Tokenization": "分词，把文本切成模型可处理的 token；词表和切分方式会影响训练效率、多语言能力和推理成本。",
  "Power Transformer": "电力变压器，把电压在不同等级间转换；大型 AI 数据中心变压器交期和容量是关键建设瓶颈。",
  "Known Good Die": "已知良品裸片，在先进封装前经过测试确认可用，避免把坏 die 封进昂贵模组。",
  "OSAT": "Outsourced Semiconductor Assembly and Test，外包封装测试厂，负责芯片封装、组装和测试。",
  "UPS": "Uninterruptible Power Supply，不间断电源；在电网波动或短时断电时为 IT 负载提供过渡电力。",
  "Vera CPU": "NVIDIA Vera Rubin 平台中的 CPU，用于与 Rubin GPU 构成机柜级 AI 系统。",
  "VLA": "Vision-Language-Action，视觉-语言-动作模型，用于把感知、指令和机器人动作连接起来。",
  "World Model": "世界模型，学习环境动态、物理规律和交互结果的模型，用于仿真、规划和机器人。",
  "WUE": "Water Usage Effectiveness，数据中心水资源使用效率。",
  "vLLM": "高吞吐大模型推理引擎，代表技术包括 PagedAttention 和高效 KV cache 管理。",
  "ZeRO": "Zero Redundancy Optimizer，通过切分优化器状态、梯度和参数降低每张 GPU 的显存占用，常用于超大模型训练。",
  "Actuator": "执行器，把电信号或控制指令转换为机械运动，是机器人关节、夹爪和移动机构的核心部件。",
  "Domain Randomization": "域随机化，在仿真中随机改变光照、材质、摩擦、质量和传感噪声，提升策略迁移到真实世界的鲁棒性。",
  "Harmonic Drive": "谐波减速器，常用于机器人关节的高精度、高减速比传动，但成本、寿命和供给是本体量产约束。",
  "Isaac Sim": "NVIDIA 基于 Omniverse 的机器人仿真平台，用于生成数据、训练策略、验证场景和做数字孪生。",
  "Motion Planning": "运动规划，根据目标、障碍物、动力学和约束生成可执行轨迹，是从模型意图到机器人动作的关键桥梁。",
  "ROS": "Robot Operating System，机器人软件中间件生态，提供通信、驱动、感知、导航和工具链。",
  "Sim-to-Real": "仿真到现实迁移，指在仿真环境训练的策略能否在真实机器人上稳定工作，是具身智能核心瓶颈。",
  "SLAM": "Simultaneous Localization and Mapping，同步定位与建图，让机器人在未知环境中同时建立地图并估计自身位置。",
  "Teleoperation": "遥操作，由人远程控制机器人执行任务并收集示范数据，是早期部署和训练数据获取的重要方式。",
  "Torque Control": "力矩控制，直接控制关节输出力矩，使机器人在接触和动态动作中更柔顺、更安全。",
  "Tracing": "执行追踪，记录 Agent 的模型输入输出、工具调用、审批、错误和状态变化，用于调试、评测、审计和归责。",
  "Data Provenance": "数据溯源，记录数据来源、授权、处理链路和使用范围，用于版权、隐私和模型合规治理。",
  "Eval Harness": "评测框架，用统一方式运行任务集、打分器、基线和回归测试，是模型发布和安全验证的工程基础。",
  "Guardrails": "护栏系统，用策略、分类器、权限、提示约束和运行时检查限制模型输出和动作边界。",
  "Jailbreak": "越狱攻击，通过提示诱导模型绕过安全策略、系统指令或内容限制。",
  "Prompt Injection": "提示注入，把恶意指令藏在用户输入、网页、文档或工具返回值中，诱导模型忽略原始系统约束。",
  "Red Teaming": "红队测试，主动模拟攻击者或滥用者，寻找模型、工具、数据和应用的安全漏洞。",
  "Benchmark Contamination": "评测污染，指测试集或相似题目进入训练数据，导致 benchmark 分数虚高、无法代表真实泛化能力。",
  "Runtime Monitoring": "运行时监控，对线上模型输入、输出、工具调用、成本、异常和用户反馈进行持续观察和告警。",
  "Watermarking": "水印，在 AI 生成内容或模型输出中加入可检测标记，用于溯源、版权和滥用追踪。",
  "o3": "OpenAI 的 reasoning model 系列之一，强调复杂推理、工具使用和多步骤任务能力。",
  "光模块": "把电信号与光信号转换的高速网络部件，是 AI 集群跨机柜互联的重要瓶颈。",
  "先进封装": "把多个芯粒、I/O die、HBM 和基板集成为高性能系统的封装技术。",
  "储能": "电力系统灵活性资产，用于备用电源、峰谷调节、微电网稳定和电价优化。",
  "基荷": "长期稳定持续供应的电力负载或电源类型，AI 推理常态化会提升基荷需求。",
  "液冷": "通过液体带走芯片和机柜热量的冷却路线，高密 AI 数据中心的关键基础设施。",
  "表后供电": "Behind-the-Meter，发电资产直接服务数据中心，降低对公共电网扩容的依赖。"
};

function term(name, label = name) {
  return `<button class="term" type="button" data-term="${name}">${label}</button>`;
}

function closeTermPopup() {
  const popup = document.querySelector("#termPopup");
  if (!popup) return;
  popup.classList.remove("open");
  popup.setAttribute("aria-hidden", "true");
}

function openTermPopup(name, anchor) {
  const popup = document.querySelector("#termPopup");
  if (!popup) return;
  const title = popup.querySelector("#termTitle");
  const body = popup.querySelector("#termBody");
  title.textContent = name;
  body.textContent = termDefinitions[name] || "该术语已纳入术语解释系统；当前释义需结合上下文、来源和关联产业链进一步核验。";
  popup.classList.add("open");
  popup.setAttribute("aria-hidden", "false");
  const rect = anchor.getBoundingClientRect();
  const popupRect = popup.getBoundingClientRect();
  const left = Math.min(window.innerWidth - popupRect.width - 16, Math.max(16, rect.left));
  const top = Math.min(window.innerHeight - popupRect.height - 16, rect.bottom + 8);
  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;
}

function initTermPopups() {
  document.addEventListener("click", (event) => {
    const termButton = event.target.closest("[data-term]");
    if (termButton) {
      event.preventDefault();
      event.stopPropagation();
      openTermPopup(termButton.dataset.term, termButton);
      return;
    }
    if (!event.target.closest("#termPopup")) closeTermPopup();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeTermPopup();
  });
}

window.term = term;
window.initTermPopups = initTermPopups;
