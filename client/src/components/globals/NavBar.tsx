import Link from 'next/link';
import React from 'react'
import { useState } from "react";

function NavBar() {
  const [showNavlinks, setShowNavlinks] = useState(false);
  return (
    <header className="py-5 md:px-10 px-5 flex items-center justify-between md:shadow-none shadow-md relative">

    {/* logo */}
    <Link href="/">
      <img src="/logo.webp" alt="logo" className="" />
    </Link>

    {/* mobile menu */}
    {/* <img
      src="/images/logo.webp"
      alt="logo"
      className="md:hidden"
      onClick={() => setShowNavlinks((prev) => !prev)}
    /> */}

<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" className="md:hidden"
      onClick={() => setShowNavlinks((prev) => !prev)} /></svg>

    {/* mobile navlinks */}
    <nav
      className="flex-col items-start gap-8 text-base absolute top-[90px] left-0 bg-white w-full h-[480px] z-[1] p-5 pl-12"
      style={showNavlinks ? { display: "flex" } : { display: "none" }}
    >
      <Link
        className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
        href="/"
        onClick={() => setShowNavlinks(false)}
      >
        Home
      </Link>
     
    </nav>

    {/* navlinks */}
    <nav className="md:flex hidden items-center gap-5 text-base">
      <Link
        className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
        href="/"
      >
        Home
      </Link>
     
    </nav>
  </header>
  )
}

export default NavBar