import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  opts: Intl.NumberFormatOptions = {}
) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: opts.currency ?? 'USD',
    notation: opts.notation ?? 'compact',
    ...opts,
  }).format(Number(price));
}

export function isMacOs() {
  if (typeof window === 'undefined') return false;

  return window.navigator.userAgent.includes('Mac');
}