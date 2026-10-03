import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { LanguageStrip } from "@/components/home/LanguageStrip";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { CertificateHighlights } from "@/components/home/CertificateHighlights";
import { InternshipHighlights } from "@/components/home/InternshipHighlights";
import { RoadmapTeaser } from "@/components/home/RoadmapTeaser";
import { JourneySection } from "@/components/home/JourneySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LanguageStrip />
      <CategoryGrid />
      <FeaturedCourses />
      <JourneySection />
      <CertificateHighlights />
      <InternshipHighlights />
      <RoadmapTeaser />

      {/* Android App Download */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-center sm:px-12">
          <div className="mx-auto max-w-2xl">
            <div className="mb-5 text-5xl">📱</div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get BlockHub on Android
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
              Take your learning hub with you. Install the BlockHub Android
              app and access courses, internships, certificates and roadmaps
              from your phone.
            </p>

            <a
              href="/BlockHub.apk"
              download="BlockHub.apk"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Download BlockHub App
            </a>

            <p className="mt-4 text-xs text-slate-400">
              Android APK • Official BlockHub app
            </p>
          </div>
        </div>
      </section>
    </>
  );
}