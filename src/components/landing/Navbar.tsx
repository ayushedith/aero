"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Terminal", href: "#terminal" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="h-5 w-5 text-accent" />
          <span className="font-mono text-lg font-bold tracking-widest text-foreground group-hover:text-accent transition-colors">
            AERO<span className="text-accent">_</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 font-mono text-sm uppercase tracking-wider text-foreground/70 hover:text-accent hover:bg-accent/5 border border-transparent hover:border-accent/30 transition-all"
            >
              [{link.label}]
            </a>
          ))}
          <Link
            href="/dashboard"
            className="ml-4 border-2 border-accent bg-accent/10 px-5 py-2 font-mono text-sm font-bold uppercase tracking-wider text-accent hover:bg-accent hover:text-background transition-all"
          >
            Launch →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border-2 border-foreground p-2 hover:border-accent hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t-2 border-foreground bg-background">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border px-6 py-4 font-mono text-sm uppercase tracking-wider text-foreground/70 hover:bg-accent/5 hover:text-accent transition-colors"
            >
              {'>'} {link.label}
            </a>
          ))}
          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="block border-b border-accent bg-accent/10 px-6 py-4 font-mono text-sm font-bold uppercase tracking-wider text-accent hover:bg-accent hover:text-background transition-all"
          >
            {'>'} LAUNCH DASHBOARD →
          </Link>
        </div>
      )}
    </nav>
  );
}
