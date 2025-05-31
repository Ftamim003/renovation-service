import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="relative h-[190px] ">


            <img
                src="/Images/bgImage.png"
                className=" opacity-15 absolute -ml-5 -top-3 left-0 w-[250px] grayscale -rotate-45 pointer-events-none"
                alt="top left"
            />
            <img
                src="/Images/bgImage.png"
                className=" opacity-10 absolute ml-20 left-0 w-[250px] grayscale pointer-events-none"
                alt="top left"
            />
            <img
                src="/Images/bgImage.png"
                className=" opacity-20 absolute top-0 rotate-[20deg] right-0 w-[250px] grayscale pointer-events-none"
                alt="top right"
            />
            <img
                src="/Images/bgImage.png"
                className="opacity-10 absolute top-0 mr-20 right-0 w-[250px] grayscale pointer-events-none"
                alt="top right"
            />

            
            <div className="relative z-10  bg-white/10">

                
                <div className="flex justify-center pt-7">
                    <img src="Images/topImage.png" className="h-20" alt="" />
                </div>

                
                <div className="flex justify-center">
                    <div className="mt-9 mb-5 flex gap-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-4 py-2 border rounded transition ${isActive
                                    ? 'bg-[rgba(23,40,41,1)] text-white border-white'
                                    : 'text-black border-black hover:bg-white/10'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-4 py-2 border rounded transition ${isActive
                                    ? 'bg-[rgba(23,40,41,1)] text-white border-black'
                                    : 'text-black border-black hover:bg-white/10'
                                }`
                            }
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `px-4 py-2 border rounded transition ${isActive
                                    ? 'text-green-400 border-white'
                                    : 'text-black border-black hover:bg-white/10'
                                }`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                `px-4 py-2 border rounded transition ${isActive
                                    ? 'text-green-400 border-white'
                                    : 'text-black border-black hover:bg-white/10'
                                }`
                            }
                        >
                            Blog
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className=" relative w-full h-[240px] bg-[url('/Images/aboutUs.png')] bg-cover bg-center">
                
                <div className="absolute inset-0 bg-[rgba(18,18,18,0.65)]"></div>

                
                <div className="-mt-1 pt-16 pl-16 relative z-10 flex flex-col h-full text-white">
                    <h1 className="text-5xl font-playfair ">About Us</h1>
                    <p className="text-lg mt-2 font-raleway">Home &gt; About Us</p>
                </div>
            </div>

        </div>


    );
};

export default AboutUs;