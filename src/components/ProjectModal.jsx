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
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer border-0"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
        </button>

        {/* Image */}
        <div className="w-full aspect-video overflow-hidden rounded-t-2xl relative">
          <img
            src={project.img}
            alt={project.imgAlt}
            className="w-full h-full object-cover"
            style={{ height: '100%' }}
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 block mb-3">{project.tag}</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{project.modal.title}</h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-6">{project.modal.intro}</p>

          {project.modal.features && (
            <div className="mb-6">
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">O que o sistema faz:</p>
              <div className="space-y-4">
                {project.modal.features.map((f, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold text-gray-800 mb-1">{f.name}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.modal.stack && (
            <div>
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Stack técnica:</p>
              <div className="flex flex-wrap gap-2">
                {project.modal.stack.map(s => (
                  <span key={s} className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.modal.link && (
            <a
              href={project.modal.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-2 mb-6 px-5 py-2.5 rounded-full bg-gray-900 text-white text-xs font-bold tracking-wide hover:bg-gray-700 transition-colors"
            >
              Ver Projeto <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </a>
          )}

          {project.modal.stackDetails && (
            <div>
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Stack e características técnicas:</p>
              {project.modal.stackIntro && (
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.modal.stackIntro}</p>
              )}
              <div className="space-y-3">
                {project.modal.stackDetails.map((s, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      <span className="text-gray-900 font-bold">{s.name}</span> — {s.desc}
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
