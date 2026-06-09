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


---

## Notes on Earlier Commits

The following commit is referenced in project docs but its exact description is not fully verified:

- `171b471` — referenced as "improved sticky CTA contrast and mobile spacing" in task context

If this description is confirmed, add it to the table above between `01c97ca` and `fa445e4`.

---

## Stable Website Commit

The homepage is stable at commit `1cda438`. The /request/ page was added in `7b038cd` and refined through `9446655`.
The /services/ page was added in `1153f7f` and cross-page chrome was fixed through `544e58a`.
Documentation commits do not change the live site.
