"use client"

import useJoiningDialogStore from "@/store/joiningDialogStore";
import React from "react";

function CTA() {
  const { openDialog } = useJoiningDialogStore((state) => state);

  return (
    <section className="py-6 bg-gray-50 sm:py-10 lg:py-12">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
      <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold leading-tight text-secondary sm:text-3xl lg:text-4xl">Support, Empower, Grow</h2>
      <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 text-base">You can make a difference with every contribution. Invest your time
            in honing your generosity.</p>
    </div>
        <div className="flex justify-center">
          <button onClick={()=>openDialog()} className="inline-flex  text-white bg-primary border-0 py-3 px-8 focus:outline-none  rounded-lg text-lg">
            Join as a Member
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
