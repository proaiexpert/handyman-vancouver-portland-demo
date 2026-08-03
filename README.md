# Local Repair Pro

A production-like local-service website concept demonstrating how a handyman or home-repair business could turn photos, repair details, location, and scope into a clearer first-contact workflow.

**Status:** Website concept · Client-facing demonstration  
**Operating-business status:** Not a verified client engagement or operating service business  
**Live demo:** [Local Repair Pro](https://proai-expert.com/handyman-vancouver-portland-demo/)  
**ProAI Expert case study:** [Local Repair Pro](https://proai-expert.com/case-studies/local-repair-pro/)

## Concept purpose

Local Repair Pro demonstrates a premium but practical digital experience for homeowners who may not know the correct service category before making contact. The core idea is **Photo to Scope**: begin with a short description, clear photos, general location, and access details so the request can be organized before scheduling or referral.

The project is intentionally presented as a concept. It does not claim real customers, completed jobs, operating coverage, licenses, reviews, response times, pricing, availability, or business performance.

## Demonstrated capabilities

- local-service positioning for Vancouver, Washington and nearby Pacific Northwest markets;
- Photo-to-Scope request preparation;
- service-family and scenario-based information architecture;
- request, photo-checklist, pricing-context, FAQ, guide, and service-area pathways;
- regional pages that remain truthful about location and scope review;
- browser-only form behavior for demonstration purposes;
- responsive mobile, tablet, desktop, and low-height landscape layouts;
- visible-first content with progressive JavaScript enhancement;
- accessible navigation, focus states, reduced-motion support, and no-JavaScript fallbacks.

## Experience architecture

The concept organizes the customer journey around four questions:

1. What needs attention?
2. What do the photos and access conditions show?
3. Where is the request located?
4. What should happen next: clarification, grouping, scheduling review, or referral?

Primary routes include:

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

City pages remain under `/areas/{city-state}/`. Compatibility routes are retained where required by the current implementation.

## Regional model

The demonstration uses a controlled regional hierarchy:

- **Primary:** Vancouver, Washington;
- **Clark County context:** nearby communities such as Camas and Battle Ground;
- **Portland metro context:** selected Oregon communities reviewed by location and scope;
- **Service-area hub:** general orientation without guaranteed coverage.

No exact service radius, travel time, scheduling availability, or guaranteed geographic coverage is represented.

## Front-end architecture

The site uses a static, dependency-light implementation:

- semantic HTML5;
- responsive CSS;
- minimal vanilla JavaScript;
- direct stylesheet delivery;
- local optimized imagery;
- GitHub Pages-compatible routing;
- no required framework, CMS, database, or build step.

Core files:

- `assets/css/site-v1.css` — structural, responsive, and accessible fallback system;
- `assets/css/premium-recovery-v1.css` — premium visual and signature-interaction layer;
- `assets/js/site-v1.js` — navigation, sticky actions, progressive enhancement, and demo request behavior.

Essential content and hierarchy remain readable without JavaScript.

## Interaction and motion

The approved motion vocabulary is intentionally limited:

- Frame Set;
- Scope Trace;
- Detail Settle;
- Process Sequence;
- Surface Handoff;
- Scenario Rail.

Scenario Rail is the only continuous effect. Reduced-motion users receive complete static states.

## Truthful demonstration boundaries

The repository and demo must not add or imply:

- real clients or completed projects;
- testimonials, ratings, or review counts;
- verified licenses, credentials, staff, or years in business;
- guaranteed prices, response times, availability, or coverage;
- a real production phone, SMS, email, or operating address;
- a functional production intake endpoint;
- fictional LocalBusiness schema, analytics adoption, or conversion results.

Current contact values are placeholders. The request form is browser-only and does not send or store submitted information. Scenario imagery represents common repair categories and is not presented as completed Local Repair Pro work.

## Current state

The design and implementation are approved as a client-facing demonstration. Broad visual redesign is not the next step.

A real deployment would require:

- verified business identity and ownership;
- real contact information;
- confirmed service scope and geographic coverage;
- applicable licensing and permit rules;
- real project photography and approved proof;
- a privacy-reviewed production form endpoint;
- analytics and operational integrations only after explicit approval;
- removal of `noindex, nofollow` only when the business and launch conditions are verified.

## Role of ProAI Expert

**ProAI Expert** created the concept positioning, service architecture, Photo-to-Scope workflow, regional information model, responsive experience, truthful-demo boundaries, and production-like front-end implementation.

- ProAI Expert: https://proai-expert.com/
- Project case study: https://proai-expert.com/case-studies/local-repair-pro/
