'use client'

import { useState } from 'react'

const projects = [
  {
    id: 'landman',
    category: 'Land Auctions · Dallas, TX',
    name: 'Landman Auctions',
    desc: 'Authority site and lead-generation platform for a World Champion Auctioneer. Admin dashboard, real-time listings, auction countdown, and seller consultation flow. A property sold through this platform exceeded $3 million.',
    stack: ['Next.js 14', 'Supabase', 'Clerk', 'Resend', 'Vercel'],
    bgColor: '#eee8dc',
    images: [
      '/projects/landman-auctions1.jpg',
      '/projects/landman-auctions2.jpg',
      '/projects/landman-auctions3.jpg',
      '/projects/landman-auctions4.jpg',
      '/projects/landman-auctions5.jpg',
    ],
    url: 'https://www.landmanauctions.com',
  },
  {
    id: 'solong',
    category: 'SEO · Affiliate · 50 States',
    name: 'SoLongSoulmate',
    desc: 'Fully monetized content site covering DIY divorce across all 50 states. AdSense and affiliate revenue, structured data, GA4, and Cloudflare CDN.',
    stack: ['Next.js', 'Tailwind', 'AdSense', 'Cloudflare', 'GA4'],
    bgColor: '#ededf0',
    images: [
      '/projects/solongsoulmate1.jpg',
      '/projects/solongsoulmate2.jpg',
      '/projects/solongsoulmate3.jpg',
      '/projects/solongsoulmate5.jpg',
    ],
    url: 'https://www.solongsoulmate.com',
  },
  {
    id: 'socialposts',
    category: 'AI · Claude API · Next.js',
    name: 'AI Social Post Generator',
    desc: 'Full-stack AI tool that sends copy to Claude and returns structured, platform-ready posts for Instagram, X, and LinkedIn. Built to learn the AI API pattern end-to-end.',
    stack: ['Next.js 14', 'Claude API', 'TypeScript', 'Vercel'],
    bgColor: '#f0ede8',
    images: ['/projects/SocialPostGenerator.png'],
    url: null,
  },
  {
    id: 'auction-academy',
    category: 'EdTech · Auctioneer Licensing · React',
    name: 'Auction Academy Prep',
    desc: 'Auctioneer licensing exam prep platform covering 8 states and growing. Full practice tests, topic quizzes, flashcards, study games, score history tracking, and an exam countdown timer. Built for aspiring auctioneers preparing for their state licensing exam.',
    stack: ['Next.js', 'Supabase', 'Tailwind', 'Vercel'],
    bgColor: '#f0ede8',
    images: [
      '/projects/auction-academy1.png.jpg',
      '/projects/auction-academy2.png.jpg',
      '/projects/auction-academy3.png.jpg',
      '/projects/auction-academy4.png.jpg',
    ],
    url: 'https://www.auctionacademyprep.com',
  },
]

export default function Work() {
  const [activeImages, setActiveImages] = useState<Record<string, number>>({})

  return (
    <section id="work" style={{ padding: '110px 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '3.5rem',
          flexWrap: 'wrap', gap: '1.5rem',
        }}>
          <div>
            <div className="reveal" style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              Selected work
            </div>
            <h2 className="reveal" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 300, lineHeight: 1.08, color: 'var(--ink)',
            }}>
              Built and shipped.
            </h2>
          </div>
          <p className="reveal" style={{
            fontSize: '15px', color: 'var(--muted)',
            fontWeight: 300, lineHeight: 1.7, maxWidth: '300px',
          }}>
            Real products. Real businesses. Real outcomes.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem',
        }} className="work-grid">
          {projects.map((p) => {
            const activeIndex = activeImages[p.id] ?? 0
            const cardContent = (
              <>
                <div style={{
                  position: 'relative',
                  aspectRatio: '16/10', overflow: 'hidden',
                  borderBottom: '1px solid var(--border)',
                  background: p.bgColor,
                }}>
                  <img src={p.images[activeIndex]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {p.images.length > 1 && activeIndex > 0 && (
                    <button
                      onClick={(e) => { e.stopPropagation(); e.preventDefault(); setActiveImages(prev => ({ ...prev, [p.id]: (prev[p.id] ?? 0) - 1 })) }}
                      style={{
                        position: 'absolute', left: '12px', top: '50%',
                        transform: 'translateY(-50%)', background: 'none', border: 'none',
                        color: '#1a1814', cursor: 'pointer', fontSize: '22px',
                        fontWeight: 300, lineHeight: 1, padding: '4px 8px',
                        textShadow: '0 1px 3px rgba(255,255,255,0.8)',
                      }}
                    >
                      ←
                    </button>
                  )}
                  {p.images.length > 1 && activeIndex < p.images.length - 1 && (
                    <button
                      onClick={(e) => { e.stopPropagation(); e.preventDefault(); setActiveImages(prev => ({ ...prev, [p.id]: (prev[p.id] ?? 0) + 1 })) }}
                      style={{
                        position: 'absolute', right: '12px', top: '50%',
                        transform: 'translateY(-50%)', background: 'none', border: 'none',
                        color: '#1a1814', cursor: 'pointer', fontSize: '22px',
                        fontWeight: 300, lineHeight: 1, padding: '4px 8px',
                        textShadow: '0 1px 3px rgba(255,255,255,0.8)',
                      }}
                    >
                      →
                    </button>
                  )}
                </div>
                {p.images.length > 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', padding: '10px 0 0' }}>
                    {p.images.map((_, imgIdx) => (
                      <span
                        key={imgIdx}
                        style={{
                          width: '4px', height: '4px', borderRadius: '50%',
                          background: imgIdx === activeIndex ? 'var(--gold)' : 'var(--border)',
                          border: imgIdx === activeIndex ? 'none' : '1px solid var(--muted)',
                          display: 'inline-block',
                        }}
                      />
                    ))}
                  </div>
                )}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    color: 'var(--muted)', letterSpacing: '0.08em',
                    textTransform: 'uppercase', marginBottom: '6px',
                  }}>
                    {p.category}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-serif)', fontSize: '1.4rem',
                    fontWeight: 400, color: 'var(--ink)', marginBottom: '8px',
                  }}>
                    {p.name}
                  </div>
                  <div style={{
                    fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65,
                    fontWeight: 300, marginBottom: '1rem',
                  }}>
                    {p.desc}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {p.stack.map((s) => (
                      <span key={s} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '10px',
                        padding: '3px 8px', border: '1px solid var(--border)',
                        borderRadius: '3px', color: 'var(--muted)',
                        background: 'var(--bg)',
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )
            return (
            <div
              key={p.id}
              className="reveal"
              style={{
                background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: '10px', overflow: 'hidden',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(26,24,20,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {p.url ? (
                <a
                  href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  {cardContent}
                </a>
              ) : (
                cardContent
              )}
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
