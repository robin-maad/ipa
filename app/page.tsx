import Hero from '@/components/sections/Hero';
import ProblemStats from '@/components/sections/ProblemStats';
import ArchitectureDiagram from '@/components/sections/ArchitectureDiagram';
import SafetyShield from '@/components/sections/SafetyShield';
import Economics from '@/components/sections/Economics';
import ProvenWorkflows from '@/components/sections/ProvenWorkflows';
import PathToProduction from '@/components/sections/PathToProduction';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemStats />
      <ArchitectureDiagram />
      <SafetyShield />
      <Economics />
      <ProvenWorkflows />
      <PathToProduction />
      <FinalCTA />
    </main>
  );
}
