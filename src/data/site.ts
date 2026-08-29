export type Lang = 'zh' | 'en';
export type Localized = { zh: string; en: string };
export type TopicId = 'processing' | 'inversion' | 'algorithms' | 'foundation' | 'agent';

export interface Member {
  id: string;
  name: Localized;
  role: Localized;
  initials: string;
  bio: Localized;
  keywords: Localized[];
  affiliation?: Localized;
  links?: { label: string; url: string }[];
  photo?: string;
  photoSource?: string;
  accent: string;
}

export interface ResearchArea {
  id: TopicId;
  index: string;
  title: Localized;
  short: Localized;
  description: Localized;
  methods: Localized[];
  questions: Localized[];
  members: string[];
  resources?: { label: string; url: string; description: Localized }[];
}

export type ProjectStatus = 'ongoing' | 'completed';

export interface LabProject {
  id: string;
  name: Localized;
  summary: Localized;
  topic: Localized;
  status: ProjectStatus;
  members: { id: string; lead?: boolean }[];
  verifiedOn: string;
}

export const siteMeta = {
  name: { zh: 'GeoBrain 团队', en: 'GeoBrain Research Group' },
  shortName: 'GeoBrain',
  descriptor: { zh: '人工智能 × 勘探地球物理', en: 'Artificial Intelligence × Exploration Geophysics' },
  email: 'jwm@pku.edu.cn',
  huggingFaceUrl: 'https://huggingface.co/GeoBrain',
  guideEncryptedFile: 'guides/geophysics-ai-onboarding.enc',
  guideCover: 'guides/geophysics-ai-onboarding-cover.png',
  guidePages: 49,
  verifiedOn: '2026-08-29',
  profileUrl: 'https://www.geophy.pku.edu.cn/people/majianwei/',
};

