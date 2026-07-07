'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Input } from '@heroui/react';
import { motion } from 'framer-motion';
import { authClient } from '@/lib/auth-client';   

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const { error: signupError } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: "/",
      });

      if (signupError) {
        setError(signupError.message || "Signup failed. Please try again.");
        return;
      }

      setSuccess("✅ Account created successfully! Please check your email for verification.");
      
    } catch (err) {
      console.error("Signup Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-indigo-100 dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl"
      >
        <div className="flex justify-center mb-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-3xl flex items-center justify-center text-5xl shadow-2xl">
              
            </div>
            <span className="font-bold text-4xl tracking-tighter text-gray-900 dark:text-white">BiblioDrop</span>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Account</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-3">Join our reading community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="bordered"
              size="lg"
              fullWidth
            />

            <Input
              type="email"
              label="Email Address"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="bordered"
              size="lg"
              fullWidth
            />

            <Input
              type="password"
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="bordered"
              size="lg"
              description="Minimum 8 characters"
              fullWidth
            />

            {error && <div className="text-red-600 text-sm text-center bg-red-50 dark:bg-red-950 p-3 rounded-2xl">{error}</div>}
            {success && <div className="text-green-600 text-sm text-center bg-green-50 dark:bg-green-950 p-3 rounded-2xl">{success}</div>}

            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full font-semibold py-7 text-base"
              isLoading={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create My Account'}
            </Button>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link href="/auth/signin" className="text-indigo-600 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}