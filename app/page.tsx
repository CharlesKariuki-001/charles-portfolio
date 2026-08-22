import AnimatedSection from "@/components/AnimatedSection";
import StatusBadge from "@/components/StatusBadge";
import Hero from "@/components/Hero";
const systems = [
  {
    name: "Vigilant AI",
    description:
      "An explainable fraud detection system designed to identify suspicious mobile-money activity.",
    status: "live" as const,
  },
  {
    name: "AfricaNDR",
    description:
      "A network detection and response system focused on security visibility for African infrastructure.",
    status: "building" as const,
  },
  {
    name: "AI Security Engineering",
    description:
      "Research and engineering work around attacking, testing, and hardening AI pipelines.",
    status: "building" as const,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl animate-ambient-pulse" />
      </div>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-[var(--nav-height)]">
        <div className="max-w-4xl">
          <div className="mb-6">
            <StatusBadge
              status="live"
              label="Building security systems"
            />
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
            I build systems that{" "}
            <span className="text-[var(--accent)]">
              defend themselves.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--foreground-soft)] sm:text-lg">
            I&apos;m Charles Kariuki, an AI security engineer building
            practical systems across artificial intelligence,
            cybersecurity, fraud detection, and network defense.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-lg bg-[var(--accent)] px-5 py-3 font-mono text-sm font-semibold text-[#061014] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Explore my work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-[var(--border)] px-5 py-3 font-mono text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent-border)] hover:bg-[var(--accent-soft)]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <AnimatedSection
        id="ecosystem"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            01 / Ecosystem
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Systems I&apos;m building
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--foreground-soft)]">
            Not a collection of tutorial projects. These are systems
            being designed, engineered, tested, and continuously
            improved.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {systems.map((system) => (
            <article
              key={system.name}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)]"
            >
              <StatusBadge
                status={system.status}
                label={
                  system.status === "live"
                    ? "Live"
                    : "Building"
                }
              />

              <h3 className="mt-6 text-xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                {system.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                {system.description}
              </p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      {/* Work */}
      <AnimatedSection
        id="work"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              02 / Work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Engineering over aesthetics.
            </h2>
          </div>

          <div className="space-y-6 text-[var(--foreground-soft)]">
            <p className="leading-8">
              The goal of this portfolio is simple: show the systems,
              decisions, experiments, failures, and results behind the
              work.
            </p>

            <p className="leading-8">
              Every serious project should make it possible to
              understand what problem was solved, how the system works,
              what security assumptions were made, and how it was
              tested.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Story */}
      <AnimatedSection
        id="story"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <div className="border-t border-[var(--border)] pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            03 / Story
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            From software engineering to security-minded systems
            engineering.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-[var(--foreground-soft)]">
            I&apos;m interested in the intersection between software,
            artificial intelligence, infrastructure, and security —
            especially where these systems have real-world consequences.
          </p>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <div className="rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] p-8 sm:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            04 / Contact
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Have a system worth building?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--foreground-soft)]">
            If you&apos;re working on a security, AI, software, or
            infrastructure problem, let&apos;s talk about it.
          </p>

          <a
            href="mailto:hello@charleskariuki.dev"
            className="mt-7 inline-flex rounded-lg bg-[var(--accent)] px-5 py-3 font-mono text-sm font-semibold text-[#061014] transition-colors hover:bg-[var(--accent-hover)]"
          >
            Start a conversation
          </a>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-8">
        <div className="flex flex-col gap-3 text-xs text-[var(--foreground-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">
            © {new Date().getFullYear()} Charles Kariuki
          </p>

          <p className="font-mono">
            AI Security · Software · Infrastructure
          </p>
        </div>
      </footer>
    </div>
  );
}