import { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, ArrowLeft } from 'lucide-react'
import { projectsList, type ProjectItem } from '../data/projects'
import ConditionGrid, { type ProjectsTypes } from '@/components/ui/conditiongrid'

interface CatalogPageProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
  onSelectProject: (project: ProjectItem) => void
  onBack: () => void
}

export default function CatalogPage({ theme, toggleTheme, onSelectProject, onBack }: CatalogPageProps) {
  const [filter, setFilter] = useState<'all' | 'web' | 'android' | 'ml'>('all')
  const isDark = theme === 'dark'

  const filtered = filter === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === filter)

  const webCount = projectsList.filter(p => p.category === 'web').length
  const androidCount = projectsList.filter(p => p.category === 'android').length
  const mlCount = projectsList.filter(p => p.category === 'ml').length

  // Map active projects into ConditionGrid format
  const gridItems: ProjectsTypes[] = filtered.map((project, idx) => ({
    id: `0${idx + 1}`,
    img: project.imgSrc,
    title: project.title,
    des: project.description,
    badge: project.badge,
    category: project.category,
    techStack: project.techStack,
    raw: project,
  }))

  return (
    <div className="min-h-screen w-full" style={{ background: 'var(--bg)' }}>
      {/* Background glow — dark only */}
      {isDark && (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-emerald-500/10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-[700px] h-[600px] rounded-full bg-cyan-600/8 blur-[180px]" />
        </div>
      )}

      {/* Navbar — Full Screen Width */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md w-full"
        style={{
          background: isDark ? 'rgba(9,9,14,0.85)' : 'rgba(240,242,245,0.9)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 h-16 flex items-center justify-between">
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

      {/* Page Header — Full Screen Width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-5">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-1 sm:mb-2" style={{ color: 'var(--text-primary)' }}>
                Daftar Proyek
              </h1>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                {projectsList.length} proyek pilihan · {webCount} website · {androidCount} android · {mlCount} machine learning
              </p>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {([
              { key: 'all', label: `Semua (${projectsList.length})` },
              { key: 'web', label: `Website (${webCount})` },
              { key: 'android', label: `Android (${androidCount})` },
              { key: 'ml', label: `Machine Learning (${mlCount})` },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
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
                {label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full-Screen Projects Display with ConditionGrid */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-20">
        <ConditionGrid
          items={gridItems}
          onSelect={(item) => item.raw && onSelectProject(item.raw)}
        />
      </div>

      {/* Footer — Full Screen Width */}
      <footer
        className="w-full text-center py-8 text-xs border-t"
        style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
      >
        © {new Date().getFullYear()} Faisal Triaputra
      </footer>
    </div>
  )
}
