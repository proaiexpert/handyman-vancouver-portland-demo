# AGENT STATUS — Phase 2 Premium Demo Upgrade

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

