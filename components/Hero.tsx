'use client';

import { useState } from 'react';
import Link from 'next/link';

const leads = [
  {
    initials: 'PS',
    name: 'Priya Sharma',
    property: 'The Westin Residences',
    budget: '₹5–7 Cr',
    status: 'New',
    source: 'Meta Ad',
    country: 'India',
    purpose: 'Self Use',
    preferredCall: 'Morning, weekdays',
    progress: 86,
  },
  {
    initials: 'MA',
    name: 'Mohammed Al Rashid',
    property: 'Al Marjan Island',
    budget: 'AED 2M',
    status: 'Call back',
    source: 'Direct WhatsApp',
    country: 'Dubai',
    purpose: 'Capital Growth',
    preferredCall: 'Today, 3:00 PM',
    progress: 66,
  },
  {
    initials: 'RV',
    name: 'Rohit Verma',
    property: 'Trump Tower',
    budget: '₹7–10 Cr',
    status: 'Follow up',
    source: 'Broadcast reply',
    country: 'India',
    purpose: 'Monthly Income',
    preferredCall: 'In 10 days',
    progress: 54,
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
              From WhatsApp Enquiry to Sales Follow-Up—<em>Without Losing Context.</em>
            </h1>
            <p className="hero-lead">
              Vrumo brings chatbot qualification, lead assignment, role-based dashboards, callback reminders,
              transcripts, notes and source reporting into one real estate CRM.
            </p>
            <div className="hero-actions">
              <Link
                className="button button-primary"
                href="/contact"
              >
                Book a Demo <span aria-hidden="true">↗</span>
              </Link>
              <a className="button button-quiet" href="#how-it-works">
                See the CRM Workflow <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-assurance">
              <span aria-hidden="true">✓</span> Grounded in a live real estate CRM deployment
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
                  <span>crm / sales-dashboard</span>
                </div>
                <div className="chrome-actions">
                  <span className="chrome-status"><span className="status-pulse" /> SAMPLE WORKFLOW</span>
                </div>
              </div>

              <div className="crm-window">
                <div className="crm-topbar">
                  <div className="crm-brand">
                    <span className="crm-brandmark">V</span>
                    <span>Real Estate CRM</span>
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
                        <span className="crm-overline">SALES ADVISOR DASHBOARD</span>
                        <h2>Assigned leads</h2>
                      </div>
                      <span className="crm-date">30 AUG 2026</span>
                    </div>

                    <div className="metric-grid">
                      <article>
                        <span>TOTAL LEADS</span>
                        <strong>500</strong>
                        <small>Active batch</small>
                      </article>
                      <article>
                        <span>NEW LEADS</span>
                        <strong>453</strong>
                        <small>Untouched</small>
                      </article>
                      <article>
                        <span>CALLBACKS</span>
                        <strong>28</strong>
                        <small>Scheduled</small>
                      </article>
                    </div>

                    <div className="crm-workspace">
                      <div className="lead-list">
                        <div className="list-label">
                          <span>ASSIGNED LEADS</span>
                          <span>Status</span>
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
                            <span className="score-pill">{item.status}</span>
                          </button>
                        ))}
                        <div className="list-footer">
                          <span>Dashboard refreshes every 10 seconds</span>
                          <i />
                        </div>
                      </div>

                      <article className="lead-panel" aria-live="polite">
                        <div className="lead-panel-top">
                          <div className="lead-identity">
                            <span className="lead-avatar lead-avatar-large">{lead.initials}</span>
                            <div>
                              <small>LEAD RECORD</small>
                              <h3>{lead.name}</h3>
                            </div>
                          </div>
                          <span className="qualified-badge">{lead.status}</span>
                        </div>
                        <div className="intent-row">
                          <div>
                            <small>PREFERRED CALL</small>
                            <strong>{lead.preferredCall}</strong>
                          </div>
                          <div className="score-track">
                            <i style={{ width: `${lead.progress}%` }} />
                          </div>
                          <span>{lead.status}</span>
                        </div>
                        <dl className="lead-facts">
                          <div>
                            <dt>PROJECT</dt>
                            <dd>{lead.property}</dd>
                          </div>
                          <div>
                            <dt>BUDGET</dt>
                            <dd>{lead.budget}</dd>
                          </div>
                          <div>
                            <dt>COUNTRY</dt>
                            <dd>{lead.country}</dd>
                          </div>
                          <div>
                            <dt>PURPOSE</dt>
                            <dd>{lead.purpose}</dd>
                          </div>
                        </dl>
                        <div className="ai-activity">
                          <div className="activity-head">
                            <span>
                              <i /> AI ACTIVITY
                            </span>
                            <small>Just now</small>
                          </div>
                          <p>Qualification answers and conversation history are saved to this lead.</p>
                          <ul>
                            <li>
                              <span>✓</span>
                              <b>WhatsApp transcript captured</b>
                            </li>
                            <li>
                              <span>✓</span>
                              <b>Advisor assigned</b>
                              <em>Round-robin</em>
                            </li>
                            <li>
                              <span>✓</span>
                              <b>Source and status logged</b>
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
                  <strong>{lead.status}</strong>
                  <small>Lead status</small>
                </div>
              </div>

              <div className="mobile-lead-metrics">
                <div>
                  <small>BUDGET</small>
                  <strong>{lead.budget}</strong>
                </div>
                <div>
                  <small>COUNTRY</small>
                  <strong>{lead.country}</strong>
                </div>
                <div>
                  <small>SOURCE</small>
                  <strong>{lead.source}</strong>
                </div>
              </div>

              <div className="mobile-ai-activity">
                <div className="mobile-activity-title">
                  <span className="activity-dot" />
                  <span>CRM RECORD</span>
                </div>
                <ul className="mobile-activity-list">
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Project and budget captured</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Full WhatsApp transcript saved</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>
                      Preferred call: <b>{lead.preferredCall}</b>
                    </span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Owner, source and status visible</span>
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
              <h2>Qualify in WhatsApp</h2>
              <p>Capture project, country, budget, purpose and timeline.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h2>Assign the Right Advisor</h2>
              <p>Use project rules and round-robin distribution.</p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h2>Never Miss a Callback</h2>
              <p>Schedule the time, notify the owner and keep an audit trail.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
