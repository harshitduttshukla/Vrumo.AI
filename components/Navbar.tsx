import React from 'react';
import Image from 'next/image';

export function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          <Image
            src="/logo.png"
            alt="VrumoAI"
            width={34}
            height={34}
            className="logo-img"
            priority
          />
          <span>VrumoAI</span>
        </a>
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
