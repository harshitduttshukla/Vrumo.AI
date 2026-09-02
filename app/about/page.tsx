import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Vrumo AI | Real Estate CRM & WhatsApp Lead Management',
  description:
    'Learn how Vrumo builds real estate CRM workflows for WhatsApp qualification, lead ownership, callback management and sales reporting.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    url: '/about',
    title: 'About Vrumo AI | Real Estate CRM & Automation',
    description:
      'Vrumo builds real estate CRM workflows around the daily work of administrators and sales advisors.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'About Vrumo AI' }],
  },
};

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Built Around Real Estate Work',
      desc: 'The workflow is designed around projects, budgets, purchase purpose, call outcomes, callbacks, site visits and long buying journeys.',
    },
    {
      num: '02',
      title: 'Fast, Verifiable Lead Ownership',
      desc: 'Qualified enquiries are routed by project rules or round-robin, assigned to a named advisor and recorded in the activity history.',
    },
    {
      num: '03',
      title: 'Human-Owned Conversations',
      desc: 'The chatbot gathers context and the CRM coordinates the work; the sales advisor reads the transcript, makes the call and records the outcome.',
    },
    {
      num: '04',
      title: 'Role-Based Visibility',
      desc: 'Admins can review the full operation while each salesperson sees only the leads assigned to their own account.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="about-page">
        {/* About Hero */}
        <section className="about-hero">
          <div className="hero-gridlines" aria-hidden="true" />
          <div className="wrap">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>→</span>
              <span>About Us</span>
            </nav>
            <div className="about-hero-content">
              <span className="hero-eyebrow">
                <i className="live-dot" /> OUR MISSION & ARCHITECTURE
              </span>
              <h1>We Build the Sales Operating System for Modern Real Estate.</h1>
              <p className="about-hero-lead">
              Vrumo was created to solve one operational problem: real estate enquiries arrive from many sources, but ownership, conversation context and the next action are rarely visible in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="about-narrative-section">
          <div className="wrap narrative-layout">
            <div className="narrative-heading">
              <span className="section-kicker">WHY VRUMO EXISTS</span>
              <h2>The Real Estate Sales Process Was Broken.</h2>
            </div>
            <div className="narrative-body">
              <p>
                Real estate teams work across ad campaigns, WhatsApp, imported spreadsheets, broadcasts and phone calls. Without a shared record, the same advisor must reconstruct the buyer&apos;s context before every follow-up.
              </p>
              <p>
                Vrumo brings those steps into one deployed workflow: capture the enquiry, qualify the requirement in WhatsApp, assign an owner, preserve the transcript, schedule callbacks and keep a permanent operational history.
              </p>
              <div className="narrative-callout">
                <strong>Our Core Operating Formula:</strong>
                <span>Capture the lead &bull; Qualify the requirement &bull; Assign the owner &bull; Track the callback &bull; Record the outcome.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="about-principles-section">
          <div className="wrap">
            <div className="section-heading">
              <span className="section-kicker">FOUNDATIONAL PRINCIPLES</span>
              <h2>How We Design Real Estate Systems</h2>
              <p>The core tenets that guide every line of code, workflow trigger, and AI model we build.</p>
            </div>

            <div className="principles-grid">
              {principles.map((p) => (
                <article key={p.num} className="principle-card">
                  <span className="principle-num">{p.num}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* E-E-A-T Team & Standards */}
        <section className="about-team-section">
          <div className="wrap team-layout">
            <div>
              <span className="section-kicker">PRODUCT STANDARD</span>
              <h2>Documented Workflows, Not Generic Feature Lists.</h2>
              <p>
                We design from the real actions admins and advisors perform: import, filter, assign, call, update status, schedule, note, verify and report.
              </p>
              <p>
                Product claims should map to something visible in the workflow. That is why the CRM exposes role-based dashboards, source-specific queues, callback reminders and a read-only activity history.
              </p>
            </div>
            <div className="team-stats-box">
              <div className="stat-card">
                <strong>4</strong>
                <span>Admin Lead Queues</span>
              </div>
              <div className="stat-card">
                <strong>10</strong>
                <span>Documented Lead Statuses</span>
              </div>
              <div className="stat-card">
                <strong>500</strong>
                <span>New Leads Per Active Cold Batch</span>
              </div>
            </div>
          </div>
        </section>

        {/* About CTA */}
        <section className="about-cta">
          <div className="wrap">
            <div className="cta-banner-card">
              <span className="section-kicker">GET IN TOUCH</span>
              <h2>See What Vrumo AI Can Do for Your Sales Pipeline</h2>
              <p>
                Schedule a consultation with our real estate systems team and discover how to automate your property sales workflows.
              </p>
              <div className="cta-actions">
                <a
                  className="button button-primary"
                  href="mailto:divyamanpal490@gmail.com?subject=Vrumo%20AI%20%E2%80%94%20Real%20Estate%20Automation%20Enquiry"
                >
                  Talk to Divyaman <span>→</span>
                </a>
                <a
                  className="button button-quiet"
                  href="mailto:harshitshukla6388@gmail.com?subject=Vrumo%20AI%20%E2%80%94%20Real%20Estate%20Automation%20Enquiry"
                >
                  Talk to Harshit <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
