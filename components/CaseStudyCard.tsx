"use client";

import { useId, useState } from "react";

type CaseStudyCardProps = {
  title: string;
  summary: string;
  category: string;
  status: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  repoUrl: string;
};

export default function CaseStudyCard({
  title,
  summary,
  category,
  status,
  problem,
  approach,
  result,
  stack,
  repoUrl,
}: CaseStudyCardProps) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <article
      className={[
        "overflow-hidden rounded-2xl border bg-surface",
        "transition-colors duration-300",
        open ? "border-border-hover" : "border-border",
      ].join(" ")}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        aria-controls={contentId}
        className="group flex w-full items-start justify-between gap-6 px-6 py-6 text-left sm:px-7"
      >
        <div className="min-w-0 flex-1">
          {/* Meta */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cyan">
              {category}
            </span>

            <span
              className="h-1 w-1 rounded-full bg-border-hover"
              aria-hidden="true"
            />

            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {status}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-mono text-lg text-foreground transition-colors duration-200 group-hover:text-cyan sm:text-xl">
            {title}
          </h3>

          {/* Summary */}
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {summary}
          </p>
        </div>

        {/* Expand control */}
        <span
          className={[
            "mt-1 flex h-8 w-8 shrink-0 items-center justify-center",
            "rounded-full border border-border",
            "font-mono text-lg leading-none text-muted",
            "transition-all duration-300",
            "group-hover:border-border-hover group-hover:text-foreground",
            open ? "rotate-45 border-cyan/30 text-cyan" : "",
          ].join(" ")}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Expandable content */}
      <div
        id={contentId}
        className={[
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="min-h-0">
          <div className="border-t border-border">
            <div className="grid gap-8 px-6 py-7 sm:px-7 lg:grid-cols-[1fr_0.8fr]">
              {/* Main evidence */}
              <div className="flex flex-col gap-7">
                {/* Problem */}
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-amber">
                      01
                    </span>

                    <span className="font-mono text-xs text-foreground">
                      Problem
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-muted">
                    {problem}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-amber">
                      02
                    </span>

                    <span className="font-mono text-xs text-foreground">
                      Approach
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-muted">
                    {approach}
                  </p>
                </div>

                {/* Result */}
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-amber">
                      03
                    </span>

                    <span className="font-mono text-xs text-foreground">
                      Evidence / current state
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-muted">
                    {result}
                  </p>
                </div>
              </div>

              {/* Supporting information */}
              <aside className="flex flex-col gap-6 lg:border-l lg:border-border lg:pl-7">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    Technology
                  </span>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-[11px] text-foreground-soft"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-2">
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 font-mono text-xs text-cyan transition-colors hover:text-foreground"
                  >
                    <span>Inspect the implementation</span>

                    <span
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}