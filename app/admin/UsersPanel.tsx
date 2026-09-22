"use client";

import { useState } from "react";
import { ShieldOff, ShieldCheck, Users as UsersIcon } from "lucide-react";
import { users as initialUsers, type AdminUser } from "@/lib/sample-data/users";
import { Badge } from "@/components/ui/Badge";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatDate } from "@/lib/utils";

export function UsersPanel() {
  const [rows, setRows] = useState<AdminUser[]>(initialUsers);

  function toggleStatus(id: string) {
    setRows((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" } : u))
    );
  }

  const columns: Column<AdminUser>[] = [
    { header: "Name", render: (r) => <span className="font-medium text-ink-900">{r.name}</span> },
    { header: "Email", render: (r) => r.email },
    { header: "Role", render: (r) => <Badge tone={r.role === "Admin" ? "amber" : "outline"}>{r.role}</Badge> },
    { header: "Joined", render: (r) => formatDate(r.joined) },
    { header: "Status", render: (r) => <Badge tone={r.status === "Active" ? "teal" : "neutral"}>{r.status}</Badge> },
    {
      header: "Actions",
      render: (r) => (
        <button
          onClick={() => toggleStatus(r.id)}
          className="focus-ring flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-ink-600 hover:bg-ink-900/[0.06]"
        >
          {r.status === "Active" ? (
            <>
              <ShieldOff className="h-4 w-4" /> Suspend
            </>
          ) : (
            <>
              <ShieldCheck className="h-4 w-4" /> Reactivate
            </>
          )}
        </button>
      ),
      className: "px-4 py-3"
    }
  ];

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-ink-900">Users ({rows.length})</h2>
      </div>
      {rows.length === 0 ? (
        <EmptyState icon={<UsersIcon className="h-5 w-5" />} title="No users yet" description="Users will appear here once accounts are created." />
      ) : (
        <DataTable columns={columns} rows={rows} />
      )}
    </div>
  );
}
