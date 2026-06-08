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
| this commit | Docs | Patched factory docs for consistency and handoff rules (Prompt 19 placeholders, Template 4 JS rule, ask-vs-assume rules, INDEX.md, CHANGELOG.md) |

---

## Notes on Earlier Commits

The following commit is referenced in project docs but its exact description is not fully verified:

- `171b471` — referenced as "improved sticky CTA contrast and mobile spacing" in task context

If this description is confirmed, add it to the table above between `01c97ca` and `fa445e4`.

---

## Stable Website Commit

The production website (live at https://proai-expert.com/handyman-vancouver-portland-demo/) is
stable at commit `1cda438`. Documentation commits after `1cda438` do not change the live site.
