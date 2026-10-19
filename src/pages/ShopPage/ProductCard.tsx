import { useState, memo, useCallback } from 'react';
import { Star, Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import type { IProduct } from '@/data/products';
import { toast } from 'sonner';

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        const filled = i < fullStars;
        const half = i === fullStars && hasHalf;
        return (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${
              filled || half ? 'fill-amber-400 text-amber-400' : 'text-border'
            }`}
          />
        );
      })}
      <span className="ml-1 text-xs text-muted-foreground tabular-nums">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function ProductCard({ product, index }: { product: IProduct; index: number }) {
  const { addToCart, getItemQuantity } = useCart();
  const [added, setAdded] = useState(false);
  const qty = getItemQuantity(product.id);

  const handleAddToCart = useCallback(() => {
    addToCart(product);
    setAdded(true);
    toast.success(`Added ${product.name} to cart`);
    const timer = setTimeout(() => setAdded(false), 1200);
    return () => clearTimeout(timer);
  }, [addToCart, product]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="group h-full overflow-hidden rounded-lg border border-border/50 bg-card transition-all duration-200 hover:shadow-md">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-background/90 px-2.5 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
            {product.category}
          </span>
          {qty > 0 && (
            <div className="absolute right-3 top-3 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-primary px-1.5 text-xs font-bold text-primary-foreground">
              {qty}
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-1.5">
            <h3 className="font-medium text-foreground line-clamp-1">{product.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
              {product.description}
            </p>
          </div>
          <StarRating rating={product.rating} />
          <div className="flex items-center justify-between pt-1">
            <span className="text-lg font-bold tabular-nums text-foreground">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-1.5 h-9 px-3 rounded-md text-sm font-medium transition-all ${
                added
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-primary text-primary-foreground hover:opacity-90 active:opacity-80'
              }`}
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" />
                  Added
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Add
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(ProductCard);
