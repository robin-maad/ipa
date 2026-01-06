/**
 * React Hook for Consent-Aware Event Tracking
 */

'use client';

import { useCallback } from 'react';
import { trackEvent } from '../gtm';
import { hasConsent } from '@/lib/consent';

export function useTracking() {
  const track = useCallback(
    (eventName: string, eventData?: Record<string, any>) => {
      // Check if user has granted analytics consent
      if (!hasConsent('analytics')) {
        console.log('Tracking blocked - no analytics consent:', eventName);
        return;
      }

      try {
        trackEvent(eventName, eventData);
      } catch (error) {
        console.error('Error tracking event:', error);
      }
    },
    []
  );

  return { track };
}
