# Local Repair Pro

**Home Repair & Handyman Services**  
**Classification:** Website Concept · In Development  
**Direction:** Premium Local Repair Pro — Pacific Northwest Edition

Local Repair Pro is a production-like website concept created by ProAI Expert for a Vancouver, Washington–first local handyman and home-repair experience. It is an internal Website Production Factory showcase, not a verified client engagement or operating service business.

## Branch status

- Base branch: `main`
- Production-polish branch: `feature/local-repair-pro-production-polish-v1`
- Initial `main` HEAD for this pass: `8605bb1e61d5be44296ec130ccc45b1a65e53ed9`
- `main` is intentionally unchanged by this branch.
- No pull request or publication is part of this phase.

## Preview relationship

Current public preview:

`https://proai-expert.com/handyman-vancouver-portland-demo/`

The public preview follows `main`. Branch-only changes are not represented as live until a separate owner-approved merge and deployment decision.

## Current canonical architecture on the working branch

### Primary pages

- `/`
- `/services/`
- `/examples/`
- `/request/`
- `/areas/`
- `/pricing/`
- `/guides/`
- `/about/`
- `/faq/`
- `/privacy/`
- `/terms/`
- `/sitemap/` — noindex HTML navigation page, not an XML sitemap
- `/404.html`

### Canonical city-area pages

- `/areas/vancouver-wa/`
- `/areas/camas-wa/`
- `/areas/battle-ground-wa/`
- `/areas/portland-or/`
- `/areas/hillsboro-or/`
- `/areas/beaverton-or/`
- `/areas/gresham-or/`
- `/areas/tigard-or/`
- `/areas/lake-oswego-or/`
- `/areas/oregon-city-or/`

### Compatibility routes

The former `/work-examples/`, `/service-area/` and `/service-area/{city}/` paths remain as lightweight noindex compatibility pages pointing to the shorter canonical routes.

Historical preview paths, including `/homepage-v2-premium.html`, are obsolete and must not be restored as active pages.

## Brand system

Code-based SVG assets:

- `assets/brand/local-repair-pro-symbol.svg`
- `assets/brand/local-repair-pro-wordmark.svg`
- `assets/brand/local-repair-pro-wordmark-light.svg`
- `assets/brand/local-repair-pro-monochrome.svg`
- `favicon.svg`

The identity uses an architectural corner / door-frame geometry. It does not use stock marks, house-and-hammer clipart, shields, mascots or fake certification language.

## Shared front-end system

- `assets/css/site-v1.css`
- `assets/js/site-v1.js`

The shared system covers:

- consistent desktop and mobile navigation;
- menu Escape/focus handling;
- no-JavaScript navigation fallback;
- mobile sticky actions;
- restrained reveal enhancement;
- reduced-motion behavior;
- request-mode query parameters;
- client-side validation;
- explicit prevention of real form transmission.

## Contact and concept safety

Reserved concept contact data:

- `(360) 555-0147`
- `tel:+13605550147`
- `sms:+13605550147`
- `hello@localrepairpro.example`

These details are not represented as operational.

The request form is a browser-only preview. It does not send or store entered information. Its confirmation text states:

> Preview complete — no request was sent. This concept form does not collect or transmit personal information.

## Indexing and structured data

- Every public concept page remains `noindex, nofollow`.
- No fictional `LocalBusiness` schema is used.
- No production XML sitemap entry is added.
- No analytics, tracking or external form endpoint is connected.

## Fake-proof guardrails

Do not add or imply unverified:

- client status;
- reviews or ratings;
- license, insurance, bond or certification;
- years in business;
- completed-project or customer counts;
- guaranteed work, warranty, same-day or emergency availability;
- exact pricing, response time or service radius;
- operating address or employee identities;
- verified before/after results.

The scenario images illustrate common project types and are not presented as completed Local Repair Pro work.

## Internal audit

See:

`docs/LOCAL_REPAIR_PRO_PRODUCTION_POLISH_AUDIT_V1.md`

The audit records the starting HEAD, controlling sources, route/asset inventory, findings, retained decisions, compatibility strategy, current-reference benchmark, tests and remaining visual-QA risks.

## Launch limitations

This branch is not a real-business launch package. A future operating version would still require verified business facts, real contact channels, secure form/storage choices, legal review appropriate to the business, licensed image rights, analytics decisions, real project evidence and owner-approved deployment.
