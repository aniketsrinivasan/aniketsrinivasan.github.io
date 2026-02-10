---
layout: page
title: CV
permalink: /cv/
---

<a href="{{ '/files/resume.pdf' | relative_url }}" class="cv-download">↓ Download PDF</a>

## Education

<div class="cv-entry">
  <div class="cv-entry-header">
    <h3>University of Waterloo</h3>
    <span class="cv-date">Aug 2023 — Apr 2028</span>
  </div>
  <p class="cv-role">B. Math in Data Science + Pure Mathematics</p>
  <p class="cv-location">Waterloo, ON, Canada</p>
  <ul>
    <li>Coursework: Algorithms, Data Structures, Stochastic Processes, Probability, NLP (Audit), Compilers</li>
  </ul>
</div>

## Work Experience

<div class="cv-entry">
  <div class="cv-entry-header">
    <h3>Faire</h3>
    <span class="cv-date">May 2026 — Aug 2026</span>
  </div>
  <p class="cv-role">ML Platform Engineer Intern</p>
  <p class="cv-location">Waterloo, ON, Canada</p>
  <ul>
    <li>Incoming Summer 2026.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <h3>Viggle AI (a16z)</h3>
    <span class="cv-date">Jan 2026 — Apr 2026</span>
  </div>
  <p class="cv-role">Software Engineer Intern</p>
  <p class="cv-location">Toronto, ON, Canada</p>
  <div class="cv-tech">
    <span class="tag">Python</span>
    <span class="tag">Go</span>
    <span class="tag">TypeScript</span>
    <span class="tag">React</span>
    <span class="tag">Docker</span>
  </div>
  <ul>
    <li>Designed a distributed ML inference engine processing 70,000+ videos/day across 8× GPUs, enabling real-time person tracking/segmentation in complex videos with 95%+ accuracy (ID-matching) at 20fps @ 1080p.</li>
    <li>Implemented dynamic batching (YOLO/CLIP), yielding 3× throughput. Adapted Meta SAM3 with custom cache initialization, batch-inference support, and weight sharing, reducing per-video latency and VRAM by 40%.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <h3>Bradbury Group</h3>
    <span class="cv-date">May 2025 — Present</span>
  </div>
  <p class="cv-role">ML Research Engineer</p>
  <p class="cv-location">New York City, NY, USA (Remote)</p>
  <div class="cv-tech">
    <span class="tag">PyTorch</span>
    <span class="tag">Slurm</span>
    <span class="tag">Git</span>
    <span class="tag">AWS</span>
  </div>
  <ul>
    <li>Developed block-injection support for FLUX.1 and LLaMA to explore architecture model improvements.</li>
    <li>Ran 30+ ablations on ViT models and developed deterministic block-replacement algorithms (including statistical correction, dynamic weight scheduling, etc.) for module distillation, enabling 15% faster convergence.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <h3>CaseClock @ Rockland</h3>
    <span class="cv-date">Jan 2025 — Apr 2025</span>
  </div>
  <p class="cv-role">Software Engineer Intern (Founding Team)</p>
  <p class="cv-location">Victoria, BC, Canada</p>
  <div class="cv-tech">
    <span class="tag">Python</span>
    <span class="tag">Azure</span>
    <span class="tag">FastAPI</span>
    <span class="tag">LangChain</span>
    <span class="tag">SQL</span>
    <span class="tag">Git</span>
  </div>
  <ul>
    <li>Built voice-first AI platform from scratch, engineering a voice transcription + multi-agent serverless inference engine with Azure AI and Functions auto-scaling, serving 1,000+ requests/min with &lt;5s response time.</li>
    <li>Improved system performance achieving 4× faster inference through asynchronous agent execution and semantic caching, and improved accuracy from 75% to 90% using history-aware RAG with MCP tool-calling.</li>
    <li>Developed data pipeline with SQL, Azure Blob Storage, and MongoDB Atlas with automated ETL processes and document processing + vectorization. Reduced storage costs 20× using SQL auto-archiving.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <h3>Unleash Networks</h3>
    <span class="cv-date">May 2024 — Aug 2024</span>
  </div>
  <p class="cv-role">ML Engineer Intern</p>
  <p class="cv-location">Chennai, TN, India</p>
  <div class="cv-tech">
    <span class="tag">PyTorch</span>
    <span class="tag">SQL</span>
    <span class="tag">Git</span>
  </div>
  <ul>
    <li>Engineered time-series forecasting for network metrics achieving sub-100ms inference latency through ensembled XGBoost, LSTM, and ARIMA models, deployed on local servers using automated batched processing.</li>
    <li>Achieved &gt;94% accuracy and &lt;1% false positive on real-time unsupervised anomaly (DoS/DDoS) detection in multi-variate network data with variational autoencoders (VAEs) and Kolmogorov-Smirnov testing.</li>
    <li>Developed data cleaning and engineering pipelines for high-dimensional network data using Pandas and SQL.</li>
  </ul>
</div>

## Research

<div class="cv-entry">
  <div class="cv-entry-header">
    <h3>Vision and Image Processing Lab @ UWaterloo</h3>
    <span class="cv-date">Sep 2024 — Aug 2025</span>
  </div>
  <p class="cv-role">ML Researcher (Part-Time)</p>
  <p class="cv-location">Waterloo, ON, Canada</p>
  <div class="cv-tech">
    <span class="tag">PyTorch</span>
    <span class="tag">Slurm</span>
    <span class="tag">Git</span>
  </div>
  <ul>
    <li>Built and trained generative diffusion models (200M–1.5B parameters) for the 4×, 8× and 16× super-resolution of wind data, reducing costs against traditional simulation methods by over 100×.</li>
    <li>Developed mechanisms for flow field reconstruction, including implementing flow matching schedulers, diffusion transformers (DiTs), iterative refinement algorithms, beam-search, physics-based and wavelet-domain losses.</li>
  </ul>
</div>

## Publications

<div class="cv-pub">
  <span class="pub-title">DCR: Fast and Stable Module Replacement in Transformers</span>
  <a href="#" class="pub-link">OpenReview ↗</a>
</div>

<div class="cv-pub">
  <span class="pub-title">Diffusion Models for Efficient and Accurate Super-Resolution of Wind Dynamics</span>
  <a href="#" class="pub-link">arXiv ↗</a>
</div>

## Technical Skills

<div class="cv-skills">
  <span class="tag">Python</span>
  <span class="tag">C/C++</span>
  <span class="tag">PyTorch</span>
  <span class="tag">WandB</span>
  <span class="tag">HuggingFace</span>
  <span class="tag">scikit-learn</span>
  <span class="tag">NumPy</span>
  <span class="tag">Triton/CUDA</span>
  <span class="tag">FastAPI</span>
  <span class="tag">Jupyter</span>
  <span class="tag">Slurm</span>
  <span class="tag">Azure</span>
  <span class="tag">AWS</span>
  <span class="tag">GCP</span>
  <span class="tag">MongoDB</span>
  <span class="tag">SQL</span>
  <span class="tag">Docker</span>
  <span class="tag">Git</span>
  <span class="tag">MIPS Assembly</span>
</div>
