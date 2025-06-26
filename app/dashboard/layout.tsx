"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Authenticated } from "convex/react";
import { ReactNode } from "react";
import { NavigationProvider } from "@/lib/context/navigation";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <NavigationProvider>
      <div className="flex h-screen">
        <Authenticated>
          <Sidebar />
        </Authenticated>

        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </NavigationProvider>
  );
}
