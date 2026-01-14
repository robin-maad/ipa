'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, FileText, CheckCircle, Calendar, FileSpreadsheet, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProvenWorkflows() {
  const workflows = [
    {
      icon: Mail,
      title: 'E-Mail-Triage & Routing',
      description:
        'Klassifizieren, priorisieren, zustellen, Eskalationen automatisch auslösen',
      steps: [
        'E-Mails klassifizieren',
        'Priorität bewerten',
        'An zuständiges Team routen',
        'Eskalationen auslösen',
        'Status tracken',
      ],
      impact: '5-8 Stunden → 30 Minuten',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-100 to-blue-200',
    },
    {
      icon: FileText,
      title: 'Dokumenten-Intake & Ablage',
      description: 'Anhänge erfassen, benennen, verschlagworten, korrekt ablegen',
      steps: [
        'Dokumente erfassen',
        'Automatisch benennen',
        'Metadaten extrahieren',
        'Verschlagworten',
        'Strukturiert ablegen',
      ],
      impact: '6-10 Stunden → 1 Stunde',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-100 to-teal-200',
    },
    {
      icon: CheckCircle,
      title: 'Nachweis- und Freigabeprozesse',
      description: 'Anfordern, prüfen, erinnern, Freigaben dokumentieren',
      steps: [
        'Nachweise anfordern',
        'Vollständigkeit prüfen',
        'Erinnerungen versenden',
        'Freigaben einholen',
        'Dokumentieren',
      ],
      impact: '8-12 Stunden → 2 Stunden',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-100 to-purple-200',
    },
    {
      icon: Calendar,
      title: 'Fristen & Aufgabensteuerung',
      description: 'Fristen aus Mails/Dokumenten erkennen, Tasks anlegen, Status tracken',
      steps: [
        'Fristen erkennen',
        'Tasks automatisch anlegen',
        'Erinnerungen setzen',
        'Status überwachen',
        'Eskalationen managen',
      ],
      impact: '4-6 Stunden → 30 Minuten',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-100 to-orange-200',
    },
    {
      icon: FileSpreadsheet,
      title: 'Formular- und Datenerfassung',
      description: 'Webformulare, CSVs, PDFs in strukturierte Datensätze überführen',
      steps: [
        'Formulare auslesen',
        'Daten extrahieren',
        'Validieren',
        'Strukturieren',
        'In System übertragen',
      ],
      impact: '6-10 Stunden → 1-2 Stunden',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-100 to-green-200',
    },
    {
      icon: Brain,
      title: 'Wissensbasierte Antworten',
      description: 'Standardanfragen mit internen Richtlinien und Vorlagen beantworten',
      steps: [
        'Anfrage analysieren',
        'Wissensbank durchsuchen',
        'Antwort generieren',
        'Freigabe einholen',
        'Antwort versenden',
      ],
      impact: '10-15 Stunden → 2-3 Stunden',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-100 to-indigo-200',
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
            Beispiele für Use Cases, die Sie mit intelligenter Prozessautomatisierung schnell umsetzen können
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            Diese Workflows sind nur der Anfang. IPA kann an Ihre
            spezifischen Prozesse angepasst werden.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Prozessanalyse anfragen
          </Button>
        </div>
      </div>
    </section>
  );
}
