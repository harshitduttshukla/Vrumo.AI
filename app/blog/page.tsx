import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogExplorer } from '@/components/BlogExplorer';
import { getAllArticles } from '@/lib/articles';
import { categories } from '@/lib/categories';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Real Estate AI, CRM & Automation Blog | Vrumo AI',
  description:
    'Practical insights on real estate CRM, AI sales automation, lead management, WhatsApp automation, AI calling, and modern property sales.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    url: '/blog',
    title: 'Real Estate AI, CRM & Automation Blog | Vrumo AI',
    description:
      'Practical insights on real estate CRM, AI sales automation, lead management, WhatsApp automation, AI calling, and modern property sales.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Vrumo AI Real Estate Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate AI, CRM & Automation Blog | Vrumo AI',
    description:
      'Practical insights on real estate CRM, AI sales automation, lead management, WhatsApp automation, AI calling, and modern property sales.',
    images: ['/og.png'],
  },
};

export default function BlogIndexPage() {
  const articles = getAllArticles();

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Vrumo AI',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteConfig.url}/blog`,
      },
    ],
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Vrumo AI Real Estate Knowledge Hub',
    description:
      'Practical insights on real estate CRM, AI sales automation, lead management, WhatsApp automation, AI calling, and modern property sales.',
    url: `${siteConfig.url}/blog`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/blog/${article.slug}`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      author: {
        '@type': 'Organization',
        name: 'Vrumo AI Team',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema).replace(/</g, '\u003c') }}
      />
      <Navbar />
      <main className="blog-page">
        <section className="blog-hero">
          <div className="hero-gridlines" aria-hidden="true" />
          <div className="wrap">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>→</span>
              <span>Blog</span>
            </nav>
            <div className="blog-hero-content">
              <span className="hero-eyebrow">
                <i className="live-dot" /> REAL ESTATE KNOWLEDGE ECOSYSTEM
              </span>
              <h1>Real Estate AI, CRM & Automation</h1>
              <p className="blog-hero-subhead">
                Practical insights on real estate CRM, AI sales automation, lead management, WhatsApp automation, AI calling, and modern property sales.
              </p>
            </div>
          </div>
        </section>

        <section className="blog-main-section">
          <div className="wrap">
            <BlogExplorer articles={articles} categories={categories} />
          </div>
        </section>

        <section className="blog-cta-banner">
          <div className="wrap">
            <div className="cta-banner-card">
              <span className="section-kicker">THE PLAYBOOK</span>
              <h2>Ready to Automate Your Real Estate Sales Pipeline?</h2>
              <p>
                Discover how top property developers and brokerages capture, qualify, follow up, and schedule site visits automatically with Vrumo AI.
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
