import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Breadcrumb } from '../components/shared/Breadcrumb'
import { motion, AnimatePresence } from 'framer-motion'
import { useResearchAreas } from '../hooks/useResearchAreas'
import { ResearchProgramCard } from '../components/research/ResearchProgramCard'
import { SectionHeading } from '../components/shared/SectionHeading'

export const Route = createFileRoute('/research')({
  component: ResearchPage,
})

function ResearchPage() {
  const { data: programs = [], isLoading } = useResearchAreas();

  const tracks = [
    { id: 'pi-1', label: 'Genetic Engineering & Bioreactor Track', filter: (p: any) => p.track === 'Lab Co-PI I' },
    { id: 'pi-2', label: 'Plant Physiology & Bioinformatics Track', filter: (p: any) => p.track === 'Lab Co-PI II' },
    { id: 'ongoing', label: 'Core Programs', filter: (p: any) => p.track === 'Ongoing Research' },
    { id: 'facilities', label: 'Laboratory Facilities', filter: (p: any) => p.track === 'Facilities' },
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber/30">
      <Header />
      <main className="flex-grow pt-[76px]">
        <Breadcrumb />
        <AnimatePresence mode="wait">
          <motion.div
            key="research"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="container mx-auto px-4 py-16"
          >
            <div className="max-w-4xl mb-16">
              <SectionHeading 
                title="Research Catalog" 
                subtitle="A systematic record of laboratory programs, from tissue culture and genetic transformation to computational biology."
                align="left"
              />
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-[350px] bg-surface animate-pulse border border-line" />
                ))}
              </div>
            ) : (
              <div className="space-y-24">
                {tracks.map(track => {
                  const filtered = programs.filter(track.filter);
                  if (filtered.length === 0) return null;

                  return (
                    <div key={track.id} className="space-y-12">
                      <div className="flex items-center gap-4">
                        <h2 className="font-display text-2xl text-primary">{track.label}</h2>
                        <div className="flex-grow h-[1px] bg-line" />
                        <span className="mono-data text-[10px] text-primary-soft">
                          REF_COUNT: {filtered.length.toString().padStart(2, '0')}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filtered.map(program => (
                          <ResearchProgramCard key={program.id} program={program} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
