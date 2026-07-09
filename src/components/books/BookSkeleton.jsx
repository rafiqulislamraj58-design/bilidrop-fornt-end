"use client";

export default function BookSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="border rounded-2xl overflow-hidden animate-pulse bg-white dark:bg-slate-900"
        >
         
          <div className="w-full h-72 bg-gray-300 dark:bg-slate-700"></div>

         
          <div className="p-5 space-y-4">
            <div className="h-4 w-20 rounded bg-gray-300 dark:bg-slate-700"></div>

            <div className="h-6 w-full rounded bg-gray-300 dark:bg-slate-700"></div>

            <div className="h-4 w-2/3 rounded bg-gray-300 dark:bg-slate-700"></div>

            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <div className="h-3 w-16 rounded bg-gray-300 dark:bg-slate-700"></div>
                <div className="h-5 w-20 rounded bg-gray-300 dark:bg-slate-700"></div>
              </div>

              <div className="h-7 w-20 rounded-full bg-gray-300 dark:bg-slate-700"></div>
            </div>

            <div className="h-10 rounded-xl bg-gray-300 dark:bg-slate-700"></div>
          </div>
        </div>
      ))}
    </div>
  );
}