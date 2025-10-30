// Utility helper functions for Morocco Marketplace

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
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

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

