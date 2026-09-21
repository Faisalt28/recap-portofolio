import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'
import CatalogPage from './components/CatalogPage'
import ProjectDetail from './components/ProjectDetail'
import { getProjectById, type ProjectItem } from './data/projects'

export type View = 'landing' | 'catalog' | 'detail'

function parseRoute(): { view: View; project: ProjectItem | null } {
  const hash = window.location.hash

  // 1. Check URL hash first
  if (hash.startsWith('#project/') || hash.startsWith('#detail/')) {
    const id = hash.replace(/^#(project|detail)\//, '')
    const project = getProjectById(id)
    if (project) return { view: 'detail', project }
  }
  if (hash === '#catalog') {
    return { view: 'catalog', project: null }
  }
  if (hash === '#landing') {
    return { view: 'landing', project: null }
  }

  // 2. Fallback to localStorage on refresh if hash was clean
  const savedView = localStorage.getItem('last_view') as View | null
  const savedProjectId = localStorage.getItem('last_project_id')
  if (savedView === 'detail' && savedProjectId) {
    const project = getProjectById(savedProjectId)
    if (project) return { view: 'detail', project }
  }
  if (savedView === 'catalog') {
    return { view: 'catalog', project: null }
  }

  return { view: 'landing', project: null }
}

export default function App() {
  const [route, setRoute] = useState<{ view: View; project: ProjectItem | null }>(() => parseRoute())
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const { view, project: selectedProject } = route

  // Sync route on mount and listen to browser back/forward and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(parseRoute())
    }

    // Sync initial hash to match restored view if needed
    if (!window.location.hash) {
      if (view === 'detail' && selectedProject) {
        window.history.replaceState(null, '', `#project/${selectedProject.id}`)
      } else if (view === 'catalog') {
        window.history.replaceState(null, '', '#catalog')
      }
    }

    window.addEventListener('hashchange', handleLocationChange)
    window.addEventListener('popstate', handleLocationChange)
    return () => {
      window.removeEventListener('hashchange', handleLocationChange)
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [view, selectedProject])

  // Theme synchronization
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  const openProject = (project: ProjectItem) => {
    setRoute({ view: 'detail', project })
    window.location.hash = `#project/${project.id}`
    localStorage.setItem('last_view', 'detail')
    localStorage.setItem('last_project_id', project.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToCatalog = () => {
    setRoute({ view: 'catalog', project: null })
    window.location.hash = '#catalog'
    localStorage.setItem('last_view', 'catalog')
    localStorage.removeItem('last_project_id')
    window.scrollTo({ top: 0 })
  }

  const goToLanding = () => {
    setRoute({ view: 'landing', project: null })
    window.location.hash = ''
    localStorage.setItem('last_view', 'landing')
    localStorage.removeItem('last_project_id')
    window.scrollTo({ top: 0 })
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}>
      {view === 'landing' && (
        <LandingPage
          theme={theme}
          toggleTheme={toggleTheme}
          onEnter={goToCatalog}
        />
      )}
      {view === 'catalog' && (
        <CatalogPage
          theme={theme}
          toggleTheme={toggleTheme}
          onSelectProject={openProject}
          onBack={goToLanding}
        />
      )}
      {view === 'detail' && selectedProject && (
        <ProjectDetail
          project={selectedProject}
          theme={theme}
          toggleTheme={toggleTheme}
          onBack={goToCatalog}
        />
      )}
    </div>
  )
}
