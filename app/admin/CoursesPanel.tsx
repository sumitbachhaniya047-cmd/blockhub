"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { courses as initialCourses } from "@/lib/sample-data/courses";
import type { Course } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DataTable, type Column } from "@/components/admin/DataTable";
import { ConfirmDeleteModal } from "@/components/admin/ConfirmDeleteModal";
import { EmptyState } from "@/components/ui/EmptyState";
import { TextField } from "@/components/admin/FormField";
import { BookOpen } from "lucide-react";

type Row = Course & { id: string };

export function CoursesPanel() {
  const [rows, setRows] = useState<Row[]>(initialCourses.map((c) => ({ ...c, id: c.slug })));
  const [editing, setEditing] = useState<Row | null>(null);
  const [deleting, setDeleting] = useState<Row | null>(null);
  const [showForm, setShowForm] = useState(false);

  const columns: Column<Row>[] = [
    { header: "Course", render: (r) => <span className="font-medium text-ink-900">{r.title}</span> },
    { header: "Category", render: (r) => <Badge tone="outline">{r.category}</Badge> },
    { header: "Level", render: (r) => r.level },
    { header: "Creator", render: (r) => r.creator.name },
    { header: "Free", render: (r) => (r.isFree ? <Badge tone="teal">Free</Badge> : <Badge tone="neutral">Paid</Badge>) },
    {
      header: "Actions",
      render: (r) => (
        <div className="flex gap-1">
          <button
            onClick={() => {
              setEditing(r);
              setShowForm(true);
            }}
            className="focus-ring rounded-md p-1.5 text-ink-500 hover:bg-ink-900/[0.06]"
            aria-label={`Edit ${r.title}`}
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={() => setDeleting(r)}
            className="focus-ring rounded-md p-1.5 text-red-500 hover:bg-red-50"
            aria-label={`Delete ${r.title}`}
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
        <h2 className="font-display text-lg font-semibold text-ink-900">Courses ({rows.length})</h2>
        <Button
          size="sm"
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
        >
          <Plus className="h-4 w-4" /> Add course
        </Button>
      </div>

      {rows.length === 0 ? (
        <EmptyState icon={<BookOpen className="h-5 w-5" />} title="No courses yet" description="Add your first course to the directory." />
      ) : (
        <DataTable columns={columns} rows={rows} />
      )}

      {showForm && (
        <CourseFormModal
          initial={editing}
          onCancel={() => setShowForm(false)}
          onSave={(course) => {
            setRows((prev) => {
              if (editing) return prev.map((r) => (r.id === editing.id ? { ...r, ...course } : r));
              return [...prev, { ...course, id: `${course.title.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}` } as Row];
            });
            setShowForm(false);
          }}
        />
      )}

      {deleting && (
        <ConfirmDeleteModal
          itemLabel={deleting.title}
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

function CourseFormModal({
  initial,
  onCancel,
  onSave
}: {
  initial: Row | null;
  onCancel: () => void;
  onSave: (course: Partial<Row> & { title: string }) => void;
}) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [category, setCategory] = useState(initial?.category ?? "Python");
  const [level, setLevel] = useState(initial?.level ?? "Beginner");
  const [creatorName, setCreatorName] = useState(initial?.creator.name ?? "");
  const [isFree, setIsFree] = useState(initial?.isFree ?? true);
  const [description, setDescription] = useState(initial?.description ?? "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink-900/40 px-4 py-8">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-pop">
        <h3 className="font-display text-lg font-semibold text-ink-900">{initial ? "Edit course" : "Add course"}</h3>
        <form
          className="mt-4 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSave({
              ...(initial ?? {}),
              title,
              category: category as Row["category"],
              level: level as Row["level"],
              creator: { ...(initial?.creator ?? { platform: "YouTube", url: "#", avatarColor: "#0E8C87" }), name: creatorName },
              isFree,
              description,
              slug: initial?.slug ?? title.toLowerCase().replace(/\s+/g, "-")
            } as Row);
          }}
        >
          <TextField label="Title" value={title} onChange={setTitle} required />
          <TextField label="Creator" value={creatorName} onChange={setCreatorName} required />
          <TextField label="Description" value={description} onChange={setDescription} textarea />
          <label className="flex items-center gap-2 text-sm text-ink-700">
            <input type="checkbox" checked={isFree} onChange={(e) => setIsFree(e.target.checked)} className="h-4 w-4 accent-teal-500" />
            Free course
          </label>
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


