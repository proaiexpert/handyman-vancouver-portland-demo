# Website Production Factory — QA Checklists

Version: 1.0 | Source: Handyman Website v2

Reusable QA checklists for every phase of the Website Production Factory workflow.

**Severity guide:**
- P0 = Blocking — do not ship
- P1 = Must fix before demo freeze or root promotion
- P2 = Recommended polish before final public launch
- P3 = Future improvement only

---

## Checklist 1 — Fake-Proof Claim Checklist

| Claim | PASS | FAIL | Severity |
|---|---|---|---|
| licensed (self-claim) | Not present | Present | P0 |
| insured | Not present | Present | P0 |
| bonded | Not present | Present | P0 |
| 5-star | Not present | Present | P0 |
| top-rated | Not present | Present | P0 |
| years of experience | Not present | Present | P0 |
| guaranteed | Not present | Present | P0 |
| same-day | Not present | Present | P0 |
| emergency / 24/7 | Not present | Present | P0 |
| completed projects | Not present | Present | P0 |
| Our Work / portfolio | Not present (or real photos only) | Present without real photos | P0 |
| real address | Not present (or verified address only) | Present without verification | P0 |
| exact service radius | Not present (or verified only) | Present without verification | P1 |
| LocalBusiness schema | Not present (or verified facts only) | Present without verified facts | P0 |

---

## Checklist 2 — Local Service Business Claim Checklist

| Claim | PASS | FAIL | Severity |
|---|---|---|---|
| Scope reviewed before scheduling | Present | Missing | P1 |
| Request reviewed by location/scope | Present | Missing | P1 |
| Photo-based request language | Present | Missing | P1 |
| Some work may require permits/licensed trades | Present | Missing | P2 |
| Service area described by city/county (not exact radius) | Present | Exact radius claimed | P1 |
| Portland-area described as "reviewed by scope" | Present | Claimed as full coverage | P1 |

---

## Checklist 3 — Mobile Layout Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| 430x932 — no horizontal overflow | scrollWidth <= innerWidth+1 | scrollWidth > innerWidth+1 | P0 |
| 390x844 — no horizontal overflow | scrollWidth <= innerWidth+1 | scrollWidth > innerWidth+1 | P0 |
| 375x812 — no horizontal overflow | scrollWidth <= innerWidth+1 | scrollWidth > innerWidth+1 | P0 |
| 360x800 — no horizontal overflow | scrollWidth <= innerWidth+1 | scrollWidth > innerWidth+1 | P0 |
| 320x700 — no horizontal overflow | scrollWidth <= innerWidth+1 | scrollWidth > innerWidth+1 | P0 |
| No blank right-side area | None visible | Visible blank area | P1 |
| Service Area heading not clipped | Fully visible | Clipped | P1 |
| Service Area paragraph not clipped | Fully visible | Clipped | P1 |
| All city chips readable | Fully visible | Clipped or overflowing | P1 |
| Long Portland-area chip readable | Fully visible | Clipped | P1 |
| Abstract map card fits viewport | Fits | Overflows | P1 |
| Scenario cards swipe horizontally | Works | Broken | P1 |
| First scenario card not clipped | Fully visible | Clipped | P1 |

---

## Checklist 4 — Sticky CTA Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| Sticky CTA hidden at page load | Hidden | Visible | P1 |
| Sticky CTA appears after hero scroll | Appears | Does not appear | P1 |
| Sticky CTA hides during active scroll | Hides | Stays visible | P2 |
| Sticky CTA reappears after scroll stops | Reappears | Does not reappear | P1 |
| Sticky CTA hides near footer/final CTA | Hides | Stays visible | P1 |
| Primary button readable on light bg | Readable | Not readable | P0 |
| Primary button readable on dark bg | Readable | Not readable | P0 |
| Secondary (Call) button readable on light bg | Readable | Not readable / white-on-white | P0 |
| Secondary (Call) button readable on dark bg | Readable | Not readable | P0 |
| Sticky CTA does not cover card CTAs | Does not cover | Covers | P1 |
| Sticky CTA does not cover FAQ answers | Does not cover | Covers | P1 |
| Sticky CTA respects safe-area-inset-bottom | Respected | Overlaps home indicator | P1 |
| Sticky CTA hidden on desktop (>=760px) | Hidden | Visible | P1 |
| Both buttons have 44px+ tap target | Yes | No | P1 |
| Premium pill shape preserved | Yes | Hard white slab | P2 |

