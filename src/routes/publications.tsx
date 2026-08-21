import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Breadcrumb } from '../components/shared/Breadcrumb'
import { motion, AnimatePresence } from 'framer-motion'
import { usePublications } from '../hooks/usePublications'
import { PublicationCard } from '../components/publications/PublicationCard'
import { SectionHeading } from '../components/shared/SectionHeading'

export const Route = createFileRoute('/publications')({
  component: PublicationsPage,
})

function PublicationsPage() {
  const { data: publications = [], isLoading } = usePublications();

  // Group by year
  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber/30">
      <Header />
      <main className="flex-grow pt-[76px]">
        <Breadcrumb />
        <AnimatePresence mode="wait">
          <motion.div
            key="publications"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="container mx-auto px-4 py-16"
          >
            <div className="max-w-4xl mb-16">
              <SectionHeading 
                title="Scientific Ledger" 
                subtitle="A chronological record of peer-reviewed research, contributions, and genetic breakthroughs published by CGPBL researchers."
                align="left"
              />
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-[250px] bg-surface animate-pulse border border-line" />
                ))}
              </div>
            ) : (
              <div className="space-y-24">
                {years.map(year => {
                  const filtered = publications.filter(p => p.year === year);
                  
                  return (
                    <div key={year} className="space-y-12">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full border border-line flex items-center justify-center mono-data text-xl text-amber bg-surface">
                          {year}
                        </div>
                        <div className="flex-grow h-[1px] bg-line" />
                        <span className="mono-data text-[10px] text-primary-soft uppercase">
                          ARCHIVE_REF: {year}-PUB
                        </span>
                      </div>
                      
                      {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 focus-grid">
                          {filtered.map(pub => (
                            <PublicationCard key={pub.id} publication={pub} className="focus-item" />
                          ))}
                        </div>
                      ) : (
                        <div className="p-8 border border-dashed border-line text-center italic text-primary-soft text-sm">
                          No publications recorded for this period in the scientific ledger.
                        </div>
                      )}
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
