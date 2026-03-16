

## Plan: Force-Clear Rate Limit and Trigger Email Processing

The two test emails (lead notification to miket@floordarkansas.com and confirmation to the submitter) are sitting in the queue, blocked by a rate-limit cooldown flag. Here's what I'll do:

### Steps

1. **Reset the rate-limit cooldown** — Update `email_send_state` to set `retry_after_until` to `NULL`, allowing the queue processor to resume immediately.

2. **Manually invoke the queue processor** — Call the `process-email-queue` edge function directly (with service-role auth) so the enqueued emails are processed right now instead of waiting for the next cron cycle.

3. **Verify delivery** — Query `email_send_log` to confirm the two messages moved from `pending` to `sent` status.

4. **Report results** — Share the delivery status so you know whether Mike's inbox should have the email.

### Technical Detail

- The cooldown is a single row in `email_send_state` (id=1) with a `retry_after_until` timestamp that causes the processor to skip all messages when it's in the future.
- The `process-email-queue` function requires a service-role JWT in the Authorization header, which is available via the edge function invocation tool.

