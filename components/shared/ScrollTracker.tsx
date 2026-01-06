'use client';

import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics/events';
import { hasConsent } from '@/lib/consent';

/**
 * Scroll Depth Tracker
 * Tracks when users reach 25%, 50%, 75%, and 100% of page depth
 */
export function ScrollTracker() {
  const trackedDepths = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      // Only track if user has granted analytics consent
      if (!hasConsent('analytics')) {
        return;
      }

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const scrollPercent = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      // Track milestone depths
      const milestones = [25, 50, 75, 100];
      milestones.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackScrollDepth({ depth });
        }
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
