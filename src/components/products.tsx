"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Products = () => {
  const [targetDate, setTargetDate] = useState<number>(0);

  useEffect(() => {
    const calculatedTargetDate =
      new Date().getTime() + 1000 * 60 * 60 * 24 * 10;
    setTargetDate(calculatedTargetDate);
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Carousel Logic
  const products = [
    { id: 1, img: "/product1.png" },
    { id: 2, img: "/product2.png" },
    { id: 3, img: "/product3.png" },
    { id: 4, img: "/product4.png" },
    { id: 5, img: "/product5.png" },
    { id: 6, img: "/product6.png" },
    { id: 7, img: "/product7.png" },
    { id: 8, img: "/product8.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - itemsPerPage : prevIndex - 1
    );
  };

  return (
    <div className="overflow-x-hidden">
      {/* Today's Section */}
      <div className="flex items-center justify-start ml-6 md:ml-28 space-x-4 mb-10 py-16">
        <div className="bg-[#DB4444] w-6 h-12 md:w-8 md:h-16 rounded-xl" />
        <p className="text-[#DB4444] font-semibold text-[14px] md:text-[16px] text-center">
          Today&apos;s
        </p>
      </div>

      {/* Flash Sales Section */}
      <div className="mb-5 md:mb-32 flex flex-col md:flex-row justify-between items-center mx-6 md:mx-28 -mt-20 md:-mt-28">
        <h1 className="text-[28px] md:text-[36px] font-semibold text-center mb-5 md:mb-20 tracking-wider">
          Flash Sales
        </h1>
        <div className="text-[10px] md:text-[12px] font-medium mb-6 md:mb-14 text-black text-center">
          <p>
            <span className="mx-3 md:mx-6">Days</span>
            <span className="mx-3 md:mx-6">Hours</span>
            <span className="mx-3 md:mx-6">Minutes</span>
            <span className="mx-3 md:mx-6">Seconds</span>
          </p>
          <p className="text-[20px] md:text-[32px] font-bold mt-4 md:mt-8 flex items-center justify-center">
            <span className="mx-2 md:mx-3">{timeLeft.days}</span>
            <span className="mx-2 md:mx-3 text-[#DB4444]">:</span>
            <span className="mx-2 md:mx-3">{timeLeft.hours}</span>
            <span className="mx-2 md:mx-3 text-[#DB4444]">:</span>
            <span className="mx-2 md:mx-3">{timeLeft.minutes}</span>
            <span className="mx-2 md:mx-3 text-[#DB4444]">:</span>
            <span className="mx-2 md:mx-3">{timeLeft.seconds}</span>
          </p>
        </div>

        {/* Arrows with icons */}
        <div className="flex items-center space-x-4 pb-20 md:pb-36">
          <span
            className="p-2 bg-gray-100 text-black rounded-full hover:bg-gray-200 cursor-pointer"
            onClick={handlePrev}
          >
            <AiOutlineLeft size={24} />
          </span>
          <span
            className="p-2 bg-gray-100 text-black rounded-full hover:bg-gray-200 cursor-pointer"
            onClick={handleNext}
          >
            <AiOutlineRight size={24} />
          </span>
        </div>
      </div>

      {/* Product Section */}
      <div className="relative overflow-hidden px-6 md:px-28 -mt-20 md:-mt-36 mb-10">
        <div
          className="flex transition-transform duration-500 gap-4 md:gap-8"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex-shrink-0 w-[45%] md:w-1/4 border rounded-lg shadow-lg p-4 bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={product.img}
                alt="product"
                className="rounded-md group-hover:opacity-90 transition-opacity duration-300"
                width={350}
                height={270}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mb-9">
        <button className="px-10 md:px-14 py-2 md:py-4 bg-[#DB4444] text-white rounded-md font-medium text-[14px] md:text-[16px] hover:bg-red-500">
          View All Products
        </button>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mt-4" />
    </div>
  );
};

export default Products;
