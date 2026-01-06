/**
 * Consent Management Utilities
 * Provides helper functions to check and manage user consent
 */

import * as CookieConsent from 'vanilla-cookieconsent';

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing';

/**
 * Check if user has granted consent for a specific category
 */
export function hasConsent(category: ConsentCategory): boolean {
  if (typeof window === 'undefined') return false;

  const cookie = CookieConsent.getCookie();
  if (!cookie || !cookie.categories) return false;

  return cookie.categories.includes(category);
}

/**
 * Get all accepted consent categories
 */
export function getAcceptedCategories(): ConsentCategory[] {
  if (typeof window === 'undefined') return [];

  const cookie = CookieConsent.getCookie();
  if (!cookie || !cookie.categories) return [];

  return cookie.categories as ConsentCategory[];
}

/**
 * Wait for consent to be initialized
 * Resolves when user makes a consent choice
 */
export function waitForConsent(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    // Check if consent already exists
    const cookie = CookieConsent.getCookie();
    if (cookie && cookie.categories) {
      resolve();
      return;
    }

    // Wait for consent event
    const handleConsent = () => {
      resolve();
      window.removeEventListener('cc:onConsent', handleConsent);
    };

    window.addEventListener('cc:onConsent', handleConsent);
  });
}

/**
 * Show the consent modal programmatically
 */
export function showConsentModal(): void {
  if (typeof window === 'undefined') return;
  CookieConsent.showPreferences();
}

/**
 * Accept all consent categories programmatically
 */
export function acceptAllConsent(): void {
  if (typeof window === 'undefined') return;
  CookieConsent.acceptCategory('all');
}

/**
 * Reject all non-necessary consent categories
 */
export function rejectAllConsent(): void {
  if (typeof window === 'undefined') return;
  CookieConsent.acceptCategory([]);
}
