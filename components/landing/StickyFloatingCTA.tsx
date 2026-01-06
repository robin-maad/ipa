'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { TrackableButton } from '@/components/shared/TrackableButton';

export default function StickyFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    // Track scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    // Initial check
    handleScroll();

    // Observe form section visibility
    const formElement = document.getElementById('demo-form');
    if (formElement) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsFormVisible(entry.isIntersecting);
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px', // Hide sticky CTA a bit before form appears
        }
      );

      observer.observe(formElement);

      // Add scroll listener
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }

    // Add scroll listener even if form not found
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('demo-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hide if not scrolled enough OR if form is visible
  if (!isVisible || isFormVisible) {
    return null;
  }

  return (
    <>
      {/* Mobile/Tablet - Full-width bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md px-4 py-3 shadow-2xl">
          <TrackableButton
            size="lg"
            onClick={scrollToForm}
            className="group w-full"
            trackEvent="cta_click"
            trackData={{
              cta_text: 'Demo anfragen',
              cta_location: 'sticky_floating',
              cta_type: 'primary',
            }}
          >
            Demo anfragen
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </TrackableButton>
        </div>
      </div>

      {/* Desktop - Bottom-right floating pill button */}
      <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
        <TrackableButton
          size="lg"
          onClick={scrollToForm}
          className="group animate-slide-in-right shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-150"
          trackEvent="cta_click"
          trackData={{
            cta_text: 'Demo anfragen',
            cta_location: 'sticky_floating',
            cta_type: 'primary',
          }}
        >
          Demo anfragen
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </TrackableButton>
      </div>
    </>
  );
}
