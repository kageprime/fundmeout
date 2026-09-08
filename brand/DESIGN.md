# FundMeOut — DESIGN.md — Joyful Precision

> **Aesthetic Direction: Joyful Precision** — Swiss Rationalist + Kinetic Gradient + Toy-Tech. Grid-absolute Swiss discipline with one kinetic, tactile smile that lifts.

## Design Brief (8 lines)
```
Purpose:    Crowdfunding platform that lifts people out of hardship via joyful community giving — browse causes, fund in 1 tap, track impact.
Audience:   Donors 25-45 mobile-first + cause creators needing trust; skimming on phone, deciding in 15 seconds, returning for updates.
Tone:       Joyful Precision — Swiss poster grid meets Teenage Engineering toy-tech tactile joy.
Reference:  Teenage Engineering OP-1 product page + Josef Müller-Brockmann Swiss posters + Nothing Phone launch — matte tactile + neon halo.
Palette:    Charcoal void #06090E base + electric cobalt #0052FF primary + vivid cyan #00F0FF halo + lime lift #06FF2E accent + paper #F7F9FF.
Type:       Plus Jakarta Sans 800 display (geometric joy) + Inter 400-600 text (readable) + JetBrains Mono 500 labels (device labels).
Memorable:  The uplift smile — a single kinetic curve starting under "O" and flicking up past "ut", physically echoed as the Pebble LED halo.
Restraint:  ONE gradient only (the smile). No purple-blue mesh, no photography filters, no more than 2 radii, no drop shadows beyond glass.
```

## Tokens (locked — every value traces here)
```css
:root {
  /* COLOR — OKLch-tuned for WCAG AA */
  --bg: #06090E;                /* charcoal void — 1.1:1 on bg, ink base */
  --bg-panel: #0D121B;           /* card on void — 4.5:1 text on panel */
  --bg-panel-hover: #121926;
  --border-subtle: #1B2433;
  --border-strong: #2A364F;
  --electric-blue: #0052FF;      /* primary 4.8:1 on paper #F7F9FF, 5.6:1 on white */
  --electric-blue-hover: #0035D0;
  --vivid-cyan: #00F0FF;          /* halo — 3:1 on charcoal for UI boundaries */
  --electric-lime: #06FF2E;       /* lift — paired always with charcoal text */
  --sunset-pink: #FF408A;         /* community warmth */
  --deep-purple: #7B30FF;         /* editorial */
  --text-main: #F4F7FB;           /* 15.2:1 on --bg */
  --text-muted: #8E9DB2;          /* 7.1:1 on --bg, 4.5:1 floor for small text */
  --paper: #F7F9FF;               /* light surface */
  --paper-ink: #06090E;

  /* TYPE — 1.250 major third */
  --font-display: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-text: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  --text-xs: 0.72rem;   /* 11.5px mono labels */
  --text-s: 0.85rem;    /* 13.6px ui */
  --text-m: 1rem;       /* 16px body */
  --text-l: 1.4rem;     /* 22.4px section titles */
  --text-xl: 2.5rem;    /* 40px hero */
  --text-2xl: 3rem;     /* 48px manifesto */
  --leading-tight: 1.1;
  --leading-normal: 1.5;
  --tracking-display: -0.03em;

  /* SPACE — 4px base, 8px grid */
  --space-2: 4px;  --space-4: 8px;  --space-6: 12px;  --space-8: 16px;
  --space-12: 24px; --space-16: 32px; --space-24: 48px; --space-32: 64px;

  /* RADIUS — exactly 2 values */
  --radius-card: 16px;   /* panels, cards */
  --radius-pill: 8px;    /* buttons, tags, inputs */

  /* SHADOW — glass, not drop */
  --shadow-glass: 0 8px 32px rgba(0,82,255,0.15);
  --shadow-hover: 0 12px 40px rgba(0,82,255,0.25);

  /* MOTION — 200ms ease-out default */
  --ease-out: cubic-bezier(0.16,1,0.3,1);
  --dur-fast: 150ms;
  --dur-base: 200ms;
}
```

## Layout
- 12-col grid, max 1400px, 32px gutters. Flush-left ragged-right. Generous top margins (64px sections).
- One memorable moment: the smile halo — overhead circular light in retail, LED rim on Pebble, kinetic draw on donation. Every surface references the same curve.

## Components
- Buttons: 8px radius, 2px stroke, 5 states (default/hover/active/focus/disabled) — never icon-only without label.
- Cards: 16px radius, 1px border var(--border-subtle), hover lifts 2px with --shadow-glass.
- Tags: mono 0.72rem, 6px radius, 1px border, uppercase 0.08em tracking.
- No shadows invented per component — only the two above.

## Anti-patterns (Restraint enforcement)
- No purple-blue mesh gradient outside the smile.
- No more than 2 radii in any view.
- No raw px outside space scale.
- No hardcoded #hex outside :root.
- No <div onclick> — use <button>.
