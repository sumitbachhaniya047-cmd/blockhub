import Link from "next/link";
import { certificates } from "@/lib/sample-data/certificates";
import { CertificateCard } from "@/components/certificates/CertificateCard";

export function CertificateHighlights() {
  const featured = certificates.slice(0, 3);
  return (
    <section className="border-b border-line bg-paper py-16">
      <div className="container-content">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Certificate opportunities</h2>
            <p className="mt-1.5 text-sm text-ink-500">
              From Google, Microsoft, Cisco, IBM and AWS — always linked to the official program page.
            </p>
          </div>
          <Link href="/certificates" className="focus-ring shrink-0 rounded-sm text-sm font-medium text-teal-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
