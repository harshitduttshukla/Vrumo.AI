import React from 'react';

export function Integrations() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: '36px' }}>
          <div className="eyebrow">Integrations</div>
          <h2 style={{ fontSize: '26px' }}>
            Works with the tools you already use.
          </h2>
        </div>
        <div className="pills">
          <span className="pill">CRM Systems</span>
          <span className="pill">WhatsApp Business API</span>
          <span className="pill">Telephony &amp; SIP</span>
          <span className="pill">REST APIs</span>
          <span className="pill">Webhooks</span>
          <span className="pill">Databases</span>
          <span className="pill">Calendars</span>
          <span className="pill">Internal Tools</span>
        </div>
      </div>
    </section>
  );
}
