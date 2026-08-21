import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Breadcrumb } from '../components/shared/Breadcrumb'
import { motion, AnimatePresence } from 'framer-motion'
import { useOutreach } from '../hooks/useOutreach'
import { SpecimenCard } from '../components/shared/SpecimenCard'
import { SectionHeading } from '../components/shared/SectionHeading'
import { Calendar, Tag } from 'lucide-react'

export const Route = createFileRoute('/outreach')({
  component: OutreachPage,
})

function OutreachPage() {
  const { data: programs = [], isLoading } = useOutreach();

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber/30">
      <Header />
      <main className="flex-grow pt-[76px]">
        <Breadcrumb />
        <AnimatePresence mode="wait">
          <motion.div
            key="outreach"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="container mx-auto px-4 py-16"
          >
            <div className="max-w-4xl mb-16">
              <SectionHeading 
                title="Outreach & Training" 
                subtitle="Extending laboratory expertise through workshops, training programs, and community engagement in biotechnology."
                align="left"
              />
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map(i => (
                  <div key={i} className="h-[300px] bg-surface animate-pulse border border-line" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map(program => (
                  <SpecimenCard
                    key={program.id}
                    catalogId={`OUT-${program.program_type.slice(0, 3).toUpperCase()}`}
                    title={program.title}
                    className="h-full"
                  >
                    <div className="flex flex-col gap-6 mt-4">
                      {program.cover_image_url && (
                        <div className="aspect-video bg-surface border border-line overflow-hidden">
                          <img 
                            src={program.cover_image_url} 
                            alt={program.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-[10px] mono-data">
                          <div className="flex items-center gap-1 text-amber">
                            <Tag className="w-3 h-3" />
                            {program.program_type}
                          </div>
                          {program.event_date && (
                            <div className="flex items-center gap-1 text-primary-soft">
                              <Calendar className="w-3 h-3" />
                              {new Date(program.event_date).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                        
                        <p className="text-sm text-ink/70 leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  </SpecimenCard>
                ))}
              </div>
            )}
            
            {/* Python for Biologists Placeholder Section */}
            <div className="mt-32 p-12 border border-line bg-surface/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-line opacity-20" />
              <div className="max-w-2xl">
                <div className="mono-data text-[10px] text-amber mb-4">UPCOMING_CURRICULUM</div>
                <h3 className="font-display text-3xl text-primary mb-6">Python for Biologists</h3>
                <p className="text-ink/80 leading-relaxed mb-8">
                  We are developing a specialized training module focused on bio-computational skills, 
                  data analysis using Python, and genetic sequence processing. 
                </p>
                <div className="inline-flex items-center gap-2 text-[10px] mono-data text-primary-soft">
                  <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
                  STATUS: UNDER DEVELOPMENT
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
