import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { Button } from '../ui/Button';

export function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="section-padding relative bg-white">
      <div className="container-custom relative text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          className="max-w-xl mx-auto"
        >
          <span className="block text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">
            START A PROJECT
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] mb-4 leading-tight">
            What should your AI agent do?
          </h2>

          <p className="text-base text-[#475569] leading-relaxed mb-7 font-medium">
            Tell us the workflow you want to automate and we'll design the right AI solution around it.
          </p>

          <div className=" flex flex-wrap items-center justify-center gap-3">
            <Button href="#" size="md" id="cta-book-demo">
              Book a Free Demo
              <ArrowRight size={14} />
            </Button>
            <Button href="#" variant="secondary" size="md" id="cta-contact">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
