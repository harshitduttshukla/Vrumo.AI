import React from 'react';

export function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <svg
        className="signal-bg"
        style={{ height: '100%', opacity: 0.3 }}
        viewBox="0 0 1180 400"
        preserveAspectRatio="none"
      >
        <path
          className="p1"
          d="M-50,220 C150,140 250,300 450,200 C650,100 750,280 950,180 C1050,140 1150,200 1230,170"
        />
      </svg>
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          Start here
        </div>
        <h2>What should your AI agent do?</h2>
        <p>
          Tell us the workflow you want to automate, and we&apos;ll design the
          right AI system around it.
        </p>
        <a className="btn btn-primary" href="mailto:hello@vrumoai.com">
          Tell us your workflow →
        </a>
      </div>
    </section>
  );
}
