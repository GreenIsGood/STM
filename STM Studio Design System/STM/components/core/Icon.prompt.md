Stroke icon in the STM set — the only four glyphs the brand actually uses.

```jsx
<Icon name="whatsapp" size={18} />
<Icon name="arrowUpRight" size={13} />
```

Glyphs: `whatsapp` (every CTA), `arrowRight` (secondary "See the work"), `arrowUpRight` (outbound / "VIEW POST"), `menu` (mobile nav, 22px in a 44px tap target). Stroke weights are baked per-glyph (1.6–2) and round-capped; don't restyle them. Anything outside this set: use Lucide at stroke-width 1.8 to match.
