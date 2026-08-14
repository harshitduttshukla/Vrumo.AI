import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare, Database, Zap } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const items = [
  { icon: PhoneCall, label: 'AI Calling' },
  { icon: MessageSquare, label: 'WhatsApp AI' },
  { icon: Database, label: 'CRM Automation' },
  { icon: Zap, label: 'Workflow Agents' },
];

export function TrustStrip() {
  const { ref, isInView } = useInView();

  return (
    <section id="trust-strip" className="relative py-6 border-y border-slate-200 bg-slate-50/70">
      <div className="container-custom mx-auto" ref={ref}>
        <div className="flex flex-wrap items-center justify-around gap-6 md:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="flex items-center gap-3 py-1 px-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
            >
              <item.icon size={16} className="text-blue-600" />
              <span className="text-sm font-bold text-[#0f172a] whitespace-nowrap tracking-tight">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
