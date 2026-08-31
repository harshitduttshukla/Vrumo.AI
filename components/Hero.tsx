'use client';

import { useState } from 'react';
import Link from 'next/link';

const leads = [
  {
    initials: 'RS',
    name: 'Rahul Sharma',
    property: '3 BHK · Gurgaon',
    budget: '₹1.2 Cr',
    score: 92,
    source: 'WhatsApp',
    location: 'Sector 65, Gurgaon',
    visit: 'Sat · 11:30 AM',
  },
  {
    initials: 'PM',
    name: 'Priya Mehta',
    property: '2 BHK · Noida',
    budget: '₹85 L',
    score: 78,
    source: 'Website',
    location: 'Sector 150, Noida',
    visit: 'Awaiting slot',
  },
  {
    initials: 'AV',
    name: 'Amit Verma',
    property: 'Villa · Pune',
    budget: '₹2.4 Cr',
    score: 88,
    source: 'Campaign',
    location: 'Hinjawadi, Pune',
    visit: 'Sun · 04:00 PM',
  },
];

export function Hero() {
  const [selectedLead, setSelectedLead] = useState(0);
  const lead = leads[selectedLead];

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-gridlines" aria-hidden="true" />
        <div className="wrap hero-layout">
          {/* Left Hero Copy */}
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="live-dot" aria-hidden="true" />
              AI CRM FOR REAL ESTATE
            </div>
            <h1>
              Turn Real Estate Leads Into Deals—<em>Automatically.</em>
            </h1>
            <p className="hero-lead">
              Vrumo combines CRM, AI calling, WhatsApp automation, lead qualification, follow-ups, and sales workflows
              into one intelligent system built for real estate teams.
            </p>
            <div className="hero-actions">
              <Link
                className="button button-primary"
                href="/contact"
              >
                Book a Demo <span aria-hidden="true">↗</span>
              </Link>
              <a className="button button-quiet" href="#how-it-works">
                See How It Works <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-assurance">
              <span aria-hidden="true">✓</span> Built around your real estate sales process
            </p>
          </div>

          {/* Desktop Full CRM Stage & Mobile Focused Card */}
          <div className="crm-stage" aria-label="Interactive preview of the Vrumo real estate CRM">
            {/* Desktop Full CRM Window (hidden on mobile via CSS) */}
            <div className="product-frame desktop-crm-view">
              <div className="browser-chrome" aria-hidden="true">
                <div className="chrome-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <div className="chrome-address-bar">
                  <svg className="lock-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>app.vrumo.ai / pipeline</span>
                </div>
                <div className="chrome-actions">
                  <span className="chrome-status"><span className="status-pulse" /> LIVE CRM</span>
                </div>
              </div>

              <div className="crm-window">
                <div className="crm-topbar">
                  <div className="crm-brand">
                    <span className="crm-brandmark">V</span>
                    <span>Vrumo CRM</span>
                  </div>
                  <div className="crm-top-actions">
                    <span className="sync-status">
                      <i /> Live sync
                    </span>
                    <button type="button" aria-label="Open CRM notifications">
                      2
                    </button>
                    <span className="avatar">AK</span>
                  </div>
                </div>

                <div className="crm-shell">
                  <aside className="crm-sidebar" aria-label="CRM navigation">
                    <span className="side-icon is-active">⌂</span>
                    <span className="side-icon">◫</span>
                    <span className="side-icon">↗</span>
                    <span className="side-icon">◎</span>
                    <span className="side-icon side-bottom">⚙</span>
                  </aside>

                  <div className="crm-content">
                    <div className="crm-heading-row">
                      <div>
                        <span className="crm-overline">SALES PIPELINE</span>
                        <h2>Active enquiries</h2>
                      </div>
                      <span className="crm-date">30 AUG 2026</span>
                    </div>

                    <div className="metric-grid">
                      <article>
                        <span>NEW LEADS</span>
                        <strong>24</strong>
                        <small>+8 today</small>
                      </article>
                      <article>
                        <span>QUALIFIED</span>
                        <strong>18</strong>
                        <small>Ready for sales</small>
                      </article>
                      <article>
                        <span>SITE VISITS</span>
                        <strong>07</strong>
                        <small>This week</small>
                      </article>
                    </div>

                    <div className="crm-workspace">
                      <div className="lead-list">
                        <div className="list-label">
                          <span>INBOUND LEADS</span>
                          <span>Score</span>
                        </div>
                        {leads.map((item, index) => (
                          <button
                            className={`lead-row ${selectedLead === index ? 'is-selected' : ''}`}
                            key={item.name}
                            type="button"
                            onClick={() => setSelectedLead(index)}
                            aria-pressed={selectedLead === index}
                          >
                            <span className="lead-avatar">{item.initials}</span>
                            <span className="lead-main">
                              <strong>{item.name}</strong>
                              <small>{item.property}</small>
                            </span>
                            <span className="lead-budget">{item.budget}</span>
                            <span className="score-pill">{item.score}%</span>
                          </button>
                        ))}
                        <div className="list-footer">
                          <span>AI is monitoring 21 more enquiries</span>
                          <i />
                        </div>
                      </div>

                      <article className="lead-panel" aria-live="polite">
                        <div className="lead-panel-top">
                          <div className="lead-identity">
                            <span className="lead-avatar lead-avatar-large">{lead.initials}</span>
                            <div>
                              <small>NEW ENQUIRY</small>
                              <h3>{lead.name}</h3>
                            </div>
                          </div>
                          <span className="qualified-badge">✓ Qualified</span>
                        </div>
                        <div className="intent-row">
                          <div>
                            <small>LEAD SCORE</small>
                            <strong>{lead.score}%</strong>
                          </div>
                          <div className="score-track">
                            <i style={{ width: `${lead.score}%` }} />
                          </div>
                          <span>High intent</span>
                        </div>
                        <dl className="lead-facts">
                          <div>
                            <dt>PROPERTY</dt>
                            <dd>{lead.property}</dd>
                          </div>
                          <div>
                            <dt>BUDGET</dt>
                            <dd>{lead.budget}</dd>
                          </div>
                          <div>
                            <dt>LOCATION</dt>
                            <dd>{lead.location}</dd>
                          </div>
                          <div>
                            <dt>SOURCE</dt>
                            <dd>{lead.source}</dd>
                          </div>
                        </dl>
                        <div className="ai-activity">
                          <div className="activity-head">
                            <span>
                              <i /> AI ACTIVITY
                            </span>
                            <small>Just now</small>
                          </div>
                          <p>Requirement captured and matched to active inventory.</p>
                          <ul>
                            <li>
                              <span>✓</span>
                              <b>WhatsApp reply sent</b>
                            </li>
                            <li>
                              <span>✓</span>
                              <b>Site visit</b>
                              <em>{lead.visit}</em>
                            </li>
                            <li>
                              <span>✓</span>
                              <b>CRM record updated</b>
                            </li>
                          </ul>
                        </div>
                        <button className="panel-action" type="button">
                          Open lead record <span>↗</span>
                        </button>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Focused CRM Card (displayed on mobile via CSS) */}
            <div className="mobile-crm-card">
              <div className="mobile-crm-header">
                <div className="mobile-crm-brand">
                  <span className="crm-brandmark">V</span>
                  <span>Vrumo AI CRM</span>
                </div>
                <span className="mobile-live-badge">● LIVE SYNC</span>
              </div>

              <div className="mobile-lead-header">
                <div className="mobile-lead-info">
                  <span className="mobile-lead-avatar">{lead.initials}</span>
                  <div>
                    <small>NEW ENQUIRY</small>
                    <h3>{lead.name}</h3>
                    <span>{lead.property}</span>
                  </div>
                </div>
                <div className="mobile-score-box">
                  <strong>{lead.score}%</strong>
                  <small>High Intent</small>
                </div>
              </div>

              <div className="mobile-lead-metrics">
                <div>
                  <small>BUDGET</small>
                  <strong>{lead.budget}</strong>
                </div>
                <div>
                  <small>LOCATION</small>
                  <strong>{lead.location}</strong>
                </div>
                <div>
                  <small>SOURCE</small>
                  <strong>{lead.source}</strong>
                </div>
              </div>

              <div className="mobile-ai-activity">
                <div className="mobile-activity-title">
                  <span className="activity-dot" />
                  <span>AI WORKFLOW ACTIONS</span>
                </div>
                <ul className="mobile-activity-list">
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Requirement captured (3 BHK)</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>WhatsApp brochure dispatched</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>
                      Site visit confirmed: <b>{lead.visit}</b>
                    </span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>CRM pipeline updated automatically</span>
                  </li>
                </ul>
              </div>

              <div className="mobile-lead-selector">
                <span className="selector-label">TRY LEAD:</span>
                <div className="selector-pills">
                  {leads.map((item, idx) => (
                    <button
                      key={item.name}
                      type="button"
                      className={`selector-pill ${selectedLead === idx ? 'is-active' : ''}`}
                      onClick={() => setSelectedLead(idx)}
                    >
                      {item.initials}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Value Strip */}
      <section className="value-strip" aria-label="Vrumo benefits">
        <div className="wrap value-grid">
          <article>
            <span>01</span>
            <div>
              <h2>Capture Every Lead</h2>
              <p>Website, WhatsApp, calls, forms and campaigns.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h2>Qualify Automatically</h2>
              <p>Understand intent, budget, location and requirements.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h2>Follow Up Without Chasing</h2>
              <p>Automated messages, calling and follow-up workflows.</p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h2>Keep CRM Updated</h2>
              <p>Every conversation and action stays synchronized.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
