"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from "react";
import { Toaster } from "react-hot-toast";
// import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import DonationModal from "@/components/globals/DonationModal";
import RegistrationModal from "@/components/globals/JoiningRequestDialog";
import SuccessModal from "@/components/globals/SuccessModal";
import Footer from "@/components/globals/Footer";
import NavBar from "@/components/globals/NavBar";
import ValidatingPaymentModal from "@/components/globals/validatingPaymentModal";

TimeAgo.addDefaultLocale(en);

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          //   queries: {
          //     staleTime: 5 * 1000,
          //   },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      {props.children}

      <DonationModal />
      <RegistrationModal />
      <SuccessModal />
    <ValidatingPaymentModal />
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </QueryClientProvider>
  );
}
