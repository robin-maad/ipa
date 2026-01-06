'use client';

import * as React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { useTracking } from '@/lib/analytics/hooks/useTracking';

interface TrackableButtonProps extends ButtonProps {
  trackEvent?: string;
  trackData?: Record<string, any>;
}

/**
 * Button component with automatic event tracking
 * Wraps the base Button component and adds consent-aware tracking
 */
export const TrackableButton = React.forwardRef<
  HTMLButtonElement,
  TrackableButtonProps
>(({ trackEvent, trackData, onClick, children, ...props }, ref) => {
  const { track } = useTracking();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track event if specified
    if (trackEvent) {
      track(trackEvent, trackData);
    }

    // Call original onClick handler
    onClick?.(e);
  };

  return (
    <Button ref={ref} onClick={handleClick} {...props}>
      {children}
    </Button>
  );
});

TrackableButton.displayName = 'TrackableButton';
