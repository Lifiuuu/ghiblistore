import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import Badge from '../components/Badge';

export default function DetailArtikel() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ghibli-cream">
      <div className="text-6xl mb-4">📰</div>
      <h2 className="font-serif text-2xl text-ghibli-forest">Artikel tidak ditemukan</h2>
      <Link to="/artikel" className="mt-4 text-ghibli-sky underline font-semibold">← Kembali ke Arsip</Link>
    </div>
  );

  const related = articles.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-ghibli-cream">
      {/* Cover */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img src={article.coverUrl} alt={article.title} className="w-full h-full object-cover" />
      </div>

      <div className="section-inner py-10 max-w-3xl">
        {/* Back */}
        <Link to="/artikel" className="inline-flex items-center gap-2 text-sm font-semibold text-ghibli-sky mb-6 hover:underline">
          ← Kembali ke Arsip
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge label={article.category} />
          <span className="text-xs text-ghibli-text/50">{article.readTime} min baca</span>
          <Badge label={article.status} />
        </div>

        <h1 className="font-serif text-2xl md:text-3xl text-ghibli-forest font-semibold leading-tight mb-4">{article.title}</h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-ghibli-forest/10">
          <img src={article.authorAvatar} alt={article.author} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="font-semibold text-sm text-ghibli-text">{article.author}</div>
            <div className="text-xs text-ghibli-text/50">{new Date(article.publishDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          {article.content.split('\n\n').map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <h3 key={i} className="font-serif text-lg text-ghibli-forest font-semibold mt-6 mb-2">{para.replace(/\*\*/g, '')}</h3>;
            }
            if (para.startsWith('**')) {
              const parts = para.split(/\*\*(.*?)\*\*/);
              return <p key={i} className="text-ghibli-text/80 leading-relaxed mb-4">{parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-ghibli-forest">{p}</strong> : p)}</p>;
            }
            return <p key={i} className="text-ghibli-text/80 leading-relaxed mb-4">{para}</p>;
          })}
        </div>

        {/* Tags */}
        {article.tags && (
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-ghibli-forest/10">
            {article.tags.map(tag => (
              <span key={tag} className="text-xs bg-ghibli-accent-yellow/40 text-ghibli-forest px-3 py-1 rounded-full font-semibold">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="section-inner pb-12">
          <h2 className="font-serif text-2xl text-ghibli-forest mb-6">Artikel Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(a => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      )}
    </div>
  );
}
