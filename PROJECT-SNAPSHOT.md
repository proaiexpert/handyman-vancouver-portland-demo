# PROJECT-SNAPSHOT — Local Repair Pro Vancouver WA Demo

## Project Name
Local Repair Pro — Vancouver WA & Nearby Areas

## Live URL
https://proai-expert.com/handyman-vancouver-portland-demo/

## Repository
https://github.com/proaiexpert/handyman-vancouver-portland-demo

## Current Approved Homepage Baseline
`1720619` — Polish homepage footer

**Live review URL:** https://proai-expert.com/handyman-vancouver-portland-demo/?v=1720619

**Homepage status:** Approved premium homepage baseline after full section-by-section polish.

## Current Status
Production-like demo — stable. `noindex, nofollow` active. Not ready for real public launch.

**Pages:** Homepage (`/`), Request Review page (`/request/`), and Services page (`/services/`) are active and client-demo ready.
**Request form:** Demo-safe only. No real endpoint connected. No real upload. No fake delivery claim.

---

## Current Homepage Section Stack

1. **Hero** — Premium homeowner-oriented hero. H1: Thoughtful repairs. Noticeably better. Primary CTA → request/. Secondary CTA → request/#photo-checklist. Mobile sticky CTA preserved.
2. **Repair Value / Details** — Premium detail-board section. Cards: Cleaner edges, Better touch-ups, Grouped punch-lists. CTA → request/#photo-checklist.
3. **Scenario Showcase** — Common repair scenario rail with 8 approved WebP images. Desktop auto-scroll / mobile swipe. Images: 01-trim-baseboard-refresh.webp, 02-kitchen-faucet-detail.webp, 03-door-hardware-details.webp, 04-bathroom-detail-touchup.webp, 05-entry-door-exterior-trim.webp, 06-washer-dryer-connection.webp, 07-tv-wall-mount-install.webp, 08-ceiling-light-fixture-install.webp.
4. **Services Scope Board** — Premium service scope board. CTA → request/#photo-checklist. Secondary → services/.
5. **Request Review Flow** — Three-step review section: Send photos → Scope reviewed → Next step clarified. CTA → request/. Secondary → request/#photo-checklist.
6. **Service Area / Local Request Review** — Premium Vancouver / Portland local-area block. H2: Vancouver, Portland, and nearby repair requests. Approved map: assets/img/service-area-vancouver-portland-map.webp (1400×1050px, 113,388 bytes). Approved source: assets/img/service-area-vancouver-portland-map-approved-source.webp. No exact radius, address, Google Map, or guaranteed coverage.
7. **FAQ** — Premium six-card FAQ block. Desktop: open card grid. Mobile: accordion. Mobile FAQ numbers hidden. CTA → request/#photo-checklist. No fake claims.
8. **Final CTA** — Premium dark-navy closing section with white rounded card. Eyebrow: READY TO SEND A REQUEST? H2: Start with photos, details, and your repair list. Primary CTA: Start a Repair Request → request/. Secondary CTA: Photo Checklist → request/#photo-checklist. Claim-safe copy.
9. **Footer** — Premium local-service footer. Brand: Local Repair Pro. Request links: request/, request/#photo-checklist, services/, #faq. Common request items → services/. Nearby request area items → #service-area. Location items: Vancouver WA, Portland OR, Camas, Washougal, Battle Ground, Ridgefield, Salmon Creek, Hazel Dell, Beaverton, Gresham. Future city-page links intentionally not active yet.

---

## Current Safety / Claim Guardrails

- No real address, phone, or email.
- No licensed/bonded/insured business self-claim.
- No guaranteed service radius or exact coverage area.
- No same-day / emergency / 24/7 claim.
- No fake reviews, star ratings, or completed project counts.
- No Google Map embed.
- No LocalBusiness schema until real business facts exist.
- No city SEO pages until pages are actually created.
- No broken future city links.
- Footer location items link to #service-area (future city pages may replace these).
- noindex,nofollow remains active for demo state.

