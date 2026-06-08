# Website Production Factory — Master Workflow

Version: 1.0 | Source: Handyman Website v2 (proaiexpert/handyman-vancouver-portland-demo)

This document defines the repeatable system for producing premium local-service websites.
It covers every phase from intake through launch-readiness and reusable extraction.

---

## Guiding Principles

- **Stop and ask** when a required fact is missing and cannot be safely assumed.
- **Proceed with labeled assumptions** when the fact is non-critical and clearly marked.
- **Never fabricate** business facts: license, insurance, reviews, address, phone, years in business.
- **Never add schema, sitemap entry, or remove noindex** until real business facts are verified.
- **Fake-proof every phase** — the content guardrail applies from intake through launch.

---

## Phase Overview

| # | Phase | Gate |
|---|---|---|
| 1 | Intake / Missing Facts | All required facts collected or gaps documented |
| 2 | Market Research | Category, demand, and audience understood |
| 3 | Competitor Research | 3+ local competitors analyzed |
| 4 | Best-in-Class Examples | 2+ reference sites identified |
| 5 | Positioning | Single clear positioning statement approved |
| 6 | Sitemap | Page structure approved |
| 7 | Conversion Strategy | CTA hierarchy and request flow defined |
| 8 | Copy Strategy | Tone, forbidden claims, allowed language defined |
| 9 | Visual Direction | Color, type, hero concept approved |
| 10 | Hero Concepts | Hero variant selected |
| 11 | Homepage Concepts | Section structure approved |
| 12 | Prototype | Working coded prototype reviewed |
| 13 | Implementation | Full homepage built and deployed |
| 14 | QA | All checklists pass |
| 15 | Deployment | Live on custom domain |
| 16 | Polish | Mobile/sticky/contrast issues resolved |
| 17 | Root Promotion | Final page is canonical root |
| 18 | Launch Readiness | All P0/P1 gaps resolved or documented |
| 19 | Documentation Snapshot | README + PROJECT-SNAPSHOT committed |
| 20 | Reusable Extraction | Prompts, checklists, templates extracted |

---

## Phase 1 — Intake / Missing Facts

**Goal:** Collect all facts needed to build a real, non-fabricated website.

**Inputs required:**
- Business name (real or placeholder)
- Service type (handyman, roofing, cleaning, etc.)
- Primary service city / ZIP
- Secondary service areas (if known)
- Phone number (real or placeholder)
- Contact method (form, email, phone)
- License / insurance status (if known — do not assume)
- Real photos (if available)
- Competitor URLs (if known)
- Brand preferences (colors, fonts, tone)

**Output:** Intake document listing confirmed facts and explicit gaps.

**Quality gate:** Every gap is labeled. No gap is silently filled with a fabricated value.

**Common failure modes:**
- Assuming the business is licensed/insured without confirmation
- Using a placeholder phone as if it were real
- Inventing a service radius
- Adding a Google Map without a real address

**Agent task style:** Structured intake form. Stop and surface gaps before proceeding.

**When to stop:** If business name, service type, or primary city is missing — stop and ask.

**When to proceed with assumptions:** Secondary service areas, brand colors, tone — proceed with labeled defaults.

---

## Phase 2 — Market Research

**Goal:** Understand the local service category, demand signals, and customer language.

**Inputs required:** Service type, primary city.

**Output:** 1-page market summary: category size, demand signals, customer pain points, common search terms.

**Quality gate:** Research is grounded in real sources, not invented statistics.

**Common failure modes:**
- Citing made-up market size figures
- Using national averages as local facts
- Inventing customer reviews or testimonials

**Agent task style:** Web research + synthesis. Cite sources. Label estimates as estimates.

---

## Phase 3 — Competitor Research

**Goal:** Identify 3+ local competitors and extract positioning gaps.

**Inputs required:** Service type, primary city.

**Output:** Competitor matrix: URL, positioning, CTA, trust signals, weaknesses.

**Quality gate:** All competitor data comes from real URLs, not invented.

**Common failure modes:**
- Fabricating competitor details
- Treating national chains as local competitors
- Missing the real local market leader

**Agent task style:** Web research. Screenshot or fetch competitor homepages. Extract positioning.

---

## Phase 4 — Best-in-Class Examples

**Goal:** Identify 2+ reference sites that demonstrate premium execution in the category.

**Inputs required:** Service type, visual direction preferences.

**Output:** Reference list with URLs, screenshots, and design DNA notes.

**Quality gate:** References are real, accessible URLs. Design DNA is extracted, not invented.

**Common failure modes:**
- Using outdated or broken reference URLs
- Fabricating design details not visible in screenshots

**Agent task style:** Web research + screenshot fetch. Extract color, type, layout, CTA patterns.

---

