import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { CookieConsentManager } from '@/components/shared/CookieConsent';
import { ConsentModeScript } from '@/components/shared/ConsentModeScript';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/seo/schemas';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ipa.smith-und-partners.de'),
  title: {
    default: 'IPA | Intelligente Prozessautomatisierung für Steuerkanzleien',
    template: '%s | IPA',
  },
  description:
    '100% GDPR-konforme Automatisierung für Steuerkanzleien. Validiert von Taylor Wessing. Automatisieren Sie bis zu 40% repetitiver Aufgaben.',
  keywords: [
    'Steuerkanzlei Automatisierung',
    'DATEV Automatisierung',
    'KI Steuerberatung',
    'Prozessautomatisierung',
    'Tax Automation',
    'On-Premise KI',
    'Digital Workforce',
  ],
  authors: [{ name: 'IPA', url: 'https://ipa.smith-und-partners.de' }],
  creator: 'House of MAAD',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://ipa.smith-und-partners.de',
    title: 'IPA | Die erste On-Premise Digital Workforce',
    description:
      'GDPR-konforme Automatisierung für deutsche Steuerkanzleien. Bis zu 40% repetitive Aufgaben automatisieren.',
    siteName: 'IPA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IPA - Intelligente Prozessautomatisierung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPA | Intelligente Prozessautomatisierung für Steuerkanzleien',
    description:
      'GDPR-konforme Automatisierung für Steuerkanzleien. Bis zu 40% repetitive Aufgaben automatisieren.',
    images: ['/og-image.png'],
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
  alternates: {
    canonical: 'https://ipa.smith-und-partners.de',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* Initialize Google Consent Mode before any tracking scripts */}
        <ConsentModeScript />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        {/* Cookie Consent Manager */}
        <CookieConsentManager />
        {/* Google Tag Manager - Loads after consent */}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
      </body>
    </html>
  );
}
