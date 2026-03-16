

## Plan: Server-Side Lead Email via Lovable Cloud

Right now the contact forms use `mailto:` links, which only work if the visitor has an email client configured. To ensure every lead reaches the owner reliably, we need server-side email delivery.

### Approach

1. **Enable Lovable Cloud** — This gives us a Supabase backend with edge functions and the ability to send transactional emails.

2. **Create an edge function `send-lead-email`** — Accepts form data (name, email, phone, flooring type, message), validates it, and sends a richly formatted email to `miket@floordarkansas.com` using the Resend API (available via Lovable Cloud's email infrastructure).

3. **Update both forms (`CTA.tsx` and `ContactForm.tsx`)** — Replace the `mailto:` logic with a `fetch()` call to the edge function. Show a success toast on completion or an error toast if something fails. The visitor never needs an email client.

4. **Email format** — The owner receives a detailed email with:
   - Subject: `New Floor'd Lead: [Flooring Type] — [Name]`
   - Body: Name, email, phone, flooring type, project description, timestamp, source URL — all clearly formatted.

### Files changed
- `supabase/functions/send-lead-email/index.ts` (new)
- `supabase/config.toml` (new/updated)
- `src/components/CTA.tsx` — replace mailto with fetch to edge function
- `src/components/ContactForm.tsx` — same treatment

### What the owner gets
Every form submission triggers a real email to `miket@floordarkansas.com` — no visitor action required beyond clicking "Send It Over."

