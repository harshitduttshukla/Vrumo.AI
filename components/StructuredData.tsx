import { siteConfig } from '@/lib/site';
import { contacts } from '@/lib/contacts';

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
        email: contacts.divyaman.email,
        telephone: contacts.divyaman.phone,
        description: 'AI-powered CRM and automation platform built for real estate teams.',
        areaServed: 'Worldwide',
        knowsAbout: [
          'Real estate CRM',
          'Real estate lead management',
          'AI calling',
          'WhatsApp automation',
          'Real estate sales automation',
          'Site visit automation',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: contacts.divyaman.phone,
            contactType: 'Sales and Partnerships',
            email: contacts.divyaman.email,
            name: contacts.divyaman.name,
            availableLanguage: ['English', 'Hindi'],
          },
          {
            '@type': 'ContactPoint',
            telephone: contacts.harshit.phone,
            contactType: 'Product and Technology',
            email: contacts.harshit.email,
            name: contacts.harshit.name,
            availableLanguage: ['English', 'Hindi'],
          },
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
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteConfig.url}/#software`,
        name: 'Vrumo AI',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Real Estate CRM and Sales Automation',
        operatingSystem: 'Web',
        description: siteConfig.description,
        url: siteConfig.url,
        provider: { '@id': organizationId },
        featureList: [
          'Real estate lead capture',
          'AI lead qualification',
          'WhatsApp workflow automation',
          'AI calling workflows',
          'Real estate CRM pipeline',
          'Follow-up automation',
          'Site visit coordination',
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\u003c') }} />;
}
