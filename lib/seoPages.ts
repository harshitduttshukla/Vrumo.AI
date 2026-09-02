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
  {
    slug: 'real-estate-crm',
    title: 'Real Estate CRM Software for Lead Operations | Vrumo',
    description: 'Manage real estate leads with role-based dashboards, WhatsApp transcripts, lead assignment, statuses, callbacks, notes and source reporting.',
    eyebrow: 'REAL ESTATE CRM',
    h1: 'A Real Estate CRM Built Around Actual Sales Work',
    intro: 'Give administrators and sales advisors one place to capture, assign, call, update, schedule and review every property enquiry.',
    visualLabel: 'LEAD RECORD',
    visualTitle: 'The Westin Residences · Call back',
    targetKeyword: 'real estate CRM',
    pains: [
      ['Scattered Lead Context', 'Keep the buyer requirement, WhatsApp transcript, source, owner, notes and activity history together.'],
      ['Unclear Ownership', 'Route qualified leads by project rule or round-robin and show each advisor only their assigned queue.'],
      ['Missed Follow-Ups', 'Use clear call-outcome statuses, scheduled callbacks and WhatsApp reminders to make the next action visible.'],
    ],
    outcomes: [
      ['Role-Based Dashboards', 'Admins see the full operation while advisors work from a focused personal lead list.'],
      ['Real Sales Statuses', 'Track New, Call back, Did not pick up, Follow up, Site visit, Deal success and other real call outcomes.'],
      ['Verifiable Activity', 'Keep permanent internal notes and a read-only history of assignments, notifications and status changes.'],
    ],
    workflow: ['Enquiry captured', 'Requirement stored', 'Advisor assigned', 'Lead called', 'Status updated', 'Next action tracked'],
    faqs: [
      ['What information is stored on a lead?', 'The deployed CRM stores the interested project, country, budget range, purchase purpose, decision timeline, preferred call time, owner, source and conversation history.'],
      ['What is different for admins and sales advisors?', 'Admins see all leads, source queues, team workloads and reporting. Each sales advisor sees only the leads assigned to their account, plus personal metrics and callbacks.'],
      ['Can the CRM schedule callbacks?', 'Yes. Set the lead status to Call back, choose the exact date and time, and save. The assigned advisor receives one WhatsApp reminder approximately a day before.'],
    ],
    related: ['real-estate-lead-management', 'real-estate-whatsapp-automation', 'real-estate-sales-automation'],
  },
  {
    slug: 'real-estate-ai-automation',
    title: 'Real Estate Workflow Automation | Vrumo',
    description: 'Automate WhatsApp qualification, lead routing, advisor notifications, callback reminders and CRM activity logging for real estate teams.',
    eyebrow: 'REAL ESTATE WORKFLOW AUTOMATION',
    h1: 'Automate the Handoff, Not the Human Relationship',
    intro: 'Use automation for the repetitive steps between an inbound enquiry and a prepared sales follow-up: qualification, assignment, notification, reminders and record keeping.',
    visualLabel: 'DOCUMENTED WORKFLOW',
    visualTitle: 'Inbound enquiry → Assigned advisor',
    targetKeyword: 'real estate automation',
    pains: [
      ['Manual Lead Distribution', 'Apply project ownership rules and round-robin distribution consistently.'],
      ['Follow-Up Depends on Memory', 'Turn a promised callback into a scheduled task with an advisor reminder.'],
      ['No Auditability', 'Record notification, note and status events automatically in the lead history.'],
    ],
    outcomes: [
      ['Qualified Handoffs', 'The advisor receives the project, budget, purpose, timeline and call preference before making contact.'],
      ['Automatic Notifications', 'Alert the assigned advisor when a qualified organic, ad or chatbot lead arrives.'],
      ['Reliable Callback Control', 'Queue one reminder for the saved callback and reset it cleanly when the schedule changes.'],
    ],
    workflow: ['Message received', 'Qualification gate passed', 'Requirements saved', 'Routing applied', 'Advisor alerted', 'Activity logged'],
    faqs: [
      ['Which steps are automated in the live CRM?', 'The deployed workflow automates chatbot qualification, lead assignment, new-lead notifications, callback reminders, list refreshes and activity logging.'],
      ['Does automation replace the salesperson?', 'No. The advisor reads the transcript, calls the lead, chooses the correct outcome status, schedules callbacks and adds factual notes.'],
    ],
    related: ['real-estate-crm', 'real-estate-lead-management', 'real-estate-lead-follow-up'],
  },
  {
    slug: 'real-estate-lead-management',
    title: 'Real Estate Lead Management Software | Vrumo',
    description: 'Capture, assign, filter and follow up on real estate leads from ads, WhatsApp, website chatbots, imports and broadcast replies.',
    eyebrow: 'REAL ESTATE LEAD MANAGEMENT',
    h1: 'Make Every Lead Source Workable',
    intro: 'Separate hot inbound enquiries, cold databases, broadcast replies and incomplete chats, then give each team member the right working view.',
    visualLabel: 'ASSIGNED LEAD',
    visualTitle: 'Priya Sharma · The Westin Residences',
    targetKeyword: 'real estate lead management software',
    pains: [
      ['Mixed Lead Sources', 'Keep ads and chatbot leads, imported databases, broadcast replies and junk conversations in distinct operating queues.'],
      ['High-Volume Cold Data', 'Avoid overwhelming advisors with thousands of untouched contacts at once.'],
      ['Hard-to-Find Records', 'Search by name or phone and combine project, advisor, status and source filters.'],
    ],
    outcomes: [
      ['Focused Advisor Queues', 'Salespeople see only their assigned leads, grouped by activity date and paginated 50 at a time.'],
      ['500-Lead Batch Allocation', 'Show 500 untouched imported leads at a time while keeping every contacted follow-up visible.'],
      ['Source-Level Progress', 'Review status counts for each imported spreadsheet and monitor how much remains untouched.'],
    ],
    workflow: ['Lead enters source queue', 'Qualification checked', 'Owner assigned', 'Advisor contacts lead', 'Status saved', 'Progress updates'],
    faqs: [
      ['Which lead sources are supported by the deployed workflow?', 'The current CRM handles Meta and Facebook campaigns, direct WhatsApp enquiries, website chatbot leads, Excel or CSV imports and WhatsApp broadcast replies.'],
      ['How are incomplete chatbot conversations handled?', 'A lead with fewer than two user messages stays in the Junk queue without an owner. If the person returns and messages again, the lead can qualify and promote automatically.'],
    ],
    related: ['real-estate-crm', 'real-estate-whatsapp-automation', 'real-estate-sales-automation'],
  },
  {
    slug: 'real-estate-sales-automation',
    title: 'Real Estate Sales Operations Software | Vrumo',
    description: 'Coordinate lead ownership, call outcomes, callbacks, site visits, notes and conversion reporting in one real estate sales workspace.',
    eyebrow: 'REAL ESTATE SALES OPERATIONS',
    h1: 'Keep the Sales Queue Current After Every Call',
    intro: 'Give advisors a clear daily routine and give managers a trustworthy view of workloads, outcomes and conversions.',
    visualLabel: 'SALES ADVISOR QUEUE',
    visualTitle: 'New → Call back → Follow up → Deal success',
    targetKeyword: 'real estate sales automation',
    pains: [
      ['Statuses Go Stale', 'Make the post-call status update the central action in the advisor workflow.'],
      ['Callbacks Are Forgotten', 'Store an exact follow-up date and time instead of relying on a personal reminder.'],
      ['Managers Lack Visibility', 'See advisor lead counts, conversion yield and project interest from the admin dashboard.'],
    ],
    outcomes: [
      ['Practical Daily Routine', 'Start with New leads, review Call back, retry Did not pick up and finish with warm Follow up records.'],
      ['Permanent Context', 'Attach factual internal notes to the lead so the next call starts with the right history.'],
      ['Conversion Reporting', 'Track Deal success outcomes by advisor and against the filtered lead set.'],
    ],
    workflow: ['Open assigned lead', 'Read transcript', 'Call customer', 'Select outcome', 'Schedule if needed', 'Add note'],
    faqs: [
      ['Which call outcomes can an advisor record?', 'The workflow supports New, Call back, Did not pick up, Not reachable, Follow up, Site visit, Wrong no., Deal success, Rejected and Not interested.'],
      ['Can managers review advisor performance?', 'Yes. Admin workload cards show each advisor’s total assigned leads, converted count and conversion yield.'],
    ],
    related: ['real-estate-crm', 'real-estate-lead-follow-up', 'real-estate-lead-management'],
  },
  {
    slug: 'real-estate-lead-follow-up',
    title: 'Real Estate Callback & Follow-Up Management | Vrumo',
    description: 'Schedule real estate callbacks, remind the assigned advisor on WhatsApp and record every follow-up outcome in the lead history.',
    eyebrow: 'REAL ESTATE FOLLOW-UP MANAGEMENT',
    h1: 'Turn Every Promised Callback Into a Visible Next Action',
    intro: 'Schedule the exact callback time, surface upcoming commitments and preserve the result so follow-up no longer depends on memory.',
    visualLabel: 'CALLBACK WORKFLOW',
    visualTitle: 'Priya Sharma · Thursday 10:00 AM',
    targetKeyword: 'real estate lead follow up software',
    pains: [
      ['Callbacks Live in Personal Calendars', 'Keep the date and time on the shared lead record.'],
      ['Warm Leads Lose Context', 'Review the transcript and previous notes before the next call.'],
      ['Follow-Up Cannot Be Verified', 'Log the status change, note and reminder event in a read-only history.'],
    ],
    outcomes: [
      ['Upcoming Callback Queue', 'Show the next five scheduled callbacks in chronological order on the advisor dashboard.'],
      ['WhatsApp Reminder', 'Notify the assigned advisor approximately one day before the saved callback.'],
      ['Accurate Outcome Tracking', 'Move the lead to the correct status immediately after the conversation.'],
    ],
    workflow: ['Call completed', 'Call back selected', 'Date and time saved', 'Reminder queued', 'Advisor notified', 'Outcome recorded'],
    faqs: [
      ['When is the callback reminder sent?', 'The deployed system checks daily and sends a WhatsApp reminder for callbacks scheduled within roughly the next 36 hours, approximately one day before the call.'],
      ['What happens if the callback time changes?', 'Saving a new callback date resets the reminder so the advisor receives a new alert for the updated schedule.'],
    ],
    related: ['real-estate-crm', 'real-estate-sales-automation', 'real-estate-whatsapp-automation'],
  },
  {
    slug: 'real-estate-whatsapp-automation',
    title: 'WhatsApp Lead Qualification for Real Estate | Vrumo',
    description: 'Qualify real estate enquiries in WhatsApp, preserve the conversation, assign the right advisor and send callback notifications.',
    eyebrow: 'WHATSAPP LEAD QUALIFICATION',
    h1: 'Turn a WhatsApp Conversation Into a Complete Lead Record',
    intro: 'Collect the buyer requirement in chat, preserve the full transcript and hand the lead to a salesperson with the context needed for a useful call.',
    visualLabel: 'WHATSAPP ENQUIRY',
    visualTitle: 'The Westin Residences · Self Use',
    targetKeyword: 'WhatsApp automation for real estate',
    pains: [
      ['Context Stays in Chat', 'Store the conversation beside the structured project, budget, country and purpose fields.'],
      ['Incomplete Enquiries Create Noise', 'Use a two-message qualification gate before assigning an advisor.'],
      ['Advisors Start Calls Blind', 'Show the transcript and preferred call time before the salesperson taps Call Now.'],
    ],
    outcomes: [
      ['Structured Qualification', 'Capture interested projects, country, budget range, purchase purpose, timeline and call preference.'],
      ['Complete Transcript', 'Keep the bot and customer messages with timestamps on the lead detail page.'],
      ['Advisor Notifications', 'Send the owner a WhatsApp summary when a qualified non-imported lead is assigned.'],
    ],
    workflow: ['Message received', 'Project selected', 'Requirement captured', 'Gate passed', 'Advisor assigned', 'Transcript available'],
    faqs: [
      ['Does every first message create an assigned lead?', 'No. In the deployed workflow, conversations with fewer than two user messages remain in the Junk queue until the person returns and sends another message.'],
      ['Do imported leads trigger a WhatsApp assignment alert?', 'No. Immediate advisor notifications are for qualified ad, direct WhatsApp and chatbot leads. Imported cold-database leads use batch allocation.'],
      ['Can advisors read the original chat?', 'Yes. The full WhatsApp transcript is visible on the lead detail page before the advisor calls.'],
    ],
    related: ['real-estate-lead-management', 'real-estate-lead-follow-up', 'real-estate-crm'],
  },
  {
    slug: 'ai-crm-for-real-estate-developers',
    title: 'CRM for Real Estate Developers | Vrumo',
    description: 'Manage multi-project lead routing, advisor workloads, campaign sources, imported databases and conversion reporting for developer sales teams.',
    eyebrow: 'CRM FOR REAL ESTATE DEVELOPERS',
    h1: 'A Multi-Project CRM for Developer Sales Teams',
    intro: 'Route enquiries to project specialists, keep campaign and broadcast sources visible, and give sales leadership one view of advisor workload and outcomes.',
    visualLabel: 'PROJECT OPERATIONS',
    visualTitle: 'The Westin Residences · Assigned Leads',
    targetKeyword: 'real estate CRM for developers',
    pains: [
      ['Project Routing Is Manual', 'Apply explicit ownership rules for project-specific enquiries.'],
      ['Campaign Sources Blur Together', 'Keep the exact Meta campaign, direct WhatsApp, import filename or broadcast source on each lead.'],
      ['Workload Is Hard to Balance', 'Compare assigned volume, converted count and yield across the sales team.'],
    ],
    outcomes: [
      ['Project-Specific Assignment', 'Route named projects to the right specialist and use round-robin for general enquiries.'],
      ['Project Popularity Reporting', 'See which projects receive the most chatbot interest in real time.'],
      ['Bulk Database Operations', 'Import large files, choose an allocation strategy and track progress by spreadsheet.'],
    ],
    workflow: ['Campaign lead', 'Project identified', 'Qualification completed', 'Specialist assigned', 'Follow-up tracked', 'Yield reported'],
    faqs: [
      ['Can different projects have different owners?', 'Yes. The deployed CRM combines project-specific routing with round-robin assignment for general leads.'],
      ['Can admins compare project interest?', 'Yes. The admin dashboard includes a project popularity chart based on chatbot enquiry clicks and questions.'],
    ],
    related: ['real-estate-crm', 'real-estate-lead-management', 'real-estate-sales-automation'],
  },
  {
    slug: 'ai-crm-for-real-estate-agents',
    title: 'CRM for Real Estate Agents & Sales Advisors | Vrumo',
    description: 'Give property advisors an assigned lead queue with WhatsApp context, call outcomes, callbacks, internal notes and daily priorities.',
    eyebrow: 'CRM FOR REAL ESTATE SALES ADVISORS',
    h1: 'A Daily Lead Queue Your Advisors Can Actually Work',
    intro: 'Put the buyer context, phone number, preferred call time, status and next action in one focused salesperson dashboard.',
    visualLabel: 'ADVISOR DASHBOARD',
    visualTitle: 'New leads · Callbacks · Follow-ups',
    targetKeyword: 'real estate CRM for agents',
    pains: [
      ['Too Many Untouched Leads', 'Start the day with a clear New queue and work through it systematically.'],
      ['Calls Lack Context', 'Read the full chatbot conversation and buyer requirements before dialling.'],
      ['Progress Is Easy to Lose', 'Preserve filters and page position when opening a lead and returning to the dashboard.'],
    ],
    outcomes: [
      ['Personal Pipeline Metrics', 'See total leads, new leads, callbacks, site visits and deals won at a glance.'],
      ['Upcoming Commitments', 'Open the next five callbacks directly from the advisor dashboard.'],
      ['Simple Post-Call Discipline', 'Update the status and add a permanent factual note after every call.'],
    ],
    workflow: ['Open daily queue', 'Filter New', 'Read lead context', 'Tap Call Now', 'Save outcome', 'Schedule next action'],
    faqs: [
      ['Can a salesperson see another advisor’s leads?', 'No. The documented salesperson role can see only the leads assigned to that account. Admin users retain the team-wide view.'],
      ['Does the CRM remember where the advisor was working?', 'Yes. Filters, search and pagination are preserved while opening a lead and returning in the same browser session.'],
    ],
    related: ['real-estate-crm', 'real-estate-lead-follow-up', 'real-estate-whatsapp-automation'],
  },
];

export const seoPageMap = new Map(seoPages.map((page) => [page.slug, page]));
