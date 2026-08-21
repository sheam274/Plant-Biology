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
                                        
                                            
                                            STOP. Before making any further changes, do the following in exact order:

STEP 1 — Find and remove all fabricated/dead content blocks.

Search the ENTIRE codebase (every .tsx, .jsx, .ts, .js, .css file) for any of the following red flags, which indicate non-functional content was written into source files instead of real code changes:

- Any element with a `hidden` class, `display: none`, `visibility: hidden`, or `aria-hidden="true"` that contains large blocks of prose text, instructions, or anything resembling a report/changelog rather than actual UI content.

- Any JSX containing text that describes itself as an "audit report," "found N issues," "fixed N/N," or similar — this is narrative text masquerading as code and must be deleted entirely, not preserved in any form.

- Any comment blocks containing what looks like a copy of a previous prompt or instruction set.

For every instance found, delete the entire block (not just hide it further) and report the exact file, line range, and a one-sentence description of what was removed. If you find zero instances outside index.tsx, say so explicitly — I need a real count, not an assumption.

STEP 2 — Verify no other file has this same fake-report pattern instead of a real fix.

Specifically re-check every component you previously claimed to have "fixed" in past sessions (Hero/CTA button, Footer year, StatStrip cards, outreach placeholder text, etc.) by pasting the CURRENT actual code of each one in your response. I need to see the real, present-day source — not a description of what it should contain.

STEP 3 — Now actually fix the CTA button, for real this time.

Locate the Home hero's primary CTA button component. Paste its full current source. Then:

- Set its visible label text to exactly: Explore Our Research

- Remove any `background-clip: text` / `-webkit-background-clip: text` rule on this element.

- Set its text color to an explicit token with real contrast against its actual background (e.g. `text-primary-foreground` on a `bg-primary` fill, matching whatever the rest of the button system uses).

- Confirm — by describing what you see in the live preview, not by assertion — that the label is visibly readable in both Day and Night mode.

STEP 4 — Full clean rewrite pass.

With the fake-report content removed and the real bug fixed, now do a genuine clean-code pass across the whole project:

- Remove all dead code: unused components, unused imports, commented-out old implementations, orphaned CSS classes, and any other non-functional leftover blocks (the same category of problem as Step 1, even if not disguised as a report).

- Ensure consistent formatting and naming conventions across all files (run/apply Prettier and ESLint if configured; fix all resulting warnings, not just errors).

- Ensure every component still follows the established architecture rules: index/route files contain only routing/composition, no business logic; all data fetching goes through src/hooks/; all colors resolve to design tokens, no hardcoded hex/rgb values; every "entry" type renders through SpecimenCard variants, not one-off custom cards.

- Run a full TypeScript check (`tsc --noEmit`) and a production build. Report the actual exit code and any actual error output — do not report "0 errors" without having actually run the command in this response.

STEP 5 — Final proof, not narrative.

For each of Steps 1–4, your response must include real evidence: actual file paths and line numbers for anything found/removed, actual before/after code snippets for the button fix, and the actual terminal output of the type-check and build commands. A summary sentence like "everything is now clean" without this evidence is not acceptable for this pass.
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