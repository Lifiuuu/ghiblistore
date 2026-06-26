import { useState } from 'react';
import { articles as initialArticles, articleCategories } from '../../data/articles';
import Modal from '../../components/Modal';
import Badge from '../../components/Badge';

export default function AdminKelolaArtikel() {
  const [articles, setArticles] = useState(initialArticles);
  const [showModal, setShowModal] = useState(false);
  const [editArticle, setEditArticle] = useState(null);
  const [form, setForm] = useState({ title: '', category: 'Koleksi', author: '', content: '', coverUrl: '', status: 'Draft' });

  const openAdd = () => { setEditArticle(null); setForm({ title: '', category: 'Koleksi', author: '', content: '', coverUrl: '', status: 'Draft' }); setShowModal(true); };
  const openEdit = (a) => { setEditArticle(a); setForm({ title: a.title, category: a.category, author: a.author, content: a.content, coverUrl: a.coverUrl, status: a.status }); setShowModal(true); };
  const handleDelete = (id) => { if (confirm('Hapus artikel ini?')) setArticles(prev => prev.filter(a => a.id !== id)); };
  const toggleStatus = (id) => setArticles(prev => prev.map(a => a.id === id ? { ...a, status: a.status === 'Published' ? 'Draft' : 'Published' } : a));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editArticle) {
      setArticles(prev => prev.map(a => a.id === editArticle.id ? { ...a, ...form } : a));
    } else {
      setArticles(prev => [...prev, { ...form, id: Date.now(), excerpt: form.content.slice(0, 120) + '...', authorAvatar: `https://placehold.co/48x48/A8D8EA/2E4F3B?text=${form.author.charAt(0)}`, publishDate: new Date().toISOString().split('T')[0], readTime: Math.ceil(form.content.length / 800), tags: [] }]);
    }
    setShowModal(false);
  };

  const inputCls = "w-full p-2.5 radius-2xl border border-ghibli-forest/20 bg-white text-sm text-ghibli-text focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40";

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <p className="text-sm text-ghibli-text/60">{articles.length} artikel</p>
        <button onClick={openAdd} className="bg-ghibli-forest text-ghibli-cream px-5 py-2.5 radius-2xl text-sm font-semibold btn-pop shadow-soft">
          + Tambah Artikel
        </button>
      </div>

      <div className="bg-white radius-2xl shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ghibli-cream/50">
              <tr>
                {['No', 'Artikel', 'Kategori', 'Penulis', 'Tanggal', 'Status', 'Aksi'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-ghibli-text/50 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ghibli-forest/5">
              {articles.map((a, i) => (
                <tr key={a.id} className="hover:bg-ghibli-cream/30 transition">
                  <td className="px-4 py-3 text-ghibli-text/50 text-xs">{i + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={a.coverUrl} alt={a.title} className="w-12 h-9 object-cover radius-2xl shrink-0" />
                      <div className="font-semibold text-ghibli-text text-sm truncate max-w-[140px] sm:max-w-[200px]">{a.title}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs bg-ghibli-accent-peach/50 text-ghibli-forest px-2 py-0.5 rounded-full font-semibold">{a.category}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-ghibli-text/70">{a.author}</td>
                  <td className="px-4 py-3 text-xs text-ghibli-text/60">{new Date(a.publishDate).toLocaleDateString('id-ID')}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => toggleStatus(a.id)} title="Klik untuk toggle status">
                      <Badge label={a.status} className="cursor-pointer hover:opacity-80 transition" />
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(a)} className="text-xs font-semibold text-ghibli-sky hover:underline">Edit</button>
                      <button onClick={() => handleDelete(a.id)} className="text-xs font-semibold text-red-400 hover:underline">Hapus</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={editArticle ? 'Edit Artikel' : 'Tambah Artikel Baru'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-ghibli-text mb-1">Judul *</label>
            <input required value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Judul artikel" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-ghibli-text mb-1">Kategori</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className={inputCls}>
                {articleCategories.filter(c => c !== 'Semua').map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-ghibli-text mb-1">Status</label>
              <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} className={inputCls}>
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-ghibli-text mb-1">Penulis *</label>
            <input required value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))} className={inputCls} placeholder="Nama penulis" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-ghibli-text mb-1">Cover Artikel</label>
            <input type="file" accept="image/*" onChange={e => {
              const file = e.target.files[0];
              if (file) {
                const url = URL.createObjectURL(file);
                setForm(f => ({ ...f, coverUrl: url }));
              }
            }} className={`${inputCls} file:mr-4 file:py-1 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-ghibli-forest file:text-white hover:file:bg-ghibli-forest/90 cursor-pointer`} />
            {form.coverUrl && form.coverUrl.startsWith('blob:') && <p className="text-[10px] text-emerald-600 mt-1">Cover baru dipilih</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-ghibli-text mb-1">Konten *</label>
            <textarea required rows={5} value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} className={`${inputCls} resize-none`} placeholder="Tulis konten artikel..." />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="submit" className="flex-1 bg-ghibli-forest text-ghibli-cream py-2.5 radius-2xl text-sm font-semibold btn-pop">
              {editArticle ? 'Simpan' : 'Tambah'}
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
