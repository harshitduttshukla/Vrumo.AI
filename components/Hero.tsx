import React from 'react';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="status-badge">
            <span className="status-dot" />
            Custom AI systems for growing teams
          </div>
          <h1>
            Turn repetitive work into <span>autonomous workflows.</span>
          </h1>
          <p className="lead">
            We build AI agents that talk to customers, update your tools, and
            carry work through to completion—so your team can focus on the
            decisions that matter.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#cta">
              Build your AI agent <span aria-hidden="true">↗</span>
            </a>
            <a className="btn btn-secondary" href="#solutions">
              Explore solutions <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Agent capabilities">
            <div><span>01</span> Understands context</div>
            <div><span>02</span> Takes real action</div>
            <div><span>03</span> Stays in sync</div>
          </div>
        </div>

        <div className="hero-console-wrap" aria-label="Live AI workflow preview">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="agent-console">
            <div className="console-head">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span className="console-title">vrumo / live workflow</span>
              <span className="live-state"><i /> live</span>
            </div>
            <div className="console-body">
              <div className="workflow-event incoming-event">
                <div className="event-icon phone-icon" aria-hidden="true">↗</div>
                <div>
                  <span className="event-label">Incoming call</span>
                  <strong>Rahul Sharma</strong>
                </div>
                <span className="event-time mono">00:42</span>
              </div>
              <div className="workflow-line"><span /></div>
              <div className="agent-thought">
                <div className="thought-head">
                  <span className="agent-spark" aria-hidden="true">✦</span>
                  <strong>Agent is working</strong>
                  <span className="thinking-dots" aria-hidden="true"><i /><i /><i /></span>
                </div>
                <div className="thought-row"><span>Intent detected</span><b>Sales enquiry</b></div>
                <div className="thought-row"><span>Lead quality</span><b className="quality">High · 92%</b></div>
              </div>
              <div className="workflow-line"><span /></div>
              <div className="action-grid">
                <div className="action-card action-complete">
                  <span className="action-check">✓</span>
                  <div><small>Action complete</small><strong>CRM updated</strong></div>
                </div>
                <div className="action-card action-complete">
                  <span className="action-check">✓</span>
                  <div><small>Follow-up</small><strong>Demo scheduled</strong></div>
                </div>
              </div>
            </div>
            <div className="console-foot">
              <span><i className="pulse-dot" /> Agent online</span>
              <span className="mono">2 actions completed</span>
            </div>
          </div>
          <div className="floating-chip chip-one"><span>✓</span> Lead qualified</div>
          <div className="floating-chip chip-two"><span>↻</span> CRM synced</div>
        </div>
      </div>
    </section>
  );
}
