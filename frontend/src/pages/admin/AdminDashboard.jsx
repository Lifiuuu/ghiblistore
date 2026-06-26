import { products } from '../../data/products';
import { users } from '../../data/users';
import { transactions } from '../../data/transactions';
import { articles } from '../../data/articles';
import { formatIDR } from '../../data/products';
import StatCard from '../../components/StatCard';
import Badge from '../../components/Badge';

const totalRevenue = transactions.filter(t => t.status === 'Selesai').reduce((s, t) => s + t.total, 0);
const recentTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard 
          icon={<svg className="w-6 h-6 text-ghibli-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>} 
          label="Total Produk" 
          value={products.length} 
          sub={`${products.filter(p => p.stock > 0).length} produk tersedia`} 
          color="bg-ghibli-sky/20" 
        />
        <StatCard 
          icon={<svg className="w-6 h-6 text-ghibli-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} 
          label="Total Pengguna" 
          value={users.length} 
          sub={`${users.filter(u => u.status === 'Aktif').length} pengguna aktif`} 
          color="bg-ghibli-accent-peach/60" 
        />
        <StatCard 
          icon={<svg className="w-6 h-6 text-ghibli-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>} 
          label="Total Transaksi" 
          value={transactions.length} 
          sub={`${transactions.filter(t => t.status === 'Selesai').length} selesai`} 
          color="bg-ghibli-accent-yellow/60" 
        />
        <StatCard
          icon={<svg className="w-6 h-6 text-ghibli-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          label={
            <div className="leading-tight">
              Pendapatan
              <div className="text-xs font-normal">Bulan Ini</div>
            </div>
          }
          value={formatIDR(totalRevenue)}
          sub="Dari transaksi selesai"
          color="bg-emerald-100"
        />
      </div>

      {/* Quick stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white radius-2xl shadow-soft p-5">
          <div className="text-xs font-semibold text-ghibli-text/50 uppercase tracking-widest mb-3">Status Stok</div>
          {[
            { label: 'Stok Baik (>10)', count: products.filter(p => p.stock > 10).length, color: 'bg-emerald-100 text-emerald-700' },
            { label: 'Stok Rendah (1-10)', count: products.filter(p => p.stock > 0 && p.stock <= 10).length, color: 'bg-amber-100 text-amber-700' },
            { label: 'Habis (0)', count: products.filter(p => p.stock === 0).length, color: 'bg-red-100 text-red-700' },
          ].map(s => (
            <div key={s.label} className="flex justify-between items-center py-2 border-b border-ghibli-forest/5 last:border-0">
              <span className="text-xs text-ghibli-text/70">{s.label}</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.color}`}>{s.count}</span>
            </div>
          ))}
        </div>
        <div className="bg-white radius-2xl shadow-soft p-5">
          <div className="text-xs font-semibold text-ghibli-text/50 uppercase tracking-widest mb-3">Status Transaksi</div>
          {['Diproses', 'Dikirim', 'Selesai', 'Dibatalkan'].map(status => (
            <div key={status} className="flex justify-between items-center py-2 border-b border-ghibli-forest/5 last:border-0">
              <span className="text-xs text-ghibli-text/70">{status}</span>
              <Badge label={status} />
            </div>
          ))}
        </div>
        <div className="bg-white radius-2xl shadow-soft p-5">
          <div className="text-xs font-semibold text-ghibli-text/50 uppercase tracking-widest mb-3">Artikel</div>
          {[
            { label: 'Total Artikel', count: articles.length },
            { label: 'Published', count: articles.filter(a => a.status === 'Published').length },
            { label: 'Draft', count: articles.filter(a => a.status === 'Draft').length },
          ].map(s => (
            <div key={s.label} className="flex justify-between items-center py-2 border-b border-ghibli-forest/5 last:border-0">
              <span className="text-xs text-ghibli-text/70">{s.label}</span>
              <span className="text-xs font-bold text-ghibli-forest">{s.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent transactions */}
      <div className="bg-white radius-2xl shadow-soft p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-lg text-ghibli-forest">Transaksi Terbaru</h2>
          <a href="#/admin/transaksi" className="text-xs text-ghibli-sky font-semibold hover:underline">Lihat semua →</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ghibli-forest/10">
                {['Order ID', 'Pelanggan', 'Total', 'Metode', 'Status', 'Tanggal'].map(h => (
                  <th key={h} className="text-left pb-3 text-xs font-semibold text-ghibli-text/50 uppercase tracking-wide pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ghibli-forest/5">
              {recentTransactions.map(t => (
                <tr key={t.id}>
                  <td className="py-3 pr-4 font-mono text-xs text-ghibli-text/70">{t.orderId}</td>
                  <td className="py-3 pr-4 font-semibold text-ghibli-text">{t.customer}</td>
                  <td className="py-3 pr-4 font-bold text-ghibli-forest text-xs">{formatIDR(t.total)}</td>
                  <td className="py-3 pr-4 text-xs text-ghibli-text/60">{t.paymentMethod}</td>
                  <td className="py-3 pr-4"><Badge label={t.status} /></td>
                  <td className="py-3 text-xs text-ghibli-text/60">{new Date(t.date).toLocaleDateString('id-ID')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