## Phase 5 — Positioning

**Goal:** Define a single clear positioning statement that differentiates the business.

**Inputs required:** Market research, competitor research, business facts.

**Output:** Positioning statement + headline direction + tone guide.

**Quality gate:** Positioning does not rely on unverified claims (licensed, insured, years, reviews).

**Common failure modes:**
- Defaulting to "trusted, licensed, insured" without verification
- Generic positioning that applies to every competitor
- Overpromising on scope or availability

**Agent task style:** Synthesis prompt. Present 2-3 positioning options. Get approval before proceeding.

---

## Phase 6 — Sitemap

**Goal:** Define the page structure for the website.

**Inputs required:** Positioning, service list, conversion strategy.

**Output:** Sitemap with page names, URLs, and purpose.

**Quality gate:** No pages that require unverified facts (portfolio, reviews, about with fake bio).

**Common failure modes:**
- Adding a portfolio page without real photos
- Adding a reviews page without real reviews
- Adding an about page with fabricated credentials

**Agent task style:** Structured list. Flag any page that requires real facts not yet confirmed.

---

## Phase 7 — Conversion Strategy

**Goal:** Define the CTA hierarchy and request flow.

**Inputs required:** Business contact method, service type, positioning.

**Output:** CTA map: primary CTA, secondary CTA, sticky CTA, form fields, confirmation message.

**Quality gate:** CTAs do not promise instant quotes, same-day service, or guaranteed responses.

**Common failure modes:**
- "Get an instant quote" when no instant quote system exists
- "Same-day service" without verification
- Form that submits nowhere

**Agent task style:** Define CTA text, placement, and behavior. Use scope-reviewed language.

---

## Phase 8 — Copy Strategy

**Goal:** Define tone, forbidden claims, and allowed language for all copy.

**Inputs required:** Positioning, fake-proof guardrails, business facts.

**Output:** Copy brief: tone guide, forbidden claim list, allowed phrase list, headline options.

**Quality gate:** No forbidden claims in any copy. All claims are verifiable or explicitly scoped.

**Common failure modes:**
- Slipping in "licensed" or "insured" as filler
- Using "years of experience" without a real number
- Adding "5-star" without real reviews

**Agent task style:** Copy brief document. Include explicit forbidden/allowed lists.

---

## Phase 9 — Visual Direction

**Goal:** Define the approved color palette, typography, hero concept, and overall aesthetic.

**Inputs required:** Positioning, brand preferences, reference sites.

**Output:** Visual direction brief: palette, type stack, hero concept, mood.

**Quality gate:** Visual direction is approved before implementation begins.

**Common failure modes:**
- Starting implementation before visual direction is locked
- Using colors that fail WCAG AA contrast
- Hero image that shows defects instead of finished value

**Agent task style:** Visual brief with hex values, font stack, hero concept description.

---

## Phase 10 — Hero Concepts

**Goal:** Select the approved hero variant.

**Inputs required:** Visual direction, positioning, hero image options.

**Output:** Selected hero variant with approved image, headline, and CTA.

**Quality gate:** Hero sells finished value, not defect. No fake before/after proof.

**Common failure modes:**
- Hero shows damage/defect instead of finished result
- Hero uses stock photo that looks generic or inauthentic
- Hero headline makes unverified claims

**Agent task style:** Present 2-3 hero variants. Get approval before building.

---

## Phase 11 — Homepage Concepts

**Goal:** Define the section structure and content hierarchy for the homepage.

**Inputs required:** Positioning, conversion strategy, copy strategy, visual direction.

**Output:** Homepage section map with section names, purpose, and content notes.

**Quality gate:** No section requires unverified facts. Scenarios block is request categories, not portfolio.

**Common failure modes:**
- Portfolio section without real photos
- Testimonials section without real reviews
- Service area map without real address

**Agent task style:** Section-by-section outline. Flag any section requiring real facts.

---

## Phase 12 — Prototype

**Goal:** Build a working coded prototype for review.

**Inputs required:** Approved homepage concept, visual direction, copy brief.

**Output:** Working HTML/CSS/JS prototype deployed to a preview route.

**Quality gate:** Prototype passes basic mobile QA before full review.

**Common failure modes:**
- Prototype deployed to root before approval
- Mobile layout not tested before review
- Fake claims slipping into prototype copy

**Agent task style:** Implementation task with preview route. Do not promote to root yet.

---

## Phase 13 — Implementation

**Goal:** Build the full production-quality homepage.

**Inputs required:** Approved prototype, QA feedback, visual direction.

**Output:** Complete homepage at preview route, passing all QA checklists.

**Quality gate:** All P0/P1 QA items pass before root promotion.

**Common failure modes:**
- Promoting to root before QA passes
- Horizontal overflow on mobile
- Sticky CTA covering important content
- Missing head metadata

