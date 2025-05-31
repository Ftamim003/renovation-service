import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='w-full h-[750px] bg-[rgba(23,40,41,1)]'>
            <div>
                <div>
                    <img src="" alt="" />
                </div>

                <div className="bg-[#152821] text-white py-12 px-4 md:px-16 font-sans">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
      <p className="text-gray-300 max-w-2xl mb-8">
        Choose us for our commitment to quality, innovation, and customer
        satisfaction. With a team of experienced professionals, we deliver
        projects on time.
      </p>

      <div className="space-y-6">
        {/* Feature 1 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="bg-[#d9f99d] p-1 rounded-full">
              <CheckCircleIcon className="h-5 w-5 text-[#152821]" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Affordable Price</h3>
            <p className="text-gray-300 text-sm">
              Get top-quality results at an affordable price. We believe in
              delivering exceptional value without compromising on craftsmanship.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="bg-[#d9f99d] p-1 rounded-full">
              <CheckCircleIcon className="h-5 w-5 text-[#152821]" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Unlimited Project</h3>
            <p className="text-gray-300 text-sm">
              Take on unlimited projects with our flexible services tailored to
              your needs. No matter the size or scope, we're here to bring your
              ideas to life.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="bg-[#d9f99d] p-1 rounded-full">
              <CheckCircleIcon className="h-5 w-5 text-[#152821]" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Construction</h3>
            <p className="text-gray-300 text-sm">
              Expert construction services built on quality, precision, and
              reliability. We bring your vision to life with durable, expertly
              crafted structures.
            </p>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;