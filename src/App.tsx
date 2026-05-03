import { useEffect, useState } from 'react'

function App() {
  const heroText = '$ whoami'
  const [typedHero, setTypedHero] = useState('')

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

  useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      setTypedHero(heroText.slice(0, index + 1))
      index += 1

      if (index >= heroText.length) {
        clearInterval(interval)
      }
    }, 90)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-fg-primary)]">
      <header className="divider">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <p className="text-xl tracking-widest dot-matrix-text">
            MANAN_KAPOOR
          </p>
          <nav className="flex items-center gap-2 text-sm uppercase tracking-widest md:gap-4">
            <a href="#about" className="led-btn">
              ABOUT
            </a>
            <a href="#education" className="led-btn">
              EDUCATION
            </a>
            <a href="#experience" className="led-btn">
              EXPERIENCE
            </a>
            <a href="#projects" className="led-btn">
              PROJECTS
            </a>
            <a href="#skills" className="led-btn">
              SKILLS
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <section id="about" className="grid gap-6 lg:grid-cols-12">
          <article className="section p-5 lg:col-span-7 md:p-8">
            <div className="led-pixel-row">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="led-pixel" style={{ opacity: 0.3 + Math.random() * 0.4 }}></div>
              ))}
            </div>
            <p className="mb-4 text-xs uppercase tracking-widest dot-matrix-dim">
              EXECUTIVE_SUMMARY
            </p>
            <h1 className="text-3xl leading-tight md:text-5xl dot-matrix-text">
              AI/ML systems & research engineer.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-fg-secondary)]">
              I am a Computer Engineering student at Thapar Institute of Engineering and
              Technology and currently a Research Intern focused on instruction tuning,
              controlled text generation, and Punjabi language model development.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="led-btn-accent text-sm uppercase tracking-widest"
              >
                VIEW_WORK
              </a>
              <a
                href="#contact"
                className="led-btn text-sm uppercase tracking-widest"
              >
                CONTACT
              </a>
            </div>
          </article>

          <aside className="section p-5 lg:col-span-5 md:p-8">
            <div className="led-pixel-row">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="led-pixel" style={{ backgroundColor: i < 5 ? 'var(--color-accent)' : '#333', opacity: i < 5 ? 1 : 0.3 }}></div>
              ))}
            </div>
            <p className="mb-4 text-xs uppercase tracking-widest dot-matrix-dim">
              TERMINAL_IDENTITY
            </p>
            <div className="section bg-[var(--color-muted)] p-4">
              <p className="min-h-[1.5rem] text-base cursor">
                {typedHero}
              </p>
            </div>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-[var(--color-fg-secondary)]">
              <li><span style={{ color: 'var(--color-accent)' }}>:</span> Role: Research Intern (2025 - Present)</li>
              <li><span style={{ color: 'var(--color-accent)' }}>:</span> Institute: TIET, Patiala</li>
              <li><span style={{ color: 'var(--color-accent)' }}>:</span> Focus: Punjabi NLP, dataset engineering, LLM fine-tuning</li>
              <li><span style={{ color: 'var(--color-accent)' }}>:</span> Current CGPA: 8.07 / 10.00</li>
            </ul>
          </aside>
        </section>

        <section id="education" className="mt-8 section">
          <div className="divider px-5 py-4 md:px-8">
            <div className="led-pixel-row">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="led-pixel" style={{ opacity: 0.2 + Math.random() * 0.3 }}></div>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl dot-matrix-text">
              EDUCATION_BULLETIN
            </h2>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-12 md:p-8">
            <div className="section p-4 md:col-span-8">
              <p className="text-xs uppercase tracking-widest dot-matrix-dim">
                INSTITUTION
              </p>
              <h3 className="mt-2 text-lg dot-matrix-text">
                Thapar Institute of Engineering and Technology, Punjab
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-fg-secondary)]">
                Bachelor of Engineering in Computer Engineering (COE)
              </p>
            </div>
            <div className="section p-4 md:col-span-4">
              <p className="text-xs uppercase tracking-widest dot-matrix-dim">
                ACADEMIC_SNAPSHOT
              </p>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-fg-secondary)]">
                Duration: 2024 - 2028
              </p>
              <p className="text-base leading-relaxed text-[var(--color-fg-secondary)]">
                CGPA: 8.07 / 10.00
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-8 section">
          <div className="divider px-5 py-4 md:px-8">
            <div className="led-pixel-row">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="led-pixel" style={{ opacity: 0.2 + Math.random() * 0.3 }}></div>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl dot-matrix-text">
              EXPERIENCE_LEDGER
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-base">
              <thead>
                <tr className="divider bg-[var(--color-muted)]">
                  <th className="px-4 py-3 md:px-6 dot-matrix-dim">PERIOD</th>
                  <th className="px-4 py-3 md:px-6 dot-matrix-dim">ORGANIZATION</th>
                  <th className="px-4 py-3 md:px-6 dot-matrix-dim">ROLE</th>
                  <th className="px-4 py-3 md:px-6 dot-matrix-dim">IMPACT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="divider">
                  <td className="px-4 py-3 md:px-6 text-[var(--color-fg-secondary)]">2025 - Present</td>
                  <td className="px-4 py-3 md:px-6">TIET, Patiala</td>
                  <td className="px-4 py-3 md:px-6">Research Intern</td>
                  <td className="px-4 py-3 md:px-6 text-[var(--color-fg-secondary)]">
                    Built PRISM-Punjabi, generated 91,000+ supervised samples, and
                    fine-tuned LLaMA 3.1 8B with strong BERTScore alignment.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 md:px-6 text-[var(--color-fg-secondary)]">2024 - 2028</td>
                  <td className="px-4 py-3 md:px-6">TIET, Punjab</td>
                  <td className="px-4 py-3 md:px-6">B.E. Student (COE)</td>
                  <td className="px-4 py-3 md:px-6 text-[var(--color-fg-secondary)]">
                    Strengthening computer science fundamentals and applied ML systems skills.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="projects" className="mt-8 section">
          <div className="divider px-5 py-4 md:px-8">
            <div className="led-pixel-row">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="led-pixel" style={{ opacity: 0.2 + Math.random() * 0.3 }}></div>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl dot-matrix-text">
              PROJECTS_DESK
            </h2>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-3 md:p-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="section p-4 hover:bg-[var(--color-muted)]"
              >
                <div className="led-pixel-row">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="led-pixel" style={{ opacity: 0.2 + Math.random() * 0.3 }}></div>
                  ))}
                </div>
                <p className="text-xs uppercase tracking-widest dot-matrix-dim">{project.tech}</p>
                <h3 className="mt-2 text-lg dot-matrix-text">{project.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--color-fg-secondary)]">{project.summary}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-xs uppercase tracking-widest dot-matrix-accent border-none"
                >
                  VIEW_LINK
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-8 section">
          <div className="divider px-5 py-4 md:px-8">
            <div className="led-pixel-row">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="led-pixel" style={{ backgroundColor: 'var(--color-accent)', opacity: 0.2 + Math.random() * 0.4 }}></div>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl dot-matrix-accent">
              SKILLS_CHRONICLE
            </h2>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-2 md:p-8">
            {skillGroups.map((group) => (
              <div key={group.title} className="section p-4">
                <div className="led-pixel-row">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="led-pixel" style={{ backgroundColor: 'var(--color-accent)', opacity: 0.3 + Math.random() * 0.3 }}></div>
                  ))}
                </div>
                <p className="text-xs uppercase tracking-widest dot-matrix-accent">{group.title}</p>
                <p className="mt-2 text-base leading-relaxed text-[var(--color-fg-secondary)]">{group.items}</p>
              </div>
            ))}
            <div className="section p-4" id="contact">
              <div className="led-pixel-row">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="led-pixel" style={{ backgroundColor: 'var(--color-accent)', opacity: 0.3 + Math.random() * 0.3 }}></div>
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest dot-matrix-accent">CONTACT</p>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-fg-secondary)]">Email: 23.kapoormanan@gmail.com</p>
              <p className="text-base leading-relaxed text-[var(--color-fg-secondary)]">Phone: +91 99999 35670</p>
              <p className="text-base leading-relaxed text-[var(--color-fg-secondary)]">LinkedIn: linkedin.com/in/manan-kapoor</p>
              <p className="text-base leading-relaxed text-[var(--color-fg-secondary)]">GitHub: github.com/manankapoor23</p>
              <p className="text-base leading-relaxed text-[var(--color-fg-secondary)]">LeetCode: leetcode.com/u/manankapoor23</p>
              <p className="text-base leading-relaxed text-[var(--color-fg-secondary)]">Portfolio: mkap.netlify.app</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App