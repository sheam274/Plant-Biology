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
                                        
                                            
                                            The primary CTA button in the Home page hero (next to the "VIEW PUBLICATIONS" button) is still rendering with no invisible label. Do not guess again — do this in order:

1. Find the exact component file rendering this specific button (the hero's primary CTA, left of "VIEW PUBLICATIONS") and paste its current code back to me in your response before changing anything, including the JSX/text content, the className or style props, and any parent wrapper that might be affecting it.

2. Check the button's TEXT CONTENT first, not just its styling — confirm the label string "Explore Our Research" is actually present as children/text inside the component. If the string is missing, empty, or was left as a placeholder variable that was never filled in, that's the bug — fix it by setting the button's label to exactly: Explore Our Research

3. If the text content is present but still not visible, then check styling in this order and fix whichever is true:

   - `color` on the button or its text span resolves to `transparent`

   - `color` matches the button's own `background`/`background-color` (same token used for both)

   - a `background-clip: text` / `-webkit-background-clip: text` rule is applied to this button when it shouldn't be (that rule makes text invisible unless paired with a gradient text-fill color — remove it from this button entirely, it does not belong on a solid or bordered button)

   - the text span has `opacity: 0`, `visibility: hidden`, or `font-size: 0` from a leftover animation/transition state

   - the text is being rendered but positioned outside the visible button box (z-index or absolute positioning bug)

4. Apply the fix, then explicitly confirm back to me: "Text content is now: Explore Our Research, color is set to [token], and it is visible against the button's background in both Day and Night mode."

Do not respond with a general "fixed it" — show me the before code, the specific bug you found, and the after code.
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