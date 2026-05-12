# Nithin Finserv — Next.js

A Next.js 14 + TypeScript + Tailwind CSS conversion of `nithin_finserv_final.html`.

## Getting started

```bash
cd nithin-finserv-next
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build (static export)

`next.config.mjs` has `output: 'export'` enabled — the build produces a fully static site in `./out/`:

```bash
npm run build
# upload contents of ./out/ to any static host (Netlify, Vercel, S3, GitHub Pages…)
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx              Root layout (Nav + Footer + FloatingCTA)
│   ├── page.tsx                Home page (hero, why us, products, FAQ, contact)
│   ├── globals.css             Tailwind + custom @layer styles
│   ├── calculators/page.tsx    /calculators (20 calculators + modal)
│   ├── blog/page.tsx           /blog and /blog?id=N
│   ├── about/page.tsx          /about
│   ├── terms/page.tsx          /terms
│   ├── privacy/page.tsx        /privacy
│   └── disclosure/page.tsx     /disclosure
├── components/
│   ├── Nav.tsx                 Sticky top navigation
│   ├── Footer.tsx              Site footer
│   ├── FloatingCTA.tsx         WhatsApp + Call (desktop floating, mobile bar)
│   └── CalculatorModal.tsx     Calculator modal with sliders, donut chart, results
└── lib/
    ├── calcs.ts                CALCS array, field defs, runCalc engine (20 calcs)
    ├── blog.ts                 BlogPost type, seed data, localStorage helpers
    └── utils.ts                fmt / fmtN (Indian numbering helpers)
```

## Design tokens (Tailwind config)

Colors map to the source HTML's CSS custom properties:

| Token | Hex |
|-------|-----|
| `navy` | `#071b2a` |
| `navy-2` | `#0e2840` |
| `teal` | `#10b981` |
| `teal-2` | `#0d9668` |
| `gold` | `#f0a500` |
| `cream` | `#f7f9f6` |
| `gray` | `#5f6b78` |
| `light` | `#e5f4ee` |
| `border` | `#e2e8e4` |
| `red` | `#e53e3e` |
| `legal` | `#6c63ff` |

Fonts: `Playfair Display` (serif) and `DM Sans` (sans) loaded via `next/font/google`.

## Notable conversion decisions

- **SPA → routes.** The original used a single `showPage(id)` function to swap visible `<div class="page">` blocks. That's now real Next.js routes — each former page is its own file under `app/`.
- **Calculator modal.** All 20 calculators share `<CalculatorModal />`. The 20 input layouts live in `FIELDS` (data); all formulas live in `runCalc()` (a pure function returning a `CalcResult`). Adding a 21st calculator means adding one entry to `CALCS`, one to `FIELDS`, and one `case` in `runCalc`.
- **Blog single via query param.** Originally `/blog/[id]` — switched to `/blog?id=N` because `output: 'export'` requires `generateStaticParams` for dynamic segments, and the blog supports admin-created posts (only in `localStorage`) whose IDs can't be pre-generated.
- **Admin panel.** Not yet ported — the original had a password-gated overlay for creating blog posts. The seed posts in `lib/blog.ts` are the source of truth right now.
- **Hover transforms scoped.** The original `.calc-card` was overridden by `#page-calc .calc-card` in the standalone file; in Next.js the home preview and calculators page already use different markup, so no scoping hack is needed.

## Disclaimers

This is a Mutual Fund Distributor website. All disclaimer text (AMFI registration, market-risk warnings, no-advisor notices) has been preserved verbatim from the source HTML and is required for compliance — do not remove it.
