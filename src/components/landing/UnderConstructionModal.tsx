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
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Project under construction"
    >
      <div className="relative w-[92vw] max-w-lg border-2 border-foreground bg-surface p-8 shadow-[8px_8px_0_0_#1a1a1a]">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 border-2 border-foreground bg-heirlock-yellow p-2 text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.3em] text-muted">
            Notice
          </div>
          <h2 className="text-2xl font-semibold uppercase leading-tight text-foreground">
            This project is under construction
          </h2>
          <p className="text-sm leading-relaxed text-foreground/70">
            You are viewing a work in progress prototype for a serverless cloud
            infrastructure monitor. Features may change as development
            continues. Your feedback is welcome while we refine the experience.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              onClick={handleClose}
              className="w-full border-2 border-foreground bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-background"
            >
              Continue to preview
            </button>
            <a
              href="#architecture"
              onClick={handleClose}
              className="w-full border-2 border-foreground bg-surface px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-foreground"
            >
              Review architecture
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
