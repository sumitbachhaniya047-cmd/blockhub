// Core domain types for the Student Career & Learning Hub.
// These mirror the shape data will eventually take in Supabase tables,
// so the frontend can be wired to a real backend with minimal changes.

export type Category =
  | "C"
  | "C++"
  | "Python"
  | "Java"
  | "JavaScript"
  | "HTML/CSS"
  | "SQL"
  | "DSA"
  | "Web Development"
  | "Full Stack"
  | "AI/ML"
  | "Data Science"
  | "Cloud"
  | "Cybersecurity";

export type Level = "Beginner" | "Intermediate" | "Advanced";

export type SourceType = "YouTube Playlist" | "Official Course" | "Documentation" | "Interactive Platform";

export interface Creator {
  name: string;
  platform: string;
  url: string;
  avatarColor: string; // used for a letter-avatar swatch, no external images required
}

export interface CourseResource {
  title: string;
  type: "Video" | "Article" | "Practice" | "Docs";
  url: string;
}

export interface Project {
  title: string;
  description: string;
  difficulty: Level;
}

export interface Course {
  slug: string;
  title: string;
  category: Category;
  level: Level;
  creator: Creator;
  sourceType: SourceType;
  isFree: boolean;
  description: string;
  overview: string;
  durationHours: number;
  learners: number;
  rating: number;
  tags: string[];
  roadmapSteps: string[];
  resources: CourseResource[];
  projects: Project[];
  practiceResources: { title: string; url: string }[];
  relatedCertificateSlugs: string[];
  relatedInternshipIds: string[];
  originalUrl: string;
  lastVerified: string;
}

export type CostStatus = "Free" | "Free (Audit)" | "Paid" | "Free Trial";
export type VerificationStatus = "Verified" | "Pending Verification" | "Needs Recheck";

export interface Certificate {
  id: string;
  provider: string;
  programName: string;
  costStatus: CostStatus;
  certificateStatus: "Certificate Included" | "Badge Only" | "No Certificate";
  category: Category | "General Tech";
  officialUrl: string;
  verificationStatus: VerificationStatus;
  lastVerifiedDate: string;
  description: string;
  estimatedDuration: string;
}

export type WorkMode = "Remote" | "Onsite" | "Hybrid";
export type PayStatus = "Paid" | "Unpaid" | "Stipend" | "Unverified";

export interface Internship {
  id: string;
  company: string;
  role: string;
  location: string;
  workMode: WorkMode;
  payStatus: PayStatus;
  eligibility: string;
  deadline: string;
  applicationUrl: string;
  verificationStatus: VerificationStatus;
  category: Category | "General Tech";
  description: string;
  postedDate: string;
}

export interface RoadmapStage {
  title: string;
  description: string;
  skills: string[];
  suggestedCourseSlugs: string[];
  estimatedWeeks: number;
}

export interface Roadmap {
  slug: string;
  title: string;
  summary: string;
  totalEstimatedMonths: number;
  outcomeRoles: string[];
  stages: RoadmapStage[];
}

export interface StudentProfile {
  name: string;
  email: string;
  college: string;
  year: string;
  interests: Category[];
  avatarInitial: string;
}

export interface ProgressEntry {
  courseSlug: string;
  percentComplete: number;
}
