import { TrendingUp, AlertTriangle, FileText } from 'lucide-react';

export default function LiquiditySection() {
  const features = [
    {
      icon: FileText,
      title: 'Monatliche Liquiditätsvorschau, 12 Monate',
      description:
        'Automatisch generierte Cashflow-Prognosen für Bankgespräche und Planung.',
    },
    {
      icon: AlertTriangle,
      title: 'Frühwarnung für Engpässe',
      description:
        'Rechtzeitige Erkennung kritischer Liquiditätssituationen.',
    },
    {
      icon: TrendingUp,
      title: 'Standardisiertes Format für Kreditgespräche',
      description:
        'Banken verstehen die Unterlagen sofort – weniger Nachfragen, schnellere Kreditzusagen.',
    },
  ];

  return (
    <section className="border-t border-b bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            Liquiditätsunterlagen, die Banken verstehen
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Strukturierte Finanzplanung für erfolgreiche Kreditgespräche
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-6 sm:flex-row sm:items-start"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-teal-100">
                  <Icon className="h-6 w-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-base font-semibold text-navy-900 sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
          <p>
            <strong className="font-semibold">Hinweis:</strong> Liquiditätsplanung
            ist ein Standardinstrument deutscher Banken bei Finanzierungsgesprächen.
            Strukturierte, nachvollziehbare Unterlagen beschleunigen Kreditentscheidungen
            und verbessern Konditionen.
          </p>
        </div>
      </div>
    </section>
  );
}
