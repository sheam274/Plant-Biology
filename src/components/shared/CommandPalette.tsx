import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Dna, BookOpen, FileText, User } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "../../lib/utils";

export const CommandPalette: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : undefined; // This needs to be handled by parent
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-surface border border-line shadow-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-line flex items-center gap-3">
            <Search size={20} className="text-primary-soft" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search research, publications, people..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow bg-transparent border-none outline-none text-lg font-display text-primary placeholder:text-primary-soft/50"
            />
            <kbd className="hidden sm:inline-block px-2 py-1 bg-bg border border-line mono-data text-[10px] text-primary-soft">ESC</kbd>
            <button onClick={onClose} className="p-1 hover:text-amber transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-2">
            {query.length > 0 ? (
              <div className="space-y-6 p-4">
                {/* Search Results Sections */}
                <section>
                  <span className="mono-data text-[10px] text-primary-soft uppercase block mb-3">Research Programs</span>
                  <div className="space-y-2">
                    <Link to="/research" className="flex items-center gap-3 p-3 hover:bg-bg border border-transparent hover:border-line transition-all group" onClick={onClose}>
                      <Dna size={16} className="text-amber" />
                      <span className="text-sm font-medium">Genetic Engineering & Genome Editing</span>
                      <span className="mono-data text-[8px] text-primary-soft ml-auto border border-line px-1">CGPBL-RES-002</span>
                    </Link>
                  </div>
                </section>

                <section>
                  <span className="mono-data text-[10px] text-primary-soft uppercase block mb-3">People</span>
                  <div className="space-y-2">
                    <Link to="/people" className="flex items-center gap-3 p-3 hover:bg-bg border border-transparent hover:border-line transition-all group" onClick={onClose}>
                      <User size={16} className="text-teal" />
                      <span className="text-sm font-medium">Dr. Sheikh Shamimul Alam</span>
                      <span className="mono-data text-[8px] text-primary-soft ml-auto">Lab PI</span>
                    </Link>
                  </div>
                </section>
              </div>
            ) : (
              <div className="p-12 text-center">
                <Dna size={48} className="mx-auto text-line mb-4 animate-pulse" />
                <p className="text-primary-soft text-sm italic">Enter a catalog code or keyword to search the genetic ledger.</p>
              </div>
            )}
          </div>
          
          <div className="p-3 bg-bg border-t border-line flex items-center justify-between mono-data text-[9px] text-primary-soft">
            <div className="flex gap-4">
              <span><kbd className="border border-line px-1 mr-1">↑↓</kbd> Navigate</span>
              <span><kbd className="border border-line px-1 mr-1">↵</kbd> Select</span>
            </div>
            <span>CGPBL Search Utility v1.0</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
