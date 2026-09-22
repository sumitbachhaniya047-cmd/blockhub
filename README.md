# Pathfolio — Student Career & Learning Hub

Phase 1 frontend for a platform that helps college students discover free
courses, official certificates, real internships, and career roadmaps — all
linked back to their original creators and providers.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom design tokens — see `tailwind.config.ts`)
- Sample/mock data only — no backend yet (see "Next steps")
- Structured to be Supabase- and Vercel-ready

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> This project was scaffolded in an offline environment, so dependencies have
> not been installed or build-tested here. Run `npm install` followed by
> `npm run build` locally before deploying, and fix anything that surfaces —
> the code has been reviewed for consistent imports and types, but hasn't
> been compiled.

## Folder structure

```
app/                     Routes (Next.js App Router)
  page.tsx                 Home
  courses/                  Course directory + /courses/[slug] detail page
  certificates/             Certificate opportunities directory
  internships/              Internship directory
  roadmaps/                 Career roadmaps
  login/, signup/           Auth pages (UI only — not wired to Supabase yet)
  dashboard/                Student dashboard (tabs: overview, saved items, roadmap, profile)
  admin/                    Admin dashboard (CRUD UI, in-memory only for now)
  layout.tsx, globals.css   Root layout, fonts, global styles
  loading.tsx, error.tsx, not-found.tsx   App-wide loading/error/404 states

components/
  layout/                  Navbar, Footer
  home/                    Home page sections (hero, category grid, journey, etc.)
  courses/, certificates/, internships/, roadmaps/, dashboard/, admin/
                            Feature-specific cards, filters, tables, forms
  ui/                       Shared primitives: Button, Badge, SearchBar,
                             EmptyState, ErrorState, LoadingSkeleton, VerifiedBadge, Avatar

lib/
  types.ts                 Shared TypeScript types (mirrors future Supabase tables)
  utils.ts                 Small formatting helpers
  sample-data/             Realistic placeholder data for every entity —
                             courses, certificates, internships, roadmaps,
                             dashboard, admin users
```

## Design notes

- Palette: deep ink navy, warm paper background, amber accent (achievement /
  certification), teal accent (verification / tech). Type: Sora for display,
  IBM Plex Sans for body, IBM Plex Mono for data-like labels (verification
  status, dates).
- Every course links out to its original creator/platform. Nothing is
  downloaded, re-hosted, or re-uploaded.
- Every certificate card shows the official provider, links to the official
  page, and carries a verification status + last-verified date instead of
  asserting "free" outright.
- Every internship listing shows pay status explicitly, including
  "Unverified" when it hasn't been checked, and links to the employer's own
  application page.
- Loading, empty, and error states are implemented throughout — the course,
  certificate, and internship directories simulate a fetch delay so those
  states are easy to see even against static sample data.

## Content & compliance notes (read before adding real data)

- Do not replace sample resources with re-hosted video/audio — always link to
  the original creator or platform.
- Before marking any certificate `Free`, `Free (Audit)`, or `Free Trial`,
  verify directly against the provider's current page — costs and trial
  terms change.
- Never represent Pathfolio as the certificate issuer. All certificate cards
  must keep the provider name and official link visible.
- Verify internship pay status and deadlines against the employer's own
  listing before publishing.

## Next steps (not yet built)

1. `npm install` + `npm run build` locally, and fix anything the compiler or
   linter surfaces.
2. Wire up Supabase: auth (replacing the mock login/signup forms), and
   tables for courses, certificates, internships, roadmaps, saved items, and
   users — matching the shapes in `lib/types.ts`.
3. Replace sample data reads (`lib/sample-data/*`) with Supabase queries.
4. Add real verification workflows in the admin dashboard (currently
   in-memory only — refresh resets any edits).
5. The AI student assistant (mentioned in the brief) is intentionally not
   started yet — it depends on the data layer above being real.

This README will need updating once Supabase is wired in.
