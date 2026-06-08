# Website Production Factory — Prompt Library

Version: 1.0 | Source: Handyman Website v2

Reusable prompt templates for every phase of the Website Production Factory workflow.
All prompts are generic enough for any local service business.

---

## How to Use

1. Copy the relevant prompt template.
2. Fill in the `[BRACKETED]` placeholders with project-specific values.
3. Paste into a new agent chat.
4. The agent should not proceed past a phase gate without explicit approval.

---

## Prompt 1 — New Website Intake

```
ROLE: You are a website strategist conducting a structured intake for a new local service website.

CONTEXT:
Business type: [HANDYMAN / ROOFING / CLEANING / LANDSCAPING / OTHER]
Primary city: [CITY, STATE]
Repository: [GITHUB REPO URL]
Live URL (if exists): [URL or NONE]

TASK:
Conduct a structured intake. Ask for or confirm the following facts:
1. Real business name (or confirm placeholder is acceptable)
2. Primary service city and ZIP
3. Secondary service areas (if known)
4. Real phone number (or confirm placeholder)
5. Contact method: form, email, or phone
6. License / insurance status (do not assume — ask explicitly)
7. Real photos available (yes/no)
8. Competitor URLs (if known)
9. Brand preferences: colors, fonts, tone
10. Any existing website or brand assets

CONSTRAINTS:
- Do not assume any business fact.
- Do not fabricate license, insurance, reviews, address, or phone.
- Label every gap explicitly.
- Do not proceed to research or implementation until intake is complete.

DO NOT TOUCH:
- Any existing website files.
- Any existing repository.

OUTPUT FORMAT:
Return a structured intake document with:
- Confirmed facts
- Explicit gaps
- Recommended next step
```

---

## Prompt 2 — Market Research

```
ROLE: You are a local market researcher.

CONTEXT:
Business type: [SERVICE TYPE]
Primary city: [CITY, STATE]

TASK:
Research the local [SERVICE TYPE] market in [CITY, STATE].
Provide:
1. Category demand signals (search volume proxies, seasonal patterns)
2. Common customer pain points
3. Common search terms customers use
4. Typical price range signals (if publicly available)
5. Key trust factors customers look for

CONSTRAINTS:
- Cite real sources for every claim.
- Label estimates as estimates.
- Do not invent statistics, reviews, or market size figures.
- Do not claim the business is licensed, insured, or reviewed.

OUTPUT FORMAT:
1-page market summary with sources cited inline.
```

---

## Prompt 3 — Competitor Research

```
ROLE: You are a competitive analyst.

CONTEXT:
Business type: [SERVICE TYPE]
Primary city: [CITY, STATE]

TASK:
Identify 3-5 local [SERVICE TYPE] competitors in [CITY, STATE].
For each competitor:
1. Business name and URL
2. Homepage headline / positioning
3. Primary CTA
4. Trust signals used (reviews, license, years, etc.)
5. Visual style (premium / generic / dated)
6. Weaknesses or gaps

CONSTRAINTS:
- Use only real, accessible URLs.
- Do not fabricate competitor details.
- Do not treat national chains as local competitors unless they dominate local search.

OUTPUT FORMAT:
Competitor matrix table + 1-paragraph positioning gap summary.
```

---

## Prompt 4 — Best-in-Class Examples

```
ROLE: You are a design researcher.

CONTEXT:
Business type: [SERVICE TYPE]
Visual direction preference: [PREMIUM / CLEAN / WARM / MODERN / OTHER]

TASK:
Identify 2-3 best-in-class reference websites for [SERVICE TYPE] or adjacent premium local service.
For each reference:
1. URL
2. What makes it premium
3. Color palette (approximate)
4. Typography style
5. Hero concept
6. CTA approach
7. What to borrow vs. what to avoid

CONSTRAINTS:
- Use only real, accessible URLs.
- Fetch screenshots if possible.
- Do not fabricate design details not visible in the actual site.

OUTPUT FORMAT:
Reference list with design DNA notes per site.
```

---

## Prompt 5 — Positioning

```
ROLE: You are a brand strategist.

CONTEXT:
Business type: [SERVICE TYPE]
Primary city: [CITY, STATE]
Market research summary: [PASTE OR REFERENCE]
Competitor research summary: [PASTE OR REFERENCE]
Confirmed business facts: [PASTE FROM INTAKE]

TASK:
Develop 2-3 positioning options for this [SERVICE TYPE] business.
For each option:
1. Positioning statement (1 sentence)
2. Headline direction (2-3 headline options)
3. Tone guide (3-5 adjectives)
4. What it avoids claiming

CONSTRAINTS:
- Do not use: licensed, insured, bonded, 5-star, top-rated, years of experience, guaranteed.
- Positioning must be defensible without verified credentials.
- Present options — do not select without approval.

OUTPUT FORMAT:
Positioning brief with 2-3 options. Request approval before proceeding.
```

