import React from 'react';
import { OrbitalSculptureLoader } from './OrbitalSculptureLoader';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-rule" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker mono">Make work move · Without the busywork</div>
          <h1>
            Custom AI agents that<br /><span>automate business workflows.</span>
          </h1>
          <p className="lead">
            VrumoAI is an AI automation agency for growing teams. We build
            custom agents that understand customer intent, handle conversations,
            qualify leads, book appointments, update CRMs, and complete
            multi-step work across your existing tools.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#cta">
              Build your AI agent <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#solutions">
              See what we build <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="What VrumoAI delivers">
            <div><span className="mono">01</span><p>Built for your<br />actual workflow</p></div>
            <div><span className="mono">02</span><p>Connected to<br />real systems</p></div>
            <div><span className="mono">03</span><p>Measured by<br />work completed</p></div>
          </div>
        </div>
        <OrbitalSculptureLoader />
      </div>
      <a className="scroll-cue mono" href="#solutions">SCROLL TO EXPLORE <span>↓</span></a>
    </section>
  );
}
