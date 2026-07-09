"use client";

export default function BookSearch({
  search,
  setSearch,
}) {
  return (
    <div className="lg:col-span-2">
      <input
        type="text"
        placeholder="🔍 Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
    </div>
  );
}