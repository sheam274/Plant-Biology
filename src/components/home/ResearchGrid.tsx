import React from "react";
import { Link } from "@tanstack/react-router";
import { SpecimenCard } from "../shared/SpecimenCard";
import { SectionHeading } from "../shared/SectionHeading";
import { useResearchAreas } from "../../hooks/useResearchAreas";

export const ResearchGrid: React.FC = () => {
  const { data: areas = [] } = useResearchAreas();

  return (
    <section className="py-24 bg-bg">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What We Are Doing" 
          subtitle="Our research programs focus on the fundamental mechanisms of plant life and their application to real-world agricultural challenges."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border-t border-b border-line">
          {areas.map((area) => (
            <SpecimenCard
              key={area.id}
              catalogId={area.catalog_code}
              title={area.title}
              description={area.summary}
              className="bg-bg border-none hover:bg-surface"
            >
              <div className="mt-8 pt-6 border-t border-line/40">
                <Link to="/research" className="text-[10px] mono-data text-teal hover:text-amber transition-colors flex items-center gap-2">
                  VIEW PROGRAM DETAILS →
                </Link>
              </div>
            </SpecimenCard>
          ))}
        </div>
      </div>
    </section>
  );
};
