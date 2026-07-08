"use client";

import Link from "next/link";

const categories = [
  { id: 1, name: "Fiction", icon: "📚" },
  { id: 2, name: "Sci-Fi", icon: "🚀" },
  { id: 3, name: "Academic", icon: "🎓" },
  { id: 4, name: "History", icon: "🏛️" },
  { id: 5, name: "Biography", icon: "👤" },
  { id: 6, name: "Novel", icon: "✍️" },
];

export default function PopularCategories() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Popular Categories
          </h2>

          <p className="mt-3 text-gray-500">
            Explore books by category and find your next read.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/books?category=${category.name}`}
            >
              <div className="h-full rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                <div className="text-5xl mb-5">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {category.name}
                </h3>

                <p className="mt-2 text-gray-500">
                  Browse books in {category.name}.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}