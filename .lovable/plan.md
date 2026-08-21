# Plan — CGPBL Website Rebuild (Phase 3: Content & Polish)

I will now implement the full content across all pages and apply the final design polish as specified in the "Full Site Content & Polish Master Prompt" (Prompt 3), using the provided Content Inventory and Seed Data.

### Technical Detail
- **Data Integrity**: Using `01-CONTENT-INVENTORY.md` and `02-seed-content.json` as the exclusive source of truth.
- **Honest States**: Sections without real content will be implemented with "coming soon" specimen cards to maintain institutional credibility.
- **Supabase Integration**: Seeding tables (`lab_members`, `publications`, `research_programs`, `outreach_programs`, `blog_posts`, `collaborations`) with the provided JSON data via `supabase--insert`.
- **Media**: Embedding lazy-loaded YouTube videos and setting up high-quality asset placeholders for lab photography.
- **Navigation & IA**: Wiring up the sticky sub-navigation for Research and Outreach pages.
- **Components**: Polishing the Footer, Breadcrumbs, and Contact forms with the "Specimen Ledger" aesthetic.

### Implementation Steps

#### 1. Data Seeding & Hooks
- Use `supabase--insert` to populate tables with real data from `02-seed-content.json`.
- Update `src/hooks/` to fetch data from these tables instead of using mock data.

#### 2. Home Page Completion
- Hero: Update headline to "Cultivating Bangladesh's Genetic Future".
- Sections: Build "How We Work", Stat Strip (bento-grid), "What We Are Doing" (6 cards with real copy + custom icons), "We Need Your Help" (vision + video), and "About Our Lab" summary.
- Integrations: Wire the newsletter signup to `newsletter_subscribers`.

#### 3. About Us & Lab Members
- Implement Mission/Vision and the "Since 2012" timeline.
- Profile Cards: Render Prof. Shohael as a full profile; others as "Roster coming soon".
- Alumni: Build the year-based archive structure (2015–2020).

#### 4. Research Hub & Sub-pages
- Implement the sticky left sub-nav for all research pages.
- Populate "Bioreactor Facilities", "Lead of AI/Bioinformatics", and "Napier Transformation Program" (featured).
- All other sections implemented as honest placeholders.

#### 5. Publications, Collaborations & Galleries
- Publications: Render the 7 verified publications; add Google Scholar link.
- Collaborations: Card for "Science Porter Bangladesh" + "More partners coming soon".
- Galleries: Masonry layout with albums for Lab Facilities, Field Work, Outreach.

#### 6. Outreach Programs
- Python Workshop: Full 15-module curriculum and instructor bio (Tanjim Taharat Aurpa).
- Foldscope: Mission statement attributed to Foldscope Instruments Inc.
- Other programs as structured placeholders.

#### 7. Blog, Contact & Footer
- Blog: List/Detail views for real posts.
- Contact: Real address, interactive map, and working form wired to `contact_messages`.
- Footer: 4-column ledger-style layout with real social/contact info and copyright updates.

#### 8. Polish Pass
- Verify blurred-placeholder loading states.
- Ensure all micro-interactions (specimen card hover) are consistent.
- Final SEO check (OG tags, Breadcrumb JSON-LD).
