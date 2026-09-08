# FundMeOut — Logo System • 4 Options (no hierarchy)

**Options equal — no selected canonical.** All vectors in `logos/`:

## Lockups
- **01 Brand Guidelines:** `official-brand-primary.svg` (+ white/mono/app/FMO/loader) — centered smile in "O" + `u`-swoop, Slide 02. `#0052FF`.
- **02 Uplift Bridge:** `concept-2-smile-bridge.svg` (+ dark/initial/loader) — smile under "O" → "ut" with flick.
- **03 Joyful 'O':** `concept-1-smiley-o.svg` (+ dark/initial/loader) — eyes + smile inside "O".
- **04 Halo Badge:** `concept-3-fund-badge.svg` (+ dark/initial/loader) — standalone disc + wordmark.
- **Common variants:** Each has light/dark/loader/initial; all `@import`-free for `file://`.

## Construction
- Wordmark: Plus Jakarta Sans 800, -0.035em tracking, 82pt baseline.
- O: r30 stroke 8.5 + inner smile `M22 36 C22 50 46 50 46 36` stroke 6.5.
- u: swooping baseline `M428 38 V64 C428 82 458 82 458 64 V38`.
- Clear space: x-height (cap O radius) on all sides. Min size 24px wordmark, 16px FMO.

## Usage
- Never stretch, recolor smile independently, or place lime smile on white without charcoal text.
- Offline-safe: `@import` removed; relies on page-loaded Plus Jakarta Sans or system sans fallback. For print, outline to paths.

## File:// Safety
All logos embedded in `logos/logos-inline.js` for `file://` copy without fetch. See `icons/icons-inline.js` for icons.
