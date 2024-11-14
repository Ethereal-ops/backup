/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       // Change 100 to the scroll position you want
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="w-full px-6   bg-[#121212] text-white flex items-center justify-between">
      {/* Logo */}
      <div className="">
        <a href="/">
          <img src="phe6.png" alt="" className=" w-[80px] md:w-[90px]" />
        </a>
      </div>

      {/* CTA Button */}
      <div className="items-center">
        <a href="/solutions" className="font-semibold  rounded-lg">
          <button className="bg-[#28C76F] hover:bg-[#2be27d] text-white font-semibold py-3 px-6 rounded-[30px] shadow-lg transition-all duration-300 transform  active:shadow-none">
            Explore Solution
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