---

## Checklist 5 — Horizontal Overflow Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| document.documentElement.scrollWidth <= innerWidth+1 | True | False | P0 |
| document.body.scrollWidth <= innerWidth+1 | True | False | P0 |
| No element wider than viewport | None | Found | P0 |
| Scenario gallery uses internal scroll only | Yes | Causes body overflow | P0 |
| Service area chips wrap or scroll internally | Yes | Cause body overflow | P1 |
| No fixed-width element wider than 320px | None | Found | P1 |

---

## Checklist 6 — Hamburger / Mobile Menu Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| Hamburger button visible on mobile | Visible | Not visible | P1 |
| Hamburger has aria-label | Present | Missing | P2 |
| Hamburger has aria-expanded | Present | Missing | P2 |
| Hamburger has aria-controls | Present | Missing | P2 |
| Mobile menu opens on tap | Opens | Does not open | P1 |
| Mobile menu closes on close button | Closes | Does not close | P1 |
| Mobile menu closes on nav link tap | Closes | Does not close | P2 |
| Mobile menu has aria-label | Present | Missing | P2 |
| Mobile menu hidden attribute toggled | Yes | No | P2 |
| Hamburger hidden on desktop (>=901px) | Hidden | Visible | P1 |
| Desktop nav visible on desktop | Visible | Not visible | P1 |

---

## Checklist 7 — FAQ Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| FAQ items use details/summary | Yes | No | P2 |
| FAQ items open on tap | Open | Do not open | P1 |
| FAQ items close on second tap | Close | Do not close | P1 |
| FAQ answers not clipped on mobile | Not clipped | Clipped | P1 |
| FAQ summary text wraps correctly | Wraps | Overflows | P1 |
| Sticky CTA does not cover FAQ answers | Does not cover | Covers | P1 |
| No forbidden claims in FAQ answers | None | Found | P0 |

---

## Checklist 8 — Hero Image Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| Hero image loads (HTTP 200) | 200 | 404 / error | P0 |
| Hero image has alt text | Present | Missing | P1 |
| Hero image has width attribute | Present | Missing | P2 |
| Hero image has height attribute | Present | Missing | P2 |
| Hero image has fetchpriority=high | Present | Missing | P2 |
| Hero image has loading=eager | Present | Missing | P2 |
| Hero shows finished value (not defect) | Yes | No | P1 |
| Hero image is WebP or optimized format | Yes | Large unoptimized JPEG | P2 |
| Hero image file size reasonable (<500KB) | Yes | >500KB | P2 |
| Hero image visible above fold on mobile | Yes | Below fold | P1 |

---

## Checklist 9 — CTA Hierarchy Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| Primary CTA (Request Estimate) visible above fold | Yes | No | P1 |
| Primary CTA uses amber/brand color | Yes | No | P2 |
| Secondary CTA (Send Photos / Call) present | Yes | No | P2 |
| Sticky CTA primary matches hero primary CTA | Yes | Different action | P2 |
| No CTA promises instant quote | None | Found | P0 |
| No CTA promises same-day service | None | Found | P0 |
| No CTA promises guaranteed response | None | Found | P0 |
| Final CTA section present | Yes | No | P2 |
| Footer has contact link | Yes | No | P2 |

---

## Checklist 10 — Service Area Wording Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| Primary city named explicitly | Yes | No | P1 |
| Secondary areas described as "reviewed by scope" | Yes | Claimed as full coverage | P1 |
| Portland-area described as "reviewed by scope" | Yes | Claimed as full coverage | P1 |
| No exact mile radius claimed | None | Found | P1 |
| No "serving all Portland metro" | None | Found | P1 |
| Service area chips readable on mobile | Yes | Clipped | P1 |
| Long chip (Portland-area reviewed by scope) readable | Yes | Clipped | P1 |

---

