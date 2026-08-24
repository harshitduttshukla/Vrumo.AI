import React from 'react';

export function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-grid" aria-hidden="true" />
      <div className="wrap cta-inner">
        <div className="cta-status mono">AVAILABLE FOR SELECT BUILDS / 2026</div>
        <h2>Bring us the work<br />that should <em>run itself.</em></h2>
        <p>Tell us where the process slows, breaks, or waits on a person. We’ll show you what an operator could own.</p>
        <div className="cta-actions">
          <a className="btn btn-primary btn-large" href="mailto:hello@vrumoai.com?subject=I%20want%20to%20build%20an%20AI%20agent">
            Tell us the workflow <span aria-hidden="true">↗</span>
          </a>
          <span>hello@vrumoai.com</span>
        </div>
      </div>
    </section>
  );
}
