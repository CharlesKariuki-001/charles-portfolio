import AnimatedSection from "./AnimatedSection";
import ContactForm from "./ContactForm";
import ContactPath from "./ContactPath";

export default function Contact() {
  return (
    <AnimatedSection
      className="mx-auto max-w-5xl px-6 py-24 sm:py-28"
      id="contact"
    >
      {/* Intro */}
      <div className="max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <span
            className="h-px w-8 bg-amber"
            aria-hidden="true"
          />

          <span className="font-mono text-xs uppercase tracking-wider text-amber">
            Contact
          </span>
        </div>

        <h2 className="font-mono text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
          Let&apos;s build something useful.
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Whether you&apos;re hiring, have a project that needs engineering,
          or simply want to follow the work, there&apos;s a path below.
        </p>
      </div>

      {/* Three paths */}
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        <ContactPath
          label="01 / Career"
          title="Hire or collaborate"
          description="Interested in AI security, fraud detection, cybersecurity, or software engineering work?"
          href="https://ke.linkedin.com/in/charlesmburu-838965382"
          external
        />

        <ContactPath
          label="02 / Freelance"
          title="Start a project"
          description="Need Python automation, data extraction, debugging, or an integration built?"
          href="#contact-form"
        />

        <ContactPath
          label="03 / Follow"
          title="Follow the build"
          description="See the experiments, systems, failures, and progress as the work develops."
          href="https://x.com/KariukiBuilds__"
          external
        />
      </div>

      {/* Form */}
      <div
        id="contact-form"
        className="mt-12 scroll-mt-24"
      >
        <ContactForm />
      </div>

      {/* Direct email */}
      <div className="mt-8 flex flex-col items-center gap-2 text-center">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Prefer email?
        </span>

        <a
          href="mailto:charlesmburukariuki@gmail.com"
          className="font-mono text-sm text-cyan transition-colors hover:text-foreground hover:underline"
        >
          charlesmburukariuki@gmail.com
        </a>
      </div>

      {/* Closing statement */}
      <div className="mt-20 border-t border-border pt-8">
        <p className="font-mono text-xs leading-6 text-muted">
          Good engineering starts with understanding the problem before
          reaching for the solution.
        </p>
      </div>
    </AnimatedSection>
  );
}