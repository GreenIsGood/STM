# STM Studio — design → code workflow

How work moves from Claude Design into this repo.

## The loop

1. **Design in Claude Design** (claude.ai) — iterate on tokens, components and
   screens there.
2. **Hand off.** Run Claude Design's "Handoff to Claude Code" skill. It drops
   a bundle into this project — tokens, components, a full screen
   recreation, and a `DESIGN_SYSTEM_README.md` — e.g. into
   `STM Studio Design System/`.
3. **Tell Claude Code to pick it up** ("it's done, check it, implement it").
4. **Claude Code implements it** into the real site (`index.html`,
   `ar/index.html`, `assets/`) — see rules below.
5. **Verify locally** (both languages, both breakpoints) before calling it
   done — see "Run it locally".

## How a handoff gets implemented

The handoff bundle is a **reference spec, not source to copy in as-is**. It's
usually React/JSX describing the visual language; this repo is plain static
HTML/CSS/JS with no build step. Translate, don't paste:

- **Tokens** (`tokens/*.css` in the handoff) are already plain CSS — carry
  them over into `assets/css/tokens/` near verbatim.
- **Components** (`components/*.jsx` in the handoff) become real CSS classes
  in `assets/css/site.css`, prefixed `stm-*`. Use logical properties
  (`padding-inline`, `border-inline-end`, `inset-inline-start`, …) instead of
  left/right so the one stylesheet serves both `index.html` (EN, ltr) and
  `ar/index.html` (AR, rtl) without a second override sheet.
- **Screens** (`ui_kits/landing/*.jsx` + `copy.js` in the handoff) become the
  actual markup in `index.html` / `ar/index.html`. Copy verbatim — never
  invent or shorten translated text that wasn't supplied. If the handoff
  only gives one language a mobile-specific variant, don't fabricate the
  other language's version; fall back to its one verified string at every
  width rather than guessing a translation.
- **New real assets** (photos, etc.) get copied into `assets/photos/`.
- **Placeholders stay placeholders.** Missing imagery (showreel, work-post
  stills, client logos, studio address) is an intentional, labelled gap —
  keep it as a bracketed mono placeholder. Never fake it with stock imagery
  or generated filler.

## Structure

```
index.html            EN page (ltr)
ar/index.html          AR page (rtl) — a real page, not a JS-toggled state
assets/css/tokens/     design tokens as CSS custom properties
assets/css/site.css    all component + layout + responsive CSS
assets/js/main.js      the one bit of real behaviour: mobile menu toggle
assets/photos/         real photography actually used on the live site
STM Studio Design System/   latest Claude Design handoff bundle (reference)
Claude outputs/             the original hand-built HTML mockups (reference)
```

Direction A (dark ground, red accent) is the shipped visual direction.
Direction B ("daylight") lives in the design system for reference only —
don't build it unless asked.

## Run it locally

A `.claude/launch.json` config (`stm-static`) serves the folder with
`python -m http.server` so relative asset paths resolve correctly. Preview
both `index.html` and `ar/index.html` at desktop and mobile widths after any
change before calling the work done.
