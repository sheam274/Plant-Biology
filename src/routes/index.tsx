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
                                        
                                            
                                            Do a full project-wide audit and fix pass. Go through the checklist below systematically and report what you find and fix at each step — don't just say "looks good," show me specific findings.

1. DESIGN TOKEN CONSISTENCY

   - Search the whole codebase for hardcoded hex colors, rgb()/rgba() values, or arbitrary Tailwind color classes that bypass the design token system. Every color must resolve to a CSS variable from the token set defined in prompt 1 (or the glass-effect color-mix() expressions from prompt 4). Flag and fix every instance.

   - Confirm Day and Night mode both produce WCAG AA-compliant text contrast (4.5:1 body text, 3:1 large text/UI) on every page, including inside glass-variant cards over their real backgrounds — check both themes, don't assume Night mode inherits Day mode's contrast just because the palette was designed in parallel.

   - Confirm the mono/display/body typefaces are used consistently per their defined roles (mono only for catalog tags/data/labels, display only for H1/H2, body everywhere else) — flag any page that's drifted from this (e.g. a later-built page using the body face for a heading out of convenience).

2. COMPONENT REUSE, NOT DUPLICATION

   - Confirm every page uses the shared Header/Footer/PageShell rather than a page-specific reimplementation. Flag any page built in prompt 3 that accidentally duplicated navbar or footer markup instead of importing the shared component.

   - Confirm SpecimenCard (and its variants from prompt 4) is used everywhere an "entry" is displayed (lab members, research programs, publications, gallery items, blog posts, outreach programs) — flag any place a one-off card was built instead of reusing the shared component, and consolidate it.

   - Confirm the hover/micro-interaction system from prompt 4 is applied uniformly — flag any card or button that's missing the standard hover treatment or has a slightly different (drifted) timing/easing value.

3. NAVIGATION & INTERACTIVE FEATURE INTEGRITY

   - Click through every mega menu column on every page (not just Home) and confirm every link resolves to a real, working route — no dead links, no placeholder hrefs left as "#".

   - Confirm the command palette (⌘K) returns real results from all four tables (research_programs, publications, blog_posts, lab_members) and that every result navigates correctly.

   - Confirm the Day/Night toggle works identically from every page (not just Home) and that the choice persists across a full page reload and across route navigation.

   - Confirm the scroll-progress underline resets correctly on route change (a common bug: it carries over the previous page's scroll percentage for a frame before recalculating).

   - Confirm breadcrumbs render correctly and accurately on every nested page, including the deepest ones (e.g. Research → Ongoing Research → Napier Transformation Program → Agrobacterium-mediated Transformation).

4. DATA LAYER CORRECTNESS

   - Confirm every Supabase-fed list has three real states implemented and visually tested: loading (skeleton), empty (the honest "coming soon" states from prompt 3, not a blank div), and error (a clear message, not a silent failure or infinite spinner).

   - Confirm TypeScript types in src/types/ match the actual Supabase schema exactly — run a type-check and fix any drift (a common bug source when the schema was refined after the types were first written).

   - Confirm RLS policies actually block unauthenticated writes — attempt an unauthenticated insert/update against each table from the browser console and confirm it's rejected, not just "probably fine."

5. RESPONSIVE & CROSS-DEVICE

   - Test every page at 360px, 768px, 1024px, and 1440px widths. Flag any overflow, overlap, or broken grid, especially in the mega menu (which must fully convert to the mobile drawer pattern, not just shrink) and any card grid using container queries from prompt 4.

   - Confirm the mobile drawer's accordion sections (for About/Research/Outreach) all expand/collapse correctly and that focus/scroll position behaves sanely when opened.

6. ACCESSIBILITY

   - Tab through every page using only the keyboard — confirm a visible focus state on every interactive element (links, buttons, form fields, mega menu items, command palette results) and a logical tab order.

   - Confirm every image has real, accurate alt text (not filenames, not empty strings on meaningful images).

   - Confirm form fields (contact form, newsletter signup, admin panel forms) have properly associated labels, not just placeholder text standing in for a label.

   - Confirm `prefers-reduced-motion` is actually respected — test with it enabled and confirm hover shine sweeps, page transitions, and the hero root-growth animation all degrade gracefully.

7. PERFORMANCE

   - Confirm images are lazy-loaded below the fold and that gallery/publication lists paginate or virtualize rather than fetching everything at once.

   - Check for unnecessary re-renders in list components (e.g. SpecimenCard grids) using React DevTools profiler if available, and memoize where it clearly helps.

   - Confirm route-level code splitting is in place (React.lazy for each page) so the initial bundle isn't loading every page's code upfront.

8. CONTENT ACCURACY

   - Cross-check every page's live content against 01-CONTENT-INVENTORY.md — flag any place where placeholder/example content was accidentally left in as if it were real, especially anything that looks like an invented name, statistic, or partner that isn't in the source inventory.

   - Confirm the Foldscope mission statement is still correctly attributed to Foldscope Instruments Inc., not presented as CGPBL's own words.

   - Confirm the footer copyright year is dynamic (current year, not hardcoded) and the credit line has been updated from the original site's "AIEDGE Inc."

Report findings as a structured list (found → fixed), not just a general "everything looks good." For anything you can't fully verify automatically (e.g. real device testing, actual screen-reader behavior), say so explicitly rather than assuming it passes.
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