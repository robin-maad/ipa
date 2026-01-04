import Link from 'next/link';
import { Shield, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-navy-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal-600 to-teal-700 font-bold text-lg">
                I
              </div>
              <span className="text-xl font-bold">IPA</span>
            </div>
            <p className="mb-4 max-w-md text-sm text-gray-300">
              Die erste On-Premise Digital Workforce für deutsche
              Steuerkanzleien. 100% GDPR-konform. Validiert von Taylor Wessing.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-teal-400" />
                <span className="text-xs text-gray-300">
                  100% GDPR Compliant
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                <span className="text-xs text-gray-300">
                  Taylor Wessing Validated
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#problem"
                  className="transition-colors hover:text-teal-400"
                >
                  Problem
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="transition-colors hover:text-teal-400"
                >
                  Lösung
                </a>
              </li>
              <li>
                <a
                  href="#workflows"
                  className="transition-colors hover:text-teal-400"
                >
                  Workflows
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-teal-400"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/datenschutz"
                  className="transition-colors hover:text-teal-400"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="transition-colors hover:text-teal-400"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} IPA. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
