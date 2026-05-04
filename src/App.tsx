import { useState } from 'react'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Hi! I am a rule-based profile bot. Ask about education, experience, projects, skills, or contact.',
    },
  ])

  const projects = [
    {
      title: 'KV-Paged Inference System for Transformer Models',
      tech: 'Python, PyTorch, Transformers, ML Systems, OS Concepts',
      summary:
        'Designed a paged KV cache with page tables, reference counting, prefix reuse, and copy-on-write to improve long-context inference memory efficiency.',
      link: 'https://github.com/manankapoor23/KV-Paged-Attention',
    },
    {
      title: 'PRISM - Punjabi Rewriting Instructional Supervised Multi-task Model',
      tech: 'Python, PyTorch, Unsloth, HuggingFace, LLM Fine-Tuning, Gemini API',
      summary:
        'Built and published a 91,000+ sample Punjabi instruction dataset and fine-tuned LLaMA 3.1 8B on A100 GPUs with benchmark-driven evaluation.',
      link: 'https://huggingface.co/datasets/manankap23/PRISM-Punjabi',
    },
    {
      title: 'Natural Language to SQL Query System',
      tech: 'Python, LangChain, LLMs, SQL, Slack API, Prompt Engineering',
      summary:
        'Implemented a Slack-integrated natural language to SQL pipeline that generates schema-aware queries and returns structured results.',
      link: 'https://github.com/manankapoor23/NL-SQL',
    },
  ]

  const skillGroups = [
    {
      title: 'LANGUAGES',
      items: 'Python, C++, JavaScript, R',
    },
    {
      title: 'ML_AND_AI',
      items:
        'Transformers, LLMs, RAG, Prompt Engineering, Fine-Tuning, Deep Learning',
    },
    {
      title: 'LIBRARIES',
      items:
        'PyTorch, Hugging Face Transformers, LangChain, Pandas, NumPy, Scikit-learn',
    },
    {
      title: 'SYSTEMS',
      items: 'SQL, PostgreSQL, FAISS, Chroma, Docker, Git and GitHub, VS Code, Jupyter',
    },
  ]

  const chatPrompts = [
    { label: 'Education', query: 'Where did you study and what is your CGPA?' },
    { label: 'Experience', query: 'What is your current role?' },
    { label: 'Projects', query: 'What are your top projects?' },
    { label: 'PRISM', query: 'Tell me about PRISM Punjabi.' },
    { label: 'Skills', query: 'What are your core skills?' },
    { label: 'Contact', query: 'How can I reach you?' },
  ]

  const getBotReply = (rawInput: string) => {
    const input = rawInput.toLowerCase()

    if (input.includes('name') || input.includes('who are you')) {
      return 'He is Manan Kapoor, a Computer Engineering student and Research Intern focused on Punjabi NLP and LLMs.'
    }

    if (input.includes('education') || input.includes('college') || input.includes('study') || input.includes('institute')) {
      return 'He studies Computer Engineering at Thapar Institute of Engineering and Technology (2024 - 2028), CGPA 8.07 / 10.00.'
    }

    if (input.includes('cgpa') || input.includes('gpa') || input.includes('grades')) {
      return 'Current CGPA: 8.07 / 10.00.'
    }

    if (input.includes('experience') || input.includes('intern') || input.includes('role')) {
      return 'Research Intern at TIET (2025 - Present), working on instruction tuning, Punjabi NLP datasets, and LLM fine-tuning.'
    }

    if (input.includes('skills') || input.includes('stack') || input.includes('tech')) {
      return 'Core skills: Transformers, LLMs, RAG, fine-tuning, PyTorch, Hugging Face, LangChain, SQL, PostgreSQL, Docker, Git.'
    }

    if (input.includes('project') || input.includes('projects')) {
      return 'Top projects: KV-Paged Inference System, PRISM Punjabi dataset + fine-tuning, and a Natural Language to SQL system.'
    }

    if (input.includes('prism') || input.includes('punjabi')) {
      return 'PRISM is a 91,000+ sample Punjabi instruction dataset with LLaMA 3.1 8B fine-tuning and multi-metric evaluation.'
    }

    if (input.includes('kv') || input.includes('paged')) {
      return 'KV-Paged Inference builds a paged KV cache with page tables and copy-on-write to improve long-context inference memory.'
    }

    if (input.includes('sql') || input.includes('nl') || input.includes('slack')) {
      return 'Natural Language to SQL: a Slack-integrated pipeline that generates schema-aware SQL and returns structured results.'
    }

    if (input.includes('contact') || input.includes('email') || input.includes('linkedin') || input.includes('github')) {
      return 'Email: 23.kapoormanan@gmail.com | LinkedIn: linkedin.com/in/manan-kapoor | GitHub: github.com/manankapoor23'
    }

    if (input.includes('location') || input.includes('based')) {
      return 'Based in Chandigarh, India.'
    }

    if (input.includes('summary') || input.includes('about')) {
      return 'Computer Engineering student and Research Intern focused on Punjabi NLP, dataset engineering, and LLM fine-tuning.'
    }

    return 'I can answer about education, experience, projects, skills, and contact. Try a quick prompt below.'
  }

  const handleSendMessage = (message: string) => {
    const trimmed = message.trim()
    if (!trimmed) return

    const reply = getBotReply(trimmed)
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'bot', text: reply },
    ])
    setChatInput('')
    setIsChatOpen(true)
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-fg-primary)]">
      <header className="divider">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 md:px-6">
          <p className="text-3xl tracking-widest dot-matrix-text">
            MANAN_KAPOOR
          </p>
          <nav className="flex items-center gap-6 text-lg uppercase tracking-widest md:gap-8">
            <a href="#about" className="led-btn">
              ABOUT
            </a>
            <a href="#education" className="led-btn">
              EDU
            </a>
            <a href="#experience" className="led-btn">
              EXP
            </a>
            <a href="#projects" className="led-btn">
              WORK
            </a>
            <a href="#skills" className="led-btn">
              SKILLS
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <section id="about" className="grid gap-12 lg:grid-cols-12">
          <article className="section lg:col-span-7">
            <p className="mb-6 text-sm uppercase tracking-widest dot-matrix-dim">
              EXECUTIVE_SUMMARY
            </p>
            <h1 className="text-5xl leading-tight md:text-7xl dot-matrix-text mb-8">
              AI/ML systems & research engineer.
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-[var(--color-fg-secondary)] mb-6">
              I am a Computer Engineering student at Thapar Institute of Engineering and
              Technology and currently a Research Intern focused on instruction tuning,
              controlled text generation, and Punjabi language model development.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <a
                href="#projects"
                className="led-btn-accent uppercase tracking-widest"
              >
                VIEW WORK &rarr;
              </a>
              <a
                href="#contact"
                className="led-btn uppercase tracking-widest"
              >
                CONTACT &rarr;
              </a>
            </div>
          </article>

          <aside className="section lg:col-span-5">
            <p className="mb-4 text-sm uppercase tracking-widest dot-matrix-dim">
              PROFILE_DATA
            </p>
            <ul className="mt-5 space-y-4 text-lg leading-relaxed text-[var(--color-fg-secondary)]">
              <li>Role: Research Intern (2025 - Present)</li>
              <li>Institute: TIET, Patiala</li>
              <li>Focus: Punjabi NLP, dataset engineering, LLM fine-tuning</li>
              <li>Current CGPA: 8.07 / 10.00</li>
            </ul>
            <div className="mt-12">
              <button
                type="button"
                className="led-btn-accent uppercase tracking-widest text-lg"
                onClick={() => setIsChatOpen((prev) => !prev)}
              >
                ASK_ABOUT_ME &rarr;
              </button>
              <p className="mt-3 text-sm uppercase tracking-widest dot-matrix-dim">
                RULE_BASED_CHATBOT
              </p>
              {isChatOpen ? (
                <div className="mt-3 section p-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs uppercase tracking-widest dot-matrix-accent">
                      PROFILE_BOT
                    </p>
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--color-fg-secondary)]">
                      <span className="chat-led"></span>
                      rules-only
                    </span>
                  </div>
                  <div className="mt-3 max-h-48 space-y-3 overflow-y-auto text-sm">
                    {messages.map((message, index) => (
                      <div
                        key={`${message.role}-${index}`}
                        className={`chat-bubble ${message.role === 'user' ? 'chat-user' : 'chat-bot'}`}
                      >
                        {message.text}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {chatPrompts.map((prompt) => (
                      <button
                        key={prompt.label}
                        type="button"
                        className="chat-chip"
                        onClick={() => handleSendMessage(prompt.query)}
                      >
                        {prompt.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(event) => setChatInput(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          event.preventDefault()
                          handleSendMessage(chatInput)
                        }
                      }}
                      placeholder="Ask about education, projects, skills..."
                      className="chat-input flex-1 text-sm"
                    />
                    <button
                      type="button"
                      className="led-btn text-xs uppercase tracking-widest"
                      onClick={() => handleSendMessage(chatInput)}
                    >
                      ASK
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </aside>
        </section>

        <section id="education" className="mt-16 pt-8 divider-top">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl dot-matrix-text">
              EDUCATION_BULLETIN
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-sm uppercase tracking-widest dot-matrix-dim mb-3">
                INSTITUTION
              </p>
              <h3 className="text-2xl dot-matrix-text mb-2">
                Thapar Institute of Engineering and Technology, Punjab
              </h3>
              <p className="text-lg leading-relaxed text-[var(--color-fg-secondary)]">
                Bachelor of Engineering in Computer Engineering (COE)
              </p>
            </div>
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-widest dot-matrix-dim mb-3">
                ACADEMIC_SNAPSHOT
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-fg-secondary)] mb-1">
                Duration: 2024 - 2028
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-fg-secondary)]">
                CGPA: 8.07 / 10.00
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-16 pt-8 divider-top">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl dot-matrix-text">
              EXPERIENCE_LEDGER
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-lg">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="py-4 font-normal dot-matrix-dim">PERIOD</th>
                  <th className="py-4 font-normal dot-matrix-dim">ORGANIZATION</th>
                  <th className="py-4 font-normal dot-matrix-dim">ROLE</th>
                  <th className="py-4 font-normal dot-matrix-dim">IMPACT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-5 pr-4 text-[var(--color-fg-secondary)] align-top">2025 - Present</td>
                  <td className="py-5 pr-4 align-top">TIET, Patiala</td>
                  <td className="py-5 pr-4 align-top">Research Intern</td>
                  <td className="py-5 text-[var(--color-fg-secondary)] align-top">
                    Built PRISM-Punjabi, generated 91,000+ supervised samples, and
                    fine-tuned LLaMA 3.1 8B with strong BERTScore alignment.
                  </td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-5 pr-4 text-[var(--color-fg-secondary)] align-top">2024 - 2028</td>
                  <td className="py-5 pr-4 align-top">TIET, Punjab</td>
                  <td className="py-5 pr-4 align-top">B.E. Student (COE)</td>
                  <td className="py-5 text-[var(--color-fg-secondary)] align-top">
                    Strengthening computer science fundamentals and applied ML systems skills.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="projects" className="mt-16 pt-8 divider-top">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl dot-matrix-text">
              PROJECTS_DESK
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <p className="text-sm uppercase tracking-widest dot-matrix-dim mb-3">
                  {project.tech}
                </p>
                <h3 className="text-2xl dot-matrix-text mb-3 group-hover:opacity-80 transition-opacity">
                  {project.title}
                </h3>
                <p className="text-lg leading-relaxed text-[var(--color-fg-secondary)] mb-4">
                  {project.summary}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm uppercase tracking-widest dot-matrix-accent"
                >
                  VIEW_LINK &rarr;
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-16 pt-8 divider-top mb-16">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl dot-matrix-accent">
              SKILLS_&_CONTACT
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm uppercase tracking-widest dot-matrix-accent mb-3">
                  {group.title}
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-fg-secondary)]">
                  {group.items}
                </p>
              </div>
            ))}
            <div id="contact" className="md:col-span-2 divider-top pt-8 mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest dot-matrix-accent mb-3">CONTACT</p>
                <p className="text-lg text-[var(--color-fg-secondary)]">23.kapoormanan@gmail.com</p>
                <p className="text-lg text-[var(--color-fg-secondary)]">+91 99999 35670</p>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://linkedin.com/in/manan-kapoor" className="text-lg">LinkedIn &rarr;</a>
                <a href="https://github.com/manankapoor23" className="text-lg">GitHub &rarr;</a>
                <a href="https://leetcode.com/u/manankapoor23" className="text-lg">LeetCode &rarr;</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App