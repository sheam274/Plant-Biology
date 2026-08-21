import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SpecimenCard } from "../components/shared/SpecimenCard";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { motion } from "framer-motion";
import { Dna, Beaker, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/design-system")({
  component: DesignSystem,
});

function DesignSystem() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[100px] container mx-auto px-4 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl font-display text-primary mb-4">Design System — Specimen Slide Motif</h1>
          <p className="text-ink/70 max-w-2xl">
            Testing the upgraded SpecimenCard variants and micro-interaction system in isolation.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-display mb-8 border-b border-line pb-2 text-primary">Card Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 focus-grid">
            <div className="focus-item">
              <div className="mono-data text-[10px] text-amber mb-2">Variant: Standard</div>
              <SpecimenCard
                variant="standard"
                catalogId="CGPBL · STD-001"
                title="Standard Specimen"
                description="The default surface treatment for laboratory records and general content blocks."
                image="https://images.unsplash.com/photo-1530836361253-efad5d718465?q=80&w=2070&auto=format&fit=crop"
              />
            </div>

            <div className="focus-item">
              <div className="mono-data text-[10px] text-amber mb-2">Variant: Glass (Slide Motif)</div>
              <SpecimenCard
                variant="glass"
                catalogId="CGPBL · GLS-002"
                title="Microscope Slide"
                description="A deliberate highlight surface with top-edge catch-light and high saturation blur."
                image="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
              />
            </div>

            <div className="focus-item">
              <div className="mono-data text-[10px] text-amber mb-2">Variant: Elevated</div>
              <SpecimenCard
                variant="elevated"
                catalogId="CGPBL · ELV-003"
                title="Featured Entity"
                description="Standard surface with a soft ink-derived shadow to visually lift key highlights."
                image="https://images.unsplash.com/photo-1582719202047-76d3432ee323?q=80&w=1974&auto=format&fit=crop"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-display mb-8 border-b border-line pb-2 text-primary">Micro-interactions</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="space-y-4">
              <div className="mono-data text-[10px] text-amber">Magnetic Primary Button</div>
              <button className="px-8 py-4 bg-primary text-bg font-medium btn-magnetic uppercase tracking-wider mono-data text-sm flex items-center gap-2">
                Magnetic Action <Beaker size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="mono-data text-[10px] text-amber">Signature CTA (Gradient Border)</div>
              <button className="px-8 py-4 text-primary font-medium btn-magnetic cta-border transition-colors uppercase tracking-wider mono-data text-sm flex items-center gap-2">
                Signature CTA <FlaskConical size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="mono-data text-[10px] text-amber">Link Underline</div>
              <a href="#" className="text-xl font-display text-primary hover-underline">
                Explore the Research Catalog
              </a>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-display mb-8 border-b border-line pb-2 text-primary">Container Query Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-line border-dashed p-4">
              <div className="mono-data text-[10px] text-ink/40 mb-2">Constrained Container (Small)</div>
              <div className="max-w-[300px]">
                <SpecimenCard
                  variant="standard"
                  catalogId="CQ-001"
                  title="Narrow View"
                  description="Testing layout adaptation."
                />
              </div>
            </div>
            <div className="border border-line border-dashed p-4">
              <div className="mono-data text-[10px] text-ink/40 mb-2">Wide Container (Large)</div>
              <SpecimenCard
                variant="standard"
                catalogId="CQ-002"
                title="Wide Viewport Adaptation"
                description="This card should have more padding and larger spacing when its container width exceeds 400px."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
