import { TrendingDown, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';

export default function Economics() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Wirtschaftlichkeit
          </div>
          <h2 className="mb-4 text-3xl font-bold text-navy-900 lg:text-4xl">
            Messbare Auswirkungen auf Ihr Geschäft
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Quantifizierbare Verbesserungen in kritischen Kennzahlen
          </p>
        </div>

        {/* Impact Cards */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {/* Impact 1 - Manual Input Time */}
          <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 opacity-50" />
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-200">
                <TrendingDown className="h-6 w-6 text-teal-700" />
              </div>
              <div className="mb-2 text-5xl font-bold text-navy-900">-60%</div>
              <h3 className="mb-3 text-lg font-semibold text-navy-800">
                Manuelle Eingabezeit
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Durchschnittliche Reduzierung der manuellen Dateneingabe durch
                intelligente Automatisierung.
              </p>
              <div className="flex items-center gap-2 rounded-md bg-teal-50 px-3 py-2">
                <span className="text-xs font-semibold text-teal-700">
                  ≈ 16 Stunden pro Woche gespart
                </span>
              </div>
            </div>
          </div>

          {/* Impact 2 - Client Capacity */}
          <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-50" />
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-200">
                <TrendingUp className="h-6 w-6 text-blue-700" />
              </div>
              <div className="mb-2 text-5xl font-bold text-navy-900">+30%</div>
              <h3 className="mb-3 text-lg font-semibold text-navy-800">
                Servicekapazität
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Erweiterte Kapazität zur Betreuung zusätzlicher Kunden ohne
                neues Personal.
              </p>
              <div className="flex items-center gap-2 rounded-md bg-blue-50 px-3 py-2">
                <span className="text-xs font-semibold text-blue-700">
                  Mehr Umsatz ohne Mehrkosten
                </span>
              </div>
            </div>
          </div>

          {/* Impact 3 - Transfer Errors */}
          <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-green-100 to-green-200 opacity-50" />
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-100 to-green-200">
                <AlertTriangle className="h-6 w-6 text-green-700" />
              </div>
              <div className="mb-2 text-5xl font-bold text-navy-900">-80%</div>
              <h3 className="mb-3 text-lg font-semibold text-navy-800">
                Übertragungsfehler
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Drastische Reduzierung von Fehlern bei der Datenübertragung durch
                Automatisierung.
              </p>
              <div className="flex items-center gap-2 rounded-md bg-green-50 px-3 py-2">
                <span className="text-xs font-semibold text-green-700">
                  Höhere Datenqualität
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Statement */}
        <div className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 p-8 text-white shadow-xl md:p-12">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <DollarSign className="h-8 w-8" />
              </div>
              <div>
                <div className="mb-1 text-4xl font-bold md:text-5xl">
                  &lt; 12 Monate
                </div>
                <div className="text-lg text-teal-100">
                  Amortisationszeit
                </div>
              </div>
            </div>
            <div className="max-w-md text-center md:text-left">
              <p className="text-lg">
                Typische Amortisation in weniger als einem Jahr durch
                Zeitersparnis und Kapazitätserweiterung.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * Durchschnittswerte basierend auf Pilotprojekten mit
            Dienstleistungsunternehmen (5-50 Mitarbeiter)
          </p>
        </div>
      </div>
    </section>
  );
}
