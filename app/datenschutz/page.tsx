import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | IPA',
  description: 'Datenschutzerklärung für die IPA Website',
};

export default function DatenschutzPage() {
  return (
    <main className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl font-bold text-navy-900">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">
            Stand: {new Date().toLocaleDateString('de-DE')}
          </p>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="mb-2 text-xl font-semibold text-navy-800">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              2. Verantwortliche Stelle
            </h2>
            <p>
              <strong>[PLATZHALTER - BITTE ERGÄNZEN]</strong>
            </p>
            <p>
              Firma: [Firmenname]
              <br />
              Straße: [Straße und Hausnummer]
              <br />
              PLZ/Ort: [PLZ und Ort]
              <br />
              E-Mail: robin@houseofmaad.de
              <br />
              Telefon: [Telefonnummer]
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="mb-2 text-xl font-semibold text-navy-800">
              Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
              Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Welche Daten erfassen wir?
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Firmenname</li>
              <li>Anzahl der Mitarbeiter</li>
              <li>Ihre Nachricht (optional)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              4. Externe Dienste
            </h2>

            <h3 className="mb-2 text-xl font-semibold text-navy-800">
              Cal.com (Terminbuchung)
            </h3>
            <p>
              Zur Terminvereinbarung nutzen wir den Dienst Cal.com. Wenn Sie
              einen Termin buchen, werden Ihre Daten an Cal.com übermittelt.
              Weitere Informationen finden Sie in der Datenschutzerklärung von
              Cal.com: https://cal.com/privacy
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              E-Mail-Versand (Resend)
            </h3>
            <p>
              Für den Versand von Benachrichtigungen nutzen wir den Dienst
              Resend. Ihre Formulardaten werden über Resend an uns weitergeleitet.
              Weitere Informationen: https://resend.com/legal/privacy-policy
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              5. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
                personenbezogenen Daten zu verlangen
              </li>
              <li>
                gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger
                oder Vervollständigung Ihrer bei uns gespeicherten
                personenbezogenen Daten zu verlangen
              </li>
              <li>
                gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
                personenbezogenen Daten zu verlangen
              </li>
              <li>
                gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen
              </li>
              <li>
                gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns
                bereitgestellt haben, in einem strukturierten, gängigen und
                maschinenlesbaren Format zu erhalten
              </li>
              <li>
                gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu
                beschweren
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              6. Speicherdauer
            </h2>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
            </p>
          </section>

          <section className="rounded-lg border border-teal-200 bg-teal-50 p-6">
            <h2 className="mb-4 text-2xl font-bold text-navy-900">Kontakt</h2>
            <p>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
              personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung
              oder Löschung von Daten wenden Sie sich bitte an:
            </p>
            <p className="mt-4 font-semibold">
              E-Mail:{' '}
              <a
                href="mailto:robin@houseofmaad.de"
                className="text-teal-600 hover:underline"
              >
                robin@houseofmaad.de
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-500">
            <strong>Hinweis:</strong> Diese Datenschutzerklärung enthält
            Platzhalter und muss vor der Veröffentlichung von einem
            Rechtsanwalt geprüft und angepasst werden.
          </p>
        </div>
      </div>
    </main>
  );
}
