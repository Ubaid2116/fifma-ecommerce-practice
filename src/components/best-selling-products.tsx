import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    img: "/best1.png",
  },
  {
    id: 2,
    img: "/best2.png",
  },
  {
    id: 3,
    img: "/best3.png",
  },
  {
    id: 4,
    img: "/best4.png",
  },
];

const BestSellingProducts = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center justify-start ml-6 md:ml-28 space-x-4 mb-10 py-16">
        <div className="bg-[#DB4444] w-6 h-12 md:w-8 md:h-16 rounded-xl" />
        <p className="text-[#DB4444] font-semibold text-[14px] md:text-[16px] text-center">
          This Month
        </p>
      </div>
      <div className="flex justify-between items-center ml-6 md:ml-28 mb-6 -mt-20">
        <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold text-center mb-2 md:mb-4 tracking-wider">
          Best Selling Products
        </h2>
        <button className="px-10 py-2 mr-7 md:px-10 md:py-3 bg-[#DB4444] text-white rounded-md font-medium text-[10px] md:text-[16px] hover:bg-red-500">
          View All
        </button>
      </div>
      
      {/* Product Section */}
      <div className="px-6 md:px-28 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 border rounded-lg shadow-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src={product.img}
                alt="product"
                className="rounded-md"
                width={350}
                height={270}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mb-14 mt-14">
      <Image src={"/category-banner.png"} 
        alt="product"
        width={1170}
        height={500}
      />
      </div>
    </div>
  );
};

export default BestSellingProducts;
