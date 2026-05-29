import { useState, useMemo } from 'react';
import { products, categories, formatIDR } from '../data/products';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const PER_PAGE = 12;

export default function KatalogProduk() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat = activeCategory === 'Semua' || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleCategory = (cat) => { setActiveCategory(cat); setPage(1); };
  const handleSearch = (e) => { setSearch(e.target.value); setPage(1); };

  return (
    <div className="min-h-screen bg-ghibli-cream">
      {/* Hero banner */}
      <div className="bg-ghibli-forest text-ghibli-cream py-12 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F7E9A7]/5 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="text-xs font-semibold text-ghibli-accent-yellow tracking-widest uppercase mb-2">Temukan Keajaiban</div>
          <h1 className="font-serif text-3xl md:text-4xl">Katalog Produk</h1>
          <p className="text-ghibli-cream/70 mt-2 text-sm">{products.length} merchandise eksklusif Studio Ghibli</p>
        </div>
      </div>

      <div className="section-inner py-10">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ghibli-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cari produk Ghibli..."
              value={search}
              onChange={handleSearch}
              id="search-produk"
              className="w-full pl-10 pr-4 py-3 radius-2xl border border-ghibli-forest/20 bg-white text-ghibli-text text-sm focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40 shadow-soft-sm"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-1.5 radius-full text-sm font-semibold transition btn-pop ${activeCategory === cat ? 'bg-ghibli-forest text-ghibli-cream shadow-soft-sm' : 'bg-white border border-ghibli-forest/20 text-ghibli-text/70 hover:border-ghibli-forest/50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-xs text-ghibli-text/50 mb-5">
          Menampilkan {paginated.length} dari {filtered.length} produk
          {activeCategory !== 'Semua' && ` dalam kategori "${activeCategory}"`}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl sm:text-6xl mb-4">🍃</div>
            <p className="font-serif text-ghibli-forest text-xl">Produk tidak ditemukan</p>
            <p className="text-ghibli-text/60 text-sm mt-2">Coba kata kunci atau kategori lain</p>
            <button onClick={() => { setSearch(''); setActiveCategory('Semua'); }} className="mt-4 text-ghibli-sky font-semibold text-sm underline">Reset filter</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginated.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}
