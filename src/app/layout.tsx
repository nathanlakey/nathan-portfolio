import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lakey Studio — Web Development & AI',
  description:
    'Lakey Studio builds web applications and AI-powered tools that grow businesses. Next.js, Supabase, custom AI integrations. Based in Dallas, TX.',
  openGraph: {
    title: 'Lakey Studio — Web Development & AI',
    description:
      'Web apps and AI tools for businesses that take their digital presence seriously.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Epilogue:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
