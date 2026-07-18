# Local Repair Pro — Production-Like Polish Audit V1

**Project:** Local Repair Pro  
**Descriptor:** Home Repair & Handyman Services  
**Classification:** Website Concept · In Development  
**Repository:** `proaiexpert/handyman-vancouver-portland-demo`  
**Base branch:** `main`  
**Working branch:** `feature/local-repair-pro-production-polish-v1`  
**Exact initial remote `main` HEAD:** `8605bb1e61d5be44296ec130ccc45b1a65e53ed9`  
**Public preview:** `https://proai-expert.com/handyman-vancouver-portland-demo/`

## 1. Executive audit result

The baseline was a visually developed but internally inconsistent demo. It had a strong approved homepage direction, useful service content and broad route coverage, but still behaved like an accumulated preview repository rather than a coherent production-like local-service website.

The working branch now has:

- one Local Repair Pro brand and descriptor;
- an original architectural SVG identity;
- a shared header, footer, responsive and interaction system;
- complete customer-facing primary pages;
- short canonical Examples and Service Area routes;
- ten concise canonical city-area pages;
- compatibility handling for old long routes;
- a concept-safe request preview with no data transmission;
- safe fictional contact details;
- Privacy, Terms, HTML sitemap and 404 pages;
- restrained motion with reduced-motion handling;
- noindex/no-schema/no-analytics safeguards;
- one discreet concept disclosure rather than repeated internal demo messaging.

The branch is materially more production-like at source level. It is **not ready for owner visual review** until actual rendered QA and the required screenshots are produced in a browser-capable environment.

## 2. Controlling sources

### Portfolio sources read completely

1. `proaiexpert/proaiexpert.github.io` → `docs/portfolio-case-packs/local-repair-pro/CASE_PACK.md` on `portfolio-rebrand-v1`.
2. `docs/portfolio-case-packs/PORTFOLIO_CASE_ART_DIRECTION_AND_MOTION_SYSTEM_V1.md`.
3. `docs/portfolio-case-packs/PORTFOLIO_REBRAND_CURRENT_HANDOFF.md`.

### Handyman repository sources reviewed

- `README.md`.
- `AGENT-STATUS.md`.
- recent commit history through the initial HEAD;
- current public HTML routes;
- shared and page-local CSS;
- shared and inline JavaScript;
- `docs/website-production-factory/HANDYMAN-V2-CASE-STUDY.md`;
- referenced Website Production Factory workflow and QA documentation.

Where historical documents conflicted with the current repository or portfolio case pack, current repository state and current case-pack truth controlled.

## 3. Locked truth retained

- Name: **Local Repair Pro**.
- No `LLC` added.
- No Horp LLC details used.
- Core line retained: **Thoughtful repairs. Noticeably better.**
- Primary geography: Vancouver, Washington and Clark County.
- Secondary geography: selected Portland-area requests reviewed by location, access and scope.
- Primary CTA: **Request Estimate**.
- Secondary CTA: **Send Photos**.
- Approved navy / forest / amber / warm-stone palette retained.
- Approved finished Pacific Northwest entryway hero retained.
- Project remains a concept, not a verified client or operating business.

## 4. Forensic baseline findings

### P0 findings at initial HEAD

1. Request-page inline JavaScript contained an unescaped apostrophe in `We'll`, producing `Unexpected identifier 'll'` and preventing the script block from attaching interactions.
2. Form language and behavior did not sufficiently guarantee that concept users could not transmit personal information.

### P1 findings

1. Responsive navigation rules had an overlap/gap around tablet and landscape widths.
2. Header/footer implementations and page-local style blocks were duplicated and inconsistent.
3. Placeholder `(777) 777-7777` and `hello@localrepairpro.com` appeared as operating contacts.
4. Public pages contained repeated internal/demo/future-client explanations.
5. No original logo system.
6. No Privacy, Terms or useful 404 pages.

### P2 findings

1. Desktop header actions could overflow near 1024×768.
2. `/work-examples/` and `/service-area/` were longer than necessary.
3. Old route and documentation statements conflicted with the current architecture.
4. Card-heavy page-local systems reduced coherence.
5. No dedicated project favicon system.

## 5. Asset inventory and changes

### Retained image assets

- approved hero image under `assets/img/hero-finished-pnw-1536.webp`;
- existing scenario images under `assets/img/scenarios/`.

The scenario images remain concept illustrations and are not presented as completed Local Repair Pro work.

### New brand assets

- `assets/brand/local-repair-pro-symbol.svg`;
- `assets/brand/local-repair-pro-wordmark.svg`;
- `assets/brand/local-repair-pro-wordmark-light.svg`;
- `assets/brand/local-repair-pro-monochrome.svg`;
- `favicon.svg`.

