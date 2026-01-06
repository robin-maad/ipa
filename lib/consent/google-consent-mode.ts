/**
 * Google Consent Mode v2 Integration
 * Manages consent state for Google Analytics and GTM
 */

/**
 * Initialize Google Consent Mode with default denied state
 * Must be called before GTM loads
 */
export function initGoogleConsentMode(): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  // Set default consent to denied
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500,
  });
}

/**
 * Update consent state based on user preferences
 */
export function updateGoogleConsent(
  analyticsGranted: boolean,
  marketingGranted: boolean
): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    analytics_storage: analyticsGranted ? 'granted' : 'denied',
    ad_storage: marketingGranted ? 'granted' : 'denied',
    ad_user_data: marketingGranted ? 'granted' : 'denied',
    ad_personalization: marketingGranted ? 'granted' : 'denied',
  });
}
