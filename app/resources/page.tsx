import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getAllArticles } from '@/lib/articles';
import { categories } from '@/lib/categories';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The Real Estate AI Playbook & Resources | Vrumo AI',
  description:
    'Practical guides, frameworks, and blueprints for real estate developers, brokers, and sales teams using CRM, AI automation, WhatsApp, and modern property sales workflows.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    type: 'website',
    url: '/resources',
    title: 'The Real Estate AI Playbook | Vrumo AI Resources',
    description:
      'Practical guides, frameworks, and blueprints for real estate teams using CRM, AI, automation, and modern sales workflows.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Vrumo AI Real Estate Resources' }],
  },
};

export default function ResourcesPage() {
  const articles = getAllArticles();
  const featuredGuide = articles[0]; // What is real estate CRM
  const automationGuides = articles.filter((a) => a.categorySlug === 'real-estate-ai' || a.categorySlug === 'real-estate-automation');
  const whatsappGuides = articles.filter((a) => a.categorySlug === 'real-estate-whatsapp');
  const leadGuides = articles.filter((a) => a.categorySlug === 'real-estate-lead-management');

  const frameworks = [
    {
      title: 'The 60-Second Speed-to-Lead Framework',
      tag: 'CONVERSION ACCELERATOR',
      desc: 'How instant WhatsApp qualification and AI callbacks recapture 35%+ of digital ad leads before they go cold.',
      link: '/blog/what-is-real-estate-crm',
    },
    {
      title: 'Multi-Attribute Property Lead Scoring',
      tag: 'LEAD OPERATIONS',
      desc: 'A weighted scoring model evaluating budget match, possession timeline, and financing intent to rank buyers.',
      link: '/blog/real-estate-lead-scoring',
    },
    {
      title: 'The 14-Day Omnichannel Follow-Up Cadence',
      tag: 'FOLLOW-UP BLUEPRINT',
      desc: 'Automated WhatsApp, SMS, and voice touchpoints structured to book site visits without annoying prospects.',
      link: '/blog/real-estate-lead-follow-up',
    },
    {
      title: 'Developer Launch & Inventory Stacking Architecture',
      tag: 'ENTERPRISE WORKFLOW',
      desc: 'Multi-tower lead routing, channel partner attribution, and live unit blocking for high-velocity launch weekends.',
      link: '/blog/real-estate-crm-for-developers',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="resources-page">
        {/* Resources Hero */}
        <section className="resources-hero">
          <div className="hero-gridlines" aria-hidden="true" />
          <div className="wrap">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>→</span>
              <span>Resources & Playbook</span>
            </nav>
            <div className="resources-hero-content">
              <span className="hero-eyebrow">
                <i className="live-dot" /> STRATEGY & BLUEPRINTS
              </span>
              <h1>The Real Estate AI Playbook</h1>
              <p className="resources-subhead">
                Practical guides for real estate teams using CRM, AI, automation and modern sales workflows.
              </p>
              <div className="resources-quick-nav">
                <a href="#frameworks">Strategic Frameworks ↓</a>
                <a href="#featured-guides">Featured Guides ↓</a>
                <Link href="/blog">Full Blog Archive →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guide Banner */}
        <section className="featured-guide-section" id="featured-guides">
          <div className="wrap">
            <div className="featured-guide-card">
              <div className="guide-content">
                <span className="guide-kicker">FEATURED MASTER GUIDE</span>
                <h2>{featuredGuide.title}</h2>
                <p>{featuredGuide.excerpt}</p>
                <div className="guide-meta">
                  <span>Author: <b>{featuredGuide.author.name}</b></span>
                  <span>Reading time: <b>{featuredGuide.readingTime}</b></span>
                </div>
                <Link href={`/blog/${featuredGuide.slug}`} className="button button-primary">
                  Read Full Master Guide <span>→</span>
                </Link>
              </div>
              <div className="guide-visual" aria-hidden="true">
                <div className="blueprint-box">
                  <div className="blueprint-header">
                    <span>VRUMO / PLAYBOOK</span>
                    <i>ARCHITECTURE v2.4</i>
                  </div>
                  <div className="blueprint-flow">
                    <div>1. INGESTION</div>
                    <span>↓</span>
                    <div>2. AI QUALIFICATION</div>
                    <span>↓</span>
                    <div>3. CRM SYNC</div>
                    <span>↓</span>
                    <div>4. SITE VISIT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Frameworks */}
        <section className="frameworks-section" id="frameworks">
          <div className="wrap">
            <div className="section-heading">
              <span className="section-kicker">OPERATIONAL BLUEPRINTS</span>
              <h2>Real Estate Sales Frameworks</h2>
              <p>Actionable operational templates ready to deploy in your property sales organization.</p>
            </div>

            <div className="frameworks-grid">
              {frameworks.map((fw) => (
                <Link href={fw.link} key={fw.title} className="framework-card">
                  <span className="framework-tag">{fw.tag}</span>
                  <h3>{fw.title}</h3>
                  <p>{fw.desc}</p>
                  <b>Explore Framework ↗</b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categorized Deep Dives */}
        <section className="deep-dives-section">
          <div className="wrap">
            <div className="section-heading">
              <span className="section-kicker">CURATED GUIDES</span>
              <h2>Deep-Dive Article Collections</h2>
              <p>Explore comprehensive guides organized by operational focus.</p>
            </div>

            <div className="deep-dives-columns">
              <div className="deep-dive-col">
                <div className="col-header">
                  <h3>AI & Automation</h3>
                  <Link href="/blog/real-estate-ai">View all ↗</Link>
                </div>
                <ul>
                  {automationGuides.slice(0, 4).map((art) => (
                    <li key={art.slug}>
                      <Link href={`/blog/${art.slug}`}>
                        <strong>{art.title}</strong>
                        <small>{art.readingTime}</small>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="deep-dive-col">
                <div className="col-header">
                  <h3>WhatsApp Sales Engine</h3>
                  <Link href="/blog/real-estate-whatsapp">View all ↗</Link>
                </div>
                <ul>
                  {whatsappGuides.slice(0, 4).map((art) => (
                    <li key={art.slug}>
                      <Link href={`/blog/${art.slug}`}>
                        <strong>{art.title}</strong>
                        <small>{art.readingTime}</small>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="deep-dive-col">
                <div className="col-header">
                  <h3>Lead Operations & Scoring</h3>
                  <Link href="/blog/real-estate-lead-management">View all ↗</Link>
                </div>
                <ul>
                  {leadGuides.slice(0, 4).map((art) => (
                    <li key={art.slug}>
                      <Link href={`/blog/${art.slug}`}>
                        <strong>{art.title}</strong>
                        <small>{art.readingTime}</small>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resources CTA */}
        <section className="resources-cta">
          <div className="wrap">
            <div className="cta-banner-card">
              <span className="section-kicker">CONSULTATION</span>
              <h2>Map Your Custom Real Estate Automation Architecture</h2>
              <p>
                Our real estate systems specialists will audit your lead sources, qualification gaps, and sales handoffs to design an automated pipeline for your team.
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
