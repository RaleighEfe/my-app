"use client";
import Buttons from "../atoms/Buttons";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import WhatsAppButton from "../atoms/WhatsappButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const handleToggleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full z-20 top-0 left-0 bg-blue-950 fixed">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="text-white text-lg md:text-3xl">Logo</div>
        <div className="flex md:order-2">
          <WhatsAppButton />
          {/* <Buttons type="filled">Start WhatsApp Chat</Buttons> */}
          <button
            type="button"
            onClick={toggleDropDown}
            className="inline-flex items-center p-2 justify-center text-sm text-primary rounded-lg md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <BiMenuAltRight />
          </button>
        </div>

        <div className="items-end justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-white md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:font-bold hover:text-primary hover:underline-offset-4 hover:decoration-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:font-bold hover:text-primary hover:underline-offset-4 hover:decoration-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:font-bold hover:text-primary hover:underline-offset-4 hover:decoration-primary"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:font-bold hover:hover:text-primary hover:underline-offset-4 hover:decoration-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="origin-top-right fixed z-3 right-0 mt-2 w-3/4 rounded-md shadow-lg bg-white p-5">
          <button
            className="grid text-lg justify-center"
            onClick={handleToggleClose}
          >
            <MdOutlineCancel size={24} />
          </button>
          <div className="grid grid-rows_[min-content] justify-center content-center gap-4">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
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
    </nav>
  );
};

export default NavBar;
