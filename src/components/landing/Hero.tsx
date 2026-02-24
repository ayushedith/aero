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
      <div className="absolute inset-0 bg-grid-soft opacity-70" />
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute -top-20 right-[-120px] h-[320px] w-[320px] border-2 border-foreground bg-heirlock-pink" />
      <div className="absolute bottom-[-120px] left-[-120px] h-[300px] w-[300px] border-2 border-foreground bg-heirlock-green" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-3 border-2 border-foreground bg-heirlock-yellow px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground">
            <span className="h-2 w-2 bg-foreground" />
            Serverless Cloud Monitor
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Brutalist clarity for AWS telemetry
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            AERO aggregates compute, storage, and billing telemetry into a
            single dashboard. It uses secure serverless routes to deliver clear
            metrics without exposing credentials.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="brutalist-cutout inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em]"
            >
              Launch dashboard
            </Link>
            <a
              href="#architecture"
              className="brutalist-panel inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em]"
            >
              View architecture
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            {METRICS.map((metric, index) => (
              <div
                key={metric.label}
                className={`brutalist-card px-4 py-4 ${
                  index % 2 === 0 ? "bg-heirlock-blue" : "bg-heirlock-pink"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  {metric.value}
                </p>
                <p className="text-xs text-foreground/70">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="brutalist-panel px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Live telemetry
                </p>
                <p className="text-xs text-muted">Updated just now</p>
              </div>
              <div className="brutalist-chip px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
                Region us east 1
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {SIGNALS.map((signal, index) => {
                const Icon = signal.icon;
                return (
                  <div
                    key={signal.label}
                    className={`flex items-center justify-between border-2 border-foreground px-4 py-4 ${
                      index % 2 === 0 ? "bg-heirlock-green" : "bg-heirlock-blue"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center border-2 border-foreground bg-background">
                        <Icon className="h-5 w-5 text-foreground" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {signal.label}
                        </p>
                        <p className="text-xs text-foreground/70">{signal.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-foreground" />
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-2 border-foreground bg-heirlock-yellow px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                Budget status
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">
                  78 percent of monthly target
                </p>
                <span className="text-xs text-foreground/70">3 days left</span>
              </div>
              <div className="mt-3 h-2 w-full border-2 border-foreground bg-background">
                <div className="h-full w-[78%] stripe-accent" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-4 hidden w-44 border-2 border-foreground bg-heirlock-pink px-4 py-4 text-xs text-foreground lg:block">
            Next update in 36 seconds
          </div>
        </div>
      </div>
    </section>
  );
}
