'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal-600 to-teal-700 text-white font-bold text-lg">
            I
          </div>
          <span className="text-xl font-bold text-navy-900">IPA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <button
            onClick={() => scrollToSection('problem')}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600"
          >
            Start
          </button>
          <button
            onClick={() => scrollToSection('solution')}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600"
          >
            Lösung
          </button>
          <button
            onClick={() => scrollToSection('workflows')}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600"
          >
            Use Cases
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600"
          >
            Kontakt
          </button>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button
            onClick={() => scrollToSection('contact')}
            size="default"
          >
            Gespräch vereinbaren
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-left text-base font-medium text-gray-700"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-left text-base font-medium text-gray-700"
            >
              Lösung
            </button>
            <button
              onClick={() => scrollToSection('workflows')}
              className="text-left text-base font-medium text-gray-700"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-base font-medium text-gray-700"
            >
              Kontakt
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="mt-2"
            >
              Gespräch vereinbaren
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
