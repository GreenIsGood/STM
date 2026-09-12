# Handoff: STM Studio Design System

## Overview
A complete design system for STM Studio (@stmstudioeg), a media production house in Cairo, Egypt — commercials, brand films, product photography, event coverage and post-production. Covers brand tokens, a component library, a full interactive landing-page site (6 screens), and an 8-slide capabilities/pitch deck.

## About the Design Files
The files in this bundle are **design references built in HTML/React (inline Babel JSX) and one HTML slide deck** — they define the visual language and demonstrate components and screens, but are not production code to copy directly. The task is to **recreate this design system in the target codebase's existing environment** (React, Vue, SwiftUI, native, etc.) using its established patterns — or, if no environment exists yet, choose the most appropriate framework and implement there. Component source files here were renamed `.jsx.txt` (not `.jsx`) so they're readable but inert — copy their content into real `.jsx`/`.tsx` files in the target project rather than importing them as-is.

## Fidelity
**High-fidelity.** Every color, spacing value, font size and copy string for the landing site was lifted directly from four HTML mockups supplied by the studio (see `SOURCE_MOCKUPS/`) — recreate pixel-perfectly, do not round to a 4/8px grid. The capabilities deck and the four "intentional addition" pages (Work index, Case study, Contact, 404) are new screens built from the same tokens/components for consistency, not lifted from a source file — treat their exact pixel values as a strong starting point, not gospel.

## Design Tokens
See `tokens/` — plain CSS custom properties, imported by `styles.css`.

**Color**
- Night ground (primary): `--stm-ink #1F1E1C`, inset `#171614`, band `#161513`, text `--stm-paper #F2F0EC`
- Grey ramp (8 steps): `#C9C5BF` → `#57534E`, each tied to one job (nav, lede, body, lists, aside, eyebrow, meta, faint)
- Accent: single red `--stm-red #D52027` — CTAs, current-section tick, "STM" credit line only
- Daylight alternate (Direction B): paper `#EFEDE7`, surface `#E3E0D8`, body `#4A4640`, gold accent `#E7CA4A`/`#8A7420`
- Hairlines: 5 opacity steps of paper-on-night (10/12/14/16/28%), used instead of shadows for all separation

**Typography**
- Display: Archivo 500/600/700, hero 104px/0.94/-0.035em down to h3 30px/600/-0.015em (deck hero: 96px)
- Body: IBM Plex Sans Arabic (used for BOTH English and Arabic body copy), 19–34px depending on context
- Mono: IBM Plex Mono, eyebrows/meta/credits/footer, uppercase, 0.14–0.24em tracking
- Arabic overrides: zero letter-spacing, looser leading (1.16–1.95 vs 0.94–1.7), eyebrows set in Plex Sans Arabic 13px/500 rather than mono caps
- Fonts loaded via Google Fonts CDN (`tokens/fonts.css`) — no licensed local binaries were supplied

**Spacing**: step scale measured off the source (4,7,9,11,14,18,22,26,34,40,48,56,64,80,90,110,120px) — NOT a 4/8 grid. Desktop gutter 100px (90px Direction B), mobile 20px, section gap 110–120px. Deck gutter 140px at 1920×1080.

**Borders/radius**: radius is `0` everywhere except the brand disc (50%) — the system is square. No box-shadows anywhere; separation is hairlines + ground-color shifts only.

**Motion**: colour-only transitions, 180ms `cubic-bezier(.22,.61,.36,1)`. Nothing moves, scales, or bounces.

## Components
See `components/<group>/*.jsx.txt` (source, renamed inert — see above) with matching `.prompt.md` usage notes.

