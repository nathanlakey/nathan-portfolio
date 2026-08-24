'use client'

const services = [
  {
    num: '01',
    name: 'Website or landing page',
    desc: 'A polished Next.js site that converts visitors into customers, built to load fast, rank well, and look like it costs twice as much.',
    includes: [
      'Up to 6 pages, Tailwind CSS, fully responsive',
      'Contact form, analytics, on-page SEO',
      'Deployed to Vercel with your custom domain',
    ],
    price: '$1,200 –\n$2,000',
    priceNote: 'flat rate',
    featured: true,
  },
  {
    num: '02',
    name: 'Web app or internal tool',
    desc: 'Custom dashboards, client portals, admin panels — anything that needs auth, a database, and real logic behind it.',
    includes: [
      'Next.js + Supabase + Clerk authentication',
      'Role-based access, CRUD operations',
      'Full documentation + 30-day support window',
    ],
    price: '$2,500 –\n$6,500',
    priceNote: 'flat rate',
    featured: false,
  },
  {
    num: '03',
    name: 'Automation & AI',
    desc: 'Add smart automation to your business — tools that write, respond, organize, and work in the background so you don\'t have to.',
    includes: [
      'Chatbots that answer customer questions 24/7',
      'Auto-generated content, reports, and marketing copy',
      'Document processing, lead qualification, and more',
    ],
    price: '$1,500 –\n$3,500',
    priceNote: 'flat rate',
    featured: false,
  },
  {
    num: '04',
    name: 'Monthly retainer',
    desc: 'Ongoing partnership for updates, new features, and maintenance. Most clients move here after their first project.',
    includes: [
      'Maintenance — 4 hrs/mo updates and fixes',
      'Growth — 8 hrs/mo, new features and SEO',
      'Fractional dev — 16 hrs/mo ongoing partner',
    ],
    price: '$400 –\n$2,000',
    priceNote: 'per month',
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '110px 2.5rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)',
          letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem',
        }}>
          What I build
        </div>
        <h2 className="reveal" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
          fontWeight: 300, lineHeight: 1.08, color: 'var(--ink)',
          marginBottom: '0',
        }}>
          Straightforward pricing.<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>No surprises.</em>
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr',
          gap: '6rem', marginTop: '3.5rem', alignItems: 'start',
        }} className="reveal services-layout">
          <div>
            <p style={{
              fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8,
              fontWeight: 300, marginBottom: '1.5rem',
            }}>
              Every project is scoped and priced upfront. You know exactly what
              you&apos;re getting before I write a single line of code.
            </p>
            <p style={{
              fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300,
            }}>
              50% at kickoff. 50% at delivery. No retainers required until you want one.
            </p>
            <p id="pricing-disclaimer" style={{
              fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8,
              fontWeight: 300, fontStyle: 'italic',
            }}>
              * Prices shown are estimates based on typical project scope. Every
              project is different — reach out and we&apos;ll get an accurate quote
              after a quick conversation.
            </p>
          </div>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: '1px',
            background: 'var(--border)', border: '1px solid var(--border)',
            borderRadius: '10px', overflow: 'hidden',
          }}>
            {services.map((s) => (
              <div
                key={s.num}
                style={{
                  background: s.featured ? 'rgba(184,150,46,0.12)' : 'var(--bg2)',
                  padding: '2rem 2.5rem',
                  display: 'grid', gridTemplateColumns: '1fr auto',
                  gap: '2rem', alignItems: 'start',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = s.featured
                    ? 'rgba(184,150,46,0.18)'
                    : 'var(--bg)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = s.featured
                    ? 'rgba(184,150,46,0.12)'
                    : 'var(--bg2)'
                }}
              >
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    color: 'var(--muted)', marginBottom: '8px', letterSpacing: '0.06em',
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-serif)', fontSize: '1.35rem',
                    fontWeight: 400, color: 'var(--ink)', marginBottom: '6px',
                  }}>
                    {s.name}
                  </div>
                  <div style={{
                    fontSize: '13px', color: 'var(--muted)',
                    lineHeight: 1.65, fontWeight: 300,
                  }}>
                    {s.desc}
                  </div>
                  <ul style={{
                    marginTop: '12px', listStyle: 'none',
                    display: 'flex', flexDirection: 'column', gap: '5px',
                  }}>
                    {s.includes.map((item) => (
                      <li key={item} style={{
                        fontSize: '12px', color: 'var(--muted)',
                        display: 'flex', gap: '8px',
                        alignItems: 'flex-start', fontWeight: 300,
                      }}>
                        <span style={{
                          color: 'var(--gold)', flexShrink: 0,
                          fontFamily: 'var(--font-mono)', fontSize: '11px',
                        }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)', fontSize: '1.6rem',
                    fontWeight: 300, color: 'var(--ink)', lineHeight: 1,
                    whiteSpace: 'pre-line',
                  }}>
                    {s.price}
                    <a href="#pricing-disclaimer" style={{ textDecoration: 'none' }}>
                      <sup style={{
                        fontSize: '12px', color: 'var(--gold)',
                        cursor: 'pointer', marginLeft: '2px',
                      }}>*</sup>
                    </a>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--muted)', marginTop: '4px',
                  }}>
                    {s.priceNote}
                  </div>
                  {s.featured && (
                    <span style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-mono)', fontSize: '9px',
                      padding: '3px 8px', background: 'var(--gold)',
                      color: '#fff', borderRadius: '3px',
                      letterSpacing: '0.06em', marginTop: '6px',
                    }}>
                      Most popular
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
