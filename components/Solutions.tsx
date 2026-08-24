import React from 'react';

const systems = [
  {
    number: '01',
    id: 'calling-agent',
    title: 'Voice operations',
    text: 'Natural inbound and outbound calls that qualify, answer, schedule, and move the work forward.',
    result: 'Conversation → action',
    tags: ['Lead qualification', 'Appointment booking', 'Follow-up'],
  },
  {
    number: '02',
    id: 'whatsapp-ai',
    title: 'Messaging operations',
    text: 'A responsive sales and service layer for WhatsApp that knows the customer and the next best step.',
    result: 'Message → resolution',
    tags: ['Sales', 'Support', 'Customer updates'],
  },
  {
    number: '03',
    id: 'crm-integration',
    title: 'Revenue operations',
    text: 'Agents that keep lead records, tasks, notes, and handoffs accurate without waiting on manual entry.',
    result: 'Signal → clean CRM',
    tags: ['CRM hygiene', 'Lead routing', 'Pipeline actions'],
  },
  {
    number: '04',
    id: 'job-apply-agent',
    title: 'Custom operators',
    text: 'Purpose-built systems for the high-volume process unique to your team—from research to applications.',
    result: 'Workflow → operator',
    tags: ['Research', 'Back office', 'Custom systems'],
  },
];

export function Solutions() {
  return (
    <section className="section solutions-section" id="solutions">
      <div className="wrap">
        <div className="section-intro">
          <div className="eyebrow">Selected systems</div>
          <div className="section-title-group">
            <h2>Systems that finish<br />the job.</h2>
            <p>Not another chat window. We build operators around a clear business outcome, then connect every action required to reach it.</p>
          </div>
        </div>
        <div className="systems-list">
          {systems.map((system) => (
            <article className="system-row" id={system.id} key={system.number}>
              <span className="system-number mono">{system.number}</span>
              <div className="system-name">
                <h3>{system.title}</h3>
                <span className="system-result mono">{system.result}</span>
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