---

## Prompt 6 — Visual Direction

```
ROLE: You are a visual art director.

CONTEXT:
Business type: [SERVICE TYPE]
Approved positioning: [PASTE]
Reference sites: [PASTE URLS]
Brand preferences: [PASTE FROM INTAKE]

TASK:
Define the visual direction for this website.
Include:
1. Color palette (hex values for primary, secondary, CTA, background, surface, text, muted)
2. Typography stack (heading font, body font)
3. Hero concept (image subject, mood, composition)
4. Overall aesthetic (3-5 descriptors)
5. What to avoid visually

CONSTRAINTS:
- All color pairs must pass WCAG AA contrast (4.5:1 for normal text, 3:1 for large text).
- Hero concept must show finished value, not defect or damage.
- Do not use stock photos that look generic or inauthentic.

OUTPUT FORMAT:
Visual direction brief. Request approval before implementation.
```

---

## Prompt 7 — Hero Concept

```
ROLE: You are a front-end designer.

CONTEXT:
Business type: [SERVICE TYPE]
Approved visual direction: [PASTE]
Hero image available: [YES / NO / URL]

TASK:
Design 2-3 hero section concepts for this [SERVICE TYPE] homepage.
For each concept:
1. Layout (split / full-bleed / centered)
2. Headline
3. Subheadline
4. Primary CTA text
5. Secondary CTA text
6. Image description
7. Trust signal (if any — must be verifiable)

CONSTRAINTS:
- Hero must sell finished value, not defect.
- No fake before/after proof.
- No unverified trust claims (licensed, insured, 5-star, years).
- Headline must be defensible without credentials.

OUTPUT FORMAT:
2-3 hero concepts. Request approval before building.
```

---

## Prompt 8 — Hero Critique

```
ROLE: You are a UX critic and conversion specialist.

CONTEXT:
Live URL or screenshot: [URL or ATTACHED]
Business type: [SERVICE TYPE]
Approved positioning: [PASTE]

TASK:
Critique the current hero section.
Evaluate:
1. Does the headline communicate the positioning clearly?
2. Does the image show finished value or defect?
3. Is the primary CTA clear and above the fold?
4. Are there any unverified claims?
5. Does the hero work on mobile (375px)?
6. What is the single most important improvement?

CONSTRAINTS:
- Do not suggest adding fake trust claims.
- Do not suggest redesigning the entire page.
- Focus on the hero section only.

OUTPUT FORMAT:
Critique with P0/P1/P2 findings and one recommended fix.
```

---

## Prompt 9 — Homepage Architecture

```
ROLE: You are a homepage architect.

CONTEXT:
Business type: [SERVICE TYPE]
Approved positioning: [PASTE]
Approved visual direction: [PASTE]
Conversion strategy: [PASTE]

TASK:
Define the homepage section structure.
For each section:
1. Section name
2. Purpose
3. Content notes
4. CTA (if any)
5. Trust signal (if any — must be verifiable)
6. Flag if real facts are required

CONSTRAINTS:
- No portfolio section without real photos.
- No testimonials without real reviews.
- No service area map without real address.
- Scenarios block = request categories, not portfolio.

OUTPUT FORMAT:
Section map (ordered list). Flag any section requiring real facts. Request approval before building.
```

---

## Prompt 10 — Coding Agent Implementation Task

```
ROLE: You are a coding agent implementing a premium local service homepage.

CONTEXT:
Repository: [GITHUB REPO URL]
Live URL: [URL]
Approved section map: [PASTE]
Approved visual direction: [PASTE]
Approved copy brief: [PASTE]
Current stable commit: [HASH]

TASK:
Build the full homepage at [PREVIEW ROUTE or ROOT].
Implement all approved sections with correct HTML, CSS, and JS.

ALLOWED FILES:
- index.html (or [PREVIEW ROUTE FILE])
- assets/css/preview-styles.css
- assets/js/preview-main.js
- assets/img/* (read only — do not replace approved hero)

FORBIDDEN:
- Do not edit README.md, sitemap.xml, robots.txt.
- Do not add LocalBusiness schema.
- Do not add fake claims.
- Do not promote to root until QA passes.

FAKE-PROOF GUARDRAILS:
Forbidden: licensed, insured, bonded, 5-star, top-rated, years of experience, guaranteed, same-day, emergency, 24/7, completed projects, Our Work, portfolio, real address, exact radius.
Allowed: scope reviewed before scheduling, request reviewed by location/scope, photo-based request language, some work may require permits or licensed trades.

QA WIDTHS: 430, 390, 375, 360, 320 (mobile) | 1440, 1366 (desktop)

COMMIT MESSAGE: [DESCRIBE WHAT WAS BUILT]

FINAL REPORT:
- Files changed
- Sections implemented
- Mobile QA result
- Desktop QA result
- No fake claims confirmed
- Commit hash
```

