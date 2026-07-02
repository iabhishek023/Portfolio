import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { GithubIcon } from "./icons/BrandIcons";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeader
        command=""
        title="Selected projects"
        description="A mix of production work and things I built to learn something new."
      />

      <div className="space-y-5">
        {featured.map((p) => (
          <Reveal key={p.name}>
            <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-accent-green mb-2">
                    Featured
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-text-primary">
                    {p.name}
                  </h3>
                  <p className="text-accent-cyan text-sm mt-1">{p.tagline}</p>
                </div>
                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="glass glass-hover flex items-center gap-1.5 rounded-full px-4 py-2 text-xs text-text-primary"
                    >
                      <GithubIcon size={14} /> Code
                    </a>
                  )}
                  {p.paper && (
                    <a
                      href={p.paper}
                      target="_blank"
                      rel="noreferrer"
                      className="glass glass-hover flex items-center gap-1.5 rounded-full px-4 py-2 text-xs text-text-primary"
                    >
                      <ExternalLink size={14} /> Read paper
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-indigo to-accent-cyan px-4 py-2 text-xs font-medium text-white"
                    >
                      <ExternalLink size={14} /> Live demo
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-text-secondary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-text-primary">
                {p.name}
              </h3>
              <p className="text-accent-cyan text-xs mt-1">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-text-secondary"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-cyan transition-colors"
                  >
                    <GithubIcon size={13} /> Code
                  </a>
                )}
                {p.paper && (
                  <a
                    href={p.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-cyan transition-colors"
                  >
                    <ExternalLink size={13} /> Read paper
                  </a>
                )}
                {!p.github && !p.paper && (
                  <span className="font-mono text-[11px] text-text-muted">
                    add repo link
                  </span>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-cyan transition-colors"
                  >
                    <ExternalLink size={13} /> Demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
