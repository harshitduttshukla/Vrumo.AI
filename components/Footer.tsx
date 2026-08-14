import React from 'react';

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span className="dot"></span>VrumoAI
          </div>
          <p>AI agents built for real work.</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Solutions</h4>
            <a href="#calling-agent">AI Calling</a>
            <a href="#whatsapp-ai">WhatsApp AI</a>
            <a href="#crm-integration">CRM Integration</a>
            <a href="#job-apply-agent">Job Apply Agent</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#solutions">What we build</a>
            <a href="#cta">Start a project</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
