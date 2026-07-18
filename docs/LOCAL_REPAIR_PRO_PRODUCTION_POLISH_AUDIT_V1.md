# Local Repair Pro — Production-Like Polish Audit V1

**Status:** implementation baseline and internal audit  
**Project:** Local Repair Pro  
**Classification:** Website Concept · In Development  
**Repository:** `proaiexpert/handyman-vancouver-portland-demo`  
**Base branch:** `main`  
**Working branch:** `feature/local-repair-pro-production-polish-v1`  
**Initial remote `main` HEAD:** `8605bb1e61d5be44296ec130ccc45b1a65e53ed9`  
**Public preview:** `https://proai-expert.com/handyman-vancouver-portland-demo/`

## 1. Controlling truth

- Public name: **Local Repair Pro**.
- Descriptor: **Home Repair & Handyman Services**.
- Approved direction: **Premium Local Repair Pro — Pacific Northwest Edition**.
- Core line: **Thoughtful repairs. Noticeably better.**
- Primary CTA: **Request Estimate**.
- Secondary CTA: **Send Photos**.
- Primary geography: Vancouver, Washington and Clark County.
- Secondary geography: selected Portland-area requests reviewed by location, access and scope.
- This is a production-like concept and ProAI Expert Website Production Factory showcase.
- It is not a verified client engagement or proven operating business.
- No client, review, license, insurance, warranty, business result, operating address or performance metric may be invented.

## 2. Sources reviewed

### Portfolio sources

1. `proaiexpert/proaiexpert.github.io` → `docs/portfolio-case-packs/local-repair-pro/CASE_PACK.md` on `portfolio-rebrand-v1`.
2. `docs/portfolio-case-packs/PORTFOLIO_CASE_ART_DIRECTION_AND_MOTION_SYSTEM_V1.md`.
3. `docs/portfolio-case-packs/PORTFOLIO_REBRAND_CURRENT_HANDOFF.md`.

### Handyman repository sources

- `README.md`.
- `AGENT-STATUS.md`.
- `CHANGELOG.md` where present.
- `PROJECT-SNAPSHOT.md` where present.
- `docs/website-production-factory/HANDYMAN-V2-CASE-STUDY.md`.
- Website Production Factory workflow, prompt and QA documents referenced by the repository.
- Current HTML, CSS and JavaScript on `main`.
- Recent commit history through `8605bb1`.

Historical documents contain obsolete statements about old preview routes and a two-route architecture. Current repository state and the current portfolio case pack control when conflicts exist.

## 3. Current route inventory at baseline

### Primary public routes

| Route | Baseline role | Initial status |
|---|---|---|
| `/` | Homepage | Active |
| `/services/` | Service categories | Active |
| `/work-examples/` | Sample project scenarios | Active; long route candidate |
| `/request/` | Two-mode request UI | Active; JavaScript parse defect on remote baseline |
| `/service-area/` | Area hub | Active; long route candidate |
| `/pricing/` | Pricing approach | Active |
| `/guides/` | Planning guides hub | Active |
| `/about/` | Concept/business presentation | Active |
| `/faq/` | Frequently asked questions | Active |

### City pages

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

### Obsolete preview paths

Historical preview names, including `/homepage-v2-premium.html`, are not part of the commercial architecture and must not be restored as active content.

## 4. Initial asset inventory

### Confirmed shared assets

- `assets/css/preview-styles.css` — shared legacy stylesheet with preview-era and current-site rules mixed together.
- `assets/css/reveal-mobile-failsafe-93c4241.css` — cache-proof reveal fallback.
- `assets/js/preview-main.js` — homepage/shared interactions.
- `assets/js/menu-toggle.js` — menu, mobile header and sticky CTA controller for subpages.
- `assets/img/hero-finished-pnw-1536.webp` — approved hero visual.
- `assets/img/hero-finished-pnw-1200.webp` and related hero derivatives where present.
- Eight scenario images under `assets/img/scenarios/`.

### Missing production-like brand assets at baseline

- Original Local Repair Pro wordmark.
- Compact brand symbol.
- Monochrome and light-on-dark logo variants.
- Project-specific favicon system.
- Dedicated social preview image.

## 5. Defects and inconsistencies found

### P0

1. **Request page inline JavaScript parse error.**
   - Baseline string contains an unescaped apostrophe in `We'll` inside a single-quoted string.
   - Browser error: `Unexpected identifier 'll'`.
   - Impact: path selector, validation, submit interception and request-page FAQ listeners can fail to attach.

2. **Concept form language can imply a real request flow.**
   - The concept must explicitly prevent network submission and state that no personal information was sent or stored.

### P1

1. **Responsive navigation breakpoint conflict.**
   - `@media (min-width:760px)` and `@media (max-width:900px)` rules conflict.
   - At specific tablet/landscape widths the desktop navigation and hamburger can both be hidden.

2. **Inconsistent headers and footers.**
   - Several pages include page-local CSS and duplicated header/footer markup.
   - Navigation and footer changes are expensive and regression-prone.

3. **Placeholder contacts appear as operating contacts.**
   - Baseline includes `(777) 777-7777`, `tel:+17777777777` and `hello@localrepairpro.com`.
   - Replace consistently with reserved fictional contact data:
     - `(360) 555-0147`
     - `tel:+13605550147`
     - `sms:+13605550147`
     - `hello@localrepairpro.example`

