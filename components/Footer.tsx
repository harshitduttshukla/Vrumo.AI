import Link from 'next/link';
import { contacts } from '@/lib/contacts';

const platformLinks = [
  ['Real Estate CRM', '/real-estate-crm'],
  ['AI Lead Management', '/real-estate-lead-management'],
  ['WhatsApp AI', '/real-estate-whatsapp-automation'],
  ['Sales Automation', '/real-estate-sales-automation'],
  ['Follow-Up Automation', '/real-estate-lead-follow-up'],
  ['Real Estate AI Platform', '/real-estate-ai-automation'],
];

const solutionLinks = [
  ['Real Estate Developers', '/ai-crm-for-real-estate-developers'],
  ['Brokers & Agencies', '/ai-crm-for-real-estate-agents'],
  ['Property Consultants', '/real-estate-lead-management'],
  ['Enterprise Sales Teams', '/real-estate-sales-automation'],
];

const blogCategoryLinks = [
  ['Real Estate CRM', '/blog/real-estate-crm'],
  ['AI & Automation', '/blog/real-estate-ai'],
  ['Sales & Workflows', '/blog/real-estate-sales'],
  ['WhatsApp Automation', '/blog/real-estate-whatsapp'],
  ['Lead Management', '/blog/real-estate-lead-management'],
];

const resourceLinks = [
  ['Blog & Insights', '/blog'],
  ['The Real Estate AI Playbook', '/resources'],
  ['About Vrumo AI', '/about'],
  ['Contact & Demo', '/contact'],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Vrumo AI home">
            <span className="brand-mark" aria-hidden="true">
              <i />V
            </span>
            <span>
              Vrumo <b>AI</b>
            </span>
          </Link>
          <p>WhatsApp lead management and CRM operations for real estate teams.</p>
          <span className="brand-tagline">Capture. Qualify. Assign. Follow up.</span>

          {/* Official Contacts */}
          <div className="footer-contacts-section">
            <div className="footer-contact-item">
              <strong>{contacts.divyaman.name}</strong>
              <small>{contacts.divyaman.role}</small>
              <div className="footer-contact-links">
                <a href={contacts.divyaman.telHref} className="footer-link">
                  {contacts.divyaman.phone}
                </a>
                <a href={contacts.divyaman.mailtoHref} className="footer-link">
                  {contacts.divyaman.email}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <strong>{contacts.harshit.name}</strong>
              <small>{contacts.harshit.role}</small>
              <div className="footer-contact-links">
                <a href={contacts.harshit.telHref} className="footer-link">
                  {contacts.harshit.phone}
                </a>
                <a href={contacts.harshit.mailtoHref} className="footer-link">
                  {contacts.harshit.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h2>PLATFORM</h2>
          {platformLinks.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h2>SOLUTIONS</h2>
          {solutionLinks.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h2>BLOG TOPICS</h2>
          {blogCategoryLinks.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h2>RESOURCES</h2>
          {resourceLinks.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Vrumo AI. All rights reserved.</span>
        <span>REAL ESTATE CRM & WHATSAPP LEAD MANAGEMENT</span>
        <div className="footer-bottom-contacts">
          <a href={contacts.divyaman.mailtoHref}>{contacts.divyaman.email}</a>
          <span>·</span>
          <a href={contacts.harshit.mailtoHref}>{contacts.harshit.email}</a>
        </div>
      </div>
    </footer>
  );
}
