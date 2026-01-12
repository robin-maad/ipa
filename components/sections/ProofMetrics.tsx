import { Card, CardContent } from '@/components/ui/card';
import { Clock, Zap, TrendingUp, CheckCircle } from 'lucide-react';

/**
 * Proof Mini-Metrics Section
 * 4 cards with conservative, qualified claims from spec
 */
export default function ProofMetrics() {
  return (
    <section id="proof-metrics" className="bg-navy-900/50 py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Stats Grid - 4 cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Time (Repetitive Tasks) */}
          <Card className="border-navy-700 bg-navy-800/50 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:border-teal-600/50">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600/20 to-teal-600/10 mx-auto">
                <Clock className="h-7 w-7 text-teal-500" />
              </div>
              <div className="mb-2 text-4xl font-bold text-white">Bis zu 80%</div>
              <p className="text-sm leading-relaxed text-navy-300">
                Repetitive Tätigkeiten (in vielen Kanzleien)
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Speed */}
          <Card className="border-navy-700 bg-navy-800/50 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:border-teal-600/50">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600/20 to-teal-600/10 mx-auto">
                <Zap className="h-7 w-7 text-teal-500" />
              </div>
              <div className="mb-2 text-3xl font-bold text-white leading-tight">
                Sekunden statt Stunden
              </div>
              <p className="text-sm leading-relaxed text-navy-300">
                für Entwurf plus Datenaufbereitung (je nach Datenlage)
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Capacity */}
          <Card className="border-navy-700 bg-navy-800/50 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:border-teal-600/50">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600/20 to-teal-600/10 mx-auto">
                <TrendingUp className="h-7 w-7 text-teal-500" />
              </div>
              <div className="mb-2 text-3xl font-bold text-white leading-tight">
                Mehr Kapazität
              </div>
              <p className="text-sm leading-relaxed text-navy-300">
                ohne zusätzliches Personal, durch standardisierte Workflows
              </p>
            </CardContent>
          </Card>

          {/* Card 4: Payback */}
          <Card className="border-navy-700 bg-navy-800/50 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:border-teal-600/50">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600/20 to-teal-600/10 mx-auto">
                <CheckCircle className="h-7 w-7 text-teal-500" />
              </div>
              <div className="mb-2 text-3xl font-bold text-white leading-tight">
                Break-even möglich
              </div>
              <p className="text-sm leading-relaxed text-navy-300">
                oft in wenigen Monaten, abhängig von Mandantenanzahl und Frequenz
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
