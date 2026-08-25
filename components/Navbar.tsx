'use client';

import React, { useEffect, useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav-container ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-pill">
        <a href="#top" className="logo" aria-label="VrumoAI home">
          <span className="logo-mark" aria-hidden="true">V</span>
          <span className="logo-text">vrumo.ai</span>
        </a>

        <nav className="nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#process">Process</a>
          <a href="#integrations">Stack</a>
          <a href="#faq">FAQ</a>
          <a href="#cta" className="nav-link-cta">
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-menu" id="mobile-navigation">
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>
            Solutions
          </a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)}>
            Process
          </a>
          <a href="#integrations" onClick={() => setMobileMenuOpen(false)}>
            Stack
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>
          <a
            href="#cta"
            className="mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </nav>
      )}
    </header>
  );
}
