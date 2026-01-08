'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Ist die KI-Technologie in Deutschland rechtlich zulässig?',
    answer:
      'Ja. Die IPA-Plattform entspricht den Anforderungen der EU-KI-Verordnung (KI-VO). Sie ist kein verbotenes oder Hochrisiko-KI-System nach Art. 5 und Art. 6 KI-VO. Ein renommiertes Wirtschaftsrecht-Team hat die Plattform geprüft und bestätigt: IPA erfüllt alle regulatorischen Anforderungen für den Einsatz in Steuerkanzleien.',
  },
  {
    question: 'Wie sieht es mit der DSGVO-Konformität aus?',
    answer:
      'IPA ist vollständig DSGVO-konform. Sie sind als Kanzlei der datenschutzrechtliche Verantwortliche – IPA verarbeitet Daten ausschließlich auf Basis Ihres Mandatsvertrags (Art. 6 Abs. 1 lit. b DSGVO). Mandantendaten werden verschlüsselt verarbeitet, und Sie behalten die volle Datenhoheit. Die Plattform wurde von Datenschutzexperten validiert.',
  },
  {
    question: 'Welche Governance-Anforderungen gelten?',
    answer:
      'Für den Einsatz von IPA empfehlen wir die Implementierung minimalinvasiver Governance-Mechanismen: eine klare Aufsichtsstruktur, eine interne KI-Policy und Schulungen für Ihr Team. Diese Maßnahmen sind Best Practices und schaffen Rechtssicherheit. Wir unterstützen Sie bei der Umsetzung.',
  },
  {
    question: 'Haftet die Kanzlei für KI-generierte Ergebnisse?',
    answer:
      'IPA ist ein unterstützendes System – die finale Prüfung und Freigabe liegt immer bei Ihrer Fachkraft. Das System ist so konzipiert, dass Steuerberater die Kontrolle behalten und die Ergebnisse validieren. Damit erfüllen Sie die Anforderungen der KI-VO an den Einsatz von KI-Systemen in regulierten Berufen.',
  },
  {
    question: 'Wie schnell kann das live gehen?',
    answer:
      'Je nach Komplexität Ihrer Workflows zwischen 2–8 Wochen. Wir starten mit einem Pilotprozess, sammeln Feedback und skalieren dann schrittweise. Sie behalten volle Kontrolle über das Tempo.',
  },
  {
    question: 'Welche Datenquellen werden unterstützt?',
    answer:
      'IPA arbeitet mit gängigen Kanzlei-Systemen wie DATEV, E-Mail-Eingängen und digitalen Mandantenportalen. Die genaue Integration besprechen wir in der Demo – wir versprechen nur, was wir auch liefern können.',
  },
  {
    question: 'Ist das auch für kleine Kanzleien sinnvoll?',
    answer:
      'Absolut. Gerade kleinere Kanzleien profitieren von Automatisierung, weil sie ohne zusätzliches Personal mehr Mandanten betreuen können. Wir passen die Lösung an Ihre Größe und Ihr Budget an.',
  },
  {
    question: 'Was passiert nach der Demo?',
    answer:
      'Sie erhalten eine schriftliche Zusammenfassung mit konkreten Workflow-Empfehlungen und nächsten Schritten. Kein Verkaufsdruck – Sie entscheiden, ob und wann Sie weitermachen möchten.',
  },
  {
    question: 'Brauchen wir technisches Know-how?',
    answer:
      'Nein. IPA ist für Steuerberater gebaut, nicht für IT-Profis. Die Bedienung ist intuitiv, und wir schulen Ihr Team bei der Einführung. Support gibt es auch danach.',
  },
  {
    question: 'Was kostet die Automatisierung?',
    answer:
      'Die Kosten hängen von der Anzahl der automatisierten Prozesse und Mandanten ab. In der Demo besprechen wir Ihre Anforderungen und erstellen ein transparentes Angebot. Typischerweise amortisiert sich die Investition in unter 12 Monaten.',
  },
  {
    question: 'Können wir mit einem Prozess starten?',
    answer:
      'Ja, das empfehlen wir sogar. Starten Sie mit einem wiederkehrenden Prozess (z. B. Liquiditätsplanung oder BWA-Erstellung), sammeln Sie Erfahrungen und erweitern Sie dann schrittweise.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            Häufig gestellte Fragen
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Alles, was Sie wissen müssen
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-gray-50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="pr-4 text-base font-semibold text-navy-900 sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="border-t border-gray-200 p-5"
                >
                  <p className="text-sm text-gray-600 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
