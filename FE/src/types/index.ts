// Type definitions for Morocco Marketplace App

export type OrderStatus = 'received' | 'confirmed' | 'out_for_delivery' | 'delivered' | 'cancelled';

export interface Region {
  id: string;
  name: string;
  nameAr?: string;
  path?: string; // SVG path from morocco.svg
}

export interface Address {
  id: string;
  street: string;
  city: string;
  region: string;
  postalCode?: string;
  country: string;
  phone: string;
  isDefault?: boolean;
}

export interface User {
  id: string;
  name: string;
  email?: string;
  phone: string;
  avatar?: string;
  addresses: Address[];
  createdAt: Date;
}

export interface Business {
  id: string;
  name: string;
  nameAr?: string;
  category: string;
  description: string;
  images: string[];
  rating: number;
  reviewCount: number;
  address: string;
  city: string;
  region: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  hours?: {
    [key: string]: { open?: string; close?: string; closed?: boolean };
  };
  verified: boolean;
  featured?: boolean;
  tags: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ProductVariant {
  id: string;
  name: string;
  options: string[];
}

export interface Product {
  id: string;
  businessId: string;
  name: string;
  nameAr?: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: string[];
  category: string;
  inStock: boolean;
  stockQuantity?: number;
  variants?: ProductVariant[];
  tags?: string[];
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants?: { [key: string]: string };
  business: Business;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: Array<{
    product: Product;
    quantity: number;
    price: number;
    selectedVariants?: { [key: string]: string };
  }>;
  business: Business;
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  paymentMethod: 'cash_on_delivery' | 'card' | 'bank_transfer';
  deliveryAddress: Address;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  estimatedDelivery?: Date;
  trackingHistory: Array<{
    status: OrderStatus;
    timestamp: Date;
    note?: string;
  }>;
}

export interface Review {
  id: string;
  businessId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title?: string;
  comment: string;
  images?: string[];
  helpful: number;
  createdAt: Date;
  verified?: boolean;
}

export interface SearchQuery {
  query: string;
  region?: string;
  category?: string;
  minRating?: number;
  sortBy?: 'relevance' | 'rating' | 'distance';
}

export interface SearchFilters {
  categories: string[];
  regions: string[];
  minRating: number;
  maxDistance?: number;
}

// Context Types
export interface CartContextType {
  items: CartItem[];
  itemCount: number;
  totalAmount: number;
  addItem: (product: Product, business: Business, quantity?: number, variants?: { [key: string]: string }) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: string) => number;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (phone: string, otp: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  isLoading: boolean;
}

// API Response Types (for future API integration)
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

