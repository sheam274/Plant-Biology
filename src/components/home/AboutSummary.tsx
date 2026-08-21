import React from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "../shared/SectionHeading";

export const AboutSummary: React.FC = () => {
  return (
    <section className="py-24 bg-surface/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading 
            title="About Our Lab" 
            subtitle="Established in 2012, CGPBL has grown from a modest plant tissue culture facility into a leading research center at Jahangirnagar University."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-16">
            <div className="space-y-6">
              <h3 className="font-display text-2xl text-primary flex items-center gap-3">
                <span className="w-6 h-[1px] bg-amber" />
                Mission
              </h3>
              <p className="text-ink/80 leading-relaxed">
                To create innovative facilities by using modern biotechnologies to ensure the current demands of exploiting the valuable plants/crops and microbes for food security, sustainable agriculture, green environment, and human health in Bangladesh.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-display text-2xl text-primary flex items-center gap-3">
                <span className="w-6 h-[1px] bg-amber" />
                Vision
              </h3>
              <p className="text-ink/80 leading-relaxed">
                To develop trained, proficient, and competent human resources for the development of Sonar Bangla and vision 2041.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-line">
            <Link 
              to="/about"
              className="inline-flex items-center gap-3 text-sm mono-data text-amber hover:text-primary transition-colors group"
            >
              READ OUR FULL STORY
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
