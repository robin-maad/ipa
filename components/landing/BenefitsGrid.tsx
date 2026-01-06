import {
  CheckCircle2,
  Workflow,
  TrendingUp,
  MessageSquare,
  Eye,
  Users,
} from 'lucide-react';

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Weniger Nacharbeit',
      description:
        'Standardisierte Prozesse reduzieren Rückfragen und manuelle Korrekturen.',
    },
    {
      icon: Workflow,
      title: 'Standardisierte Kanzlei-Workflows',
      description:
        'Einheitliche Abläufe für alle Mandanten – reproduzierbar und skalierbar.',
    },
    {
      icon: TrendingUp,
      title: 'Schnellere Dokumenterstellung',
      description:
        'Von Rohdaten zu fertigen Unterlagen in Minuten statt Stunden.',
    },
    {
      icon: MessageSquare,
      title: 'Bessere Mandantenkommunikation',
      description:
        'Automatisierte Status-Updates und transparente Fortschrittsverfolgung.',
    },
    {
      icon: Eye,
      title: 'Transparente Bearbeitung',
      description:
        'Weniger offene Schleifen, klare Verantwortlichkeiten, nachvollziehbare Prozesse.',
    },
    {
      icon: Users,
      title: 'Skalierung ohne Assistenz',
      description:
        'Mehr Mandanten betreuen, ohne zusätzliches Personal einstellen zu müssen.',
    },
  ];

  const metrics = [
    {
      label: 'DUMMY METRIC',
      value: '6–10 Std./Woche',
      description: 'weniger manuelle Datennacharbeit',
    },
    {
      label: 'DUMMY METRIC',
      value: '30–40%',
      description: 'schnellere Dokumenterstellung',
    },
    {
      label: 'DUMMY METRIC',
      value: '1 Tag',
      description: 'weniger Durchlaufzeit bei Standardfällen',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            Vorteile für Ihre Kanzlei
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Messbare Verbesserungen in Ihren täglichen Abläufen
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                  <Icon className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-navy-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Dummy Metrics - Clearly Labeled */}
        <div className="rounded-lg border-2 border-dashed border-orange-300 bg-orange-50 p-6">
          <div className="mb-4 text-center">
            <span className="inline-block rounded bg-orange-200 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-900">
              Platzhalter-Metriken
            </span>
            <p className="mt-2 text-sm text-orange-800">
              Diese Werte sind Beispiele und werden durch echte Kundendaten
              ersetzt
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="rounded-lg border border-orange-200 bg-white p-4 text-center"
              >
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
                  {metric.label}
                </div>
                <div className="mb-1 text-2xl font-bold text-navy-900">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
