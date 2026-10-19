import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import ShopPage from '@/pages/ShopPage/ShopPage';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>
        <p className="text-muted-foreground mb-6">Page not found</p>
        <button
          onClick={() => (window.location.href = '/')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ShopPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
