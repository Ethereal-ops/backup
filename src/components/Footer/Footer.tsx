/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#121212] pb-2">
      <div className="mycontainer">
        <div className="">
          <footer className="border-t-[1px] border-b-customGray-main footer text-neutral-content flex items-center flex-col md:flex-row md:justify-between px-4">
            <aside className="flex items-center">
              <img src="phe6.png" alt="" className=" w-[80px]" />

              <p className="font-bold text-xs">
                Copyright © ${new Date().getFullYear()} - All right reserved
              </p>
            </aside>

            <nav className="">
              <ul className="flex items-center gap-4 font-bold">
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Terms of use</a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
