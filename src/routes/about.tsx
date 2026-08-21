import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Breadcrumb } from '../components/shared/Breadcrumb'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '../components/shared/SectionHeading'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const TIMELINE = [
  { year: '2012', event: 'Laboratory establishment at the Department of Biotechnology & Genetic Engineering, JU.', id: 'T-01' },
  { year: '2015', event: 'First successful genetic transformation of local jute varieties.', id: 'T-02' },
  { year: '2018', event: 'Inauguration of the advanced bioreactor facility for commercial plant cell production.', id: 'T-03' },
  { year: '2021', event: 'Launch of the bioinformatics track focusing on plant stress genomics.', id: 'T-04' },
  { year: '2023', event: 'Excellence award in agricultural biotechnology for sustainable development.', id: 'T-05' },
];

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-amber/30">
      <Header />
      <main className="flex-grow pt-[76px]">
        <Breadcrumb />
        <AnimatePresence mode="wait">
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="container mx-auto px-4 py-16"
          >
            <div className="max-w-4xl mb-16">
              <SectionHeading 
                title="Laboratory Chronicle" 
                subtitle="From a modest plant tissue culture facility to a multi-disciplinary genomic research center."
                align="left"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
              <div className="lg:col-span-7 space-y-8 text-lg text-ink/80 leading-relaxed">
                <p>
                  The Cell Genetics & Plant Biotechnology Laboratory (CGPBL) is a premier research wing of the 
                  Department of Biotechnology & Genetic Engineering at Jahangirnagar University, Bangladesh. 
                  Under the leadership of Prof. Abdullah Mohammad Shohael, the lab has pioneered significant 
                  advancements in plant tissue culture and genetic engineering.
                </p>
                <p>
                  Our primary objective is to harness the potential of modern biotechnology to address critical 
                  challenges in agriculture and human health. We combine traditional botanical expertise with 
                  cutting-edge genetic tools like CRISPR/Cas9 and bioinformatics to develop resilient crop 
                  varieties suited for the unique environmental conditions of Bangladesh.
                </p>
                <p>
                  We are particularly proud of our state-of-the-art bioreactor facilities, which allow for the 
                  large-scale production of secondary metabolites and high-quality plantlets, bridging the 
                  gap between laboratory research and commercial application.
                </p>
              </div>
              <div className="lg:col-span-5 border-l border-line pl-8 lg:pl-12">
                <div className="mono-data text-[10px] text-amber mb-8 uppercase tracking-widest">
                  Timeline of Discovery
                </div>
                <div className="space-y-12">
                  {TIMELINE.map((item) => (
                    <div key={item.id} className="relative">
                      <div className="absolute top-2 -left-[33px] lg:-left-[49px] w-2 h-2 rounded-full bg-amber" />
                      <div className="mono-data text-xl text-primary mb-2">{item.year}</div>
                      <p className="text-sm text-ink/60 leading-relaxed">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
              <div className="p-8 border border-line bg-surface/30">
                <div className="mono-data text-[10px] text-amber mb-4">CORE_VALUES</div>
                <h3 className="font-display text-2xl text-primary mb-4">Precision</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  Rigorous scientific methodology in every sequence and every culture.
                </p>
              </div>
              <div className="p-8 border border-line bg-surface/30">
                <div className="mono-data text-[10px] text-amber mb-4">CORE_VALUES</div>
                <h3 className="font-display text-2xl text-primary mb-4">Sustainability</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  Developing solutions that respect and enhance our natural ecosystem.
                </p>
              </div>
              <div className="p-8 border border-line bg-surface/30">
                <div className="mono-data text-[10px] text-amber mb-4">CORE_VALUES</div>
                <h3 className="font-display text-2xl text-primary mb-4">Integrity</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  Commitment to ethical research and transparent communication.
                </p>
              </div>
            </div>

            <div className="text-center p-16 border border-line bg-ink text-bg relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                   </pattern>
                   <rect width="100%" height="100%" fill="url(#grid)" />
                 </svg>
               </div>
               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="font-display text-3xl mb-6 italic">
                   "Building human resources for a biotechnological revolution in Bangladesh."
                 </h2>
                 <p className="mono-data text-[10px] text-highlight uppercase tracking-widest">
                   Vision 2041 · Sonar Bangla
                 </p>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
