/**
 * Benchmarks Table Section
 * 3 rows × 3 columns showing before/after process times
 * Mobile-optimized with responsive layout
 */
export default function BenchmarksTable() {
  return (
    <section id="benchmarks" className="py-16 md:py-20 bg-navy-900/50">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Benchmarks (Orientierungswerte)
          </h2>
          <p className="text-sm md:text-base text-navy-300 max-w-2xl mx-auto">
            Richtwerte aus Implementierungsprojekten für das Ankerpaket
          </p>
        </div>

        {/* Desktop & Tablet Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-navy-900/70">
                <th className="text-left px-6 py-4 text-sm font-semibold text-white border-b border-navy-700">
                  Prozessschritt
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-white border-b border-navy-700">
                  Manuell
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-white border-b border-navy-700">
                  Mit Plattform
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: Datenaufbereitung */}
              <tr className="border-b border-navy-700/50 hover:bg-navy-700/20 transition-colors">
                <td className="px-6 py-4 text-sm text-navy-200">
                  <div className="font-medium mb-1">Datenaufbereitung</div>
                  <div className="text-xs text-navy-400">
                    (z.B. BWA, Belege, Summenlisten)
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-navy-300">
                  15 bis 30 Min
                </td>
                <td className="px-6 py-4 text-sm text-teal-400 font-medium">
                  Sekunden bis &lt; 1 Min
                  <div className="text-xs text-navy-400 font-normal mt-1">
                    (abhängig von Eingangsdaten)
                  </div>
                </td>
              </tr>

              {/* Row 2: Kernberechnung */}
              <tr className="border-b border-navy-700/50 hover:bg-navy-700/20 transition-colors">
                <td className="px-6 py-4 text-sm text-navy-200">
                  <div className="font-medium mb-1">Kernberechnung</div>
                  <div className="text-xs text-navy-400">
                    (Steuerlast, Szenarien)
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-navy-300">
                  20 bis 40 Min
                </td>
                <td className="px-6 py-4 text-sm text-teal-400 font-medium">
                  Sekunden
                  <div className="text-xs text-navy-400 font-normal mt-1">
                    (über DATEV-API, wenn verfügbar)
                  </div>
                </td>
              </tr>

              {/* Row 3: Mandantenbericht */}
              <tr className="hover:bg-navy-700/20 transition-colors">
                <td className="px-6 py-4 text-sm text-navy-200">
                  <div className="font-medium mb-1">Mandantenbericht</div>
                  <div className="text-xs text-navy-400">
                    (Entwurf)
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-navy-300">
                  30 bis 60 Min
                </td>
                <td className="px-6 py-4 text-sm text-teal-400 font-medium">
                  &lt; 1 Min Entwurf
                  <div className="text-xs text-navy-400 font-normal mt-1">
                    (Review bleibt beim Steuerberater)
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="sm:hidden space-y-4">
          {/* Card 1 */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-5">
            <h3 className="font-semibold text-white mb-1">Datenaufbereitung</h3>
            <p className="text-xs text-navy-400 mb-4">(z.B. BWA, Belege, Summenlisten)</p>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-navy-500 mb-1">Manuell</div>
                <div className="text-sm text-navy-300">15 bis 30 Min</div>
              </div>
              <div>
                <div className="text-xs text-navy-500 mb-1">Mit Plattform</div>
                <div className="text-sm text-teal-400 font-medium">
                  Sekunden bis &lt; 1 Min
                  <div className="text-xs text-navy-400 font-normal mt-1">
                    (abhängig von Eingangsdaten)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-5">
            <h3 className="font-semibold text-white mb-1">Kernberechnung</h3>
            <p className="text-xs text-navy-400 mb-4">(Steuerlast, Szenarien)</p>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-navy-500 mb-1">Manuell</div>
                <div className="text-sm text-navy-300">20 bis 40 Min</div>
              </div>
              <div>
                <div className="text-xs text-navy-500 mb-1">Mit Plattform</div>
                <div className="text-sm text-teal-400 font-medium">
                  Sekunden
                  <div className="text-xs text-navy-400 font-normal mt-1">
                    (über DATEV-API, wenn verfügbar)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-5">
            <h3 className="font-semibold text-white mb-1">Mandantenbericht</h3>
            <p className="text-xs text-navy-400 mb-4">(Entwurf)</p>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-navy-500 mb-1">Manuell</div>
                <div className="text-sm text-navy-300">30 bis 60 Min</div>
              </div>
              <div>
                <div className="text-xs text-navy-500 mb-1">Mit Plattform</div>
                <div className="text-sm text-teal-400 font-medium">
                  &lt; 1 Min Entwurf
                  <div className="text-xs text-navy-400 font-normal mt-1">
                    (Review bleibt beim Steuerberater)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Footnote */}
        <p className="mt-6 text-center text-xs text-navy-500 italic">
          Werte sind Richtwerte aus Implementierungsprojekten, abhängig von Datenqualität und
          Workflow-Setup.
        </p>
      </div>
    </section>
  );
}
