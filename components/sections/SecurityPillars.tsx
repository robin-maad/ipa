import { Shield, Server, Scale, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Security Pillars Section
 * 3 pillars matching spec exactly:
 * 1. DATEV-Integration
 * 2. Zero-Storage
 * 3. Rechtlich geprüft
 */
export default function SecurityPillars() {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-600/20 px-4 py-2 text-sm font-semibold text-teal-400">
            Sicherheit & Compliance
          </div>
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            3 Säulen der Sicherheit
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Unsere Sicherheitsarchitektur kombiniert bewährte Steuerlogik, moderne
            Datenschutzstandards und rechtliche Validierung
          </p>
        </div>

        {/* Three Pillars */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {/* Pillar 1 - DATEV-Integration */}
          <Card className="border-0 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg">
                <Server className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">
                DATEV-Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Kernberechnungen über DATEV-API (wo verfügbar)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Verlässliche Steuerlogik
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Minimiert Haftungsrisiko
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pillar 2 - Zero-Storage */}
          <Card className="border-0 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">
                Zero-Storage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Verarbeitung im RAM
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Keine dauerhafte Speicherung sensibler Daten
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Löschung nach Prozess
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pillar 3 - Rechtlich geprüft */}
          <Card className="border-0 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">
                Rechtlich geprüft
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Juristisch validiert
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    KI-Verordnung berücksichtigt
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    Audit-sicherer Prozessansatz
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
            100% DSGVO-konform. Juristisch geprüft. Haftungsrisiko minimiert durch
            bewährte DATEV-Logik.
          </p>
        </div>
      </div>
    </section>
  );
}
