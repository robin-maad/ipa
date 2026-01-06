'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { updateGoogleConsent } from '@/lib/consent/google-consent-mode';

export function CookieConsentManager() {
  useEffect(() => {
    CookieConsent.run({
      // Consent modal configuration
      guiOptions: {
        consentModal: {
          layout: 'box inline',
          position: 'bottom right',
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      // Consent categories
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          autoClear: {
            cookies: [
              { name: /^_ga/ }, // Google Analytics
              { name: /^_gid/ },
              { name: /^plausible/ }, // Plausible
            ],
          },
        },
        marketing: {
          enabled: false,
          autoClear: {
            cookies: [
              { name: /^_fbp/ }, // Facebook
              { name: /^_gcl/ }, // Google Ads
            ],
          },
        },
      },

      // Language configuration
      language: {
        default: 'de',
        autoDetect: 'browser',
        translations: {
          de: {
            consentModal: {
              title: 'Wir verwenden Cookies',
              description:
                'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Traffic auf unserer Website zu analysieren. Durch Klicken auf "Alle akzeptieren" stimmen Sie der Verwendung von Cookies zu.',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige',
              showPreferencesBtn: 'Einstellungen verwalten',
              footer: `
                <a href="/datenschutz">Datenschutzerklärung</a>
                <a href="/impressum">Impressum</a>
              `,
            },
            preferencesModal: {
              title: 'Cookie-Einstellungen',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige',
              savePreferencesBtn: 'Einstellungen speichern',
              closeIconLabel: 'Schließen',
              serviceCounterLabel: 'Dienst|Dienste',
              sections: [
                {
                  title: 'Ihre Privatsphäre',
                  description:
                    'Diese Website verwendet Cookies, um Ihr Nutzererlebnis zu verbessern. Sie können Ihre Einstellungen jederzeit ändern.',
                },
                {
                  title: 'Notwendige Cookies',
                  description:
                    'Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich und können nicht deaktiviert werden.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analyse-Cookies',
                  description:
                    'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: {
                      name: 'Name',
                      domain: 'Domain',
                      expiration: 'Ablauf',
                      description: 'Beschreibung',
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: location.hostname,
                        expiration: '2 Jahre',
                        description: 'Google Analytics - Unterscheidung von Nutzern',
                      },
                      {
                        name: '_gid',
                        domain: location.hostname,
                        expiration: '24 Stunden',
                        description: 'Google Analytics - Unterscheidung von Nutzern',
                      },
                      {
                        name: 'plausible_*',
                        domain: location.hostname,
                        expiration: '1 Jahr',
                        description: 'Plausible Analytics - Datenschutzfreundliche Webanalyse',
                      },
                    ],
                  },
                },
                {
                  title: 'Marketing-Cookies',
                  description:
                    'Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind.',
                  linkedCategory: 'marketing',
                },
                {
                  title: 'Weitere Informationen',
                  description:
                    'Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns bitte unter <a href="mailto:robin@houseofmaad.de">robin@houseofmaad.de</a>.',
                },
              ],
            },
          },
        },
      },

      // Consent callbacks
      onFirstConsent: ({ cookie }) => {
        console.log('onFirstConsent fired', cookie);
        updateConsentState(cookie);
      },

      onChange: ({ cookie }) => {
        console.log('onChange fired', cookie);
        updateConsentState(cookie);
      },

      onModalReady: ({ modalName }) => {
        console.log('onModalReady', modalName);
      },
    });
  }, []);

  return null;
}

/**
 * Update Google Consent Mode based on cookie preferences
 */
function updateConsentState(cookie: any) {
  const analyticsGranted = cookie.categories?.includes('analytics') || false;
  const marketingGranted = cookie.categories?.includes('marketing') || false;

  // Update Google Consent Mode
  updateGoogleConsent(analyticsGranted, marketingGranted);

  // Reload page if consent changed (to load/unload tracking scripts)
  if (cookie.categories) {
    console.log('Consent updated:', {
      analytics: analyticsGranted,
      marketing: marketingGranted,
    });
  }
}
