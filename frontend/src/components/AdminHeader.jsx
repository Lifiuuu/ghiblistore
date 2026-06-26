import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/admin': 'Dashboard',
  '/admin/produk': 'Kelola Produk',
  '/admin/artikel': 'Kelola Artikel',
  '/admin/pengguna': 'Kelola Pengguna',
  '/admin/transaksi': 'Kelola Transaksi',
};

export default function AdminHeader({ onToggleSidebar = () => {} }) {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] || 'Admin Panel';

  return (
    <header className="bg-ghibli-cream border-b border-ghibli-forest/10 px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-soft-sm">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="sm:hidden p-2 rounded-md text-ghibli-forest hover:bg-ghibli-cream/80">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div>
          <h1 className="font-serif text-xl font-semibold text-ghibli-forest">{title}</h1>
          <p className="text-xs text-ghibli-text/50 mt-0.5">Ghibli Treasures Admin Panel</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative p-2 text-ghibli-text/60 hover:text-ghibli-forest transition">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-ghibli-accent-peach rounded-full" />
        </button>

        {/* Admin Avatar */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-ghibli-forest/10 flex items-center justify-center text-ghibli-forest font-bold text-xs border border-ghibli-forest/20">
            YM
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-ghibli-text">Yubaba Manager</div>
            <div className="text-[10px] text-ghibli-text/50">Super Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
