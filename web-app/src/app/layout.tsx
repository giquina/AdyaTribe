import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'AdyaTribe - Where Amazing Women Connect',
  description: 'Join the premier community for 30+ single & childfree women. Find your tribe, make meaningful friendships, and discover shared adventures.',
  keywords: [
    'women community',
    '30+ women',
    'childfree women', 
    'single women',
    'friendship',
    'community',
    'social network',
    'female friendships',
    'women over 30',
    'tribe'
  ],
  authors: [{ name: 'AdyaTribe' }],
  creator: 'AdyaTribe',
  publisher: 'AdyaTribe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adyatribe.com',
    title: 'AdyaTribe - Where Amazing Women Connect',
    description: 'Join the premier community for 30+ single & childfree women. Find your tribe, make meaningful friendships, and discover shared adventures.',
    siteName: 'AdyaTribe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AdyaTribe - Women Community Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdyaTribe - Where Amazing Women Connect',
    description: 'Join the premier community for 30+ single & childfree women.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ff6b6b" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}