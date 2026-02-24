import Link from "next/link";

export function CTA() {
  return (
    <section id="cta" className="relative border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground px-8 py-12 text-background shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,164,0.35),transparent_65%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-background/70">
                Ready to go
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-background sm:text-4xl">
                Turn AWS telemetry into confident decisions
              </h2>
              <p className="mt-4 text-sm text-background/80">
                Connect your AWS account and see compute, storage, and billing
                signals in one place. AERO is built for engineers who want
                clarity, speed, and safe data flows.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end lg:justify-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-background/20 bg-background px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground shadow-sm hover:bg-primary hover:text-white transition-colors"
              >
                Launch dashboard
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-background/90 hover:bg-background/10 transition-colors"
              >
                View source
              </a>
              <span className="text-[10px] uppercase tracking-[0.25em] text-background/60">
                Built as part of the 12 projects challenge
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
