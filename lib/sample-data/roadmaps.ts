import type { Roadmap } from "@/lib/types";

export const roadmaps: Roadmap[] = [
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    summary: "Go from web fundamentals to shipping and deploying a complete application.",
    totalEstimatedMonths: 8,
    outcomeRoles: ["Full Stack Developer", "Software Engineer", "Web Developer"],
    stages: [
      {
        title: "Web Foundations",
        description: "Learn the building blocks of every website.",
        skills: ["HTML", "CSS", "Responsive design", "Git & GitHub"],
        suggestedCourseSlugs: ["html-css-codewithharry"],
        estimatedWeeks: 4
      },
      {
        title: "Programming Fundamentals",
        description: "Pick up JavaScript as your core language for the stack.",
        skills: ["JavaScript", "DOM", "Async programming"],
        suggestedCourseSlugs: ["javascript-codewithharry"],
        estimatedWeeks: 6
      },
      {
        title: "Frontend Framework",
        description: "Build interactive UIs with a component-based framework.",
        skills: ["React", "Component design", "State management"],
        suggestedCourseSlugs: ["full-stack-web-dev-apna-college"],
        estimatedWeeks: 6
      },
      {
        title: "Backend & Databases",
        description: "Build and connect a server and database to your frontend.",
        skills: ["Node.js", "Express", "REST APIs", "MongoDB / SQL"],
        suggestedCourseSlugs: ["full-stack-web-dev-apna-college", "sql-freecodecamp"],
        estimatedWeeks: 8
      },
      {
        title: "Ship It",
        description: "Deploy a full project and prepare it for your portfolio.",
        skills: ["Deployment", "Environment variables", "Basic CI/CD"],
        suggestedCourseSlugs: [],
        estimatedWeeks: 4
      }
    ]
  },
  {
    slug: "python-developer",
    title: "Python Developer",
    summary: "Build a strong Python foundation and move into backend or automation work.",
    totalEstimatedMonths: 6,
    outcomeRoles: ["Python Developer", "Backend Developer", "Automation Engineer"],
    stages: [
      {
        title: "Python Fundamentals",
        description: "Syntax, data structures and writing clean functions.",
        skills: ["Python syntax", "Functions", "Data structures"],
        suggestedCourseSlugs: ["python-for-beginners-codewithharry"],
        estimatedWeeks: 5
      },
      {
        title: "Object-Oriented Python",
        description: "Structure larger programs with classes and modules.",
        skills: ["OOP", "Modules & packages", "Error handling"],
        suggestedCourseSlugs: ["python-for-beginners-codewithharry"],
        estimatedWeeks: 4
      },
      {
        title: "Working With Data & APIs",
        description: "Read files, call APIs, and manipulate structured data.",
        skills: ["File I/O", "requests library", "JSON"],
        suggestedCourseSlugs: ["data-science-freecodecamp"],
        estimatedWeeks: 4
      },
      {
        title: "Backend Basics",
        description: "Build your first API with a Python web framework.",
        skills: ["Flask or Django basics", "REST APIs", "SQL basics"],
        suggestedCourseSlugs: ["sql-freecodecamp"],
        estimatedWeeks: 6
      },
      {
        title: "Automate & Certify",
        description: "Apply Python to real automation tasks and validate your skills.",
        skills: ["Scripting", "Task automation"],
        suggestedCourseSlugs: [],
        estimatedWeeks: 3
      }
    ]
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    summary: "Learn to clean, analyze and visualize data to answer real questions.",
    totalEstimatedMonths: 6,
    outcomeRoles: ["Data Analyst", "Business Analyst", "Reporting Analyst"],
    stages: [
      {
        title: "Spreadsheets & SQL",
        description: "The two tools behind almost every analytics job.",
        skills: ["Excel/Sheets", "SQL queries", "Joins & aggregation"],
        suggestedCourseSlugs: ["sql-freecodecamp"],
        estimatedWeeks: 5
      },
      {
        title: "Python for Analysis",
        description: "Move from spreadsheets to programmatic analysis.",
        skills: ["Pandas", "NumPy", "Data cleaning"],
        suggestedCourseSlugs: ["data-science-freecodecamp"],
        estimatedWeeks: 6
      },
      {
        title: "Visualization & Storytelling",
        description: "Turn analysis into charts and narratives people act on.",
        skills: ["Matplotlib", "Dashboards", "Data storytelling"],
        suggestedCourseSlugs: ["data-science-freecodecamp"],
        estimatedWeeks: 4
      },
      {
        title: "Statistics Fundamentals",
        description: "Understand the reasoning behind the numbers.",
        skills: ["Descriptive statistics", "Correlation vs causation", "Hypothesis testing basics"],
        suggestedCourseSlugs: [],
        estimatedWeeks: 5
      },
      {
        title: "Portfolio & Certification",
        description: "Package projects and pursue a recognized certificate.",
        skills: ["Case study projects", "Certification prep"],
        suggestedCourseSlugs: [],
        estimatedWeeks: 4
      }
    ]
  },
  {
    slug: "ai-ml-engineer",
    title: "AI/ML Engineer",
    summary: "Build toward designing and training machine learning models.",
    totalEstimatedMonths: 10,
    outcomeRoles: ["ML Engineer", "AI Engineer", "Applied Scientist (entry level)"],
    stages: [
      {
        title: "Python & Math Foundations",
        description: "The prerequisites every ML course assumes you already have.",
        skills: ["Python", "Linear algebra basics", "Probability basics"],
        suggestedCourseSlugs: ["python-for-beginners-codewithharry"],
        estimatedWeeks: 6
      },
      {
        title: "Data Handling",
        description: "Get comfortable preparing data for models.",
        skills: ["Pandas", "NumPy", "Data cleaning"],
        suggestedCourseSlugs: ["data-science-freecodecamp"],
        estimatedWeeks: 4
      },
      {
        title: "Core Machine Learning",
        description: "Learn the algorithms behind most real-world models.",
        skills: ["Regression", "Classification", "Model evaluation"],
        suggestedCourseSlugs: ["machine-learning-andrew-ng"],
        estimatedWeeks: 10
      },
      {
        title: "Neural Networks",
        description: "Move from classical ML into deep learning fundamentals.",
        skills: ["Neural networks", "Backpropagation", "Intro to a DL framework"],
        suggestedCourseSlugs: ["machine-learning-andrew-ng"],
        estimatedWeeks: 8
      },
      {
        title: "Applied Projects & Certification",
        description: "Build a portfolio of applied projects and pursue a recognized credential.",
        skills: ["End-to-end ML projects", "Model deployment basics"],
        suggestedCourseSlugs: [],
        estimatedWeeks: 6
      }
    ]
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    summary: "Build defensive fundamentals and move toward analyst-level skills.",
    totalEstimatedMonths: 7,
    outcomeRoles: ["Security Analyst", "SOC Analyst (entry level)", "IT Security Support"],
    stages: [
      {
        title: "Networking Fundamentals",
        description: "You can't secure what you don't understand.",
        skills: ["TCP/IP", "DNS", "Firewalls"],
        suggestedCourseSlugs: ["cybersecurity-basics-freecodecamp"],
        estimatedWeeks: 5
      },
      {
        title: "Security Fundamentals",
        description: "Core concepts behind common attacks and defenses.",
        skills: ["CIA triad", "Common vulnerabilities", "Cryptography basics"],
        suggestedCourseSlugs: ["cybersecurity-basics-freecodecamp"],
        estimatedWeeks: 5
      },
      {
        title: "Tools & Practice",
        description: "Get hands-on in safe, legal practice environments.",
        skills: ["Packet analysis", "Vulnerability scanning basics"],
        suggestedCourseSlugs: [],
        estimatedWeeks: 6
      },
      {
        title: "Certification Track",
        description: "Work toward a recognized entry-level credential.",
        skills: ["Exam prep", "Practice tests"],
        suggestedCourseSlugs: ["cybersecurity-basics-freecodecamp"],
        estimatedWeeks: 8
      }
    ]
  },
  {
    slug: "cloud-devops",
    title: "Cloud / DevOps",
    summary: "Learn to provision, deploy and monitor systems in the cloud.",
    totalEstimatedMonths: 7,
    outcomeRoles: ["Cloud Support Engineer", "DevOps Engineer (entry level)", "Site Reliability Intern"],
    stages: [
      {
        title: "Linux & Command Line",
        description: "The operating system layer behind most cloud infrastructure.",
        skills: ["Linux basics", "Shell scripting", "Networking basics"],
        suggestedCourseSlugs: [],
        estimatedWeeks: 4
      },
      {
        title: "Cloud Fundamentals",
        description: "Core concepts common across every major cloud provider.",
        skills: ["Compute, storage, networking", "IAM", "Pricing models"],
        suggestedCourseSlugs: ["aws-cloud-practitioner-freecodecamp"],
        estimatedWeeks: 5
      },
      {
        title: "Containers & CI/CD",
        description: "Package and automatically deploy applications.",
        skills: ["Docker basics", "CI/CD pipelines"],
        suggestedCourseSlugs: [],
        estimatedWeeks: 6
      },
      {
        title: "Monitoring & Certification",
        description: "Keep systems observable and validate your skills.",
        skills: ["Logging & monitoring", "Certification prep"],
        suggestedCourseSlugs: ["aws-cloud-practitioner-freecodecamp"],
        estimatedWeeks: 6
      }
    ]
  }
];

export function getRoadmapBySlug(slug: string): Roadmap | undefined {
  return roadmaps.find((r) => r.slug === slug);
}
