# ShadeWorks

A freemium SaaS that generates professional color palettes from a single input color — with WCAG accessibility scoring, dark/light mode previews, and export to CSS, Tailwind, and JSON.

Built for designers and developers who need accessible, production-ready color systems fast.

---

## Features

- **Palette generation** — 6 harmony types (complementary, analogous, triadic, split-complementary, tetradic, monochromatic) with 60/30/10 dominant/secondary/accent role assignment
- **Shade scale** — Full 50–950 range interpolated in oklch for perceptual uniformity
- **Dark/light preview** — Side-by-side output for both modes, generated simultaneously
- **Accessibility engine** — WCAG 2.1 contrast scoring with AA and AAA pass/fail badges and improvement suggestions
- **Export** — CSS custom properties, Tailwind CSS v4 `@theme` format, and JSON
- **Freemium** — Free tier with 3 saves and clipboard copy; Pro tier unlocks unlimited saves, all export formats, and full accessibility scoring

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5.9 (strict) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Animations | Motion 12 · GSAP 3 |
| Auth & Database | Supabase (PostgreSQL) |
| Payments | Stripe |
| Deployment | Vercel |

---

## Project Structure

```text
src/
├── app/
│   ├── (auth)/           # Login and signup routes
│   ├── (app)/            # Protected app routes (dashboard, palette viewer)
│   ├── api/
│   │   └── webhooks/stripe/  # Stripe subscription webhook
│   └── page.tsx          # Landing page
├── components/
│   ├── ui/               # shadcn primitives (do not edit)
│   ├── palette/          # Palette display and swatch components
│   ├── layout/           # Shell, nav, sidebar
│   └── accessibility/    # Contrast badge, score display
├── lib/
│   ├── color/            # oklch math, harmony generation, shade scale
│   ├── wcag/             # Contrast ratio and luminance utilities
│   ├── supabase/         # Browser and server Supabase clients
│   └── stripe/           # Stripe singleton and helpers
├── hooks/
├── types/
├── env.ts                # Fail-fast environment variable validation
└── proxy.ts              # Auth guards and redirects (Next.js 16 middleware)
```

---

## Disclaimer

This project is a work in progress and is intended for personal and portfolio use. Features, APIs, and database schemas are subject to change. Use at your own risk.

---

## License

[MIT](./LICENSE.md) — Copyright (c) 2026 Sauel Almonte
