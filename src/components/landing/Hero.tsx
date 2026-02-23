"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowDown } from "lucide-react";

const TITLE_LINES = [
  "SERVERLESS",
  "CLOUD",
  "INFRASTRUCTURE",
  "MONITOR_",
];

const SUBTITLE = "Real-time AWS telemetry. Zero enterprise bloat.";

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [statusDots, setStatusDots] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Stagger title lines
    const lineTimer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= TITLE_LINES.length) {
          clearInterval(lineTimer);
          setTimeout(() => setSubtitleVisible(true), 300);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    // Animate status dots
    intervalRef.current = setInterval(() => {
      setStatusDots((prev) => (prev + 1) % 4);
    }, 500);

    return () => {
      clearInterval(lineTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-20 scanlines">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-20 mx-auto w-full max-w-6xl">
        {/* Status bar */}
        <div className="mb-8 flex items-center gap-3 font-mono text-xs tracking-wider text-foreground/50">
          <span className="inline-block h-2 w-2 bg-accent animate-pulse" />
          <span>SYSTEM STATUS: OPERATIONAL{".".repeat(statusDots)}</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">PID: 2026</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">UPTIME: 99.97%</span>
        </div>

        {/* Main title */}
        <div className="mb-8">
          {TITLE_LINES.map((line, i) => (
            <h1
              key={i}
              className={`font-mono text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter transition-all duration-500 ${
                i < visibleLines
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              } ${i === TITLE_LINES.length - 1 ? "text-accent" : "text-foreground"}`}
            >
              {line}
            </h1>
          ))}
        </div>

        {/* Subtitle */}
        <p
          className={`max-w-xl font-mono text-lg sm:text-xl text-foreground/60 leading-relaxed transition-all duration-700 ${
            subtitleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          {SUBTITLE}
        </p>

        {/* Brutalist info strip */}
        <div
          className={`mt-12 flex flex-wrap gap-0 transition-all duration-700 delay-300 ${
            subtitleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          {[
            { label: "STACK", value: "NEXT.JS + AWS SDK V3" },
            { label: "AUTH", value: "NEXTAUTH.JS" },
            { label: "RENDER", value: "SERVERLESS" },
            { label: "STATUS", value: "IN DEVELOPMENT" },
          ].map((item, i) => (
            <div
              key={i}
              className="border-2 border-foreground/20 px-4 py-3 sm:px-6 sm:py-4 hover:border-accent hover:bg-accent/5 transition-all group"
            >
              <span className="block font-mono text-[10px] tracking-widest text-foreground/40 group-hover:text-accent/60">
                {item.label}
              </span>
              <span className="block font-mono text-xs sm:text-sm font-bold tracking-wider text-foreground group-hover:text-accent">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`mt-12 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
            subtitleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <a
            href="/dashboard"
            className="border-2 border-accent bg-accent px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-background hover:bg-transparent hover:text-accent transition-all inline-flex items-center gap-2"
          >
            <span className="h-2 w-2 bg-background inline-block" />
            ENTER DASHBOARD
          </a>
          <a
            href="#architecture"
            className="border-2 border-foreground/30 px-8 py-4 font-mono text-sm uppercase tracking-widest text-foreground/70 hover:border-foreground hover:text-foreground transition-all inline-flex items-center gap-2"
          >
            VIEW ARCHITECTURE ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#features"
          className="flex flex-col items-center gap-2 font-mono text-xs tracking-widest text-foreground/30 hover:text-accent transition-colors"
        >
          <span>SCROLL</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 right-6 z-20 hidden lg:block font-mono text-[10px] text-foreground/15 text-right leading-relaxed">
        <div>{"// AERO v0.1.0"}</div>
        <div>{"// (c) 2026"}</div>
        <div>{"// serverless cloud monitor"}</div>
        <div>{"// built with next.js"}</div>
      </div>
    </section>
  );
}
