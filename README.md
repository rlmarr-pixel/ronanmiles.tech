# ronanmiles.tech

Static GitHub Pages site for [ronanmiles.tech](https://ronanmiles.tech/). The root page is the TekSAAS design draft (`index.html`, `styles.css`, `script.js`, and `assets/`). Pages still publishes the `main` branch root. `CNAME` stays `ronanmiles.tech`. This repository change does not touch DNS, MX, HTTPS enforcement, or any other domain.

## Previous landing page

A dated copy of the previous Ronan Miles Technology page, including its stylesheet, is in [`backup/2026-11-08/`](backup/2026-11-08/).

- Site preview after merge: `https://ronanmiles.tech/backup/2026-11-08/`
- Local preview: open `backup/2026-11-08/index.html` (its `styles.css` is in the same folder)
- Rollback: copy that `index.html` and `styles.css` back to the repository root

## This draft

Open the root `index.html` through a local static server so the relative fonts and images load:

`python3 -m http.server 8765 --bind 127.0.0.1`

Then open http://127.0.0.1:8765/ . All runtime assets are local. There is no build step, account, network call, cookie, or analytics.

Reference: https://rmarr127.wixsite.com/teksaas — read from publicly served HTML on November 7, 2026 (PT). No authenticated access was used.

The source brands itself TekSAAS, with the headline “TECHNICAL EXCELLENCE AT SCALE,” IT support copy, Software Installation ($150 / 90 minutes), Tech Training ($200, marked ended on the reference), Tech Consultation ($120 / 60 minutes), four client quotes, an Our Mission section, and example-looking contact details. Source theme colors include `#0a0b0d`, `#2563eb`, `#f3f3f3`, and `#10b981`, with Syne and IBM Plex Sans. Images depict server facilities, technical collaboration, and an operations office.

This is a modern similar recreation of that reference, not an exact screenshot clone. Source business copy, prices, and quotes are preserved and are not independently verified. Contact details and the source “24/7 availability” claim stay marked unconfirmed. No new business metrics, endorsements, or credentials were added.

Wix member, subscription, notification, and category routes, booking and payment widgets, and generic social-platform home-page links were not reproduced. Support links lead to the on-page enquiry draft. The course-ended status is preserved. The page does not send messages, take bookings, or provide emergency assistance.

The page keeps its design-preview banner and `noindex, nofollow` while those details are unverified.

## Interaction

- The menu button is mobile-only (viewport 760px and below). It toggles the navigation, Escape closes it, and choosing a link closes it. Desktop shows the links directly, with no menu button.
- With JavaScript off, the links stay visible and the draft button stays disabled.
- Service enquiry links select the matching service in the form.
- “Prepare enquiry draft” writes plain text below the form. It sends nothing, saves nothing, and does not claim a message was sent. The reference phone, email, and street address are text only, because they look like examples.

## Asset provenance

Public source Wix media, optimized locally to WebP, plus the Latin WOFF2 files named by the source `@font-face` rules:

- `logo.png`, `hero.webp`, `mission.webp`, `software.webp`, `training.webp`, `consultation.webp` from `https://static.wixstatic.com/media/`
- `syne.woff2` and `body.woff2` from the source font files on `static.parastorage.com`

Confirm the right to reuse the source branding and images before treating this as a finished public business site.

## Before calling this live

Confirm the business identity, contact details, prices, availability, service claims, quote authenticity and permission, and asset rights. Connect a real support or booking flow only after that confirmation. Remove the draft labels and the `noindex` rule only after verification.
