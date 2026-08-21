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

PRIORITY 0 — the still-unresolved invisible button bug:

Before anything else, find the exact component file for the Home page hero's primary CTA button (next to "VIEW PUBLICATIONS") and paste its FULL current source code in your response. Then:

- If its label text is missing, empty, or an unfilled placeholder/variable, hardcode it to exactly: Explore Our Research

- Strip out ANY `background-clip: text` / `-webkit-background-clip: text` rule touching this button or its text — that rule is very likely the cause, and it does not belong on a bordered/solid button.

- Explicitly set its text color as a plain, non-inherited, non-gradient value (e.g. `color: var(--ink)` or `color: var(--primary)`, whichever has real contrast against this specific button's actual background) with no other rule in the cascade able to override it to transparent.

- As a guaranteed fallback if you're still not fully certain the root cause is fixed, apply an explicit inline override directly on the text element (`style={{ color: 'var(--ink)', opacity: 1, visibility: 'visible' }}`) so the label is provably visible regardless of any competing CSS rule elsewhere, then clean up the real root cause afterward once confirmed visible.

- Take a screenshot or describe exactly what the button renders after the fix, in both Day and Night mode, before moving to anything else in this prompt.

SECTION 1 — hardcoded values sweep:

Search every component, page, and style file for:

- Hardcoded hex codes (#xxxxxx), rgb()/rgba() values, or hsl() values used directly in JSX/CSS instead of a design token variable.

- Arbitrary one-off Tailwind utility classes for color (e.g. `text-[#c98a2c]` or a stray `bg-green-800`) instead of the token-mapped theme classes.

- Hardcoded pixel values for spacing/sizing that should be using the defined type/spacing scale.

- Hardcoded copyright year, or any other value that should be computed/dynamic.

List every file and line found, then replace each with the correct design-token reference and confirm nothing visually broke as a result.

SECTION 2 — component duplication / drift:

- Confirm every page imports the shared Header, Footer, and PageShell rather than a local reimplementation. List any page that doesn't.

- Confirm every "entry" (lab member, research program, publication, gallery item, blog post, outreach program) renders through the shared SpecimenCard (and its standard/glass/elevated variants) rather than a one-off custom card. List any that don't, and consolidate them.

- Confirm the hover/micro-interaction rules (border draw-in, image zoom, underline animation, button shine) are defined ONCE (shared CSS classes or a shared hook) and reused, not redefined per-component with slightly different timing/easing values. List any drifted duplicates found.

SECTION 3 — text/content rendering bugs (same class as the button issue):

Search every button, link, and heading in the codebase for the same failure pattern that caused the CTA bug:

- `color: transparent` anywhere not intentionally paired with a gradient `background-clip: text` treatment on headline text.

- Any element where text color and background color resolve to the same token.

- Any text wrapped in an animation/transition that could leave `opacity: 0` as its resting state.

- Any placeholder/example text (e.g. "Lorem ipsum", "Button text", untranslated variable names shown literally) that was left in instead of real content.

Report every instance found with file + line, and fix each one.

SECTION 4 — data layer & type safety:

- Run a TypeScript type-check across the whole project and fix every error — report the error count before and after.

- Confirm src/types/ definitions match the live Supabase schema exactly (field names, nullability). Fix any drift.

- Confirm every Supabase-fed component has real loading/empty/error states, not a silent blank render.

SECTION 5 — dead code & broken links:

- Search for unused components, unused imports, and unused CSS classes; remove them.

- Click-check (or route-check programmatically) every internal link and every mega-menu/footer link; list and fix any pointing to a non-existent route or left as "#".

SECTION 6 — build & runtime verification:

- Confirm the project builds with zero TypeScript errors and zero console errors/warnings on every page (Home, About, Research + sub-pages, Publications, Collaborations, Galleries, Outreach + sub-pages, Blog, Contact).

- Confirm both Day and Night mode render every page without contrast or visibility regressions, given the fixes above.

Report format: for each section, list "Found: N issues" with the specific file/line and a one-line description for each, then "Fixed: N/N" — if any can't be fixed automatically, say exactly why and what you need from me to resolve it.
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