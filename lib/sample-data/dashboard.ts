import type { ProgressEntry, StudentProfile } from "@/lib/types";

export const currentStudent: StudentProfile = {
  name: "Ananya Sharma",
  email: "ananya.sharma@example.edu",
  college: "Institute of Engineering & Technology",
  year: "3rd Year",
  interests: ["Python", "AI/ML", "Data Science"],
  avatarInitial: "A"
};

export const savedCourseSlugs = [
  "python-for-beginners-codewithharry",
  "machine-learning-andrew-ng",
  "sql-freecodecamp"
];

export const progress: ProgressEntry[] = [
  { courseSlug: "python-for-beginners-codewithharry", percentComplete: 72 },
  { courseSlug: "sql-freecodecamp", percentComplete: 40 },
  { courseSlug: "machine-learning-andrew-ng", percentComplete: 15 }
];

export const savedCertificateIds = ["google-data-analytics", "deeplearning-ai-ml-specialization"];

export const savedInternshipIds = ["intern-ml-05"];

export const currentRoadmapSlug = "ai-ml-engineer";
