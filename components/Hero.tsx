import React from 'react';
import { OrbitalSculpture } from './OrbitalSculpture';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-rule" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker mono">AI systems studio · India / Worldwide</div>
          <h1>
            Make work move.<br /><span>Without the busywork.</span>
          </h1>
          <p className="lead">
            We design AI operators that handle conversations, decisions, and
            follow-through across the tools your team already uses.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#cta">
              Discuss a workflow <span aria-hidden="true">↗</span>
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
        <OrbitalSculpture />
      </div>
      <a className="scroll-cue mono" href="#solutions">SCROLL TO EXPLORE <span>↓</span></a>
    </section>
  );
}
