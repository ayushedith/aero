import {
  Activity,
  Database,
  DollarSign,
  Shield,
  Zap,
  Eye,
} from "lucide-react";

const FEATURES = [
  {
    icon: Activity,
    title: "EC2 HEALTH",
    description:
      "Real-time instance monitoring. CPU, memory, network I/O — raw metrics, no abstraction layers.",
    tag: "COMPUTE",
  },
  {
    icon: Database,
    title: "S3 ANALYTICS",
    description:
      "Bucket-level storage metrics. Object counts, size distributions, access patterns exposed.",
    tag: "STORAGE",
  },
  {
    icon: DollarSign,
    title: "COST TRACKING",
    description:
      "Billing breakdown by service. Daily burn rate calculations. Budget threshold alerts.",
    tag: "BILLING",
  },
  {
    icon: Shield,
    title: "ZERO EXPOSURE",
    description:
      "AWS credentials never touch the browser. Server-side API routes with tightly scoped IAM policies.",
    tag: "SECURITY",
  },
  {
    icon: Zap,
    title: "SERVERLESS",
    description:
      "No servers to manage. Next.js API routes act as your backend. Deploy anywhere.",
    tag: "INFRA",
  },
  {
    icon: Eye,
    title: "SUSPENSE UI",
    description:
      "Instant page loads with React Suspense. Skeleton states while telemetry streams in async.",
    tag: "UX",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="relative border-t-2 border-foreground">
      {/* Section header */}
      <div className="border-b-2 border-foreground bg-surface px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
            // FEATURE_SET
          </h2>
          <span className="font-mono text-xs tracking-wider text-foreground/40">
            [{FEATURES.length}] MODULES LOADED
          </span>
        </div>
      </div>

      {/* Feature grid */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group border-2 border-foreground/10 p-8 hover:border-accent hover:bg-accent/[0.02] transition-all relative overflow-hidden"
              >
                {/* Index number */}
                <span className="absolute top-3 right-4 font-mono text-[80px] font-black leading-none text-foreground/[0.03] group-hover:text-accent/[0.08] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Tag */}
                <span className="inline-block border border-foreground/20 px-2 py-0.5 font-mono text-[10px] tracking-widest text-foreground/40 group-hover:border-accent/50 group-hover:text-accent/70 transition-colors mb-6">
                  {feature.tag}
                </span>

                {/* Icon */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-foreground/20 group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <Icon className="h-5 w-5 text-foreground/50 group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-mono text-lg font-bold tracking-wider text-foreground group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed text-foreground/50 group-hover:text-foreground/70 transition-colors">
                  {feature.description}
                </p>

                {/* Bottom bar on hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
