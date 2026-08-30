'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="Vrumo AI home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <i />V
          </span>
          <span>
            Vrumo <b>AI</b>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {/* Platform Dropdown */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setActiveDropdown('platform')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              className={`nav-link-dropdown ${activeDropdown === 'platform' ? 'is-active' : ''}`}
              aria-expanded={activeDropdown === 'platform'}
              onClick={() => setActiveDropdown(activeDropdown === 'platform' ? null : 'platform')}
            >
              Platform <span className="nav-arrow">▾</span>
            </button>
            {activeDropdown === 'platform' && (
              <div className="dropdown-menu">
                <div className="dropdown-grid">
                  <Link href="/real-estate-crm" onClick={closeMenu} className="dropdown-card">
                    <span className="card-tag">CORE CRM</span>
                    <strong>Real Estate CRM</strong>
                    <p>Pipeline, buyer records & project inventory</p>
                  </Link>
                  <Link href="/real-estate-lead-management" onClick={closeMenu} className="dropdown-card">
                    <span className="card-tag">QUALIFICATION</span>
                    <strong>AI Lead Management</strong>
                    <p>Multi-attribute intent scoring & routing</p>
                  </Link>
                  <Link href="/real-estate-ai-calling" onClick={closeMenu} className="dropdown-card">
                    <span className="card-tag">VOICE AI</span>
                    <strong>AI Calling</strong>
                    <p>Inbound qualification & missed call recovery</p>
                  </Link>
                  <Link href="/real-estate-whatsapp-automation" onClick={closeMenu} className="dropdown-card">
                    <span className="card-tag">MESSAGING</span>
                    <strong>WhatsApp AI</strong>
                    <p>Brochures, chat qualification & reminders</p>
                  </Link>
                  <Link href="/real-estate-sales-automation" onClick={closeMenu} className="dropdown-card">
                    <span className="card-tag">WORKFLOWS</span>
                    <strong>Sales Automation</strong>
                    <p>Lead assignment to contract booking</p>
                  </Link>
                  <Link href="/real-estate-lead-follow-up" onClick={closeMenu} className="dropdown-card">
                    <span className="card-tag">CADENCE</span>
                    <strong>Follow-Up Automation</strong>
                    <p>Never let a high-intent prospect go cold</p>
                  </Link>
                  <Link href="/real-estate-site-visit-automation" onClick={closeMenu} className="dropdown-card">
                    <span className="card-tag">SITE VISITS</span>
                    <strong>Site Visit Automation</strong>
                    <p>Slot booking, calendar sync & reminders</p>
                  </Link>
                  <Link href="/real-estate-ai-automation" onClick={closeMenu} className="dropdown-card">
                    <span className="card-tag">PLATFORM</span>
                    <strong>AI Sales Automation</strong>
                    <p>End-to-end real estate sales operating system</p>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              className={`nav-link-dropdown ${activeDropdown === 'solutions' ? 'is-active' : ''}`}
              aria-expanded={activeDropdown === 'solutions'}
              onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
            >
              Solutions <span className="nav-arrow">▾</span>
            </button>
            {activeDropdown === 'solutions' && (
              <div className="dropdown-menu dropdown-menu-narrow">
                <div className="dropdown-list">
                  <Link href="/ai-crm-for-real-estate-developers" onClick={closeMenu} className="dropdown-list-item">
                    <div>
                      <strong>Real Estate Developers</strong>
                      <p>Multi-project lead routing & CP management</p>
                    </div>
                  </Link>
                  <Link href="/ai-crm-for-real-estate-agents" onClick={closeMenu} className="dropdown-list-item">
                    <div>
                      <strong>Brokers & Agencies</strong>
                      <p>Centralize buyer requirements & listings</p>
                    </div>
                  </Link>
                  <Link href="/real-estate-lead-management" onClick={closeMenu} className="dropdown-list-item">
                    <div>
                      <strong>Property Consultants</strong>
                      <p>Prioritize high-intent investor leads</p>
                    </div>
                  </Link>
                  <Link href="/#industries" onClick={closeMenu} className="dropdown-list-item">
                    <div>
                      <strong>Enterprise Sales Teams</strong>
                      <p>Real-time pipeline transparency & rep velocity</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              className={`nav-link-dropdown ${activeDropdown === 'resources' ? 'is-active' : ''}`}
              aria-expanded={activeDropdown === 'resources'}
              onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
            >
              Resources <span className="nav-arrow">▾</span>
            </button>
            {activeDropdown === 'resources' && (
              <div className="dropdown-menu dropdown-menu-narrow">
                <div className="dropdown-list">
                  <Link href="/blog" onClick={closeMenu} className="dropdown-list-item">
                    <div>
                      <strong>Vrumo Blog & Insights</strong>
                      <p>Real estate CRM, AI & sales playbooks</p>
                    </div>
                  </Link>
                  <Link href="/resources" onClick={closeMenu} className="dropdown-list-item">
                    <div>
                      <strong>The Real Estate AI Playbook</strong>
                      <p>Frameworks, guides and sales strategies</p>
                    </div>
                  </Link>
                  <Link href="/blog/real-estate-crm" onClick={closeMenu} className="dropdown-list-item">
                    <div>
                      <strong>Real Estate CRM Guides</strong>
                      <p>Architectures, features & migrations</p>
                    </div>
                  </Link>
                  <Link href="/blog/real-estate-ai" onClick={closeMenu} className="dropdown-list-item">
                    <div>
                      <strong>AI & Automation Hub</strong>
                      <p>Voice agents, WhatsApp & workflows</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Company */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              className={`nav-link-dropdown ${activeDropdown === 'company' ? 'is-active' : ''}`}
              aria-expanded={activeDropdown === 'company'}
              onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
            >
              Company <span className="nav-arrow">▾</span>
            </button>
            {activeDropdown === 'company' && (
              <div className="dropdown-menu dropdown-menu-compact">
                <div className="dropdown-list">
                  <Link href="/about" onClick={closeMenu} className="dropdown-list-item">
                    <div>
                      <strong>About Vrumo AI</strong>
                      <p>Our mission, team & architecture</p>
                    </div>
                  </Link>
                  <Link href="/contact" onClick={closeMenu} className="dropdown-list-item">
                    <div>
                      <strong>Contact & Demo</strong>
                      <p>Talk to our sales automation specialists</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <Link className="nav-cta desktop-only-cta" href="/contact">
          Book a Demo <span>↗</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMenu}>
          <nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-nav-scroll">
              <div className="mobile-nav-section">
                <span className="mobile-nav-title">PLATFORM</span>
                <Link href="/real-estate-crm" onClick={closeMenu} className="mobile-nav-link">
                  <span>Real Estate CRM</span>
                  <small>Pipeline & Project Records</small>
                </Link>
                <Link href="/real-estate-lead-management" onClick={closeMenu} className="mobile-nav-link">
                  <span>AI Lead Management</span>
                  <small>Qualification & Scoring</small>
                </Link>
                <Link href="/real-estate-ai-calling" onClick={closeMenu} className="mobile-nav-link">
                  <span>AI Calling</span>
                  <small>Inbound & Outbound Voice</small>
                </Link>
                <Link href="/real-estate-whatsapp-automation" onClick={closeMenu} className="mobile-nav-link">
                  <span>WhatsApp AI</span>
                  <small>Automated Messaging</small>
                </Link>
                <Link href="/real-estate-sales-automation" onClick={closeMenu} className="mobile-nav-link">
                  <span>Sales Automation</span>
                  <small>Lead to Contract Flows</small>
                </Link>
                <Link href="/real-estate-lead-follow-up" onClick={closeMenu} className="mobile-nav-link">
                  <span>Follow-Up Automation</span>
                  <small>7-Day & 14-Day Cadences</small>
                </Link>
                <Link href="/real-estate-site-visit-automation" onClick={closeMenu} className="mobile-nav-link">
                  <span>Site Visit Automation</span>
                  <small>Slot Booking & Reminders</small>
                </Link>
              </div>

              <div className="mobile-nav-section">
                <span className="mobile-nav-title">SOLUTIONS</span>
                <Link href="/ai-crm-for-real-estate-developers" onClick={closeMenu} className="mobile-nav-link">
                  <span>Real Estate Developers</span>
                </Link>
                <Link href="/ai-crm-for-real-estate-agents" onClick={closeMenu} className="mobile-nav-link">
                  <span>Brokers & Agencies</span>
                </Link>
                <Link href="/real-estate-lead-management" onClick={closeMenu} className="mobile-nav-link">
                  <span>Property Consultants</span>
                </Link>
                <Link href="/#industries" onClick={closeMenu} className="mobile-nav-link">
                  <span>Sales Teams</span>
                </Link>
              </div>

              <div className="mobile-nav-section">
                <span className="mobile-nav-title">RESOURCES & BLOG</span>
                <Link href="/blog" onClick={closeMenu} className="mobile-nav-link">
                  <span>Vrumo Blog Index</span>
                </Link>
                <Link href="/resources" onClick={closeMenu} className="mobile-nav-link">
                  <span>The Real Estate AI Playbook</span>
                </Link>
                <Link href="/blog/real-estate-crm" onClick={closeMenu} className="mobile-nav-link">
                  <span>Real Estate CRM Guides</span>
                </Link>
                <Link href="/blog/real-estate-ai" onClick={closeMenu} className="mobile-nav-link">
                  <span>AI & Automation Hub</span>
                </Link>
              </div>

              <div className="mobile-nav-section">
                <span className="mobile-nav-title">COMPANY</span>
                <Link href="/about" onClick={closeMenu} className="mobile-nav-link">
                  <span>About Vrumo AI</span>
                </Link>
                <Link href="/contact" onClick={closeMenu} className="mobile-nav-link">
                  <span>Contact & Book a Demo</span>
                </Link>
              </div>

              <div className="mobile-nav-cta-wrapper">
                <Link
                  className="button button-primary mobile-cta-btn"
                  href="/contact"
                  onClick={closeMenu}
                >
                  Book a Demo <span>↗</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
