import { motion } from 'framer-motion';
import { MessageSquare, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useInView } from '../../hooks/useInView';

export function WhatsAppShowcaseSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="whatsapp-ai" className="section-padding relative bg-white">
      <div className="container-custom" ref={ref}>
        <SectionHeader
          label="02 / WHATSAPP AI"
          title="Turn WhatsApp into an AI sales assistant."
          description="Automate customer conversations, capture leads, answer questions, and schedule follow-ups directly through WhatsApp."
          centered={false}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          className="max-w-xl mx-auto rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 shadow-sm text-left"
        >
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
                <MessageSquare size={14} />
              </div>
              <div className="text-xs font-bold text-[#0f172a]">WhatsApp Agent</div>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Online
            </span>
          </div>

          <div className="space-y-2.5 mb-4 text-xs font-medium">
            <div className="bg-white border border-slate-200 p-2.5 rounded-xl rounded-tl-none max-w-[85%] text-[#0f172a] shadow-xs">
              "Hi, I want to know more about your service."
            </div>
            <div className="bg-blue-600 text-white p-2.5 rounded-xl rounded-tr-none ml-auto max-w-[85%]">
              "Sure! I'd be happy to help. Would you like pricing info or a demo?"
            </div>
            <div className="bg-white border border-slate-200 p-2.5 rounded-xl rounded-tl-none max-w-[85%] text-[#0f172a] shadow-xs">
              "Book me a demo."
            </div>
            <div className="bg-blue-600 text-white p-2.5 rounded-xl rounded-tr-none ml-auto max-w-[85%]">
              "Done. I've scheduled your demo for tomorrow."
            </div>
          </div>

          <div className="pt-3.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono font-bold">
            <span className="flex items-center gap-1 text-emerald-600">
              <CheckCircle2 size={12} /> Lead Captured
            </span>
            <span className="flex items-center gap-1 text-blue-600">
              <CheckCircle2 size={12} /> CRM Synced
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
