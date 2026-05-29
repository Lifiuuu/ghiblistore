import { Link } from 'react-router-dom';
import { transactions } from '../data/transactions';
import { formatIDR } from '../data/products';
import Badge from '../components/Badge';

export default function HistoryTransaksi() {
  // Use dummy transactions as "user's orders"
  const orders = transactions.slice(0, 6);

  if (orders.length === 0) return (
    <div className="min-h-screen bg-ghibli-cream flex flex-col items-center justify-center py-20 text-center px-4">
      <div className="text-8xl mb-6">📋</div>
      <h2 className="font-serif text-2xl text-ghibli-forest">Belum ada transaksi</h2>
      <p className="text-ghibli-text/60 mt-2 text-sm">Mulai berbelanja dan riwayat pesananmu akan muncul di sini!</p>
      <Link to="/katalog" className="mt-6 inline-block bg-ghibli-forest text-ghibli-cream px-8 py-3.5 radius-2xl font-semibold btn-pop shadow-soft">
        Mulai Belanja 🛍️
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-ghibli-cream">
      <div className="bg-ghibli-forest text-ghibli-cream py-10 px-6 text-center">
        <h1 className="font-serif text-2xl md:text-3xl">Riwayat Transaksi</h1>
        <p className="text-ghibli-cream/70 mt-2 text-sm">{orders.length} pesanan tercatat</p>
      </div>

      <div className="section-inner py-10">
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white radius-2xl shadow-soft p-5 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <div className="font-mono text-xs text-ghibli-text/50 mb-1">{order.orderId}</div>
                  <div className="font-serif font-semibold text-ghibli-forest">{order.items.map(i => i.name).join(', ')}</div>
                </div>
                <Badge label={order.status} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div>
                  <div className="text-xs text-ghibli-text/50 mb-0.5">Tanggal</div>
                  <div className="font-semibold text-ghibli-text">{new Date(order.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                </div>
                <div>
                  <div className="text-xs text-ghibli-text/50 mb-0.5">Produk</div>
                  <div className="font-semibold text-ghibli-text">{order.items.length} item</div>
                </div>
                <div>
                  <div className="text-xs text-ghibli-text/50 mb-0.5">Metode</div>
                  <div className="font-semibold text-ghibli-text">{order.paymentMethod}</div>
                </div>
                <div>
                  <div className="text-xs text-ghibli-text/50 mb-0.5">Total</div>
                  <div className="font-bold text-ghibli-forest">{formatIDR(order.total)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
