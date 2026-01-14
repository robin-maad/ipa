import { Phone, Monitor, Rocket } from 'lucide-react';

export default function PathToProduction() {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Prozessanalyse',
      description:
        'Wir identifizieren die wichtigsten repetitiven Abläufe, klären Ziele, Risiken und Systemgrenzen',
      details: [
        'Analyse Ihrer aktuellen Workflows',
        'Identifikation von Automatisierungspotenzial',
        'Erste ROI-Schätzung',
        'Keine Verpflichtung',
      ],
      color: 'teal',
    },
    {
      icon: Monitor,
      number: '02',
      title: 'Automatisierungsdesign',
      description:
        'Wir definieren Datenflüsse, Regeln, Ausnahmen und Freigaben, inklusive Monitoring und Audit-Trail',
      details: [
        'Workflow-Design und Mapping',
        'Definition der Regeln und Ausnahmen',
        'Freigabeprozesse festlegen',
        'Monitoring-Strategie entwickeln',
      ],
      color: 'blue',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Umsetzung & Skalierung',
      description:
        'Wir implementieren den Workflow, messen Wirkung und rollen anschließend weitere Use Cases aus',
      details: [
        'Installation und Integration',
        'Workflow-Konfiguration',
        'Team-Schulung und Onboarding',
        'Kontinuierliche Optimierung',
      ],
      color: 'purple',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Ihr Weg zur Produktivität
          </div>
          <h2 className="mb-4 text-3xl font-bold text-navy-900 lg:text-4xl">
            Drei einfache Schritte
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Von der ersten Analyse bis zum produktiven Einsatz
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200 lg:block" />

          {/* Steps Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="group relative rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-teal-700 text-lg font-bold text-white shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`mb-6 mt-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-${step.color}-100 to-${step.color}-200 shadow-md`}
                    >
                      <Icon className={`h-8 w-8 text-${step.color}-700`} />
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-2xl font-bold text-navy-900">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-gray-600">{step.description}</p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                          <span className="text-sm text-gray-700">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="my-4 flex justify-center lg:hidden">
                      <div className="h-8 w-0.5 bg-gradient-to-b from-gray-300 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-8 text-center">
          <p className="text-lg font-medium text-gray-700">
            Starten Sie mit einem Use Case, der sofort entlastet, und skalieren Sie iterativ
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Kein langwieriger Verkaufsprozess. Kein verstecktes Kleingedrucktes.
            Nur pragmatischer Fortschritt.
          </p>
        </div>
      </div>
    </section>
  );
}
