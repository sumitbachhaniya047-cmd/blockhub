import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Instagram, Mail, Phone } from "lucide-react";

const columns = [
  {
    title: "Learn",
    links: [
      { label: "Course directory", href: "/courses" },
      { label: "Career roadmaps", href: "/roadmaps" },
      { label: "Certificates", href: "/certificates" }
    ]
  },
  {
    title: "Opportunities",
    links: [
      { label: "Internships", href: "/internships" },
      { label: "Student dashboard", href: "/dashboard" }
    ]
  },
  {
    title: "Account",
    links: [
      { label: "Log in", href: "/login" },
      { label: "Create account", href: "/signup" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-900 text-paper/80">
      <div className="container-content grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 md:grid-cols-5">

        {/* Brand + Founder */}
        <div className="sm:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-lg font-semibold text-paper"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-500 text-ink-900">
              <GraduationCap className="h-4.5 w-4.5" />
            </span>

            BlockHub
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
            Learn, practice, build and grow with curated courses, trusted
            certificate opportunities, career roadmaps and internships —
            all organized in one place for students.
          </p>

          {/* Founder */}
          <div className="mt-7 flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-amber-500/60">
              <Image
                src="/sumit.jpg"
                alt="Sumit Bachhaniya - Founder of BlockHub"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-paper/40">
                Founder
              </p>

              <p className="mt-1 font-display text-sm font-semibold text-paper">
                Sumit Bachhaniya
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-5 space-y-2">
            <a
              href="mailto:sumitbachhaniya047@gmail.com"
              className="flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-paper"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span>sumitbachhaniya047@gmail.com</span>
            </a>

            <a
              href="tel:+917247523834"
              className="flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-paper"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span>+91 7247523834</span>
            </a>

            <a
              href="https://www.instagram.com/sumitbachhaniya977"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-paper"
            >
              <Instagram className="h-4 w-4 shrink-0" />
              <span>@sumitbachhaniya977</span>
            </a>
          </div>
        </div>

        {/* Footer Columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold text-paper">
              {col.title}
            </h4>

            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-content flex flex-col gap-3 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 BlockHub. Course and certificate content belongs to
            its original creators and providers.
          </p>

          <p>
            We link to official sources — we never host, re-upload or issue
            certificates ourselves.
          </p>
        </div>
      </div>
    </footer>
  );
}