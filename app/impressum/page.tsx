import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | IPA',
  description: 'Impressum und rechtliche Informationen',
};

export default function ImpressumPage() {
  return (
    <main className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl font-bold text-navy-900">Impressum</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
            <h2 className="mb-4 text-2xl font-bold text-red-900">
              ⚠️ Platzhalter - Bitte ausfüllen
            </h2>
            <p className="text-red-700">
              Dieses Impressum enthält Platzhalter und muss vor der
              Veröffentlichung mit den korrekten Unternehmensdaten ausgefüllt
              werden. Das Impressum ist in Deutschland gesetzlich vorgeschrieben
              (§ 5 TMG).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              <strong>[FIRMENNAME]</strong>
              <br />
              [Rechtsform, z.B. GmbH, UG, Einzelunternehmen]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ und Ort]
              <br />
              [Land]
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Vertreten durch
            </h2>
            <p>
              [Geschäftsführer/Inhaber Name]
              <br />
              [ggf. weitere Geschäftsführer]
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">Kontakt</h2>
            <p>
              Telefon: [Telefonnummer]
              <br />
              E-Mail:{' '}
              <a
                href="mailto:robin@houseofmaad.de"
                className="text-teal-600 hover:underline"
              >
                robin@houseofmaad.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Registereintrag
            </h2>
            <p>
              <em>(Falls zutreffend)</em>
            </p>
            <p>
              Eintragung im Handelsregister
              <br />
              Registergericht: [z.B. Amtsgericht Berlin]
              <br />
              Registernummer: [z.B. HRB 12345 B]
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Umsatzsteuer-ID
            </h2>
            <p>
              <em>(Falls zutreffend)</em>
            </p>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              [DE123456789]
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              <em>(Falls zutreffend, z.B. für Steuerberater)</em>
            </p>
            <p>
              Berufsbezeichnung: [z.B. Steuerberater]
              <br />
              Zuständige Kammer: [z.B. Steuerberaterkammer Berlin]
              <br />
              Verliehen in: [Deutschland]
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <p className="text-sm text-gray-500">
            Quelle: Teilweise erstellt mit{' '}
            <a
              href="https://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              e-recht24.de
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
