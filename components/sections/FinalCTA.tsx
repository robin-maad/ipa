import ProcessAnalysisForm from '@/components/forms/ProcessAnalysisForm';
import { Phone, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-20 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <div className="mb-6 inline-block rounded-full bg-teal-600/20 px-4 py-2 text-sm font-semibold text-teal-400">
              Bereit für den nächsten Schritt?
            </div>
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Ihr Weg zu einer produktiveren Zukunft
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Vereinbaren Sie jetzt Ihre kostenlose und vertrauliche
              Prozessanalyse. In 30 Minuten identifizieren wir Ihren #1 Engpass
              und zeigen konkrete Lösungswege auf.
            </p>

            {/* What to Expect */}
            <div className="mb-8 space-y-4">
              <h3 className="text-xl font-semibold">Was Sie erwarten können:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
                  <span className="text-gray-300">
                    <strong className="text-white">Kostenlos:</strong> Keine
                    versteckten Kosten oder Verpflichtungen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
                  <span className="text-gray-300">
                    <strong className="text-white">Vertraulich:</strong> Alle
                    Informationen werden streng vertraulich behandelt
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
                  <span className="text-gray-300">
                    <strong className="text-white">Konkret:</strong> Spezifische
                    Empfehlungen für Ihre Kanzlei
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
                  <span className="text-gray-300">
                    <strong className="text-white">Schnell:</strong> Erste
                    ROI-Schätzung in 30 Minuten
                  </span>
                </li>
              </ul>
            </div>

            {/* Alternative Contact */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold">
                Oder kontaktieren Sie uns direkt:
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:robin@houseofmaad.de"
                  className="flex items-center gap-3 text-gray-300 transition-colors hover:text-teal-400"
                >
                  <Mail className="h-5 w-5" />
                  <span>robin@houseofmaad.de</span>
                </a>
                <a
                  href="tel:+491234567890"
                  className="flex items-center gap-3 text-gray-300 transition-colors hover:text-teal-400"
                >
                  <Phone className="h-5 w-5" />
                  <span>+49 (0) 123 456 7890</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="rounded-xl border border-gray-700 bg-white p-8 shadow-2xl">
              <h3 className="mb-6 text-2xl font-bold text-navy-900">
                Kostenlose Prozessanalyse vereinbaren
              </h3>
              <ProcessAnalysisForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
