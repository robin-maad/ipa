import { Video, Lightbulb, FileText } from 'lucide-react';

export default function OfferSection() {
  const offerItems = [
    {
      icon: Video,
      title: '20-minütige Live-Demo',
      description:
        'Sehen Sie IPA in Aktion – zugeschnitten auf Ihre Kanzlei-Workflows.',
    },
    {
      icon: Lightbulb,
      title: '2–3 maßgeschneiderte Workflow-Empfehlungen',
      description:
        'Konkrete Vorschläge, welche Prozesse Sie als erstes automatisieren sollten.',
    },
    {
      icon: FileText,
      title: 'Beispiel: Liquiditätsplanung für Banken',
      description:
        'Template-Vorschau der standardisierten Bank-Unterlagen (falls verfügbar).',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            Was Sie von uns bekommen
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Keine Verkaufspräsentation – sondern echte Einblicke
          </p>
        </div>

        <div className="space-y-6">
          {offerItems.map((item, index) => {
            const Icon = item.icon;
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
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-teal-200 bg-teal-50 p-6 text-center">
          <p className="text-sm font-semibold text-teal-900 sm:text-base">
            Unverbindlich · Keine Verkaufsanrufe · Antwort innerhalb 24h
          </p>
        </div>
      </div>
    </section>
  );
}
