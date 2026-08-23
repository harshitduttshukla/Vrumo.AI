import React from 'react';

export function Manifesto() {
  return (
    <section className="manifesto-section">
      <div className="wrap manifesto-grid">
        <div className="manifesto-mark" aria-hidden="true">✦</div>
        <blockquote>
          “The best AI should feel less like another tool to manage—and more like a capable teammate that quietly gets the work done.”
        </blockquote>
        <div className="manifesto-principles">
          <div><span className="mono">01</span><strong>Understands</strong><small>Context, intent, and rules</small></div>
          <div><span className="mono">02</span><strong>Decides</strong><small>The right next action</small></div>
          <div><span className="mono">03</span><strong>Acts</strong><small>Across your real systems</small></div>
        </div>
      </div>
    </section>
  );
}
