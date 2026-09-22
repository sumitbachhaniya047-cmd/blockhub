"use client";

import { BookOpen, Award, Briefcase, Users, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

export const adminTabs = [
  { id: "overview", label: "Overview", icon: LayoutGrid },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "internships", label: "Internships", icon: Briefcase },
  { id: "users", label: "Users", icon: Users }
] as const;

export type AdminTabId = (typeof adminTabs)[number]["id"];

export function AdminSidebar({ active, onChange }: { active: AdminTabId; onChange: (id: AdminTabId) => void }) {
  return (
    <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
      {adminTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "focus-ring flex shrink-0 items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
            active === tab.id ? "bg-ink-900 text-paper" : "text-ink-600 hover:bg-ink-900/[0.05]"
          )}
        >
          <tab.icon className="h-4 w-4" />
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
