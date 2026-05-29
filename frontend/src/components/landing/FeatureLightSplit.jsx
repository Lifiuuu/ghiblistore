import { Link } from 'react-router-dom';

export default function FeatureLightSplit() {
  return (
    <section id="stories" className="section md:min-h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[80vh] section-bleed">
        {/* Left: green image panel */}
        <div className="bg-ghibli-forest flex items-center justify-center p-8">
          <div className="w-full md:w-[520px] h-80 md:h-[560px] radius-3xl overflow-hidden flex items-center justify-center">
            <img
              src="https://i.pinimg.com/736x/2c/e4/b4/2ce4b495a4ecd58fda1b2ad4def4e5ff.jpg"
              alt="Karakter Ghibli yang berani"
              className="w-full h-full object-cover radius-2xl shadow-soft"
            />
          </div>
        </div>

        {/* Right: cream content panel */}
        <div className="bg-ghibli-cream flex items-center">
          <div className="section-inner py-12">
            <div className="text-xs font-semibold text-ghibli-sky tracking-widest uppercase mb-3">Kisah di Balik Koleksi</div>
            <h3 className="text-2xl md:text-3xl font-serif text-ghibli-forest">Karakter dengan Keberanian dan Hati</h3>
            <p className="mt-4 text-base md:text-lg max-w-xl text-ghibli-text/80 leading-relaxed">
              Setiap produk Ghibli Treasures terinspirasi oleh karakter-karakter berjiwa kuat yang telah menyentuh jutaan hati. Dari Chihiro yang tak kenal menyerah hingga San yang menjaga alam — mereka mengingatkan kita bahwa keberanian hadir dalam bentuk yang paling lembut.
            </p>
            <Link to="/artikel" className="inline-block mt-6 px-6 py-3 bg-ghibli-forest text-ghibli-cream radius-2xl font-semibold shadow-lg btn-pop">
              Baca Artikel Kami →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
