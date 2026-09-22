"use client";

import { useState } from "react";
import { AdminSidebar, type AdminTabId } from "@/components/admin/AdminSidebar";
import { OverviewPanel } from "./OverviewPanel";
import { CoursesPanel } from "./CoursesPanel";
import { CertificatesPanel } from "./CertificatesPanel";
import { InternshipsPanel } from "./InternshipsPanel";
import { UsersPanel } from "./UsersPanel";

export function AdminClient() {
  const [active, setActive] = useState<AdminTabId>("overview");

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
      <AdminSidebar active={active} onChange={setActive} />
      <div>
        {active === "overview" && <OverviewPanel />}
        {active === "courses" && <CoursesPanel />}
        {active === "certificates" && <CertificatesPanel />}
        {active === "internships" && <InternshipsPanel />}
        {active === "users" && <UsersPanel />}
      </div>
    </div>
  );
}
