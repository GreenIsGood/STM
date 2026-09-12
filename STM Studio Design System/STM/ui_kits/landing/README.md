# UI kit — STM Studio landing page

A recreation of the STM Studio landing page as it was designed, built out of this
system's own components. Nothing here is invented: every string, size and colour
is lifted from the four source HTML files the studio supplied.

## Screens

| File | What it is |
| --- | --- |
| `Landing.jsx` | Full desktop page, 1440px. Takes `lang="en" \| "ar"` and flips the whole page to RTL with the Arabic copy and Arabic type metrics. |
| `LandingMobile.jsx` | 390px page. Hamburger nav with a working menu, stacked full-width CTAs, two-up client grid, abbreviated work list (3 of 6). |
| `DirectionB.jsx` | The daylight-editorial alternate — warm paper, gold accent, 90px gutters, unbracketed frames. Shown as the studio saw it, not merged into the main direction. |
| `WorkIndex.jsx` | Full portfolio page — all credits, filterable by STM's role (Production house / Digital unit / Studio & photography / Full event coverage). Not in the source; built to give "See all work" a real destination. |
| `CaseStudy.jsx` | Single-project detail page — hero frame, credit sidebar, two-image gallery, next-project link. Not in the source; the natural landing spot for a WorkCard click. |
| `Contact.jsx` | Dedicated contact page with a real brief form (project name, deadline, budget, brief) alongside the phone/email/studio/social block. Not in the source. |
| `NotFound.jsx` | 404 page, in the brand's own film-shoot language ("Cut. That page isn't on the reel."). Not in the source. |
| `copy.js` | All EN + AR copy, client list, work credits and studio specs in one object. |

## Interactions in `index.html`

Top-right switch: **Home / Work / Contact / Mobile / Direction B / 404**, plus
an **EN ⇄ ع** toggle on the pages that support it. Work → clicking a card opens
its case study; "Next project" cycles through the roster; "← All work" returns
to the filtered grid. The mobile hamburger opens a real menu. Work cards and
every CTA link out to the real Instagram posts and WhatsApp thread from the
source.

## Intentional additions (not in the source)
The source is a single landing page — it has no dedicated Work, Contact or
404 screens, and no form fields. `WorkIndex`, `CaseStudy`, `Contact` and
`NotFound` were built from scratch to give the landing page's own links
(`#work`, "See all work", "Start a project") real destinations, using only
the established component vocabulary. `Input` (`components/core/Input.jsx`)
was added for the Contact page's brief form — a transparent, hairline-underlined
field matching the brand's square, shadow-free language; see the main
`readme.md` "Intentional additions".

## Known gaps (inherited from the source, deliberately not filled)

- The showreel and all six work frames are **empty bracketed placeholders** —
  the source states the asset brief instead of faking imagery.
- Client logos are set as Archivo wordmarks, with the bracketed note the source carries.
- The studio address is `[ STUDIO ADDRESS ]`.
