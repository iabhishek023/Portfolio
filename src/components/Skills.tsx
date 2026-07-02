import { skills } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeader
        command=""
        title="Technical skills"
        description="Grouped by where I actually use them day to day."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.06}>
            <div className="glass glass-hover h-full rounded-xl p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-accent-cyan mb-3">
                {category}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-white/[0.03] px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
