import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/produk', label: 'Kelola Produk' },
  { to: '/admin/artikel', label: 'Kelola Artikel' },
  { to: '/admin/pengguna', label: 'Kelola Pengguna' },
  { to: '/admin/transaksi', label: 'Kelola Transaksi' },
];

export default function AdminSidebar({ isOpen = false, onClose = () => {} }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="admin-sidebar w-64 shrink-0 bg-ghibli-forest text-ghibli-cream flex flex-col h-screen sticky top-0 overflow-y-auto hidden sm:flex">
      {/* Brand */}
      <div className="p-6 border-b border-ghibli-cream/10">
        <Link to="/" className="font-serif text-xl tracking-wide hover:opacity-80 transition block">
          🌿 Ghibli Treasures
        </Link>
        <div className="text-xs text-ghibli-cream/50 mt-1 font-semibold uppercase tracking-widest">Admin Panel</div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 radius-2xl text-sm font-semibold transition ${
                isActive
                  ? 'bg-ghibli-cream text-ghibli-forest shadow-soft-sm'
                  : 'text-ghibli-cream/70 hover:bg-ghibli-cream/10 hover:text-ghibli-cream'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-ghibli-cream/10">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 radius-2xl text-sm font-semibold text-ghibli-cream/60 hover:bg-ghibli-cream/10 hover:text-ghibli-cream transition w-full">
          Lihat Toko
        </Link>
        <button className="flex items-center gap-3 px-4 py-3 radius-2xl text-sm font-semibold text-ghibli-cream/60 hover:bg-ghibli-cream/10 hover:text-ghibli-cream transition w-full mt-1">
          Logout
        </button>
      </div>
      </aside>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 sm:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
      />

      {/* Mobile sidebar panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-ghibli-forest text-ghibli-cream flex flex-col overflow-y-auto transform transition-transform duration-200 sm:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-ghibli-cream/10 flex items-center justify-between">
          <Link to="/" className="font-serif text-lg tracking-wide hover:opacity-80 transition block">
            Ghibli Treasures
          </Link>
          <button onClick={onClose} className="p-2 text-ghibli-cream/80 hover:text-ghibli-cream">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-3 radius-2xl text-sm font-semibold transition ${
                  isActive
                    ? 'bg-ghibli-cream text-ghibli-forest shadow-soft-sm'
                    : 'text-ghibli-cream/70 hover:bg-ghibli-cream/10 hover:text-ghibli-cream'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto p-4 border-t border-ghibli-cream/10">
          <Link to="/" className="block px-4 py-3 radius-2xl text-sm font-semibold text-ghibli-cream/60 hover:bg-ghibli-cream/10 hover:text-ghibli-cream transition w-full">
            Lihat Toko
          </Link>
          <button className="block w-full text-left px-4 py-3 radius-2xl text-sm font-semibold text-ghibli-cream/60 hover:bg-ghibli-cream/10 hover:text-ghibli-cream transition mt-1">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
