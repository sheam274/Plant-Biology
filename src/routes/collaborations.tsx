import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Breadcrumb } from '../components/shared/Breadcrumb'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { type Collaboration } from '../types'
import { SectionHeading } from '../components/shared/SectionHeading'
import { ExternalLink, Globe } from 'lucide-react'

export const Route = createFileRoute('/collaborations')({
  component: CollaborationsPage,
})

function CollaborationsPage() {
  const { data: partners = [], isLoading } = useQuery({
    queryKey: ["collaborations"],
    queryFn: async () => {
      const { data, error } = await supabase.from("collaborations").select("*");
      if (error) throw error;
      return data as Collaboration[];
    }
  });

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber/30">
      <Header />
      <main className="flex-grow pt-[76px]">
        <Breadcrumb />
        <AnimatePresence mode="wait">
          <motion.div
            key="collaborations"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="container mx-auto px-4 py-16"
          >
            <div className="max-w-4xl mb-16">
              <SectionHeading 
                title="Strategic Partners" 
                subtitle="Collaborations with national and international institutions to drive biotechnological innovation in Bangladesh."
                align="left"
              />
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-[200px] bg-surface animate-pulse border border-line" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map(partner => (
                  <div key={partner.id} className="group p-8 border border-line bg-bg hover:bg-surface transition-all duration-300 relative overflow-hidden">
                    <div className="mono-data text-[8px] text-amber absolute top-4 right-4 border border-amber/30 px-2 py-0.5">
                      {partner.partner_type.toUpperCase()}
                    </div>
                    
                    <div className="mb-6 flex items-center gap-4">
                      {partner.logo_url ? (
                        <img src={partner.logo_url} alt={partner.partner_name} className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all" />
                      ) : (
                        <div className="w-12 h-12 bg-surface flex items-center justify-center text-line">
                          <Globe className="w-6 h-6" />
                        </div>
                      )}
                    </div>

                    <h3 className="font-display text-xl text-primary mb-3 group-hover:text-amber transition-colors">
                      {partner.partner_name}
                    </h3>
                    
                    <p className="text-sm text-ink/70 leading-relaxed mb-6 line-clamp-3">
                      {partner.description}
                    </p>

                    {partner.website_url && (
                      <a 
                        href={partner.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] mono-data text-teal hover:text-amber transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        PARTNER PORTAL
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
