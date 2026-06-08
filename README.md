# Local Repair Pro — Vancouver WA Demo

## Project Purpose

This is a production-like demo homepage for a local handyman / home repair service concept.
It serves as a test case for the broader **ProAI Expert Website Production Factory** workflow.

The site is demo-ready but not real public-launch-ready. Placeholder business data remains.
`noindex, nofollow` is intentionally active until real business facts are verified.

---

## Live URL

**Canonical root:** https://proai-expert.com/handyman-vancouver-portland-demo/

---

## Current Architecture

- `index.html` is the canonical root homepage.
- `request/index.html` is the Request Review page — active and client-demo ready.
- All old preview routes have been removed and return **404**.
- The root is no longer a preview hub. No route cards appear on the live root.
- Do not restore old preview routes.

### Active routes

| Route | Description |
|---|---|
| `/handyman-vancouver-portland-demo/` | Homepage — stable |
| `/handyman-vancouver-portland-demo/request/` | Request Review — demo-safe form, noindex active |

### Old routes (all 404 — do not restore)

- `/estimate-os.html`
- `/pnw-craft-board.html`
- `/hybrid-rotating-preview.html`
- `/hybrid-transformation.html`
- `/repairscope-transformation.html`
- `/final-hero-reference.html`
- `/final-hero-reference/`
- `/homepage-v2-premium.html`
- `/homepage-v2-premium/`

---

## Stable Commit History

| Commit | Type | Description |
|---|---|---|
| `01c97ca` | Website | Promoted final homepage to root, removed preview routes |
| `fa445e4` | Website | Fixed sticky CTA Call button visibility and overlap behavior |
| `1cda438` | Website | Added canonical, OG, Twitter, favicon, noindex; contrast-safe CTA text color |
| `4a85815` | Docs | Updated README and created PROJECT-SNAPSHOT.md for stable demo snapshot |
| `ac85850` | Docs | Extracted Website Production Factory docs to docs/website-production-factory/ |
| `7b038cd` | Website | Added /request/ page with request review structure |
| `894921e` | Website | Refined /request/ into two-path Quick Question / Repair Request form flow |
| `9446655` | Website | Polished active path state, robust submit label, form separation |

**Homepage stable commit: `1cda438`** — the homepage is unchanged since that commit.

**Request page commits:** `7b038cd` → `894921e` → `9446655` — added and refined the /request/ page.

**Request form:** Demo-safe only. No real endpoint. No real upload. noindex remains active.

---

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Canonical root homepage |
| `request/index.html` | Request Review page — two-path form, demo-safe, noindex active |
| `assets/css/preview-styles.css` | All styles including sticky CTA, mobile layout, contrast tokens |
| `assets/js/preview-main.js` | Shared JS (hamburger, FAQ, scenario swipe, scroll reveal) |
| `assets/img/hero-finished-pnw-1536.webp` | Approved hero image |

---

## Current Demo Limitations

This site is **not ready for real public launch** until the following are resolved:

- Placeholder phone: `tel:0000000000` — replace with real number
- No real contact form or submission endpoint
- No verified real business name, address, license, insurance, or reviews
- No `LocalBusiness` schema (intentionally omitted until facts are verified)
- No sitemap entry while `noindex` is active
- No real Google Map or exact service radius
- No real portfolio or completed project claims
- No real OG image (hero image used as fallback)
- No privacy policy or legal pages

---

## Fake-Proof Content Guardrails

### Forbidden claims — never add

- licensed *(as a self-claim)*
- insured
- bonded
- 5-star
- top-rated
- years of experience
- guaranteed
- same-day
- emergency / 24/7
- completed projects
- Our Work / portfolio
- real address
- exact service radius
- serving all Portland metro
- `LocalBusiness` schema with unverified facts

### Allowed language

- scope reviewed before scheduling
- request reviewed by location, project type, and scope
- photo-based request and review language
- some work may require permits, licensed trades, or a different provider

---

## QA Checklist

### Mobile widths
- [ ] 430x932
- [ ] 390x844
- [ ] 375x812
- [ ] 360x800
- [ ] 320x700

### Desktop widths
- [ ] 1440x900
- [ ] 1366x768

### Functional checks
- [ ] Sticky CTA appears after hero scroll, hides during scroll, reappears after stop
- [ ] Sticky CTA Call button readable on light and dark backgrounds
- [ ] Hamburger opens and closes correctly
- [ ] FAQ opens and closes correctly
- [ ] Scenario swipe works as internal horizontal scroll
- [ ] Service Area chips do not clip
- [ ] No horizontal body overflow
- [ ] Old routes return 404
- [ ] No forbidden claims in visible copy
- [ ] No console errors
- [ ] Required assets load (CSS, JS, hero image)
- [ ] /request/ path selector switches correctly (Quick Question / Repair Request)
- [ ] /request/ form validation works (required fields, focus, aria-live)
- [ ] /request/ demo-safe submit message appears (no fake delivery claim)
- [ ] /request/ footer and header links work

---

## Launch-Readiness Checklist

Before real public launch:

- [ ] Replace `tel:0000000000` with real phone number
- [ ] Connect real contact form endpoint to /request/ (Formspree, Netlify Forms, or similar)
- [ ] Verify real business name, address, license status, and service area
- [ ] Decide whether to remove `noindex, nofollow`
- [ ] Only then add this URL to `sitemap.xml`
- [ ] Add `LocalBusiness` schema only when facts are verified
- [ ] Add a dedicated OG image if needed
- [ ] Add privacy policy and legal pages if required

---

## Visual Direction

**Approved direction:** Premium Local Repair Pro — Pacific Northwest Edition

- Dark navy hero (`#102033`) with warm amber accents (`#C9822B`)
- Forest green secondary (`#243D32`)
- Warm off-white background (`#F7F2EA`)
- Georgia serif headings, system-ui body
- Floating pill sticky CTA dock (mobile only)
- Scroll-reveal sections

## Production Factory Documentation

This project includes a reusable workflow library extracted from the Handyman v2 build:

| File | Description |
|------|-------------|
| [WEBSITE-PRODUCTION-FACTORY.md](docs/website-production-factory/WEBSITE-PRODUCTION-FACTORY.md) | 20-phase master workflow for building handyman/service-business demo sites |
| [PROMPT-LIBRARY.md](docs/website-production-factory/PROMPT-LIBRARY.md) | 19 reusable prompt templates for every production phase |
| [QA-CHECKLISTS.md](docs/website-production-factory/QA-CHECKLISTS.md) | 20 QA checklists covering accessibility, SEO, mobile, and performance |
| [AGENT-TASK-TEMPLATES.md](docs/website-production-factory/AGENT-TASK-TEMPLATES.md) | 10 coding-agent task templates with guardrails and acceptance criteria |
| [HANDYMAN-V2-CASE-STUDY.md](docs/website-production-factory/HANDYMAN-V2-CASE-STUDY.md) | Full case study: decisions, fixes, and lessons from this build |

See [`docs/website-production-factory/`](docs/website-production-factory/) for the complete library.
