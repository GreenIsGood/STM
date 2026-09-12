# Handoff: STM Studio Design System

## Overview
A design system for STM Studio (@stmstudioeg), a media production house in Cairo, Egypt. Covers brand tokens (color, type, spacing, motion), a component library (18 components), and a full interactive landing-page UI kit recreation (desktop EN, Arabic RTL, mobile, and a "Direction B" daylight alternate).

## About the Design Files
The files in this bundle are **design references built in HTML/React (inline Babel JSX)** — they define the visual language and demonstrate components and screens, but are not production code to copy directly. The task is to **recreate this design system in the target codebase's existing environment** (React, Vue, SwiftUI, native, etc.) using its established patterns — or, if no environment exists yet, choose the most appropriate framework and implement there. Where the codebase already has a component library, prefer mapping these tokens/patterns onto it rather than introducing a second system.

## Fidelity
**High-fidelity.** Every color, spacing value, font size and copy string was lifted directly from four HTML mockups supplied by the studio (desktop EN, desktop AR/RTL, mobile EN, and a daylight alternate direction) — see `SOURCE_MOCKUPS/`. Recreate pixel-perfectly; do not round values to a 4/8px grid.

## Design Tokens
See `tokens/` — plain CSS custom properties, imported by `styles.css`.

**Color** (`tokens/colors.css`)
- Night ground (primary): `--stm-ink #1F1E1C`, inset `#171614`, band `#161513`, text `--stm-paper #F2F0EC`
- Grey ramp (8 steps): `#C9C5BF` → `#57534E`, each tied to one job (nav, lede, body, lists, aside, eyebrow, meta, faint)
- Accent: single red `--stm-red #D52027` — CTAs, current-section tick, "STM" credit line only
- Daylight alternate (Direction B): paper `#EFEDE7`, surface `#E3E0D8`, body `#4A4640`, gold accent `#E7CA4A`/`#8A7420`
- Hairlines: 5 opacity steps of paper-on-night (10/12/14/16/28%), used instead of shadows for all separation

**Typography** (`tokens/typography.css`)
- Display: Archivo 500/600/700, hero 104px/0.94/-0.035em down to h3 30px/600/-0.015em
- Body: IBM Plex Sans Arabic (used for BOTH English and Arabic body copy — the bridge font), 19px lede down to 14px UI
- Mono: IBM Plex Mono, eyebrows/meta/credits/footer, uppercase, 0.14–0.22em tracking
- Arabic overrides: zero letter-spacing, looser leading (1.16–1.95 vs 0.94–1.7), eyebrows set in Plex Sans Arabic 13px/500 rather than mono caps
- Fonts loaded via Google Fonts CDN (`tokens/fonts.css`) — no licensed local binaries were supplied

**Spacing** (`tokens/spacing.css`): step scale measured off the source (4,7,9,11,14,18,22,26,34,40,48,56,64,80,90,110,120px) — NOT a 4/8 grid. Desktop gutter 100px (90px Direction B), mobile 20px, section gap 110–120px.

**Borders/radius** (`tokens/borders.css`): radius is `0` everywhere except the brand disc (50%) — the system is square. No box-shadows anywhere; separation is hairlines + ground-color shifts only.

**Motion** (`tokens/motion.css`): colour-only transitions, 180ms `cubic-bezier(.22,.61,.36,1)`. Nothing moves, scales, or bounces. Hover recolors text/borders to accent; press has no visual state.

## Components
See `components/<group>/` — each is a self-contained React component (`.jsx`) with a TypeScript props contract (`.d.ts`) and usage notes (`.prompt.md`).

- **core/**: `Icon` (4 stroke SVG glyphs — whatsapp, arrowRight, arrowUpRight, menu; this is the entire icon inventory, no icon font/sprite/emoji), `Eyebrow` (mono section label), `Button` (primary/outline/link variants), `BrandMark` (typographic "stm" lockup — **no real logo file exists**, do not treat as a final mark), `Rule`+`Tick` (hairline dividers, accent tick), `Frame` (bracketed media placeholder that states the missing asset brief instead of faking imagery)
- **layout/**: `NavBar`, `SectionHead`, `RuleRow`, `ClientStrip`, `SpecStrip`, `Footer`
- **content/**: `CreditRow`, `WorkCard` (film-credit style project card), `ServiceRow` (numbered ledger row), `UnitColumn` (crew-by-phase list), `ContactRow`

Every component takes an `arabic` boolean that swaps in Arabic type metrics (not just translated strings) and most take a `mobile` boolean for the 390px treatment.

## Screens / Views
See `ui_kits/landing/` — a full interactive recreation, switchable via an on-page toggle:
1. **Desktop (EN)** — `Landing.jsx`, 1440px. Hero, client strip, 3-col work grid (WorkCard), 5-row numbered services ledger, dark "Unit" band (3 crew-phase columns), studio photo spread + spec strip, contact section.
2. **Desktop (Arabic/RTL)** — same component, `lang="ar"` flips `dir="rtl"`, swaps copy and type metrics.
3. **Mobile (EN)** — `LandingMobile.jsx`, 390px, hamburger nav with working open/close menu, full-width stacked CTAs, 2-col client grid, abbreviated 3-of-6 work list.
4. **Direction B (daylight alternate)** — `DirectionB.jsx`, warm paper ground, gold accent, 90px gutters, unbracketed frames — an alternate visual direction the studio was shown alongside the shipped night direction, not a light/dark toggle of the same design.

All CTAs link to the real WhatsApp thread (`https://wa.me/201095802959...`) and `mailto:stmstudio3@gmail.com`; work cards link to the real Instagram posts.

## Interactions & Behavior
- Nav EN/ع switch: click toggles `lang` state, re-renders whole page in the other language/direction — no transition, instant swap (matches source's static nature).
- Mobile hamburger: click toggles a menu panel open/closed; each link closes the menu on click.
- Hover: color-only (text/border → `--stm-red`), 180ms ease. Work cards reveal a "VIEW POST" mono label in red on hover.
- No loading states, no form validation — this is a static marketing page; the only "state" is language and (in the UI kit demo) the view switcher.

## Assets
`assets/photos/` — 4 real STM studio-set photographs (skylight cyclorama, podcast set, blue interior, warm living-room set), extracted from base64 embeds in the source mockups. No logo file exists — see BrandMark note above. No icon files — icons are inline SVG (see `components/core/Icon.jsx`).

## Files
- `styles.css` + `tokens/*.css` — token source
- `components/core/*`, `components/layout/*`, `components/content/*` — component source + props + usage docs
- `ui_kits/landing/*.jsx`, `ui_kits/landing/index.html`, `ui_kits/landing/copy.js` — full screen recreations + verbatim copy (EN+AR)
- `assets/photos/*` — real studio photography
- `readme.md` (project root, also copied here as `DESIGN_SYSTEM_README.md`) — full brand guidelines: content tone/voice rules, visual foundations, iconography
- `SOURCE_MOCKUPS/` — the four original HTML files the studio supplied, which this entire system was derived from; consult these directly for anything not covered above
