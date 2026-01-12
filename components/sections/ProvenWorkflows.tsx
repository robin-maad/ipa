import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, UserPlus, Calculator, ArrowRight } from 'lucide-react';

export default function ProvenWorkflows() {
  const workflows = [
    {
      icon: FileText,
      title: 'Dokumentenverarbeitung',
      description:
        'Automatisierte Verarbeitung von eingehenden Dokumenten',
      steps: [
        'Dokumentensammlung',
        'Extraktion relevanter Informationen',
        'Plausibilitätsprüfung',
        'Kategorisierung und Routing',
        'Human Approval',
      ],
      impact: '4-6 Stunden → 20 Minuten',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-100 to-blue-200',
    },
    {
      icon: UserPlus,
      title: 'Neuer Kunde',
      description: 'Onboarding-Prozess für neue Kunden',
      steps: [
        'Dokumentensammlung',
        'Datenerfassung',
        'System-Setup',
        'Workflow-Setup',
        'Qualitätsprüfung',
      ],
      impact: '6-10 Stunden → 1 Stunde',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-100 to-teal-200',
    },
    {
      icon: Calculator,
      title: 'Compliance-Prüfung',
      description: 'Laufende Prüfung und Beleg-Verarbeitung',
      steps: [
        'Belege digitalisieren',
        'Kontrolle durchführen',
        'Prüfprotokoll erstellen',
        'Belege-Freigabe',
        'System-Übertragung',
      ],
      impact: '12-15 Stunden → 2-3 Stunden',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-100 to-purple-200',
    },
  ];

  return (
    <section id="workflows" className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Bewährte Workflows
          </div>
          <h2 className="mb-4 text-3xl font-bold text-navy-900 lg:text-4xl">
            Automatisierte Standard-Workflows
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Drei vollständig implementierte Workflows, erprobt in
            Produktionsumgebungen
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {workflows.map((workflow, index) => {
            const Icon = workflow.icon;
            return (
              <Card
                key={index}
                className="group border-0 shadow-lg transition-all hover:shadow-xl"
              >
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${workflow.bgColor} shadow-md`}
                  >
                    <Icon className={`h-7 w-7 bg-gradient-to-br ${workflow.color} bg-clip-text text-transparent`} />
                  </div>
                  <CardTitle className="text-xl text-navy-900">
                    {workflow.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {workflow.description}
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Steps */}
                  <div className="mb-6 space-y-2">
                    {workflow.steps.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                          {stepIndex + 1}
                        </div>
                        <span className="text-sm text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div
                    className={`flex items-center justify-between rounded-lg bg-gradient-to-r ${workflow.bgColor} p-4`}
                  >
                    <span className="text-xs font-semibold text-gray-700">
                      Zeitersparnis:
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {workflow.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-md">
          <h3 className="mb-2 text-2xl font-bold text-navy-900">
            Ihre eigenen Workflows
          </h3>
          <p className="mb-6 text-gray-600">
            Diese drei Workflows sind nur der Anfang. IPA kann an Ihre
            spezifischen Prozesse angepasst werden.
          </p>
          <div className="flex items-center justify-center gap-2 text-teal-600">
            <span className="font-semibold">
              Besprechen Sie Ihre Anforderungen in der Prozessanalyse
            </span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
