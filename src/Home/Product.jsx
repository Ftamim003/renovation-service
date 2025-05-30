import React from 'react';

const Product = () => {
    return (
        <div className='w-full h-56 bg-[rgba(23,40,41,1)]'> 
            <div className='flex justify-center text-[68px] text-white font-playfair'>
                <h1>For products I work with</h1>
            </div>
            <div className='flex justify-center mt-5 gap-48 '>
                <div className='flex gap-5'>
                    <img className='w-8 h-8 rounded-4xl' src="/Images/gs.png" alt="" />
                    <p className='text-white  font-inter'> Gs Granite</p>
                </div>
                <div className='flex gap-5'>
                    <img className='w-8 h-8 rounded-4xl' src="/Images/gs.png" alt="" />
                    <p className='text-white  font-inter'>Tiffany stone</p>
                </div>
                <div className='flex gap-5'>
                    <img className='w-8 h-8 rounded-3xl' src="/Images/maxim.png" alt="" />
                    <p className='text-white  font-inter'>Maxima stone</p>
                </div>
                <div className='flex gap-5'>
                    <img className='w-8 h-8 rounded-2xl' src="/Images/tce.png" alt="" />
                    <p className='text-white'>Tce stone</p>
                </div>
                <div className='flex gap-5'>
                    <img className='w-8 h-8 rounded-4xl' src="/Images/harry.png" alt="" />
                    <p className='text-white  font-inter'>Harry stone</p>
                </div>
            </div>
        </div>
    );
};

export default Product;