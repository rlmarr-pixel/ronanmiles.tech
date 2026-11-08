# ronanmiles.tech

Static GitHub Pages site for [ronanmiles.tech](https://ronanmiles.tech/). The root page is branded Ronan Miles Tech (`index.html`, `styles.css`, `script.js`, and `assets/`). Pages still publishes the `main` branch root. `CNAME` stays `ronanmiles.tech`. This repository change does not touch DNS, MX, HTTPS enforcement, or any other domain.

## Previous landing page

A dated copy of the previous Ronan Miles Technology page, including its stylesheet, is in [`backup/2026-11-08/`](backup/2026-11-08/). That snapshot is unchanged.

- Site preview after merge: `https://ronanmiles.tech/backup/2026-11-08/`
- Local preview: open `backup/2026-11-08/index.html` (its `styles.css` is in the same folder)
- Rollback of the first replacement: copy that `index.html` and `styles.css` back to the repository root

## Active page

The layout started from a public reference read on November 7, 2026 (PT): https://rmarr127.wixsite.com/teksaas

The active name is Ronan Miles Tech. The reference wordmark is not on the page. Unverified client quotes are not on the page. The reference street address, example phone number, and example email are not on the page. The published enquiry address is `ronanmiles.tech@gmail.com`. The contact link and the enquiry button open a draft in the visitor’s email app. The visitor sends it. The page has no mail backend.

Service names and prices remain reference information. The page still says availability and current pricing need confirmation, and that no bookings are taken. The design-preview banner and `noindex, nofollow` stay until those details are approved.

## Interaction

- The menu button is mobile-only (viewport 760px and below). It toggles the navigation, Escape closes it, and choosing a link closes it. Desktop shows the links directly, with no menu button.
- With JavaScript off, the links stay visible and the draft button stays disabled.
- Service enquiry links select the matching service in the form.
- “Open email draft” builds a `mailto` link to `ronanmiles.tech@gmail.com` with the chosen service as the subject and the message as the body. It also shows the address and message so they can be copied if no email app opens. Nothing is sent until the visitor presses Send in that app.

## Assets

Photographs and fonts are the local files in `assets/`. The header name is text in the page font. Open the root `index.html` through a local static server so those files load:

`python3 -m http.server 8765 --bind 127.0.0.1`

Confirm the right to reuse the reference photographs before treating this as a finished public business site.

## Before calling this live

Confirm prices, availability, service claims, and image rights. Remove the draft labels and the `noindex` rule only after that approval.
