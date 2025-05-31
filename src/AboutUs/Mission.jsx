import React from 'react';

const Mission = () => {
    return (
        <div className='w-5/6 mx-auto justify-center flex gap-20 mt-10'>
            <div className='w-[550px] h-[950px] '>
                <h1 className='font-playfair text-6xl mt-7 mb-7'>Our Mission</h1>
                <p>Our mission is to transform kitchens and bathrooms with innovative designs, quality craftsmanship, and durable materials. We strive to enhance functionality and aesthetics while ensuring a seamless remodeling experience. Customer satisfaction is at the heart of everything we do, from concept to completion. With a focus on innovation and excellence, we create spaces that add value to your home and future.</p>
                <div>
                    <img className='mt-7 w-[550px] h-[600px]' src="/Images/Mission1.jpg" alt="" />
                </div>
            </div>
            <div className='w-[550px] h-[750px]'>
                <div>
                    <img className='w-[550px] h-[600px]' src="/Images/FutureKitchen.jpg" alt="" />
                </div>
                <h1 className='font-playfair text-6xl mt-7 mb-7'>Our Vision</h1>
                <p>Our vision is to be a leading provider of innovative and high-quality kitchen and bathroom remodeling solutions. We aim to redefine modern living by creating stylish, functional, and sustainable spaces. Through cutting-edge design and expert craftsmanship, we strive to exceed customer expectations. Our goal is to build a future where every home reflects comfort, beauty, and lasting value.</p>

            </div>
        </div>
    );
};

export default Mission;