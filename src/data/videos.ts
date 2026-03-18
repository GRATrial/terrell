// ### PLACEHOLDER: Researcher will customize video data

export interface VideoResult {
  id: string;
  title: string;
  source: string;
  duration: string;
  views: string;
  thumbnailKey?: string;
}

// Fictional video results for research simulation
export const VIDEOS: VideoResult[] = [
  {
    id: "v1",
    title: "Terrell Jackson on technology leadership in startups ...",
    source: "YouTube · TechCrunch",
    duration: "9:22",
    views: "Feb 5, 2025"
  },
  {
    id: "v2",
    title: "Terrell Jackson — Austin Tech Council Rising Star Award",
    source: "YouTube · Austin Tech Council",
    duration: "4:48",
    views: "Nov 15, 2024"
  },
  {
    id: "v3",
    title: "Building inclusive tech teams — Terrell Jackson at SXSW",
    source: "YouTube · SXSW",
    duration: "15:33",
    views: "Mar 12, 2024"
  }
];

