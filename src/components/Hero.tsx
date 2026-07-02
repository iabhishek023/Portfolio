"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const roles = [
  "Software Developer",
  "Backend Engineer",
  "REST API Builder",
  "Full-Stack Problem Solver",
];

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }, speed);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 ambient-glow" aria-hidden="true" />
      <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
          </span>
          <span className="font-mono text-xs text-text-secondary">
            {profile.availability} &middot; {profile.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-mono text-lg sm:text-xl text-accent-cyan h-8"
        >
          <span aria-live="polite">{typed}</span>
          <span className="ml-0.5 inline-block w-[2px] h-5 bg-accent-cyan align-middle animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-text-secondary leading-relaxed"
        >
          {profile.tagline} Currently at{" "}
          <span className="text-text-primary">LendingPlate</span>, shipping backend
          systems for a live fintech platform.{" "}
          <span className="gradient-text font-medium">{profile.yearsExperience} years</span>{" "}
          of hands-on production experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => go("projects")}
            className="rounded-full bg-gradient-to-r from-accent-indigo to-accent-cyan px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-indigo/25 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            View my work
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="glass glass-hover flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-text-primary"
          >
            <FileDown size={16} />
            Resume
          </a>
          <div className="flex items-center gap-1 ml-1">
            {[
              { href: profile.github, icon: GithubIcon, label: "GitHub" },
              { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full text-text-secondary hover:text-accent-cyan hover:bg-white/5 transition-colors"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => go("about")}
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-cyan transition-colors"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