The mark uses a controlled architectural corner / door-frame construction. It avoids house-and-hammer clipart, shields, mascots, seals and glossy 3D treatment.

### New shared implementation

- `assets/css/site-v1.css`;
- `assets/js/site-v1.js`.

Legacy preview CSS/JS were not deleted because full historical reference safety was not established. Current canonical pages use the new shared files.

## 6. Final route inventory

### Canonical primary routes

| Route | Role | Canonical status |
|---|---|---|
| `/` | Homepage | Current |
| `/services/` | Five service families | Current |
| `/examples/` | Common Project Types / Example Repair Scenarios | Current |
| `/request/` | Three-intent concept request preview | Current |
| `/areas/` | Service-area hub | Current |
| `/pricing/` | Pricing Approach | Current |
| `/guides/` | Finished planning guides | Current |
| `/about/` | Service-experience positioning | Current |
| `/faq/` | Scope, form, pricing and concept answers | Current |
| `/privacy/` | Concept-safe privacy page | Current |
| `/terms/` | Concept-safe terms page | Current |
| `/sitemap/` | Noindex HTML navigation page | Current |
| `/404.html` | Base-path-safe error page | Current |

### Canonical city routes

- `/areas/vancouver-wa/`
- `/areas/camas-wa/`
- `/areas/battle-ground-wa/`
- `/areas/portland-or/`
- `/areas/hillsboro-or/`
- `/areas/beaverton-or/`
- `/areas/gresham-or/`
- `/areas/tigard-or/`
- `/areas/lake-oswego-or/`
- `/areas/oregon-city-or/`

### Compatibility routes

| Old route | Final canonical | Compatibility behavior |
|---|---|---|
| `/work-examples/` | `/examples/` | noindex page, canonical, meta refresh, JS replace and visible link |
| `/service-area/` | `/areas/` | noindex page, canonical, meta refresh, JS replace and visible link |
| `/service-area/{city}/` | `/areas/{city}/` | noindex page, canonical, meta refresh, JS replace and visible link |

No obsolete preview route, including `/homepage-v2-premium.html`, was restored.

## 7. Brand and contact normalization

Consistent concept-safe contact data:

- `(360) 555-0147`;
- `tel:+13605550147`;
- `sms:+13605550147`;
- `hello@localrepairpro.example`.

The footer states that the project is a concept and that the phone/email are reserved placeholders. No street address, map pin, service radius, business hours, registration, license, insurance or employee identity was added.

## 8. Homepage retained and improved

Final commercial rhythm:

1. Shared header and logo.
2. Approved hero.
3. Compact trust/process strip.
4. Repair value.
5. Common project scenarios.
6. Five service families.
7. Photo-based request process.
8. Scope and specialist boundaries.
9. Service area.
10. FAQ.
11. Final CTA.
12. Shared footer.
13. Mobile sticky CTA.

The hero was not redesigned from zero. The approved line, regional signal, CTAs and finished-result image remain.

## 9. Request-flow implementation

Three intents:

1. Repair Request.
2. Quick Question.
3. Send Photos Guidance.

Supported query parameters:

- `?intent=photos`;
- `?intent=question`.

Fields:

- optional name;
- preferred contact method;
- email or phone placeholder;
- city or ZIP;
- request category;
- interior/exterior setting;
- description;
- timing;
- access notes;
- materials/product information;
- photo notes;
- grouped punch-list indicator.

Safety behavior:

- no upload control;
- no external endpoint;
- submit button disabled if JavaScript is unavailable;
- form action does not address an external server;
- JavaScript intercepts submit;
- explicit confirmation:

> Preview complete — no request was sent. This concept form does not collect or transmit personal information.

## 10. Visual and interaction system

Implemented vocabulary:

- subtle sticky-header state transition;
- 8 px evidence/section settle;
- accessible mobile menu;
- small button response;
- optional section reveal enhancement;
- reduced-motion override.

Not implemented:

- parallax;
- autoplay video;
- cursor effects;
- blur-to-sharp transitions;
- counters;
- 3D tilt;
- animation libraries;
- WebGL or canvas effects;
- mandatory horizontal primary content.

All essential content exists in HTML at first paint. JavaScript enhances rather than creates content.

## 11. Accessibility work

Source-level implementation includes:

- skip links;
- semantic header, navigation, main, section and footer structures;
- one H1 per current primary/city/compatibility page;
- visible focus treatment;
- approximately 44–50 px interactive targets;
- mobile-menu Escape handling;
- focus containment and restoration;
- body-scroll lock only while menu is open;
- form labels and error regions;
- `aria-expanded`, `aria-pressed`, `aria-current`, `aria-live` and `aria-invalid` handling;
- no-JavaScript navigation fallback;
- reduced-motion support;
- focus scroll margins for sticky-interface clearance.

