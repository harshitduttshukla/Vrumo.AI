'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Article } from '@/lib/articles';
import { Category } from '@/lib/categories';

type Props = {
  articles: Article[];
  categories: Category[];
};

const filterTabs = [
  { label: 'All', value: 'all' },
  { label: 'Real Estate CRM', value: 'real-estate-crm' },
  { label: 'AI & Automation', value: 'real-estate-ai' },
  { label: 'Automation', value: 'real-estate-automation' },
  { label: 'Sales', value: 'real-estate-sales' },
  { label: 'WhatsApp', value: 'real-estate-whatsapp' },
  { label: 'AI Calling', value: 'real-estate-ai-calling' },
  { label: 'Lead Management', value: 'real-estate-lead-management' },
];

export function BlogExplorer({ articles, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCat =
        selectedCategory === 'all' ||
        article.categorySlug === selectedCategory ||
        (selectedCategory === 'real-estate-ai' &&
          (article.categorySlug === 'real-estate-ai' || article.categorySlug === 'real-estate-ai-calling'));

      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = article.title.toLowerCase().includes(q);
      const inExcerpt = article.excerpt.toLowerCase().includes(q);
      const inKeywords = article.keywords.some((k) => k.toLowerCase().includes(q));
      const inCategory = article.category.toLowerCase().includes(q);

      return inTitle || inExcerpt || inKeywords || inCategory;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = articles[0];

  return (
    <div className="blog-explorer">
      {/* Search & Filter Controls */}
      <div className="blog-controls">
        <div className="blog-search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search CRM, AI, WhatsApp, Lead Management, Calling, Follow-ups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            aria-label="Search blog articles"
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search query"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="category-pills" role="tablist" aria-label="Blog categories">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={selectedCategory === tab.value}
              className={`category-pill ${selectedCategory === tab.value ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count / State */}
      <div className="blog-results-meta">
        <span>
          Showing <b>{filteredArticles.length}</b> {filteredArticles.length === 1 ? 'article' : 'articles'}
          {selectedCategory !== 'all' && ` in ${filterTabs.find((t) => t.value === selectedCategory)?.label}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </span>
      </div>

      {/* Article Grid */}
      {filteredArticles.length > 0 ? (
        <div className="articles-grid">
          {filteredArticles.map((article, idx) => (
            <article className={`article-card ${idx === 0 && selectedCategory === 'all' && !searchQuery ? 'is-featured-card' : ''}`} key={article.slug}>
              <div className="article-card-head">
                <Link href={`/blog/${article.categorySlug}`} className="article-badge">
                  {article.category}
                </Link>
                <span className="article-read-time">{article.readingTime}</span>
              </div>

              <h2 className="article-card-title">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>

              <p className="article-card-excerpt">{article.excerpt}</p>

              <div className="article-card-footer">
                <div className="author-chip">
                  <div className="author-avatar-chip">V</div>
                  <div>
                    <strong>{article.author.name}</strong>
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
                <Link href={`/blog/${article.slug}`} className="read-more-link">
                  Read Guide <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="no-results-box">
          <p>No articles found matching &quot;{searchQuery}&quot; in this category.</p>
          <button
            type="button"
            className="button button-quiet"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Category Topic Cluster Cards */}
      <div className="category-hubs-section">
        <div className="section-heading">
          <span className="section-kicker">EXPLORE BY TOPIC CLUSTER</span>
          <h2>Topical Knowledge Hubs</h2>
          <p>Deep-dive architectures and tactical guides organized by real estate sales specialization.</p>
        </div>

        <div className="category-hub-grid">
          {categories.map((cat) => (
            <Link href={`/blog/${cat.slug}`} key={cat.slug} className="category-hub-card">
              <span className="hub-tag">TOPIC CLUSTER</span>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <div className="hub-topics">
                {cat.featuredTopics.slice(0, 3).map((topic) => (
                  <span key={topic}>• {topic}</span>
                ))}
              </div>
              <b>Explore Cluster ↗</b>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
