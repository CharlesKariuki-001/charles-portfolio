import StatusBadge from "./StatusBadge";

type ProjectCardProps = {
  title: string;
  description: string;
  status: "live" | "building" | "planned";
  statusLabel: string;
  repoUrl: string;
  demoUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  status,
  statusLabel,
  repoUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-mono text-lg text-foreground">
          {title}
        </h3>

        <StatusBadge
          status={status}
          label={statusLabel}
        />
      </div>

      <p className="text-sm leading-6 text-muted">
        {description}
      </p>

      <div className="mt-auto flex flex-wrap gap-4 pt-3 font-mono text-sm">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground transition-colors hover:text-cyan"
        >
          View repo →
        </a>

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber transition-colors hover:text-cyan"
          >
            Live demo →
          </a>
        )}
      </div>
    </article>
  );
}