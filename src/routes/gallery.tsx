import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Breadcrumb } from '../components/shared/Breadcrumb'
import { motion, AnimatePresence } from 'framer-motion'
import { useGallery } from '../hooks/useGallery'
import { SectionHeading } from '../components/shared/SectionHeading'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

function GalleryPage() {
  const { data: items = [], isLoading } = useGallery();
  
  const albums = Array.from(new Set(items.map(item => item.album)));

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber/30">
      <Header />
      <main className="flex-grow pt-[76px]">
        <Breadcrumb />
        <AnimatePresence mode="wait">
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="container mx-auto px-4 py-16"
          >
            <div className="max-w-4xl mb-16">
              <SectionHeading 
                title="Laboratory Archive" 
                subtitle="Visual documentation of our facilities, field visits, and laboratory breakthroughs."
                align="left"
              />
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="aspect-square bg-surface animate-pulse border border-line" />
                ))}
              </div>
            ) : (
              <div className="space-y-20">
                {albums.map(album => (
                  <div key={album} className="space-y-8">
                    <div className="flex items-center gap-4">
                      <h2 className="font-display text-2xl text-primary">{album}</h2>
                      <div className="flex-grow h-[1px] bg-line" />
                      <span className="mono-data text-[10px] text-primary-soft uppercase">
                        ALBUM_REF: {album.toUpperCase().replace(/\s+/g, '_')}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {items.filter(item => item.album === album).map(item => (
                        <div key={item.id} className="group relative aspect-square bg-surface border border-line overflow-hidden">
                          <img 
                            src={item.image_url} 
                            alt={item.title}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                          />
                          <div className="absolute inset-x-0 bottom-0 p-4 bg-bg/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-line">
                            <p className="text-[10px] mono-data text-amber mb-1">{item.title}</p>
                            {item.taken_at && (
                              <p className="text-[8px] mono-data text-ink/50">DATE: {new Date(item.taken_at).toLocaleDateString()}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
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
