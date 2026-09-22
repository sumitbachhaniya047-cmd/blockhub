import type { Category } from "@/lib/types";

export interface CategoryMeta {
  name: Category;
  description: string;
  courseCount: number;
}

export const categories: CategoryMeta[] = [
  { name: "C", description: "Memory, pointers and the fundamentals everything else is built on", courseCount: 4 },
  { name: "C++", description: "Systems programming and competitive coding", courseCount: 5 },
  { name: "Python", description: "The fastest way from zero to your first script", courseCount: 9 },
  { name: "Java", description: "Object-oriented foundations and backend development", courseCount: 6 },
  { name: "JavaScript", description: "The language of the web, front to back", courseCount: 8 },
  { name: "HTML/CSS", description: "Structure and style your first web pages", courseCount: 5 },
  { name: "SQL", description: "Query, shape and reason about data", courseCount: 4 },
  { name: "DSA", description: "Data structures and algorithms for interviews", courseCount: 10 },
  { name: "Web Development", description: "Building real sites and apps end to end", courseCount: 7 },
  { name: "Full Stack", description: "Frontend, backend and everything that connects them", courseCount: 6 },
  { name: "AI/ML", description: "Machine learning fundamentals to applied models", courseCount: 7 },
  { name: "Data Science", description: "Analysis, visualization and statistical thinking", courseCount: 6 },
  { name: "Cloud", description: "AWS, Azure and GCP for deploying real systems", courseCount: 5 },
  { name: "Cybersecurity", description: "Defensive fundamentals and ethical hacking basics", courseCount: 4 }
];

export const popularLanguages = [
  "Python",
  "JavaScript",
  "Java",
  "C++",
  "C",
  "SQL",
  "TypeScript",
  "Go"
];
