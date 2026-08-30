export type Category = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  featuredTopics: string[];
};

export const categories: Category[] = [
  {
    slug: 'real-estate-crm',
    name: 'Real Estate CRM',
    h1: 'Real Estate CRM Guides & Best Practices',
    metaTitle: 'Real Estate CRM Articles & Best Practices | Vrumo AI Blog',
    metaDescription: 'Explore in-depth articles on real estate CRM systems, pipeline management, developer workflows, and property sales architectures.',
    description: 'Master real estate CRM strategy, pipeline stages, project-level lead management, and how modern property sales teams centralize context to close more deals.',
    featuredTopics: ['CRM Selection', 'Pipeline Management', 'Developer CRMs', 'Spreadsheet Migration', 'Brokerage Workflows'],
  },
  {
    slug: 'real-estate-ai',
    name: 'AI & Automation',
    h1: 'AI & Automation for Real Estate',
    metaTitle: 'AI in Real Estate & Sales Automation | Vrumo AI Blog',
    metaDescription: 'Learn how artificial intelligence, conversational assistants, and automated workflows are transforming modern property sales and lead operations.',
    description: 'Actionable blueprints on deploying AI across lead capture, conversational qualification, automatic record updates, and next-action workflows.',
    featuredTopics: ['AI Sales Assistants', 'Conversational AI', 'Automation Strategy', 'Intent Modeling', 'Workflow Triggers'],
  },
  {
    slug: 'real-estate-automation',
    name: 'Automation',
    h1: 'Real Estate Sales & Workflow Automation',
    metaTitle: 'Real Estate Sales Automation Guides | Vrumo AI Blog',
    metaDescription: 'Discover step-by-step guides to automating lead routing, team notifications, CRM updates, and site visit scheduling in real estate.',
    description: 'Eliminate repetitive sales administration, reduce lead response latency, and build robust automated triggers across your real estate pipeline.',
    featuredTopics: ['Sales Automation', 'Lead Routing', 'Site Visit Scheduling', 'CRM Sync', 'Notification Triggers'],
  },
  {
    slug: 'real-estate-sales',
    name: 'Sales',
    h1: 'Real Estate Sales Strategy & Conversion',
    metaTitle: 'Real Estate Sales Strategies & Conversion Guides | Vrumo AI Blog',
    metaDescription: 'Actionable strategies for real estate developers, brokers, and sales teams to improve lead conversion, site visit turnout, and deal closing.',
    description: 'Deep dives into real estate sales psychology, objection handling, follow-up cadences, and pipeline velocity acceleration.',
    featuredTopics: ['Follow-Up Cadence', 'Site Visit Turnout', 'Pipeline Velocity', 'Deal Negotiation', 'Sales Hand-offs'],
  },
  {
    slug: 'real-estate-lead-management',
    name: 'Lead Management',
    h1: 'Real Estate Lead Management & Qualification',
    metaTitle: 'Real Estate Lead Management, Scoring & Nurturing | Vrumo AI Blog',
    metaDescription: 'Comprehensive guides on real estate lead capture, multi-attribute scoring, buyer qualification, and automated nurturing sequences.',
    description: 'Learn how to capture enquiries across all channels, extract buyer criteria (budget, location, timeline), and prioritize high-intent buyers.',
    featuredTopics: ['Lead Scoring', 'Lead Qualification', 'Nurturing Campaigns', 'Multi-Source Capture', 'Intent Detection'],
  },
  {
    slug: 'real-estate-whatsapp',
    name: 'WhatsApp',
    h1: 'WhatsApp Automation for Real Estate',
    metaTitle: 'Real Estate WhatsApp Automation & CRM | Vrumo AI Blog',
    metaDescription: 'Learn how to automate property enquiries, lead qualification, brochure sharing, and site visit booking over WhatsApp.',
    description: 'How property developers and agencies leverage compliant WhatsApp automation, smart chatbots, and CRM sync to convert mobile buyers.',
    featuredTopics: ['WhatsApp Chatbots', 'Automated Follow-ups', 'Brochure Sharing', 'Slot Booking', 'CRM Integration'],
  },
  {
    slug: 'real-estate-ai-calling',
    name: 'AI Calling',
    h1: 'AI Calling & Voice Agents for Real Estate',
    metaTitle: 'AI Calling & Voice Agents in Real Estate | Vrumo AI Blog',
    metaDescription: 'Explore how AI voice agents handle inbound property enquiries, qualify buyer budgets, recover missed calls, and book site visits.',
    description: 'Understand voice AI architecture, realistic inbound/outbound real estate calling workflows, missed call recovery, and CRM data structuring.',
    featuredTopics: ['AI Voice Agents', 'Inbound Qualification', 'Missed Call Recovery', 'Call Summaries', 'Telephony Integration'],
  },
];

export const categoryMap = new Map(categories.map((c) => [c.slug, c]));
