export default function TestimonialSimple() {
  return (
    <section className="section bg-ghibli-cream section--compact text-center pb-12 md:pb-16">
      <div className="section-inner">
        <blockquote className="mx-auto max-w-3xl text-lg md:text-xl italic text-ghibli-text/90 font-serif">
          "Mereka bilang api yang terbaik menyala paling terang ketika keadaan paling gelap."
        </blockquote>
        <div className="mt-6 flex flex-col items-center">
          <div className="w-12 h-12 bg-ghibli-sky rounded-full overflow-hidden shadow-lg">
            <img src="https://i.pinimg.com/736x/d7/3f/31/d73f31af61f311e14a6cfcebbae285ed.jpg" alt="Sophie Hatter" className="w-full h-full object-cover" />
          </div>
          <div className="mt-2 text-sm font-semibold text-ghibli-text/80">Sophie Hatter</div>
          <div className="text-xs text-ghibli-text/50">Pelanggan Setia Ghibli Treasures</div>
        </div>
      </div>
    </section>
  );
}
