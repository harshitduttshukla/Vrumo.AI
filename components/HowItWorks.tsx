import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Find the leverage',
    text: 'We study the workflow, its edge cases, and the business result worth improving.',
    detail: 'DISCOVER / DESIGN',
  },
  {
    number: '02',
    title: 'Build the operator',
    text: 'We combine models, company knowledge, integrations, and guardrails into one reliable system.',
    detail: 'BUILD / INTEGRATE',
  },
  {
    number: '03',
    title: 'Prove it in the work',
    text: 'We launch with clear visibility, measure completed work, and improve from real use.',
    detail: 'LAUNCH / IMPROVE',
  },
];

export function HowItWorks() {
  return (
    <section className="section process-section" id="process">
      <div className="wrap">
        <div className="section-intro process-heading">
          <div className="eyebrow">The approach</div>
          <div className="section-title-group">
            <h2>Built from the work<br />backwards.</h2>
            <p>No templated chatbot. Every engagement starts with the job, the decision points, and the systems already in place.</p>
          </div>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-card" key={step.number}>
              <div className="process-top">
                <span className="process-number mono">{step.number}</span>
                <span className="process-phase mono">PHASE {index + 1}</span>
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
