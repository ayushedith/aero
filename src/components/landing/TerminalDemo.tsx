"use client";

import { useEffect, useState } from "react";

const TERMINAL_LINES = [
  { type: "input" as const, text: "$ aero status --region us-east-1" },
  { type: "output" as const, text: "" },
  { type: "output" as const, text: "  AERO Cloud Monitor v0.1.0" },
  { type: "output" as const, text: "  ─────────────────────────────────────" },
  { type: "output" as const, text: "" },
  { type: "output" as const, text: "  ▸ Fetching EC2 instances..." },
  {
    type: "success" as const,
    text: "  ✓ 4 instances found (3 running, 1 stopped)",
  },
  { type: "output" as const, text: "" },
  { type: "output" as const, text: "  ▸ Scanning S3 buckets..." },
  {
    type: "success" as const,
    text: "  ✓ 7 buckets | 2.4 TB total | 847K objects",
  },
  { type: "output" as const, text: "" },
  { type: "output" as const, text: "  ▸ Pulling billing data..." },
  {
    type: "success" as const,
    text: "  ✓ MTD spend: $142.87 | Projected: $231.40",
  },
  {
    type: "warning" as const,
    text: "  ⚠ Budget alert: 78% of monthly limit reached",
  },
  { type: "output" as const, text: "" },
  { type: "output" as const, text: "  ─────────────────────────────────────" },
  {
    type: "output" as const,
    text: "  Dashboard ready at https://localhost:3000",
  },
  { type: "output" as const, text: "" },
  { type: "input" as const, text: "$ █" },
];

export function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let lineIndex = 0;
          const timer = setInterval(() => {
            lineIndex++;
            setVisibleLines(lineIndex);
            if (lineIndex >= TERMINAL_LINES.length) {
              clearInterval(timer);
            }
          }, 120);

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById("terminal-demo");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="terminal" className="relative border-t-2 border-foreground">
      {/* Section header */}
      <div className="border-b-2 border-foreground bg-surface px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
            // TERMINAL_OUTPUT
          </h2>
          <span className="font-mono text-xs tracking-wider text-foreground/40">
            LIVE PREVIEW
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div
          id="terminal-demo"
          className="border-2 border-foreground/30 bg-[#0c0c0c] overflow-hidden"
        >
          {/* Terminal title bar */}
          <div className="flex items-center justify-between border-b-2 border-foreground/20 bg-[#1a1a1a] px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 border border-foreground/30 bg-danger/70" />
              <span className="h-3 w-3 border border-foreground/30 bg-warning/70" />
              <span className="h-3 w-3 border border-foreground/30 bg-accent/70" />
            </div>
            <span className="font-mono text-[10px] tracking-wider text-foreground/30">
              aero — bash — 80x24
            </span>
            <span className="font-mono text-[10px] text-foreground/20">
              ×
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 min-h-[400px]">
            {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={`font-mono text-sm leading-7 ${
                  line.type === "input"
                    ? "text-foreground"
                    : line.type === "success"
                    ? "text-accent"
                    : line.type === "warning"
                    ? "text-warning"
                    : "text-foreground/60"
                }`}
              >
                {line.text || "\u00A0"}
              </div>
            ))}
          </div>
        </div>

        {/* Caption */}
        <p className="mt-4 font-mono text-xs text-foreground/30 text-center">
          ↑ Simulated output. Actual data fetched from your AWS account via
          server-side API routes.
        </p>
      </div>
    </section>
  );
}
