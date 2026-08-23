import React from 'react';

export function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-grid" aria-hidden="true" />
      <div className="cta-glow" aria-hidden="true" />
      <div className="wrap cta-inner">
        <div className="cta-status"><i /> Taking on new builds</div>
        <h2>What should your<br /><span>AI agent do?</span></h2>
        <p>Walk us through the workflow that slows your team down. We’ll help you turn it into a system that runs.</p>
        <div className="cta-actions">
          <a className="btn btn-primary btn-large" href="mailto:hello@vrumoai.com?subject=I%20want%20to%20build%20an%20AI%20agent">
            Tell us your workflow <span aria-hidden="true">↗</span>
          </a>
          <span>hello@vrumoai.com</span>
        </div>
      </div>
    </section>
  );
}
