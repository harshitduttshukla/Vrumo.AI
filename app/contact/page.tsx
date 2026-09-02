import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { contacts } from '@/lib/contacts';

export const metadata: Metadata = {
  title: 'Talk to Vrumo AI | Real Estate CRM & Sales Automation',
  description:
    'Talk to the Vrumo team about real estate CRM, WhatsApp qualification, lead assignment, callback reminders and sales reporting.',
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
                Tell us how your leads arrive, how they are assigned and where follow-ups are getting lost. We&apos;ll map the workflow to a practical CRM setup.
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
                    For WhatsApp qualification flows, CRM data design, assignment logic, imports, notifications and reporting.
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
                    <strong>01. Lead Source Audit</strong>
                    <p>Mapping ads, direct WhatsApp, website chatbot leads, imported databases and broadcast replies into the right queues.</p>
                  </div>
                  <div className="option-item">
                    <strong>02. WhatsApp Qualification</strong>
                    <p>Reviewing the questions that capture project, country, budget, purpose, timeline and preferred call time.</p>
                  </div>
                  <div className="option-item">
                    <strong>03. Advisor Workflow</strong>
                    <p>Walking through assigned leads, transcripts, Call Now, statuses, callback scheduling, notes and the activity history.</p>
                  </div>
                  <div className="option-item">
                    <strong>04. Admin Operations</strong>
                    <p>Reviewing team workloads, project popularity, source filters, cold-database allocation and CSV exports.</p>
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
                    <small>PRODUCT</small>
                    <strong>Live CRM Walkthrough</strong>
                  </div>
                  <div>
                    <small>ROLE VIEWS</small>
                    <strong>Admin + Salesperson</strong>
                  </div>
                  <div>
                    <small>WORKFLOW</small>
                    <strong>Source to Follow-Up</strong>
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
                <h3>What should we bring to the first workflow session?</h3>
                <p>
                  Bring your current lead sources, sales roles, assignment rules, lead statuses, required buyer fields and the follow-up process your team already uses.
                </p>
              </article>
              <article>
                <h3>Can imported databases be assigned across a team?</h3>
                <p>
                  Yes. The deployed importer accepts Excel and CSV files and can assign every row to one advisor or distribute rows evenly across selected advisors.
                </p>
              </article>
              <article>
                <h3>What is required to set up WhatsApp automation?</h3>
                <p>
                  You need a business WhatsApp number and approved provider/template access for outbound notifications. The exact setup depends on the account and workflow being deployed.
                </p>
              </article>
              <article>
                <h3>Can the CRM reflect our own routing rules?</h3>
                <p>
                  Yes. The current deployment combines project-specific ownership with round-robin distribution. Your implementation can be scoped around the rules your sales operation actually needs.
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
