import React from "react";
import { Link } from "@tanstack/react-router";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-line py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact */}
          <div>
            <div className="mono-data text-[10px] text-amber mb-6">
              CGPBL · CATALOG · 2026
            </div>
            <h3 className="font-display text-2xl text-primary mb-6">CGPBL</h3>
            <div className="space-y-4 text-sm text-ink leading-relaxed">
              <p>
                Dept. of Biotechnology & Genetic Engineering,<br />
                Jahangirnagar University, Savar,<br />
                Dhaka-1342, Bangladesh
              </p>
              <div className="space-y-1">
                <p>+880-277-910-4551 Ext 2145</p>
                <p>info@cgpbl.ac.bd</p>
              </div>
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="mono-data text-[10px] text-primary-soft mb-8">
              LEDGER INDEX
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Research", href: "/research" },
                { label: "People", href: "/people" },
                { label: "Publications", href: "/publications" },
                { label: "Gallery", href: "/gallery" },
                { label: "Outreach", href: "/outreach" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href as any}
                  className="text-sm text-ink hover:text-amber transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social / Credits */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="mono-data text-[10px] text-primary-soft mb-8">
                AFFILIATIONS
              </h4>
              <div className="flex flex-wrap gap-4 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Ju Logo Placeholder */}
                <div className="w-8 h-10 border border-line flex items-center justify-center text-[8px] mono-data text-center p-1">
                  JU
                </div>
                <div className="w-16 h-8 border border-line flex items-center justify-center text-[8px] mono-data text-center p-1">
                  BGE DEPT
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-line/40 text-[10px] mono-data text-primary-soft">
              © 2026 CGPBL · BUILT FOR JU
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
