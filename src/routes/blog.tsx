import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Breadcrumb } from '../components/shared/Breadcrumb'
import { motion, AnimatePresence } from 'framer-motion'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { SpecimenCard } from '../components/shared/SpecimenCard'
import { SectionHeading } from '../components/shared/SectionHeading'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

function BlogPage() {
  const { data: posts = [], isLoading } = useBlogPosts();

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber/30">
      <Header />
      <main className="flex-grow pt-[76px]">
        <Breadcrumb />
        <AnimatePresence mode="wait">
          <motion.div
            key="blog"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="container mx-auto px-4 py-16"
          >
            <div className="max-w-4xl mb-16">
              <SectionHeading 
                title="Laboratory Blog" 
                subtitle="Updates on laboratory life, breakthroughs in genetic research, and updates from Prof. Shohael's team."
                align="left"
              />
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-[300px] bg-surface animate-pulse border border-line" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                  <SpecimenCard
                    key={post.id}
                    catalogId={post.slug}
                    title={post.title}
                    description={post.excerpt || ""}
                    className="h-full"
                  >
                    <div className="flex flex-col gap-6 mt-4">
                      {post.cover_image_url && (
                        <div className="aspect-video bg-surface border border-line overflow-hidden">
                          <img 
                            src={post.cover_image_url} 
                            alt={post.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-[10px] mono-data">
                          <span className="text-amber uppercase">{post.category}</span>
                          <span className="text-primary-soft">
                            {post.published_at ? new Date(post.published_at).toLocaleDateString() : 'DRAFT'}
                          </span>
                        </div>
                        
                        <Link 
                          to={`/blog/${post.slug}` as any}
                          className="inline-flex items-center gap-2 text-[10px] mono-data text-teal hover:text-amber transition-colors"
                        >
                          READ FULL LOG ENTRY →
                        </Link>
                      </div>
                    </div>
                  </SpecimenCard>
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
