import AnimatedSection from "./AnimatedSection";
import CaseStudyCard from "./CaseStudyCard";

export default function WorkCaseStudies() {
  return (
    <AnimatedSection
      className="mx-auto max-w-5xl px-6 py-24 sm:py-28"
      id="work"
    >
      {/* Section heading */}
      <div className="mb-12 max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-cyan" aria-hidden="true" />

          <span className="font-mono text-xs uppercase tracking-wider text-cyan">
            Selected work
          </span>
        </div>

        <h2 className="font-mono text-2xl leading-tight text-foreground sm:text-3xl lg:text-4xl">
          A closer look at what I&apos;m actually building.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          The surface of a project tells you what it does. The details tell
          you whether the person behind it understands the problem. Open a
          case study to see the reasoning, implementation approach, and
          current evidence.
        </p>
      </div>

      {/* Case studies */}
      <div className="flex flex-col gap-4">
        <CaseStudyCard
          title="Vigilant AI"
          summary="An explainable fraud-detection system focused on mobile-money scam patterns."
          category="AI / Security"
          status="Active build"
          problem="Mobile-money fraud creates a security problem that is closely tied to the way people actually transact. Generic fraud systems do not automatically understand local message patterns, social-engineering signals, or the context surrounding M-Pesa-style transactions."
          approach="The system started with a deterministic rule engine so known patterns could be identified and explained before introducing machine learning. The next layer adds an ML classifier with explainability, allowing a detection result to communicate why something was flagged instead of returning an opaque score."
          result="The rule-based detection layer and working demonstration are public. The project is still under active development, so evaluation results are treated as development/test-set evidence rather than production performance."
          stack={[
            "Python",
            "Machine Learning",
            "SHAP",
            "ONNX",
            "Streamlit",
            "Security",
          ]}
          repoUrl="https://github.com/CharlesKariuki-001/VigilantAI"
        />

        <CaseStudyCard
          title="AfricaNDR"
          summary="A network detection and response research project focused on African fintech infrastructure."
          category="Cybersecurity"
          status="Early stage"
          problem="Network-defense systems are often designed around assumptions that do not perfectly map onto every environment. African fintech infrastructure presents its own operational constraints, traffic patterns, and threat-model considerations."
          approach="The project is being developed as a research and engineering track around network visibility, detection logic, and response workflows. The focus is on understanding the environment first rather than blindly reproducing an existing security stack."
          result="The project remains in its early development stage. Its purpose on this portfolio is to show the direction of the security work and provide a public place for the implementation to evolve as the research becomes concrete."
          stack={[
            "Python",
            "Zeek",
            "Network Security",
            "Detection",
            "Linux",
          ]}
          repoUrl="https://github.com/CharlesKariuki-001/africandr"
        />

        <CaseStudyCard
          title="AI Security Engineering"
          summary="A long-running lab for understanding how AI pipelines fail, how attacks work, and how defenses can be engineered."
          category="AI Security"
          status="Research / build"
          problem="AI systems introduce a different security surface from traditional software. Models, data, prompts, pipelines, dependencies, and deployment infrastructure can all become part of the attack surface."
          approach="The work is structured as a progression from low-level experimentation and adversarial behavior into offensive red teaming, defensive hardening, and eventually a broader security platform. The goal is to understand attacks deeply enough to build defenses that are based on evidence rather than assumptions."
          result="The repository is being developed as a public engineering laboratory. Experiments, notes, and implementation work are kept together so the progression can be inspected rather than reduced to a single polished project description."
          stack={[
            "Python",
            "PyTorch",
            "AI Security",
            "Red Teaming",
            "Linux",
          ]}
          repoUrl="https://github.com/CharlesKariuki-001/ai-security-engineering"
        />
      </div>

      {/* Bottom note */}
      <div className="mt-8 flex items-start gap-3 border-t border-border pt-6">
        <span
          className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success"
          aria-hidden="true"
        />

        <p className="max-w-3xl font-mono text-xs leading-6 text-muted">
          Projects are shown at their actual stage of development. Early-stage
          work is labeled early-stage; test results are not presented as
          production results.
        </p>
      </div>
    </AnimatedSection>
  );
}