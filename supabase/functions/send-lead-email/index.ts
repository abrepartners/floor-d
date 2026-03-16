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

function buildEmailHtml(data: {
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
    const subject = `New Floor'd Lead: ${flooringLabel} — ${firstName} ${lastName}`
    const html = buildEmailHtml({ firstName, lastName, email, phone, flooringType, message })

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { error: enqueueError } = await supabase.rpc('enqueue_email', {
      queue_name: 'transactional_emails',
      payload: {
        to: 'miket@floordarkansas.com',
        subject,
        html,
        from_name: "Floor'd Website",
        reply_to: email,
        template_name: 'lead_notification',
      },
    })

    if (enqueueError) {
      console.error('Enqueue error:', enqueueError)
      return new Response(JSON.stringify({ error: 'Failed to send' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
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
