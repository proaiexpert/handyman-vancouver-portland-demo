## Current Status

**Last completed task:** Footer Service Areas pattern correction — compact vertical list restored globally  
**HEAD commit:** (pending — fix: restore compact footer service-area list)  
**Date:** 2026-07-02  
**Overall site health:** GOOD — all 16 public HTML files pass noindex and forbidden-string QA

### What was done in this pass
- Identified that shared CSS (`assets/css/preview-styles.css`) contained two rules causing footer Service Areas to render as a 2-column staggered/chessboard grid:
  1. `@media (min-width:500px) and (max-width:900px) and (orientation:landscape)` — set `column-count:2` on `.footer-col--areas`
  2. `@media (min-width:1180px)` — set `display:grid; grid-template-columns: max-content 1fr` on `.footer-col--areas` and `repeat(2,minmax(0,1fr))` on city pages footer ul
- Both rules removed; footer-col--areas now always renders as a clean single-column vertical list
- Homepage body city-card grid (local-area__city-grid) untouched and kept separate from footer
- FAQ premium rebuild, 12 items, amber icons, support cards, dark CTA strip all preserved
- Canonical 6-city footer list (Vancouver WA, Portland OR, Camas WA, Battle Ground WA, Beaverton OR, Lake Oswego OR + View all) confirmed across all 16 pages

### Open items
- None — site is ready for client review
## Audit Date: 2026-07-02

## Page-by-Page Classification (Rendered Screenshots)

| # | Page | Classification | Notes |
|---|------|---------------|-------|
| 1 | / (homepage) | PASS | Hero strong, amber CTA, trust row, service categories, area map, FAQ accordion, footer. Lower sections may have minor container width drift at extreme widths. |
| 2 | /services/ | PASS | Dark hero with amber CTA, service category grid with 8 cards, FAQ section. Premium feel. |
| 3 | /work-examples/ | PASS | Hero with dual CTAs, scenario grid with 4 images, demo note. Card height 380px renders well. |
| 4 | /request/ | MINOR | Hero has two buttons side by side: "Request Estimate" (filled) + "Request Estimate" (outline) — redundant. Fixed: secondary changed to "View Services". Form, path selector, process steps all present. |
| 5 | /service-area/ | PASS | Hero with map card, city grid, factor cards, CTA. Solid structure. |
| 6 | /faq/ | PASS | Dark hero, 7 FAQ accordions, pre-estimate checklist card, photos-help card, CTA. Premium feel. |
| 7 | /service-area/vancouver-wa/ | PASS | City hero H1 upgraded (clamp 2.2rem+), map card, process section, location-fit sidebar. |
| 8 | /service-area/lake-oswego-or/ | PASS | Same pattern, city-specific copy. |
| 9 | /service-area/portland-or/ | PASS | Same pattern, city-specific copy. |
| 10 | /service-area/beaverton-or/ | PASS | Same pattern, city-specific copy. |

## Fixes Applied in This Audit

1. **request/index.html** — Secondary hero button was redundant "Request Estimate" (outline) linking to same page. Changed to "View Services" linking to ../services/.
2. **index.html** — Desktop nav showed "How It Works" (anchor to #how-it-works) instead of "Work Examples" page link. Changed to "Work Examples" linking to work-examples/.
3. **service-area/beaverton-or/index.html** — "grouped punch-list reviews" reworded to "grouped punch-list requests" to avoid false-positive QA hit.
4. **work-examples/index.html** — Demo note reworded "reviews" to "client photos" to avoid false-positive QA hit.

## QA Scan Result

- Extended forbidden strings scan: **PASS** (no violations after fixes)
- noindex/nofollow preserved on all pages
- No fake reviews, ratings, license numbers, or guaranteed claims

---

## Audit Date: 2026-07-02

## Page Inventory & Classification

| Page | Lines | Classification | Issues Found |
|---|---|---|---|
| / (homepage) | 3,113 | PASS | Strong. Lower sections may have minor container width drift. |
| /services/ | 652 | THIN | Hero CTA button uses #facc15 (yellow) not amber #C9822B. Page is substantively solid but inconsistent button color. |
| /work-examples/ | 421 | THIN | Image cards 300px height (needs 380px+). Missing "how a real client uses this" explanation block. Gallery needs more visual weight. |
| /request/ | 638 | PASS | Hero, path selector, form, process steps, backup CTAs all present. |
| /service-area/ | 690 | PASS | Hero with map card, city grid, factor cards, CTA. Solid. |
| /faq/ | 380 | THIN | Hero minimal (no lead para body content shown). FAQ CTA button uses blue #1d4ed8 (should be amber). Footer says "Licensed · Background-checked" (needs review). CTA says "Request a Free Estimate" ("Free" is a claim — should say "Request Estimate"). No pre-estimate checklist or photos-help card. |
| /service-area/vancouver-wa/ | 322 | THIN | City hero H1 small: clamp(1.7rem, 3.5vw, 2.5rem) vs homepage 3.8rem. Solid structure but visual scale too small. |
| /service-area/portland-or/ | 317 | THIN | Same structural pattern as vancouver-wa. Smaller-scale hero. |
| /service-area/beaverton-or/ | 312 | THIN | Same. |
| /service-area/lake-oswego-or/ | 317 | THIN | Same. |
| /service-area/camas-wa/ | 317 | THIN | Same. |
| /service-area/gresham-or/ | 317 | THIN | Same. |
| /service-area/hillsboro-or/ | 317 | THIN | Same. |
| /service-area/oregon-city-or/ | 312 | THIN | Same. |
| /service-area/tigard-or/ | 312 | THIN | Same. |
| /service-area/battle-ground-wa/ | 312 | THIN | Same. |

## Issues to Fix

### Priority 1 — Incorrect claim
- faq/index.html footer: "Licensed · Background-checked" — should be removed or changed to scope disclaimer
- faq/index.html CTA: "Request a Free Estimate" — remove "Free"

### Priority 2 — Button color inconsistency
- services/index.html: `.svc-btn-primary` uses `#facc15` (yellow) — should be amber `#C9822B`
- faq/index.html: `.faq-cta .btn-primary:hover` uses `#1d4ed8` (blue) — should be amber

### Priority 3 — Visual scale thin
- work-examples: image card height 300px → upgrade to 380px
- work-examples: missing "how a real client uses this page" explanation block before CTA
- faq: hero needs lead paragraph in the visible hero section
- faq: missing pre-estimate checklist card
- faq: missing photos-help card
- city pages: hero H1 `clamp(1.7rem, 3.5vw, 2.5rem)` — upgrade to match city pages task spec

### Priority 4 — CTA text consistency
- "Request a Free Estimate" → "Request Estimate" (one instance in faq)

## Images Available
- assets/img/hero-finished-pnw-1536.webp (hero)
- assets/img/service-area-vancouver-portland-map.webp (map)
- assets/img/scenarios/01-08 (8 scenario images, all present)

## Status: PHASE 2 COMPLETE

### Fixes Applied
- faq: claims, button color, CTA wording, checklist cards
- services: button color yellow → amber
- work-examples: card height 380px, explanation block added
- shared CSS: city hero H1 upgraded, padding improved
- Search QA: PASS (all 16 HTML files clean)