## Checklist 11 — Map / Schema Safety Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| No real Google Map embedded | None | Present without real address | P0 |
| No real address shown | None | Present without verification | P0 |
| No LocalBusiness schema | None | Present without verified facts | P0 |
| Service area card is abstract (not real map) | Yes | Real map | P1 |
| No GPS coordinates claimed | None | Present | P1 |

---

## Checklist 12 — SEO / Head Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| Title tag present | Yes | No | P1 |
| Meta description present | Yes | No | P1 |
| Canonical link present | Yes | No | P1 |
| robots meta present | Yes | No | P2 |
| og:type present | Yes | No | P1 |
| og:title present | Yes | No | P1 |
| og:description present | Yes | No | P1 |
| og:url present | Yes | No | P1 |
| og:image present | Yes | No | P1 |
| og:image:alt present | Yes | No | P2 |
| twitter:card present | Yes | No | P2 |
| twitter:title present | Yes | No | P2 |
| twitter:description present | Yes | No | P2 |
| twitter:image present | Yes | No | P2 |
| Favicon link in head | Yes | No | P1 |
| Favicon file accessible (HTTP 200) | Yes | 404 | P1 |
| lang attribute on html element | Yes | No | P2 |

---

## Checklist 13 — Lighthouse Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| Performance score >= 75 (mobile) | Yes | No | P2 |
| Accessibility score >= 85 | Yes | No | P1 |
| Best Practices score >= 90 | Yes | No | P2 |
| SEO score >= 80 | Yes | No | P1 |
| Hero image has fetchpriority=high | Yes | No | P2 |
| Hero image has explicit width/height (no CLS) | Yes | No | P2 |
| No render-blocking resources (severe) | None | Found | P2 |
| No oversized images | None | Found | P2 |
| No unused CSS (severe) | None | Found | P3 |

---

