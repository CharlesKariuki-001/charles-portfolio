type ContactPathProps = {
  label: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

export default function ContactPath({
  label,
  title,
  description,
  href,
  external = false,
}: ContactPathProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex min-h-52 flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover"
    >
      <span className="font-mono text-[11px] uppercase tracking-wider text-amber">
        {label}
      </span>

      <h3 className="mt-4 font-mono text-lg text-foreground transition-colors duration-200 group-hover:text-cyan">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted">
        {description}
      </p>

      <span className="mt-auto pt-6 font-mono text-xs text-muted transition-colors duration-200 group-hover:text-cyan">
        {external ? "Open external link →" : "Go to contact form ↓"}
      </span>
    </a>
  );
}