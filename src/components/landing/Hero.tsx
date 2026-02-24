import Link from "next/link";
import { Activity, Database, ShieldCheck, ArrowUpRight } from "lucide-react";

const METRICS = [
  { label: "EC2 instances", value: "4", note: "3 running" },
  { label: "S3 buckets", value: "7", note: "2.4 TB" },
  { label: "Monthly spend", value: "$142", note: "Forecast $231" },
  { label: "Uptime", value: "99.97%", note: "Last 30 days" },
] as const;

const SIGNALS = [
  { label: "Compute", icon: Activity, value: "CPU steady" },
  { label: "Storage", icon: Database, value: "Ingress normal" },
  { label: "Security", icon: ShieldCheck, value: "No incidents" },
] as const;

export function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft opacity-60" />
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute -top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.35),transparent_65%)] blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,164,0.35),transparent_65%)] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-surface px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-muted">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Serverless Cloud Monitor
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            A focused monitor for AWS teams that want signal, not noise
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            AERO aggregates compute, storage, and billing telemetry into a
            single dashboard. It uses secure serverless routes to deliver clear
            metrics without exposing credentials.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-background shadow-sm hover:bg-primary hover:text-white transition-colors"
            >
              Launch dashboard
            </Link>
            <a
              href="#architecture"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-surface px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground hover:border-foreground/60 transition-colors"
            >
              View architecture
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-foreground/10 bg-surface px-4 py-4 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  {metric.value}
                </p>
                <p className="text-xs text-muted">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-foreground/15 bg-surface px-6 py-6 panel-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Live telemetry
                </p>
                <p className="text-xs text-muted">Updated just now</p>
              </div>
              <div className="rounded-full border border-foreground/10 bg-surface-alt px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted">
                Region us east 1
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div
                    key={signal.label}
                    className="flex items-center justify-between rounded-2xl border border-foreground/10 bg-surface-alt px-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                        <Icon className="h-5 w-5 text-primary" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {signal.label}
                        </p>
                        <p className="text-xs text-muted">{signal.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-foreground/40" />
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-foreground/10 bg-background px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Budget status
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">
                  78 percent of monthly target
                </p>
                <span className="text-xs text-muted">3 days left</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-surface-alt">
                <div className="h-2 w-[78%] rounded-full bg-[linear-gradient(90deg,#ff5a1f,#ff8a4c,#0ea5a4)] shimmer" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-4 hidden w-40 rounded-2xl border border-foreground/10 bg-surface px-4 py-4 text-xs text-muted shadow-sm lg:block float-fast">
            Next update in 36 seconds
          </div>
        </div>
      </div>
    </section>
  );
}
