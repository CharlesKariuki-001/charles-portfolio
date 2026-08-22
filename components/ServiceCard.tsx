type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  repoUrl: string;
};

export default function ServiceCard({
  number,
  title,
  description,
  capabilities,
  repoUrl,
}: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-colors duration-300 hover:border-border-hover">
      {/* Top line */}
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-[0.2em] text-muted">
          {number}
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors duration-300 group-hover:bg-cyan" />
      </div>

      {/* Title */}
      <div className="mb-4">
        <h3 className="font-mono text-lg leading-tight text-foreground">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm leading-6 text-muted">
        {description}
      </p>

      {/* Capabilities */}
      <div className="mt-7 flex flex-wrap gap-2">
        {capabilities.map((capability) => (
          <span
            key={capability}
            className="rounded-md border border-border px-2.5 py-1 font-mono text-[10px] text-muted transition-colors duration-300 group-hover:border-border-hover group-hover:text-foreground-soft"
          >
            {capability}
          </span>
        ))}
      </div>

      {/* Bottom link */}
      <div className="mt-auto pt-10">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors duration-300 hover:text-cyan focus-visible:text-cyan"
        >
          <span>Inspect implementation</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </article>
  );
}