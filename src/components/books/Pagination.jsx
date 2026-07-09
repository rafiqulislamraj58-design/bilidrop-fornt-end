"use client";

export default function Pagination({
  page,
  setPage,
  meta,
}) {
  if (!meta?.totalPages || meta.totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-3 mt-10">

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={`px-5 py-2 rounded-xl font-medium transition ${
          page === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
      >
        Previous
      </button>

      <div className="px-5 py-2 rounded-xl border font-semibold">
        {page} / {meta.totalPages}
      </div>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === meta.totalPages}
        className={`px-5 py-2 rounded-xl font-medium transition ${
          page === meta.totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
      >
        Next
      </button>

    </div>
  );
}