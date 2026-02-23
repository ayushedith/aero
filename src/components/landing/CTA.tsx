import Link from "next/link";

export function CTA() {
  return (
    <section className="relative border-t-2 border-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        {/* Brutalist large text */}
        <h2 className="font-mono text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.95]">
          STOP GUESSING.
          <br />
          <span className="text-accent">START MONITORING.</span>
        </h2>

        <p className="mt-8 mx-auto max-w-lg font-mono text-sm text-foreground/50 leading-relaxed">
          Deploy your own cloud infrastructure monitor in minutes. Connect your
          AWS credentials, configure your IAM policies, and get real-time
          visibility into your infrastructure.
        </p>

        {/* Action buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="border-2 border-accent bg-accent px-10 py-5 font-mono text-base font-bold uppercase tracking-widest text-background hover:bg-transparent hover:text-accent transition-all"
          >
            LAUNCH DASHBOARD →
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-foreground/30 px-10 py-5 font-mono text-base uppercase tracking-widest text-foreground/60 hover:border-foreground hover:text-foreground transition-all"
          >
            VIEW SOURCE ↗
          </a>
        </div>

        {/* Version tag */}
        <div className="mt-16 inline-block border border-foreground/10 px-4 py-2">
          <span className="font-mono text-[10px] tracking-widest text-foreground/30">
            AERO v0.1.0 — BUILT AS PART OF 12 PROJECTS IN 12 MONTHS
          </span>
        </div>
      </div>
    </section>
  );
}
