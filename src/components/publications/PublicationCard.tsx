import React from "react";
import { type Publication } from "../../types";
import { SpecimenCard } from "../shared/SpecimenCard";
import { ExternalLink, FileText } from "lucide-react";

interface PublicationCardProps {
  publication: Publication;
  className?: string;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication, className }) => {
  return (
    <SpecimenCard 
      catalogId={publication.catalog_code}
      title={publication.title}
      {...(className ? { className } : {})}
    >
      <div className="flex flex-col gap-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="mono-data text-[10px] text-amber border border-amber/30 px-2 py-0.5">
              YEAR: {publication.year}
            </span>
            <span className="mono-data text-[10px] text-teal border border-teal/30 px-2 py-0.5">
              JRNL: {publication.journal.slice(0, 15)}...
            </span>
          </div>

          <p className="text-sm text-ink font-medium leading-relaxed italic">
            {publication.authors}
          </p>
          
          <div className="p-4 bg-surface border border-line relative overflow-hidden group/abstract">
            <div className="mono-data text-[8px] text-primary-soft absolute top-0 right-4 -translate-y-1/2 bg-bg px-2">
              BIB_REF
            </div>
            <p className="text-xs text-ink/60 leading-relaxed line-clamp-3 group-hover/abstract:line-clamp-none transition-all duration-300">
              {publication.abstract || "Full abstract available in catalog link."}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            {publication.doi_or_link && (
              <a 
                href={publication.doi_or_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] mono-data text-amber hover:text-primary transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                DOI / ACCESS LINK
              </a>
            )}
            <div className="flex-grow" />
            <FileText className="w-4 h-4 text-line" />
          </div>
        </div>
      </div>
    </SpecimenCard>
  );
};
