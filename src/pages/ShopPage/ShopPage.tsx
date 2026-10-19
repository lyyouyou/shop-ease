import { useState, useMemo, useCallback, useEffect, memo } from 'react';
import Header from '@/components/Header';
import FilterBar, { type SortOption } from './FilterBar';
import ProductGrid from './ProductGrid';
import { MOCK_PRODUCTS } from '@/data/products';

function ShopPage() {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Debounce search 200ms
  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(searchInput), 200);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    if (category !== 'All') {
      result = result.filter((p) => p.category === category);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [category, searchQuery, sortBy]);

  const handleSearchChange = useCallback((v: string) => setSearchInput(v), []);
  const handleCategoryChange = useCallback((c: string) => setCategory(c), []);
  const handleSortChange = useCallback((s: SortOption) => setSortBy(s), []);

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchInput} onSearchChange={handleSearchChange} />
      <FilterBar
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        resultCount={filteredProducts.length}
      />
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <ProductGrid products={filteredProducts} />
      </main>
    </div>
  );
}

export default memo(ShopPage);
