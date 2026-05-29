export default function StatCard({ icon, label, value, sub, color = 'bg-ghibli-forest' }) {
  return (
    <div className="bg-white radius-3xl shadow-soft p-6 flex flex-col items-center text-center gap-3">
      <div className={`w-10 h-10 ${color} text-lg radius-2xl flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-ghibli-forest font-serif">{value}</div>
        <div className="text-sm font-semibold text-ghibli-text mt-1">{label}</div>
        {sub && <div className="text-xs text-ghibli-text/50 mt-1">{sub}</div>}
      </div>
    </div>
  );
}
