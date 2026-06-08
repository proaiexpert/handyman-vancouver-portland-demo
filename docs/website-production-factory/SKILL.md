# Website Production Factory — Skill

Version: 1.0 | Source: Handyman Website v2
Repo: https://github.com/proaiexpert/handyman-vancouver-portland-demo

This is the compact operational entrypoint for the Website Production Factory.
For full detail, see the reference docs listed at the bottom of this file.

---

## Purpose

End-to-end system for producing premium local-service websites — from intake through stable
production-like demo — with fake-proof claims, mobile QA, deployment discipline, and reusable
documentation. Designed for agent-driven execution with human approval at phase gates.

---

## When to Use

**Use for:** handyman, plumber, electrician, roofing, cleaning, landscaping, accounting/bookkeeping,
consultants, and other local/professional service businesses.

**Do not use for:**
- Highly regulated claims without verified facts
- Live launch with fake or placeholder business data
- Schema/sitemap/indexing before real facts are verified
- Broad "improve everything" tasks without a defined scope

---

## Operating Principles

1. **Facts vs assumptions** — Never fabricate business facts. Label every assumption explicitly.
2. **Fake-proof first** — Apply claim safety rules from intake through launch. No exceptions.
3. **Small controlled tasks** — One task per commit. Allowed/forbidden file lists on every task.
4. **Ask vs proceed** — Stop and ask when a required fact is missing. Proceed with labeled defaults only for non-critical, non-regulated items.
5. **Strategy before code** — Do not implement until positioning, visual direction, and section structure are approved.
6. **Custom-domain verification** — Always verify the custom domain in GitHub Settings > Pages after DNS configuration.
7. **GitHub-only storage** — When the agent lacks local computer access, all deliverables must be committed inside the GitHub repository. Do not reference /Users/..., Desktop, Downloads, or local paths.
8. **Local export is a separate step** — A local-computer agent or process may later copy files from GitHub to the user's machine. The repo is the canonical source.

---

## Core Workflow (20 Phases)

| # | Phase | Output | Gate | Stop when |
|---|---|---|---|---|
| 1 | Intake | Confirmed facts + explicit gaps | All gaps labeled | Business name, service type, or city missing |
| 2 | Market Research | 1-page market summary | Real sources cited | No credible sources for target city/niche |
| 3 | Competitor Research | Competitor matrix | Real URLs only | No real local competitors found |
| 4 | Best-in-Class Examples | Reference list + design DNA | Real accessible URLs | References are broken or fabricated |
| 5 | Positioning | 2-3 positioning options | No unverified claims | Positioning requires fake credentials |
| 6 | Sitemap | Page structure approved | No pages requiring fake facts | Portfolio/reviews page without real content |
| 7 | Conversion Strategy | CTA map | No instant-quote/same-day promises | CTA requires fake guarantee |
| 8 | Copy Strategy | Copy brief + forbidden/allowed lists | No forbidden claims | Copy requires license/insurance/review claims |
| 9 | Visual Direction | Palette, type, hero concept | WCAG AA contrast verified | Colors fail contrast before approval |
| 10 | Hero Concepts | 2-3 hero variants | Sells finished value, not defect | Hero requires fake before/after proof |
| 11 | Homepage Architecture | Section map | No section requires fake facts | Testimonials/portfolio without real content |
| 12 | Prototype / Implementation | Working homepage at preview route | Basic mobile QA passes | Fake claims found in prototype copy |
| 13 | QA | QA report P0/P1/P2/P3 | Zero P0 items | Any P0 found |
| 14 | Deployment | Live on custom domain | HTTPS active, correct content | DNS not propagated |
| 15 | Polish | All P1 items resolved | P2 documented | Stop and escalate if a P1 fix cannot be resolved without creating another P1 regression |
| 16 | Root Promotion | index.html = final homepage | Old routes return 404 | Old routes still active |
| 17 | Launch Readiness | Go/no-go report | Canonical, OG, favicon present | Missing P1 metadata |
| 18 | Documentation Snapshot | README + PROJECT-SNAPSHOT committed | No production files edited | Snapshot missing do-not-touch list |
| 19 | Factory Extraction | docs/website-production-factory/ created | All docs generic for any vertical | Docs hardcode vertical-specific facts |
| 20 | Skill Update | SKILL.md updated with new lessons | Skill is concise and operational | Skill duplicates full source docs |

