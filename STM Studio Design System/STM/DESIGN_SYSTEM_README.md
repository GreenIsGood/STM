## STM Studio — Design System

STM Studio (@stmstudioeg) is a full-service media production house in Cairo, Egypt — commercials, brand films, product photography, event coverage and post-production, built and run as one in-house unit (director, camera, art, casting, post). A sister brand, stm|RENT (@stmstudiorent), rents out the same studio space. This system covers the **production-house brand**: the landing page that sells STM as a production partner, not the space rental.

### Sources
- GitHub: `GreenIsGood/STM` (repo attached to this project) — at the time of import this repo contained only a placeholder README, no code. Nothing was imported from it; see `github.md`.
- Four hand-built HTML mockups supplied directly by the user: desktop (English), desktop (Arabic/RTL), mobile (English), and an alternate "Direction B — Daylight editorial" desktop layout. These are the actual source of every token, component and screen in this system — re-read them (`uploads/` in this project) for anything this system doesn't cover.
- Four real STM studio-set photographs were embedded (base64) in the mockups and have been extracted to `assets/photos/`.

There is **no real STM logo file** anywhere in the source. The "mark" throughout this system — a lowercase italic "stm" in Archivo Bold inside a circle — is the typographic lockup the mockups used in place of a logo. Do not treat it as a real brand mark; swap it out the moment an actual logo file arrives.

### Content fundamentals
- **Voice:** short, declarative, concrete. Headlines are plain sentences ("We turn ideas into reality.", "Five things, done properly.", "On the credits."). No superlatives, no "revolutionary/seamless/cutting-edge."
- **Person:** speaks as "we", addresses the reader as "you" ("You brief a producer; we handle the rest of that list.").
- **Structure:** every major section opens with a numbered mono eyebrow ("01 — Selected work") — the copy is organized like a shot list.
- **Concrete over abstract:** service descriptions name real crew roles and materials ("director, DOP, 1st/2nd AD, gaffer" · "glass, plastic, liquid") rather than marketing abstractions.
- **CTAs are always the real channel:** WhatsApp with a pre-filled message, a mailto with a real subject line. Never a generic "Contact us" form.
- **Honesty about gaps:** placeholder imagery is labelled with the actual asset brief ("Showreel — 16:9 · supply MP4 or Vimeo / YouTube link"), not faked. Unknown data is bracketed (`[ STUDIO ADDRESS ]`) rather than invented.
- **Bilingual, not translated-feeling:** the Arabic isn't a literal mirror — sentence rhythm, idiom and even letter-tracking rules change (see Visual foundations).
- **Emoji:** never used, anywhere.

### Visual foundations
- **Ground:** near-black `#1F1E1C` ("night") is the primary page colour; a warm paper `#EFEDE7` ("daylight," Direction B) is a fully-alternate direction, not a light/dark toggle — pick one per build.
- **Colour:** one accent red `#D52027` used for CTAs, the current-section tick mark, and the "STM" line in every credit block — and nowhere else. Direction B substitutes a gold `#E7CA4A`/`#8A7420`. Everything else is a grey ramp from near-white to near-black text on the night ground.
- **Type:** three families, one job each — Archivo (display, bold italic for the wordmark, 700 for headlines, tight negative tracking), IBM Plex Sans Arabic (all body copy in *both* languages — it's the bridge font), IBM Plex Mono (eyebrows, meta, credits, footer, always uppercase and wide-tracked in English).
- **Arabic/RTL:** same three families, different metrics — no negative letter-spacing, looser line-height (1.16–1.95 vs 0.94–1.7), eyebrows set in Plex Sans Arabic at 13px/500 rather than mono caps. `dir="rtl"` flips the whole page; icons use logical `inset-inline-*` properties, not left/right.
- **Corners:** the system is square. Radius is `0` everywhere except the brand disc, which is the only circle in the brand.
- **Borders/shadows:** zero box-shadows anywhere. Separation is done entirely with 1px hairlines (five opacity steps, 10–28%) and ground-colour shifts (page → inset panel → dark band).
- **Imagery:** real studio photography only (skylight cyclorama, dressed interior sets) — warm practical lighting, deep shadow, one cold white cyc shot. Never stock photography, never a gradient standing in for a photo. Missing assets are left as bracketed mono placeholders, never AI-generated filler.
- **Iconography:** four stroke SVG glyphs total (whatsapp, arrow-right, arrow-up-right, menu), round-capped, 1.6–2px stroke. No icon font, no sprite sheet, no emoji, no unicode glyphs as icons. This is the system's entire icon inventory — see `components/core/Icon.jsx`.
- **Motion:** colour-only, 180ms `cubic-bezier(.22,.61,.36,1)`. Nothing scales, moves, fades or bounces. Hover only recolors text/borders to the accent; press has no visual state at all.
- **Layout:** fixed 100px desktop gutters (90px in Direction B), 20px mobile; sections separated by 110–120px of top padding, not cards; three-column grids for work and crew; a full-bleed dark band for "The Unit" section.

### Iconography
Covered above — four hand-drawn stroke SVGs lifted verbatim from the source (`components/core/Icon.jsx`), no font/sprite/emoji usage anywhere in the brand.

### Index

```
styles.css                  entry point — imports everything below
tokens/                     colors, typography, spacing, borders, motion, fonts, base states
assets/photos/              4 real studio photographs extracted from the source mockups
guidelines/                 19 foundation specimen cards (Colors, Type, Spacing, Brand)
components/
  core/        Icon, Eyebrow, Button, BrandMark, Rule+Tick, Frame, Input
  layout/      NavBar, SectionHead, RuleRow, ClientStrip, SpecStrip, Footer
  content/     CreditRow, WorkCard, ServiceRow, UnitColumn, ContactRow
ui_kits/landing/            full landing-page recreation — desktop EN, desktop AR/RTL,
                             mobile, Direction B daylight alternate, Work index, Case
                             study, Contact and 404, all interactive
```

### Intentional additions
- `components/core/Input.jsx` — a transparent, hairline-underlined text/textarea field. No form field exists in any source mockup; added only so the new Contact page's brief form has an input that matches the brand's square, shadow-free, hairline-separated visual language rather than borrowing a generic one.
- `ui_kits/landing/WorkIndex.jsx`, `CaseStudy.jsx`, `Contact.jsx`, `NotFound.jsx` — the source is a single landing page with no dedicated Work, Contact or 404 screens. These were built to give the landing page's own links ("See all work," a WorkCard click, "Start a project," a broken URL) a real destination, using only the established component vocabulary — no new visual motifs were introduced.

Everything else has a direct counterpart in the four source mockups; no primitive (Toast, Tabs, Dialog, etc.) was added beyond what the source actually uses.
