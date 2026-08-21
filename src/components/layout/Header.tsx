import React, { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Sun, Leaf, Search, ChevronDown, Dna } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { CommandPalette } from "../shared/CommandPalette";
import { cn } from "../../lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", hasMega: true },
  { label: "Research", href: "/research", hasMega: true },
  { label: "Publications", href: "/publications" },
  { label: "Collaborations", href: "/collaborations" },
  { label: "Galleries", href: "/gallery" },
  { label: "Outreach", href: "/outreach", hasMega: true },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  
  // Track scroll for condensation and progress bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-line bg-bg/92",
        isScrolled ? "h-[60px] backdrop-blur-md" : "h-[76px]"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="text-amber group-hover:rotate-12 transition-transform duration-300">
            <Dna size={28} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl text-primary leading-none tracking-tight">
              CGPBL
            </span>
            <span className="mono-data text-[8px] text-primary-soft">
              JU · BIOTECHNOLOGY
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 h-full">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.href}
              className="h-full flex items-center"
              onMouseEnter={() => item.hasMega && setActiveMega(item.label)}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link
                to={item.href as any}
                className={cn(
                  "text-sm font-medium text-ink hover:text-amber transition-colors flex items-center gap-1",
                  activeMega === item.label && "text-amber"
                )}
                activeProps={{ className: "text-amber" }}
              >
                {item.label}
                {item.hasMega && <ChevronDown size={14} className={cn("transition-transform", activeMega === item.label && "rotate-180")} />}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right side tools */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-primary hover:text-amber transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 text-primary hover:text-amber transition-colors relative w-9 h-9 flex items-center justify-center overflow-hidden"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "backOut" }}
              >
                {theme === 'day' ? <Sun size={20} /> : <Leaf size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <Link
            to="/"
            className="hidden sm:block px-5 py-2 bg-amber text-bg text-sm font-medium hover:brightness-110 transition-all uppercase tracking-wider mono-data"
          >
            Contact Us
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mega Menus Panel */}
      <AnimatePresence>
        {activeMega && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-line shadow-2xl z-40 overflow-hidden"
            onMouseEnter={() => setActiveMega(activeMega)}
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="container mx-auto px-4 py-12">
              {activeMega === "Research" && (
                <div className="grid grid-cols-4 gap-12">
                  <div className="space-y-6">
                    <span className="mono-data text-[10px] text-primary-soft block border-b border-line pb-2">Facilities</span>
                    <ul className="space-y-3">
                      <li><Link to="/research" className="text-sm hover:text-amber transition-colors">Tissue Culture Lab</Link></li>
                      <li><Link to="/research" className="text-sm hover:text-amber transition-colors">Molecular Biology</Link></li>
                      <li><Link to="/research" className="text-sm hover:text-amber transition-colors">Greenhouse Complex</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <span className="mono-data text-[10px] text-primary-soft block border-b border-line pb-2">Computational Track</span>
                    <ul className="space-y-3">
                      <li><Link to="/research" className="text-sm hover:text-amber transition-colors">Bioinformatics</Link></li>
                      <li><Link to="/research" className="text-sm hover:text-amber transition-colors">Systems Biology</Link></li>
                      <li><Link to="/research" className="text-sm hover:text-amber transition-colors">AI & Modeling</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <span className="mono-data text-[10px] text-primary-soft block border-b border-line pb-2">Ongoing Research</span>
                    <ul className="space-y-3">
                      <li><Link to="/research" className="text-sm hover:text-amber transition-colors">Genome Editing</Link></li>
                      <li><Link to="/research" className="text-sm hover:text-amber transition-colors">Stress Physiology</Link></li>
                      <li><Link to="/research" className="text-sm hover:text-amber transition-colors">Crop Improvement</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-1 border-l border-line pl-12">
                    <span className="mono-data text-[10px] text-primary-soft block mb-4">Featured Program</span>
                    <div className="group relative border border-line p-4 bg-bg">
                      <div className="aspect-video bg-surface mb-3 flex items-center justify-center">
                        <Dna size={32} className="text-line group-hover:text-amber transition-colors" />
                      </div>
                      <div className="mono-data text-[8px] text-amber mb-1">CGPBL · RES-002</div>
                      <h4 className="text-sm font-display text-primary group-hover:text-amber transition-colors">CRISPR/Cas9 Transformation</h4>
                    </div>
                  </div>
                </div>
              )}
              {activeMega === "About" && (
                <div className="grid grid-cols-3 gap-12">
                  <div className="space-y-6">
                    <span className="mono-data text-[10px] text-primary-soft block border-b border-line pb-2">Lab Members</span>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                      <li><Link to="/people" className="text-sm hover:text-amber transition-colors">Principal Investigators</Link></li>
                      <li><Link to="/people" className="text-sm hover:text-amber transition-colors">Research Staff</Link></li>
                      <li><Link to="/people" className="text-sm hover:text-amber transition-colors">PhD Scholars</Link></li>
                      <li><Link to="/people" className="text-sm hover:text-amber transition-colors">MPhil Students</Link></li>
                      <li><Link to="/people" className="text-sm hover:text-amber transition-colors">Graduate Researchers</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <span className="mono-data text-[10px] text-primary-soft block border-b border-line pb-2">Lab Alumni</span>
                    <ul className="space-y-3">
                      <li><Link to="/people" className="text-sm hover:text-amber transition-colors">Alumni Network</Link></li>
                      <li><Link to="/people" className="text-sm hover:text-amber transition-colors">Past Projects</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <span className="mono-data text-[10px] text-primary-soft block border-b border-line pb-2">The Lab</span>
                    <ul className="space-y-3">
                      <li><Link to="/about" className="text-sm hover:text-amber transition-colors">Supporting Staff</Link></li>
                      <li><Link to="/about" className="text-sm hover:text-amber transition-colors">Lab Portfolio</Link></li>
                      <li><Link to="/about" className="text-sm hover:text-amber transition-colors">Contact Details</Link></li>
                    </ul>
                  </div>
                </div>
              )}
              {activeMega === "Outreach" && (
                <div className="grid grid-cols-3 gap-12">
                  <div className="space-y-6">
                    <span className="mono-data text-[10px] text-primary-soft block border-b border-line pb-2">Programs</span>
                    <ul className="space-y-3">
                      <li><Link to="/outreach" className="text-sm hover:text-amber transition-colors">Training Workshops</Link></li>
                      <li><Link to="/outreach" className="text-sm hover:text-amber transition-colors">Research Internships</Link></li>
                      <li><Link to="/outreach" className="text-sm hover:text-amber transition-colors">Public Seminars</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <span className="mono-data text-[10px] text-primary-soft block border-b border-line pb-2">Impact</span>
                    <ul className="space-y-3">
                      <li><Link to="/outreach" className="text-sm hover:text-amber transition-colors">Biosafety Training</Link></li>
                      <li><Link to="/outreach" className="text-sm hover:text-amber transition-colors">Frugal Science Initiative</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-6 border-l border-line pl-12">
                    <span className="mono-data text-[10px] text-primary-soft block mb-4">Upcoming Events</span>
                    <div className="space-y-4">
                      <div className="group cursor-pointer">
                        <div className="mono-data text-[8px] text-amber">12 OCT 2026</div>
                        <h4 className="text-sm font-display group-hover:text-amber transition-colors">CRISPR Hands-on Workshop</h4>
                      </div>
                      <div className="group cursor-pointer">
                        <div className="mono-data text-[8px] text-amber">05 NOV 2026</div>
                        <h4 className="text-sm font-display group-hover:text-amber transition-colors">Plant Biotech Symposium</h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-line">
        <motion.div 
          className="h-full bg-amber"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer Placeholder */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-surface z-[60] lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-line">
              <span className="font-display text-xl text-primary">CGPBL Menu</span>
              <button onClick={() => setIsMobileOpen(false)} className="p-2">
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {NAV_ITEMS.map(item => (
                <Link 
                  key={item.href} 
                  to={item.href as any} 
                  className="block text-2xl font-display text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link 
              to="/" 
              className="p-6 bg-amber text-bg text-center font-bold uppercase tracking-widest"
              onClick={() => setIsMobileOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Search Utility */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};
