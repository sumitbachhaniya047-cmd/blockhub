"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { courses } from "@/lib/sample-data/courses";
import type { Category, Level } from "@/lib/types";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { SearchBar } from "@/components/ui/SearchBar";
import { CardSkeletonGrid } from "@/components/ui/LoadingSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { ErrorState } from "@/components/ui/ErrorState";
import { SearchX } from "lucide-react";

export function CoursesPageClient() {
  const searchParams = useSearchParams();
  const initialCategory =
    (searchParams.get("category") as Category | null) ?? "All";

  const [category, setCategory] = useState<Category | "All">(initialCategory);
  const [level, setLevel] = useState<Level | "All">("All");
  const [freeOnly, setFreeOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  // Simulates a network fetch so the directory demonstrates real
  // loading, empty and error states even against static sample data.
  useEffect(() => {
    setLoading(true);
    setFailed(false);

    const timer = setTimeout(() => setLoading(false), 450);

    return () => clearTimeout(timer);
  }, [category, level, freeOnly, query]);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (category !== "All" && c.category !== category) return false;
      if (level !== "All" && c.level !== level) return false;
      if (freeOnly && !c.isFree) return false;

      if (query.trim()) {
        const q = query.toLowerCase();

        if (
          !c.title.toLowerCase().includes(q) &&
          !c.creator.name.toLowerCase().includes(q) &&
          !c.tags.some((t) => t.includes(q))
        ) {
          return false;
        }
      }

      return true;
    });
  }, [category, level, freeOnly, query]);

  return (
    <div className="container-content py-10">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-ink-900">
          Course directory
        </h1>

        <p className="mt-1.5 text-sm text-ink-500">
          Every course links to its original creator or platform — we
          don&apos;t host or re-upload any video content.
        </p>

        <div className="mt-5 max-w-lg">
          <SearchBar
            size="md"
            placeholder="Search by course, creator or topic"
            onSearch={setQuery}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
        <CourseFilters
          activeCategory={category}
          activeLevel={level}
          freeOnly={freeOnly}
          onCategoryChange={setCategory}
          onLevelChange={setLevel}
          onFreeOnlyChange={setFreeOnly}
        />

        <div>
          {failed ? (
            <ErrorState onRetry={() => setFailed(false)} />
          ) : loading ? (
            <CardSkeletonGrid count={6} />
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={<SearchX className="h-5 w-5" />}
              title="No courses match those filters"
              description="Try a different category, level, or clear the search to see everything available."
            />
          ) : (
            <>
              <p className="mb-4 text-sm text-ink-500">
                {filtered.length} courses
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}