import React from 'react';
import { faqItems } from '@/lib/site';

export function FAQ() {
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="section-intro faq-heading">
          <div className="eyebrow">Common questions</div>
          <div className="section-title-group">
            <h2 id="faq-title">AI automation,<br />answered clearly.</h2>
            <p>Practical answers about custom AI agents, integrations, cost, timelines, and the work these systems can responsibly own.</p>
          </div>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span className="faq-number mono">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.question}</h3>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer"><p>{item.answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
