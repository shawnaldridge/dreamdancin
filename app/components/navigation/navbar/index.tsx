import React from "react";
import Link from "next/link";
import Image from 'next/image'
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <Logo /> */}
            <ul className="hidden md:flex gap-x-6 text-white items-center">
              <li>
                <Link href="/">
                  <Image
                    src="/dda_logo_no_bg.jpg"
                    width={40}
                    height={40}
                    alt="farm logo"
                  />
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/does">
                  <p>Does</p>
                </Link>
              </li>
              <li>
                <Link href="/bucks">
                  <p>Bucks</p>
                </Link>
              </li>
              <li>
                <Link href="/sales">
                  <p>For Sale/Breeding Schedule</p>
                </Link>
              </li>
              <li>
                <Link href="/quail">
                  <p>Quail</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
            <h3 className="text-white font-semibold">
                Dream Dancin&apos; Acres
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;