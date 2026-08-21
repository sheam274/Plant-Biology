import React from "react";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  align = "left",
}) => {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      <div className="flex items-center gap-4 mb-2">
        {align === "center" && <div className="h-[1px] flex-grow bg-line" />}
        <span className="mono-data text-[10px] text-amber">CGPBL · EST. 2012</span>
        <div className="h-[1px] flex-grow bg-line" />
      </div>
      <h2 className="text-3xl md:text-4xl font-display text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-primary-soft max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