---

## Active Pages

-  — Homepage
-  — Request Review page
-  — Services page

## Old Preview Routes (should remain 404)

- /homepage-v2-premium.html
- /homepage-v2-premium/
- /estimate-os.html
- /pnw-craft-board.html
- /hybrid-rotating-preview.html
- /hybrid-transformation.html
- /repairscope-transformation.html
- /final-hero-reference.html
- /final-hero-reference/

---

## Approved Visual Direction

**Premium Local Repair Pro — Pacific Northwest Edition**

- Dark navy hero: `#102033`
- Warm amber CTA: `#C9822B`
- Contrast-safe amber text: `#9E5F10` (via `--cta-text` token)
- Forest green secondary: `#243D32`
- Warm off-white background: `#F7F2EA`
- Georgia serif headings, system-ui body
- Floating pill sticky CTA dock (mobile only, scroll-pause behavior)
- Scroll-reveal sections

## Approved Hero Image
`assets/img/hero-finished-pnw-1536.webp`
Modern Pacific Northwest entryway with finished trim, warm wood, and dark front door.
Do not replace or crop without approval.

---

## Homepage Sections (in DOM order)

See **Current Homepage Section Stack** above for the authoritative section list.
Current approved stack (as of baseline `1720619`):

1. Hero
2. Repair Value / Details section
3. Scenario Showcase
4. Services Scope Board
5. Request Review Flow
6. Service Area / Local Request Review
7. FAQ
8. Final CTA
9. Footer

---

## Request Page Sections (`/request/`)

1. Header / mobile hamburger nav (shared nav pattern)
2. Hero — "Send a quick question or repair request."
3. Path selector — Quick Question / Repair Request (default: Repair Request)
4. Dynamic form area — fields update based on selected path
5. Photo checklist — Wide view, Close-up, Access, Matching area/scale
6. What happens next — 4-step scope review process
7. Service area reminder — Vancouver WA and nearby Clark County
8. FAQ — 7 questions about the two-path flow
9. Final CTA — scrolls back to form
10. Footer

---

## Key CSS Tokens

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#102033` | Dark navy — hero bg, text, borders |
| `--secondary` | `#243D32` | Forest green — accents |
| `--cta` | `#C9822B` | Amber — buttons, backgrounds, shadows |
| `--cta-text` | `#9E5F10` | Darker amber — text-only on light backgrounds (WCAG AA) |
| `--background` | `#F7F2EA` | Warm off-white page background |
| `--surface` | `#FFFFFF` | Card surfaces |
| `--text` | `#1D2329` | Body text |
| `--muted` | `#5F6B73` | Secondary text |

---

## Stable Commit Timeline

| Commit | Description |
|---|---|
| `01c97ca` | Promoted final homepage to root, removed preview routes |
| `fa445e4` | Fixed sticky CTA Call button visibility and overlap behavior |
| `1cda438` | Added canonical, OG, Twitter, favicon, noindex; contrast-safe CTA text |
| `1720619` | **Polish homepage footer — current approved website baseline** |
| `3ff5aeff` | Document approved homepage baseline (docs only) |

---

## Known Unresolved Demo Limitations

- `tel:0000000000` placeholder — not a real phone number
- No real contact form or submission endpoint
- No verified business name, address, license, insurance, or reviews
- No `LocalBusiness` schema
- Not in `sitemap.xml` (intentional while noindex is active)
- No real Google Map or exact service radius
- No real portfolio or completed project photos
- No dedicated OG image (hero image used as fallback)
- No privacy policy or legal pages
- H2 appears before H1 in DOM order (aside request card) — P2 accessibility item

---

## Do-Not-Touch List

- `index.html` — do not change page structure, hero, copy, or contact flow
- `assets/img/hero-finished-pnw-1536.webp` — approved hero, do not replace
- `assets/js/preview-main.js` — do not edit JS logic
- `sitemap.xml` — do not add this URL while noindex is active
- `robots.txt` — do not change
- Old preview routes — do not restore
- `noindex, nofollow` — do not remove until real launch decision is made
- Phone placeholder `tel:0000000000` — do not replace until real number is confirmed
- No `LocalBusiness` schema until business facts are verified
- No fake claims (see README Fake-Proof Content Guardrails)

