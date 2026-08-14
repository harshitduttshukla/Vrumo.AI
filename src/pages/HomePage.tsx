import { HeroSection } from '../components/sections/HeroSection';
import { WhatWeDoSection } from '../components/sections/WhatWeDoSection';
import { AICallingShowcaseSection } from '../components/sections/AICallingShowcaseSection';
import { WhatsAppShowcaseSection } from '../components/sections/WhatsAppShowcaseSection';
import { CustomerJourneySection } from '../components/sections/CustomerJourneySection';
import { JobApplyAgentSection } from '../components/sections/JobApplyAgentSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { PlatformSection } from '../components/sections/PlatformSection';
import { AboutSection } from '../components/sections/AboutSection';
import { CTASection } from '../components/sections/CTASection';

export function HomePage() {
  return (
    <main className="bg-white min-h-screen text-[#0f172a]">
      <HeroSection />
      <div className="section-divider" />

      <WhatWeDoSection />
      <div className="section-divider" />

      <AICallingShowcaseSection />
      <div className="section-divider" />

      <WhatsAppShowcaseSection />
      <div className="section-divider" />

      <CustomerJourneySection />
      <div className="section-divider" />

      <JobApplyAgentSection />
      <div className="section-divider" />

      <HowItWorksSection />
      <div className="section-divider" />

      <PlatformSection />
      <div className="section-divider" />

      <AboutSection />
      <div className="section-divider" />

      <CTASection />
    </main>
  );
}
