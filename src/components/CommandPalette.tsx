"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  User,
  Wrench,
  Briefcase,
  FolderGit2,
  Trophy,
  FileDown,
  Mail,
  Home,
} from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon } from "./icons/BrandIcons";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "contact", label: "Contact", icon: Mail },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm pt-[12vh] px-4"
      onClick={() => setOpen(false)}
    >
      <Command
        onClick={(e) => e.stopPropagation()}
        className="glass w-full max-w-lg overflow-hidden rounded-xl border-border-strong shadow-2xl"
        label="Command palette"
      >
        <div className="flex items-center border-b border-border px-4">
          <span className="font-mono text-text-muted text-sm mr-2">$</span>
          <Command.Input
            autoFocus
            placeholder="Jump to a section, or search..."
            className="w-full bg-transparent py-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none"
          />
          <kbd className="font-mono text-[10px] text-text-muted border border-border rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-text-muted">
            No results found.
          </Command.Empty>
          <Command.Group heading="Navigate" className="text-[11px] uppercase tracking-wide text-text-muted px-2 py-1.5 font-mono">
            {navItems.map((item) => (
              <Command.Item
                key={item.id}
                onSelect={() => go(item.id)}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-text-secondary cursor-pointer aria-selected:bg-surface-hover aria-selected:text-text-primary data-[selected=true]:bg-white/5 data-[selected=true]:text-text-primary"
              >
                <item.icon size={15} className="text-accent-cyan" />
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Actions" className="text-[11px] uppercase tracking-wide text-text-muted px-2 py-1.5 font-mono mt-2">
            <Command.Item
              onSelect={() => window.open(profile.resumeUrl, "_blank")}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-text-secondary cursor-pointer data-[selected=true]:bg-white/5 data-[selected=true]:text-text-primary"
            >
              <FileDown size={15} className="text-accent-cyan" />
              Download resume
            </Command.Item>
            <Command.Item
              onSelect={() => window.open(profile.github, "_blank")}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-text-secondary cursor-pointer data-[selected=true]:bg-white/5 data-[selected=true]:text-text-primary"
            >
              <GithubIcon size={15} className="text-accent-cyan" />
              Open GitHub profile
            </Command.Item>
            <Command.Item
              onSelect={() => window.open(`mailto:${profile.email}`, "_blank")}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-text-secondary cursor-pointer data-[selected=true]:bg-white/5 data-[selected=true]:text-text-primary"
            >
              <Mail size={15} className="text-accent-cyan" />
              Send an email
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
