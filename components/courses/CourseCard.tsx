import Link from "next/link";
import { Clock, Star, Users } from "lucide-react";
import type { Course } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { LetterAvatar } from "@/components/ui/Avatar";
import { formatNumber } from "@/lib/utils";

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-line bg-white p-5 transition-shadow hover:shadow-pop">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <LetterAvatar label={course.creator.name} color={course.creator.avatarColor} />
          <div className="leading-tight">
            <p className="text-sm font-medium text-ink-900">{course.creator.name}</p>
            <p className="text-xs text-ink-500">{course.sourceType}</p>
          </div>
        </div>
        {course.isFree && <Badge tone="teal">Free</Badge>}
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink-900">
        <Link href={`/courses/${course.slug}`} className="focus-ring rounded-sm hover:underline">
          {course.title}
        </Link>
      </h3>
      <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-600">{course.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge tone="outline">{course.category}</Badge>
        <Badge tone="outline">{course.level}</Badge>
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs text-ink-500">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" /> {course.durationHours}h
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5" /> {formatNumber(course.learners)}
        </span>
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" /> {course.rating}
        </span>
      </div>

      <Link
        href={`/courses/${course.slug}`}
        className="focus-ring mt-5 inline-flex items-center justify-center rounded-md bg-ink-900 py-2.5 text-sm font-medium text-paper hover:bg-ink-700"
      >
        View course
      </Link>
    </div>
  );
}
