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
                                        
                                            
                                            Bug: on the Home page hero, the primary CTA button (to the left of "VIEW PUBLICATIONS") renders its border/shape but the label text is invisible — nothing shows inside it, even though it should have a call-to-action label like "Explore Our Research."

Root cause to check first: this button uses the gradient-border CTA technique from the decoration pass (a transparent border + background-image/background-clip trick to draw an animated gradient border). That technique commonly leaks into the text color rule — either the button's text color was accidentally set to `transparent` (copied from a `background-clip: text` gradient-text pattern instead of a gradient-border pattern), or the text color resolves to the same value as the button's own background/fill, making it functionally invisible even though the DOM node has content.

Fix steps:

1. Open the Button/CTA component used for this specific gradient-border variant and inspect its computed text color — confirm whether `color` is `transparent`, `inherit`-ing from a parent that's transparent, or matching the background exactly.

2. Set its text color explicitly to a token that has real contrast against the button's fill in both Day and Night mode — var(--ink) on a light fill, or var(--bg)/var(--surface) on a solid var(--primary) fill, whichever this button variant actually uses. Do not leave it implicit/inherited.

3. Confirm the gradient border is implemented as an actual border layer (e.g. two stacked backgrounds — one for the gradient border via `background-origin: border-box` + `-webkit-mask` composite, or a pseudo-element `::before` sitting behind the button) rather than anything using `background-clip: text`, which is a text-fill technique and is almost certainly what caused this — that clip mode makes text render only where the background shows through, and if applied to the wrong element it makes the label invisible instead of gradient-colored.

4. Verify the fix renders correctly in both Day and Night theme, and that the label text is present in the DOM (for accessibility/screen readers) even if you can't currently see it — check whether this was a visual-only bug or whether the text was missing from markup entirely.

After fixing this specific button, sweep the rest of the site for the same bug class: search every button/CTA component for any `color: transparent`, `background-clip: text` combined with a solid (non-gradient) text-color fallback, or any place text color is set equal to its own background token. Fix every instance found, and list what you found.
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