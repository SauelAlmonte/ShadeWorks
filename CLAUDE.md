# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**ShadeWorks** — a freemium SaaS that generates professional, WCAG-compliant color palettes from a single input color. Stack: Next.js 16, React 19.2, TypeScript 5.9.3 (strict), Tailwind CSS v4, shadcn/ui, Supabase, Stripe. Package manager: **pnpm**.

## Commands

```bash
pnpm dev          # Start dev server (Turbopack default in Next.js 16)
pnpm build        # Production build
pnpm lint         # ESLint
pnpm type-check   # tsc --noEmit
```

No test runner is defined yet. Add Vitest when tests are introduced.

## Architecture

### Next.js 16 conventions
- `proxy.ts` (not `middleware.ts`) handles all network boundary logic — auth guards, redirects, header injection.
- Caching is **fully opt-in**: use the `"use cache"` directive explicitly. There is no implicit caching.
- Turbopack is the default bundler for both `dev` and `build`.
- React Compiler handles memoization automatically — do **not** use `useMemo` or `useCallback` manually.
- Use React 19.2 primitives: View Transitions for page-level transitions, `useEffectEvent` for event handlers that read latest state.

### Color processing
- All internal color math uses **oklch** — never HSL (perceptually non-uniform).
- Shade scale is 11 stops: 50, 100, 200 … 900, 950 — generated via oklch lightness interpolation.
- WCAG 2.1 contrast ratio uses the relative luminance formula in `/lib/wcag/`.
- Export conversions (HEX, RGB, HSL, oklch) happen at the boundary, not during computation.

### Data flow
- `src/lib/color/` — oklch math, harmony generation (6 types), shade scale.
- `src/lib/wcag/` — contrast ratio and luminance utilities.
- `src/lib/supabase/client.ts` — browser Supabase client; `server.ts` — server-side client.
- `src/lib/stripe/` — Stripe helpers, subscription status checks.
- `src/app/api/webhooks/stripe/route.ts` — webhook handler that syncs `subscription_status` on `profiles`.

### Auth & entitlements
- Auth via Supabase. `profiles` table extends `auth.users` with `stripe_customer_id` and `subscription_status` (`'free'` | `'pro'`).
- Entitlement checks read `subscription_status` from `profiles`. Gate: Free = 3 palette saves, clipboard export, AA badge only. Pro = unlimited saves, all export formats, full shade scale, AAA badge.

### UI components
- `src/components/ui/` — shadcn primitives. **Do not edit internals.**
- shadcn Dialog manages focus trapping in modals — do not override this behavior.

## Key Constraints

**Accessibility is a first-class requirement** — the app targets WCAG AAA compliance:
- `aria-live="polite"` on palette output region.
- Color swatches must include a text label and contrast score — never color alone.
- `:focus-visible` on all interactive elements.
- Skip navigation link at the top of every page.
- All animations gated behind `prefers-reduced-motion`.

**Animation library split:**
- **Motion 12.37.0** — palette reveal, component transitions, hover micro-interactions.
- **GSAP 3.15.0** — landing page scroll sequences, color swatch timeline reveals.

## Database Schema

```sql
-- profiles (extends auth.users)
id uuid FK→auth.users, stripe_customer_id text, subscription_status text, created_at, updated_at

-- palettes
id uuid PK, user_id uuid FK→profiles, name text, base_color text (oklch),
harmony_type text, palette_data jsonb, created_at, updated_at
```
