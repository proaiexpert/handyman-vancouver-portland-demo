# Print-Ready Sales Assets

This folder contains polished, browser-openable sales documents for client outreach.
All files are documentation only — no live website content is affected.

---

## Files in this folder

| File | Format | Purpose |
|---|---|---|
| `local-service-website-one-pager.html` | HTML | Polished one-pager to share at first contact or after a demo walkthrough |
| `local-service-website-one-pager.md` | Markdown | Same content — easy to copy/paste into email or Notion |
| `price-sheet.html` | HTML | Full price sheet with packages, add-ons, and disclaimers |
| `price-sheet.md` | Markdown | Same content — easy to copy/paste into a proposal or message |

---

## When to use each file

### One-pager (`local-service-website-one-pager.*`)
- Use after initial outreach when a client shows interest
- Use after a demo walkthrough to leave something behind
- Use as a PDF attachment in a follow-up email
- **Does not include prices** — designed for first-touch use before pricing conversation

### Price sheet (`price-sheet.*`)
- Use only after a client has expressed interest and asked about pricing
- Use as part of the formal proposal
- **Always explain** that prices are starting ranges, not fixed quotes
- **Never send** without the pricing disclaimer conversation

---

## Suggested client workflow

1. **Outreach message** — Short initial contact (see `outreach-templates.md`)
2. **Demo walkthrough** — Show the live demo at https://proai-expert.com/handyman-vancouver-portland-demo/
3. **One-pager** — Send `local-service-website-one-pager.html` (or PDF version) as a follow-up
4. **Price sheet + proposal** — After client confirms interest, send `price-sheet.html` + `proposal-template.md`
5. **Adaptation checklist** — Use `adaptation-checklist.md` to scope what needs to be customized

---

## How to export HTML to PDF

1. Open the `.html` file in Chrome or Edge
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Set destination to "Save as PDF"
4. Select paper size: Letter or A4
5. Enable background graphics
6. Save

Alternatively, use Pandoc:
```
pandoc local-service-website-one-pager.md -o one-pager.pdf
```

---

## QA notes

- One-pager does NOT include prices — confirmed
- Price sheet includes starting ranges only with explicit disclaimers — confirmed
- No guaranteed ranking, lead volume, or revenue claims — confirmed
- No fake reviews or invented testimonials — confirmed
- HTML files are fully self-contained (no external CSS or JS dependencies)
- All files are docs only — live site is untouched
