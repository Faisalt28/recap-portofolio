import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Moon, Sun, ArrowRight } from 'lucide-react'

interface LandingPageProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
  onEnter: () => void
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

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function LandingPage({ theme, toggleTheme, onEnter }: LandingPageProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: 'var(--bg)' }}
    >
      {/* Dark mode ambient glow */}
      {isDark && (
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-40"
            style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)' }} />
          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-30"
            style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)' }} />
        </div>
      )}

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="fixed top-5 right-5 z-50 w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          color: 'var(--text-secondary)',
          borderRadius: '8px',
        }}
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      {/* Main card — horizontal layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-3xl"
      >
        <TiltCard>
          <div
            className="flex flex-col md:flex-row items-center md:items-stretch gap-0 overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              boxShadow: isDark
                ? '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)'
                : '0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
            }}
          >
            {/* Photo panel */}
            <div className="relative w-full md:w-64 shrink-0 overflow-hidden" style={{ borderRadius: '20px 0 0 20px' }}>
              <div className="w-full h-64 md:h-full min-h-[280px] overflow-hidden">
                <motion.img
                  src="/profile.jpg"
                  alt="Faisal Triaputra"
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  draggable={false}
                />
              </div>
              {/* Subtle overlay gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, transparent 60%)'
                    : 'linear-gradient(135deg, rgba(16,185,129,0.05) 0%, transparent 60%)',
                }}
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px shrink-0" style={{ background: 'var(--border)' }} />

            {/* Info panel */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col justify-center flex-1 p-8 md:p-10 text-left"
            >

              {/* Name */}
              <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                Faisal
              </motion.h1>
              <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none mb-5"
                style={{ color: 'var(--text-primary)' }}
              >
                Triaputra
                <span style={{ color: '#10b981' }}>.</span>
              </motion.h1>

              {/* Bio */}
              <motion.p
                variants={fadeUp}
                className="text-sm leading-relaxed mb-7"
                style={{ color: 'var(--text-muted)', maxWidth: '340px' }}
              >
                Lulusan Teknik Informatika UMMI · Distinction Graduate Bangkit · IDCamp AI Engineer
              </motion.p>

              {/* Social icons */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <a
                  href="https://github.com/Faisalt28"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer group"
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    borderRadius: '8px',
                  }}
                >
                  <GithubIcon className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/faisal-triaputra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer group"
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    borderRadius: '8px',
                  }}
                >
                  <LinkedinIcon className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                </a>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={fadeUp}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onEnter}
                  className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-bold tracking-wide cursor-pointer transition-all duration-200 group"
                  style={{
                    background: isDark ? '#ffffff' : '#0d1117',
                    color: isDark ? '#0d1117' : '#ffffff',
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: isDark
                      ? '0 4px 20px rgba(255,255,255,0.1)'
                      : '0 4px 20px rgba(0,0,0,0.2)',
                  }}
                >
                  <span>Lihat Proyek Saya</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </TiltCard>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-7 text-xs"
        style={{ color: 'var(--text-muted)' }}
      >
        © {new Date().getFullYear()} Faisal Triaputra
      </motion.p>
    </div>
  )
}
