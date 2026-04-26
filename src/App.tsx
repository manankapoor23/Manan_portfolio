import { useEffect, useState } from 'react'

function App() {
  const heroText = '$ whoami'
  const [typedHero, setTypedHero] = useState('')

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
              Building clean systems and bold digital products.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
              I design and engineer product experiences with an editorial mindset:
              sharp hierarchy, clear intent, and fast delivery from idea to deployment.
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
              <li>Role: Product Engineer</li>
              <li>Focus: Frontend architecture, DX, scalable UI systems</li>
              <li>Stack: React, TypeScript, Tailwind, Node.js</li>
            </ul>
          </aside>
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
                  <th className="px-4 py-3 md:px-6">Company</th>
                  <th className="px-4 py-3 md:px-6">Role</th>
                  <th className="px-4 py-3 md:px-6">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-fg-primary)]">
                  <td className="px-4 py-3 md:px-6">2025 - Present</td>
                  <td className="px-4 py-3 md:px-6">Independent</td>
                  <td className="px-4 py-3 md:px-6">Frontend Engineer</td>
                  <td className="px-4 py-3 md:px-6">Shipped portfolio and client web platforms</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 md:px-6">2023 - 2025</td>
                  <td className="px-4 py-3 md:px-6">Startup Projects</td>
                  <td className="px-4 py-3 md:px-6">Full Stack Developer</td>
                  <td className="px-4 py-3 md:px-6">Built internal tools and public interfaces</td>
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
            <article className="hard-shadow-hover border-2 border-[var(--color-fg-primary)] p-4">
              <p className="text-xs uppercase tracking-[0.2em]">React + TS</p>
              <h3 className="mt-2 text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                Editorial Portfolio
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                A bold newspaper-inspired portfolio with sharp geometry and strong visual hierarchy.
              </p>
            </article>
            <article className="hard-shadow-hover border-2 border-[var(--color-fg-primary)] p-4">
              <p className="text-xs uppercase tracking-[0.2em]">Node + API</p>
              <h3 className="mt-2 text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                Operations Dashboard
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                Internal dashboard for tracking deployment health, user activity, and team metrics.
              </p>
            </article>
            <article className="hard-shadow-hover border-2 border-[var(--color-fg-primary)] p-4">
              <p className="text-xs uppercase tracking-[0.2em]">Design System</p>
              <h3 className="mt-2 text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                Component Library
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                Reusable component framework with strict tokens, utilities, and accessibility defaults.
              </p>
            </article>
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
          <div className="grid gap-4 p-5 md:grid-cols-3 md:p-8">
            <div className="border-2 border-[var(--color-bg-primary)] p-4">
              <p className="text-xs uppercase tracking-[0.2em]">Frontend</p>
              <p className="mt-2 text-sm leading-relaxed">React, TypeScript, Tailwind CSS, Vite</p>
            </div>
            <div className="border-2 border-[var(--color-bg-primary)] p-4">
              <p className="text-xs uppercase tracking-[0.2em]">Backend</p>
              <p className="mt-2 text-sm leading-relaxed">Node.js, Express, REST APIs, PostgreSQL</p>
            </div>
            <div className="border-2 border-[var(--color-bg-primary)] p-4" id="contact">
              <p className="text-xs uppercase tracking-[0.2em]">Contact</p>
              <p className="mt-2 text-sm leading-relaxed">Email: manan@example.com</p>
              <p className="text-sm leading-relaxed">GitHub: github.com/manankapoor23</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
