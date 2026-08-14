import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Solutions } from '@/components/Solutions';
import { HowItWorks } from '@/components/HowItWorks';
import { Integrations } from '@/components/Integrations';
import { Manifesto } from '@/components/Manifesto';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <HowItWorks />
        <Integrations />
        <Manifesto />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
