import Link from "next/link";
import { roadmaps } from "@/lib/sample-data/roadmaps";
import { RoadmapCard } from "@/components/roadmaps/RoadmapCard";

export function RoadmapTeaser() {
  const featured = roadmaps.slice(0, 3);
  return (
    <section className="border-b border-line bg-paper py-16">
      <div className="container-content">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Career roadmaps</h2>
            <p className="mt-1.5 text-sm text-ink-500">A stage-by-stage path, not just a list of links.</p>
          </div>
          <Link href="/roadmaps" className="focus-ring shrink-0 rounded-sm text-sm font-medium text-teal-600 hover:underline">
            View all roadmaps
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <RoadmapCard key={r.slug} roadmap={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
