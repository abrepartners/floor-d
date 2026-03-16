

## Plan: Remove Hardwood Warranty + Wire Up Contact Form Email

### 1. Remove "25+ Year Warranty" from Hardwood

**`src/data/flooringCategories.ts`** — Remove `"25+ Year Warranty"` from the hardwood category's `features` array (line 35).

### 2. Make Contact Forms Send Detailed Emails to miket@floordarkansas.com

Currently both forms (`ContactForm.tsx` and `CTA.tsx`) have no submission logic — they just `preventDefault()` or do nothing.

**Approach**: Use a `mailto:` link as the action, or better — use **EmailJS** (free tier, no backend needed) to send a formatted email on submit.

Since this is a static frontend with no Supabase backend, **EmailJS** is the simplest option that sends a real email without exposing credentials. It requires:
- A free EmailJS account (public key goes in code, no secrets needed)
- An email template configured in EmailJS dashboard

**Alternative**: Use a simple `mailto:` link which opens the user's email client — less ideal for lead capture.

**Recommendation**: Use `mailto:` with a pre-filled subject/body as a quick solution that works immediately with no third-party setup. The form data gets encoded into a mailto link.

**Files to update**:
- **`src/components/ContactForm.tsx`** — Add state management for form fields, build a detailed `mailto:` link on submit with all fields (name, email, phone, flooring type, project details), and open it or use `window.location.href`
- **`src/components/CTA.tsx`** — Same treatment for the CTA section form

**Email format** will include:
- Subject: `New Floor'd Lead: [Flooring Type] — [First Name] [Last Name]`
- Body: All fields clearly labeled (name, email, phone, flooring type, project description, submission timestamp)

> **Note**: `mailto:` relies on the visitor having an email client. If you'd prefer leads sent server-side (so you get the email even if the visitor doesn't have a mail client), we'd need EmailJS or a Supabase edge function. Want me to go that route instead?

