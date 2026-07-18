# Local Repair Pro — Premium Recovery Pass V1

## Purpose

This pass responds to owner review after the production-like polish reached `main`.

The cleaner architecture improved consistency, safety and completeness, but two weaknesses became visible during live browsing:

1. the homepage lost the earlier signature moving scenario rail;
2. internal page heroes became too flat and text-only.

The objective is to recover visual energy and motion without restoring the old monolithic homepage, page-local CSS, broken JavaScript or unsupported business claims.

## Source reference

The requested scenario behavior was confirmed in the pre-polish checkpoint:

`8605bb1e61d5be44296ec130ccc45b1a65e53ed9`

The former implementation used:

- eight unique scenario cards;
- a duplicate second card set;
- a continuous 64-second linear loop;
- hover and focus pause;
- viewport-based start;
- manual mobile scroll;
- scroll snap;
- reduced-motion fallback.

The behavior was reimplemented against the new shared architecture rather than copied with the old CSS and page structure.

## Files changed

- `index.html`
- `assets/css/premium-recovery-v1.css`
- `assets/js/site-v1.js`
- `README.md`
- `AGENT-STATUS.md`
- `docs/PREMIUM_RECOVERY_PASS_V1.md`

## Homepage scenario rail

The homepage now uses all eight existing scenario images:

1. trim and baseboard refresh;
2. kitchen faucet detail;
3. door hardware and alignment;
4. bathroom finish touch-up;
5. entry door and exterior trim;
6. washer and dryer connection context;
7. television wall mounting;
8. ceiling fixture review.

The duplicated set is hidden from assistive technology and exists only to support the continuous visual loop.

### Motion rules

- Desktop auto-motion runs only while the rail is visible.
- Hovering or keyboard focusing inside the rail pauses it.
- Mobile and short-height landscape use manual scrolling.
- Reduced-motion preference disables the loop.
- The rail remains optional content; primary navigation and conversion do not depend on it.

## Homepage visual recovery

The approved hero structure and image remain unchanged.

Added:

- restrained architectural grid texture;
- navy/forest/amber radial depth;
- inner image frame;
- subtle image scale response;
- stronger visual transition between copy and image;
- refined chip hover behavior;
- richer final conversion band.

No autoplay video, parallax, cursor effect, 3D tilt, WebGL or heavy animation library was introduced.

## Internal page hero recovery

All existing `.page-hero` sections receive one shared premium composition:

- architectural Local Repair Pro symbol field;
- asymmetrical framed geometry;
- controlled radial color depth;
- scope/context/next-step micro-label;
- balanced text width on desktop;
- reduced decoration on mobile.

This is a temporary shared upgrade before page-specific art direction is reviewed individually.

## Shared component polish

Added controlled hover/focus response to:

- field-note panels;
- note cards;
- service rows;
- process steps;
- service-area cards;
- FAQ items;
- footer navigation.

Effects remain small, functional and compatible with `prefers-reduced-motion`.

## Retained constraints

- Local Repair Pro remains a concept.
- No client status is claimed.
- No reviews, credentials, address, operating contacts or metrics were added.
- No indexing was enabled.
- No real form endpoint was connected.
- No obsolete preview route was restored.
- Short canonical routes and compatibility pages remain unchanged.

## Remaining owner review

The next session should inspect the live site and record page-specific observations for:

- Services;
- Examples;
- Request;
- Service Area hub;
- city pages;
- Pricing;
- Guides;
- About;
- FAQ.

Priority questions:

- Which hero compositions need real photography rather than abstract geometry?
- Which pages remain too sparse below the hero?
- Which sections need stronger image-led alternation?
- Is the restored rail speed and card scale appropriate?
- Are mobile swipe spacing and sticky actions comfortable?

## Status

**Fast recovery complete. Live browser review required before final page-by-page design approval.**
