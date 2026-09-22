import { SearchBar } from "@/components/ui/SearchBar";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "60+", label: "curated courses" },
  { value: "8", label: "certificate providers" },
  { value: "6", label: "career roadmaps" }
];

export function Hero() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-content grid grid-cols-1 gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">

        {/* Main Hero Content */}
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-teal-600">
            Learn. Build. Grow.
          </p>

          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] text-ink-900 sm:text-5xl md:text-6xl">
            Your complete path from learning to getting job ready.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600">
            BlockHub brings courses, projects, certificates, internships and
            career roadmaps together in one place — so you always know what
            to learn next and how to move closer to your career goal.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-xl">
            <SearchBar
              placeholder='Try “Python”, “AWS certificate”, or “frontend internship”'
            />
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <LinkButton href="/roadmaps" variant="primary">
              Explore roadmaps
              <ArrowRight className="h-4 w-4" />
            </LinkButton>

            <LinkButton href="/courses" variant="outline">
              Browse courses
            </LinkButton>
          </div>

          {/* Trust Points */}
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
              Curated learning resources
            </span>

            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
              Official certificate sources
            </span>

            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
              Student-focused opportunities
            </span>
          </div>
        </div>

        {/* Stats / Journey Card */}
        <div className="self-start rounded-lg border border-line bg-white p-5 shadow-card md:mt-4">

          <div className="mb-5">
            <p className="font-mono text-xs uppercase tracking-wide text-ink-400">
              The BlockHub Journey
            </p>

            <h2 className="mt-2 font-display text-xl font-semibold text-ink-900">
              Learn → Practice → Build → Certify → Intern → Get Job Ready
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 border-line sm:border-l sm:pl-4 sm:first:border-l-0 sm:first:pl-0"
              >
                <span className="font-display text-2xl font-bold text-ink-900">
                  {s.value}
                </span>

                <span className="text-xs leading-tight text-ink-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-md bg-amber-50 p-4 text-xs leading-relaxed text-amber-700">
            <strong className="font-semibold">
              One platform. One clear direction.
            </strong>{" "}
            BlockHub helps students discover reliable resources without
            having to search through dozens of websites.
          </div>
        </div>
      </div>
    </section>
  );
}