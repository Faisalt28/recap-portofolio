import { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, ArrowLeft, Globe, Smartphone, Sparkles } from 'lucide-react'
import { projectsList, type ProjectItem } from '../data/projects'
import ProjectCard from './ProjectCard'

interface CatalogPageProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
  onSelectProject: (project: ProjectItem) => void
  onBack: () => void
}

export default function CatalogPage({ theme, toggleTheme, onSelectProject, onBack }: CatalogPageProps) {
  const [filter, setFilter] = useState<'all' | 'web' | 'android'>('all')
  const isDark = theme === 'dark'

  const filtered = filter === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === filter)

  const webCount = projectsList.filter(p => p.category === 'web').length
  const androidCount = projectsList.filter(p => p.category === 'android').length

  // Projects mapped for collage view
  const acheez = projectsList.find(p => p.id === 'acheez') || projectsList[0]
  const artoz = projectsList.find(p => p.id === 'artoz') || projectsList[3]
  const meditrack = projectsList.find(p => p.id === 'rs-meditrack') || projectsList[1]
  const frameify = projectsList.find(p => p.id === 'frameify') || projectsList[2]
  const findThem = projectsList.find(p => p.id === 'findthem') || projectsList[4]

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Background glow — dark only */}
      {isDark && (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-emerald-500/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/6 blur-[150px]" />
        </div>
      )}

      {/* Navbar */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: isDark ? 'rgba(9,9,14,0.85)' : 'rgba(240,242,245,0.9)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-5 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer group"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="group-hover:text-emerald-500 transition-colors">Kembali</span>
          </button>

          <div className="flex items-center gap-2 font-bold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
            <span className="text-emerald-500">FT</span>
            <span>Portofolio</span>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
            style={{
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-1 sm:mb-2" style={{ color: 'var(--text-primary)' }}>
                Daftar Proyek
              </h1>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                {projectsList.length} proyek pilihan · {webCount} website · {androidCount} android
              </p>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {([
              { key: 'all', label: 'Semua (Kolase)', icon: null },
              { key: 'web', label: `Website (${webCount})`, icon: <Globe className="w-3.5 h-3.5" /> },
              { key: 'android', label: `Android (${androidCount})`, icon: <Smartphone className="w-3.5 h-3.5" /> },
            ] as const).map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                style={filter === key ? {
                  background: '#10b981',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(16,185,129,0.3)',
                } : {
                  background: 'var(--bg-subtle)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Projects Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 pb-16">
        {filter === 'all' ? (
          /* ========================================================================= */
          /* KOLASE (BENTO MOSAIC): Membentuk Satu Persegi Panjang Besar yang Rapi      */
          /* ========================================================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* 1. ArtoZ: Kolom Kiri, Membentang 2 Baris Tinggi (Android Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="md:order-3 md:col-span-1 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2 h-full"
            >
              <ProjectCard
                project={artoz}
                onClick={() => onSelectProject(artoz)}
                variant="collage-tall"
              />
            </motion.div>

            {/* 2. AcheeZ: Tengah Atas, Membentang 2 Kolom Lebar (Featured Web Hero) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="md:order-1 md:col-span-2 lg:order-none lg:col-start-2 lg:col-span-2 lg:row-start-1 h-full"
            >
              <ProjectCard
                project={acheez}
                onClick={() => onSelectProject(acheez)}
                variant="collage-hero"
              />
            </motion.div>

            {/* 3. RS MediTrack: Tengah Bawah Kiri (Web Landscape) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
              className="md:order-2 md:col-span-1 lg:order-none lg:col-start-2 lg:row-start-2 h-full"
            >
              <ProjectCard
                project={meditrack}
                onClick={() => onSelectProject(meditrack)}
              />
            </motion.div>

            {/* 4. Frameify: Tengah Bawah Kanan (Web Landscape) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="md:order-2 md:col-span-1 lg:order-none lg:col-start-3 lg:row-start-2 h-full"
            >
              <ProjectCard
                project={frameify}
                onClick={() => onSelectProject(frameify)}
              />
            </motion.div>

            {/* 5. FindThem: Kolom Kanan, Membentang 2 Baris Tinggi (Android Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 }}
              className="md:order-3 md:col-span-1 lg:order-none lg:col-start-4 lg:row-start-1 lg:row-span-2 h-full"
            >
              <ProjectCard
                project={findThem}
                onClick={() => onSelectProject(findThem)}
                variant="collage-tall"
              />
            </motion.div>
          </div>
        ) : (
          /* ========================================================================= */
          /* GRID REGULER: Saat difilter (Website / Android) -> Balik Lagi Kayak Awal  */
          /* ========================================================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 items-start">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => onSelectProject(project)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="text-center py-8 text-xs border-t"
        style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
      >
        © {new Date().getFullYear()} Faisal Triaputra
      </div>
    </div>
  )
}
