import { Sparkles } from 'lucide-react';

export default function SolutionOverview() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-600/10 px-4 py-2 text-sm font-medium text-teal-700">
            <Sparkles className="h-4 w-4" />
            <span>Intelligente Prozessautomatisierung</span>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
            Automatisierung ohne „Black Box"-Risiko
          </h2>

          <div className="mx-auto max-w-2xl space-y-4 text-left text-base text-gray-700 sm:text-lg">
            <p>
              IPA automatisiert die wiederkehrenden Prozesse in Ihrer Kanzlei:{' '}
              <strong className="font-semibold text-navy-900">
                Dokumenten-Intake, Datenextraktion und -validierung,
                Dokumentengenerierung, Erinnerungen und Reporting.
              </strong>
            </p>
            <p>
              Dabei bleibt alles{' '}
              <span className="font-semibold text-navy-900">
                transparent und nachvollziehbar
              </span>{' '}
              – keine „Black Box"-KI, die Sie nicht verstehen. Sie behalten die
              volle Kontrolle über Ihre Prozesse und Mandantendaten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
