import React from "react";
import { motion } from "framer-motion";
import { SpecimenCard } from "../shared/SpecimenCard";

const STATS = [
  {
    label: "Lab Facilities",
    value: "Bioreactors",
    desc: "Ready for commercial plant cell production.",
    catalog: "FAC-B1"
  },
  {
    label: "Current Research",
    value: "Napier Grass",
    desc: "Development of high-yield fodder varieties.",
    catalog: "RES-N1"
  },
  {
    label: "Researchers",
    value: "~30",
    desc: "Dedicated biotechnology researchers in Bangladesh.",
    catalog: "MEM-T1"
  },
  {
    label: "Collaboration",
    value: "Science Porter",
    desc: "Regular seminars and workshops for capacity building.",
    catalog: "COL-S1"
  }
];

export const StatStrip: React.FC = () => {
  return (
    <section className="py-12 bg-bg border-b border-line relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <SpecimenCard
              key={i}
              variant="glass"
              catalogId={stat.catalog}
              title={stat.value}
              className="group"
            >
              <div className="mt-4">
                <div className="mono-data text-[10px] text-primary-soft uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-ink/70 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </SpecimenCard>
          ))}
        </div>
      </div>
    </section>
  );
};
