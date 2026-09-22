import { Suspense } from "react";
import { CoursesPageClient } from "./CoursesPageClient";
import { CardSkeletonGrid } from "@/components/ui/LoadingSkeleton";

export const metadata = { title: "Courses — Pathfolio" };

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="container-content py-10">
          <CardSkeletonGrid count={6} />
        </div>
      }
    >
      <CoursesPageClient />
    </Suspense>
  );
}
