const faqs = [
  {
    q: "What is the difference between a website and a web app?",
    a: "A website is a marketing or informational site — think homepage, about page, services, contact form. A web app is anything that requires users to log in, store data, or interact with custom logic — dashboards, client portals, admin panels, renewal systems, and internal tools all fall here."
  },
  {
    q: "My project is more complex than a basic site. How do you price that?",
    a: "Every project is scoped before it's priced. If your project doesn't fit neatly into a category, we talk through what you need on a discovery call, I put together a detailed scope, and you get a flat price before any work begins. No hourly billing, no surprises."
  },
  {
    q: "Do you work with nonprofits or small budgets?",
    a: "Yes. If you have a real project and a real use case, reach out and let's talk. I won't waste your time if I can't help, and I'll always be upfront about what's realistic for your budget."
  },
  {
    q: "Do I own the code when the project is done?",
    a: "Yes, completely. Everything built for your project is yours — the code, the design, the deployment. No proprietary platforms, no lock-in. You can take it anywhere."
  },
  {
    q: "How long does a project actually take?",
    a: "A standard website typically takes 5–7 business days. A web app or more complex build usually takes 1–3 weeks depending on scope. Everything is agreed on upfront so you always know what to expect."
  },
  {
    q: "What do I need to have ready before we start?",
    a: "Not much. A general sense of what you need, who it's for, and what success looks like. I'll help you figure out the rest on the discovery call. The more context you can share, the better — but you don't need a formal brief or a finished design."
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes — every project includes a 30-day support window after launch. For ongoing updates, new features, and maintenance, most clients move to a monthly retainer. It's the easiest way to keep your product moving without starting from scratch every time."
  },
]

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: '110px 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)',
          letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem',
        }} className="reveal">
          Common questions
        </div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
          fontWeight: 300, lineHeight: 1.08, color: 'var(--ink)',
          marginBottom: '3.5rem',
        }} className="reveal">
          Before you reach out.<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Good questions to know.</em>
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '1px', background: 'var(--border)',
          border: '1px solid var(--border)', borderRadius: '10px',
          overflow: 'hidden',
        }} className="reveal">
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: 'var(--bg2)', padding: '2rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)' }}
            >
              <p style={{
                fontFamily: 'var(--font-serif)', fontSize: '1.15rem',
                fontWeight: 400, color: 'var(--ink)', marginBottom: '10px',
                lineHeight: 1.3,
              }}>
                {faq.q}
              </p>
              <p style={{
                fontSize: '13px', color: 'var(--muted)',
                lineHeight: 1.7, fontWeight: 300,
              }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
