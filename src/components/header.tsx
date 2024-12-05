"use client";
import React, { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Sale Banner */}
      <div className="bg-[#000000] flex flex-wrap items-center justify-between py-4 px-4">
        <p className="text-[#fafafa] text-sm md:text-base text-center flex-1">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="underline ml-2 md:ml-3 cursor-pointer font-bold">
            Shop Now
          </span>
        </p>
        <div className="flex items-center text-[#fafafa] gap-2 mt-2 md:mt-0">
          <select className="bg-transparent border-none text-white cursor-pointer focus:outline-none">
            <option value="en" className="text-black">
              English
            </option>
            <option value="fr" className="text-black">
              French
            </option>
            <option value="es" className="text-black">
              Spanish
            </option>
          </select>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 md:px-8 md:py-6 relative border-b-2 border-gray-300">
        {/* Logo */}
        <div>
          <h2 className="text-[#000000] text-[24px] font-bold">Exclusive</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-[#000000] font-medium">
          <li className="cursor-pointer hover:text-gray-700 border-b-2 border-transparent hover:border-black">
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-700 border-b-2 border-transparent hover:border-black">
            Contact
          </li>
          <li className="cursor-pointer hover:text-gray-700 border-b-2 border-transparent hover:border-black">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-700 border-b-2 border-transparent hover:border-black">
            Signup
          </li>
        </ul>

        {/* Icons and Search Bar */}
        <div className="flex items-center space-x-4">
          {/* Search for desktop */}
          <div className="hidden md:flex items-center bg-gray-100 border border-gray-300 rounded-md px-4 py-2 max-w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none bg-transparent text-sm text-gray-700 w-full"
            />
            <FiSearch className="text-black text-xl" />
          </div>

          {/* Wishlist and Cart Icons */}
          <div className="cursor-pointer">
            <FiHeart className="text-black text-2xl" />
          </div>
          <div className="cursor-pointer">
            <FiShoppingCart className="text-black text-2xl" />
          </div>

          {/* Search Icon for mobile */}
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <FiSearch className="text-black text-2xl" />
          </div>

          {/* Hamburger Menu */}
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu className="text-black text-2xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Right-Side Animation */}
      <div
        className={`fixed top-0 right-0 h-full w-56 bg-gray-100 z-10 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon Inside Menu */}
        <div className="flex justify-end p-4">
          <FiX
            className="text-black text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-center space-y-4 p-6">
          <li className="cursor-pointer text-black hover:text-gray-700">
            Home
          </li>
          <li className="cursor-pointer text-black hover:text-gray-700">
            Contact
          </li>
          <li className="cursor-pointer text-black hover:text-gray-700">
            About
          </li>
          <li className="cursor-pointer text-black hover:text-gray-700">
            Signup
          </li>
        </ul>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mx-4 mt-2">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-sm text-gray-700 w-full"
          />
          <FiSearch className="text-black text-xl" />
        </div>
      )}
    </div>
  );
};

export default Header;
