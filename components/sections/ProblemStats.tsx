import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, TrendingUp } from 'lucide-react';

export default function ProblemStats() {
  return (
    <section id="problem" className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-navy-900 lg:text-4xl">
            Der Engpass ist nicht mehr die Kundengewinnung
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Es ist die Serviceerbringung und Skalierung
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Stat 1 - Time Lost */}
          <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-200">
                <Clock className="h-7 w-7 text-teal-700" />
              </div>
              <div className="mb-2 text-4xl font-bold text-navy-900">40%</div>
              <h3 className="mb-3 text-lg font-semibold text-navy-800">
                Zeit verloren
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Durchschnittlich 40% der Arbeitszeit Ihrer Experten geht für
                manuelle Dateneingabe und repetitive Prozesse
                verloren.
              </p>
              <div className="mt-4 rounded-md bg-red-50 px-3 py-2">
                <p className="text-xs font-medium text-red-700">
                  ≈ 2 Tage pro Woche pro Mitarbeiter
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Stat 2 - Processing Delays */}
          <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-orange-200">
                <TrendingUp className="h-7 w-7 text-orange-700" />
              </div>
              <div className="mb-2 text-4xl font-bold text-navy-900">2-4</div>
              <h3 className="mb-3 text-lg font-semibold text-navy-800">
                Wochen Verzögerung
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Bearbeitungsverzögerungen von 2 bis 4 Wochen beeinträchtigen
                die Kundenzufriedenheit und Ihre Reaktionsfähigkeit.
              </p>
              <div className="mt-4 rounded-md bg-orange-50 px-3 py-2">
                <p className="text-xs font-medium text-orange-700">
                  Hohe Frustration bei Kunden
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Stat 3 - Capacity Bottleneck */}
          <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-200">
                <Users className="h-7 w-7 text-blue-700" />
              </div>
              <div className="mb-2 text-4xl font-bold text-navy-900">+30%</div>
              <h3 className="mb-3 text-lg font-semibold text-navy-800">
                Ungenutztes Potenzial
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                "Wir könnten 30% mehr Kunden betreuen, wenn wir die Kapazität
                hätten." — Dienstleister mit 15 Mitarbeitern
              </p>
              <div className="mt-4 rounded-md bg-blue-50 px-3 py-2">
                <p className="text-xs font-medium text-blue-700">
                  Qualifizierte Fachkräfte nicht verfügbar
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 rounded-xl border-l-4 border-teal-600 bg-white p-8 shadow-md">
          <blockquote className="text-lg italic text-gray-700">
            "Der Engpass ist nicht mehr die Kundenakquise; es ist die
            Serviceerbringung. Qualifizierte Fachkräfte sind nicht zu finden,
            aber die Nachfrage steigt."
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-gray-900">
            — Typisches Szenario in Dienstleistungsunternehmen 2026
          </p>
        </div>
      </div>
    </section>
  );
}
