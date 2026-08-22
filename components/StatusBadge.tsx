type StatusBadgeProps = {
  status: "live" | "building" | "planned";
  label: string;
};

const statusStyles = {
  live: {
    dot: "bg-[var(--success)]",
    text: "text-[var(--success)]",
    animate: true,
  },

  building: {
    dot: "bg-[var(--warning)]",
    text: "text-[var(--warning)]",
    animate: true,
  },

  planned: {
    dot: "bg-[var(--foreground-muted)]",
    text: "text-[var(--foreground-muted)]",
    animate: false,
  },
} as const;

export default function StatusBadge({
  status,
  label,
}: StatusBadgeProps) {
  const style = statusStyles[status];

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs">
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${style.dot} ${
          style.animate ? "animate-pulse-dot" : ""
        }`}
      />

      <span className={style.text}>{label}</span>
    </span>
  );
}