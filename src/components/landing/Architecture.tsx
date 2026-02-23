export function Architecture() {
  return (
    <section
      id="architecture"
      className="relative border-t-2 border-foreground"
    >
      {/* Section header */}
      <div className="border-b-2 border-foreground bg-surface px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
            // SYSTEM_ARCHITECTURE
          </h2>
          <span className="font-mono text-xs tracking-wider text-foreground/40">
            DATA FLOW DIAGRAM
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* ASCII-style architecture diagram */}
        <div className="overflow-x-auto">
          <pre className="font-mono text-xs sm:text-sm leading-relaxed text-foreground/70 whitespace-pre">
            {`
  ┌─────────────────────────────────────────────────────────────┐
  │                      CLIENT (BROWSER)                       │
  │                                                             │
  │   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
  │   │ EC2 View │  │ S3 View  │  │ Billing  │  │ Alerts   │  │
  │   │  React   │  │  React   │  │  React   │  │  React   │  │
  │   │ Suspense │  │ Suspense │  │ Suspense │  │ Suspense │  │
  │   └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
  │        │              │              │              │        │
  │        └──────────────┴──────┬───────┴──────────────┘        │
  │                              │                               │
  │                     fetch('/api/*')                          │
  │                        JSON only                            │
  │                     ↕ NO AWS CREDS                          │
  └──────────────────────┬───────────────────────────────────────┘
                         │
                         │ HTTPS
                         │
  ┌──────────────────────┴───────────────────────────────────────┐
  │                   NEXT.JS API ROUTES                         │
  │                  (Serverless Functions)                       │
  │                                                              │
  │   ┌──────────────────────────────────────────────────────┐   │
  │   │  /api/ec2     → DescribeInstances, GetMetricData     │   │
  │   │  /api/s3      → ListBuckets, GetBucketMetrics        │   │
  │   │  /api/billing → GetCostAndUsage                      │   │
  │   │  /api/auth    → NextAuth.js session management       │   │
  │   └──────────────────────────┬───────────────────────────┘   │
  │                              │                               │
  │                   AWS SDK v3 (server-side)                   │
  │                   Scoped IAM credentials                    │
  │                   env: AWS_ACCESS_KEY_ID                    │
  │                   env: AWS_SECRET_ACCESS_KEY                │
  └──────────────────────┬───────────────────────────────────────┘
                         │
                         │ AWS API calls
                         │
  ┌──────────────────────┴───────────────────────────────────────┐
  │                      AWS SERVICES                            │
  │                                                              │
  │   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
  │   │   EC2    │  │    S3    │  │CloudWatch│  │Cost Expl.│   │
  │   │         │  │         │  │         │  │         │   │
  │   └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
  └──────────────────────────────────────────────────────────────┘
`}
          </pre>
        </div>

        {/* Architecture principles */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {[
            {
              num: "01",
              title: "CREDENTIAL ISOLATION",
              desc: "AWS keys exist only in server environment. Client receives sanitized JSON payloads.",
            },
            {
              num: "02",
              title: "SERVERLESS BACKEND",
              desc: "No Express, no standalone server. Next.js API routes handle all data fetching.",
            },
            {
              num: "03",
              title: "ASYNC STREAMING",
              desc: "React Suspense boundaries ensure instant paint. Metrics load progressively.",
            },
            {
              num: "04",
              title: "SCOPED ACCESS",
              desc: "IAM policies follow least privilege. Read-only access to monitoring endpoints only.",
            },
          ].map((principle) => (
            <div
              key={principle.num}
              className="border-2 border-foreground/10 p-6 hover:border-accent transition-colors group"
            >
              <span className="font-mono text-3xl font-black text-foreground/10 group-hover:text-accent/30 transition-colors">
                {principle.num}
              </span>
              <h3 className="mt-2 font-mono text-sm font-bold tracking-wider text-foreground group-hover:text-accent transition-colors">
                {principle.title}
              </h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-foreground/40 group-hover:text-foreground/60 transition-colors">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
