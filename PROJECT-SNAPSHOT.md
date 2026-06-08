# PROJECT-SNAPSHOT — Local Repair Pro Vancouver WA Demo

## Project Name
Local Repair Pro — Vancouver WA & Nearby Areas

## Live URL
https://proai-expert.com/handyman-vancouver-portland-demo/

## Repository
https://github.com/proaiexpert/handyman-vancouver-portland-demo

## Current Stable Commit
`1cda438` — Add head metadata and contrast-safe amber text

## Current Status
Production-like demo — stable. `noindex, nofollow` active. Not ready for real public launch.

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

1. Header / mobile hamburger nav
2. Hero — "Thoughtful repairs. Noticeably better."
3. Repair Value — "Small fixes that change how a home feels."
4. Visual Scenarios — horizontal swipe card gallery
5. Services — full service list with card CTAs
6. Photo-Based Request Flow — 4-step process
7. Scope / Reviewed Carefully — scope-aware request section
8. Service Area — Vancouver-first, Clark County, Portland-area reviewed by scope
9. FAQ — details/summary accordion
10. Final CTA — "Have a repair list?"
11. Footer

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

## Next Recommended Steps

1. **Final optional real-device iPhone Safari screenshot** — confirm sticky CTA Call button
   visibility on actual device after commit `1cda438`.

2. **Real contact flow** — when real business data is available, wire up a form endpoint
   and replace the phone placeholder.

3. **Remove noindex + add sitemap entry** — only when the business is ready for real
   public indexing and all placeholder data has been replaced.

4. **Website Production Factory extraction** — use this demo as the reference template
   for the ProAI Expert Website Production Factory workflow. Extract the approved visual
   direction, section structure, CSS tokens, and content guardrails as a reusable template.

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
