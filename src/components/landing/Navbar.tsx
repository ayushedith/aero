"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Signals", href: "#signals" },
  { label: "Architecture", href: "#architecture" },
  { label: "Insights", href: "#insights" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center hover-lift">
            <Image
              src="/logo.png"
              alt="AERO"
              width={65}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          {/* <div>
            <div className="text-base font-semibold uppercase tracking-[0.32em] text-foreground">
              AERO
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-muted">
              Cloud Monitor
            </div>
          </div> */}
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-2 border-transparent px-3 py-2 text-xs font-mono font-semibold uppercase tracking-[0.22em] text-foreground/70 hover:border-foreground hover:text-foreground transition-colors hover-lift"
            >
              {link.label}
            </a>
          ))}
          <span className="brutalist-chip px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em]">
            Preview
          </span>
          <Link
            href="/dashboard"
            className="brutalist-cutout px-5 py-2 text-xs font-mono font-semibold uppercase tracking-[0.22em] hover-lift press-down focus-ring"
          >
            Launch
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border-2 border-foreground bg-heirlock-yellow p-2 text-foreground hover-lift press-down focus-ring"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-foreground bg-background">
          <div className="px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-2 border-foreground bg-surface px-4 py-3 text-xs font-mono font-semibold uppercase tracking-[0.22em] text-foreground hover-lift"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="brutalist-cutout inline-flex w-full items-center justify-center px-5 py-3 text-xs font-mono font-semibold uppercase tracking-[0.22em] hover-lift press-down focus-ring"
            >
              Launch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
