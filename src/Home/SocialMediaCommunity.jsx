import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialMediaCommunity = () => {
    return (
        <div className='w-full h-[340px] bg-[rgba(23,40,41,1)] mt-12'>
            <div className='flex flex-col  items-center'>
                <div className='w-[1000px] '>
                    <h1 className='ml-9 font-playfair text-6xl text-white mt-5'>Join Our Social Media Community!</h1>
                    <p className='text-center font-poppins text-white mt-7'>Connect with us on social media for design inspiration, expert tips, and the latest trends in cabinetry and countertops. Share your projects, get advice, and be part of a community that values quality craftsmanship and home improvement. Follow us and start the conversation today!</p>
                    <div className='flex mt-9 gap-16 justify-center text-gray-700 text-lg items-center'>
                        <p className="flex items-center gap-2 font-inter text-xl text-white">
                            <FaFacebookF className="text-blue-600" /> Facebook
                        </p>
                        <p className="flex items-center gap-2 font-inter text-xl text-white">
                            <FaTwitter className="text-sky-400" /> Twitter
                        </p>
                        <p className="flex items-center gap-2 font-inter text-xl text-white">
                            <FaInstagram className="text-pink-500" /> Instagram
                        </p>
                        <p className="flex items-center gap-2 font-inter text-xl text-white">
                            <FaYoutube className="text-red-600" /> YouTube
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SocialMediaCommunity;