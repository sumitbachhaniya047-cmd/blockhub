import { cn } from "@/lib/utils";

type BadgeTone = "amber" | "teal" | "neutral" | "outline";

export function Badge({
  children,
  tone = "neutral",
  className
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  const tones: Record<BadgeTone, string> = {
    amber: "bg-amber-100 text-amber-700",
    teal: "bg-teal-100 text-teal-600",
    neutral: "bg-ink-900/[0.06] text-ink-700",
    outline: "border border-line text-ink-600"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm px-2 py-0.5 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
