import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <section className="relative">
      <div className="h-[30rem] sm:h-[37rem]">
      <img alt="banner" src="/banner_img.webp" className="h-full w-full object-cover" />
    </div>
      <div className="absolute top-0  right-0 left-0  container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Best Way to{" "}
            <span className="text-[#ED3103]">Make a Difference</span> in the
            Lives of Others
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Unite with Humanity Heroes: Together, We're Making the World a
            Better Place Through Compassion, Action, and Hope.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex  text-white bg-[#ED3103] border-0 py-3 px-8 focus:outline-none  rounded-lg text-lg">
              Donate For Humanity
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
      </div>
    </section>
  );
}

export default Banner;
