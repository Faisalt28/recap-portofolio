import { Globe, Smartphone, ArrowRight, Sparkles } from 'lucide-react'
import type { ProjectItem } from '../data/projects'

interface ProjectCardProps {
  project: ProjectItem
  onClick: () => void
  variant?: 'default' | 'collage-hero' | 'collage-tall' | 'collage-banner'
}

export default function ProjectCard({ project, onClick, variant = 'default' }: ProjectCardProps) {
  const isOnline = project.category === 'web' || project.category === 'ml'
  const isAndroid = project.category === 'android'

  // Variant: Collage Hero (Wide card for AcheeZ in collage)
  if (variant === 'collage-hero') {
    return (
      <div
        onClick={onClick}
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)'
          ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(16,185,129,0.4)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow)'
          ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
        }}
      >
        {/* Thumbnail: Selalu Full-width Landscape (16:9 aspect-video) untuk Website */}
        <div className="relative w-full aspect-video overflow-hidden bg-neutral-900 shrink-0">
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Badge overlay */}
          <span
            className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              background: 'rgba(16,185,129,0.15)',
              color: '#10b981',
              border: '1px solid rgba(16,185,129,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Globe className="w-3 h-3" />
            {project.badge}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 sm:p-6 justify-between">
          <div>
            <span className="text-xs font-mono font-semibold text-emerald-500 uppercase tracking-wider block mb-1">
              Featured Web Platform
            </span>
            <h2
              className="text-base sm:text-lg font-bold mb-2 leading-snug break-words"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h2>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>
          </div>

          <div>
            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.slice(0, 6).map(tech => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-xs font-mono"
                  style={{
                    background: 'var(--bg-subtle)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 6 && (
                <span
                  className="px-2 py-0.5 rounded-md text-xs font-mono"
                  style={{ background: 'var(--bg-subtle)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                >
                  +{project.techStack.length - 6}
                </span>
              )}
            </div>

            {/* CTA */}
            <button
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer group/btn"
              style={{
                background: 'rgba(16,185,129,0.1)',
                color: '#10b981',
                border: '1px solid rgba(16,185,129,0.25)',
              }}
            >
              <span>Lihat Detail</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Variant: Collage Tall (Portrait card for ArtoZ & Survey Logger in collage)
  if (variant === 'collage-tall') {
    return (
      <div
        onClick={onClick}
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)'
          ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(139,92,246,0.35)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow)'
          ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
        }}
      >
        {/* Thumbnail: Tall Portrait flex-1 */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:flex-1 overflow-hidden bg-neutral-900 min-h-[220px]">
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Badge overlay */}
          <span
            className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              background: 'rgba(139,92,246,0.15)',
              color: '#a78bfa',
              border: '1px solid rgba(139,92,246,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Smartphone className="w-3 h-3" />
            {project.badge}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col p-4 sm:p-5 shrink-0">
          <h2
            className="text-base font-bold mb-1.5 leading-snug break-words"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.title}
          </h2>
          <p
            className="text-xs leading-relaxed mb-3 line-clamp-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 3).map(tech => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono"
                style={{
                  background: 'var(--bg-subtle)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                }}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span
                className="px-2 py-0.5 rounded-md text-[11px] font-mono"
                style={{ background: 'var(--bg-subtle)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
              >
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* CTA */}
          <button
            className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer group/btn"
            style={{
              background: 'rgba(139,92,246,0.1)',
              color: '#a78bfa',
              border: '1px solid rgba(139,92,246,0.25)',
            }}
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    )
  }

  // Variant: Collage Banner (Wide horizontal card for Rekomendasi Film across 4 columns)
  if (variant === 'collage-banner') {
    return (
      <div
        onClick={onClick}
        className="group relative flex flex-col md:flex-row h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)'
          ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(16,185,129,0.4)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow)'
          ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
        }}
      >
        {/* Thumbnail: responsive width on desktop, 16:9 on mobile */}
        <div className="relative w-full md:w-[45%] lg:w-[42%] aspect-video md:aspect-auto overflow-hidden bg-neutral-900 shrink-0 min-h-[220px] sm:min-h-[260px]">
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Badge overlay */}
          <span
            className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              background: 'rgba(16,185,129,0.15)',
              color: '#10b981',
              border: '1px solid rgba(16,185,129,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Sparkles className="w-3 h-3" />
            {project.badge}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-7 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs font-mono font-semibold text-emerald-500 uppercase tracking-wider">
                Featured Machine Learning
              </span>
              <span
                className="text-[11px] font-mono px-2 py-0.5 rounded-full"
                style={{ background: 'var(--bg-subtle)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
              >
                Hugging Face Spaces
              </span>
            </div>
            <h2
              className="text-base sm:text-xl font-bold mb-2.5 leading-snug break-words"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h2>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 sm:line-clamp-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>
          </div>

          <div>
            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-mono"
                  style={{
                    background: 'var(--bg-subtle)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer group/btn"
              style={{
                background: 'rgba(16,185,129,0.1)',
                color: '#10b981',
                border: '1px solid rgba(16,185,129,0.25)',
              }}
            >
              <span>Lihat Detail</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Variant: Default (Standard grid for filter & regular items)
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)'
        ;(e.currentTarget as HTMLDivElement).style.borderColor = isOnline ? 'rgba(16,185,129,0.35)' : 'rgba(139,92,246,0.35)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow)'
        ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
      }}
    >
      {/* Thumbnail: Portrait (3:4) untuk Android, Landscape (16:9) untuk Web */}
      <div
        className={`relative w-full overflow-hidden bg-neutral-900 ${
          isAndroid ? 'aspect-[3/4]' : 'aspect-video'
        }`}
      >
        <img
          src={project.imgSrc}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge overlay */}
        <span
          className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={isOnline ? {
            background: 'rgba(16,185,129,0.15)',
            color: '#10b981',
            border: '1px solid rgba(16,185,129,0.35)',
            backdropFilter: 'blur(8px)',
          } : {
            background: 'rgba(139,92,246,0.15)',
            color: '#a78bfa',
            border: '1px solid rgba(139,92,246,0.35)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {project.badge === 'Machine Learning' ? (
            <Sparkles className="w-3 h-3" />
          ) : isOnline ? (
            <Globe className="w-3 h-3" />
          ) : (
            <Smartphone className="w-3 h-3" />
          )}
          {project.badge}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 justify-between">
        <div>
          <h2
            className="text-base font-bold mb-2 leading-snug break-words"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.title}
          </h2>
          <p
            className="text-sm leading-relaxed mb-4 line-clamp-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 4).map(tech => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-xs font-mono"
                style={{
                  background: 'var(--bg-subtle)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                }}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span
                className="px-2 py-0.5 rounded-md text-xs font-mono"
                style={{ background: 'var(--bg-subtle)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
              >
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* CTA */}
          <button
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer group/btn"
            style={{
              background: isOnline ? 'rgba(16,185,129,0.1)' : 'rgba(139,92,246,0.1)',
              color: isOnline ? '#10b981' : '#a78bfa',
              border: `1px solid ${isOnline ? 'rgba(16,185,129,0.25)' : 'rgba(139,92,246,0.25)'}`,
            }}
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  )
}
