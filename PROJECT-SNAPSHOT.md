# PROJECT-SNAPSHOT — Local Repair Pro Vancouver WA Demo

## Project Name
Local Repair Pro — Vancouver WA & Nearby Areas

## Live URL
https://proai-expert.com/handyman-vancouver-portland-demo/

## Repository
https://github.com/proaiexpert/handyman-vancouver-portland-demo

## Current Stable Commit
`9446655` — Polish request form state and submit label (latest)

**Homepage stable commit:** `1cda438` — Add head metadata and contrast-safe amber text

## Current Status
Production-like demo — stable. `noindex, nofollow` active. Not ready for real public launch.

**Pages:** Homepage (`/`) and Request Review page (`/request/`) are both active and client-demo ready.
**Request form:** Demo-safe only. No real endpoint connected. No real upload. No fake delivery claim.

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

- **Production website stable state:** `1cda438` — live homepage unchanged by documentation commits.
- **Documentation snapshot:** `4a85815` — README + PROJECT-SNAPSHOT.md created.
- **Website Production Factory extraction:** `ac85850` — factory docs extracted to `docs/website-production-factory/`.

---

## Next Recommended Steps

1. **Final optional real-device iPhone Safari screenshot** — confirm sticky CTA Call button
   visibility on actual device after commit `1cda438`.

2. **Real contact flow** — when real business data is available, wire up a form endpoint
   and replace the phone placeholder.

3. **Remove noindex + add sitemap entry** — only when the business is ready for real
   public indexing and all placeholder data has been replaced.

4. ~~**Website Production Factory extraction**~~ — **COMPLETED in `ac85850`.** Factory docs
   are in `docs/website-production-factory/`. See INDEX.md for reading order.

5. **Factory documentation consistency patch** — patch factory docs for consistency and
   handoff rules (Prompt 19 placeholders, Template 4 JS rule, ask-vs-assume rules, INDEX.md,
   CHANGELOG.md). Commit: this patch task.

6. **Optional: Package factory into portable skill** — after consistency patch, extract
   factory docs into a portable SKILL.md or Coworker skill for use in future chats.

7. **Next vertical startup** — use the factory workflow to build the next local-service
   demo site (plumber, electrician, landscaper, etc.).

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
