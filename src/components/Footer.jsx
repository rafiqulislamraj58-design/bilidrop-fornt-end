'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-2xl flex items-center justify-center text-3xl">
              <img
              src="https://i.pinimg.com/1200x/76/0d/a1/760da163b60973719d7c910e7a248376.jpg" 
              alt="BiblioDrop Logo"
              className="w-9 h-9 rounded-2xl shadow-md"
            />
                
              </div>
              <span className="font-bold text-2xl text-gray-900 dark:text-white">BiblioDrop</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Connecting readers with local libraries and independent book owners. 
              Discover, borrow, and share books easily.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link>
              <Link href="/browse" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Browse Books</Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</Link>
              <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-5">For Readers</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">My Dashboard</Link>
              <Link href="/browse" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Find Books</Link>
              <Link href="/library" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">My Reading List</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-5">For Partners</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/library/register" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">List Your Books</Link>
              <Link href="/library" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Manage Inventory</Link>
              <Link href="/admin" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Admin Portal</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-md">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Get the latest book recommendations and platform updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900 text-sm focus:outline-none focus:border-indigo-500"
              />
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-2xl transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div>
            © {new Date().getFullYear()} BiblioDrop. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              𝕏
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;