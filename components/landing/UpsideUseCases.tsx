import { CheckCircle } from 'lucide-react';

/**
 * Upside Use Cases Section
 * Small block with 6 bullets showing additional workflows beyond the calculator's scope
 */
export default function UpsideUseCases() {
  const useCases = [
    'BWA-Einordnung plus Mandanten-Kommunikation',
    'Dokumente vom Mandanten automatisch strukturieren (Intake)',
    'E-Mail-Triage plus Antwortentwürfe',
    'Standardisierte Fristen- und Nachweisanfragen',
    'Datenzusammenführung aus unstrukturierten Quellen',
    'Vorlagen, Textbausteine, Wissensbasis pro Kanzlei',
  ];

  return (
    <section id="upside-use-cases" className="py-12 md:py-16 bg-navy-900/20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Weitere Workflows, die zusätzlich ROI erzeugen
          </h2>
          <p className="text-sm text-navy-400 max-w-2xl mx-auto">
            Der Kalkulator bildet nur das Ankerpaket ab, die folgenden Punkte kommen on top.
          </p>
        </div>

        {/* Use Cases List */}
        <div className="bg-navy-800/30 backdrop-blur-sm border border-navy-700 rounded-xl p-6 md:p-8">
          <ul className="space-y-3">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-navy-200">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clarification Note */}
        <p className="mt-6 text-center text-xs text-navy-500 italic">
          Diese zusätzlichen Workflows werden nicht im ROI-Rechner berücksichtigt, erhöhen
          jedoch das tatsächliche Einsparpotenzial erheblich.
        </p>
      </div>
    </section>
  );
}
