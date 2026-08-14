import { Building2, HeartPulse, GraduationCap, ShoppingCart, Car, Plane, Briefcase, TrendingUp, Store } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const industries = [
  { icon: Building2, name: 'Real Estate', snippet: 'Inbound buyer calls & WhatsApp lead qual' },
  { icon: HeartPulse, name: 'Healthcare', snippet: 'Patient appointment calls & reminders' },
  { icon: GraduationCap, name: 'Education', snippet: 'Student inquiry qualification & CRM sync' },
  { icon: ShoppingCart, name: 'E-commerce', snippet: 'Order tracking & WhatsApp support chats' },
  { icon: Car, name: 'Automotive', snippet: 'Test drive scheduling & lead capture' },
  { icon: Plane, name: 'Travel & Hospitality', snippet: 'Booking inquiries & itinerary automation' },
  { icon: Briefcase, name: 'Recruitment', snippet: 'Automated job search & app tracking' },
  { icon: TrendingUp, name: 'Sales & Marketing', snippet: 'Outbound qualification & demo booking' },
  { icon: Store, name: 'Local Businesses', snippet: '24/7 customer reception & messaging' },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="section-padding relative bg-white">
      <div className="container-custom mx-auto">
        <SectionHeader
          label="INDUSTRIES"
          title="Tailored For High-Growth Sectors"
          description="Specific workflow automations designed for industry-specific customer interactions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {industries.map((item) => (
            <div key={item.name} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 shadow-2xs hover:border-blue-200 transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                <item.icon size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0f172a]">{item.name}</div>
                <div className="text-[11px] text-slate-500 font-medium">{item.snippet}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
