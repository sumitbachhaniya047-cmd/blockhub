import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Roadmap } from "@/lib/types";

export function RoadmapCard({ roadmap }: { roadmap: Roadmap }) {
  return (
    <Link
      href={`/roadmaps#${roadmap.slug}`}
      className="focus-ring group flex flex-col rounded-lg border border-line bg-white p-5 transition-shadow hover:shadow-pop"
    >
      <p className="font-mono text-[11px] uppercase tracking-wide text-teal-600">
        {roadmap.stages.length} stages · ~{roadmap.totalEstimatedMonths} months
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink-900">{roadmap.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-600">{roadmap.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {roadmap.outcomeRoles.slice(0, 2).map((r) => (
          <span key={r} className="rounded-sm bg-ink-900/[0.05] px-2 py-1 text-xs text-ink-600">
            {r}
          </span>
        ))}
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900">
        View roadmap <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
