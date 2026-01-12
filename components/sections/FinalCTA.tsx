'use client';

import { Button } from '@/components/ui/button';
import { Shield, CheckCircle } from 'lucide-react';

/**
 * Final CTA Section
 * Matches spec: "Bereit für Ihren ROI-Check?"
 */
export default function FinalCTA() {
  const handleScrollToTop = () => {
    const topForm = document.getElementById('hero-form');
    if (topForm) {
      topForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Optional highlight effect
      topForm.classList.add('ring-2', 'ring-teal-500', 'ring-offset-2', 'ring-offset-navy-900');
      setTimeout(() => {
        topForm.classList.remove('ring-2', 'ring-teal-500', 'ring-offset-2', 'ring-offset-navy-900');
      }, 2000);
    } else {
      // Fallback: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="final-cta" className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-20 text-white">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        {/* Badge */}
        <div className="mb-6 inline-block rounded-full bg-teal-600/20 px-4 py-2 text-sm font-semibold text-teal-400">
          Jetzt starten
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
          Bereit für Ihren ROI-Check?
        </h2>

        {/* Subheading */}
        <p className="mb-10 text-lg text-gray-300 max-w-2xl mx-auto">
          Laden Sie den ROI-Rechner als PDF herunter, oder senden Sie sich das Ergebnis aus dem
          Kalkulator per E-Mail.
        </p>

        {/* CTA Button */}
        <div className="mb-8">
          <Button
            size="lg"
            onClick={handleScrollToTop}
            className="px-8 py-6 text-lg font-semibold"
          >
            Jetzt kostenlos herunterladen
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-teal-500" />
            <span>100% DSGVO-konform</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-teal-500" />
            <span>Juristisch geprüft</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-teal-500" />
            <span>Keine Spam-Garantie</span>
          </div>
        </div>

        {/* Optional: Security Reassurance */}
        <div className="mt-12 rounded-xl border border-navy-700 bg-navy-800/30 backdrop-blur-sm p-6">
          <p className="text-sm text-navy-300">
            Ihre Daten werden ausschließlich zur Zusendung des ROI-Rechners verwendet und nicht
            an Dritte weitergegeben. Sie können sich jederzeit abmelden.
          </p>
        </div>
      </div>
    </section>
  );
}
