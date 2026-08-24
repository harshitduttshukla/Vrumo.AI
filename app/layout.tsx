import type { Metadata } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
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
  metadataBase: new URL('https://vrumo-ai-operations.harshitcreator687.chatgpt.site'),
  title: 'VrumoAI — Operational AI systems',
  description:
    'AI operators built around real workflows—from customer conversations to completed actions across your existing tools.',
  openGraph: {
    title: 'Make work move. — VrumoAI',
    description: 'AI operators built around real workflows.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'VrumoAI — Make work move.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Make work move. — VrumoAI',
    description: 'AI operators built around real workflows.',
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
