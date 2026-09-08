# FundMeOut — Accessibility Report (WCAG 2.2 AA)

**Date:** 2026-09-08  
**Palette under test:** Official lock `#0052FF` / `#00F0FF` / `#06FF2E` on `#06090E` voids and `#F7F9FF` paper.

## Contrast Matrix (computed via sRGB linearized luminance)

| Pair | Ratio | AA (4.5:1) | AA Large (3:1) | Verdict |
|------|-------|------------|----------------|---------|
| `--text-main #F4F7FB` on `--bg #06090E` | 18.56:1 | PASS | PASS | ✅ |
| `--text-muted #8E9DB2` on `--bg #06090E` | 7.23:1 | PASS | PASS | ✅ |
| `--electric-blue #0052FF` on `--paper #F7F9FF` | 5.46:1 | PASS | PASS | ✅ |
| `--electric-blue #0052FF` on `white` | 5.75:1 | PASS | PASS | ✅ |
| `white` on `--electric-blue #0052FF` | 5.75:1 | PASS | PASS | ✅ |
| `--vivid-cyan #00F0FF` on `--bg #06090E` | 14.16:1 | PASS | PASS | ✅ |
| `--electric-lime #06FF2E` on `--bg #06090E` | 14.58:1 | PASS | PASS | ✅ **must pair with charcoal text** |
| `--electric-lime #06FF2E` on `white` | 1.37:1 | FAIL | FAIL | ❌ NEVER use lime on white |
| `--text-main` on `--bg-panel #0D121B` | 17.46:1 | PASS | PASS | ✅ |

**Iron Laws:**
- Lime `#06FF2E` is **accent only** with charcoal `#06090E` text; white text on lime fails. Provide alternative: lime pill with charcoal label.
- Large text (≥18px bold or ≥24px) still requires the same gate for lime.
- Interactive target size ≥24×24px (44×44 recommended) — icon buttons already `28px` with `12px` grid.
- Motion respects `prefers-reduced-motion`.

## Semantic Checklist (per `building-accessible-interfaces` skill)

- [x] Landmarks: `<nav>` + `<main id="main">` + `<header>` — add `skip-link` next.
- [x] Headings: Single `<h1>` per page (`hero-title` / `Brand Guidelines Deck`).
- [x] Buttons vs Links: Nav links are `<a href>`, actions that copy are `<button>` — correct.
- [x] Keyboard: All controls reachable via Tab; lightbox in `brand-kit.html` supports Esc + ArrowLeft/Right (`brand-kit.html:568`).
- [ ] Toast `role=status aria-live=polite` — to be added.
- [ ] Icon `aria-hidden=true` + visible label — icons currently have `<span class="icon-name">` label, good.

## Action Items
1. Add `<a href="#main" class="skip-link">Skip to content</a>` to all 4 hubs.
2. Add `aria-label="Close"` to `brand-kit.html:374` lightbox close.
3. Ensure `prefers-reduced-motion` disables kinetic loaders.
