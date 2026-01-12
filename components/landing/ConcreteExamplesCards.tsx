import { Card, CardContent } from '@/components/ui/card';
import { Building2, TrendingUp } from 'lucide-react';

/**
 * Concrete Examples Section
 * 2 cards matching formula verification:
 * - Card A: 100 clients, 2 packages/year, 2h saved, 80€/h, 80% → 25.600€
 * - Card B: 500 clients, 2 packages/year, 2h saved, 80€/h, 80% → 128.000€
 */
export default function ConcreteExamplesCards() {
  return (
    <section id="concrete-examples" className="py-16 md:py-20 bg-navy-900/30">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Konkrete Rechenbeispiele
          </h2>
          <p className="text-base md:text-lg text-navy-300 max-w-3xl mx-auto">
            Realistische Szenarien aus Implementierungsprojekten
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card A: Kleinere Kanzlei */}
          <Card className="border-navy-700 bg-navy-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all hover:border-teal-600/50">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-600/10 flex-shrink-0">
                  <Building2 className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Kleinere Kanzlei
                  </h3>
                  <p className="text-sm text-navy-400">100 Mandanten</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-5xl font-bold text-white mb-2">
                  25.600€
                </div>
                <p className="text-sm text-navy-300">
                  Jährliches Einsparpotenzial
                </p>
              </div>

              <div className="space-y-2 text-xs text-navy-400 bg-navy-900/50 rounded-lg p-4">
                <p><span className="text-navy-500">Mandanten:</span> 100</p>
                <p><span className="text-navy-500">Pakete/Jahr:</span> 2</p>
                <p><span className="text-navy-500">Zeitersparnis:</span> 2 Std manuell</p>
                <p><span className="text-navy-500">Stundensatz:</span> 80€/h</p>
                <p><span className="text-navy-500">Adoption:</span> 80%</p>
              </div>
            </CardContent>
          </Card>

          {/* Card B: Mittlere Kanzlei */}
          <Card className="border-navy-700 bg-navy-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all hover:border-teal-600/50">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600/20 to-teal-600/10 flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Mittlere Kanzlei
                  </h3>
                  <p className="text-sm text-navy-400">500 Mandanten</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-5xl font-bold text-white mb-2">
                  128.000€
                </div>
                <p className="text-sm text-navy-300">
                  Jährliches Einsparpotenzial
                </p>
              </div>

              <div className="space-y-2 text-xs text-navy-400 bg-navy-900/50 rounded-lg p-4">
                <p><span className="text-navy-500">Mandanten:</span> 500</p>
                <p><span className="text-navy-500">Pakete/Jahr:</span> 2</p>
                <p><span className="text-navy-500">Zeitersparnis:</span> 2 Std manuell</p>
                <p><span className="text-navy-500">Stundensatz:</span> 80€/h</p>
                <p><span className="text-navy-500">Adoption:</span> 80%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-xs text-navy-500">
          Berechnungen basieren auf der Formel: N × f × h × C × a. Alle Werte sind Richtwerte
          aus Implementierungsprojekten.
        </p>
      </div>
    </section>
  );
}
