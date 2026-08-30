export const siteConfig = {
  name: 'Vrumo AI',
  url: 'https://vrumo-ai.vercel.app',
  email: 'hello@vrumoai.com',
  title: 'Real Estate CRM & AI Automation | Vrumo AI',
  description: 'Vrumo is an AI-powered CRM and automation platform built for real estate teams. Capture leads, automate follow-ups, qualify prospects, manage site visits, and close more deals.',
} as const;

// Retained for compatibility with the previous FAQ component while the new
// homepage uses its real-estate-specific FAQ presentation.
export const faqItems = [
  { question: 'What is a real estate CRM?', answer: 'A real estate CRM helps property teams manage enquiries, contacts, requirements, activities, follow-ups, site visits and opportunities in one system.' },
  { question: 'What is an AI CRM for real estate?', answer: 'An AI CRM adds qualification, conversation workflows, follow-up automation and intelligent next actions to the real estate lead lifecycle.' },
  { question: 'Can Vrumo automate WhatsApp follow-ups?', answer: 'Vrumo can support approved WhatsApp workflows when suitable provider access, permissions and templates are available.' },
] as const;
