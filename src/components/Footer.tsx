export default function Footer() {
  return (
    <footer style={{
      background: 'var(--ink)',
      borderTop: '1px solid rgba(247,244,239,0.08)',
      padding: '1.5rem 2.5rem',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--font-mono)', fontSize: '11px',
        color: 'rgba(247,244,239,0.25)',
      }}>
        <span>© {new Date().getFullYear()} Nathan — Fort Worth, TX</span>
        <span>Next.js · Supabase · Vercel</span>
      </div>
    </footer>
  )
}
