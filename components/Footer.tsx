import React from 'react';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" className="logo" aria-label="VrumoAI home">
              <span className="logo-mark" aria-hidden="true">V</span>
              <span>vrumo.ai</span>
            </a>
            <p>Custom AI agents and workflow automation for growing teams.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h3>Solutions</h3>
              <a href="#calling-agent">AI calling agents</a>
              <a href="#whatsapp-ai">WhatsApp AI automation</a>
              <a href="#crm-integration">AI CRM integration</a>
              <a href="#job-apply-agent">Job application automation</a>
            </div>
            <div className="footer-col">
              <h3>Explore</h3>
              <a href="#process">Process</a>
              <a href="#integrations">Stack</a>
              <a href="#faq">AI automation FAQ</a>
              <a href="#cta">Start a project</a>
            </div>
            <div className="footer-col">
              <h3>Contact</h3>
              <a href="mailto:hello@vrumoai.com">hello@vrumoai.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VrumoAI</span>
          <span className="mono">INDIA / WORLDWIDE</span>
        </div>
      </div>
    </footer>
  );
}
