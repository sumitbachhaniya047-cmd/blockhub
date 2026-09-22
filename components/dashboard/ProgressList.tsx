import Link from "next/link";
import type { ProgressEntry } from "@/lib/types";
import { getCourseBySlug } from "@/lib/sample-data/courses";
import { EmptyState } from "@/components/ui/EmptyState";
import { BookOpen } from "lucide-react";

export function ProgressList({ progress }: { progress: ProgressEntry[] }) {
  if (progress.length === 0) {
    return (
      <EmptyState
        icon={<BookOpen className="h-5 w-5" />}
        title="No courses in progress"
        description="Start a course from the directory to see your progress here."
      />
    );
  }

  return (
    <div className="space-y-3">
      {progress.map((p) => {
        const course = getCourseBySlug(p.courseSlug);
        if (!course) return null;
        return (
          <Link
            key={p.courseSlug}
            href={`/courses/${p.courseSlug}`}
            className="focus-ring block rounded-md border border-line bg-white p-4 hover:border-ink-900/30"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-ink-900">{course.title}</p>
              <span className="font-mono text-xs text-ink-500">{p.percentComplete}%</span>
            </div>
            <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-ink-900/[0.06]">
              <div className="h-full rounded-full bg-teal-500" style={{ width: `${p.percentComplete}%` }} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
