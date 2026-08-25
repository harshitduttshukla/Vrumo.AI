export const siteConfig = {
  name: 'VrumoAI',
  url: 'https://vrumo-ai.vercel.app',
  email: 'hello@vrumoai.com',
  title: 'AI Automation Agency | Custom AI Agents | VrumoAI',
  description:
    'VrumoAI builds custom AI agents for growing teams that qualify leads, book appointments, update CRMs, and automate multi-step business workflows.',
} as const;

export const faqItems = [
  {
    question: 'What is an AI automation agency?',
    answer:
      'An AI automation agency designs and builds systems that use AI models, business rules, and software integrations to complete repetitive work. VrumoAI focuses on custom agents that communicate, make bounded decisions, and take action across business tools.',
  },
  {
    question: 'What is a custom AI agent?',
    answer:
      'A custom AI agent is software designed around a specific workflow. It can understand context, follow company rules, use approved data, call APIs, and complete actions such as qualifying a lead, booking an appointment, or updating a CRM.',
  },
  {
    question: 'How do AI agents automate business workflows?',
    answer:
      'AI agents combine language understanding with integrations and guardrails. They receive an event, interpret the request, choose an approved next step, act in connected systems, and record the outcome for people to review.',
  },
  {
    question: 'Can AI agents update my CRM automatically?',
    answer:
      'Yes. An agent can create leads, update contacts and lead stages, record conversation summaries, create tasks, and trigger follow-ups in systems such as HubSpot or Salesforce, subject to the permissions and rules you define.',
  },
  {
    question: 'Can VrumoAI build an AI calling agent for my business?',
    answer:
      'Yes. VrumoAI builds inbound and outbound AI calling agents for lead qualification, frequently asked questions, appointment booking, demo scheduling, follow-ups, and CRM updates.',
  },
  {
    question: 'Can AI agents work with WhatsApp?',
    answer:
      'Yes. A WhatsApp AI assistant can answer customer questions, qualify leads, check availability, book appointments, send follow-ups, and connect conversation data to your CRM or other business systems.',
  },
  {
    question: 'Can VrumoAI integrate with our existing software?',
    answer:
      'VrumoAI can connect agents to tools with suitable APIs, including WhatsApp, HubSpot, Salesforce, Twilio, Google Calendar, Slack, PostgreSQL, and custom REST services. Feasibility depends on each system’s access and permissions.',
  },
  {
    question: 'Can an AI agent perform multiple actions automatically?',
    answer:
      'Yes. A single agent can run a controlled multi-step workflow—for example, qualify a lead, check a calendar, book a demo, update the CRM, and send a confirmation—while following defined rules and guardrails.',
  },
  {
    question: 'How much does a custom AI agent cost?',
    answer:
      'Cost depends on workflow complexity, integrations, data requirements, call or message volume, and the level of monitoring required. VrumoAI scopes the process first, then provides a build plan based on the actual system.',
  },
  {
    question: 'How long does it take to build an AI automation system?',
    answer:
      'The timeline depends on the workflow, number of integrations, edge cases, and testing requirements. VrumoAI maps the process and delivery milestones before development so the scope and launch path are clear.',
  },
  {
    question: 'Do AI agents replace human employees?',
    answer:
      'AI agents are best used to own repetitive, rules-based steps and prepare clear handoffs. People remain responsible for judgment, exceptions, sensitive decisions, and improving the process over time.',
  },
] as const;
