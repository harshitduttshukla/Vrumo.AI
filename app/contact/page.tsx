import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { contacts } from '@/lib/contacts';

export const metadata: Metadata = {
  title: 'Talk to Vrumo AI | Real Estate CRM & Sales Automation',
  description:
    'Talk to the Vrumo AI team. Contact Divyaman Pal (Sales & Partnerships) or Harshit Shukla (Product & Technology) for real estate CRM, WhatsApp automation, and AI calling workflows.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: '/contact',
    title: 'Talk to Vrumo AI | Real Estate CRM & Sales Automation',
    description:
      'Schedule a personalized consultation with the Vrumo AI team for real estate developers, brokers, and sales organizations.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Talk to Vrumo AI' }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        {/* Contact Hero */}
        <section className="contact-hero">
          <div className="hero-gridlines" aria-hidden="true" />
          <div className="wrap">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>→</span>
              <span>Contact</span>
            </nav>
            <div className="contact-hero-content">
              <span className="hero-eyebrow">
                <i className="live-dot" /> DIRECT TEAM ACCESS & CONSULTATION
              </span>
              <h1>Talk to Vrumo AI</h1>
              <p className="contact-hero-lead">
                Tell us about your real estate sales process, lead flow, or repetitive workflow. We&apos;ll help you identify where AI automation can make the biggest difference.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="contact-main-section">
          <div className="wrap contact-grid">
            {/* Left Column: Direct Contact Cards for Divyaman and Harshit */}
            <div className="contact-info-column">
              <div className="team-contact-cards-container">
                {/* Contact Card 1: Divyaman Pal */}
                <div className="contact-card">
                  <div className="contact-card-header">
                    <span className="card-avatar">DP</span>
                    <div>
                      <span className="card-kicker">SALES & PARTNERSHIPS</span>
                      <h3>{contacts.divyaman.name}</h3>
                    </div>
                  </div>
                  <p>
                    For product walkthroughs, enterprise licenses, developer & brokerage onboarding, and pricing plans.
                  </p>
                  <div className="contact-links-stack">
                    <div className="contact-row">
                      <small>PHONE</small>
                      <a href={contacts.divyaman.telHref} className="contact-link">
                        {contacts.divyaman.phone}
                      </a>
                    </div>
                    <div className="contact-row">
                      <small>EMAIL</small>
                      <a href={contacts.divyaman.mailtoHref} className="contact-link">
                        {contacts.divyaman.email}
                      </a>
                    </div>
                  </div>
                  <div className="contact-btn-group">
                    <a href={contacts.divyaman.telHref} className="button button-quiet">
                      Call Divyaman <span>📞</span>
                    </a>
                    <a href={contacts.divyaman.mailtoHref} className="button button-primary">
                      Email Divyaman <span>✉️</span>
                    </a>
                  </div>
                </div>

                {/* Contact Card 2: Harshit Shukla */}
                <div className="contact-card">
                  <div className="contact-card-header">
                    <span className="card-avatar">HS</span>
                    <div>
                      <span className="card-kicker">PRODUCT & TECHNOLOGY</span>
                      <h3>{contacts.harshit.name}</h3>
                    </div>
                  </div>
                  <p>
                    For API integrations, WhatsApp Business API setup, AI calling agent configurations, and custom CRM syncs.
                  </p>
                  <div className="contact-links-stack">
                    <div className="contact-row">
                      <small>PHONE</small>
                      <a href={contacts.harshit.telHref} className="contact-link">
                        {contacts.harshit.phone}
                      </a>
                    </div>
                    <div className="contact-row">
                      <small>EMAIL</small>
                      <a href={contacts.harshit.mailtoHref} className="contact-link">
                        {contacts.harshit.email}
                      </a>
                    </div>
                  </div>
                  <div className="contact-btn-group">
                    <a href={contacts.harshit.telHref} className="button button-quiet">
                      Call Harshit <span>📞</span>
                    </a>
                    <a href={contacts.harshit.mailtoHref} className="button button-primary">
                      Email Harshit <span>✉️</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="domain-assurance-badge">
                <div className="badge-icon">✓</div>
                <div>
                  <strong>100% Real Estate Tailored</strong>
                  <p>No generic B2B software pitches. Every demo is customized around property inventory, WhatsApp lead qualification, and site visit workflows.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Card */}
            <div className="contact-action-column">
              <div className="consultation-action-card">
                <div className="card-header">
                  <span className="header-badge">LIVE DEMO & AUDIT</span>
                  <h2>What We Cover in a 25-Minute Walkthrough:</h2>
                  <p>Direct live simulation of your real estate sales pipeline.</p>
                </div>

                <div className="consultation-options-list">
                  <div className="option-item">
                    <strong>01. Lead Capture Audit</strong>
                    <p>Connecting Meta Ads, Google Ads, 99acres, MagicBricks, Housing.com, and website forms into one clean pipeline.</p>
                  </div>
                  <div className="option-item">
                    <strong>02. WhatsApp AI Qualification</strong>
                    <p>Testing real-time brochure delivery, multi-attribute budget verification, and automated site visit booking.</p>
                  </div>
                  <div className="option-item">
                    <strong>03. Voice AI & Calling Agents</strong>
                    <p>Live simulation of inbound ad calling qualification, instant call summaries, and missed lead recovery.</p>
                  </div>
                  <div className="option-item">
                    <strong>04. CRM Integration Blueprint</strong>
                    <p>Integrating with existing platforms (Salesforce, HubSpot, LeadSquared) or deploying Vrumo as your full sales CRM.</p>
                  </div>
                </div>

                <div className="action-button-stack">
                  <a
                    className="button button-primary button-full"
                    href={contacts.divyaman.mailtoHref}
                  >
                    Email Divyaman (Sales & Demo) <span>↗</span>
                  </a>
                  <a
                    className="button button-quiet button-full"
                    href={contacts.harshit.mailtoHref}
                  >
                    Email Harshit (Tech & Integrations) <span>→</span>
                  </a>
                </div>

                <div className="form-assurances">
                  <div>
                    <small>RESPONSE TIME</small>
                    <strong>Under 2 hours</strong>
                  </div>
                  <div>
                    <small>PLATFORM PREVIEW</small>
                    <strong>Live Sandbox Tour</strong>
                  </div>
                  <div>
                    <small>CONFIDENTIALITY</small>
                    <strong>Strict NDA Protected</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact FAQ */}
        <section className="contact-faq-section">
          <div className="wrap">
            <div className="section-heading centered-heading">
              <span className="section-kicker">COMMON QUESTIONS</span>
              <h2>Implementation & Onboarding</h2>
              <p>Everything you need to know about getting started with Vrumo AI.</p>
            </div>

            <div className="contact-faq-grid">
              <article>
                <h3>How quickly can our team go live with Vrumo AI?</h3>
                <p>
                  Most real estate developer and brokerage teams are fully onboarded in 2 to 5 business days. We configure your lead capture channels, WhatsApp Business API templates, qualification scoring rules, and inventory catalogs.
                </p>
              </article>
              <article>
                <h3>Can Vrumo work alongside our existing CRM?</h3>
                <p>
                  Yes. If you currently use Salesforce, HubSpot, LeadSquared, or an internal ERP, Vrumo acts as the intelligent front-end automation layer. It qualifies leads and pushes clean, enriched records back into your primary CRM.
                </p>
              </article>
              <article>
                <h3>What is required to set up WhatsApp automation?</h3>
                <p>
                  You will need an active WhatsApp Business Account (WABA) number or phone line. Our team assists with Meta business verification, green-tick submission, approved template registrations, and interactive flow triggers.
                </p>
              </article>
              <article>
                <h3>Who will manage our ongoing campaign optimizations?</h3>
                <p>
                  Every Vrumo customer receives direct support from our engineering and real estate operations team. You have direct access to Divyaman Pal and Harshit Shukla for workflow adjustments and pipeline optimizations.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
