import React from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mono-data text-xs text-amber mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-amber" />
              GENETIC LEDGER · V.2024
            </div>
            <h1 className="text-5xl md:text-7xl font-display text-primary leading-[1.1] mb-8">
              Cultivating Bangladesh's{" "}
              <span className="text-highlight">Genetic</span> Future
            </h1>
            <p className="text-lg md:text-xl text-primary-soft max-w-xl leading-relaxed mb-10 whitespace-pre-line">
              {`'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            I have approved the plan`}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-bg font-medium hover:bg-primary-soft transition-colors flex items-center gap-2 group">
                Explore Research Areas
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </button>
              <button className="px-8 py-4 border border-line text-primary font-medium hover:bg-surface transition-colors">
                View Publications
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Signature Root SVG Animation */}
      <div className="absolute top-0 right-0 w-full h-full md:w-1/2 -z-10 opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 500 800"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M250 800C250 800 250 600 200 450C150 300 300 350 350 200C400 50 300 0 300 0M250 800C250 800 280 650 350 550C420 450 400 400 380 300C360 200 450 150 450 50M200 450C200 450 150 420 100 380C50 340 20 250 80 150C140 50 100 0 100 0"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeDasharray="1500"
            initial={{ strokeDashoffset: 1500 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 -z-20 pointer-events-none opacity-[0.03]">
        <div className="absolute left-1/4 h-full w-[1px] bg-ink" />
        <div className="absolute left-2/4 h-full w-[1px] bg-ink" />
        <div className="absolute left-3/4 h-full w-[1px] bg-ink" />
        <div className="absolute top-1/4 w-full h-[1px] bg-ink" />
        <div className="absolute top-2/4 w-full h-[1px] bg-ink" />
        <div className="absolute top-3/4 w-full h-[1px] bg-ink" />
      </div>
    </section>
  );
};
