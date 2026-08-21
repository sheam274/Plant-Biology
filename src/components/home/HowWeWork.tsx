import React from "react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../shared/SectionHeading";
import { User, FlaskConical, Beaker, Briefcase } from "lucide-react";

const WORK_AREAS = [
  {
    id: "WORK-01",
    title: "Lab PI",
    desc: "Led by Prof. Abdullah Mohammad Shohael, focusing on genetic engineering and plant transformation.",
    link: "/people",
    icon: <User className="w-5 h-5" />,
  },
  {
    id: "WORK-02",
    title: "Laboratory Facilities",
    desc: "Top-quality bioreactors and tissue culture labs ready for commercial plant cell production.",
    link: "/research",
    icon: <FlaskConical className="w-5 h-5" />,
  },
  {
    id: "WORK-03",
    title: "Ongoing Research",
    desc: "From Napier grass development to CRISPR/Cas9 transformation programs.",
    link: "/research",
    icon: <Beaker className="w-5 h-5" />,
  },
  {
    id: "WORK-04",
    title: "Funding Agencies",
    desc: "Collaborating with national and international entities to drive biotechnological innovation.",
    link: "/collaborations",
    icon: <Briefcase className="w-5 h-5" />,
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
              subtitle="Our lab operates through four primary tracks to ensure comprehensive research and development."
              align="left"
            />
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line overflow-hidden">
            {WORK_AREAS.map((area) => (
              <Link 
                key={area.id} 
                to={area.link as any}
                className="bg-bg p-8 flex flex-col gap-4 group hover:bg-surface transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="mono-data text-[10px] text-amber">{area.id}</span>
                  <div className="text-primary-soft group-hover:text-amber transition-colors">
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display text-primary">{area.title}</h3>
                <p className="text-sm text-ink leading-relaxed opacity-80">{area.desc}</p>
                <div className="mt-4 text-[10px] mono-data text-teal group-hover:text-amber transition-colors flex items-center gap-2">
                  EXPLORE TRACK →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
