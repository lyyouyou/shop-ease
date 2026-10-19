import { useState, memo } from 'react';
import { Filter, ArrowUpDown, X } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/data/products';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  resultCount: number;
}

function FilterBar({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  resultCount,
}: FilterBarProps) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <>
      <div className="sticky top-16 z-40 border-b border-border/40 bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
          <div className="flex items-center justify-between gap-3">
            {/* Desktop Categories */}
            <div className="hidden md:flex flex-wrap items-center gap-2">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`h-8 px-3 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile filter button */}
            <button
              className="md:hidden flex items-center gap-2 h-9 px-3 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-accent transition-colors"
              onClick={() => setMobileFilterOpen(true)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-sm text-muted-foreground">
                {resultCount} {resultCount === 1 ? 'product' : 'products'}
              </span>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value as SortOption)}
                  className="h-9 w-[160px] text-sm rounded-md border border-input bg-background px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 animate-fade-in">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[280px] bg-card shadow-xl">
            <div className="flex items-center justify-between px-4 py-4 border-b border-border/60">
              <h2 className="text-lg font-semibold text-foreground">Categories</h2>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-2">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    onCategoryChange(cat);
                    setMobileFilterOpen(false);
                  }}
                  className={`h-10 px-4 rounded-md text-sm font-medium text-left transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(FilterBar);
