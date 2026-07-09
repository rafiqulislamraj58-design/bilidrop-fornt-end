"use client";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <aside className=" lg:block w-64 p-4">
        <DashboardSidebar />
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;