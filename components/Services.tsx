import AnimatedSection from "./AnimatedSection";
import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    title: "Web data extraction",
    description:
      "Reliable Python systems for collecting, cleaning, and structuring web data from difficult or inconsistent sources.",
    capabilities: [
      "Python",
      "Scraping",
      "Data pipelines",
      "APIs",
    ],
    repoUrl:
      "https://github.com/CharlesKariuki-001/python-data-extraction",
  },
  {
    number: "02",
    title: "Python code rescue",
    description:
      "Broken, unreliable, or abandoned Python systems diagnosed, repaired, and brought back to a maintainable state.",
    capabilities: [
      "Debugging",
      "Refactoring",
      "Testing",
      "Python",
    ],
    repoUrl:
      "https://github.com/CharlesKariuki-001/python-code-rescue",
  },
  {
    number: "03",
    title: "System integration",
    description:
      "Small, dependable integrations that connect APIs, webhooks, services, and internal workflows that were never designed to work together.",
    capabilities: [
      "FastAPI",
      "Webhooks",
      "APIs",
      "Automation",
    ],
    repoUrl:
      "https://github.com/CharlesKariuki-001/fastapi-webhook-automation",
  },
];

export default function Services() {
  return (
    <AnimatedSection
      id="services"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-28"
    >
      {/* Section heading */}
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-border" />

          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Engineering services
          </span>
        </div>

        <h2 className="font-mono text-2xl leading-tight text-foreground sm:text-3xl">
          Freelance work, when the scope fits.
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
          Focused engineering work for teams that need a reliable
          implementation rather than another layer of complexity.
        </p>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
            capabilities={service.capabilities}
            repoUrl={service.repoUrl}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
        <p className="max-w-md text-xs leading-5 text-muted">
          Have a defined problem that fits one of these areas?
          Let&apos;s look at the scope.
        </p>

        <a
          href="#contact"
          className="group inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 font-mono text-xs text-foreground transition-colors duration-300 hover:border-amber hover:text-amber focus-visible:border-amber focus-visible:text-amber"
        >
          <span>Start a project</span>

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </AnimatedSection>
  );
}