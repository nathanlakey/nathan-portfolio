'use client'

const projects = [
  {
    id: 'landman',
    category: 'Land Auctions · Dallas, TX',
    name: 'Landman Auctions',
    desc: 'Authority site and lead-generation platform for a World Champion Auctioneer. Admin dashboard, real-time listings, auction countdown, and seller consultation flow.',
    stack: ['Next.js 14', 'Supabase', 'Clerk', 'Resend', 'Vercel'],
    bgColor: '#eee8dc',
    image: '/projects/landman-auctions.png',
  },
  {
    id: 'solong',
    category: 'SEO · Affiliate · 50 States',
    name: 'SoLongSoulmate',
    desc: 'Fully monetized content site covering DIY divorce across all 50 states. AdSense and affiliate revenue, structured data, GA4, and Cloudflare CDN.',
    stack: ['Next.js', 'Tailwind', 'AdSense', 'Cloudflare', 'GA4'],
    bgColor: '#ededf0',
    image: '/projects/solongsoulmate.png',
  },
]

export default function Work() {
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
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem',
        }} className="work-grid">
          {projects.map((p) => (
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
              <div style={{
                aspectRatio: '16/10', overflow: 'hidden',
                borderBottom: '1px solid var(--border)',
                background: p.bgColor,
              }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
