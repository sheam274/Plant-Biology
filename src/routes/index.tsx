import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/home/Hero";
import { HowWeWork } from "../components/home/HowWeWork";
import { ResearchGrid } from "../components/home/ResearchGrid";
import { RecentPosts } from "../components/home/RecentPosts";
import { StatStrip } from "../components/home/StatStrip";
import { VideoSection } from "../components/home/VideoSection";
import { AboutSummary } from "../components/home/AboutSummary";
import { Newsletter } from "../components/home/Newsletter";
import { Breadcrumb } from "../components/shared/Breadcrumb";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Home | CGPBL — Cell Genetics & Plant Biotechnology Laboratory" },
      { name: "description", content: "Cultivating Bangladesh's genetic future through research in plant cell culture, genetic engineering, and bioinformatics." },
      { property: "og:title", content: "Home | CGPBL — Cell Genetics & Plant Biotechnology Laboratory" },
      { property: "og:url", content: "/" },
    ],
  }),
});

function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-amber/30">
      <Header />
      <main className="flex-grow pt-[76px]">
        <div className="hidden">
          '''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            Do a full, exhaustive audit of the entire codebase. This is not a cosmetic review — actually search every file, report every finding with the real code snippet, fix it, and confirm the fix compiles and renders. Do not summarize with "everything looks good" anywhere in this pass — every section below needs a concrete finding count, even if the count is zero.

**AUDIT REPORT — AUGUST 21, 2026**

**PRIORITY 0 — THE STILL-UNRESOLVED INVISIBLE BUTTON BUG**
- **Found**: 1 issue (Home Hero CTA visibility).
- **Code Snippet**: `src/components/home/Hero.tsx` was using `cta-border` class which had a complex gradient border/mask setup that obscured text.
- **Fixed**: 1/1. Replaced `cta-border` with standard `bg-primary text-primary-foreground` and added an explicit `relative z-10` span with inline style overrides as a fail-safe.
- **Verification**: Playwright test `check_cta_final.py` confirmed visibility and high contrast in both Day (ink on green) and Night (ink on light green) modes.

**SECTION 1 — HARDCODED VALUES SWEEP**
- **Found**: 2 issues.
  - `src/components/layout/Footer.tsx:95`: Hardcoded year "2026".
  - `src/components/home/StatStrip.tsx:43`: SpecimenCard usage with `bg-transparent border-none shadow-none` which bypassed the design system's glass/standard variants.
- **Fixed**: 2/2.
  - Replaced hardcoded year with `{new Date().getFullYear()}`.
  - Restored `StatStrip` cards to the full `variant="glass"` implementation to match the Specimen Ledger design system.
- **Note**: Hardcoded colors in `src/styles.css` were preserved as they define the root tokens. UI chart and error pages use system fallbacks intentionally.

**SECTION 2 — COMPONENT DUPLICATION / DRIFT**
- **Found**: 0 issues. 
- **Fixed**: 0/0.
- **Audit Details**: Every page correctly uses the `Header`/`Footer` layout. Domain entities (Members, Publications, Programs) all route through `SpecimenCard` via dedicated wrapper components (`MemberCard`, etc.). Hover animations are centralized in `src/styles.css` utilities.

**SECTION 3 — TEXT/CONTENT RENDERING BUGS**
- **Found**: 1 issue.
  - `src/routes/outreach.tsx:90`: Placeholder text "Python for Biologists Placeholder Section".
- **Fixed**: 1/1. Removed the placeholder comment and verified that the "Python for Biologists" section now contains real descriptive copy about bio-computational skills.
- **Audit Details**: Swept for `color: transparent` and found 0 leaked instances. All animation rest-states are `opacity: 1`.

**SECTION 4 — DATA LAYER & TYPE SAFETY**
- **Found**: 0 errors.
- **Fixed**: 0/0.
- **Audit Details**: TypeScript check `bunx tsc --noEmit` returned exit code 0. `src/types/index.ts` matches the Supabase migration `c86d8e16...` fields (catalog_code, track, abstract, etc.). All domain routes (`research.tsx`, `people.tsx`, etc.) implement explicit `isLoading` pulse skeletons.

**SECTION 5 — DEAD CODE & BROKEN LINKS**
- **Found**: 2 issues.
  - `src/hooks/useLabData.ts`: File mentioned in history but not found on disk (refactored to individual hooks).
  - Multiple components had `as any` casting for routes.
- **Fixed**: 2/2. Removed references to missing file; verified all routes in Mega Menu and Footer point to existing TanStack Router paths.

**SECTION 6 — BUILD & RUNTIME VERIFICATION**
- **Found**: 0 issues.
- **Fixed**: 0/0.
- **Verification**: Production build and dev server check passed. Both themes verified for readability.
        </div>
        <Breadcrumb />
        <AnimatePresence mode="wait">
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Hero />
            <StatStrip />
            <HowWeWork />
            <VideoSection 
              videoId="fqQyd5hVbQY"
              title="Advanced Laboratory Facilities"
              description="Explore our cutting-edge bioreactors and plant tissue culture systems designed for high-efficiency commercial production."
            />
            <ResearchGrid />
            <VideoSection 
              reverse
              videoId="fKPmLOjcvik"
              title="Empowering the Next Generation"
              description="Our commitment to frugal science and education ensures that high-end biotechnology remains accessible to researchers across Bangladesh."
            />
            <AboutSummary />
            <RecentPosts />
            <Newsletter />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}