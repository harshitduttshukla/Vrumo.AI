import React from 'react';

export function Manifesto() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap manifesto">
        <p>
          &ldquo;We build AI that does more than respond. VrumoAI focuses on
          practical AI automation — systems that understand business context,
          take actions, and connect directly with the tools teams already use.&rdquo;
        </p>
        <div className="tags">
          <div className="row">
            <span>AI AGENTS</span>
            <span>Active</span>
          </div>
          <div className="row">
            <span>AUTOMATION</span>
            <span>Active</span>
          </div>
          <div className="row">
            <span>CRM INTEGRATION</span>
            <span>Active</span>
          </div>
          <div className="row">
            <span>VOICE AI</span>
            <span>Active</span>
          </div>
          <div className="row">
            <span>WORKFLOW ENGINEERING</span>
            <span>Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
