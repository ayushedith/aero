import { Radar } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-foreground bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-foreground bg-heirlock-blue">
                <Radar className="h-4 w-4 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
                  AERO
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted">
                  Serverless monitor
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/70">
              AERO delivers a clean view of AWS telemetry with secure serverless
              data flows and a focus on fast decision making.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Stack
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
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
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              {[
                { label: "GitHub", href: "https://github.com" },
                { label: "Architecture", href: "#architecture" },
                { label: "Insights", href: "#insights" },
                { label: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="border-b-2 border-transparent hover:border-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t-2 border-foreground pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} AERO. 12 projects in 12 months.</span>
          <span>Built by Ayush for the portfolio challenge.</span>
        </div>
      </div>
    </footer>
  );
}
