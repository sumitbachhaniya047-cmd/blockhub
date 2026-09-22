"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, CheckCircle2, Briefcase } from "lucide-react";
import { internships as initialInternships } from "@/lib/sample-data/internships";
import type { Internship, WorkMode, PayStatus } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { ConfirmDeleteModal } from "@/components/admin/ConfirmDeleteModal";
import { TextField, SelectField } from "@/components/admin/FormField";
import { EmptyState } from "@/components/ui/EmptyState";

const modeOptions: WorkMode[] = ["Remote", "Onsite", "Hybrid"];
const payOptions: PayStatus[] = ["Paid", "Stipend", "Unpaid", "Unverified"];

export function InternshipsPanel() {
  const [rows, setRows] = useState<Internship[]>(initialInternships);
  const [editing, setEditing] = useState<Internship | null>(null);
  const [deleting, setDeleting] = useState<Internship | null>(null);
  const [showForm, setShowForm] = useState(false);

  function markVerified(id: string) {
    setRows((prev) => prev.map((i) => (i.id === id ? { ...i, verificationStatus: "Verified" } : i)));
  }

  const columns: Column<Internship>[] = [
    { header: "Role", render: (r) => <span className="font-medium text-ink-900">{r.role}</span> },
    { header: "Company", render: (r) => r.company },
    { header: "Mode", render: (r) => <Badge tone="outline">{r.workMode}</Badge> },
    { header: "Pay", render: (r) => <Badge tone="outline">{r.payStatus}</Badge> },
    { header: "Verification", render: (r) => <VerifiedBadge status={r.verificationStatus} /> },
    {
      header: "Actions",
      render: (r) => (
        <div className="flex gap-1">
          {r.verificationStatus !== "Verified" && (
            <button
              onClick={() => markVerified(r.id)}
              className="focus-ring rounded-md p-1.5 text-teal-600 hover:bg-teal-50"
              aria-label={`Mark ${r.role} verified`}
              title="Mark verified"
            >
              <CheckCircle2 className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => {
              setEditing(r);
              setShowForm(true);
            }}
            className="focus-ring rounded-md p-1.5 text-ink-500 hover:bg-ink-900/[0.06]"
            aria-label={`Edit ${r.role}`}
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={() => setDeleting(r)}
            className="focus-ring rounded-md p-1.5 text-red-500 hover:bg-red-50"
            aria-label={`Delete ${r.role}`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
      className: "px-4 py-3"
    }
  ];

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-ink-900">Internships ({rows.length})</h2>
        <Button
          size="sm"
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
        >
          <Plus className="h-4 w-4" /> Add internship
        </Button>
      </div>

      {rows.length === 0 ? (
        <EmptyState icon={<Briefcase className="h-5 w-5" />} title="No internships yet" description="Add a listing to get started." />
      ) : (
        <DataTable columns={columns} rows={rows} />
      )}

      {showForm && (
        <InternshipFormModal
          initial={editing}
          onCancel={() => setShowForm(false)}
          onSave={(intern) => {
            setRows((prev) => {
              if (editing) return prev.map((r) => (r.id === editing.id ? { ...r, ...intern } : r));
              return [...prev, { ...intern, id: `intern-${Date.now()}` } as Internship];
            });
            setShowForm(false);
          }}
        />
      )}

      {deleting && (
        <ConfirmDeleteModal
          itemLabel={deleting.role}
          onCancel={() => setDeleting(null)}
          onConfirm={() => {
            setRows((prev) => prev.filter((r) => r.id !== deleting.id));
            setDeleting(null);
          }}
        />
      )}
    </div>
  );
}

function InternshipFormModal({
  initial,
  onCancel,
  onSave
}: {
  initial: Internship | null;
  onCancel: () => void;
  onSave: (intern: Partial<Internship> & { role: string }) => void;
}) {
  const [role, setRole] = useState(initial?.role ?? "");
  const [company, setCompany] = useState(initial?.company ?? "");
  const [location, setLocation] = useState(initial?.location ?? "");
  const [workMode, setWorkMode] = useState<WorkMode>(initial?.workMode ?? "Remote");
  const [payStatus, setPayStatus] = useState<PayStatus>(initial?.payStatus ?? "Unverified");
  const [applicationUrl, setApplicationUrl] = useState(initial?.applicationUrl ?? "");
  const [deadline, setDeadline] = useState(initial?.deadline ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink-900/40 px-4 py-8">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-pop">
        <h3 className="font-display text-lg font-semibold text-ink-900">{initial ? "Edit internship" : "Add internship"}</h3>
        <form
          className="mt-4 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSave({
              ...(initial ?? { category: "General Tech", verificationStatus: "Pending Verification", eligibility: "", postedDate: new Date().toISOString().slice(0, 10) }),
              role,
              company,
              location,
              workMode,
              payStatus,
              applicationUrl,
              deadline,
              description
            });
          }}
        >
          <TextField label="Role" value={role} onChange={setRole} required />
          <TextField label="Company" value={company} onChange={setCompany} required />
          <TextField label="Location" value={location} onChange={setLocation} required />
          <div className="grid grid-cols-2 gap-4">
            <SelectField label="Work mode" value={workMode} onChange={setWorkMode} options={modeOptions} />
            <SelectField label="Pay status" value={payStatus} onChange={setPayStatus} options={payOptions} />
          </div>
          <TextField label="Application URL" value={applicationUrl} onChange={setApplicationUrl} required type="url" />
          <TextField label="Deadline" value={deadline} onChange={setDeadline} type="date" />
          <TextField label="Description" value={description} onChange={setDescription} textarea />
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" size="sm" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" size="sm">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
