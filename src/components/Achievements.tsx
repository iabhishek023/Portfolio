import { Award, Code2, FileText, Trophy } from "lucide-react";
import { achievements } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons = [Code2, Award, FileText, Trophy];

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeader command="" title="Achievements" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => {
          const Icon = icons[i % icons.length];
          const isPlaceholder = a.value === "TODO";
          return (
            <Reveal key={a.label} delay={i * 0.07}>
              <div className="glass glass-hover h-full rounded-xl p-5">
                <Icon size={18} className="text-accent-indigo mb-3" />
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent-cyan mb-1">
                  {a.label}
                </p>
                <p
                  className={`text-sm ${
                    isPlaceholder ? "text-text-muted italic" : "text-text-primary"
                  }`}
                >
                  {isPlaceholder ? "Add your details" : a.value}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
