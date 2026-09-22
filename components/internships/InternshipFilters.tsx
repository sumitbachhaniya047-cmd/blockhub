"use client";

import type { WorkMode, PayStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const modes: WorkMode[] = ["Remote", "Onsite", "Hybrid"];
const payOptions: PayStatus[] = ["Paid", "Stipend", "Unpaid"];

interface Props {
  activeMode: WorkMode | "All";
  activePay: PayStatus | "All";
  onModeChange: (m: WorkMode | "All") => void;
  onPayChange: (p: PayStatus | "All") => void;
}

export function InternshipFilters({ activeMode, activePay, onModeChange, onPayChange }: Props) {
  return (
    <aside className="space-y-6">
      <div>
        <h3 className="font-display text-sm font-semibold text-ink-900">Work mode</h3>
        <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          <Pill active={activeMode === "All"} onClick={() => onModeChange("All")}>
            Any mode
          </Pill>
          {modes.map((m) => (
            <Pill key={m} active={activeMode === m} onClick={() => onModeChange(m)}>
              {m}
            </Pill>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-display text-sm font-semibold text-ink-900">Pay status</h3>
        <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          <Pill active={activePay === "All"} onClick={() => onPayChange("All")}>
            Any pay status
          </Pill>
          {payOptions.map((p) => (
            <Pill key={p} active={activePay === p} onClick={() => onPayChange(p)}>
              {p}
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
