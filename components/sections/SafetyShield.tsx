import { Shield, Server, Scale, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SafetyShield() {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-600/20 px-4 py-2 text-sm font-semibold text-teal-400">
            Sicherheit & Compliance
          </div>
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Ihr Sicherheits-Schild
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Drei Säulen garantieren 100% GDPR-Konformität und
            Mandantenvertraulichkeit
          </p>
        </div>

        {/* Three Pillars */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {/* Pillar 1 - 100% Local Intelligence */}
          <Card className="border-0 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg">
                <Server className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">
                100% Local Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-300">
                Die KI läuft vollständig auf Ihrer eigenen Hardware. Mandantendaten
                verlassen niemals Ihr Netzwerk.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    On-Premise Installation möglich
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Keine Cloud-Übertragung
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Volle Datenkontrolle
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pillar 2 - DATEV Native */}
          <Card className="border-0 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">
                DATEV Native
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-300">
                Vorkonfiguriert für deutsche Steuer-Workflows. Nahtlose
                Integration in Ihre bestehende Infrastruktur.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    DATEV-kompatibel
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Deutsche Steuerlogik
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Sofort einsatzbereit
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pillar 3 - Legally Validated */}
          <Card className="border-0 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">
                Rechtlich Validiert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-300">
                Juristisch geprüft durch ein führendes Team im Wirtschaftsrecht. Beruhigende Sicherheit
                für Ihre Haftungsfragen.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Juristisch geprüft
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    GDPR-konform
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Berufshaftung gesichert
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee Statement */}
        <div className="rounded-xl border-2 border-teal-500 bg-teal-500/10 p-8 text-center backdrop-blur-sm">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="mb-2 text-2xl font-bold">Unsere Garantie</h3>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            100% GDPR-Konform. 100% Mandantenvertraulichkeit. 100%
            Berufshaftung gesichert.
          </p>
        </div>
      </div>
    </section>
  );
}
