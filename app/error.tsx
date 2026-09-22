"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";

export default function RootError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // In production this would report to an error-tracking service.
    console.error(error);
  }, [error]);

  return (
    <div className="container-content py-16">
      <ErrorState
        title="This page hit a snag"
        description="Something broke while rendering this page. You can try again, or head back home."
        onRetry={reset}
      />
    </div>
  );
}
