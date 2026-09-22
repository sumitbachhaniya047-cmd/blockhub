import Link from "next/link";
import { popularLanguages } from "@/lib/sample-data/categories";

export function LanguageStrip() {
  return (
    <section className="bg-paper py-10">
      <div className="container-content">
        <p className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-500">Popular languages</p>
        <div className="flex flex-wrap gap-2.5">
          {popularLanguages.map((lang) => (
            <Link
              key={lang}
              href={`/courses?category=${encodeURIComponent(lang)}`}
              className="focus-ring rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:border-ink-900/40 hover:text-ink-900"
            >
              {lang}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
