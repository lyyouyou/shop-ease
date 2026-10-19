export interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  category: string;
  description: string;
}

export const PRODUCT_CATEGORIES = [
  'All',
  'Electronics',
  'Clothing',
  'Home & Kitchen',
  'Beauty',
  'Sports',
] as const;

export const MOCK_PRODUCTS: IProduct[] = [
  {
    id: '1',
    name: 'Wireless Earbuds Pro',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
    rating: 4.5,
    category: 'Electronics',
    description: 'Noise cancelling Bluetooth earbuds with 30h battery life',
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    rating: 4.8,
    category: 'Electronics',
    description: 'Fitness tracking, heart rate monitor, waterproof design',
  },
  {
    id: '3',
    name: 'Portable Bluetooth Speaker',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
    rating: 4.3,
    category: 'Electronics',
    description: 'Compact speaker with rich bass and 12-hour playtime',
  },
  {
    id: '4',
    name: 'Classic Denim Jacket',
    price: 65.0,
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop',
    rating: 4.2,
    category: 'Clothing',
    description: 'Timeless blue denim jacket with modern fit',
  },
  {
    id: '5',
    name: 'Cotton Casual T-Shirt',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    rating: 4.6,
    category: 'Clothing',
    description: 'Soft premium cotton tee, available in multiple colors',
  },
  {
    id: '6',
    name: 'Running Sneakers Air',
    price: 120.0,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    rating: 4.7,
    category: 'Sports',
    description: 'Lightweight running shoes with cushioning support',
  },
  {
    id: '7',
    name: 'Ceramic Coffee Mug Set',
    price: 32.0,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop',
    rating: 4.4,
    category: 'Home & Kitchen',
    description: 'Set of 4 matte ceramic mugs, microwave safe',
  },
  {
    id: '8',
    name: 'Bamboo Cutting Board',
    price: 18.5,
    imageUrl: 'https://images.unsplash.com/photo-1584990347449-a4a3d854b73e?w=600&h=600&fit=crop',
    rating: 4.1,
    category: 'Home & Kitchen',
    description: 'Durable bamboo cutting board with juice groove',
  },
  {
    id: '9',
    name: 'Hydrating Face Serum',
    price: 45.0,
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop',
    rating: 4.9,
    category: 'Beauty',
    description: 'Vitamin C serum for brightening and anti-aging',
  },
  {
    id: '10',
    name: 'Matte Lipstick Collection',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop',
    rating: 4.5,
    category: 'Beauty',
    description: 'Long-lasting matte finish, set of 3 shades',
  },
  {
    id: '11',
    name: 'Yoga Mat Premium',
    price: 38.0,
    imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop',
    rating: 4.6,
    category: 'Sports',
    description: '6mm thick non-slip eco-friendly TPE yoga mat',
  },
  {
    id: '12',
    name: 'Wool Blend Scarf',
    price: 42.0,
    imageUrl: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=600&fit=crop',
    rating: 4.3,
    category: 'Clothing',
    description: 'Soft warm wool blend scarf, classic plaid pattern',
  },
];
