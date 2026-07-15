"use client";

import { createContext, useContext } from "react";
import { authClient } from "@/lib/auth-client";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const {
    data: session,
    isPending,
    error,
    refetch,
  } = authClient.useSession();

  const logout = async () => {
    try {
      await authClient.signOut();

      localStorage.removeItem("access-token");

      await refetch();
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  const value = {
    session,
    user: session?.user ?? null,
    loading: isPending,
    error,
    refetch,
    logout,

    isAuthenticated: !!session?.user,
    accessToken:
      typeof window !== "undefined"
        ? localStorage.getItem("access-token")
        : null,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside AuthProvider"
    );
  }

  return context;
};