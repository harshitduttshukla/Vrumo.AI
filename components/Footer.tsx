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
            <p>Operational AI, built around the work.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h3>Solutions</h3>
              <a href="#calling-agent">Voice operations</a>
              <a href="#whatsapp-ai">Messaging operations</a>
              <a href="#crm-integration">Revenue operations</a>
              <a href="#job-apply-agent">Custom operators</a>
            </div>
            <div className="footer-col">
              <h3>Explore</h3>
              <a href="#process">Process</a>
              <a href="#integrations">Stack</a>
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
