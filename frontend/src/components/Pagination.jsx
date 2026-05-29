export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 radius-full border border-ghibli-forest/20 text-ghibli-text/60 hover:bg-ghibli-forest hover:text-ghibli-cream disabled:opacity-30 disabled:cursor-not-allowed transition text-sm flex items-center justify-center"
      >
        ‹
      </button>
      {pages.map(p => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-9 h-9 radius-full text-sm font-semibold transition ${
            p === currentPage
              ? 'bg-ghibli-forest text-ghibli-cream shadow-soft-sm'
              : 'border border-ghibli-forest/20 text-ghibli-text/60 hover:bg-ghibli-forest/10'
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 radius-full border border-ghibli-forest/20 text-ghibli-text/60 hover:bg-ghibli-forest hover:text-ghibli-cream disabled:opacity-30 disabled:cursor-not-allowed transition text-sm flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}
