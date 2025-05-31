import React from 'react';

const FutureDesign = () => {
  return (
    <div className="w-11/12 mx-auto relative font-sans bg-white overflow-hidden">
      {/* Top Section */}
      <div className="p-8 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We Help You to Build Something <br /> For the Future
        </h2>
        <p className="text-gray-600 max-w-xl mb-8">
          We help you create stylish, functional, and long-lasting kitchen and
          bathroom spaces tailored to your needs. Our expert remodeling services
          ensure quality craftsmanship and modern designs for a future-ready home.
        </p>
      </div>

      {/* Overlapping Top Image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-60 md:top-60 z-10 w-5/6">
        <img
          src="/Images/FutureKitchen.jpg"
          alt="Kitchen Top"
          className="rounded shadow-lg w-full h-[450px] object-cover"
        />
      </div>

     
      <div className="w-11/12 mx-auto bg-[#152821] text-white pt-40 md:pt-48 pb-8 md:pb-16 px-8 md:px-16 grid md:grid-cols-2 gap-8 mt-32 md:mt-12">
        {/* Left Images */}
        <div className="space-y-8 flex justify-center w-5/6">
          <img
            src="/Images/FutureSink.jpg"
            alt="Kitchen"
            className="rounded shadow-md w-full h-[550px] object-cover mt-48 ml-3"
          />
        </div>

        
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl font-playfair mb-4">
            We Believe Innovation is The Key to <br /> Building a Better Future
            for Our People.
          </h3>
          <p className="text-gray-300 mb-6 font-raleway">
            We believe innovation is the key to transforming kitchens and
            bathrooms into modern, functional spaces. Our creative designs and
            quality craftsmanship ensure a better future for your home.
          </p>
          <div>
            <p className="font-semibold">Russell Ahmed</p>
            <p className="text-gray-400 text-sm">Founder and CEO Mandor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureDesign;
