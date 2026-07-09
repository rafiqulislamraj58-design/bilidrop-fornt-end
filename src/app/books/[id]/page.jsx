"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axiosPublic from "@/lib/axiosPublic";
import axiosSecure from "@/lib/axiosSecure";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

export default function BookDetails() {
  const { id } = useParams();
  const { data: session } = useSession();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axiosPublic.get(`/books/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleRequestDelivery = async () => {
    setPurchasing(true);
    try {
      const res = await axiosSecure.post(`/payments/create-checkout-session`, { bookId: book._id });
      if (res.data.url) {
        window.location.href = res.data.url; 
      }
    } catch (err) {
      alert("Payment initiation failed.");
      setPurchasing(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div></div>;
  if (!book) return <div className="min-h-screen flex items-center justify-center text-xl font-bold">Book not found</div>;

  const isOwner = session?.user?.id === book.librarianId;
  const isUnavailable = book.status === "Checked Out";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F172A] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/browse" className="flex items-center gap-2 text-indigo-600 font-medium mb-8 hover:underline">
          <ArrowLeft size={20} /> Back to Browse
        </Link>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden grid md:grid-cols-2 gap-0">
          <div className="h-[400px] md:h-auto bg-gray-100 dark:bg-slate-800">
            <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{book.category}</span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2">{book.title}</h1>
            <p className="text-lg text-gray-500 mt-2">by {book.author}</p>
            
            <div className="mt-6 flex items-center gap-3">
              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${isUnavailable ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {isUnavailable ? "Checked Out" : "Available"}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">{book.description}</p>
            
            <div className="mt-8 flex items-center justify-between border-t border-gray-200 dark:border-slate-700 pt-6">
              <div>
                <p className="text-sm text-gray-500">Delivery Fee</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">${book.deliveryFee}</p>
              </div>
              {!isOwner && session && (
                <button 
                  onClick={handleRequestDelivery}
                  disabled={isUnavailable || purchasing}
                  className={`px-8 py-3 rounded-xl font-semibold text-white transition-all ${isUnavailable ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30'}`}
                >
                  {purchasing ? "Redirecting..." : isUnavailable ? "Unavailable" : "Request Delivery"}
                </button>
              )}
              {!session && !isOwner && (
                <Link href="/auth/signin" className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700">Login to Request</Link>
              )}
            </div>
            {isOwner && (
              <div className="mt-6 flex gap-3">
                <button className="px-6 py-2 bg-blue-100 text-blue-700 rounded-xl font-medium">Edit</button>
                <button className="px-6 py-2 bg-red-100 text-red-700 rounded-xl font-medium">Delete</button>
                {book.status === "Published" && <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium">Unpublish</button>}
              </div>
            )}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Reader Reviews</h2>
          <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review after receiving the book!</p>
        </div>
      </div>
    </div>
  );
}