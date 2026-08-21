import React from "react";
import { Link } from "@tanstack/react-router";
import { type ResearchProgram } from "../../types";
import { SpecimenCard } from "../shared/SpecimenCard";

interface ResearchProgramCardProps {
  program: ResearchProgram;
}

export const ResearchProgramCard: React.FC<ResearchProgramCardProps> = ({ program }) => {
  return (
    <SpecimenCard 
      catalogId={program.catalog_code}
      title={program.title}
      className="h-full"
    >
      <div className="flex flex-col gap-6">
        <div className="aspect-video bg-surface overflow-hidden border border-line">
          {program.cover_image_url ? (
            <img 
              src={program.cover_image_url} 
              alt={program.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-line">
              <span className="mono-data text-[10px]">DOC_REF_{program.catalog_code}</span>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <div className="mono-data text-[10px] text-amber uppercase tracking-widest">
            {program.track}
          </div>
          <p className="text-sm text-ink/70 leading-relaxed line-clamp-3">
            {program.summary}
          </p>
          <Link 
            to="/research"
            className="inline-flex items-center gap-2 text-[10px] mono-data text-teal hover:text-amber transition-colors"
          >
            VIEW FULL CATALOG ENTRY →
          </Link>
        </div>
      </div>
    </SpecimenCard>
  );
};
