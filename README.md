# Digital Marketing Portfolio

Personal portfolio website for **Shehan Maduharshana** — Digital Marketer & Growth Strategist.

A single-page, fully static marketing portfolio built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Dark editorial theme with a red accent, oversized display typography, and a cut-out portrait hero.

---

## Highlights

- **Hero** — oversized "MARKETER" display type layered behind a cut-out portrait, cursive intro, live availability pill, and three metric stats (5+ years, 120+ campaigns, $4.5M+ revenue generated).
- **Selected Projects** — case-study cards rendered as CSS mockups with inline result metrics (ROAS, CAC, revenue deltas) rather than screenshots.
- **Experience & Services** — education and certifications, tool badges, four service pillars (performance & paid advertising, SEO, email & lifecycle marketing, CRO, growth strategy & analytics), and a process timeline.
- **Editorial Insights** — writing/article teaser grid.
- **Footer** — contact CTA, email and phone links, social profiles, and back-to-top.

## Sections

| Section | Anchor | Component |
| --- | --- | --- |
| Site header / availability | — | `components/Header.tsx` |
| Hero banner | — | `components/Hero.tsx` |
| Selected projects | `#projects` | `components/SelectedProjects.tsx` |
| Experience & services | — | `components/ExperienceServices.tsx` |
| Latest insights & articles | `#articles` | `components/EditorialInsights.tsx` |
| Contact & footer | `#contact` | `components/Footer.tsx` |

## Tech Stack

- [Next.js](https://nextjs.org) 16.3.8 — App Router, Turbopack builds, static prerendering
- [React](https://react.dev) 19.2.8
- [TypeScript](https://www.typescriptlang.org) 5 (strict)
- [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/postcss`, custom brand theme in `app/globals.css`
- [ESLint](https://eslint.org) 9 + `eslint-config-next`
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Inter (body), Oswald (display), Caveat (script), Reenie Beanie (signature)

## Getting Started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
.
├── app/
│   ├── layout.tsx        # Root layout, font setup, page metadata
│   ├── page.tsx          # Section composition
│   └── globals.css       # Tailwind import + brand theme tokens
├── components/           # Section components (Header, Hero, etc.)
├── public/assets/        # Portrait imagery
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── tsconfig.json
```

## Customization

Brand colors and fonts are defined as Tailwind theme tokens in `app/globals.css`:

| Token | Value |
| --- | --- |
| `--color-brand-red` | `#D91B24` |
| `--color-brand-crimson` | `#B9141B` |
| `--color-brand-dark-red` | `#7A0C11` |
| `--color-brand-charcoal` | `#0C0C0D` |
| `--color-brand-surface` | `#111113` |
| `--color-brand-card` | `#161619` |
| `--color-brand-border` | `#222226` |

To rebrand, edit those tokens, update `components/Header.tsx` / `Hero.tsx` copy, and replace `public/assets/shehan2.png`. Update page metadata in `app/layout.tsx`.

> The `UI/` directory holds the original HTML prototype and reference screenshot and is excluded from version control via `.gitignore`.

## Deployment

Deploys to [Vercel](https://vercel.com) with no configuration — import the repository and accept the defaults. The site is fully static and can also be exported to any Node or static host.

## License

No license file is included. All rights reserved unless one is added later.