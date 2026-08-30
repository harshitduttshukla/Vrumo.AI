import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
    alternates: { canonical },
    openGraph: { type: 'website', url: canonical, title: page.title, description: page.description, images: [{ url: '/og.png', width: 1536, height: 1024, alt: `${page.h1} — Vrumo AI` }] },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description, images: ['/og.png'] },
  };
}

function ProductPanel({ label, title, steps }: { label: string; title: string; steps: string[] }) {
  return (
    <div className="seo-product-panel" aria-label={`Vrumo product interface showing ${title}`}>
      <div className="seo-panel-bar"><div><span>V</span><b>Vrumo CRM</b></div><small>LIVE WORKFLOW <i /></small></div>
      <div className="seo-panel-content">
        <div className="seo-panel-title"><div><small>{label}</small><h2>{title}</h2></div><span>AI ACTIVE</span></div>
        <div className="seo-lead-summary"><span>RS</span><div><small>LEAD</small><b>Rahul Sharma</b></div><div><small>REQUIREMENT</small><b>3 BHK · Gurgaon</b></div><div><small>BUDGET</small><b>₹1.2 Cr</b></div><em>92%</em></div>
        <div className="seo-activity-grid">
          <div className="seo-step-list">{steps.map((step, index) => <div key={step} className={index < 3 ? 'is-done' : ''}><span>{index < 3 ? '✓' : String(index + 1).padStart(2, '0')}</span><b>{step}</b><small>{index < 3 ? 'Complete' : index === 3 ? 'In progress' : 'Queued'}</small></div>)}</div>
          <div className="seo-insight"><small>AI QUALIFICATION</small><div><span>Intent score</span><b>92%</b></div><i><em /></i><ul><li>✓ Budget identified</li><li>✓ Location matched</li><li>✓ Timeline: 0–30 days</li></ul><button type="button">Open lead record ↗</button></div>
        </div>
      </div>
    </div>
  );
}

export default async function SeoLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = seoPageMap.get(slug);
  if (!page) notFound();
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Vrumo AI', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: page.eyebrow, item: `${siteConfig.url}/${page.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, '\u003c') }} />
      <Navbar />
      <main className="seo-page">
        <section className="seo-hero">
          <div className="hero-gridlines" aria-hidden="true" />
          <div className="wrap seo-hero-inner">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Vrumo AI</a><span>→</span><span>{page.eyebrow}</span></nav>
            <div className="seo-hero-copy"><div><span className="hero-eyebrow"><i className="live-dot" />{page.eyebrow}</span><h1>{page.h1}</h1><p>{page.intro}</p><div className="hero-actions"><a className="button button-primary" href="mailto:hello@vrumoai.com?subject=Book%20a%20Vrumo%20demo">Book a Demo <span>↗</span></a><a className="button button-quiet" href="#capabilities">Explore capabilities <span>↓</span></a></div></div><ProductPanel label={page.visualLabel} title={page.visualTitle} steps={page.workflow} /></div>
          </div>
        </section>

        <section className="seo-pains" id="capabilities"><div className="wrap"><div className="seo-section-heading"><span className="section-kicker">WHY THIS WORKFLOW MATTERS</span><h2>Fix the Gaps That Slow Property Sales Down.</h2></div><div className="seo-three-grid">{page.pains.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="seo-outcomes"><div className="wrap seo-outcomes-layout"><div><span className="section-kicker">BUILT AROUND REAL ESTATE</span><h2>Give Every Lead a Clear Next Action.</h2><p>Vrumo keeps the requirement, interaction history, automation activity and sales handoff connected to the opportunity.</p><a href="mailto:hello@vrumoai.com?subject=Discuss%20a%20Vrumo%20workflow">Discuss your workflow ↗</a></div><div className="seo-outcome-list">{page.outcomes.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

        <section className="seo-workflow"><div className="wrap"><div className="seo-section-heading centered-heading"><span className="section-kicker">CONNECTED WORKFLOW</span><h2>From First Signal to Sales Handoff.</h2></div><div className="seo-flow">{page.workflow.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b>{index < page.workflow.length - 1 && <i>→</i>}</div>)}</div><p>Workflow steps are configured around your systems, permissions, business rules and human approval points.</p></div></section>

        <section className="seo-faq"><div className="wrap seo-faq-layout"><div><span className="section-kicker">QUESTIONS</span><h2>What Teams Usually Ask.</h2></div><div>{page.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="seo-related"><div className="wrap"><span className="section-kicker">KEEP EXPLORING</span><h2>Build the Full Real Estate Lead Journey.</h2><div>{page.related.map((relatedSlug) => { const related = seoPageMap.get(relatedSlug)!; return <a href={`/${related.slug}`} key={related.slug}><span>{related.eyebrow}</span><h3>{related.h1}</h3><b>Explore ↗</b></a>; })}</div></div></section>

        <section className="seo-cta"><div className="wrap"><span className="section-kicker">START WITH THE BOTTLENECK</span><h2>Show Us Where Your Leads Get Stuck.</h2><p>We&apos;ll map the workflow and show you where Vrumo can capture context, automate the repetition and create a cleaner sales handoff.</p><a className="button button-primary" href="mailto:hello@vrumoai.com?subject=Book%20a%20Vrumo%20demo">Book a Demo <span>↗</span></a></div></section>
      </main>
      <Footer />
    </>
  );
}
