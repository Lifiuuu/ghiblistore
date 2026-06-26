import { Link } from 'react-router-dom';
import koleksiBonekaImg from '../../assets/koleksi-boneka.jpg';
import dekorasiImg from '../../assets/dekorasi.jpg';
import eksklusifImg from '../../assets/eksklusif.jpg';
import aksesorisImg from '../../assets/aksesoris.jpg';

const cards = [
  { id: 'boneka', img: koleksiBonekaImg, title: "Koleksi Boneka", desc: "Totoro, Ponyo, Catbus, boneka plush premium untuk semua usia.", link: "/katalog?cat=Boneka" },
  { id: 'dekorasi', img: dekorasiImg, title: "Dekorasi Rumah", desc: "Hadirkan nuansa Ghibli di setiap sudut ruanganmu.", link: "/katalog?cat=Dekorasi" },
  { id: 'koleksi', img: eksklusifImg, title: "Edisi Koleksi", desc: "Figurin langka dan vinyl eksklusif untuk kolektor sejati.", link: "/katalog?cat=Koleksi" },
  { id: 'aksesori', img: aksesorisImg, title: "Aksesori", desc: "Pin, tote bag, payung, dan lebih banyak aksesori Ghibli.", link: "/katalog?cat=Aksesori" },
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
              <img src={card.img} alt={card.title} className="w-full aspect-video object-cover shrink-0" />
              <div className="p-6 pb-8 sm:pb-10 text-left flex flex-col flex-1">
                <div className="font-serif text-lg text-white">{card.title}</div>
                <p className="mt-2 text-sm text-white/80 min-h-[3.5rem] sm:min-h-[4.5rem]">{card.desc}</p>
                <div className="mt-4 mt-auto">
                  <Link to={card.link} className="inline-block w-full text-center bg-ghibli-cream text-ghibli-forest px-4 py-2 radius-full text-sm font-semibold shadow-lg btn-pop">
                    Jelajahi
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
