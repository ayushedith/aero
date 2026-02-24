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
    <section id="architecture" className="relative border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Built for trust, speed, and clear data flow
            </h2>
            <p className="mt-5 text-sm text-foreground/60">
              The backend is a set of serverless endpoints that pull telemetry
              using scoped credentials. The client only receives normalized
              payloads and renders them with Suspense for near instant load.
            </p>

            <div className="mt-8 space-y-4">
              {PIPELINE.map((step, index) => (
                <div
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-foreground/10 bg-surface px-4 py-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="text-xs text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-surface px-6 py-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Design principles
            </p>
            <div className="mt-6 space-y-4">
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-foreground/10 bg-background px-4 py-4"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {principle.title}
                  </p>
                  <p className="text-xs text-muted">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
