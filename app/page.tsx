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
    </>
  );
}
