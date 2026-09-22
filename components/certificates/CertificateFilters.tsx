"use client";

import type { CostStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const providers = ["Google", "Microsoft", "Cisco", "IBM", "Amazon Web Services", "Meta", "DeepLearning.AI"];
const costOptions: CostStatus[] = ["Free", "Free (Audit)", "Free Trial", "Paid"];

interface Props {
  activeProvider: string | "All";
  activeCost: CostStatus | "All";
  onProviderChange: (p: string | "All") => void;
  onCostChange: (c: CostStatus | "All") => void;
}

export function CertificateFilters({ activeProvider, activeCost, onProviderChange, onCostChange }: Props) {
  return (
    <aside className="space-y-6">
      <div>
        <h3 className="font-display text-sm font-semibold text-ink-900">Provider</h3>
        <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          <Pill active={activeProvider === "All"} onClick={() => onProviderChange("All")}>
            All providers
          </Pill>
          {providers.map((p) => (
            <Pill key={p} active={activeProvider === p} onClick={() => onProviderChange(p)}>
              {p}
            </Pill>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-display text-sm font-semibold text-ink-900">Cost</h3>
        <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          <Pill active={activeCost === "All"} onClick={() => onCostChange("All")}>
            Any cost
          </Pill>
          {costOptions.map((c) => (
            <Pill key={c} active={activeCost === c} onClick={() => onCostChange(c)}>
              {c}
            </Pill>
          ))}
        </div>
      </div>
    </aside>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "focus-ring rounded-sm px-3 py-1.5 text-left text-sm transition-colors lg:rounded-md lg:px-2.5",
        active ? "bg-ink-900 text-paper lg:bg-ink-900/[0.06] lg:text-ink-900 lg:font-medium" : "bg-ink-900/[0.05] text-ink-600 hover:bg-ink-900/[0.09] lg:bg-transparent"
      )}
    >
      {children}
    </button>
  );
}
