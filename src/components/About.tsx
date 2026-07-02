import { about } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeader command="" title="About" />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5">
          {about.summary.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-text-secondary leading-relaxed text-[15px]">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="md:col-span-2 space-y-3">
          {about.highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.08}>
              <div className="glass glass-hover rounded-xl p-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent-cyan mb-1">
                  {h.label}
                </p>
                <p className="text-sm text-text-primary">{h.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
