import AnimatedSection from "./AnimatedSection";

export default function Story() {
  return (
    <AnimatedSection
      id="story"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        {/* Story */}
        <div className="flex flex-col">
          {/* Heading */}
          <div className="mb-8 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
              Why this, why now
            </span>

            <h2 className="max-w-xl font-mono text-2xl leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Not a hypothetical problem.
            </h2>

            <div className="mt-2 h-px w-16 bg-cyan/40" />
          </div>

          {/* Story paragraphs */}
          <div className="flex flex-col gap-6">
            <p className="max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              Mobile money fraud is not an abstract problem in Kenya. It
              affects ordinary transactions, businesses, families, and the
              systems people rely on every day. That is what pulled me toward
              security engineering in the first place. I wanted to understand
              how these systems fail, how attacks happen, and how better
              defenses can be built for the environments they actually serve.
            </p>

            <p className="max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              I am studying Computer Science at Mount Kenya University, after
              completing a diploma in Business Information Technology at Zetech
              University. Alongside coursework, I have been building systems
              around fraud detection, AI security, network defense, and
              automation. The projects are deliberately practical: they force
              me to deal with messy data, imperfect assumptions, system
              constraints, and the gap between something that works in a
              notebook and something that can survive outside one.
            </p>

            <p className="max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              I build in public because the work should be inspectable. The
              repositories, experiments, security research, and product work
              on this site are part of that record. I would rather show the
              system, explain the decisions, document the failures, and keep
              improving it than make a collection of claims that cannot be
              verified.
            </p>
          </div>

          {/* Supporting information */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />

              <span className="font-mono text-xs text-muted">
                Building in public
              </span>
            </div>

            <div className="h-3 w-px bg-border" />

            <span className="font-mono text-xs text-muted">
              Kenya · East Africa
            </span>
          </div>
        </div>

        {/* Quiet technical visual */}
        <div
          className="relative hidden min-h-105 items-center justify-center lg:flex"
          aria-hidden="true"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.07),transparent_58%)]" />

          <svg
            viewBox="0 0 440 440"
            className="relative h-full w-full max-w-110"
            role="presentation"
          >
            {/* Outer system boundary */}
            <circle
              cx="220"
              cy="220"
              r="185"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
            />

            {/* Secondary boundary */}
            <circle
              cx="220"
              cy="220"
              r="145"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
            />

            {/* Inner boundary */}
            <circle
              cx="220"
              cy="220"
              r="105"
              fill="none"
              stroke="var(--border-hover)"
              strokeWidth="1"
            />

            {/* Active signal ring */}
            <circle
              cx="220"
              cy="220"
              r="68"
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="1"
              strokeDasharray="4 8"
              opacity="0.75"
            />

            {/* Vertical crosshair */}
            <line
              x1="220"
              y1="25"
              x2="220"
              y2="415"
              stroke="var(--border)"
              strokeWidth="1"
            />

            {/* Horizontal crosshair */}
            <line
              x1="25"
              y1="220"
              x2="415"
              y2="220"
              stroke="var(--border)"
              strokeWidth="1"
            />

            {/* Center indicator */}
            <circle
              cx="220"
              cy="220"
              r="7"
              fill="var(--amber)"
              opacity="0.95"
            />

            <circle
              cx="220"
              cy="220"
              r="14"
              fill="none"
              stroke="var(--amber)"
              strokeWidth="1"
              opacity="0.35"
            />

            {/* Signal points */}
            <circle
              cx="220"
              cy="115"
              r="3"
              fill="var(--cyan)"
            />

            <circle
              cx="325"
              cy="220"
              r="3"
              fill="var(--cyan)"
            />

            <circle
              cx="220"
              cy="325"
              r="3"
              fill="var(--cyan)"
            />

            <circle
              cx="115"
              cy="220"
              r="3"
              fill="var(--cyan)"
            />

            {/* Top coordinate mark */}
            <line
              x1="220"
              y1="35"
              x2="220"
              y2="48"
              stroke="var(--cyan)"
              strokeWidth="2"
            />

            {/* Right coordinate mark */}
            <line
              x1="392"
              y1="220"
              x2="405"
              y2="220"
              stroke="var(--cyan)"
              strokeWidth="2"
            />

            {/* Bottom coordinate mark */}
            <line
              x1="220"
              y1="392"
              x2="220"
              y2="405"
              stroke="var(--cyan)"
              strokeWidth="2"
            />

            {/* Left coordinate mark */}
            <line
              x1="35"
              y1="220"
              x2="48"
              y2="220"
              stroke="var(--cyan)"
              strokeWidth="2"
            />

            {/* Top label */}
            <text
              x="220"
              y="62"
              textAnchor="middle"
              fill="var(--foreground-muted)"
              fontFamily="monospace"
              fontSize="10"
              letterSpacing="2"
            >
              SYSTEM / SIGNAL
            </text>

            {/* Bottom label */}
            <text
              x="220"
              y="380"
              textAnchor="middle"
              fill="var(--foreground-muted)"
              fontFamily="monospace"
              fontSize="10"
              letterSpacing="1.5"
            >
              KENYA · EAST AFRICA
            </text>

            {/* Center label */}
            <text
              x="220"
              y="238"
              textAnchor="middle"
              fill="var(--foreground)"
              fontFamily="monospace"
              fontSize="11"
            >
              BUILD → TEST → DEFEND
            </text>
          </svg>
        </div>
      </div>
    </AnimatedSection>
  );
}