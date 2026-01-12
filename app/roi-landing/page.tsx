'use client';

import { useEffect } from 'react';
import ROIHero from '@/components/sections/ROIHero';
import ProofMetrics from '@/components/sections/ProofMetrics';
import { ROICalculator } from '@/components/landing/ROICalculator';
import ConcreteExamplesCards from '@/components/landing/ConcreteExamplesCards';
import UpsideUseCases from '@/components/landing/UpsideUseCases';
import BenchmarksTable from '@/components/landing/BenchmarksTable';
import SecurityPillars from '@/components/sections/SecurityPillars';
import FinalCTA from '@/components/sections/FinalCTA';
import { ScrollTracker } from '@/components/shared/ScrollTracker';
import { getServiceSchema } from '@/lib/seo/schemas';
import { trackLandingPageView } from '@/lib/analytics/roi-events';

/**
 * ROI Calculator Landing Page
 *
 * Section Order (8 total, matching spec):
 * 1. Hero + 2-Step Form (above fold)
 * 2. Proof Mini-Metrics (4 cards)
 * 3. ROI Calculator (interactive)
 * 4. Concrete Examples (2 cards: 25.6k, 128k)
 * 5. Upside Use Cases (6 bullets)
 * 6. Benchmarks Table (3 rows)
 * 7. Security Pillars (3 cards)
 * 8. Final CTA
 */

export default function ROILandingPage() {
  const serviceSchema = getServiceSchema();

  // Track page view on mount (client-side)
  useEffect(() => {
    trackLandingPageView();
  }, []);

  const handleScrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Highlight effect
      formElement.classList.add('ring-2', 'ring-teal-500', 'ring-offset-2', 'ring-offset-navy-900');
      setTimeout(() => {
        formElement.classList.remove('ring-2', 'ring-teal-500', 'ring-offset-2', 'ring-offset-navy-900');
      }, 2000);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <main className="bg-navy-900">
        {/* Section 1: Hero + 2-Step Form */}
        <ROIHero />

        {/* Section 2: Proof Mini-Metrics (4 cards) */}
        <ProofMetrics />

        {/* Section 3: ROI Calculator (interactive) */}
        <ROICalculator onEmailRequest={handleScrollToForm} />

        {/* Section 4: Concrete Examples (2 cards) */}
        {/* <ConcreteExamplesCards /> */}

        {/* Section 5: Upside Use Cases (6 bullets) */}
        <UpsideUseCases />

        {/* Section 6: Benchmarks Table (3 rows) */}
        <BenchmarksTable />

        {/* Section 7: Security Pillars (3 cards) */}
        <SecurityPillars />

        {/* Section 8: Final CTA */}
        <FinalCTA />

        {/* Scroll Depth Tracking */}
        <ScrollTracker />
      </main>
    </>
  );
}
