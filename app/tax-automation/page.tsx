import { Suspense } from 'react';
import LandingLayout from '@/components/landing/LandingLayout';
import LandingHero from '@/components/landing/LandingHero';
import TrustStrip from '@/components/landing/TrustStrip';
import ProblemFraming from '@/components/landing/ProblemFraming';
import SolutionOverview from '@/components/landing/SolutionOverview';
import HowItWorks from '@/components/landing/HowItWorks';
import BenefitsGrid from '@/components/landing/BenefitsGrid';
import LiquiditySection from '@/components/landing/LiquiditySection';
import ProofSection from '@/components/landing/ProofSection';
import ComplianceSection from '@/components/landing/ComplianceSection';
import OfferSection from '@/components/landing/OfferSection';
import LandingCTA from '@/components/landing/LandingCTA';
import FAQSection from '@/components/landing/FAQSection';
import StickyFloatingCTA from '@/components/landing/StickyFloatingCTA';
import LandingPageTracker from '@/components/landing/LandingPageTracker';

export default function TaxAutomationPage() {

  return (
    <LandingLayout>
      {/* Track page view with UTM parameters */}
      <Suspense fallback={null}>
        <LandingPageTracker />
      </Suspense>

      <main>
        {/* 1. Hero (Above the fold) */}
        <LandingHero />

        {/* 2. Trust strip */}
        <TrustStrip />

        {/* 3. Problem framing (Tax lawyer reality) */}
        <ProblemFraming />

        {/* 4. Solution (What IPA does) */}
        <SolutionOverview />

        {/* 5. How it works (3 steps) */}
        <HowItWorks />

        {/* 6. Benefits grid (6 cards + DUMMY METRICS) */}
        <BenefitsGrid />

        {/* 7. Liquidity documents for banks */}
        <LiquiditySection />

        {/* 8. Proof (Testimonial + Demo checklist) */}
        <ProofSection />

        {/* 9. Compliance & Legal Trust */}
        <ComplianceSection />

        {/* 10. Offer (What you'll receive) */}
        <OfferSection />

        {/* 11. FAQ */}
        <FAQSection />

        {/* 12. Final CTA + Form */}
        <LandingCTA />
      </main>

      {/* Sticky Floating CTA - Universal (Desktop + Mobile) */}
      <StickyFloatingCTA />
    </LandingLayout>
  );
}
