import { SectionHeader } from '../ui/SectionHeader';

const monochromeTools = [
  'CRM Systems',
  'WhatsApp Business API',
  'Telephony & SIP',
  'REST APIs',
  'Webhooks',
  'Databases',
  'Calendars',
  'Internal Tools',
];

export function PlatformSection() {
  return (
    <section id="platform" className="section-padding relative bg-white">
      <div className="container-custom relative">
        <SectionHeader
          label="INTEGRATIONS"
          title="Works with the tools you already use."
          centered={false}
        />

        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs max-w-2xl">
          {monochromeTools.map((tool) => (
            <span
              key={tool}
              className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[#0f172a] font-semibold hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
