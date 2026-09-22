import { BookOpen, Award, Briefcase, Users, Clock } from "lucide-react";
import { courses } from "@/lib/sample-data/courses";
import { certificates } from "@/lib/sample-data/certificates";
import { internships } from "@/lib/sample-data/internships";
import { users } from "@/lib/sample-data/users";
import { StatCard } from "@/components/dashboard/StatCard";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";

export function OverviewPanel() {
  const pendingCertificates = certificates.filter((c) => c.verificationStatus !== "Verified");
  const pendingInternships = internships.filter((i) => i.verificationStatus !== "Verified");

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard icon={BookOpen} label="Total courses" value={courses.length} />
        <StatCard icon={Award} label="Certificates listed" value={certificates.length} />
        <StatCard icon={Briefcase} label="Internships listed" value={internships.length} />
        <StatCard icon={Users} label="Registered users" value={users.length} />
      </div>

      <div>
        <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-ink-900">
          <Clock className="h-4.5 w-4.5 text-amber-600" /> Needs verification
        </h2>
        <div className="space-y-2">
          {[...pendingCertificates.map((c) => ({ id: c.id, label: c.programName, sub: c.provider, status: c.verificationStatus })),
            ...pendingInternships.map((i) => ({ id: i.id, label: i.role, sub: i.company, status: i.verificationStatus }))]
            .slice(0, 6)
            .map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-md border border-line bg-white p-3.5">
                <div>
                  <p className="text-sm font-medium text-ink-900">{item.label}</p>
                  <p className="text-xs text-ink-500">{item.sub}</p>
                </div>
                <VerifiedBadge status={item.status} />
              </div>
            ))}
          {pendingCertificates.length === 0 && pendingInternships.length === 0 && (
            <p className="text-sm text-ink-500">Everything is verified. Nice work.</p>
          )}
        </div>
      </div>
    </div>
  );
}