---

## Prompt 11 — QA-Only

```
ROLE: You are a QA engineer. Do not edit any files. Do not commit.

CONTEXT:
Repository: [GITHUB REPO URL]
Live URL: [URL]
Latest commit: [HASH]

TASK:
Verify the current live root page.

CHECKS:
1. Root shows final [BUSINESS TYPE] homepage (not old hub)
2. No old preview routes linked from root
3. No horizontal overflow on mobile
4. Service area text/chips readable
5. Scenario swipe works
6. FAQ works
7. Hamburger works
8. Sticky CTA appears/disappears correctly
9. No forbidden claims in visible copy
10. Required assets load (CSS, JS, hero image)

MOBILE WIDTHS: 430, 390, 375, 360, 320
DESKTOP WIDTHS: 1440, 1366

DO NOT TOUCH: Any files. Any commits.

OUTPUT FORMAT:
PASS / FAIL summary + P0/P1/P2/P3 findings.
```

---

## Prompt 12 — Sticky CTA / Mobile UX QA

```
ROLE: You are a mobile UX QA engineer. Do not edit any files.

CONTEXT:
Live URL: [URL]
Latest commit: [HASH]

TASK:
Verify the sticky CTA and mobile layout.

CHECKS:
1. Sticky CTA appears only after hero scroll
2. Sticky CTA hides during active scroll
3. Sticky CTA reappears after scroll stops
4. Primary button (Request Estimate) readable on light and dark backgrounds
5. Secondary button (Call) readable on light and dark backgrounds
6. Secondary button text is not white-on-white
7. Sticky CTA does not cover important card text
8. Sticky CTA respects iPhone safe-area-inset-bottom
9. Sticky CTA is hidden on desktop (>=760px)
10. No horizontal overflow

MOBILE WIDTHS: 430, 390, 375, 360, 320

DO NOT TOUCH: Any files. Any commits.

OUTPUT FORMAT:
Sticky CTA verdict table + P0/P1/P2 findings.
```

---

## Prompt 13 — Deployment Diagnostic

```
ROLE: You are a deployment engineer.

CONTEXT:
Repository: [GITHUB REPO URL]
Expected live URL: [URL]
GitHub Pages branch: [main or gh-pages]
Custom domain: [DOMAIN]

TASK:
Verify the deployment is working correctly.

CHECKS:
1. Custom domain resolves (HTTP 200)
2. HTTPS active
3. Correct content served (not old hub, not 404)
4. Required assets load (CSS, JS, hero image)
5. No mixed content
6. GitHub Pages CNAME file present
7. Custom domain verified in GitHub settings

DO NOT TOUCH: Any files. Any commits.

OUTPUT FORMAT:
Deployment status report with HTTP status codes for each check.
```

---

## Prompt 14 — Root Promotion

```
ROLE: You are a coding agent promoting the final homepage to the canonical root.

CONTEXT:
Repository: [GITHUB REPO URL]
Current preview route: [PREVIEW ROUTE FILE]
Files to delete: [LIST OLD PREVIEW ROUTE FILES]
QA sign-off commit: [HASH]

TASK:
1. Copy [PREVIEW ROUTE FILE] to index.html (or confirm index.html is already the final homepage).
2. Delete all old preview route files: [LIST]
3. Verify root serves final homepage.
4. Verify old routes return 404.

ALLOWED FILES:
- index.html
- [OLD PREVIEW ROUTE FILES] (delete only)

FORBIDDEN:
- Do not edit CSS, JS, or assets.
- Do not add fake claims.
- Do not add schema or sitemap entry.

COMMIT MESSAGE: Promote final homepage to root and remove preview routes

FINAL REPORT:
- Files changed/deleted
- Root HTTP status
- Old routes HTTP status (all should be 404)
- Commit hash
```

---

## Prompt 15 — Cleanup / Archive

```
ROLE: You are a coding agent cleaning up old preview routes.

CONTEXT:
Repository: [GITHUB REPO URL]
Files to delete: [LIST]
Files to keep: index.html, assets/*, README.md

TASK:
Delete all listed old preview route files.
Verify each deleted route returns 404 on the live domain.

ALLOWED: Delete only the listed files.

FORBIDDEN:
- Do not edit index.html.
- Do not edit CSS, JS, or assets.
- Do not add or remove any other files.

COMMIT MESSAGE: Remove old preview routes

FINAL REPORT:
- Files deleted
- HTTP status for each deleted route (should be 404)
- Commit hash
```

---

## Prompt 16 — Lighthouse / Accessibility / SEO Audit

