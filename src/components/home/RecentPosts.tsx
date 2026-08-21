import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { SpecimenCard } from "../shared/SpecimenCard";

export const RecentPosts: React.FC = () => {
  const posts = useBlogPosts();

  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Recent Posts" 
          subtitle="Updates from the laboratory, field visits, and new publication highlights."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <SpecimenCard
              key={post.id}
              catalogId={post.catalogId}
              title={post.title}
              description={post.excerpt}
            >
              <div className="mt-6 pt-4 border-t border-line/40 flex items-center justify-between">
                <span className="mono-data text-[10px] text-primary-soft">{post.date}</span>
                <button className="text-[10px] mono-data text-amber hover:underline">READ ENTRY</button>
              </div>
            </SpecimenCard>
          ))}
        </div>
      </div>
    </section>
  );
};
