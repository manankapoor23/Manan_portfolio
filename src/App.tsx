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
      title: 'Languages',
      items: 'Python, C++, JavaScript, R',
    },
    {
      title: 'ML and AI',
      items:
        'Transformers, LLMs, RAG, Prompt Engineering, Fine-Tuning, Deep Learning',
    },
    {
      title: 'Libraries and Frameworks',
      items:
        'PyTorch, Hugging Face Transformers, LangChain, Pandas, NumPy, Scikit-learn',
    },
    {
      title: 'Systems and Tools',
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
    <div className="newsprint-texture min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-fg-primary)]">
      <header className="border-b-2 border-[var(--color-fg-primary)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <p
            className="text-xl font-bold tracking-wide"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            MANAN KAPOOR
          </p>
          <nav className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] md:gap-6">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#education" className="hover:underline">
              Education
            </a>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <section id="about" className="grid gap-4 lg:grid-cols-12">
          <article className="border-2 border-[var(--color-fg-primary)] p-5 lg:col-span-7 md:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em]">Executive Summary</p>
            <h1
              className="text-4xl leading-[1.05] md:text-6xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Punjabi NLP and LLM systems research engineer.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
              I am a Computer Engineering student at Thapar Institute of Engineering and
              Technology and currently a Research Intern focused on instruction tuning,
              controlled text generation, and Punjabi language model development.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="hard-shadow-hover border-2 border-[var(--color-fg-primary)] bg-[var(--color-fg-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-bg-primary)] uppercase tracking-wider"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="hard-shadow-hover border-2 border-[var(--color-fg-primary)] bg-transparent px-4 py-2 text-sm font-semibold uppercase tracking-wider"
              >
                Contact
              </a>
            </div>
          </article>

          <aside className="border-2 border-[var(--color-fg-primary)] p-5 lg:col-span-5 md:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em]">Terminal Identity</p>
            <div className="border-2 border-[var(--color-fg-primary)] bg-[var(--color-fg-primary)] p-4 text-[var(--color-bg-primary)]">
              <p
                className="min-h-[1.5rem] text-sm md:text-base"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {typedHero}
                <span className="animate-pulse">_</span>
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed md:text-base">
              <li>Role: Research Intern (2025 - Present)</li>
              <li>Institute: TIET, Patiala</li>
              <li>Focus: Punjabi NLP, dataset engineering, LLM fine-tuning</li>
              <li>Current CGPA: 8.07 / 10.00</li>
            </ul>
          </aside>
        </section>

        <section id="education" className="mt-4 border-2 border-[var(--color-fg-primary)]">
          <div className="border-b-2 border-[var(--color-fg-primary)] px-5 py-3 md:px-8">
            <h2 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Education Bulletin
            </h2>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-12 md:p-8">
            <div className="border-2 border-[var(--color-fg-primary)] p-4 md:col-span-8">
              <p className="text-xs uppercase tracking-[0.2em]">Institution</p>
              <h3 className="mt-2 text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                Thapar Institute of Engineering and Technology, Punjab
              </h3>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                Bachelor of Engineering in Computer Engineering (COE)
              </p>
            </div>
            <div className="border-2 border-[var(--color-fg-primary)] p-4 md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em]">Academic Snapshot</p>
              <p className="mt-2 text-sm leading-relaxed md:text-base">Duration: 2024 - 2028</p>
              <p className="text-sm leading-relaxed md:text-base">CGPA: 8.07 / 10.00</p>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-4 border-2 border-[var(--color-fg-primary)]">
          <div className="border-b-2 border-[var(--color-fg-primary)] px-5 py-3 md:px-8">
            <h2 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Experience Ledger
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-[var(--color-fg-primary)] bg-[var(--color-muted)]">
                  <th className="px-4 py-3 md:px-6">Period</th>
                  <th className="px-4 py-3 md:px-6">Organization</th>
                  <th className="px-4 py-3 md:px-6">Role</th>
                  <th className="px-4 py-3 md:px-6">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-fg-primary)]">
                  <td className="px-4 py-3 md:px-6">2025 - Present</td>
                  <td className="px-4 py-3 md:px-6">TIET, Patiala</td>
                  <td className="px-4 py-3 md:px-6">Research Intern</td>
                  <td className="px-4 py-3 md:px-6">
                    Built PRISM-Punjabi, generated 91,000+ supervised samples, and
                    fine-tuned LLaMA 3.1 8B with strong BERTScore alignment.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 md:px-6">2024 - 2028</td>
                  <td className="px-4 py-3 md:px-6">TIET, Punjab</td>
                  <td className="px-4 py-3 md:px-6">B.E. Student (COE)</td>
                  <td className="px-4 py-3 md:px-6">
                    Strengthening computer science fundamentals and applied ML systems skills.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="projects" className="mt-4 border-2 border-[var(--color-fg-primary)]">
          <div className="border-b-2 border-[var(--color-fg-primary)] px-5 py-3 md:px-8">
            <h2 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Projects Desk
            </h2>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-3 md:p-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="hard-shadow-hover border-2 border-[var(--color-fg-primary)] p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em]">{project.tech}</p>
                <h3 className="mt-2 text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{project.summary}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-xs uppercase tracking-[0.18em] underline"
                >
                  View Link
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="mt-4 border-2 border-[var(--color-fg-primary)] bg-[var(--color-fg-primary)] text-[var(--color-bg-primary)]"
        >
          <div className="border-b-2 border-[var(--color-bg-primary)] px-5 py-3 md:px-8">
            <h2 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Skills Chronicle
            </h2>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-2 md:p-8">
            {skillGroups.map((group) => (
              <div key={group.title} className="border-2 border-[var(--color-bg-primary)] p-4">
                <p className="text-xs uppercase tracking-[0.2em]">{group.title}</p>
                <p className="mt-2 text-sm leading-relaxed">{group.items}</p>
              </div>
            ))}
            <div className="border-2 border-[var(--color-bg-primary)] p-4" id="contact">
              <p className="text-xs uppercase tracking-[0.2em]">Contact</p>
              <p className="mt-2 text-sm leading-relaxed">Email: 23.kapoormanan@gmail.com</p>
              <p className="text-sm leading-relaxed">Phone: +91 99999 35670</p>
              <p className="text-sm leading-relaxed">LinkedIn: linkedin.com/in/manan-kapoor</p>
              <p className="text-sm leading-relaxed">GitHub: github.com/manankapoor23</p>
              <p className="text-sm leading-relaxed">LeetCode: leetcode.com/u/manankapoor23</p>
              <p className="text-sm leading-relaxed">Portfolio: mkap.netlify.app</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
