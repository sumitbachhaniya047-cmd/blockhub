import { AdminClient } from "./AdminClient";

export const metadata = { title: "Admin — Pathfolio" };

export default function AdminPage() {
  return (
    <div className="container-content py-10">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-ink-900">Admin dashboard</h1>
        <p className="mt-1.5 text-sm text-ink-500">
          Manage courses, certificates, internships and users. Changes here are local to this session until connected
          to a real database.
        </p>
      </div>
      <AdminClient />
    </div>
  );
}
