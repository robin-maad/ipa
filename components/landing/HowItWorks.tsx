import { Upload, Cog, FileCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      number: '1',
      title: 'Kundendaten einsammeln',
      description:
        'Unterlagen kommen strukturiert über Portal oder E-Mail rein – automatisch kategorisiert.',
    },
    {
      icon: Cog,
      number: '2',
      title: 'Automatisierte Strukturierung + Checks',
      description:
        'Daten werden extrahiert, validiert und auf Vollständigkeit geprüft – ohne manuelle Eingriffe.',
    },
    {
      icon: FileCheck,
      number: '3',
      title: 'Outputs: Reports, Dokumente, Exports',
      description:
        'Fertige Berichte, Analysen und System-Exporte – direkt nutzbar.',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            So funktioniert's
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            In 3 einfachen Schritten zu strukturierten Prozessen
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col gap-4 sm:flex-row sm:items-start"
              >
                {/* Step Number + Icon */}
                <div className="flex flex-shrink-0 items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                    {step.number}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50">
                    <Icon className="h-6 w-6 text-teal-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-navy-900 sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-teal-200 bg-teal-50 p-4 text-sm text-teal-900">
          <p>
            <strong className="font-semibold">Wichtig:</strong> Wir listen nur
            Kanäle und Integrationen, die tatsächlich existieren – keine
            Marketing-Versprechen.
          </p>
        </div>
      </div>
    </section>
  );
}
