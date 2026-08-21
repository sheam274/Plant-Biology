# CGPBL_Sheam

I'm rebuilding the website for CGPBL (Cell Genetics & Plant Biotechnology Laboratory), a research lab at Jahangirnagar University's Department of Biotechnology & Genetic Engineering in Bangladesh. This is a real client project / competition entry, so it needs to look premium, load fast, and be built cleanly enough that another developer can maintain it.

STACK
- React 18 + TypeScript (strict mode)
- Tailwind CSS for styling, using design tokens (below) as CSS variables / Tailwind theme extension — no ad hoc hex codes in components
- Supabase for backend: Postgres database, auth (for an admin area), storage (for gallery/media uploads)
- React Router for routing
- Framer Motion for the specific motion moments described below (not blanket animation on everything)

ARCHITECTURE RULES (non-negotiable)
- index.tsx / App.tsx stay minimal: routing table + providers only, no markup, no business logic.
- Every page is composed from components in src/components/, organized by domain: src/components/layout (Header, Footer, Nav, PageShell), src/components/home, src/components/research, src/components/people (for lab member / roster cards — reused across Lab Members, Alumni, Supporting Staff), src/components/publications, src/components/galleries, src/components/outreach, src/components/blog, src/components/shared (SpecimenCard, SectionHeading, Tag, Breadcrumb, etc.)
- One component = one responsibility. A page file (e.g. src/pages/Research.tsx) should mostly read like a list of components being composed, not raw JSX soup.
- Shared types in src/types/ (LabMember, Publication, ResearchProgram, GalleryItem, BlogPost, OutreachEvent) — used by both the Supabase queries and the components, so there's one source of truth for shapes.
- Data fetching lives in src/hooks/ (e.g. useLabMembers, usePublications) using Supabase client from src/lib/supabase.ts — components never call Supabase directly.
- All content that currently lives in WordPress (lab members, publications, research programs, blog posts, gallery images, outreach programs, collaborations) becomes rows in Supabase tables, not hardcoded JSX, so the client can update the site without a developer. See the schema in the next message.

DESIGN DIRECTION — "Specimen Ledger"
Do not use a generic university green-and-navy template, and do not default to a cream-background-serif-hero look or a dark-mode-neon-accent look — this is a plant genetics lab, so the design should feel like a well-kept field ledger / herbarium catalog crossed with a modern lab notebook: precise, cataloged, a little scientific-instrument in its detailing, but warm and alive (this is a lab about growth, not a cold corporate lab).

Color tokens (use as CSS variables, do not deviate):
--color-bg: #FAF8F1        /* porcelain / agar-plate cream, main background */
--color-surface: #F1EDE0   /* slightly deeper card surface */
--color-ink: #16241C       /* near-black deep foliage, primary text */
--color-primary: #1F3D2B   /* deep chlorophyll green — headers, nav, primary buttons */
--color-primary-soft: #3F6B4A /* lighter green for hover states, secondary elements */
--color-amber: #C98A2C     /* culture-medium amber — the signature accent color, used sparingly for key CTAs, active states, specimen tags */
--color-teal: #2E6E62      /* petri-dish teal — secondary accent for links/icons, used less than amber */
--color-line: #D8D2C0      /* hairline rule / border color, specimen-label beige */
--color-highlight: #8FBF3F /* fresh-growth lime — ONLY for small highlight moments (e.g. a single word in a headline, a hover underline), never large fills */

Typography:
- Display face: Fraunces (variable font, use its optical-size + soft-features axis) for H1/H2 headings — this face has a slightly botanical, ink-drawn character that fits a life-sciences lab without being generic corporate-serif.
- Body face: Public Sans for all body copy, UI labels, nav — clean, humanist, highly legible at small sizes.
- Data/mono face: IBM Plex Mono for anything that reads as a catalog value: specimen IDs, dates, member titles, gene/program codes, stat numbers. This is what gives the "ledger" feel — use it deliberately, not everywhere.
- Set a real type scale (e.g. 14/16/18/24/32/48/64px steps) and stick to it.

Layout & signature element:
- Every "entry" on the site — a lab member, a research program, a publication, a gallery set, an outreach event — is presented as a SPECIMEN CARD: a bordered card (1px var(--color-line)) with a small monospace catalog tag in the top corner (e.g. "CGPBL · EST. 2012" on the About page, "NAP-04" on the Napier Transformation program, "PUB-2024-11" on a publication). This numbering is not decorative — it reflects the fact that this content genuinely is a catalog/archive, so use real, meaningful IDs, not generic 01/02/03 markers.
- Hero on the homepage: not a stock photo carousel (the current site's biggest weakness is a generic slider). Instead, build a hero where the headline is the thesis — something like "Cultivating Bangladesh's Genetic Future" — paired with a subtle animated SVG of a branching root/vein system that grows outward on page load (this is the signature motion moment, use it once, don't repeat it as a decoration elsewhere).
- Use hairline dividers and a visible grid/ledger structure between sections instead of heavy drop shadows or glassmorphism.
- Research and Outreach pages, which have deep nested hierarchies (see site map), should use a left-hand sticky sub-navigation (like a field-guide index) rather than dumping every sub-page into the top nav dropdown — the current site's biggest usability problem is its deeply nested WordPress mega-menu.

Motion (use Framer Motion deliberately, not everywhere):
- Homepage hero: the root/vein SVG draws itself in on load (stroke-dashoffset animation), once.
- Scroll-triggered fade+rise for section entries (subtle, 12–16px translate, not more).
- Specimen cards: on hover, the catalog tag corner lifts slightly and the amber accent border draws in — this is the one hover signature, reuse it everywhere cards appear for consistency.
- Respect prefers-reduced-motion everywhere.

QUALITY BAR
- Fully responsive down to 360px mobile.
- Visible keyboard focus states on every interactive element.
- Real alt text for every image (this is a science site — images of tissue culture, bioreactors, lab work should be described accurately).
- Lighthouse-conscious: lazy-load gallery images, use next-gen image formats where Lovable's pipeline allows.
- SEO: proper meta tags, semantic heading hierarchy (one H1 per page), Open Graph tags per page (the current site has broken/empty OG tags — fix this).

Build the design system and the Home page first (Header, Footer, Nav with the sticky sub-nav pattern ready for later pages, Hero with the root-growth animation, "How We Work" section, "What We Are Doing" research-area grid using the six real research areas: Plant Cell/Tissue/Organ Culture, Genetic Engineering & Genome Editing, Cytology & Cytogenetics, Systems Biology, Bioinformatics, Artificial Intelligence, and a "Recent Posts" blog teaser section, footer with real contact info: Dept. of Biotechnology & Genetic Engineering, Jahangirnagar University, Savar, Dhaka-1342, Bangladesh, +880-277-910-4551 Ext 2145, info@cgpbl.ac.bd). Ask me before generating placeholder body copy for anything you're unsure about — I'll paste in the real content inventory next.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cgpblsheam.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4fc01d1e-a485-4a3c-8146-efcf9ced2b8a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
