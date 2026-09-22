import { DashboardTabs } from "./DashboardTabs";
import { StatCard } from "@/components/dashboard/StatCard";
import { BookOpen, Award, Briefcase, Flame } from "lucide-react";
import {
  progress,
  savedCourseSlugs,
  savedCertificateIds,
  savedInternshipIds
} from "@/lib/sample-data/dashboard";

export const metadata = { title: "Dashboard — BlockHub" };

export default function DashboardPage() {
  return (
    <div className="container-content py-10">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-ink-900">
          Your dashboard
        </h1>

        <p className="mt-1.5 text-sm text-ink-500">
          Everything you&apos;ve saved and where you left off.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard
          icon={BookOpen}
          label="Courses in progress"
          value={progress.length}
        />

        <StatCard
          icon={Flame}
          label="Saved courses"
          value={savedCourseSlugs.length}
        />

        <StatCard
          icon={Award}
          label="Saved certificates"
          value={savedCertificateIds.length}
        />

        <StatCard
          icon={Briefcase}
          label="Saved internships"
          value={savedInternshipIds.length}
        />
      </div>

      <DashboardTabs />
    </div>
  );
}