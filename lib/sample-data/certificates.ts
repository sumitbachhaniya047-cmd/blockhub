import type { Certificate } from "@/lib/types";

// All entries are placeholder/sample data for frontend development.
// Cost, certificate inclusion and verification status must be re-checked
// against each provider's official page before this is shown to real users.

export const certificates: Certificate[] = [
  {
    id: "google-it-automation-python",
    provider: "Google",
    programName: "Google IT Automation with Python",
    costStatus: "Free (Audit)",
    certificateStatus: "Certificate Included",
    category: "Python",
    officialUrl: "https://grow.google/intl/en_in/",
    verificationStatus: "Pending Verification",
    lastVerifiedDate: "2026-08-01",
    description: "A Google Career Certificate covering Python, Git and IT automation. Auditing the content is free; a fee applies for the certificate.",
    estimatedDuration: "6 months at 5 hrs/week"
  },
  {
    id: "google-data-analytics",
    provider: "Google",
    programName: "Google Data Analytics Certificate",
    costStatus: "Free Trial",
    certificateStatus: "Certificate Included",
    category: "Data Science",
    officialUrl: "https://grow.google/intl/en_in/",
    verificationStatus: "Pending Verification",
    lastVerifiedDate: "2026-08-01",
    description: "Covers the full data analysis process using spreadsheets, SQL, Tableau and R. Offered via Coursera with a 7-day free trial.",
    estimatedDuration: "6 months at 5 hrs/week"
  },
  {
    id: "microsoft-azure-fundamentals",
    provider: "Microsoft",
    programName: "Microsoft Azure Fundamentals (AZ-900)",
    costStatus: "Free",
    certificateStatus: "Badge Only",
    category: "Cloud",
    officialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
    verificationStatus: "Verified",
    lastVerifiedDate: "2026-08-20",
    description: "Free official learning path on Microsoft Learn. The certification exam itself carries a separate fee if you choose to take it.",
    estimatedDuration: "4–6 weeks self-paced"
  },
  {
    id: "cisco-networking-basics",
    provider: "Cisco",
    programName: "Cisco Networking Basics",
    costStatus: "Free",
    certificateStatus: "Certificate Included",
    category: "Cybersecurity",
    officialUrl: "https://www.netacad.com/courses/networking-basics",
    verificationStatus: "Verified",
    lastVerifiedDate: "2026-08-18",
    description: "Introductory networking course from Cisco Networking Academy with a free completion certificate.",
    estimatedDuration: "70 hours self-paced"
  },
  {
    id: "ibm-cybersecurity-analyst",
    provider: "IBM",
    programName: "IBM Cybersecurity Analyst Professional Certificate",
    costStatus: "Free Trial",
    certificateStatus: "Certificate Included",
    category: "Cybersecurity",
    officialUrl: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",
    verificationStatus: "Pending Verification",
    lastVerifiedDate: "2026-07-30",
    description: "A multi-course professional certificate covering security fundamentals, tools and incident response. Offered via Coursera.",
    estimatedDuration: "8 months at 4 hrs/week"
  },
  {
    id: "aws-cloud-practitioner",
    provider: "Amazon Web Services",
    programName: "AWS Certified Cloud Practitioner — Exam Guide & Training",
    costStatus: "Free",
    certificateStatus: "No Certificate",
    category: "Cloud",
    officialUrl: "https://skillbuilder.aws/",
    verificationStatus: "Verified",
    lastVerifiedDate: "2026-08-22",
    description: "Free official training on AWS Skill Builder. The certification exam is a separate, paid step administered by AWS.",
    estimatedDuration: "20–30 hours self-paced"
  },
  {
    id: "meta-frontend-developer",
    provider: "Meta",
    programName: "Meta Front-End Developer Professional Certificate",
    costStatus: "Free Trial",
    certificateStatus: "Certificate Included",
    category: "Web Development",
    officialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    verificationStatus: "Pending Verification",
    lastVerifiedDate: "2026-07-25",
    description: "Nine-course program covering HTML, CSS, JavaScript and React, built by Meta engineers. Offered via Coursera.",
    estimatedDuration: "7 months at 4 hrs/week"
  },
  {
    id: "deeplearning-ai-ml-specialization",
    provider: "DeepLearning.AI",
    programName: "Machine Learning Specialization",
    costStatus: "Free Trial",
    certificateStatus: "Certificate Included",
    category: "AI/ML",
    officialUrl: "https://www.coursera.org/specializations/machine-learning-introduction",
    verificationStatus: "Pending Verification",
    lastVerifiedDate: "2026-07-28",
    description: "Andrew Ng's widely known ML specialization, offered via Coursera with a free trial and full audit option.",
    estimatedDuration: "3 months at 10 hrs/week"
  }
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find((c) => c.id === id);
}
