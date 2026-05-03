## What we'll do

1. Add the Premion base tracking pixel sitewide in `index.html` `<head>`.
2. Hold off on the conversion pixel inside `ContactForm.tsx` until Ivy answers our questions.
3. Send the revised text to Mike (in his corner) and the expanded email to Ivy (with Mike CC'd) that explains what we already did and asks the right testing/firing questions.

---

## Technical change (single edit)

**File:** `index.html` — inside `<head>`:

```html
<!-- Premion sitewide tracking pixel -->
<script async src="https://px.premion.com/pixel.js?pxid=69f386a87b3564981085685c"></script>
```

No changes to `ContactForm.tsx` or `submitLead.ts` yet. The conversion variant (`&conversion=1&saleamount=...`) stays out until Ivy clarifies.

---

## Text to Mike (personable, no em-dashes)

> Hey Mike, quick heads up on that Premion pixel stuff Ivy sent over. I went ahead and got the sitewide tracking piece live on floordarkansas.com so they're at least catching page views on their end. That part is handled.
>
> Wanted to be straight with you though, the snippet they sent looks pretty generic. Honestly it reads like a copy/paste of what they hand every advertiser, and it doesn't really line up with how your site actually works. The "conversion" version of their pixel has a `saleamount` field baked into it, which is meant for e-commerce checkouts where there's a cart total at the end. Your site is a lead site. Folks fill out the estimate form or call you, so there's no dollar amount sitting there to plug in. If we just dropped their snippet in as-is, it would either report $0 on every lead or just break.
>
> Before I flip that piece on I want to make sure we go the route that's best for YOU, not just whatever's easiest for the agency to report on. A few options on the table:
>
> 1. Leave `saleamount` off and just count form submits and phone clicks as conversions. Cleanest, no fake numbers.
> 2. Plug in an average job value so every lead reports the same estimated dollar amount. Makes their reports look prettier but it's not real revenue.
> 3. Only fire the conversion once a lead actually turns into a closed sale. Most accurate, takes a little more setup on our side.
>
> I sent Ivy a note asking her to clarify with you CC'd so you're in the loop on everything.
>
> Also, didn't you mention a while back that one of your flooring vendors gave you an embed code too? If that's a separate tracking thing, send it my way and I'll get it dropped in the same spot so nothing slips through the cracks. Just want to make sure you're set up the right way.

---

## Email reply to Ivy (Mike CC'd, no em-dashes)

**To:** Ivy Doyle (idoyle@thv11.com)
**CC:** Michael Treat (miket@floordarkansas.com)
**Subject:** Re: Floor'd Pixel implementation

> Hi Ivy,
>
> Just checking in on the Premion pixel for floordarkansas.com. We went through the snippet you sent and got the sitewide tracking script added to the head of every page, so page views should be flowing into your dashboard now. Whenever you get a chance, let us know you're seeing traffic come through on your end so we can confirm it's wired up correctly.
>
> Before we wire up the conversion variant, we wanted to flag a few things and get your guidance, since Floor'd is a lead-generation site with no online checkout:
>
> 1. The snippet you sent includes `saleamount=SaleAmountVariableName`. Since there is no transaction value at the moment of conversion, do you want us to (a) omit `saleamount` entirely, (b) pass a fixed estimated lead value, or (c) only fire the conversion later when a lead closes into an actual sale?
> 2. What should count as a conversion on Premion's side? The two main actions on the site are estimate form submissions and click-to-call taps on mobile. Happy to fire on one or both, just want to confirm what your reporting expects.
> 3. Any de-duplication or session logic we should know about so the same visitor isn't counted twice if they refresh or revisit?
>
> A couple of testing/QA items as well so we can verify things are firing correctly once the conversion piece is in:
>
> 4. Do you have a test or staging `pxid` we should use while validating, or should we fire test events against the live `pxid` and have you exclude them on your end?
> 5. Is there a Premion-side debug view or log we can look at to confirm a specific event was received (with timestamp), so we can match a known test submit to what you see?
> 6. Any expected delay between when an event fires in the browser and when it shows up in your reporting? Helps us avoid chasing a "missing" event that just hasn't ingested yet.
> 7. Should the conversion fire on the form's submit handler before the page transitions, or on a dedicated thank-you page view? We want to make sure the event isn't dropped due to navigation timing.
>
> Once we have those answers we can get the conversion piece in quickly and run a clean end-to-end test with you. Thanks for the help.
>
> Thomas
> on behalf of Floor'd Flooring + Finishes

---

After you approve, I'll add the base pixel to `index.html` and we'll wait on Ivy's reply before touching the form.
