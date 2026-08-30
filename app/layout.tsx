import type { Metadata } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import { siteConfig } from '@/lib/site';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'business software',
  keywords: [
    'real estate CRM',
    'AI CRM for real estate',
    'real estate CRM software',
    'real estate automation software',
    'real estate lead management software',
    'real estate sales automation',
    'real estate WhatsApp automation',
    'real estate AI calling',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: siteConfig.name,
    title: 'AI CRM & Automation Built for Real Estate',
    description: 'Capture, qualify, follow up, and convert real estate leads automatically with Vrumo AI.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Vrumo AI real estate CRM and automation platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
