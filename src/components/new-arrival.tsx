import React from "react";
import Image from "next/image";

const NewArrival = () => {
  return (
    <div className="overflow-x-hidden mb-20">
      {/* Section Title */}
      <div className="flex items-center justify-start ml-6 md:ml-28 space-x-4 mb-10 py-16">
        <div className="bg-[#DB4444] w-6 h-12 md:w-8 md:h-16 rounded-xl" />
        <p className="text-[#DB4444] font-semibold text-[14px] md:text-[16px] text-center">
          Featured
        </p>
      </div>

      {/* New Arrival Title */}
      <h2 className="text-[28px] md:text-[36px] font-semibold mb-12 md:mb-20 tracking-wider ml-28 -mt-20">
        New Arrival
      </h2>

      {/* Image Container - Centered, Adjusted for Mobile View */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0 -mt-10">
        <div className="flex-shrink-0">
          <Image
            src={"/arrival1.png"}
            alt="arrival1"
            height={600}
            width={570}
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src={"/arrival2.png"}
            alt="arrival2"
            height={600}
            width={570}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 md:mt-32 md:mb-16">
        <Image src={"/support.png"} alt="support" width={943} height={161} />
      </div>
    </div>
  );
};

export default NewArrival;
