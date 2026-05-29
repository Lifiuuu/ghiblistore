import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatIDR } from '../data/products';

export default function Keranjang() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) return (
    <div className="min-h-screen bg-ghibli-cream flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="text-6xl sm:text-8xl mb-6">🛒</div>
      <h2 className="font-serif text-2xl text-ghibli-forest">Keranjangmu masih kosong</h2>
      <p className="text-ghibli-text/60 mt-2 text-sm max-w-sm">Tambahkan produk favorit Studio Ghibli ke keranjangmu dan mulai berbelanja!</p>
      <Link to="/katalog" className="mt-6 inline-block bg-ghibli-forest text-ghibli-cream px-8 py-3.5 radius-2xl font-semibold btn-pop shadow-soft">
        Jelajahi Katalog 🛍️
      </Link>
    </div>
  );

  const shipping = 25000;
  const total = totalPrice + shipping;

  return (
    <div className="min-h-screen bg-ghibli-cream">
      <div className="section-inner py-10">
        <h1 className="font-serif text-2xl md:text-3xl text-ghibli-forest mb-8">🛒 Keranjang Belanja</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items list */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white radius-2xl shadow-soft p-4 flex gap-4 items-start">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover radius-2xl shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold text-ghibli-sky bg-ghibli-sky/10 px-2 py-0.5 rounded-full">{item.category}</span>
                      <h3 className="font-serif font-semibold text-ghibli-forest mt-1 text-sm">{item.name}</h3>
                      <div className="text-ghibli-forest font-bold mt-1">{formatIDR(item.price)}</div>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-ghibli-text/30 hover:text-red-400 transition p-1" aria-label="Hapus">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-ghibli-forest/20 radius-full overflow-hidden">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}
                        className="w-8 h-8 flex items-center justify-center text-ghibli-forest hover:bg-ghibli-forest/10 disabled:opacity-30 disabled:cursor-not-allowed transition text-sm font-bold">−</button>
                      <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-ghibli-forest hover:bg-ghibli-forest/10 transition text-sm font-bold">+</button>
                    </div>
                    <div className="font-bold text-ghibli-forest">{formatIDR(item.price * item.quantity)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white radius-2xl shadow-soft p-6 lg:sticky lg:top-24">
              <h2 className="font-serif text-lg text-ghibli-forest mb-4">Ringkasan Pesanan</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-ghibli-text/70">
                  <span>Subtotal ({items.length} produk)</span>
                  <span className="font-semibold">{formatIDR(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-ghibli-text/70">
                  <span>Ongkos Kirim</span>
                  <span className="font-semibold">{formatIDR(shipping)}</span>
                </div>
                <hr className="border-ghibli-forest/10" />
                <div className="flex justify-between text-ghibli-forest font-bold text-base">
                  <span>Total</span>
                  <span>{formatIDR(total)}</span>
                </div>
              </div>
              <Link to="/pembayaran" className="block w-full bg-ghibli-forest text-ghibli-cream py-3.5 radius-2xl font-semibold text-center mt-5 btn-pop shadow-soft">
                Lanjut ke Pembayaran →
              </Link>
              <Link to="/katalog" className="block w-full text-center text-sm text-ghibli-text/60 hover:text-ghibli-forest mt-3 transition">
                ← Lanjut Belanja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
