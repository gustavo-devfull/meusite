import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative bg-[#6b6d71] rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors cursor-pointer border-0"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
        </button>

        {/* Image */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-t-2xl relative">
          <img
            src={project.img}
            alt={project.imgAlt}
            className="w-full h-full object-cover"
            style={{ height: '100%' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-on-surface-variant block mb-3">{project.tag}</span>
          <h2 className="text-2xl font-bold text-white mb-6">{project.modal.title}</h2>

          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{project.modal.intro}</p>

          {project.modal.features && (
            <div className="mb-6">
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-4">O que o sistema faz:</p>
              <div className="space-y-4">
                {project.modal.features.map((f, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold text-white mb-1">{f.name}</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.modal.stack && (
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-3">Stack técnica:</p>
              <div className="flex flex-wrap gap-2">
                {project.modal.stack.map(s => (
                  <span key={s} className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-on-surface-variant border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.modal.stackDetails && (
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">Stack e características técnicas:</p>
              {project.modal.stackIntro && (
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{project.modal.stackIntro}</p>
              )}
              <div className="space-y-3">
                {project.modal.stackDetails.map((s, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-white/40 mt-0.5 flex-shrink-0">—</span>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      <span className="text-white font-bold">{s.name}</span> — {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
