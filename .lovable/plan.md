

## Plan: Add Confirmation Email to Form Submitters

Currently, when someone submits the contact or CTA form, only a notification email is sent to `miket@floordarkansas.com`. The submitter gets no email confirmation.

### What we'll build

**A branded confirmation email** sent to the person who filled out the form, thanking them and confirming Floor'd received their request. This covers both the `ContactForm` and `CTA` form (they share the same `send-lead-email` edge function).

### Changes

1. **Update `send-lead-email` edge function** to enqueue a second email (the confirmation) to the submitter's address, in addition to the existing lead notification to Mike. The confirmation email will:
   - Come from `notify@floordarkansas.com` with "Floor'd" as the sender name
   - Have a subject like "We got your request, {FirstName}!"
   - Use Floor'd branding (gold `#B8860B` accents, matching the auth email templates)
   - Include a summary of what they submitted (flooring type, message excerpt)
   - Include showroom address, phone number, and hours
   - Set reply-to as `miket@floordarkansas.com` so if they reply, it goes to Mike

2. **No frontend changes needed** — the `ContactForm` and `CTA` components both call the same `submitLeadForm` → `send-lead-email` function, so both forms get confirmation emails automatically.

3. **Redeploy** the `send-lead-email` edge function.

### Technical detail

Inside the edge function, after the existing `enqueue_email` call for the lead notification, we add a second `enqueue_email` call:
- `queue_name`: `transactional_emails`
- `to`: the submitter's email
- `subject`: confirmation subject
- `html`: branded confirmation template
- `from_name`: "Floor'd"
- `reply_to`: `miket@floordarkansas.com`
- `template_name`: `lead_confirmation`

