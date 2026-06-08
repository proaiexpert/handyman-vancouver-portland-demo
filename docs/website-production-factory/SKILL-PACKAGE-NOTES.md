# SKILL-PACKAGE-NOTES — Website Production Factory

Version: 1.0 | Source: Handyman Website v2

This file explains how to maintain, update, and export SKILL.md.

---

## What SKILL.md Is For

SKILL.md is the compact operational entrypoint for the Website Production Factory.
It is designed to be:

- **Pasted into a new agent chat** as the skill context for a new local-service website project.
- **Copied into a new repo** when starting a new vertical (plumber, electrician, etc.).
- **Loaded as a Coworker skill** or similar agent skill system.
- **Read in under 5 minutes** — it summarizes the system without duplicating the full source docs.

SKILL.md is NOT a replacement for the full source docs. It is a navigation layer.

---

## What SKILL.md Intentionally Omits

SKILL.md does not include:

- Full phase-by-phase inputs, outputs, and failure modes (see WEBSITE-PRODUCTION-FACTORY.md)
- All 19 prompt templates (see PROMPT-LIBRARY.md)
- All 20 QA checklists with full table rows (see QA-CHECKLISTS.md)
- All 10 agent task templates with full field lists (see AGENT-TASK-TEMPLATES.md)
- The Handyman v2 case study details (see HANDYMAN-V2-CASE-STUDY.md)
- The full commit history (see CHANGELOG.md)

This is intentional. SKILL.md stays under 500 lines so it can be pasted into any agent context
without consuming the full context window.

---

## How to Update SKILL.md After Future Verticals

1. After completing a new vertical build (e.g., plumber-seattle-demo), create a new case study
   file in this folder (e.g., `PLUMBER-V1-CASE-STUDY.md`).
2. If the new build reveals a new operating principle, claim safety rule, or QA pattern that
   applies to ALL verticals, add it to SKILL.md.
3. If the new build reveals a vertical-specific lesson, add it to the case study only.
4. Do NOT add vertical-specific content to SKILL.md — it must remain generic.
5. Increment the version number in the SKILL.md header (e.g., Version: 1.0 → 1.1).
6. Record the update in CHANGELOG.md.

---

## How to Package SKILL.md for Another Repo

When starting a new vertical in a new repository:

1. Copy the entire `docs/website-production-factory/` folder into the new repo.
2. Update the `Repo:` line in SKILL.md to point to the new repo URL.
3. Update the `Source:` line to reflect the new vertical (e.g., `Plumber Website v1`).
4. Do not modify the operating principles, claim safety rules, or workflow phases unless
   a genuine policy change is needed.
5. Add a new case study file for the new vertical after the build is complete.

---

## How to Package SKILL.md for a Local Machine

This repo is the canonical source. To export to a local machine:

1. A local-computer agent or process should clone or pull this repo.
2. The `docs/website-production-factory/` folder can then be copied to any local path.
3. Do NOT manually copy-paste individual files — always pull the full folder to preserve
   cross-references between files.
4. After local edits, commit changes back to GitHub. The repo remains the source of truth.

**GitHub-only rule:** When an agent lacks local computer access, all deliverables must be
committed inside the GitHub repository. Do not reference /Users/..., Desktop, Downloads,
or local machine paths in any task or document.

---

## Versioning Recommendation

- Use `Version: X.Y` in the SKILL.md header.
- **Minor version (X.1, X.2):** New operating principles, new claim safety rules, new QA patterns
  that apply to all verticals.
- **Major version (2.0):** Structural change to the workflow (new phases, removed phases,
  fundamental change to the demo-vs-launch policy).
- Record every version change in CHANGELOG.md with a `[Docs]` type label.
- Do not increment the version for typo fixes or formatting changes.

---

## Storage Rule

**This repository is the source of truth for all factory documentation.**

All factory docs must be committed inside this GitHub repository.
Do not save factory docs to local machine paths.

A separate local-computer agent or process may later copy these files from GitHub to the
user's computer — but the GitHub repo remains the canonical source.
Always pull from GitHub before editing.
