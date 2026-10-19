import { useState, useCallback, memo } from 'react';
import { ShoppingCart, Search, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const { totalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const handleClearSearch = useCallback(() => {
    setLocalQuery('');
    onSearchChange('');
  }, [onSearchChange]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setLocalQuery(val);
      onSearchChange(val);
    },
    [onSearchChange]
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              S
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">ShopEase</span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={localQuery}
                onChange={handleInputChange}
                placeholder="Search products..."
                className="w-full h-10 pl-9 pr-9 rounded-md bg-muted/30 border border-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
              />
              {localQuery && (
                <button
                  type="button"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-full text-foreground hover:bg-accent transition-colors"
              onClick={() => setMobileSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              className="relative p-2 rounded-full text-foreground hover:bg-accent transition-colors"
              onClick={() => setCartOpen(true)}
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Search Drawer */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 z-[60] animate-fade-in">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileSearchOpen(false)} />
          <div className="relative bg-background pt-12 pb-4 px-4 shadow-lg">
            <div className="relative max-w-xl mx-auto">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={localQuery}
                onChange={handleInputChange}
                placeholder="Search products..."
                className="w-full h-11 pl-9 pr-9 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50"
                autoFocus
              />
              {localQuery && (
                <button
                  type="button"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={() => setCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card shadow-xl animate-slide-in-right flex flex-col">
            <CartDrawer onClose={() => setCartOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default memo(Header);
