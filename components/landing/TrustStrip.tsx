'use client';

import { Shield } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="border-b bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          {/* Compliance Badge */}
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-teal-600" />
            <span className="text-sm font-medium text-gray-700">
              DSGVO-orientiert
            </span>
          </div>

          {/* Testimonial - Single testimonial placeholder */}
          <div className="text-center sm:border-l sm:pl-6 sm:text-left">
            <p className="text-sm italic text-gray-600">
              "Die Automatisierung hat unsere Durchlaufzeiten halbiert."
            </p>
            <p className="mt-1 text-xs text-gray-500">
              – Steuerberaterin, mittelständische Kanzlei
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
