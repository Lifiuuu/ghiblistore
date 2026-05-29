import { Link } from 'react-router-dom';

const cards = [
  { id: 'boneka', img: "https://placehold.co/400x300/A8D8EA/2E4F3B?text=Koleksi+Boneka", title: "Koleksi Boneka", desc: "Totoro, Ponyo, Catbus — boneka plush premium untuk semua usia.", link: "/katalog?cat=Boneka" },
  { id: 'dekorasi', img: "https://placehold.co/400x300/FAD6C0/2E4F3B?text=Dekorasi+Rumah", title: "Dekorasi Rumah", desc: "Hadirkan nuansa Ghibli di setiap sudut ruanganmu.", link: "/katalog?cat=Dekorasi" },
  { id: 'koleksi', img: "https://placehold.co/400x300/B5EAD7/2E4F3B?text=Koleksi+Edisi", title: "Edisi Koleksi", desc: "Figurin langka dan vinyl eksklusif untuk kolektor sejati.", link: "/katalog?cat=Koleksi" },
  { id: 'aksesori', img: "https://placehold.co/400x300/F7E9A7/2E4F3B?text=Aksesori", title: "Aksesori", desc: "Pin, tote bag, payung, dan lebih banyak aksesori Ghibli.", link: "/katalog?cat=Aksesori" },
];

export default function FeatureGridCards() {
  return (
    <section id="features" className="section bg-ghibli-cream">
      <div className="section-inner text-center">
        <div className="text-xs font-semibold text-ghibli-sky tracking-widest uppercase mb-3">Kategori Pilihan</div>
        <h3 className="text-3xl font-serif text-ghibli-forest">Temukan Keajaiban Kami</h3>
        <p className="mt-3 text-sm text-ghibli-text/70 max-w-md mx-auto">Koleksi merchandise pilihan dari dunia-dunia ajaib Studio Ghibli.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {cards.map((card, i) => (
            <div key={card.id} id={card.id} className="bg-ghibli-forest radius-3xl shadow-soft overflow-hidden card-anim is-visible flex flex-col h-full"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6 pb-8 sm:pb-10 text-left flex flex-col flex-1">
                <div className="font-serif text-lg text-white">{card.title}</div>
                <p className="mt-2 text-sm text-white/80 min-h-[3.5rem] sm:min-h-[4.5rem]">{card.desc}</p>
                <div className="mt-4 mt-auto">
                  <Link to={card.link} className="inline-block w-full text-center bg-ghibli-cream text-ghibli-forest px-4 py-2 radius-full text-sm font-semibold shadow-lg btn-pop">
                    Jelajahi →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