## Checklist 14 — Accessibility Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| Exactly one H1 | Yes | Zero or multiple | P1 |
| H1 appears before H2 in DOM order | Yes | H2 before H1 | P2 |
| Heading hierarchy logical (no skipped levels) | Yes | Skipped | P2 |
| Skip link present | Yes | No | P2 |
| Skip link target exists (#main) | Yes | No | P2 |
| All buttons have accessible text or aria-label | Yes | No | P1 |
| All images have alt text | Yes | No | P1 |
| Focus styles visible (button:focus-visible) | Yes | No | P1 |
| WCAG AA contrast — normal text on light bg | >=4.5:1 | <4.5:1 | P1 |
| WCAG AA contrast — large text on light bg | >=3:1 | <3:1 | P2 |
| WCAG AA contrast — sticky CTA primary | >=4.5:1 | <4.5:1 | P1 |
| WCAG AA contrast — sticky CTA secondary | >=4.5:1 | <4.5:1 | P1 |
| Mobile menu accessible (hidden attribute) | Yes | No | P2 |
| FAQ details/summary keyboard accessible | Yes | No | P2 |
| Main landmark present | Yes | No | P2 |

---

## Checklist 15 — GitHub Pages / Custom Domain Deployment Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| GitHub Pages enabled on correct branch | Yes | No | P0 |
| CNAME file present in repo | Yes | No | P0 |
| Custom domain DNS configured | Yes | No | P0 |
| Custom domain resolves (HTTP 200) | Yes | No | P0 |
| HTTPS active | Yes | No | P0 |
| No mixed content | None | Found | P1 |
| Custom domain verified in GitHub settings | Yes | No | P1 |
| Correct content served (not old hub) | Yes | No | P0 |
| Required assets load (CSS, JS, hero) | Yes | No | P0 |

---

## Checklist 16 — Root Promotion Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| index.html is the final homepage | Yes | Old hub or placeholder | P0 |
| No route cards visible on root | None | Present | P0 |
| No old preview route links on root | None | Present | P0 |
| Root HTTP status 200 | 200 | Other | P0 |
| Root content is final homepage | Yes | Old hub | P0 |
| Old preview routes return 404 | All 404 | Any 200 | P1 |

---

## Checklist 17 — Route Cleanup Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| All old preview route .html files deleted | Yes | Any remaining | P1 |
| All old preview route /folder/ directories deleted | Yes | Any remaining | P1 |
| Each deleted route returns 404 | All 404 | Any 200 | P1 |
| No old route files committed back | None | Found | P1 |
| Root index.html is not accidentally deleted | Present | Missing | P0 |
| assets/ folder intact | Yes | Missing files | P0 |

---

## Checklist 18 — Pre-Launch Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| Real phone number in place | Yes | Placeholder tel:0000000000 | P1 |
| Real contact form working | Yes | No form or broken | P1 |
| Real business name confirmed | Yes | Placeholder | P1 |
| Real service area confirmed | Yes | Placeholder | P1 |
| noindex removed | Yes | Still active | P1 |
| Sitemap entry added | Yes | Missing | P2 |
| LocalBusiness schema added (if facts verified) | Yes | Missing | P2 |
| Real OG image (if needed) | Yes | Hero fallback | P3 |
| Privacy policy page (if required) | Yes | Missing | P2 |
| Legal pages (if required) | Yes | Missing | P2 |
| No forbidden claims | None | Found | P0 |
| All QA checklists pass | Yes | Any fail | P0 |

---

## Checklist 19 — Post-Launch Improvement Checklist

| Check | Priority |
|---|---|
| Fix H2-before-H1 DOM order (aside request card) | P2 |
| Add loading=lazy to below-fold images | P3 |
| Add dedicated OG image (not hero fallback) | P3 |
| Add preconnect hints for external resources | P3 |
| Move large inline style block to external CSS | P3 |
| Add aspect-ratio to hero image CSS | P3 |
| Add Twitter/X card image (if different from OG) | P3 |
| Add privacy policy page | P2 |
| Add real Google Map (only when real address verified) | P2 |
| Add LocalBusiness schema (only when facts verified) | P2 |
| Add sitemap entry (only after noindex removed) | P2 |
| Real-device iPhone Safari screenshot verification | P2 |

---

## Checklist 20 — Documentation Snapshot Checklist

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| README.md updated (not old hub description) | Yes | Still describes old hub | P1 |
| README includes canonical live URL | Yes | Missing | P1 |
| README includes stable commit history | Yes | Missing | P2 |
| README includes demo limitations | Yes | Missing | P1 |
| README includes fake-proof guardrails | Yes | Missing | P1 |
| README includes QA checklist | Yes | Missing | P2 |
| README includes launch-readiness checklist | Yes | Missing | P2 |
| PROJECT-SNAPSHOT.md created | Yes | Missing | P1 |
| PROJECT-SNAPSHOT includes stable commit | Yes | Missing | P1 |
| PROJECT-SNAPSHOT includes do-not-touch list | Yes | Missing | P1 |
| PROJECT-SNAPSHOT includes known limitations | Yes | Missing | P1 |
| PROJECT-SNAPSHOT includes QA sign-off table | Yes | Missing | P2 |
| PROJECT-SNAPSHOT includes next recommended steps | Yes | Missing | P2 |
| No production website files edited in doc commit | Yes | Any edited | P0 |
---

## Checklist 21 — Request / Contact Form QA

| Check | PASS | FAIL | Severity |
|---|---|---|---|
| Quick path available if form is long (two-path selector or similar) | Yes | Single long form only | P1 |
| Required fields are minimal — contact method + message at minimum | Yes | Too many required fields | P1 |
| Phone and email not both forced unless justified by real business need | Yes | Both forced | P1 |
| Demo-safe submit does not claim real delivery, receipt, or response time | Yes | Fake claim present | P0 |
| File upload absent or clearly non-live unless real endpoint exists | Yes | Fake upload present | P0 |
| Form errors accessible — `role="alert"` or `aria-live` on error messages | Yes | Missing | P1 |
| Form status uses `aria-live="polite"` | Yes | Missing | P1 |
| No fake contact data (no fake phone, no fake email) | Yes | Fake data present | P0 |
| Path selector state communicated via `aria-pressed` or equivalent | Yes | Missing | P1 |
| Submit button label updates when path switches | Yes | Stale label | P2 |
| noindex remains active until real endpoint and real data are in place | Yes | Removed prematurely | P1 |
| No sitemap entry for request page while noindex is active | Yes | Added prematurely | P1 |
| No LocalBusiness schema added without verified facts | Yes | Added with placeholder data | P0 |