- **core/**: `Icon` (4 stroke SVG glyphs — whatsapp, arrowRight, arrowUpRight, menu; the entire icon inventory, no icon font/sprite/emoji), `Eyebrow`, `Button` (primary/outline/link), `BrandMark` (typographic "stm" lockup — **no real logo file exists**), `Rule`+`Tick`, `Frame` (bracketed media placeholder that states the missing asset brief instead of faking imagery), `Input` (intentional addition — hairline-underlined field for forms)
- **layout/**: `NavBar`, `SectionHead`, `RuleRow`, `ClientStrip`, `SpecStrip`, `Footer`
- **content/**: `CreditRow`, `WorkCard` (film-credit style project card), `ServiceRow`, `UnitColumn`, `ContactRow`

Every component takes an `arabic` boolean that swaps in Arabic type metrics (not just translated strings) and most take a `mobile` boolean for the 390px treatment.

## Screens / Views
See `ui_kits/landing/*.jsx.txt` — switchable via the toggle in `ui_kits/landing/index.html` (open that file directly to click through all of them):

1. **Home — Desktop (EN)**: hero, client strip, 3-col work grid, 5-row services ledger, dark "Unit" band, studio spread + specs, contact section.
2. **Home — Desktop (Arabic/RTL)**: same component, `lang="ar"` flips `dir="rtl"` and swaps type metrics, not just strings.
3. **Home — Mobile (EN)**: 390px, working hamburger menu, full-width stacked CTAs, abbreviated work list.
4. **Direction B (daylight alternate)**: warm paper ground, gold accent, 90px gutters — an alternate visual direction shown alongside the shipped night direction, not a light/dark toggle of the same design.
5. **Work index**: full portfolio, filterable by STM's role (Production house / Digital unit / Studio & photography / Full event coverage). *Intentional addition.*
6. **Case study**: single-project detail — hero frame, credit sidebar, 2-image gallery, next-project link. Opens from a Work card click. *Intentional addition.*
7. **Contact**: dedicated page with a real brief form (project name, deadline, budget, brief) plus phone/email/studio/social. *Intentional addition.*
8. **404**: brand-voiced not-found page ("Cut. That page isn't on the reel."). *Intentional addition.*

All CTAs link to the real WhatsApp thread (`https://wa.me/201095802959...`) and `mailto:stmstudio3@gmail.com`; work cards link to the real Instagram posts.

## STM Capabilities Deck
`templates/capabilities-deck/CapabilitiesDeck.dc.html` — an 8-slide 1920×1080 pitch deck, same tokens: Title → Who we are → What we do (5 numbered services) → Selected work (6 credits) → How we work (3 crew-phase columns on the dark band) → Our studio (photo + specs) → Trusted by (client wordmarks) → Get in touch. Built as a design-tool-authored component (`.dc.html`); a developer should treat its 8 `<section>`s as the slide content spec and rebuild in whatever deck/slide tooling the target project uses (PowerPoint, Google Slides, a custom deck component, etc.) — it is not meant to be embedded as-is in a product codebase. `templates/capabilities-deck/deck-stage.js` is the preview-only slide-shell script; do not port it.

## Interactions & Behavior
- Nav EN/ع switch: click toggles `lang` state, re-renders the whole page in the other language/direction — instant swap, no transition.
- Mobile hamburger: click toggles a menu panel; links close the menu on click.
- Hover: color-only (text/border → `--stm-red`), 180ms ease. Work cards reveal a "VIEW POST" mono label in red on hover.
- Work index → Case study: clicking a WorkCard opens its detail screen; "Next project" cycles the roster; "← All work" returns to the filtered grid.
- Contact form: client-side only in this reference (sets a "brief received" confirmation state on submit) — wire to a real endpoint in production.
- No loading states, no async data — this is a static marketing site; the only state is language, the work/case-study selection, and the demo view switcher (which is preview-only, not part of the real site).

## Assets
`assets/photos/` — 4 real STM studio-set photographs (skylight cyclorama, podcast set, blue interior, warm living-room set), extracted from base64 embeds in the source mockups. No logo file exists — the BrandMark disc-lockup is typographic, not final. No icon files — icons are inline SVG (see `components/core/Icon.jsx.txt`).

## Intentional additions (beyond the source)
- `components/core/Input.jsx.txt` — transparent, hairline-underlined text/textarea field; no form field exists in any source mockup.
- `ui_kits/landing/WorkIndex`, `CaseStudy`, `Contact`, `NotFound` — the source is a single landing page with no dedicated Work, Contact or 404 screens; built to give the landing page's own links a real destination.
- `templates/capabilities-deck/` — a pitch deck; not part of the original source at all, built on request from the same token/component vocabulary.

## Files
- `styles.css` + `tokens/*.css` — token source
- `components/core/*`, `components/layout/*`, `components/content/*` — component source (`.jsx.txt`) + usage docs (`.prompt.md`)
- `ui_kits/landing/*.jsx.txt`, `ui_kits/landing/index.html`, `ui_kits/landing/copy.js` — screen recreations + verbatim copy (EN+AR)
- `templates/capabilities-deck/CapabilitiesDeck.dc.html` — the pitch deck (open directly to view/click through)
- `assets/photos/*` — real studio photography
- `DESIGN_SYSTEM_README.md` — full brand guidelines: content tone/voice rules, visual foundations, iconography
- `SOURCE_MOCKUPS/` — the four original HTML files the studio supplied, which the landing site was derived from
