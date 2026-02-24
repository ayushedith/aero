import {
  Activity,
  Database,
  DollarSign,
  Shield,
  Zap,
  Layers,
} from "lucide-react";

const FEATURES = [
  {
    icon: Activity,
    title: "Compute health",
    description:
      "Track instance load and capacity trends with clear signal summaries and drill downs.",
    tag: "Compute",
  },
  {
    icon: Database,
    title: "Storage visibility",
    description:
      "Monitor bucket growth and access patterns without jumping between consoles.",
    tag: "Storage",
  },
  {
    icon: DollarSign,
    title: "Cost clarity",
    description:
      "Follow daily spend, forecast month end totals, and spot sudden cost spikes.",
    tag: "Billing",
  },
  {
    icon: Shield,
    title: "Credential isolation",
    description:
      "AWS keys remain server side. Clients only receive sanitized telemetry payloads.",
    tag: "Security",
  },
  {
    icon: Zap,
    title: "Serverless delivery",
    description:
      "Next.js API routes replace heavy backends, keeping deployments light and fast.",
    tag: "Infra",
  },
  {
    icon: Layers,
    title: "Insight layering",
    description:
      "Combine raw metrics with curated summaries to move from data to decisions.",
    tag: "UX",
  },
] as const;

export function Features() {
  return (
    <section id="signals" className="relative border-t-2 border-foreground reveal-soft reveal-delay-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">
              Signal suite
            </p>
            <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-foreground sm:text-4xl">
              Everything you need to understand your cloud footprint
            </h2>
          </div>
          <p className="max-w-xl text-sm text-foreground/70">
            Each module is focused, fast, and designed to reduce time spent in
            the AWS console. AERO prioritizes clarity over volume.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group border-2 border-foreground bg-surface p-6 shadow-[6px_6px_0_0_#1a1a1a] hover-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="border-2 border-foreground bg-heirlock-yellow px-3 py-1 text-[10px] font-mono uppercase tracking-[0.24em] text-foreground">
                    {feature.tag}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center border-2 border-foreground bg-heirlock-blue">
                    <Icon className="h-5 w-5 text-foreground" />
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold uppercase text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/70">
                  {feature.description}
                </p>
                <div className="mt-6 h-2 w-full border-2 border-foreground bg-background">
                  <div className="h-full w-2/3 stripe-accent transition-all group-hover:w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
