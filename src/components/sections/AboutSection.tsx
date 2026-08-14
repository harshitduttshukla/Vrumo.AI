import { SectionHeader } from '../ui/SectionHeader';

const philosophyChips = [
  'AI Agents',
  'Automation',
  'CRM Integration',
  'Voice AI',
  'Workflow Engineering',
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative bg-white">
      <div className="container-custom relative">
        <SectionHeader
          label="ABOUT VRUMOAI"
          title="We build AI that does more than respond."
          centered={false}
        />

        <p className="text-base text-[#475569] leading-relaxed max-w-[850px] font-medium mb-6">
          VrumoAI focuses on practical AI automation — systems that understand business context, take actions, and connect directly with the tools teams already use.
        </p>

        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {philosophyChips.map((chip) => (
            <span
              key={chip}
              className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 font-semibold"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
