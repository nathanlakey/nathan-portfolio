import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { fname, lname, email, phone, service, message } = body

  if (!fname || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL

  if (!apiKey || !toEmail) {
    // In dev without env vars, just log and return success
    console.log('Contact form submission:', { fname, lname, email, phone, service, message })
    return NextResponse.json({ success: true })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Lakey Studio <nathan@lakeystudio.com>',
        to: [toEmail],
        reply_to: email,
        subject: `New project inquiry from ${fname} ${lname ?? ''}`.trim(),
        html: `
          <h2>New project inquiry</h2>
          <p><strong>Name:</strong> ${fname} ${lname ?? ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message?.replace(/\n/g, '<br>') ?? 'No message provided'}</p>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
