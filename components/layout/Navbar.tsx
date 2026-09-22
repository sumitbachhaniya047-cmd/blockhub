"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/certificates", label: "Certificates" },
  { href: "/internships", label: "Internships" },
  { href: "/roadmaps", label: "Roadmaps" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink-900 text-amber-500">
            <GraduationCap className="h-4.5 w-4.5" />
          </span>

          <span>BlockHub</span>

          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-amber-500/60">
            <Image
              src="/sumit.jpg"
              alt="Sumit Bachhaniya"
              fill
              sizes="32px"
              className="object-cover"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              pathname.startsWith(link.href + "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "focus-ring rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-ink-900"
                    : "text-ink-500 hover:text-ink-900"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LinkButton href="/login" variant="ghost" size="sm">
            Log in
          </LinkButton>

          <LinkButton href="/signup" variant="secondary" size="sm">
            Get started
          </LinkButton>
        </div>

        <button
          className="focus-ring rounded-md p-2 text-ink-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="container-content flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-white"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 flex gap-2 border-t border-line pt-3">
              <LinkButton
                href="/login"
                variant="outline"
                size="sm"
                className="flex-1"
              >
                Log in
              </LinkButton>

              <LinkButton
                href="/signup"
                variant="secondary"
                size="sm"
                className="flex-1"
              >
                Get started
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}