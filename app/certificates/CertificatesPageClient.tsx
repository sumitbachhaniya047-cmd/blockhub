"use client";

import { useEffect, useMemo, useState } from "react";
import { certificates } from "@/lib/sample-data/certificates";
import type { CostStatus } from "@/lib/types";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { CertificateFilters } from "@/components/certificates/CertificateFilters";
import { SearchBar } from "@/components/ui/SearchBar";
import { CardSkeletonGrid } from "@/components/ui/LoadingSkeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { Award } from "lucide-react";

export function CertificatesPageClient() {
  const [provider, setProvider] = useState<string | "All">("All");
  const [cost, setCost] = useState<CostStatus | "All">("All");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [provider, cost, query]);

  const filtered = useMemo(() => {
    return certificates.filter((c) => {
      if (provider !== "All" && c.provider !== provider) return false;
      if (cost !== "All" && c.costStatus !== cost) return false;
      if (
        query.trim() &&
        !c.programName.toLowerCase().includes(query.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [provider, cost, query]);

  return (
    <div className="container-content py-10">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-ink-900">
          Certificate opportunities
        </h1>

        <p className="mt-1.5 max-w-2xl text-sm text-ink-500">
          Every listing links to the provider&apos;s own page. We never issue
          certificates ourselves, and we don&apos;t claim something is free
          unless it&apos;s been checked directly against the provider.
        </p>

        <div className="mt-5 max-w-lg">
          <SearchBar
            size="md"
            placeholder="Search by program name"
            onSearch={setQuery}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
        <CertificateFilters
          activeProvider={provider}
          activeCost={cost}
          onProviderChange={setProvider}
          onCostChange={setCost}
        />

        <div>
          {loading ? (
            <CardSkeletonGrid count={6} />
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={<Award className="h-5 w-5" />}
              title="No certificates match those filters"
              description="Try a different provider or cost filter, or clear your search."
            />
          ) : (
            <>
              <p className="mb-4 text-sm text-ink-500">
                {filtered.length} opportunities
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((c) => (
                  <CertificateCard key={c.id} certificate={c} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
