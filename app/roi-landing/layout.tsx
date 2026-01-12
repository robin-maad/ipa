import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ROI-Rechner: KI-gestützte Prozessautomatisierung für Steuerkanzleien',
  description: 'Berechnen Sie das Einsparpotenzial von Steuerlast-Prognose plus Mandantenbericht. Bis zu 10.000€+ jährlich mit 50 Mandanten. DSGVO-konform, juristisch geprüft.',
  keywords: [
    'ROI Rechner',
    'Steuerkanzlei Automatisierung',
    'KI Steuerberatung',
    'Prozessautomatisierung',
    'DATEV Integration',
    'Steuerlast-Prognose',
    'Mandantenbericht',
    'Break-even Rechner',
  ],
  openGraph: {
    title: 'ROI-Rechner: Sparen Sie 10.000€+ jährlich',
    description: 'Berechnen Sie Ihr Einsparpotenzial mit KI-gestützter Prozessautomatisierung. DSGVO-konform, DATEV-integriert.',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function ROILandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
