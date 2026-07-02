import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind.
        </p>
        <p className="font-mono text-xs text-text-muted">
          <span className="text-accent-green">●</span> {profile.availability}
        </p>
      </div>
    </footer>
  );
}
