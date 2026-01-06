'use client';

import { ArrowRight, Check } from 'lucide-react';
import { TrackableButton } from '@/components/shared/TrackableButton';
import LandingForm from './LandingForm';

export default function LandingHero() {
  const scrollToForm = () => {
    const element = document.getElementById('demo-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 sm:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Weniger manuelle Arbeit in der Kanzlei,{' '}
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                mehr Zeit für Mandanten
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-base text-gray-300 sm:text-lg lg:text-xl">
              Automatisieren Sie wiederkehrende Prozesse rund um Dokumente,
              Datenaufbereitung und Reporting, ohne dass Ihr Team in Excel-Chaos
              versinkt.
            </p>

            {/* Benefit Bullets */}
            <div className="mb-8 space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-600/20">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-sm text-gray-200 sm:text-base">
                  Standardisierte Outputs für Mandanten und Banken (z. B.
                  Liquiditätsübersichten)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-600/20">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-sm text-gray-200 sm:text-base">
                  Weniger Rückfragen, weniger Copy-Paste, weniger Fehler
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-600/20">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-sm text-gray-200 sm:text-base">
                  Schneller von Rohdaten zu unterschriftsreifen Dokumenten
                </span>
              </div>
            </div>

            {/* CTA Button - Mobile/Tablet only */}
            <div className="flex flex-col items-center gap-4 lg:hidden">
              <TrackableButton
                size="xl"
                onClick={scrollToForm}
                className="group w-full sm:w-auto"
                trackEvent="cta_click"
                trackData={{
                  cta_text: 'Demo anfragen',
                  cta_location: 'hero',
                  cta_type: 'primary',
                }}
              >
                Demo anfragen
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </TrackableButton>
              <p className="text-xs text-gray-400">
                Kein Spam, Antwort innerhalb von 24 Stunden
              </p>
            </div>
          </div>

          {/* Right Column - Form (Desktop only) */}
          <div className="hidden lg:block">
            <div className="rounded-xl border border-gray-700 bg-white p-6 shadow-2xl sm:p-8">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-navy-900">
                  Demo anfragen
                </h2>
                <p className="text-sm text-gray-600">
                  Kostenlos und unverbindlich
                </p>
              </div>
              <LandingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
