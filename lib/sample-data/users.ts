export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "Student" | "Admin";
  joined: string;
  status: "Active" | "Suspended";
}

export const users: AdminUser[] = [
  { id: "u1", name: "Ananya Sharma", email: "ananya.sharma@example.edu", role: "Student", joined: "2026-02-14", status: "Active" },
  { id: "u2", name: "Rohan Mehta", email: "rohan.mehta@example.edu", role: "Student", joined: "2026-03-02", status: "Active" },
  { id: "u3", name: "Priya Nair", email: "priya.nair@example.edu", role: "Admin", joined: "2025-11-20", status: "Active" },
  { id: "u4", name: "Karan Verma", email: "karan.verma@example.edu", role: "Student", joined: "2026-04-18", status: "Suspended" },
  { id: "u5", name: "Sara Khan", email: "sara.khan@example.edu", role: "Student", joined: "2026-05-30", status: "Active" }
];
