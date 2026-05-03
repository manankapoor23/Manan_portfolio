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
      title: 'LANGUAGES_',
      items: 'Python, C++, JavaScript, R',
    },
    {
      title: 'ML_AND_AI_',
      items:
        'Transformers, LLMs, RAG, Prompt Engineering, Fine-Tuning, Deep Learning',
    },
    {
      title: 'LIBRARIES_',
      items:
        'PyTorch, Hugging Face Transformers, LangChain, Pandas, NumPy, Scikit-learn',
    },
    {
      title: 'SYSTEMS_',
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
    <div className="dot-matrix-scanlines min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-fg-primary)]">
      <header className="border-b border-[var(--color-muted)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <p className="text-lg tracking-wide terminal-glow">
            MANAN_KAPOOR
          </p>
          <nav className="flex items-center gap-4 text-xs uppercase tracking-wider md:gap-6">
            <a href="#about" className="border-none hover:text-[var(--color-accent)]">
              [ABOUT]
            </a>
            <a href="#education" className="border-none hover:text-[var(--color-accent)]">
              [EDUCATION]
            </a>
            <a href="#experience" className="border-none hover:text-[var(--color-accent)]">
              [EXPERIENCE]
            </a>
            <a href="#projects" className="border-none hover:text-[var(--color-accent)]">
              [PROJECTS]
            </a>
            <a href="#skills" className="border-none hover:text-[var(--color-accent)]">
              [SKILLS]
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <section id="about" className="grid gap-4 lg:grid-cols-12">
          <article className="box-border p-5 lg:col-span-7 md:p-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-[var(--color-fg-secondary)]">// EXECUTIVE_SUMMARY</p>
            <h1 className="text-3xl leading-tight md:text-5xl terminal-glow">
              AI/ML systems & research engineer.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--color-fg-secondary)]">
              I am a Computer Engineering student at Thapar Institute of Engineering and
              Technology and currently a Research Intern focused on instruction tuning,
              controlled text generation, and Punjabi language model development.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="box-border-accent bg-[var(--color-accent)] px-4 py-2 text-sm uppercase tracking-wider text-[var(--color-bg-primary)] border hover:bg-transparent hover:text-[var(--color-accent)]"
              >
                VIEW_WORK
              </a>
              <a
                href="#contact"
                className="box-border px-4 py-2 text-sm uppercase tracking-wider hover-invert border border-[var(--color-muted)]"
              >
                CONTACT
              </a>
            </div>
          </article>

          <aside className="box-border p-5 lg:col-span-5 md:p-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-[var(--color-fg-secondary)]">// TERMINAL_IDENTITY</p>
            <div className="box-border bg-[var(--color-muted)] p-4">
              <p className="min-h-[1.5rem] text-sm">
                {typedHero}<span className="terminal-cursor"></span>
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--color-fg-secondary)]">
              <li><span className="text-[var(--color-accent)]">{'>'}</span> Role: Research Intern (2025 - Present)</li>
              <li><span className="text-[var(--color-accent)]">{'>'}</span> Institute: TIET, Patiala</li>
              <li><span className="text-[var(--color-accent)]">{'>'}</span> Focus: Punjabi NLP, dataset engineering, LLM fine-tuning</li>
              <li><span className="text-[var(--color-accent)]">{'>'}</span> Current CGPA: 8.07 / 10.00</li>
            </ul>
          </aside>
        </section>

        <section id="education" className="mt-8 box-border">
          <div className="border-b border-[var(--color-muted)] px-5 py-3 md:px-8">
            <h2 className="text-2xl md:text-3xl terminal-glow">
              EDUCATION_BULLETIN
            </h2>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-12 md:p-8">
            <div className="box-border p-4 md:col-span-8">
              <p className="text-xs uppercase tracking-widest text-[var(--color-fg-secondary)]">// INSTITUTION</p>
              <h3 className="mt-2 text-lg">
                Thapar Institute of Engineering and Technology, Punjab
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-secondary)]">
                Bachelor of Engineering in Computer Engineering (COE)
              </p>
            </div>
            <div className="box-border p-4 md:col-span-4">
              <p className="text-xs uppercase tracking-widest text-[var(--color-fg-secondary)]">// ACADEMIC_SNAPSHOT</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-secondary)]">Duration: 2024 - 2028</p>
              <p className="text-sm leading-relaxed text-[var(--color-fg-secondary)]">CGPA: 8.07 / 10.00</p>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-8 box-border">
          <div className="border-b border-[var(--color-muted)] px-5 py-3 md:px-8">
            <h2 className="text-2xl md:text-3xl terminal-glow">
              EXPERIENCE_LEDGER
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-[var(--color-muted)] bg-[var(--color-muted)]">
                  <th className="px-4 py-3 md:px-6 text-[var(--color-fg-secondary)]">PERIOD</th>
                  <th className="px-4 py-3 md:px-6 text-[var(--color-fg-secondary)]">ORGANIZATION</th>
                  <th className="px-4 py-3 md:px-6 text-[var(--color-fg-secondary)]">ROLE</th>
                  <th className="px-4 py-3 md:px-6 text-[var(--color-fg-secondary)]">IMPACT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-muted)]">
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

        <section id="projects" className="mt-8 box-border">
          <div className="border-b border-[var(--color-muted)] px-5 py-3 md:px-8">
            <h2 className="text-2xl md:text-3xl terminal-glow">
              PROJECTS_DESK
            </h2>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-3 md:p-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="box-border p-4 hover-invert"
              >
                <p className="text-xs uppercase tracking-widest text-[var(--color-fg-secondary)]">{project.tech}</p>
                <h3 className="mt-2 text-lg terminal-glow">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-secondary)]">{project.summary}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-xs uppercase tracking-widest"
                >
                  [VIEW_LINK]
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="mt-8 box-border border-[var(--color-accent)]"
        >
          <div className="border-b border-[var(--color-accent)] px-5 py-3 md:px-8">
            <h2 className="text-2xl md:text-3xl text-[var(--color-accent)] terminal-glow">
              SKILLS_CHRONICLE
            </h2>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-2 md:p-8">
            {skillGroups.map((group) => (
              <div key={group.title} className="box-border p-4">
                <p className="text-xs uppercase tracking-widest text-[var(--color-accent)]">// {group.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-secondary)]">{group.items}</p>
              </div>
            ))}
            <div className="box-border p-4" id="contact">
              <p className="text-xs uppercase tracking-widest text-[var(--color-accent)]">// CONTACT</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-secondary)]">Email: 23.kapoormanan@gmail.com</p>
              <p className="text-sm leading-relaxed text-[var(--color-fg-secondary)]">Phone: +91 99999 35670</p>
              <p className="text-sm leading-relaxed text-[var(--color-fg-secondary)]">LinkedIn: linkedin.com/in/manan-kapoor</p>
              <p className="text-sm leading-relaxed text-[var(--color-fg-secondary)]">GitHub: github.com/manankapoor23</p>
              <p className="text-sm leading-relaxed text-[var(--color-fg-secondary)]">LeetCode: leetcode.com/u/manankapoor23</p>
              <p className="text-sm leading-relaxed text-[var(--color-fg-secondary)]">Portfolio: mkap.netlify.app</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App