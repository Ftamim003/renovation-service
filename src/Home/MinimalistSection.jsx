import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function MinimalistDesign() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
     
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[450px] left-1/2 w-[600px] h-[600px] bg-gray-200 rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

     
      <div className="relative z-10 w-11/12 max-w-6xl mx-auto bg-white shadow-md flex flex-col md:flex-row overflow-hidden">
       
        <div className=" md:w-1/2 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">We Love Minimalism.</h1>
          <p className="mb-6 text-gray-600 max-w-md">
            Dedicated to delivering high-quality kitchen and bathroom renovations with expert craftsmanship and personalized designs.
          </p>
          <div className="space-y-3 text-sm md:text-base">
            <div className="flex items-start gap-2">
              <span className="p-1 w-9 h-9 font-bold border rounded-full"> 1</span>
              <span className=" border-dashed ">
                CUSTOMIZE YOUR PROJECT
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="p-1 w-9 h-9  border rounded-full font-bold">2</span>
              CHAT WITH A PLANNER
            </div>
            <div className="flex items-start gap-2">
              <span className="p-1 w-9 h-9 font-bold border rounded-full">3</span>
              RECEIVE A PERSONALIZED PROPOSAL
            </div>
          </div>
        </div>

        
        <div className="w-full md:w-1/2">
          <img
            src="/public/Images/minimalisticKitchen.jpg"
            alt="Modern Kitchen"
            className="w-[500px] h-[500px] object-cover"
          />
        </div>
      </div>

      
      <div className="ml-36 absolute left-4 top-1/2 -translate-y-1/2 z-20 space-y-6 text-gray-800">
      <div className="w-px h-16 bg-yellow-400 mx-auto mt-2"></div>
        <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
        <FaXTwitter className="hover:text-black cursor-pointer" />
        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        <div className="w-px h-16 bg-yellow-400 mx-auto mt-2"></div>
      </div>
    </div>
  );
}
