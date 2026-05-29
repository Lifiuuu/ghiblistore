import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import ScrollToTop from './components/ScrollToTop';

// Public pages
import LandingPage from './pages/LandingPage';
import KatalogProduk from './pages/KatalogProduk';
import DetailProduk from './pages/DetailProduk';
import Keranjang from './pages/Keranjang';
import Pembayaran from './pages/Pembayaran';
import HistoryTransaksi from './pages/HistoryTransaksi';
import ArsipArtikel from './pages/ArsipArtikel';
import DetailArtikel from './pages/DetailArtikel';

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminKelolaProdk from './pages/admin/AdminKelolaProdk';
import AdminKelolaArtikel from './pages/admin/AdminKelolaArtikel';
import AdminKelolaUser from './pages/admin/AdminKelolaUser';
import AdminKelolaTransaksi from './pages/admin/AdminKelolaTransaksi';

export default function App() {
  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* Public store routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/katalog" element={<KatalogProduk />} />
            <Route path="/produk/:id" element={<DetailProduk />} />
            <Route path="/keranjang" element={<Keranjang />} />
            <Route path="/pembayaran" element={<Pembayaran />} />
            <Route path="/history" element={<HistoryTransaksi />} />
            <Route path="/artikel" element={<ArsipArtikel />} />
            <Route path="/artikel/:id" element={<DetailArtikel />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="produk" element={<AdminKelolaProdk />} />
            <Route path="artikel" element={<AdminKelolaArtikel />} />
            <Route path="pengguna" element={<AdminKelolaUser />} />
            <Route path="transaksi" element={<AdminKelolaTransaksi />} />
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}
