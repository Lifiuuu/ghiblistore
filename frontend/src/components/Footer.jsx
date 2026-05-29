import { useMemo } from 'react';
import { Link } from 'react-router-dom';

// Deterministic particle arrays (stable across renders)
const leaves = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: 10 + (i * 7) % 14,
  top: (i * 31 + 5) % 105,
  left: (i * 17 + 3) % 105,
  delay: (i * 0.4) % 6,
  rotation: (i * 41) % 360,
  color: ['bg-[#2E4F3B]/30', 'bg-[#F7E9A7]/40', 'bg-[#7BA7BC]/30', 'bg-[#FAD6C0]/30'][i % 4],
  anim: i % 2 === 0 ? 'animate-float-slow' : 'animate-float-medium',
}));

const sparkles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: 2 + (i * 3) % 4,
  top: (i * 23 + 7) % 102,
  left: (i * 37 + 11) % 102,
  delay: (i * 0.3) % 5,
  color: ['bg-[#F7E9A7]/80', 'bg-[#FAD6C0]/80', 'bg-white', 'bg-[#7BA7BC]/70'][i % 4],
  anim: i % 3 === 0 ? 'animate-pulse-glow' : 'animate-float-slow',
}));

export default function Footer() {
  return (
    <footer className="section bg-ghibli-forest text-ghibli-cream relative overflow-hidden">

      {/* Glowing blobs */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#F7E9A7]/10 rounded-full blur-[80px] animate-pulse-glow z-0" />
      <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] bg-[#FAD6C0]/10 rounded-full blur-[100px] animate-pulse-glow z-0" style={{ animationDelay: '3s' }} />

      {/* Leaf particles */}
      {leaves.map(l => (
        <div key={l.id} className={`absolute shape-leaf ${l.color} ${l.anim} z-0`}
          style={{ top: `${l.top}%`, left: `${l.left}%`, width: l.size, height: l.size, transform: `rotate(${l.rotation}deg)`, animationDelay: `${l.delay}s` }} />
      ))}

      {/* Sparkles */}
      {sparkles.map(s => (
        <div key={s.id} className={`absolute rounded-full ${s.color} ${s.anim} z-0`}
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }} />
      ))}

      <div className="section-inner py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-sm gap-8">

          <div className="flex justify-center md:justify-start space-x-6">
            <Link to="/katalog" className="text-ghibli-cream/80 hover:text-ghibli-cream transition">Katalog</Link>
            <Link to="/artikel" className="text-ghibli-cream/80 hover:text-ghibli-cream transition">Artikel</Link>
            <Link to="/history" className="text-ghibli-cream/80 hover:text-ghibli-cream transition">Pesananku</Link>
          </div>

          <div className="flex justify-center order-first md:order-none">
            <div className="font-serif text-2xl tracking-widest uppercase">🌿 Ghibli Treasures</div>
          </div>

          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-ghibli-cream/80 hover:text-ghibli-cream transition">Tentang Kami</a>
            <a href="#" className="text-ghibli-cream/80 hover:text-ghibli-cream transition">FAQ</a>
            <Link to="/admin" className="text-ghibli-cream/80 hover:text-ghibli-cream transition">Admin</Link>
          </div>
        </div>

        <hr className="border-t border-ghibli-cream/10 my-8 w-full" />

        {/* Palette swatches */}
        <div className="flex justify-center space-x-4 mb-6">
          {[
            { color: '#2E4F3B', label: 'Forest Green' },
            { color: '#7BA7BC', label: 'Sky Blue' },
            { color: '#FAD6C0', label: 'Sunset Peach' },
            { color: '#F7E9A7', label: 'Ghibli Gold' },
            { color: '#F9F6F0', label: 'Soft Cream' },
          ].map(sw => (
            <span key={sw.label} title={sw.label}
              className="w-4 h-4 border border-ghibli-cream/30 rounded-full shadow-sm"
              style={{ backgroundColor: sw.color }} />
          ))}
        </div>

        <div className="text-center text-xs tracking-wide text-ghibli-cream/60">
          © 2024 — 2026 Ghibli Treasures. Dibuat dengan cinta dan sihir.
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
