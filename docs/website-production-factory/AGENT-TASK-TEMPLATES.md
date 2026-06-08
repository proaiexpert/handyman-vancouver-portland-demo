# Website Production Factory — Agent Task Templates

Version: 1.0 | Source: Handyman Website v2

Precise task templates for coding agents at each phase of the Website Production Factory.
All templates are in English. Fill in [BRACKETED] placeholders before use.

---

## Template 1 — Full Implementation Task

```
TASK: Build [BUSINESS TYPE] homepage

Repository: [GITHUB REPO URL]
Live URL: [URL or NONE]
Task type: Full homepage implementation

Allowed files to edit:
- index.html (or [PREVIEW ROUTE FILE])
- assets/css/preview-styles.css
- assets/js/preview-main.js

Forbidden files:
- README.md
- PROJECT-SNAPSHOT.md
- docs/ (do not overwrite factory documentation during website build tasks)
- sitemap.xml
- robots.txt
- assets/img/* (read only — do not replace approved hero)
- Any old preview route files

What to build:
[PASTE APPROVED SECTION MAP]

Visual direction:
[PASTE APPROVED VISUAL DIRECTION BRIEF]

Copy brief:
[PASTE APPROVED COPY BRIEF]

What NOT to change:
- Do not promote to root until QA passes
- Do not add LocalBusiness schema
- Do not add sitemap entry
- Do not remove noindex (if present)
- Do not replace placeholder phone

Fake-proof guardrails:
Forbidden: licensed, insured, bonded, 5-star, top-rated, years of experience, guaranteed,
same-day, emergency, 24/7, completed projects, Our Work, portfolio, real address, exact radius.
Allowed: scope reviewed before scheduling, request reviewed by location/scope,
photo-based request language, some work may require permits or licensed trades.

QA widths: 430, 390, 375, 360, 320 (mobile) | 1440, 1366 (desktop)

Commit message: [DESCRIBE WHAT WAS BUILT]

Final report:
A. Files changed
B. Sections implemented
C. Mobile QA result (all 5 widths)
D. Desktop QA result (both widths)
E. No fake claims confirmed
F. Commit hash
```

---

## Template 2 — QA-Only Task

```
TASK: QA-only live verification

Repository: [GITHUB REPO URL]
Live URL: [URL]
Latest commit: [HASH]
Task type: QA only. Do not edit files. Do not commit.

Verify:
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

Mobile widths: 430, 390, 375, 360, 320
Desktop widths: 1440, 1366

JS overflow checks:
- document.documentElement.scrollWidth <= window.innerWidth + 1
- document.body.scrollWidth <= window.innerWidth + 1

Forbidden claims to check:
licensed, insured, bonded, 5-star, top-rated, years of experience, guaranteed,
same-day, emergency, 24/7, completed projects, Our Work, portfolio, real address,
exact radius, serving all [CITY] metro

Do not edit any files. Do not commit.

Final report:
A. PASS / FAIL summary
B. Tested environments
C. Findings by P0/P1/P2/P3 severity
D. Do-not-touch confirmation
```

---

## Template 3 — Targeted CSS / Mobile Fix

```
TASK: [DESCRIBE SPECIFIC CSS/MOBILE ISSUE]

Repository: [GITHUB REPO URL]
Live URL: [URL]
Latest commit: [HASH]
Task type: Targeted CSS/mobile fix only.

Allowed files to edit:
- assets/css/preview-styles.css
- index.html (inline styles only, if needed)

Forbidden files:
- assets/js/preview-main.js
- assets/img/*
- README.md
- sitemap.xml
- robots.txt

Problem:
[DESCRIBE THE EXACT ISSUE WITH EVIDENCE]

Required fix:
[DESCRIBE THE EXACT FIX]

What NOT to change:
- Do not change page structure
- Do not change hero image
- Do not change copy
- Do not add fake claims
- Do not add schema or sitemap entry

QA widths: 430, 390, 375, 360, 320 (mobile) | 1440, 1366 (desktop)

Commit message: [DESCRIBE FIX]

Final report:
A. Files changed
B. Exact CSS selectors changed
C. Before/after values
D. QA result at all mobile widths
E. Desktop regression check
F. Commit hash
```

---

## Template 4 — Sticky CTA Fix

