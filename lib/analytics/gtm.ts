/**
 * Google Tag Manager Utilities
 * Type-safe dataLayer management and event tracking
 */

export interface GTMEvent {
  event: string;
  [key: string]: any;
}

/**
 * Push data to GTM dataLayer
 * Safe for SSR - checks for window object
 */
export function pushToDataLayer(data: GTMEvent): void {
  if (typeof window === 'undefined') {
    console.warn('pushToDataLayer called on server-side');
    return;
  }

  if (!window.dataLayer) {
    console.warn('dataLayer not initialized');
    return;
  }

  try {
    window.dataLayer.push(data);
    console.log('GTM Event:', data);
  } catch (error) {
    console.error('Error pushing to dataLayer:', error);
  }
}

/**
 * Track a custom event with optional data
 */
export function trackEvent(
  eventName: string,
  eventData?: Record<string, any>
): void {
  pushToDataLayer({
    event: eventName,
    ...eventData,
  });
}

/**
 * Track a page view
 */
export function trackPageView(path?: string): void {
  pushToDataLayer({
    event: 'page_view',
    page_path: path || (typeof window !== 'undefined' ? window.location.pathname : ''),
    page_title: typeof document !== 'undefined' ? document.title : '',
  });
}

/**
 * Track form submission
 */
export function trackFormSubmission(
  formName: string,
  success: boolean,
  additionalData?: Record<string, any>
): void {
  pushToDataLayer({
    event: 'form_submit',
    form_name: formName,
    form_success: success,
    ...additionalData,
  });
}

/**
 * Track CTA (Call-to-Action) click
 */
export function trackCTAClick(
  ctaText: string,
  ctaLocation: string,
  ctaType?: 'primary' | 'secondary'
): void {
  pushToDataLayer({
    event: 'cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation,
    cta_type: ctaType || 'primary',
  });
}

/**
 * Track scroll depth milestone
 */
export function trackScrollDepth(depth: number): void {
  pushToDataLayer({
    event: 'scroll_depth',
    scroll_depth: depth,
  });
}

/**
 * Track booking initiation
 */
export function trackBookingInitiated(source: string): void {
  pushToDataLayer({
    event: 'booking_initiated',
    booking_source: source,
  });
}
