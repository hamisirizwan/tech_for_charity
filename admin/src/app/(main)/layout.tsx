"use client";

import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/userSlice";


export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const {persist} = useAuthStore()
  useLayoutEffect(() => {
    const token = JSON.parse(localStorage.getItem("token")!);
    const user = JSON.parse(localStorage.getItem("user")!);
    if (!token && !user) {
      return router.replace("/login");
    }
    persist(user)
    setCheckingAuth(false);
  }, []);

  return (
    <html lang="en">
      <body>
        {checkingAuth ? (
          <div className="flex h-screen w-full items-center justify-center">
<h1>Loading....</h1>
          </div>
        ) : (
          <main className="relative h-screen overflow-hidden bg-gray-100 ">
            <div className="flex items-start justify-between">
              <SideBar />
              <div className="flex flex-col w-full md:space-y-4">
                <NavBar />
                <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                  {children}
                </div>
              </div>
            </div>
          </main>
        )}
      </body>
    </html>
  );
}
