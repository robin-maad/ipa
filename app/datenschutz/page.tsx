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

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              HubSpot (CRM & Marketing Automation)
            </h3>
            <p>
              Wir nutzen HubSpot, eine CRM- und Marketing-Automatisierungsplattform
              der HubSpot, Inc., 25 First Street, Cambridge, MA 02141, USA.
            </p>
            <p className="mt-2">
              <strong>Zweck der Verarbeitung:</strong> HubSpot ermöglicht uns die
              Verwaltung von Kontakten, die Automatisierung von Marketing-Kampagnen
              und die Analyse des Nutzerverhaltens auf unserer Website.
            </p>
            <p className="mt-2">
              <strong>Verarbeitete Daten:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Formulareingaben (Name, E-Mail, Telefon, Firma)</li>
              <li>Website-Verhalten (besuchte Seiten, Verweildauer)</li>
              <li>E-Mail-Interaktionen (Öffnungen, Klicks)</li>
              <li>Technische Daten (IP-Adresse, Browser, Gerät)</li>
            </ul>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner) bzw.
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Verbesserung
              unserer Dienstleistungen).
            </p>
            <p className="mt-2">
              <strong>Datenübermittlung:</strong> Ihre Daten werden in die USA übermittelt.
              HubSpot hat sich dem EU-US Data Privacy Framework angeschlossen und nutzt
              Standardvertragsklauseln.
            </p>
            <p className="mt-2">
              <strong>Speicherdauer:</strong> Die Daten werden gemäß den HubSpot-Richtlinien
              gespeichert, solange Sie uns nicht um Löschung bitten.
            </p>
            <p className="mt-2">
              Weitere Informationen:{' '}
              <a
                href="https://legal.hubspot.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                HubSpot Datenschutzerklärung
              </a>
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Google Tag Manager (GTM)
            </h3>
            <p>
              Wir nutzen den Google Tag Manager der Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-2">
              <strong>Zweck der Verarbeitung:</strong> Der Google Tag Manager ist ein
              Tag-Management-System, das es uns ermöglicht, Website-Tags (Tracking- und
              Analyse-Tools) zentral zu verwalten und ohne Änderung des Website-Codes
              einzubinden.
            </p>
            <p className="mt-2">
              <strong>Verarbeitete Daten:</strong> Der Tag Manager selbst speichert keine
              personenbezogenen Daten, ermöglicht jedoch die Einbindung von Tools, die
              Daten erfassen (siehe Google Analytics, Meta Pixel, TikTok Pixel).
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung
              über Cookie-Banner).
            </p>
            <p className="mt-2">
              Weitere Informationen:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Google Datenschutzerklärung
              </a>
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Google Analytics 4 (GA4)
            </h3>
            <p>
              Wir nutzen Google Analytics 4, einen Webanalysedienst der Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-2">
              <strong>Zweck der Verarbeitung:</strong> GA4 ermöglicht uns die Analyse
              des Nutzerverhaltens auf unserer Website, um unser Angebot zu verbessern
              und die Nutzerfreundlichkeit zu optimieren.
            </p>
            <p className="mt-2">
              <strong>Verarbeitete Daten:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>IP-Adressen (anonymisiert)</li>
              <li>Seitenaufrufe und Verweildauer</li>
              <li>Geräteinformationen (Browser, Betriebssystem, Bildschirmauflösung)</li>
              <li>Demografische Daten (Alter, Geschlecht - sofern verfügbar)</li>
              <li>Interessen und Nutzerverhalten</li>
              <li>Conversion-Events und Zielvorhaben</li>
            </ul>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung
              über Cookie-Banner).
            </p>
            <p className="mt-2">
              <strong>Datenübermittlung:</strong> Ihre Daten werden in die USA übermittelt.
              Google hat sich dem EU-US Data Privacy Framework angeschlossen.
            </p>
            <p className="mt-2">
              <strong>Widerspruchsmöglichkeit:</strong> Sie können die Erfassung durch
              Google Analytics verhindern, indem Sie das{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>{' '}
              installieren.
            </p>
            <p className="mt-2">
              Weitere Informationen:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Google Datenschutzerklärung
              </a>
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Meta Pixel (Facebook Pixel) & Custom Audiences
            </h3>
            <p>
              Wir nutzen das Meta Pixel (ehemals Facebook Pixel) von Meta Platforms
              Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.
            </p>
            <p className="mt-2">
              <strong>Zweck der Verarbeitung:</strong> Das Meta Pixel ermöglicht uns:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Erfolgsmessung unserer Facebook- und Instagram-Werbekampagnen</li>
              <li>Remarketing an Website-Besucher</li>
              <li>Erstellung von Custom Audiences für zielgerichtete Werbung</li>
              <li>Conversion-Tracking (z.B. Kontaktanfragen, Terminbuchungen)</li>
            </ul>
            <p className="mt-2">
              <strong>Verarbeitete Daten:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Website-Interaktionen (Seitenaufrufe, Klicks, Formularübermittlungen)</li>
              <li>Gehashte E-Mail-Adressen (SHA-256) für Advanced Matching</li>
              <li>Geräteinformationen und Browser-Daten</li>
              <li>Facebook-Cookie-ID (falls angemeldet)</li>
            </ul>
            <p className="mt-2">
              <strong>Custom Audiences:</strong> Mit Ihrer Einwilligung erstellen wir
              Custom Audiences auf Basis von:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Website-Besuchern (über Pixel-Daten)</li>
              <li>Kontaktlisten mit gehashten E-Mail-Adressen</li>
              <li>Nutzerinteraktionen und Conversion-Events</li>
            </ul>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung
              über Cookie-Banner).
            </p>
            <p className="mt-2">
              <strong>Datenübermittlung:</strong> Ihre Daten werden an Meta in Irland
              und ggf. in die USA übermittelt. Meta nutzt Standardvertragsklauseln für
              internationale Datentransfers.
            </p>
            <p className="mt-2">
              Weitere Informationen:{' '}
              <a
                href="https://www.facebook.com/privacy/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Meta Datenschutzerklärung
              </a>
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              TikTok Pixel & Tracking
            </h3>
            <p>
              Wir nutzen den TikTok Pixel von TikTok Technology Limited, 10 Earlsfort
              Terrace, Dublin, D02 T380, Irland.
            </p>
            <p className="mt-2">
              <strong>Zweck der Verarbeitung:</strong> Der TikTok Pixel ermöglicht uns:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Erfolgsmessung unserer TikTok-Werbekampagnen</li>
              <li>Conversion-Tracking und Optimierung</li>
              <li>Erstellung von Custom Audiences für zielgerichtete Werbung</li>
              <li>Remarketing an Website-Besucher</li>
            </ul>
            <p className="mt-2">
              <strong>Verarbeitete Daten:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Website-Interaktionen (PageView, ClickButton, Contact, etc.)</li>
              <li>Gehashte E-Mail-Adressen und Telefonnummern für Enhanced Match</li>
              <li>Geräteinformationen und Browser-Daten</li>
              <li>Event-Daten (z.B. Formularübermittlungen, Terminbuchungen)</li>
            </ul>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung
              über Cookie-Banner).
            </p>
            <p className="mt-2">
              <strong>Datenübermittlung:</strong> Ihre Daten werden international
              verarbeitet, einschließlich China und USA. TikTok nutzt
              Standardvertragsklauseln für internationale Datentransfers.
            </p>
            <p className="mt-2">
              Weitere Informationen:{' '}
              <a
                href="https://www.tiktok.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                TikTok Datenschutzerklärung
              </a>
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Server-Side Tracking & Gehashte Datenverarbeitung
            </h3>
            <p>
              Zusätzlich zum clientseitigen Tracking nutzen wir Server-Side Tracking
              über den Google Tag Manager Server-Container.
            </p>
            <p className="mt-2">
              <strong>Zweck der Verarbeitung:</strong> Server-Side Tracking ermöglicht:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Präzisere Tracking-Daten durch Umgehung von Browser-Beschränkungen</li>
              <li>Datenschutzfreundlichere Verarbeitung durch serverseitiges Hashing</li>
              <li>Verbesserte Conversion-Attribution</li>
              <li>Reduzierte Client-Last und bessere Website-Performance</li>
            </ul>
            <p className="mt-2">
              <strong>Verarbeitete Daten:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>E-Mail-Adressen (ausschließlich als SHA-256 Hash übermittelt)</li>
              <li>Telefonnummern (gehashed)</li>
              <li>Conversion-Events (z.B. Lead, Contact, Purchase)</li>
              <li>Anonymisierte Nutzer-IDs</li>
            </ul>
            <p className="mt-2">
              <strong>Sicherheitsmaßnahmen:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Alle personenbezogenen Daten werden vor der Übertragung mit SHA-256
                gehashed (Einweg-Verschlüsselung)
              </li>
              <li>Keine Speicherung von Klardaten auf unseren Servern</li>
              <li>Verschlüsselte Übertragung (HTTPS/TLS)</li>
              <li>Minimierung der übertragenen Datenfelder</li>
            </ul>
            <p className="mt-2">
              <strong>Empfänger:</strong> Gehashte Event-Daten werden serverseitig an
              folgende Plattformen weitergeleitet:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Meta (Facebook/Instagram) Conversions API</li>
              <li>TikTok Events API</li>
              <li>Google Analytics 4 Measurement Protocol</li>
            </ul>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung
              über Cookie-Banner) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an verbesserter Attribution bei gleichzeitigem Datenschutz).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              5. Cookie-Banner & Consent Management
            </h2>
            <p>
              Diese Website verwendet Cookies und Tracking-Technologien. Bei Ihrem
              ersten Besuch werden Sie durch ein Cookie-Banner über die Verwendung
              von Cookies informiert und um Ihre Einwilligung gebeten.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Cookie-Kategorien
            </h3>
            <p>
              <strong>Essenziell / Notwendig:</strong> Diese Cookies sind für die
              grundlegende Funktionalität der Website erforderlich und werden ohne
              Ihre Zustimmung gesetzt. Dazu gehören:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Session-Cookies für die Website-Funktionalität</li>
              <li>Cookies für die Speicherung Ihrer Cookie-Einstellungen</li>
            </ul>

            <p className="mt-4">
              <strong>Analyse / Analytics:</strong> Diese Cookies helfen uns, das
              Nutzerverhalten zu verstehen und die Website zu verbessern. Erfordert
              Ihre Einwilligung:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Google Analytics 4 Cookies</li>
              <li>HubSpot Analytics Cookies</li>
            </ul>

            <p className="mt-4">
              <strong>Marketing / Werbung:</strong> Diese Cookies ermöglichen
              personalisierte Werbung und Remarketing. Erfordert Ihre Einwilligung:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Meta Pixel Cookies (Facebook/Instagram)</li>
              <li>TikTok Pixel Cookies</li>
              <li>HubSpot Marketing Cookies</li>
            </ul>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Verwaltung Ihrer Cookie-Einstellungen
            </h3>
            <p>
              Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Das Cookie-Banner erneut aufrufen (Link im Footer oder Button auf
                dieser Seite)
              </li>
              <li>
                Cookies in Ihren Browser-Einstellungen löschen oder blockieren
              </li>
              <li>
                Browser-Plugins wie "Google Analytics Opt-out" installieren
              </li>
            </ul>

            <p className="mt-4">
              <strong>Hinweis:</strong> Das Deaktivieren bestimmter Cookies kann die
              Funktionalität der Website einschränken.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              6. Datenübermittlung in Drittländer
            </h2>
            <p>
              Bei der Nutzung unserer Website werden personenbezogene Daten an
              Dienstleister in Ländern außerhalb der Europäischen Union übermittelt.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Datenübermittlung in die USA
            </h3>
            <p>
              Folgende Dienste übermitteln Daten in die USA:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong>Google (Google Analytics 4, Google Tag Manager):</strong> Google
                LLC hat sich dem EU-US Data Privacy Framework angeschlossen, wodurch ein
                angemessenes Datenschutzniveau gewährleistet wird. Zusätzlich werden
                Standardvertragsklauseln verwendet.
              </li>
              <li>
                <strong>HubSpot:</strong> HubSpot, Inc. hat sich dem EU-US Data Privacy
                Framework angeschlossen und nutzt Standardvertragsklauseln der EU-Kommission.
              </li>
              <li>
                <strong>Meta (Facebook/Instagram):</strong> Meta Platforms, Inc. nutzt
                Standardvertragsklauseln für internationale Datentransfers und zusätzliche
                Schutzmaßnahmen.
              </li>
            </ul>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Datenübermittlung nach Asien
            </h3>
            <p>
              <strong>TikTok:</strong> TikTok verarbeitet Daten international,
              einschließlich China, Singapur und USA. TikTok nutzt Standardvertragsklauseln
              und hat zusätzliche technische und organisatorische Maßnahmen zum Schutz
              Ihrer Daten implementiert.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Rechtliche Grundlagen für Drittlandübermittlungen
            </h3>
            <p>
              Die Übermittlung Ihrer Daten in Drittländer erfolgt auf Grundlage von:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong>Art. 45 DSGVO:</strong> Angemessenheitsbeschlüsse der
                EU-Kommission (z.B. EU-US Data Privacy Framework)
              </li>
              <li>
                <strong>Art. 46 DSGVO:</strong> Standardvertragsklauseln (Standard
                Contractual Clauses / SCC) der EU-Kommission
              </li>
              <li>
                <strong>Art. 49 Abs. 1 lit. a DSGVO:</strong> Ihre ausdrückliche
                Einwilligung nach Information über mögliche Risiken
              </li>
            </ul>

            <p className="mt-4">
              <strong>Hinweis zu Risiken:</strong> Bei der Übermittlung von Daten in
              Drittländer besteht das Risiko, dass Behörden auf Ihre Daten zugreifen
              können, ohne dass Sie darüber informiert werden oder Rechtsmittel
              einlegen können. Dies gilt insbesondere für die USA.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              7. Ihre Rechte
            </h2>

            <h3 className="mb-2 text-xl font-semibold text-navy-800">
              Ihre Datenschutzrechte
            </h3>
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
                gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer
                personenbezogenen Daten einzulegen
              </li>
              <li>
                gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu
                beschweren
              </li>
            </ul>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Widerrufsrecht bei Einwilligung
            </h3>
            <p>
              Sofern die Verarbeitung Ihrer Daten auf einer Einwilligung beruht,
              haben Sie das Recht, diese Einwilligung jederzeit zu widerrufen.
              Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
              bleibt davon unberührt.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-semibold text-navy-800">
              Widerspruchsrecht gegen Tracking
            </h3>
            <p>
              Sie haben folgende Möglichkeiten, der Datenerfassung durch
              Tracking-Dienste zu widersprechen:
            </p>

            <p className="mt-4">
              <strong>Cookie-Einstellungen:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Rufen Sie das Cookie-Banner erneut auf und deaktivieren Sie
                Analytics- und Marketing-Cookies
              </li>
              <li>
                Löschen Sie bestehende Cookies in Ihren Browser-Einstellungen
              </li>
            </ul>

            <p className="mt-4">
              <strong>Google Analytics Opt-out:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Installieren Sie das{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li>
                Aktivieren Sie "Do Not Track" in Ihren Browser-Einstellungen
              </li>
            </ul>

            <p className="mt-4">
              <strong>Meta (Facebook/Instagram) Opt-out:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Verwalten Sie Ihre Werbeeinstellungen in Ihrem{' '}
                <a
                  href="https://www.facebook.com/ads/preferences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  Facebook-Konto
                </a>
              </li>
              <li>
                Nutzen Sie die{' '}
                <a
                  href="https://www.youronlinechoices.com/de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  European Interactive Digital Advertising Alliance (EDAA)
                </a>
              </li>
            </ul>

            <p className="mt-4">
              <strong>TikTok Opt-out:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Verwalten Sie Ihre Werbeeinstellungen in den{' '}
                <a
                  href="https://www.tiktok.com/privacy/ads-and-your-data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  TikTok Privacy Settings
                </a>
              </li>
            </ul>

            <p className="mt-4">
              <strong>Browser-Einstellungen:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Blockieren Sie Cookies von Drittanbietern in Ihrem Browser</li>
              <li>Nutzen Sie den privaten/Inkognito-Modus Ihres Browsers</li>
              <li>
                Verwenden Sie Tracking-Blocker wie Privacy Badger oder uBlock Origin
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-navy-900">
              8. Speicherdauer
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
                href="mailto:alex@smithundpartners.de"
                className="text-teal-600 hover:underline"
              >
                alex@smithundpartners.de
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
