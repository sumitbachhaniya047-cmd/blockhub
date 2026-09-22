import Link from "next/link";
import { MapPin, CalendarClock, ExternalLink } from "lucide-react";
import type { Internship } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { formatDate, daysUntil } from "@/lib/utils";

const payTone: Record<Internship["payStatus"], "teal" | "amber" | "neutral"> = {
  Paid: "teal",
  Stipend: "teal",
  Unpaid: "neutral",
  Unverified: "amber"
};

export function InternshipCard({ internship }: { internship: Internship }) {
  const days = daysUntil(internship.deadline);

  return (
    <div className="flex h-full flex-col rounded-lg border border-line bg-white p-5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-500">{internship.company}</p>
          <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink-900">{internship.role}</h3>
        </div>
        <Badge tone={payTone[internship.payStatus]} className="shrink-0">
          {internship.payStatus}
        </Badge>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{internship.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-500">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> {internship.location} · {internship.workMode}
        </span>
        <span className="flex items-center gap-1">
          <CalendarClock className="h-3.5 w-3.5" />
          {days >= 0 ? `Apply by ${formatDate(internship.deadline)}` : "Deadline passed"}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
        <Badge tone="outline">{internship.category}</Badge>
        <VerifiedBadge status={internship.verificationStatus} />
      </div>

      <Link
        href={internship.applicationUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="focus-ring mt-4 inline-flex items-center justify-center gap-1.5 rounded-md bg-ink-900 py-2.5 text-sm font-medium text-paper hover:bg-ink-700"
      >
        Apply on {internship.company} <ExternalLink className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
