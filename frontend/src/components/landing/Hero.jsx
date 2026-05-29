import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Stable particle arrays (generated once, deterministic)
const leaves = Array.from({ length: 20 }, (_, i) => ({
  id: i, size: 12 + (i * 7) % 20, top: (i * 31 + 10) % 110, left: (i * 17 + 5) % 110,
  delay: (i * 0.4) % 5, rotation: (i * 41) % 360,
  color: ['bg-[#2E4F3B]/40', 'bg-[#2E4F3B]/50', 'bg-[#F7E9A7]/60', 'bg-[#7BA7BC]/40'][i % 4],
  anim: i % 2 === 0 ? 'animate-float-slow' : 'animate-float-medium',
}));

const sparkles = Array.from({ length: 60 }, (_, i) => ({
  id: i, size: 2 + (i * 3) % 5, top: (i * 23 + 7) % 105, left: (i * 37 + 11) % 105,
  delay: (i * 0.3) % 5,
  color: ['bg-[#F7E9A7]/90', 'bg-[#FAD6C0]/90', 'bg-white', 'bg-[#332E2C]/50', 'bg-[#7BA7BC]/80'][i % 5],
  anim: i % 3 === 0 ? 'animate-pulse-glow' : 'animate-float-slow',
}));

const slides = [
  { src: "https://i.pinimg.com/originals/05/16/ba/0516ba877c910bf80e08cc14a9a69e6f.jpg", alt: "Hutan magis Ghibli yang rindang" },
  { src: "https://i.pinimg.com/originals/c2/9b/d7/c29bd79d22dc800beb6f942edef9ece5.png", alt: "Interior studio yang hangat" },
  { src: "https://thumb.viva.id/vivabanyuwangi/1265x711/2025/05/22/682eba65960d9-api-ajaib-calcifer-roh-di-balik-keajaiban-kastil-howl_banyuwangi.jpg", alt: "Api ajaib Calcifer" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(s => (s + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="bg-ghibli-cream relative overflow-hidden pb-16 md:pb-24 lg:pb-32 pt-8 md:pt-12">
      {/* Glowing blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7BA7BC]/30 rounded-full blur-[100px] animate-pulse-glow z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FAD6C0]/30 rounded-full blur-[120px] animate-pulse-glow z-0" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-[#F7E9A7]/25 rounded-full blur-[80px] animate-pulse-glow z-0" style={{ animationDelay: '4s' }} />

      {/* Leaf particles */}
      {leaves.map(l => (
        <div key={l.id} className={`absolute shape-leaf ${l.color} ${l.anim} z-0`}
          style={{ top: `${l.top}%`, left: `${l.left}%`, width: l.size, height: l.size, transform: `rotate(${l.rotation}deg)`, animationDelay: `${l.delay}s` }} />
      ))}

      {/* Sparkle dots */}
      {sparkles.map(s => (
        <div key={s.id} className={`absolute rounded-full ${s.color} ${s.anim} z-0`}
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }} />
      ))}

      <div className="section-inner relative text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-ghibli-accent-yellow/60 text-ghibli-forest text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            ✨ Merchandise Studio Ghibli Eksklusif
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-ghibli-forest">
            Temukan Keajaiban<br />dalam Setiap Koleksi
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-3xl mx-auto text-ghibli-text/80">
            Dari boneka Totoro yang lembut hingga lampu Calcifer yang bersinar hangat — kami menghadirkan dunia sihir Studio Ghibli langsung ke tanganmu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/katalog" className="inline-block bg-ghibli-forest text-ghibli-cream px-8 py-3.5 radius-3xl shadow-lg font-semibold btn-pop">
              Lihat Katalog 🛍️
            </Link>
            <Link to="/artikel" className="inline-block border-2 border-ghibli-forest text-ghibli-forest px-8 py-3.5 radius-3xl font-semibold btn-pop hover:bg-ghibli-forest/5">
              Baca Artikel
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-16 mx-auto w-full max-w-4xl radius-2xl shadow-soft overflow-hidden mb-12">
          <div className="relative w-full bg-ghibli-cream pb-[52%]">
            {/* Dot indicators */}
            <div className="absolute left-4 top-4 z-20 flex space-x-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-ghibli-accent-peach scale-125' : 'bg-white/60'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {slides.map((slide, i) => (
              <div key={i} className={`hero-slide absolute inset-0 ${i === currentSlide ? 'active' : ''}`} data-index={i}>
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
