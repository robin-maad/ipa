/**
 * Event Tracking Definitions
 * Type-safe event tracking for GA4 and GTM
 */

import { trackEvent as gtmTrackEvent } from './gtm';

/**
 * Event name constants
 */
export const EVENTS = {
  // Form Events
  FORM_SUBMIT: 'form_submit',
  FORM_ERROR: 'form_error',
  FORM_FIELD_FOCUS: 'form_field_focus',

  // CTA Events
  CTA_CLICK: 'cta_click',
  BOOKING_INITIATED: 'booking_initiated',

  // Engagement Events
  SECTION_VIEW: 'section_view',
  VIDEO_PLAY: 'video_play',

  // Navigation Events
  LINK_CLICK: 'link_click',
  SCROLL_DEPTH: 'scroll_depth',

  // User Actions
  DOWNLOAD: 'download',
  SEARCH: 'search',
} as const;

/**
 * Event interfaces
 */
export interface FormSubmitEvent {
  form_name: string;
  form_location: string;
  success: boolean;
  error_message?: string;
}

export interface FormErrorEvent {
  form_name: string;
  form_location: string;
  error_type: string;
  error_message?: string;
}

export interface CTAClickEvent {
  cta_text: string;
  cta_location: string;
  cta_type: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
}

export interface BookingInitiatedEvent {
  booking_source: string;
  booking_type?: string;
}

export interface SectionViewEvent {
  section_name: string;
  section_id?: string;
}

export interface LinkClickEvent {
  link_url: string;
  link_text: string;
  link_type: 'internal' | 'external';
}

export interface ScrollDepthEvent {
  depth: number;
}

/**
 * Event tracking functions
 */
export function trackFormSubmit(data: FormSubmitEvent): void {
  gtmTrackEvent(EVENTS.FORM_SUBMIT, data);
}

export function trackFormError(data: FormErrorEvent): void {
  gtmTrackEvent(EVENTS.FORM_ERROR, data);
}

export function trackCTAClick(data: CTAClickEvent): void {
  gtmTrackEvent(EVENTS.CTA_CLICK, data);
}

export function trackBookingInitiated(data: BookingInitiatedEvent): void {
  gtmTrackEvent(EVENTS.BOOKING_INITIATED, data);
}

export function trackSectionView(data: SectionViewEvent): void {
  gtmTrackEvent(EVENTS.SECTION_VIEW, data);
}

export function trackLinkClick(data: LinkClickEvent): void {
  gtmTrackEvent(EVENTS.LINK_CLICK, data);
}

export function trackScrollDepth(data: ScrollDepthEvent): void {
  gtmTrackEvent(EVENTS.SCROLL_DEPTH, data);
}
