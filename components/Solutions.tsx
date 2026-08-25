import React from 'react';

const systems = [
  {
    number: '01',
    id: 'calling-agent',
    title: 'AI calling agent',
    text: 'Custom AI voice agents for inbound and outbound calls. They can answer common questions, understand customer intent, qualify leads, book appointments, schedule demos, send follow-ups, and update CRM records after each conversation.',
    result: 'Conversation → action',
    tags: ['Inbound & outbound calls', 'Lead qualification', 'Demo scheduling', 'CRM updates'],
    cta: 'Discuss an AI calling agent',
    subject: 'AI calling agent project',
  },
  {
    number: '02',
    id: 'whatsapp-ai',
    title: 'WhatsApp AI automation',
    text: 'A WhatsApp AI assistant for repetitive sales and support conversations. It can answer customer questions, qualify leads, check availability, book appointments, send follow-ups, and connect each conversation to your CRM.',
    result: 'Message → resolution',
    tags: ['Customer questions', 'Appointment booking', 'Sales & support', 'CRM-connected chat'],
    cta: 'Plan WhatsApp automation',
    subject: 'WhatsApp AI automation project',
  },
  {
    number: '03',
    id: 'crm-integration',
    title: 'AI CRM integration',
    text: 'CRM automation with AI keeps customer information current without manual entry. Agents can create leads, update contacts and stages, record conversations, create tasks, trigger follow-ups, and synchronize data across connected systems.',
    result: 'Signal → clean CRM',
    tags: ['Contact updates', 'Lead stages', 'Tasks & follow-ups', 'Data synchronization'],
    cta: 'Automate your CRM workflow',
    subject: 'AI CRM integration project',
  },
  {
    number: '04',
    id: 'job-apply-agent',
    title: 'AI job application agent',
    text: 'Job application automation for discovering relevant roles, matching them to a candidate profile, scoring fit, preparing tailored application material, tracking submissions, and maintaining application status. It supports the process without promising employment outcomes.',
    result: 'Workflow → operator',
    tags: ['Job discovery', 'Fit scoring', 'Tailored applications', 'Status tracking'],
    cta: 'Discuss application automation',
    subject: 'AI job application agent project',
  },
];

export function Solutions() {
  return (
    <section className="section solutions-section" id="solutions">
      <div className="wrap">
        <div className="section-intro">
          <div className="eyebrow">Selected systems</div>
          <div className="section-title-group">
            <h2>AI automation services<br />built around outcomes.</h2>
            <p>Each system is designed for a real job: communicating with customers, moving data, coordinating tools, and completing the next approved action.</p>
          </div>
        </div>
        <div className="systems-list">
          {systems.map((system) => (
            <article className="system-row" id={system.id} key={system.number}>
              <span className="system-number mono">{system.number}</span>
              <div className="system-name">
                <h3>{system.title}</h3>
                <span className="system-result mono">{system.result}</span>
                <a className="system-cta" href={`mailto:hello@vrumoai.com?subject=${encodeURIComponent(system.subject)}`}>
                  {system.cta} <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p>{system.text}</p>
              <ul>
                {system.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <span className="system-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
