import React from "react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../shared/SectionHeading";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { SpecimenCard } from "../shared/SpecimenCard";

export const RecentPosts: React.FC = () => {
  const { data: posts = [] } = useBlogPosts();

  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Recent Posts" 
          subtitle="Updates from the laboratory, field visits, and new publication highlights."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <SpecimenCard
              key={post.id}
              catalogId={post.slug}
              title={post.title}
              description={post.excerpt || ""}
            >
              <div className="mt-6 pt-4 border-t border-line/40 flex items-center justify-between">
                <span className="mono-data text-[10px] text-primary-soft">
                  {post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Draft'}
                </span>
                <Link to={`/blog/${post.slug}` as any} className="text-[10px] mono-data text-amber hover:underline">READ ENTRY</Link>
              </div>
            </SpecimenCard>
          ))}
        </div>
      </div>
    </section>
  );
};
