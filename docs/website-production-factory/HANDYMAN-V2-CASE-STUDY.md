# Handyman Website v2 — Case Study

First stable reference case for the ProAI Expert Website Production Factory.

---

## 1. Project Summary

A production-like demo homepage for a local handyman / home repair service concept
serving Vancouver, WA and nearby Clark County areas.

This project was built as the first test case for the ProAI Expert Website Production Factory
workflow — a repeatable system for producing premium local-service websites.

The site is demo-ready but not real public-launch-ready. Placeholder business data remains.
The business represented is a demo concept, not a verified real business.

---

## 2. Strategic Direction

**Premium Local Repair Pro — Pacific Northwest Edition**

Positioning: Thoughtful home repairs, trim fixes, touch-ups, and maintenance details.
Not a general contractor. Not a franchise. A focused, scope-reviewed local repair service.

Tone: Calm, competent, honest about scope. No fake trust claims.

Key differentiator: Process clarity over fake credentials.
The site explains how requests are reviewed, not how many stars the business has.

---

## 3. Final Canonical URL

https://proai-expert.com/handyman-vancouver-portland-demo/

---

## 4. Stable Website Commit

`1cda438` — Add head metadata and contrast-safe amber text

---

## 5. Documentation Snapshot Commit

`4a85815` — Update documentation for stable root demo snapshot

---

## 6. Key Design Decisions

### Hero sells finished value, not defect
The hero image shows a premium Pacific Northwest entryway with finished trim, warm wood,
and a dark front door. It communicates the result of good repair work, not the problem.
This was a deliberate choice: showing damage or defects in the hero creates anxiety,
not confidence.

### No fake before/after proof
The scenarios block uses request categories (Trim detail, Wall refresh, Door detail, etc.)
not before/after photos of real projects. This avoids the need for verified real project photos
while still communicating the scope of work the business handles.

### Process clarity over fake trust claims
Instead of "licensed, insured, 5-star," the site explains the request review process:
1. Tell us what needs attention
2. Share a few photos
3. We review the scope
4. Confirm the next step

This is honest, defensible, and more useful to the customer than unverified credentials.

### Abstract service area card, not real Google Map
The service area section uses an abstract dark card with city chips and scope-reviewed language.
No real Google Map is embedded because no real address is verified.
This avoids the fake-proof failure of showing a map pin at a placeholder address.

### Scenarios block as request categories, not portfolio
The horizontal swipe gallery shows named repair categories with card CTAs.
It is explicitly NOT a portfolio of completed work. No real project photos are used.
This pattern is reusable for any local service business without real photos.

---

## 7. Key Technical Lessons

### Mobile QA after every visual block
Horizontal overflow and clipping issues were found after adding the service area chips
and scenario gallery. These would have been caught earlier with mobile QA after each block.
Lesson: run mobile overflow checks (scrollWidth <= innerWidth+1) after every new section.

### Horizontal galleries need overflow containment
The scenario gallery uses `overflow-x: auto` with `scroll-snap-type: x mandatory`.
Without explicit `overflow-x: hidden` on the parent and `max-width: 100%` on the container,
the gallery caused body-level horizontal overflow on mobile.

### Sticky CTA needs state-locked link colors
The global `a { color: inherit; }` rule caused the sticky CTA secondary button text
to inherit the section's text color (white on dark sections), making it invisible on light sections.
Fix: use explicit `color` + `-webkit-text-fill-color` on all states
(`:visited`, `:hover`, `:active`, `:focus`) with high specificity.

### iOS Safari may need -webkit-text-fill-color
iOS Safari can override `color` on `<a>` elements via system link color or `:visited` state.
Adding `-webkit-text-fill-color` alongside `color` locks the text color on all states.
This is especially important for sticky CTA buttons that use `<a>` tags.

### Custom domain verification matters
GitHub Pages requires the custom domain to be verified in GitHub settings.
Without verification, another GitHub user could claim the domain.
Always verify the custom domain in GitHub Settings > Pages after DNS configuration.

### Route cleanup after final selection matters
The project started with 6+ preview routes at named paths.
After selecting the final homepage, the old routes were left active for too long,
causing confusion about which page was canonical.
Lesson: delete old preview routes immediately after root promotion.

---

## 8. Major Issue Timeline

