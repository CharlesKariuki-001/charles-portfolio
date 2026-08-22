import { NextResponse } from "next/server";

const GITHUB_USERNAME = "CharlesKariuki-001";

type GitHubEvent = {
  id: string;
  type: string;
  repo?: {
    name: string;
  };
  created_at: string;
  payload?: {
    commits?: {
      sha: string;
      message: string;
    }[];
  };
};

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "Charles-Kariuki-Portfolio",
        },
        next: {
          revalidate: 300,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "GitHub activity is temporarily unavailable.",
        },
        {
          status: response.status,
        }
      );
    }

    const events: GitHubEvent[] = await response.json();

    const pushEvents = events.filter(
      (event) =>
        event.type === "PushEvent" &&
        event.repo?.name &&
        event.payload?.commits
    );

    const commits = pushEvents
      .flatMap((event) =>
        (event.payload?.commits ?? []).map((commit) => ({
          id: commit.sha,
          repoName: event.repo!.name.replace(
            `${GITHUB_USERNAME}/`,
            ""
          ),
          message: commit.message
            .split("\n")[0]
            .slice(0, 80),
          url: `https://github.com/${event.repo!.name}/commit/${commit.sha}`,
          createdAt: event.created_at,
        }))
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )
      .slice(0, 5);

    const countByRepo: Record<string, number> = {};

    for (const commit of commits) {
      countByRepo[commit.repoName] =
        (countByRepo[commit.repoName] ?? 0) + 1;
    }

    const repoActivity = Object.entries(countByRepo)
      .map(([repoName, count]) => ({
        repoName,
        count,
      }))
      .sort((a, b) => b.count - a.count);

    return NextResponse.json(
      {
        commits,
        repoActivity,
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch {
    return NextResponse.json(
      {
        error: "Unable to connect to GitHub.",
      },
      {
        status: 500,
      }
    );
  }
}