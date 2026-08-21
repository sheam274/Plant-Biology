import React from "react";
import { motion } from "framer-motion";

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
    <section className="py-12 bg-bg border-b border-line">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-6 border-l border-line"
            >
              <div className="mono-data text-[8px] text-amber absolute top-0 left-0 -translate-x-1/2 bg-bg py-1">
                {stat.catalog}
              </div>
              <div className="mono-data text-[10px] text-primary-soft uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-3xl font-display text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-xs text-ink/70 leading-relaxed">
                '''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            now i want to decorate the website with card and glass effect and hover and other advanced css.give me the prompt.also sync with whole project and make it bug free or any mismatch
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
