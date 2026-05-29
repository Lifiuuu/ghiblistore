const variants = {
  Selesai: 'bg-emerald-100 text-emerald-700',
  Dikirim: 'bg-blue-100 text-blue-700',
  Diproses: 'bg-amber-100 text-amber-700',
  Dibatalkan: 'bg-red-100 text-red-700',
  Aktif: 'bg-emerald-100 text-emerald-700',
  Nonaktif: 'bg-gray-100 text-gray-500',
  Published: 'bg-emerald-100 text-emerald-700',
  Draft: 'bg-amber-100 text-amber-700',
  Admin: 'bg-ghibli-forest/15 text-ghibli-forest',
  Customer: 'bg-ghibli-sky/20 text-ghibli-sky',
};

export default function Badge({ label, className = '' }) {
  const style = variants[label] || 'bg-gray-100 text-gray-600';
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${style} ${className}`}>
      {label}
    </span>
  );
}
