import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Breadcrumb } from '../components/shared/Breadcrumb'
import { motion, AnimatePresence } from 'framer-motion'
import { useLabMembers } from '../hooks/useLabMembers'
import { MemberCard } from '../components/people/MemberCard'
import { SectionHeading } from '../components/shared/SectionHeading'

export const Route = createFileRoute('/people')({
  component: PeoplePage,
})

function PeoplePage() {
  const { data: members = [], isLoading } = useLabMembers();

  const categories = [
    { id: 'pi', label: 'Principal Investigator', filter: (m: any) => m.role.toLowerCase().includes('pi') || m.role.toLowerCase().includes('principal') },
    { id: 'researchers', label: 'Research Team', filter: (m: any) => !m.role.toLowerCase().includes('pi') && !m.role.toLowerCase().includes('principal') }
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber/30">
      <Header />
      <main className="flex-grow pt-[76px]">
        <Breadcrumb />
        <AnimatePresence mode="wait">
          <motion.div
            key="people"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="container mx-auto px-4 py-16"
          >
            <div className="max-w-4xl mb-16">
              <SectionHeading 
                title="Lab Roster" 
                subtitle="A directory of researchers and scientists dedicated to advancing plant biotechnology and genetic engineering at Jahangirnagar University."
                align="left"
              />
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-[400px] bg-surface animate-pulse border border-line" />
                ))}
              </div>
            ) : (
              <div className="space-y-24">
                {categories.map(category => {
                  const filtered = members.filter(category.filter);
                  if (filtered.length === 0) return null;

                  return (
                    <div key={category.id} className="space-y-12">
                      <div className="flex items-center gap-4">
                        <h2 className="font-display text-2xl text-primary">{category.label}</h2>
                        <div className="flex-grow h-[1px] bg-line" />
                        <span className="mono-data text-[10px] text-primary-soft">
                          COUNT: {filtered.length.toString().padStart(2, '0')}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map(member => (
                          <MemberCard key={member.id} member={member} />
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
