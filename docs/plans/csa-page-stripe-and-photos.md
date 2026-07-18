# CSA Page: Stripe Signup and Photos

## Context

[app/csa/page.tsx](../../app/csa/page.tsx) is a static page that mentions signing up "through the website for automatic payments," but no signup exists. The site has no backend, API routes, or Stripe dependencies, so a hosted Stripe Payment Link is the right fit — zero server code, Stripe hosts the checkout page.

## Part 1: Stripe Payment Link

Set up in Stripe (via the Stripe plugin after authenticating it, or in the Dashboard):

- **Product: "Herd Share"** — recurring price of $40/month, with adjustable quantity enabled so members can buy additional shares on the same link.
- **Product: "Herd Share Deposit"** — one-time $40 price, fixed quantity of 1, included as a second line item on the same Payment Link.

Note: the deposit is charged once per checkout, so a member adding shares later (in a separate checkout) would hit the deposit again. If that's a concern, we can create a second deposit-free Payment Link for additional shares and link both from the page.

## Part 2: Restructure the page like Old Souls Farm's herd share page

Rework the herd share content on [app/csa/page.tsx](../../app/csa/page.tsx) into the FAQ-style structure from oldsoulsfarm.co/pages/herdshare-info, adapted for Dream Dancin' Acres and a goat (caprine) herd:

- **Herd Share FAQs section** with question-style headings:
  - *What is a herd share?* — co-ownership arrangement for access to raw goat milk and dairy products.
  - *Why does Dream Dancin' Acres use a herd share?* — Oregon requirements for raw milk producers.
  - *How the herd share works* — one-time $40 deposit per member/family; joining makes you part owner of the goat herd.
  - *Monthly payment* — $40/month per share (1/2 gallon of milk per week or an applicable portion of cheese); additional shares $40/month with no extra deposit; drop-off locations in Eugene, Springfield, and Veneta; payment via cash, Venmo, or online automatic payments (Stripe link from Part 1).
- **Forms download section** ("Download and complete the 3 forms below to join"): copy the three PDFs from `docs/` into `public/forms/` with clean filenames (files outside `public/` can't be served by Next.js), then link them as downloads:
  - Caprine Agistment Agreement (`DreamDancin_Agistment Agreement_doc.docx.pdf`)
  - Caprine Labor Services Agreement (`DreamDancin_Herd Share Labor Services Agreement_doc.docx.pdf`)
  - Caprine Bill of Sale (`DreamDancin_Herd Share Bill of Sale_doc.docx.pdf`)
- **Questions section** at the bottom: keep the existing email CTA (no contact form, since the site has no backend) plus the online signup button.
- **Keep the existing CSA section** as-is below the herd share content.
- **Add photos** using `next/image`, following the rounded-image pattern from the home page, with goat photos from `public/2026 Babies/` as placeholders (easily swappable later).

No new dependencies, no API routes, no env vars needed.

## Implementation notes (completed July 17, 2026)

- Stripe products and Payment Link were created on the "Dream Dancin Acres sandbox" account. The existing Caprine Herd Share product's $40/month price was reused; a new one-time $40 Herd Share Deposit product was created. The Payment Link allows adjustable share quantity (1–10) with a fixed single deposit.
- The link is test-mode only. Before launch, recreate the products and Payment Link in live mode and update the `HERD_SHARE_SIGNUP_URL` constant at the top of `app/csa/page.tsx`.
- Form PDFs were copied to `public/forms/` as `caprine-agistment-agreement.pdf`, `caprine-labor-services-agreement.pdf`, and `caprine-bill-of-sale.pdf`.
