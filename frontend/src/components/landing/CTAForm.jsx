import { useState } from 'react';

export default function CTAForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) setSubmitted(true);
  };

  return (
    <section id="subscribe" className="section bg-ghibli-cream">
      <div className="section-inner max-w-md">
        <div className="text-center mb-6">
          <div className="text-xs font-semibold text-ghibli-sky tracking-widest uppercase mb-2">Komunitas Kami</div>
          <h3 className="text-xl font-serif text-ghibli-forest">Bergabung dengan Komunitas Magis</h3>
          <p className="text-sm mt-2 text-ghibli-text/70">
            Daftarkan dirimu untuk mendapatkan notifikasi produk baru, promo eksklusif, dan artikel Ghibli pilihan setiap minggu.
          </p>
        </div>

        {submitted ? (
          <div className="bg-ghibli-accent-yellow/50 radius-2xl p-6 text-center shadow-soft">
            <div className="text-3xl mb-2">🌿</div>
            <div className="font-serif text-lg text-ghibli-forest">Selamat Datang di Komunitas!</div>
            <p className="text-sm text-ghibli-text/70 mt-2">Kami telah mengirim email konfirmasi ke <strong>{form.email}</strong>.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-cream-soft radius-2xl p-6 shadow-soft">
            <label htmlFor="cta-email" className="block text-sm font-semibold text-ghibli-text mb-1">Email</label>
            <input
              id="cta-email"
              type="email"
              placeholder="kamu@ghiblitreasures.id"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              required
              className="w-full mb-4 p-3 border border-ghibli-forest/20 bg-white radius-2xl text-ghibli-text text-sm focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40"
            />
            <label htmlFor="cta-password" className="block text-sm font-semibold text-ghibli-text mb-1">Password</label>
            <input
              id="cta-password"
              type="password"
              placeholder="Buat password yang kuat"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              required
              className="w-full mb-5 p-3 border border-ghibli-forest/20 bg-white radius-2xl text-ghibli-text text-sm focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40"
            />
            <button type="submit" className="w-full bg-ghibli-forest text-ghibli-cream p-3 radius-3xl shadow-lg font-semibold btn-pop">
              Kirimkan Sihirnya
            </button>
            <p className="mt-3 text-xs text-ghibli-text/60 text-center">Tidak perlu mantra — hanya selamat datang yang hangat.</p>
          </form>
        )}
      </div>
    </section>
  );
}
