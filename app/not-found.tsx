import Link from "next/link";
import { Compass } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-content flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
        <Compass className="h-6 w-6" />
      </div>
      <h1 className="font-display text-2xl font-bold text-ink-900">This page took a wrong turn</h1>
      <p className="mt-2 max-w-sm text-sm text-ink-500">
        We couldn't find what you were looking for. It may have moved, or the link might be off.
      </p>
      <div className="mt-6 flex gap-3">
        <LinkButton href="/" variant="primary">
          Back to home
        </LinkButton>
        <LinkButton href="/courses" variant="outline">
          Browse courses
        </LinkButton>
      </div>
    </div>
  );
}
