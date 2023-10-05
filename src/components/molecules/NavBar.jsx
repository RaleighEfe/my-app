"use client";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Buttons from "../atoms/Buttons";
import Link from "next/link";
import { useState } from "react";
import Calendly from "../atoms/Calendly";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
    <nav className="fixed w-full z-20 top-0 left-0 bg-blue-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="text-white">Logo</div>
          <div className="flex md:order-2">
            <Buttons>Schedule a Meet</Buttons>
            {/* <Calendly /> */}
            <button
              type="button"
              onClick={toggleDropDown}
              className="inline-flex items-center p-2 justify-center text-sm text-gray-400 rounded-lg md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <HiOutlineMenuAlt2 className="text-white text-2xl" />
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-primary"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
           </nav>
 
      {isOpen && (
        <div className="origin-top-right z-10 right-0 mt-2 w-full rounded-md shadow-lg bg-white">
          <div className="grid grid-rows_[min-content] justify-center content-center gap-4 pt-20 pb-5">
            <Link href="#about" className="hover:text-primary">
              About
            </Link>
            <Link href="#portfolio" className="hover:text-primary">
              Portfolio
            </Link>
            <Link href="#contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      )}
 </div>
  );
};

export default NavBar;
