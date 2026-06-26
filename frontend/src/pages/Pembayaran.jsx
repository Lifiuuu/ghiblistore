import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatIDR } from '../data/products';
import Modal from '../components/Modal';

const paymentMethods = [
  { id: 'bank', label: 'Transfer Bank', icon: '🏦', sub: 'BCA, Mandiri, BNI, BRI' },
  { id: 'ewallet', label: 'E-Wallet', icon: '📱', sub: 'GoPay, OVO, Dana, ShopeePay' },
  { id: 'cod', label: 'COD (Bayar di Tempat)', icon: '🚚', sub: 'Hanya untuk area tertentu' },
];

export default function Pembayaran() {
  const { items, removeItem, clearCart } = useCart();
  const location = useLocation();
  const selectedIds = location.state?.selectedIds;

  // Jika ada selectedIds, filter item keranjang. Jika tidak, proses semua (fallback).
  const checkoutItems = selectedIds ? items.filter(i => selectedIds.includes(i.id)) : items;
  const checkoutTotalPrice = checkoutItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const [form, setForm] = useState({ nama: '', email: '', alamat: '', kota: '', kodePos: '', metode: 'bank' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const shipping = checkoutItems.length > 0 ? 25000 : 0;
  const total = checkoutTotalPrice + shipping;

  const validate = () => {
    const e = {};
    if (!form.nama.trim()) e.nama = 'Nama wajib diisi';
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Email tidak valid';
    if (!form.alamat.trim()) e.alamat = 'Alamat wajib diisi';
    if (!form.kota.trim()) e.kota = 'Kota wajib diisi';
    if (!form.kodePos.trim()) e.kodePos = 'Kode Pos wajib diisi';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSuccess(true);
    if (selectedIds && selectedIds.length < items.length) {
      selectedIds.forEach(id => removeItem(id));
    } else {
      clearCart();
    }
  };

  const update = (field, val) => { setForm(f => ({ ...f, [field]: val })); setErrors(e => ({ ...e, [field]: '' })); };

  const inputCls = (field) => `w-full p-3 radius-2xl border text-sm text-ghibli-text focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40 ${errors[field] ? 'border-red-400 bg-red-50' : 'border-ghibli-forest/20 bg-white'}`;

  return (
    <div className="min-h-screen bg-ghibli-cream">
      <div className="section-inner py-10">
        <h1 className="font-serif text-2xl md:text-3xl text-ghibli-forest mb-8">💳 Pembayaran</h1>

        {checkoutItems.length === 0 && !success ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <p className="font-serif text-ghibli-forest text-xl">Keranjangmu kosong atau belum ada produk yang dipilih</p>
            <Link to="/keranjang" className="mt-4 inline-block text-ghibli-sky underline font-semibold">Kembali ke Keranjang</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
              <div className="bg-white radius-2xl shadow-soft p-6">
                <h2 className="font-serif text-lg text-ghibli-forest mb-4">Data Pengiriman</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-ghibli-text mb-1">Nama Lengkap *</label>
                    <input id="nama" type="text" value={form.nama} onChange={e => update('nama', e.target.value)} placeholder="Nama lengkap penerima" className={inputCls('nama')} />
                    {errors.nama && <p className="text-xs text-red-500 mt-1">{errors.nama}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ghibli-text mb-1">Email *</label>
                    <input id="email" type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="email@kamu.com" className={inputCls('email')} />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ghibli-text mb-1">Alamat Pengiriman *</label>
                    <textarea id="alamat" rows={3} value={form.alamat} onChange={e => update('alamat', e.target.value)} placeholder="Jl. Nama Jalan No. RT/RW" className={`${inputCls('alamat')} resize-none`} />
                    {errors.alamat && <p className="text-xs text-red-500 mt-1">{errors.alamat}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-ghibli-text mb-1">Kota *</label>
                      <input id="kota" type="text" value={form.kota} onChange={e => update('kota', e.target.value)} placeholder="Jakarta" className={inputCls('kota')} />
                      {errors.kota && <p className="text-xs text-red-500 mt-1">{errors.kota}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ghibli-text mb-1">Kode Pos *</label>
                      <input id="kodePos" type="text" value={form.kodePos} onChange={e => update('kodePos', e.target.value)} placeholder="12345" className={inputCls('kodePos')} />
                      {errors.kodePos && <p className="text-xs text-red-500 mt-1">{errors.kodePos}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment method */}
              <div className="bg-white radius-2xl shadow-soft p-6">
                <h2 className="font-serif text-lg text-ghibli-forest mb-4">Metode Pembayaran</h2>
                <div className="space-y-3">
                  {paymentMethods.map(m => (
                    <label key={m.id} className={`flex items-center gap-4 p-4 radius-2xl border-2 cursor-pointer transition ${form.metode === m.id ? 'border-ghibli-forest bg-ghibli-forest/5' : 'border-ghibli-forest/15 hover:border-ghibli-forest/40'}`}>
                      <input type="radio" name="metode" value={m.id} checked={form.metode === m.id} onChange={() => update('metode', m.id)} className="accent-ghibli-forest" />
                      <span className="text-xl sm:text-2xl">{m.icon}</span>
                      <div>
                        <div className="font-semibold text-sm text-ghibli-text">{m.label}</div>
                        <div className="text-xs text-ghibli-text/50">{m.sub}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full bg-ghibli-forest text-ghibli-cream py-4 radius-2xl font-bold text-base btn-pop shadow-soft">
                Bayar Sekarang — {formatIDR(total)} 🌿
              </button>
            </form>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-white radius-2xl shadow-soft p-6 lg:sticky lg:top-24">
                <h2 className="font-serif text-lg text-ghibli-forest mb-4">Ringkasan Pesanan</h2>
                <div className="space-y-2 max-h-60 overflow-y-auto mb-4">
                  {checkoutItems.map(i => (
                    <div key={i.id} className="flex justify-between text-xs gap-2">
                      <span className="text-ghibli-text/70 truncate">{i.name} <span className="font-semibold">×{i.quantity}</span></span>
                      <span className="font-semibold text-ghibli-text shrink-0">{formatIDR(i.price * i.quantity)}</span>
                    </div>
                  ))}
                </div>
                <hr className="border-ghibli-forest/10 mb-3" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-ghibli-text/70"><span>Subtotal</span><span className="font-semibold">{formatIDR(checkoutTotalPrice)}</span></div>
                  <div className="flex justify-between text-ghibli-text/70"><span>Ongkir</span><span className="font-semibold">{formatIDR(shipping)}</span></div>
                  <hr className="border-ghibli-forest/10" />
                  <div className="flex justify-between text-ghibli-forest font-bold text-base"><span>Total</span><span>{formatIDR(total)}</span></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      <Modal isOpen={success} onClose={() => { }} title="">
        <div className="text-center py-4">
          <div className="text-5xl sm:text-6xl mb-4">🌿</div>
          <h2 className="font-serif text-xl text-ghibli-forest mb-2">Pembayaran Berhasil!</h2>
          <p className="text-sm text-ghibli-text/70 mb-4">
            Terima kasih telah berbelanja di Ghibli Treasures! Pesananmu sedang diproses dan akan segera dikirimkan.
          </p>
          <div className="bg-ghibli-accent-yellow/40 radius-2xl p-3 text-xs text-ghibli-text/70 mb-5">
            Nomor pesanan: <strong>GT-2026-{String(Math.floor(Math.random() * 9000) + 1000)}</strong>
          </div>
          <Link to="/" className="inline-block bg-ghibli-forest text-ghibli-cream px-6 py-3 radius-2xl font-semibold btn-pop">
            Kembali ke Beranda 🏠
          </Link>
        </div>
      </Modal>
    </div>
  );
}