---

## Commit State Summary

- **Production website stable state:** `1720619` — Polish homepage footer. Full homepage section-by-section polish completed.
- **Documentation baseline:** `3ff5aeff` — Document approved homepage baseline (docs only, no implementation changes).
- **Documentation snapshot (historical):** `4a85815` — README + PROJECT-SNAPSHOT.md created.
- **Website Production Factory extraction (historical):** `ac85850` — factory docs extracted to `docs/website-production-factory/`.

---

## Next Recommended Steps

1. **Optional final visual review** — confirm homepage at:
   https://proai-expert.com/handyman-vancouver-portland-demo/?v=1720619

2. **Polish request/index.html** — refine the request review page to match the premium homepage baseline.

3. **Polish services/index.html** — refine the services page if needed.

4. **Future /service-area/ or city pages** — create only when content strategy is approved. Do not create placeholder pages.

5. **Keep noindex active** — do not remove `noindex, nofollow` until real launch readiness is confirmed and all placeholder data is replaced.

6. **Real contact flow** — when real business data is available, wire up a form endpoint and replace the phone placeholder.

7. **Remove noindex + add sitemap entry** — only when the business is ready for real public indexing.

---

## QA Sign-Off (commit 1cda438)

| Check | Result |
|---|---|
| Root is final homepage | PASS |
| Old hub absent | PASS |
| Old routes 404 | PASS (all 9 checked) |
| No horizontal overflow | PASS |
| Service Area chips readable | PASS |
| Scenario swipe | PASS |
| FAQ | PASS |
| Hamburger | PASS |
| Sticky CTA Call on light bg | PASS |
| Sticky CTA Call on dark bg | PASS |
| Sticky CTA overlap | PASS |
| Desktop sticky CTA hidden | PASS |
| Canonical present | PASS |
| OG tags present | PASS |
| Twitter tags present | PASS |
| Favicon link present | PASS |
| noindex active | PASS |
| No forbidden claims | PASS |
| Console clean | PASS |
| Required assets 200 | PASS |

## Approved Baseline Sign-Off (commit 1720619)

Accepted project baseline based on section-by-section visual/implementation reports.

| Check | Result |
|---|---|
| Homepage lower-section polish completed | PASS |
| Service Area block redesigned with approved map asset | PASS |
| FAQ desktop open-card grid / mobile accordion | PASS |
| FAQ numbers hidden on mobile | PASS |
| Final CTA dark-navy premium section | PASS |
| Footer premium local-service layout | PASS |
| noindex, nofollow demo state preserved | PASS |
| No fake claims, radius, address, Google Map, or schema added | PASS |
| No implementation files changed in documentation commit | PASS |

## Production Factory Documentation

A reusable workflow library has been extracted from this build and stored in [`docs/website-production-factory/`](docs/website-production-factory/):

- **WEBSITE-PRODUCTION-FACTORY.md** — 20-phase master workflow
- **PROMPT-LIBRARY.md** — 19 reusable prompt templates
- **QA-CHECKLISTS.md** — 20 QA checklists
- **AGENT-TASK-TEMPLATES.md** — 10 coding-agent task templates
- **HANDYMAN-V2-CASE-STUDY.md** — Full case study from this build

---

## Known Limitations (as of 9446655)

- `tel:0000000000` remains placeholder — replace with real number before public launch
- Request form is demo-safe only — no real endpoint connected
- Contact endpoint must be connected before real launch (Formspree, Netlify Forms, or similar)
- Photo delivery/upload is not live — photo notes textarea used instead
- noindex,nofollow remains active — do not remove until real launch decision is made
- No sitemap entry for /request/ while noindex is active
- No LocalBusiness schema — intentionally omitted until facts are verified
