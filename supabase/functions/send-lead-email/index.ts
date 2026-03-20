import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const FLOORING_LABELS: Record<string, string> = {
  hardwood: 'Hardwood',
  vinyl: 'Luxury Vinyl (LVP)',
  tile: 'Tile & Stone',
  laminate: 'Laminate',
  carpet: 'Carpet',
  other: 'Not Sure / Other',
}

function buildLeadNotificationHtml(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  flooringType: string
  message: string
}) {
  const flooringLabel = FLOORING_LABELS[data.flooringType] || data.flooringType || 'Not specified'
  const timestamp = new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a;">
  <div style="background: linear-gradient(135deg, #b8860b, #d4a843); padding: 24px; border-radius: 12px 12px 0 0;">
    <h1 style="margin: 0; color: #fff; font-size: 22px;">New Lead from Floor'd Website</h1>
  </div>
  <div style="border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 12px 12px; padding: 24px;">
    <h2 style="margin: 0 0 16px; font-size: 18px; color: #b8860b;">Contact Information</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${data.firstName} ${data.lastName}</td></tr>
      <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #b8860b;">${data.email}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #b8860b;">${data.phone}</a></td></tr>
    </table>
    <h2 style="margin: 0 0 16px; font-size: 18px; color: #b8860b;">Project Details</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <tr><td style="padding: 8px 0; color: #666; width: 120px;">Flooring Type</td><td style="padding: 8px 0; font-weight: 600;">${flooringLabel}</td></tr>
    </table>
    ${data.message ? `<div style="background: #f9f7f4; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0 0 8px; font-weight: 600; color: #666; font-size: 13px; text-transform: uppercase;">Project Description</p>
      <p style="margin: 0; line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</p>
    </div>` : ''}
    <p style="margin: 0; font-size: 12px; color: #999;">Submitted: ${timestamp} · Source: floord.lovable.app</p>
  </div>
</body>
</html>`
}

function buildConfirmationHtml(data: {
  firstName: string
  flooringType: string
  message: string
}) {
  const flooringLabel = FLOORING_LABELS[data.flooringType] || data.flooringType || 'Not specified'

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #f9f7f4; font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #b8860b, #d4a843); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
      <h1 style="margin: 0; color: #fff; font-family: 'Playfair Display', Georgia, serif; font-size: 28px; letter-spacing: 0.5px;">Floor'd</h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">Premium Flooring Solutions</p>
    </div>

    <!-- Body -->
    <div style="background: #ffffff; border: 1px solid #e5e5e5; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">

      <h2 style="margin: 0 0 8px; font-family: 'Playfair Display', Georgia, serif; font-size: 22px; color: #1a1a1a;">Thanks, ${data.firstName}!</h2>
      <p style="margin: 0 0 24px; line-height: 1.6; color: #555;">We've received your request and a member of our team will be in touch shortly to discuss your project.</p>

      <!-- Request Summary -->
      <div style="background: #f9f7f4; border-radius: 8px; padding: 20px; margin-bottom: 24px; border-left: 4px solid #b8860b;">
        <p style="margin: 0 0 8px; font-weight: 700; color: #b8860b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Your Request Summary</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #666; width: 120px;">Flooring Type</td><td style="padding: 6px 0; font-weight: 700;">${flooringLabel}</td></tr>
          ${data.message ? `<tr><td style="padding: 6px 0; color: #666; vertical-align: top;">Details</td><td style="padding: 6px 0; line-height: 1.5;">${data.message.length > 200 ? data.message.substring(0, 200).replace(/\n/g, '<br>') + '…' : data.message.replace(/\n/g, '<br>')}</td></tr>` : ''}
        </table>
      </div>

      <!-- What to Expect -->
      <h3 style="margin: 0 0 12px; font-family: 'Playfair Display', Georgia, serif; font-size: 18px; color: #1a1a1a;">What Happens Next?</h3>
      <ol style="margin: 0 0 24px; padding-left: 20px; line-height: 1.8; color: #555;">
        <li>Our team reviews your project details</li>
        <li>We'll reach out within 1 business day</li>
        <li>We'll schedule a free consultation at your convenience</li>
      </ol>

      <!-- Divider -->
      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;">

      <!-- Showroom Info -->
      <h3 style="margin: 0 0 12px; font-family: 'Playfair Display', Georgia, serif; font-size: 18px; color: #1a1a1a;">Visit Our Showroom</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr><td style="padding: 4px 0; color: #666; width: 80px;">Address</td><td style="padding: 4px 0;">5311 S 31st St, Fort Smith, AR 72901</td></tr>
        <tr><td style="padding: 4px 0; color: #666;">Phone</td><td style="padding: 4px 0;"><a href="tel:+14792352434" style="color: #b8860b; text-decoration: none;">(479) 235-2434</a></td></tr>
        <tr><td style="padding: 4px 0; color: #666;">Hours</td><td style="padding: 4px 0;">Mon–Fri 9am–5pm · Sat 10am–2pm</td></tr>
      </table>

      <p style="margin: 0; font-size: 13px; color: #999;">Have questions? Simply reply to this email and it will go directly to our team.</p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; font-size: 12px; color: #999;">
      <p style="margin: 0;">© ${new Date().getFullYear()} Floor'd Arkansas · All rights reserved</p>
    </div>
  </div>
</body>
</html>`
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, phone, flooringType, message } = await req.json()

    if (!firstName || !lastName || !email || !phone) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const flooringLabel = FLOORING_LABELS[flooringType] || flooringType || 'Not specified'
    const leadSubject = `New Floor'd Lead: ${flooringLabel} — ${firstName} ${lastName}`
    const leadHtml = buildLeadNotificationHtml({ firstName, lastName, email, phone, flooringType, message })
    const leadText = `New lead from Floor'd Website\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nFlooring Type: ${flooringLabel}\n${message ? `Message: ${message}` : ''}`

    const confirmSubject = `We got your request, ${firstName}!`
    const confirmHtml = buildConfirmationHtml({ firstName, flooringType, message })
    const confirmText = `Thanks, ${firstName}! We've received your request for ${flooringLabel} flooring and a member of our team will be in touch shortly.\n\nWhat Happens Next?\n1. Our team reviews your project details\n2. We'll reach out within 1 business day\n3. We'll schedule a free consultation\n\nVisit Our Showroom: 5311 S 31st St, Fort Smith, AR 72901\nPhone: (479) 235-2434`

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const SENDER_DOMAIN = 'notify.floordarkansas.com'
    const FROM_DOMAIN = 'floordarkansas.com'
    // The Lovable Email API requires a run_id to identify the project.
    // Use the Supabase project ref as the run identifier.
    const supabaseRef = Deno.env.get('SUPABASE_URL')?.match(/https:\/\/([^.]+)/)?.[1] || ''

    const leadMessageId = crypto.randomUUID()
    const confirmMessageId = crypto.randomUUID()

    // 1. Lead notification to Mike
    const { error: leadError } = await supabase.rpc('enqueue_email', {
      queue_name: 'transactional_emails',
      payload: {
        run_id: supabaseRef,
        message_id: leadMessageId,
        to: 'miket@floordarkansas.com',
        from: `Floor'd Website <noreply@${FROM_DOMAIN}>`,
        sender_domain: SENDER_DOMAIN,
        subject: leadSubject,
        html: leadHtml,
        text: leadText,
        purpose: 'transactional',
        label: 'lead_notification',
        reply_to: email,
        queued_at: new Date().toISOString(),
      },
    })

    if (leadError) {
      console.error('Lead enqueue error:', leadError)
      return new Response(JSON.stringify({ error: 'Failed to send' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // 2. Confirmation email to submitter
    const { error: confirmError } = await supabase.rpc('enqueue_email', {
      queue_name: 'transactional_emails',
      payload: {
        run_id: supabaseRef,
        message_id: confirmMessageId,
        to: email,
        from: `Floor'd <noreply@${FROM_DOMAIN}>`,
        sender_domain: SENDER_DOMAIN,
        subject: confirmSubject,
        html: confirmHtml,
        text: confirmText,
        purpose: 'transactional',
        label: 'lead_confirmation',
        reply_to: 'miket@floordarkansas.com',
        queued_at: new Date().toISOString(),
      },
    })

    if (confirmError) {
      console.error('Confirmation enqueue error:', confirmError)
      // Non-fatal: lead was already sent, just log the error
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Error:', err)
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
