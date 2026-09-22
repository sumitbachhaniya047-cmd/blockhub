import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Clock, Users, Star, CheckCircle2 } from "lucide-react";
import { courses, getCourseBySlug, getRelatedCourses } from "@/lib/sample-data/courses";
import { certificates } from "@/lib/sample-data/certificates";
import { internships } from "@/lib/sample-data/internships";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { LetterAvatar } from "@/components/ui/Avatar";
import { CourseCard } from "@/components/courses/CourseCard";
import { formatNumber, formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  return { title: course ? `${course.title} — Pathfolio` : "Course not found — Pathfolio" };
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  const relatedCourses = getRelatedCourses(course);
  const relatedCertificates = certificates.filter((c) => course.relatedCertificateSlugs.includes(c.id));
  const relatedInternships = internships.filter((i) => course.relatedInternshipIds.includes(i.id));

  return (
    <div className="container-content py-10">
      <div className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
        <Link href="/courses" className="hover:underline">
          Courses
        </Link>
        <span>/</span>
        <span>{course.category}</span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="outline">{course.category}</Badge>
            <Badge tone="outline">{course.level}</Badge>
            {course.isFree && <Badge tone="teal">Free</Badge>}
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">{course.title}</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-600">{course.overview}</p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink-500">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {course.durationHours} hours
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" /> {formatNumber(course.learners)} learners
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-500 text-amber-500" /> {course.rating} rating
            </span>
          </div>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink-900">Learning roadmap</h2>
            <ol className="mt-4 space-y-3">
              {course.roadmapSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-3 rounded-md border border-line bg-white p-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 font-mono text-xs font-medium text-teal-600">
                    {i + 1}
                  </span>
                  <span className="text-sm text-ink-700">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink-900">Curated resources</h2>
            <div className="mt-4 space-y-2.5">
              {course.resources.map((r) => (
                <Link
                  key={r.url + r.title}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="focus-ring flex items-center justify-between rounded-md border border-line bg-white p-3.5 text-sm hover:border-ink-900/30"
                >
                  <span className="text-ink-800">{r.title}</span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-500">
                    {r.type} <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink-900">Projects to build</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {course.projects.map((p) => (
                <div key={p.title} className="rounded-md border border-line bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-sm font-semibold text-ink-900">{p.title}</p>
                    <Badge tone="outline">{p.difficulty}</Badge>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink-900">Practice resources</h2>
            <ul className="mt-4 space-y-2">
              {course.practiceResources.map((p) => (
                <li key={p.url}>
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="focus-ring inline-flex items-center gap-1.5 text-sm text-teal-600 hover:underline"
                  >
                    <CheckCircle2 className="h-4 w-4" /> {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {(relatedCertificates.length > 0 || relatedInternships.length > 0) && (
            <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedCertificates.length > 0 && (
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink-900">Related certificates</h2>
                  <div className="mt-3 space-y-2">
                    {relatedCertificates.map((c) => (
                      <Link
                        key={c.id}
                        href="/certificates"
                        className="focus-ring block rounded-md border border-line bg-white p-3 text-sm hover:border-ink-900/30"
                      >
                        <span className="font-medium text-ink-900">{c.programName}</span>
                        <span className="block text-xs text-ink-500">{c.provider}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {relatedInternships.length > 0 && (
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink-900">Related internships</h2>
                  <div className="mt-3 space-y-2">
                    {relatedInternships.map((i) => (
                      <Link
                        key={i.id}
                        href="/internships"
                        className="focus-ring block rounded-md border border-line bg-white p-3 text-sm hover:border-ink-900/30"
                      >
                        <span className="font-medium text-ink-900">{i.role}</span>
                        <span className="block text-xs text-ink-500">{i.company}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-line bg-white p-5">
            <div className="flex items-center gap-3">
              <LetterAvatar label={course.creator.name} color={course.creator.avatarColor} />
              <div>
                <p className="font-display text-sm font-semibold text-ink-900">{course.creator.name}</p>
                <p className="text-xs text-ink-500">{course.sourceType}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-ink-500">Last verified {formatDate(course.lastVerified)}</p>
            <LinkButton href={course.originalUrl} variant="primary" className="mt-4 w-full">
              View original source <ExternalLink className="h-3.5 w-3.5" />
            </LinkButton>
            <p className="mt-3 text-center text-xs text-ink-500">
              Hosted and taught by {course.creator.name}. Pathfolio only links to it.
            </p>
          </div>
        </aside>
      </div>

      {relatedCourses.length > 0 && (
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-display text-xl font-semibold text-ink-900">More in {course.category}</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCourses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
