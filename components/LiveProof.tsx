"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  fetchGitHubActivity,
  timeAgo,
  type CommitEvent,
  type RepoActivity,
} from "@/lib/github";

type Status = "loading" | "ready" | "error";

export default function LiveProof() {
  const [commits, setCommits] = useState<CommitEvent[]>([]);
  const [repoActivity, setRepoActivity] = useState<RepoActivity[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadActivity() {
      try {
        const data = await fetchGitHubActivity();

        if (cancelled) return;

        setCommits(data.commits);
        setRepoActivity(data.repoActivity);
        setStatus("ready");
      } catch {
        if (cancelled) return;

        setStatus("error");
      }
    }

    loadActivity();

    return () => {
      cancelled = true;
    };
  }, []);

  const maxCount = Math.max(
    ...repoActivity.map((repo) => repo.count),
    1
  );

  return (
    <AnimatedSection
      id="live-proof"
      className="mx-auto max-w-4xl px-6 py-24"
    >
      <div className="mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan">
          Live from GitHub
        </span>

        <h2 className="mt-3 font-mono text-2xl text-foreground sm:text-3xl">
          Not a snapshot. This updates itself.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
          A live window into the engineering work behind the
          portfolio.
        </p>
      </div>

      {status === "loading" && (
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-16 animate-pulse rounded-xl border border-border bg-surface"
            />
          ))}
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber" />

            <p className="font-mono text-sm text-foreground">
              GitHub activity is temporarily unavailable.
            </p>
          </div>

          <p className="mt-3 text-sm leading-6 text-muted">
            The portfolio is still running normally. You can view
            the latest public work directly on GitHub.
          </p>

          <a
            href="https://github.com/CharlesKariuki-001"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex font-mono text-xs text-cyan transition-colors hover:text-foreground"
          >
            View GitHub →
          </a>
        </div>
      )}

      {status === "ready" && (
        <>
          <div className="flex flex-col gap-3">
            {commits.map((commit) => (
              <a
                key={commit.id}
                href={commit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-border-hover hover:bg-surface-hover"
              >
                <div className="min-w-0">
                  <p className="truncate font-mono text-sm text-foreground">
                    {commit.message}
                  </p>

                  <p className="mt-1 font-mono text-xs text-muted">
                    {commit.repoName}
                  </p>
                </div>

                <span className="shrink-0 font-mono text-xs text-cyan">
                  {timeAgo(commit.createdAt)}
                </span>
              </a>
            ))}

            {commits.length === 0 && (
              <p className="rounded-xl border border-border bg-surface p-6 text-sm text-muted">
                No recent public commit activity available yet.
              </p>
            )}
          </div>

          {repoActivity.length > 0 && (
            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Activity
                </span>

                <span className="font-mono text-xs text-muted">
                  Recent pushes
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {repoActivity.map((repo) => (
                  <div
                    key={repo.repoName}
                    className="flex items-center gap-3"
                  >
                    <span className="w-36 shrink-0 truncate font-mono text-xs text-muted">
                      {repo.repoName}
                    </span>

                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-cyan transition-all duration-700"
                        style={{
                          width: `${(repo.count / maxCount) * 100}%`,
                        }}
                      />
                    </div>

                    <span className="w-6 shrink-0 text-right font-mono text-xs text-foreground">
                      {repo.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <div className="mt-8 border-t border-border pt-5">
        <p className="font-mono text-xs leading-5 text-muted">
          Activity is fetched from GitHub and cached to keep this
          page fast and reliable.
        </p>
      </div>
    </AnimatedSection>
  );
}