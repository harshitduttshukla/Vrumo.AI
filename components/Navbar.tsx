'use client';

import { useEffect, useState } from 'react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="/" aria-label="Vrumo AI home" onClick={closeMenu}><span className="brand-mark" aria-hidden="true"><i />V</span><span>Vrumo <b>AI</b></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="/#platform">Platform</a><a href="/#crm">AI CRM</a><a href="/#automation">Automation</a><a href="/#industries">For teams</a><a href="/#faq">FAQ</a></nav>
        <a className="nav-cta" href="mailto:hello@vrumoai.com?subject=Book%20a%20Vrumo%20demo">Book a Demo <span>↗</span></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><i /><i /></button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="/#platform" onClick={closeMenu}>Platform</a><a href="/#crm" onClick={closeMenu}>AI CRM</a><a href="/#automation" onClick={closeMenu}>Automation</a><a href="/#industries" onClick={closeMenu}>For teams</a><a href="/#faq" onClick={closeMenu}>FAQ</a><a className="mobile-nav-cta" href="mailto:hello@vrumoai.com?subject=Book%20a%20Vrumo%20demo">Book a Demo ↗</a></nav>}
    </header>
  );
}
