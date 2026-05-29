export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ghibli-text/40 backdrop-blur-sm" onClick={onClose} />

      {/* Dialog */}
      <div className="relative bg-ghibli-cream radius-3xl shadow-[0_24px_64px_rgba(46,79,59,0.18)] w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-ghibli-forest/10">
          <h2 className="font-serif text-lg font-semibold text-ghibli-forest">{title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-ghibli-forest/10 text-ghibli-text/60 hover:text-ghibli-forest transition"
            aria-label="Tutup"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
