import React from 'react';

export function Hero() {
  return (
    <section className="hero">
      <svg className="signal-bg" viewBox="0 0 1180 520" preserveAspectRatio="none">
        <path
          className="p1"
          d="M-50,300 C150,200 250,380 450,260 C650,140 750,340 950,220 C1050,160 1150,240 1230,200"
        />
        <path
          className="p2"
          d="M-50,380 C200,420 300,300 500,360 C700,420 800,280 1000,340 C1100,370 1150,320 1230,350"
        />
      </svg>
      <div className="wrap hero-inner">
        <div className="eyebrow">AI agents for real work</div>
        <h1>
          AI agents that actually<br />
          do <em>the work</em>. Not just chat.
        </h1>
        <p className="lead">
          VrumoAI builds intelligent agents that handle customer conversations, connect to your CRM, and carry out the repetitive workflows your team doesn&apos;t have time for.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#cta">
            Tell us your workflow →
          </a>
          <a className="btn btn-ghost" href="#solutions">
            See what we build
          </a>
        </div>
        <div className="hero-strip">
          <div>
            <strong>Voice</strong> — inbound &amp; outbound calling
          </div>
          <div>
            <strong>Messaging</strong> — WhatsApp conversations
          </div>
          <div>
            <strong>Systems</strong> — CRM &amp; API sync
          </div>
          <div>
            <strong>Search</strong> — job matching &amp; apply
          </div>
        </div>
      </div>
    </section>
  );
}
