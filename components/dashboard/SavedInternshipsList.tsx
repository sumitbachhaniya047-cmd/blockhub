import { Briefcase } from "lucide-react";
import { internships } from "@/lib/sample-data/internships";
import { InternshipCard } from "@/components/internships/InternshipCard";
import { EmptyState } from "@/components/ui/EmptyState";

export function SavedInternshipsList({ ids }: { ids: string[] }) {
  const saved = internships.filter((i) => ids.includes(i.id));

  if (saved.length === 0) {
    return (
      <EmptyState
        icon={<Briefcase className="h-5 w-5" />}
        title="No saved internships"
        description="Bookmark an internship listing to track it here."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {saved.map((i) => (
        <InternshipCard key={i.id} internship={i} />
      ))}
    </div>
  );
}
