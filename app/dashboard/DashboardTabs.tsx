"use client";

import { useState } from "react";
import { BookOpen, Award, Briefcase, Map, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProgressList } from "@/components/dashboard/ProgressList";
import { SavedCoursesList } from "@/components/dashboard/SavedCoursesList";
import { SavedCertificatesList } from "@/components/dashboard/SavedCertificatesList";
import { SavedInternshipsList } from "@/components/dashboard/SavedInternshipsList";
import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { RoadmapTimeline } from "@/components/roadmaps/RoadmapTimeline";
import { getRoadmapBySlug } from "@/lib/sample-data/roadmaps";
import {
  currentStudent,
  progress,
  savedCourseSlugs,
  savedCertificateIds,
  savedInternshipIds,
  currentRoadmapSlug
} from "@/lib/sample-data/dashboard";
import { courses } from "@/lib/sample-data/courses";
import { CourseCard } from "@/components/courses/CourseCard";

const tabs = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "courses", label: "Saved courses", icon: BookOpen },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "internships", label: "Internships", icon: Briefcase },
  { id: "roadmap", label: "Roadmap", icon: Map },
  { id: "profile", label: "Profile", icon: User }
] as const;

type TabId = (typeof tabs)[number]["id"];

export function DashboardTabs() {
  const [active, setActive] = useState<TabId>("overview");
  const roadmap = getRoadmapBySlug(currentRoadmapSlug);
  const recommended = courses.filter((c) => currentStudent.interests.includes(c.category)).slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
      <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "focus-ring flex shrink-0 items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
              active === tab.id ? "bg-ink-900 text-paper" : "text-ink-600 hover:bg-ink-900/[0.05]"
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </nav>

      <div>
        {active === "overview" && (
          <div className="space-y-8">
            <div>
              <h2 className="mb-3 font-display text-lg font-semibold text-ink-900">Learning progress</h2>
              <ProgressList progress={progress} />
            </div>
            <div>
              <h2 className="mb-3 font-display text-lg font-semibold text-ink-900">Recommended for you</h2>
              {recommended.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {recommended.map((c) => (
                    <CourseCard key={c.slug} course={c} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-ink-500">Add interests to your profile to get recommendations.</p>
              )}
            </div>
          </div>
        )}

        {active === "courses" && <SavedCoursesList slugs={savedCourseSlugs} />}
        {active === "certificates" && <SavedCertificatesList ids={savedCertificateIds} />}
        {active === "internships" && <SavedInternshipsList ids={savedInternshipIds} />}
        {active === "roadmap" && (roadmap ? <RoadmapTimeline roadmap={roadmap} /> : <p className="text-sm text-ink-500">No roadmap selected yet.</p>)}
        {active === "profile" && <ProfileCard profile={currentStudent} />}
      </div>
    </div>
  );
}
