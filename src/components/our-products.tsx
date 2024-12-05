import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const OurProducts = () => {
  const products = [
    { id: 1, img: "/ourproduct1.png" },
    { id: 2, img: "/ourproduct2.png" },
    { id: 3, img: "/ourproduct3.png" },
    { id: 4, img: "/ourproduct4.png" },
    { id: 5, img: "/ourproduct5.png" },
    { id: 6, img: "/ourproduct6.png" },
    { id: 7, img: "/ourproduct7.png" },
    { id: 8, img: "/ourproduct8.png" },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center justify-start ml-6 md:ml-28 space-x-4 mb-10 py-16">
        <div className="bg-[#DB4444] w-6 h-12 md:w-8 md:h-16 rounded-xl" />
        <p className="text-[#DB4444] font-semibold text-[14px] md:text-[16px] text-center">
          Our Products
        </p>
      </div>

      {/* Flash Sales Section */}
      <div className="mb-5 md:mb-32 flex flex-col md:flex-row justify-between items-center mx-6 md:mx-28 -mt-20 md:-mt-28">
        <h2 className="text-[28px] md:text-[36px] font-semibold text-center mb-5 md:mb-20 tracking-wider">
          Explore Our Products
        </h2>

        {/* Arrows with icons */}
        <div className="flex items-center space-x-4 pb-20 md:pb-36">
          <span className="p-2 bg-gray-100 text-black rounded-full hover:bg-gray-200 cursor-pointer">
            <AiOutlineLeft size={24} />
          </span>
          <span className="p-2 bg-gray-100 text-black rounded-full hover:bg-gray-200 cursor-pointer">
            <AiOutlineRight size={24} />
          </span>
        </div>
      </div>

      {/* Product Section */}
      <div className="px-6 md:px-28 mb-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 md:-mt-48 -mt-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 bg-gray-100 hover:scale-105 hover:shadow-lg transition-transform"
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

      {/* View All Button */}
      <div className="flex justify-center items-center mb-9">
        <button className="px-10 md:px-14 py-2 md:py-4 bg-[#DB4444] text-white rounded-md font-medium text-[14px] md:text-[16px] hover:bg-red-500">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
