# MANAN KAPOOR

Computer Engineering undergraduate at Thapar Institute of Engineering and Technology, currently working as a Research Intern focused on Punjabi NLP, instruction tuning, and large language model fine-tuning.

## Contact

- Phone: +91 99999 35670
- Location: Chandigarh, India
- Email: 23.kapoormanan@gmail.com
- LinkedIn: https://linkedin.com/in/manan-kapoor
- GitHub: https://github.com/manankapoor23
- LeetCode: https://leetcode.com/u/manankapoor23
- Portfolio: https://mkap.netlify.app

## Education

Thapar Institute of Engineering and Technology, Punjab, India  
Bachelor of Engineering in Computer Engineering (COE)  
2024 - 2028 | CGPA: 8.07 / 10.00

## Experience

### Research Intern (2025 - Present)
Thapar Institute of Engineering and Technology, Patiala, India

- Designed and published PRISM-Punjabi on HuggingFace, the first multi-task Punjabi instruction dataset for controlled text rewriting.
- Processed 16.43M tokens from 600+ curated web sources.
- Built a Gemini 2.0 Flash teacher-model supervision pipeline generating 91,000+ instruction-conditioned samples across 6 rewriting tasks.
- Applied structural validation that removed about 37% corrupt samples while maintaining 100% instruction compliance with BERTScore >= 0.929.
- Fully fine-tuned LLaMA 3.1 8B on A100 GPUs with Unsloth and evaluated against 4 instruction baselines across 5 metrics on 6 tasks.

## Projects

### 1. KV-Paged Inference System for Transformer Models
GitHub: https://github.com/manankapoor23/KV-Paged-Attention  
Tech: Python, PyTorch, Transformers, ML Systems, OS Concepts

- Architected a paged KV cache system for transformer inference to improve long-context decoding memory efficiency by 40%+.
- Designed allocator-backed KV pages with page tables, reference counting, prefix reuse, and copy-on-write semantics.
- Reduced redundant allocations by 35% and validated numerical equivalence against naive attention with less than 0.1% precision delta.

### 2. PRISM - Punjabi Rewriting Instructional Supervised Multi-task Model
Dataset: https://huggingface.co/datasets/manankap23/PRISM-Punjabi  
Tech: Python, PyTorch, Unsloth, HuggingFace, Gemini API, NLP, A100 GPU

- Curated 91,000+ instruction samples across 6 Punjabi transformation tasks on 16M+ tokens.
- Published dataset on HuggingFace under CC-BY 4.0.
- Benchmarked fine-tuned models against LLaMA-3.1-Instruct, Mistral-7B, Gemma-7B, and Phi-3-Mini across BLEU, chrF++, ROUGE-L, BERTScore-F1, and Word-F1.

### 3. Natural Language to SQL Query System
GitHub: https://github.com/manankapoor23/NL-SQL  
Tech: Python, LangChain, LLMs, SQL, Slack API, Prompt Engineering

- Built an LLM-powered Natural Language to SQL pipeline for executable database querying.
- Developed a Slack-integrated assistant that generates schema-aware SQL and returns structured query results.

## Technical Skills

- Languages: Python, C++, JavaScript, R
- ML and AI: Machine Learning, Deep Learning, Transformers, LLMs, RAG, Prompt Engineering, Fine-Tuning
- Data and ML Engineering: Data Cleaning, Feature Engineering, Cross-Validation, Hyperparameter Tuning, Model Evaluation
- Libraries and Frameworks: Pandas, NumPy, Scikit-learn, PyTorch, Matplotlib, Seaborn, Hugging Face Transformers, LangChain, OpenAI SDK, NLTK
- Backend and Systems: JSON, Model Serving, Inference Pipelines
- Databases: SQL, PostgreSQL, FAISS, Chroma
- Tools: Git, GitHub, Docker, VS Code, Jupyter, RStudio
- CS Fundamentals: Data Structures and Algorithms, OOP, Operating Systems, DBMS, Computer Networks, Probability and Statistics
