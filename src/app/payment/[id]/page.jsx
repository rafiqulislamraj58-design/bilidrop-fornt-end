"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axiosPublic from "@/lib/axiosPublic";
import CheckoutForm from "@/components/payment/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PaymentPage() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axiosPublic.get(`/books/${id}`);

        setBook(res.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
        Book Not Found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <Link
        href={`/books/${book._id}`}
        className="text-blue-600 hover:underline"
      >
        ← Back to Book
      </Link>

      <h1 className="text-4xl font-bold mt-5 mb-10">Payment</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="border rounded-xl overflow-hidden shadow">
          <Image
            src={
              book.coverImage || "https://placehold.co/400x600?text=No+Image"
            }
            alt={book.title}
            width={500}
            height={700}
            className="w-full h-[500px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold">{book.title}</h2>

          <p className="mt-2 text-lg">{book.author}</p>

          <p className="mt-4">{book.description}</p>

          <div className="mt-8 space-y-3">
            <div className="flex justify-between">
              <span>Category</span>
              <span>{book.category}</span>
            </div>

            <div className="flex justify-between">
              <span>Status</span>

              <span
                className={
                  book.status === "available"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {book.status}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>

              <span className="font-bold text-xl">$ {book.price}</span>
            </div>
          </div>

          <hr className="my-8" />

          <div className="border rounded-xl p-6 bg-gray-50">
            <h3 className="font-bold text-xl mb-4 text-violet-500">
              Payment Form
            </h3>

            <Elements stripe={stripePromise}>
              <CheckoutForm book={book} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
}