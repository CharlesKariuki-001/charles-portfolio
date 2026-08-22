type StatusBadgeProps = {
  status: "live" | "building" | "planned";
  label: string;
};

const statusStyles = {
  live: {
    dot: "bg-cyan",
    text: "text-cyan",
    animate: true,
  },
  building: {
    dot: "bg-amber",
    text: "text-amber",
    animate: true,
  },
  planned: {
    dot: "bg-muted",
    text: "text-muted",
    animate: false,
  },
};

export default function StatusBadge({
  status,
  label,
}: StatusBadgeProps) {
  const style = statusStyles[status];

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs">
      <span
        className={`h-1.5 w-1.5 rounded-full ${style.dot} ${
          style.animate ? "animate-pulse-dot" : ""
        }`}
      />

      <span className={style.text}>{label}</span>
    </span>
  );
}