import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const workflowSteps = ['INPUT', 'AI AGENT', 'UNDERSTAND', 'ACTION', 'RESULT'];

const workflowExamples = [
  { flow: 'Call → Qualify → CRM', label: 'Voice Automation' },
  { flow: 'WhatsApp → Capture → Follow-up', label: 'Messaging Automation' },
  { flow: 'Job → Match → Apply', label: 'Application Automation' },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding relative bg-white">
      <div className="container-custom relative">
        <SectionHeader
          label="HOW IT WORKS"
          title="From input to action."
          centered={false}
        />

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 max-w-xl mx-auto">
            {workflowSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#0f172a] px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                  {step}
                </span>
                {i < workflowSteps.length - 1 && (
                  <ArrowRight size={12} className="text-blue-500 hidden sm:inline" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs max-w-2xl mx-auto">
          {workflowExamples.map((item) => (
            <div key={item.label} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-[10px] uppercase text-slate-400 font-bold mb-1">{item.label}</div>
              <div className="text-[#0f172a] font-bold">{item.flow}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
