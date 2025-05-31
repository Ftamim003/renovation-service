import React from 'react';

const OurWorks = () => {
    return (
        <div className='w-full h-[1000px] bg-[rgba(23,40,41,1)] flex justify-center  p-10 gap-9'>
            <div className='flex flex-col gap-12'>
                <div className='w-[500px]'>
                    <h2 className='font-playfair text-white text-4xl'>Wood Cabinetry & <br />Countertop Options</h2>
                    <p className='text-white font-poppins pt-5'>Explore a wide range of premium wood cabinetry and countertop options designed for durability and style. Choose from rich hardwoods, sleek modern finishes, and natural stone or quartz countertops. Customize your space with high-quality materials that enhance both function and aesthetics.</p>
                </div>
                <div >
                    <img className='rounded-2xl w-[510px] h-[310px]' src="Images/image2.jpg" alt="" />
                </div>
                <div>
                    <h2 className='font-playfair text-4xl text-white mt-48'>High-Quality Materials <br />& Craftsmanship</h2>
                </div>
            </div>
            <div  ><img className='w-[544px] h-[750px] -mt-10' src="/Images/image3.jpg" alt="" /></div>
            <div className='flex flex-col gap-12'>
                <div className='w-[500px]'>
                    <h2 className='font-playfair text-white text-4xl'>Wood Cabinetry & <br />Countertop Options</h2>
                    <p className='text-white font-poppins pt-5'>Explore a wide range of premium wood cabinetry and countertop options designed for durability and style. Choose from rich hardwoods, sleek modern finishes, and natural stone or quartz countertops. Customize your space with high-quality materials that enhance both function and aesthetics.</p>
                </div>
                <div >
                    <img className='rounded-2xl w-[510px] h-[310px]' src="/Images/image1.png" alt="" />
                </div>
                <div>
                    <p className='font-poppins text-white mt-48 w-[500px]'>We use only high-quality materials and expert craftsmanship to create durable, stylish designs. Every detail is carefully crafted for lasting beauty and functionality.</p>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;