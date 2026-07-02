"use client";

import { useEffect, useState } from "react";
import { Command } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-5xl flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/20" : ""
        }`}
      >
        <button
          onClick={() => go("hero")}
          className="font-display font-semibold text-text-primary tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent-cyan">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-white/5"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            const e = new KeyboardEvent("keydown", { key: "k", metaKey: true });
            document.dispatchEvent(e);
          }}
          className="glass glass-hover hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-text-muted font-mono"
          aria-label="Open command palette"
        >
          <Command size={12} />
          <span>K</span>
        </button>
      </nav>
    </header>
  );
}
