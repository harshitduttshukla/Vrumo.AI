import React from 'react';

const integrations = [
  { mark: 'W', name: 'WhatsApp', tone: 'green' },
  { mark: 'H', name: 'HubSpot', tone: 'orange' },
  { mark: 'S', name: 'Salesforce', tone: 'blue' },
  { mark: 'T', name: 'Twilio', tone: 'red' },
  { mark: 'G', name: 'Google Calendar', tone: 'google' },
  { mark: 'S', name: 'Slack', tone: 'violet' },
  { mark: '{ }', name: 'REST API', tone: 'neutral' },
  { mark: 'P', name: 'PostgreSQL', tone: 'indigo' },
];

export function Integrations() {
  return (
    <section className="section integrations-section" id="integrations">
      <div className="wrap">
        <div className="integrations-intro">
          <div>
            <div className="eyebrow">Integrations</div>
            <h2>Your tools, finally working as one.</h2>
          </div>
          <p>Connect the systems your team already relies on. If it has an API, we can usually make it part of the workflow.</p>
        </div>
        <div className="integration-grid">
          {integrations.map((integration) => (
            <div className="integration-item" key={integration.name}>
              <span className={`integration-mark ${integration.tone}`}>{integration.mark}</span>
              <strong>{integration.name}</strong>
              <span className="integration-link" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
