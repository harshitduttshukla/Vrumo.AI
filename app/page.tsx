import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Solutions } from '@/components/Solutions';
import { HowItWorks } from '@/components/HowItWorks';
import { Integrations } from '@/components/Integrations';
import { Manifesto } from '@/components/Manifesto';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { AmbientNebula3D } from '@/components/AmbientNebula3D';

export default function Home() {
  return (
    <>
      <AmbientNebula3D />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
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
