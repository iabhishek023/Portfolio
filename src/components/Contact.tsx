"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeader
        command=""
        title="Let's talk"
        description="Open to full-time roles and interesting backend/full-stack problems. The fastest way to reach me is email."
      />

      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-2 space-y-3">
          {[
            { href: `mailto:${profile.email}`, icon: Mail, label: "Email", value: profile.email },
            { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn", value: "Connect with me" },
            { href: profile.github, icon: GithubIcon, label: "GitHub", value: "See my code" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="glass glass-hover flex items-center gap-4 rounded-xl p-4"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/[0.04]">
                <item.icon size={17} className="text-accent-cyan" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
                  {item.label}
                </p>
                <p className="text-sm text-text-primary">{item.value}</p>
              </div>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={submit} className="glass space-y-4 rounded-xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-border bg-white/[0.03] px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-border bg-white/[0.03] px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full resize-none rounded-lg border border-border bg-white/[0.03] px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted"
                placeholder="What are you working on?"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-indigo to-accent-cyan px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send size={15} />
              Send message
            </button>
            <p className="font-mono text-[11px] text-text-muted">
              {""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
