# Local Repair Pro

**Home Repair & Handyman Services**  
**Classification:** Website Concept · In Development  
**Direction:** Premium Local Repair Pro — Pacific Northwest Edition

Local Repair Pro is a production-like website concept created by ProAI Expert for a Vancouver, Washington–first handyman and home-repair experience. It is an internal Website Production Factory showcase, not a verified client engagement or operating service business.

## Current deployment state

- Repository: `proaiexpert/handyman-vancouver-portland-demo`
- Deployment branch: `main`
- Public preview: `https://proai-expert.com/handyman-vancouver-portland-demo/`
- Initial pre-polish checkpoint: `8605bb1e61d5be44296ec130ccc45b1a65e53ed9`
- Production-like polish squash: `5bf17021be7063d81ac112c5209d787cb26411e7`
- Premium recovery source branch: `feature/local-repair-pro-premium-recovery-v1`

The production-like polish was promoted to `main` through PR #1. Git history retains the previous site and provides a clear rollback path.

## Current experience

The site now combines the cleaner shared architecture introduced in the production-like polish with selected premium interactions recovered from the earlier version:

- original Local Repair Pro SVG identity;
- consistent desktop and mobile navigation;
- approved Pacific Northwest hero image and positioning;
- restored full-width scenario rail with eight visual categories;
- desktop auto-loop only while the rail is visible;
- hover and keyboard-focus pause;
- manual swipe and scroll snap on mobile;
- reduced-motion fallback;
- architectural hero compositions on internal pages;
- richer shared hover/focus treatment for field notes, services, process steps, area cards and FAQ;
- structured three-intent request preview with no data transmission;
- short canonical routes and compatibility handling for former URLs;
- concept-safe Privacy, Terms, sitemap and 404 pages.

## Canonical routes

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
- `/sitemap/` — noindex HTML navigation page
- `/404.html`

### City-area pages

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

### Compatibility paths

The former `/work-examples/`, `/service-area/` and `/service-area/{city}/` routes remain as lightweight noindex compatibility pages pointing to the shorter canonical routes.

Historical preview paths, including `/homepage-v2-premium.html`, remain obsolete and must not be restored as active public pages.

## Shared front-end system

- `assets/css/site-v1.css` — structural and accessible base system.
- `assets/css/premium-recovery-v1.css` — restrained premium composition and recovered visual interactions.
- `assets/js/site-v1.js` — navigation, sticky actions, reveal enhancement, viewport-aware scenario rail and request-flow behavior.

The base site remains readable without JavaScript. JavaScript adds menu behavior, premium recovery styling, viewport-aware motion and request-form enhancement.

## Brand assets

- `assets/brand/local-repair-pro-symbol.svg`
- `assets/brand/local-repair-pro-wordmark.svg`
- `assets/brand/local-repair-pro-wordmark-light.svg`
- `assets/brand/local-repair-pro-monochrome.svg`
- `favicon.svg`

The identity uses architectural corner and door-frame geometry. It does not use stock marks, house-and-hammer clipart, shields, mascots or fake certification language.

## Contact and concept safety

Reserved fictional contact data:

- `(360) 555-0147`
- `tel:+13605550147`
- `sms:+13605550147`
- `hello@localrepairpro.example`

The request form is a browser-only preview. It does not send or store entered information. Confirmation text states:

> Preview complete — no request was sent. This concept form does not collect or transmit personal information.

## Indexing and fake-proof guardrails

- Every public concept page remains `noindex, nofollow`.
- No fictional `LocalBusiness` schema is used.
- No production XML sitemap entry is added.
- No analytics, tracking or external form endpoint is connected.
- Scenario images illustrate common project types and are not presented as completed Local Repair Pro work.

Do not add or imply unverified client status, reviews, ratings, license, insurance, bond, warranty, years in business, exact pricing, response time, operating address, employee identity, project results or business metrics.

## Documentation

- `docs/LOCAL_REPAIR_PRO_PRODUCTION_POLISH_AUDIT_V1.md`
- `docs/PREMIUM_RECOVERY_PASS_V1.md`
- `AGENT-STATUS.md`

## Remaining review work

The current site is intended for owner browsing and practical feedback. The next controlled pass should review each page in a real browser, identify pages that still feel visually sparse, and improve them individually without reopening the entire architecture or weakening concept safety.
