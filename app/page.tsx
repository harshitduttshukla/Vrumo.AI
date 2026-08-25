import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Solutions } from '@/components/Solutions';
import { HowItWorks } from '@/components/HowItWorks';
import { Integrations } from '@/components/Integrations';
import { Manifesto } from '@/components/Manifesto';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { Definitions } from '@/components/Definitions';
import { FAQ } from '@/components/FAQ';
import { StructuredData } from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <Definitions />
        <Solutions />
        <HowItWorks />
        <Integrations />
        <Manifesto />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
