/**
 * Global TypeScript definitions for analytics and tracking
 */

export {};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
