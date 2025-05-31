import React from 'react';

const CompleteProject = () => {
    return (
        <div className='w-full h-[1550px] bg-[rgba(23,40,41,0.05)] mt-20'>
            <div className='pt-12 pr-20 pl-20'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-playfair text-6xl text-[rgba(18,18,18,1)]'>Our Completed Project</h1>
                    <button className='w-36 h-12 rounded-lg bg-[rgba(23,40,41,1)] text-white'>Explore More</button>
                </div>

                <div className='flex gap-7 mt-7'>
                    <div >
                        <img className='w-[600px] h-[650px]' src="/Images/Sink1.png" alt="" />
                    </div>
                    <div >
                        <img className='w-[1110px] h-[650px]' src="/Images/Kitchen1.png" alt="" />
                    </div>
                </div>

                <div className='flex gap-7 mt-7'>
                    
                    <div >
                        <img className='w-[1110px] h-[650px]' src="Images/Kitchen2.png" alt="" />
                    </div>

                    <div >
                        <img className='w-[600px] h-[650px]' src="/Images/Sink2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteProject;