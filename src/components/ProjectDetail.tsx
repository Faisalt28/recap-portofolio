import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Smartphone,
  CheckCircle2,
  Cpu,
  Layers,
  Moon,
  Sun,
  ShieldCheck,
  Play,
  Monitor,
  Database,
  GitMerge,
  Sparkles,
} from 'lucide-react'
import type { ProjectItem } from '../data/projects'

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

interface ProjectDetailProps {
  project: ProjectItem
  theme: 'dark' | 'light'
  toggleTheme: () => void
  onBack: () => void
}

export default function ProjectDetail({ project, theme, toggleTheme, onBack }: ProjectDetailProps) {
  const isDark = theme === 'dark'
  const isWeb = project.category === 'web'
  const accentColor = isWeb ? '#10b981' : '#a78bfa'
  const accentBg = isWeb ? 'rgba(16,185,129,0.1)' : 'rgba(139,92,246,0.1)'
  const accentBorder = isWeb ? 'rgba(16,185,129,0.25)' : 'rgba(139,92,246,0.25)'

  const scrollToDemo = () => {
    const demoEl = document.getElementById('demo-showcase-section')
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {isDark && (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/3 w-[600px] h-[400px] rounded-full bg-emerald-500/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/6 blur-[150px]" />
        </div>
      )}

      {/* Sticky Navbar */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: isDark ? 'rgba(9,9,14,0.85)' : 'rgba(240,242,245,0.9)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer group"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="group-hover:text-emerald-500 transition-colors">Semua Proyek</span>
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
            style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-14"
        >

          {/* ========================================================================= */}
          {/* 1. HEADER PROYEK */}
          {/* ========================================================================= */}
          <section className="pb-8 border-b" style={{ borderColor: 'var(--border)' }}>
            {/* Title */}
            <h1
              className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h1>

            {/* Subtitle / Description */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-3xl mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-3.5">
              {isWeb ? (
                <>
                  {/* [Live Website] (untuk Web) */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:scale-105 cursor-pointer shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      boxShadow: '0 6px 20px rgba(16,185,129,0.35)',
                    }}
                  >
                    <Globe className="w-4 h-4" />
                    <span>Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* [Repository GitHub] */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all hover:scale-105 cursor-pointer"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Repository GitHub</span>
                    </a>
                  )}
                </>
              ) : (
                <>
                  {/* [Video Demo] (untuk Android) */}
                  <button
                    onClick={scrollToDemo}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:scale-105 cursor-pointer shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                      boxShadow: '0 6px 20px rgba(139,92,246,0.35)',
                    }}
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Video Demo</span>
                  </button>

                  {/* [Repository GitHub] */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all hover:scale-105 cursor-pointer"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Repository GitHub</span>
                    </a>
                  )}

                  {project.link && project.link !== project.githubLink && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all hover:scale-105 cursor-pointer"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span>{project.linkText || 'Unduh APK / Demo'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </>
              )}
            </div>
          </section>


          {/* ========================================================================= */}
          {/* 2. RINGKASAN & TUJUAN (OVERVIEW) */}
          {/* ========================================================================= */}
          <section>

            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Ringkasan Proyek
            </h2>

            {/* Apa tujuan aplikasi ini dibuat? */}
            <div
              className="p-6 sm:p-7 rounded-2xl leading-relaxed text-sm sm:text-base"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <p style={{ color: 'var(--text-secondary)' }}>
                {project.overview}
              </p>
            </div>
          </section>


          {/* ========================================================================= */}
          {/* 3. TECH STACK & ARSITEKTUR (BAGIAN PENTING UNTUK USER IT) */}
          {/* ========================================================================= */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Tech Stack & Arsitektur
              </h2>
            </div>

            {/* 3 Main IT Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              {/* Frontend / Mobile */}
              <div
                className="p-6 rounded-2xl flex flex-col justify-between"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow)',
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: accentBg, color: accentColor, border: `1px solid ${accentBorder}` }}
                  >
                    {isWeb ? <Monitor className="w-5 h-5" /> : <Smartphone className="w-5 h-5" />}
                  </div>
                  <h3 className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                    Frontend / Mobile
                  </h3>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    {project.techArchitecture?.frontendOrMobile || project.techStack.slice(0, 4).join(', ')}
                  </p>
                </div>
              </div>

              {/* Backend / Database */}
              <div
                className="p-6 rounded-2xl flex flex-col justify-between"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow)',
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: accentBg, color: accentColor, border: `1px solid ${accentBorder}` }}
                  >
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                    Backend / Database
                  </h3>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    {project.techArchitecture?.backendOrDatabase || 'Serverless SQLite / REST API'}
                  </p>
                </div>
              </div>

              {/* Arsitektur / Pattern */}
              <div
                className="p-6 rounded-2xl flex flex-col justify-between"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow)',
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: accentBg, color: accentColor, border: `1px solid ${accentBorder}` }}
                  >
                    <GitMerge className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                    Arsitektur / Pattern
                  </h3>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    {project.techArchitecture?.architectureOrPattern || 'Clean Architecture, RESTful API, Component Driven'}
                  </p>
                </div>
              </div>
            </div>

            {/* Complete Tech Badges */}
            <div className="p-5 rounded-2xl mb-6" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
              <h4 className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                Seluruh Ekosistem & Library
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-transform hover:scale-105"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Detail Architecture Table (if exists) */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs sm:text-sm"
                    style={{
                      background: idx % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)',
                      borderBottom: idx < project.architecture!.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span style={{ color: 'var(--text-muted)' }}>{item.label}</span>
                    <span className="font-mono font-semibold sm:text-right" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>


          {/* ========================================================================= */}
          {/* 4. TAMPILAN & DEMONSTRASI (SHOWCASE FEATURE) */}
          {/* ========================================================================= */}
          <section id="demo-showcase-section">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Tampilan & Demonstrasi
            </h2>

            {/* A. EMBEDDED DEMO PLAYER */}
            {isWeb ? (
              /* Web Browser Window Frame */
              <div
                className="mb-8 rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)', background: '#000', boxShadow: 'var(--shadow-lg)' }}
              >
                {/* Browser bar */}
                <div
                  className="px-4 py-2.5 flex flex-wrap items-center justify-between gap-3"
                  style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border)' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div
                    className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono max-w-sm truncate"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  >
                    <span className="text-emerald-500">🔒</span>
                    <span className="truncate">{project.link}</span>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs flex items-center gap-1 hover:text-emerald-500 transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Buka Tab Baru <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* HTML5 Video or Image */}
                {project.videoSrc ? (
                  <video
                    src={project.videoSrc}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    poster={project.imgSrc}
                    className="w-full max-h-[640px] object-contain bg-black"
                  />
                ) : (
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="w-full object-cover object-top max-h-[540px]"
                  />
                )}
              </div>
            ) : (
              /* Android Phone / Emulator Frame Showcase: 100% Portrait Layout */
              <div
                className="mb-8 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="text-center mb-6">
                  <span
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-2"
                    style={{ background: accentBg, color: accentColor }}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Video Demo Aplikasi Android
                  </span>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Rekaman layar HP / Emulator asli — putar langsung di bingkai smartphone di bawah
                  </p>
                </div>

                {/* Smartphone Device Frame (Ultra-thin Bezel Portrait 9:20) */}
                <div className="relative w-full max-w-[310px] rounded-[36px] p-2 shadow-2xl bg-neutral-950 border-2 border-neutral-700/70 ring-1 ring-white/10">
                  {/* Phone Screen: 9:20 aspect ratio matching 576x1280 */}
                  <div className="relative rounded-[28px] overflow-hidden bg-black aspect-[9/20] flex items-center justify-center shadow-inner">
                    {project.videoSrc ? (
                      <video
                        src={project.videoSrc}
                        controls
                        playsInline
                        preload="metadata"
                        poster={project.imgSrc}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={project.imgSrc}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* B. INTERACTIVE LINK CALLOUT (UNTUK WEB) */}
            {isWeb && (
              <div
                className="p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${accentBorder}`,
                  boxShadow: 'var(--shadow)',
                }}
              >
                <div>
                  <h3 className="text-base font-bold mb-1 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    Coba Langsung Fitur Interaktif
                  </h3>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Uji coba langsung navigasi, formulir pencatatan transaksi, budgeting, dan visualisasi grafik secara live di browser.
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white transition-all hover:scale-105 cursor-pointer shadow"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                >
                  <span>Buka Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* C. MOCKUP SCREEN GRID (UNTUK ANDROID) */}
            {!isWeb && project.screenshots && project.screenshots.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <Layers className="w-4 h-4" style={{ color: accentColor }} />
                  <span>Mockup Screen Grid (Bingkai Layar HP)</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.screenshots.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-4 rounded-2xl"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        boxShadow: 'var(--shadow)',
                      }}
                    >
                      {/* Ultra-thin Bezel Smartphone Mockup Frame */}
                      <div className="relative w-full max-w-[270px] rounded-[30px] p-1.5 sm:p-2 bg-neutral-950 border border-neutral-700/70 shadow-2xl ring-1 ring-white/10 mb-4 transition-transform duration-300 hover:scale-[1.02]">
                        <div className="aspect-[460/1024] rounded-[22px] overflow-hidden bg-black shadow-inner">
                          <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="w-full h-full object-cover block"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="text-center w-full">
                        <h4 className="text-xs font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                          {item.title}
                        </h4>
                        <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>


          {/* ========================================================================= */}
          {/* 5. FITUR KUNCI & TANTANGAN TEKNIS (TECHNICAL HIGHLIGHTS) */}
          {/* ========================================================================= */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Fitur Kunci & Tantangan Teknis
            </h2>

            {/* 2-3 Technical Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="space-y-4 mb-10">
                {project.challenges.map((ch, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl transition-all"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow)',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Index badge */}
                      <span
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs font-bold"
                        style={{ background: accentBg, color: accentColor, border: `1px solid ${accentBorder}` }}
                      >
                        0{idx + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                          {ch.title}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Problem block */}
                          <div
                            className="p-4 rounded-xl text-xs leading-relaxed"
                            style={{ background: 'var(--bg-subtle)', border: '1px solid rgba(239,68,68,0.2)' }}
                          >
                            <span className="font-semibold text-rose-500 block mb-1">
                              Tantangan yang Dihadapi:
                            </span>
                            <span style={{ color: 'var(--text-secondary)' }}>{ch.problem}</span>
                          </div>

                          {/* Solution block */}
                          <div
                            className="p-4 rounded-xl text-xs leading-relaxed"
                            style={{ background: 'var(--bg-subtle)', border: `1px solid ${accentBorder}` }}
                          >
                            <span className="font-semibold block mb-1" style={{ color: accentColor }}>
                              Solusi Teknis & Dampak:
                            </span>
                            <span style={{ color: 'var(--text-secondary)' }}>{ch.solution}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Core Features Grid */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-base font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Fitur Kunci Aplikasi</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl"
                      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                    >
                      <h4 className="text-sm font-bold mb-1.5 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accentColor }} />
                        {feat.title}
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>


          {/* ========================================================================= */}
          {/* BOTTOM NAVIGATION */}
          {/* ========================================================================= */}
          <div className="pt-10 border-t flex justify-center" style={{ borderColor: 'var(--border)' }}>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 cursor-pointer"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Katalog Proyek</span>
            </button>
          </div>

        </motion.div>
      </main>
    </div>
  )
}
