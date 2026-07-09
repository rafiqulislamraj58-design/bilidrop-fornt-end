"use client";

export default function BookFilter({
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Categories</option>
        <option value="Programming">Programming</option>
        <option value="Self Help">Self Help</option>
        <option value="Finance">Finance</option>
        <option value="History">History</option>
        <option value="Novel">Novel</option>
        <option value="Science">Science</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Newest</option>
        <option value="title">Title (A-Z)</option>
        <option value="-title">Title (Z-A)</option>
        <option value="price">Price (Low → High)</option>
        <option value="-price">Price (High → Low)</option>
      </select>

    </div>
  );
}