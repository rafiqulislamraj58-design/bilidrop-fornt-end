'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:60px_60px] opacity-10" />
      <div className="absolute top-32 -left-32 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:pt-10"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 dark:bg-white/10 border border-white/60 backdrop-blur-md text-sm font-medium text-indigo-600 dark:text-indigo-400">
              ⭐ Connecting Readers &amp; Local Libraries
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter text-gray-900 dark:text-white">
              Books From Your 
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent block">Local Community</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              Discover thousands of books from nearby libraries and independent owners. 
              Get doorstep delivery and enjoy reading without leaving home.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                as={Link}
                href="/browse"
                color="primary"
                size="lg"
                className="font-semibold px-9 py-7 text-base"
              >
                Browse Books
              </Button>

              <Button
                as={Link}
                href="/how-it-works"
                variant="bordered"
                size="lg"
                className="font-semibold px-8 py-7 text-base"
              >
                How It Works
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-6">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">12,000+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Books Available</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">680+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Local Libraries</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">28,000+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Happy Readers</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mt-8 lg:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=1200&auto=format&fit=crop"
              alt="Person enjoying a book"
              className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
            />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-4 lg:-left-6 bg-white dark:bg-gray-900 border shadow-2xl rounded-3xl p-6 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">🚚</div>
                <div>
                  <p className="font-semibold text-lg">Fast Delivery</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Within 24 hours</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute top-10 -right-4 lg:-right-8 bg-white dark:bg-gray-900 border shadow-2xl rounded-3xl p-5 z-20"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">⭐</span>
                <div>
                  <p className="font-semibold">4.9/5 Rating</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">From 3,200+ readers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}