'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackLandingPageView } from '@/lib/analytics/events';

export default function LandingPageTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track landing page view with UTM parameters if present
    const utmSource = searchParams.get('utm_source') || undefined;
    const utmMedium = searchParams.get('utm_medium') || undefined;
    const utmCampaign = searchParams.get('utm_campaign') || undefined;

    trackLandingPageView({
      page_path: '/tax-automation',
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
    });
  }, [searchParams]);

  // This component doesn't render anything
  return null;
}
