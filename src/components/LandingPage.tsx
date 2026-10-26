import React from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { TextRewind } from '@/components/ui/text-rewind'

interface LandingPageProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
  onEnter?: () => void
}

export default function LandingPage({ theme, toggleTheme }: LandingPageProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-x-hidden p-5 sm:p-8 lg:p-14"
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

      {/* Theme Toggle Button — Fixed Top Right */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="fixed top-5 right-5 sm:top-7 sm:right-7 z-30 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          color: 'var(--text-secondary)',
        }}
      >
        {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
      </button>

      {/* Main Full-Screen Hero Content */}
      <main className="w-full max-w-6xl mx-auto my-auto flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 xl:gap-14 items-center">
          
          {/* Kolom Kiri: PORTOFOLIO (TextRewind) & Nama Faisal Triaputra, S.Kom. */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
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

            {/* Di bawah tulisan ini: Nama Faisal Triaputra, S.Kom. (Warna S.Kom sama persis dengan nama) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-2 sm:mt-4"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-neutral-900 dark:text-white">
                Faisal Triaputra, S.Kom.
              </h1>
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
                <div className="w-[220px] sm:w-[270px] md:w-[300px] lg:w-[320px] xl:w-[350px] aspect-[3/4] overflow-hidden rounded-[20px] sm:rounded-[24px] bg-neutral-950 relative">
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
    </div>
  )
}
