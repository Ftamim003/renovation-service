import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (
        <div
        style={{
            background: "linear-gradient(to left, rgba(8,6,5,1), rgba(148,148,148,3))",
          }}
          
            className="w-full h-[300px]"
        >
            <footer className="footer sm:footer-horizontal  text-base-content p-10 ">
                <aside>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-16 h-16 ' src="/Images/topImage.png " alt="" />
                        <p className='font-poppins text-md text-[rgba(235,235,235,1)] mt-5'>
                            Transform your home or office into a stylish and <br /> comfortable space that reflects your unique taste.
                        </p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title text-white">Useful Links</h6>
                    <a className="link link-hover text-[rgba(235,235,235,1)]">About Us</a>
                    <a className="link link-hover text-[rgba(235,235,235,1)]">Services</a>
                    <a className="link link-hover text-[rgba(235,235,235,1)]">Pricing</a>

                </nav>
                <nav>
                    <h6 className="footer-title text-[rgba(235,235,235,1)]">Support</h6>
                    <a className="link link-hover text-[rgba(235,235,235,1)]">Blog</a>
                    <a className="link link-hover text-[rgba(235,235,235,1)]">Contact</a>

                </nav>
                <nav>
                    <h6 className="footer-title text-[rgba(235,235,235,1)]">Help?</h6>
                    <a className="link link-hover text-[rgba(235,235,235,1)]">Privacy policy</a>

                </nav>

                <nav>
                    <h6 className="footer-title text-[rgba(235,235,235,1)] mb-3">Get in Touch</h6>

                    <p className="flex items-start gap-2 mb-2 text-white">
                        <FaMapMarkerAlt className="mt-1 text-lg" />
                        Domino Street, District <br />456, Los Angeles USA
                    </p>

                    <p className="flex items-center gap-2 mb-2 text-white">
                        <FaPhoneAlt className="text-lg" />
                        +44 652 762 887
                    </p>

                    <p className="flex items-center gap-2 text-white">
                        <FaEnvelope className="text-lg" />
                        hello@mandor.com
                    </p>
                </nav>

                
            </footer>
            <hr />
            <p className='font-poppins text-center mt-3 text-[rgba(217,215,34,1)]'>Copyright ©2025 – Shaw’s Exotic Countrtops– All Rights Reserved.</p>
        </div>
    );
};

export default Footer;