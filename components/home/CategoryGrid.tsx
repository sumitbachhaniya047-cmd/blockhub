import Link from "next/link";
import { categories } from "@/lib/sample-data/categories";

export function CategoryGrid() {
  return (
    <section className="border-b border-line bg-white py-16">
      <div className="container-content">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Popular learning categories</h2>
            <p className="mt-1.5 text-sm text-ink-500">Pick a track and see every free course inside it.</p>
          </div>
          <Link href="/courses" className="focus-ring shrink-0 rounded-sm text-sm font-medium text-teal-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/courses?category=${encodeURIComponent(cat.name)}`}
              className="focus-ring group rounded-md border border-line bg-paper p-4 transition-colors hover:border-ink-900/30 hover:bg-white"
            >
              <p className="font-display text-sm font-semibold text-ink-900">{cat.name}</p>
              <p className="mt-1 text-xs leading-snug text-ink-500">{cat.description}</p>
              <p className="mt-3 font-mono text-[11px] text-teal-600">{cat.courseCount} courses</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
