import React from 'react';

const Renovation = () => {
    return (
        <div className="w-full h-[426px] bg-[linear-gradient(to_left,_rgba(148,148,148,1),_rgba(8,6,5,1))]">
            <div className='flex justify-center p-16 gap-5'>
                <div className='flex gap-5'>
                    <img className='w-[402px] h-[306px] rounded-lg' src="/public/Images/kitchen-renovation.jpg" alt="" />
                    <div>
                        <h2 className='font-playfair text-[68px] text-white'>Kitchen Renovation</h2>
                        <p className='text-white'>Transform your kitchen with expert renovations, enhancing style, functionality, and efficiency. </p>

                        <p className='mt-3'>
                            <span className="inline-flex items-center justify-center h-8 w-14 text-[60px]   -rotate-45 text-white">
                                {'\u2192'}
                            </span>
                        </p>
                    </div>
                </div>
                <div className='flex gap-3 '>
                    <img className='w-[402px] h-[306px] rounded-lg' src="/public/Images/bathroom-renovation.jpg" alt="" />
                    <div >
                        <h2 className='font-playfair text-[68px] text-white'>Bathroom Renovation</h2>
                        <p className='text-white'>Revamp your bathroom with expert renovations, combining modern design and functionality. </p>
                        <p className='mt-3'>
                            <span className="inline-flex items-center justify-center h-8 w-14 text-[60px]   -rotate-45 text-white">
                                {'\u2192'}
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Renovation;