import React from "react";
import { SectionHeading } from "../shared/SectionHeading";

const STEPS = [
  {
    id: "STEP-01",
    title: "Observation & Cultivation",
    desc: "We begin in the field and the culture room, observing indigenous species and their stress responses.",
  },
  {
    id: "STEP-02",
    title: "Genetic Cataloging",
    desc: "Extraction and sequencing to map the molecular signatures that define plant behavior.",
  },
  {
    id: "STEP-03",
    title: "Computational Modeling",
    desc: "Using AI and bioinformatics to simulate growth outcomes and genetic interactions.",
  },
  {
    id: "STEP-04",
    title: "Precision Intervention",
    desc: "Applying CRISPR/Cas9 and other engineering techniques to refine traits for the future.",
  },
];

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 border-y border-line">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <SectionHeading 
              title="How We Work" 
              subtitle="A systematic, ledger-based approach to genetic discovery and plant transformation."
            />
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
            {STEPS.map((step) => (
              <div key={step.id} className="bg-bg p-8 flex flex-col gap-4 group hover:bg-surface transition-colors">
                <span className="mono-data text-[10px] text-amber">{step.id}</span>
                <h3 className="text-xl font-display text-primary">{step.title}</h3>
                <p className="text-sm text-ink leading-relaxed opacity-80">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
