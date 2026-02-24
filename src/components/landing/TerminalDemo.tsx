const INSIGHTS = [
  {
    time: "09:24",
    title: "EC2 load stable",
    detail: "Average CPU holding at 31 percent across three instances",
  },
  {
    time: "09:27",
    title: "S3 growth detected",
    detail: "New uploads increased storage by 18 GB in the last hour",
  },
  {
    time: "09:31",
    title: "Cost anomaly watch",
    detail: "Compute spend trending above baseline by 9 percent",
  },
  {
    time: "09:35",
    title: "Security posture",
    detail: "No new access events outside expected regions",
  },
] as const;

const BARS = [32, 45, 38, 62, 58, 41, 72, 66, 54, 61, 49, 57] as const;

export function TerminalDemo() {
  return (
    <section id="insights" className="relative border-t-2 border-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Insights
            </p>
            <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-foreground sm:text-4xl">
              Streamlined telemetry that highlights what matters
            </h2>
            <p className="mt-5 text-sm text-foreground/70">
              Alerts are summarized in plain language so you can decide quickly.
              Every signal is derived from server side AWS SDK calls and only
              shows safe data.
            </p>

            <div className="mt-8 space-y-4">
              {INSIGHTS.map((insight) => (
                <div
                  key={insight.time}
                  className="border-2 border-foreground bg-surface px-5 py-4 shadow-[6px_6px_0_0_#1a1a1a]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase text-foreground">
                      {insight.title}
                    </p>
                    <span className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                      {insight.time}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-foreground/70">
                    {insight.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md">
            <div className="border-2 border-foreground bg-surface px-6 py-6 shadow-[6px_6px_0_0_#1a1a1a]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase text-foreground">
                    Live signal strength
                  </p>
                  <p className="text-xs text-foreground/70">Last 60 minutes</p>
                </div>
                <span className="border-2 border-foreground bg-heirlock-yellow px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground">
                  Stream
                </span>
              </div>

              <div className="mt-6 grid grid-cols-12 items-end gap-2">
                {BARS.map((value, index) => (
                  <div
                    key={index}
                    className="bg-foreground"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>

              <div className="mt-6 border-2 border-foreground bg-heirlock-blue px-4 py-4">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                  Signal confidence
                </p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  92 percent
                </p>
                <p className="text-xs text-foreground/70">
                  Based on CloudWatch and Cost Explorer stability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
