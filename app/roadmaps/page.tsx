import Link from "next/link";
import { roadmaps } from "@/lib/sample-data/roadmaps";
import { RoadmapTimeline } from "@/components/roadmaps/RoadmapTimeline";

export const metadata = { title: "Career Roadmaps — Pathfolio" };

export default function RoadmapsPage() {
  return (
    <div className="container-content py-10">
      <div className="mb-8 max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-ink-900">Career roadmaps</h1>
        <p className="mt-1.5 text-sm text-ink-500">
          Six starting points, each broken into stages with the skills, timeframe and courses to match.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {roadmaps.map((r) => (
          <Link
            key={r.slug}
            href={`#${r.slug}`}
            className="focus-ring rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:border-ink-900/40 hover:text-ink-900"
          >
            {r.title}
          </Link>
        ))}
      </div>

      <div className="space-y-8">
        {roadmaps.map((r) => (
          <RoadmapTimeline key={r.slug} roadmap={r} />
        ))}
      </div>
    </div>
  );
}
