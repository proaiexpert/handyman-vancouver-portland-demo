# Website Production Factory — Index

Version: 1.0 | Source: Handyman Website v2

This folder contains the reusable workflow library extracted from the Handyman Website v2 build.
It is the entry point for any agent or coordinator starting a new local-service website project.

---

## Purpose

The Website Production Factory is a repeatable system for producing premium local-service websites
(handyman, plumber, electrician, landscaper, cleaning, and similar verticals) without fake claims,
unverified credentials, or placeholder data presented as real.

Every file in this folder is generic enough to use for any local-service vertical.
Handyman-specific details are documented as case study examples, not as hardcoded defaults.

---

## Recommended Reading Order

For a new project, read in this order:

0. **SKILL.md** — Start here if you are a new agent or pasting context into a new chat. Compact operational summary.
1. **WEBSITE-PRODUCTION-FACTORY.md** — Full 20-phase workflow. Read before your first build.
2. **PROMPT-LIBRARY.md** — Use these prompts to drive each phase. Copy, fill in placeholders, paste into a new chat.
3. **AGENT-TASK-TEMPLATES.md** — Use these templates when handing a specific task to a coding agent.
4. **QA-CHECKLISTS.md** — Run these checklists at each QA gate. Do not skip mobile widths or fake-proof checks.
5. **HANDYMAN-V2-CASE-STUDY.md** — Read this after your first build to compare decisions and lessons.
6. **SKILL-PACKAGE-NOTES.md** — Read this when updating, versioning, or exporting the skill.

---

## File Summaries

### WEBSITE-PRODUCTION-FACTORY.md
The master 20-phase workflow from intake through reusable extraction. Each phase defines inputs,
outputs, quality gates, failure modes, and ask-vs-assume rules. Includes the complete fake-proof
guardrail reference and a versioning policy for future verticals. Start every new project here.

### PROMPT-LIBRARY.md
19 copy-paste prompt templates covering every production phase: intake, market research, competitor
research, visual direction, hero concept, homepage architecture, coding agent implementation, QA,
deployment, root promotion, documentation, launch readiness, and project handoff. All prompts use
[BRACKETED] placeholders. Prompt 19 (Handoff to New Chat) is the most operationally critical —
use it to transfer project state to a new agent session.

### QA-CHECKLISTS.md
20 structured QA checklists with P0/P1/P2/P3 severity levels. Covers: fake-proof claims, allowed
language, mobile layout (all 5 widths: 430/390/375/360/320), sticky CTA, horizontal overflow,
hamburger/menu, FAQ, hero image, CTA hierarchy, service area wording, map/schema safety, SEO/head,
Lighthouse, accessibility, GitHub Pages deployment, root promotion, route cleanup, pre-launch,
post-launch improvements, and documentation snapshot. Run the relevant checklists at each phase gate.

### AGENT-TASK-TEMPLATES.md
10 precise task templates for coding agents at each phase. Each template includes: repo URL, live URL,
task type, allowed files, forbidden files (including docs/ protection), exact change scope, do-not-touch
list, fake-proof guardrails, QA widths, commit message format, and final report format. Template 4
(Sticky CTA Fix) documents the known scroll-pause JS pattern from Handyman v2. No template permits
broad "improve everything" behavior.

### HANDYMAN-V2-CASE-STUDY.md
Full case study of the first Website Production Factory build. Documents: strategic direction,
key design decisions (hero sells finished value, no fake before/after, abstract service area,
scenarios as request categories), key technical lessons (sticky CTA color inheritance, iOS Safari
text-fill fix, amber contrast fix, route cleanup), major issue timeline, fake-proof lessons,
reusable patterns, and remaining limitations. Section 13 documents the /request/ page evolution
and the two-path Quick Question / Repair Request pattern. Read this after your first build to calibrate
decisions for future verticals.

---

## How to Use for a New Vertical

1. Create a new GitHub repository for the new vertical (e.g., `plumber-seattle-demo`).
2. Copy this entire `docs/website-production-factory/` folder into the new repo.
3. Start with **Prompt 1** (New Website Intake) from PROMPT-LIBRARY.md.
4. Follow the 20-phase workflow in WEBSITE-PRODUCTION-FACTORY.md.
5. After the build, create a new case study file (e.g., `PLUMBER-V1-CASE-STUDY.md`) in this folder.
6. Do NOT overwrite the base factory files with vertical-specific content.

---

## Storage Rule

**This repository is the source of truth for all factory documentation.**

All factory docs must be committed inside this GitHub repository.
Do not save factory docs to local machine paths (/Users/..., Desktop, Downloads, etc.).

A separate local-computer agent or process may later copy these files from GitHub to the user's
computer — but the GitHub repo remains the canonical source. Always pull from GitHub before editing.

---

## Commit History (factory docs)

| Commit | Description |
|---|---|
| `ac85850` | Website Production Factory extraction — this folder created |
| `cac39ed` | Factory docs consistency and handoff rules patch |
| `503ee51` | Changelog updated with cac39ed entry |
| `66a3472` | SKILL.md and SKILL-PACKAGE-NOTES.md created; INDEX.md updated with SKILL.md as step 0 |
| `7b038cd` | /request/ page added to live site |
| `894921e` | /request/ refined into two-path Quick Question / Repair Request flow |
| `9446655` | /request/ polished: Selected badge, robust submit label, form separation |
| (current) | Factory docs updated with request-flow pattern and lessons |
