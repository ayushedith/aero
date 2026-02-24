import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background px-6 pb-16 pt-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">
              Dashboard
            </p>
            <h1 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-foreground">
              Under construction
            </h1>
          </div>
          <Link
            href="/"
            className="brutalist-cutout px-5 py-2 text-xs font-mono font-semibold uppercase tracking-[0.22em] hover-lift press-down focus-ring"
          >
            Back to home
          </Link>
        </div>

        <section className="brutalist-panel p-8">
          <p className="text-sm text-foreground/80">
            This dashboard is being built. It will surface EC2 health, S3 usage,
            and billing insights using secure serverless routes. Check back soon
            for live telemetry and interactive charts.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="brutalist-card bg-heirlock-blue p-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70">
                Compute
              </p>
              <p className="mt-2 text-sm text-foreground/80">
                Instance health and load trends
              </p>
            </div>
            <div className="brutalist-card bg-heirlock-pink p-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70">
                Storage
              </p>
              <p className="mt-2 text-sm text-foreground/80">
                Bucket growth and access signals
              </p>
            </div>
            <div className="brutalist-card bg-heirlock-green p-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70">
                Billing
              </p>
              <p className="mt-2 text-sm text-foreground/80">
                Spend, forecast, and budget alerts
              </p>
            </div>
            <div className="brutalist-card bg-heirlock-yellow p-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70">
                Security
              </p>
              <p className="mt-2 text-sm text-foreground/80">
                Audit signals and access review
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
