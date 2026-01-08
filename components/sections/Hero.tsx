'use client';

import { TrackableButton } from '@/components/shared/TrackableButton';
import { ArrowRight, Shield, Check } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full bg-teal-600/10 px-4 py-2 text-sm font-medium text-teal-400">
              <Shield className="h-4 w-4" />
              <span>100% GDPR-Konform · Juristisch geprüft</span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
              Die erste KI Workforce für{' '}
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                Steuerkanzleien
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-lg text-gray-300 lg:text-xl">
              Automatisieren Sie bis zu 40% repetitiver Aufgaben. Ohne "Black
              Box"-Risiko. Mit lokaler KI-Intelligenz direkt in Ihrer Kanzlei.
            </p>

            {/* Trust Points */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600/20">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-gray-200">
                  100% Local Intelligence – Client Data Never Leaves Your Network
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600/20">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-gray-200">
                  DATEV Native – Pre-Configured for German Tax Workflows
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600/20">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-gray-200">
                  ROI &lt; 12 Monate – Fast Payback Period
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackableButton
                size="xl"
                onClick={scrollToContact}
                className="group"
                trackEvent="cta_click"
                trackData={{
                  cta_text: 'Kostenlose Prozessanalyse vereinbaren',
                  cta_location: 'hero',
                  cta_type: 'primary',
                }}
              >
                Kostenlose Prozessanalyse vereinbaren
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </TrackableButton>
              <TrackableButton
                size="xl"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('solution');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-gray-400 text-gray-300 hover:bg-white/10"
                trackEvent="cta_click"
                trackData={{
                  cta_text: 'Mehr erfahren',
                  cta_location: 'hero',
                  cta_type: 'secondary',
                }}
              >
                Mehr erfahren
              </TrackableButton>
            </div>
          </div>

          {/* Right Column - Visual/Stats */}
          <div className="flex items-center justify-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Stat Card 1 */}
              <div className="rounded-xl border border-gray-700 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-teal-400">-60%</div>
                <div className="text-sm text-gray-300">Manual Input Time</div>
              </div>

              {/* Stat Card 2 */}
              <div className="rounded-xl border border-gray-700 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-teal-400">+30%</div>
                <div className="text-sm text-gray-300">Client Capacity</div>
              </div>

              {/* Stat Card 3 */}
              <div className="rounded-xl border border-gray-700 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-teal-400">-80%</div>
                <div className="text-sm text-gray-300">Transfer Errors</div>
              </div>

              {/* Stat Card 4 */}
              <div className="rounded-xl border border-gray-700 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-teal-400">&lt;12</div>
                <div className="text-sm text-gray-300">Monate ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-12 rounded-full border-2 border-gray-400 flex items-center justify-center">
          <ArrowRight className="h-6 w-6 rotate-90 text-gray-400" />
        </div>
      </div>
    </section>
  );
}
