import { memo } from 'react';
import { Plus, Minus, Trash2, ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

function CartDrawer({ onClose }: { onClose: () => void }) {
  const { items, subtotal, removeFromCart, updateQuantity, clearCart, totalItems } = useCart();

  const handleCheckout = () => {
    toast.success('Order placed successfully! (Demo)');
    clearCart();
    onClose();
  };

  if (items.length === 0) {
    return (
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Your Cart</h2>
            <p className="text-sm text-muted-foreground">{totalItems} items</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Your cart is empty</h3>
            <p className="mt-1 text-sm text-muted-foreground">Add some products to get started</p>
          </div>
          <button
            onClick={onClose}
            className="mt-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Your Cart</h2>
          <p className="text-sm text-muted-foreground">{totalItems} items</p>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Close cart"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3">
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.product.id} className="flex gap-3 rounded-lg border border-border/50 bg-card p-3">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
                <img src={item.product.imageUrl} alt={item.product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium text-foreground">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground tabular-nums">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-muted transition-colors shrink-0"
                    onClick={() => removeFromCart(item.product.id)}
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center rounded-md border border-border/60">
                    <button
                      className="p-1.5 hover:bg-muted transition-colors rounded-l-md"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5 text-foreground" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium tabular-nums text-foreground">
                      {item.quantity}
                    </span>
                    <button
                      className="p-1.5 hover:bg-muted transition-colors rounded-r-md"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5 text-foreground" />
                    </button>
                  </div>
                  <span className="text-sm font-semibold tabular-nums text-foreground">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border/60 bg-card px-6 py-4 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-lg font-bold tabular-nums text-foreground">${subtotal.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full h-11 text-base bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 active:opacity-80 transition-opacity"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default memo(CartDrawer);
