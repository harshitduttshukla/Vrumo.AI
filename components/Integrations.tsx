import React from 'react';

const integrations = ['WhatsApp', 'HubSpot', 'Salesforce', 'Twilio', 'Google', 'Slack', 'PostgreSQL', 'Any API'];

export function Integrations() {
  return (
    <section className="section integrations-section" id="integrations">
      <div className="wrap">
        <div className="stack-header">
          <div className="eyebrow">Works with your stack</div>
          <p>We fit into the operation you have. No rip-and-replace transformation project required.</p>
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
