import type { Metadata } from 'next'
import { Cormorant_Garamond, Epilogue, DM_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nathan — Web Development & AI',
  description:
    'I build web applications and AI-powered tools that grow businesses. Next.js, Supabase, custom AI integrations. Based in Fort Worth, TX.',
  openGraph: {
    title: 'Nathan — Web Development & AI',
    description:
      'Web apps and AI tools for businesses that take their digital presence seriously.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${epilogue.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
