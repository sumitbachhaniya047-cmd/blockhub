import type { Internship } from "@/lib/types";

// Placeholder internship listings for frontend development.
// Deadlines, pay status and eligibility must be verified against the
// employer's own listing before anything here is shown to real students.

export const internships: Internship[] = [
  {
    id: "intern-python-backend-01",
    company: "Nimbus Data Labs",
    role: "Backend Engineering Intern (Python)",
    location: "Bengaluru, India",
    workMode: "Hybrid",
    payStatus: "Paid",
    eligibility: "Pre-final or final year, CS/IT background",
    deadline: "2026-10-15",
    applicationUrl: "https://example.com/careers/nimbus-backend-intern",
    verificationStatus: "Pending Verification",
    category: "Python",
    description: "Work on internal data pipelines and REST APIs alongside the platform team.",
    postedDate: "2026-09-01"
  },
  {
    id: "intern-java-backend-02",
    company: "Vertex Financial Systems",
    role: "Software Engineering Intern (Java)",
    location: "Pune, India",
    workMode: "Onsite",
    payStatus: "Stipend",
    eligibility: "3rd/4th year undergraduates",
    deadline: "2026-10-30",
    applicationUrl: "https://example.com/careers/vertex-java-intern",
    verificationStatus: "Pending Verification",
    category: "Java",
    description: "Contribute to backend services for an internal trade-processing system under senior engineer mentorship.",
    postedDate: "2026-09-05"
  },
  {
    id: "intern-frontend-03",
    company: "Brightloop Studio",
    role: "Frontend Development Intern",
    location: "Remote",
    workMode: "Remote",
    payStatus: "Unverified",
    eligibility: "Open to all years; portfolio required",
    deadline: "2026-10-05",
    applicationUrl: "https://example.com/careers/brightloop-frontend-intern",
    verificationStatus: "Needs Recheck",
    category: "JavaScript",
    description: "Build UI components for client marketing sites using React and Tailwind CSS.",
    postedDate: "2026-08-28"
  },
  {
    id: "intern-fullstack-04",
    company: "Harborline Technologies",
    role: "Full Stack Intern (MERN)",
    location: "Hyderabad, India",
    workMode: "Hybrid",
    payStatus: "Paid",
    eligibility: "Final year students, prior project experience preferred",
    deadline: "2026-11-01",
    applicationUrl: "https://example.com/careers/harborline-fullstack-intern",
    verificationStatus: "Verified",
    category: "Full Stack",
    description: "Ship features end to end on a customer-facing SaaS product built with MongoDB, Express, React and Node.",
    postedDate: "2026-09-08"
  },
  {
    id: "intern-ml-05",
    company: "Solace AI",
    role: "Machine Learning Research Intern",
    location: "Remote",
    workMode: "Remote",
    payStatus: "Stipend",
    eligibility: "Strong Python and statistics background",
    deadline: "2026-10-20",
    applicationUrl: "https://example.com/careers/solace-ml-intern",
    verificationStatus: "Pending Verification",
    category: "AI/ML",
    description: "Support experiments for a small research team working on applied NLP models.",
    postedDate: "2026-09-02"
  },
  {
    id: "intern-cloud-06",
    company: "Meridian Cloud Services",
    role: "Cloud Infrastructure Intern",
    location: "Gurugram, India",
    workMode: "Onsite",
    payStatus: "Paid",
    eligibility: "Familiarity with AWS or Azure fundamentals",
    deadline: "2026-11-10",
    applicationUrl: "https://example.com/careers/meridian-cloud-intern",
    verificationStatus: "Pending Verification",
    category: "Cloud",
    description: "Assist with provisioning, monitoring and cost optimization for client cloud environments.",
    postedDate: "2026-09-10"
  }
];

export function getInternshipById(id: string): Internship | undefined {
  return internships.find((i) => i.id === id);
}
