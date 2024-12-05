"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronRight, FiX } from "react-icons/fi";

const HeroSection = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const menuItems = [
    {
      name: "Woman’s Fashion",
      options: ["Dresses", "Tops", "Skirts", "Accessories"],
    },
    {
      name: "Men’s Fashion",
      options: ["Shirts", "Trousers", "Outerwear", "Shoes"],
    },
    { name: "Electronics" },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Sports & Outdoor" },
    { name: "Baby’s & Toys" },
    { name: "Groceries & Pets" },
    { name: "Health & Beauty" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-8 overflow-x-hidden">
      {/* Divider between left and right content */}
      <ul className="space-y-4 text-left lg:mr-32 w-full lg:w-auto ml-5">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative flex items-center cursor-pointer text-gray-800 font-medium text-base hover:text-[#DB4444] hover:font-bold transition-all duration-200"
            onClick={() =>
              setOpenDropdown(openDropdown === index ? null : index)
            }
          >
            {item.name}

            {/* Dropdown Icon */}
            {item.options && (
              <FiChevronRight
                className="ml-2 text-gray-600 text-xl cursor-pointer"
              />
            )}

            {/* Dropdown Menu */}
            {item.options && openDropdown === index && (
              <ul className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded-md p-2 w-48 z-10">
                {/* Close Option */}
                <li
                  className="flex items-center justify-end px-4 py-2 text-gray-800  hover:text-[#DB4444] rounded-md transition-all duration-200 cursor-pointer"
                  onClick={() => setOpenDropdown(null)}
                >
                  <FiX />
                </li>

                {/* Actual Dropdown Items */}
                {item.options.map((option, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-md rounded-md transition-all duration-200"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="flex flex-col lg:flex-row bg-black py-24 px-8 lg:px-16 items-center justify-between w-full lg:w-[892px] relative space-y-8 lg:space-y-0">
        {/* Left-side Section */}
        <div className="text-white flex flex-col items-start w-full lg:w-auto">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="logo"
              height={49}
              width={190}
              className="rounded-lg"
            />
          </div>

          {/* Voucher Text */}
          <h1 className="text-[30px] sm:text-[48px] font-semibold mt-4 leading-tight text-center lg:text-left">
            Up to 10% off Voucher
          </h1>

          {/* Shop Now Button */}
          <button className="flex items-center mt-2 px-6 py-2 text-white hover:text-gray-400 underline underline-offset-8 rounded-lg transition-all duration-300 text-sm sm:text-base mx-auto lg:mx-0">
            Shop Now
            <FiChevronRight className="ml-2 text-xl" />
          </button>
        </div>

        {/* Right-side Image (iPhone) */}
        <div className="mt-8 lg:mt-0">
          <Image src="/iphone.png" alt="iphone" height={352} width={496} />
        </div>

        {/* New Image at the bottom-center */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Image src="/carousel.png" alt="carousel" height={90} width={90} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
