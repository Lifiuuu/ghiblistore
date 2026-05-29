import { Link } from 'react-router-dom';

export default function ArticleCard({ article }) {
  const statusColor = article.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700';

  return (
    <div className="bg-white radius-3xl shadow-soft overflow-hidden card-anim is-visible group flex flex-col">
      <Link to={`/artikel/${article.id}`} className="block overflow-hidden">
        <img
          src={article.coverUrl}
          alt={article.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-xs font-semibold bg-ghibli-accent-peach/60 text-ghibli-forest px-2.5 py-0.5 rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-ghibli-text/50">{article.readTime} min baca</span>
        </div>
        <Link to={`/artikel/${article.id}`} className="font-serif font-semibold text-ghibli-forest hover:underline leading-snug mb-2 line-clamp-2">
          {article.title}
        </Link>
        <p className="text-xs text-ghibli-text/60 mb-4 flex-1 line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center gap-3 pt-3 border-t border-ghibli-forest/10">
          <img src={article.authorAvatar} alt={article.author} className="w-7 h-7 rounded-full object-cover" />
          <div>
            <div className="text-xs font-semibold text-ghibli-text">{article.author}</div>
            <div className="text-[10px] text-ghibli-text/50">{new Date(article.publishDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
