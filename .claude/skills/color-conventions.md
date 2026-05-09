# ShadeWorks Color Conventions

All color processing code in this project must follow these rules. They exist to ensure perceptual uniformity, correct WCAG scoring, and consistent export output.

---

## Oklahoma (oklch) is the only color space for math

All internal computation — harmony generation, shade scale interpolation, contrast ratio inputs — must use oklch. Never use HSL for math; its lightness channel is not perceptually uniform.

```ts
// ✅ correct
const lighter = { l: color.l + 0.1, c: color.c, h: color.h };

// ❌ wrong — HSL lightness is perceptually non-uniform
const lighter = { h: hsl.h, s: hsl.s, l: hsl.l + 10 };
```

oklch values: `l` (lightness 0–1), `c` (chroma 0–0.4), `h` (hue 0–360).

---

## Shade scale: 11 stops via lightness interpolation

The shade scale is always `[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]`. Generate it by interpolating the oklch `l` channel from ~0.97 (50) to ~0.10 (950), keeping `c` and `h` fixed.

```ts
import { SHADE_STOPS } from "@/lib/color";

// lightnessAt[stop] maps shade stop → oklch lightness
const lightnessAt: Record<number, number> = {
  50: 0.97, 100: 0.93, 200: 0.85, 300: 0.75, 400: 0.65,
  500: 0.55, 600: 0.45, 700: 0.35, 800: 0.25, 900: 0.15, 950: 0.10,
};
```

---

## Harmony types

Six harmony types are supported. All are computed by rotating the hue (`h`) channel in oklch:

| Type | Hue offsets |
|---|---|
| `complementary` | +180 |
| `analogous` | ±30 |
| `triadic` | +120, +240 |
| `split-complementary` | +150, +210 |
| `tetradic` | +90, +180, +270 |
| `monochromatic` | 0 (chroma variation only) |

Color roles: dominant (60%) / secondary (30%) / accent (10%).

---

## WCAG contrast ratio formula

Use the WCAG 2.1 relative luminance formula — do not use chroma distance or oklch `l` as a proxy for contrast.

```ts
// relative luminance of a linear RGB channel
const toLinear = (c: number) =>
  c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;

// contrast ratio
const ratio = (l1: number, l2: number) =>
  (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
```

Thresholds:
- **AA**: ≥ 4.5:1 (normal text), ≥ 3:1 (large text / UI components)
- **AAA**: ≥ 7:1

---

## Export conversions happen at the boundary

oklch is the internal format. Conversions to HEX, RGB, HSL, or CSS oklch strings happen only in export utilities (`/lib/color/export.ts`), never inside harmony generation or shade scale logic.

---

## Animation gating

All Motion and GSAP animations must be gated on `prefers-reduced-motion`:

```ts
import { useReducedMotion } from "motion/react";

const shouldReduce = useReducedMotion();
// pass shouldReduce to animation config and skip or simplify if true
```

---

## Accessibility rules for color swatches

- Never display color alone — always pair with a text label and WCAG contrast score.
- `aria-live="polite"` on the palette output region.
- All interactive swatches need `:focus-visible` and an accessible label.
