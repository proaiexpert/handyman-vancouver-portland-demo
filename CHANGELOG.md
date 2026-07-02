## [Unreleased] — 2026-07-02

### fix: polish homepage areas and FAQ premium layout

**Homepage city block**
- Replaced flat chip spans (`local-area__groups`) with a responsive 3×2 linked city-card grid (`local-area__city-grid`)
- Amber left-border accent on primary cards (Vancouver WA, Portland OR); glass-effect on secondary cards
- "View all service areas →" amber link appended below grid
- Responsive: 2-col at ≤680px, 1-col at ≤400px

**FAQ — full premium rebuild** (663 lines, up from 350)
- Two-column dark-navy hero: H1 + lead text + amber CTA buttons left, info card right
- 12 accordion FAQ items (up from 7) with amber +/− icons
- 3-card support block: Pre-estimate checklist, Photos matter, Specialist disclaimer
- Full-width dark navy CTA strip with amber "Request Estimate" + outline "View Services" buttons
- FAQPage JSON-LD schema updated with all 12 questions
- noindex,nofollow preserved; all forbidden strings clear

**Footer standardization (all pages)**
- Canonical 6-city footer list applied to every HTML file:
  Vancouver WA / Portland OR / Camas WA / Battle Ground WA / Beaverton OR / Lake Oswego OR / View all service areas →
- Hillsboro OR removed from footer city lists across: homepage, services, work-examples, request, service-area/index, all 10 city pages
- FAQ footer already correct from rebuild

**QA**
- Forbidden-string scan: PASS (all `#1` hits are CSS hex color strings)
- noindex check: all 18 HTML files confirmed
- Width/container consistency: nav-inner 1160px, content 1080–1100px across inner pages

---
## [2026-07-02] — fix: align inner page scale with homepage

## [Phase 3 — Rendered Visual Audit] — 2026-07-02

### Audit Method
- Live rendered screenshots via headless browser of all 10 audited pages
- Full page classification: PASS / MINOR / THIN / BROKEN / INCONSISTENT
- Extended forbidden-strings QA scan across 16 HTML files

### Page Classification Results
| Page | Result |
|------|--------|
| / (homepage) | PASS |
| /services/ | PASS |
| /work-examples/ | PASS |
| /request/ | MINOR → fixed |
| /service-area/ | PASS |
| /faq/ | PASS |
| /service-area/vancouver-wa/ | PASS |
| /service-area/portland-or/ | PASS |
| /service-area/lake-oswego-or/ | PASS |
| /service-area/beaverton-or/ | PASS |

### Fixes
- `request/index.html` — Redundant secondary hero button "Request Estimate" changed to "View Services" (links to /services/)
- `index.html` — Desktop nav "How It Works" anchor changed to "Work Examples" page link (work-examples/)
- `service-area/beaverton-or/index.html` — "punch-list reviews" → "punch-list requests" (QA wording)
- `work-examples/index.html` — Demo note "reviews" → "client photos" (QA wording)

### QA
- Extended forbidden strings: **PASS** across all 16 HTML files
- noindex/nofollow: preserved
- No fake claims, ratings, or warranty language


### Changes
- **Shared CSS (preview-styles.css):** Added SCALE ALIGNMENT TOKENS section
  - Nav and footer inner: max-width → 1260px
  - Services hero-inner: max-width → 960px, H1 font-size → clamp(2.6rem,5vw,4rem)
  - Services content inner: max-width → 1260px
  - Work Examples hero: max-width → 960px, H1 font-size → clamp(2.6rem,5vw,4rem)
  - Work Examples gallery: max-width → 1260px
  - Work Examples card images: height → 340px
  - FAQ hero H1: font-size → clamp(2.6rem,5vw,4rem), max-width → 900px
  - FAQ accordion: max-width → 960px
  - Service Area hub H1: font-size → clamp(2.4rem,4.5vw,3.8rem)
  - Service Area hub inner: max-width → 1200px
  - City hero inner: max-width → 1200px
  - City hero H1: font-size → clamp(2.4rem,4.5vw,3.8rem)
  - Request page H1: font-size → clamp(2.4rem,4.5vw,3.8rem)
  - Request section inner: max-width → 900px
