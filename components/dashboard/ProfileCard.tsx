import { Pencil } from "lucide-react";
import type { StudentProfile } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

export function ProfileCard({ profile }: { profile: StudentProfile }) {
  return (
    <div className="rounded-lg border border-line bg-white p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 font-display text-lg font-semibold text-amber-500">
            {profile.avatarInitial}
          </div>
          <div>
            <p className="font-display text-base font-semibold text-ink-900">{profile.name}</p>
            <p className="text-xs text-ink-500">{profile.email}</p>
          </div>
        </div>
        <button className="focus-ring rounded-md p-1.5 text-ink-500 hover:bg-ink-900/[0.05]" aria-label="Edit profile">
          <Pencil className="h-4 w-4" />
        </button>
      </div>

      <dl className="mt-4 space-y-1.5 text-sm">
        <div className="flex justify-between">
          <dt className="text-ink-500">College</dt>
          <dd className="text-ink-800">{profile.college}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-500">Year</dt>
          <dd className="text-ink-800">{profile.year}</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {profile.interests.map((i) => (
          <Badge key={i} tone="outline">
            {i}
          </Badge>
        ))}
      </div>
    </div>
  );
}
