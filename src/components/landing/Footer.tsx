import { Radar } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-background">
                <Radar className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">AERO</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted">
                  Serverless monitor
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/60">
              AERO delivers a clean view of AWS telemetry with secure serverless
              data flows and a focus on fast decision making.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Stack
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/60">
              {["Next.js App Router", "AWS SDK v3", "Tailwind CSS", "Tremor", "NextAuth.js"].map(
                (tech) => (
                  <li key={tech}>{tech}</li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Links
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/60">
              {[
                { label: "GitHub", href: "https://github.com" },
                { label: "Architecture", href: "#architecture" },
                { label: "Insights", href: "#insights" },
                { label: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-foreground/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} AERO. 12 projects in 12 months.</span>
          <span>Built by Ayush for the portfolio challenge.</span>
        </div>
      </div>
    </footer>
  );
}
