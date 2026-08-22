"use client";

import TypewriterHeadline from "./TypewriterHeadline";
import StatusBadge from "./StatusBadge";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden px-6">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.07] animate-grid-drift"
          style={{
            backgroundImage:
              "linear-gradient(#202b32 1px, transparent 1px), linear-gradient(90deg, #202b32 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient cyan glow */}
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/5 blur-[120px] animate-soft-glow" />
      </div>

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        {/* Availability */}
        <StatusBadge
          status="live"
          label="Available for hire or collaboration"
        />

        {/* Typewriter headline */}
        <TypewriterHeadline />

        {/* Description */}
        <p className="max-w-xl text-base text-muted sm:text-lg">
          AI security engineer building live fraud detection and
          network defense systems, tested against real attacks I
          run myself.
        </p>

        {/* ===================================================
            ACTIONS
            =================================================== */}

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollTo("ecosystem")}
            className="rounded-full bg-amber px-6 py-3 font-mono text-sm text-background transition-transform hover:scale-[1.02]"
          >
            See the live systems
          </button>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="rounded-full border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-cyan hover:text-cyan"
          >
            Get in touch
          </button>
        </div>

        {/* ===================================================
            PROOF / STATUS
            =================================================== */}

        <div className="mt-6 flex flex-wrap gap-3">
          <StatusBadge
            status="live"
            label="Vigilant AI — live demo"
          />

          <StatusBadge
            status="planned"
            label="2,000+ messages analyzed"
          />

          <StatusBadge
            status="planned"
            label="98.4% precision (on test data)"
          />
        </div>
      </div>
    </section>
  );
}