import { Quote, CheckCircle2 } from 'lucide-react';

export default function ProofSection() {
  const demoChecklist = [
    'Live-Demonstration der Dokumenten-Automatisierung',
    '2–3 maßgeschneiderte Workflow-Empfehlungen für Ihre Kanzlei',
    'Beispiel: Liquiditäts-Reporting für Bankengespräche',
  ];

  return (
    <section className="bg-gradient-to-br from-teal-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            Was Kunden sagen
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="mb-12 rounded-lg border border-teal-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-4 flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
              <Quote className="h-5 w-5 text-teal-600" />
            </div>
            <div className="flex-1">
              <p className="mb-4 text-base italic text-gray-700 sm:text-lg">
                „Die Automatisierung hat unsere Durchlaufzeiten halbiert. Was
                früher Tage gedauert hat, läuft jetzt in wenigen Stunden durch.
                Unsere Mandanten bekommen schneller Antworten, und wir haben
                mehr Zeit für Beratung statt für Copy-Paste."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center text-white font-semibold">
                  SK
                </div>
                <div>
                  <p className="font-semibold text-navy-900">
                    Steuerberaterin
                  </p>
                  <p className="text-sm text-gray-600">
                    Mittelständische Kanzlei, 15 Mitarbeiter
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-md border border-green-200 bg-green-50 p-3">
                <p className="text-sm font-semibold text-green-900">
                  Ergebnis: -50% Durchlaufzeit bei Standardprozessen
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll See in Demo */}
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold text-navy-900 sm:text-xl">
            Was Sie in der Demo sehen
          </h3>
          <ul className="space-y-3">
            {demoChecklist.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                </div>
                <span className="text-sm text-gray-700 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
