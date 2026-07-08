'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const pathname = usePathname();

  const isActive = (path) => pathname === path || pathname.startsWith(path);

  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = '/';
          },
        },
      });
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://i.pinimg.com/1200x/76/0d/a1/760da163b60973719d7c910e7a248376.jpg" 
              alt="BiblioDrop Logo"
              className="w-9 h-9 rounded-2xl shadow-md"
            />
            <span className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
              BiblioDrop
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className={`transition-colors ${isActive('/') ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>Home</Link>
            <Link href="/browse" className={`transition-colors ${isActive('/browse') ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>Browse Books</Link>
            <Link href="/about" className={`transition-colors ${isActive('/about') ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>About</Link>
            <Link href="/contact" className={`transition-colors ${isActive('/contact') ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
            ) : user ? (
              <div className="flex items-center gap-3">
    
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-gray-700"
                  />
                ) : (
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full flex items-center justify-center font-semibold text-lg">
                    {user.name?.[0]?.toUpperCase() || 'U'}
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user.role}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-xl font-medium transition-colors text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/auth/signin" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all">
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
    </nav>
  );
};

export default Navbar;
