export type CommitEvent = {
  id: string;
  repoName: string;
  message: string;
  url: string;
  createdAt: string;
};

export type RepoActivity = {
  repoName: string;
  count: number;
};

type GitHubActivityResponse = {
  commits: CommitEvent[];
  repoActivity: RepoActivity[];
};

export async function fetchGitHubActivity(): Promise<GitHubActivityResponse> {
  const response = await fetch("/api/github/activity");

  if (!response.ok) {
    throw new Error(
      `GitHub activity request failed with status ${response.status}`
    );
  }

  return response.json();
}

export function timeAgo(dateString: string): string {
  const seconds = Math.floor(
    (Date.now() - new Date(dateString).getTime()) / 1000
  );

  const units: [number, string][] = [
    [31536000, "y"],
    [2592000, "mo"],
    [86400, "d"],
    [3600, "h"],
    [60, "m"],
  ];

  for (const [unitSeconds, label] of units) {
    const value = Math.floor(seconds / unitSeconds);

    if (value >= 1) {
      return `${value}${label} ago`;
    }
  }

  return "just now";
}