"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, CheckCircle2 } from "lucide-react";
import { certificates as initialCertificates } from "@/lib/sample-data/certificates";
import type { Certificate, CostStatus } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { ConfirmDeleteModal } from "@/components/admin/ConfirmDeleteModal";
import { TextField, SelectField } from "@/components/admin/FormField";
import { EmptyState } from "@/components/ui/EmptyState";
import { Award } from "lucide-react";

const costOptions: CostStatus[] = ["Free", "Free (Audit)", "Free Trial", "Paid"];

export function CertificatesPanel() {
  const [rows, setRows] = useState<Certificate[]>(initialCertificates);
  const [editing, setEditing] = useState<Certificate | null>(null);
  const [deleting, setDeleting] = useState<Certificate | null>(null);
  const [showForm, setShowForm] = useState(false);

  function markVerified(id: string) {
    setRows((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, verificationStatus: "Verified", lastVerifiedDate: new Date().toISOString().slice(0, 10) }
          : c
      )
    );
  }

  const columns: Column<Certificate>[] = [
    { header: "Program", render: (r) => <span className="font-medium text-ink-900">{r.programName}</span> },
    { header: "Provider", render: (r) => r.provider },
    { header: "Cost", render: (r) => <Badge tone="outline">{r.costStatus}</Badge> },
    { header: "Verification", render: (r) => <VerifiedBadge status={r.verificationStatus} /> },
    {
      header: "Actions",
      render: (r) => (
        <div className="flex gap-1">
          {r.verificationStatus !== "Verified" && (
            <button
              onClick={() => markVerified(r.id)}
              className="focus-ring rounded-md p-1.5 text-teal-600 hover:bg-teal-50"
              aria-label={`Mark ${r.programName} verified`}
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
            aria-label={`Edit ${r.programName}`}
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={() => setDeleting(r)}
            className="focus-ring rounded-md p-1.5 text-red-500 hover:bg-red-50"
            aria-label={`Delete ${r.programName}`}
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
        <h2 className="font-display text-lg font-semibold text-ink-900">Certificates ({rows.length})</h2>
        <Button
          size="sm"
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
        >
          <Plus className="h-4 w-4" /> Add certificate
        </Button>
      </div>

      {rows.length === 0 ? (
        <EmptyState icon={<Award className="h-5 w-5" />} title="No certificates yet" description="Add a certificate opportunity to get started." />
      ) : (
        <DataTable columns={columns} rows={rows} />
      )}

      {showForm && (
        <CertificateFormModal
          initial={editing}
          onCancel={() => setShowForm(false)}
          onSave={(cert) => {
            setRows((prev) => {
              if (editing) return prev.map((r) => (r.id === editing.id ? { ...r, ...cert } : r));
              return [...prev, { ...cert, id: `cert-${Date.now()}` } as Certificate];
            });
            setShowForm(false);
          }}
        />
      )}

      {deleting && (
        <ConfirmDeleteModal
          itemLabel={deleting.programName}
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

function CertificateFormModal({
  initial,
  onCancel,
  onSave
}: {
  initial: Certificate | null;
  onCancel: () => void;
  onSave: (cert: Partial<Certificate> & { programName: string }) => void;
}) {
  const [programName, setProgramName] = useState(initial?.programName ?? "");
  const [provider, setProvider] = useState(initial?.provider ?? "");
  const [officialUrl, setOfficialUrl] = useState(initial?.officialUrl ?? "");
  const [costStatus, setCostStatus] = useState<CostStatus>(initial?.costStatus ?? "Free");
  const [description, setDescription] = useState(initial?.description ?? "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink-900/40 px-4 py-8">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-pop">
        <h3 className="font-display text-lg font-semibold text-ink-900">{initial ? "Edit certificate" : "Add certificate"}</h3>
        <form
          className="mt-4 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSave({
              ...(initial ?? { certificateStatus: "Certificate Included", category: "General Tech", verificationStatus: "Pending Verification", lastVerifiedDate: new Date().toISOString().slice(0, 10), estimatedDuration: "" }),
              programName,
              provider,
              officialUrl,
              costStatus,
              description
            });
          }}
        >
          <TextField label="Program name" value={programName} onChange={setProgramName} required />
          <TextField label="Provider" value={provider} onChange={setProvider} required />
          <TextField label="Official URL" value={officialUrl} onChange={setOfficialUrl} required type="url" />
          <SelectField label="Cost status" value={costStatus} onChange={setCostStatus} options={costOptions} />
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
