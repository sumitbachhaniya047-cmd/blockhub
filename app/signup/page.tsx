"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function SignupPage() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-paper px-4 py-16">
      <div className="w-full max-w-sm rounded-lg border border-line bg-white p-8 shadow-card">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink-900 text-amber-500">
            <GraduationCap className="h-4.5 w-4.5" />
          </span>
          <span className="font-display text-lg font-semibold text-ink-900">Pathfolio</span>
        </div>

        <h1 className="mt-6 font-display text-2xl font-bold text-ink-900">Create your account</h1>
        <p className="mt-1 text-sm text-ink-500">Save courses, track progress and follow a roadmap.</p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitting(true);
            setTimeout(() => setSubmitting(false), 900);
          }}
        >
          <Field label="Full name" icon={<User className="h-4 w-4" />} type="text" placeholder="Ananya Sharma" required />
          <Field label="College email" icon={<Mail className="h-4 w-4" />} type="email" placeholder="you@college.edu" required />
          <Field label="Password" icon={<Lock className="h-4 w-4" />} type="password" placeholder="At least 8 characters" required />

          <Button type="submit" variant="primary" className="w-full" disabled={submitting}>
            {submitting ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-500">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-ink-900 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; icon: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-700">{label}</span>
      <span className="flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-2.5 focus-within:border-ink-900/40">
        <span className="text-ink-500">{icon}</span>
        <input {...props} className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-500/60 focus:outline-none" />
      </span>
    </label>
  );
}
