import { useState, useMemo } from 'react';
import { articles, articleCategories } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function ArsipArtikel() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = useMemo(() => {
    return articles.filter(a => {
      const matchCat = activeCategory === 'Semua' || a.category === activeCategory;
      const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-ghibli-cream">
      {/* Banner */}
      <div className="bg-ghibli-forest text-ghibli-cream py-12 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F7E9A7]/5 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="text-xs font-semibold text-ghibli-accent-yellow tracking-widest uppercase mb-2">Pengetahuan & Inspirasi</div>
          <h1 className="font-serif text-3xl md:text-4xl">Arsip Artikel</h1>
          <p className="text-ghibli-cream/70 mt-2 text-sm">Tips, cerita, dan berita seputar dunia Studio Ghibli</p>
        </div>
      </div>

      <div className="section-inner py-10">
        {/* Search */}
        <div className="relative mb-6">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ghibli-text/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            id="search-artikel"
            placeholder="Cari artikel..."
            value={search}
            onChange={e => { setSearch(e.target.value); setActiveCategory('Semua'); }}
            className="w-full pl-10 pr-4 py-3 radius-2xl border border-ghibli-forest/20 bg-white text-ghibli-text text-sm focus:outline-none focus:ring-2 focus:ring-ghibli-sky/40 shadow-soft-sm max-w-full"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {articleCategories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setSearch(''); }}
              className={`px-4 py-1.5 radius-full text-sm font-semibold transition btn-pop ${activeCategory === cat ? 'bg-ghibli-forest text-ghibli-cream shadow-soft-sm' : 'bg-white border border-ghibli-forest/20 text-ghibli-text/70 hover:border-ghibli-forest/50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-xs text-ghibli-text/50 mb-5">{filtered.length} artikel ditemukan</p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📰</div>
            <p className="font-serif text-ghibli-forest text-xl">Artikel tidak ditemukan</p>
            <button onClick={() => { setSearch(''); setActiveCategory('Semua'); }} className="mt-3 text-ghibli-sky font-semibold text-sm underline">Reset filter</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(a => <ArticleCard key={a.id} article={a} />)}
          </div>
        )}
      </div>
    </div>
  );
}
