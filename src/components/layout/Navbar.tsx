import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'AI Calling', href: '#calling-agent' },
  { label: 'WhatsApp', href: '#whatsapp-ai' },
  { label: 'CRM', href: '#crm-integration' },
  { label: 'Job Agent', href: '#job-apply-agent' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

const mobileNavLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'AI Calling', href: '#calling-agent' },
  { label: 'WhatsApp AI', href: '#whatsapp-ai' },
  { label: 'CRM', href: '#crm-integration' },
  { label: 'Job Apply Agent', href: '#job-apply-agent' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-[70px] gap-4">
          {/* Left: VrumoAI Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2.5 group" id="navbar-logo">
              <div className="w-8 h-8 rounded-lg bg-blue-600 p-0.5 shadow-xs flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img src="/logo.png" alt="VrumoAI" className="w-full h-full rounded-[6px] object-cover bg-white" />
              </div>
              <span className="text-lg font-bold text-[#0f172a] tracking-tight whitespace-nowrap">
                Vrumo<span className="text-blue-600 font-extrabold ml-0.5">AI</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button href="#contact" size="sm" id="navbar-cta">
              Book a Demo
              <ArrowRight size={13} />
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-lg bg-slate-50 border border-slate-200"
              aria-label="Toggle menu"
              id="navbar-mobile-toggle"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] sm:top-[70px] z-40 transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="fixed inset-0 top-[64px] sm:top-[70px] bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
        <div
          className={`relative bg-white border-b border-slate-200 px-6 py-6 transition-transform duration-300 shadow-xl ${
            isMobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="flex flex-col gap-2.5 container-custom">
            {mobileNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <Button
                href="#contact"
                size="md"
                onClick={() => setIsMobileOpen(false)}
                className="w-full justify-center"
                id="navbar-mobile-cta"
              >
                Book a Demo
                <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