| Issue | Phase | Resolution |
|---|---|---|
| Old route hub confusion | After root promotion | Deleted all old preview routes in commit 01c97ca |
| Scenario gallery overflow | Mobile QA | Added overflow containment and scroll-snap |
| Service area chip clipping | Mobile QA | Added flex-wrap and overflow-wrap rules |
| Sticky CTA Call invisibility | Mobile QA (real iPhone) | Added full state selector coverage + -webkit-text-fill-color in fa445e4 |
| Sticky CTA overlap | Mobile QA (real iPhone) | Added scroll-pause JS + section bottom padding in fa445e4 |
| Missing head metadata | Lighthouse audit | Added canonical, OG, Twitter, favicon, noindex in 1cda438 |
| Amber text contrast fail | Lighthouse audit | Added --cta-text: #9E5F10 variable and applied to light-bg selectors in 1cda438 |

---

## 9. Fake-Proof Lessons

### Do not claim license/insurance/reviews/years
Every local service website template defaults to "licensed, insured, bonded, 5-star."
These claims require verification. Without verification, they are fabrications.
This project proved that a premium, conversion-focused homepage can be built
without any of these claims.

### Do not use Our Work/portfolio without real photos
The scenarios block was specifically designed to avoid the portfolio trap.
Using request categories instead of project photos means the site is honest
about what it is: a demo concept, not a verified business with a real track record.

### Do not add LocalBusiness schema with unknown business facts
LocalBusiness schema requires verified name, address, phone, and category.
Adding schema with placeholder data (tel:0000000000, no real address) is worse than
omitting it — it creates false structured data that search engines may surface.
This project intentionally omits schema until real facts are verified.

---

## 10. Reusable Patterns

### Scope-reviewed copy
Instead of claiming instant quotes or guaranteed responses, use:
- "scope reviewed before scheduling"
- "request reviewed by location, project type, and scope"
- "availability depends on project type, location, and scope"

This pattern is honest, defensible, and works for any local service business.

### Photo-based request flow
A 4-step process (describe > photos > review > next step) replaces the fake
"get an instant quote" CTA. This is honest about how local service businesses
actually work and sets correct expectations.

### Service-area-by-scope wording
Instead of claiming a specific mile radius, use:
- "[Primary city]-first"
- "[Secondary areas] reviewed by scope"
- "[Distant area] requests can be reviewed by location and project scope"

This is honest about coverage uncertainty and avoids the fake exact-radius claim.

### noindex until real launch
Adding `noindex, nofollow` during the demo phase prevents search engines from
indexing placeholder content. This is the correct default for any demo or staging site.
Remove only when real business facts are verified and the site is ready for public indexing.

---

## 11. Remaining Limitations

- Placeholder phone: `tel:0000000000` — not a real phone number
- No real contact form or submission endpoint
- No verified business name, address, license, insurance, or reviews
- No `LocalBusiness` schema
- Not in `sitemap.xml` (intentional while noindex is active)
- No real Google Map or exact service radius
- No real portfolio or completed project photos
- No dedicated OG image (hero image used as fallback)
- No privacy policy or legal pages
- H2 appears before H1 in DOM order (aside request card) — P2 accessibility item

---

## 12. Next Steps if Turning into Real Launch

1. **Replace placeholder phone** with real business phone number.

2. **Wire up real contact form** — connect form submission to email, CRM, or booking system.

3. **Verify real business facts** — confirm business name, service area, license status
   (if applicable), and any trust signals that will be claimed.

4. **Replace hero image** (if needed) — the current hero is a demo image.
   For a real launch, use a real photo of the business owner's work or a verified stock photo.

5. **Remove noindex, nofollow** — only after all placeholder data is replaced.

6. **Add sitemap entry** — only after noindex is removed.

7. **Add LocalBusiness schema** — only after business name, address, phone, and category
   are verified. Do not add schema with placeholder data.

8. **Add real OG image** — if the hero image is not appropriate for social sharing,
   create a dedicated 1200x630 OG image.

9. **Add privacy policy and legal pages** — required for any real business collecting
   contact information.

10. **Fix H2-before-H1 DOM order** — the aside request card has an H2 before the hero H1.
    This is a P2 accessibility item that should be fixed before real public launch.

11. **Run real-device iPhone Safari verification** — confirm sticky CTA behavior on
    actual device after all fixes are applied.

12. **Extract to Website Production Factory** — use this project as the reference template
    for the ProAI Expert Website Production Factory. The approved visual direction,
    section structure, CSS tokens, content guardrails, and agent task templates
    are all documented in `docs/website-production-factory/`.
