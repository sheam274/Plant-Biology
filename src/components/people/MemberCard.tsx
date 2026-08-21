import React from "react";
import { type LabMember } from "../../types";
import { SpecimenCard } from "../shared/SpecimenCard";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

interface MemberCardProps {
  member: LabMember;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <SpecimenCard 
      variant={member.role.toLowerCase().includes('pi') || member.role.toLowerCase().includes('principal') ? "elevated" : "standard"}
      catalogId={member.catalog_code}
      title={member.full_name}
      className="h-full"
    >
      <div className="flex flex-col gap-6">
        <div className="aspect-[4/5] bg-surface overflow-hidden border border-line">
          {member.photo_url ? (
            <motion.img 
              src={member.photo_url} 
              alt={member.full_name}
              className="w-full h-full object-cover grayscale transition-all duration-500"
              variants={{
                hover: { scale: 1.04, grayscale: 0 }
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-line">
              <span className="mono-data text-[10px]">NO_IMAGE</span>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="mono-data text-[10px] text-amber mb-1 uppercase tracking-widest">
              {member.role}
            </div>
            <h3 className="font-display text-xl text-primary">{member.full_name}</h3>
          </div>

          <p className="text-sm text-ink/70 leading-relaxed line-clamp-3">
            {member.bio}
          </p>

          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 text-[10px] mono-data text-teal hover-underline transition-colors"
            >
              <Mail className="w-3 h-3" />
              CONTACT MEMBER
            </a>
          )}
        </div>
      </div>
    </SpecimenCard>
  );
};
