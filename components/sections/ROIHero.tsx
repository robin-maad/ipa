'use client';

import { useState, useRef } from 'react';
import { TwoStepForm } from '@/components/landing/TwoStepForm';
import { Shield, Check } from 'lucide-react';
import type { ROICalculatorInputs, ROICalculatorOutputs } from '@/lib/calculator/roi';

/**
 * ROI-Focused Hero Section
 * Layout: Hero copy left (60%), 2-step form card right (40%), above the fold
 */
export default function ROIHero() {
  const [calculatorData, setCalculatorData] = useState<{
    inputs: ROICalculatorInputs;
    outputs: ROICalculatorOutputs;
  } | undefined>(undefined);

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Top Bar */}
      <div className="relative border-b border-navy-700 bg-navy-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
            <span className="text-white font-medium">ROI-Rechner</span>
            <div className="flex items-center gap-2 text-navy-300">
              <Shield className="h-4 w-4 text-teal-500" />
              <span>100% DSGVO-konform, juristisch geprüft</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 py-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[60%_40%] lg:gap-12 items-center">
          {/* Left Column - Hero Copy */}
          <div className="flex flex-col justify-center">
            {/* H1 Headline */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
              Sparen Sie jährlich{' '}
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                10.000€+
              </span>
              , schon mit 50 Mandanten.
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-lg text-gray-300 lg:text-xl">
              Berechnen Sie das ROI-Potenzial eines klaren Anker-Use-Cases, plus Benchmarks und
              PDF-Vorlage für die interne Entscheidung.
            </p>

            {/* Proof Bullets */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600/20 flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-gray-200">
                  ROI-Rechner für <strong className="text-white">Steuerlast-Prognose plus
                  Mandantenbericht</strong>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600/20 flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-gray-200">
                  Benchmarks aus Implementierungsprojekten (Zeitaufwand vorher vs. nachher)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600/20 flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-gray-200">
                  Ergebnis sofort per E-Mail (PDF), Excel-Template optional
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600/20 flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-gray-200">
                  DATEV-API für Kernberechnungen, Zero-Storage, rechtlich geprüft
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600/20 flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-teal-400" />
                </div>
                <span className="text-gray-200">
                  Human-in-the-loop: Entwurf in Sekunden, finale Freigabe bleibt bei Ihnen
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="lg:sticky lg:top-8">
            <div
              id="hero-form"
              className="rounded-2xl border border-navy-700 bg-navy-800/50 backdrop-blur-sm p-6 md:p-8 shadow-2xl transition-all"
            >
              <TwoStepForm calculatorData={calculatorData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
