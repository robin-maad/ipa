export default function ComplianceSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            Rechtssicherheit für Ihre Kanzlei
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Von führenden Rechtsexperten validiert
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {/* Compliance Badge 1 - EU-KI-VO */}
          <div className="rounded-xl border-2 border-teal-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
              <svg
                className="h-6 w-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-navy-900">
              EU-KI-VO konform
            </h3>
            <p className="text-sm text-gray-600">
              Kein verbotenes oder Hochrisiko-KI-System nach EU-KI-Verordnung.
              Von Wirtschaftsrechtlern geprüft und als regulatorisch konform
              eingestuft.
            </p>
          </div>

          {/* Compliance Badge 2 - DSGVO */}
          <div className="rounded-xl border-2 border-blue-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <svg
                className="h-6 w-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-navy-900">
              DSGVO-validiert
            </h3>
            <p className="text-sm text-gray-600">
              Vollständige DSGVO-Konformität bestätigt. Rechtsgrundlage ist Ihr
              Mandatsvertrag (Art. 6 Abs. 1 lit. b DSGVO). Sie bleiben
              datenschutzrechtlich Verantwortlicher.
            </p>
          </div>

          {/* Compliance Badge 3 - Governance */}
          <div className="rounded-xl border-2 border-purple-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <svg
                className="h-6 w-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-navy-900">
              Governance-Ready
            </h3>
            <p className="text-sm text-gray-600">
              Best-Practice Governance-Mechanismen implementierbar:
              Aufsichtsstrukturen, KI-Policy und Fachkraftschulungen für
              maximale Rechtssicherheit.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="mx-auto max-w-3xl text-sm text-gray-500">
            <strong>Rechtliche Validierung:</strong> Ein führendes
            Wirtschaftsrecht-Team hat IPA umfassend geprüft – von
            KI-VO-Compliance über Datenschutz bis zu branchenspezifischen
            Anforderungen. Das Ergebnis: IPA erfüllt alle regulatorischen
            Standards für den Einsatz in deutschen Steuerkanzleien.
          </p>
        </div>
      </div>
    </section>
  );
}
