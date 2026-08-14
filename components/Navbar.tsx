import React from 'react';

export function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">
          <span className="dot"></span>VrumoAI
        </div>
        <nav className="nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#calling-agent">Calling</a>
          <a href="#whatsapp-ai">WhatsApp</a>
          <a href="#crm-integration">CRM</a>
          <a href="#job-apply-agent">Job Agent</a>
        </nav>
        <a className="nav-cta" href="#cta">
          Start a project →
        </a>
      </div>
    </header>
  );
}