```
TASK: Fix sticky CTA [DESCRIBE ISSUE]

Repository: [GITHUB REPO URL]
Live URL: [URL]
Latest commit: [HASH]
Task type: Targeted sticky CTA fix only.

Allowed files to edit:
- assets/css/preview-styles.css
- index.html (inline styles and JS only)

Forbidden files:
- assets/js/preview-main.js — JS edits are allowed ONLY if the confirmed bug is behavior-related
  (show/hide timing, scroll-pause behavior, safe state toggling, menu interaction).
  CSS-only visual issues must NOT trigger JS edits.
  If JS is edited, the agent must state:
    1. The confirmed behavior bug
    2. Why CSS cannot solve it
    3. Exact function/listener changed
    4. Regression checks run
- assets/img/*
- README.md
- sitemap.xml
- robots.txt

Known successful scroll-pause pattern (Handyman v2, commit fa445e4):
- Sticky CTA hides immediately on scroll start (scrolling class added)
- isScrolling state is set to true
- Existing visible state is removed during active scroll
- A timer (clearTimeout + setTimeout) restores visibility after scroll stops
- Delay used in Handyman v2: 400ms
- Bottom section clearance (padding-bottom on content sections) remains CSS-controlled

Problem:
[DESCRIBE THE EXACT STICKY CTA ISSUE]

Required fix:
[DESCRIBE THE EXACT FIX]

Do NOT:
- Return to a hard full-width white rectangular bar
- Remove sticky CTA entirely
- Make CTA permanently invisible
- Change page structure
- Add fake claims

Sticky CTA requirements:
- Primary button (Request Estimate): amber filled, dark text, strong contrast
- Secondary button (Call): near-white frosted, deep navy text, visible border, shadow
- Both buttons: 44px+ tap target, pill shape
- Outer container: transparent or very subtle
- Respect env(safe-area-inset-bottom)
- Hidden on desktop (>=760px)

QA widths: 430, 390, 375, 360, 320 (mobile)

Commit message: [DESCRIBE FIX]

Final report:
A. Files changed
B. Exact selectors changed
C. Call button visible on light background: yes/no
D. Call button visible on dark background: yes/no
E. Sticky CTA overlap: yes/no
F. Desktop sticky CTA hidden: yes/no
G. Commit hash
```

---

## Template 5 — Head Metadata Fix

```
TASK: Add head metadata to index.html

Repository: [GITHUB REPO URL]
Live URL: [URL]
Latest commit: [HASH]
Task type: Head metadata fix only.

Allowed files to edit:
- index.html (head section only)

Forbidden files:
- assets/css/preview-styles.css
- assets/js/preview-main.js
- assets/img/*
- README.md
- sitemap.xml
- robots.txt

Required additions to <head>:
1. <link rel="canonical" href="[CANONICAL URL]">
2. <meta name="robots" content="[noindex, nofollow OR index, follow]">
3. <link rel="icon" href="/favicon.ico">
4. <meta property="og:type" content="website">
5. <meta property="og:title" content="[TITLE]">
6. <meta property="og:description" content="[DESCRIPTION]">
7. <meta property="og:url" content="[URL]">
8. <meta property="og:image" content="[IMAGE URL]">
9. <meta property="og:image:alt" content="[ALT TEXT]">
10. <meta name="twitter:card" content="summary_large_image">
11. <meta name="twitter:title" content="[TITLE]">
12. <meta name="twitter:description" content="[DESCRIPTION]">
13. <meta name="twitter:image" content="[IMAGE URL]">

Do NOT:
- Add LocalBusiness schema
- Add sitemap entry
- Remove noindex (unless explicitly instructed)
- Change page structure, copy, or design

Commit message: Add head metadata

Final report:
A. Exact tags added
B. Canonical URL confirmed
C. robots directive confirmed
D. OG tags confirmed live
E. Twitter tags confirmed live
F. Favicon accessible (HTTP 200)
G. Commit hash
```

---

## Template 6 — Contrast / Accessibility Fix

