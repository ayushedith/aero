import Link from "next/link";

export function CTA() {
  return (
    <section id="cta" className="relative border-t-2 border-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden border-2 border-foreground bg-foreground px-8 py-12 text-background shadow-[8px_8px_0_0_#1a1a1a]">
          <div className="absolute inset-0 stripe-accent opacity-20" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-background/70">
                Ready to go
              </p>
              <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-background sm:text-4xl">
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
                className="inline-flex items-center justify-center border-2 border-background bg-background px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground"
              >
                Launch dashboard
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-background px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-background/90"
              >
                View source
              </a>
              <span className="text-[10px] uppercase tracking-[0.25em] text-background/70">
                Built as part of the 12 projects challenge
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