Rendered keyboard, zoom and screen-reader behavior remains unverified until browser QA.

## 12. SEO and preview status

Implemented:

- page-specific titles and descriptions;
- canonical URLs;
- Open Graph metadata on commercial pages;
- Twitter summary-large-image metadata on commercial pages;
- SVG favicon;
- descriptive image alt text;
- short canonical route structure;
- compatibility canonical references.

Intentionally retained:

- `noindex, nofollow` on all public concept pages;
- no fictional LocalBusiness schema;
- no production XML sitemap entry;
- no analytics or tracking;
- no external form endpoint.

The `/sitemap/` route is an HTML navigation aid only.

## 13. Current-reference benchmark

A narrow benchmark was used for principles only:

1. SuperFix Handyman estimate flow — `https://superfixhandyman.com/estimate/`
   - description, photos and location before quote review.
2. Servaura — `https://servaura.com/`
   - restrained premium spacing and process sequencing.
3. MARK Home Concierge — `https://markhelps.com/`
   - concise service organization and clear how-it-works structure.
4. Geoffrey — `https://www.geoffreyapp.com/`
   - early ZIP/location qualification and compact action hierarchy.
5. The Premium Handyman, Vancouver–Longview — `https://thepremiumhandyman.com/`
   - local comparison for quote visibility and common contractor-site repetition.
6. Rockness Home Services, Vancouver WA — `https://rocknesshomeservices.com/`
   - direct local messaging and attachment-oriented request patterns.

No external identity, layout, wording, credential, review or result was copied.

## 14. Verification performed

### Git and repository checks

- confirmed exact initial `main` HEAD;
- created the required working branch from `main`;
- confirmed branch is ahead of `main` and not based on a divergent branch;
- confirmed `main` was not changed;
- no PR created;
- no merge or publication performed.

### Route and source checks

- confirmed creation/existence of every canonical primary route;
- confirmed creation/existence of all ten canonical city routes;
- confirmed compatibility updates for all old long routes;
- reviewed root, one-level and two-level relative path patterns;
- reviewed canonical targets;
- reviewed noindex state;
- reviewed current contact values;
- reviewed project naming and descriptor;
- reviewed one-H1 structure;
- reviewed no-JavaScript content availability;
- reviewed form no-transmission behavior;
- reviewed reduced-motion and responsive source rules;
- reviewed fake-proof language against the controlling guardrails.

### Source defects resolved

- old request-page `Unexpected identifier 'll'` implementation removed;
- old 760–900 navigation conflict removed by one shared 1180 px collapse strategy;
- 1024 header crowding addressed structurally by using the compact navigation below 1180 px;
- old public contact placeholders removed from current canonical pages;
- repeated customer-facing demo/future-roadmap modules removed;
- guides “More coming” language removed;
- sample scenario presentation consolidated into one honest disclosure.

## 15. Rendered QA not performed

The GitHub connector can read and write repository state but does not expose a browser. A local read-only clone attempt also failed because the execution container could not resolve `github.com`.

Therefore this audit does **not** claim completion of:

- actual rendering at 1440, 1024, 768, 430, 390, 375, 360 or 320 px;
- short-height landscape rendering;
- visual horizontal-overflow measurement;
- real mobile-menu interaction;
- keyboard focus behavior in Chromium/Safari;
- 200% / 400% zoom/reflow;
- runtime console checks;
- LCP or CLS measurement;
- full-page screenshot capture.

## 16. Required visual evidence gate

A browser-capable session must render the branch and capture:

1. desktop homepage;
2. mobile homepage;
3. desktop request page;
4. mobile request page;
5. Services or Examples page;
6. mobile navigation open.

Do not claim visual QA from source inspection alone.

## 17. Remaining risks

### P0 blockers

- None confirmed at source level.

### P1 blockers before owner visual review

1. Real rendered QA has not been completed.
2. Required screenshots have not been produced.
3. Runtime console and interaction verification are outstanding.
4. Image crop quality at every target viewport is outstanding.

### Optional later integrations

- verified real business identity;
- real phone/email;
- secure form endpoint and storage;
- intentional photo-upload system;
- CRM, email, SMS or AI intake;
- analytics and conversion events;
- real project photography and reviews;
- LocalBusiness schema after fact verification;
- public indexing and XML sitemap after launch approval.

## 18. Final branch status

**NOT READY — BLOCKERS REMAIN**

The implementation is ready for browser QA, not yet for owner visual review, merge or publication.
