import Link from "next/link";
import { internships } from "@/lib/sample-data/internships";
import { InternshipCard } from "@/components/internships/InternshipCard";

export function InternshipHighlights() {
  const featured = internships.slice(0, 3);
  return (
    <section className="border-b border-line bg-white py-16">
      <div className="container-content">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Internship opportunities</h2>
            <p className="mt-1.5 text-sm text-ink-500">Real listings, with pay status and eligibility flagged clearly.</p>
          </div>
          <Link href="/internships" className="focus-ring shrink-0 rounded-sm text-sm font-medium text-teal-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((intern) => (
            <InternshipCard key={intern.id} internship={intern} />
          ))}
        </div>
      </div>
    </section>
  );
}
