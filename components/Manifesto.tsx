import React from 'react';

export function Manifesto() {
  return (
    <section className="manifesto-section" aria-labelledby="operating-principle">
      <div className="wrap manifesto-grid">
        <h2 className="manifesto-label mono" id="operating-principle">WHAT USEFUL AI MEANS / 01</h2>
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
