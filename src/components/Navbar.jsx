"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client";
import { Moon, Sun, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const isActive = (path) => pathname === path || pathname.startsWith(path);

  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = "/";
          },
        },
      });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const dashboardLink =
    user?.role === "admin"
      ? "/dashboard/admin"
      : user?.role === "librarian"
      ? "/dashboard/librarian"
      : "/dashboard/user";

  return (
    <nav className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <img
              src="https://i.pinimg.com/1200x/76/0d/a1/760da163b60973719d7c910e7a248376.jpg"
              alt="BiblioDrop Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl shadow-md"
            />
            <span className="font-bold text-lg sm:text-2xl tracking-tight text-gray-900 dark:text-white whitespace-nowrap">
              BiblioDrop
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/") && !pathname.startsWith("/dashboard") && !pathname.startsWith("/browse")
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/browse"
              className={`transition-colors ${
                isActive("/browse")
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Browse Books
            </Link>

            {user && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center gap-1 transition-colors ${
                    isActive("/dashboard")
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Dashboard
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href={dashboardLink}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 capitalize"
                    >
                      {user.role} Dashboard
                    </Link>
                  </div>
                )}
              </div>
            )}

            <Link
              href="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-white shrink-0"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {isPending ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
            ) : user ? (
              <div className="flex items-center gap-2 xl:gap-3">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border shrink-0"
                  />
                ) : (
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 rounded-full flex items-center justify-center font-semibold shrink-0">
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </div>
                )}
                <span className="hidden xl:inline text-sm font-medium text-gray-700 dark:text-gray-300 max-w-[100px] truncate">
                  {user.name.split(" ")[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-3 xl:px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-xl font-medium text-sm transition-colors whitespace-nowrap"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/auth/signin"
                className="px-4 xl:px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all whitespace-nowrap"
              >
                Login
              </Link>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-6 py-4 space-y-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300">
            Home
          </Link>
          <Link href="/browse" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300">
            Browse Books
          </Link>
          {user && (
            <Link href={dashboardLink} onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300 capitalize">
              {user.role} Dashboard
            </Link>
          )}
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300">
            About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300">
            Contact
          </Link>

          {user && (
            <div className="flex items-center gap-3 py-2 border-t border-gray-100 dark:border-gray-800 pt-3">
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.name} className="w-8 h-8 rounded-full object-cover border" />
              ) : (
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 rounded-full flex items-center justify-center font-semibold">
                  {user.name?.[0]?.toUpperCase() || "U"}
                </div>
              )}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{user.name}</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            {user ? (
              <button onClick={handleLogout} className="px-4 py-2 text-red-600 border border-red-200 rounded-xl text-sm">
                Logout
              </button>
            ) : (
              <Link
                href="/auth/signin"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;