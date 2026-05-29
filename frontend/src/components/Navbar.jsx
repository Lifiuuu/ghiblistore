import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/katalog', label: 'Katalog' },
    { to: '/artikel', label: 'Artikel' },
    { to: '/history', label: 'Pesananku' },
  ];

  return (
    <nav className="bg-ghibli-cream sticky top-0 z-50 shadow-soft-sm border-b border-ghibli-forest/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-[72px]">

          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-wide text-ghibli-forest hover:opacity-80 transition">
            🌿 Ghibli Treasures
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-base font-semibold transition hover:text-ghibli-forest ${isActive ? 'text-ghibli-forest border-b-2 border-ghibli-forest pb-0.5' : 'text-ghibli-text/70'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/keranjang" className="relative p-2 text-ghibli-text hover:text-ghibli-forest transition">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-ghibli-forest text-ghibli-cream text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center min-w-[18px] min-h-[18px] px-1">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/admin" className="bg-ghibli-forest text-ghibli-cream px-5 py-2 radius-2xl text-sm font-semibold shadow-soft btn-pop">
              Admin
            </Link>
          </div>

          {/* Mobile: Cart + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/keranjang" className="relative p-2 text-ghibli-text">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-ghibli-forest text-ghibli-cream text-[10px] font-bold min-w-[18px] min-h-[18px] px-1 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-ghibli-text hover:text-ghibli-forest transition"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-ghibli-cream shadow-lg rounded-b-2xl border-t border-ghibli-forest/10 animate-slide-down z-40">
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-semibold py-2 transition ${isActive ? 'text-ghibli-forest' : 'text-ghibli-text/70 hover:text-ghibli-forest'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-ghibli-forest text-ghibli-cream radius-2xl px-6 py-2.5 text-sm font-semibold mt-2"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
