# Color Palette SaaS — Project Knowledge - Project Name ShadeWorks

---

## 1. Product Overview

A freemium SaaS web application that generates professional color palettes from a single input color. Targets designers and developers who need accessible, production-ready color systems fast.

The core differentiator: combines 60/30/10 role assignment, 6 harmony types, a full 50–950 shade scale, dark/light mode side-by-side output, and WCAG accessibility scoring in a single unified workflow — something no existing tool does end-to-end.

---

## 2. Verified Stack

| Package        | Version        |
|----------------|----------------|
| Next.js        | 16.2.4         |
| TypeScript     | 5.9.3 minimum, strict mode |
| Tailwind CSS   | 4.2.4          |
| shadcn/ui      | 4.7.0          |
| Motion         | 12.37.0        |
| GSAP           | 3.15.0         |
| React          | 19.2           |
| Supabase JS    | latest stable  |
| Stripe JS      | latest stable  |
| pnpm           | latest stable  |

### System Requirements (Next.js 16)

| Requirement | Minimum Version  |
|-------------|------------------|
| Node.js     | 20.9.0 (LTS)     |
| TypeScript  | 5.9.3            |
| React       | 19.2             |

### Key Next.js 16 Behaviors

- Caching is fully opt-in via the "use cache" directive. No implicit caching.
- proxy.ts replaces middleware.ts for all network boundary logic.
- Turbopack is the default bundler for dev and production builds.
- React Compiler is stable — automatic memoization, no manual useMemo or useCallback needed.
- React 19.2: use View Transitions for page-level transitions, useEffectEvent for event handlers that read latest state, and Activity component for background UI state management.

---

## 3. Features

### Color Input

- Formats: HEX, RGB, HSL, oklch
- Native color picker (input type="color") plus manual text input
- Real-time validation and live format conversion
- All inputs labeled and keyboard accessible

### Palette Generation

- Rule: 60/30/10 — Dominant (60%) / Secondary (30%) / Accent (10%)
- 6 harmony types: Complementary, Analogous, Triadic, Split-Complementary, Tetradic, Monochromatic
- App suggests color role with user override capability
- Tint/shade scale: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
- All color math in oklch for perceptual uniformity

### Dark / Light Mode Output

- Every palette generated in both dark and light variants
- Side-by-side comparison layout
- WCAG contrast scores shown per pair in both modes

### Accessibility Engine

- WCAG 2.1 relative luminance contrast ratio per color pair
- AA (4.5:1 normal text, 3:1 large text) and AAA (7:1) pass/fail badges
- Improvement suggestions for failing pairs
- The app itself targets WCAG AAA compliance

### Export Options

- CSS custom properties
- Tailwind CSS v4 @theme format
- JSON
- Clipboard copy available on Free tier / all formats on Pro tier

### Animations

- Motion 12.37.0: palette reveal, component transitions, hover micro-interactions
- GSAP 3.15.0: landing page scroll sequences, color swatch timeline reveals
- All animations gated behind prefers-reduced-motion check

---

## 4. Business Model

### Free Tier

- 3 palette saves per account
- All 6 harmony types
- Dark/light preview
- Clipboard copy only
- AA badge only

### Pro Tier (Monthly via Stripe)

- Unlimited saves
- All export formats: CSS, Tailwind, JSON
- Full 50–950 shade scale
- Full accessibility scoring: AA and AAA
- Palette history and versioning
- Priority support

---

## 5. Architecture & Database

### Infrastructure

- Frontend and API routes: Next.js 16.2.4 on Vercel
- Auth and Database: Supabase (PostgreSQL)
- Payments: Stripe (monthly subscription, webhook-driven)
- No separate backend for v1

### Database Schema (Supabase / PostgreSQL)

**profiles**

| column              | type        | notes               |
|---------------------|-------------|---------------------|
| id                  | uuid        | FK → auth.users     |
| stripe_customer_id  | text        | nullable            |
| subscription_status | text        | 'free' or 'pro'     |
| created_at          | timestamptz |                     |
| updated_at          | timestamptz |                     |

**palettes**

| column       | type        | notes               |
|--------------|-------------|---------------------|
| id           | uuid        | PK                  |
| user_id      | uuid        | FK → profiles       |
| name         | text        | user-defined        |
| base_color   | text        | oklch string        |
| harmony_type | text        |                     |
| palette_data | jsonb       | full palette object |
| created_at   | timestamptz |                     |
| updated_at   | timestamptz |                     |

### Project Structure

```
/src
  /app
    /api
      /webhooks
        /stripe
          route.ts
    /(auth)
      /login
      /signup
    /(app)
      /dashboard
      /palette
        /[id]
    page.tsx
  /components
    /ui              (shadcn primitives — do not edit internals)
    /palette
    /layout
    /accessibility
  /lib
    /color           (oklch math, harmony generation, shade scale)
    /supabase
      client.ts
      server.ts
    /stripe
    /wcag            (contrast ratio, luminance utilities)
  /hooks
  /types
  env.ts
  proxy.ts           (replaces middleware.ts in Next.js 16)
```

---

## 6. Color Processing & WCAG Implementation

### Color Rules

- All internal computation in oklch
- Shade scale generated via oklch lightness interpolation across 11 stops
- Contrast ratio calculated via WCAG 2.1 relative luminance formula
- Export conversions to HEX, RGB, HSL, oklch
- Never use HSL for color math — perceptually non-uniform

### WCAG Implementation

- aria-live="polite" on palette output region
- Export buttons have aria-label describing the format
- Color swatches include text label and contrast score — never color alone
- :focus-visible on all interactive elements
- Focus trap in all modals via shadcn Dialog — do not override
- Skip navigation link at top of every page
- Contrast targets: AA minimum (4.5:1), AAA goal (7:1)

---

## 7. Roadmap

| Phase | Scope                                                              |
|-------|--------------------------------------------------------------------|
| v1    | Core generator, auth, freemium gate, Stripe, all exports, WCAG    |
| v2    | Public palette sharing, community gallery, AI color naming         |
| v3    | Figma plugin, VS Code extension                                    |