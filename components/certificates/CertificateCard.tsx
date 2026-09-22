import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Certificate } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";

const costTone: Record<Certificate["costStatus"], "teal" | "amber" | "neutral"> = {
  Free: "teal",
  "Free (Audit)": "teal",
  "Free Trial": "amber",
  Paid: "neutral"
};

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-line bg-white p-5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-500">{certificate.provider}</p>
          <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink-900">
            {certificate.programName}
          </h3>
        </div>
        <Badge tone={costTone[certificate.costStatus]} className="shrink-0">
          {certificate.costStatus}
        </Badge>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{certificate.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge tone="outline">{certificate.category}</Badge>
        <Badge tone="outline">{certificate.certificateStatus}</Badge>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
        <VerifiedBadge status={certificate.verificationStatus} lastVerifiedDate={certificate.lastVerifiedDate} />
      </div>

      <Link
        href={certificate.officialUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="focus-ring mt-4 inline-flex items-center justify-center gap-1.5 rounded-md border border-ink-900/15 py-2.5 text-sm font-medium text-ink-900 hover:border-ink-900/40"
      >
        Visit {certificate.provider} <ExternalLink className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
