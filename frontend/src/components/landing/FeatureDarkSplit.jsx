import { Link } from 'react-router-dom';

export default function FeatureDarkSplit() {
  return (
    <section id="about" className="section bg-ghibli-forest text-ghibli-cream">
      <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="reveal-from-left">
          <div className="text-xs font-semibold text-ghibli-accent-yellow tracking-widest uppercase mb-3">Tentang Kami</div>
          <h2 className="text-3xl font-serif">Membawa Sihir Ghibli ke Kehidupanmu</h2>
          <p className="mt-4 text-ghibli-cream/90 leading-relaxed">
            Ghibli Treasures hadir untuk para penggemar sejati Studio Ghibli di Indonesia. Setiap produk yang kami kurasi dipilih dengan cermat untuk menghadirkan nuansa magis film-film Miyazaki ke dalam keseharian hidupmu.
          </p>
          <blockquote className="mt-6 text-lg italic font-serif text-ghibli-cream/95 border-l-2 border-ghibli-accent-yellow pl-4">
            "Kita tidak butuh petunjuk, kita perlu menemukan petualangan kita sendiri."
          </blockquote>
          <div className="mt-6 flex items-center">
            <img src="https://placehold.co/64x64/F7E9A7/2E4F3B?text=K" alt="Kiki avatar" className="w-10 h-10 rounded-full mr-3 object-cover" />
            <div className="text-sm text-ghibli-cream/80">Kiki, Kurator Ghibli Treasures</div>
          </div>
          <Link to="/katalog" className="inline-block mt-6 bg-ghibli-cream text-ghibli-forest px-6 py-3 radius-2xl font-semibold btn-pop shadow-soft">
            Jelajahi Koleksi →
          </Link>
        </div>
        <div className="relative h-64 md:h-80 reveal-from-right">
          <div className="absolute inset-0 radius-2xl overflow-hidden shadow-lg">
            <img src="https://i.pinimg.com/736x/da/41/9b/da419b3206ef6316fb6417f86bcd4335.jpg" alt="Totoro halte bus" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
