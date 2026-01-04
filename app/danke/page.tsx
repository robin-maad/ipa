import type { Metadata } from 'next';
import { CheckCircle2, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vielen Dank! | IPA',
  description: 'Ihre Anfrage wurde erfolgreich übermittelt.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-5xl px-4 py-20">
        {/* Success Message */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-navy-900 lg:text-5xl">
            Vielen Dank für Ihr Interesse!
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns
            innerhalb von 24 Stunden bei Ihnen melden.
          </p>
        </div>

        {/* Cal.com Embed */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-teal-600" />
            <h2 className="text-2xl font-bold text-navy-900">
              Termin direkt vereinbaren
            </h2>
          </div>
          <p className="mb-6 text-gray-600">
            Möchten Sie Ihre Prozessanalyse gleich jetzt vereinbaren? Wählen
            Sie einen passenden Termin aus unserem Kalender:
          </p>

          {/* Cal.com Inline Embed */}
          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://cal.com/houseofmaad/30min"
              width="100%"
              height="800"
              frameBorder="0"
              title="Termin vereinbaren"
              style={{
                border: 'none',
                minHeight: '800px',
              }}
            />
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-lg font-bold text-teal-700">
              1
            </div>
            <h3 className="mb-2 font-semibold text-navy-900">
              Wir melden uns
            </h3>
            <p className="text-sm text-gray-600">
              Innerhalb von 24 Stunden erhalten Sie eine Bestätigung per E-Mail.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-lg font-bold text-blue-700">
              2
            </div>
            <h3 className="mb-2 font-semibold text-navy-900">
              Prozessanalyse
            </h3>
            <p className="text-sm text-gray-600">
              30-minütiges Gespräch zur Identifikation Ihrer Engpässe.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-lg font-bold text-purple-700">
              3
            </div>
            <h3 className="mb-2 font-semibold text-navy-900">
              Live-Demo
            </h3>
            <p className="text-sm text-gray-600">
              Sehen Sie IPA in Aktion mit Ihren eigenen Beispielen.
            </p>
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Haben Sie Fragen? Kontaktieren Sie uns direkt unter:{' '}
            <a
              href="mailto:robin@houseofmaad.de"
              className="font-semibold text-teal-600 hover:underline"
            >
              robin@houseofmaad.de
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
