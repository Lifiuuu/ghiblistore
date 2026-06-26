import { useState } from 'react';
import { products as initialProducts, formatIDR, categories } from '../../data/products';
import Modal from '../../components/Modal';
import Badge from '../../components/Badge';

export default function AdminKelolaProdk() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [form, setForm] = useState({ name: '', category: 'Boneka', price: '', stock: '', description: '', imageUrl: '' });

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const openAdd = () => { setEditProduct(null); setForm({ name: '', category: 'Boneka', price: '', stock: '', description: '', imageUrl: '' }); setShowModal(true); };
  const openEdit = (p) => { setEditProduct(p); setForm({ name: p.name, category: p.category, price: p.price, stock: p.stock, description: p.description, imageUrl: p.imageUrl }); setShowModal(true); };
  const handleDelete = (id) => { if (confirm('Hapus produk ini?')) setProducts(prev => prev.filter(p => p.id !== id)); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProduct) {
      setProducts(prev => prev.map(p => p.id === editProduct.id ? { ...p, ...form, price: Number(form.price), stock: Number(form.stock) } : p));
    } else {
      setProducts(prev => [...prev, { ...form, id: Date.now(), price: Number(form.price), stock: Number(form.stock), rating: 4.5, sold: 0 }]);
    }
    setShowModal(false);
  };

  const inputCls = "w-full p-2.5 radius-2xl border border-ghibli-forest/20 bg-white text-sm text-ghibli-text focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40";

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ghibli-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input id="search-produk-admin" type="text" placeholder="Cari produk..." value={search} onChange={e => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2.5 radius-2xl border border-ghibli-forest/20 bg-white text-sm text-ghibli-text focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40 w-full sm:w-64" />
        </div>
        <button onClick={openAdd} className="bg-ghibli-forest text-ghibli-cream px-5 py-2.5 radius-2xl text-sm font-semibold btn-pop shadow-soft shrink-0">
          + Tambah Produk
        </button>
      </div>

      <div className="bg-white radius-2xl shadow-soft overflow-hidden">
        <div className="px-5 py-3 border-b border-ghibli-forest/10 flex items-center justify-between">
          <span className="text-sm font-semibold text-ghibli-text">{filtered.length} produk</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ghibli-cream/50">
              <tr>
                {['No', 'Produk', 'Kategori', 'Harga', 'Stok', 'Terjual', 'Aksi'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-ghibli-text/50 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ghibli-forest/5">
              {filtered.map((p, i) => (
                <tr key={p.id} className="hover:bg-ghibli-cream/30 transition">
                  <td className="px-4 py-3 text-ghibli-text/50 text-xs">{i + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={p.imageUrl} alt={p.name} className="w-10 h-10 object-cover radius-2xl shrink-0" />
                      <div className="min-w-0">
                        <div className="font-semibold text-ghibli-text truncate max-w-[120px] sm:max-w-[160px]">{p.name}</div>
                        <div className="text-xs text-ghibli-text/50 truncate max-w-[120px] sm:max-w-[160px]">{p.description.slice(0, 40)}...</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3"><Badge label={p.category} /></td>
                  <td className="px-4 py-3 font-bold text-ghibli-forest text-xs">{formatIDR(p.price)}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold ${p.stock > 10 ? 'text-emerald-600' : p.stock > 0 ? 'text-amber-600' : 'text-red-600'}`}>{p.stock}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-ghibli-text/60">{p.sold}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(p)} className="text-xs font-semibold text-ghibli-sky hover:underline">Edit</button>
                      <button onClick={() => handleDelete(p.id)} className="text-xs font-semibold text-red-400 hover:underline">Hapus</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={editProduct ? 'Edit Produk' : 'Tambah Produk Baru'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-ghibli-text mb-1">Nama Produk *</label>
            <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputCls} placeholder="Nama produk" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-ghibli-text mb-1">Kategori</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className={inputCls}>
                {categories.filter(c => c !== 'Semua').map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-ghibli-text mb-1">Harga (IDR) *</label>
              <input required type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} className={inputCls} placeholder="150000" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-ghibli-text mb-1">Stok *</label>
              <input required type="number" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: e.target.value }))} className={inputCls} placeholder="10" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-ghibli-text mb-1">Gambar Produk</label>
              <input type="file" accept="image/*" onChange={e => {
                const file = e.target.files[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setForm(f => ({ ...f, imageUrl: url }));
                }
              }} className={`${inputCls} file:mr-4 file:py-1 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-ghibli-forest file:text-white hover:file:bg-ghibli-forest/90 cursor-pointer`} />
              {form.imageUrl && form.imageUrl.startsWith('blob:') && <p className="text-[10px] text-emerald-600 mt-1">Gambar baru dipilih</p>}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-ghibli-text mb-1">Deskripsi</label>
            <textarea rows={3} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className={`${inputCls} resize-none`} placeholder="Deskripsi produk..." />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="submit" className="flex-1 bg-ghibli-forest text-ghibli-cream py-2.5 radius-2xl text-sm font-semibold btn-pop">
              {editProduct ? 'Simpan Perubahan' : 'Tambah Produk'}
            </button>
            <button type="button" onClick={() => setShowModal(false)} className="flex-1 border border-ghibli-forest/20 text-ghibli-text py-2.5 radius-2xl text-sm font-semibold hover:bg-ghibli-forest/5">
              Batal
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
