'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();

  // Routes that should not have the standard Header/Footer
  const noLayoutRoutes = ['/tax-automation'];
  const shouldHideLayout = noLayoutRoutes.includes(pathname);

  if (shouldHideLayout) {
    // Return children only, no Header/Footer
    return <>{children}</>;
  }

  // Return children with Header/Footer
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
