import React from 'react';

const integrations = ['WhatsApp', 'HubSpot', 'Salesforce', 'Twilio', 'Google Calendar', 'Slack', 'PostgreSQL', 'REST APIs'];

export function Integrations() {
  return (
    <section className="section integrations-section" id="integrations">
      <div className="wrap">
        <div className="stack-header">
          <div>
            <div className="eyebrow">Works with your stack</div>
            <h2>AI agents that connect<br />your business systems.</h2>
          </div>
          <p>VrumoAI integrates agents with the tools your team already uses so conversations, calendars, CRM records, databases, and follow-ups stay in sync. If a system provides a suitable API, it can usually become part of the workflow.</p>
        </div>
        <div className="integration-rail" aria-label="Supported integrations">
          {integrations.map((integration, index) => (
            <React.Fragment key={integration}>
              <strong>{integration}</strong>
              {index < integrations.length - 1 && <i aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
