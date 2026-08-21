'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''

Generate the Supabase database schema and migrations for lab members, research programs, publications, blog posts, outreach events, and gallery items.

Build the "Specimen Ledger" design system and a complete Home page, structured so the rest of the site (Research, People, Publications, Galleries, Outreach, Blog) and the database drop in later without rework.

## Scope of this step

1. Design system: color tokens, type scale, fonts (Fraunces / Public Sans / IBM Plex Mono), hairline-rule layout primitives.
2. Layout shell: Header + primary nav, PageShell, sticky sub-nav component (built now, used by later pages), Footer with real contact info.
3. Shared primitives: SpecimenCard, SectionHeading, Tag, Breadcrumb, MonoTag (catalog ID), Divider.
4. Home page sections: Hero with root-growth SVG, How We Work, What We Are Doing (six research areas), Recent Posts teaser.
5. Types + hooks scaffolding so the backend swap is a one-file change per domain.

## Design system

Tokens go into the global stylesheet as CSS variables and are registered as Tailwind theme colors — components use `bg-surface`, `text-ink`, `border-line`, `text-amber`, never hex.

Exact values as specified: bg #FAF8F1, surface #F1EDE0, ink #16241C, primary #1F3D2B, primary-soft #3F6B4A, amber #C98A2C, teal #2E6E62, line #D8D2C0, highlight #8FBF3F.

Type scale locked to 14/16/18/24/32/48/64. Fraunces for H1/H2 (optical size + soft axes), Public Sans for body/UI, IBM Plex Mono reserved for catalog values: specimen IDs, dates, titles, program codes, stat numbers. Fonts loaded via a `<link>` in the root route head.

Structure uses hairline rules and a visible ledger grid — no drop shadows, no glassmorphism.

## Signature elements

**Specimen card** — 1px line border, monospace catalog tag in the top corner with a real meaningful ID (`CGPBL · EST. 2012`, `NAP-04`, `PUB-2024-11`). One implementation, reused for every entry type site-wide.

**Card hover** — the catalog tag corner lifts slightly and an amber border draws in. This is the single hover signature, applied consistently wherever cards appear.

**Hero** — no slider. The headline is the thesis ("Cultivating Bangladesh's Genetic Future", with one word in fresh-growth lime), paired with a hand-authored branching root/vein SVG that draws itself in once on load via stroke-dashoffset. Used exactly once on the site.

**Motion** — Framer Motion only for: the hero draw-in, scroll-triggered fade + 12–16px rise on section entries, and the card hover. Everything gated behind `prefers-reduced-motion`.

## Home page sections

- Hero: thesis headline, one-line lab positioning, root SVG, single amber CTA.
- How We Work: numbered ledger rows describing the lab's method, monospace step markers, hairline separators.
- What We Are Doing: six specimen cards for the real research areas — Plant Cell/Tissue/Organ Culture, Genetic Engineering & Genome Editing, Cytology & Cytogenetics, Systems Biology, Bioinformatics, Artificial Intelligence — each with its own catalog code.
- Recent Posts: three blog teaser specimen cards with monospace dates.
- Footer: Dept. of Biotechnology & Genetic Engineering, Jahangirnagar University, Savar, Dhaka-1342, Bangladesh · +880-277-910-4551 Ext 2145 · info@cgpbl.ac.bd, plus site index links.

Body copy for hero subhead, How We Work steps, and research-area blurbs is short placeholder text, all collected in one clearly-marked content file so your real inventory replaces it in one edit. No invented facts, publications, names, or statistics.

## Quality bar

Responsive to 360px. Visible keyboard focus ring (amber) on every interactive element. Accurate alt text on every image. Semantic landmarks, exactly one H1. Lazy-loaded images. Per-page title, description, and Open Graph tags — Home gets its own, no empty tags.

## Technical notes

- Routing is TanStack Router (file-based, `src/routes/`). Route files stay thin: metadata + composed components only, matching your "no JSX soup in pages" rule.
- Domain folders exactly as specified: `src/components/layout`, `home`, `research`, `people`, `publications`, `galleries`, `outreach`, `blog`, `shared`.
- `src/types/` defines LabMember, Publication, ResearchProgram, GalleryItem, BlogPost, OutreachEvent now, so components are already typed against the eventual database rows.
- `src/hooks/` gets useResearchAreas and useBlogPosts returning those types from the placeholder content file. When you send the schema I enable the backend (Postgres + auth + storage), add `src/lib/supabase.ts`, and change only the hook bodies — no component touches.
- Framer Motion added as the only new runtime dependency in this step.

## Next steps after this

Send the schema and content inventory: I provision the database and storage, migrate content to rows, wire the hooks, then build Research/People/Publications/Galleries/Outreach/Blog on the same card and sub-nav patterns, plus the admin area behind auth.
