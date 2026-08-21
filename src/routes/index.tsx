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
          Add a refined decoration layer across the site: an upgraded card system, a purposeful glass effect used as a "specimen slide" motif (not blanket glassmorphism), and a consistent, advanced hover/micro-interaction language. Apply all of this through the existing design tokens — no new hardcoded colors or one-off values.

          CARD SYSTEM — extend SpecimenCard into a small variant set:
          - `variant="standard"` (existing): var(--surface) background, 1px var(--line) border, monospace catalog tag corner.
          - `variant="glass"`: use for a small, deliberate set of surfaces — the mega-menu "Featured Program" card, the homepage hero's supporting stat panel, and modal/dialog surfaces (command palette, image lightbox). Implementation: `background: color-mix(in srgb, var(--surface) 70%, transparent); backdrop-filter: blur(16px) saturate(140%); border: 1px solid color-mix(in srgb, var(--line) 60%, transparent);` plus a thin 1px inset highlight along the top edge (`box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 8%, transparent)`) to read as glass catching light, like a slide under a microscope lamp — not a generic frosted panel. Cap this variant's usage explicitly: it should never be the default card, only ever a highlight.
          - `variant="elevated"`: standard card + a soft, tight shadow (`0 8px 24px -12px` in a color derived from --ink at low opacity) for cards that need to visually lift above dense content (e.g. the featured publication, the PI profile card).
          - All variants share the same corner-tag and hover language below — variety in surface treatment, consistency in interaction.

          HOVER / MICRO-INTERACTION SYSTEM — implement once as reusable CSS (custom properties + a couple of shared classes/hooks), applied everywhere cards, links, and buttons appear:
          - Card hover: border color transitions to var(--accent-amber) over 200ms ease-out, catalog tag corner lifts 2px with a matching shadow, and any cover image inside the card scales to 1.04 with a 400ms ease-out transform (contained via `overflow: hidden` on the image wrapper — image zoom, not card zoom, so layout never shifts).
          - Link hover (inline text links, nav items): an underline that draws in from the left using a `background-image: linear-gradient` + `background-size` transition trick (or a pseudo-element `::after` with `transform: scaleX()` from `transform-origin: left`), 200ms, in var(--accent-amber) — not a default browser underline, not a color-only change.
          - Primary button hover: subtle "magnetic" lift — `transform: translateY(-2px)` + shadow growth, plus a shine sweep on hover using a pseudo-element gradient that translates across the button (`::before` with a diagonal gradient, animated via `transform: translateX()`), kept subtle (low opacity, fast, 500ms) so it reads as quality rather than gimmick.
          - Icon buttons (theme toggle, search trigger): icon morphs via a small transform/opacity crossfade rather than an abrupt swap.
          - Respect `prefers-reduced-motion: reduce` globally — disable transform-based hover animations and shine sweeps for users who request it, keep only color transitions.

          ADDITIONAL ADVANCED CSS TECHNIQUES TO USE, deliberately and sparingly:
          - **Gradient border on the single most important CTA per page** (e.g. "Contact Us", homepage "Explore Our Research") using a `background: linear-gradient(...) border-box` + transparent border trick or `@property` for an animatable gradient angle — one CTA per page maximum, this is a signature moment, not a pattern to repeat everywhere.
          - **Subtle paper-grain texture** on `--bg` in Day mode only, via a tiny repeating SVG noise pattern at ~3% opacity — reinforces the "field notebook paper" identity without being visible as decoration. Skip this in Night mode (a grain texture reads wrong against a dark "lit at night" surface).
          - **Container queries** (`@container`) for the SpecimenCard component so its internal layout (image position, tag placement) adapts based on the card's own container width, not just viewport width — this matters because the same card renders inside a 3-column grid, a mega-menu column, and a full-width featured slot.
          - **CSS `:has()`** for stateful parent styling where useful — e.g. `.card-grid:has(.card:hover) .card:not(:hover)` to slightly dim sibling cards when one is hovered (a tasteful "focus" effect for grids like the Publications list) — implement only if browser support in your target audience is acceptable, with a no-op fallback otherwise.
          - **View Transitions API** (`document.startViewTransition`) for route changes, layered on top of the existing Framer Motion transitions as a progressive enhancement where supported, graceful no-op fallback where not.

          WHERE NOT TO USE THE GLASS EFFECT: page backgrounds, the main navbar (already spec'd as near-opaque with blur only when condensed, not full glass), body-text card backgrounds, or anywhere it would reduce text contrast — check every glass-variant card against WCAG AA contrast for its text against the blurred backdrop's *worst-case* underlying content (test it over both a busy photo and the plain background).

          Show me the SpecimenCard variants and hover system in isolation first (e.g. on a temporary style-guide route or Storybook if already set up) before applying them across every page.
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
