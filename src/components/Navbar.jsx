'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path || pathname.startsWith(path);

  return (
    <nav className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-md">
              
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">BiblioDrop</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className={`transition-colors ${isActive('/') ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>Home</Link>
            <Link href="/browse" className={`transition-colors ${isActive('/browse') ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>Browse Books</Link>
            <Link href="/about" className={`transition-colors ${isActive('/about') ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>About</Link>
            <Link href="/contact" className={`transition-colors ${isActive('/contact') ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>Contact</Link>

            {user && (
              <div className="relative group">
                <button className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Dashboard <span className="text-xs">▼</span>
                </button>

                <div className="absolute hidden group-hover:block pt-3 w-56 z-50">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 text-sm">
                    <Link href={user.role === 'admin' ? '/admin' : user.role === 'librarian' ? '/library' : '/dashboard'} className="block px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">Main Dashboard</Link>
                    
                    {user.role === 'librarian' && (
                      <Link href="/library/requests" className="block px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">Delivery Requests</Link>
                    )}

                    {user.role === 'admin' && (
                      <>
                        <Link href="/admin/users" className="block px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">Manage Users</Link>
                        <Link href="/admin/books" className="block px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">All Books</Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full flex items-center justify-center font-semibold text-lg">
                    {user.name?.[0]?.toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">{user.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user.role}</p>
                  </div>
                </div>

                <button
                  onClick={onLogout}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-xl font-medium transition-colors text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all">
                Login
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-8">
          <div className="px-6 flex flex-col gap-2 text-lg">
            
            <Link href="/" onClick={() => setIsOpen(false)} className={`py-4 px-5 rounded-2xl ${isActive('/') ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium' : 'hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300'}`}>
              Home
            </Link>

            <Link href="/browse" onClick={() => setIsOpen(false)} className={`py-4 px-5 rounded-2xl ${isActive('/browse') ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium' : 'hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300'}`}>
              Browse Books
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)} className={`py-4 px-5 rounded-2xl ${isActive('/about') ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium' : 'hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300'}`}>
              About
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)} className={`py-4 px-5 rounded-2xl ${isActive('/contact') ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium' : 'hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300'}`}>
              Contact
            </Link>

            {user && (
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800 mt-4">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 px-5">Dashboard</p>
                
                <Link 
                  href={user.role === 'admin' ? '/admin' : user.role === 'librarian' ? '/library' : '/dashboard'} 
                  onClick={() => setIsOpen(false)}
                  className="block py-4 px-5 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300"
                >
                  Main Dashboard
                </Link>

                {user.role === 'librarian' && (
                  <Link href="/library/requests" onClick={() => setIsOpen(false)} className="block py-4 px-5 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300">
                    Delivery Requests
                  </Link>
                )}

                {user.role === 'admin' && (
                  <>
                    <Link href="/admin/users" onClick={() => setIsOpen(false)} className="block py-4 px-5 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300">Manage Users</Link>
                    <Link href="/admin/books" onClick={() => setIsOpen(false)} className="block py-4 px-5 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300">All Books</Link>
                  </>
                )}

                <button
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                  className="mt-10 w-full py-4 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 rounded-2xl hover:bg-red-50 dark:hover:bg-red-950 font-medium text-base"
                >
                  Logout
                </button>
              </div>
            )}

            {!user && (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="mt-10 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl text-center text-base"
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;