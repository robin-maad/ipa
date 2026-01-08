/**
 * Structured Data (Schema.org) Utilities
 * Type-safe JSON-LD schema generators
 */

import type { WithContext, Organization, WebSite, Service } from 'schema-dts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ipa.smith-und-partners.de';

/**
 * Organization Schema
 * Represents the company behind IPA
 */
export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IPA - Intelligente Prozessautomatisierung',
    alternateName: 'Smith & Partners IPA',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Intelligente Prozessautomatisierung für deutsche Steuerkanzleien. 100% GDPR-konform, On-Premise möglich, juristisch geprüft durch ein führendes Team im Wirtschaftsrecht.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'robin@houseofmaad.de',
      availableLanguage: ['de', 'en'],
    },
  };
}

/**
 * WebSite Schema
 * Represents the IPA website
 */
export function getWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IPA',
    alternateName: 'Intelligente Prozessautomatisierung',
    url: SITE_URL,
    description:
      'Enterprise-Grade Prozessautomatisierung speziell für deutsche Steuerkanzleien. DSGVO-konform, sicher und effizient.',
    inLanguage: 'de',
    publisher: {
      '@type': 'Organization',
      name: 'IPA',
    },
  };
}

/**
 * Service Schema
 * Represents the IPA service offering
 */
export function getServiceSchema(): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IPA Enterprise Automation',
    description:
      'On-Premise Digital Workforce für Steuerkanzleien. Automatisierung von bis zu 40% repetitiver Aufgaben mit lokaler KI-Intelligenz.',
    provider: {
      '@type': 'Organization',
      name: 'Smith & Partners',
      url: SITE_URL,
    },
    serviceType: 'Prozessautomatisierung',
    areaServed: {
      '@type': 'Country',
      name: 'Deutschland',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: SITE_URL,
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Steuerkanzleien',
    },
    termsOfService: `${SITE_URL}/datenschutz`,
  };
}
