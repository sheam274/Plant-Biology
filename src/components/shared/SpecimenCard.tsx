import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SpecimenCardProps {
  catalogId: string;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export const SpecimenCard: React.FC<SpecimenCardProps> = ({
  catalogId,
  title,
  description,
  className,
  children,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative border border-line bg-surface p-6 flex flex-col h-full",
        "transition-colors hover:border-amber",
        className
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="mono-data text-[10px] text-primary-soft border border-line px-2 py-0.5 group-hover:bg-amber group-hover:text-bg transition-colors">
          {catalogId}
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-line group-hover:bg-amber transition-colors" />
      </div>

      <h3 className="text-lg font-display mb-2 text-primary">{title}</h3>
      <p className="text-sm text-ink leading-relaxed flex-grow">{description}</p>
      
      {children}

      {/* Amber hover signature border */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-[2px] bg-amber origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
