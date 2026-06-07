const steps = [
  {
    num: '01',
    title: 'Discovery call',
    desc: 'A focused 30-minute conversation about what you need, what success looks like, and what budget makes sense.',
  },
  {
    num: '02',
    title: 'Proposal',
    desc: 'You receive a fixed price and a clear written scope the same day. No ambiguity, no hourly billing, no scope creep.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Regular updates and a staging link as it comes together. You see the work in progress, not just the final result.',
  },
  {
    num: '04',
    title: 'Handoff',
    desc: 'Live on your domain, fully documented, with a 30-day support window. The beginning of a working relationship, not the end.',
  },
]

export default function Process() {
  return (
    <section id="process" style={{ padding: '110px 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', marginBottom: '4rem', alignItems: 'end',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              How it works
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 300, lineHeight: 1.08, color: 'var(--ink)',
            }}>
              Simple from<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>start to launch.</em>
            </h2>
          </div>
          <p style={{
            fontSize: '15px', color: 'var(--muted)',
            fontWeight: 300, lineHeight: 1.7, maxWidth: '400px',
          }}>
            No project managers, no hand-offs, no status update emails. You work
            directly with the person building your product, start to finish.
          </p>
        </div>

        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          border: '1px solid var(--border)', borderRadius: '10px',
          overflow: 'hidden', background: 'var(--border)', gap: '1px',
        }}>
          {steps.map((s) => (
            <div
              key={s.num}
              style={{ background: 'var(--bg2)', padding: '2rem 1.5rem', transition: 'background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)' }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)',
                letterSpacing: '0.08em', marginBottom: '1.25rem',
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: '1.15rem',
                fontWeight: 400, color: 'var(--ink)', marginBottom: '8px',
              }}>
                {s.title}
              </div>
              <div style={{
                fontSize: '13px', color: 'var(--muted)',
                lineHeight: 1.65, fontWeight: 300,
              }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
