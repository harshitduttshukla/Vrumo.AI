import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { articles, articleMap, getRelatedArticles, getAllArticles } from '@/lib/articles';
import { categories, categoryMap } from '@/lib/categories';
import { siteConfig } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const articleSlugs = articles.map(({ slug }) => ({ slug }));
  const categorySlugs = categories.map(({ slug }) => ({ slug }));
  
  // Deduplicate slugs
  const allSlugs = new Set([...articleSlugs.map(s => s.slug), ...categorySlugs.map(s => s.slug)]);
  return Array.from(allSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articleMap.get(slug);

  if (article) {
    const canonical = `/blog/${article.slug}`;
    return {
      title: article.metaTitle,
      description: article.metaDescription,
      keywords: article.keywords,
      alternates: { canonical },
      openGraph: {
        type: 'article',
        url: canonical,
        title: article.title,
        description: article.metaDescription,
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt,
        authors: [article.author.name],
        images: [{ url: '/og.png', width: 1536, height: 1024, alt: article.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.metaDescription,
        images: ['/og.png'],
      },
    };
  }

  const category = categoryMap.get(slug);
  if (category) {
    const canonical = `/blog/${category.slug}`;
    return {
      title: category.metaTitle,
      description: category.metaDescription,
      alternates: { canonical },
      openGraph: {
        type: 'website',
        url: canonical,
        title: category.metaTitle,
        description: category.metaDescription,
        images: [{ url: '/og.png', width: 1536, height: 1024, alt: category.name }],
      },
      twitter: {
        card: 'summary_large_image',
        title: category.metaTitle,
        description: category.metaDescription,
        images: ['/og.png'],
      },
    };
  }

  return {};
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const article = articleMap.get(slug);
  const category = categoryMap.get(slug);

  if (!article && !category) {
    notFound();
  }

  // Render Article Page if article exists
  if (article) {
    const related = getRelatedArticles(article.slug, 3);

    const breadcrumbsSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteConfig.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${siteConfig.url}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.category,
          item: `${siteConfig.url}/blog/${article.categorySlug}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: article.title,
          item: `${siteConfig.url}/blog/${article.slug}`,
        },
      ],
    };

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}`,
      author: {
        '@type': 'Organization',
        name: article.author.name,
        url: siteConfig.url,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/logo.png`,
        },
      },
      keywords: article.keywords.join(', '),
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\u003c') }}
        />
        <Navbar />
        <main className="article-page">
          {/* Article Hero */}
          <section className="article-hero">
            <div className="hero-gridlines" aria-hidden="true" />
            <div className="wrap">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>→</span>
                <Link href="/blog">Blog</Link>
                <span>→</span>
                <Link href={`/blog/${article.categorySlug}`}>{article.category}</Link>
                <span>→</span>
                <span className="current-crumb">{article.title}</span>
              </nav>

              <div className="article-hero-header">
                <Link href={`/blog/${article.categorySlug}`} className="article-category-badge">
                  <i className="live-dot" /> {article.category}
                </Link>
                <h1>{article.h1}</h1>
                <p className="article-hero-excerpt">{article.excerpt}</p>

                <div className="article-meta-bar">
                  <div className="author-meta-block">
                    <div className="author-avatar-chip">V</div>
                    <div>
                      <strong>{article.author.name}</strong>
                      <span>{article.author.role}</span>
                    </div>
                  </div>
                  <div className="article-dates">
                    <span>
                      Published: <b>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</b>
                    </span>
                    <span>
                      Updated: <b>{new Date(article.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</b>
                    </span>
                    <span className="reading-time-pill">{article.readingTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Article Main Body & Sidebar Layout */}
          <section className="article-body-section">
            <div className="wrap article-layout">
              {/* Sticky Table of Contents Sidebar */}
              <aside className="article-sidebar">
                <div className="sidebar-sticky-box">
                  <span className="sidebar-title">TABLE OF CONTENTS</span>
                  <nav className="toc-nav" aria-label="Table of Contents">
                    {article.tableOfContents.map((item) => (
                      <a href={`#${item.id}`} key={item.id} className="toc-link">
                        {item.title}
                      </a>
                    ))}
                    {article.faqs.length > 0 && (
                      <a href="#frequently-asked-questions" className="toc-link">
                        Frequently Asked Questions
                      </a>
                    )}
                  </nav>

                  <div className="sidebar-cta-widget">
                    <span className="widget-label">VRUMO AI PLATFORM</span>
                    <h4>Automate Real Estate Sales</h4>
                    <p>Capture leads, qualify intent on WhatsApp, and schedule site visits automatically.</p>
                    <Link className="button button-primary" href="/contact">
                      Book a Demo <span>↗</span>
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Content Area */}
              <article className="article-content-column">
                {/* Key Takeaways Callout Box */}
                {article.keyTakeaways.length > 0 && (
                  <div className="key-takeaways-box">
                    <div className="takeaways-header">
                      <span className="takeaways-icon">⚡</span>
                      <h3>Key Takeaways & Executive Summary</h3>
                    </div>
                    <ul>
                      {article.keyTakeaways.map((point, index) => (
                        <li key={index}>
                          <span className="bullet-check">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Main Rendered HTML / Markdown Content */}
                <div
                  className="article-rich-text"
                  dangerouslySetInnerHTML={{ __html: article.contentHtml }}
                />

                {/* Dynamic Contextual CTA Card */}
                <div className="article-contextual-cta">
                  <div className="cta-icon-mark">V</div>
                  <div>
                    <h3>{article.cta.title}</h3>
                    <p>{article.cta.description}</p>
                    <a className="button button-primary" href={article.cta.buttonHref}>
                      {article.cta.buttonText}
                    </a>
                  </div>
                </div>

                {/* FAQ Accordion Section */}
                {article.faqs.length > 0 && (
                  <div className="article-faqs" id="frequently-asked-questions">
                    <span className="section-kicker">QUESTIONS & ANSWERS</span>
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-accordion-list">
                      {article.faqs.map((faq, index) => (
                        <details key={index} open={index === 0} className="faq-item">
                          <summary>
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <strong>{faq.question}</strong>
                            <i className="faq-toggle-icon">＋</i>
                          </summary>
                          <p>{faq.answer}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Profile Box (E-E-A-T) */}
                <div className="author-profile-card">
                  <div className="author-avatar-large">V</div>
                  <div className="author-bio">
                    <span className="author-eyebrow">WRITTEN & REVIEWED BY</span>
                    <h3>{article.author.name}</h3>
                    <p>
                      The Vrumo AI Editorial & Systems Engineering Team specializes in real estate sales technology, CRM workflow architectures, conversational AI models, WhatsApp automation, and property sales pipeline acceleration.
                    </p>
                    <div className="author-badges">
                      <span>✓ Real Estate Domain Tested</span>
                      <span>✓ Enterprise Architecture</span>
                      <span>✓ B2B Property Tech</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Continue Reading Related Articles */}
          {related.length > 0 && (
            <section className="related-articles-section">
              <div className="wrap">
                <div className="section-heading">
                  <span className="section-kicker">CONTINUE READING</span>
                  <h2>Related Real Estate AI & CRM Guides</h2>
                  <p>Explore contextually relevant deep dives to strengthen your property sales operations.</p>
                </div>

                <div className="related-articles-grid">
                  {related.map((rel) => (
                    <article className="related-card" key={rel.slug}>
                      <Link href={`/blog/${rel.categorySlug}`} className="related-badge">
                        {rel.category}
                      </Link>
                      <h3>
                        <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <p>{rel.excerpt}</p>
                      <Link href={`/blog/${rel.slug}`} className="related-read-link">
                        Read Article <span>→</span>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Bottom Final CTA */}
          <section className="article-final-cta">
            <div className="wrap">
              <div className="cta-banner-card">
                <span className="section-kicker">WANT TO AUTOMATE YOUR SALES WORKFLOW?</span>
                <h2>Transform Your Real Estate Sales Operation</h2>
                <p>
                  See how Vrumo AI connects lead capture, automated qualification, WhatsApp nurturing, and site visit scheduling in one unified platform.
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

  // Render Category Hub Page if only category exists
  if (category) {
    const categoryArticles = articles.filter(
      (a) => a.categorySlug === category.slug || (category.slug === 'real-estate-ai' && a.categorySlug === 'real-estate-ai-calling')
    );

    const breadcrumbsSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteConfig.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${siteConfig.url}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: category.name,
          item: `${siteConfig.url}/blog/${category.slug}`,
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema).replace(/</g, '\u003c') }}
        />
        <Navbar />
        <main className="category-page">
          <section className="category-hero">
            <div className="hero-gridlines" aria-hidden="true" />
            <div className="wrap">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>→</span>
                <Link href="/blog">Blog</Link>
                <span>→</span>
                <span>{category.name}</span>
              </nav>

              <div className="category-hero-header">
                <span className="hero-eyebrow">
                  <i className="live-dot" /> TOPIC CLUSTER
                </span>
                <h1>{category.h1}</h1>
                <p className="category-hero-desc">{category.description}</p>
                <div className="category-featured-topics">
                  <span>KEY TOPICS:</span>
                  {category.featuredTopics.map((topic) => (
                    <strong key={topic}>• {topic}</strong>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="category-articles-section">
            <div className="wrap">
              <div className="category-meta-bar">
                <span>
                  Showing <b>{categoryArticles.length}</b> articles in {category.name}
                </span>
                <Link href="/blog" className="back-to-blog">
                  ← Back to All Articles
                </Link>
              </div>

              <div className="articles-grid">
                {categoryArticles.map((art) => (
                  <article className="article-card" key={art.slug}>
                    <div className="article-card-head">
                      <span className="article-badge">{art.category}</span>
                      <span className="article-read-time">{art.readingTime}</span>
                    </div>

                    <h2 className="article-card-title">
                      <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                    </h2>

                    <p className="article-card-excerpt">{art.excerpt}</p>

                    <div className="article-card-footer">
                      <div className="author-chip">
                        <div className="author-avatar-chip">V</div>
                        <div>
                          <strong>{art.author.name}</strong>
                          <time dateTime={art.publishedAt}>
                            {new Date(art.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </time>
                        </div>
                      </div>
                      <Link href={`/blog/${art.slug}`} className="read-more-link">
                        Read Guide <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Category Hub CTA */}
          <section className="category-cta-section">
            <div className="wrap">
              <div className="cta-banner-card">
                <span className="section-kicker">COMMERCIAL WORKFLOW</span>
                <h2>Put {category.name} Into Practice</h2>
                <p>
                  Explore how Vrumo AI automates lead qualification, follow-ups, and sales pipelines for real estate teams.
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
}
