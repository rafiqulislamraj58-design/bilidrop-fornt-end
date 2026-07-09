import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0F172A] text-center px-4">
      <h1 className="text-8xl font-extrabold text-indigo-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all">
        Go Back Home
      </Link>
    </div>
  );
}