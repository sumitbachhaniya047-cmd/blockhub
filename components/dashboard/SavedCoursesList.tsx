import { BookmarkX } from "lucide-react";
import { getCourseBySlug } from "@/lib/sample-data/courses";
import { CourseCard } from "@/components/courses/CourseCard";
import { EmptyState } from "@/components/ui/EmptyState";

export function SavedCoursesList({ slugs }: { slugs: string[] }) {
  const savedCourses = slugs.map(getCourseBySlug).filter((c): c is NonNullable<typeof c> => Boolean(c));

  if (savedCourses.length === 0) {
    return (
      <EmptyState
        icon={<BookmarkX className="h-5 w-5" />}
        title="No saved courses yet"
        description="Save a course from the directory to keep track of it here."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {savedCourses.map((c) => (
        <CourseCard key={c.slug} course={c} />
      ))}
    </div>
  );
}
