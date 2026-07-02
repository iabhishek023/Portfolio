import { Reveal } from "./Reveal";

export function SectionHeader({
  command,
  title,
  description,
}: {
  command: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="font-mono text-sm text-accent-cyan mb-3">
        <span className="text-text-muted">$</span> {command}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
