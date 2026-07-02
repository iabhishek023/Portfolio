import { FileDown } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Resume() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <div className="glass ambient-glow relative overflow-hidden rounded-2xl px-8 py-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary">
            Want the short version?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
            Grab a copy of my resume — everything on this page, in a
            recruiter-friendly PDF.
          </p>
          <a
            href={profile.resumeUrl}
            download
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-indigo to-accent-cyan px-7 py-3 text-sm font-medium text-white shadow-lg shadow-accent-indigo/25 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <FileDown size={16} />
            Download resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