export const researchAreas: ResearchArea[] = [
  {
    id: 'processing', index: '01',
    title: { zh: '地震数据处理', en: 'Seismic Data Processing' },
    short: { zh: '让不完整、受噪声污染的观测重新可用', en: 'Making incomplete and noisy observations usable again' },
    description: { zh: '面向不规则采集、强随机噪声与相干干扰，研究从缺失道重建到初至拾取的完整处理链。团队将生成模型、自监督学习、隐式表示和几何感知网络与地震数据结构结合，并以 SeismicBench 统一记录数据集、指标与复现实验。', en: 'We study the full chain from missing-trace reconstruction to first-arrival picking under irregular acquisition, random noise and coherent interference. Generative models, self-supervised learning, implicit representations and geometry-aware networks are combined with seismic structure, while SeismicBench records datasets, metrics and reproducible experiments.' },
    methods: [
      { zh: '扩散模型与生成式插值', en: 'Diffusion models and generative interpolation' },
      { zh: '随机噪声与相干噪声压制', en: 'Random and coherent noise attenuation' },
      { zh: '自监督、弱监督与无监督学习', en: 'Self-, weakly and unsupervised learning' },
      { zh: '低秩、紧框架与稀疏表示', en: 'Low-rank, tight-frame and sparse representations' },
      { zh: '几何感知初至拾取', en: 'Geometry-aware first-arrival picking' },
      { zh: '多次波衰减与统一基准评测', en: 'Multiples attenuation and unified benchmarking' },
    ],
    questions: [
      { zh: '如何在大比例、连续缺失道场景中保持同相轴连续性？', en: 'How can event continuity be preserved under large and contiguous trace gaps?' },
      { zh: '如何让训练数据有限的模型迁移到新的工区与采集几何？', en: 'How can models trained on limited data transfer to new surveys and acquisition geometries?' },
      { zh: '如何用统一、可追溯的实验协议比较不同处理方法？', en: 'How should processing methods be compared with unified and traceable protocols?' },
    ],
    members: ['qi-liu', 'zhitong-cheng', 'tianxiang-gao', 'peng-hu', 'chen-zhang', 'shirui-li', 'wei-gao', 'wenzhe-sheng', 'yuying-cheng', 'jianwei-ma'],
  },
  {
    id: 'inversion', index: '02',
    title: { zh: '地球物理反演', en: 'Geophysical Inversion' },
    short: { zh: '从观测恢复地下介质参数', en: 'Recovering subsurface properties from observations' },
    description: { zh: '围绕速度模型构建、全波形反演及多物理场问题，将波动方程、感知先验和深度网络放进同一优化框架。研究覆盖端到端反演、物理信息生成学习、隐式神经表示和参数高效适配，重点关注低频缺失、初始模型依赖、三维计算成本与不确定性。', en: 'For velocity-model building, full-waveform inversion and multiphysics problems, wave equations, sensing priors and deep networks are placed in a common optimization framework. Work spans end-to-end inversion, physics-informed generative learning, neural implicit representations and parameter-efficient adaptation, with attention to missing low frequencies, initial-model dependence, 3D cost and uncertainty.' },
    methods: [
      { zh: '全波形反演', en: 'Full-waveform inversion' },
      { zh: '深度速度模型构建', en: 'Deep velocity-model building' },
      { zh: '物理信息生成学习', en: 'Physics-informed generative learning' },
      { zh: '感知先验约束', en: 'Sensing-prior constraints' },
      { zh: '隐式神经表示', en: 'Neural implicit representations' },
      { zh: 'LoRA 与多模态参数高效适配', en: 'LoRA and multimodal parameter-efficient adaptation' },
    ],
    questions: [
      { zh: '如何在缺少低频与精确初始模型时降低周跳风险？', en: 'How can cycle skipping be reduced without low frequencies or accurate initial models?' },
      { zh: '如何把物理约束放入数据、网络结构与目标函数？', en: 'How should physical constraints enter data, network architectures and objectives?' },
      { zh: '如何以较少标注将预训练表征适配到工业三维数据？', en: 'How can pretrained representations adapt to industrial 3D data with few labels?' },
    ],
    members: ['jianwei-ma', 'qi-liu'],
  },
  {
    id: 'algorithms', index: '03',
    title: { zh: '人工智能算法', en: 'Artificial Intelligence Algorithms' },
    short: { zh: '稳健、可迁移、可解释的通用学习方法', en: 'Robust, transferable and interpretable learning' },
    description: { zh: '从地球物理问题中提炼具有通用价值的人工智能方法，研究域适应、噪声标签鲁棒损失、个性化联邦学习、生成建模与高效三维视觉。目标是解释模型为何迁移、何时失效，以及如何在有限计算与数据条件下稳定部署。', en: 'We derive broadly useful AI methods from geophysical problems, including domain adaptation, noise-robust losses, personalized federated learning, generative modeling and efficient 3D vision. The goal is to explain why models transfer, when they fail and how they can be deployed reliably under limited data and compute.' },
    methods: [
      { zh: '特征空间域适应', en: 'Feature-space domain adaptation' },
      { zh: '噪声标签鲁棒损失', en: 'Noise-robust loss functions' },
      { zh: '个性化联邦学习', en: 'Personalized federated learning' },
      { zh: '扩散与生成建模', en: 'Diffusion and generative modeling' },
      { zh: 'Transformer 与神经算子', en: 'Transformers and neural operators' },
      { zh: '多视图三维重建', en: 'Multi-view 3D reconstruction' },
    ],
    questions: [
      { zh: '域偏移主要来自特征退化，还是决策边界错位？', en: 'Does domain shift arise from feature degradation or decision-boundary misalignment?' },
      { zh: '如何在标签噪声与客户端异质性下获得可分析的鲁棒性？', en: 'How can robustness remain analyzable under label noise and client heterogeneity?' },
      { zh: '如何把几何与物理对称性编码进高效网络？', en: 'How can geometry and physical symmetries be encoded in efficient networks?' },
    ],
    members: ['zhitong-cheng', 'tianxiang-gao', 'peng-hu', 'yulong-ge', 'jianwei-ma'],
  },
  {
    id: 'foundation', index: '04',
    title: { zh: '基础地球物理大模型', en: 'Foundation Models for Geophysics' },
    short: { zh: '从单任务网络走向可适配的通用表征', en: 'From task-specific networks to adaptable representations' },
    description: { zh: '研究地震、重力、磁法、电磁与文本知识的规模化预训练和跨模态对齐，构建可通过提示、轻量解码器或低秩更新适配到多种任务的基础模型。研究同时覆盖数据治理、物理一致性、泛化评测、可信性和开放基准。', en: 'We study scalable pretraining and cross-modal alignment across seismic, gravity, magnetic, electromagnetic and textual knowledge, building foundation models that adapt through prompts, lightweight decoders or low-rank updates. The program also covers data governance, physical consistency, generalization evaluation, trustworthiness and open benchmarks.' },
    methods: [
      { zh: '自监督规模化预训练', en: 'Scalable self-supervised pretraining' },
      { zh: '多模态对齐与提示引擎', en: 'Multimodal alignment and prompt engines' },
      { zh: '参数高效微调', en: 'Parameter-efficient fine-tuning' },
      { zh: '跨工区、跨模态与跨任务泛化', en: 'Cross-survey, cross-modal and cross-task generalization' },
      { zh: '物理一致性与可信评测', en: 'Physical consistency and trustworthy evaluation' },
      { zh: '开放数据、模型与基准', en: 'Open data, models and benchmarks' },
    ],
    questions: [
      { zh: '哪些预训练目标能够学习可跨模态迁移的地球物理表征？', en: 'Which pretraining objectives produce representations transferable across modalities?' },
      { zh: '如何评估基础模型在未知工区和新任务上的真实泛化？', en: 'How should true generalization to unseen surveys and tasks be evaluated?' },
      { zh: '如何让大模型输出满足物理规律并保留完整溯源？', en: 'How can foundation-model outputs obey physics and retain complete provenance?' },
    ],
    members: ['qi-liu', 'jianwei-ma', 'zhitong-cheng', 'peng-hu', 'yulong-ge'],
  },
  {
    id: 'agent', index: '05',
    title: { zh: '地球物理 Agent', en: 'Geophysical Agents' },
    short: { zh: '让自然语言意图驱动可验证的科学工作流', en: 'Intent-driven, verifiable scientific workflows' },
    description: { zh: '探索由大语言模型规划、调用专业软件并组织实验的地球物理智能体。首个公开案例把 SPECFEM 2D、3D Cartesian 与 3D Globe 的建模流程封装为 MCP 工具，支持从参数生成、网格划分、求解到可视化的自动执行和人在回路协作；后续将延伸到处理、成像、反演与解释软件生态。', en: 'We explore geophysical agents that use language models to plan experiments, call specialist software and organize evidence. The first public case exposes SPECFEM 2D, 3D Cartesian and 3D Globe workflows as MCP tools, supporting automated and human-in-the-loop execution from parameter generation and meshing to solving and visualization; future work extends this pattern to processing, imaging, inversion and interpretation.' },
    methods: [
      { zh: '模型上下文协议（MCP）工具链', en: 'Model Context Protocol (MCP) toolchains' },
      { zh: '地震建模任务规划与执行', en: 'Seismic-modeling planning and execution' },
      { zh: '专业软件与数据接口编排', en: 'Scientific software and data orchestration' },
      { zh: '人在回路的参数与结果审查', en: 'Human-in-the-loop parameter and result review' },
      { zh: '错误诊断、恢复与实验溯源', en: 'Error diagnosis, recovery and experiment provenance' },
      { zh: '可复现智能地球物理工作流', en: 'Reproducible agentic geophysics workflows' },
    ],
    questions: [
      { zh: '智能体如何把高层科学意图转化为可审计的工具调用？', en: 'How can agents translate scientific intent into auditable tool calls?' },
      { zh: '哪些决策必须保留地球物理专家确认与干预？', en: 'Which decisions must remain subject to geophysicist review and intervention?' },
      { zh: '如何评测自动工作流的正确性、复现性与失效恢复能力？', en: 'How should correctness, reproducibility and recovery be evaluated for automated workflows?' },
    ],
    members: ['qi-liu', 'jianwei-ma'],
    resources: [
      {
        label: 'First Agent Template · Hugging Face Space',
        url: 'https://huggingface.co/spaces/lqwyy/First_agent_template',
        description: { zh: '刘祺公开的 Agent 原型空间，用于展示可交互智能体工作流。', en: 'A public interactive agent prototype Space by Qi Liu.' },
      },
    ],
  },
];

