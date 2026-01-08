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
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              <strong>Smith & Partners a brand of Rooftop UG (limited liability)</strong>
              <br />
              Richard-Breitenfeld-Strasse 56
              <br />
              60438 Frankfurt
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Vertreten durch
            </h2>
            <p>
              Kerstin Clessienne
              <br />
              Geschäftsführerin
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">Kontakt</h2>
            <p>
              Telefon: +49 170 8211993
              <br />
              E-Mail:{' '}
              <a
                href="mailto:alex@smithundpartners.de"
                className="text-teal-600 hover:underline"
              >
                alex@smithundpartners.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              DE278711668
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