---

## Claim Safety Rules

### Always forbidden
- licensed *(as self-claim)*
- insured
- bonded
- 5-star
- top-rated
- years of experience
- guaranteed
- same-day
- emergency / 24/7
- completed projects / Our Work / portfolio *(without real approved photos)*
- real address *(without verified address)*
- exact service radius *(without verified coverage)*
- serving all [city] metro
- LocalBusiness schema *(without verified name, address, phone, category)*

### Always allowed
- scope reviewed before scheduling
- request reviewed by location, project type, and scope
- photo-based request and review language
- some work may require permits, licensed trades, or a different provider
- availability depends on project type, location, and scope

---

## Demo vs Real Launch Policy

| State | noindex | Sitemap | Schema | Placeholder data |
|---|---|---|---|---|
| Demo / prototype | Required | No | No | Allowed |
| Production-like demo | Recommended | No | No | Allowed (labeled) |
| Real public launch | Remove | Add after | Add if verified | Replace all |
| Portfolio/case-study | Optional | Optional | No | Not applicable |

**Placeholder data includes:** phone number / tel link, contact form endpoint, email routing, business name, address, service area, license / insurance / bonding status, reviews / portfolio proof.

**Rules:**
- Demo / prototype may use placeholders only when labeled internally or protected by noindex.
- Production-like demo may keep placeholders only when noindex is active and no fake claims are made.
- Real public launch must replace all placeholder phone/form/business facts with verified real data before removing noindex, adding sitemap entry, or adding LocalBusiness schema.
- Add `noindex, nofollow` during any demo phase with placeholder data.
- Do not add sitemap entry while noindex is active.
- Do not add LocalBusiness schema until name, address, phone, and category are verified.
- Remove noindex only when all placeholder data is replaced and the business is ready for indexing.
- Add sitemap entry only after noindex is removed.

---

## Homepage Section Library

| Section | Purpose | Key risk |
|---|---|---|
| Header / nav | Brand anchor, mobile hamburger | Hamburger ARIA missing; desktop nav hidden on mobile |
| Hero | Sell finished value above fold | Shows defect/damage; fake headline claims |
| Value block | Explain what makes this service different | Slips into "licensed, insured" filler |
| Visual scenarios / request categories | Show scope of work without real photos | Becomes fake portfolio if labeled as "Our Work" |
| Services | Full service list with card CTAs | Overpromises scope or availability |
| How-it-works / photo request flow | Set honest expectations for the request process | Promises instant quote or same-day response |
| Scope review | Reinforce that requests are reviewed before scheduling | Weakened to generic filler |
| Service area | City-first, secondary areas reviewed by scope | Claims exact radius or "serving all metro" |
| FAQ | Address common objections honestly | Contains fake trust claims in answers |
| Final CTA | Close with a clear request action | Duplicates fake guarantee language |
| Footer | Contact, nav, legal links | Placeholder phone presented as real |
| Sticky CTA *(mobile only)* | Persistent request action visible during scroll | Covers content; invisible on light backgrounds |

---

## Mobile / Conversion Rules

**Test widths:** 430, 390, 375, 360, 320 (mobile) | 1440, 1366 (desktop)

