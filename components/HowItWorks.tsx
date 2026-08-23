import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Map the workflow',
    text: 'We learn the process, edge cases, tools, and business rules that make your workflow unique.',
    detail: 'Discovery · Workflow design',
  },
  {
    number: '02',
    title: 'Build the agent',
    text: 'We connect the right models, knowledge, integrations, and guardrails into one reliable system.',
    detail: 'Build · Integrate · Test',
  },
  {
    number: '03',
    title: 'Launch and improve',
    text: 'Your agent goes live with visibility built in, then gets sharper as real work moves through it.',
    detail: 'Deploy · Monitor · Iterate',
  },
];

export function HowItWorks() {
  return (
    <section className="section process-section" id="process">
      <div className="wrap">
        <div className="section-heading-row process-heading">
          <div>
            <div className="eyebrow">How it works</div>
            <h2>From messy process<br />to working system.</h2>
          </div>
          <p>No off-the-shelf chatbot. We design around the job your team actually needs done.</p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-card" key={step.number}>
              <div className="process-top">
                <span className="process-number mono">{step.number}</span>
                {index < steps.length - 1 && <span className="process-arrow" aria-hidden="true">→</span>}
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className="process-detail mono">{step.detail}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
