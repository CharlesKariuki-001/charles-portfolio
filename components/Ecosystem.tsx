import AnimatedSection from "./AnimatedSection";
import EcosystemDiagram from "./EcosystemDiagram";
import ProjectCard from "./ProjectCard";

export default function Ecosystem() {
  return (
    <AnimatedSection
      id="ecosystem"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="mb-8">
        <span className="font-mono text-xs uppercase tracking-wider text-cyan">
          The ecosystem
        </span>

        <h2 className="mt-2 font-mono text-2xl text-foreground sm:text-3xl">
          One system. Four connected parts.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base">
          Security engineering, AI defense, network detection
          and automation are not separate directions. They are
          parts of the same engineering stack.
        </p>
      </div>

      <div className="my-12">
        <EcosystemDiagram />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProjectCard
          title="Vigilant AI"
          description="Fraud detection for mobile money, combining rules, machine learning and explainability."
          status="live"
          statusLabel="Live"
          repoUrl="https://github.com/CharlesKariuki-001/VigilantAI"
          demoUrl="https://vigilantaio7udfkd7swt5f2sywwemvy.streamlit.app/"
        />

        <ProjectCard
          title="AI Security Engineering"
          description="An offensive and defensive AI security lab focused on testing models and hardening AI pipelines."
          status="building"
          statusLabel="Building"
          repoUrl="https://github.com/CharlesKariuki-001/ai-security-engineering"
        />

        <ProjectCard
          title="AfricaNDR"
          description="Network Detection and Response research focused on security visibility for African infrastructure."
          status="planned"
          statusLabel="Early stage"
          repoUrl="https://github.com/CharlesKariuki-001/africandr"
        />

        <ProjectCard
          title="Python Automation"
          description="Practical Python automation for data extraction, debugging and API/webhook workflows."
          status="live"
          statusLabel="Available"
          repoUrl="https://github.com/CharlesKariuki-001"
        />
      </div>
    </AnimatedSection>
  );
}