import Link from 'next/link';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      {/* Logo-only header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal-600 to-teal-700 text-white font-bold text-lg">
              I
            </div>
            <span className="text-xl font-bold text-navy-900">IPA</span>
          </Link>
        </div>
      </header>

      {children}

      {/* Minimal footer */}
      <footer className="border-t bg-white py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-teal-600"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="transition-colors hover:text-teal-600"
            >
              Impressum
            </Link>
            <button
              type="button"
              data-cc="show-preferencesModal"
              className="transition-colors hover:text-teal-600"
            >
              Cookie-Einstellungen
            </button>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} IPA. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </>
  );
}