```
TASK: Fix [DESCRIBE CONTRAST/ACCESSIBILITY ISSUE]

Repository: [GITHUB REPO URL]
Live URL: [URL]
Latest commit: [HASH]
Task type: Targeted contrast/accessibility fix only.

Allowed files to edit:
- assets/css/preview-styles.css
- index.html (inline styles only, if needed)

Forbidden files:
- assets/js/preview-main.js
- assets/img/*
- README.md
- sitemap.xml
- robots.txt

Problem:
[DESCRIBE THE EXACT CONTRAST OR ACCESSIBILITY ISSUE]
Current contrast ratio: [X:1]
Required ratio: [4.5:1 for normal text / 3:1 for large text]

Required fix:
[DESCRIBE THE EXACT FIX]

Do NOT:
- Change the global --cta button background color
- Change sticky CTA primary button background
- Change dark-section text that already passes contrast
- Change page structure, hero, or copy
- Add fake claims

Contrast verification:
After fix, calculate and report:
- New color on light background: [X:1]
- New color on white background: [X:1]
- WCAG AA pass/fail

Commit message: [DESCRIBE FIX]

Final report:
A. Files changed
B. Exact selectors changed
C. Before/after color values
D. Contrast ratios (before and after)
E. WCAG AA result
F. Visual regression check (buttons still look correct)
G. Commit hash
```

---

## Template 7 — Route Cleanup / Root Promotion

```
TASK: Promote final homepage to root and remove preview routes

Repository: [GITHUB REPO URL]
Live URL: [URL]
Latest commit: [HASH]
Task type: Route cleanup and root promotion.

Allowed files:
- index.html (replace with final homepage content)
- [LIST ALL OLD PREVIEW ROUTE FILES TO DELETE]

Forbidden files:
- assets/css/preview-styles.css
- assets/js/preview-main.js
- assets/img/*
- README.md
- sitemap.xml
- robots.txt

Steps:
1. Confirm [FINAL HOMEPAGE FILE] is the approved homepage.
2. Copy [FINAL HOMEPAGE FILE] to index.html (or confirm index.html is already correct).
3. Delete all old preview route files:
   [LIST FILES]
4. Verify root serves final homepage (HTTP 200, correct content).
5. Verify each deleted route returns 404.

Do NOT:
- Edit CSS, JS, or assets
- Add fake claims
- Add schema or sitemap entry
- Leave any old route files behind

Commit message: Promote final homepage to root and remove preview routes

Final report:
A. Files changed/deleted
B. Root HTTP status and content confirmed
C. Each deleted route HTTP status (all should be 404)
D. No fake claims confirmed
E. Commit hash
```

---

## Template 8 — README / Snapshot Documentation Update

```
TASK: Update documentation for stable [PROJECT NAME] snapshot

Repository: [GITHUB REPO URL]
Live URL: [URL]
Current stable commit: [HASH]
Task type: Documentation only. Do not edit production website files.

Allowed files to edit:
- README.md
- PROJECT-SNAPSHOT.md (create if not exists)

Forbidden files:
- index.html
- assets/css/preview-styles.css
- assets/js/preview-main.js
- assets/img/*
- sitemap.xml
- robots.txt

README must include:
1. Project purpose
2. Canonical live URL
3. Current architecture (root = final homepage, old routes = 404)
4. Stable commit history: [PASTE COMMITS]
5. Key files
6. Demo limitations
7. Fake-proof content guardrails
8. QA checklist
9. Launch-readiness checklist

PROJECT-SNAPSHOT must include:
1. Project name and live URL
2. Stable commit: [HASH]
3. Current status: [DEMO / PRODUCTION]
4. Approved visual direction
5. Approved hero image
6. Homepage sections in order
7. Key CSS tokens
8. Known limitations
9. Do-not-touch list
10. Next recommended steps
11. QA sign-off table

Do NOT:
- Edit any production website files
- Add fake claims
- Remove noindex
- Add sitemap entry
- Add LocalBusiness schema

Commit message: Update documentation for stable [PROJECT NAME] snapshot

Final report:
A. Files changed
B. Summary of README changes
C. Summary of PROJECT-SNAPSHOT changes
D. Confirmation no production files were touched
E. Commit hash
```

---

## Template 9 — Lighthouse / Accessibility / SEO Audit

```
TASK: Lighthouse / accessibility / SEO audit

Repository: [GITHUB REPO URL]
Live URL: [URL]
Latest commit: [HASH]
Task type: Audit only. Do not edit files. Do not commit.

Audit scope:
1. Performance (hero image, render-blocking, CLS)
2. Accessibility (H1, ARIA, contrast, skip link, focus styles)
3. SEO (title, description, canonical, OG, Twitter, favicon, robots)
4. Technical hygiene (console errors, missing assets, overflow, fake claims)

Contrast pairs to check:
- Normal text on page background
- Muted text on page background
- Sticky CTA primary button text on button background
- Sticky CTA secondary button text on button background
- Nav links on header background
- Any amber text on light/warm-white backgrounds

Forbidden claims to check:
licensed, insured, bonded, 5-star, top-rated, years of experience, guaranteed,
same-day, emergency, 24/7, completed projects, Our Work, portfolio, real address,
exact radius, LocalBusiness schema with unverified facts

Do not edit any files. Do not commit.

Final report:
A. PASS / FAIL summary
B. Lighthouse scores (if available) or manual equivalent
C. Findings by P0/P1/P2/P3 severity
D. Exact evidence per finding (selector, value, ratio)
E. Do-not-touch confirmation
F. Recommended next step
```

