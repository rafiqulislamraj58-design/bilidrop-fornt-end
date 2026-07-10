import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-5">

      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">

        <div className="flex justify-center">
          <CheckCircle2
            size={90}
            className="text-green-500"
          />
        </div>

        <h1 className="text-4xl font-bold mt-8">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-500 mt-4 leading-7">
          Thank you for your payment.
          <br />
          Your delivery request has been received.
          <br />
          The librarian will process your request shortly.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <Link
            href="/browse"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Browse More Books
          </Link>

          <Link
            href="/dashboard/user"
            className="border border-gray-300 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
          >
            My Dashboard
          </Link>

        </div>

      </div>

    </div>
  );
}