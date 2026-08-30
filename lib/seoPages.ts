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
};

export const seoPages: SeoPage[] = [
  {
    slug: 'real-estate-crm',
    title: 'Real Estate CRM Software & AI Automation | Vrumo AI',
    description: 'Manage real estate leads, follow-ups, site visits and sales pipelines in one AI-powered CRM built for property teams.',
    eyebrow: 'REAL ESTATE CRM SOFTWARE',
    h1: 'A Real Estate CRM That Keeps Every Lead Moving.',
    intro: 'Vrumo brings property enquiries, requirements, conversations, site visits, owners and next actions into one real estate sales workspace—then helps automate the repetitive work around them.',
    visualLabel: 'ACTIVE OPPORTUNITY', visualTitle: '3 BHK · Gurgaon',
    pains: [['Scattered lead context', 'Bring website, campaign, call and WhatsApp enquiries into one record.'], ['Manual pipeline updates', 'Keep stages and next actions current from connected conversations.'], ['Unclear sales ownership', 'Route leads and give every team member a complete activity history.']],
    outcomes: [['Property-aware records', 'Capture budget, location, project, property type, purpose and timeline.'], ['Real sales stages', 'Track new leads through qualification, site visit, negotiation and booking.'], ['AI-assisted follow-up', 'Trigger approved next actions without turning the CRM into a generic chatbot.']],
    workflow: ['Enquiry captured', 'Requirement structured', 'Lead scored', 'Owner assigned', 'Follow-up triggered', 'Site visit recorded'],
    faqs: [['How is a real estate CRM different from a general CRM?', 'It is organized around property requirements, projects, site visits, sales stages and lead sources common to real estate.'], ['Can Vrumo replace our current CRM?', 'Vrumo can work as the main real estate CRM or as an automation layer around a suitable existing system.'], ['Can multiple projects and sales teams be managed?', 'Workflows can be structured around project, location, lead source, sales owner and other agreed routing rules.']],
    related: ['real-estate-lead-management', 'real-estate-sales-automation', 'real-estate-lead-follow-up'],
  },
  {
    slug: 'real-estate-ai-automation',
    title: 'AI Automation for Real Estate Sales | Vrumo AI',
    description: 'Automate real estate lead capture, qualification, follow-ups, site visits and CRM updates with workflows built around your sales process.',
    eyebrow: 'AI AUTOMATION FOR REAL ESTATE',
    h1: 'Automate the Repetition Between Enquiry and Deal.',
    intro: 'Vrumo connects the steps your team repeats every day: capture the enquiry, understand the requirement, follow up, coordinate the visit and keep the right system updated.',
    visualLabel: 'AUTOMATION RUN', visualTitle: 'New enquiry workflow',
    pains: [['Too many manual handoffs', 'Move context from marketing to qualification to the sales owner.'], ['Follow-up depends on memory', 'Use time and event-based rules to keep the next action visible.'], ['Systems fall out of sync', 'Record approved workflow outcomes in your CRM and connected tools.']],
    outcomes: [['Bounded workflows', 'Define the trigger, data, action, exception and human handoff.'], ['Cross-channel action', 'Coordinate suitable messaging, calling, calendars and CRM activity.'], ['Clear oversight', 'Give your team visibility into what the automation did and what happens next.']],
    workflow: ['Lead arrives', 'AI reads context', 'Requirements captured', 'Action selected', 'Team handoff', 'CRM synchronized'],
    faqs: [['What real estate work can Vrumo automate?', 'Common workflows include capture, qualification, follow-up, missed-call recovery, assignment, reminders, site visits and CRM updates.'], ['Does automation remove the sales team?', 'No. It removes repetitive steps and prepares stronger handoffs so people can focus on judgment and closing.'], ['Can we start with one workflow?', 'Yes. A focused bottleneck is often the best place to start before connecting a broader lead journey.']],
    related: ['real-estate-crm', 'real-estate-sales-automation', 'real-estate-ai-calling'],
  },
  {
    slug: 'real-estate-lead-management',
    title: 'Real Estate Lead Management Software | Vrumo AI',
    description: 'Capture, qualify, route and track real estate leads with AI-assisted lead management for developers, brokers and property sales teams.',
    eyebrow: 'REAL ESTATE LEAD MANAGEMENT',
    h1: 'Know Which Property Leads Need Attention Now.',
    intro: 'Turn every enquiry into a structured opportunity with the property requirement, budget, location, timeline, source, owner and next action ready for your sales team.',
    visualLabel: 'LEAD QUALIFICATION', visualTitle: 'Rahul Sharma · 92% intent',
    pains: [['High lead volume', 'Separate casual enquiries from prospects with complete requirements.'], ['Incomplete qualification', 'Collect budget, location, property type, purpose and timeline consistently.'], ['Slow distribution', 'Apply routing rules so qualified opportunities reach the right owner.']],
    outcomes: [['Intent scoring', 'Prioritize leads using the information and rules relevant to your team.'], ['Complete context', 'Keep conversations and qualification data attached to the lead.'], ['Reliable next actions', 'Make follow-up, assignment and site-visit status visible.']],
    workflow: ['Lead captured', 'Questions asked', 'Requirement extracted', 'Intent scored', 'Owner selected', 'Next action created'],
    faqs: [['What information can Vrumo capture?', 'Typical fields include property type, budget, preferred location, project, buying timeline, purpose and financing needs.'], ['How are high-intent leads identified?', 'Qualification combines the captured requirement with the scoring and routing rules agreed for your sales process.'], ['Can leads be routed by project?', 'Suitable workflows can route by project, geography, lead value, source, language, availability or other business rules.']],
    related: ['real-estate-crm', 'real-estate-lead-follow-up', 'ai-crm-for-real-estate-developers'],
  },
  {
    slug: 'real-estate-whatsapp-automation',
    title: 'Real Estate WhatsApp Automation | Vrumo AI',
    description: 'Qualify property enquiries, send approved follow-ups, share information and coordinate site visits through connected WhatsApp workflows.',
    eyebrow: 'REAL ESTATE WHATSAPP AUTOMATION',
    h1: 'Turn WhatsApp Enquiries Into Qualified Site Visits.',
    intro: 'Use connected WhatsApp workflows to answer approved property questions, gather buyer requirements, continue follow-ups and coordinate the next step without losing the conversation history.',
    visualLabel: 'WHATSAPP ENQUIRY', visualTitle: '3 BHK availability request',
    pains: [['Enquiries wait in inboxes', 'Respond faster when a new property enquiry arrives.'], ['Requirements stay in chat', 'Structure the budget, location and timeline in the lead record.'], ['Follow-ups become inconsistent', 'Run approved reminders and hand off when human attention is needed.']],
    outcomes: [['Qualification in conversation', 'Ask the right questions without sending every lead through the same script.'], ['Approved information sharing', 'Share suitable property details, links or brochures defined in your workflow.'], ['Visit coordination', 'Offer connected calendar slots and record the confirmed outcome.']],
    workflow: ['Message received', 'Intent understood', 'Requirement captured', 'Information shared', 'Slot offered', 'CRM updated'],
    faqs: [['Can Vrumo send WhatsApp messages automatically?', 'Vrumo can support approved provider and template-based workflows, subject to your setup and permissions.'], ['Can a human take over the conversation?', 'Workflows can include handoff conditions so the right salesperson receives the context and next action.'], ['Can WhatsApp data update our CRM?', 'Where suitable APIs and permissions are available, conversation outcomes can be written to the connected lead record.']],
    related: ['real-estate-lead-follow-up', 'real-estate-lead-management', 'real-estate-crm'],
  },
  {
    slug: 'real-estate-ai-calling',
    title: 'AI Calling for Real Estate Lead Qualification | Vrumo AI',
    description: 'Use AI calling workflows for real estate enquiries, lead qualification, follow-up, appointment coordination and CRM updates.',
    eyebrow: 'REAL ESTATE AI CALLING',
    h1: 'An AI Calling Agent Built Around Property Enquiries.',
    intro: 'Handle bounded inbound and outbound real estate conversations, capture the result and move qualified opportunities to a clear human next step.',
    visualLabel: 'CALL IN PROGRESS', visualTitle: 'Property enquiry · 00:42',
    pains: [['Missed calls disappear', 'Create a recovery workflow and reconnect suitable callers.'], ['Call notes are incomplete', 'Structure requirements and summarize the approved outcome.'], ['Follow-up starts late', 'Trigger the next message, task or owner notification after the call.']],
    outcomes: [['Inbound qualification', 'Handle common property enquiries and capture buyer context.'], ['Outbound follow-up', 'Reconnect suitable leads with an approved purpose and script.'], ['Actionable summaries', 'Write the result, disposition and next action back to your system.']],
    workflow: ['Call connected', 'Purpose identified', 'Requirement captured', 'Lead qualified', 'Visit proposed', 'CRM updated'],
    faqs: [['What can a real estate AI calling agent handle?', 'It can support bounded enquiries, qualification, frequently asked questions, follow-up and appointment coordination.'], ['Can the AI transfer to a person?', 'A workflow can include escalation and human handoff conditions based on intent, risk or the conversation outcome.'], ['Are calls recorded in the CRM?', 'Where your tools and permissions support it, call summaries, outcomes and next actions can be recorded.']],
    related: ['real-estate-ai-automation', 'real-estate-lead-management', 'real-estate-sales-automation'],
  },
  {
    slug: 'real-estate-sales-automation',
    title: 'Real Estate Sales Automation Software | Vrumo AI',
    description: 'Automate real estate sales workflows from lead capture and qualification to site visits, assignments, follow-ups and CRM updates.',
    eyebrow: 'REAL ESTATE SALES AUTOMATION',
    h1: 'Keep Your Property Sales Pipeline Moving Automatically.',
    intro: 'Connect the events between marketing, qualification and sales so your team gets better opportunities with the right context and fewer repetitive admin steps.',
    visualLabel: 'SALES WORKFLOW', visualTitle: 'Qualified lead → site visit',
    pains: [['Sales reps chase admin', 'Automate routine updates, tasks and reminders around the lead.'], ['Handoffs lack context', 'Pass the requirement, score, conversation and next action together.'], ['Pipelines stall silently', 'Use event and time-based rules to surface opportunities that need attention.']],
    outcomes: [['Faster lead response', 'Begin the agreed qualification flow when an enquiry arrives.'], ['Structured handoffs', 'Notify the right salesperson when the opportunity is ready.'], ['Pipeline consistency', 'Keep stages, activities and follow-up outcomes visible.']],
    workflow: ['Enquiry captured', 'Lead qualified', 'Owner notified', 'Site visit booked', 'Negotiation tracked', 'Deal stage updated'],
    faqs: [['Which sales stages can be automated?', 'Capture, qualification, routing, reminders, follow-up, site-visit coordination and record updates are common starting points.'], ['Can Vrumo follow our existing sales process?', 'The workflow should be mapped around your actual triggers, rules, systems, exceptions and handoffs.'], ['Can managers see automation activity?', 'Connected workflows can record actions and outcomes so managers know what happened and what still needs attention.']],
    related: ['real-estate-crm', 'real-estate-ai-automation', 'real-estate-lead-follow-up'],
  },
  {
    slug: 'real-estate-lead-follow-up',
    title: 'Real Estate Lead Follow-Up Automation | Vrumo AI',
    description: 'Automate real estate lead follow-up across approved WhatsApp, calling, CRM and sales workflows so qualified enquiries do not go cold.',
    eyebrow: 'REAL ESTATE LEAD FOLLOW-UP',
    h1: 'Follow Up With Every Good Lead—Without Chasing.',
    intro: 'Build a consistent next-action system around buyer intent, response status and sales ownership. Vrumo helps keep qualified leads moving until a person should take over.',
    visualLabel: 'FOLLOW-UP SEQUENCE', visualTitle: 'High-intent lead · Day 02',
    pains: [['First calls go unanswered', 'Create a suitable next step instead of abandoning the enquiry.'], ['Timing is inconsistent', 'Use rules based on status, intent and elapsed time.'], ['Old leads are forgotten', 'Identify appropriate dormant opportunities for re-engagement.']],
    outcomes: [['Event-based follow-up', 'Trigger the next action from real lead activity and status.'], ['Cross-channel coordination', 'Connect suitable messages, calls, tasks and team alerts.'], ['Stop conditions', 'Pause or hand off when a lead replies, books or needs human judgment.']],
    workflow: ['Lead qualified', 'Message sent', 'No response', 'Reminder triggered', 'Call attempted', 'Sales owner notified'],
    faqs: [['How often does Vrumo follow up?', 'The timing and stop conditions are defined around your policy, lead status and approved workflow.'], ['Can follow-up stop when a lead responds?', 'Yes. Response, booking, opt-out and human handoff events can act as stop conditions.'], ['Can old leads be re-engaged?', 'Suitable dormant leads can be selected using agreed criteria and re-enter an approved outreach workflow.']],
    related: ['real-estate-whatsapp-automation', 'real-estate-sales-automation', 'real-estate-crm'],
  },
  {
    slug: 'ai-crm-for-real-estate-developers',
    title: 'AI CRM for Real Estate Developers | Vrumo AI',
    description: 'Manage project enquiries, qualification, channel sources, site visits and developer sales pipelines with an AI-powered real estate CRM.',
    eyebrow: 'CRM FOR REAL ESTATE DEVELOPERS',
    h1: 'Turn Project Enquiries Into Qualified Site Visits.',
    intro: 'Give developer sales teams one intelligent system for multi-project lead capture, requirement matching, channel attribution, follow-up, site visits and CRM visibility.',
    visualLabel: 'PROJECT PIPELINE', visualTitle: 'The Westin Residences · 24 leads',
    pains: [['Multiple project campaigns', 'Keep source, campaign and project context attached to every enquiry.'], ['Distributed sales teams', 'Route leads with clear ownership and workload visibility.'], ['Complex visit coordination', 'Connect qualification, inventory context, calendars and notifications.']],
    outcomes: [['Project-level visibility', 'View lead volume, qualification and progress by development.'], ['Requirement matching', 'Structure buyer preferences against suitable project information.'], ['Consistent process', 'Give every sales rep the context and next action from one record.']],
    workflow: ['Campaign enquiry', 'Project identified', 'Buyer qualified', 'Advisor assigned', 'Site visit confirmed', 'Pipeline advanced'],
    faqs: [['Can Vrumo manage multiple developments?', 'Workflows and views can be structured by project, campaign, location, inventory context and sales team.'], ['Can leads be distributed to advisors?', 'Suitable routing can use project, territory, availability, language, workload or other agreed rules.'], ['Can channel sources be tracked?', 'Lead source and campaign context can be captured when the connected systems provide that data.']],
    related: ['real-estate-crm', 'real-estate-lead-management', 'real-estate-sales-automation'],
  },
  {
    slug: 'ai-crm-for-real-estate-agents',
    title: 'AI CRM for Real Estate Agents & Brokers | Vrumo AI',
    description: 'Centralize property enquiries, automate follow-ups and prioritize high-intent buyers with an AI CRM for real estate agents and brokers.',
    eyebrow: 'CRM FOR REAL ESTATE AGENTS',
    h1: 'Spend Less Time Chasing Leads. More Time Closing Them.',
    intro: 'Vrumo helps agents, brokers and property consultants organize buyer requirements, listings, conversations and next actions without adding more manual CRM work.',
    visualLabel: 'AGENT WORKSPACE', visualTitle: 'Today · 8 priority leads',
    pains: [['Leads live on personal phones', 'Bring connected enquiries and outcomes into a shared customer record.'], ['Every listing has different context', 'Capture the requirement, budget, location and property interest clearly.'], ['Admin steals selling time', 'Automate suitable reminders, summaries, routing and record updates.']],
    outcomes: [['Prioritized daily work', 'See the buyers and next actions that need attention now.'], ['Complete conversation history', 'Keep qualification and follow-up context with the opportunity.'], ['Easier team coordination', 'Share ownership, visit status and pipeline stage across the agency.']],
    workflow: ['Buyer enquiry', 'Requirement captured', 'Listings matched', 'Follow-up sent', 'Viewing booked', 'Agent notified'],
    faqs: [['Is Vrumo suitable for an independent agent?', 'The workflows can support individual agents as well as brokerages and larger sales teams.'], ['Can it organize leads from different portals?', 'Suitable lead sources can be connected when they provide accessible forms, APIs, email events or other integration methods.'], ['Can Vrumo help schedule property viewings?', 'Connected workflows can propose available slots, confirm a viewing and notify the responsible agent.']],
    related: ['real-estate-crm', 'real-estate-whatsapp-automation', 'real-estate-lead-follow-up'],
  },
];

export const seoPageMap = new Map(seoPages.map((page) => [page.slug, page]));
