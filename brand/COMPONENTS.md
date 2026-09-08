# FundMeOut — UI Component Spec (excerpt)

Tokens: `brand/tokens.json` + `brand/DESIGN.md` CSS. Every value below maps to a token.

## Button
```css
.btn { padding: var(--space-8) var(--space-16); border-radius: var(--radius-pill); font: 600 var(--text-s)/1 var(--font-text); }
.btn--primary { background: var(--electric-blue); color: #FFF; border: 1px solid var(--electric-blue); }
.btn--primary:hover { background: var(--electric-blue-hover); }
.btn:focus-visible { outline: 2px solid var(--vivid-cyan); outline-offset: 2px; }
```
States: default / hover / active (scale 0.98) / focus-visible / disabled (opacity .5, no pointer).

## Card
```css
.card { background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: var(--radius-card); padding: var(--space-16); }
.card:hover { border-color: var(--border-strong); transform: translateY(-2px); box-shadow: var(--shadow-glass); }
```

## Tag / Pill
```css
.pill { font: 700 var(--text-xs)/1 var(--font-mono); letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 6px; border: 1px solid var(--border-subtle); background: rgba(255,255,255,0.04); }
```

All other components follow the same two radii and 4px space scale.
