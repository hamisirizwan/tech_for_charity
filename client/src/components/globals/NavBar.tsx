import usePaymentDialogStore from "@/store/paymentDialogStore";
import Link from "next/link";
import React from "react";

function NavBar() {
  const {openDialog} = usePaymentDialogStore((state)=>state)

  return (
    <header className="text-gray-600 body-font">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/logo.webp" alt="logo" className="h-20" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-primary">
            Home
          </Link>
          <Link href="/about-us" className="mr-5 hover:text-primary">
            About Us
          </Link>
          <Link href="/projects" className="mr-5 hover:text-primary">
            Our Projects
          </Link>
          <Link href="/members" className="mr-5 hover:text-primary">
            Our Team
          </Link>
        </nav>
        <button onClick={()=>openDialog()} className="hidden md:inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-secondary font-bold">
          DONATE
        </button>
      </div>
    </header>
  );
}

export default NavBar;
