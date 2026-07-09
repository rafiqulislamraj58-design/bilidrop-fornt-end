"use client";

import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      <div className="relative h-72 w-full">
        <Image
          src={
            book.coverImage ||
            "https://placehold.co/400x600?text=No+Image"
          }
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>

   
      <div className="p-5">

        <span className="inline-block text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 mb-3">
          {book.category}
        </span>

        <h2 className="text-xl font-bold line-clamp-1">
          {book.title}
        </h2>

        <p className="text-gray-500 mt-1">
          {book.author}
        </p>

        <div className="flex justify-between items-center mt-5">

          <div>
            <p className="text-xs text-gray-500">
              Delivery Fee
            </p>

            <p className="font-bold text-lg">
              ৳ {book.price}
            </p>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              book.status === "available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {book.status === "available"
              ? "Available"
              : "Unavailable"}
          </span>
        </div>

        <Link
          href={`/books/${book._id}`}
          className="mt-6 block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}