import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProblemSection, PlatformSection, CallingSection, CRMSection, AutomationSection, UseCasesSection, HowItWorksSection, IntegrationsAndImpact, IndustriesSection, ContactTeamSection, FAQSection, FinalCTA } from '@/components/HomeSections';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <PlatformSection />
        <CallingSection />
        <CRMSection />
        <AutomationSection />
        <UseCasesSection />
        <HowItWorksSection />
        <IntegrationsAndImpact />
        <IndustriesSection />
        <ContactTeamSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
