'use client'

import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100, padding: '0 2.5rem', height: '60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(247,244,239,0.9)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 400, color: 'var(--ink)' }}>
        <span style={{ color: 'var(--ink)' }}>Lakey</span><span style={{ color: 'var(--gold)' }}>.</span>
      </span>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {['Work', 'Services', 'Process', 'Contact'].map((item) => (
          <li key={item} className="hidden md:block">
            <a
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '12px', fontWeight: 400, color: 'var(--muted)',
                textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          padding: '8px 18px', background: 'var(--ink)', color: 'var(--bg)',
          textDecoration: 'none', borderRadius: 'var(--r)', letterSpacing: '0.04em',
          transition: 'background 0.2s, transform 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(0)' }}
      >
        Start a project
      </a>
    </nav>
  )
}
