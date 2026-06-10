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
