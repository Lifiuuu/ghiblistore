import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatIDR } from '../data/products';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white radius-3xl shadow-soft overflow-hidden card-anim is-visible group flex flex-col">
      <Link to={`/produk/${product.id}`} className="block overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold bg-ghibli-sky/20 text-ghibli-sky px-2.5 py-0.5 rounded-full">
            {product.category}
          </span>
          <span className="text-xs text-ghibli-text/50 flex items-center gap-1">
            ⭐ {product.rating}
          </span>
        </div>
        <Link to={`/produk/${product.id}`} className="font-serif font-semibold text-ghibli-forest hover:underline leading-snug mb-1">
          {product.name}
        </Link>
        <p className="text-xs text-ghibli-text/60 mb-3 flex-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-ghibli-forest/10">
          <span className="font-bold text-ghibli-forest text-base">{formatIDR(product.price)}</span>
          <button
            onClick={handleAdd}
            className={`text-xs font-semibold px-3 py-1.5 radius-full transition btn-pop ${added ? 'bg-ghibli-accent-yellow text-ghibli-forest' : 'bg-ghibli-forest text-ghibli-cream hover:bg-ghibli-forest/90'}`}
          >
            {added ? '✓ Ditambahkan' : '+ Keranjang'}
          </button>
        </div>
      </div>
    </div>
  );
}
