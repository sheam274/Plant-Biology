import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Breadcrumb } from '../components/shared/Breadcrumb'
import { motion, AnimatePresence } from 'framer-motion'

export const Route = createFileRoute('/research')({
  component: ResearchPage,
})

function ResearchPage() {
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
            className="container mx-auto px-4 py-12"
          >
            <h1 className="text-4xl md:text-5xl font-display text-primary mb-8">Research Programs</h1>
            <p className="text-lg text-primary-soft max-w-2xl mb-12">
              Our multidisciplinary approach combines molecular genetics, computational biology, and field applications.
            </p>
            {/* Page content would go here */}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
