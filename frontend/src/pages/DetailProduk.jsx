import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, formatIDR } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export default function DetailProduk() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(false);

  if (!product) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ghibli-cream">
      <div className="text-6xl mb-4">🍃</div>
      <h2 className="font-serif text-2xl text-ghibli-forest">Produk tidak ditemukan</h2>
      <Link to="/katalog" className="mt-4 text-ghibli-sky underline font-semibold">← Kembali ke Katalog</Link>
    </div>
  );

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, qty);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, qty);
    navigate('/pembayaran', { state: { selectedIds: [product.id] } });
  };

  return (
    <div className="min-h-screen bg-ghibli-cream">
      {/* Toast */}
      {toast && (
        <div className="fixed top-20 right-4 z-50 bg-ghibli-forest text-ghibli-cream px-5 py-3 radius-2xl shadow-soft animate-slide-down text-sm font-semibold">
          ✓ Ditambahkan ke keranjang!
        </div>
      )}

      <div className="section-inner py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-ghibli-text/50 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-ghibli-forest">Beranda</Link>
          <span>/</span>
          <Link to="/katalog" className="hover:text-ghibli-forest">Katalog</Link>
          <span>/</span>
          <span className="text-ghibli-forest font-semibold truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="radius-3xl overflow-hidden shadow-soft bg-white aspect-square flex items-center justify-center p-4">
            <img src={product.imageUrl} alt={product.name} className="max-w-full max-h-full object-contain" />
          </div>

          {/* Info */}
          <div>
            <span className="inline-block text-xs font-semibold bg-ghibli-sky/20 text-ghibli-sky px-3 py-1 rounded-full mb-3">
              {product.category}
            </span>
            <h1 className="font-serif text-2xl md:text-3xl text-ghibli-forest font-semibold">{product.name}</h1>
            <div className="flex items-center gap-3 mt-2 mb-4">
              <span className="text-sm text-ghibli-text/60">⭐ {product.rating}</span>
              <span className="text-sm text-ghibli-text/40">•</span>
              <span className="text-sm text-ghibli-text/60">{product.sold} terjual</span>
              <span className="text-sm text-ghibli-text/40">•</span>
              <span className={`text-sm font-semibold ${product.stock > 10 ? 'text-emerald-600' : product.stock > 0 ? 'text-amber-600' : 'text-red-600'}`}>
                Stok: {product.stock}
              </span>
            </div>
            <div className="text-2xl font-bold text-ghibli-forest mb-4">{formatIDR(product.price)}</div>
            <p className="text-ghibli-text/70 leading-relaxed mb-6 text-sm">{product.description}</p>

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-ghibli-text">Jumlah:</span>
              <div className="flex items-center border border-ghibli-forest/20 radius-2xl overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} disabled={qty === 1}
                  className="w-10 h-10 flex items-center justify-center text-ghibli-forest hover:bg-ghibli-forest/10 disabled:opacity-30 disabled:cursor-not-allowed transition font-bold">−</button>
                <span className="w-12 text-center font-semibold text-ghibli-text">{qty}</span>
                <button onClick={() => setQty(q => Math.min(product.stock, q + 1))} disabled={qty === product.stock}
                  className="w-10 h-10 flex items-center justify-center text-ghibli-forest hover:bg-ghibli-forest/10 disabled:opacity-30 disabled:cursor-not-allowed transition font-bold">+</button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleAdd} disabled={product.stock === 0}
                className="flex-1 bg-ghibli-forest text-ghibli-cream py-3.5 radius-2xl font-semibold btn-pop shadow-soft disabled:opacity-50 disabled:cursor-not-allowed">
                Tambah ke Keranjang
              </button>
              <button onClick={handleBuyNow} disabled={product.stock === 0} className="flex-1 border-2 border-ghibli-forest text-ghibli-forest py-3.5 radius-2xl font-semibold text-center btn-pop hover:bg-ghibli-forest/5 disabled:opacity-50 disabled:cursor-not-allowed">
                Beli Sekarang
              </button>
            </div>

            <div className="mt-4 p-4 bg-ghibli-accent-yellow/20 radius-2xl text-xs text-ghibli-text/60">
              🚚 Estimasi pengiriman 3-5 hari kerja • 🔒 Pembayaran aman & terpercaya
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-ghibli-forest mb-6">Produk Sejenis</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
