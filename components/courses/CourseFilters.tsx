"use client";

import { categories } from "@/lib/sample-data/categories";
import type { Category, Level } from "@/lib/types";
import { cn } from "@/lib/utils";

const levels: Level[] = ["Beginner", "Intermediate", "Advanced"];

interface Props {
  activeCategory: Category | "All";
  activeLevel: Level | "All";
  freeOnly: boolean;
  onCategoryChange: (c: Category | "All") => void;
  onLevelChange: (l: Level | "All") => void;
  onFreeOnlyChange: (v: boolean) => void;
}

export function CourseFilters({
  activeCategory,
  activeLevel,
  freeOnly,
  onCategoryChange,
  onLevelChange,
  onFreeOnlyChange
}: Props) {
  return (
    <aside className="space-y-6">
      <div>
        <h3 className="font-display text-sm font-semibold text-ink-900">Category</h3>
        <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          <FilterPill active={activeCategory === "All"} onClick={() => onCategoryChange("All")}>
            All categories
          </FilterPill>
          {categories.map((c) => (
            <FilterPill key={c.name} active={activeCategory === c.name} onClick={() => onCategoryChange(c.name)}>
              {c.name}
            </FilterPill>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold text-ink-900">Level</h3>
        <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          <FilterPill active={activeLevel === "All"} onClick={() => onLevelChange("All")}>
            All levels
          </FilterPill>
          {levels.map((l) => (
            <FilterPill key={l} active={activeLevel === l} onClick={() => onLevelChange(l)}>
              {l}
            </FilterPill>
          ))}
        </div>
      </div>

      <label className="flex items-center gap-2.5 text-sm text-ink-700">
        <input
          type="checkbox"
          checked={freeOnly}
          onChange={(e) => onFreeOnlyChange(e.target.checked)}
          className="h-4 w-4 rounded-sm border-line accent-teal-500"
        />
        Free courses only
      </label>
    </aside>
  );
}

function FilterPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
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