4. **Public copy contains internal/demo language in ordinary sections.**
   - Work Examples and About contain repeated explanations of how a future real client build would work.
   - Guides includes “More coming” and future-roadmap language.
   - Consolidate status into one footer disclosure, legal pages and the form confirmation state.

5. **No privacy, terms or useful 404 pages.**

6. **No original logo system.**

### P2

1. **Horizontal overflow near 1024×768.**
   - Baseline QA reported desktop header actions extending beyond the viewport.

2. **Long route names.**
   - `/work-examples/` and `/service-area/` should move toward `/examples/` and `/areas/` with compatibility handling.

3. **Excessive card repetition and page-local style blocks.**

4. **No active-navigation normalization across every page.**

5. **No dedicated favicon/social image system.**

6. **No current repository-level `robots.txt` or sitemap, by design.**
   - All pages must remain `noindex, nofollow`.
   - Do not add concept pages to a production sitemap.

## 6. Retained decisions

- Keep the approved hero image and hero line.
- Keep deep navy, forest green, amber and warm off-white palette.
- Keep Vancouver-first positioning.
- Keep photo-based request guidance.
- Keep Request Estimate as primary CTA and Send Photos as secondary CTA.
- Keep scope-reviewed language and specialist boundaries.
- Keep sample scenarios, but present them as Common Project Types / Example Repair Scenarios.
- Keep Pricing Approach rather than fictional fixed pricing.
- Keep the city-page architecture while shortening canonical paths.
- Keep mobile Call / Text / Estimate actions using reserved concept-safe contact data.
- Keep all pages noindexed.

## 7. Planned route changes

| Old route | Canonical direction | Compatibility |
|---|---|---|
| `/work-examples/` | `/examples/` | Lightweight noindex compatibility page with immediate link/redirect |
| `/service-area/` | `/areas/` | Lightweight noindex compatibility page with immediate link/redirect |
| `/service-area/{city}/` | `/areas/{city}/` | Lightweight noindex compatibility pages |

The base path `/handyman-vancouver-portland-demo/` remains unchanged.

## 8. Brand normalization plan

Create a code-based SVG system using a controlled rectangular corner/door-frame geometry:

- horizontal dark wordmark;
- horizontal light wordmark;
- compact symbol;
- monochrome variant;
- favicon SVG.

Avoid house/hammer clipart, shields, mascots, certification seals and glossy 3D styling.

## 9. Content cleanup plan

Remove from ordinary customer-facing sections:

- repeated `demo` labels;
- “for a real client version” teaching modules;
- “more coming” language;
- prototype/future-roadmap language;
- fake form-success implications;
- placeholder-module explanations.

Retain one discreet footer disclosure:

> Concept website created by ProAI Expert. Local Repair Pro is not currently presented as an operating service business.

## 10. Current-reference benchmark

Narrow contemporary review focused on interaction principles rather than copying:

1. **SuperFix Handyman estimate flow** — `https://superfixhandyman.com/estimate/`
   - Useful principle: request description, photos and location before quote review.
2. **Servaura** — `https://servaura.com/`
   - Useful principle: strong process sequencing and restrained premium spacing.
3. **MARK Home Concierge** — `https://markhelps.com/`
   - Useful principle: concise service organization and clear “how it works” hierarchy.
4. **Geoffrey** — `https://www.geoffreyapp.com/`
   - Useful principle: location/ZIP as an early qualification step and compact action hierarchy.
5. **The Premium Handyman, Vancouver–Longview** — `https://thepremiumhandyman.com/`
   - Useful local comparison: prominent quote/contact flow, but also demonstrates the generic repetition and unstructured hierarchy Local Repair Pro should avoid.
6. **Rockness Home Services, Vancouver WA** — `https://rocknesshomeservices.com/`
   - Useful local comparison: direct local messaging and attachment-enabled quote request; Local Repair Pro should retain stronger visual and scope organization.

No external brand, layout, text, review, credential or result is copied into Local Repair Pro.

## 11. Test plan

### Static and source checks

- route existence;
- internal-link integrity;
- relative/base-path correctness;
- one H1 per page;
- canonical and noindex metadata;
- Open Graph/Twitter fields;
- duplicate titles/descriptions;
- placeholder/fake-proof search;
- image dimensions and alt text;
- JavaScript syntax;
- HTML parse sanity.

### Required rendered checks

- 1440 desktop;
- 1024 desktop/tablet landscape;
- 768 tablet portrait;
- 430, 390, 375, 360 and 320 mobile widths;
- short-height landscape;
- menu open/close, Escape and focus restoration;
- request modes and query parameter;
- no-JavaScript content availability;
- reduced motion;
- 200% and 400% zoom/reflow;
- sticky CTA/form collision;
- horizontal overflow;
- console errors;
- full-page screenshots.

## 12. Unresolved risks at audit creation

- This ChatGPT environment can modify GitHub through the connected app but does not currently expose a real browser/Playwright capture surface.
- Rendered QA and required screenshots must not be claimed unless an executable browser environment is available later in the task.
- The current public preview is sourced from `main`; this branch will not publish automatically unless separately merged/deployed.
- External scenario-image licensing cannot be inferred from repository content alone and remains subject to the actual source licenses.

## 13. Audit status

**Baseline recorded. Implementation proceeds only on `feature/local-repair-pro-production-polish-v1`.**
