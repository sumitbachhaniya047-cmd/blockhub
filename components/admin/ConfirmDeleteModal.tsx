"use client";

import { Button } from "@/components/ui/Button";

export function ConfirmDeleteModal({
  itemLabel,
  onCancel,
  onConfirm
}: {
  itemLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/40 px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-pop">
        <h3 className="font-display text-lg font-semibold text-ink-900">Delete {itemLabel}?</h3>
        <p className="mt-2 text-sm text-ink-600">This removes it from the directory. This can't be undone here.</p>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="bg-red-600 hover:bg-red-700"
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
