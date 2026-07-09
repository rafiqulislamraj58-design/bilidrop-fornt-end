import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">We're here to help</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-12 border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
            
            <div className="space-y-10">
              <div className="flex gap-5">
                <div className="text-4xl">📧</div>
                <div>
                  <p className="font-medium text-lg">Email</p>
                  <a href="mailto:support@biblio.drop" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    support@biblio.drop
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-4xl">📍</div>
                <div>
                  <p className="font-medium text-lg">Address</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Book Street<br />
                    Library City, LC 12345
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-4xl">📞</div>
                <div>
                  <p className="font-medium text-lg">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-4xl">🕒</div>
                <div>
                  <p className="font-medium text-lg">Business Hours</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Message */}
          <div className="flex flex-col justify-center">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-12 border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-semibold mb-6">We'd Love to Hear From You</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether you have questions about our service, feedback, or just want to say hello — 
                feel free to reach out. Our team typically responds within 24 hours.
              </p>
            </div>

            <div className="mt-10 text-center">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}