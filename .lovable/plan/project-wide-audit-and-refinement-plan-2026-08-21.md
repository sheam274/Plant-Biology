# Project-Wide Audit and Refinement Plan

This plan systematicallly addresses the findings from the comprehensive site audit to ensure design token consistency, component reuse, navigation integrity, and technical correctness.

## 1. Design Token Consistency & Styling
- **SpecimenCard Shadows:** Replace hardcoded `rgba` values with `color-mix(in srgb, var(--ink) 15%, transparent)` to ensure shadows adapt to theme changes.
- **Error Page Styling:** Update `src/lib/error-page.ts` to use CSS variables defined in the theme system instead of hardcoded hex values.
- **Command Palette Backdrop:** Replace `bg-ink/40` with a theme-aware variable or `color-mix`.

## 2. Component Consolidation
- **Gallery Refactor:** Update `src/routes/gallery.tsx` to use `SpecimenCard` for each gallery item, ensuring the "Specimen Ledger" motif is consistent across all visual archives.
- **Micro-interactions:** Audit all buttons and links to ensure `btn-magnetic` and `hover-underline` are applied uniformly.

## 3. Navigation & Search Integrity
- **Dynamic Search:** Implement real Supabase querying in `src/components/shared/CommandPalette.tsx` to search across:
  - `research_programs` (title, summary)
  - `publications` (title, authors)
  - `blog_posts` (title, category)
  - `lab_members` (full_name, role)
- **Header Scroll Reset:** Ensure the scroll-progress underline resets to 0% upon route navigation to prevent visual carry-over.
- **Mobile Navigation:** Enhance the `Header.tsx` mobile drawer with an accordion system for Research, About, and Outreach categories, mirroring the desktop mega-menu experience.

## 4. Data Layer & Resilience
- **Empty States:** Add intentional "Coming Soon / No Records Found" states for all list views (Publications, Outreach, Blog, Gallery) to avoid blank screens.
- **RLS Verification:** Verify that Supabase Row-Level Security policies correctly block unauthorized write attempts.
- **Type Sync:** Audit `src/types/index.ts` against the live Supabase schema and fix any drift.

## 5. Accessibility & Performance
- **Form Labels:** Add properly associated labels or `aria-label` to inputs in `Newsletter.tsx` and `CommandPalette.tsx`.
- **Lazy Loading:** Ensure all images, especially in the Gallery and Research grids, utilize `loading="lazy"`.
- **Motion Safety:** Ensure `prefers-reduced-motion` is respected across all new Framer Motion animations.

## 6. Content Accuracy
- **Dynamic Footer:** Update `src/components/layout/Footer.tsx` to use a dynamic year calculation.
- **Foldscope Attribution:** Verify outreach content inventory for correct legal attribution.

## Technical Implementation Details
- Use `useLocation` from `@tanstack/react-router` to trigger scroll progress resets.
- Implement a search helper function in `src/lib/search.ts` to handle multi-table Supabase lookups.
- Standardize skeleton loaders using a shared `Skeleton` component if possible.
