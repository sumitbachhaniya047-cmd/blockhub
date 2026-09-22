import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import type { VerificationStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const config: Record<VerificationStatus, { icon: typeof CheckCircle2; label: string; className: string }> = {
  Verified: { icon: CheckCircle2, label: "Verified", className: "text-teal-600 bg-teal-50" },
  "Pending Verification": { icon: Clock, label: "Pending verification", className: "text-amber-700 bg-amber-50" },
  "Needs Recheck": { icon: AlertCircle, label: "Needs recheck", className: "text-red-600 bg-red-50" }
};

export function VerifiedBadge({ status, lastVerifiedDate }: { status: VerificationStatus; lastVerifiedDate?: string }) {
  const { icon: Icon, label, className } = config[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-sm px-2 py-1 font-mono text-[11px]", className)}>
      <Icon className="h-3 w-3" />
      {label}
      {lastVerifiedDate && <span className="opacity-70">· {lastVerifiedDate}</span>}
    </span>
  );
}
