import type { LucideIcon } from "lucide-react";

export function StatCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string | number }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-line bg-white p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-display text-xl font-bold leading-none text-ink-900">{value}</p>
        <p className="mt-1 text-xs text-ink-500">{label}</p>
      </div>
    </div>
  );
}
