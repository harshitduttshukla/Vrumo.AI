import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const buildRows = [
  {
    num: '01',
    title: 'AI Calling Agent',
    description: 'Voice agents for customer calls.',
    href: '#calling-agent',
  },
  {
    num: '02',
    title: 'WhatsApp AI',
    description: 'Intelligent customer conversations.',
    href: '#whatsapp-ai',
  },
  {
    num: '03',
    title: 'CRM Integration',
    description: 'Connect AI directly to business systems.',
    href: '#crm-integration',
  },
  {
    num: '04',
    title: 'Job Apply Agent',
    description: 'Automate legitimate job search workflows.',
    href: '#job-apply-agent',
  },
];

export function WhatWeDoSection() {
  return (
    <section id="solutions" className="section-padding relative bg-white">
      <div className="container-custom relative">
        <SectionHeader
          label="WHAT WE BUILD"
          title="AI systems designed around real workflows."
          centered={false}
        />

        <div className="space-y-0 divide-y divide-slate-200 border-t border-b border-slate-200">
          {buildRows.map((row) => (
            <a
              key={row.num}
              href={row.href}
              className="group py-6 md:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:bg-slate-50 px-2 rounded-lg"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                <span className="font-mono text-xs font-bold text-slate-400 pt-1 sm:pt-0">
                  {row.num}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors flex items-center gap-2">
                    {row.title}
                  </h3>
                  <p className="text-sm text-[#475569] mt-1 font-medium">
                    {row.description}
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all flex-shrink-0 self-end sm:self-center">
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
