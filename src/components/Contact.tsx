'use client'

import { useState } from 'react'

const inputStyle: React.CSSProperties = {
  background: 'rgba(247,244,239,0.06)',
  border: '1px solid rgba(247,244,239,0.12)',
  borderRadius: 'var(--r)',
  color: 'var(--bg)',
  fontFamily: 'var(--font-sans)',
  fontSize: '14px',
  fontWeight: 300,
  padding: '11px 14px',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    fname: '', lname: '', email: '', phone: '', service: '', message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-mono)', fontSize: '10px',
    color: 'rgba(247,244,239,0.4)', letterSpacing: '0.08em',
    textTransform: 'uppercase',
  }

  return (
    <section id="contact" style={{ padding: '110px 2.5rem', background: 'var(--ink)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)',
          letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem',
        }}>
          Get in touch
        </div>
        <h2 className="reveal" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
          fontWeight: 300, lineHeight: 1.08, color: 'var(--bg)',
          marginBottom: '0',
        }}>
          Let&apos;s build<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>something worth building.</em>
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr',
          gap: '6rem', marginTop: '3.5rem', alignItems: 'start',
        }} className="contact-layout">

          {/* Left info */}
          <div className="reveal">
            <p style={{
              fontSize: '15px', color: 'rgba(247,244,239,0.6)',
              lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem',
            }}>
              I take on a limited number of projects each month to keep the quality
              high and the communication direct. Fill out the form and I&apos;ll be
              in touch within a business day.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Location', val: 'Dallas, TX — available remotely' },
                { label: 'Response time', val: 'Within 1 business day' },
                { label: 'Availability', val: 'Taking projects now' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '14px', color: 'rgba(247,244,239,0.8)', fontWeight: 300 }}>
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="reveal" onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { name: 'fname', label: 'First name', placeholder: 'Jane', type: 'text', required: true },
                { name: 'lname', label: 'Last name', placeholder: 'Smith', type: 'text', required: false },
              ].map((f) => (
                <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={labelStyle}>{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    required={f.required}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(247,244,239,0.12)' }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={labelStyle}>Email address</label>
              <input
                type="email" name="email" placeholder="jane@company.com" required
                value={form.email} onChange={handleChange}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(247,244,239,0.12)' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={labelStyle}>Phone number</label>
              <input
                type="tel" name="phone" placeholder="(555) 555-5555"
                value={form.phone} onChange={handleChange}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(247,244,239,0.12)' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={labelStyle}>What are you looking to build?</label>
              <select
                name="service" value={form.service} onChange={handleChange}
                style={{ ...inputStyle, appearance: 'none', colorScheme: 'dark', backgroundColor: '#1a1814' }}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(247,244,239,0.12)' }}
              >
                <option value="">Select a service...</option>
                <option>Website or landing page ($1,200 – $2,000)</option>
                <option>Web app or internal tool ($2,500 – $6,500)</option>
                <option>AI integration ($1,500 – $3,500)</option>
                <option>Monthly retainer ($400 – $2,000/mo)</option>
                <option>Something else — let&apos;s talk</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={labelStyle}>Tell me about your project</label>
              <textarea
                name="message"
                placeholder="What are you building? What's the goal? Any timeline or budget context helps..."
                value={form.message} onChange={handleChange}
                rows={5}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(247,244,239,0.12)' }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              style={{
                alignSelf: 'flex-start', padding: '13px 28px',
                background: status === 'sent' ? '#2a4a2a' : 'var(--gold)',
                color: status === 'sent' ? '#9fe1cb' : 'var(--ink)',
                border: 'none', borderRadius: 'var(--r)',
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                fontWeight: 500, cursor: status === 'sent' ? 'default' : 'pointer',
                letterSpacing: '0.04em',
                transition: 'opacity 0.2s, transform 0.15s, background 0.3s',
                opacity: status === 'sending' ? 0.7 : 1,
              }}
              onMouseEnter={e => {
                if (status === 'idle') e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {status === 'idle' && 'Send message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && "Sent — I'll be in touch soon."}
              {status === 'error' && 'Something went wrong — try again'}
            </button>

            <p style={{ fontSize: '12px', color: 'rgba(247,244,239,0.3)', fontWeight: 300 }}>
              I&apos;ll get back to you within one business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
