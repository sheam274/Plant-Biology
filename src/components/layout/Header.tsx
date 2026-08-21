import React from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sun, Leaf } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const NAV_ITEMS = [
  { label: "Research", href: "/research" },
  { label: "People", href: "/people" },
  { label: "Publications", href: "/publications" },
  { label: "Gallery", href: "/gallery" },
  { label: "Outreach", href: "/outreach" },
  { label: "Blog", href: "/blog" },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg border-b border-line">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-display text-xl md:text-2xl text-primary leading-tight tracking-tight">
            CGPBL
          </span>
          <span className="mono-data text-[9px] text-primary-soft">
            JU · BIOTECHNOLOGY
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href as any}
              className="text-sm font-medium text-ink hover:text-amber transition-colors"
              activeProps={{ className: "text-amber" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/about"
            className="px-4 py-2 bg-primary text-bg text-sm font-medium hover:bg-primary-soft transition-colors"
          >
            About Lab
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-line px-4 py-8 flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href as any}
              className="text-lg font-display text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/about"
            className="w-full py-3 bg-primary text-bg text-center font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Lab
          </Link>
        </div>
      )}
    </header>
  );
};
