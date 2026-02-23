import { Terminal } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-foreground bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-4 w-4 text-accent" />
              <span className="font-mono text-sm font-bold tracking-widest">
                AERO<span className="text-accent">_</span>
              </span>
            </div>
            <p className="font-mono text-xs text-foreground/40 leading-relaxed">
              A lean, serverless cloud infrastructure monitor. Built with
              Next.js, AWS SDK v3, and a distaste for enterprise bloat.
            </p>
          </div>

          {/* Stack */}
          <div>
            <h3 className="font-mono text-xs font-bold tracking-widest text-foreground/60 mb-4">
              // STACK
            </h3>
            <ul className="space-y-2">
              {[
                "Next.js (App Router)",
                "AWS SDK v3",
                "Tailwind CSS",
                "Tremor",
                "NextAuth.js",
              ].map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-xs text-foreground/40 hover:text-accent transition-colors"
                >
                  → {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-mono text-xs font-bold tracking-widest text-foreground/60 mb-4">
              // LINKS
            </h3>
            <ul className="space-y-2">
              {[
                { label: "GitHub", href: "https://github.com" },
                { label: "Documentation", href: "#" },
                { label: "Architecture", href: "#architecture" },
                { label: "Report Bug", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-xs text-foreground/40 hover:text-accent transition-colors"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-wider text-foreground/25">
            © {year} AERO. 12 PROJECTS IN 12 MONTHS. ALL SYSTEMS NOMINAL.
          </span>
          <span className="font-mono text-[10px] tracking-wider text-foreground/25">
            BUILT BY AYUSH — NOT AN ENTERPRISE PRODUCT
          </span>
        </div>
      </div>
    </footer>
  );
}
