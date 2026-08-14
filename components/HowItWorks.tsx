import React from 'react';

export function HowItWorks() {
  return (
    <section className="section flow-section">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: '50px' }}>
          <div className="eyebrow">How it works</div>
          <h2>From input to action.</h2>
        </div>

        <div className="flow-row">
          <div className="flow-name">
            Voice Automation
            <span>Call → Qualify → CRM</span>
          </div>
          <div className="flow-steps">
            <span className="step">CALL</span>
            <span className="arrow">→</span>
            <span className="step">AI AGENT</span>
            <span className="arrow">→</span>
            <span className="step">UNDERSTAND</span>
            <span className="arrow">→</span>
            <span className="step">QUALIFY</span>
            <span className="arrow">→</span>
            <span className="step">CRM UPDATED</span>
          </div>
        </div>

        <div className="flow-row">
          <div className="flow-name">
            Messaging Automation
            <span>WhatsApp → Capture → Follow-up</span>
          </div>
          <div className="flow-steps">
            <span className="step">MESSAGE</span>
            <span className="arrow">→</span>
            <span className="step">AI AGENT</span>
            <span className="arrow">→</span>
            <span className="step">UNDERSTAND</span>
            <span className="arrow">→</span>
            <span className="step">CAPTURE LEAD</span>
            <span className="arrow">→</span>
            <span className="step">FOLLOW-UP SET</span>
          </div>
        </div>

        <div className="flow-row">
          <div className="flow-name">
            Application Automation
            <span>Job → Match → Apply</span>
          </div>
          <div className="flow-steps">
            <span className="step">JOB POSTING</span>
            <span className="arrow">→</span>
            <span className="step">AI AGENT</span>
            <span className="arrow">→</span>
            <span className="step">MATCH SCORE</span>
            <span className="arrow">→</span>
            <span className="step">PREPARE</span>
            <span className="arrow">→</span>
            <span className="step">APPLIED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
