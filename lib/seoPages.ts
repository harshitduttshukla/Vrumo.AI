export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  visualLabel: string;
  visualTitle: string;
  pains: [string, string][];
  outcomes: [string, string][];
  workflow: string[];
  faqs: [string, string][];
  related: string[];
  features?: { title: string; desc: string }[];
  targetKeyword: string;
};

export const seoPages: SeoPage[] = [
  // 1. Real Estate CRM
  {
    slug: 'real-estate-crm',
    title: 'Real Estate CRM Software | AI-Powered CRM for Real Estate | Vrumo',
    description: 'Vrumo is an AI-powered real estate CRM software built for property developers, brokers, and sales teams to manage leads, pipelines, WhatsApp follow-ups, and site visits.',
    eyebrow: 'AI-POWERED REAL ESTATE CRM',
    h1: 'AI-Powered Real Estate CRM Built for Modern Sales Teams',
    intro: 'Vrumo helps real estate businesses manage leads, buyers, property requirements, projects, sales owners, conversations, follow-ups, site visits, opportunities, and pipeline stages in one intelligent system.',
    visualLabel: 'ACTIVE OPPORTUNITY',
    visualTitle: '3 BHK · Gurgaon · ₹1.2 Cr',
    targetKeyword: 'real estate CRM',
    pains: [
      ['Scattered Lead Context', 'Bring website forms, Meta ads, WhatsApp, incoming calls, and portal inquiries into one centralized, property-aware customer record.'],
      ['Manual Pipeline Hygiene', 'Keep sales stages and next actions current automatically from connected WhatsApp chats and phone interactions.'],
      ['Unclear Sales Ownership', 'Route leads transparently and equip every team member with a complete activity history, budget preferences, and unit interests.'],
    ],
    outcomes: [
      ['Property-Aware Records', 'Capture budget, location preference, project, unit configuration (BHK), buying purpose, and purchase timeline.'],
      ['Real Sales Stages', 'Track inquiries from New Lead through Qualification, Site Visit, Negotiation, and Unit Booking.'],
      ['AI-Assisted Follow-Up', 'Trigger approved next actions, WhatsApp sequences, and voice calls without turning your CRM into a generic chatbot.'],
    ],
    workflow: ['Enquiry captured', 'Requirement structured', 'Lead scored', 'Owner assigned', 'Follow-up triggered', 'Site visit recorded'],
    faqs: [
      ['What is a real estate CRM?', 'A real estate CRM is specialized software designed for property developers, brokers, and sales teams to manage customer interactions, property requirements, multi-channel inquiries, follow-ups, site visits, and sales pipelines in one unified system.'],
      ['Why do real estate companies need CRM software?', 'Real estate transactions involve high financial values, long consideration cycles, and high inquiry volumes. A CRM ensures that leads from ads, WhatsApp, and portals are contacted within 60 seconds, followed up consistently, and tracked through to closed unit bookings.'],
      ['What features should a real estate CRM have?', 'Essential features include multi-source lead ingestion, WhatsApp Business automation, AI voice qualification, visual property pipelines, site visit scheduling, unit inventory matching, role-based security, and channel partner management.'],
      ['Can AI qualify real estate leads?', 'Yes. Vrumo AI uses conversational intelligence over WhatsApp and phone calls to extract buyer budget, configuration (BHK), location preference, buying timeline, and financing status before escalating to a human sales rep.'],
      ['Can a real estate CRM automate follow-ups?', 'Yes. Vrumo automates multi-touch follow-up cadences across WhatsApp, SMS, and scheduled AI calls based on lead status, previous interaction history, and agreed stop conditions.'],
      ['Can Vrumo integrate with existing CRM systems?', 'Yes. Vrumo can operate as your primary real estate CRM or connect as an intelligent automation layer on top of Salesforce, HubSpot, Zoho, or proprietary ERP systems.'],
      ['Can Vrumo manage site visits?', 'Yes. Vrumo coordinates availability, presents booking slots via WhatsApp, dispatches Google Calendar invites, shares directions/maps, and sends automated reminder alerts to reduce no-shows.'],
    ],
    related: ['real-estate-ai-automation', 'real-estate-lead-management', 'real-estate-sales-automation'],
  },

  // 2. Real Estate AI Automation
  {
    slug: 'real-estate-ai-automation',
    title: 'AI Automation for Real Estate | Automate Sales & Lead Management | Vrumo',
    description: 'Automate repetitive real estate sales workflows: lead capture, AI qualification, CRM sync, WhatsApp follow-ups, AI calling, and site visit scheduling with Vrumo AI.',
    eyebrow: 'AI AUTOMATION FOR REAL ESTATE',
    h1: 'AI Automation for Real Estate Sales',
    intro: 'Vrumo connects the steps your team repeats every day: capture the enquiry, qualify the requirement, follow up, coordinate the site visit, and keep your CRM updated in real time.',
    visualLabel: 'AUTOMATION WORKFLOW',
    visualTitle: 'Inbound enquiry → Site visit',
    targetKeyword: 'AI automation for real estate',
    pains: [
      ['Too Many Manual Handoffs', 'Eliminate the friction between marketing campaigns, telecalling qualification, and on-site sales consultants.'],
      ['Follow-Up Depends on Memory', 'Deploy automated time-and-event rules so that every prospective buyer receives consistent, high-value outreach.'],
      ['Disconnected Tool Stacks', 'Automatically sync WhatsApp conversations, call recordings, and appointment confirmations back into your core CRM.'],
    ],
    outcomes: [
      ['Bounded Sales Workflows', 'Define precise triggers, required qualification parameters, exception handling, and seamless human escalation points.'],
      ['Omnichannel Coordination', 'Synchronize WhatsApp messaging, AI voice calling, calendar scheduling, and sales rep mobile alerts.'],
      ['Executive Oversight', 'Gain full visibility into what the AI automation executed, which leads engaged, and what happens next.'],
    ],
    workflow: ['Lead capture', 'Lead qualification', 'CRM update', 'WhatsApp follow-up', 'AI calling', 'Site visit', 'Sales notification'],
    faqs: [
      ['What real estate processes can be automated?', 'Common automated workflows include multi-channel lead capture, instant qualification, WhatsApp brochure sharing, missed call recovery, site visit slot booking, follow-up cadences, and CRM record updates.'],
      ['Does AI automation remove the human sales team?', 'No. Automation eliminates repetitive admin work and cold qualification so that your sales team can spend 100% of their energy on high-value client consultations, site tours, and contract negotiations.'],
      ['Can we customize the AI conversational scripts?', 'Yes. All AI qualification questions, project details, price ranges, and follow-up templates are fully configurable to match your brand and project inventory.'],
    ],
    related: ['real-estate-crm', 'real-estate-sales-automation', 'real-estate-ai-calling'],
  },

  // 3. Real Estate Lead Management
  {
    slug: 'real-estate-lead-management',
    title: 'Real Estate Lead Management Software | AI Lead Qualification | Vrumo',
    description: 'Capture, qualify, track, and prioritize property leads automatically. Vrumo AI real estate lead management software turns raw inquiries into high-intent buyers.',
    eyebrow: 'REAL ESTATE LEAD MANAGEMENT',
    h1: 'Real Estate Lead Management Powered by AI',
    intro: 'Turn every enquiry into a structured opportunity with the property requirement, budget, location, timeline, source, owner, and next action ready for your sales team.',
    visualLabel: 'LEAD QUALIFICATION',
    visualTitle: 'Rahul Sharma · 92% Intent',
    targetKeyword: 'real estate lead management software',
    pains: [
      ['High Lead Volume Fatigue', 'Separate casual ad scrollers from serious property buyers without burning hundreds of sales calling hours.'],
      ['Incomplete Qualification', 'Collect budget, micro-market preference, unit type (BHK), purchase purpose, and timeline systematically.'],
      ['Slow Lead Distribution', 'Instantly route pre-qualified prospects to the right project specialist or territory advisor.'],
    ],
    outcomes: [
      ['Multi-Attribute Scoring', 'Prioritize leads using real transaction indicators (budget alignment, buying horizon, financing readiness).'],
      ['Complete Buyer Context', 'Keep chat transcripts, voice summaries, and property preferences attached to the lead dossier.'],
      ['Reliable Next Actions', 'Ensure that every lead in your pipeline has an assigned owner, clear status, and scheduled follow-up.'],
    ],
    workflow: ['Lead captured', 'Questions asked', 'Requirement extracted', 'Intent scored', 'Owner selected', 'Next action created'],
    faqs: [
      ['What information does Vrumo capture from property leads?', 'Vrumo captures buyer name, phone, email, source campaign, target configuration (e.g. 3 BHK), budget band, preferred location/tower, purchase timeline (0–30 days vs 6+ months), and financing status.'],
      ['How does automated lead scoring work?', 'Vrumo analyzes buyer criteria and engagement speed, assigning a 0–100% intent score that highlights high-probability prospects to your top sales closers.'],
      ['Can leads be routed by project or language?', 'Yes. Leads can be distributed automatically based on project specialization, language proficiency, territory, or round-robin logic.'],
    ],
    related: ['real-estate-crm', 'real-estate-lead-follow-up', 'ai-crm-for-real-estate-developers'],
  },

  // 4. Real Estate Sales Automation
  {
    slug: 'real-estate-sales-automation',
    title: 'Real Estate Sales Automation Software | Automate Your Sales Pipeline | Vrumo',
    description: 'Automate your property sales pipeline from lead assignment and qualification to site visits, follow-ups, and CRM updates with Vrumo AI.',
    eyebrow: 'REAL ESTATE SALES AUTOMATION',
    h1: 'Automate Your Real Estate Sales Process',
    intro: 'Connect the events between marketing, qualification, and closing so your sales team receives high-intent opportunities with full context and zero manual paperwork.',
    visualLabel: 'SALES WORKFLOW',
    visualTitle: 'Qualified lead → Confirmed visit',
    targetKeyword: 'real estate sales automation',
    pains: [
      ['Sales Reps Chasing Admin', 'Automate routine follow-up messages, calendar confirmations, and pipeline updates.'],
      ['Handoffs Lack Context', 'Pass complete qualification transcripts, budget constraints, and preferences directly to the closing advisor.'],
      ['Pipelines Stall Silently', 'Deploy automated re-engagement triggers for prospects who have gone quiet after receiving pricing.'],
    ],
    outcomes: [
      ['Sub-60s Response Speed', 'Trigger conversational qualification within 60 seconds of lead capture across WhatsApp and voice.'],
      ['Structured Team Handoffs', 'Notify sales managers instantly when high-intent opportunities are ready for personalized consultation.'],
      ['Pipeline Velocity', 'Shorten the cycle time from first ad click to on-site tour and token deposit.'],
    ],
    workflow: ['Lead assignment', 'Lead qualification', 'Follow-up', 'Sales notification', 'Site visit', 'CRM update', 'Re-engagement'],
    faqs: [
      ['Which stages of real estate sales can be automated?', 'Lead capture, qualification, routing, follow-up cadences, site visit scheduling, reminder dispatch, CRM logging, and long-term re-engagement can all be automated.'],
      ['Can Vrumo adapt to our existing sales playbook?', 'Yes. Workflows, qualification rules, and communication templates are tailored to your company’s exact sales methodology.'],
    ],
    related: ['real-estate-crm', 'real-estate-ai-automation', 'real-estate-lead-follow-up'],
  },

  // 5. Real Estate Lead Follow-Up
  {
    slug: 'real-estate-lead-follow-up',
    title: 'Real Estate Lead Follow-Up Automation | AI Follow-Up Software | Vrumo',
    description: 'Never let a real estate lead go cold. Automate multi-touch follow-up sequences across WhatsApp, AI calling, and SMS with Vrumo AI.',
    eyebrow: 'REAL ESTATE LEAD FOLLOW-UP',
    h1: 'Never Let a Real Estate Lead Go Cold',
    intro: 'Build a consistent next-action system around buyer intent, response status, and sales ownership. Vrumo keeps qualified prospects moving until a sales advisor takes over.',
    visualLabel: 'FOLLOW-UP SEQUENCE',
    visualTitle: 'High-intent buyer · Day 03',
    targetKeyword: 'real estate lead follow up software',
    pains: [
      ['First Calls Go Unanswered', 'Deploy automated WhatsApp follow-ups and AI callbacks rather than abandoning unresponsive prospects.'],
      ['Inconsistent Sales Outreach', 'Enforce structured 7-day and 14-day touchpoint cadences that execute reliably in the background.'],
      ['Dormant Leads Are Forgotten', 'Re-engage 3-to-6-month-old database contacts with new project launches and financing schemes.'],
    ],
    outcomes: [
      ['Event-Driven Follow-Up', 'Trigger the next communication step based on buyer behavior (e.g. brochure viewed, call missed, link clicked).'],
      ['Multi-Channel Cadence', 'Coordinate WhatsApp messages, AI voice check-ins, and calendar reminders seamlessly.'],
      ['Intelligent Stop Conditions', 'Automatically pause sequences the moment a buyer replies, books a visit, or requests human consultation.'],
    ],
    workflow: ['Lead qualified', 'WhatsApp message', 'No response', 'Follow-up', 'AI call', 'Site visit', 'Sales notification', 'CRM update'],
    faqs: [
      ['How many follow-up attempts does Vrumo make?', 'The frequency, channel selection, and total cadence are completely configurable based on your sales policy (e.g. 5 touches over 10 days).'],
      ['Does follow-up stop when a customer replies?', 'Yes. The system immediately halts automated outreach and transitions the conversation to your sales advisor.'],
    ],
    related: ['real-estate-whatsapp-automation', 'real-estate-sales-automation', 'real-estate-crm'],
  },

  // 6. Real Estate WhatsApp Automation
  {
    slug: 'real-estate-whatsapp-automation',
    title: 'WhatsApp Automation for Real Estate | AI WhatsApp Sales Assistant | Vrumo',
    description: 'Transform property inquiries into qualified site visits. Vrumo AI real estate WhatsApp automation qualifies leads, shares brochures, and schedules visits 24/7.',
    eyebrow: 'REAL ESTATE WHATSAPP AUTOMATION',
    h1: 'WhatsApp Automation for Real Estate',
    intro: 'Use connected WhatsApp workflows to answer approved property questions, gather buyer requirements, deliver brochures, and coordinate site visits without losing conversation history.',
    visualLabel: 'WHATSAPP ENQUIRY',
    visualTitle: '3 BHK Availability & Pricing',
    targetKeyword: 'real estate WhatsApp automation',
    pains: [
      ['Enquiries Wait in Inboxes', 'Respond to ad leads within 15 seconds on their favorite messaging app.'],
      ['Requirements Stay in Personal Chats', 'Structure budget, BHK, and timeline data directly into company CRM records.'],
      ['Follow-Ups Lack Consistency', 'Run automated WhatsApp nurturing cadences and seamlessly hand off to human advisors.'],
    ],
    outcomes: [
      ['Conversational Qualification', 'Ask natural questions to capture budget, location preference, and purchase timeline.'],
      ['Rich Media Sharing', 'Deliver PDF brochures, video walkthroughs, and unit floor plans directly in chat.'],
      ['One-Click Visit Scheduling', 'Offer interactive weekend time slots and dispatch automated location map drops.'],
    ],
    workflow: ['Message received', 'Intent understood', 'Requirement captured', 'Brochure shared', 'Slot offered', 'CRM updated'],
    faqs: [
      ['Is Vrumo integrated with the official WhatsApp Business API?', 'Yes. Vrumo operates via verified WhatsApp Business API providers, ensuring 100% compliance with Meta policies and high deliverability.'],
      ['Can human sales reps jump into the WhatsApp conversation?', 'Yes. Your team uses a shared multi-agent inbox where advisors can take over any conversation with full historical context.'],
      ['Can WhatsApp conversations update our CRM?', 'Yes. Every conversation transcript, requirement tag, and appointment outcome is automatically synchronized with your CRM.'],
    ],
    related: ['real-estate-lead-follow-up', 'real-estate-lead-management', 'real-estate-crm'],
  },

  // 7. Real Estate AI Calling
  {
    slug: 'real-estate-ai-calling',
    title: 'AI Calling for Real Estate | AI Voice Agent for Property Leads | Vrumo',
    description: 'Deploy conversational AI voice agents for real estate: qualify inbound inquiries, conduct outbound speed-to-lead calls, recover missed calls, and book site visits.',
    eyebrow: 'REAL ESTATE AI CALLING',
    h1: 'AI Calling for Real Estate',
    intro: 'Handle bounded inbound and outbound property conversations, capture buyer requirements, and escalate qualified opportunities to human sales closers with full transcripts.',
    visualLabel: 'CALL IN PROGRESS',
    visualTitle: 'Property Enquiry · 00:42',
    targetKeyword: 'AI calling for real estate',
    pains: [
      ['Missed Inbound Hotline Calls', 'Instantly recover lost callers with automated 30-second AI callbacks.'],
      ['Telecalling Overhead & Burnout', 'Automate high-volume initial qualification calls at a fraction of traditional BPO costs.'],
      ['Delayed Follow-Up Contact', 'Place instant outbound qualification calls within 45 seconds of ad lead submission.'],
    ],
    outcomes: [
      ['Inbound Call Answering', 'Answer property inquiries on the first ring, explain project highlights, and book site tours.'],
      ['Outbound Lead Qualification', 'Verify buyer budget, configuration, buying timeline, and financing readiness over spoken dialogue.'],
      ['Structured CRM Summaries', 'Automatically transcribe calls, generate intent scores, and log next actions into your CRM.'],
    ],
    workflow: ['Call connected', 'Purpose identified', 'Requirement captured', 'Lead qualified', 'Visit proposed', 'CRM updated'],
    faqs: [
      ['What does the AI calling agent sound like?', 'Vrumo uses state-of-the-art conversational voice synthesis with natural human inflections, breathing, and sub-500ms conversational latency.'],
      ['Can the AI voice agent transfer calls to a live salesperson?', 'Yes. If a buyer requests human consultation or enters deep price negotiation, the AI performs a warm transfer to your on-duty sales manager.'],
      ['Are calls recorded and logged in the CRM?', 'Yes. Full audio recordings, text transcripts, and AI-generated summary cards are pinned to the lead record in your CRM.'],
    ],
    related: ['real-estate-ai-automation', 'real-estate-lead-management', 'real-estate-sales-automation'],
  },

  // 8. Real Estate Site Visit Automation
  {
    slug: 'real-estate-site-visit-automation',
    title: 'Real Estate Site Visit Scheduling & Automation | Vrumo AI',
    description: 'Automate real estate site visit scheduling, calendar sync, location drops, and reminder sequences to maximize tour attendance and reduce no-shows.',
    eyebrow: 'REAL ESTATE SITE VISIT AUTOMATION',
    h1: 'Automate Real Estate Site Visit Scheduling',
    intro: 'The site visit is the definitive revenue milestone in property sales. Vrumo automates slot selection, calendar syncing, location sharing, and reminder sequences to pack your sales gallery.',
    visualLabel: 'SITE VISIT BOOKING',
    visualTitle: 'Confirmed Tour · Sat 11:30 AM',
    targetKeyword: 'real estate site visit automation',
    pains: [
      ['High Site Visit No-Show Rates', 'Eliminate no-shows with automated 24-hour and 2-hour multi-channel reminder sequences.'],
      ['Back-and-Forth Scheduling Friction', 'Allow buyers to pick their preferred time slot via interactive WhatsApp buttons or voice dialogue.'],
      ['Sales Lounge Miscoordination', 'Ensure on-site sales executives receive instant buyer profiles before the customer arrives.'],
    ],
    outcomes: [
      ['Frictionless Slot Booking', 'Direct calendar integration presents available weekend and weekday tour windows.'],
      ['Automated Directions & Map Pins', 'Dispatch Google Maps pins, parking instructions, and host contact details automatically.'],
      ['Post-Visit Feedback Workflows', 'Trigger post-visit surveys and negotiation follow-up sequences immediately after the tour.'],
    ],
    workflow: ['Lead qualification', 'Property selection', 'Availability check', 'Calendar sync', 'Slot selection', 'Confirmation sent', 'Reminder sent', 'Sales notification', 'CRM update'],
    faqs: [
      ['How does site visit automation reduce no-shows?', 'By sending automated WhatsApp and SMS reminders with directions, advisor contact info, and easy one-click rescheduling options 24h and 2h prior to the visit.'],
      ['Can site visits be assigned to specific on-site sales managers?', 'Yes. Appointments are distributed based on sales lounge shift schedules, tower specialization, or lead ownership.'],
    ],
    related: ['real-estate-crm', 'real-estate-sales-automation', 'real-estate-lead-follow-up'],
  },

  // 9. AI CRM for Developers
  {
    slug: 'ai-crm-for-real-estate-developers',
    title: 'AI CRM for Real Estate Developers | Vrumo',
    description: 'Enterprise AI CRM built for property developers: multi-project lead management, channel partner distribution, live unit inventory, and site visit logistics.',
    eyebrow: 'CRM FOR REAL ESTATE DEVELOPERS',
    h1: 'AI CRM Built for Real Estate Developers',
    intro: 'Give developer sales teams one intelligent system for multi-project lead capture, requirement matching, channel partner attribution, automated follow-ups, and sales lounge operations.',
    visualLabel: 'PROJECT PIPELINE',
    visualTitle: 'The Westin Residences · 48 Active Leads',
    targetKeyword: 'real estate CRM for developers',
    pains: [
      ['Multi-Project Campaign Chaos', 'Centralize leads across multiple residential and commercial developments in one dashboard.'],
      ['Channel Partner Collisions', 'Automate CP lead registration, deduplication, and time-stamped sourcing rights.'],
      ['Inventory Double-Booking', 'Synchronize live unit stacking plans across sales teams, lounges, and external brokerages.'],
    ],
    outcomes: [
      ['Project-Level Segmentation', 'Partition campaigns, inventory, and sales teams by development while maintaining group-level analytics.'],
      ['Instant Launch Scalability', 'Handle 10,000+ monthly campaign leads with automated WhatsApp qualification and voice AI.'],
      ['Sales Lounge Digitization', 'Track walk-in visitors, match pre-booked appointments, and alert assigned executives in real time.'],
    ],
    workflow: ['Campaign enquiry', 'Project identified', 'Buyer qualified', 'Advisor assigned', 'Site visit confirmed', 'Pipeline advanced'],
    faqs: [
      ['Can Vrumo handle multi-tower, multi-phase developments?', 'Yes. Vrumo is architected for large property developers managing multiple concurrent projects, towers, and inventory configurations.'],
      ['How does Vrumo prevent channel partner disputes?', 'Vrumo includes an automated time-stamped registration engine with phone number verification and configurable validity windows.'],
    ],
    related: ['real-estate-crm', 'real-estate-lead-management', 'real-estate-sales-automation'],
  },

  // 10. AI CRM for Agents & Brokers
  {
    slug: 'ai-crm-for-real-estate-agents',
    title: 'CRM for Real Estate Agents & Brokers | AI Lead Management | Vrumo',
    description: 'Centralize buyer requirements, automate property matching, and eliminate manual follow-up with Vrumo AI CRM for real estate agents and brokers.',
    eyebrow: 'CRM FOR REAL ESTATE AGENTS & BROKERS',
    h1: 'AI CRM for Real Estate Agents & Brokers',
    intro: 'Vrumo helps property agents, brokerages, and consultants organize buyer criteria, listings, WhatsApp conversations, and next actions without manual CRM paperwork.',
    visualLabel: 'BROKER WORKSPACE',
    visualTitle: 'Today · 12 Priority Buyers',
    targetKeyword: 'real estate CRM for agents',
    pains: [
      ['Leads Scattered on Personal Phones', 'Centralize buyer conversations into a shared company workspace with complete deal history.'],
      ['Manual Listing Matching', 'Match incoming buyer budgets and location requirements against available property listings automatically.'],
      ['Admin Stealing Selling Time', 'Automate WhatsApp responses, follow-up reminders, and viewing confirmations.'],
    ],
    outcomes: [
      ['Prioritized Daily Queue', 'See exactly which high-intent buyers require attention today, sorted by transaction probability.'],
      ['Unified Mobile Workspace', 'Access lead profiles, chat transcripts, and property brochures on the go.'],
      ['Faster Deal Turnaround', 'Accelerate the journey from buyer inquiry to viewing and offer submission.'],
    ],
    workflow: ['Buyer enquiry', 'Requirement captured', 'Listings matched', 'Follow-up sent', 'Viewing booked', 'Agent notified'],
    faqs: [
      ['Is Vrumo suitable for independent real estate brokers and small agencies?', 'Yes. Vrumo scales from independent property consultants to 100+ agent brokerages.'],
      ['Can Vrumo ingest leads from 99acres, MagicBricks, and Facebook Ads?', 'Yes. Vrumo connects with all major property portals, Meta ads, Google ads, and website webhooks.'],
    ],
    related: ['real-estate-crm', 'real-estate-whatsapp-automation', 'real-estate-lead-follow-up'],
  },
];

export const seoPageMap = new Map(seoPages.map((page) => [page.slug, page]));
