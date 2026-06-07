# Nathan — Portfolio Site

Personal portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: Cormorant Garamond, Epilogue, DM Mono (Google Fonts via next/font)
- **Email**: Resend (contact form)
- **Deploy**: Vercel

## Getting started

```bash
# Install dependencies
npm install

# Copy env template and fill in your values
cp .env.local.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key — get one at [resend.com](https://resend.com) |
| `CONTACT_EMAIL` | Your email address — where contact form submissions go |

The contact form still works in dev without these (submissions are logged to console instead of emailed).

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Add `RESEND_API_KEY` and `CONTACT_EMAIL` in Vercel's Environment Variables settings
4. Deploy

Vercel auto-detects Next.js — no build config needed.

## Customization checklist

Before going live, update these:

- [ ] `src/app/layout.tsx` — update `metadata.title` and `metadata.description`
- [ ] `src/components/Nav.tsx` — update the logo from `N.` to your name/brand
- [ ] `src/components/Hero.tsx` — tweak the headline and credentials
- [ ] `src/components/Contact.tsx` — update the "2 slots open" availability copy
- [ ] `src/components/Footer.tsx` — your name is already there, verify it's correct
- [ ] `src/components/Work.tsx` — replace SVG mockups with real screenshots once you have them
- [ ] `.env.local` — add your Resend key and email

## Adding real project screenshots

Replace the SVG mockups in `Work.tsx` with real images:

```tsx
// In src/components/Work.tsx, replace the svg block with:
import Image from 'next/image'

<div style={{ aspectRatio: '16/10', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
  <Image
    src="/projects/landman-auctions.png"
    alt="Landman Auctions"
    width={640}
    height={400}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
```

Drop screenshot files in `/public/projects/`.