**Agent task style:** Full implementation task with explicit allowed/forbidden file list.

---

## Phase 14 — QA

**Goal:** Verify the homepage passes all quality checklists.

**Inputs required:** Live preview URL, QA checklists.

**Output:** QA report with P0/P1/P2/P3 findings.

**Quality gate:** Zero P0 items. Zero P1 items before root promotion.

**Common failure modes:**
- Skipping mobile QA
- Not testing sticky CTA on real device
- Missing contrast check
- Not verifying old routes are 404

**Agent task style:** QA-only task. No edits. Report only.

---

## Phase 15 — Deployment

**Goal:** Deploy the homepage to the live custom domain.

**Inputs required:** GitHub Pages config, custom domain DNS, CNAME.

**Output:** Live page accessible at custom domain with HTTPS.

**Quality gate:** Custom domain resolves. HTTPS active. No mixed content.

**Common failure modes:**
- DNS not propagated
- CNAME missing
- GitHub Pages serving wrong branch
- Custom domain not verified in GitHub

**Agent task style:** Deployment diagnostic task. Verify HTTP status, headers, and content.

---

## Phase 16 — Polish

**Goal:** Resolve all remaining P1/P2 issues found in QA.

**Inputs required:** QA report, live URL.

**Output:** Fixed homepage with all P1 items resolved.

**Quality gate:** All P1 items resolved. P2 items documented for future.

**Common failure modes:**
- Fixing one issue and breaking another
- Not re-testing after fix
- Fixing desktop but breaking mobile

**Agent task style:** Targeted fix task. One issue per commit where possible.

---

## Phase 17 — Root Promotion

**Goal:** Promote the final homepage to the canonical root URL.

**Inputs required:** Approved homepage at preview route, QA sign-off.

**Output:** `index.html` at root is the final homepage. Old preview routes removed.

**Quality gate:** Root serves final homepage. Old routes return 404. No route cards visible.

**Common failure modes:**
- Forgetting to remove old preview routes
- Old hub still visible at root
- Old routes still linked from root

**Agent task style:** Root promotion task. Explicit list of files to delete.

---

## Phase 18 — Launch Readiness

**Goal:** Verify all P1 gaps are resolved before real public launch.

**Inputs required:** Live root URL, QA report, metadata audit.

**Output:** Launch-readiness report with explicit go/no-go decision.

**Quality gate:** Canonical present. OG tags present. Favicon present. No fake claims. noindex decision made.

**Common failure modes:**
- Missing canonical
- Missing OG tags
- Favicon 404
- noindex left on after real launch
- Sitemap entry added before noindex removed

**Agent task style:** Audit-only task. No edits. Report only.

---

## Phase 19 — Documentation Snapshot

**Goal:** Commit a stable documentation snapshot for future reference.

**Inputs required:** Stable commit hash, QA sign-off, launch-readiness report.

**Output:** Updated README.md + new PROJECT-SNAPSHOT.md committed.

**Quality gate:** README no longer describes old architecture. Snapshot includes all key facts.

**Common failure modes:**
- README still describes old preview hub
- Snapshot missing demo limitations
- Snapshot missing do-not-touch list

**Agent task style:** Documentation-only task. No production file edits.

---

## Phase 20 — Reusable Extraction

**Goal:** Extract the workflow, prompts, checklists, and templates for reuse on future projects.

**Inputs required:** Full project history, documentation snapshot.

**Output:** docs/website-production-factory/ folder with master workflow, prompt library, QA checklists, agent task templates, and case study.

**Quality gate:** All documents are generic enough for any local service business. No fake business facts.

**Common failure modes:**
- Hardcoding handyman-specific details into generic templates
- Forgetting to document key technical lessons
- Not extracting the fake-proof guardrails as a reusable pattern

**Agent task style:** Documentation extraction task. Create docs/ folder. No production file edits.

---

## Fake-Proof Guardrail Reference

### Always forbidden
- licensed (as self-claim)
- insured
- bonded
- 5-star
- top-rated
- years of experience
- guaranteed
- same-day
- emergency / 24/7
- completed projects / Our Work / portfolio (without real photos)
- real address (without verified address)
- exact service radius (without verified coverage)
- LocalBusiness schema (without verified facts)

### Always allowed
- scope reviewed before scheduling
- request reviewed by location, project type, and scope
- photo-based request and review language
- some work may require permits, licensed trades, or a different provider
- availability depends on project type, location, and scope

### Schema / sitemap / indexing rules
- Do not add LocalBusiness schema until business name, address, phone, and category are verified.
- Do not add sitemap entry while noindex is active.
- Do not remove noindex until real launch decision is made and placeholder data is replaced.