- **Horizontal overflow:** `document.documentElement.scrollWidth <= window.innerWidth + 1` must be true at all widths.
- **Sticky CTA state locking:** Use explicit `color` + `-webkit-text-fill-color` on all link states (`:visited`, `:hover`, `:active`, `:focus`) to prevent iOS Safari color inheritance.
- **Safe-area bottom:** Apply `env(safe-area-inset-bottom)` to sticky CTA container.
- **Overflow containment:** Scenario galleries use `overflow-x: auto` with `scroll-snap-type: x mandatory`. Parent must have `overflow-x: hidden`.
- **Service chip wrapping:** City chips must use `flex-wrap: wrap` or internal scroll — never cause body overflow.
- **Hamburger:** Must have `aria-label`, `aria-expanded`, `aria-controls`. Hidden on desktop.
- **FAQ:** `details/summary` pattern. Answers must not be clipped by sticky CTA.
- **Sticky CTA JS edits:** Allowed only for behavior bugs (show/hide timing, scroll-pause, safe state toggling). CSS-only visual issues must not trigger JS edits.

---

## SEO / Head Rules

Every production-like demo must have:
- `<title>` — descriptive, includes city
- `<meta name="description">` — relevant, no fake claims
- `<link rel="canonical">` — exact live URL
- `<link rel="icon">` — favicon accessible at HTTP 200
- OG block: `og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:image:alt`
- Twitter: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `<meta name="robots" content="noindex, nofollow">` — while demo/placeholder data active
- No LocalBusiness schema until facts verified
- No sitemap entry while noindex active

---

## Agent Task Discipline

Every task handed to a coding agent must include:

```
Repository: [URL]
Live URL: [URL]
Task type: [implementation / QA / fix / documentation / audit]
Allowed files: [explicit list]
Forbidden files: [explicit list including docs/]
Exact scope: [what to change]
Do-not-touch: [explicit list]
Fake-proof guardrails: [forbidden + allowed lists]
QA widths: 430, 390, 375, 360, 320 (mobile) | 1440, 1366 (desktop)
Commit message: [exact message]
Final report: [A. files changed B. QA result C. no fake claims confirmed D. commit hash]
```

Never use "improve everything" or open-ended scope. Every task is narrowly bounded.

---

## QA Gates

Run the relevant checklist from `QA-CHECKLISTS.md` at each gate:

| Gate | When to run |
|---|---|
| Fake-proof QA | After every copy change |
| Mobile QA (all 5 widths) | After every visual/layout change |
| Sticky CTA QA | After any CTA or JS change |
| Overflow QA | After every new section added |
| Accessibility / contrast QA | After every color or text change |
| SEO / head QA | Before root promotion |
| Deployment / custom-domain QA | After DNS configuration |
| Route cleanup QA | After root promotion |
| Documentation snapshot QA | After README / PROJECT-SNAPSHOT update |

---

## Output Artifacts

Typical deliverables per project:

- Homepage strategy (positioning + section map)
- Visual direction brief (palette, type, hero concept)
- Implementation task (agent task template filled in)
- QA report (P0/P1/P2/P3 findings)
- README update (architecture, guardrails, QA checklist)
- PROJECT-SNAPSHOT (stable commit, CSS tokens, do-not-touch list)
- Factory docs / case study (new vertical lessons)
- Handoff prompt (Prompt 19 filled in for next agent session)

---

## Reference Docs (this folder)

For full detail, consult:

| File | What it contains |
|---|---|
| [INDEX.md](INDEX.md) | Entry point, reading order, file summaries |
| [WEBSITE-PRODUCTION-FACTORY.md](WEBSITE-PRODUCTION-FACTORY.md) | Full 20-phase workflow with inputs, outputs, gates, failure modes |
| [PROMPT-LIBRARY.md](PROMPT-LIBRARY.md) | 19 copy-paste prompt templates for every phase |
| [QA-CHECKLISTS.md](QA-CHECKLISTS.md) | 20 QA checklists with P0/P1/P2/P3 severity |
| [AGENT-TASK-TEMPLATES.md](AGENT-TASK-TEMPLATES.md) | 10 coding-agent task templates |
| [HANDYMAN-V2-CASE-STUDY.md](HANDYMAN-V2-CASE-STUDY.md) | First build case study: decisions, bugs, lessons |
| [SKILL-PACKAGE-NOTES.md](SKILL-PACKAGE-NOTES.md) | How to maintain, update, and export this skill |
| [../CHANGELOG.md](../CHANGELOG.md) | Selected commit history with type labels |
