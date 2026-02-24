const PIPELINE = [
  {
    title: "Client request",
    description:
      "The dashboard sends secure requests for compute, storage, and billing data.",
  },
  {
    title: "Serverless routes",
    description:
      "Next.js API routes authenticate, fetch, and normalize AWS telemetry.",
  },
  {
    title: "AWS services",
    description:
      "EC2, S3, CloudWatch, and Cost Explorer provide raw operational signals.",
  },
  {
    title: "Curated response",
    description:
      "Only safe, structured JSON is returned to the client for rendering.",
  },
] as const;

const PRINCIPLES = [
  {
    title: "Credential isolation",
    desc: "Secrets stay on the server and never reach the browser.",
  },
  {
    title: "Least privilege",
    desc: "IAM policies limit access to read only telemetry endpoints.",
  },
  {
    title: "Fast by default",
    desc: "Serverless delivery and Suspense keep first paint responsive.",
  },
  {
    title: "Composable modules",
    desc: "Each service view can evolve without breaking the core.",
  },
] as const;

export function Architecture() {
  return (
    <section id="architecture" className="relative border-t-2 border-foreground reveal-soft reveal-delay-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">
              Architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-foreground sm:text-4xl">
              Built for trust, speed, and clear data flow
            </h2>
            <p className="mt-5 text-sm text-foreground/70">
              The backend is a set of serverless endpoints that pull telemetry
              using scoped credentials. The client only receives normalized
              payloads and renders them with Suspense for near instant load.
            </p>

            <div className="mt-8 space-y-4">
              {PIPELINE.map((step, index) => (
                <div
                  key={step.title}
                  className="flex items-start gap-4 border-2 border-foreground bg-surface px-4 py-4 shadow-[6px_6px_0_0_#1a1a1a] hover-lift"
                >
                  <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-heirlock-green text-xs font-semibold text-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase text-foreground">
                      {step.title}
                    </p>
                    <p className="text-xs font-mono text-foreground/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-foreground bg-surface px-6 py-6 shadow-[6px_6px_0_0_#1a1a1a]">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">
              Design principles
            </p>
            <div className="mt-6 space-y-4">
              {PRINCIPLES.map((principle, index) => (
                <div
                  key={principle.title}
                  className={`border-2 border-foreground px-4 py-4 hover-lift ${
                    index % 2 === 0 ? "bg-heirlock-blue" : "bg-heirlock-pink"
                  }`}
                >
                  <p className="text-sm font-semibold uppercase text-foreground">
                    {principle.title}
                  </p>
                  <p className="text-xs font-mono text-foreground/70">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
