import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { seoPages, seoPageMap } from '@/lib/seoPages';
import { siteConfig } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPageMap.get(slug);
  if (!page) return {};
  const canonical = `/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: [
      page.targetKeyword,
      'real estate CRM',
      'WhatsApp CRM for real estate',
      'real estate lead management',
      'real estate sales automation',
      'WhatsApp automation real estate',
    ],
    alternates: { canonical },
    openGraph: {
      type: 'website',
      url: canonical,
      title: page.title,
      description: page.description,
      images: [{ url: '/og.png', width: 1536, height: 1024, alt: `${page.h1} — Vrumo AI` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/og.png'],
    },
  };
}

function ProductPanel({
  slug,
  label,
  title,
  steps,
}: {
  slug: string;
  label: string;
  title: string;
  steps: string[];
}) {
  // WhatsApp simulation panel
  if (slug === 'real-estate-whatsapp-automation') {
    return (
      <div className="seo-product-panel whatsapp-theme-panel" aria-label={`Vrumo WhatsApp simulation for ${title}`}>
        <div className="seo-panel-bar">
          <div>
            <span className="wa-logo-icon">W</span>
            <b>Vrumo WhatsApp Assistant</b>
          </div>
          <small>
            TRANSCRIPT ACTIVE <i className="live-dot" />
          </small>
        </div>
        <div className="seo-panel-content">
          <div className="chat-simulation-container">
            <div className="chat-bubble incoming">
              <span className="chat-sender">Priya Sharma</span>
              <p>Hi, I&apos;m interested in The Westin Residences.</p>
              <time>10:42 AM</time>
            </div>
            <div className="chat-bubble outgoing">
              <span className="chat-sender">Vrumo Assistant</span>
              <p>
                Welcome. Is this purchase for Self Use, Capital Growth or Monthly Income / Renting?
              </p>
              <time>10:42 AM ✓✓</time>
            </div>
            <div className="chat-bubble incoming">
              <p>Self Use. My budget is ₹5–7 Cr and I prefer a morning call.</p>
              <time>10:43 AM</time>
            </div>
            <div className="chat-bubble outgoing">
              <p>
                Thank you. Your requirements are saved and a sales advisor will contact you at your preferred time.
              </p>
              <time>10:43 AM ✓✓</time>
            </div>
          </div>
          <div className="panel-status-bar">
            <span>● CRM Status: New</span>
            <span>Owner: Assigned</span>
          </div>
        </div>
      </div>
    );
  }

  // Default CRM / developer / advisor panel
  return (
    <div className="seo-product-panel" aria-label={`Vrumo product interface showing ${title}`}>
      <div className="seo-panel-bar">
        <div>
          <span>V</span>
          <b>Vrumo CRM & Workflows</b>
        </div>
        <small>
          LIVE WORKFLOW <i className="live-dot" />
        </small>
      </div>
      <div className="seo-panel-content">
        <div className="seo-panel-title">
          <div>
            <small>{label}</small>
            <h2>{title}</h2>
          </div>
          <span className="active-tag">LEAD ACTIVE</span>
        </div>
        <div className="seo-lead-summary">
          <span className="lead-avatar">PS</span>
          <div>
            <small>LEAD</small>
            <b>Priya Sharma</b>
          </div>
          <div>
            <small>PROJECT</small>
            <b>The Westin Residences</b>
          </div>
          <div>
            <small>BUDGET</small>
            <b>₹5–7 Cr</b>
          </div>
          <em className="score-badge">Owner: Sherlin</em>
        </div>
        <div className="seo-activity-grid">
          <div className="seo-step-list">
            {steps.map((step, index) => (
              <div key={step} className={index < 3 ? 'is-done' : ''}>
                <span>{index < 3 ? '✓' : String(index + 1).padStart(2, '0')}</span>
                <b>{step}</b>
                <small>{index < 3 ? 'Complete' : index === 3 ? 'In progress' : 'Queued'}</small>
              </div>
            ))}
          </div>
          <div className="seo-insight">
            <small>LEAD ATTRIBUTES</small>
            <div>
              <span>Current status</span>
              <b>Call back</b>
            </div>
            <i>
              <em />
            </i>
            <ul>
              <li>✓ Country: India</li>
              <li>✓ Purpose: Self Use</li>
              <li>✓ Preferred call: Morning</li>
              <li>✓ Source: Meta Ad</li>
            </ul>
            <Link
              href="/contact"
              className="panel-cta-btn"
            >
              Open Lead Record ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function SeoLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = seoPageMap.get(slug);
  if (!page) notFound();

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Vrumo AI', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: page.eyebrow, item: `${siteConfig.url}/${page.slug}` },
    ],
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `Vrumo AI - ${page.eyebrow}`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Real Estate CRM and Sales Automation',
    operatingSystem: 'Web, Cloud',
    description: page.description,
    url: `${siteConfig.url}/${page.slug}`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
    },
    featureList: page.workflow,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema).replace(/</g, '\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema).replace(/</g, '\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\u003c') }}
      />

      <Navbar />

      <main className="seo-page">
        {/* Hero Section */}
        <section className="seo-hero">
          <div className="hero-gridlines" aria-hidden="true" />
          <div className="wrap seo-hero-inner">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Vrumo AI</Link>
              <span>→</span>
              <span>{page.eyebrow}</span>
            </nav>
            <div className="seo-hero-copy">
              <div>
                <span className="hero-eyebrow">
                  <i className="live-dot" />
                  {page.eyebrow}
                </span>
                <h1>{page.h1}</h1>
                <p>{page.intro}</p>
                <div className="hero-actions">
                  <Link className="button button-primary" href="/contact">
                    Book a Demo <span>↗</span>
                  </Link>
                  <a className="button button-quiet" href="#capabilities">
                    Explore Capabilities <span>↓</span>
                  </a>
                </div>
                <div className="seo-hero-badges">
                  <span>✓ Role-Based Dashboards</span>
                  <span>✓ WhatsApp Qualification</span>
                  <span>✓ Callback Reminders</span>
                </div>
              </div>
              <ProductPanel slug={page.slug} label={page.visualLabel} title={page.visualTitle} steps={page.workflow} />
            </div>
          </div>
        </section>

        {/* Pains & Core Challenges */}
        <section className="seo-pains" id="capabilities">
          <div className="wrap">
            <div className="seo-section-heading">
              <span className="section-kicker">WHY THIS WORKFLOW MATTERS</span>
              <h2>Fix the Operational Gaps That Slow Property Sales Down.</h2>
              <p>Real estate sales operations lose visibility when the source, owner, context and next action live in different tools.</p>
            </div>
            <div className="seo-three-grid">
              {page.pains.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes & Architecture */}
        <section className="seo-outcomes">
          <div className="wrap seo-outcomes-layout">
            <div>
              <span className="section-kicker">BUILT AROUND REAL ESTATE</span>
              <h2>Give Every Lead a Clear Next Action.</h2>
              <p>
                Vrumo keeps buyer requirements, WhatsApp chat history, call outcomes, callback schedules, notes and activity attached to the lead record.
              </p>
              <Link className="button button-quiet" href="/contact">
                Discuss Your Workflow ↗
              </Link>
            </div>
            <div className="seo-outcome-list">
              {page.outcomes.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Connected Step-by-Step Flow */}
        <section className="seo-workflow">
          <div className="wrap">
            <div className="seo-section-heading centered-heading">
              <span className="section-kicker">CONNECTED WORKFLOW</span>
              <h2>From First Ad Signal to Closed Site Visit.</h2>
              <p>Every step executes on time-and-event triggers tailored to your sales playbook.</p>
            </div>
            <div className="seo-flow">
              {page.workflow.map((step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <b>{step}</b>
                  {index < page.workflow.length - 1 && <i>→</i>}
                </div>
              ))}
            </div>
            <p className="workflow-disclaimer">
              Workflow triggers are configured around your telephony lines, WhatsApp templates, business rules, and sales manager approval thresholds.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="seo-faq">
          <div className="wrap seo-faq-layout">
            <div>
              <span className="section-kicker">QUESTIONS & ANSWERS</span>
              <h2>Frequently Asked Questions.</h2>
              <p>Practical answers regarding setup, integrations, and workflow capabilities.</p>
              <Link href="/contact" className="faq-ask-link">
                Ask a specific question ↗
              </Link>
            </div>
            <div className="faq-items-wrapper">
              {page.faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{question}</strong>
                    <i>＋</i>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Solutions & Internal Linking */}
        <section className="seo-related">
          <div className="wrap">
            <span className="section-kicker">KEEP EXPLORING</span>
            <h2>Build the Full Real Estate Sales Ecosystem.</h2>
            <div className="related-commercial-grid">
              {page.related.map((relatedSlug) => {
                const rel = seoPageMap.get(relatedSlug);
                if (!rel) return null;
                return (
                  <Link href={`/${rel.slug}`} key={rel.slug} className="related-commercial-card">
                    <span>{rel.eyebrow}</span>
                    <h3>{rel.h1}</h3>
                    <b>Explore Workflow ↗</b>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final Conversion CTA */}
        <section className="seo-cta">
          <div className="wrap">
            <div className="cta-banner-card">
              <span className="section-kicker">START WITH YOUR PRIMARY BOTTLENECK</span>
              <h2>Show Us Where Your Property Leads Get Stuck.</h2>
              <p>
                We&apos;ll map your lead sources, qualification questions, assignment rules, advisor workflow and reporting needs to a practical CRM setup.
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
