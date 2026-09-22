import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Roadmap } from "@/lib/types";
import { getCourseBySlug } from "@/lib/sample-data/courses";

export function RoadmapTimeline({ roadmap }: { roadmap: Roadmap }) {
  return (
    <div id={roadmap.slug} className="scroll-mt-24 rounded-lg border border-line bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink-900">{roadmap.title}</h2>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-600">{roadmap.summary}</p>
        </div>
        <div className="rounded-md bg-amber-50 px-3 py-2 text-center">
          <p className="font-display text-lg font-bold text-ink-900">~{roadmap.totalEstimatedMonths}</p>
          <p className="text-[11px] text-ink-500">months</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {roadmap.outcomeRoles.map((r) => (
          <span key={r} className="rounded-sm bg-ink-900/[0.05] px-2 py-1 text-xs text-ink-600">
            {r}
          </span>
        ))}
      </div>

      <ol className="mt-8 space-y-6 border-l border-line pl-6">
        {roadmap.stages.map((stage, i) => (
          <li key={stage.title} className="relative">
            <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 font-mono text-xs font-semibold text-white">
              {i + 1}
            </span>
            <p className="font-display text-base font-semibold text-ink-900">{stage.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">{stage.description}</p>
            <p className="mt-2 font-mono text-[11px] text-ink-500">~{stage.estimatedWeeks} weeks</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {stage.skills.map((s) => (
                <span key={s} className="rounded-sm border border-line px-2 py-0.5 text-xs text-ink-600">
                  {s}
                </span>
              ))}
            </div>

            {stage.suggestedCourseSlugs.length > 0 && (
              <div className="mt-3 space-y-1.5">
                {stage.suggestedCourseSlugs.map((slug) => {
                  const course = getCourseBySlug(slug);
                  if (!course) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/courses/${slug}`}
                      className="focus-ring inline-flex items-center gap-1 text-sm text-teal-600 hover:underline"
                    >
                      {course.title} <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  );
                })}
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
