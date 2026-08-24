import React from 'react';

export function Manifesto() {
  return (
    <section className="manifesto-section">
      <div className="wrap manifesto-grid">
        <div className="manifesto-label mono">OUR POSITION / 01</div>
        <blockquote>
          Useful AI is not something<br />you talk to. It is work that<br /><em>quietly gets done.</em>
        </blockquote>
        <div className="manifesto-principles">
          <p>That means understanding context, making a bounded decision, and taking the next action across the real systems where work lives.</p>
          <span className="manifesto-signoff mono">VRUMO / OPERATING PRINCIPLE</span>
        </div>
      </div>
    </section>
  );
}
