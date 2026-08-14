'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="nav-container">
      <div className="nav-pill">
        <a href="#" className="logo">
          <Image
            src="/logo.png"
            alt="VrumoAI"
            width={28}
            height={28}
            className="logo-img"
            priority
          />
          <span className="logo-text">vrumo.ai</span>
        </a>

        <nav className="nav-links">
          <a href="#solutions">solutions</a>
          <a href="#calling-agent">calling</a>
          <a href="#whatsapp-ai">whatsapp</a>
          <a href="#crm-integration">crm</a>
          <a href="#job-apply-agent">job agent</a>
          <a href="#cta" className="nav-link-cta">
            start a project
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>
            solutions
          </a>
          <a href="#calling-agent" onClick={() => setMobileMenuOpen(false)}>
            calling
          </a>
          <a href="#whatsapp-ai" onClick={() => setMobileMenuOpen(false)}>
            whatsapp
          </a>
          <a href="#crm-integration" onClick={() => setMobileMenuOpen(false)}>
            crm
          </a>
          <a href="#job-apply-agent" onClick={() => setMobileMenuOpen(false)}>
            job agent
          </a>
          <a
            href="#cta"
            className="mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            start a project →
          </a>
        </div>
      )}
    </header>
  );
}
