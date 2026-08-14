'use client';

import React from 'react';
import { Blaze } from '@/components/canvasui/Blaze';

export function CTASection() {
  return (
    <Blaze
      height={0.97}
      distortion={0.6}
      distortionScale={0.5}
      speed={1}
      sparks={0.65}
      sparkDensity={1.5}
      sparkSize={1.1}
      layers={5}
      smoke={0.5}
      glow={1.5}
      sparkColor={[1, 0.42, 0.051]}
      smokeColor={[1, 0.4314, 0.102]}
      className="w-full"
    >
      <section className="cta-section" id="cta" style={{ position: 'relative' }}>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            Start here
          </div>
          <h2>What should your AI agent do?</h2>
          <p>
            Tell us the workflow you want to automate, and we&apos;ll design the
            right AI system around it.
          </p>
          <a className="btn btn-primary" href="mailto:hello@vrumoai.com">
            Tell us your workflow →
          </a>
        </div>
      </section>
    </Blaze>
  );
}
