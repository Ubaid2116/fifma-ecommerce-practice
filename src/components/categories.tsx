import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

const categories = [
  { id: 1, img: "/category1.png", name: "Phones" },
  { id: 2, img: "/category2.png", name: "Computers" },
  { id: 3, img: "/category3.png", name: "SmartWatch" },
  { id: 4, img: "/category4.png", name: "Camera" },
  { id: 5, img: "/category5.png", name: "HeadPhones" },
  { id: 6, img: "/category6.png", name: "Gaming" },
];

const Categories = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Today's Section */}
      <div className="flex items-center justify-start ml-6 md:ml-28 space-x-4 mb-10 py-16">
        <div className="bg-[#DB4444] w-6 h-12 md:w-8 md:h-16 rounded-xl" />
        <p className="text-[#DB4444] font-semibold text-[14px] md:text-[16px] text-center">
          Categories
        </p>
      </div>

      {/* Flash Sales Section */}
      <div className="mb-5 md:mb-32 flex flex-col md:flex-row justify-between items-center mx-6 md:mx-28 -mt-20 md:-mt-28">
        <h2 className="text-[24px] pt-52 sm:text-[28px] md:text-[36px] font-semibold text-center mb-5 md:mb-20 tracking-wider -mt-44">
          Browse By Category
        </h2>

        {/* Arrows with icons */}
        <div className="flex items-center justify-center space-x-4 pb-10 md:pb-20">
          <span className="p-2 bg-gray-100 text-black rounded-full hover:bg-gray-200 cursor-pointer">
            <AiOutlineLeft size={24} />
          </span>
          <span className="p-2 bg-gray-100 text-black rounded-full hover:bg-gray-200 cursor-pointer">
            <AiOutlineRight size={24} />
          </span>
        </div>
      </div>

      {/* Category Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mx-6 md:mx-28 mb-14 md:-mt-40">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center border-b-4 border p-4 rounded-lg hover:bg-[#DB4444] transition-all duration-300 w-[150px] sm:w-[170px] h-[145px]"
          >
            <Image
              src={category.img}
              alt={category.name}
              width={56}
              height={56}
              className="rounded-md object-cover"
            />
            <p className="mt-2 text-center text-sm sm:text-lg">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-gray-300 mt-4" />
    </div>
  );
};

export default Categories;
