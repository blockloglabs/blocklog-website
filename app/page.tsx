import type { Metadata } from 'next';

import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { CredibilityStrip } from '@/components/home/CredibilityStrip';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { WhoItsForSection } from '@/components/home/WhoItsForSection';
import { RegulationsSection } from '@/components/home/RegulationsSection';
import { EvidenceSection } from '@/components/home/EvidenceSection';
import { MetricsSection } from '@/components/home/MetricsSection';
import { WhyBlocklogSection } from '@/components/home/WhyBlocklogSection';
import { ArchitectureSection } from '@/components/home/ArchitectureSection';
import { VerificationSection } from '@/components/home/VerificationSection';
import { ComparisonSection } from '@/components/home/ComparisonSection';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

export const metadata: Metadata = {
  title: 'Blocklog — AI Compliance Infrastructure for Regulated Enterprises',
  description:
    'When RBI or SEBI asks for your AI decision trail, can you produce it within 24 hours? Blocklog creates tamper-evident audit trails and cryptographic evidence packages for AI systems under Indian regulations.',
  alternates: {
    canonical: 'https://blocklogsecurity.com',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <CredibilityStrip />
        <HowItWorksSection />
        <WhoItsForSection />
        <RegulationsSection />
        <EvidenceSection />
        <MetricsSection />
        <WhyBlocklogSection />
        <ArchitectureSection />
        <VerificationSection />
        <ComparisonSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}