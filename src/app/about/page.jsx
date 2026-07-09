'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-3xl flex items-center justify-center text-5xl shadow-xl">
               <img
              src="https://i.pinimg.com/1200x/76/0d/a1/760da163b60973719d7c910e7a248376.jpg" 
              alt="BiblioDrop Logo"
              className="w-9 h-9 rounded-2xl shadow-md"
            />
            </div>
            <span className="font-bold text-4xl tracking-tighter text-gray-900 dark:text-white">BiblioDrop</span>
          </Link>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">About BiblioDrop</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Connecting readers with local libraries and independent book owners
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-12">
          <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
            <p className="text-xl">
              BiblioDrop is a platform that brings books closer to you. We connect passionate readers 
              with local libraries and independent book owners to make book borrowing simple, fast, 
              and community-driven.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-10 my-16">
              <div className="text-center">
                <div className="text-6xl mb-6">📚</div>
                <h3 className="text-2xl font-semibold mb-3">Discover</h3>
                <p className="text-gray-600 dark:text-gray-400">Thousands of books from your local area</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-6">🚚</div>
                <h3 className="text-2xl font-semibold mb-3">Delivered</h3>
                <p className="text-gray-600 dark:text-gray-400">Get books delivered to your doorstep</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-2xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600 dark:text-gray-400">Support local libraries &amp; book lovers</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-6">Our Mission</h2>
            <p className="text-xl">
              We believe everyone should have easy access to books. By connecting readers with local 
              resources, we reduce waste, support communities, and promote the joy of reading.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            as={Link}
            href="/browse"
            color="primary" 
            size="lg"
          >
            Start Browsing Books
          </Button>
        </div>
      </div>
    </div>
  );
}