const seismicBenchTeamPhotoSource = 'https://github.com/sixseven42/seismic-benchmark/tree/main/public/team';

export const members: Member[] = [
  {
    id: 'jianwei-ma', name: { zh: '马坚伟', en: 'Jianwei Ma' }, initials: '马', accent: '#D96C4A',
    photo: 'jianwei-ma.jpg',
    photoSource: 'https://geophy.pku.edu.cn/people/majianwei/',
    role: { zh: '团队负责人', en: 'Team Leader' },
    affiliation: { zh: '北京大学地球与空间科学学院 / 人工智能研究院', en: 'School of Earth and Space Sciences / Institute for Artificial Intelligence, Peking University' },
    bio: { zh: '北京大学博雅特聘教授、人工智能地球科学中心主任，研究聚焦勘探地球物理、应用数学与人工智能交叉。', en: 'Boya Distinguished Professor at Peking University and Director of the Center for Artificial Intelligence Geoscience, working across exploration geophysics, applied mathematics and AI.' },
    keywords: [{ zh: '勘探地球物理', en: 'Exploration geophysics' }, { zh: '反问题', en: 'Inverse problems' }, { zh: '深度学习', en: 'Deep learning' }],
    links: [
      { label: 'PKU Profile', url: 'https://www.geophy.pku.edu.cn/people/majianwei/' },
      { label: 'HIT Profile', url: 'https://homepage.hit.edu.cn/jma' },
      { label: 'ORCID', url: 'https://orcid.org/0000-0002-9803-0763' },
      { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Jianwei-Ma-2' },
    ],
  },
  {
    id: 'qi-liu', name: { zh: '刘祺', en: 'Qi Liu' }, initials: '刘', accent: '#2E7D7A',
    photo: 'member-photos/qi-liu.webp', photoSource: seismicBenchTeamPhotoSource,
    role: { zh: '网页设计与项目规划', en: 'Website Design & Project Planning' },
    affiliation: { zh: '北京大学', en: 'Peking University' },
    bio: { zh: '负责团队网站与项目规划，研究兴趣覆盖生成式地震数据插值与地球物理基础模型。', en: 'Leads website design and project planning, with verified work spanning generative seismic interpolation and foundation models for geophysics.' },
    keywords: [{ zh: '生成模型', en: 'Generative models' }, { zh: '地震插值', en: 'Seismic interpolation' }, { zh: '基础模型', en: 'Foundation models' }],
    links: [
      { label: 'GitHub', url: 'https://github.com/sixseven42' },
      { label: 'Personal Site', url: 'https://sixseven42.github.io/' },
      { label: 'Hugging Face Agent', url: 'https://huggingface.co/spaces/lqwyy/First_agent_template' },
    ],
  },
  {
    id: 'zhitong-cheng', name: { zh: '成知同', en: 'Zhitong Cheng' }, initials: '成', accent: '#6876A8',
    photo: 'member-photos/zhitong-cheng.webp', photoSource: seismicBenchTeamPhotoSource,
    role: { zh: '插值任务负责人', en: 'Interpolation Task Lead' },
    bio: { zh: '负责 SeismicBench 插值任务，并参与面向跨域泛化与高效适应的学习方法研究。', en: 'Leads the SeismicBench interpolation task and contributes to research on efficient domain adaptation and generalization.' },
    keywords: [{ zh: '地震插值', en: 'Seismic interpolation' }, { zh: '域适应', en: 'Domain adaptation' }, { zh: '迁移学习', en: 'Transfer learning' }],
    links: [{ label: 'GitHub', url: 'https://github.com/1eyan' }],
  },
  {
    id: 'tianxiang-gao', name: { zh: '高天翔', en: 'Tianxiang Gao' }, initials: '高', accent: '#BD7B2F',
    photo: 'member-photos/tianxiang-gao.webp', photoSource: seismicBenchTeamPhotoSource,
    role: { zh: '相干噪声去噪任务负责人', en: 'Coherent Noise Denoising Task Lead' },
    bio: { zh: '负责相干噪声压制任务，研究几何感知 Transformer、初至拾取与面波衰减。', en: 'Leads coherent-noise suppression, with verified work on geometry-aware transformers, first-arrival picking and ground-roll attenuation.' },
    keywords: [{ zh: '相干噪声', en: 'Coherent noise' }, { zh: '初至拾取', en: 'First-arrival picking' }, { zh: 'Transformer', en: 'Transformer' }],
  },
  {
    id: 'peng-hu', name: { zh: '胡鹏', en: 'Peng Hu' }, initials: '胡', accent: '#8C5E8A',
    photo: 'member-photos/peng-hu.webp', photoSource: seismicBenchTeamPhotoSource,
    role: { zh: '随机噪声去噪负责人', en: 'Random Noise Denoising Task Lead' },
    bio: { zh: '负责随机噪声压制任务，并开展噪声标签鲁棒学习与个性化联邦学习研究。', en: 'Leads random-noise suppression and works on robust noisy-label learning and personalized federated learning.' },
    keywords: [{ zh: '随机噪声', en: 'Random noise' }, { zh: '鲁棒学习', en: 'Robust learning' }, { zh: '联邦学习', en: 'Federated learning' }],
  },
  {
    id: 'chen-zhang', name: { zh: '张宸', en: 'Chen Zhang' }, initials: '张', accent: '#4F7793',
    photo: 'member-photos/chen-zhang.webp', photoSource: seismicBenchTeamPhotoSource,
    role: { zh: '初至拾取任务负责人', en: 'First-Arrival Picking Task Lead' },
    bio: { zh: '负责 SeismicBench 初至拾取任务的文献整理、基准构建与结果维护。', en: 'Leads literature curation, benchmark construction and result maintenance for first-arrival picking in SeismicBench.' },
    keywords: [{ zh: '初至拾取', en: 'First-arrival picking' }, { zh: '基准评测', en: 'Benchmarking' }, { zh: '地震信号', en: 'Seismic signals' }],
  },
  {
    id: 'shirui-li', name: { zh: '李诗睿', en: 'Shirui Li' }, initials: '李', accent: '#5F8C70',
    photo: 'member-photos/shirui-li.webp', photoSource: seismicBenchTeamPhotoSource,
    role: { zh: '插值任务成员', en: 'Interpolation Task Member' },
    bio: { zh: '参与 SeismicBench 地震数据插值任务的论文整理与基准数据维护。', en: 'Contributes to publication curation and benchmark data maintenance for seismic interpolation.' },
    keywords: [{ zh: '地震插值', en: 'Seismic interpolation' }, { zh: '论文整理', en: 'Literature curation' }],
  },
  {
    id: 'wei-gao', name: { zh: '高伟', en: 'Wei Gao' }, initials: '高', accent: '#B25E5E',
    photo: 'member-photos/wei-gao.webp', photoSource: seismicBenchTeamPhotoSource,
    role: { zh: '插值任务成员', en: 'Interpolation Task Member' },
    bio: { zh: '参与 SeismicBench 地震数据插值任务的模型与结果整理。', en: 'Contributes to model and result curation for the SeismicBench interpolation task.' },
    keywords: [{ zh: '地震插值', en: 'Seismic interpolation' }, { zh: '模型评测', en: 'Model evaluation' }],
  },
  {
    id: 'wenzhe-sheng', name: { zh: '盛文哲', en: 'Wenzhe Sheng' }, initials: '盛', accent: '#4D8589',
    photo: 'member-photos/wenzhe-sheng.webp', photoSource: seismicBenchTeamPhotoSource,
    role: { zh: '随机噪声任务成员', en: 'Random Noise Task Member' },
    bio: { zh: '参与随机噪声压制任务的数据、方法与实验结果整理。', en: 'Contributes to data, method and experimental result curation for random-noise suppression.' },
    keywords: [{ zh: '随机噪声', en: 'Random noise' }, { zh: '数据处理', en: 'Data processing' }],
  },
  {
    id: 'yulong-ge', name: { zh: '葛煜龙', en: 'Yulong Ge' }, initials: '葛', accent: '#7B6A9C',
    photo: 'member-photos/yulong-ge.webp', photoSource: seismicBenchTeamPhotoSource,
    role: { zh: '服务器管理与资源调度', en: 'Server Management & Resource Scheduling' },
    bio: { zh: '负责计算资源与服务运维，并参与跨域学习方法研究。', en: 'Coordinates computing resources and service operations, and contributes to research on cross-domain learning.' },
    keywords: [{ zh: '资源调度', en: 'Resource scheduling' }, { zh: '平台运维', en: 'Platform operations' }, { zh: '域适应', en: 'Domain adaptation' }],
    links: [
      { label: 'GitHub', url: 'https://github.com/yulong-ge' },
      { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Yulong-Ge-3' },
    ],
  },
  {
    id: 'yuying-cheng', name: { zh: '程裕莹', en: 'Yuying Cheng' }, initials: '程', accent: '#A26D45',
    photo: 'member-photos/yuying-cheng.webp', photoSource: seismicBenchTeamPhotoSource,
    role: { zh: '随机噪声去噪成员', en: 'Random Noise Denoising Member' },
    bio: { zh: '参与随机噪声去噪任务的文献收集、结果校验与内容维护。', en: 'Contributes to literature collection, result verification and content maintenance for random-noise denoising.' },
    keywords: [{ zh: '随机噪声', en: 'Random noise' }, { zh: '结果校验', en: 'Result verification' }],
  },
];

export const labProjects: LabProject[] = [
  {
    id: 'nanjing-prestack-foundation-model',
    name: { zh: '南京物探院叠前信号处理大模型', en: 'Nanjing Institute Prestack Signal-Processing Foundation Model' },
    summary: { zh: '面向叠前地震信号处理的大模型研发项目。', en: 'A foundation-model project for prestack seismic signal processing.' },
    topic: { zh: '信号处理 · 大模型', en: 'Signal processing · Foundation models' },
    status: 'ongoing',
    members: [
      { id: 'tianxiang-gao', lead: true }, { id: 'qi-liu' }, { id: 'zhitong-cheng' },
      { id: 'peng-hu' }, { id: 'chen-zhang' }, { id: 'wei-gao' }, { id: 'yuying-cheng' },
    ],
    verifiedOn: '2026-08-29',
  },
  {
    id: 'bgp-prestack-foundation-model',
    name: { zh: '东方（BGP）叠前信号处理大模型', en: 'BGP Prestack Signal-Processing Foundation Model' },
    summary: { zh: '面向叠前地震信号处理的大模型研发项目。', en: 'A foundation-model project for prestack seismic signal processing.' },
    topic: { zh: '信号处理 · 大模型', en: 'Signal processing · Foundation models' },
    status: 'ongoing',
    members: [
      { id: 'tianxiang-gao', lead: true }, { id: 'qi-liu' }, { id: 'zhitong-cheng' },
      { id: 'peng-hu' }, { id: 'chen-zhang' }, { id: 'wei-gao' }, { id: 'yuying-cheng' },
    ],
    verifiedOn: '2026-08-29',
  },
  {
    id: 'multimodal-foundation-model',
    name: { zh: '多模态通用大模型', en: 'Multimodal General Foundation Model' },
    summary: { zh: '面向多模态叠后地震信号处理的通用大模型项目。', en: 'A general foundation-model project for multimodal poststack seismic signal processing.' },
    topic: { zh: '多模态叠后信号处理', en: 'Multimodal poststack signal processing' },
    status: 'ongoing',
    members: [
      { id: 'tianxiang-gao', lead: true }, { id: 'qi-liu' }, { id: 'zhitong-cheng' },
      { id: 'peng-hu' }, { id: 'chen-zhang' }, { id: 'wei-gao' }, { id: 'yuying-cheng' },
    ],
    verifiedOn: '2026-08-29',
  },
  {
    id: 'changqing-regularization',
    name: { zh: '长庆规则化项目', en: 'Changqing Seismic Regularization Project' },
    summary: { zh: '围绕地震数据规则化开展方法研发与应用验证。', en: 'Method development and application validation for seismic data regularization.' },
    topic: { zh: '规则化', en: 'Seismic regularization' },
    status: 'ongoing',
    members: [{ id: 'zhitong-cheng', lead: true }, { id: 'wei-gao' }],
    verifiedOn: '2026-08-29',
  },
  {
    id: 'bgp-five-dimensional-regularization',
    name: { zh: '东方五维规则化', en: 'BGP Five-Dimensional Regularization' },
    summary: { zh: '已完成的五维地震数据规则化项目。', en: 'A completed project on five-dimensional seismic data regularization.' },
    topic: { zh: '规则化', en: 'Seismic regularization' },
    status: 'completed',
    members: [{ id: 'zhitong-cheng' }, { id: 'qi-liu' }, { id: 'tianxiang-gao' }, { id: 'shirui-li' }],
    verifiedOn: '2026-08-29',
  },
  {
    id: 'loess-plateau-denoising',
    name: { zh: '黄土塬去噪', en: 'Loess Plateau Denoising' },
    summary: { zh: '针对黄土塬地震资料的面波压制项目。', en: 'A ground-roll attenuation project for seismic data acquired in loess plateau settings.' },
    topic: { zh: '面波压制', en: 'Ground-roll attenuation' },
    status: 'completed',
    members: [{ id: 'tianxiang-gao' }, { id: 'qi-liu' }, { id: 'peng-hu' }],
    verifiedOn: '2026-08-29',
  },
  {
    id: 'nanjing-deblending',
    name: { zh: '南京去混叠', en: 'Nanjing Seismic Deblending' },
    summary: { zh: '面向混采地震数据的去混叠处理项目。', en: 'A deblending project for blended seismic acquisition data.' },
    topic: { zh: '去混叠', en: 'Seismic deblending' },
    status: 'completed',
    members: [{ id: 'peng-hu' }],
    verifiedOn: '2026-08-29',
  },
  {
    id: 'nearby-vessel-interference',
    name: { zh: '临船干扰', en: 'Nearby-Vessel Interference Attenuation' },
    summary: { zh: '面向海上地震采集临船干扰的信号处理项目。', en: 'A signal-processing project for nearby-vessel interference in marine seismic acquisition.' },
    topic: { zh: '信号处理', en: 'Signal processing' },
    status: 'completed',
    members: [{ id: 'qi-liu' }],
    verifiedOn: '2026-08-29',
  },
  {
    id: 'rugged-seafloor-mechanism',
    name: { zh: '崎岖海底机理研究', en: 'Rugged Seafloor Mechanism Study' },
    summary: { zh: '研究崎岖海底条件下的地震波传播机理。', en: 'A study of seismic-wave propagation mechanisms under rugged seafloor conditions.' },
    topic: { zh: '地震波传播', en: 'Seismic-wave propagation' },
    status: 'completed',
    members: [{ id: 'qi-liu' }],
    verifiedOn: '2026-08-29',
  },
];

export const seismicBench = {
  name: 'SeismicBench',
  label: { zh: '代表项目', en: 'Featured project' },
  summary: {
    zh: '开放的地震数据处理学术基准平台，以可复现、可追溯的方式汇集方法、数据集、论文与评测结果。',
    en: 'An open academic benchmark that brings seismic processing methods, datasets, papers and evaluation results together in a reproducible, traceable platform.',
  },
  stats: [
    { value: 88, label: { zh: '方法', en: 'Methods' } },
    { value: 44, label: { zh: '基准', en: 'Benchmarks' } },
    { value: 368, label: { zh: '论文', en: 'Papers' } },
    { value: 494, label: { zh: '结果', en: 'Results' } },
  ],
  verifiedOn: '2026-08-28',
  tasks: [
    { zh: '地震数据插值', en: 'Seismic interpolation' },
    { zh: '相干噪声压制', en: 'Coherent-noise suppression' },
    { zh: '随机噪声压制', en: 'Random-noise suppression' },
    { zh: '初至拾取', en: 'First-arrival picking' },
    { zh: '多次波衰减', en: 'Multiples attenuation' },
  ],
  milestones: [
    { date: '2026-04-11', text: { zh: '项目正式启动', en: 'Project launched' } },
    { date: '2026-05-28', text: { zh: 'SeismicBench v1.0 发布', en: 'SeismicBench v1.0 released' } },
    { date: '2026-08-28', text: { zh: '方法、基准与结果数据完成新一轮核验', en: 'Methods, benchmarks and results re-verified' } },
  ],
  siteUrl: 'https://sixseven42.github.io/seismic-benchmark/',
  repoUrl: 'https://github.com/sixseven42/seismic-benchmark',
  modelsUrl: 'https://huggingface.co/GeoBrain',
  logoUrl: 'https://raw.githubusercontent.com/sixseven42/seismic-benchmark/main/public/logo.png',
};

export function localize(value: Localized, lang: Lang) {
  return value[lang];
}

export function getMember(id: string) {
  return members.find((member) => member.id === id);
}

export function getProjectsForMember(memberId: string) {
  return labProjects.filter((project) => project.members.some((participant) => participant.id === memberId));
}

function validateSiteData() {
  const errors: string[] = [];
  const memberIds = new Set<string>();
  const areaIds = new Set<string>();
  const projectIds = new Set<string>();

  for (const member of members) {
    if (memberIds.has(member.id)) errors.push(`Duplicate member id: ${member.id}`);
    memberIds.add(member.id);
    if (!member.name.zh || !member.name.en || !member.bio.zh || !member.bio.en) {
      errors.push(`Missing bilingual member content: ${member.id}`);
    }
    for (const link of member.links ?? []) {
      try {
        new URL(link.url);
      } catch {
        errors.push(`Invalid member link for ${member.id}: ${link.url}`);
      }
    }
  }

  for (const area of researchAreas) {
    if (areaIds.has(area.id)) errors.push(`Duplicate research area id: ${area.id}`);
    areaIds.add(area.id);
    if (!area.title.zh || !area.title.en || !area.description.zh || !area.description.en) {
      errors.push(`Missing bilingual research content: ${area.id}`);
    }
    for (const memberId of area.members) {
      if (!memberIds.has(memberId)) {
        errors.push(`Unknown member ${memberId} in research area ${area.id}`);
      }
    }
    for (const resource of area.resources ?? []) {
      try {
        new URL(resource.url);
      } catch {
        errors.push(`Invalid resource link for ${area.id}: ${resource.url}`);
      }
    }
  }

  for (const project of labProjects) {
    if (projectIds.has(project.id)) errors.push(`Duplicate project id: ${project.id}`);
    projectIds.add(project.id);
    if (!project.name.zh || !project.name.en || !project.summary.zh || !project.summary.en) {
      errors.push(`Missing bilingual project content: ${project.id}`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(project.verifiedOn)) {
      errors.push(`Invalid project verification date: ${project.id}`);
    }
    if (project.members.length === 0) errors.push(`Project has no GeoBrain members: ${project.id}`);
    const projectMemberIds = new Set<string>();
    for (const participant of project.members) {
      if (!memberIds.has(participant.id)) errors.push(`Unknown member ${participant.id} in project ${project.id}`);
      if (projectMemberIds.has(participant.id)) errors.push(`Duplicate member ${participant.id} in project ${project.id}`);
      projectMemberIds.add(participant.id);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Site data validation failed:\n${errors.join('\n')}`);
  }
}

validateSiteData();
