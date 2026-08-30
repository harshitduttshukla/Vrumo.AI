import React from 'react';
import { contacts } from '@/lib/contacts';

export function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-grid" aria-hidden="true" />
      <div className="wrap cta-inner">
        <div className="cta-status mono">AVAILABLE FOR SELECT BUILDS / 2026</div>
        <h2>Bring us the work<br />that should <em>run itself.</em></h2>
        <p>Tell us where the process slows, breaks, or waits on a person. We’ll map the workflow, identify the repetitive steps an AI agent can own, and outline the systems it would need to connect.</p>
        <div className="cta-actions">
          <a className="btn btn-primary btn-large" href={contacts.divyaman.mailtoHref}>
            Talk to Divyaman <span aria-hidden="true">↗</span>
          </a>
          <a className="btn btn-quiet" href={contacts.harshit.mailtoHref}>
            Talk to Harshit <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
