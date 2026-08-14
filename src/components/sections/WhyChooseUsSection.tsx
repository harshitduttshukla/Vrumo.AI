import { CheckCircle2, ShieldCheck, Cpu, Zap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const trustPillars = [
  {
    icon: ShieldCheck,
    title: 'Built for Real Business Workflows',
    description: 'Designed around practical enterprise operational processes — not experimental AI demos.',
  },
  {
    icon: Cpu,
    title: 'Custom AI Agents',
    description: 'Tailored prompt logic, custom knowledge bases, and operational fallback controls.',
  },
  {
    icon: Zap,
    title: 'CRM Integrations',
    description: 'Real-time synchronization across HubSpot, Salesforce, custom webhooks, and APIs.',
  },
  {
    icon: CheckCircle2,
    title: '24/7 Continuous Automation',
    description: 'AI agents operate around the clock without manual supervision or delayed response times.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="about" className="section-padding relative bg-slate-50/80 border-t border-slate-200">
      <div className="container-custom mx-auto relative">
        <SectionHeader
          label="TRUST & ARCHITECTURE"
          title="Enterprise-Grade AI Automation"
          description="Built on reliable, production-ready AI agent principles designed for high business impact."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {trustPillars.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
