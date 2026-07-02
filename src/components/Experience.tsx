import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeader command="" title="Experience" />

      <div className="relative">
        <div
          className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-[19px]"
          aria-hidden="true"
        />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-indigo to-accent-cyan ring-4 ring-bg" />
                </div>

                <div className="glass glass-hover w-full rounded-xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {job.role} &middot; {job.company}
                    </h3>
                    <span className="font-mono text-xs text-accent-cyan whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-text-muted">{job.location}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-sm text-text-secondary leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
