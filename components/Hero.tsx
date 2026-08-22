"use client";

import TypewriterHeadline from "./TypewriterHeadline";
import StatusBadge from "./StatusBadge";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden px-6">
      {/* Background: animated scan grid, stands in for a static headshot */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--tw-color-border, #1F2428) 1px, transparent 1px), linear-gradient(90deg, var(--tw-color-border, #1F2428) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/5 blur-[120px]" />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <StatusBadge status="live" label="Available for hire or collaboration" />

        <TypewriterHeadline />

        <p className="max-w-xl text-base text-muted sm:text-lg">
          AI security engineer building live fraud detection and network
          defense systems, tested against real attacks I run myself.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => scrollTo("ecosystem")}
            className="rounded-full bg-amber px-6 py-3 font-mono text-sm text-background transition-transform hover:scale-[1.02]"
          >
            See the live systems
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-cyan hover:text-cyan"
          >
            Get in touch
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <StatusBadge status="live" label="Vigilant AI — live demo" />
          <StatusBadge status="planned" label="2,000+ messages analyzed" />
          <StatusBadge
            status="planned"
            label="98.4% precision (on test data)"
          />
        </div>
      </div>
    </section>
  );
}