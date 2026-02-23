"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "aero_under_construction_ack";

export function UnderConstructionModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const acknowledged = sessionStorage.getItem(STORAGE_KEY);
      if (!acknowledged) setOpen(true);
    } catch (error) {
      // If storage is unavailable, still show the modal once
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch (error) {
      /* ignore storage errors */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Project under construction"
    >
      <div className="relative w-[92vw] max-w-lg border-2 border-foreground bg-surface p-8 shadow-2xl brutalist-glow">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-3 top-3 border-2 border-foreground/40 px-2 py-1 font-mono text-xs text-foreground/70 hover:border-accent hover:text-accent transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-4">
          <div className="font-mono text-sm uppercase tracking-widest text-accent">
            Notice
          </div>
          <h2 className="font-mono text-2xl font-black leading-tight text-foreground">
            This project is under construction
          </h2>
          <p className="font-mono text-sm leading-relaxed text-foreground/70">
            You are viewing a work in progress prototype for a serverless cloud infrastructure monitor. Features may change as development continues. Your feedback is welcome while we refine the experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleClose}
              className="w-full border-2 border-accent bg-accent px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-background hover:bg-transparent hover:text-accent transition-all"
            >
              Continue to preview
            </button>
            <a
              href="#architecture"
              onClick={handleClose}
              className="w-full border-2 border-foreground/40 px-6 py-3 text-center font-mono text-sm uppercase tracking-widest text-foreground/70 hover:border-foreground hover:text-foreground transition-all"
            >
              Review architecture
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
