import { motion } from 'framer-motion';
import { PhoneCall, CheckCircle2, User, Mic } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useInView } from '../../hooks/useInView';

export function AICallingShowcaseSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="calling-agent" className="section-padding relative bg-white">
      <div className="container-custom" ref={ref}>
        <SectionHeader
          label="01 / AI CALLING"
          title="Your AI agent for customer conversations."
          description="Handle inbound and outbound calls with natural AI conversations that qualify leads, answer questions, schedule appointments, and trigger business workflows."
          centered={false}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          className="max-w-xl mx-auto rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 shadow-sm text-left"
        >
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-bold">
                <PhoneCall size={16} />
              </div>
              <div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">Incoming Call</div>
                <div className="text-xs font-bold text-[#0f172a] flex items-center gap-2">
                  Rahul Sharma <span className="text-[11px] font-mono text-slate-400">00:42</span>
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              AI Agent Active
            </span>
          </div>

          <div className="space-y-2.5 mb-4 text-xs">
            <div className="flex items-start gap-2.5 max-w-[88%]">
              <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <User size={12} />
              </div>
              <div className="bg-white border border-slate-200 p-2.5 rounded-xl rounded-tl-none text-[#0f172a] font-medium shadow-xs">
                "I'm interested in your service."
              </div>
            </div>

            <div className="flex items-start gap-2.5 max-w-[88%] ml-auto flex-row-reverse">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mic size={12} />
              </div>
              <div className="bg-blue-600 text-white p-2.5 rounded-xl rounded-tr-none font-medium">
                "I'd be happy to help. What are you looking for?"
              </div>
            </div>
          </div>

          <div className="pt-3.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono font-bold">
            <span className="flex items-center gap-1 text-emerald-600">
              <CheckCircle2 size={12} /> Lead Qualified
            </span>
            <span className="flex items-center gap-1 text-blue-600">
              <CheckCircle2 size={12} /> CRM Updated
            </span>
            <span className="flex items-center gap-1 text-indigo-600">
              <CheckCircle2 size={12} /> Follow-up Scheduled
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
