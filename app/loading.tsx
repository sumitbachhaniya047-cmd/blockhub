import { CardSkeletonGrid } from "@/components/ui/LoadingSkeleton";

export default function RootLoading() {
  return (
    <div className="container-content py-16">
      <div className="mb-8 h-8 w-64 animate-pulse rounded-sm bg-ink-900/[0.06]" />
      <CardSkeletonGrid count={6} />
    </div>
  );
}
