// Edit this file to update the website. Publication statuses follow the supplied résumé.
export const profile = {
  name: 'Akshansh Yadav',
  role: 'Ph.D. Researcher · Computer Science & Engineering',
  institution: 'Indian Institute of Technology Jodhpur',
  email: 'd23cse001@iitj.ac.in',
  github: 'https://github.com/akshanshyadav-research',
  scholar: 'https://scholar.google.com/citations?user=sR6bOnoAAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/viraj-yadav-2000manu/',
  bio: 'I explore how AI models work internally and how that understanding can guide efficient hardware design. My research combines Vision Transformer token pruning, FPGA acceleration, and hardware–software co-design, connecting attention mechanisms and token interactions with ways to reduce computation while preserving accuracy.',
  about: 'At IIT Jodhpur, I work with Dr. Palash Das on efficient AI inference. My work spans model optimization, HLS accelerator design, and end-to-end deployment on AMD/Xilinx platforms, with an emphasis on the trade-offs between accuracy, latency, power, and hardware resources.',
};

export const publications = [
  {"year":"2026","category":"Conference","status":"Accepted","title":"On-Chip Implementation of ANN Inference System for E-Nose-Based Fruit Ripening Monitoring","authors":"Joel Debbarma, Akshansh Yadav, Rajul Sharma, Rajeev Kumar, Palash Das, and Pydi Ganga M. Bahubalindruni","venue":"IEEE International Symposium on Smart Electronic Systems (iSES), NIT Goa, Goa, India"},
  { year: '2026', category: 'Journal', status: 'Accepted', title: 'Prune Before You Attend: Correlation-Driven Token Pruning for Hardware-Efficient ViT Acceleration', authors: 'Akshansh Yadav and Palash Das', venue: 'IEEE Transactions on Very Large Scale Integration (VLSI) Systems', doi: '10.1109/TVLSI.2026.3737685', summary: 'PearViT and G-PearViT use early correlation-based token pruning and spatial grouping, combined with attention-based refinement.' },
  { year: '2026', category: 'Journal', status: 'Published', title: 'GateAttn-ViT: Entropy-Gated, Attention-Guided Token Pruning for Resource-Efficient Vision Transformer Acceleration on FPGAs', authors: 'Akshansh Yadav and Palash Das', venue: 'Journal of Systems Architecture, vol. 177, article 103836', doi: '10.1016/j.sysarc.2026.103836', code: 'https://github.com/akshanshyadav-research/GateAttn-ViT', summary: 'Training-free entropy gating and multi-stage attention selection, co-designed with an FPGA accelerator.' },
  { year: '2026', category: 'Conference', status: 'Accepted', title: 'KTA-Attn ViT: A Hierarchical Token Pruning Framework for Accelerating ViTs', authors: 'Akshansh Yadav and Palash Das', venue: '44th IEEE International Conference on Computer Design (ICCD)', summary: 'Kendall Token Attribution removes redundant tokens before the encoder; hierarchical attention selection refines the remaining sequence.' },
  { year: '2026', category: 'Conference', status: 'Accepted', title: 'CSAP-ViT: Cascade Similarity–Attention Pruning for Accelerating ViTs on FPGA', authors: 'Akshansh Yadav and Palash Das', venue: 'IEEE Computer Society Annual Symposium on VLSI (ISVLSI)', summary: 'A cascade of cosine-similarity pruning and attention-based selection for efficient FPGA inference.' },
  { year: '2025', category: 'Conference', status: 'Accepted', title: 'G-SHIELD: Hardware Acceleration for Defending CNNs Against Adversarial Attacks', authors: 'Deepraj Majumdar, Akshansh Yadav, Dhiraj Raj, and Palash Das', venue: '11th IEEE International Symposium on Smart Electronic Systems (iSES)' },
  { year: '2025', category: 'Conference', status: 'Published', title: 'Hybrid Token Selector Based Accelerator for ViTs', authors: 'Akshansh Yadav, Anadi Goyal, and Palash Das', venue: 'Design, Automation & Test in Europe Conference (DATE)', summary: 'Content-aware keypoint selection in early layers and attention-based token selection in later layers, supported by custom FPGA modules.' },
];

export const projects = [
  { title: 'GateAttn-ViT', tags: 'Vision Transformers · FPGA · PyTorch', description: 'Entropy-gated and attention-guided token pruning, from model evaluation to accelerator implementation on AMD ZCU104.', link: 'https://github.com/akshanshyadav-research/GateAttn-ViT' },
  { title: 'End-to-End ViT Inference on Alveo U250', tags: 'Vitis HLS · XRT · C++', description: 'Inference kernels and host–device integration, with loop pipelining, unrolling, memory partitioning, and latency analysis.' },
  { title: 'SmartBypass', tags: 'Reinforcement Learning · Computer Architecture', description: 'Online reinforcement learning for adaptive STT-RAM last-level cache bypassing, using reuse and system feedback to manage writes.' },
  { title: 'CRAFT: Diffusion Transformer Acceleration', tags: 'Diffusion Transformers · Feature Caching · FPGA', description: 'Adaptive feature reuse across denoising timesteps, paired with a configurable accelerator for efficient DiT inference.' },
  { title: 'Last-Level Cache Prefetching', tags: 'ChampSim · C++ · Cache Simulation', description: 'Implementation and integration of LLC prefetching policies to study cache behavior and compare prefetching strategies.' },
  { title: 'MIPS Processor Simulator', tags: 'Logisim · Python · Computer Architecture', description: 'A MIPS instruction-execution simulator and a Python assembly translator that produces compatible machine code.' },
  { title: 'Peer-to-Peer File Sharing', tags: 'Python · Tkinter · TCP Sockets', description: 'A desktop application for direct file and message sharing, using TCP sockets and multithreading.' },
  { title: 'GAN Image Generation', tags: 'TensorFlow · Keras · DCGAN', description: 'Generator and discriminator training for synthetic image generation, with batch normalization and learning-rate scheduling.' },
];

export const education = [
  { date: '2023–Present', title: 'Integrated M.Tech.–Ph.D., Computer Science & Engineering', institution: 'Indian Institute of Technology Jodhpur', detail: 'M.Tech. awarded in 2025 · Advisor: Dr. Palash Das' },
  { date: '2023', title: 'B.Tech., Computer Science & Engineering', institution: 'Dr. A.P.J. Abdul Kalam Technical University', detail: 'First Division with Distinction' },
  { date: '2018', title: 'Certificate Integrated Diploma, Mechanical Engineering', institution: 'Sant Longowal Institute of Engineering and Technology' },
];
