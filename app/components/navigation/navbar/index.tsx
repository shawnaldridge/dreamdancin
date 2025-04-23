import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-emerald-800 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 h-20">
          <div className="flex justify-between items-center h-full">
            {/* <Logo /> */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/dda_logo_no_bg.jpg"
                  width={40}
                  height={40}
                  alt="farm logo"
                  className="rounded-full"
                />
                <h3 className="text-white font-semibold ml-3">
                  Dream Dancin&apos; Acres
                </h3>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-x-6 text-white items-center">
              <li>
                <Link href="/about" className="hover:text-emerald-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/does" className="hover:text-emerald-200 transition-colors">
                  Does
                </Link>
              </li>
              <li>
                <Link href="/bucks" className="hover:text-emerald-200 transition-colors">
                  Bucks
                </Link>
              </li>
              <li>
                <Link href="/sales" className="hover:text-emerald-200 transition-colors">
                  For Sale/Breeding
                </Link>
              </li>
              <li>
                <Link href="/quail" className="hover:text-emerald-200 transition-colors">
                  Quail
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  ) : (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-emerald-700">
            <ul className="py-2 px-4">
              <li className="py-2">
                <Link href="/about" className="text-white hover:text-emerald-200 block">
                  About Us
                </Link>
              </li>
              <li className="py-2">
                <Link href="/does" className="text-white hover:text-emerald-200 block">
                  Does
                </Link>
              </li>
              <li className="py-2">
                <Link href="/bucks" className="text-white hover:text-emerald-200 block">
                  Bucks
                </Link>
              </li>
              <li className="py-2">
                <Link href="/sales" className="text-white hover:text-emerald-200 block">
                  For Sale/Breeding
                </Link>
              </li>
              <li className="py-2">
                <Link href="/quail" className="text-white hover:text-emerald-200 block">
                  Quail
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;