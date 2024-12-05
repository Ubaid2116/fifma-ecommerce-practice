import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black py-2 px-10 pt-10 pb-5 overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-center sm:text-left">
        {/* Subscribe Section */}
        <div className="space-y-4">
          <h2 className="text-[24px] font-inter font-bold text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
            Exclusive
          </h2>
          <h2 className="text-[20px] font-poppins font-medium text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
            Subscribe
          </h2>
          <p className="text-[16px] font-normal text-[#FAFAFA] w-[206px] mx-auto sm:mx-0">
            Get 10% off your first order
          </p>
          <div className="flex items-center bg-black text-[#FAFAFA] w-[200px] h-[48px] border border-[#FAFAFA] rounded-md hover:border-[#DB4444] shadow-lg transition duration-300 px-3 mx-auto sm:mx-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[150px] bg-black text-[#FAFAFA] outline-none px-1"
            />
            <AiOutlineSend className="w-[24px] h-[24px] hover:scale-125 transition duration-300" />
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h2 className="text-[20px] font-poppins font-medium text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
            Support
          </h2>
          {[
            "111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.",
            "exclusive@gmail.com",
            "+88015-88888-9999",
          ].map((item, index) => (
            <p
              key={index}
              className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h2 className="text-[20px] font-poppins font-medium text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
            Account
          </h2>
          {["My Account", "Login/Register", "Cart", "Wishlist", "Shop"].map(
            (item, index) => (
              <p
                key={index}
                className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300"
              >
                {item}
              </p>
            )
          )}
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h2 className="text-[20px] font-poppins font-medium text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
            Quick Links
          </h2>
          {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
            (item, index) => (
              <p
                key={index}
                className="text-[16px] font-normal text-[#FAFAFA] hover:text-[#DB4444] transition duration-300"
              >
                {item}
              </p>
            )
          )}
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h2 className="text-[20px] font-poppins font-medium text-[#FAFAFA] hover:text-[#DB4444] transition duration-300">
            Download App
          </h2>
          <p className="text-[14px] font-normal text-[#FAFAFA]">
            Save $3 with App New User Only
          </p>
          <div className="flex justify-center sm:justify-start">
            <Image src="/qr-code.png" alt="QR Code" width={198} height={84} />
          </div>
          {/* Center the social media icons on mobile */}
          <div className="flex justify-center sm:justify-start gap-4 w-[168px] h-[24px] text-[#FAFAFA]">
            {[FiFacebook, CiTwitter, FaInstagram, FiLinkedin].map(
              (Icon, index) => (
                <Icon
                  key={index}
                  className="w-[24px] h-[24px] hover:scale-125 hover:text-[#DB4444] transition duration-300"
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-800 mt-8"></div>

      {/* Copyright Section */}
      <div className="mt-2 text-center text-slate-700 text-[14px]">
        © Rimel 2022. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
