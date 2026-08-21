import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SpecimenCard } from "../shared/SpecimenCard";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mono-data text-xs text-amber mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-amber" />
              CGPBL · EST. 2012 · DHAKA
            </div>
            <h1 className="text-5xl md:text-7xl font-display text-primary leading-[1.1] mb-8">
              Genomic Solutions for <br />
              <span className="text-highlight">Sustainable</span> Agriculture
            </h1>
            <p className="text-lg md:text-xl text-primary-soft max-w-xl leading-relaxed mb-10">
              Welcome to the Cell Genetics & Plant Biotechnology Laboratory (CGPBL). 
              Our mission is to ensure food security, sustainable agriculture, and 
              environmental health through advanced biotechnological innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/research"
                className="px-8 py-4 bg-primary text-bg font-medium btn-magnetic transition-colors flex items-center gap-2 group mono-data uppercase tracking-wider text-sm border border-primary"
              >
                <span className="relative z-10">Explore Our Research</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Link>
              <Link
                to="/publications"
                className="px-8 py-4 border border-line text-primary font-medium btn-magnetic transition-colors mono-data uppercase tracking-wider text-sm"
              >
                View Publications
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="lg:col-span-5 hidden lg:block">
          <SpecimenCard
            variant="glass"
            catalogId="CGPBL · DATA-00"
            title="Active Research"
            className="p-8"
          >
            <div className="space-y-6 mt-4">
              <div className="flex justify-between items-end border-b border-line pb-2">
                <span className="mono-data text-[10px] text-primary-soft">TRACKS</span>
                <span className="text-xl font-display text-primary">04</span>
              </div>
              <div className="flex justify-between items-end border-b border-line pb-2">
                <span className="mono-data text-[10px] text-primary-soft">PUBLICATIONS</span>
                <span className="text-xl font-display text-primary">150+</span>
              </div>
              <div className="flex justify-between items-end border-b border-line pb-2">
                <span className="mono-data text-[10px] text-primary-soft">ESTABLISHED</span>
                <span className="text-xl font-display text-primary">2012</span>
              </div>
            </div>
          </SpecimenCard>
        </div>
      </div>

      {/* Signature Root SVG Animation */}
      <div className="absolute top-0 right-0 w-full h-full md:w-1/2 -z-10 opacity-30 pointer-events-none">
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
