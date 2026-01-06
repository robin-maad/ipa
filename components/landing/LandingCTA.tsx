'use client';

import { ArrowRight } from 'lucide-react';
import { TrackableButton } from '@/components/shared/TrackableButton';
import LandingForm from './LandingForm';

export default function LandingCTA() {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Bereit für weniger manuelle Arbeit?
          </h2>
          <p className="text-base text-gray-300 sm:text-lg">
            Demo anfragen – unverbindlich und innerhalb von 24 Stunden Antwort
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl border border-gray-700 bg-white p-6 shadow-xl sm:p-8">
          <LandingForm />
        </div>

        {/* Reassurance Text */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>✓ Keine Verkaufsanrufe</p>
          <p>✓ DSGVO-konform</p>
          <p>✓ Kostenlose Erstberatung</p>
        </div>
      </div>
    </section>
  );
}
