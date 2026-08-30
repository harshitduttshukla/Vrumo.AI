import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Vrumo AI | AI CRM & Automation for Real Estate',
  description:
    'Learn why Vrumo AI was built exclusively for real estate developers, brokers, and sales teams to automate lead qualification, WhatsApp nurturing, and site visit scheduling.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    url: '/about',
    title: 'About Vrumo AI | Real Estate CRM & Automation',
    description:
      'Vrumo AI is an AI-powered CRM and automation platform engineered specifically for property developers and real estate sales organizations.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'About Vrumo AI' }],
  },
};

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Built Exclusively for Real Estate',
      desc: 'Generic CRMs treat leads as corporate accounts. We build around property inventory, unit configurations (BHK), site visit logistics, and high-ticket consumer buying journeys.',
    },
    {
      num: '02',
      title: 'Under-60-Second Speed to Lead',
      desc: 'Property buyers contact multiple projects simultaneously. We automate instant, context-aware engagement across WhatsApp and voice before intent decays.',
    },
    {
      num: '03',
      title: 'Human-in-the-Loop Architecture',
      desc: 'AI handles repetitive qualification, calendar coordination, and record keeping so human sales closers can spend 100% of their energy on client relationships.',
    },
    {
      num: '04',
      title: 'Enterprise Data Protection',
      desc: 'Your buyer database is your most valuable asset. We protect it with role-based access, masked contact numbers, and strict privacy controls.',
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
                Vrumo AI was created to solve one fundamental problem: real estate teams don&apos;t lose deals because their properties are undesirable—they lose deals because manual follow-up is too slow, context is lost in personal inboxes, and leads go cold.
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
                In high-stakes property transactions, sales executives spend over 60% of their working day doing manual administrative drudgery: downloading CSV files from ad managers, dialing unverified phone numbers, copying notes between WhatsApp threads and spreadsheets, and coordinating weekend calendars.
              </p>
              <p>
                We engineered Vrumo AI as a dedicated real estate intelligence layer. From the second a buyer clicks a digital ad or sends a WhatsApp inquiry, our system captures the context, qualifies the criteria (budget, configuration, location, timeline), synchronizes the CRM record, and schedules the site visit tour.
              </p>
              <div className="narrative-callout">
                <strong>Our Core Operating Formula:</strong>
                <span>Capture the lead &bull; Qualify the intent &bull; Follow up automatically &bull; Schedule the visit &bull; Close the deal.</span>
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
              <span className="section-kicker">EDITORIAL & ENGINEERING STANDARDS</span>
              <h2>Domain Expertise, Not Generic Silicon Valley Templates.</h2>
              <p>
                Our engineering and systems teams have deep domain experience across enterprise real estate operations, cloud telephony, WhatsApp Business API infrastructure, and high-volume property marketing funnels.
              </p>
              <p>
                We do not publish generic AI fluff. Every guide in our knowledge base, every feature in our platform, and every workflow trigger is tested against actual property sales scenarios.
              </p>
            </div>
            <div className="team-stats-box">
              <div className="stat-card">
                <strong>&lt; 60s</strong>
                <span>Average AI Lead Response Time</span>
              </div>
              <div className="stat-card">
                <strong>100%</strong>
                <span>Real Estate Domain Specific</span>
              </div>
              <div className="stat-card">
                <strong>24/7</strong>
                <span>Autonomous Lead Qualification</span>
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
