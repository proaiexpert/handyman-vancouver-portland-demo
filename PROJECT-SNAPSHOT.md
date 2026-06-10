# PROJECT-SNAPSHOT — Local Repair Pro Vancouver WA Demo

## Project Name
Local Repair Pro — Vancouver WA & Nearby Areas

## Live URL
https://proai-expert.com/handyman-vancouver-portland-demo/

## Repository
https://github.com/proaiexpert/handyman-vancouver-portland-demo

## Current Latest Baseline
`0c3ea36` — Add city page accessibility and meta polish

**Previous homepage baseline:** `1720619` — Polish homepage footer

---

## Current Status
Production-like demo — stable. `noindex, nofollow` active on all pages. Not ready for real public launch.

**Demo state:** All pages remain noindex,nofollow. Sitemap/schema/indexing should wait until real business facts and launch plan are confirmed.

---

## Current Page Inventory

### Main pages
- `/` — Homepage
- `/request/` — Request Review page
- `/services/` — Services page
- `/service-area/` — Service Area hub

### City pages (10)
- `/service-area/vancouver-wa/`
- `/service-area/portland-or/`
- `/service-area/hillsboro-or/`
- `/service-area/beaverton-or/`
- `/service-area/gresham-or/`
- `/service-area/tigard-or/`
- `/service-area/lake-oswego-or/`
- `/service-area/oregon-city-or/`
- `/service-area/camas-wa/`
- `/service-area/battle-ground-wa/`

---

## Current Completed Page Status

### Homepage (`/`)
- Polished premium local repair homepage
- Service-area block present
- Footer links updated to real city pages

### Request page (`/request/`)
- Polished
- Path selector polished
- Safety notes compact
- Conversion-focused request form intact

### Services page (`/services/`)
- Polished premium service-category page
- Request categories framed as reviewable request types
- No guaranteed-service claims

### Service Area page (`/service-area/`)
- Premium local hub
- 10 city request areas
- Real links to city pages
- Approved map asset used
- Claim-safe request-review language

### City pages (10)
- 10 city pages created
- Copy differentiated by city
- Premium visual treatment added
- Shared CSS consolidated into assets/css/preview-styles.css
- Breadcrumbs added
- Map/reference cards added
- Location-fit cards added
- OG tags added (og:title, og:description, og:type, og:url)
- Skip links added (class="skip-link" href="#main-content")
- `<main id="main-content">` added
- noindex/nofollow preserved

---

## Current City Page List

| City | URL |
|---|---|
| Vancouver, WA | /service-area/vancouver-wa/ |
| Portland, OR | /service-area/portland-or/ |
| Hillsboro, OR | /service-area/hillsboro-or/ |
| Beaverton, OR | /service-area/beaverton-or/ |
| Gresham, OR | /service-area/gresham-or/ |
| Tigard, OR | /service-area/tigard-or/ |
| Lake Oswego, OR | /service-area/lake-oswego-or/ |
| Oregon City, OR | /service-area/oregon-city-or/ |
| Camas, WA | /service-area/camas-wa/ |
| Battle Ground, WA | /service-area/battle-ground-wa/ |

---

## Claim-Safety Guardrails

The site avoids all of the following:

- Exact radius
- 30-mile / 50-mile claims
- Same-day
- Emergency
- 24/7
- Guaranteed coverage
- Free estimate guarantee
- Real address
- Phone / tel links
- Fake reviews
- Ratings
- Licensed/bonded/insured self-claims
- Google Map embed
- LocalBusiness schema

**Safe language still used:**
- Requests reviewed by photos, location, access, materials, and scope
- No guarantee of availability
- Some work may require licensed trade specialist or contractor

---

## Demo / Noindex State

- All pages remain `noindex,nofollow`
- Sitemap/schema/indexing should wait until real business facts and launch plan are confirmed
- Do not remove noindex until a real launch decision is made and all placeholder data is replaced

---

## Next Possible Work

- Final visual spot-check after GitHub Pages propagation
- Optional production-readiness checklist
- Optional sitemap/schema only after real launch facts are verified
- Optional real business contact/trust layer once actual business facts exist

---

## Current Homepage Section Stack

1. **Hero** — Premium homeowner-oriented hero. H1: Thoughtful repairs. Noticeably better. Primary CTA → request/. Secondary CTA → request/#photo-checklist. Mobile sticky CTA preserved.
2. **Repair Value / Details** — Premium detail-board section. Cards: Cleaner edges, Better touch-ups, Grouped punch-lists. CTA → request/#photo-checklist.
3. **Scenario Showcase** — Common repair scenario rail with 8 approved WebP images. Desktop auto-scroll / mobile swipe.
4. **Services Scope Board** — Premium service scope board. CTA → request/#photo-checklist. Secondary → services/.
5. **Request Review Flow** — Three-step review section: Send photos → Scope reviewed → Next step clarified. CTA → request/.
6. **Service Area / Local Request Review** — Premium Vancouver / Portland local-area block. Approved map asset used.
7. **FAQ** — Premium six-card FAQ block. Desktop: open card grid. Mobile: accordion.
8. **Final CTA** — Premium dark-navy closing section with white rounded card.
9. **Footer** — Premium local-service footer. Location items now link to real city pages.

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

## Stable Commit Timeline

| Commit | Description |
|---|---|
| `01c97ca` | Promoted final homepage to root, removed preview routes |
| `fa445e4` | Fixed sticky CTA Call button visibility and overlap behavior |
| `1cda438` | Added canonical, OG, Twitter, favicon, noindex; contrast-safe CTA text |
| `1720619` | Polish homepage footer — approved homepage baseline |
| `3ff5aeff` | Document approved homepage baseline (docs only) |
| `1e8384c` | Polish /services/ |
| `f42f433` | Create /service-area/ hub with 10 city areas |
| `5a60035` | Add 10 city landing pages |
| `68bc6b9` | Polish city page copy |
| `2a3852b` | Consolidate city-page CSS |
| `2f85c1a` | Add premium city-page visual treatment |
| `e678478` | Polish service area city hub cards |
| `0c3ea36` | **Add city page accessibility and meta polish — current latest baseline** |

---

## Do-Not-Touch List

- `index.html` — do not change page structure, hero, copy, or contact flow
- `assets/img/hero-finished-pnw-1536.webp` — approved hero, do not replace
- `assets/js/preview-main.js` — do not edit JS logic
- `sitemap.xml` — do not add URLs while noindex is active
- `robots.txt` — do not change
- Old preview routes — do not restore
- `noindex, nofollow` — do not remove until real launch decision is made
- No `LocalBusiness` schema until business facts are verified
- No fake claims (see README Fake-Proof Content Guardrails)
- `assets/img/*` — do not add or replace image assets without approval

---

## Known Unresolved Demo Limitations

- No real contact form or submission endpoint
- No verified business name, address, license, insurance, or reviews
- No `LocalBusiness` schema
- Not in `sitemap.xml` (intentional while noindex is active)
- No real Google Map or exact service radius
- No real portfolio or completed project photos
- No dedicated OG image for city pages
- No privacy policy or legal pages

---

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

## Production Factory Documentation

A reusable workflow library has been extracted from this build and stored in [`docs/website-production-factory/`](docs/website-production-factory/):

- **WEBSITE-PRODUCTION-FACTORY.md** — 20-phase master workflow
- **PROMPT-LIBRARY.md** — 19 reusable prompt templates
- **QA-CHECKLISTS.md** — 20 QA checklists
- **AGENT-TASK-TEMPLATES.md** — 10 coding-agent task templates
- **HANDYMAN-V2-CASE-STUDY.md** — Full case study from this build
