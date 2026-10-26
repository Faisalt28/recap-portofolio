import React from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { TextRewind } from '@/components/ui/text-rewind'

interface LandingPageProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
  onEnter?: () => void
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

export default function LandingPage({ theme, toggleTheme }: LandingPageProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Ambient background glow — dark only */}
      {isDark && (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div
            className="absolute top-[-15%] left-[20%] w-[700px] h-[550px] rounded-full opacity-35 blur-[150px]"
            style={{ background: 'radial-gradient(circle, rgba(7, 188, 204, 0.25) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-[-10%] right-[15%] w-[600px] h-[500px] rounded-full opacity-30 blur-[160px]"
            style={{ background: 'radial-gradient(circle, rgba(230, 1, 192, 0.2) 0%, transparent 70%)' }}
          />
        </div>
      )}

      {/* Top Bar: Brand & Theme Toggle */}
      <header className="w-full px-5 sm:px-8 lg:px-14 py-5 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
            Faisal Triaputra
          </span>
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            color: 'var(--text-secondary)',
          }}
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
        </button>
      </header>

      {/* Main Full-Screen Hero Content */}
      <main className="flex-1 flex items-center justify-center w-full px-5 sm:px-8 lg:px-14 py-4 sm:py-8 my-auto">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Kolom Kiri: PORTOFOLIO (TextRewind), Nama, Deskripsi & Sosial Media */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
            {/* Tagline / Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 sm:mb-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span>Software & AI Engineer</span>
            </div>

            {/* Tulisan PORTOFOLIO dengan komponen TextRewind */}
            <div className="w-full pr-4 sm:pr-8 lg:pr-10 pb-4 sm:pb-6 overflow-visible">
              <TextRewind
                text="PORTOFOLIO"
                className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black italic tracking-wider sm:tracking-widest text-center lg:text-left select-none drop-shadow-sm"
                shadowColors={{
                  first: "#07bccc",
                  second: "#e601c0",
                  third: "#e9019a",
                  fourth: "#f40468",
                  glow: "#f40468",
                }}
              />
            </div>

            {/* Di bawah tulisan ini: Nama Faisal Triaputra, S.Kom. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-3 sm:mt-5"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-neutral-900 dark:text-white">
                Faisal Triaputra, <span className="text-emerald-500 font-semibold">S.Kom.</span>
              </h1>
              
              <p className="text-xs sm:text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mt-2 sm:mt-3 max-w-xl font-medium">
                Informatics Engineering Graduate | Android, Website &amp; AI Development Enthusiast
              </p>

              {/* Social icons */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-5 sm:mt-6">
                <a
                  href="https://github.com/Faisalt28"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer shadow-sm group"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-emerald-500 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/faisal-triaputra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer shadow-sm group"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-blue-500 transition-colors" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan: Foto Profil yang Telah Disiapkan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Decorative background aura glow behind image */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/25 via-pink-500/25 to-emerald-500/25 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Framed Photo Card */}
              <div
                className="p-2 sm:p-2.5 rounded-[26px] sm:rounded-[30px] transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: isDark
                    ? '0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)'
                    : '0 25px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)',
                }}
              >
                <div className="w-[220px] sm:w-[270px] md:w-[310px] lg:w-[320px] xl:w-[360px] aspect-[3/4] overflow-hidden rounded-[20px] sm:rounded-[24px] bg-neutral-950 relative">
                  <img
                    src="/profile.jpg"
                    alt="Faisal Triaputra, S.Kom."
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-xs" style={{ color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} Faisal Triaputra, S.Kom.
      </footer>
    </div>
  )
}
