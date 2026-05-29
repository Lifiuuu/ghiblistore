import { useState } from 'react';
import { transactions as initialTransactions, transactionStatuses } from '../../data/transactions';
import { formatIDR } from '../../data/products';
import Badge from '../../components/Badge';

const allStatuses = ['Diproses', 'Dikirim', 'Selesai', 'Dibatalkan'];

export default function AdminKelolaTransaksi() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Semua');

  const filtered = transactions.filter(t => {
    const matchStatus = statusFilter === 'Semua' || t.status === statusFilter;
    const matchSearch = t.orderId.toLowerCase().includes(search.toLowerCase()) ||
      t.customer.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const updateStatus = (id, newStatus) => setTransactions(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));

  return (
    <div className="space-y-5">
      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {transactionStatuses.map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 radius-full text-xs font-semibold transition ${statusFilter === s ? 'bg-ghibli-forest text-ghibli-cream' : 'bg-white border border-ghibli-forest/20 text-ghibli-text/70 hover:border-ghibli-forest/50'}`}
            >
              {s}
              {s !== 'Semua' && <span className="ml-1 opacity-60">({transactions.filter(t => t.status === s).length})</span>}
            </button>
          ))}
        </div>
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ghibli-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input id="search-transaksi" type="text" placeholder="Cari order ID / pelanggan..." value={search} onChange={e => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2.5 radius-2xl border border-ghibli-forest/20 bg-white text-sm text-ghibli-text focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40 w-full sm:w-64" />
        </div>
      </div>

      <div className="bg-white radius-2xl shadow-soft overflow-hidden">
        <div className="px-5 py-3 border-b border-ghibli-forest/10">
          <span className="text-sm font-semibold text-ghibli-text">{filtered.length} transaksi</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ghibli-cream/50">
              <tr>
                {['Order ID', 'Pelanggan', 'Produk', 'Total', 'Metode', 'Status', 'Tanggal', 'Ubah Status'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-ghibli-text/50 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ghibli-forest/5">
              {filtered.map(t => (
                <tr key={t.id} className="hover:bg-ghibli-cream/30 transition">
                  <td className="px-4 py-3 font-mono text-xs text-ghibli-text/70">{t.orderId}</td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-ghibli-text">{t.customer}</div>
                    <div className="text-xs text-ghibli-text/40">{t.email}</div>
                  </td>
                  <td className="px-4 py-3 text-xs text-ghibli-text/60">{t.items.length} item</td>
                  <td className="px-4 py-3 font-bold text-ghibli-forest text-xs">{formatIDR(t.total)}</td>
                  <td className="px-4 py-3 text-xs text-ghibli-text/60">{t.paymentMethod}</td>
                  <td className="px-4 py-3"><Badge label={t.status} /></td>
                  <td className="px-4 py-3 text-xs text-ghibli-text/60">{new Date(t.date).toLocaleDateString('id-ID')}</td>
                  <td className="px-4 py-3">
                    <select
                      value={t.status}
                      onChange={e => updateStatus(t.id, e.target.value)}
                      className="text-xs border border-ghibli-forest/20 radius-2xl px-2 py-1.5 text-ghibli-text focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40 bg-white"
                    >
                      {allStatuses.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
