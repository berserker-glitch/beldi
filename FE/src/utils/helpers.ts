import type { Product } from "@/types";

// Utility helper functions for Morocco Marketplace

const CATEGORY_IMAGE_FALLBACKS: Record<string, string> = {
  "traditional wear": "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  handicrafts: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80",
  ceramics: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=80",
  carpets: "https://images.unsplash.com/photo-1501127122-f385ca6ddd3d?auto=format&fit=crop&w=900&q=80",
  rugs: "https://images.unsplash.com/photo-1523419409543-0c1df022bddb?auto=format&fit=crop&w=900&q=80",
  gaming: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  pastries: "https://images.unsplash.com/photo-1481391200999-235277aa41db?auto=format&fit=crop&w=900&q=80",
  spices: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=80",
  beauty: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80",
  hammam: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
  laptops: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
  audio: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80",
  gifts: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
};

const DEFAULT_PRODUCT_IMAGE =
  "https://images.unsplash.com/photo-1505164294036-5fad710ae511?auto=format&fit=crop&w=900&q=80";

export const getCategoryFallbackImage = (category?: string): string => {
  if (!category) return DEFAULT_PRODUCT_IMAGE;
  return CATEGORY_IMAGE_FALLBACKS[category.toLowerCase()] ?? DEFAULT_PRODUCT_IMAGE;
};

export const getProductCoverImage = (product: Product): string => {
  const validImage = product.images?.find(
    (image) => image && !image.includes("placeholder") && !image.endsWith(".svg")
  );
  if (validImage) {
    return validImage;
  }
  return getCategoryFallbackImage(product.category);
};

/**
 * Format price in Moroccan Dirham (MAD)
 */
export const formatPrice = (price: number, currency: string = 'MAD'): string => {
  return `${price.toFixed(2)} ${currency}`;
};

/**
 * Format phone number to Moroccan format
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format as +212 6XX-XXXXXX or similar
  if (digits.startsWith('212')) {
    const number = digits.slice(3);
    if (number.length === 9) {
      return `+212 ${number.slice(0, 4)}-${number.slice(4)}`;
    }
  }
  
  return phone;
};

/**
 * Format date to readable string
 */
export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Format date and time
 */
export const formatDateTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Calculate relative time (e.g., "2 hours ago")
 */
export const getRelativeTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInMs = now.getTime() - d.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);
  const diffInHours = Math.floor(diffInMs / 3600000);
  const diffInDays = Math.floor(diffInMs / 86400000);

  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  
  return formatDate(d);
};

/**
 * Generate order number
 */
export const generateOrderNumber = (): string => {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `MRC-${year}-${random}`;
};

/**
 * Validate email address
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate Moroccan phone number
 */
export const isValidMoroccanPhone = (phone: string): boolean => {
  // Moroccan phone numbers start with +212 or 0 followed by 6 or 7 and 8 more digits
  const phoneRegex = /^(\+212|0)[67]\d{8}$/;
  const cleanPhone = phone.replace(/[\s-]/g, '');
  return phoneRegex.test(cleanPhone);
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Get initials from name
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Calculate discount percentage
 */
export const calculateDiscount = (originalPrice: number, currentPrice: number): number => {
  if (originalPrice <= currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

/**
 * Check if business is currently open
 */
export const isBusinessOpen = (hours?: {
  [key: string]: { open?: string; close?: string; closed?: boolean };
}): boolean => {
  if (!hours) return true;

  const now = new Date();
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = dayNames[now.getDay()];
  const todayHours = hours[today];

  if (!todayHours || todayHours.closed || !todayHours.open || !todayHours.close) return false;

  const currentTime = now.getHours() * 100 + now.getMinutes();
  const openTime = parseInt(todayHours.open.replace(':', ''));
  const closeTime = parseInt(todayHours.close.replace(':', ''));

  return currentTime >= openTime && currentTime <= closeTime;
};

/**
 * Debounce function for search inputs
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Get WhatsApp link
 */
export const getWhatsAppLink = (phone: string, message?: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${cleanPhone}${text}`;
};

/**
 * Get Google Maps link
 */
export const getGoogleMapsLink = (address: string, city: string): string => {
  const query = encodeURIComponent(`${address}, ${city}, Morocco`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

/**
 * Format order status to human-readable text
 */
export const formatOrderStatus = (status: string): string => {
  const statusMap: { [key: string]: string } = {
    received: 'Order Received',
    confirmed: 'Confirmed by Shop',
    out_for_delivery: 'Out for Delivery',
    delivered: 'Delivered',
    cancelled: 'Cancelled',
  };
  return statusMap[status] || status;
};

/**
 * Get estimated delivery date (adds 2-3 days to current date)
 */
export const getEstimatedDelivery = (): Date => {
  const days = Math.floor(Math.random() * 2) + 2; // 2-3 days
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

/**
 * Slugify text for URLs
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

