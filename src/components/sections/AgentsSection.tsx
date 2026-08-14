import {
  Headphones,
  TrendingUp,
  Search,
  Settings,
  Database,
  Megaphone,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowCard } from '../ui/GlowCard';
import { Badge } from '../ui/Badge';

const agents = [
  {
    icon: Headphones,
    name: 'Customer Support Agent',
    description: 'Handles inquiries, resolves issues, and escalates complex cases with human-like understanding.',
    status: 'Coming Soon',
    badge: 'blue' as const,
  },
  {
    icon: TrendingUp,
    name: 'Sales Agent',
    description: 'Qualifies leads, follows up with prospects, and assists your sales team throughout the pipeline.',
    status: 'Coming Soon',
    badge: 'violet' as const,
  },
  {
    icon: Search,
    name: 'Research Agent',
    description: 'Gathers and synthesizes information from multiple sources into actionable insights and reports.',
    status: 'Coming Soon',
    badge: 'blue' as const,
  },
  {
    icon: Settings,
    name: 'Operations Agent',
    description: 'Monitors operations, identifies bottlenecks, and automates routine decisions across systems.',
    status: 'Coming Soon',
    badge: 'violet' as const,
  },
  {
    icon: Database,
    name: 'Data Agent',
    description: 'Processes, analyzes, and transforms data across systems for accuracy and timely reporting.',
    status: 'Coming Soon',
    badge: 'blue' as const,
  },
  {
    icon: Megaphone,
    name: 'Marketing Agent',
    description: 'Creates content, manages campaigns, and optimizes marketing efforts with AI intelligence.',
    status: 'Coming Soon',
    badge: 'violet' as const,
  },
];

export function AgentsSection() {
  return (
    <section id="agents" className="section-padding relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom mx-auto relative">
        <SectionHeader
          label="AI AGENTS"
          title="Meet Your Digital Workforce"
          description="Specialized AI agents designed to handle real business workflows — each one built to understand, decide, and act."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <GlowCard key={agent.name} delay={i * 0.06} className="p-6 cursor-pointer">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <agent.icon size={20} />
                </div>
                <Badge variant={agent.badge}>{agent.status}</Badge>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {agent.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {agent.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

