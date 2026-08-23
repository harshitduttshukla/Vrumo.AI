'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
          <a href="#solutions">Solutions</a>
          <a href="#process">How it works</a>
          <a href="#integrations">Integrations</a>
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
            How it works
          </a>
          <a href="#integrations" onClick={() => setMobileMenuOpen(false)}>
            Integrations
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