```
ROLE: You are a technical auditor. Do not edit any files. Do not commit.

CONTEXT:
Live URL: [URL]
Latest commit: [HASH]

TASK:
Run a read-only Lighthouse / accessibility / SEO audit.

CHECKS:
1. Title and meta description present
2. Canonical link present
3. robots meta present
4. Open Graph tags present
5. Twitter card tags present
6. Favicon present
7. H1 count = 1
8. Heading structure logical
9. Skip link present
10. ARIA labels on hamburger and mobile menu
11. Focus styles present
12. WCAG AA contrast for all normal-size text
13. Hero image has alt text, width, height, fetchpriority
14. No console errors
15. No missing required assets
16. No fake LocalBusiness schema
17. No forbidden claims

DO NOT TOUCH: Any files. Any commits.

OUTPUT FORMAT:
A. PASS/FAIL summary
B. Estimated Lighthouse scores (if tool available)
C. Findings by P0/P1/P2/P3 severity
D. Exact evidence per finding
E. Recommended next step
```

---

## Prompt 17 — README / Snapshot Documentation

```
ROLE: You are a technical writer. Do not edit production website files.

CONTEXT:
Repository: [GITHUB REPO URL]
Stable commit: [HASH]
Live URL: [URL]
Project history: [PASTE KEY COMMITS]

TASK:
Update README.md and create/update PROJECT-SNAPSHOT.md.

README must include:
1. Project purpose
2. Canonical live URL
3. Current architecture (root = final homepage, old routes = 404)
4. Stable commit history
5. Key files
6. Demo limitations
7. Fake-proof content guardrails
8. QA checklist
9. Launch-readiness checklist

PROJECT-SNAPSHOT must include:
1. Project name and live URL
2. Stable commit
3. Current status
4. Approved visual direction
5. Approved hero image
6. Homepage sections in order
7. Key CSS tokens
8. Known limitations
9. Do-not-touch list
10. Next recommended steps
11. QA sign-off table

ALLOWED FILES: README.md, PROJECT-SNAPSHOT.md only.

FORBIDDEN: Do not edit index.html, CSS, JS, assets, sitemap.xml, robots.txt.

COMMIT MESSAGE: Update documentation for stable [PROJECT NAME] snapshot
```

---

## Prompt 18 — Launch-Readiness

```
ROLE: You are a launch-readiness auditor. Do not edit any files.

CONTEXT:
Live URL: [URL]
Latest stable commit: [HASH]

TASK:
Verify all launch-readiness criteria.

CHECKS:
1. Canonical link present and correct
2. OG tags present
3. Twitter card tags present
4. Favicon present
5. noindex decision documented
6. Placeholder phone replaced (or documented as remaining)
7. Real contact form working (or documented as remaining)
8. Real business facts verified (or documented as remaining)
9. No forbidden claims
10. No fake LocalBusiness schema
11. Old routes return 404
12. Required assets load
13. Mobile QA passes
14. Desktop QA passes

DO NOT TOUCH: Any files. Any commits.

OUTPUT FORMAT:
GO / NO-GO decision + explicit list of remaining blockers.
```

---

## Prompt 19 — Handoff to New Chat

```
ROLE: You are a coding agent receiving a project handoff.

CONTEXT:
Repository: [GITHUB REPO URL]
Live URL: [URL]
Current HEAD commit: [HASH]
Stable website commit: [HASH]
Project snapshot: [PASTE PROJECT-SNAPSHOT.md CONTENT]
README: [PASTE README.md CONTENT]

CURRENT STATE:
- Root is the final [BUSINESS TYPE] homepage.
- Old preview routes are deleted and return 404.
- noindex, nofollow is active.
- Placeholder phone: tel:0000000000.
- No real contact form yet.
- No LocalBusiness schema.

DO NOT TOUCH:
- index.html (page structure, hero, copy, contact flow)
- assets/img/* (approved hero)
- assets/js/preview-main.js
- sitemap.xml
- robots.txt
- Old preview routes (already deleted)
- noindex (do not remove)
- Phone placeholder (do not replace)
- No LocalBusiness schema
- No fake claims

FAKE-PROOF GUARDRAILS:
Forbidden: licensed, insured, bonded, 5-star, top-rated, years of experience, guaranteed, same-day, emergency, 24/7, completed projects, Our Work, portfolio, real address, exact radius.
Allowed: scope reviewed before scheduling, request reviewed by location/scope, photo-based request language, some work may require permits or licensed trades.

TASK:
[DESCRIBE THE SPECIFIC TASK FOR THIS CHAT]

COMMIT MESSAGE: [DESCRIBE WHAT WILL BE CHANGED]

FINAL REPORT FORMAT:
[SPECIFY REPORT FORMAT]
```
