# Agent Status — Local Repair Pro Demo

## Latest work: Mobile header auto-hide + sticky CTA + footer white-strip fix

### Issues reported
- Mobile header stayed fixed/stuck on subpages, permanently covering viewport.
- Sticky CTA (Call / Text / Estimate) missing on most public pages.
- White strip / blank band appeared below the footer on mobile (portrait + landscape).

### Root causes
- Header scroll-direction auto-hide logic lived only in preview-main.js and the
  homepage inline script. Subpages (services, work-examples, request, service-area,
  faq, all 10 city pages) load menu-toggle.js, which had no header auto-hide — so
  the sticky header never hid on scroll.
- Sticky CTA markup existed only on homepage, pricing, about, guides.
- White strip: body had an always-on `padding-bottom: 58px` at ≤759px plus the
  sticky-active padding, and html/body background was off-white (#F7F2EA) so the
  padded area below the dark footer rendered as a white band.

### Fixes implemented
- menu-toggle.js: added header auto-hide (scroll down hides, up shows, top always
  shows, never hides while menu open), plus sticky-CTA visibility control (show
  after 260px scroll, hide when footer enters viewport, hide while menu open).
  isMobile() now also covers short landscape phones (min-width:901 + max-height:500).
- CSS: html background set to footer navy (#0d1c2e) so no white shows below footer;
  removed always-on body padding-bottom and the sticky-active padding that created
  the bottom gap; added a landscape-phone breakpoint so 901px+ short viewports use
  the compact hamburger header (fixes header-actions overflow at 932x430).
- Sticky CTA markup added to all remaining public pages with correct relative
  Estimate links per depth (request page anchors to #request-form).

### Pages tested (rendered, Playwright)
/, /faq/, /services/, /work-examples/, /service-area/, /service-area/vancouver-wa/,
/service-area/lake-oswego-or/, /request/, /pricing/, /about/, /guides/

### Widths tested
- Portrait: 430, 390, 375, 360, 320
- Landscape: 844x390, 932x430, 812x375
- Desktop regression: 1440, 1280, 1024, 768

### Results
- Header auto-hide: PASS (hides on scroll down, shows on scroll up, shown at top and while menu open) on all pages.
- Hamburger regression: PASS (opens/closes, 10 links, aria toggles, Escape closes, no console errors).
- Reveal regression: PASS (0 zero-height reveal elements).
- Sticky CTA coverage: PASS (present on all 19 public pages; Call/Text/Estimate usable; hidden over open menu and near footer).
- Footer bottom: PASS (0px gap below footer in portrait and landscape; html navy background matches footer).
- Console errors: none introduced. (Pre-existing benign "Unexpected identifier 'll'" on /request/ predates this task.)
- Horizontal overflow: none at any mobile/landscape width after the landscape-phone breakpoint fix.

### Remaining issues (pre-existing, out of scope)
- Desktop 1024px width shows minor horizontal overflow (docW ~1137). Verified present
  at accepted HEAD 7d2aa91 before this task; it is a desktop 901–1099 header-band issue,
  not a mobile issue, so left untouched per task scope.
