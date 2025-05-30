import React from 'react';

const PartnerShowcasing = () => {
    return (
        <div className="w-11/12 mx-auto bg-[rgba(242,243,243,1)] relative rounded-lg lg:h-[552px] py-10 px-5 lg:px-16">
  {/* Top Left Image */}
  <img
    className="absolute top-4 left-4 w-16 h-16 lg:w-24 lg:h-24"
    src="/Images/topImage.png"
    alt="Top Logo"
  />

  {/* Content */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 h-full">
    {/* Text Section */}
    <div className="text-center lg:text-left lg:pl-24 lg:pt-32 flex-1">
      <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl">Partner showcasing</h1>
      <p className="font-inter text-sm md:text-base lg:text-lg mt-4 max-w-xl mx-auto lg:mx-0">
        Showcasing expert remodeling with premium granite, marble, and quartz for elegant and durable interiors.
        Transform spaces with superior craftsmanship.
      </p>
    </div>

    {/* Image Section */}
    <div className="pt-10  lg:pr-24 flex-1 flex justify-center">
      <img
        className=" max-w-md  h-[400px] rounded-lg"
        src="/Images/stoneLux.png"
        alt="Showcase"
      />
    </div>
  </div>
</div>

      
    );
};

export default PartnerShowcasing;