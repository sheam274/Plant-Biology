import React from "react";
import { Link } from "@tanstack/react-router";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-line py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Identity */}
          <div>
            <div className="mono-data text-[10px] text-amber mb-6">
              CGPBL · EST. 2012
            </div>
            <h3 className="font-display text-2xl text-primary mb-6">
              Cell Genetics & Plant Biotechnology Laboratory
            </h3>
            <p className="text-sm text-ink/70 leading-relaxed mb-8">
              A premier research facility dedicated to genetic transformation, cell culture, and computational biology at Jahangirnagar University.
            </p>
            <div className="flex gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <div className="w-10 h-12 border border-line flex items-center justify-center text-[8px] mono-data text-center p-1">JU</div>
               <div className="w-10 h-12 border border-line flex items-center justify-center text-[8px] mono-data text-center p-1">BGE</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mono-data text-[10px] text-primary-soft mb-8 uppercase tracking-widest">
              Ledger Index
            </h4>
            <nav className="grid grid-cols-1 gap-y-3">
              {[
                { label: "Research Programs", href: "/research" },
                { label: "Scientific Ledger", href: "/publications" },
                { label: "Lab Roster", href: "/people" },
                { label: "Outreach & Training", href: "/outreach" },
                { label: "Gallery Archive", href: "/gallery" },
                { label: "Laboratory Blog", href: "/blog" },
                { label: "About the PI", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href as any}
                  className="text-sm text-ink hover:text-amber transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-[1px] bg-line group-hover:bg-amber transition-colors" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="mono-data text-[10px] text-primary-soft mb-8 uppercase tracking-widest">
              Terminal Node
            </h4>
            <div className="space-y-6 text-sm text-ink/80 leading-relaxed">
              <div>
                <span className="mono-data text-[10px] text-amber block mb-2">LOCATION</span>
                <p>
                  Dept. of Biotechnology & Genetic Engineering,<br />
                  Jahangirnagar University, Savar,<br />
                  Dhaka-1342, Bangladesh
                </p>
              </div>
              <div>
                <span className="mono-data text-[10px] text-amber block mb-2">COMMUNICATION</span>
                <p>Phone: +880-277-910-4551</p>
                <p>Email: ashohael@juniv.edu</p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Teaser / Admin */}
          <div className="flex flex-col">
            <h4 className="mono-data text-[10px] text-primary-soft mb-8 uppercase tracking-widest">
              Registry
            </h4>
            <p className="text-xs text-ink/60 mb-6 leading-relaxed">
              Stay documented with our latest research breakthroughs and academic openings.
            </p>
            <Link 
              to="/auth"
              className="mt-auto pt-8 border-t border-line/40 text-[10px] mono-data text-primary-soft hover:text-amber transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full border border-line" />
              ADMINISTRATOR LOGIN
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] mono-data text-primary-soft">
            © 2026 CGPBL · JU BGE DEPARTMENT · DHAKA, BANGLADESH
          </div>
          <div className="flex gap-8 text-[10px] mono-data text-primary-soft">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-highlight/50" />
              SYSTEM STATUS: OPERATIONAL
            </span>
            <span>VER: 3.0.1-GENESIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
