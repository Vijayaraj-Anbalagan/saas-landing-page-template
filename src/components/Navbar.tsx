'use client'
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { Red_Hat_Display } from 'next/font/google';
import { useState } from 'react';

const logoFont = Red_Hat_Display({ subsets: ['latin'], weight: '700' });

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className={`${logoFont.className} dark:text-[#e5e5e3] text-black font-extrabold flex text-[35px] justify-center items-center`}>
                <p className="tracking-widest text-white">INT</p>
                <span className="flex flex-col ml-[3px] mr-[4px] h-[30px] justify-center items-start">
                  <span className="h-[4px] w-[20px] dark:bg-[#feda5e] bg-[#f6c822]"></span>
                  <span className="h-[4px] w-[20px] dark:bg-[#feda5e] bg-[#f6c822] mt-[6px]"></span>
                  <span className="h-[4px] w-[20px] dark:bg-[#feda5e] bg-[#f6c822] mt-[6px]"></span>
                </span>
                <p className="tracking-widest text-white">RAIN</p>
              </div>
            </div>

            {/* Hamburger Menu Icon */}
            <div onClick={toggleMenu} className=" h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden cursor-pointer">
              {isMenuOpen ? <RiCloseLine className="text-white" /> : <RiMenu3Fill className="text-white" />}
            </div>

            {/* Desktop Nav Links */}
            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a href="#home" className="text-opacity-60 text-white hover:text-opacity-100 transition">Home</a>
              <a href="#ui" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
              <a href="https://interain.in" className="bg-white py-2 px-4 rounded-lg text-black">Login</a>
            </nav>
          </div>

          {/* Mobile Nav Links */}
          {isMenuOpen && (
            <div className="sm:hidden bg-black py-4 text-center">
              <a href="#home" className="block text-opacity-60 text-white hover:text-opacity-100 transition py-2">Home</a>
              <a href="#" className="block text-opacity-60 text-white hover:text-opacity-100 transition py-2">Features</a>
              <a href="#" className="block text-opacity-60 text-white hover:text-opacity-100 transition py-2">Updates</a>
              <a href="#" className="block text-opacity-60 text-white hover:text-opacity-100 transition py-2">Help</a>
              <a href="#" className="block text-opacity-60 text-white hover:text-opacity-100 transition py-2">Customers</a>
              <a href="https://interain.in" className="block bg-white py-2 px-4 rounded-lg text-black mx-auto mt-2 w-1/2">Login</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
