import { AlertCircle, Clock, FileX, TrendingDown } from 'lucide-react';

export default function ProblemFraming() {
  const problems = [
    {
      icon: Clock,
      title: 'Spitzenlasten bei Deadlines',
      description:
        'Regelmäßige Berichte und Auswertungen binden Ihr Senior-Team in manueller Datenaufbereitung.',
    },
    {
      icon: FileX,
      title: 'Unstrukturierte Unterlagen',
      description:
        'Kunden schicken Dokumente per E-Mail, WhatsApp oder Post – ohne System.',
    },
    {
      icon: TrendingDown,
      title: 'Wiederkehrende Reports kosten Zeit',
      description:
        'Regelmäßige Analysen, Berichte und Standardreports binden wertvolle Kapazität.',
    },
    {
      icon: AlertCircle,
      title: 'Inkonsistente Daten, hohe Fehlerkosten',
      description:
        'Manuelle Übertragungsfehler führen zu Rückfragen und Nacharbeit.',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            Kennen Sie das auch?
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Typische Herausforderungen in Dienstleistungsunternehmen
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                  <Icon className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-navy-900 sm:text-lg">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
