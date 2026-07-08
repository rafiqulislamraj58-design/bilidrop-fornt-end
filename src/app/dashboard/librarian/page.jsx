"use client";
import React from "react";
import { useSession } from "@/lib/auth-client";

const Librarian = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  const user = session?.user;
  console.log("Session data in Librarian DashboardPage:", session, "isPending:", isPending);

  return (
    <div className="p-6">
      <h2>Welcome back, {user?.name || "Librarian"}</h2>
    </div>
  );
};

export default Librarian;