- **Services/Work-Examples/Request pages (inline HTML):** Hero padding upgraded to
  clamp(80px,10vw,130px) for premium breathing room
- **Service Area page:** Dark navy gradient hero + larger padding applied inline
- **All pages QA:** Search QA passed, visual scale QA passed

---

## Phase 2 Premium Demo Upgrade — 2026-07-02

### Pages Audited (16 HTML files)
| Page | Pre-upgrade Status | Action |
|---|---|---|
| / (homepage) | PASS | Lower-section container audit; no yellow buttons found |
| /services/ | THIN | Fixed: hero CTA button #facc15 yellow → #C9822B amber |
| /work-examples/ | THIN | Fixed: image card height 300px → 380px; added "How a real client uses this page" explanation block |
| /request/ | PASS | No changes needed |
| /service-area/ | PASS | No changes needed |
| /faq/ | THIN | Fixed: removed "Licensed · Background-checked" footer claim; fixed blue CTA button → amber; removed "free" from "Request a Free Estimate"; added pre-estimate checklist card and photos-help card |
| All 10 city pages | THIN | Fixed via shared CSS: city hero H1 upgraded from clamp(1.7rem, 3.5vw, 2.5rem) → clamp(2.2rem, 4vw, 3.2rem); hero padding 64px → 80px |

### Fixes Applied
- **faq/index.html**: Removed unsupported "Licensed · Background-checked" footer claim → replaced with scope disclaimer. Fixed CTA button blue → amber. Fixed "Request a Free Estimate" → "Request Estimate". Added pre-estimate checklist card + photos-help card section.
- **services/index.html**: Fixed `.svc-btn-primary` background from #facc15 (yellow) to #C9822B (amber), text color #1a1a1a → #fff. Hover state corrected.
- **work-examples/index.html**: Image card height increased from 300px to 380px. Added 4-step "How a real client uses this page" explanation block before CTA strip.
- **assets/css/preview-styles.css**: City hero H1 font-size upgraded. Hero padding increased. Blue hover states removed.

### Search QA (Step 16) — PASS
- No forbidden strings found across all 16 HTML files
- No fake reviews, ratings, guarantees, warranty, or insured claims
- No "free estimate", "Portfolio", "Lorem ipsum", "TODO", "coming soon"
- "licensed" appears only in correct context: "licensed trade specialist or contractor"
- "guaranteed" appears only in negative FAQ context
- noindex/nofollow preserved on all pages

### Remaining Minor Items
- Homepage narrow inner blocks (max-width 520–640px on some text sections) — these are intentional narrow prose containers, not layout bugs
- City hero H1 scale now upgraded via shared CSS; visual QA on live server recommended


## [Unreleased] — fix: unify premium visual system across all pages
### Date: 2026-07-01
### Previous HEAD: 36fe188

