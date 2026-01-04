import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'IPA | Intelligente Prozessautomatisierung für Steuerkanzleien',
  description:
    '100% GDPR-konforme Automatisierung für Steuerkanzleien. Validiert von Taylor Wessing. Automatisieren Sie bis zu 40% repetitiver Aufgaben.',
  keywords: [
    'Steuerkanzlei Automatisierung',
    'DATEV Automatisierung',
    'KI Steuerberatung',
    'Prozessautomatisierung',
    'Tax Automation',
  ],
  authors: [{ name: 'IPA' }],
  openGraph: {
    title: 'IPA | Die erste On-Premise Digital Workforce',
    description: 'GDPR-konforme Automatisierung für deutsche Steuerkanzleien',
    url: 'https://ipa.smith-und-partners.de',
    siteName: 'IPA',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
