import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Find the leverage',
    text: 'We map the current process, customer intent, business rules, edge cases, tools, permissions, and the outcome worth improving.',
    detail: 'DISCOVER / DESIGN',
  },
  {
    number: '02',
    title: 'Build the operator',
    text: 'We connect the right models, company knowledge, APIs, databases, and guardrails into a reliable multi-step workflow.',
    detail: 'BUILD / INTEGRATE',
  },
  {
    number: '03',
    title: 'Prove it in the work',
    text: 'We test real scenarios, launch with clear visibility, measure completed work, and improve the agent from actual use.',
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
            <p>Custom AI agent development starts with the work itself: the trigger, decision points, required actions, exceptions, and systems already in place.</p>
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
