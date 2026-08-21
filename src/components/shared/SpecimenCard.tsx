import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export type SpecimenCardVariant = "standard" | "glass" | "elevated";

interface SpecimenCardProps {
  catalogId: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: SpecimenCardVariant;
  image?: string;
}

export const SpecimenCard: React.FC<SpecimenCardProps> = ({
  catalogId,
  title,
  description,
  className,
  children,
  variant = "standard",
  image,
}) => {
  const variants = {
    standard: "bg-surface border-line",
    glass: "bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] backdrop-blur-[16px] saturate-[140%] border-[color-mix(in_srgb,var(--line)_60%,transparent)] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--ink)_8%,transparent)]",
    elevated: "bg-surface border-line shadow-[0_8px_24px_-12px_color-mix(in_srgb,var(--ink)_15%,transparent)]",
  };

  return (
    <motion.div
      initial={false}
      whileHover="hover"
      className={cn(
        "group relative border p-6 flex flex-col h-full transition-all duration-200 ease-out",
        "hover:border-amber",
        variants[variant],
        "container-type-inline-size",
        className ?? ""
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <motion.div 
          variants={{
            hover: { y: -2, boxShadow: "0 2px 4px color-mix(in_srgb,var(--ink) 10%,transparent)" }
          }}
          className="mono-data text-[10px] text-primary-soft border border-line px-2 py-0.5 group-hover:bg-amber group-hover:text-bg transition-all"
        >
          {catalogId}
        </motion.div>
        <div className="w-1.5 h-1.5 rounded-full bg-line group-hover:bg-amber transition-colors" />
      </div>

      {image && (
        <div className="mb-4 overflow-hidden aspect-video border border-line">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            variants={{
              hover: { scale: 1.04 }
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      )}

      <h3 className="text-lg font-display mb-2 text-primary group-hover:text-amber transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-ink/80 leading-relaxed flex-grow">
          {description}
        </p>
      )}
      
      {children}

      {/* Signature border footer */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-amber origin-left"
        variants={{
          hover: { scaleX: 1 }
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      <style>{`
        @container (min-width: 400px) {
          .group {
            padding: 2rem;
          }
        }
      `}</style>
    </motion.div>
  );
};
