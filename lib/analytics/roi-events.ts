/**
 * Analytics Event Tracking for ROI Calculator Landing Page
 * Integrates with existing GTM setup
 */

import type { ROICalculatorInputs, ROICalculatorOutputs } from '../calculator/roi';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, any>) => void;
  }
}

/**
 * Check if gtag is available (respects cookie consent)
 */
function isGtagAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

// ============================================================================
// Page View Events
// ============================================================================

/**
 * Track landing page view
 */
export function trackLandingPageView(): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'lp_view', {
    page_type: 'roi_calculator_landing',
    timestamp: Date.now(),
  });
}

// ============================================================================
// Form Events
// ============================================================================

/**
 * Track form start (Step 1 first interaction)
 */
export function trackFormStart(step: 1 | 2 = 1): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'form_start', {
    form_type: 'two_step_lead_capture',
    step,
  });
}

/**
 * Track successful step 1 completion
 */
export function trackFormStepComplete(step: 1 | 2): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'form_step_complete', {
    form_type: 'two_step_lead_capture',
    step,
  });
}

/**
 * Track successful form submission (Step 2 complete)
 */
export function trackFormSubmitSuccess(params: {
  hasCalculatorData: boolean;
  consentNewsletter: boolean;
}): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'form_submit_success', {
    form_type: 'two_step_lead_capture',
    step: 2,
    has_calculator_data: params.hasCalculatorData,
    consent_newsletter: params.consentNewsletter,
  });
}

/**
 * Track form submission error
 */
export function trackFormSubmitError(params: {
  step: 1 | 2;
  errorType: 'validation' | 'network' | 'server';
  errorMessage?: string;
}): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'form_submit_error', {
    form_type: 'two_step_lead_capture',
    step: params.step,
    error_type: params.errorType,
    error_message: params.errorMessage?.substring(0, 100), // Truncate for privacy
  });
}

// ============================================================================
// Calculator Events
// ============================================================================

/**
 * Track calculator slider changes (debounced)
 * PII Protection: No email or names sent
 */
export function trackCalculatorChange(
  inputs: ROICalculatorInputs,
  outputs: ROICalculatorOutputs
): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'calculator_change', {
    calculator_type: 'roi',
    // Inputs
    clients: inputs.clients,
    packages_per_year: inputs.packagesPerYear,
    minutes_saved: inputs.minutesSaved,
    hourly_rate: inputs.hourlyRate,
    adoption: Math.round(inputs.adoption * 100), // Send as percentage (80 not 0.8)
    annual_cost: inputs.annualCost,
    // Outputs
    savings_annual: outputs.savingsAnnual,
    savings_monthly: outputs.savingsMonthly,
    break_even_months: outputs.breakEvenMonths,
    capacity_hours_annual: outputs.capacityHoursAnnual,
  });
}

/**
 * Debounce helper for calculator tracking
 */
export function createDebouncedCalculatorTracking(delayMs: number = 1000) {
  let timeoutId: NodeJS.Timeout | null = null;

  return function debouncedTrack(
    inputs: ROICalculatorInputs,
    outputs: ROICalculatorOutputs
  ): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      trackCalculatorChange(inputs, outputs);
      timeoutId = null;
    }, delayMs);
  };
}

/**
 * Track calculator CTA click ("Ergebnis per E-Mail erhalten")
 */
export function trackCalculatorCTAClick(): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'calculator_cta_click', {
    cta_type: 'email_results',
    calculator_type: 'roi',
  });
}

// ============================================================================
// PDF Download Events
// ============================================================================

/**
 * Track PDF download click
 */
export function trackPDFDownloadClick(source: 'email' | 'thank_you_page' | 'final_cta'): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'pdf_download_click', {
    pdf_type: 'roi_calculator',
    source,
  });
}

// ============================================================================
// Conversion Events (for Google Ads / Meta)
// ============================================================================

/**
 * Track lead conversion (fires after Step 2 completion)
 */
export function trackLeadConversion(params: {
  value?: number; // Optional: savings annual as conversion value
  currency?: string;
}): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'conversion', {
    send_to: 'AW-XXXXXXXX/XXXXXXXXX', // Replace with actual conversion ID
    value: params.value,
    currency: params.currency || 'EUR',
  });
}

// ============================================================================
// Utility: Sampling for High-Volume Events
// ============================================================================

/**
 * Sample events to reduce volume (e.g., 25% sample rate)
 * Returns true if event should be tracked
 */
export function shouldSampleEvent(sampleRate: number = 0.25): boolean {
  return Math.random() < sampleRate;
}

/**
 * Wrapper for sampled calculator tracking
 */
export function trackCalculatorChangeSampled(
  inputs: ROICalculatorInputs,
  outputs: ROICalculatorOutputs,
  sampleRate: number = 0.25
): void {
  if (shouldSampleEvent(sampleRate)) {
    trackCalculatorChange(inputs, outputs);
  }
}
