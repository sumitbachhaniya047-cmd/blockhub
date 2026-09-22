import { Award } from "lucide-react";
import { certificates } from "@/lib/sample-data/certificates";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { EmptyState } from "@/components/ui/EmptyState";

export function SavedCertificatesList({ ids }: { ids: string[] }) {
  const saved = certificates.filter((c) => ids.includes(c.id));

  if (saved.length === 0) {
    return (
      <EmptyState
        icon={<Award className="h-5 w-5" />}
        title="No saved certificates"
        description="Bookmark a certificate opportunity to track it here."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {saved.map((c) => (
        <CertificateCard key={c.id} certificate={c} />
      ))}
    </div>
  );
}
