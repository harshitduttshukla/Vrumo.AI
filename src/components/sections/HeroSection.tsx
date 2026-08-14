import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

/* ──── Centered Editorial Hero ──── */
export function HeroSection() {
  return (
    <section id="hero" className="relative pt-12 pb-14 md:pt-16 md:pb-20 overflow-hidden bg-white">
      <div className="container-custom text-center relative z-10">

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight text-[#0f172a] leading-[1.08] max-w-3xl mx-auto"
        >
          AI Agents That Actually Do the Work.
          <br />
          <span className="text-[#0f172a]">
            Not Just Chat.{' '}
            <span className="text-blue-600">Action.</span>
          </span>
        </motion.h1>

        {/* 2-Line Editorial Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mx-auto font-medium"
        >
          VrumoAI builds intelligent agents that handle customer conversations, connect with your CRM, and automate repetitive workflows.
        </motion.p>

        {/* 2 Small Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3.5"
        >
          <Button href="#contact" size="md" id="hero-cta-primary">
            Book a Free Demo
            <ArrowRight size={14} />
          </Button>
          <Button href="#solutions" variant="secondary" size="md" id="hero-cta-secondary">
            Explore Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