---

## Template 10 — Launch-Readiness Audit

```
TASK: Launch-readiness audit

Repository: [GITHUB REPO URL]
Live URL: [URL]
Latest stable commit: [HASH]
Task type: Audit only. Do not edit files. Do not commit.

Verify all launch-readiness criteria:

Metadata:
- Canonical link present and correct
- OG tags present (type, title, description, url, image, image:alt)
- Twitter card tags present
- Favicon accessible (HTTP 200)
- robots meta decision documented

Business data:
- Placeholder phone replaced (or documented as remaining)
- Real contact form working (or documented as remaining)
- Real business name confirmed (or documented as remaining)
- Real service area confirmed (or documented as remaining)

Content:
- No forbidden claims
- No fake LocalBusiness schema
- Allowed language present (scope reviewed, photo-based request)

Technical:
- Old routes return 404
- Required assets load (CSS, JS, hero image)
- Mobile QA passes (430, 390, 375, 360, 320)
- Desktop QA passes (1440, 1366)
- No console errors

Do not edit any files. Do not commit.

Final report:
GO / NO-GO decision
Explicit list of remaining blockers with severity
Recommended next step
```
---

## Template 11 — Request Page / Contact Flow

```
TASK — Build or refine /request/ page

Repository: [REPO_URL]
Current known commit: [COMMIT_HASH]
Live URL: [LIVE_URL]/request/

Task type: Targeted /request/ page build or refactor.

Goal:
Build or refine the /request/ page to support two user intents:
1. Quick Question — low-friction path for uncertain users
2. Repair Request — detailed path for users ready to provide scope

Do not create a separate /estimate/ or /contact/ page.
Do not connect a real form endpoint.
Do not remove noindex.
Do not add schema.
Do not update sitemap.

Allowed files:
- request/index.html
- index.html (only if fixing broken CTA links)

Do not edit:
- assets/css/preview-styles.css
- assets/js/preview-main.js
- assets/img/*
- README.md / PROJECT-SNAPSHOT.md / CHANGELOG.md
- docs/website-production-factory/*
- sitemap.xml / robots.txt

Required form behavior:
- Path selector: Quick Question (default off) / Repair Request (default on)
- Path selector uses aria-pressed on buttons
- Switching path updates visible fields, labels, and submit button text
- Shared required fields: Best contact method + message/question
- Repair Request additional required: City/ZIP + Request type
- No forced separate phone and email fields
- Submit button uses <span id="submit-label"> — not nextSibling.textContent
- Demo-safe submit: "Details are ready. A live contact endpoint can be connected before launch."
- No fake delivery claim. No fake upload. No fake response time.

Photo behavior:
- No real file upload unless endpoint is live
- Use photo notes textarea or photo checklist section
- Copy: "Photo delivery can be connected before launch."

Fake-proof guardrails:
Forbidden: licensed (as self-claim), insured, bonded, 5-star, top-rated, years of experience,
guaranteed, same-day, emergency, 24/7, instant estimate, exact price, real address, exact radius.
Allowed: scope reviewed, request reviewed by location/type/scope, photo-based request,
some work may require permits or licensed trades.

QA widths: 430, 390, 375, 360, 320 (mobile) | 1440, 1366 (desktop)

Verify:
- Path selector switches correctly
- Quick Question shows compact fields
- Repair Request shows detailed fields
- Submit label updates on path switch
- Validation works (required fields, focus, aria-live)
- Demo-safe status message appears
- No fake delivery claim
- No horizontal overflow
- Header/footer links correct from subdirectory
- Homepage CTAs still point to /request/ or /request/#photo-checklist

Commit message: [DESCRIBE CHANGE]

Final report:
A. Files changed
B. Form UX changes
C. Quick Question behavior
D. Repair Request behavior
E. Photo/file behavior
F. Header/footer/link QA
G. Mobile/desktop QA
H. Demo-safe submit/validation
I. No forbidden files touched
J. No sitemap/robots/schema/backend added
K. Commit hash
```
