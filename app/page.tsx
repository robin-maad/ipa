import Hero from '@/components/sections/Hero';
import ProblemStats from '@/components/sections/ProblemStats';
import ArchitectureDiagram from '@/components/sections/ArchitectureDiagram';
import SafetyShield from '@/components/sections/SafetyShield';
import Economics from '@/components/sections/Economics';
import ProvenWorkflows from '@/components/sections/ProvenWorkflows';
import PathToProduction from '@/components/sections/PathToProduction';
import FinalCTA from '@/components/sections/FinalCTA';
import { ScrollTracker } from '@/components/shared/ScrollTracker';
import { getServiceSchema } from '@/lib/seo/schemas';

export default function HomePage() {
  const serviceSchema = getServiceSchema();

  return (
    <>
      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <main>
        <Hero />
        <ProblemStats />
        <ArchitectureDiagram />
        <SafetyShield />
        <Economics />
        <ProvenWorkflows />
        <PathToProduction />
        <FinalCTA />
        {/* Scroll Depth Tracking */}
        <ScrollTracker />
      </main>
    </>
  );
}
