'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''

add this two theme Day mode (default, tokens from the first prompt):

--bg: #FAF8F1
--surface: #F1EDE0
--ink: #16241C
--primary: #1F3D2B
--accent-amber: #C98A2C
--accent-teal: #2E6E62
--line: #D8D2C0
--highlight: #8FBF3F

Night mode (new — add this):

--bg: #10160F
--surface: #171E15
--ink: #EDE9DC
--primary: #7FBF8A       /* chlorophyll lightened for dark-bg contrast */
--accent-amber: #E3A94A  /* warmer/brighter amber, reads like a lamp glow */
--accent-teal: #4E9C8C
--line: #2B3327
--highlight: #A6E05A

Toggle lives top-right of the navbar as a small sun/leaf-morph icon (see Section 3). Persist the choice in localStorage; respect prefers-color-scheme as the initial default only, then let the explicit toggle win.

Set up the following Supabase tables with RLS enabled (public read, authenticated-admin write):

lab_members
- id uuid pk
- full_name text
- role text          -- 'Lab PI' | 'Lab Co-PI I' | 'Lab Co-PI II' | 'Faculty' | 'Researcher' | 'PhD Student' | 'MPhil Student' | 'MS Student' | 'Undergraduate' | 'Supporting Staff' | 'Alumni'
- category text       -- 'current' | 'alumni'
- alumni_year int      -- nullable, only for alumni
- bio text
- photo_url text
- email text
- display_order int
- created_at timestamptz default now()

research_programs
- id uuid pk
- catalog_code text unique   -- e.g. 'NAP-01', 'FOD-02' — used as the specimen tag
- title text
- track text          -- 'Lab Co-PI I' | 'Lab Co-PI II' | 'Ongoing Research' | 'Facilities'
- parent_program_id uuid nullable references research_programs(id)  -- for sub-programs like Agrobacterium-mediated under Napier Transformation
- summary text
- body text
- cover_image_url text
- display_order int

publications
- id uuid pk
- catalog_code text unique   -- e.g. 'PUB-2024-11'
- title text
- authors text
- journal text
- year int
- doi_or_link text
- abstract text

collaborations
- id uuid pk
- partner_name text
- partner_type text   -- 'University' | 'Funding Agency' | 'Industry' | 'NGO'
- logo_url text
- description text
- website_url text

gallery_items
- id uuid pk
- title text
- image_url text
- album text          -- e.g. 'Lab Facilities', 'Outreach Programs', 'Field Work'
- taken_at date
- display_order int

blog_posts
- id uuid pk
- slug text unique
- title text
- category text        -- 'Biotechnology' | 'Latest' | etc.
- excerpt text
- body text
- cover_image_url text
- published_at timestamptz
- author_id uuid references lab_members(id)

outreach_programs
- id uuid pk
- program_type text    -- 'Training' | 'Internship' | 'Seminar' | 'Biosafety' | 'Frugal Science'
- title text
- description text
- cover_image_url text
- event_date date nullable

contact_messages
- id uuid pk
- name text
- email text
- message text
- submitted_at timestamptz default now()

newsletter_subscribers
- id uuid pk
- email text unique
- subscribed_at timestamptz default now()

Build a simple protected /admin route (Supabase auth, email/password, single admin role) with a CRUD table view for each of these — the client needs to add publications, blog posts, and gallery images without a developer. Keep the admin UI plain/functional, it doesn't need the same design polish as the public site — clarity over style there.

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

## Supabase Backend & Database Schema

1. Enable Lovable Cloud (Supabase integration).
2. Create migrations for all domain tables:
   - `lab_members`: name, role, bio, image_url, catalog_id, status (active/alumni/staff).
   - `research_programs`: title, description, catalog_id, category.
   - `publications`: title, authors (text array), journal, year, catalog_id, url.
   - `blog_posts`: title, excerpt, content, date, catalog_id, image_url.
   - `outreach_events`: title, description, date, location, catalog_id.
   - `gallery_items`: title, image_url, caption, catalog_id, category.
3. Enable RLS on all tables:
   - Public read access for everyone.
   - Authenticated write/update/delete access for admin users.
4. Set up storage buckets for media:
   - `lab-members`: profile photos.
   - `blog-images`: post covers.
   - `gallery`: research and event photos.
5. Create a `user_roles` system to manage admin access.

## Next Steps

- Apply the migrations to the database.
- Update `src/hooks/` to fetch from Supabase instead of mock data.
- Build the remaining pages (Research, People, etc.) using the live data.
- Implement the Admin area for content management.
