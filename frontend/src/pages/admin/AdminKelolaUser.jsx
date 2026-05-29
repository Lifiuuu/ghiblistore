import { useState } from 'react';
import { users as initialUsers } from '../../data/users';
import Badge from '../../components/Badge';

export default function AdminKelolaUser() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = (id) => setUsers(prev => prev.map(u => u.id === id ? { ...u, status: u.status === 'Aktif' ? 'Nonaktif' : 'Aktif' } : u));
  const handleDelete = (id) => { if (confirm('Hapus pengguna ini?')) setUsers(prev => prev.filter(u => u.id !== id)); };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ghibli-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            id="search-user"
            type="text"
            placeholder="Cari nama atau email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2.5 radius-2xl border border-ghibli-forest/20 bg-white text-sm text-ghibli-text focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40 w-full sm:w-72"
          />
        </div>
        <span className="text-sm text-ghibli-text/60">{filtered.length} pengguna</span>
      </div>

      <div className="bg-white radius-2xl shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ghibli-cream/50">
              <tr>
                {['No', 'Pengguna', 'Email', 'Role', 'Tgl Daftar', 'Pesanan', 'Status', 'Aksi'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-ghibli-text/50 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ghibli-forest/5">
              {filtered.map((u, i) => (
                <tr key={u.id} className="hover:bg-ghibli-cream/30 transition">
                  <td className="px-4 py-3 text-ghibli-text/50 text-xs">{i + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={u.avatar} alt={u.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
                      <span className="font-semibold text-ghibli-text">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-ghibli-text/60">{u.email}</td>
                  <td className="px-4 py-3"><Badge label={u.role} /></td>
                  <td className="px-4 py-3 text-xs text-ghibli-text/60">{new Date(u.joinDate).toLocaleDateString('id-ID')}</td>
                  <td className="px-4 py-3 text-xs font-semibold text-ghibli-text/70">{u.orders}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => toggleStatus(u.id)} title="Klik untuk toggle status">
                      <Badge label={u.status} className="cursor-pointer hover:opacity-80 transition" />
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => handleDelete(u.id)} className="text-xs font-semibold text-red-400 hover:underline">Hapus</button>
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
