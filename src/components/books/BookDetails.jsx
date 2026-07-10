"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import axiosPublic from "@/lib/axiosPublic";
import { useSession } from "@/lib/auth-client";

export default function BookDetails() {
  const { id } = useParams();

  const { data: session } = useSession();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    try {
      setLoading(true);

      const res = await axiosPublic.get(`/books/${id}`);

      setBook(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
        Book Not Found
      </div>
    );
  }

  const isAvailable = book.status === "available";

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      <Link
        href="/browse"
        className="inline-flex items-center gap-2 text-indigo-600 mb-8"
      >
        <ArrowLeft size={18} />
        Back to Browse
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <Image
            src={
              book.coverImage || "https://placehold.co/600x800?text=No+Image"
            }
            alt={book.title}
            width={600}
            height={800}
            className="rounded-3xl w-full shadow-lg object-cover"
          />
        </div>

        <div>
          <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold">
            {book.category}
          </span>

          <h1 className="text-5xl font-bold mt-5">{book.title}</h1>

          <p className="text-xl text-gray-500 mt-3">by {book.author}</p>

          <div className="flex gap-3 mt-6">
            <span
              className={`px-4 py-2 rounded-full font-semibold ${
                isAvailable
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {isAvailable ? "Available" : "Unavailable"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-10">
            <div>
              <p className="text-gray-500">Price</p>

              <h3 className="text-2xl font-bold">$ {book.price}</h3>
            </div>

            <div>
              <p className="text-gray-500">Stock</p>

              <h3 className="text-2xl font-bold">{book.stock}</h3>
            </div>

            <div>
              <p className="text-gray-500">Total Copies</p>

              <h3 className="font-semibold">{book.totalCopies || "-"}</h3>
            </div>

            <div>
              <p className="text-gray-500">Available Copies</p>

              <h3 className="font-semibold">{book.availableCopies || "-"}</h3>
            </div>

            <div>
              <p className="text-gray-500">Publisher</p>

              <h3 className="font-semibold">{book.publisher || "-"}</h3>
            </div>

            <div>
              <p className="text-gray-500">Published</p>

              <h3 className="font-semibold">{book.publishedYear || "-"}</h3>
            </div>

            <div>
              <p className="text-gray-500">ISBN</p>

              <h3 className="font-semibold break-all">{book.isbn || "-"}</h3>
            </div>

            <div>
              <p className="text-gray-500">Language</p>

              <h3 className="font-semibold">{book.language || "-"}</h3>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-3">Description</h2>

            <p className="leading-8 text-gray-600 dark:text-gray-300">
              {book.description || "No description available."}
            </p>
          </div>

          <div className="mt-10">
            {session ? (
              <Link
                href={`/payment/${book._id}`}
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                Request Delivery
              </Link>
            ) : (
              <Link
                href="/auth/signin"
                className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold"
              >
                Login to Request Delivery
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Reviews</h2>

        <div className="border rounded-2xl p-10 text-center text-gray-500">
          No Reviews Yet.
        </div>
      </div>
    </section>
  );
}
