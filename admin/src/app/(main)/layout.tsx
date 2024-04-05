"use client";

import type { Metadata } from "next";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/userSlice";
import ApplicationShell from "@/components/appShell/AppShell";

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
          <ApplicationShell>
               {children}
          </ApplicationShell>
        )}
      </body>
    </html>
  
  );
}
