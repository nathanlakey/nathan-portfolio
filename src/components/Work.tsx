'use client'

const projects = [
  {
    id: 'landman',
    category: 'Land Auctions · Dallas, TX',
    name: 'Landman Auctions',
    desc: 'Authority site and lead-generation platform for a World Champion Auctioneer. Admin dashboard, real-time listings, auction countdown, and seller consultation flow. A property sold through this platform exceeded $3 million.',
    stack: ['Next.js 14', 'Supabase', 'Clerk', 'Resend', 'Vercel'],
    bgColor: '#eee8dc',
    svg: (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <rect width="320" height="200" fill="#eee8dc"/>
        <rect x="20" y="18" width="280" height="38" rx="4" fill="#f7f3ec" stroke="#d8d0c4" strokeWidth="0.5"/>
        <rect x="28" y="27" width="64" height="20" rx="3" fill="#1a1814"/>
        <rect x="104" y="32" width="90" height="8" rx="2" fill="#d8d0c4"/>
        <rect x="214" y="32" width="60" height="8" rx="2" fill="#d8d0c4"/>
        <rect x="268" y="27" width="24" height="20" rx="3" fill="#b8962e" opacity="0.9"/>
        <rect x="20" y="66" width="176" height="120" rx="5" fill="#f7f3ec" stroke="#d8d0c4" strokeWidth="0.5"/>
        <rect x="28" y="74" width="90" height="40" rx="3" fill="#d8d0c4"/>
        <rect x="28" y="120" width="55" height="7" rx="1" fill="#b8962e" opacity="0.8"/>
        <rect x="28" y="133" width="150" height="5" rx="1" fill="#d8d0c4"/>
        <rect x="28" y="144" width="120" height="5" rx="1" fill="#d8d0c4"/>
        <rect x="28" y="155" width="42" height="18" rx="3" fill="#1a1814"/>
        <rect x="206" y="66" width="94" height="56" rx="5" fill="#f7f3ec" stroke="#d8d0c4" strokeWidth="0.5"/>
        <rect x="213" y="73" width="80" height="32" rx="2" fill="#e8e2d4"/>
        <rect x="213" y="109" width="60" height="6" rx="1" fill="#d8d0c4"/>
        <rect x="206" y="132" width="94" height="54" rx="5" fill="#f7f3ec" stroke="#d8d0c4" strokeWidth="0.5"/>
        <rect x="213" y="139" width="80" height="30" rx="2" fill="#e8e2d4"/>
        <rect x="213" y="175" width="50" height="5" rx="1" fill="#d8d0c4"/>
      </svg>
    ),
  },
  {
    id: 'solong',
    category: 'SEO · Affiliate · 50 States',
    name: 'SoLongSoulmate',
    desc: 'Fully monetized content site covering DIY divorce across all 50 states. AdSense and affiliate revenue, structured data, GA4, and Cloudflare CDN.',
    stack: ['Next.js', 'Tailwind', 'AdSense', 'Cloudflare', 'GA4'],
    bgColor: '#ededf0',
    svg: (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <rect width="320" height="200" fill="#ededf0"/>
        <rect x="20" y="18" width="280" height="38" rx="4" fill="#f7f7fa" stroke="#d4d4de" strokeWidth="0.5"/>
        <rect x="28" y="27" width="100" height="20" rx="3" fill="#2a2850" opacity="0.9"/>
        <rect x="140" y="32" width="80" height="8" rx="2" fill="#d4d4de"/>
        <rect x="240" y="32" width="50" height="8" rx="2" fill="#d4d4de"/>
        <rect x="20" y="66" width="280" height="58" rx="5" fill="#f7f7fa" stroke="#d4d4de" strokeWidth="0.5"/>
        <rect x="28" y="76" width="180" height="14" rx="2" fill="#2a2850" opacity="0.7"/>
        <rect x="28" y="96" width="240" height="6" rx="1" fill="#d4d4de"/>
        <rect x="28" y="108" width="200" height="6" rx="1" fill="#d4d4de"/>
        <rect x="20" y="134" width="86" height="52" rx="5" fill="#f7f7fa" stroke="#d4d4de" strokeWidth="0.5"/>
        <rect x="28" y="141" width="70" height="36" rx="2" fill="#e8e8f0"/>
        <rect x="28" y="181" width="50" height="4" rx="1" fill="#d4d4de"/>
        <rect x="117" y="134" width="86" height="52" rx="5" fill="#f7f7fa" stroke="#d4d4de" strokeWidth="0.5"/>
        <rect x="125" y="141" width="70" height="36" rx="2" fill="#e8e8f0"/>
        <rect x="125" y="181" width="50" height="4" rx="1" fill="#d4d4de"/>
        <rect x="214" y="134" width="86" height="52" rx="5" fill="#f7f7fa" stroke="#d4d4de" strokeWidth="0.5"/>
        <rect x="222" y="141" width="70" height="36" rx="2" fill="#e8e8f0"/>
        <rect x="222" y="181" width="50" height="4" rx="1" fill="#d4d4de"/>
      </svg>
    ),
  },
  {
    id: 'fretboard',
    category: 'EdTech · Guitar · React',
    name: 'Fretboard Scholar',
    desc: 'Interactive guitar fretboard learning application. Visual scale and chord exploration, ear training, and a freemium subscription model built in React.',
    stack: ['React', 'Tailwind', 'Web Audio API', 'Stripe'],
    bgColor: '#edf0ed',
    svg: (
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <rect width="320" height="200" fill="#edf0ed"/>
        <rect x="20" y="18" width="280" height="38" rx="4" fill="#f4f7f4" stroke="#ccd8cc" strokeWidth="0.5"/>
        <rect x="28" y="27" width="76" height="20" rx="3" fill="#1a3020" opacity="0.9"/>
        <rect x="116" y="32" width="110" height="8" rx="2" fill="#ccd8cc"/>
        <rect x="258" y="27" width="34" height="20" rx="3" fill="#2a4a2a" opacity="0.8"/>
        <rect x="20" y="68" width="280" height="22" rx="3" fill="#f4f7f4" stroke="#ccd8cc" strokeWidth="0.5"/>
        <line x1="20" y1="79" x2="300" y2="79" stroke="#ccd8cc" strokeWidth="0.5"/>
        {[56,92,128,164,200,236,272].map(x => (
          <rect key={x} x={x} y="68" width="1" height="22" fill="#ccd8cc"/>
        ))}
        <circle cx="74" cy="79" r="7" fill="#b8962e" opacity="0.85"/>
        <circle cx="146" cy="79" r="7" fill="#1a3020" opacity="0.7"/>
        <circle cx="218" cy="79" r="7" fill="#b8962e" opacity="0.85"/>
        <circle cx="254" cy="79" r="7" fill="#1a3020" opacity="0.5"/>
        <rect x="20" y="102" width="280" height="22" rx="3" fill="#f4f7f4" stroke="#ccd8cc" strokeWidth="0.5"/>
        <line x1="20" y1="113" x2="300" y2="113" stroke="#ccd8cc" strokeWidth="0.5"/>
        {[56,92,128,164,200,236].map(x => (
          <rect key={x} x={x} y="102" width="1" height="22" fill="#ccd8cc"/>
        ))}
        <circle cx="110" cy="113" r="7" fill="#1a3020" opacity="0.7"/>
        <circle cx="182" cy="113" r="7" fill="#b8962e" opacity="0.85"/>
        <circle cx="254" cy="113" r="7" fill="#1a3020" opacity="0.5"/>
        <rect x="20" y="138" width="136" height="50" rx="5" fill="#f4f7f4" stroke="#ccd8cc" strokeWidth="0.5"/>
        <rect x="28" y="146" width="60" height="7" rx="1" fill="#1a3020" opacity="0.6"/>
        <rect x="28" y="159" width="110" height="5" rx="1" fill="#ccd8cc"/>
        <rect x="28" y="170" width="80" height="5" rx="1" fill="#ccd8cc"/>
        <rect x="168" y="138" width="132" height="50" rx="5" fill="#f4f7f4" stroke="#ccd8cc" strokeWidth="0.5"/>
        <rect x="176" y="148" width="26" height="26" rx="3" fill="#1a3020" opacity="0.7"/>
        <rect x="208" y="148" width="26" height="26" rx="3" fill="#ccd8cc"/>
        <rect x="240" y="148" width="26" height="26" rx="3" fill="#b8962e" opacity="0.5"/>
        <rect x="176" y="179" width="80" height="4" rx="1" fill="#ccd8cc"/>
      </svg>
    ),
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
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem',
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
                {p.svg}
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
