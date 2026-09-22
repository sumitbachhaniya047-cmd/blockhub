"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SearchBar({
  placeholder = "Search courses, certificates, roadmaps...",
  onSearch,
  size = "lg"
}: {
  placeholder?: string;
  onSearch?: (query: string) => void;
  size?: "md" | "lg";
}) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(value);
      }}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg border border-ink-900/10 bg-white pl-4 pr-1.5 shadow-card",
        size === "lg" ? "py-1.5" : "py-1"
      )}
    >
      <Search className="h-4 w-4 shrink-0 text-ink-500" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder={placeholder}
        className={cn(
          "w-full bg-transparent font-body text-ink-900 placeholder:text-ink-500/70 focus:outline-none",
          size === "lg" ? "py-2.5 text-base" : "py-1.5 text-sm"
        )}
      />
      <button
        type="submit"
        className="focus-ring shrink-0 rounded-md bg-ink-900 px-4 py-2 text-sm font-medium text-paper hover:bg-ink-700"
      >
        Search
      </button>
    </form>
  );
}
