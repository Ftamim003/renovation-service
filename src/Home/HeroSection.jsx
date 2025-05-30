import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[1080px] bg-[url('/Images/banner.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(18,18,18,0.55)]"></div>

      {/* Content goes on top of the overlay */}
      <div className="relative z-10">
        
        <div className='bg-[rgba(18,18,18,0.55)] backdrop-blur-md'>
         <div className='flex justify-center pt-7'>
         <img src="/public/Images/topImage.png" className='h-20 justify-center' alt="" />
         </div>
          <div className=" flex justify-center">
          <div className="mt-9 mb-5 flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 border border-white text-white rounded transition 
         ${isActive ? ' bg-[rgba(23,40,41,1)]' : 'hover:bg-white/10'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 border border-white text-white rounded transition 
         ${isActive ? 'text-green-400' : 'hover:bg-white/10'}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-4 py-2 border border-white text-white rounded transition 
         ${isActive ? 'text-green-400' : 'hover:bg-white/10'}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-4 py-2 border border-white text-white rounded transition 
         ${isActive ? 'text-green-400' : 'hover:bg-white/10'}`
              }
            >
              Blog
            </NavLink>
          </div>
        </div>
          </div>
      

      <div className="hero h-[700px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Card */}
          <div className="card bg-[rgba(18,18,18,0.24)] w-full max-w-sm shrink-0 shadow-2xl text-white">
            <form className="card-body">
              {/* Full Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input bg-[rgba(18,18,18,0.24)] border border-white text-white placeholder-white"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input bg-[rgba(18,18,18,0.24)] border border-white text-white placeholder-white"
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="input bg-[rgba(18,18,18,0.24)] border border-white text-white placeholder-white"
                  required
                />
              </div>

              {/* Message */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea
                  placeholder="Your Message"
                  className="textarea bg-[rgba(18,18,18,0.24)] border border-white text-white placeholder-white"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn  bg-[rgba(23,40,41,1)] text-white w-full">Submit</button>
              </div>
            </form>
          </div>

          {/* Text content */}
          <div className=" px-6 lg:px-12">
            <h1 className=" font-playfair leading-[70px] text-5xl font-bold text-white">
              Expert kitchen & <br /> bathroom remodeling <br /> services, transforming your space with modern <br /> designs
            </h1>
          </div>
        </div>
      </div>
    </div>
    
</div >

    );
};

export default HeroSection;