### Changes
- **Services hero**: replaced bright blue gradient with dark navy (#0d1c2e → #1a3a5c + amber) to match homepage palette
- **Services eyebrow**: fixed color (was #2563eb blue fallback, now #C9822B amber)
- **Services H1**: increased size to clamp(2rem,4.5vw,3.2rem) for stronger hierarchy
- **FAQ hero**: removed duplicate/conflicting CSS rules; fixed gradient end stop
- **City pages (×10)**: fixed malformed desktop nav (WE link was nested inside Services li)
- **City pages (×10)**: added Work Examples to mobile nav (was missing from all 10)
- **City pages (×10)**: injected dark navy hero override (background was var(--background) warm cream)
- **Work Examples**: fully rebuilt — 2-column × 4-row premium layout, 300px image height, dark navy hero, canonical nav/footer, no emoji, no forbidden strings
- **Search QA**: all 16 HTML files clean — no forbidden strings

---

## 2026-07-02 — Task 9/10: Visual polish, footer fix, Work Examples rebuild

### Fixed
- **Services page** (`/services/`): Full `svc-*` CSS block added — hero gradient, styled
  primary/secondary buttons, category card grid, review card grid, example chips,
  responsive mobile breakpoints. Page no longer renders as unstyled HTML.
- **Footer CSS** (`preview-styles.css`): Fixed conflicting `.footer-grid` rules that
  caused 3-column override at desktop widths. Added `:has(.footer-grid)` rule so
  inner pages (services, FAQ, city pages) get proper 4-column desktop layout.
  Removed erroneous `@media(min-width:1180px)` override that was collapsing to 3 cols.
- **FAQ page** (`/faq/`): Hero redesigned to match site design system — dark navy
  gradient (`#0d1c2e → #1a3a5c`), amber eyebrow (`#C9822B`), warm cream text.
  H1 updated to: "Common questions before requesting an estimate".
  Lead updated: "Photos, location, access, and project details help clarify scope."
- **Homepage**: Fixed aria-label `Start a repair request` → `Request an estimate`.
  Fixed explore card to use safe wording (removed `completed project examples`).

### Added / Rebuilt
- **Work Examples page** (`/work-examples/`): Rebuilt with all 8 real scenario images
  from `assets/img/scenarios/`. Each card now has actual photo (220px height),
  title, description, category label. Removed emoji placeholders entirely.
  Updated wording: "Sample repair and install scenarios" (no `completed projects`).
  Safe note retained: "Images and scenarios are used as sample project examples..."

### QA
- Search QA: All forbidden strings cleared (Request Review, completed projects,
  Start a Repair Request, insured, warranty, 5-star, Google reviews).
- `demo site` allowed only in work-examples safe note (acceptable per spec).
- All 15+ pages updated with Work Examples nav link.


## [2026-07-02] TASK 8 — Final Wording Cleanup

### Changed
- `index.html`: 3 aria-labels updated; visible CTA "Send photos for review →" → "Send Project Photos →"
- `service-area/*/index.html` (10 city pages):
  - h2 "Repair request review in [City]" → "Repair estimate process in [City]"
  - h2 "How request review works" → "How the estimate process works"
  - img alt "request review map" → "service area map"
  - meta/og descriptions: "handyman request review" → "handyman estimate process"
  - footer safety tagline: removed "Insured" (unsupported claim)
- `service-area/index.html`:
  - meta, og:description, twitter:description updated
  - img alt updated
  - Map caption: "General area shown for request review" → "General area shown for estimate requests"
  - h2 "How local repair request review works" → "How the local estimate process works"
  - h2 "Request review by city area" → "Estimate requests by city area"
  - FAQ answer updated
  - Footer: Insured removed
- `faq/index.html`: footer safety tagline: removed "Insured"

### Search QA Results
- "Request review": ZERO remaining
- "Repair request review": ZERO remaining
- "Send photos for review": ZERO remaining
- "Insured": ZERO remaining
- "warranty", "5-star", "Google reviews", "Demo site", "before launch": all ZERO
- "licensed trade specialist or contractor": 3 instances RETAINED (scope disclaimer — correct)

### Files Changed: 13
`index.html`, `faq/index.html`, `service-area/index.html`,
`service-area/battle-ground-wa/index.html`, `service-area/beaverton-or/index.html`,
`service-area/camas-wa/index.html`, `service-area/gresham-or/index.html`,
`service-area/hillsboro-or/index.html`, `service-area/lake-oswego-or/index.html`,
`service-area/oregon-city-or/index.html`, `service-area/portland-or/index.html`,
`service-area/tigard-or/index.html`, `service-area/vancouver-wa/index.html`

### Commit
- `fix: clean final client-demo wording`

---

## 2026-07-02 — Task 9: Visual polish + Work Examples page

### Added
- **Work Examples page** (`/work-examples/`) with 8 completed project cards
  - Drywall patch, TV mounting, door rehang, ceiling fan, washer pedestal,
    punch-list, baseboard caulk, screen door install
  - Each card: emoji visual, tag, title, description, location chips
  - Hero section + CTA strip matching site design system
- **Work Examples nav link** added to all 15+ pages (desktop + mobile + footer)
- **Homepage explore card** for Work Examples in the explore grid

### Fixed
- **Services page** (`/services/`) — injected full `svc-*` CSS: hero gradient,
  styled buttons (primary/secondary), category card grid, review card grid,
  example chips, mobile breakpoints
- **Footer CSS** — removed duplicate "City footer" block in `preview-styles.css`,
  consolidated `.footer-grid` to `2fr 1fr 1fr 1fr` and `.footer-bottom` to
  flex row with proper spacing
- **FAQ page** — aligned hero gradient to site palette (`#1e3a5f` to `#2563eb`)
- **City pages** — all 10 city pages now include Work Examples in nav/footer

### QA
- All 15+ pages verified: Work Examples link present in nav, mobile nav, footer
- Services page: `svc-hero`, `svc-btn-primary`, `svc-cat-card`, `svc-review-card`
  CSS all present and scoped
- Work Examples page: 8 cards, hero, footer, nav all present
- Shared CSS: no duplicate footer blocks, `.footer-grid` uses 4-col layout

## [2026-07-02] TASK 7 — Final Showroom QA + FAQ Schema + Client-Demo Readiness

### Added
- `faq/index.html`: FAQPage JSON-LD structured data (7 questions, matches visible page content; no fake claims)
- `faq/index.html`: `noindex,nofollow` robots meta (consistent with all other pages — was missing from TASK 6 build)

### QA Results — Step 1: Live Page Check
- All 7 checked pages return HTTP 200
- GitHub main HEAD confirmed at `7341dfe` before TASK 7 changes

### QA Results — Step 2: Visual / Structural QA
- site-header: present on all subpages (1 each); homepage uses custom `final-site-header` (intentional, has full mobile nav + sticky call/text CTA)
- footer-grid: present on all subpages and faq/ (1 each); homepage uses inline footer (intentional)
- hamburger-btn: 1 per subpage (CSS + HTML refs in request page = 3 hits, only 1 actual button element — correct)
- mobile-nav: 1 per subpage (correct)
- overflow-x protection confirmed in shared CSS (7 references)
- Viewport meta on all 15 HTML files
- noindex,nofollow: confirmed on ALL pages post-fix

### QA Results — Step 4: Link QA
- All nav links (Home / Services / Service Area / FAQ / Request Estimate) present on all pages
- All footer links correct including FAQ → /faq/ (no remaining #faq anchors anywhere)
- tel:+17777777777 / sms:+17777777777 / mailto:hello@localrepairpro.com all correct

### QA Results — Step 5: Search QA
- No Lorem ipsum, TODO, FIXME, 5-star, Google reviews, warranty, before launch, coming soon found
- "Request review" / "Repair request review": in aria-labels, meta descriptions, headings (contextual estimate workflow language — within allowed scope)
- "Send photos for review": homepage CTA link text (functional, not a prohibited claim)
- "Insured": footer safety tagline (pre-existing site content — not added by TASK 7)

### Commit
- `chore: finalize client-demo QA and FAQ schema`

---

## [2026-07-02] TASK 6 — FAQ Page + Final Client-Show QA

### Added
- `faq/index.html`: full FAQ page with canonical `site-header`, 7 `<details>` FAQ items, CTA strip, and canonical `site-footer`
- FAQ page includes: doctype, lang, charset, viewport, canonical meta, shared CSS link, hamburger JS, phone, email, all footer columns

### Changed
- Replaced all `#faq` anchor href fragments with real `/faq/` page links across 14 files:
  - `index.html`: nav (desktop + mobile), explore card, footer Pages column
  - `services/index.html`, `request/index.html`, `service-area/index.html`: nav + footer
  - `service-area/*/index.html` (10 city pages): nav + footer

### QA Results
- Visual QA: canonical `site-header` present on all 6 key pages; `footer-grid` and shared CSS confirmed on all subpages
- Technical QA on `faq/index.html`: doctype ✓, lang ✓, charset ✓, viewport ✓, canonical ✓, CSS link ✓, header ✓, mobile-nav ✓, hamburger JS ✓, footer-grid ✓, 7 FAQ items ✓, CTA ✓, phone ✓, email ✓
- Prohibited phrase search: no Lorem ipsum, TODO, FIXME, placeholder, coming soon, or under construction found
- Broken link check: zero `#faq` anchor fragments remain in any HTML file

### Commit
- `feat: add FAQ page and final client-show QA`

---

# Key Project Changelog — Local Repair Pro Vancouver WA Demo

This is a selected changelog of meaningful commits for this project.
It does not include every commit — only commits with documented, verified descriptions.

**Commit type labels:**
- `[Website]` — changes to production website files (index.html, CSS, JS, assets)
- `[Docs]` — changes to documentation files only (README, PROJECT-SNAPSHOT, docs/)

---

## Policy

- Future meaningful commits should be added to this file.
- Production website commits and documentation-only commits must be labeled separately.
- Do not add entries for commits whose descriptions are unknown or unverified.
- Major policy changes to factory docs (new forbidden claims, new phase gates, new guardrail rules)
  must be recorded here.

---

## Selected Commit History

### 2026-06-10 — Footer system polish and landscape refinement

Latest baseline: `87fcce0` — Refine footer layout for landscape viewports

| Commit | Type | Description |
|---|---|---|
| `35301dd` | Docs | Documented P1 accessibility and metadata cleanup (CHANGELOG and PROJECT-SNAPSHOT). |
| `a3640e6` | Website | Standardized footer structure across /request/, /services/, /service-area/, and all 10 city pages. Homepage premium footer was already correct and was left unchanged. Footer now follows a shared .site-footer system: brand/description/safety note, pages nav, request-area city links, copyright bottom bar. Normalized city page footer relative paths and copyright year to © 2026. Removed page-scoped inline footer CSS (rq-footer, svc-footer, sa-footer). No sitemap, schema, backend, assets/img, or business claims changed. |
| `87fcce0` | Website | Added CSS-only responsive footer layout for mobile landscape and small tablet widths. Breakpoint: @media (min-width: 500px) and (max-width: 900px) and (orientation: landscape). Brand/safety note spans full width at top. Navigation and request-type columns stack on the left. City/request-area links sit on the right. Homepage long city list uses 2-column CSS multi-column layout in landscape. Portrait mobile and desktop behavior unchanged. |

---


### 2026-06-09 — P1 accessibility and metadata cleanup

Latest baseline: `54d3a0f` — Add skip links and complete OG meta on main pages

| Commit | Type | Description |
|---|---|---|
| `6108350` | Docs | Documented current site baseline (CHANGELOG and PROJECT-SNAPSHOT). |
| `54d3a0f` | Website | Normalized skip-to-content links across all 4 main pages; standardized main page landmarks to `<main id="main-content">`; completed OG/Twitter metadata on /services/ and /service-area/; fixed /service-area/ heading hierarchy by changing city card titles from H2 to H3. Preserved noindex/nofollow demo state. No site copy, layout, sitemap, schema, backend, or asset changes were made. |

---

### 2026-06-09 — Services, service area, and city-page baseline

Latest baseline: `0c3ea36` — Add city page accessibility and meta polish

| Commit | Type | Description |
|---|---|---|
| `1e8384c` | Website | Polished /services/ into a premium service-category page. |
| `f42f433` | Website | Created /service-area/ as a premium Vancouver / Portland local request-review hub with 10 city request areas. |
| `5a60035` | Website | Created 10 city landing pages under /service-area/. |
| `68bc6b9` | Website | Polished city page copy to reduce template repetition. |
| `2a3852b` | Website | Consolidated duplicated city-page inline CSS into assets/css/preview-styles.css. |
| `2f85c1a` | Website | Added premium city-page visual treatment: hero improvements, map/reference card, breadcrumb, location-fit cards, improved cards/chips/CTA styling. |
| `e678478` | Website | Polished /service-area/ city hub cards to match the city-page visual system. |
| `0c3ea36` | Website | Added city-page accessibility/meta polish: OG title/description/url/type, skip-to-content links, and `<main id="main-content">`. Confirmed noindex/nofollow remains on all demo pages. Confirmed no fake claims, no radius claims, no phone/address/reviews/ratings, no Google Map, no schema, and no LocalBusiness markup were added. |

---

### Earlier commits

| Commit | Type | Description |
|---|---|---|
| `83e63f4` | Website | Fixed mobile clipping and initial sticky CTA / service area polish |
| `01c97ca` | Website | Promoted final homepage to root and removed all old preview routes |
| `fa445e4` | Website | Fixed sticky CTA Call button visibility (iOS Safari color inheritance) and overlap behavior |
| `1cda438` | Website | Added canonical, OG, Twitter, favicon, noindex meta; contrast-safe CTA text color (`--cta-text: #9E5F10`) |
| `4a85815` | Docs | Updated README.md and created PROJECT-SNAPSHOT.md for stable demo snapshot |
| `ac85850` | Docs | Extracted Website Production Factory workflow to `docs/website-production-factory/` |
| `cac39ed` | Docs | Patched factory docs consistency and handoff rules: commit-state terminology, GitHub-only/local export handoff rule, INDEX.md entry point, ask-vs-assume rules for Phases 2-3, versioning policy, Template 4 JS-edit gate, docs/ protection in Template 1, Prompt 19 reusable placeholders, QA severity upgrades, CHANGELOG.md |
| `503ee51` | Docs | Updated CHANGELOG.md with cac39ed entry |
| `66a3472` | Docs | Created SKILL.md (compact portable Website Production Factory entrypoint), SKILL-PACKAGE-NOTES.md (maintenance/export guide), updated INDEX.md reading order with SKILL.md as step 0 |
| `7b038cd` | Website | Added /request/ page with request review structure, photo checklist, FAQ, and demo-safe form |
| `894921e` | Website | Refined /request/ into two-path Quick Question / Repair Request form flow with unified contact field |
| `9446655` | Website | Polished active path state (Selected badge), robust submit label span, and subtle form separation |
| `1153f7f` | Website | Added /services/ page as a safe service-category/request-category page with 8 request categories, service-area reminder, licensed-trade disclaimers, FAQ, and CTAs to /request/ |
| `86ab48a` | Website | Fixed cross-page mobile navigation and footer CTA behavior; corrected /services/ mobile menu conflict, added services mobile bottom CTA, and verified footer consistency across active pages |
| `d1386f6` | Website | Fixed footer bottom safe-area/background gap and removed visible placeholder Call / Call Now CTAs while no real phone exists |
| `544e58a` | Website | Removed duplicate Request Review link in /services/ footer |
| `84ea02c` | Website | Upgraded homepage hero visual layout to a cleaner hybrid immersive image treatment, removed the heavy image overlay card, and moved request-review cues into a subtle micro-row |
| `3a3f49d` | Website | Refined homepage immersive hero layout so the image fills the right-side hero height, improves desktop above-the-fold CTA visibility, and preserves mobile hero stability |
| `b673140` | Website | Added homepage visual scenario rail section with safe scenario wording, scroll-snap behavior, and request-oriented repair-detail cards |
| `58010e0` | Website | Redesigned homepage scenario rail from an asymmetric grid into a uniform moving portrait-card showcase |
| `ed8555f` | Website | Refined homepage scenario showcase scale with larger cards, 8 scenario items, compact captions, and removed section-level CTA buttons |
| `e1050ca` | Website | Fixed mobile landscape scenario-card sizing and added desktop rail edge fades for a more premium showcase feel |
| `23d8325` | Assets | Added 8 web-ready handyman scenario image assets under assets/img/scenarios/ |
| `acf2915` | Website | Replaced repeated scenario image usage with 8 distinct scenario assets and updated card titles/copy to match each image |
| `d57be4a` | Website | Redesigned homepage Repair Value section into a premium detail-board bridge with stronger copy, unified right-side value panel, numbered detail cards, and photo-review CTA |
| `843f4f0` | Website | Polished homepage Repair Value board with stronger right-side visual weight, larger internal cards, refined markers, deeper premium shadow, and chip-based process row |
| `abe19cf` | Docs | Documented homepage Repair Value redesign in CHANGELOG |
| `21bb43e` | Website | Redesigned homepage Services section into a premium Services Scope board with grouped repair categories, scope-review copy, photo-review CTA, secondary services link, and removed generic service-card grid/icons |
| `f9c2093` | Website | Consolidated duplicated How It Works and Scope sections into a premium 3-step Request Review Flow with clearer process copy, conditional scope disclaimers, and request/photo-checklist CTAs |
| `1bbdc4f` | Website | Redesigned homepage Service Area section into a premium local-area review block with Vancouver / Portland positioning, grouped area chips, safer location/scope copy, and request/services CTAs |
| `e41a183` | Website | Refined Service Area block art direction: simplified heading, added location clarification micro-points, reduced city-chip density, improved Vancouver / Portland visual hierarchy |
| `cbc790b` | Website | Replaced inline SVG service-area map with a WebP image asset; preserved existing homepage img path (generated map, later replaced by approved asset) |
| `b21c244` | Assets | Added user-approved Service Area map source asset at assets/img/service-area-vancouver-portland-map-approved-source.webp without changing live markup |
| `d1c1423` | Website | Replaced live Service Area map image with approved user-supplied WebP asset; existing homepage img path unchanged |
| `af13bd8` | Website | Reworked homepage FAQ into a premium six-card reassurance section with centered heading, two-column desktop grid, homeowner-oriented answers, and compact photo-review CTA |
| `5cd5f2d` | Website | Added mobile-only FAQ accordion behavior while keeping desktop FAQ as open premium cards |
| `4e0bce6` | Website | Hid FAQ card numbers on mobile only; desktop card numbering and mobile accordion behavior preserved |
| `fc2b1d5` | Website | Rebuilt Final CTA into a premium two-zone closing panel with dark navy background, white rounded card, copper accent, request-focused copy, reassurance chips, and request/photo-checklist CTAs |
| `17fbd41` | Website | Refined Final CTA readability: left-aligned desktop text zone, improved mobile typography, cleaned body copy, replaced chips with clearer homeowner-oriented labels |
| `1720619` | Website | Upgraded footer into a premium local-service footer with brand summary, request links, common request links, future-safe location chips, and demo-safe copy |

---

## Notes on Earlier Commits

The following commit is referenced in project docs but its exact description is not fully verified:

- `171b471` — referenced as "improved sticky CTA contrast and mobile spacing" in task context

If this description is confirmed, add it to the table above between `01c97ca` and `fa445e4`.

---

## Stable Website Commit

The homepage is stable at commit `1cda438`. The /request/ page was added in `7b038cd` and refined through `9446655`.
The /services/ page was added in `1153f7f` and cross-page chrome was fixed through `544e58a`.
The /service-area/ hub was created in `f42f433`. Ten city pages were added in `5a60035` and polished through `0c3ea36`. P1 accessibility and metadata cleanup was completed in `54d3a0f`.
Footer system was standardized across all pages in `a3640e6`. Landscape footer layout was refined in `87fcce0`.
Documentation commits do not change the live site.
