import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SpecimenCardProps {
  catalogId: string;
  title: string;
  description?: string;
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
      initial={false}
      whileHover="hover"
      className={cn(
        "group relative border border-line bg-surface p-6 flex flex-col h-full",
        "transition-all duration-300 hover:border-amber hover:shadow-[inset_0_0_20px_rgba(201,138,44,0.05)]",
        className
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <motion.div 
          variants={{
            hover: { y: -2 }
          }}
          className="mono-data text-[10px] text-primary-soft border border-line px-2 py-0.5 group-hover:bg-amber group-hover:text-bg transition-colors"
        >
          {catalogId}
        </motion.div>
        <div className="w-1.5 h-1.5 rounded-full bg-line group-hover:bg-amber transition-colors" />
      </div>

      <h3 className="text-lg font-display mb-2 text-primary">{title}</h3>
      {description && <p className="text-sm text-ink leading-relaxed flex-grow">{description}</p>}
      
      {children}

      {/* Amber hover signature border */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-amber origin-left"
        variants={{
          hover: { scaleX: 1 }
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.div>
  );
};
