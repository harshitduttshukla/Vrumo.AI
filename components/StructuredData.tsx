import React from 'react';
import { siteConfig } from '@/lib/site';

const services = [
  {
    id: 'ai-calling-agent',
    name: 'AI Calling Agent Development',
    type: 'AI calling automation and AI voice agents',
    description: 'Custom inbound and outbound AI calling agents for lead qualification, FAQs, appointment booking, demo scheduling, follow-ups, and CRM updates.',
  },
  {
    id: 'whatsapp-ai',
    name: 'WhatsApp AI Automation',
    type: 'WhatsApp business automation',
    description: 'AI assistants for customer questions, lead qualification, availability checks, appointment booking, follow-ups, and CRM-connected conversations.',
  },
  {
    id: 'crm-integration',
    name: 'AI CRM Integration',
    type: 'CRM automation with AI',
    description: 'AI agents that create and update leads, record conversations, manage stages and tasks, synchronize customer data, and trigger follow-ups.',
  },
  {
    id: 'job-apply-agent',
    name: 'AI Job Application Agent',
    type: 'Job application automation',
    description: 'AI workflows for discovering relevant roles, scoring fit, preparing tailored application material, tracking applications, and maintaining status.',
  },
];

export function StructuredData() {
  const organizationId = `${siteConfig.url}/#organization`;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        email: siteConfig.email,
        description: 'AI automation agency building custom AI agents and workflow automation systems for growing teams.',
        areaServed: 'Worldwide',
        knowsAbout: [
          'AI agents',
          'AI automation',
          'Workflow automation',
          'Voice AI',
          'WhatsApp automation',
          'CRM automation',
          'Business process automation',
          'API integrations',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { '@id': organizationId },
        inLanguage: 'en',
      },
      ...services.map((service) => ({
        '@type': 'Service',
        '@id': `${siteConfig.url}/#${service.id}`,
        name: service.name,
        serviceType: service.type,
        description: service.description,
        url: `${siteConfig.url}/#${service.id}`,
        provider: { '@id': organizationId },
        areaServed: 'Worldwide',
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
    />
  );
}
