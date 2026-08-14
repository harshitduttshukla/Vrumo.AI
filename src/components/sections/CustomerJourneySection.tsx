import { motion } from 'framer-motion';
import { Database, ArrowRight, User, PhoneCall, Brain, Flame } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useInView } from '../../hooks/useInView';

const crmFlow = [
  { label: 'Customer', icon: User },
  { label: 'AI Agent', icon: PhoneCall },
  { label: 'Understands', icon: Brain },
  { label: 'CRM', icon: Database },
  { label: 'Lead / Deal / Follow-up', icon: Flame },
];

export function CustomerJourneySection() {
  const { ref, isInView } = useInView();

  return (
    <section id="crm-integration" className="section-padding relative bg-white">
      <div className="container-custom relative" ref={ref}>
        <SectionHeader
          label="03 / CRM AUTOMATION"
          title="Every conversation becomes actionable data."
          description="Connect AI conversations to your existing CRM and automatically synchronize leads, customer information, activities, and follow-ups."
          centered={false}
        />

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6 text-center">
          <div className="flex flex-wrap items-center justify-between gap-2 max-w-xl mx-auto">
            {crmFlow.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-[#0f172a] shadow-xs">
                  <step.icon size={13} className="text-blue-600" />
                  <span>{step.label}</span>
                </div>
                {i < crmFlow.length - 1 && (
                  <ArrowRight size={12} className="text-slate-400 hidden sm:inline" />
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          className="max-w-xl mx-auto rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 shadow-sm text-left"
        >
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200">
            <div>
              <div className="text-sm font-bold text-[#0f172a]">Rahul Sharma</div>
              <div className="text-[11px] font-mono text-slate-400">+91 98765 XXXXX</div>
            </div>
            <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
              92% Lead Score
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono mb-4">
            <div>
              <span className="text-slate-400">Source</span>
              <div className="font-bold text-[#0f172a] mt-0.5">WhatsApp</div>
            </div>
            <div>
              <span className="text-slate-400">Intent</span>
              <div className="font-bold text-[#0f172a] mt-0.5">Property Inquiry</div>
            </div>
            <div>
              <span className="text-slate-400">Status</span>
              <div className="font-bold text-emerald-600 mt-0.5">Qualified</div>
            </div>
            <div>
              <span className="text-slate-400">Next Action</span>
              <div className="font-bold text-blue-600 mt-0.5">Demo Scheduled</div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono font-bold text-emerald-600">
            <span>CRM Synced ✓</span>
            <span className="text-slate-400 text-[11px] font-normal">Connects to HubSpot, Salesforce & Custom APIs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
