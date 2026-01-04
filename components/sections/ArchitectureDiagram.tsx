import { ArrowRight, FileText, Cog, Brain, UserCheck, Database, CheckCircle2 } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <section id="solution" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Wie IPA funktioniert
          </div>
          <h2 className="mb-4 text-3xl font-bold text-navy-900 lg:text-4xl">
            Intelligente · Prozess · Automatisierung · Steuer
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Human-in-the-Loop Architektur für maximale Kontrolle und Compliance
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="relative">
          {/* Mobile View - Vertical */}
          <div className="flex flex-col gap-4 md:hidden">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 shadow-md">
                <FileText className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="mt-3 font-semibold text-navy-900">Input</h3>
              <p className="text-center text-sm text-gray-600">
                Dokumente, E-Mails
              </p>
              <ArrowRight className="mt-3 h-6 w-6 rotate-90 text-gray-400" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 shadow-md">
                <Cog className="h-10 w-10 text-teal-700" />
              </div>
              <h3 className="mt-3 font-semibold text-navy-900">n8n Workflow</h3>
              <p className="text-center text-sm text-gray-600">
                Orchestration
              </p>
              <ArrowRight className="mt-3 h-6 w-6 rotate-90 text-gray-400" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 shadow-md">
                <Brain className="h-10 w-10 text-purple-700" />
              </div>
              <h3 className="mt-3 font-semibold text-navy-900">IPA Engine</h3>
              <p className="text-center text-sm text-gray-600">
                Local AI Processing
              </p>
              <ArrowRight className="mt-3 h-6 w-6 rotate-90 text-gray-400" />
            </div>

            {/* Step 4 - Firewall */}
            <div className="flex flex-col items-center rounded-xl border-2 border-red-500 bg-red-50 p-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-red-100 to-red-200 shadow-md">
                <UserCheck className="h-10 w-10 text-red-700" />
              </div>
              <h3 className="mt-3 font-semibold text-red-800">Human Approval</h3>
              <p className="text-center text-sm text-red-700">
                The Firewall
              </p>
              <p className="mt-2 text-center text-xs font-medium text-red-600">
                Nichts wird ohne Ihre Freigabe an DATEV übertragen
              </p>
              <ArrowRight className="mt-3 h-6 w-6 rotate-90 text-gray-400" />
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-green-200 shadow-md">
                <Database className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="mt-3 font-semibold text-navy-900">DATEV System</h3>
              <p className="text-center text-sm text-gray-600">
                Integration
              </p>
              <ArrowRight className="mt-3 h-6 w-6 rotate-90 text-gray-400" />
            </div>

            {/* Step 6 */}
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 shadow-md">
                <CheckCircle2 className="h-10 w-10 text-teal-700" />
              </div>
              <h3 className="mt-3 font-semibold text-navy-900">Output</h3>
              <p className="text-center text-sm text-gray-600">
                Bereit für Beratung
              </p>
            </div>
          </div>

          {/* Desktop View - Horizontal */}
          <div className="hidden md:flex md:items-center md:justify-between">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg">
                <FileText className="h-12 w-12 text-blue-700" />
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">Input</h3>
              <p className="text-sm text-gray-600">Dokumente</p>
            </div>

            <ArrowRight className="h-8 w-8 text-gray-400" />

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 shadow-lg">
                <Cog className="h-12 w-12 text-teal-700" />
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">n8n Workflow</h3>
              <p className="text-sm text-gray-600">Orchestration</p>
            </div>

            <ArrowRight className="h-8 w-8 text-gray-400" />

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg">
                <Brain className="h-12 w-12 text-purple-700" />
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">IPA Engine</h3>
              <p className="text-sm text-gray-600">Local AI</p>
            </div>

            <ArrowRight className="h-8 w-8 text-gray-400" />

            {/* Step 4 - Firewall */}
            <div className="flex flex-col items-center rounded-xl border-2 border-red-500 bg-red-50 p-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gradient-to-br from-red-100 to-red-200 shadow-lg">
                <UserCheck className="h-12 w-12 text-red-700" />
              </div>
              <h3 className="mt-4 font-semibold text-red-800">
                Human Approval
              </h3>
              <p className="text-sm font-medium text-red-600">The Firewall</p>
            </div>

            <ArrowRight className="h-8 w-8 text-gray-400" />

            {/* Step 5 */}
            <div className="flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-green-200 shadow-lg">
                <Database className="h-12 w-12 text-green-700" />
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">DATEV</h3>
              <p className="text-sm text-gray-600">Integration</p>
            </div>

            <ArrowRight className="h-8 w-8 text-gray-400" />

            {/* Step 6 */}
            <div className="flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 shadow-lg">
                <CheckCircle2 className="h-12 w-12 text-teal-700" />
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">Output</h3>
              <p className="text-sm text-gray-600">Bereit</p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-16 rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-navy-900">
            Der entscheidende Unterschied
          </h3>
          <p className="text-gray-700">
            IPA ersetzt nicht Ihre Berater – es befreit sie von repetitiven
            Aufgaben. Mit der <strong>Human-in-the-Loop</strong> Firewall
            behalten Sie die volle Kontrolle: Nichts wird ohne Ihre explizite
            Freigabe an DATEV übertragen.
          </p>
        </div>
      </div>
    </section>
  );
}
