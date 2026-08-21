import { createFileRoute } from '@tanstack/react-router'
import { SpecimenCard } from '../components/shared/SpecimenCard'
import { PageShell } from '../components/layout/PageShell'
import { motion } from 'framer-motion'
import { Dna, ArrowRight, Search, Sun, Leaf } from 'lucide-react'

export const Route = createFileRoute('/design-system')({
  component: DesignSystemPage,
})

function DesignSystemPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-4 py-20 space-y-20">
        <section>
          <h1 className="text-4xl font-display mb-8 border-b border-line pb-4">Specimen Card Variants</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="mono-data text-xs text-primary-soft">variant="standard"</span>
              <SpecimenCard 
                catalogId="CGPBL · STD-01" 
                title="Standard Specimen" 
                description="The baseline card for all laboratory entries. Reliable, clean, and functional."
                image="https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?auto=format&fit=crop&q=80&w=800"
              />
            </div>
            
            <div className="space-y-4">
              <span className="mono-data text-xs text-primary-soft">variant="glass"</span>
              <div className="p-8 bg-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-20" />
                <SpecimenCard 
                  variant="glass"
                  catalogId="CGPBL · GLS-02" 
                  title="Glass Motif" 
                  description="A deliberate highlight surface for mega-menus and featured programs. Mimics a microscope slide."
                  className="relative z-10"
                />
              </div>
            </div>

            <div className="space-y-4">
              <span className="mono-data text-xs text-primary-soft">variant="elevated"</span>
              <SpecimenCard 
                variant="elevated"
                catalogId="CGPBL · ELV-03" 
                title="Elevated Entry" 
                description="Uses a tight shadow to lift above dense content. Reserved for key researchers and featured papers."
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display mb-8 border-b border-line pb-4">Interaction Language</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="mono-data text-sm text-primary-soft">Link & Nav Hovers</h3>
              <div className="flex flex-col gap-4 items-start">
                <a href="#" className="hover-underline text-lg font-display text-primary">Explore Research Track</a>
                <a href="#" className="hover-underline text-sm text-ink">View Full Publications List</a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="mono-data text-sm text-primary-soft">Button Micro-interactions</h3>
              <div className="flex flex-wrap gap-6">
                <button className="btn-magnetic px-8 py-3 bg-primary text-bg mono-data text-sm tracking-widest uppercase">
                  Primary Action
                </button>
                <button className="btn-magnetic cta-border px-8 py-3 text-primary mono-data text-sm tracking-widest uppercase font-bold">
                  Signature CTA
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="mono-data text-sm text-primary-soft">Icon Morphing</h3>
              <div className="flex gap-4">
                <button className="p-3 border border-line hover:text-amber transition-colors group">
                  <motion.div whileHover={{ rotate: 90, scale: 1.1 }}>
                    <Sun className="group-hover:hidden" />
                    <Leaf className="hidden group-hover:block" />
                  </motion.div>
                </button>
                <button className="p-3 border border-line hover:text-amber transition-colors group">
                   <Search className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="mono-data text-sm text-primary-soft">Focus Grid Effect (:has)</h3>
              <div className="focus-grid grid grid-cols-3 gap-4 p-4 border border-line bg-surface/50">
                {[1, 2, 3].map(i => (
                  <div key={i} className="focus-item p-4 bg-bg border border-line aspect-square flex items-center justify-center mono-data text-xs">
                    Item {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
