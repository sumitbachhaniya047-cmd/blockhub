"use client";

import { useEffect, useMemo, useState } from "react";
import { internships } from "@/lib/sample-data/internships";
import type { WorkMode, PayStatus } from "@/lib/types";
import { InternshipCard } from "@/components/internships/InternshipCard";
import { InternshipFilters } from "@/components/internships/InternshipFilters";
import { SearchBar } from "@/components/ui/SearchBar";
import { CardSkeletonGrid } from "@/components/ui/LoadingSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { Briefcase } from "lucide-react";

export function InternshipsPageClient() {
  const [mode, setMode] = useState<WorkMode | "All">("All");
  const [pay, setPay] = useState<PayStatus | "All">("All");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const t = setTimeout(() => setLoading(false), 400);

    return () => clearTimeout(t);
  }, [mode, pay, query]);

  const filtered = useMemo(() => {
    return internships.filter((i) => {
      if (mode !== "All" && i.workMode !== mode) return false;
      if (pay !== "All" && i.payStatus !== pay) return false;

      if (query.trim()) {
        const q = query.toLowerCase();

        if (
          !i.role.toLowerCase().includes(q) &&
          !i.company.toLowerCase().includes(q)
        ) {
          return false;
        }
      }

      return true;
    });
  }, [mode, pay, query]);

  return (
    <div className="container-content py-10">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-ink-900">
          Internship directory
        </h1>

        <p className="mt-1.5 max-w-2xl text-sm text-ink-500">
          Every listing links straight to the employer&apos;s application
          page, with pay status flagged clearly — including when it
          hasn&apos;t been independently verified yet.
        </p>

        <div className="mt-5 max-w-lg">
          <SearchBar
            size="md"
            placeholder="Search by role or company"
            onSearch={setQuery}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
        <InternshipFilters
          activeMode={mode}
          activePay={pay}
          onModeChange={setMode}
          onPayChange={setPay}
        />

        <div>
          {loading ? (
            <CardSkeletonGrid count={6} />
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={<Briefcase className="h-5 w-5" />}
              title="No internships match those filters"
              description="Try a different work mode or pay status, or clear your search."
            />
          ) : (
            <>
              <p className="mb-4 text-sm text-ink-500">
                {filtered.length} listings
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((i) => (
                  <InternshipCard key={i.id} internship={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}