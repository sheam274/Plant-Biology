import React from "react";
import { cn } from "../../lib/utils";

interface SubNavProps {
  items: { label: string; href: string }[];
  className?: string;
}

export const SubNav: React.FC<SubNavProps> = ({ items, className }) => {
  return (
    <nav className={cn("sticky top-28 space-y-2 py-4", className)}>
      <div className="mono-data text-[10px] text-primary-soft mb-6 px-4">
        INDEX · SECTION
      </div>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-ink hover:text-amber border-l border-line hover:border-amber transition-all"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};
