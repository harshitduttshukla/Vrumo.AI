import React from 'react';

export function Solutions() {
  return (
    <section className="section" id="solutions">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What we build</div>
          <h2>Four systems. One signal, carried end to end.</h2>
        </div>

        <div className="products">
          {/* 01 Calling */}
          <div className="product" id="calling-agent">
            <div className="product-index">
              <span className="node"></span>01
            </div>
            <div className="product-copy">
              <div className="eyebrow">AI Calling Agent</div>
              <h3>Your AI agent for customer conversations.</h3>
              <p>
                Handle inbound and outbound calls with natural, AI-led
                conversations that qualify leads, answer questions, schedule
                appointments, and trigger the workflows behind them — no script
                reading, no hold music.
              </p>
            </div>
            <div className="product-visual">
              <div className="card call-card">
                <div className="live-pill">
                  <span className="p"></span>LIVE CALL
                </div>
                <div className="call-top">
                  <span className="who">Rahul Sharma</span>
                  <span className="timer">00:42</span>
                </div>
                <div className="bubble-row">
                  <div className="bubble in">&ldquo;I&apos;m interested in your service.&rdquo;</div>
                </div>
                <div className="bubble-row">
                  <div className="bubble out">
                    &ldquo;I&apos;d be happy to help. What are you looking for?&rdquo;
                  </div>
                </div>
                <div className="tag-row">
                  <span className="tag">Lead Qualified</span>
                  <span className="tag">CRM Updated</span>
                  <span className="tag">Follow-up Scheduled</span>
                </div>
              </div>
            </div>
          </div>

          {/* 02 WhatsApp */}
          <div className="product" id="whatsapp-ai">
            <div className="product-index">
              <span className="node"></span>02
            </div>
            <div className="product-copy">
              <div className="eyebrow">WhatsApp AI</div>
              <h3>Turn WhatsApp into an AI sales assistant.</h3>
              <p>
                Automate the conversations that already happen on WhatsApp —
                capture leads, answer product questions, and book follow-ups
                without a person watching the inbox.
              </p>
            </div>
            <div className="product-visual">
              <div className="card call-card">
                <div
                  className="live-pill"
                  style={{
                    color: 'var(--accent-2)',
                    background: 'var(--accent-2-soft)',
                  }}
                >
                  <span
                    className="p"
                    style={{ background: 'var(--accent-2)' }}
                  ></span>
                  ONLINE
                </div>
                <div className="bubble-row">
                  <div className="bubble in">
                    &ldquo;Hi, I want to know more about your service.&rdquo;
                  </div>
                </div>
                <div className="bubble-row">
                  <div className="bubble out">
                    &ldquo;Sure! Would you like pricing info or a demo?&rdquo;
                  </div>
                </div>
                <div className="bubble-row">
                  <div className="bubble in">&ldquo;Book me a demo.&rdquo;</div>
                </div>
                <div className="bubble-row">
                  <div className="bubble out">
                    &ldquo;Done — your demo is set for tomorrow.&rdquo;
                  </div>
                </div>
                <div className="tag-row">
                  <span className="tag">Lead Captured</span>
                  <span className="tag">CRM Synced</span>
                </div>
              </div>
            </div>
          </div>

          {/* 03 CRM */}
          <div className="product" id="crm-integration">
            <div className="product-index">
              <span className="node"></span>03
            </div>
            <div className="product-copy">
              <div className="eyebrow">CRM Integration</div>
              <h3>Every conversation becomes actionable data.</h3>
              <p>
                Connect AI conversations to the CRM you already run, so leads,
                customer details, activities, and follow-ups sync automatically
                — nothing sits in a call log or chat thread unused.
              </p>
            </div>
            <div className="product-visual">
              <div className="card crm-card">
                <div className="crm-row">
                  <span className="label">CONTACT</span>
                  <span className="val">Rahul Sharma</span>
                </div>
                <div className="crm-row">
                  <span className="label">SOURCE</span>
                  <span className="val">WhatsApp</span>
                </div>
                <div className="crm-row">
                  <span className="label">INTENT</span>
                  <span className="val">Property Inquiry</span>
                </div>
                <div className="crm-row">
                  <span className="label">STATUS</span>
                  <span className="val" style={{ color: 'var(--accent-2)' }}>
                    Qualified
                  </span>
                </div>
                <div className="crm-row">
                  <span className="label">NEXT ACTION</span>
                  <span className="val">Demo Scheduled</span>
                </div>
                <div style={{ marginTop: '14px' }}>
                  <div
                    className="crm-row"
                    style={{ border: 'none', paddingBottom: '4px' }}
                  >
                    <span className="label">LEAD SCORE</span>
                    <span className="val">92%</span>
                  </div>
                  <div className="score-bar">
                    <div className="score-fill"></div>
                  </div>
                </div>
                <div className="tag-row">
                  <span className="tag">CRM Synced ✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* 04 Job Apply */}
          <div className="product" id="job-apply-agent">
            <div className="product-index">
              <span className="node"></span>04
            </div>
            <div className="product-copy">
              <div className="eyebrow">Job Apply Agent</div>
              <h3>Let AI handle the repetitive part of the job search.</h3>
              <p>
                Discover relevant openings, evaluate fit against a real
                profile, prepare applications, and track progress through a
                workflow you configure — the tedious parts, automated end to
                end.
              </p>
            </div>
            <div className="product-visual">
              <div className="card call-card">
                <div className="job-item">
                  <span>Software Engineer</span>
                  <span>
                    <span className="job-match">94% match</span> ·{' '}
                    <span className="status-applied">Applied ✓</span>
                  </span>
                </div>
                <div className="job-item">
                  <span>Backend Developer</span>
                  <span>
                    <span className="job-match">91% match</span> ·{' '}
                    <span className="status-applied">Applied ✓</span>
                  </span>
                </div>
                <div className="job-item">
                  <span>Full Stack Engineer</span>
                  <span>
                    <span className="job-match">87% match</span> ·{' '}
                    <span className="status-interview">Interview</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
