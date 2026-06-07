'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '100px 2.5rem 80px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '6rem', alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* Left — headline */}
          <div>
            <div className="anim-1" style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: '1.75rem',
            }}>
              <span style={{ display: 'block', width: '28px', height: '1px', background: 'var(--gold)' }} />
              Available for new work
            </div>

            <h1 className="anim-2" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.2rem, 5.5vw, 5.8rem)',
              fontWeight: 300, lineHeight: 1.0,
              letterSpacing: '-0.01em', color: 'var(--ink)',
            }}>
              Software that<br />moves your<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>business forward.</em>
            </h1>
          </div>

          {/* Right — body */}
          <div className="anim-3">
            <p style={{
              fontSize: '16px', color: 'var(--ink2)', lineHeight: 1.8,
              fontWeight: 300, marginBottom: '2.5rem', maxWidth: '420px',
            }}>
              I build web applications and AI-powered tools for businesses that take
              their digital presence seriously. No agencies, no waiting rooms.
              Just working software.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-block', padding: '12px 26px',
                  background: 'var(--ink)', color: 'var(--bg)',
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  textDecoration: 'none', borderRadius: 'var(--r)',
                  letterSpacing: '0.04em', transition: 'background 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Start a conversation
              </a>
              <a
                href="#work"
                style={{
                  display: 'inline-block', padding: '12px 26px',
                  border: '1px solid var(--border)', color: 'var(--ink2)',
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  textDecoration: 'none', borderRadius: 'var(--r)',
                  letterSpacing: '0.04em', transition: 'border-color 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                See the work
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Full-stack: Next.js, Supabase, Tailwind, Vercel',
                'AI integrations: Claude API, OpenAI, automation workflows',
                'Based in Fort Worth, TX — available anywhere',
              ].map((cred) => (
                <div key={cred} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  fontSize: '13px', color: 'var(--muted)', fontWeight: 300,
                }}>
                  <span style={{
                    width: '4px', height: '4px', borderRadius: '50%',
                    background: 'var(--gold)', flexShrink: 0,
                  }} />
                  {cred}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
