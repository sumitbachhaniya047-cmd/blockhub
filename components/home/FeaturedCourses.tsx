import Link from "next/link";
import { courses } from "@/lib/sample-data/courses";
import { CourseCard } from "@/components/courses/CourseCard";

export function FeaturedCourses() {
  const featured = courses.slice(0, 6);
  return (
    <section className="border-b border-line bg-white py-16">
      <div className="container-content">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Featured courses</h2>
            <p className="mt-1.5 text-sm text-ink-500">Handpicked from creators students already trust.</p>
          </div>
          <Link href="/courses" className="focus-ring shrink-0 rounded-sm text-sm font-medium text-teal-600 hover:underline">
            Browse all courses
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
