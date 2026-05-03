import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Nubagon - Soluciones Digitales Innovadoras',
  description: 'Expertos en desarrollo web, digitalizacion y software personalizado. Transformamos tus ideas en soluciones digitales de vanguardia.',
  keywords: ['desarrollo web', 'software personalizado', 'digitalizacion', 'fintech', 'health tech', 'ciberseguridad', 'IA'],
  authors: [{ name: 'Nubagon' }],
  creator: 'Nubagon',
  openGraph: {
    title: 'Nubagon - Soluciones Digitales Innovadoras',
    description: 'Expertos en desarrollo web, digitalizacion y software personalizado.',
    url: 'https://www.nubagon.com',
    siteName: 'Nubagon',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nubagon - Soluciones Digitales Innovadoras',
    description: 'Expertos en desarrollo web, digitalizacion y software personalizado.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a2540',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
