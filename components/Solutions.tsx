import React from 'react';

type IconName = 'phone' | 'message' | 'database' | 'briefcase';

function SolutionIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    phone: <path d="M6.6 3.5 8.9 8l-1.7 1.7a14.6 14.6 0 0 0 7.1 7.1l1.7-1.7 4.5 2.3-.8 3.1c-.2.9-1 1.5-2 1.5C9 22 2 15 2 6.3c0-1 .6-1.8 1.5-2l3.1-.8Z" />,
    message: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-3.7-.9L3 21l1.8-5.1A8.7 8.7 0 0 1 3 10.5 8.4 8.4 0 0 1 12 2a8.4 8.4 0 0 1 9 8.5Z" />,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2M3 12h18M10 12v2h4v-2" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

export function Solutions() {
  return (
    <section className="section solutions-section" id="solutions">
      <div className="wrap">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">What we build</div>
            <h2>One intelligent layer.<br />Every repetitive workflow.</h2>
          </div>
          <p>
            Purpose-built agents that fit the way your business already works—
            from the first conversation to the final system update.
          </p>
        </div>

        <div className="solutions-grid">
          <article className="solution-card solution-card-featured" id="calling-agent">
            <div className="solution-copy">
              <div className="solution-meta">
                <span className="solution-icon"><SolutionIcon name="phone" /></span>
                <span className="solution-number mono">01</span>
              </div>
              <h3>AI Calling Agent</h3>
              <p>Natural inbound and outbound calls that qualify leads, answer questions, book appointments, and trigger the next action.</p>
              <ul className="feature-list">
                <li>Human-like conversations</li>
                <li>Live qualification</li>
                <li>Automatic follow-up</li>
              </ul>
            </div>
            <div className="solution-demo call-demo">
              <div className="demo-topline"><span><i /> Live call</span><b className="mono">00:42</b></div>
              <div className="caller-row">
                <span className="caller-avatar">RS</span>
                <div><strong>Rahul Sharma</strong><small>Potential customer</small></div>
                <span className="waveform" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></span>
              </div>
              <div className="transcript"><span>Agent</span><p>“I can help with that. Would you like me to schedule a demo?”</p></div>
              <div className="demo-result"><span>✓</span><p><small>Outcome</small><strong>Qualified · Demo booked</strong></p></div>
            </div>
          </article>

          <article className="solution-card" id="whatsapp-ai">
            <div className="solution-meta">
              <span className="solution-icon green"><SolutionIcon name="message" /></span>
              <span className="solution-number mono">02</span>
            </div>
            <h3>WhatsApp AI</h3>
            <p>Turn your busiest inbox into an always-on sales and support assistant.</p>
            <div className="message-demo">
              <div className="mini-message incoming">Can I book a demo for tomorrow?</div>
              <div className="mini-message outgoing">Absolutely—11:30 AM is available.</div>
              <div className="message-status">✓ Calendar checked · Slot reserved</div>
            </div>
          </article>

          <article className="solution-card" id="crm-integration">
            <div className="solution-meta">
              <span className="solution-icon violet"><SolutionIcon name="database" /></span>
              <span className="solution-number mono">03</span>
            </div>
            <h3>CRM Integration</h3>
            <p>Keep every lead, conversation, task, and follow-up accurate without manual entry.</p>
            <div className="crm-demo">
              <div className="sync-source"><span className="source-mark">V</span><div><small>Vrumo agent</small><b>New qualified lead</b></div></div>
              <div className="sync-path"><i /><i /><i /><span>syncing</span><i /><i /><i /></div>
              <div className="sync-source target"><span className="source-mark">C</span><div><small>Your CRM</small><b>Contact updated</b></div><em>✓</em></div>
            </div>
          </article>

          <article className="solution-card solution-card-wide" id="job-apply-agent">
            <div className="solution-copy">
              <div className="solution-meta">
                <span className="solution-icon amber"><SolutionIcon name="briefcase" /></span>
                <span className="solution-number mono">04</span>
              </div>
              <h3>Job Apply Agent</h3>
              <p>Discover relevant roles, score fit, prepare tailored applications, and track progress in one focused workflow.</p>
            </div>
            <div className="jobs-demo">
              <div className="job-row"><span className="company-mark blue">A</span><div><strong>Senior Product Engineer</strong><small>Acme · Remote</small></div><b>94% match</b><em>Applied ✓</em></div>
              <div className="job-row"><span className="company-mark purple">N</span><div><strong>Full Stack Engineer</strong><small>Northstar · Bengaluru</small></div><b>91% match</b><em>Ready</em></div>
              <div className="job-row"><span className="company-mark orange">O</span><div><strong>Backend Developer</strong><small>Orbit · Hybrid</small></div><b>87% match</b><em>Review</em></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
