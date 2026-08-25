import React from 'react';

export function Definitions() {
  return (
    <section className="definition-section" aria-labelledby="what-is-vrumoai">
      <div className="wrap definition-grid">
        <div className="definition-primary">
          <div className="eyebrow">In plain language</div>
          <h2 id="what-is-vrumoai">What is VrumoAI?</h2>
          <p>
            VrumoAI is an <strong>AI automation agency</strong> that builds custom
            AI agents for growing teams. These agents communicate with customers,
            execute business workflows, update connected systems, and complete
            repetitive tasks with defined rules and guardrails.
          </p>
        </div>
        <div className="definition-pair">
          <article>
            <span className="mono">DEFINITION / 01</span>
            <h3>What is an AI agent?</h3>
            <p>An AI agent is software that understands context, decides an approved next step, and takes action through tools, APIs, or databases.</p>
          </article>
          <article>
            <span className="mono">DEFINITION / 02</span>
            <h3>What is AI workflow automation?</h3>
            <p>AI workflow automation connects those decisions to real operations—calls, messages, calendars, CRMs, follow-ups, and multi-step processes.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
