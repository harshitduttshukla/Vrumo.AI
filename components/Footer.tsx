import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" className="logo" aria-label="VrumoAI home">
              <Image src="/logo.png" alt="" width={30} height={30} className="logo-img" />
              <span>vrumo.ai</span>
            </a>
            <p>AI agents built for real work.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h3>Solutions</h3>
              <a href="#calling-agent">AI Calling</a>
              <a href="#whatsapp-ai">WhatsApp AI</a>
              <a href="#crm-integration">CRM Integration</a>
              <a href="#job-apply-agent">Job Apply Agent</a>
            </div>
            <div className="footer-col">
              <h3>Explore</h3>
              <a href="#process">How it works</a>
              <a href="#integrations">Integrations</a>
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
          <span>Built for useful intelligence.</span>
        </div>
      </div>
    </footer>
  );
}
