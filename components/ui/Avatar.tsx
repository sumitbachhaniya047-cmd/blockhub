export function LetterAvatar({ label, color }: { label: string; color: string }) {
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
      style={{ backgroundColor: color }}
    >
      {label.charAt(0).toUpperCase()}
    </div>
  );
}
